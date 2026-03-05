---
tags:
  - ALG3
  - Lecture
  - Processed
date: 2025-09-09
time: 09:23
id: "114"
---
# Euclidean Domains

> [!Definition]
> An integral domain $R$ is called **Euclidean** if there is a function $d:R\setminus \{ 0 \}\to \mathbb{N}$ with the following properties[^1]:
> 1. $d(a)\leq d(ab)$ for all nonzero $a, b\in R$,
> 2. for all $a, b\in R$ with $b\ne 0$ we can find $q$ and $r$ in $R$ such that $a=bq+r$, $r=0$ or $d(r)< d(b)$.
> 

^3db377

[^1]:$(1)$ is redundant: every integral domain with $d$ satisfying $(2)$ can be equipped with $d'$ satisfying $(1)$ and $(2)$. See @conradREMARKSEUCLIDEANDOMAINS. 

$d(a)=1$ iff $a$ is a unit. 

The two main results about Euclidean domains: A Euclidean Domain is a PID, and the Euclidean algorithm terminates after finitely many steps yielding a gcd. There can be gcds in rings that are not Euclidean, but it may be hard in those rings to compute a gcd by a method that avoids factorization.

Clare distinguishes between 'Euclidean ring' (not a domain) and 'Euclidean domain'. For example, If $R$ is a Euclidean domain, and $I$ is a nonprime ideal in $R,$ then $R/I$ is a Euclidean ring which is not a domain.

> [!Proposition]
> Every ER is a PIR.
> 
> > [!Proof]-
> > Let $I\ne(0)$ be a proper ideal of $R$. Let $b$ be an element of minimum norm[^2] in $I$. Let $a\in I$. We can write $a=qb+r$, where $r=0$ or $\sigma(r)<\sigma(b)$. Since $r=a-qb\in I$, $r$ must be $0$. Thus, we have $I=(b)$. 
> 
^c12bf3

[^2]: $\mathbb{N}$ is well ordered!

In particular, every Euclidean domain is a principal ideal domain.

