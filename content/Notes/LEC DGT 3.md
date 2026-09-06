---
id: "521"
date: 2026-08-12
time: 14:16
tags:
  - DGEO
  - Lecture
---
# Tangent spaces

> [!Definition] Tangent space
> Let $p\in M$. A vector $v\in \mathbb{R}^{k}$ is said to be **tangent to $M$ at $p$** if there exists a smooth curve $\gamma:(-\epsilon, \epsilon)\to \mathbb{R}^{k}$ such that $\gamma((-\epsilon, \epsilon))\subseteq M$, $\gamma(0)=p$, and $\gamma'(0)=v$. The **tangent space of $M$ at $p$**, denoted by $T_{p}M$, is given by
> $$
> T_{p}M=\{ v\in \mathbb{R}^{k}:v\text{ is tangent to }M\text{ at }p \}.
> $$
> 


> [!Proposition]
> Let $p\in M$. 
> 1. If $\phi:\Omega\to V$ is a local parameterization of $M$ around $p$ and $a=\phi ^{-1}(p)$, then $T_{p}M$ is the image of $D\phi_{a}:\mathbb{R}^{n}\to \mathbb{R}^{k}$. Hence $T_{p}M$ is a vector space of dimension $n$. 
> 2. If $g: \tilde{U}\to \mathbb{R}^{k-n}$ is a [[LEC DGT 2#^0ad231|local defining function]] for $M$ around $p$, then $T_{p}M$ is the kernel of $Dg_{p}:\mathbb{R}^{k}\to \mathbb{R}^{k-n}$. 


> [!Definition] Derivative of a smooth map between manifolds
> Let $M_{i}\subseteq \mathbb{R}^{k_{i}}$ be an $n_{i}$-dimensional manifold, $i=1, 2$, let $f:M_{1}\to M_{2}$ be smooth and let $p\in M_{1}$. The **derivative of $f$ at $p$**, denoted $Df_{p}:T_{p}M_{1}\to T_{f(p)}M_{2}$ is defined as follows. For $v\in T_{p}M_{1}$, choose a smooth curve $\gamma:(-\epsilon, \epsilon)\to M_{1}$ such that $\gamma(0)=p$ and $\gamma'(0)=v$, and set $Df_{p}(v)=(f\circ\gamma)'(0)$.  

^233791

Note that [[#^233791]] is equivalent to taking a local smooth extension $\tilde{f}$ of $f$ around $p$ and defining $Df_{p}(v):=D\tilde{f}_{p}(v)$, since
$$
D\tilde{f}_{p}(v)=D\tilde{f}_{p}(\gamma'(0))=(\tilde{f}\circ\gamma)'(0)=(f\circ\gamma)'(0).
$$


> [!Proposition]
> [[#^233791]] is well defined, and $Df_{p}$ is a linear map. 

> [!Proposition]
> Let $M_{i}\subseteq \mathbb{R}^{k_{i}}$ be smooth manifolds, $i=1, 2, 3$, and let $f:M_{1}\to M_{2}$ and $g:M_{2}\to M_{3}$ be [[LEC DGT 2#^8d4caf|smooth]]. Then $g\circ f$ is smooth and, for every $p\in M_{1}$, 
> $$
> D(g\circ f)_{p}=Dg_{f(p)}\circ Df_{p}.
> $$
> 

> [!Theorem] Inverse function theorem for manifolds
> Let $M$ and $N$ be smooth manifolds, let $f:M\to N$ be smooth, and let $p\in M$. If $Df_{p}:T_{p}M\to T_{f(p)}N$ is a linear isomorphism, then there exist open neighborhoods $U\subseteq M$ of $p$ and $V\subseteq N$ of $f(p)$ such that $f(U)=V$ and $f|_{U}:U\to V$ is a diffeomorphism. 
> 
> Conversely, if $f$ restricts to a diffeomorphism between neighborhoods of $p$ and $f(p)$, then $Df_{p}$ is a linear isomorphism. 

> [!Proposition] Principle of Lagrange multipliers
> Let $U\subseteq \mathbb{R}^{k}$ be open, and let $F, g^{1}, \dots, g^{m}:U\to \mathbb{R}$ be smooth, where $m \leqslant k$. Suppose that $p\in U$ satisfies $g^{i}(p)=0$ for $i=1, \dots, m$. Assume that the vectors $\nabla g^{1}(p), \dots, \nabla g^{m}(p)$ are linearly independent. If $F$ has a local extremum at $p$ subject to the constraints $g^{i}(p)=0$ for $i=1, \dots, m$, then there exist $\lambda_{1}, \dots, \lambda_{m}\in \mathbb{R}$ such that
> $$
> \nabla F(p)=\lambda_{1}\nabla g^{1}(p)+\dots+\lambda_{m}\nabla g^{m}(p).
> $$
> 