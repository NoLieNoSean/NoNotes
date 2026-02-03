---
id: "394"
date: 2026-01-23
time: 11:50
tags:
  - ALG4
  - Lecture
---
# Finitely generated torsion modules over PIDs

1. $R$ is a PID, $M$ is a finitely generated [[LEC ALG4 5#^73f393|torsion]] $R$-module with generating set $X=\{ x_{1}, \dots, x_{n} \}$. 
2. **We select once and for all a system of representatives for the prime elements of $R$, modulo units**.

Immediate consequences:
1. $R$ is Noetherian, and it follows that $M$ is Noetherian by [[LEC ALG4 4#^cc0b17]]. 
2. $R$ is a UFD, by [[LEC ALG3 9#^97c00a]].

> [!Proposition]
> $\text{Ann}_{R}(M)$ is a nonzero (principal) ideal.
> 
> > [!Proof]-
> > 
> > It is clear that
> > $$
> > \bigcap_{x\in X}\text{Ann}_{R}(Rx)=\text{Ann}_{R}(M).
> > $$
> > $\text{Ann}_{R}(Rx_{i})\ne 0$ for all $i$, since $M$ is a torsion module. Let $c_{i}\in\text{Ann}_{R}(Rx_{i})$ for each $i$. Then, $c_{1}\dots c_{n}$ lies in the intersection. 
> 

^567156

> [!Definition]
> Let $p\in R$ be prime. 
> $$
> M_{p}:=\{ x\in M: \exists e\geqslant  0 \text{ such that }p^{e}x=0 \}.
> $$

> [!Proposition]
> There exists $e'\geqslant 0$ such that
> $$
> M_{p}=\{ x\in M: p^{e'}x=0 \}
> $$
> 
> > [!Proof]-
> > 
> > The ascending chain 
> > $$
> > \{ x\in M : px=0\}\subseteq \{ x\in M: p^{2}x =0\}\subseteq\dots
> > $$
> > stabilizes since $M$ is Noetherian. 
> 

> [!Proposition]
> TFAE:
> 1. $M_{p}\ne 0$;
> 2. There exists $x\ne 0$ such that $px =0$;
> 3. $\text{Ann}_{R}(M)\subseteq \langle p \rangle$. 
> 
> > [!Proof]-
> > 
> > $(1 \iff 2)$ is clear. 
> > 
> > $(2 \implies 3)$ Let $x\ne 0$ be such that $px = 0$. Clearly, $\text{Ann}_{R}(M)\subseteq\text{Ann}_{R}(Rx)$ and $\text{Ann}_{R}(Rx)\supseteq \langle p \rangle$. Since [[LEC ALG3 4#^340b52|prime ideals in a PID are maximal]] and $\text{Ann}_{R}(Rx)\ne R$, we have $\text{Ann}_{R}(Rx)=\langle p \rangle$. 
> > 
> > $(3 \implies 2)$ By [[#^567156]], write $\text{Ann}_{R}(M)=\langle a \rangle$. Then, $a=pb$ for some $b\in R$. It suffices to prove the existence of a $y\in M$ such that $by\ne 0$. Since the exponent of $p$ in $b$ is one less than in $a$, we have $\langle b \rangle \subsetneq \langle a \rangle$. Thus, $b\not\in\text{Ann}_{R}(M)$, so there must exist $y\in M$ such that $by\ne 0$. 
> 

^56fd10

> [!Corollary]
> There are only finitely many primes $p\in R$ for which $M_{p}\ne 0$. 
> 
> > [!Proof]-
> > 
> > We use [[#^56fd10]]. Let $\text{Ann}_{R}(M)=\langle a \rangle$. If $\text{Ann}_{R}(M)\subseteq \langle p \rangle$, then $p\ | \ a$. Since $a$ has a unique finite prime factorization, there exist only finitely many such $p$. 
> 

^eb9f2e

> [!Proposition]
> Let $p, \pi\in R$ be distinct primes (modulo units). Then, $M(p)\cap M(\pi)=0$. 
> 
> > [!Proof]-
> > 
> > Let $x\in M(p)\cap M(\pi)$. Then there exists $e\geqslant 0$ and $\epsilon\geqslant 0$ such that $p^{e}x=0=\pi^{\epsilon}x$. Assume $e, \epsilon\geqslant 1$. Let $up^{e}+v\pi^{\epsilon}=1$ with $u, v\in R$. Then $x=(up^{e}+v\pi^{\epsilon})x=0$. 
> 


[!Theorem]
Let $R$ be a PID, and $M$ be a finitely generated torsion $R$-module. Let $A(M)$ be the [[#^eb9f2e|finite]] set of primes $p\in R$ for which $M_{p}$ is nonzero. Then, 
$$
M=\bigoplus_{p\in\text{A}(M)}M_{p}.
$$
[!Proof]-

We first verify that $\sum_{p\in A(M)}M_{p}$ is indeed a direct sum. 

Suppose $A(M)=\{ p_{1}, \dots, p_{m} \}$. We will show that
$$
M_{p_{1}}\cap \sum_{i=2}^{m} M_{p_{i}}=0.
$$
Let $y\in M_{p_{1}}\cap \sum_{i=2}^{m}M_{p_{i}}$. Let $y_{i}\in M_{p_{i}}$ for $2\leqslant i\leqslant m$ such that $y=y_{2}+\dots+y_{m}$. 

There exist $e_{1}, e_{2}, \dots, e_{m}\geqslant 0$ such that $p_{i}^{e_{i}}=0$ for each $i$. If $e_{1}=0$, we are done; suppose $e_{1}\geqslant 1$. Let $q=p_{2}^{e_{2}}p_{3}^{e_{3}}\dots p_{m}^{e_{m}}$. Again, WLOG suppose $p\ne 1$. Then, $p:=p_{1}^{e_{1}}$ and $q$ are coprime, so there exist $u, v\in R$ such that $pu+qv=1$. Thus, 
$$
y=y(pu+qv)=ypu+(y_{2}+\dots+y_{m})qv=0.
$$
