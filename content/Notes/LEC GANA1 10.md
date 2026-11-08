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

> [!Example] 
> 1. $\mathbb{R}^{n}, \mathbb{C}^{n}$ with respect to
>    $\tilde{x}=(x_{1}, x_{2} \cdots x_{n})$
>    $\| \tilde{x} \|_{p} = (\sum{\lvert x_{i} \rvert}^{p})^{\frac{1}{p}}$  for $p\geq 1$
>    $\| \tilde{x} \|_{\infty } = \max_{1\leq i\leq n}{\lvert x_{i} \rvert}$ 
> 2. $(X, \mathscr{F},\mu)$ is a measure space.
>    $L^{p}(X, \mathscr{F},\mu)= \left\{ f:X \to \mathbb{C} : \int \lvert f \rvert^{p}< \infty   \right\}$.
>    $\|f\|_{p} = \left( \int \lvert f \rvert^{p} \right)^{\frac{1}{p}}$.
>    $L^{\infty}(X, \mathscr{F},\mu) = \{ f:X\to \mathbb{C}: \lvert f(x) \rvert \leq M \, \forall x \, \in F^{c} \text{ with } \mu(F) = 0\}$
>    $\|f\|_{\infty }= \inf \{M : \lvert f'(x) \rvert\leq M \text{ almost everywhere}\}$.
>    See [[LEC GANA1 7#^8c70d7]], [[LEC GANA1 7#^40acf2]]. 
> 3. $\ell_{p} = \left\{ \{x_{n}\}: \sum \lvert x_{n} \rvert^{p} <\infty\right\}$ for $p\geq 1$
>    $\|\{x_{n}\}\|_{p} = (\sum{\lvert x_{i} \rvert}^{p})^{\frac{1}{p}}$
>    $\ell_{\infty}=\{\{x_{n}\} \text{is bounded}\}$
>    $\|\{x_{n}\}\|_{\infty} = \sup_{n}\lvert x_{n} \rvert$
> 4. $B(S)$, for any set $S$. [[LEC ANA2 3#^eb4855]]. 
> 5. $C(X)\subseteq B(X)$, when $X$ is compact. [[LEC ANA2 3#^e12a1f]]. 
> 
> We have not yet shown that $\ell_{p}$ and $L^{p}$ are complete. We will do so in [[LEC GANA1 16]]. 

![[LEC ANA2 9#^9279fe]]


> [!Proposition] Quotient Banach space
> Let $X$ be a NLS, $X_{0}\subseteq X$ be a closed subspace. On $X/X_{0}$ define $\|x + X_{0}\| = \inf_{x_{0}\in X_{0}} \|x - x_{0}\|$. 
> 
> $X/X_{0}$ is a normed vector space with respect to this norm. It is Banach if $X$ is. 

^22e334



