---
id: "496"
date: 2026-07-07
time: 18:00
tags:
---
A classical theorem in knot theory is the following:

> [!Theorem] Dehn, @schultensIntroduction3manifolds2014 Exr 4.9.3
> A knot is the unknot iff the fundamental group of its complement is cyclic. 

The proof hinges on the following lemma:

> [!Theorem] Dehn's Lemma, @schultensIntroduction3manifolds2014 3.5.1
> Suppose that $M$ is a $3$-manifold and $f:D\to M$ is a continuous map form the disk into $M$ such that $f(\partial D)\subseteq \partial M$. If for some neighborhood $U$ of $\partial D$, $f|_{U}$ is an embedding, then $f|_{\partial D}$ extends to an embedding. 

#td Read the sketch from Schultens.

> [!Theorem] The loop Theorem, @schultensIntroduction3manifolds2014 3.5.2
> Let $M$ be a $3$-manifold and $F$ a connected surface in $\partial M$. If $N$ is a normal subgroup of $\pi_{1}(F)$ and if $\ker(\pi_{1}(F)\to \pi_{1}(M))/N$ is not trivial, then there is a [[Incompressible surfaces#^95c967|proper]] embedding $g:(D, \partial D)\to(M, F)$ such that $[g|_{\partial D}]$ is not in $N$. 

> [!Corollary] @schultensIntroduction3manifolds2014 3.5.3
> Let $M$ be a $3$-manifold and $F$ a connected surface in $\partial M$. If $\ker(\pi_{1}(F)\to \pi_{1}(M))$ is not trivial, then there is a proper embedding $g:(D, \partial D)\to(M, F)$ such that $[g|_{\partial D}]$ is non-trivial in $\pi_{1}(F)$. 

^a0c772

[[#^a0c772]] says that if $\pi_{1}(F)$ does not inject into $\pi_{1}(M)$, then $F$ is compressible. The converse is also true:

> [!Theorem] @schultensIntroduction3manifolds2014 3.5.5
> Let $M$ be a $3$-manifold. A surface $F\subseteq M$ is [[Incompressible surfaces#^adf688|incompressible]] iff $\pi_{1}(F)\to \pi_{1}(M)$ is injective. 

^c07d50
