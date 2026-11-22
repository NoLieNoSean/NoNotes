---
id: "614"
date: 2026-11-02
time: 15:33
tags:
  - GANA1
  - Lecture
desc: Holder's and Minkowski's inequalities
---
# $L^{p}$ spaces

![[LEC GANA1 7#^8c70d7]]


## $L^{2}$ - a special case

$L^{2}$ is special because it is an inner product space, and the Minkowski inequality can be derived from the Cauchy-Schwarz inequality. 

Let $f, g\in L^{2}(X, \mathcal{F}, \mu; \mathbb{C})$. Pointwise, we have
$$
2|f(x)||g(x)|\leqslant |f(x)|^{2}+|g(x)|^{2}.
$$
Integrating both sides using monotonicity and additivity of the integral ([[LEC GANA1 6#^83841c]]), 
$$
\begin{align}
2\int_{X}|fg|\,d\mu & \leqslant  \int_{X}(|f|^{2}+|g|^{2})\,d\mu \\
 & \leqslant \int_{X}|f|^{2}\,d\mu+\int_{X}|g|^{2}\,d\mu \\
 & < \infty.
\end{align}
$$
Hence, $f\overline{g}\in L^{1}$. We can therefore define

> [!Definition]
> For $f, g\in L^{2}(X, \mathcal{F}, \mu;\mathbb{C})$, define
> $$
> \langle f, g \rangle :=\int_{X} f\overline{g}\,d\mu.
> $$
> 

It is clear that $\langle ,  \rangle$ is an inner product on $L^{2}$. 

> [!Remark]
> The [[LEC GANA1 14#^70ae36|Cauchy-Schwarz inequality]] reads
> $$
> \left| \int f\overline{g} \right| \leqslant \left( \int |f|^{2} \right)^{1/2}\left( \int |g|^{2} \right)^{1/2}.
> $$
> Note that if $f, g\in L^{2}$, we have $|f|, |g|\in L^{2}$. Applying the C-S inequality to $|f|, |g|$, we get
> $$
> \int |f||g|\leqslant  \left( \int |f|^{2} \right)^{1/2}\left( \int |g|^{2} \right)^{1/2},
> $$
> so $fg\in L^{1}$. 

^d01098

[[LEC GANA1 14#^0b76b1|As we have seen]], the C-S inequality yields the triangle inequality:
$$
\lVert f +g\rVert_{2}\leqslant \lVert f \rVert _{2}+\lVert g \rVert _{2}.
$$
## $L^{p}$ for $p\ne 2$

These are not inner product spaces, so we have to take a different route to establishing the Minkowski inequality. 


> [!Recall]
> - Convex and concave functions [[LEC CAL1 13#^04887b]].
> - Young's inequality [[Holder's inequality#^d28629]].

> [!Theorem] Hölder's inequality
> Let $p,q \in [1, \infty)$ be such that $\frac{1}{p}+\frac{1}{q}=1$. Then for $f \in \tilde{\mathcal{L}}_{p}(X), g \in \tilde{\mathcal{L}}_{q}(X)$, $fg$ and $\lVert fg \rVert_{1}\leq \lVert f \rVert_{p} \cdot \lVert g \rVert_{q}$.
> > [!Proof]-
> > WLOG, $\lVert f \rVert_{p}=\lVert g \rVert_{q}=1$.
> > By [[Holder's inequality#^d28629|Young's inequality]], $\forall x$,
> > $$
> > \lvert f(x) \rvert \cdot  \lvert g(x) \rvert \leq \frac{1}{p}\lvert f(x) \rvert ^{p}+\frac{1}{q}\lvert g(x) \rvert ^{q}
> > $$
> > This implies,
> > $$
> > \int_{X}\lvert f(x) \rvert \lvert g(x) \rvert d \mu \leq \frac{1}{p} \int_{X}\lvert f(x) \rvert ^{p}d \mu + \frac{1}{q}\int_{X}\lvert g(x) \rvert ^{q}d \mu=\frac{1}{p}+\frac{1}{q}=1.
> > $$

> [!Remark]
> Note that by Hölder's inequality, $f \in \tilde{\mathcal{L}}_{p}\implies f^{p-1}\in \tilde{\mathcal{L}}_{q}$.

> [!Theorem] Minkowski inequality
> Let $f, g \in \tilde{\mathcal{L}}_{p}(X)$, then $\lVert f + g \rVert_{p}\leq \lVert f \rVert_{p}+\lVert g \rVert_{p}$.
> > [!Proof]-
> > $$
> > \int_{X}\lvert f+g \rvert ^{p}d \mu= \int_{X}\lvert f+g \rvert ^{p-1} \cdot \lvert f+g \rvert d \mu\leq \int_{X}\lvert f \rvert \cdot \lvert f+g \rvert ^{p-1}d \mu + \int_{X}\lvert g \rvert \cdot \lvert f + g \rvert ^{p-1}d \mu 
> > $$
> > By Hölder's $\int_{X}\lvert f \rvert \cdot \lvert f + g \rvert^{p-1} d \mu \leq \left( \int_{X}\lvert f \rvert^{p} d \mu \right)^{1/p} \cdot \left( \int_{X} \lvert f+g \rvert^{(p-1)q}d \mu \right)^{1/q}\leq  \lVert f \rVert_{p}\cdot \lVert f+g \rVert_{p}^{p-1}$ .
> > Therefore, $\lVert f+g \rVert_{p}^{p}\leq(\lVert f \rVert_{p}+\lVert g \rVert_{p})(\lVert f+g \rVert_{p}^{p-1}) \implies \lVert  f+g \rVert_{p}\leq \lVert f \rVert_{p}+\lVert g \rVert_{p}$.

^d1da59

> [!Definition] $L_{p}$ spaces
> $L_{p}(X):= \tilde{\mathcal{L}}_{p}(X)/\{ f: f=0 \text{ almost everywhere} \}$.
> Note that $\tilde{\mathcal{L}}_{p}$ are semi-normed linear spaces by minkowski, hence $L_{p}$ are NLS.

> [!Remarks]
> 1. $\ell_{p} \subset \ell_{q}$ for $1 \leq p <  q\leq \infty$.
> >[!Proof]-
> >    $\{ x_{n} \}\in \ell_{p}\implies x_{n} \in \ell_{\infty }$. Now, $\sum_{n=1}^{\infty}\lvert x_{n} \rvert^{q}=\sum_{n=1}^{\infty}\lvert x_{n} \rvert^{p}\cdot \lvert x_{n} \rvert^{q-p}\leq \left(\lVert \{ x_{n} \} \rVert_{\infty}\right)^{q-p}\cdot \lVert \{ x_{n} \} \rVert_{p}$.
> 2. Let $\mu$ be a finite measure, then $L_{p}(\mu) \subset L_{q}(\mu )$ for $p> q$.
> >[!Proof]-
> >    Let $\alpha = \frac{p}{q}> 1$, then
> >    $$f\in L_{p}(\mu)\implies \int_{X}\lvert f \cdot 1 \rvert^{q} \overset{\text{Hölder's}}{\displaystyle\leq } \left(\int_{X}\lvert f \rvert^{\alpha q}\right)^{1/\alpha } \cdot \left(\int_{X}1\right)^{1/{\left(1-\alpha^{-1}\right)}}\leq \lVert f \rVert_{p}^{q} \cdot \mu(X)^{1/\left(1-\alpha^{-1}\right)}$$

> [!Assignment]
> 1. Let $\sum_{i=1}^{n}\frac{1}{p_{i}}=\frac{1}{p}\leq  1$ and suppose $\phi_{i}\in L_{p_{i}}(X) \, \forall i$.
>    Then prove that
>    $$\left\lVert  \prod_{i=1}^{n}{\phi_{i}}  \right\rVert_{p} \leq \prod_{i=1}^{n}\left(\lVert \phi_{i} \rVert _{p_{i}} \right)$$
> 2. Let $1\leq p <  q$, $\phi \in L_{p} \cap L_{q}$, Then prove that $\phi \in L_{r} \, \forall r \in (p, q)$. Morever
>    $$
>    \begin{align}
>    \lVert \phi \rVert _{r} = \left(\lVert \phi \rVert _{p}\right)^{\alpha} \cdot \left( \lVert \phi \rVert _{q}\right)^{1-\alpha }
>    \end{align}
>    $$
>    where $\alpha \in [0,1]$  is such that $\frac{1}{r}=\frac{\alpha}{p}+\frac{{1-\alpha}}{q}$.

---

$L^{p}$ is Banach wrt $\lVert \cdot \rVert_{p}$. (we have already shown that $L^{\infty}$ is Banach, but I can't recall?)

---

%%%%%%%%%%%%%%%%

---

> [!Exercise] Assignment
> Let $I=[0, 1]$. Let $k\in L^{2}(I^{2};\mathbb{C})$. Define $T_{k}:L^{2}(I; \mathbb{C})\to L^{2}(I; \mathbb{C})$ by
> $$
> (T_{k}f)(y)=\int_{0}^{1} f(x)k(x, y) \, dx .
> $$
> Prove that $T_{k}$ is bounded. Compute $T_{k}^{*}$. 
> 
> > [!Solution]-
> > 
> > **$T_{k}f\in L^{2}(I;\mathbb{C})$**
> > 
> > Recall that $k\in L^{2}(I^{2})$ implies $\int_{I^{2}} |k|^{2}< \infty$. By [[LEC GANA1 8#^18d8a9|Fubini]], the section $x \mapsto |k(x, y)|^{2}$ is integrable (i.e., $k(\_, y)\in L^{2}(I)$) for almost all $y\in I$. By [[#^d01098]], $f(x)k(x, y)$ is integrable over $x$ for fixed $y$, so $T_{k}f$ is well-defined as a map $I\to \mathbb{C}$. 
> > 
> > Next, we show that $T_{k}f$ is measurable. Define $F(x, y)=f(x)k(x, y)$. By [[LEC GANA1 8#^665d25]],
> > $$
> > \int_{I^{2}}|f(x)|^{2}\,d(x, y)=\int_{I}|f|^{2}\,dx,
> > $$
> > so $|f|\in L^{2}(I^{2})$. As in [[#^d01098]],
> > $$
> > \begin{aligned} 
> >  \int_{I^2}|F(x,y)|\,d(x,y) &=\int_{I^2}|f(x)||k(x,y)|\,d(x,y)\\ 
> >   &\leqslant \|f\|_2\|k\|_2\\ &<\infty,
> > \end{aligned}.
> > $$
> > so $F\in L^{1}(I^{2})$. 
> > 
> > Thus, by [[LEC GANA1 8#^ec7a42|the version of Fubini for complex valued functions]],
> > $$
> > \begin{align}
> > \int_{I^{2}}  F(x, y)\,d(x, y)=\int_{I}\left( \int_{I}f(x)k(x, y)\,dx \right)\,dy.
> > \end{align}
> > $$
> > In particular, the map $y\mapsto \int_{I}f(x)k(x, y)\,dx$ is integrable, and a fortiori measurable. 
> > 
> > Finally, $T_{k}f$ is square integrable:
> > $$
> > \begin{align}
> > \int_{0}^{1} \lvert T_{k}f (y)\rvert ^{2} \, dy & = \int_{0}^{1} \left( \int_{0}^{1} |f(x)||k(x, y)| \, dx  \right)^{2} \, dy  \\
> >  & \leqslant \int_{0}^{1} \left( \int_{0}^{1} |f(x)|^{2} \, dx  \right)\left( \int_{0}^{1} |k(x, y)|^{2} \, dx  \right) \, dy \\
> >  &  \leqslant \lVert f \rVert _{2}^{2}\int_{0}^{1} \int_{0}^{1} |k(x, y)|^{2} \, dx  \, dy \\
> >  &   =\lVert f \rVert _{2}^{2}\lVert k \rVert _{2}^{2}.
> > \end{align}
> > $$
> > ---
> > 
> > **Computing $T_{k}^{*}$** 
> > 
> > Consider $S:L^{2}[0, 1]\to L^{2}[0, 1]$ defined by
> > $$
> > \begin{align}
> > S(g)(y)=\int_{0}^{1} g(x) \overline{k(y, x)} \, dx .
> > \end{align}
> > $$
> > Then, 
> > $$
> > \begin{align}
> > \langle T_{k}f, g \rangle  & = \int_{0}^{1} \int_{0}^{1} f(x) \overline{g(y)}k(x, y) \, dx  \, dy  \\
> > \end{align}
> > $$
> > Define $h(x, y)=f(x) \overline{g(y)}$. By [[LEC GANA1 8#^541a16]] applied to $|f|, |g|$, we have $h\in L^{2}(I^{2})$. Since $k\in L^{2}(I^{2})$, we have $hk\in L^{1}(I^{2})$. Therefore, 
> > $$
> > \begin{align}
> > \int_{I^{2}}|f(x)\overline{g}(y)k(x, y)|\,d(x, y) & < \infty, 
> > \end{align}
> > $$
> > and we can apply Fubini:
> > $$
> > \begin{align}
> > \langle T_{k}f, g \rangle  & = \int_{0}^{1}f(x) \left( \int_{0}^{1}  \overline{g(y)}k(x, y) \, dy \right)  \, dx   \\
> >  & =\int_{0}^{1}f(x) \left( \overline{\int_{0}^{1}  g(y) \overline{k(x, y)} \, dy} \right)  \, dx .
> > \end{align}
> > $$
> > Since both the factors in $I\times I$ are the same measure space, we can swap $x$ and $y$:
> > $$
> > \begin{align}
> > \langle T_{k}f, g \rangle  & =\int_{0}^{1}f(y) \left( \overline{\int_{0}^{1}  g(x) \overline{k(y, x)} \, dx} \right)  \, dy \\
> >  & =\langle f, Sg \rangle 
> > \end{align}
> > $$
> > That $T_{k}$ is bounded and $T_{k}^{*}=S$ now follows from [[#^a9df42]]. 
> 


> [!Exercise] Assignment
> Let $H$ be a Hilbert space. Let $T:H\to H$ be linear. Let $S:H\to H$ be such that $\langle Tx, y \rangle=\langle x, Sy \rangle$. Then, $T$ is bounded, and $T^{*}=S$. 
> 
> > [!Solution]-
> > 
> > We will use the [[LEC GANA1 13#^7f08a9]]. By [[LEC GANA1 13#^5a6f7c]], we must show that if $x_{n}\to x$ and $Tx_{n}\to y$, then $Tx=y$. For any $w\in H$, using the [[LEC ANA2 16#^181916|continuity of the inner product]], 
> > $$
> > \begin{align}
> > \langle Tx,  w\rangle  & =\langle x, Sw \rangle  \\
> >  & = \lim_{ n \to \infty } \langle x_{n}, Sw \rangle  \\
> >  &  =\lim_{ n \to \infty } \langle Tx_{n}, w \rangle  \\
> >  &   =\langle y, w \rangle .
> > \end{align}
> > $$
> > Thus, $Tx=y$, and $T$ is bounded. It follows from the [[LEC GANA1 15#^391a15|uniqueness]] of the adjoint that $T^{*}=S$. 
> 

^a9df42

---

Unless otherwise mentioned, assume Hilbert spaces are complex. 

> [!Definition] Normal operator
> We call $T\in B(H)$ **normal** if $TT^{*}=T^{*}T$.  

> [!Proposition]
> Let $H$ be a complex Hilbert space. $T$ is normal iff $\lVert Tx \rVert=\lVert T^{*}x \rVert$ for all $x\in H$. 
> 
> > [!Proof]-
> > 
> > Note that
> > $$
> > \langle T^{*}Tx, x \rangle =\langle TT^{*}x, x \rangle \iff  \langle Tx, Tx \rangle =\langle T^{*}x, T^{*}x \rangle.
> > $$
> > So, if $T$ is normal, then $\lVert Tx \rVert=\lVert T^{*}x \rVert$. The converse follows from the fact that an operator on a Hilbert space is determined by its quadratic form [[LEC GANA1 15#^424bda]]. 
> 


[!Example]
Let $H=L^{2}(X, \mu)$. Let $f\in L^{\infty}(X, \mu)$. Define $M_{f}:H\to H$ as $M_{f}(g)=fg$. 

Note that, $\int_{X}\lvert fg \rvert^{2}d \mu \leq \lVert f \rVert_{L^\infty}^{2} \cdot \int_{X}\lvert g \rvert^{2}d \mu < \infty$.
Hence $M_{f}$ is a well defined operator with $\lVert M_{f} \rVert\leq \lVert f \rVert_{L^\infty }$.

Next we will show that $\lVert M_{f} \rVert=\lVert f \rVert_{L^\infty }$.
Consider $A_{\epsilon}=\{ x \in X : \lvert f(x) \rvert > \lVert f \rVert_{L^{\infty}}-\epsilon \}$. Since $\lVert f \rVert_{L^{\infty}}$ is the essential supremum, $\mu(A_{\epsilon})> 0$. Clearly, $1_{A_{\epsilon}} \in L^{2}(X)$ with $\left\lVert \frac{1_{A_{\epsilon}}}{\sqrt{\mu(A_{\epsilon })}} \right\rVert = 1$.
Now, 
$$
\begin{align}
\left\lVert M_{f}\left(\frac{1_{A_{\epsilon}}}{\sqrt{\mu(A_{\epsilon })}}\right) \right\rVert_{L^{2}} &= \frac{1}{\sqrt{\mu(1_{A_{\epsilon}})}} \sqrt{\left(\int_{X}1_{A_{\epsilon}}f^{2}d \mu \right)}\\
&=\frac{1}{\sqrt{\mu(A_{\epsilon })}}\sqrt{\int_{A_{\epsilon}}f^{2}d \mu }\\
&\geq \frac{1}{\sqrt{\mu(A_{\epsilon})}}\sqrt{\int_{A_{\epsilon}}\left(\lVert f \rVert _{L^{\infty}}-\epsilon \right)^2}\\
&= \lVert f \rVert _{L^{\infty}}-\epsilon 
\end{align}
$$
Therefore, $\lVert M_{f} \rVert_{L^{2}}=\lVert f \rVert_{L^{\infty}}$.
If $f, g \in L^{\infty}$ then $M_{f}$ and $M_{g}$ commute. Also $(M_{f})^{*}=M_{\overline{f}}$.
Also if $\lVert f(t) \rVert=1\, \forall t \in X$ then $M_{f}$ is unitary.

---

> [!Exercise] Assignment
> 1. Let $H=L^{2}(\mathbb{R})$. For $t\in \mathbb{R}$, show that the shift operator $(U_{t}f)(s)=f(s-t)$ is unitary. 
> 2. Let $H=L^{2}[0, \infty)$. For $t> 0$, show that
> $$
> (S_{t}f)(s)=\begin{cases}
> f(s-t) & s\geqslant  t \\
> 0 & s< t
> \end{cases}
> $$
> 	is an isometry, but not unitary(Compute $S_t^*$). 

---
