# A sufficient condition for differentiability

> [!Lemma]
> A vector valued function $\mathbf{f}=(f_{1}, \dots, f_{m}):\mathbb{R}^{n}\to \mathbb{R}^{m}$ is differentiable at $\mathbf{c}$ iff each $f_{k}$ is differentiable at $c$.
> 
> > [!Proof]-
> > Let $\mathbf{f}$ be differentiable at $\mathbf{c}$. Then,
> > $$
> > \mathbf{f}(\mathbf{c}+\mathbf{v})=\mathbf{f}(\mathbf{c})+\mathbf{f}'(\mathbf{c})(\mathbf{v})+\lVert \mathbf{v} \rVert \mathbf{E}_{\mathbf{c}}(\mathbf{v}),
> > $$
> > where $\mathbf{E}_{\mathbf{c}}(\mathbf{v})\to \mathbf{0}$ as $\mathbf{v}\to \mathbf{0}$. On writing the $m$ component wise equations, we find
> > $$
> > f_{k}(\mathbf{c}+\mathbf{v})=f_{k}(\mathbf{c})+ \nabla f_{k}(\mathbf{c})\cdot \mathbf{v}+\lVert \mathbf{v} \rVert E_{\mathbf{c}, k}(\mathbf{v}),
> > $$
> > where $E_{\mathbf{c}, k}(\mathbf{v})\to 0$ as $\mathbf{v}\to \mathbf{0}$. Thus, $f_{k}$ is differentiable at $\mathbf{c}$, and $f_{k}'(\mathbf{c})=\nabla f_{k}(\mathbf{c})$.
> > 
> > Conversely, if each $f_{k}$ is differentiable at $\mathbf{c}$ with $f'_{k}(\mathbf{c})=\nabla f_{k}(\mathbf{c})$, then the linear transformation given by 
> > $$
> > \begin{align}
> > \mathbf{T}_{\mathbf{c}}(\mathbf{v})=\sum_{k=1}^{m}(\nabla f_{k}(\mathbf{c})\cdot \mathbf{v} )~ \mathbf{e}_{k}
> > \end{align}
> > $$
> > satisfies the first order Taylor formula for $\mathbf{f}$, and hence $\mathbf{f}$ is differentiable at $\mathbf{c}$ with derivative $\mathbf{f}'(\mathbf{c})=\mathbf{T}_{\mathbf{c}}$.
> 

