---
tags:
  - ALG3
date: 2025-09-09
time: 09:23
---
# Euclidean domains

> [!Definition]
> An integral domain $R$ is called **Euclidean** if there is a function $d:R\setminus \{ 0 \}\to \mathbb{N}$ with the following properties[^1]:
> 1. $d(a)\leq d(ab)$ for all nonzero $a, b\in R$,
> 2. for all $a, b\in R$ with $b\ne 0$ we can find $q$ and $r$ in $R$ such that $a=bq+r$, $r=0$ or $d(r)< d(b)$.
> 

^3db377
[^1]:$(1)$ is redundant: every integral domain with $d$ satisfying $(2)$ can be equipped with $d'$ satisfying $(1)$ and $(2)$. See @conradREMARKSEUCLIDEANDOMAINS. 

The two main results about Euclidean domains: A Euclidean Domain is a PID, and the Euclidean algorithm terminates after finitely many steps yielding a gcd. There can be gcds in rings that are not Euclidean, but it may be hard in those rings to compute a gcd by a method that avoids factorization.

Clare distinguishes between 'Euclidean ring' (not a domain) and 'Euclidean domain'. For example, If $R$ is a Euclidean domain, and $I$ is a nonprime ideal in $R,$ then $R/I$ is a Euclidean ring which is not a domain.


> [!Proposition]
> Every ER is a PIR.
> 
> > [!Proof]-
> > Let $I\ne(0)$ be a proper ideal of $R$. Let $b$ be an element of minimum norm[^2] in $I$. Let $a\in I$. We can write $a=qb+r$, where $r=0$ or $\sigma(r)<\sigma(b)$. Since $r=a-qb\in I$, $r$ must be $0$. Thus, we have $I=(b)$. 
> 

^c12bf3

In particular, every Euclidean domain is a principal ideal domain.

[^2]: $\mathbb{N}$ is well ordered!

> [!Example]
> - $\mathbb{Z}[i]$ is a euclidean domain, with $d(a)=|a|^{2}$. Division with remainder is not unique: There may be as many as four choices for the remainder. See @artinAlgebra2011 [p. 361]. 
> - $\mathbb{Z}[x]$ is not a Euclidean domain, since it is not a principal domain. $\mathbb{Q}[x]$ is a Euclidean domain.
> - $\mathbb{Z}[\sqrt{ -5 }]$ is not a Euclidean domain, since it is not a principal domain. See @dummitAbstractAlgebra2004 [p. 272]. 
> - $\mathbb{Z}[(1+\sqrt{ -19 })/2]$ is a PID but not a Euclidean domain. See @dummitAbstractAlgebra2004 [p. 276].
> - A polynomial ring $\mathbb{F}[x]$ in one variable over a field $\mathbb{F}$ is a Euclidean domain, with $d(f)$ equal to the degree of $f$.



## Greatest common divisors

> [!Definition]
> A **greatest common divisor** of $a$ and $b$ is a nonzero element $d$ such that $d\ | \ a$ and $d\ | \ b$, and if $d'\ | \ a$ and $d'\ | \ b$ then $d'\ | \ d$. 

Clearly, $\gcd(a, b)$ is a generator for the unique smallest principal ideal containing $a$ and $b$. Note that while $\gcd(a, b)$ is not unique, $(\gcd(a, b))$ is.

A sufficient condition for $\gcd(a, b)$ to exist is $(a, b)$ being a principal ideal $(d)$. This is not a necessary condition: $(2, x)\subseteq \mathbb{Z}[x]$ is a maximal ideal, so $(1)$ is the unique smallest principal ideal containing $2$ and $x$. 





[!Definition]
Let $\alpha\in \mathbb{C}$ not be an integer. Let $\alpha$ satisfy a monic irreducible polynomial $f(x)=x^{n}+a_{n-1}x^{n-1}+\dots+a_{0}$, where $a_{i}\in \mathbb{Z}$. We define the norm and trace of $\alpha$ as $\text{Norm}(\alpha)=(-1)^{n}a_{0}$, $\text{Tr}(\alpha)=-a_{n-1}$.

For example, every element in $\mathbb{Z}[i]$ is of the form $\alpha=a+bi$; $\text{Tr}(\alpha)=2a$, $\text{Norm}(\alpha)=a^{2}+b^{2}$. 









