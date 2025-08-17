---
tags:
  - Tutorial
  - ALG3
date: 2025-08-13
time: 14:55
---
# Problem 2

> [!Question]
> Let $n\geq 1$ be an integer. Determine $U((\mathbb{Z}/n\mathbb{Z})[x])$.

Let $\psi(n)$ be the squarefree part of $n\in \mathbb{N}$. Call $a\in \mathbb{Z}/n\mathbb{Z}$ *nilpotent* if $\psi(n)\ | \ a$. Call $g(x)\in \mathbb{Z}/n\mathbb{Z}[x]$ nilpotent if $g(x)^{k}=0$ for some $k\in \mathbb{N}$, called the order of $g$.

> [!Lemma]
> The sum of two nilpotent polynomials is nilpotent.
> 
> > [!Proof]-
> > 
> > Let $g(x)$ and $h(x)$ be nilpotent polynomials of orders $\alpha$ and $\beta$. Then, $(g(x)+h(x))^{\alpha+\beta}=0$, since every term in its expansion is of the form $cg(x)^{i}h(x)^{j}$, where $i\geq\alpha$ or $j\geq \beta$. 
> 

^8a30c9

> [!Lemma]
> $g(x)=\sum_{i\geq 0} g_{i}x^{i}$ is nilpotent iff every $g_{i}$ is nilpotent for $i\geq 0$.
> 
> > [!Proof]-
> > 
> > $(\impliedby)$ Let $s$ be the highest power of a prime factor in the prime factorization of $n$. It is clear that any product of $s$ or more nilpotent elements in $\mathbb{Z}/n\mathbb{Z}$ is $0$. Thus, $g(x)^{s}=0$, since every coefficient in $g(x)^{s}$ is a product of $s$ nilpotent elements.
> > 
> > $(\implies)$ If $h(x)$ is a nilpotent polynomial of degree $d$, it is clear that $h_{0}$ and $h_{d}$ must be nilpotent. Thus, any nilpotent polynomial of degree $1$ has nilpotent coefficients!
> > 
> > Now, we will proceed to prove the claim by induction. The claim is trivially true for $d=0$, is true for $d=1$ by the preceding observation. Next, assume that the claim is true for nilpotent polynomials of degree $d$. Let $h(x)=h_{0}+\dots h_{d+1}x^{d+1}$ be a nilpotent polynomial of degree $d+1$. Again, we know that $h_{0}$ and $h_{d+1}$ are nilpotent. Now, notice that
> > $$
> > h_{0}+h_{1}x+\dots+h_{d}x^{d}=h(x)+(-h_{d+1}x^{d+1}).
> > $$
> > Since both $h(x)$ and $-h_{d+1}x^{d+1}$ are nilpotent, it follows from [[#^8a30c9]] that $h_{0}+h_{1}x+\dots+h_{d}x^{d}$ is nilpotent. It follows from the induction hypothesis that $h_{0}, \dots, h_{d}$ are nilpotent.
> 

^e42aa7

Now, I claim the following: $f(x)=\sum f_{i}x^{i}$ is a unit in $\mathbb{Z}/n\mathbb{Z}[x]$ $\iff$ $f_{0}\in U_{n}$ and $f_{i}$ is nilpotent for $i> 0$. 

> [!Proof]-
> $(\impliedby)$ If $f_{0}\in U_{n}$ and $f_{i}$ is nilpotent for $i> 0$, $f$ can be expressed as
> $$
> f_{0}(1+f_{0}^{-1}\overbrace{ (f_{1}x+f_{2}x^{2}+\dots f_{k}x^{k}) }^{g(x)\equiv}).
> $$
> 
> ^ed1d3b
> 
> Note that by [[#^e42aa7]], $g(x)$ is nilpotent. 
> 
> If we attempt to construct an inverse $h(x)$ of $1+f_{0}^{-1}g(x)$, we will observe $h(x)$ is forced to be
> $$
> 1-f_{0}^{-1}g(x)+(f_{0}^{-1})^{2}g(x)^{2}+\dots=\sum(-f_{0}^{-1})^{i}g(x)^{i}.
> $$
> 
> ^ec78c6
> 
> It is clear that $h(x)\in \mathbb{Z}/n\mathbb{Z}[x]$ only if $g(x)^{i}=0$ for all $i> l$ for some integer $l$. Since $g(x)$ is nilpotent, this condition is satisfied. Thus, $f(x)$ is a unit, with inverse 
> $$
> f_{0}^{-1}\sum_{i=0}^{l} (-f_{0}^{-1})^{i}g(x)^{i}.
> $$
> $(\implies)$ $f_{0}\in U_{n}$ is immediate. We again express $f(x)$ as in [[#^ed1d3b]]. Since $f_{0}$ is invertible and $f(x)$ is invertible, so is $1+f_{0}^{-1}g(x)$, the inverse of which must then be given by [[#^ec78c6]], because any inverse would need to satisfy the recursive relation from multiplying out, which formally yields the series. Since the inverse is a (finite-degree) polynomial, the series must terminate, implying $g(x)$ must be nilpotent, which in turn implies $f_{i}$ is nilpotent for $i> 0$ by [[#^e42aa7]]. 

> [!note] Neat result as a by-product
> The sum of a unit element and a nilpotent element is a unit when they commute. 
> 
> > [!Proof]-
> > If $u$ is a unit with inverse $v$, $a$ is nilpotent, and $au=ua$, we have $u+a=u(1+va)$. Note that $au=ua$ implies $va=av$, which implies $va$ is nilpotent. Thus, $1+va$ is invertible by the same argument we used in the previous proof. 
> 

---

# Problem 8

> [!Question]
> Determine all prime ideals in $\mathbb{Z}[x]$.

Let $I$ be a prime ideal in $\mathbb{Z}[x]$. 

The characterization: $I=(0)$, $(p)$, $(q(x))$ where $q(x)$ is irreducible, or $(p, f(x))$ where $f(x)$ cannot be expressed as $r(x)+pg(x)$, where $r(x)$ is reducible (in other words, it is not reducible modulo $p$).

## Part 1

> [!Claim]
> If $I$ is a prime ideal in $\mathbb{Z}[x]$, then $I$ follows the above characterization.

**Case 1: $I$ has constant polynomials.

> [!Lemma]
> If $q(x)=r(x)+pg(x)$ where $r(x)$ is reducible and $\text{deg}\,r(x)\geq \text{deg}\,q(x)$, there exist $r'(x)$ and $g'(x)$, where $r'(x)$ is reducible, such that $q(x)=r'(x)+pg'(x)$.
> 

^e01f20

Let $c\in I$ be a constant polynomial. At least one prime factor $p$ of $c$ must be in $I$, since $I$ is a prime ideal. If $q\ne p$ is prime and $q\in I$, $1\in I$ and $I=\mathbb{Z}[x]$. Thus, $p$ is the only prime in $I$, and all constants of $I$ are of the form $kp$. 

Let $S=\{ q(x)\in I\ : \ p \nmid q(x)\}$. If $S=\emptyset$, then $I=(p)$. Else, let $f(x)$ a minimum degree polynomial in $S$. Whatever be the value of the leading coefficient of $f(x)$, note it it cannot be divisible by $p$, and hence, using Bezout's lemma, the leading coefficient of $f(x)$ can be reduced to $1$. Call this polynomial $f^{*}(x)$ ($f^{*}(x)$ is unique modulo $p$). Let the degree of $f^{*}(x)$ be $d$.

Note that $f^{*}(x)$ cannot be written as $r(x)+pa(x)$ where $r(x)$ is reducible; Indeed, if that were true, we would have
$$
f^{*}(x)-pa'(x)=r'(x)\in I,
$$
for some $r'(x)=r_{1}'(x)r_{2}'(x)$ from [[#^e01f20]]. So either $r'_{1}(x)\in I$ or $r'_{2}(x)\in I$ (neither of which are divisible by $p$), contradicting the minimality of the degree of $f^{*}(x)$. 

We now claim that $I=(p, f^{*}(x))$. Let $u(x)=\sum_{i=0}^{d'}u_{i}x^{i}\in I$ have degree $d'$. If $d'< d$, $u(x)$ is divisible by $p$ by construction of $f^{*}(x)$. Let $d'=d$. 
$$
\begin{align}
u(x)-u_{d'}f^{*}(x)=v(x)\in I.
\end{align}
$$
Since $\text{deg}\,v(x)< d$, it follows that $v(x)=pv'(x)$. Thus, 
$$
u(x)=f^{*}(x)u_{d'}+pv'(x).
$$
For $d'> d$, 
$$
\begin{align}
 & u(x)-u_{d'}x^{d'-d}f^{*}(x)=v(x)\in I \\
\end{align}
$$
By IH, $v(x)\in(p, f^{*}(x))$, so it follows that $u(x)\in(p, f^{*}(x))$.


**Case 2: All polynomials in $I$ have degree at least $1$.**

Let $q(x)\in I$ be the minimum degree minimum leading coefficient polynomial. This clearly has to be unique. It has to be reducible, since if $q(x)=r_{1}(x)r_{2}(x)$, either $r_{1}(x)\in I$ or $r_{2}(x)\in I$, a contradiction. All $u(x)\in I$ being divisible by $q(x)$ is also forced. Thus, $I=(q(x))$.

## Part 2

> [!Claim]
> If $I$ follows the above characterization, then $I$ is a prime ideal.
> 

If $I=(p)$ or $I=(q(x))$ for irreducible $q(x)$, $I$ is clearly a prime ideal. Assume $I=(p, q(x))$, where $q(x)$ is not reducible modulo $p$. 

