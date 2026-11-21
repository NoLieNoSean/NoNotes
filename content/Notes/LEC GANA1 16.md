---
id: "614"
date: 2026-11-02
time: 15:33
tags:
  - GANA1
  - Lecture
desc: Holder's and Minkowski's inequalities
---
[!Remark]
If $f, g\in L^{2}$, then $fg\in L^{1}$

[!Exercise] Assignment
Let $I=[0, 1]$. Let $k\in L^{2}(I^{2};\mathbb{C})$. Define $T_{k}:L^{2}(I; \mathbb{C})\to L^{2}(I; \mathbb{C})$ by
$$
(T_{k}f)(y)=\int_{0}^{1} f(x)k(x, y) \, dx .
$$
Prove that $T_{k}$ is bounded. Compute $T_{k}^{*}$. 

[!Solution]-

First, we show that $T_{k}f\in L^{2}(I;\mathbb{C})$. Recall that $k\in L^{2}(I^{2})$ implies $\int_{I^{2}} |k|^{2}< \infty$. By [[LEC GANA1 8#^18d8a9|Fubini]], the section $x \mapsto |k(x, y)|^{2}$ is integrable (i.e., $k(\_, y)\in L^{2}(I)$) for almost all $y\in I$. 

$T_{k}f$ is measurable. 

$T_{k}f$ is square integrable:
$$
\begin{align}
\int_{0}^{1} \lvert T_{k}f (y)\rvert ^{2} \, dy & \leqslant \int_{0}^{1} \left( \int_{0}^{1} |f(x)||k(x, y)| \, dx  \right)^{2} \, dy  \\
 & \leqslant \int_{0}^{1} \left( \int_{0}^{1} |f(x)|^{2} \, dx  \right)\left( \int_{0}^{1} |k(x, y)|^{2} \, dx  \right) \, dy \\
 &  \leqslant \lVert f \rVert _{2}\int_{0}^{1} \int_{0}^{1} |k(x, y)|^{2} \, dx  \, dy \\
 &   =\lVert f \rVert _{2}\lVert k \rVert _{2}.
\end{align}
$$


Consider $S:L^{2}[0, 1]\to L^{2}[0, 1]$ defined by
$$
\begin{align}
S(y)=\int_{0}^{1} f(x) \overline{k(y, x)} \, dx .
\end{align}
$$
Then, 
$$
\begin{align}
\langle T_{k}f, g \rangle  & = \int_{0}^{1} \int_{0}^{1} f(x) \overline{g(y)}k(x, y) \, dx  \, dy 
\end{align}
$$
...

That $T_{k}$ is bounded and $T_{k}^{*}=S$ now follows from [[#^a9df42]]. 

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
# $L_{p}$ spaces
> [!Definition] $\tilde{\mathcal{L}}_{p}$ spaces
> For a measure space $(X, \mathcal{A}, \mu )$,
> $$
> \mathcal{\tilde{L}}_{p}(X, \mathcal{A}, \mu)= \left\{  f : X \to \mathbb{R} \text{ is measurable} : \int_{X}\lvert f \rvert ^{p}d \mu < \infty   \right\}
> $$
> $\lVert \cdot  \rVert_{p}$ on $\mathcal{\tilde{L}}_{p}(X)$ is defined as $\lVert f \rVert_{p}=\left( \int_{X}\lvert f \rvert^{p}d \mu \right)^{1/p}$.

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
Holder's inequality proof using convexity of $e^{x}$. 

---

Minkowski's inequality