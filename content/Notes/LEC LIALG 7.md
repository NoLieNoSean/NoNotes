---
id: "540"
date: 2026-08-27
time: 14:04
tags:
  - LIALG
  - Lecture
desc: Corollaries of Engel's theorem
P1: true
---

Recall that for a Linear Lie algebra $L$,
$$
L\text{ is nilpotent}\underset{\impliedby \forall x\in L}{\implies} x\in L\text{ is ad-nilpotent}\underset{\centernot\implies}{\impliedby} x\in L \text{ is nilpotent}
$$

So, while [[LEC LIALG 5#^684123]] is not applicable to any nilpotent lie algebra $L$ (it only works for *linear* Lie algebras consisting of nilpotent elements), it certainly can be applied to adjoint representation of $L$! We will use this observation a few times. 

# Corollaries of Engel's theorem

> [!Corollary] @humphreysIntroductionLieAlgebras1972 [p. 13] 
> Let $L$ be nilpotent, $K$ an ideal of $L$. Then if $K\ne 0$, $K\cap Z(L)\ne 0$. In particular, $Z(L)\ne 0$ by [[LEC LIALG 4#^98ab7d]]. 
> 
> > [!Proof]-
> > 
> > Since $K$ is an ideal of $L$, $L$ acts on $K$ by the [[LEC LIALG 2#^f7a6db|adjoint representation]] via the homomorphism $\varphi:L\to \mathfrak{gl}(K)$, $\varphi(x)=\text{ad}_{L}(x)|_{K}$. Since $L$ is nilpotent, $\text{ad}_{L}(x)$ is nilpotent for every $x\in L$. It follows that $\varphi(L)$ is a subalgebra of $\mathfrak{gl}(K)$ consisting of nilpotent elements[^1]. By [[LEC LIALG 5#^684123]], there is a nonzero element $z\in K$ such that $\varphi(x)(z)=[xz]=0$ for all $x\in L$. Hence, we have $0\ne z\in K\cap Z(L)$. 
> 


> [!Definition] Flag
> Let $V$ be a nonzero finite dimensional vector space over $F$. A strictly ascending series
> $$
> 0\subsetneq V_{i_{1}}\subsetneq V_{i_{2}}\subsetneq\dots \subsetneq V_{i_{r}}=V
> $$
> of vector subspaces such that $\dim V_{i_{j}}=i_{j}$ is called a **flag** of $V$. 


> [!Definition] Full flag
> Let $V$ be a nonzero finite dimensional vector space over $F$ of dimension $n$. A strictly ascending series
> $$
> 0=V_{0}\subsetneq V_{1}\subsetneq\dots \subsetneq V_{n}=V
> $$
> such that $\dim V_{i}=i$ is called a **full flag** of $V$. 

$GL(V)$ acts transitively on the collection of full flags of $V$. If $V=F^{n}$, the collection of all full flags of $V$ is identified with the collection of cosets[^2] $GL(n, F)/B$, where $B$ is the subgroup of all $n\times n$ invertible upper-triangular matrices. 



> [!Corollary]
> Let $V$ be a nonzero finite dimensional vector space over $F$ of dimension $n$. Let $L$ be a Lie subalgebra of $\mathfrak{gl}(V)$ consisting of nilpotent elements. Then there is a full flag of $V$ such that $xV_{i}\subseteq V_{i-1}$ for every $x\in L$ and $1\leqslant i\leqslant n$. In other words, there exists a basis of $V$ relative to which the matrices of $L$ are in $\mathfrak{n}(n, F)$. 

^e8795e

[!Proof]-

Induct on $\dim V$. By an earlier theorem, there is a nonzero vector $v_{1}\in V$ such that $xv_{1}=0$ for all $x\in L$. Let $V_{1}=Fv_{1}$. Then $x(V_{1})=0$ for all $x\in L$, so $V_{1}$ is $L$-stable. 

Consider the map $\varphi:L\to \mathfrak{gl}(V/V_{1})$ defined by
$$
\varphi(x)(v+V_{1}):=xv+V_{1}\quad \forall x\in L, v\in V.
$$
$\varphi$ is well defined since $V_{1}$ is $L$-stable. Verify that $\varphi$ is a Lie algebra homomorphism. Further, since $x$ is nilpotent for every $x\in L$, $\varphi(x)$ is nilpotent for every $x\in L$. So, $\varphi(L)$ is a Lie subalgebra of $\mathfrak{gl}(V/V_{1})$ consisting of nilpotent elements. Further, $\dim(V/V_{1})=\dim V-1$. Therefore, by the induction hypothesis, there is a full flag 
$$
0=V_{1}/V_{1}\subsetneq V_{2}/V_{1}\subsetneq\dots \subsetneq V_{n}/V_{1}=V/V_{1}
$$
of $V/V_{1}$ such that $\varphi(x)(V_{i}/V_{1})\subseteq V_{i-1}/V_{1}$ for every $x\in L$ and $2\leqslant i\leqslant n$. Therefore, 
$$
0=V_{0}\subsetneq V_{1}\subsetneq V_{2}\subsetneq\dots \subsetneq V_{n}=V
$$
is a full flag of $V$ such that $xV_{i}\subseteq V_{i-1}$ fore very $1\leqslant i\leqslant n$. 


> [!Corollary]
> Let $L$ be a nonzero nilpotent Lie algebra over $F$ of dimension $n$. Then there is a full flag $0=L_{0}\subsetneq L_{1}\subsetneq\dots \subsetneq L_{n}=L$ of ideals of $L$ such that $\text{ad}_{L}(x)(L_{i})\subsetneq L_{i-1}$ for every $1\leqslant i\leqslant n$ and $x\in L$. 
> 
> > [!Proof]-
> > 
> > Consider the adjoint representation $\text{ad}_{L}:L\to \mathfrak{gl}(L)$. Since $L$ is nilpotent, all elements of $L$ are ad-nilpotent, so $\text{ad}_{L}(L)$ is a subalgebra of $\mathfrak{gl}(L)$ consisting of nilpotent elements. By [[#^e8795e]], there is a full flag $0=L_{0}\subsetneq L_{1}\subsetneq\dots \subsetneq L_{n}=L$ of $L$ such that $\text{ad}_{L}(x)(L_{i})\subseteq L_{i-1}$ for all $x\in L$ and $1\leqslant i\leqslant n$. 
> 

> [!Corollary]
> Let $L$ be a nonzero nilpotent Lie algebra over $F$ of dimension $n$. Then there is a basis $\{ x_{1}, \dots, x_{n} \}$ of $L$ in which the matrix of $\text{ad}_{L}(x)$ lies in $\mathfrak{n}(n, F)$ for every $x\in L$. 


[^1]: Ahem, *not* a nilpotent subalgebra. 

[^2]: $B$ is not normal - recall [[LEC ALG1 19#^f6b178]]. 
