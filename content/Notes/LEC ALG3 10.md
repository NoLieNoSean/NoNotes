---
tags:
  - ALG3
  - Lecture
date: 2025-09-11
time: 09:27
---
# Gauss's Lemma: Factoring in $\mathbb{Z}[x]$

> [!Remark]
> In $\mathbb{C}[x]$, every polynomial of positive degree has a root $\alpha$, and therefore a divisor in the form $x-\alpha$. The irreducible polynomials are linear, and the irreducible factorization of a monic polynomial has the form $f(x)=(x-\alpha_{1})\dots(x-\alpha_{n})$.
> 
> In $\mathbb{R}[x]$, the irreducible polynomials are the linear polynomials and quadratic polynomials with negative discriminant. No polynomial of degree $> 2$ is irreducible.
> 
> In $\mathbb{Q}[x]$, there exist irreducible polynomials of arbitrary degree. 

We have two tools to study factoring in $\mathbb{Z}[x]$:
1. The inclusion $\mathbb{Z}[x]\subseteq \mathbb{Q}[x]$, and
2. the [[LEC ALG3 1#^0422dc|unique homomorphism]] $\psi_{p}:\mathbb{Z}[x]\to \mathbb{F}_{p}[x]$ that sends $x$ to $x$.

> [!Definition]
> A polynomial $f(x)=\sum_{i=0}^{n}a_{i}x^{i}\in \mathbb{Q}[x]$ is called **primitive** if 
> 1. it is an integer polynomial of positive degree,
> 2. the gcd of its coefficients in $\mathbb{Z}$ is $1$, and
> 3. $a_{n}> 0$. 

It is clear that if $f$ is an integer polynomial of positive degree with positive leading coefficient, then $f$ is primitive iff $\psi_{p}(f)\ne 0$ for every prime $p$.

> [!Lemma]
> An integer $p$ is a prime element of $\mathbb{Z}[x]$ iff it is a prime integer.
> 
> > [!Proof]-
> > Any integer that is irreducible in $\mathbb{Z}[x]$ must be prime. Let $p$ be prime and suppose $p$ divides $fg$. Then, $\psi_{p}(fg)=0$. Since $\mathbb{F}_{p}[x]$ is an integral domain, this implies either $\psi_{p}(f)=0$ or $\psi_{p}(g)=0$. Thus, $p$ divides $f$ or $p$ divides $g$.
> 

> [!Theorem] Gauss's Lemma
> The product of primitive polynomials is primitive.
> 
> > [!Proof]-
> > Suppose $f$ and $g$ are primitive polynomials. Since their leading coefficients are positive, the leading coefficient of $fg$ is positive. Moreover, no prime $p$ divides $f$ or $g$, so no prime divides $fg$.

> [!Lemma]
> Every polynomial $f(x)$ of positive degree with rational coefficients can be written uniquely as $f(x)=cf_{0}(x)$, where $c\in \mathbb{Q}$ and $f_{0}(x)$ is a primitive polynomial. $c\in \mathbb{Z}$ iff $f(x)\in \mathbb{Z}[x]$. If $f(x)\in \mathbb{Z}[x]$, then the gcd of the coefficients of $f$ is $\pm c$.  

> [!Theorem]
> 1. Let $f_{0}$ be a primitive polynomial, and let $g\in \mathbb{Z}[x]$. If $f_{0}$ divides $g$ in $\mathbb{Q}[x]$, then $f_{0}$ divides $g$ in $\mathbb{Z}[x]$.
> 2. If $f, g\in \mathbb{Z}[x]$ have a common nonconstant factor in $\mathbb{Q}[x]$, they have a common nonconstant factor in $\mathbb{Z}[x]$.

> [!Proposition]
> 3. Let $f\in \mathbb{Z}[x]$ have positive leading coefficient. Then $f$ is an irreducible element of $\mathbb{Z}[x]$ iff it is either a prime integer or a primitive polynomial that is irreducible in $\mathbb{Q}[x]$. 
> 4. Every irreducible element of $\mathbb{Z}[x]$ is a prime element.

> [!Theorem]
> $\mathbb{Z}[x]$ is a UFD. Every nonzero polynomial $f(x)\in \mathbb{Z}[x]$ that is not $\pm 1$ can be written as a product
> $$
> f(x)=\pm p_{1}\dots p_{m}q_{1}(x)\dots q_{n}(x),
> $$
> where $p_{i}$ are integer primes and $q_{j}(x)$ are primitive irreducible polynomials. 

> [!Theorem]
> If $R$ is a UFD, the polynomial ring $R[x_{1}, \dots, x_{n}]$ is a UFD.