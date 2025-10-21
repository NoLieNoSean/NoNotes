---
tags:
  - ALG3
  - Lecture
  - Processed
date: 2025-08-14
time: 09:10
id: "109"
---
# Quotients of polynomial rings

If $k$ is a field, then $k[x]$ is what is called a Euclidean domain. A **Euclidean domain** is an integral domain with a "degree-like" function $N$ into $\mathbb{N}$ that makes division with remainder possible. The Euclidean algorithm can be executed in a Euclidean domain to obtain the "gcd" of two elements, and the extended Euclidean algorithm can be executed to express this gcd as a linear combination of the two elements. In general, a polynomial ring over an arbitrary ring is not a Euclidean domain. However, you can still perform Euclidean division by *monic* polynomials in any polynomial ring, due to some special properties[^1]:

[^1]:Note that this does not mean the Euclidean algorithm works: the remainder may not be monic!

> [!Lemma]
> Let $R$ be a nonzero ring. Let $f(x)\in R[x]$ be a monic polynomial. 
> 1. $f(x)$ is a non-zero-divisor.
> 2. $\text{deg}(f(x)q(x))=\text{deg}\,f(x)+\text{deg}\,q(x)$ for all polynomials $q(x)\in R[x]$.
> 

Thus, if $f(x)\in R[x]$ is monic and $g(x)\in R[x]$ is another polynomial, there exist $q(x), r(x)\in R[x]$ such that
$$
g(x)=f(x)q(x)+r(x)
$$
and $\text{deg}\,r(x)< \text{deg}\,f(x)$. Again, this can performed over any ring when dividing by *monic* polynomials. Further, quotients and remainders are uniquely determined by $g(x)$ and $f(x)$:

> [!Lemma] @aluffiAlgebraChapter02009 III.4.5
> Let $f(x)$ be a monic polynomial, and assume
> $$
> f(x)q_{1}(x)+r_{1}(x)=f(x)q_{2}(x)+r_{2}(x)
> $$
> with both $r_{1}(x)$ and $r_{2}(x)$ polynomials of degree less than $\text{deg}\,f(x)$. Then $q_{1}(x)=q_{2}(x)$ and $r_{1}(x)=r_{2}(x)$.

We will now restrict ourselves to commutative rings. We have shown that, if $f(x)$ is monic, then for every $g(x)\in R[x]$, there exists a *unique* polynomial $r(x)$ of degree $< \text{deg}\,f(x)$ and such that
$$
g(x)+(f(x))=r(x)+(f(x)).
$$
Polynomials of degree $< d$ may be seen as elements of a direct sum $R^{\oplus d}$. 

> [!Proposition] @aluffiAlgebraChapter02009 III.4.6
> Let $R$ be a commutative ring, and let $f(x)\in R[x]$ be a monic polynomial of degree $d$. Then the function
> $$
> \varphi:R[x]\to R^{\oplus d}
> $$
> defined by sending $g(x)\in R[x]$ to the remainder of the division of $g(x)$ by $f(x)$ induces an isomorphism of abelian groups
> $$
> \frac{R[x]}{(f(x))}\cong R^{\oplus d}.
> $$

^968e9d

