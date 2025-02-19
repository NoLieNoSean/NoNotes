---
tags:
  - CAL1
  - Lecture
date: 2025-02-14
time: 12:22
---
## The Banach contraction principle

> [!Definition]
> A point $x\in X$ is called a *fixed point* of the mapping $T:X\to X$ if $T(x)=x$.

> [!Definition]
> A mapping $T$ from a metric space $(X, \rho)$ into itself is said to be *Lipschitz* if there exists $c\geq 0$, called a Lipschitz constant for the mapping, for which 
> $$
> \rho(T(u), T(v))\leq c~\rho(u, v) ~~\forall u, v\in X.
> $$
> If $c< 1$, the Lipschitz mapping is called a *contraction*.

> [!Theorem] Banach contraction principle
> Let $X$ be a complete metric space and the mapping $T:X\to X$ be a contraction. Then $T$ has exactly one fixed point.

