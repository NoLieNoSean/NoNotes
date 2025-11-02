---
tags:
  - ALG3
  - Lecture
  - Processed
date: 2025-10-16
time: 09:14
id: "119"
---
# Field extensions

> [!Definition] Field extension
> A **field extension** is an injective ring homomorphism $F\to K$, where $F$ is called the base field, and $K$ is called the extension of $F$. We will denote the field extension $F\subseteq K$ by $K/F$.

^cb5039

> [!Definition] Algebraic elements
> Let $K/F$ be a field extension and $\alpha\in K$. We say that $\alpha$ is **algebraic over $F$** if $\alpha$ satisfies a polynomial $f(x)\in F[x]$ [^1]. $K$ is said to be **algebraic** if every $\alpha\in K$ is algebraic over $F$. $\alpha\in K$ is said to be **transcendental** over $F$ if it is not algebraic. 

^b33844

[^1]: Since $F$ is a field, we can assume that $f$ is monic.

> [!Example]
> 1. $\pi$,  $e$ over $\mathbb{Q}$ are transcendental.
> 2. $2^{1/3}+2^{1/2}+1$ is algebraic over $\mathbb{Q}$; the minimal polynomial is $x^6 - 6 x^5 + 9 x^4 + 3 x^2 - 42 x + 31$. 

> [!Proposition]
> Let $K/F$ be a field extension. Let $\alpha$ be algebraic over $F$. Then there is a unique monic irreducible polynomial in $F[x]$ such that $f(\alpha)=0$. 
> 
> > [!Proof]-
> > 
> > Consider the ring homomorphism $\psi:F[x]\to K$ defined by $x\mapsto\alpha$. Since $F[x]$ is a PID,  $\ker \psi=(f(x))$ for some irreducible monic $f$ such that $f(\alpha)=0$. If $g(x)$ is another irreducible monic polynomial in $F[x]$ such that $g(\alpha)=0$, then $f\ | \ g$. Since $g$ is irreducible, $f$ and $g$ must be associates, and since $g$ is monic, we have $f=g$.

^be91eb

