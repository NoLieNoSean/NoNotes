---
tags:
  - ALG3
  - Lecture
  - Processed
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

^cde440

It is clear that if $f$ is an integer polynomial of positive degree with positive leading coefficient, then $f$ is primitive iff $\psi_{p}(f)\ne 0$ for every prime $p$.

> [!Lemma]
> An integer $p$ is a prime element of $\mathbb{Z}[x]$ iff it is a prime integer.
> 
> > [!Proof]-
> > Any integer that is irreducible in $\mathbb{Z}[x]$ must be prime. Let $p$ be prime and suppose $p$ divides $fg$. Then, $\psi_{p}(fg)=0$. Since $\mathbb{F}_{p}[x]$ is an integral domain, this implies either $\psi_{p}(f)=0$ or $\psi_{p}(g)=0$. Thus, $p$ divides $f$ or $p$ divides $g$.
> 

^7e31c7

> [!Theorem] Gauss's Lemma
> The product of primitive polynomials is primitive.
> 
> > [!Proof]-
> > Suppose $f$ and $g$ are primitive polynomials. Since their leading coefficients are positive, the leading coefficient of $fg$ is positive. Moreover, no prime $p$ divides $f$ or $g$, so no prime divides $fg$.

^87f54e

> [!Lemma]
> Every polynomial $f(x)$ of positive degree with rational coefficients can be written uniquely as $f(x)=cf_{0}(x)$, where $c\in \mathbb{Q}$ and $f_{0}(x)$ is a primitive polynomial. $c\in \mathbb{Z}$ iff $f(x)\in \mathbb{Z}[x]$. If $f(x)\in \mathbb{Z}[x]$, then the gcd of the coefficients of $f$ is $\pm c$.  
> 
> > [!Proof]-
> > Let $f(x)\in \mathbb{Q}[x]$. Proving existence of primitive $f_{0}(x)$ and $c$ such that $f(x)=cf_{0}(x)$ is trivial. 
> > 
> > Suppose we are given rational numbers $c$ and $c'$ and primitive polynomials $f_{0}$ and $f_{0}'$ such that $cf_{0}=c'f_{0}'$. We will show that $f_{0}=f_{0}'$. Since $\mathbb{Q}[x]$ is a domain, it will follow that $c=c'$. 
> > 
> > Multiply both sides of $cf_{0}=c'f_{0}'$ by integers to reduce to the case that $c$ and $c'$ are integers. If $c\ne \pm1$, let $p$ be a prime dividing $c$. Then, $p$ divides $c'f_{0}'$, and by [[#^7e31c7]], $p$ divides $c'$ or $f_{0}'$. $p$ cannot divide $f_{0}'$ by definition, so $p$ must divide $c'$. Cancel $p$ from both sides. Induction reduces to the case that $c=\pm1$. The same reasoning shows that then $c'=\pm1$. Both $c$ and $c'$ must be the same unit, since $f_{0}$ and $f_{0}'$ have positive leading coefficients. So $c=c'$ and $f_{0}=f_{0}'$.
> 

^c806f3

