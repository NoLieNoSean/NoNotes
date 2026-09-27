---
id: "522"
date: 2026-08-13
time: 14:09
tags:
  - LIALG
  - Lecture
desc: solvability and nilpotency
P1: true
---
# Solvability

> [!Definition] Derived series, solvability
> Let $L$ be a Lie algebra. The **derived series** is the sequence $L^{(0)}=L$, $L^{(1)}=[L,L]$, $L^{(2)}=[L^{(1)}, L^{(1)}]$, ..., $L^{(i)}=[L^{(i-1)}, L^{(i-1)}]$. Call $L$ **solvable** if $L^{(n)}=0$ for some $n$. 

For example, abelian implies solvable, whereas simple algebras are definitely not solvable. 

> [!Example] 
> $\mathfrak{t}(n, F)$ (the Lie algebra of all $n\times n$ upper triangular matrices) is solvable. 
> 
> Indeed, recall that $\mathfrak{t}(n, F)=\mathfrak{d}(n, F)+\mathfrak{n}(n, F)$ [^1]. Since $\mathfrak{d}(n, F)$ is abelian and $[\mathfrak{d}(n, F), \mathfrak{n}(n, F)]=\mathfrak{n}(n, F)$, we conclude that $\mathfrak{t}(n, F)^{(1)}=\mathfrak{n}(n, F)$. It remains to show that $\mathfrak{n}(n, F)$ is nilpotent, which can be done by explicitly computing the derived series. 

^868e00

> [!Lemma] @humphreysIntroductionLieAlgebras1972 [p.11] 
> 1. Let $L$ be a solvable Lie algebra. Then every Lie subalgebra and quotient algebra of $L$ are solvable. 
> 2. Let $L$ be a Lie algebra and $I$ be an ideal of $L$ such that both $I$ and $L/I$ are solvable. Then $L$ is solvable. 
> 3. Let $I$ and $J$ be two solvable ideals of a Lie algebra $L$. Then $I+J$ is solvable. 

^772394

> [!Definition] Semisimple Lie algebra
> Let $L$ be an arbitrary Lie algebra and let $S$ be a maximal solvable ideal (chill, we're in finite dimensions). If $I$ is any other solvable ideal of $L$, then [[#^772394]].3 forces $S+I=S$, or $I\subseteq S$. This proves the existence of a unique maximal solvable ideal, called the **radical** of $L$ and denoted $\mathrm{Rad}(L)$. If $\mathrm{Rad}(L)=0$, $L$ is called **semisimple**. 


It follows from [[#^772394]].2 that for any Lie algebra $L$, $L/\text{rad}(L)$ is semisimple. 

# Nilpotency

> [!Definition] Central series and nilpotency
> Let $L$ be a Lie algebra. The **central series** of $L$ is the sequence $L^{0}=L$, $L^{1}=[LL]$, $L^{2}=[LL^{1}]$, ..., $L^{i}=[LL^{i-1}]$. We call $L$ **nilpotent** if $L^{n}=0$ for some $n$. 

^2c9e07

> [!Example]
> Since $L^{(i)}\subseteq L^{i}$, nilpotent algebras are solvable. The converse is false. For example, it follows form the observations made in [[#^868e00]] that $\mathfrak{t}(n, F)$ is not nilpotent. On the other hand, it is easy to see that $\mathfrak{n}(n, F)$ is nilpotent by explicitly computing the central series. 


> [!Lemma] @humphreysIntroductionLieAlgebras1972 [p. 12]
> 1. Let $L$ be a nilpotent Lie algebra. Then every Lie subalgebra and quotient algebra of $L$ are nilpotent. 
> 2. If $L/Z(L)$ is nilpotent, then so is $L$. 
> 3. If $L$ is nilpotent and nonzero, then $Z(L)\ne 0$. 

^98ab7d

[^1]: This is a direct sum of vector spaces, not Lie algebras! 



