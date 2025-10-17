---
tags:
  - ALG3
  - Lecture
date: 2025-10-16
time: 09:14
id: "119"
---
	`# Fields

> [!Definition]
> A field extension is an injective ring homomorphism $F\to K$, where $F$ is called the base field, and $K$ is called the extension of $F$.

> [!Definition]
> Let $F\subseteq K$ be fields. Let $\alpha\in K$. We say that $\alpha$ is **algebraic over $F$** if $\alpha$ satisfies a polynomial $f(x)\in F[x]$ [^1]. $K$ is said to be **algebraic** if every $\alpha\in K$ is algebraic over $F$. $\alpha\in K$ is said to be **transcendental** over $F$ if it is not algebraic. 

[^1]: Since $F$ is a field, we can assume that $f$ is monic.

> [!Example]
> 1. $\pi$,  $e$ over $\mathbb{Q}$ are transcendental.
> 2. $2^{1/3}+2^{1/2}+1$ is algebraic over $\mathbb{Q}$.

> [!Proposition]
> Let $F\subseteq K$ be algebraic over $F$. Let $\alpha$ be algebraic over $F$. Then there is a unique monic irreducible polynomial in $F[x]$ such that $f(\alpha)=0$. 
> 
> > [!Proof]-
> > 
> > Consider the ring homomorphism $\psi:F[x]\to K$ defined by $x\mapsto\alpha$. $\ker \psi=(f(x))$ for some irreducible monic $f$ such that $f(\alpha)=0$. If $g(x)$ is another irreducible monic polynomial in $F[x]$ such that $g(\alpha)=0$, then $f\ | \ g$. Since $g$ is irreducible, $f$ and $g$ must be associates, and since $g$ is monic, we have $f=g$.

^be91eb

> [!Definition]
> The unique monic polynomial in [[#^be91eb]] satisfied by $\alpha$ is denoted by $\text{Irr}(\alpha; F)$.

> [!Example]
> 1. Consider $\mathbb{R}\subseteq \mathbb{C}$ and $\mathbb{Q}\subseteq \mathbb{C}$. $\text{Irr}(\sqrt{ 2 }, \mathbb{R})=x-\sqrt{ 2 }$, $\text{Irr}(\sqrt{ 2 }, \mathbb{Q})=x^{2}-2$.
> 2. $\alpha=e^{\iota 2\pi j/n}$. 

> [!Definition]
> Let $F\subseteq K$ be a field extension and let $\alpha\in K$. We denote the smallest subfield of $K$ containing $\alpha$ and $F$ by $F(\alpha)$. 

If $K_{1}$ and $K_{2}$ are subfields of $K$ containing $\alpha$ and $F$, then $K_{1}\cap K_{2}$ is a subfield of $K$ containing $\alpha$ and $F$. In fact, if $\{ K_{i} \}_{i\in \mathcal{A}}$ is a family of subfields of $F$ containing $\alpha$ and $F$, then $\tilde{K}:=\bigcap_{i\in \mathcal{A}}K_{i}$ is a subfield of $K$ containing $\alpha$ and $F$ [^2].

[^2]: Let $\beta\in \tilde{K}\setminus \{ 0 \}$. Then $\beta$ has a unique inverse each $K_{i}$, say $\beta_{i}$. We must have $\beta_{i}=\beta_{j}$ for all $i, j\in \mathcal{A}$.

It should be clear that
$$
F[\alpha]=\left\{  \sum_{i=0}^{n}a_{i}\alpha^{i} : a_{i}\in F  \right\}\subseteq F(\alpha).
$$
The converse inclusion holds too.

> [!Proposition]
> Let $F\subseteq K$ be a field extension and $\alpha\in K$ be algebraic over $F$. 
> $$
> F(\alpha)=F[\alpha]\cong F[x]/\text{Irr}(\alpha; F).
> $$
> 
> > [!Proof]-
> > 
> > Note that for $\psi:F[x]\to F[\alpha]$ given by $x\mapsto\alpha$, we have $\ker(\psi)=\text{Irr}(\alpha, F)$. Since $\psi$ is surjective, we have $F[x]/\text{Irr}(\alpha, F)\cong F[\alpha]$. Thus, $F[\alpha]$ is a field, and hence $F(\alpha)=F[\alpha]$.  
> 

> [!Proposition]
> $F(\alpha)=F[\alpha]$ iff $\alpha$ is algebraic over $F$.
> 
> > [!Proof]-
> > Let $\alpha\in K$ be transcendental over $F$. If $F(\alpha)=F[x]$, then $\alpha ^{-1}\in F(a)=F[x]$, so $\alpha ^{-1}=\sum_{i=0}^{n}a_{i}\alpha^{i}\iff 0=\left( \sum_{i=0}^{n}a_{i}\alpha^{i+1} \right)-1$. So, $\alpha$ is algebraic over $F$, a contradiction.

[!Proposition]
$\text{dim}_{F}(F(\alpha))=n$, where $n$ is the degree of $\text{Irr}(\alpha;F)$.

[!Proof]-

Let $B=\{ 1, \alpha, \dots, \alpha^{n-1} \}$. 





























