---
tags:
  - ALG3
  - Lecture
date: 2025-10-14
time: 09:13
id: "118"
---
# Eisenstein's Criterion


> [!Example] ∂
> Let $f, g$ be polynomials in $R=\mathbb{Q}[x, y, z]$, $f$ and $g$ irreducible polynomials, $\overline{g}$ is irreducible in $R/(f)$. Is $R/(f, g)$ an integral domain?
> 
> No, apparently. See [[TUT ALG3 3#Problem 2]]. If we set $f(x)=x^{3}-yz$, $g(x)=y^{2}-xz$, and $h(x)=z^{2}-x^{2}y$, we have
> $$
> \frac{\mathbb{Q}[x, y, z]}{(f, g, h)}\cong \mathbb{Q}[t^{3}, t^{4}, t^{5}],
> $$
> so $(f, g, h)$ is a prime ideal. Note that $\overline{g(x)}$ is ==irreducible== in $\mathbb{Q}[x, y, z]/f(x)$. We can ==write== $(f, g)=q\cap(f, g, h)$, where $\sqrt{ q }$ is prime. This shows that $(f, g)$ cannot be ==prime==.

> [!Theorem] Eisenstein
> Let $R$ be a UFD, and let $Q$ be its field of fractions. Suppose
> $$
> f(x)=\sum_{i=0}^{n} a_{i}x^{i}\in R[x]
> $$
> such that $a_{n}\ne 0$ and $\text{deg}\,f\geq 1$.
> 
> If $p$ is an irreducible element in $R$ such that $p\nmid a_{n}$, $p\ | \ a_{i}$ for $i=0, \dots, n-1$, $p^{2}\nmid a_{0}$, then $f$ is irreducible in $Q[x]$. If $f$ is primitive, it follows ([[LEC ALG3 10#^d96427]].6) that $f$ is irreducible in $R[x]$.

^62ad0c

[!Proof]-

Let $p$ be as above. Write $f(x)=c(f)f'(x)$, where $f'(x)$ is primitive. It is sufficient to show that $f'(x)$ is irreducible in $Q[x]$. The hypothesis given for $f(x)$ continue to hold for $f'(x)$ (easy to show). Thus, we can assume WLOG that $f$ is primitive. 

Suppose $f=gh$. Write $g(x)=\sum b_{i}x^{i}$ and $h(x)=\sum c_{i}x^{i}$. Suppose $p\ | \ a_{0}$. Then,  $p\ | \ b_{0}$ or $p\ | \ c_{0}$. If $p\ | \ b_{0}$, then $p\nmid c_{0}$, since then $p^{2}\ | \ a_{0}$. Suppose WLOG $p\ | \ b_{0}$. Then, there exists an integer $k$ such that $p\ | \ b_{0}, \dots, b_{k-1}$, and $p\nmid b_{k}$. Note that $k$ cannot be less than $n$, since that would lead to a contradiction (see the expression for $a_{n}$).

[!Theorem]
Let $R$ be a Noetherian domain. $p$ a prime ideal. If $R$ is a ufd, then every prime ideal has height $1$. 