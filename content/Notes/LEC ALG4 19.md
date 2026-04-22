---
id: "434"
date: 2026-03-20
time: 11:54
tags:
  - ALG4
  - Lecture
  - Processed
---
# When is a finite extension Galois?

> [!Lemma]
> Let $E/F$ be a finite *Galois* extension. Let $f\in F[x]$ be irreducible. If $f$ has a root in $E$, then $f$ splits into linear factors over $E$. 
> 
> > [!Proof]-
> > 
> > Let $\alpha\in E$ be a root of $f$. We must have $f=c\cdot\text{min}_{F, \alpha}$. Let $G=\text{Gal}(E/F)$, so $F=E^{G}$. $G$ is finite by [[LEC ALG4 18#^fb187e]]. By [[LEC ALG4 18#^dbed4e]], $\text{min}_{F, \alpha}$ splits completely in $E$.
> 

^806468

> [!Theorem] @isaacsAlgebraGraduateCourse2009 18.13
> Let $E/F$ be a finite extension. TFAE:
> 1. $E/F$ is [[LEC ALG4 17#^7dd101|Galois]]. 
> 2. $E/F$ is [[LEC ALG3 20#^b78800|normal]] and [[LEC ALG4 16#^ba7e62|separable]].
> 3. $E$ is the [[LEC ALG3 20#^0b1e65|splitting field]] of a separable polynomial in $F[x]$. 
> 
> > [!Proof]-
> > 
> > $(1)\implies (2)$ $G=\text{Gal}(E/F)$ is finite by [[LEC ALG4 18#^fb187e]]. Since $E/F$ is Galois, $F=E^{G}$. [[LEC ALG4 19#^806468]] gives normality, and separability follows directly from [[LEC ALG4 18#^dbed4e]]. 
> > 
> > $(2)\implies (3)$ Let $\alpha\in E$ be a [[LEC ALG4 16#^0d8ecf|primitive element]] of $E/F$. Let $f\in F[x]$ be the minpoly of $\alpha$ over $F$. $f$ is separable. Let $\{ \alpha_{1}=\alpha, \alpha_{2}, \dots, \alpha_{r} \}$ be the set of $F$-conjugates of $\alpha$ in $\overline{E}$ so $\alpha_{i}\in E$ for all $1\leqslant i\leqslant r$ by normality. 
> > $$
> > E=F(\alpha)\subseteq F(\alpha_{1}, \alpha_{2}, \dots, \alpha_{r})\subseteq E.
> > $$
> > Thus, $E$ is the splitting field of $F$. 
> > 
> > Alternatively, by the definition of normality, $E$ is a splitting field over $F$ for some polynomial $g\in F[x]$. If $f$ is any monic irreducible factor of $g$, then $f$ has some root $\alpha\in E$, and since $\alpha$ is separable over $F$, $f$ has distinct roots. Thus $g$ is separable over $f$. 
> > 
> > $(3)\implies (1)$ See @isaacsAlgebraGraduateCourse2009 
> 

^1f27bb

> [!Corollary]
> Given the tower $E/K/F$, $E/F$ is Galois $\implies$ $E/K$ is Galois. 

^38f665

Note that $K/F$ need not be Galois, since it need not be normal ($K/F$ is separable, though). 

> [!Corollary] @isaacsAlgebraGraduateCourse2009 18.18
> Let $E/F$ be a finite separable extension. Then there exists an extension field $\tilde{E}/E$ such that $\tilde{E}/F$ is Galois. 
> 
> > [!Proof]-
> > 
> > By the [[LEC ALG4 16#^0d8ecf|primitive element theorem]], we can write $E=F(\alpha)$ for some $\alpha\in E$. Let $f(x)$ be the minpoly of $\alpha$ over $F$. Then $f(x)$ is separable. Take $\tilde{E}$ to be a splitting field of $f(x)$ over $E$. Then, $\tilde{E}/F$ is Galois. 