> [!Definition] Minimal polynomial
> The unique monic polynomial in [[#^be91eb]] satisfied by $\alpha$ is denoted by $\text{Irr}(\alpha; F)$.

> [!Example]
> 1. Consider $\mathbb{R}\subseteq \mathbb{C}$ and $\mathbb{Q}\subseteq \mathbb{C}$. $\text{Irr}(\sqrt{ 2 }, \mathbb{R})=x-\sqrt{ 2 }$, $\text{Irr}(\sqrt{ 2 }, \mathbb{Q})=x^{2}-2$.
> 2. $\text{Irr}(e^{i2\pi j/n}, \mathbb{R})=x^{k}-1$, where $k=\text{lcm}(j, n)/j$.  

> [!Definition]
> Let $K/F$ be a field extension and let $\alpha\in K$. We denote the smallest subfield of $K$ containing $\alpha$ and $F$ by $F(\alpha)$. 

The notation $F(\alpha)$ is suggestive. Indeed, it is easy to see that *$F(\alpha)$ is the set of all rational functions in $\alpha$ with coefficients in $F$*:
$$
F(\alpha)=\left\{ \frac{f(\alpha)}{g(\alpha)}:f, g\in F[x], g(\alpha)\ne 0 \right\}.
$$

Suppose $K/F$ and $\alpha\in K$. Clearly, 
$$
F[\alpha]=\left\{  \sum_{i=0}^{n}a_{i}\alpha^{i} : a_{i}\in F  \right\}\subseteq F(\alpha).
$$
If $\alpha$ is algebraic over $F$, the reverse inclusion holds too.

> [!Proposition]
> Let $K/F$ be a field extension and $\alpha\in K$ be algebraic over $F$. 
> $$
> F(\alpha)=F[\alpha]\cong F[x]/\text{Irr}(\alpha; F).
> $$
> 
> > [!Proof]-
> > 
> > Note that for $\psi:F[x]\to F[\alpha]$ given by $x\mapsto\alpha$, we have $\ker(\psi)=(\text{Irr}(\alpha, F))$. Since $\psi$ is surjective, we have $F[x]/\text{Irr}(\alpha, F)\cong F[\alpha]$. Thus, $F[\alpha]$ is a field, and hence $F(\alpha)=F[\alpha]$.  

^6a4ad7

> [!Remark] Constructing inverses in $F[\alpha]$
> 
> $F[\alpha]$ is a field by [[#^6a4ad7]]; how can we obtain the inverse of $f(\alpha)\in F[\alpha]$? 
> 
> Let $m(x)=\text{Irr}(\alpha, F)$. Since $m(x)$ is irreducible in $F[x]$, the gcd of $f(x)$ and $m(x)$ is $1$. Since $F[x]$ is a Euclidean domain, the euclidean algorithm supplies $g(x), h(x)\in F[x]$ such that $f(x)g(x)+m(x)h(x)=1$. Reducing modulo $m(x)$, we obtain $f(x)g(x)\equiv 1\mod m(x)$. Thus, $f(\alpha)g(\alpha)=1$. 

> [!Proposition]
> $F(\alpha)=F[\alpha]$ iff $\alpha$ is algebraic over $F$.
> 
> > [!Proof]-
> > Let $\alpha\in K$ be transcendental over $F$. If $F(\alpha)=F[\alpha]$, since $\alpha ^{-1}\in F(\alpha)$, we have $\alpha ^{-1}=\sum_{i=0}^{n}a_{i}\alpha^{i}\iff 0=\left( \sum_{i=0}^{n}a_{i}\alpha^{i+1} \right)-1$. This implies $\alpha$ is algebraic over $F$, a contradiction.

> [!Proposition]
> Let $K/F$ be a field extension and $\alpha\in K$ be algebraic over $F$. Then, $\text{dim}_{F}(F(\alpha))=n$, where $n$ is the degree of $\text{Irr}(\alpha;F)$. Specifically, $B=\{ 1, \alpha, \dots, \alpha^{n-1} \}$ is an $F$-basis for $F(\alpha)$.
> 
> > [!Proof]-
> > 
> > If $B$ were not linearly independent, an equation of linear dependence would yield a polynomial of degree less than $n$ of which $\alpha$ is a root, contradicting [[#^be91eb]]. 
> > 
> > Let $g(\alpha)\in F[\alpha]$. Suppose $f=\text{Irr}(\alpha; F)$. By the division algorithm, there exist unique $q(x), r(x)\in F[x]$ with $r(x)=0$ or $\text{deg}(r(x))< n$ such that
> > $$
> > \begin{align}
> >  & g(x)=f(x)q(x)+r(x) \\
> > \implies & g(\alpha)=r(\alpha). 
> > \end{align}
> > $$
> > If $r(x)=0$, then $r(\alpha)=0\in\text{span}(B)$. If $r(x)\ne 0$, then 
> > $$
> > r(x)=\sum_{i=0}^{n-1} a_{i}x^{i}
> > $$
> > and hence $r(\alpha)\in\text{span}(B)$. Therefore, $F[\alpha]\subseteq\text{span}(B)$. Since $\text{span}(B)\subseteq F[\alpha]$, we get $F[\alpha]=\text{span}(B)$. 
> > 
> 

^5c70c9


If $K_{1}$ and $K_{2}$ are subfields of $K$ containing $\alpha$ and $F$, then $K_{1}\cap K_{2}$ is a subfield of $K$ containing $\alpha$ and $F$. In fact, if $\{ K_{i} \}_{i\in \mathcal{A}}$ is a family of subfields of $K$ containing $\alpha$ and $F$, then $\tilde{K}:=\bigcap_{i\in \mathcal{A}}K_{i}$ is a subfield of $K$ containing $\alpha$ and $F$ [^2].

[^2]: Let $\beta\in \tilde{K}\setminus \{ 0 \}$. Then $\beta$ has a unique inverse each $K_{i}$, say $\beta_{i}$. We must have $\beta_{i}=\beta_{j}$ for all $i, j\in \mathcal{A}$.


























