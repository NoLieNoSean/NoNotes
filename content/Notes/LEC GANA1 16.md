---
id: "614"
date: 2026-11-02
time: 15:33
tags:
  - GANA1
  - Lecture
desc: Holder's and Minkowski's inequalities
---
> [!Exercise] Assignment
> Let $k\in L^{2}([0, 1]\times[0, 1])$. Define $T_{k}:L^{2}[0, 1]\to L^{2}[0, 1]$ by
> $$
> (T_{k}f)(y)=\int_{0}^{1} f(x)k(x, y) \, dx .
> $$
> Prove that $T_{k}$ is bounded. Compute $T_{k}^{*}$. 

> [!Exercise] Assignment
> Let $H$ be a Hilbert space. Let $T:H\to H$ be linear. Let $S:H\to H$ be such that $\langle Tx, y \rangle=\langle x, Sy \rangle$. Then, $T$ is bounded, and $T^{*}=S$. 

---

> [!Definition]
> Let $T$ be a bounded operator on $H$. We say that $T$ is normal if $TT^{*}=T^{*}T$.  

> [!Proposition]
> Let $H$ be a complex Hilbert space. $T$ is normal iff $\lVert Tx \rVert=\lVert T^{*}x \rVert$ for all $x\in H$. 
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > \lVert Tx \rVert ^{2} & =\langle Tx, Tx \rangle  \\
> >  & =\langle T^{*}Tx, x \rangle  \\
> >  & =\langle T T^{*}x, x \rangle  \\
> >  & =\lVert T^{*}x \rVert ^{2}.
> > \end{align}
> > $$

> [!Example]
> Let $H=L^{2}(X, \mu)$. Let $f\in L^{\infty}(X, \mu)$. Define $M_{f}:H\to H$ as $M_{f}(g)=fg$. 
> 
> Note that, $\int_{X}\lvert fg \rvert^{2}d \mu \leq \lVert f \rVert_{L^\infty}^{2} \cdot \int_{X}\lvert g \rvert^{2}d \mu < \infty$.
> Hence $M_{f}$ is a well defined operator with $\lVert M_{f} \rVert\leq \lVert f \rVert_{L^\infty }$.
> 
> Next we will show that $\lVert M_{f} \rVert=\lVert f \rVert_{L^\infty }$.
> Consider $A_{\epsilon}=\{ x \in X : \lvert f(x) \rvert > \lVert f \rVert_{L^{\infty}}-\epsilon \}$. Since $\lVert f \rVert_{L^{\infty}}$ is the essential supremum, $\mu(A_{\epsilon})> 0$. Clearly, $1_{A_{\epsilon}} \in L^{2}(X)$ with $\left\lVert \frac{1_{A_{\epsilon}}}{\sqrt{\mu(A_{\epsilon })}} \right\rVert = 1$.
> Now, 
> $$
> \begin{align}
> \left\lVert M_{f}\left(\frac{1_{A_{\epsilon}}}{\sqrt{\mu(A_{\epsilon })}}\right) \right\rVert_{L^{2}} &= \frac{1}{\sqrt{\mu(1_{A_{\epsilon}})}} \sqrt{\left(\int_{X}1_{A_{\epsilon}}f^{2}d \mu \right)}\\
> &=\frac{1}{\sqrt{\mu(A_{\epsilon })}}\sqrt{\int_{A_{\epsilon}}f^{2}d \mu }\\
> &\geq \frac{1}{\sqrt{\mu(A_{\epsilon})}}\sqrt{\int_{A_{\epsilon}}\left(\lVert f \rVert _{L^{\infty}}-\epsilon \right)^2}\\
> &= \lVert f \rVert _{L^{\infty}}-\epsilon 
> \end{align}
> $$
> Therefore, $\lVert M_{f} \rVert_{L^{2}}=\lVert f \rVert_{L^{\infty}}$.
> If $f, g \in L^{\infty}$ then $M_{f}$ and $M_{g}$ commute. Also $(M_{f})^{*}=M_{\overline{f}}$.
> Also if $\lVert f(t) \rVert=1\, \forall t \in X$ then $M_{f}$ is unitary.

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
> [!Definition] $\mathcal{L}_{p}$ spaces
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
> Let $f, g \in \tilde{\mathcal{L}}^{p}(X)$, then $\lVert f + g \rVert_{p}\leq \lVert f \rVert_{p}+\lVert g \rVert_{p}$.
> > [!Proof]-
> > $$
> > \int_{X}\lvert f+g \rvert ^{p}d \mu= \int_{X}\lvert f+g \rvert ^{p-1} \cdot \lvert f+g \rvert d \mu\leq \int_{X}\lvert f \rvert \cdot \lvert f+g \rvert ^{p-1}d \mu + \int_{X}\lvert g \rvert \cdot \lvert f + g \rvert ^{p-1}d \mu 
> > $$
> > By Hölder's $\int_{X}\lvert f \rvert \cdot \lvert f + g \rvert^{p-1} d \mu \leq \lVert f \rVert_{p} \cdot \lVert f+g \rVert_{q}$.
> > Therefore, $\lVert f+g \rVert_{p}^{p}\leq(\lVert f \rVert_{p}+\lVert g \rVert_{p})(\lVert f+g \rVert_{q}^{p}) \implies \lVert  f+g \rVert_{p}\leq \lVert f \rVert_{p}+\lVert g \rVert_{p}$.

---

$L^{p}$ is Banach wrt $\lVert \cdot \rVert_{p}$. (we have already shown that $L^{\infty}$ is Banach, but I can't recall?)

---
Holder's inequality proof using convexity of $e^{x}$. 

---

Minkowski's inequality