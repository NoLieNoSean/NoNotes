---
id: "614"
date: 2026-11-02
time: 15:33
tags:
  - GANA1
  - Lecture
desc: Holder's and Minkowski's inequalities
P1: true
P2: true
---
# Normal operators, examples

We continue from [[LEC GANA1 15#Isometries and Unitaries]]. 

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

> [!Example]
> Let $H=L^{p}(X, \mu)$. For $f\in L^{\infty}(X, \mu)$, define $M_{f}:H\to H$ as $M_{f}(g)=fg$. We've seen in [[LEC GANA1 11#^242238]] that $\lVert M_{f} \rVert\leqslant \lVert f \rVert_{\infty}$. 
> 
> We will now show that $\lVert M_{f} \rVert=\lVert f \rVert_{\infty }$.
> 
> Consider $A_{\epsilon}=\{ x \in X : \lvert f(x) \rvert > \lVert f \rVert_{{\infty}}-\epsilon \}$. Since $\lVert f \rVert_{{\infty}}$ is the essential supremum, $\mu(A_{\epsilon})> 0$ for $\epsilon> 0$. Clearly, $1_{A_{\epsilon}} \in L^{p}(X)$ with $\left\lVert \frac{1}{(\mu(A_{\epsilon }))^{1/p}}1_{A_{\epsilon}} \right\rVert = 1$.
> $$
> \begin{align}
> \left\lVert M_{f}\left(\frac{1_{A_{\epsilon}}}{(\mu(A_{\epsilon }))^{1/p}}\right) \right\rVert_{{p}} &= \frac{1}{(\mu(A_{\epsilon }))^{1/p}} \left(\int_{X}1_{A_{\epsilon}}|f|^{p}d \mu \right)^{1/p}\\
> &=\frac{1}{(\mu(A_{\epsilon }))^{1/p}} \left(\int_{A_{\epsilon}}|f|^{p}d \mu \right)^{1/p}\\
> &\geqslant  \frac{1}{(\mu(A_{\epsilon }))^{1/p}} \left(\int_{A_{\epsilon}}(\lVert f \rVert _{\infty}-\epsilon)^{p} \,d\mu \right)^{1/p}\\
> &= \lVert f \rVert _{{\infty}}-\epsilon .
> \end{align}
> $$
> Therefore, $\lVert M_{f} \rVert=\lVert f \rVert_{{\infty}}$. 
> 
> For $f, g \in L^{\infty}$, $M_{f}$ and $M_{g}$ commute. For $p=2$, $(M_{f})^{*}=M_{\overline{f}}$, so $M_{f}$ is a normal operator. If $|f(t)|=1\, \forall t \in X$ then $M_{f}$ is unitary.

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

> [!Exercise] Assignment
> 1. Let $H=L^{2}(\mathbb{R})$. For $t\in \mathbb{R}$, show that the shift operator $(U_{t}f)(s)=f(s-t)$ is unitary. 
> 2. Let $H=L^{2}[0, \infty)$. For $t> 0$, show that
> $$
> (S_{t}f)(s)=\begin{cases}
> f(s-t) & s\geqslant  t \\
> 0 & s< t
> \end{cases}
> $$
> 	is an isometry, but not unitary (Compute $S_t^*$). 

%% Come back to this once you've done change of measure %%

---
# Completeness of $L^{p}$ 

![[LEC GANA1 7#^8c70d7]]

> [!Remark]
> To show that $\mathcal{L}^{p}$ is a vector space, we use the fact that $t\mapsto t^{p}$ is a [[LEC CAL1 15#^69f0b5|convex]] function for $p\geq 1$. Let $f, g\in \mathcal{L}^{p}(X, \mu)$. For each $x\in X$, we have (using $\lambda=1/2$)
> $$
> \begin{align}
> \left| \frac{f(x)+g(x)}{2} \right| ^{p} & \leqslant  \frac{|f(x)|^{p}+|g(x)|^{p}}{2} \\
> \implies |f(x)+g(x)|^{p} & \leqslant 2^{p-1}(|f(x)|^{p}+|g(x)|^{p}) \\
> \implies \int_{X}|f(x)+g(x)|^{p} & \leqslant 2^{p-1}\left( \int_{X}|f(x)|^{p}+\int_{X}|g(x)|^{p} \right) \\
>  & < \infty.
> \end{align}
> $$
> So, $f(x)+g(x)\in \mathcal{L}^{p}$. 

^f58a29

We will prove Minkowski's inequality and show that $L^{p}$ spaces are complete. 

## Minkowski for $L^{2}$

$L^{2}$ is special because it is an inner product space, and the Minkowski inequality can be easily derived from the Cauchy-Schwarz inequality. 

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
> \int |f||g|\leqslant  \left( \int |f|^{2} \right)^{1/2}\left( \int |g|^{2} \right)^{1/2}.
> $$


^d01098

[[LEC GANA1 14#^0b76b1|As we have seen]], the C-S inequality yields the triangle inequality:
$$
\lVert f +g\rVert_{2}\leqslant \lVert f \rVert _{2}+\lVert g \rVert _{2}.
$$
## Minkowski for $L^{p}$, $p\ne 2$

These are not inner product spaces, so we have to take a different route to establishing the Minkowski inequality. 

> [!Proposition] Hölder's inequality
> Let $p,q \in [1, \infty)$ be such that $\frac{1}{p}+\frac{1}{q}=1$. 
> 
> Then for $f \in L^{p}(X, \mu), g \in L^{q}(X, \mu)$, we have $fg\in L^{1}(X, \mu)$ and $\lVert fg \rVert_{1}\leq \lVert f \rVert_{p} \lVert g \rVert_{q}$.
> 
> > [!Proof]-
> > 
> > This is clear when $p=1$ or $\lVert f \rVert_{p}, \lVert g \rVert_{q}=0$, so assume $p> 1$ and $\lVert f \rVert_{p}, \lVert g \rVert_{p}\ne 0$. WLOG, $\lVert f \rVert_{p}=\lVert g \rVert_{q}=1$.
> > 
> > By [[Holder's inequality#^d28629|Young's inequality]],
> > $$
> > \begin{align}
> > \lvert f(x) \rvert   \lvert g(x) \rvert \leq \frac{1}{p}\lvert f(x) \rvert ^{p}+\frac{1}{q}\lvert g(x) \rvert ^{q} &  & \forall x.
> > \end{align}
> > $$
> > Integrating on both sides, we obtain
> > $$
> > \int_{X}\lvert f(x) \rvert \lvert g(x) \rvert d \mu \leq \frac{1}{p} \int_{X}\lvert f(x) \rvert ^{p}d \mu + \frac{1}{q}\int_{X}\lvert g(x) \rvert ^{q}d \mu=\frac{1}{p}+\frac{1}{q}=1.
> > $$
> > 
> 

^cd6771

> [!Remark]
> Suppose $f\in L^{p}$, and $q$ is such that $1/p+1/q=1$. Note that $p=(p-1)q$, from which it follows that $f^{p}=f^{(p-1)q}\in L^{1}$, or $f^{p-1}\in L^{q}$. 

^49dd11

> [!Theorem] Minkowski inequality
> For $f, g \in L_{p}(X)$, we have $\lVert f + g \rVert_{p}\leq \lVert f \rVert_{p}+\lVert g \rVert_{p}$.
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > \int_{X}\lvert f+g \rvert ^{p}d \mu & = \int_{X}\lvert f+g \rvert\lvert f+g \rvert ^{p-1}  \, d \mu \\
> >  & \leq \int_{X}\lvert f \rvert  \lvert f+g \rvert ^{p-1}\,d \mu + \int_{X}\lvert g \rvert  \lvert f + g \rvert ^{p-1}\,d \mu .
> > \end{align}
> > $$
> > By [[#^49dd11]] and [[LEC GANA1 16#^cd6771|Hölder's inequality]], 
> > $$
> > \begin{align}
> > \int_{X}\lvert f \rvert  \lvert f + g \rvert^{p-1} d \mu \leq \left( \int_{X}\lvert f \rvert^{p} d \mu \right)^{1/p}  \left( \int_{X} \lvert f+g \rvert^{(p-1)q}d \mu \right)^{1/q}=  \lVert f \rVert_{p} \lVert f+g \rVert_{p}^{p-1}.
> > \end{align}
> > $$
> > Therefore, $\lVert f+g \rVert_{p}^{p}\leq(\lVert f \rVert_{p}+\lVert g \rVert_{p})(\lVert f+g \rVert_{p}^{p-1}) \implies \lVert  f+g \rVert_{p}\leq \lVert f \rVert_{p}+\lVert g \rVert_{p}$.
> 

^d1da59

## Completeness of $L^{p}$

> [!Theorem]
> $L^{\infty}(X, \mu)$ is complete. 
> 
> > [!Proof]-
> > 
> > Suppose $\{ f_{n} \}\subseteq L^{\infty}$ is Cauchy. Let
> > $$
> > \begin{align}
> > A_{n, m} & :=\{ x\in X:|f_{n}(x)-f_{m}(x)|> \lVert f_{n}-f_{m} \rVert _{\infty} \} \\
> > A'_{n} & :=\{ x \in X:|f_{n}(x)|> \lVert f_{n} \rVert _{\infty}  \}.
> > \end{align}
> > $$
> > By [[LEC GANA1 7#^da0b0d]], $\mu(A_{n, m})=0$, $\mu(A'_{n})=0$ for all $n, m$. Let
> > $$
> > B=\left( \bigcup_{n, m\in \mathbb{N}}A_{n, m} \right)\cup\left( \bigcup_{n\in \mathbb{N}}A'_{n} \right).
> > $$
> > By countable subadditivity, $\mu(B)=0$. For each $x\in B^{c}$, 
> > $$
> > \begin{align}
> > |f_{n}(x)-f_{m}(x)| & \leqslant \lVert f_{n}-f_{m} \rVert _{\infty}   &  \forall n, m \\
> > |f_{n}(x)| & \leqslant \lVert f_{n} \rVert _{\infty}   & \forall n
> > \end{align}
> > $$
> > Thus, $\{ f_{n}(x) \}$ is Cauchy for each $x\in B^{c}$. This defines a function $f$ on $B^{c}$. For all $x\in B^{c}$, 
> > $$
> > \begin{align}
> > |f(x)-f_{n}(x)| & =\lim_{ m \to \infty } |f_{m}(x)-f_{n}(x)| \\
> >  & \leqslant \lim_{ m \to \infty } \lVert f_{m}-f_{n} \rVert,
> > \end{align}
> > $$
> > So $f_{n}\to f$ uniformly on $B^{c}$, and $f$ is bounded on $B^{c}$ ($\lVert f \rVert_{\infty}\leqslant \lVert f-f_{n} \rVert_{\infty}+\lVert f_{n} \rVert_{\infty}$). Therefore, $f_{n} \xrightarrow{L^{\infty}}f\in L^{\infty}$. 
> 
> $L^{p}(X, \mu)$ is complete for all $1\leqslant p < \infty$. 
> 
> > [!Proof]-
> > 
> > Suppose $\{ f_{n} \}\subseteq L^{p}$ is Cauchy. 
> > 
> > ---
> > **There exists a subsequence $f_{n_{k}}$ such that $f_{n_{k}}\to f$ a.e..**
> > 
> > Since $\{ f_{n} \}$ is Cauchy, choose a subsequence $\{ f_{n_{k}} \}$ such that
> > $$
> > \lVert f_{n_{k+1}}-f_{n_{k}} \rVert \leqslant 2^{-k}.
> > $$
> > Define
> > $$
> > g_{N}=\sum_{k=1}^{N} |f_{n_{k+1}}-f_{n_{k}}|.
> > $$
> > Note that
> > $$
> > \lVert g_{N} \rVert _{p}\leqslant \sum_{k=1}^{N} \lVert f_{n_{k+1}}-f_{n_{k}} \rVert _{p}\leqslant  1.
> > $$
> > By [[LEC GANA1 5#^2cd675]], $\sum_{k=1}^{\infty}|f_{n_{k+1}}-f_{n_{k}}|$ is measurable. By the [[LEC GANA1 6#^de9d0c|monotone convergence theorem]], 
> > $$
> > \begin{align}
> > \int_{X}\left( \sum_{k=1}^{\infty} |f_{n_{k+1}}-f_{n_{k}}| \right)^{p}\,d\mu & =\lim_{ N \to \infty } \int_{X}g_{N}^{p}\,d\mu \\
> >  & \leqslant  1.
> > \end{align}
> > $$
> > By [[LEC GANA1 7#^33c35d]].1, $\sum_{k=1}^{\infty}|f_{n_{k+1}}-f_{n_{k}}|< \infty$ a.e.. Hence $\{ f_{n_{k}} \}$ converges a.e. to some measurable function $f$, which is measurable by [[LEC GANA1 5#^72ce9f]].
> > 
> > ---
> > **Show that $f\in L^{p}$**
> > 
> > Since $\{ f_{n} \}$ is Cauchy, it is bounded in $L^{p}$. Thus there exists $M> 0$ such that
> > $$
> > \lVert f_{n_{k}} \rVert _{p}\leqslant  M\quad \forall k.
> > $$
> > Since $f_{n_{k}}\to f$ a.e., [[LEC GANA1 6#^38406e|Fatou's lemma]] gives
> > $$
> > \begin{align}
> > \int_{X}|f|^{p}\,d\mu & =\int_{X}\liminf _{ k \to \infty } |f_{n_{k}}|^{p} \,d\mu\\
> >  & \leqslant \liminf _{ k \to \infty } \int_{X}|f_{n_{k}}|^{p}\,d\mu \\
> >  &  \leqslant M^{p}.
> > \end{align}
> > $$
> > Therefore $f\in L^{p}$.
> > 
> > ---
> > 
> > **Show that $f_{n_{k}}\to f$ in $L^{p}$**
> > 
> > For $\epsilon> 0$, choose $N$ such that for all $k, m\geqslant N$, $\lVert f _{n_{k}}-f_{n_{m}}\rVert\leqslant\epsilon$. 
> > 
> > Using [[LEC GANA1 6#^38406e|Fatou's lemma]] again, for all $k\geqslant N$, 
> > $$
> > \begin{align}
> > \lVert f_{n_{k}}-f \rVert _{p}^{p} & =\int_{X}|f_{n_{k}}-f|^{p}\,d\mu \\
> >  & = \int_{X}\liminf_{ m \to \infty } |f_{n_{k}}-f_{n_{m}}|^{p}\,d\mu \\
> >  & =\liminf_{ m \to \infty } \int_{X}|f_{n_{k}}-f_{n_{m}}|^{p}\,d\mu \\
> >  & =\liminf_{ m \to \infty } \lVert f_{n_{k}}-f_{n_{m}} \rVert ^{p} \\
> >  & \leqslant \epsilon^{p}.
> > \end{align}
> > $$
> > Thus, $\lVert f_{n_{k}} -f\rVert_{p}\to 0$. 
> > 
> > Since $\{ f_{n} \}$ is Cauchy and has a subsequence converging to $f$, the entire sequence converges to $f$. 
> 

# Stray propositions

> [!Proposition]
> $\ell^{p} \subset \ell^{q}$ for $1 \leq p <  q\leq \infty$.
> 
> > [!Proof]-
> > 
> > If $\{ x_{n} \}\in \ell^{p}$, then clearly $\{ x_{n} \}\in \ell^{\infty}$. It follows that
> > $$
> > \begin{align}
> > \sum_{n=1}^{\infty}\lvert x_{n} \rvert^{q}=\sum_{n=1}^{\infty}\lvert x_{n} \rvert^{p}\cdot \lvert x_{n} \rvert^{q-p}\leq \left(\lVert \{ x_{n} \} \rVert_{\infty}\right)^{q-p}\cdot \lVert \{ x_{n} \} \rVert_{p}^{p}.
> > \end{align}
> > $$
> > 
> 

> [!Proposition]
> Let $\mu$ be a finite measure on $X$, then $L^{p}(X, \mu) \supset L^{q}(X, \mu )$ for $p< q$.
> 
> > [!Proof]-
> > 
> > Let $\alpha = \frac{p}{q}> 1$. Suppose $f\in L^{p}(X, \mu)$. Note that $|f|^{q}\in L^{\alpha}$. Using [[#^cd6771|Hölder's inequality]], 
> > $$
> > \int_{X}\lvert f \cdot 1 \rvert^{q} \overset{}{\displaystyle\leq } \left(\int_{X}\lvert f \rvert^{\alpha q}\right)^{1/\alpha } \cdot \left(\int_{X}1\right)^{1/{\left(1-\alpha^{-1}\right)}}\leq \lVert f \rVert_{p}^{q} \cdot \mu(X)^{1/\left(1-\alpha^{-1}\right)}
> > $$
> > 
> 

> [!Proposition]
> Suppose $f\in L^{p}\cap L^{\infty}$. Then, $f\in L^{q}$ for all $p\leqslant q\leqslant \infty$, and $\lim_{ q \to \infty }\lVert f \rVert_{q}=\lVert f \rVert_{\infty}$. 
> 
> > [!Proof]-
> > 
> > For $p< q$, 
> > $$
> > \begin{align}
> > \lVert f \rVert ^{q}_{q} =\int_{X}|f|^{q}\,d\mu & =\int_{X}|f|^{q-p}|f|^{p}\,d\mu \\
> >  & \leqslant  \lVert f \rVert _{\infty}^{q-p}\int_{X}|f|^{p}\,d\mu \\
> >  & =\lVert f \rVert _{\infty}^{q-p}\lVert f \rVert _{p}^{p} \\\\
> >  \implies \lVert f \rVert _{q} & \leqslant \lVert f \rVert _{\infty}^{1-\frac{p}{q}}\lVert f \rVert _{p}^{p/q}.
> > \end{align}
> > $$
> > It follows that
> > $$
> > \limsup_{ q \to \infty } \lVert f \rVert _{q}\leqslant \lVert f \rVert _{\infty}.
> > $$
> > Next, choose $0< a< \lVert f \rVert_{\infty}$. 
> > $$
> > \begin{align}
> > \mu \{ x:|f(x)|> a \}=\mu \{ x:|f(x)|^{q}> a^{q} \}\leqslant a^{-q}\lVert f \rVert _{q}^{q}.
> > \end{align}
> > $$
> > Thus, 
> > $$
> > \begin{align}
> >  & a\,\mu \{ x:|f(x)|> a \}^{1/q}\leqslant \lVert f \rVert _{q} \\\\
> >  & \implies a\leqslant  \liminf_{ q \to \infty } \lVert f \rVert _{q}.
> > \end{align}
> > $$
> > Since this holds for all $0< a< \lVert f \rVert_{\infty}$, it follows that
> > $$
> > \lVert f \rVert_{\infty}\leqslant  \liminf_{ q \to \infty } \lVert f \rVert _{q}.
> > $$
> > Thus, $\lim_{ q \to \infty }\lVert f \rVert_{q}=\lVert f \rVert_{\infty}$. 
> 

> [!Exercise] Assignment
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



