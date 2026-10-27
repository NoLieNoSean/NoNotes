---
id: "586"
date: 2026-10-15
time: 14:00
tags:
  - LIALG
  - Lecture
desc: Representations of SL(2)
---
Let $F$ be algebraically closed, $L=\mathfrak{sl}(2, F)$. Let $V$ be an arbitrary $L$-module. Since $h$ is semisimple, [[LEC LIALG 16#^3fde09]] implies that $h$ acts diagonally on $V$. This yields a decomposition of $V$ as a direct sum of eigenspaces $V_{\lambda}$. 

> [!Lemma]
> If $v\in V_{\lambda}$, $xv\in V_{\lambda+2}$, $yv\in V_{\lambda-2}$.
> 
> > [!Proof]-
> > 
> > $h(xv)=[hx]v+x(hv)=2xv+\lambda xv$. 
> 

Since $\dim V< \infty$, and the sum $V=\coprod_{\lambda\in F}V_{\lambda}$ is direct, there must exist $V_{\lambda}$ such that $V_{\lambda+2}=0$. By the lemma, $xv=0$ for any $v\in V_{\lambda}$. Any nonzero vector in $V_{\lambda}$ annihilated by $x$ is called a **maximal vector** of weight $\lambda$. 

> [!Lemma]
> Let $V$ be an irreducible $L$-module. Choose a maximal vector, say $v_{0}\in V_{\lambda}$. Set $v_{-1}=0$, $v_{i}=(1/i!)y^{i}v_{0}$ for $i\geqslant 0$. 
> 1. $hv_{i}=(\lambda-2i)v_{i}$
> 2. $yv_{i}=(i+1)v_{i+1}$
> 3. $xv_{i}=(\lambda-i+1)v_{i-1}$ ($i\geqslant 0$)
> 
> > [!Proof]-
> > 
> > Use induction for (3). 

^1abce9

Thanks to [[#^1abce9]].1, all the nonzero $v_{i}$ are linearly independent. Since $\dim V< \infty$, let $m$ be the smallest integer for which $v_{m}\ne 0$, $v_{m+1}=0$ (evidently $v_{m+i}=0$ for all $i> 0$). Taken together, [[#^1abce9]].1-3 show that the subspace of $V$ with basis $(v_{0}, \dots, v_{m})$ is an $L$-submodule, different from $0$. Because $V$ is irreducible, this subspace must be all of $V$. 

1. From [[#^1abce9]].3, we obtain that $\lambda=m=\dim V-1$ (plug $i=m+1$). 
2. Each weight $\mu$ occurs with multiplicity $1$.
3. Since $V$ determines $\lambda$ uniquely, the maximal vector $v_{0}$ is the only possible one in $V$ (apart form nonzero scalar multiples). 

> [!Theorem]
> Let $V$ be an irreducible $L$ module for $L=\mathfrak{sl}(2, F)$. 
> 1. Relative to $h$, $V$ is the direct sum of weight spaces $V_{\lambda}$ for $\lambda=m, m-2, \dots, (-m-2), -m$ for $m=\dim V-1$ and $\dim V_{\lambda}=1$ for each $\lambda$.
> 2. $V$ has (up to nonzero scalar multiples) a unique maximal vector, whose weight (called the highest weight of $V$) is $m$. 
> 3. The action of $L$ on $V$ is given explicitly by [[#^1abce9]] if the basis is chosen in the prescribed fashion. In particular, there exists at most one irreducible $L$-module of each possible dimension $m+1$, $m\geqslant 0$. 

^6b54be

> [!Corollary]
> Let $V$ be any finite dimensional $L$-module for $L=\mathfrak{sl}(2, F)$. Then the eigenvalues of $h$ on $V$ are all integers, and each occurs along with its negative (an equal number of times). Moreover, in any decomposition of $V$ into direct sum of irreducible submodules, the number of summands is precisely $\dim V_{0}+\dim V_{1}$. 
> 
> > [!Proof]-
> > 
> > If $V=0$, there is nothing to prove. Otherwise use [[LEC LIALG 15#^9c1102|Weyl's theorem]] to write $V$ as a direct sum of irreducible submodules. The latter are described by [[#^6b54be]], so the first assertion follows. For the second, just observe that each irreducible $L$-module has a unique occurrence of either the weight $0$ or else the weight $1$ (but not both). 