> [!example]
> If $f(x)=x-a$ is monic of degree $1$ for some $a\in R$, [[#^968e9d]] gives us an isomorphism
> $$
> \frac{R[x]}{(x-a)}\cong R
> $$
> of *abelian groups* $g(x)\mapsto g(a)$. It is easy to verify that this is also a ring homomorphism. Thus, for all $a, b\in R$, we have
> $$
> \frac{R[x]}{(x-a)}\cong R\cong \frac{R[x]}{(x-b)}
> $$
> as *rings*.

^0c976e

---

# Prime and maximal ideals

All rings in this section are commutative.

> [!Definition]
> Let $I\ne(1)$ be an ideal of a commutative ring $R$.
> 1. $I$ is a **prime ideal** if $R/I$ is an integral domain.
> 2. $I$ is a **maximal ideal** if $R/I$ is a field.

^a53c12

Since [[Intro to Ring Theory#Preliminaries|a finite integral domain is a field]], if $R/I$ is finite, then $I$ is prime iff $I$ is maximal.

> [!Example]
> For all $a\in R$, the ideal $(x-a)$ is prime in $R[x]$ iff $R$ is an integral domain; it is maximal iff $R$ is also a field ([[#^0c976e]]). 
> 
> The ideal $(2, x)$ is maximal in $\mathbb{Z}[x]$ since
> $$
> \begin{align}
> \frac{\mathbb{Z}[x]}{(2, x)}\cong_{1} \frac{\mathbb{Z}[x]/(x)}{(2+(x))}\cong_{2} \frac{\mathbb{Z}}{(2)}=\mathbb{Z}/2\mathbb{Z},
> \end{align}
> $$
> is a field, where $\cong_{1}$ uses [[LEC ALG3 2#^5c702e|this result]] and $\cong_{2}$ uses the isomorphism obtained in [[#^0c976e]]. 

> [!Lemma]
> A commutative ring $R$ is a field iff its only ideals are $(0)$ and $(1)$. 
> 
> > [!Proof]-
> > 
> > Let $I\ne(0)$ be an ideal of a field $R$ and let $u$ be a non-zero element of $I$. If $v$ is the inverse of $u$, $uv=1\in I$, which implies $I=(1)$. 
> > 
> > Conversely, assume the only ideals of a commutative ring $R$ are $(0)$ and $(1)$. Let $u\in R$ be non-invertible. Then, $(u)$ is a proper ideal of $R$, a contradiction. Thus, $R$ must be a division ring, and hence a field.
> 

^4fe708

> [!Proposition]
> Let $I\ne(1)$ be an ideal of a commutative ring $R$. Then
> 1. $I$ is prime iff for all $a, b\in R$, $ab\in I\implies(a\in I\text{ or }b\in I)$;
> 2. $I$ is maximal iff for all ideals $J$ of $R$, $I\subseteq J\implies(I=J\text{ or }J=R)$.
> 
> > [!Proof]-
> > 
> > The ring $R/I$ is an integral domain iff for all $\overline{a}, \overline{b}\in R/I$, $\overline{a}\cdot \overline{b}=0\implies(\overline{a}=0\text{ or }\overline{b}=0)$. This condition translates immediately into the given condition in $R$. 
> > 
> > The maximality condition follows from the [[LEC ALG3 2#Correspondence and third isomorphism|correspondence between ideals]] of $R/I$ and ideals of $R$ containing $I$ and [[#^4fe708]]. 

> [!Proposition] @aluffiAlgebraChapter02009 III.4.13
> Let $R$ be a PID, and let $I$ be a nonzero ideal in $R$. Then $I$ is prime iff it is maximal.
> 
> > [!Proof]-
> > Maximal ideals are prime in every ring. Let $I=(a)$ be a prime ideal in $R$, with $(a)\ne 0$, and assume $I\subseteq J$ for an ideal $J$ of $R$. As $R$ is a PID, $J=(b)$ for some $b\in R$. Since $I=(a)\subseteq(b)=J$, we have $a=bc$ for some $c\in R$. Since $I$ is prime, $b\in I$ or $c\in I$. If $b\in I$, $(b)\subseteq(a)$, and $I=J$. If $c\in I$, we have $c=da$ for some $d\in R$. But then, $a=bda$, so $db=1$ ($R$ is an integral domain). Thus, $b$ is a unit, and $(b)=J=R$.

^340b52

> [!Theorem] @conradZORNSLEMMAAPPLICATIONS24 3.3
> The intersection of all prime ideals in a nonzero commutative ring is the [[LEC ALG3 5#^e9f650|nilradical]] of the ring.

^a6d030

---

# Power series rings

The set of all formal power series in $x$ with coefficients in a commutative ring $R$ constitute another ring $R[[x]]$, called the **ring of formal power series** in the variable $x$ over $R$.

As a set, $R[[x]]$ can be constructed as the set $R^{\mathbb{N}}$. Addition is defined componentwise, and multiplication is defined to be the Cauchy product:
$$
(a_{n})_{n\in \mathbb{N}}\times(b_{n})_{n\in \mathbb{N}}=\left( \sum_{k=0}^{n} a_{k}b_{n-k} \right)_{n\in \mathbb{N}}.
$$

With these operations, $R^{\mathbb{N}}$ becomes a commutative ring with zero $(0, 0, 0,\dots)$ and identity $(1, 0,0, \dots)$. 

> [!Lemma]
> Let $R$ be a commutative ring. A formal power series $f(x)=\sum_{n\geq 0}a_{n}x^{n}$ is a unit in $R[[x]]$ iff its constant coefficient $a_{0}$ is a unit in $R$.
> 
> > [!Proof]-
> > 
> > Suppose $a_{0}$ is a unit in $R$. Then, we can write $f(x)=a_{0}^{-1}(1+a_{1}a_{0}^{-1}x+a_{2}a_{0}^{-1}x^{2}+\dots)$, the inverse of which can be constructed recursively. Conversely, if $a_{0}$ is not a unit in $R$ and $g(x)=\sum_{n\geq 0}b_{n}x^{n}$ is the inverse of $f(x)$, we have $a_{0}b_{0}=1$, a contradiction. 

^769902

> [!Theorem]
> If $K$ is a field, then $K[[x]]$ is a PID.
> 
> > [!Proof]-
> > Define the order of a nonzero series
> > $$
> > \operatorname{ord}(f)=\min{n: a_n\neq0}.
> > $$
> > Properties: $\operatorname{ord}(0)=\infty$, and $\operatorname{ord}(fg)=\operatorname{ord}(f)+\operatorname{ord}(g)$.
> > 
> > Now let $I$ be a nonzero ideal in $K[[x]]$. Choose $f\in I$ with minimal order $n:=\operatorname{ord}(f)$. Then $f=x^n u$ where $u$ has order $0$, so $u$ is a unit by [[#^769902]]. Hence $x^n = u^{-1} f \in I$. Now for any $g\in I$, $\operatorname{ord}(g)\ge n$ by minimality, so $g = X^n h$ for some $h\in K[[X]]$. Thus  
> > $$
> > I \subseteq (X^n).
> > $$
> > Since $X^n\in I$, we also have $(X^n)\subseteq I$. So $I=(X^n)$.
> 

Side note: By [[#^769902]], the set of non-units is precisely the the ideal $(x)$. By [[@dummitAbstractAlgebra2004#^a2d371]], $(x)$ is the unique maximal ideal of $K[[x]]$.

