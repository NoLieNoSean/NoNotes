---
tags:
  - ALG3
  - Lecture
date: 2025-09-18
time: 09:13
---
[!Proposition]
Let $R$ be a UFD. Then a non-zero element if prime iff it is irreducible.

[!Proof]-
Prime implies irreducible in any ID. Have to show irreducible implies prime. Let $p$ be an irreducible element and let $p\ | \ ab$. We need to show that $p\ | \ a$ or $p\ | \ b$.

$ab=rp$ for some $r\in R$. By hypothesis, we can write $a=up_{1}\dots p_{s}$, $b=wq_{1}\dots q_{t}$, where $u, w$ are units and $p_{i}$ and $q_{i}$ are irreducibles. We now have
$$
(uw)p_{1}\dots p_{s}q_{1}\dots q_{t}=rp.
$$
Thus, $p$ is an associate of at least one of $p_{1},\dots,p_{s},q_{1},\dots,q_{t}$. If $p$ is an associate of some $p_{i}$, then $p\ | \ a$. If $p$ is an associate of some $q_{i}$, $p\ | \ b$. 

[!Proposition]
If $R$ is a UFD and $a, b\ne 0$, then gcd of $a$ and $b$ exists. 

[!Proof]-
Let $a=up_{1}^{a_{1}}\dots p_{s}^{a_{s}}$ and $b=wq_{1}^{b_{1}}\dots q_{t}^{b_{t}}$. Consider $\{ p_{i_{1}}, \dots, p_{i_{k}} \}$ where $p_{i_{j}}$ is an associate of some ...


---

In $R=k[x_{1}, \dots, x_{n}]$, If $I=(m_{1}, \dots, m_{t})$ and $d$ is the gcd of the generators of $I$, then $I=(d)(I:(d))$. 

[!Definition]
Let $R$ be a UFD, and let $x$ be a variable. Let $f=\sum_{i=0}^{n}a_{i}x^{i}\in R[x]$. Define $c(f)$, the content of $f$, to be the gcd of the coefficients of $f$, up to multiplication by a unit. 

[!Gauss Lemma]
Let $R$ be a UFD, and $f, g\in R$. Then $c(gf)=c(f)c(g)$. In particular, the product of primitive polynomials is a primitive polynomials.