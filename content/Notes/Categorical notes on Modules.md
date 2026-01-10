---
id: "371"
date: 2026-01-06
time: 00:54
tags:
  - ALG3
  - ALG4
---
# Products and coproducts

As in $\textsf{Ab}$, products and coproducts exist, and finite products and coproducts coincide in $R\textsf{-Mod}$. If $M$ and $N$ are $R$-modules, we can give an $R$-module structure to $M\oplus N$ (the direct sum of the underlying abelian groups) by prescribing 
$$
\begin{align}
r(m, n):=(rm, rn) &  & \forall r\in R .
\end{align}
$$
Note that $M\oplus N$ comes together with several $R$-module homomorphisms:
$$
\begin{align}
 & \pi_{M}:M\oplus N\to M, \quad \pi_{N}:M\oplus N\to N \\
 & i_{M}:M\to M\oplus N ,  \quad i_{N}:N\to M\oplus N.
\end{align}
$$
> [!Proposition] @aluffiAlgebraChapter02009 III.6.1
> $M\oplus N$ satisfies the universal properties of both the [[Category Theory Preliminaries#^25bb2d|product]] and the [[Category Theory Preliminaries#^2e3ac5|coproduct]] of $M$ and $N$. 

# Kernels and Cokernels

Recall that monomorphisms and epimorphisms [[Category Theory Preliminaries#Common Fallacies|do not automatically satisfy good properties]]. They do in $R\textsf{-Mod}$. 

Universal properties for kernels and cokernels in $R\textsf{-Mod}$ are analogous to the corresponding properties for groups ([[Categorical notes on groups#^16ae31]], [[Categorical notes on groups#^a56a9d]]). 

> [!Proposition]
> The following hold in $R$-mod:
> 1. Kernels and cokernels exist;
> 2. $\varphi$ is a monomorphism $\iff$ $\ker\varphi$ is trivial $\iff$ $\varphi$ is injective as a set-function;
> 3. $\varphi$ is an epimorphism $\iff$ $\text{coker}\,\varphi$ is trivial $\iff$ $\varphi$ is surjective as a set-function. 

It is easy to check that the usual definitions of kernel and cokernel satisfy their universal properties. Compare 2 and 3 with [[Categorical notes on groups#^79d9ee]], [[Categorical notes on groups#^1e7b58]]; proofs are easy generalizations[^1]. 

[^1]: Recall that while epimorphism $\iff$ surjective is true in $\textsf{Gp}$, [[Categorical notes on groups#^1e7b58]]'s method of proof (using cokernels) only works for $\textsf{Ab}$ since the 'standard' definition of cokernel is not valid in $\textsf{Gp}$. We have no such hitches in $R\textsf{-Mod}$. 
