---
id: "445"
date: 2026-04-06
time: 11:56
tags:
  - ALG4
  - Lecture
  - Processed
---
> [!Question]
> Given an irreducible separable polynomial $f\in F[x]$, what is $\text{Gal}(E/F)$, where $E$ is a splitting field of $f$?

We will write $\text{Gal}(f)$ for $\text{Gal}(E/F)$. Suppose $E=F(\alpha_{1}, \dots, \alpha_{n})$, where $\alpha_{1}, \dots, \alpha_{n}$ are the roots of $f$. By [[LEC ALG4 17#^c54c9e]].2, there exists an embedding $\text{Gal}(f)\hookrightarrow \mathfrak{S}_{n}$. Moreover, by [[LEC ALG4 17#^c54c9e]].3, $\text{Gal}(f)$ acts ==transitively== on $\alpha_{1}, \dots, \alpha_{n}$, so $\text{Gal}(f)$ must be a transitive subgroup of $\mathfrak{S}_{n}$. Note that $E/F$ is a Galois extension.
# The discriminant

> [!Definition] Discriminant
> Let $f=x^{n}-a_{1}x^{n-1}+a_{2}x^{n-2}+\dots\pm a_{n}\in F[x]$. 
> $$
> \text{Disc}(f):=\prod_{1\leqslant i< j\leqslant  n}(\alpha_{i}-\alpha_{j})^{2}
> $$
> where $\alpha_{i}, \alpha_{j}\in \overline{F}$ are the roots of $f$. 

> [!Proposition]
> $\text{Disc}(f)\in F$. 
> 
> > [!Proof]-
> > 1. $\text{Disc}(f)$ is a symmetric function of $\alpha_{1}, \dots, \alpha_{n}$. 
> > 2. Every symmetric function of $\alpha_{1}, \dots, \alpha_{n}$ can be written as a polynomial (with $F$-coefficients) of the elementary symmetric functions of $\alpha_{1}, \dots, \alpha_{n}$.
> > 3. But those are just the coefficients $a_{1}, a_{2}, \dots, a_{n}$.
> 

> [!Definition]
> $$
> \delta:=\prod_{1\leqslant i< j\leqslant n}(\alpha_{i}-\alpha_{j}).
> $$
> $\delta\in E$, the splitting field of $F$. 

Observe that for all $\sigma\in S_{n}$, $\sigma\delta=(-1)^{\sigma}\delta$. 

> [!Proposition]
> Let $f\in F[x]$ be irreducible, separable, and of degree $n$, $\text{char}(F)\ne 2$. Then, $\text{Gal}(f)\subseteq \mathfrak{A}_{n}$ $\iff$ $\text{Disc}(f)$ is a square in $F$ (i.e., $\delta\in F$).
> 
> > [!Proof]-
> > 
> > $(\impliedby)$ Suppose $\delta\in F$. If $\sigma$ is an odd permutation, then $\sigma\delta\ne \delta$ (since $\text{char}(f)\ne 2$). Thus, for all $\sigma\in\text{Gal}(f)$, $\sigma$ is an even permutation. 
> > 
> > $(\implies)$ for all $\sigma\in \text{Gal}(f)$, $\sigma\delta=\delta$. Thus, $\delta\in E^{\text{Gal}(f)}=F$.
> 

^9de803

> [!Example]
> Let $n=2$, and $f(x)=x^{2}-a_{1}x+a_{2}$ have roots $\alpha_{1}, \alpha_{2}$ in a splitting field $E$. The discriminant of $f$ is given by
> $$
> \begin{align}
> \text{Disc}(f) & =(\alpha_{1}-\alpha_{2})^{2} \\
>  & =(\alpha_{1}+\alpha_{2})^{2}-4\alpha_{1}\alpha_{2} \\
>  & =a_{1}^{2}-4a_{2}.
> \end{align}
> $$
> Using [[#^9de803]], $\text{Gal}(f)=\mathbb{Z}/2\mathbb{Z}$ when $a_{1}^{2}-4a_{2}$ is not a square in $F$, and $\text{Gal}(f)=\{ 1 \}$ when $a_{1}^{2}-4a_{2}$ is a square in $F$. 

> [!Proposition]
> Let $f\in F[x]$ be a cubic irreducible separable polynomial, with $\text{char}(F)\ne 2$. Then
> 1. $\text{Gal}(f)=\mathfrak{A}_{3}$ iff $\text{Disc}(f)$ is a square. 
> 2. Otherwise, $\text{Gal}(f)=\mathfrak{S}_{3}$. 
> 
> > [!Proof]-
> > 
> > The only transitive subgroups of $\mathfrak{S}_{3}$ are $\mathfrak{A}_{3}$ and $\mathfrak{S}_{3}$; use [[LEC ALG4 23#^9de803]].  
> 
