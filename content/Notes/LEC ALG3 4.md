---
tags:
  - ALG3
  - Lecture
date: 2025-08-14
time: 09:10
---
# Quotients of polynomial rings

> [!Proposition]
> Let $R$ be a nonzero ring. Let $f(x)\in R[x]$ be a monic polynomial. 
> 1. $f(x)$ is a non-zero-divisor.
> 2. $\text{deg}(f(x)q(x))=\text{deg}\,f(x)+\text{deg}\,q(x)$ for all polynomials $q(x)\in R[x]$.
> 

It is convenient to assume that $f(x)$ is monic because we can then divide by $f(x)$ with remainder. That is, if $g(x)\in R[x]$ is another polynomial, then there exist $q(x), r(x)\in R[x]$ such that
$$
g(x)=f(x)q(x)+r(x)
$$
and $\text{deg}\,r(x)< \text{deg}\,f(x)$. This can be achieved in any ring when dividing by monic polynomials. Further, quotients and remainders are uniquely determined by $g(x)$ and $f(x)$:

> [!Lemma] @aluffiAlgebraChapter02009 III.4.5
> Let $f(x)$ be a monic polynomial, and assume
> $$
> f(x)q_{1}(x)+r_{1}(x)=f(x)q_{2}(x)+r_{2}(x)
> $$
> with both $r_{1}(x)$ and $r_{2}(x)$ polynomials of degree less than $\text{deg}\,f(x)$. Then $q_{1}(x)=q_{2}(x)$ and $r_{1}(x)=r_{2}(x)$.

> [!Proposition] @aluffiAlgebraChapter02009 III.4.6
> Let $R$ be a commutative ring, and let $f(x)\in R[x]$ be a monic polynomial of degree $d$. Then the function
> $$
> \varphi:R[x]\to R^{\otimes d}
> $$
> defined by sending $g(x)\in R[x]$ to the remainder of the division of $g(x)$ by $f(x)$ induces an isomorphism of abelian groups
> $$
> \frac{R[x]}{(f(x))}\cong R^{\otimes d}.
> $$

# Prime and maximal ideals

> [!Definition]
> Let $I\ne(1)$ be an ideal of a commutative ring $R$.
> 1. $I$ is a **prime ideal** if $R/I$ is an integral domain.
> 2. $I$ is a **maximal ideal** if $R/I$ is a field.

[!Proposition]
Let $I\ne(1)$ be an ideal of a commutative ring $R$. Then
1. $I$ is prime iff for all $a, b\in R$, $ab\in I\implies(a\in I\text{ or }b\in I)$;
2. $I$ is maximal iff for all ideals $J$ of $R$, $I\subseteq J\implies(I=J\text{ or }J+R)$.

[!Proof]-
The ring $R/I$ is an integral domain iff for all $\overline{a}, \overline{b}\in R/I$, $\overline{a}\cdot \overline{b}=0\implies(\overline{a}=0\text{ or }\overline{b}=0)$. This condition translates immediately into the given condition in $R$. 

The maximality condition follows from the correspondence between ideals 