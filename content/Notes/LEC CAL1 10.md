---
tags:
  - CAL1
  - Lecture
date: 2025-02-14
time: 12:22
id: "179"
---
# The Banach contraction principle

> [!Definition]
> A point $x\in X$ is called a **fixed** **point** of the mapping $T:X\to X$ if $T(x)=x$.

> [!Definition]
> A mapping $T$ from a metric space $(X, \rho)$ into itself is said to be **Lipschitz** if there exists $c\geq 0$, called a Lipschitz constant for the mapping, for which 
> $$
> \rho(T(u), T(v))\leq c~\rho(u, v) ~~\forall u, v\in X.
> $$
> It is clear that a Lipschitz mapping is uniformly continuous. If $c< 1$, the Lipschitz mapping is called a **contraction**. 

^659739

> [!Theorem] Banach contraction principle
> Let $X$ be a complete metric space and the mapping $T:X\to X$ be a contraction. Then $T$ has exactly one fixed point.
> 
> > [!Proof]-
> > Choose any $x_{0}\in X$. Let $x_{n}=T^{n}x_{0}$. For $n\leq m$,
> > $$
> > \begin{align}
> > d(x_{n}, x_{m}) & \leq d(T^{n}x_{0}, T^{m}x_{0}) \\
> >  & \leq c^{m}d(x_{0}, T^{m-n}x_{0}) \\
> >  & \leq c^{m}(d(x_{0}, Tx_{0})+\dots+d(T^{n-m+1}x_{0}, T^{n-m}x_{0})) \\
> >  & \leq c^{m}\left( \frac{d(x_{0}, Tx_{0})}{1-c} \right) \to 0\text{ as }n, m\to \infty
> > \end{align}
> > $$
> > So, $\{ T^{n}x_{0} \}$ is Cauchy. Since $X$ is complete, it converges, say to $x$. Since $T$ is continuous, $T(x)$ must be $x$. Showing uniqueness is trivial.

^e6644a