> [!Theorem]
> Assume that one of the partial derivatives $D_{1}\mathbf{f}, \dots, D_{n}\mathbf{f}$ exist at $\mathbf{c}$ and that the remaining $n-1$ partial derivatives exist in some $n$-ball $B(\mathbf{c})$ and are continuous at $\mathbf{c}$. Then $\mathbf{f}$ is differentiable at $\mathbf{c}$.
> 
> > [!Proof]-
> > The existence of $D_{j}\mathbf{f}$ implies the existence of every $D_{j}f_{k}$ and the continuity of $D_{j}\mathbf{f}$ [[LEC ANA1 15#Vector valued functions whose components are continuous|implies]] the continuity of each $D_{j}f_{k}$. Thus, thanks to the preceding lemma, it suffices to prove the theorem when $\mathbf{f}$ is real valued.
> > 
> > WLOG, assume that $D_{1}f(\mathbf{c})$ exists at $\mathbf{c}$ and that $D_{2}f, \dots, D_{n}f$ exist in $B(\mathbf{c})$ and are continuous at $\mathbf{c}$. [[LEC CAL1 16#Total derivatives in terms of partial derivatives|We know]] that if $f$ is differentiable at $\mathbf{c}$, then its derivative is given by the Jacobian matrix, which in this case is the gradient $\nabla f(\mathbf{c})$. Thus, we only have to prove that
> > $$
> > f(\mathbf{c}+\mathbf{v})-f(\mathbf{c})=\nabla f(\mathbf{c})\cdot \mathbf{v}+\lVert \mathbf{v} \rVert E_{\mathbf{c}}(\mathbf{v})
> > $$
> > where $E_{\mathbf{c}}(\mathbf{v})\to 0$ as $\mathbf{v}\to \mathbf{0}$.
> > 
> > Let $\mathbf{v}=\lambda \mathbf{y}$, where $\lVert \mathbf{y} \rVert=1$ and $\lambda=\lVert \mathbf{v} \rVert$. We keep $\lambda$ small enough so that $\mathbf{c}+\mathbf{v}$ lies in the ball $b(\mathbf{c})$ in which the partial derivatives $D_{2}f$, ..., $D_{n}f$ exist. Let $\mathbf{y}=y_{1}\mathbf{e}_{1}+\dots+y_{n}\mathbf{e}_{n}$.
> > 
> > Write $f(\mathbf{c}+\mathbf{v})-f(\mathbf{c})$ as a telescoping sum:
> > $$
> > f(\mathbf{c}+\lambda \mathbf{y})-f(\mathbf{c})=\sum_{k=1}^{n} \{ f(\mathbf{c}+\lambda \mathbf{v}_{k})-f(\mathbf{c}+\lambda \mathbf{v}_{k-1}) \}
> > $$
> > where $\mathbf{v}_{0}=\mathbf{0}$, $\mathbf{v}_{1}=y_{1}\mathbf{e}_{1}$, $\mathbf{v}_{2}=y_{1}\mathbf{e}_{1}+y_{2}\mathbf{e}_{2}$, ..., $\mathbf{v}_{n}=\mathbf{y}$.
> > 
> > The first term in the sum is $f(\mathbf{c}+\lambda y_{1}\mathbf{e}_{1})-f(\mathbf{c})$. Since the two points $\mathbf{c}$ and $\mathbf{c}+\lambda y_{1}\mathbf{e}_{1}$ differ only in the first component, and since $D_{1}f(\mathbf{c})$ exists, we can write
> > $$
> > f(\mathbf{c}+\lambda y_{1}\mathbf{e}_{1})-f(\mathbf{c})=\lambda y_{1}D_{1}f(\mathbf{c})+\lambda y_{1}E_{1}(\lambda),
> > $$
> > where $E_{1}(\lambda)\to 0$ as $\lambda\to 0$.
> > 
> > For $k\geq 2$, the $k$th term in the sum is
> > $$
> > f(\mathbf{c}+\lambda \mathbf{v}_{k-1}+\lambda y_{k}\mathbf{e}_{k})-f(\mathbf{c}+\lambda \mathbf{v}_{k-1})=f(\mathbf{b}_{k}+\lambda y_{k}\mathbf{e}_{k})-f(\mathbf{b}_{k})
> > $$
> > where $\mathbf{b}_{k}=\mathbf{c}+\lambda \mathbf{v}_{k-1}$. We could try to proceed as before: notice that $\mathbf{b}_{k}+\lambda y_{k}\mathbf{e}_{k}$ and $\mathbf{b}_{k}$ differ in only the $k$th component and that $D_{k}f(\mathbf{b}_{k})$ exists, so
> > $$
> > f(\mathbf{b}_{k}+\lambda y_{k}\mathbf{e}_{k})-f(\mathbf{b}_{k})=\lambda y_{k}D_{k}f(\mathbf{b}_{k})+\lambda y_{1}E_{k}'(\lambda)
> > $$
> > where $E'_{k}(\lambda)\to 0$ as $\lambda\to 0$. But this is not helpful; we need $D_{k}f(\mathbf{c})$, not $D_{k}f(\mathbf{b}_{k})$. This is where we use the continuity hypothesis. From the vanilla mean value theorem, we have
> > $$
> > f(\mathbf{b}_{k}+\lambda y_{k}\mathbf{e}_{k})-f(\mathbf{b}_{k})= \lambda y_{k}D_{k}f(\mathbf{a}_{k}),
> > $$
> > where $\mathbf{a}_{k}\in L(\mathbf{b}_{k},\mathbf{b}_{k}+ \lambda y_{k}\mathbf{e}_{k})$. Note that since $\mathbf{b}_{k}\to \mathbf{c}$ as $\lambda\to 0$, $\mathbf{a}_{k}\to \mathbf{c}$ as $\lambda\to 0$. Now, since $D_{k}f$ is continuous at $\mathbf{c}$, 
> > $$
> > D_{k}f(\mathbf{a}_{k})=D_{k}f(\mathbf{c})+E_{k}(\lambda),
> > $$
> > where $E_{k}(\lambda)\to 0$ as $\lambda\to 0$. 
> > 
> > We finally have
> > $$
> > \begin{align}
> > f(\mathbf{c}+\mathbf{v})-f(\mathbf{c}) & =\lambda\sum_{k=1}^{n}  y_{k}D_{k}f(\mathbf{c})+\lambda\sum_{k=1}^{n} y_{k}E_{k}(\lambda). \\
> >  & = \nabla f(\mathbf{c})\cdot \mathbf{v}+\lVert \mathbf{v} \rVert  E(\mathbf{v}),
> > \end{align}
> > $$
> > where
> > $$
> > E(\mathbf{v})=\sum_{k=1}^{n} y_{k}E_{k}(\lVert \mathbf{v} \rVert )\to 0 \text{ as }\mathbf{v} \to 0.
> > $$
> > 
> 

Note that this is not a necessary condition.

---
# A sufficient condition for equality of mixed partial derivatives

> [!Definition]
> $$
> D_{r, k}\mathbf{f}\equiv D_{r}(D_{k}\mathbf{f}).
> $$

> [!Theorem]
> If both partial derivatives $D_{r}\mathbf{f}$ and $D_{k}\mathbf{f}$ exist in an $n$-ball $B_{\delta}(\mathbf{c})$ and if both are differentiable at $\mathbf{c}$, then
> $$
> D_{r, k}\mathbf{f}(\mathbf{c})=D_{k, r}\mathbf{f}(\mathbf{c}).
> $$

> **Proof**
> In light of the previous [[#A sufficient condition for differentiability|lemma]], it is sufficient to prove the theorem for real valued $\mathbf{f}$. Also, since only two components are involved, it suffices to consider the case $n=2$. Assume $\mathbf{c}=(0, 0)$; the same argument can be repeated for arbitrary $\mathbf{c}$.
> 
> Choose $h\ne 0$ so that the square with vertices $(0, 0), (h, 0), (h, h)$, and $(0, h)$ lies in the $2$-ball $B_{\delta}(\mathbf{0})$. Consider the quantity
> $$
> \Delta h=f(h, h)+f(0, 0)-f(h, 0)-f(0, h).
> $$
> We will show that $\lim_{ h \to 0 }\Delta h/h^{2}$ is equal to both $D_{2, 1}f(\mathbf{0})$ and $D_{1, 2}f(\mathbf{0})$.
> 
> Define $G(x)=f(x, h)-f(x, 0)$ and note that 
> $$
> \Delta h=G(h)-G(0).
> $$
> The existence of $D_{1}f$ in $L((0, h), (h, h))$ implies the differentiability of the map $x\mapsto f(x, h)$ on $[0, h]$. Similarly, the map $x\mapsto(x, 0)$ is differentiable on $[0, h]$. It follows that $G(x)$ is differentiable on $[0, h]$. From the one-dimensional mean value theorem, we have
> $$
> G(h)-G(0)=hG'(x_{1})=h\{ D_{1}f(x_{1}, h)-D_{1}f(x_{1}, 0) \},
> $$
> where $x_{1}\in(0, h)$. Since $D_{1}f$ is differentiable at $(0, 0)$, we have the first order Taylor formulas
> $$
> \begin{align}
> D_{1}f(x_{1}, h) & =D_{1}f(0, 0)+\nabla D_{1}f(0, 0)\cdot(x_{1}, h)+\sqrt{ x_{1}^{2}+h^{2} }~E_{1}(h) \\
>  & =D_{1}f(0, 0)+D_{1, 1}f(0, 0)x_{1}+D_{2, 1}f(0, 0)h+\sqrt{ x_{1}^{2}+h^{2} }~E_{1}(h),
> \end{align}
> $$
> and
> $$
> \begin{align}
> D_{1}f(x_{1}, 0) & =D_{1}f(0, 0)+\nabla D_{1}f(0, 0)\cdot(x_{1}, 0)+|x_{1}|E_{2}(h) \\
>  & =D_{1}f(0, 0)+D_{1, 1}f(0, 0)x_{1}+|x_{1}|E_{2}(h),
> \end{align}
> $$
> where $E_{1}(h)\to 0$ and $E_{2}(h)\to 0$ as $h\to 0$. So, 
> $$
> \begin{align}
> \Delta h=h^{2}D_{2, 1}f(0, 0)+E(h),
> \end{align}
> $$
> where $E(h)\equiv h\sqrt{ x_{1}^{2}+h^{2} }~E_{1}(h)-h|x_{1}|E_{2}(h)$. Since $|x_{1}|\leq h$, 
> $$
> 0\leq |E(h)|\leq h^{2}\sqrt{ 2 }|E_{1}(h)|+h^{2}|E_{2}(h)|,
> $$
> so
> $$
> \lim_{ h \to 0 } \frac{\Delta h}{h^{2}}=D_{2, 1}f(0, 0).
> $$
> Next, define $H(x)=f(h, x)-f(0, x)$ and note that $\Delta h=H(h)-H(0)$. The same procedure yields $\lim_{ h \to 0 }\Delta h/h^{2}=D_{1, 2}f(0, 0)$. 

> [!Theorem] Corollary
> If both partial derivatives $D_{r, k}\mathbf{f}$ and $D_{k, r}\mathbf{f}$ exist in an $n$-ball $B(\mathbf{c})$ and if both $D_{r, k}\mathbf{f}$ and $D_{k, r}\mathbf{f}$ are continuous at $\mathbf{c}$, then
> $$
> D_{r, k}\mathbf{f}(\mathbf{c})=D_{k, r}\mathbf{f}(\mathbf{c}).
> $$

As in the previous theorem, it suffices to prove this when $n=2$ and $\mathbf{f}$ is real valued. The proof is very similar to the previous one; use a second application of MVT.

![[Pasted image 20250420013131.png]]