> [!Theorem]
> 1. Let $f_{0}$ be a primitive polynomial, and let $g\in \mathbb{Z}[x]$. If $f_{0}$ divides $g$ in $\mathbb{Q}[x]$, then $f_{0}$ divides $g$ in $\mathbb{Z}[x]$.
> 2. If $f, g\in \mathbb{Z}[x]$ have a common nonconstant factor in $\mathbb{Q}[x]$, they have a common nonconstant factor in $\mathbb{Z}[x]$.
> 
> > [!Proof]-
> > $(1)$ Suppose $g=f_{0}q$ for some $q\in \mathbb{Q}[x]$. Write $g=cg_{0}$ and $q=c'q_{0}$ with $g_{0}$ and $q_{0}$ primitive by [[#^c806f3]]. Note that since $g, g_{0}\in \mathbb{Z}[x]$, $c\in \mathbb{Z}$. We have $cg_{0}=c'f_{0}q_{0}$. By [[#^87f54e|Gauss's lemma]], $f_{0}q_{0}$ is primitive. By the uniqueness assertion of [[#^c806f3]], $c=c'$. Thus, $c'$ is an integer, and $q\in \mathbb{Z}[x]$, so $f_{0}$ divides $g$ in $\mathbb{Z}[x]$.
> > 
> > $(2)$ If $f, g$ have a common nonconstant factor $h=ch_{0}$ in $\mathbb{Q}[x]$, then $h_{0}$ also divides $f$ and $g$ in $\mathbb{Q}[x]$, so by $(1)$, $h_{0}$ divides $f$ and $g$ in $\mathbb{Z}[x]$.
> 

^98ad92

> [!Proposition]
> 3. Let $f\in \mathbb{Z}[x]$ have positive leading coefficient. Then $f$ is an irreducible element of $\mathbb{Z}[x]$ iff it is either a prime integer or a primitive polynomial that is irreducible in $\mathbb{Q}[x]$. 
> 4. Every irreducible element of $\mathbb{Z}[x]$ is a prime element.
> 
> 
> > [!Proof]-
> > $(1)$ [[#^7e31c7]] proves this when $f\in \mathbb{Z}$. If $f$ is irreducible and not a constant, it cannot have an integer factor different from $\pm 1$, so if its leading coefficient is positive, it will be primitive. Suppose that $f$ is a primitive polynomial and that it has a proper factorization in $\mathbb{Q}[x]$, say $f=gh$. Write $g=cg_{0}$ and $h=c'h_{0}$, with $g_{0}$ and $h_{0}$ primitive. Then $g_{0}h_{0}$ is primitive. Since $f$ is also primitive, $f=g_{0}h_{0}$. Therefore $f$ has a proper factorization in $\mathbb{Z}[x]$ too. So if $f$ is reducible in $\mathbb{Q}[x]$, it is reducible in $\mathbb{Z}[x]$. The fact that a primitive polynomial that is reducible in $\mathbb{Z}[x]$ is also reducible in $\mathbb{Q}[x]$ is clear.
> > 
> > $(2)$ Let $f$ be a primitive irreducible polynomial that divides a product $gh$ of integer polynomials. Then $f$ is irreducible in $\mathbb{Q}[x]$. Since $\mathbb{Q}[x]$ is a PID, $f$ is a prime element of $\mathbb{Q}[x]$. So $f$ divides $g$ or $h$ in $\mathbb{Q}[x]$. By [[#^98ad92]] $f$ divides $g$ or $h$ in $\mathbb{Z}[x]$. Thus, $f$ is a prime element.
> 

^b33f2e

The proof of the following theorem is immediate from [[#^b33f2e]] and [[LEC ALG3 9#^414a66]]. 

> [!Theorem]
> $\mathbb{Z}[x]$ is a UFD. Every nonzero polynomial $f(x)\in \mathbb{Z}[x]$ that is not $\pm 1$ can be written as a product
> $$
> f(x)=\pm p_{1}\dots p_{m}q_{1}(x)\dots q_{n}(x),
> $$
> where $p_{i}$ are integer primes and $q_{j}(x)$ are primitive irreducible polynomials. 

^2a6362

## Generalization to multivariable polynomial rings over fields

Regard $\mathbb{F}[t, x]$ as the ring $\mathbb{F}[t][x]$ of polynomials in $x$ whose coefficients are polynomials in $t$. The analogue of the field $\mathbb{Q}$ will be $\mathbb{F}(t)$, the [[LEC ALG3 8#Ring of fractions|field of fractions]] of $\mathbb{F}[t]$. Denote this field by $\mathcal{F}$. Then, $\mathbb{F}[t, x]$ is a subring of the ring $\mathcal{F}[x]$ of polynomials
$$
f=a_{n}(t)x^{n}+\dots+a_{1}(t)x+a_{0}(t)
$$
whose coefficients are rational functions in $t$. This is useful, since $\mathcal{F}[x]$ [[LEC ALG3 2#^2e8cc1|is a PID]] (recall we needed the fact that $\mathbb{Q}[x]$ is a PID in the proof of [[#^b33f2e]]!).

We will retrace the steps we took to prove that $\mathbb{Z}[x]$ is a UFD. First, we have to define a notion of being 'primitive':

> [!Definition]
> The polynomial $f=a_{n}(t)x^{n}+\dots+a_{1}(t)x+a_{0}(t)\in \mathcal{F}[x]$ is called **primitive** if
> 1. Its coefficients $a_{i}(t)$ are polynomials in $\mathbb{F}[t]$, and has positive degree ($n\geq 1$);
> 2. the gcd of its coefficients in $\mathbb{F}[t]$ is $1$;
> 3. the leading coefficient $a_{n}(t)$ is monic.

^a53de0

The requirement that $a_{n}(t)$ be monic in [[#^a53de0]] and $a_{n}> 0$ in [[#^cde440]] are just normalization criteria to weed out associates.

Next, we have to prove the analogue of [[#^7e31c7]]: that $f(t)\in \mathbb{F}[t]$ is prime in $\mathbb{F}[t, x]$ iff it is prime in $\mathbb{F}[t]$.

> [!Proof]-
> Suppose $f(t)\in \mathbb{F}[t]$. Again, it is clear that if $f(t)$ is prime in $\mathbb{F}[t, x]$, then it is prime in $\mathbb{F}[t]$. Suppose $f(t)$ is prime in $\mathbb{F}[t]$. Suppose $f(t)=g(t, x)h(t, x)$ where $g, h\in \mathbb{F}[t, x]$. Then, $\text{deg}_{x}(f(t))=\text{deg}_{x}(g(t, x))+\text{deg}_{x}(h(t, x))$. This forces the degree of $x$ of $g$ and $h$ to be $0$, so $g, h\in \mathbb{F}[t]$. Since $f$ is prime in $\mathbb{F}[t]$, it follows that one of $g$ or $h$ is a unit, so $f(t)$ is prime in $\mathbb{F}[t, x]$. 

Next up: Gauss's Lemma. The proof is exactly the same as before: If $f$ and $g$ are primitive, $fg$ is primitive (product of monic polynomials is monic), and by the previous lemma, no prime in $\mathbb{F}[t]$ can divide $fg$.

The [[#^c806f3]] analogue is exactly what you'd expect: Every element $f(t, x)$ of $\mathcal{F}(x)$ can be written in the form $c(t)f_{0}(t, x)$, where $f_{0}$ is a primitive polynomial in $\mathbb{F}[t, x]$ and $c$ is a rational function in $t$, both uniquely determined. The same proof works.

[[#^98ad92]] and [[#^b33f2e]] analogues have the same proofs. Thus, The ring $\mathbb{F}[t, x]$ is a UFD.

## Generalization to arbitrary UFDs

We can retrace the same steps as in the previous section to prove that If $R$ is a UFD, the polynomial ring $R[x_{1}, \dots, x_{n}]$ is a UFD:

> [!Theorem]
> Let $R$ be a UFD, and let $x$ be a variable. Let $f=\sum_{i=0}^{n}a_{i}x^{i}\in R[x]$. Define $c(f)$, the content of $f$, to be the gcd of the coefficients of $f$, up to multiplication by a unit. Call $f\in R[x]$ primitive if $f$ has nonzero degree and $c(f)$ is a unit.
> 1. $r\in R$ is prime in $R[x]$ iff it is prime in $R$. 
> 2. Let $f, g\in R[x]$. Then, $c(fg)=c(f)c(g)$. In particular, the product of primitive polynomials is a primitive polynomial.
> 3. Let $\mathcal{R}$ be the field of fractions of $R$. Then, every element $f(x)$ of $\mathcal{R}[x]$ can be written in the form $rf_{0}(x)$, where $f_{0}\in R[x]$ is primitive and $r\in \mathcal{R}$, both uniquely determined up to a unit factor in $R$.
> 4. Let $f_{0}$ be a primitive polynomial, and let $g$ be a polynomial in $R[x]$. If $f_{0}$ divides $g$ in $\mathcal{R}[x]$, then $f_{0}$ divides $g$ in $R[x]$.
> 5. If two polynomials $f$ and $g$ in $R[x]$ have a common nonconstant factor in $\mathcal{R}[x]$, they have a common nonconstant factor in $R[x]$.
> 6. Let $f$ be an element of $R[x]$. $f$ is irreducible in $R[x]$ iff it is either an irreducible element of $R$, or a primitive polynomial that is irreducible in $\mathcal{R}[x]$.
> 7. The ring $R[x]$ is a unique factorization domain.

