---
id: "394"
date: 2026-01-23
time: 11:50
tags:
  - ALG4
  - Lecture
  - Processed
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
> Let $a\in R$, $a\ne 0$. 
> $$
> M(a):=\{ x\in M: \exists e\geqslant  0 \text{ such that }a^{e}x=0 \}.
> $$

> [!Proposition]
> There exists $e'\geqslant 0$ such that
> $$
> M(a)=\{ x\in M: a^{e'}x=0 \}
> $$
> 
> > [!Proof]-
> > 
> > The ascending chain 
> > $$
> > \{ x\in M : ax=0\}\subseteq \{ x\in M: a^{2}x =0\}\subseteq\dots
> > $$
> > stabilizes since $M$ is Noetherian. 
> 

^060841

> [!Proposition]
> TFAE:
> 1. $M(p)\ne 0$;
> 2. There exists $x\ne 0$ such that $px =0$;
> 3. $\text{Ann}_{R}(M)\subseteq \langle p \rangle$. 
> 
> > [!Proof]-
> > 
> > $(1 \iff 2)$ is clear. 
> > 
> > $(2 \implies 3)$ Let $x\ne 0$ be such that $px = 0$. Clearly, $\text{Ann}_{R}(M)\subseteq\text{Ann}_{R}(Rx)$ and $\text{Ann}_{R}(Rx)\supseteq \langle p \rangle$. Since [[LEC ALG3 4#^340b52|prime ideals in a PID are maximal]] and $\text{Ann}_{R}(Rx)\ne R$, we have $\text{Ann}_{R}(Rx)=\langle p \rangle$. 
> > 
> > $(3 \implies 2)$ By [[#^567156]], write $\text{Ann}_{R}(M)=\langle a \rangle$. Then, $a=pb$ for some $b\in R$. It suffices to prove the existence of a $y\in M$ such that $by\ne 0$. Since the exponent of $p$ in $b$ is one less than in $a$, we have $\langle b \rangle \not\subset \langle a \rangle$. Thus, $b\not\in\text{Ann}_{R}(M)$, so there must exist $y\in M$ such that $by\ne 0$. 
> 

^56fd10

> [!Remark]
> Let $\text{Ann}_{R}(M)=\langle a \rangle$. The primes $p\in R$ for which $M(p)\ne 0$ are precise those which divide $a$, by [[#^56fd10]]. Since $a$ has a unique finite prime factorization, there exist only finitely many such $p$. 
> 

^eb9f2e

> [!Proposition]
> Let $b, c\in R$ be relatively prime nonzero nonunits. Then, $M(bc)=M(b)\oplus M(c)$. 
> 
> > [!Proof]-
> > 
> > Let $x\in M(b)\cap M(c)$. There exist $m, n\geqslant 1$ such that $b^{m}x=0=c^{n}x$. Write $1=\lambda b^{m}+\mu c^{n}$. Then, $x=\lambda b^{m}x+\mu c^{n}x=0$. 
> > 
> > Note that $M(b)\subseteq M(bc)$, and $M(c)\subseteq M(bc)$. Thus, the sum $M(b)+M(c)$ is a direct sum inside $M(bc)$. It remains to show that $M(bc)=M(b)+M(c)$. Let $x\in M(bc)\setminus \{ 0 \}$. There exists $N\geqslant 1$ such that $(bc)^{N}x=0$. Write $1=\lambda b^{N}+\mu c^{N}$. Then, $x=\lambda b^{N}x+\mu c^{N}x$, where $b^{N}x\in M(c)$ and $c^{N}x\in M(b)$. 
> 

^2da73b

> [!Proposition] @langAlgebra2002 3.7.5, p1
> Let $R$ be a PID, $M$ a finitely generated torsion module. Let $\text{Ann}_{R}(M)=\langle a \rangle$, and $\{ p_{1}, \dots, p_{m} \}$ be the prime divisors of $a$ [^1]. Then, 
> $$
> M=\bigoplus_{i=1}^{m}M(p_{i}).
> $$
> 
> > [!Proof]-
> > 
> > Induct on $m$. Clear for $m=1$. Write $a=bc$ where $b, c$ are nonunits and $(b, c)=1$. 
> > $$
> > a=\underbrace{ p_{1}^{e_{1}}\dots p_{n}^{e_{n}} }_{ b }\underbrace{ p_{n+1}^{e_{n+1}}\dots p_{m}^{e_{m}} }_{ c }.
> > $$
> > By [[#^2da73b]], $M=M(a)=M(b)\oplus M(c)$. Using the induction hypothesis, we can write
> > $$
> > \begin{align}
> > M(b)=\bigoplus_{p_{i}\ | \  b}(M(b))(p_{i}), \quad M(c)=\bigoplus_{p_{i}\ | \  c}(M(c))(p_{i}).
> > \end{align}
> > $$
> > Let $p_{i}\ | \ b$. Clearly, $x\in M(p_{i})$ iff $x\in(M(b))(p_{i})$ (ditto for $p_{i}\ | \ c$). Thus, we have required result. 
> 

^428a07


[^1]: Or equivalently, by [[#^56fd10]], those primes $p\in R$ for which $M_{p}$ is nonzero.
