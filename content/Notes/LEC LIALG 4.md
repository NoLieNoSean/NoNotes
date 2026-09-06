---
id: "522"
date: 2026-08-13
time: 14:09
tags:
  - LIALG
  - Lecture
---
> [!Definition] Derived series
> Let $L$ be a Lie algebra. The **derived series** is a sequence $L^{(0)}=L$, $L^{(1)}=[L,L]$, $L^{(2)}=[L^{(1)}, L^{(1)}]$, ..., $L^{(i)}=[L^{(i-1)}, L^{(i-1)}]$. Call $L$ **solvable** if $L^{(n)}=0$ for some $n$. 

For example, abelian implies solvable, whereas simple algebras are definitely nonsolvable. 

> [!Example] 
> Prove that $\mathfrak{t}(n, F)$ (the Lie algebra of all $n\times n$ upper triangular matrices) is solvable. 

> [!Lemma] @humphreysIntroductionLieAlgebras1972 [p.11] 
> 1. Let $L$ be a solvable Lie algebra. Then every Lie subalgebra and quotient algebra are solvable. 
> 2. Let $L$ be a Lie algebra and $I$ be an ideal of $L$ such that both $I$ and $L/I$ are solvable. Then $L$ is solvable. 
> 3. Let $I$ and $J$ be two solvable ideals of a Lie algebra $L$. Then $I+J$ is solvable. 

^772394

Let $L$ be an arbitrary Lie algebra and let $S$ be a maximal solvable ideal (one exists by Zorn's lemma; similar to [[LEC ALG3 6#^5e9db5]]). If $I$ is any other solvable ideal of $L$, then [[#^772394]].3 forces $S+I=S$, or $I\subseteq S$. This proves the existence of a unique maximal solvable ideal, called the **radical** of $L$ and denoted $\mathrm{Rad}(L)$. In case $\mathrm{Rad}(L)=0$, $L$ is called semi-simple. 

[!Definition] Radical 

[!Definition] Semisimple Lie algebra

[!Definition] Simple Lie algebra

[!Note]
For any non-solvable Lie algebra $L$, $L/\text{rad}(L)$ is semisimple. 

[!Definition] Central series

[!Lemma] @humphreysIntroductionLieAlgebras1972 [p. 12]

