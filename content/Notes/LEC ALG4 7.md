---
id: "398"
date: 2026-01-28
time: 12:45
tags:
  - ALG4
  - Lecture
---
Redid stuff from [[LEC ALG4 6]] with $p$ relaxed to being any nonzero element. 

(see pics)

[!Proposition]
Let $R$ be a PID, $M$ finitely generated torsion module. Let $\{ p_{1}, \dots, p_{n} \}$ be the prime divisors of the sole generator of $\text{Ann}(M)$ (using UFD). Then, 
$$
M=\bigoplus_{i=1}^{m}M(p_{i}).
$$

[!Proof]-

Induct on $m$. Clear for $m=1$. Let $a$ be a generator of $\text{Ann}(M)$. Write $a=bc$ where $b, c$ are nonunits and $(b, c)=1$. 
$$
a=\underbrace{ p_{1}^{e_{1}}\dots p_{n}^{e_{n}} }_{ b }\underbrace{ p_{n+1}^{e_{n+1}}\dots p_{m}^{e_{m}} }_{ c }.
$$
By the previous proposition, $M=M(a)=M(b)\oplus M(a)$. Apply induction hypothesis of $M(b)$ and $M(a)$. See pic. 


