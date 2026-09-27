---
id: "562"
date: 2026-09-01
time: 14:00
tags:
  - LIALG
  - Lecture
desc: Corollaries of Lie's theorem, Chinese remainder theorem
P1: true
---
# Lie's theorem and corollaries

> [!Theorem] Lie
> Let $F$ be a algebraically closed field of characteristic $0$, and $V$ be a finite dimensional vector space over $F$. Let $L$ be a solvable Lie subalgebra of $\mathfrak{gl}(V)$. Then there is a full flag 
> $$
> 0=V_{0}\subsetneq V_{1}\subsetneq\dots \subsetneq V_{n}=V
> $$
> of $V$ such that $xV_{i}\subseteq V_{i}$ for all $0\leqslant i\leqslant n$ and $x\in L$. 

^a1493d

[!Corollary]
Let $F, V, L$ satisfy the hypotheses of [[#^a1493d]]. Then there is a basis of $V$ in which the matrix of every $x\in L$ lies in $\mathfrak{t}(n, F)$. 

[!Corollary]
Let $L$ be a solvable Lie algebra of dimension $n$ over an algebraically closed field of characteristic $0$. Then
1. There is a full flag 
$$
0=L_{0}\subsetneq L_{1}\subsetneq\dots \subsetneq L_{n}=L
$$
	of ideals of $L$. 
2. There is a basis of $L$ in which the matrix of $\text{ad}_{L}x$ lies in $\mathfrak{t}(n, F)$ for all $x\in L$. 
3. There is a basis of $L$ in which the matrix of $\text{ad}_{L}x$ lies in $\mathfrak{n}(n, F)$ for all $x\in[LL]$. By [[LEC LIALG 6#^ad92b6|Engel]], $[LL]$ is nilpotent. 

