---
id: "581"
date: 2026-10-01
time: 20:19
tags:
  - Lecture
  - GANA1
desc: The Riemann Integral, Banach spaces
P1: true
---
# The Riemann Integral

![[LEC ANA1 26#^d118a8]]

> [!Definition] Riemann (Darboux) integral
> Suppose $f:[a, b]\to \mathbb{R}$ is bounded. Corresponding to each partition $P$ of $[a, b]$, define
> $$
> \begin{array}{cc}
> \overline{y_{i}}\equiv\sup f(x)  & x\in[x_{i-1}, x_{i}], \\
> \underline{y_{i}}\equiv\inf f(x) & x\in[x_{i-1}, x_{i}],  \\
> 
> 
> \end{array}
> 
> $$
> $$
> U(P, f)\equiv \sum_{i=1}^{n} \overline{y_{i}}\Delta x_{i},
> $$
> $$
> L(P, f)\equiv \sum_{i=1}^{n} \underline{y_{i}}\Delta x_{i}.
> $$
> $U(P, f)$ is called the upper Riemann sum, and $L(P, f)$ is called the lower Riemann sum. Finally, define
> $$
> \text{the upper Riemann integral, }\overline{\int_{a}^{b}} f \, dx \equiv\inf U(P, f),\text{ and }
> $$
> $$
> \text{the lower Riemann integral, }\underline{\int_{a}^{b}} f \, dx \equiv\sup  L(P, f),
> $$
> where the $\inf$ and $\sup$ are taken over all partitions $P$ of $[a, b]$. 



> [!Definition] Upper and lower step and enveloping functions
> For bounded $f:[a,b] \to  \mathbb{R}$, let $\{P_{n}\}_{n=1}^{\infty}$ be a sequence of partitions such that $P_{n} \subseteq P_{n+1}$ and 
> $$U(P_{n},f) \downarrow  \overline{\int_{a}^{b}} f \, dx \\ L(P_{n},f) \uparrow  \underline {\int_{a}^{b}} f \, dx$$
> Define
> $$
> \phi_{n}(x) = \sum{\underline{y_{i}}\, 1_{[x_{i},x_{i+1})}}\\
> \chi_{n}(x) = \sum{\overline{y_{i}}\, 1_{[x_{i},x_{i+1})}}
> $$
> Note that $\phi_n, \chi_n$ are measurable
> $$
> \int_{[a,b]}\phi_{n}d \lambda = L(P_{n},f)\\
> \int_{[a,b]}\chi_{n}d \lambda = U(P_{n}, f)
> $$
> Define
> $$
> \phi(x) = \lim_{\delta \downarrow 0 } {\inf_{y \in (x - \delta, x + \delta )} f(y)}\\
> \chi(x) = \lim_{\delta \downarrow 0 } {\sup_{y \in (x - \delta, x + \delta )} f(y)}
> $$

> [!Claim]
> On $[a,b] \setminus \bigcup_{n=1}^{\infty}P_{n}$ 
> $$
> \phi_{n}(x)\to \phi(x)\\
> \chi_{n}(x)\to \chi(x)\\
> $$
> > [!Proof]
> 

> [!Exercise]
> $\{\chi(x) > t\}$ is open.

> [!Lemma] Characterization of Riemann integrability
> $f$ is Riemann integrable $\iff \phi = \chi$ almost everywhere.

> [!Corollary]
> If $f$ is Riemann integrable then the value of Riemann and Lebesgue integral turns out to be the same.

> [!Proposition] 
> $\phi(x) = \chi(x) \iff f$ is continuous at $x$.

> [!Corollary]
>  $f$ is Riemann integrable iff $f$ is continuous almost everywhere.

# Banach spaces

> [!Definition] Normed linear spaces
> [[LEC ALG1 21#Normed spaces]]

> [!Examples]
> - $\mathbb{R}^{n}, \mathbb{C}^{n}$ with respect to
>   $\tilde{x}=(x_{1}, x_{2} \cdots x_{n})$
>   $\| \tilde{x} \|_{p} = (\sum{\lvert x_{i} \rvert}^{p})^{\frac{1}{p}}$  for $p\geq 1$
>   $\| \tilde{x} \|_{\infty } = \max_{1\leq i\leq n}{\lvert x_{i} \rvert}$ 
>   
> - $\mathscr{l}_{p} = \left\{ \{x_{n}\}: \sum \lvert x_{n} \rvert^{p} <\infty\right\}$ for $p\geq 1$
>   $\|\{x_{n}\}\|_{p} = (\sum{\lvert x_{i} \rvert}^{p})^{\frac{1}{p}}$
>   $\mathscr{l}_{\infty}=\{\{x_{n}\} \text{is bounded}\}$
>   $\|\{x_{n}\}\|_{\infty} = \sup_{n}\lvert x_{n} \rvert$
>   
> - $(X, \mathscr{F},\mu)$ is a measure space.
>   $L^{p}(X, \mathscr{F},\mu)= \left\{ f:X \to \mathbb{C} : \int \lvert f \rvert^{p}< \infty   \right\}$.
>   $\|f\|_{p} = \left( \int \lvert f \rvert^{p} \right)^{\frac{1}{p}}$.
>   $L^{\infty}(X, \mathscr{F},\mu) = \{ f:X\to \mathbb{C}: \lvert f(x) \rvert \leq M \, \forall x \, \in F^{c} \text{ with } \mu(F) = 0\}$
>   $\|f\|_{\infty }= \inf \{M : \lvert f'(x) \rvert\leq M \text{ almost everywhere}\}$.

> [!Definition] $B(S)$
> For any set $S$,
> $$
> B(S) = \{f:S\to \mathbb{C} : \exists M \geq 0 \text{ such that } \lvert f(s) \rvert \leq M \,\, \forall s \in S\} \\
> \|f\|_{\infty}= \sup_{s \in S}\lvert f(s) \rvert 
> $$

> [!Definition] Banach space

> [!Examples]
> - $B(S)$
> - $C(X)\subseteq B(X)$ when $X$ is compact.

> [!Definition] Quotient space
> For normed linear space $X$, $X_{0} \subseteq X$.
> On $X/X_{0}$ define $\|x + X_{0}\|_{0} = \inf_{x_{0}\in X_{0}} \|x + x_{0}\|$.

> [!Proposition]  
> $\|\cdot\|$ is a norm on $X/X_{0}$ iff $X_{0}$ is closed.
> $X/X_{0}$ is Banach iff both $X$ and $X_0$ are Banach.

> [!Lemma]
> $X$ is a Banach space iff every absolutely convergent series converges.
