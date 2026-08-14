---
id: "190"
date: January 2025
---

# Functions with non-zero Jacobian determinant

See @apostolMathematicalAnalysis1985 [p. 369]
###### Theorem 1
> [!Theorem]
> Let $B=B_{r}(\mathbf{a})\subseteq \mathbb{R}^{n}$, and let $\mathbf{f}$ be a mapping of $\overline{B}$ into $\mathbb{R}^{n}$. Assume:
> 1. $\mathbf{f}$ is continuous on $\overline{B}$;
> 2. all partial derivatives $D_{j}f_{i}(\mathbf{x})$ exist in $B$;
> 3. $\mathbf{f}(\mathbf{x})\ne \mathbf{f}(\mathbf{a})$ for all $\mathbf{x}\in \overline{B}\setminus B$;
> 4. $\mathbf{f}'(\mathbf{x})$ is invertible for all $\mathbf{x}\in B$.
> 
> Then, $\mathbf{f}(B)$ contains a neighborhood of $\mathbf{f}(\mathbf{a})$.
> 
> > [!Proof]-
> > 
> > Let $\partial B$ denote the boundary $\overline{B}\setminus B$ of the ball $B$. 
> > 
> > Define $g$ on $\partial B$ by $g(\mathbf{x})=\lVert \mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{a}) \rVert$. Observe that $g$ is continuous. Since $\partial B$ is compact, the follows from the extreme value theorem that $g$ attains a minimum value $m$ on $\partial B$. $m> 0$ by hypothesis. 
> > 
> > Let $T\equiv B_{m/2}(\mathbf{f}(\mathbf{a}))$. We will show that $T\subseteq f(B)$. Let $\mathbf{y}\in T$. Define $h$ on $\overline{B}$ by
> > $$
> > h(\mathbf{x})=\lVert \mathbf{f}(\mathbf{x})-\mathbf{y} \rVert .
> > $$
> > Again, $h$ is continuous on a compact set, and hence attains a minimum value. Note that $h(\mathbf{a})<m/2$. Thus, the minimum value of $h$ must also be less than $m/2$. For any $\mathbf{x}\in \partial B$,
> > $$
> > \begin{align}
> > \lVert \mathbf{f}(\mathbf{x})-\mathbf{y} \rVert  & \geq  \lVert \mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{a}) \rVert -\lVert \mathbf{f}(\mathbf{a})-\mathbf{y} \rVert    
> >   \geq m -\frac{m}{2} 
> >   =\frac{m}{2}.
> > \end{align}
> > $$
> > Thus, $h$ must attain its minimum at a point $\mathbf{c}\in B$. 
> > 
> > At this point $h^{2}$ also has a minimum. Since
> > $$
> > \begin{align}
> > h^{2}(\mathbf{x})=\lVert \mathbf{f}(\mathbf{x})-\mathbf{y} \rVert ^{2}=\sum_{i=1}^{n} (f_{i}(\mathbf{x})-y_{i})^{2},
> > \end{align}
> > $$
> > and since each partial derivative $D_{k}(h^{2})$ must be zero at $\mathbf{c}$, we have
> > $$
> > \begin{align}
> > \sum_{i=1}^{n} (f_{i}(\mathbf{c})-y_{i})D_{j}f_{i}(\mathbf{c})=0\quad\text{ for }j=1, \dots, n.
> > \end{align}
> > $$
> > This is equivalent to the matrix equation
> > $$
> > \mathbf{D}\mathbf{f}(\mathbf{c})(\mathbf{f}(\mathbf{c})-\mathbf{y})=\mathbf{0}.
> > $$
> > Since $\det \mathbf{D}\mathbf{f}(\mathbf{c})\ne 0$, it follows that $\mathbf{f}(\mathbf{c})=\mathbf{y}$. Therefore, $\mathbf{y}\in \mathbf{f}(B)$.
> 
###### Theorem 2
> [!Theorem]
> Let $\mathbf{f}$ be a mapping of an open set $A\subseteq \mathbb{R}^{n}$ into $\mathbb{R}^{n}$. Assume:
> 1. $\mathbf{f}$ is continuous on $A$ and all partial derivatives $D_{j}f_{i}$ exist on $A$;
> 2. $\mathbf{f}$ is injective on $A$;
> 3. $\mathbf{f}'(\mathbf{x})$ is invertible for every $\mathbf{x}\in A$,
> 
> Then $\mathbf{f}$ is an open mapping on $A$.
> 
> > [!Proof]-
> > 
> > Let $E\subseteq A$ be open. If $\mathbf{b}\in \mathbf{f}(E)$, then $\mathbf{b}=\mathbf{f}(\mathbf{a})$ for some $\mathbf{a}\in E$. There is a ball $B_{r}(\mathbf{a})\subseteq E$ on which $\mathbf{f}$ satisfies the hypotheses of [[#Theorem 1]]. Thus, $\mathbf{f}(E)$ contains a neighborhood of $\mathbf{b}$.
> 
###### Theorem 3
> [!Theorem]
> Let $\mathbf{f}$ be a mapping of an open set $S\subseteq \mathbb{R}^{n}$ into $\mathbb{R}^{n}$. Assume:
> 1. $\mathbf{f}$ is a $C^{1}$ mapping on $S$;
> 2. $\mathbf{f}'(\mathbf{a})$ is invertible for some $\mathbf{a}\in S$. 
> 
> Then there is an $n$-ball $B(\mathbf{a})$ on which $\mathbf{f}$ is injective.
> 
> > [!Proof 1]-
> > 
> > Let $\mathbf{Z}_{1}, \dots, \mathbf{Z}_{n}$ be $n$ points in $S$ and let $\mathbf{Z}\equiv(\mathbf{Z}_{1};\dots;\mathbf{Z}_{n})$ denote the points in $\mathbb{R}^{n^{2}}$ whose first $n$ components are the components of $\mathbf{Z}_{1}$, whose next $n$ components are the components of $\mathbf{Z}_{2}$, and so on. Define a real valued function $h$ as follows:
> > $$
> > h(\mathbf{Z})=\det[D_{j}f_{i}(\mathbf{Z}_{i})].
> > $$
> > Note that $h$ is defined on $S^{n}$ and continuous on $S^{n}$, because each $D_{j}f_{i}$ is continuous on $S$ and a determinant is a polynomial in the entries of the matrix. Let $\mathbf{Z}$ be the special point in $\mathbb{R}^{n^{2}}$ obtained by putting
> > $$
> > \mathbf{Z}_{1}=\mathbf{Z}_{2}=\dots=\mathbf{Z}_{n}=\mathbf{a}.
> > $$
> > Then $h(\mathbf{Z})=\det\mathbf{D}\mathbf{f}(\mathbf{a})\ne 0$, and hence, by continuity, there is some $B_{\delta}(\mathbf{Z})\subseteq \mathbb{R}^{n^{2}}$ such that $\mathbf{W}\in B(\mathbf{Z})$ implies $h(\mathbf{W})\ne 0$. Now, If $\mathbf{W}_{1}... ,\mathbf{W}_{n}\in B(\mathbf{a})\equiv B_{\delta/\sqrt{ n }}(\mathbf{a})$,
> > $$
> > \begin{align}
> > \lVert \mathbf{W}-\mathbf{Z} \rVert & =\sqrt{ \lVert \mathbf{W}_{1}-\mathbf{Z}_{1} \rVert^{2} +\dots+\lVert \mathbf{W}_{n}-\mathbf{Z}_{n} \rVert ^{2} } \\
> >  & =\sqrt{ \lVert \mathbf{W}_{1}-\mathbf{a} \rVert^{2} +\dots+\lVert \mathbf{W}_{n}-\mathbf{a} \rVert^{2}  } \\
> >  & \leq\delta,
> > \end{align}
> > $$
> > so $\mathbf{W}\in B(\mathbf{Z})$. So, $\mathbf{W}_{1}... ,\mathbf{W}_{n}\in B(\mathbf{a})$ implies $\det[D_{j}f_{i}(\mathbf{W}_{i})]\ne 0$.
> > 
> > We will prove that $\mathbf{f}$ is injective on $B(\mathbf{a})$. Assume the contrary, that is, assume $\mathbf{f}(\mathbf{x})=\mathbf{f}(\mathbf{y})$ for some $\mathbf{x}\ne \mathbf{y}\in B(\mathbf{a})$. Since $B(\mathbf{a})$ is convex, $L(\mathbf{x}, \mathbf{y})\subseteq B(\mathbf{a})$, and we can apply the [[LEC CAL1 18#The mean value theorem|mean value theorem]] (recall that $\mathbf{f}$ is differentiable on $S$) to write for every $\boldsymbol{\alpha}\in \mathbb{R}^{n}$,
> > $$
> > \begin{align}
> > \mathbf{0}=\boldsymbol{\alpha}\cdot (\mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x})) & =\boldsymbol{\alpha}\cdot(\mathbf{f}'(\mathbf{z})(\mathbf{y}-\mathbf{x}))
> > \end{align}
> > $$
> > for some $\mathbf{z}\in L(\mathbf{x}, \mathbf{y})$. Taking $\boldsymbol{\alpha}=\mathbf{e}_{1}, \dots, \mathbf{e}_{n}$, we get the equations
> > $$
> > 0=\nabla f_{i}(\mathbf{Z}_{i})\cdot(\mathbf{y}-\mathbf{x})\quad\text{ for }i=1, \dots, n,
> > $$
> > where each $\mathbf{Z}_{i}\in L(\mathbf{x}, \mathbf{y})\subseteq B(\mathbf{a})$. This is equivalent to writing
> > $$
> > \begin{bmatrix}
> > \nabla f_{1}(\mathbf{Z}_{1}) \\
> > \vdots \\
> > \nabla f_{n}(\mathbf{Z}_{n})
> > \end{bmatrix}
> > (\mathbf{y}-\mathbf{x})=\mathbf{0}
> > $$
> > or
> > $$
> > [D_{j}f_{i}(\mathbf{Z}_{i})](\mathbf{y}-\mathbf{x})=\mathbf{0}.
> > $$
> > However, $\det[D_{j}f_{i}(\mathbf{Z}_{i})]\ne 0$, which is a contradiction.
> 
> > [!Proof 2]-
> > 
> > Define $A\equiv \mathbf{f}'(\mathbf{a})$, and choose $\lambda$ so that $2\lambda \lVert A^{-1} \rVert=1$.
> > Since $\mathbf{f}'$ is continuous at $\mathbf{a}$, there is an open ball $U\subseteq E$, with center $\mathbf{a}$, such that
> > $$
> > \lVert \mathbf{f}'(\mathbf{x})-A \rVert <\lambda\quad(\mathbf{x}\in U).
> > $$
> > We associate to each $\mathbf{y}\in \mathbb{R}^{n}$ a function $\varphi$, defined by
> > $$
> > \varphi(\mathbf{x})=\mathbf{x}+A^{-1}(\mathbf{y}-\mathbf{f}(\mathbf{x}))\quad(\mathbf{x}\in E).
> > $$
> > Note that $\mathbf{f}(\mathbf{x})=\mathbf{y}$ iff $\mathbf{x}$ is a fixed point of $\varphi$. 
> > 
> > Since $\varphi'(\mathbf{x})=I-A^{-1}(\mathbf{f}'(\mathbf{x}))=A^{-1}(A-\mathbf{f}'(\mathbf{x}))$, we have for $\mathbf{x}\in U$:
> > $$
> > \begin{align}
> > \lVert \varphi'(\mathbf{x}) \rVert  & =\lVert A^{-1}(A-\mathbf{f}'(\mathbf{x})) \rVert  \\
> >  & \leq \lVert A^{-1} \rVert \lVert A-\mathbf{f}'(\mathbf{x}) \rVert  \\
> >  & < \frac{1}{2} \quad (\mathbf{x}\in U). 
> > \end{align}
> > $$
> > Using the first result from [[LEC CAL1 18#Functions with bounded and zero total derivative|here]],
> > $$
> > \lVert \varphi(\mathbf{x}_{1})-\varphi(\mathbf{x}_{2}) \rVert \leq \frac{1}{2}\lVert \mathbf{x}_{1} -\mathbf{x}_{2}\rVert\quad (\mathbf{x}_{1}, \mathbf{x}_{2}\in U).
> > $$
> > It follows that $\varphi$ cannot have more than one fixed point (Note that this does not require the Banach contraction principle; assuming the existence of two fixed points easily yields a contradiction). Thus, $\mathbf{f}(\mathbf{x})=\mathbf{y}$ for at most one $\mathbf{x}\in U$. Thus, $\mathbf{f}$ is injective in $U$.
> 
> 
###### Theorem 4
> [!Theorem]
> Let $\mathbf{f}$ be a mapping of an open set $A\subseteq \mathbb{R}^{n}$ into $\mathbb{R}^{n}$. Assume:
> 1. $\mathbf{f}$ is a $C^{1}$ mapping on $A$;
> 2. $\mathbf{f}'(\mathbf{x})$ is invertible for all $\mathbf{x}\in A$.
> 
> Then $\mathbf{f}$ is an open mapping on $A$.
> 
> > [!Proof]-
> > Let $S$ be any open subset of $A$. If $\mathbf{x}\in S$ there is a ball $B(\mathbf{x})\subseteq S$ in which $\mathbf{f}$ is injective by [[#Theorem 3]]. By [[#Theorem 2]], $\mathbf{f}(B(\mathbf{x}))$ is open in $\mathbb{R}^{n}$. But we can write $S=\bigcup_{\mathbf{x}\in S}B(\mathbf{x})$. Applying $\mathbf{f}$ on both sides, we find $\mathbf{f}(S)=\bigcup_{\mathbf{x}\in S}\mathbf{f}(B(\mathbf{x}))$, so $\mathbf{f}(S)$ is open.
> 

The hypotheses made in this corollary ensure that each point $\mathbf{x}\in E$ has a neighborhood in which $\mathbf{f}$ is injective. This may be expressed by saying that $\mathbf{f}$ is locally injective in $E$. But this does not imply that $\mathbf{f}$ is injective on $E$!

---
# Inverse function theorem

The inverse function theorem roughly states that a [[LEC CAL1 16#When does the total derivative exist?|continuously differentiable]] mapping $\mathbf{f}$ is a $C^{1}$ diffeomorphism in a neighborhood of any $\mathbf{a}$ at which $\mathbf{f}'(\mathbf{a})$ is invertible.

Here's the one variable version:

> [!Example]
> Suppose $f$ is a $C^{1}$ mapping of an interval $(\alpha, \beta)$ into $\mathbb{R}$, and $f'(a)$ is nonzero for some $a\in(\alpha, \beta)$. Then,
> 1. there exist open sets $U\subseteq(\alpha, \beta)$ and $V\subseteq \mathbb{R}$ such that $a\in U$, $f(a)\in V$, $f$ is injective on $U$, and $f(U)=V$.
> 2. the inverse $g$ of $f$, defined in $V$ by $g(f(x))=x$ for $x\in U$, is a $C^{1}$ mapping.
> 
> > [!Proof]-
> > Since $f'$ is continuous at $a$, we can pick a neighborhood $U$ of $a$ on which $f'$ is non-zero. Let $V=f(U)$.  is open since strictly monotone continuous maps are open. $f$ is monotone on $U$, so $f$ is injective on $U$. $f^{-1}$ is clearly continuous, so $f$ is a $C^{1}$ homeomorphism. By @pughRealMathematicalAnalysis2015 4.15, we are done.
> 

> [!Theorem] Inverse function theorem, @rudinPrinciplesMathematicalAnalysis1976 9.24
> Suppose $\mathbf{f}$ is a $C^{1}$ mapping of an open set $E\subseteq \mathbb{R}^{n}$ into $\mathbb{R}^{n}$, and $\mathbf{f}'(\mathbf{a})$ is invertible for some $\mathbf{a}\in E$. Then,
> 1. there exist open sets $U$ and $V$ in $\mathbb{R}^{n}$ such that $\mathbf{a}\in U$, $\mathbf{f}(\mathbf{a})\in V$, $\mathbf{f}$ is injective on $U$, and $\mathbf{f}(U)=V$;
> 2. the inverse $\mathbf{g}$ of $\mathbf{f}$ (which exists by the previous point), defined in $V$ by $\mathbf{g}(\mathbf{f}(\mathbf{x}))=\mathbf{x}$ for $\mathbf{x}\in U$, is a $C^{1}$ mapping, with its derivative given by $\mathbf{g}'(\mathbf{y})=\mathbf{f}'(\mathbf{g}(\mathbf{y}))^{-1}$ for $\mathbf{y}\in V$.

^e75cec


**Proof:**
Put $\mathbf{f}'(\mathbf{a})=A$, and let 
$$
\lambda=\frac{1}{2\lVert A^{-1} \rVert}.
$$

^f4c340

Since $\mathbf{f}'$ is continuous at $\mathbf{a}$, there is an open ball $U\subset E$ with center $\mathbf{a}$ such that
$$
\lVert \mathbf{f}'(\mathbf{x})-A \rVert<\lambda\quad \quad (\mathbf{x}\in U).
$$

^f8852a

**$f|_{U}$ is an injection**

Associate with each $\mathbf{y}\in \mathbb{R}^{n}$ a function $\varphi_{\mathbf{y}}$, defined by
$$
\varphi_{\mathbf{y}}(\mathbf{x})=\mathbf{x}+A^{-1}(\mathbf{y}-\mathbf{f}(\mathbf{x}))\quad \quad (\mathbf{x}\in E).
$$
Note that $\mathbf{f}(\mathbf{x})=\mathbf{y}$ iff $\mathbf{x}$ is a fixed point of $\varphi_{\mathbf{y}}$. 

$\varphi'_{\mathbf{y}}(\mathbf{x})=I-A^{-1}\mathbf{f}'(\mathbf{x})=A^{-1}(A-\mathbf{f}'(\mathbf{x}))$. By [[#^f8852a]],
$$
\begin{align}
\lVert \varphi_{\mathbf{y}}' (\mathbf{x})\rVert \leq \lVert A^{-1} \rVert \lVert A-\mathbf{f}'(\mathbf{x}) \rVert < \frac{1}{2}\quad \quad (\mathbf{x}\in U).
\end{align}
$$
Applying the [[LEC CAL1 18#^fb4aaf|mean value theorem]] yields
$$
\begin{align}
|\varphi_{\mathbf{y}}(\mathbf{x}_{1})-\varphi_{\mathbf{y}}(\mathbf{x}_{2})|\leq\frac{1}{2}|\mathbf{x}_{1}-\mathbf{x}_{2}|\quad \quad (\mathbf{x}_{1}, \mathbf{x}_{2}\in U).
\end{align}
$$

^36ae5d

It follows that $\varphi_{\mathbf{y}}$ has at most one fixed point in $U$, so $\mathbf{f}(\mathbf{x})=\mathbf{y}$ for at most one $\mathbf{x}\in U$. 

**$f(U)$ is open in $\mathbb{R}^{n}$**

Let $V=\mathbf{f}(U)$. Pick $\mathbf{y}_{0}\in V$. Then $\mathbf{y}_{0}=\mathbf{f}(\mathbf{x}_{0})$ for some $\mathbf{x}_{0}\in U$. Let $B=B_{r}(\mathbf{x}_{0})$ be such that $\overline{B_{r}(\mathbf{x}_{0})}\subset U$. We will show that $B_{\lambda r}(\mathbf{y}_{0})\subset V$.

Let $\mathbf{y}\in B_{\lambda r}(\mathbf{y}_{0})$. 
$$
\begin{align}
|\varphi_{\mathbf{y}}(\mathbf{x}_{0})-\mathbf{x}_{0}|=|A^{-1}(\mathbf{y}-\mathbf{y}_{0})|< \lVert A^{-1} \rVert \lambda r=\frac{r}{2}.
\end{align}
$$

^a8c43d

If $\mathbf{x}\in \overline{B}$, by [[#^36ae5d]] and [[#^a8c43d]], 
$$
\begin{align}
|\varphi_{\mathbf{y}}(\mathbf{x})-\mathbf{x}_{0}| & \leq |\varphi_{\mathbf{y}}(\mathbf{x})-\varphi_{\mathbf{y}} (\mathbf{x}_{0})|+|\varphi_{\mathbf{y}}(\mathbf{x}_{0})-\mathbf{x}_{0}| \\
 & <\frac{1}{2}|\mathbf{x}-\mathbf{x}_{0}|+\frac{r}{2} \leq r;
\end{align}
$$
hence $\varphi_{\mathbf{y}}(\mathbf{x})\in B$. 

Thus $\varphi_{\mathbf{y}}$ is a contraction of $\overline{B}$ into $\overline{B}$. Being a closed subset of $\mathbb{R}^{n}$, $\overline{B}$ is complete. By the [[LEC CAL1 10#^e6644a|Banach contraction principle]], $\varphi_{\mathbf{y}}$ has a unique fixed point $\mathbf{x}\in \overline{B}$, for which we must have $\mathbf{f}(\mathbf{x})=\mathbf{y}$. Thus $\mathbf{y}\in \mathbf{f}(\overline{B})\subset \mathbf{f}(U)=V$.

**$\mathbf{g}$ is a $C^{1}$ mapping**

Let $\mathbf{y}, \mathbf{y}+\mathbf{k}\in V$. There exist $\mathbf{x}, \mathbf{x}+\mathbf{h}\in U$ such that $\mathbf{y}=\mathbf{f}(\mathbf{x})$, $\mathbf{y}+\mathbf{k}=f(\mathbf{x}+\mathbf{h})$.
$$
\begin{align}
\varphi_{\mathbf{y}}(\mathbf{x}+\mathbf{h})-\varphi_{\mathbf{y}}(\mathbf{x})=\mathbf{h}+A^{-1}[\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{x}+\mathbf{h})]=\mathbf{h}-A^{-1}\mathbf{k}.
\end{align}
$$
By [[#^36ae5d]], $|\mathbf{h}-A^{-1}\mathbf{k}|\leq |\mathbf{h}|/2$. Hence $|A^{-1}\mathbf{k}|\geq |\mathbf{h}|/2$ and
$$
|\mathbf{h}|\leq 2\lVert A^{-1} \rVert |\mathbf{k}|=\lambda ^{-1}|\mathbf{k}|.
$$

^ccd2d7

Next, note that by [[#^f4c340]], [[#^f8852a]], and [[LEC CAL1 3#^a7608b]], $\mathbf{f}'(\mathbf{x})$ has an inverse, say $T$. We will show that $T$ is $\mathbf{g}'(\mathbf{y})$. Since
$$
\begin{align}
\mathbf{g}(\mathbf{y}+\mathbf{k})-\mathbf{g}(\mathbf{y})-T\mathbf{k} & =\mathbf{h}-T\mathbf{k} \\
 & =-T[\mathbf{f}(\mathbf{x}+\mathbf{h})-\mathbf{f}(\mathbf{x})-\mathbf{f}'(\mathbf{x})\mathbf{h}],
\end{align}
$$
[[#^ccd2d7]] implies 
$$
\begin{align}
\frac{|\mathbf{g}(\mathbf{y}+\mathbf{k})-\mathbf{g}(\mathbf{y})-T\mathbf{k}|}{|\mathbf{k}|}\leq \frac{\lVert T \rVert }{\lambda}\frac{|\mathbf{f}(\mathbf{x}+\mathbf{h})-\mathbf{f}(\mathbf{x})-\mathbf{f}'(\mathbf{x})\mathbf{h}|}{|\mathbf{h}|}.
\end{align}
$$
As $\mathbf{k}\to 0$, $\mathbf{h}\to 0$ by [[#^ccd2d7]]. Thus, the right side of the inequality tends to $0$ as $\mathbf{k}\to 0$. Hence the same is true of the left. By the [[LEC CAL1 16#^054571|Definition of the derivative]], we have proven that 
$$
\mathbf{g}'(\mathbf{y})=T=\mathbf{f}'(\mathbf{x})^{-1}=\mathbf{f}'(\mathbf{g}(\mathbf{y}))^{-1}\quad \quad (\mathbf{y}\in V).
$$

Since $\mathbf{g}$ is differentiable on $V$, it is continuous on $V$. If we denote the set of all invertible elements of $\mathcal{L}(\mathbb{R}^{n})$ by $\Omega$, $\mathbf{f}':U\to \Omega$ is continuous, and the inversion map $\Omega\to \Omega$ is also continuous by [[LEC CAL1 3#^a7608b]]. Thus, $\mathbf{g}'$ is continuous, and $g$ is $C^{1}$.



> [!Corollary]
> If $\mathbf{f}$ is a $C^{1}$ mapping of an open set $E\subset \mathbb{R}^{n}$ into $\mathbb{R}^{n}$ and if $\mathbf{f}'(\mathbf{x})$ is invertible for every $\mathbf{x}\in E$, then $\mathbf{f}(W)$ is an open subset of $\mathbb{R}^{n}$ for every open set $W\subset E$. In other words, $\mathbf{f}$ is an open mapping of $E$ into $\mathbb{R}^{n}$.