> [!Example]
> - $\mathbb{Z}[i]$ is a euclidean domain, with $d(a)=|a|^{2}$. Division with remainder is not unique: There may be as many as four choices for the remainder. See @artinAlgebra2011 [p. 361]. 
> - $\mathbb{Z}[x]$ is not a Euclidean domain, since it is not a principal ideal domain. $\mathbb{Q}[x]$ is a Euclidean domain.
> - $\mathbb{Z}[\sqrt{ -5 }]$ is not a Euclidean domain, since it is not a principal domain. See @dummitAbstractAlgebra2004 [p. 272]. It is also not a UFD, since $6$ does not have unique factorization. Factorization does terminate, however: this can be shown using the field norm on $\mathbb{Q}[\sqrt{ -5 }]$. 
> - $\mathbb{Z}[(1+\sqrt{ -19 })/2]$ is a PID but not a Euclidean domain. See [[TUT ALG3 4#^b57acd]].
> - A polynomial ring $\mathbb{F}[x]$ in one variable over a field $\mathbb{F}$ is a Euclidean domain, with $d(f)$ equal to the degree of $f$.

## Greatest common divisors

> [!Definition]
> A **greatest common divisor** of $a$ and $b$ is a nonzero element $d$ such that $d\ | \ a$ and $d\ | \ b$, and if $d'\ | \ a$ and $d'\ | \ b$ then $d'\ | \ d$. 

Clearly, $\gcd(a, b)$ is a generator for the unique smallest principal ideal containing $a$ and $b$. Note that while $\gcd(a, b)$ is not unique, $(\gcd(a, b))$ is.

A sufficient condition for $\gcd(a, b)$ to exist is $(a, b)$ being a principal ideal $(d)$ (this is not a necessary condition: $(2, x)\subseteq \mathbb{Z}[x]$ is a maximal ideal ([[LEC ALG3 4#^f0a74d]]), so $(1)$ is the unique smallest principal ideal containing $2$ and $x$). It follows that ==gcds always exist in a principal ideal domain==:

> [!Proposition]
> Let $R$ be a PID, and let $a, b\in R$ not both be zero. Let $(d)=(a, b)$. Then, $d$ is a gcd of $a$ and $b$. 


> [!Remark]
> When it happens that $(\text{gcd}(a, b))=(a, b)$ (in PIDs, for instance), we get to write $\text{gcd}(a, b)=ra+sb$ for some $r, s\in R$. Note that this is not the case with $(2, x)$ in $\mathbb{Z}[x]$: $(1)$ is strictly larger than $(2, x)$, and $1$ cannot be written as a linear combination of $2$ and $x$.
^9467ec


---
# Unique Factorization Domains

> [!Definition]
> We say that factoring in an integral domain $R$ is **unique** if, whenever an element $a$ of $R$ is written in two ways as a product of irreducible elements, say
> $$
> p_{1}\dots p_{m}=a=q_{1}\dots q_{n},
> $$
> then $m=n$, and if the right side is rearranged suitably, $q_{i}$ is an associate of $p_{i}$ for each $i$. 
> 
> When the recursive factoring of every nonunit nonzero element terminates, we say that **factoring terminates** in $R$.

> [!Definition]
> An integral domain $R$ is a **unique factorization domain** if
> 1. Factoring terminates in $R$: every element $x$ factors as a product $x=\prod x_{i}$ of finitely many irreducible $x_{i}$.
> 2. The irreducible factorization of an element $a$ is unique.

^9fb28b

> [!Proposition]
> Let $R$ be an integral domain. Factoring terminates in $R$ iff $R$ does not contain an infinite strictly increasing chain $(a_{1})<(a_{2})<\dots$ of principal ideals.

We will rarely encounter rings in which factoring fails to terminate; in practice it is the uniqueness that gives trouble.

> [!Proposition]
> Let $R$ be an integral domain in which factoring terminates. Then $R$ is a UFD iff every irreducible element is a prime element.
> 
> > [!Proof]-
> > Let $R$ be a ring in which every irreducible element is prime, and suppose that an element $a$ factors in two ways into irreducible elements, say $p_{1}\dots p_{m}=a=q_{1}\dots q_{n}$, where $m\leq n$. If $n=1$, then $m=1$ and $p_{1}=q_{1}$. Suppose $n> 1$. Since $p_{1}$ is prime, it divides one of the factors $q_{1}, \dots, q_{n}$, say $q_{1}$. Since $q_{1}$ is irreducible and. since $p_{1}$ is not a unit, $q_{1}$ and $p_{1}$ are associates, say $p_{1}=uq_{1}$, where $u$ is a unit. We move the unit factor over to $q_{2}$, replacing $q_{1}$ by $uq_{1}$ and $q_{2}$ by $u^{-1}q_{2}$. The result is that now $p_{1}=q_{1}$. Then we cancel $p_{1}$ and use induction on $n$.
> > 
> > Conversely, suppose that there is an irreducible element $p$ that is not prime. Then there are elements $a$ and $b$ such that $p$ divides $r:=ab$, say $pc=r$, but $p$ does not divide $a$ or $b$. By factoring $a$, $b$, and $c$ into irreducible elements, we obtain two inequivalent factorizations of $r$.
> 

^414a66

> [!Proposition]
> Every PID is a UFD.
> 
> > [!Proof]-
> > Let $R$ be a PID. Since every irreducible element of $R$ is prime, we only need to show that factoring terminates. Suppose we are given an infinite weakly increasing chain
> > $$
> > (a_{1})\subseteq(a_{2})\subseteq(a_{3})\subseteq\dots.
> > $$
> > The union $J=\bigcup (a_{n})$ is an ideal (this is true for any increasing chain of ideals in a ring): if $u$ and $v$ are in $J$, they must both be in $(a_{n})$ for some $n$, so, $u+v$ and $ru$ for any $r\in R$ are also in $I_{n}$ and therefore they are in $J$. Since $R$ is a PID, $J$ is principal, say $J=(b)$. Since $b$ is in the union of the ideals $(a_{n})$, it must be in one of them. But if $b$ is in $(a_{n})$, then $(b)\subseteq(a_{n})$. On the other hand, $(a_{n})\subseteq(a_{n+1})\subseteq(b)$. Therefore $(b)=(a_{n})=(a_{n+1})$. The chain is not strictly increasing.
> > 
> 

^97c00a

It follows from [[#^c12bf3]] and [[#^97c00a]] that every Euclidean domain is a UFD. 

Divisibility in a UFD can be deduced from irreducible factorizations:

> [!Proposition]
> Let $R$ be a UFD. 
> 1. Let $a=p_{1}\dots p_{m}$ and $b=q_{1}\dots q_{n}$ be irreducible factorizations of two elements of $R$. Then $a\ | \ b$ iff $m\leq n$ and, when $q_{j}$ are arranged suitably, $p_{i}$ is an associate of $q_{i}$ for $i=1, \dots, m$.
> 2. Any pair of elements $a, b$, not both zero, has a gcd.

In particular, for one variable polynomial rings over fields, we have these results:

> [!Theorem]
> Let $F[x]$ be the polynomial in one variable over a field $F$.
> 1. Two polynomials $f$ and $g$, not both zero, have a unique monic greatest common divisor $d$, and there are polynomials $r$ and $s$ such that $rf+sg=d$. [[#^9467ec]]
> 2. Every irreducible polynomial in $F[x]$ is prime. [[LEC ALG3 7#^662472]].4
> 3. Every monic polynomial in $F[x]$ can be written uniquely as a product of irreducible monic polynomials.

> [!Proposition]
> A polynomial $f$ of degree $n$ with coefficients in a field $F$ has at most $n$ roots in $F$.

^497a71


