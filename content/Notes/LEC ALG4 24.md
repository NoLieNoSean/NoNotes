---
id: "446"
date: 2026-04-10
time: 11:54
tags:
  - Lecture
  - ALG4
  - Processed
---
# Cyclotomic extensions

Let $F$ be a field of characteristic $0$. An **$n$th root of unity** in $F$ is an element $\zeta\in F$ such that $\zeta^{n}=1$. An $n$th root of unity in $F$ is **primitive** if $\zeta^{k}\ne 1$ for all $1\leqslant k< n$. 

> [!Remark]
> Let $\zeta$ be a primitive $n$th root of unity, 
> 1. then $\{ \zeta_{n}^{k}:1\leqslant k< n \}$ is a cyclic subgroup of $F^{\times}$ isomorphic to $\mathbb{Z}/n\mathbb{Z}$. 
> 2. $\zeta_{n}^{k}$ is primitive iff $(k, n)=1$. 
> 3. $F$ has exactly $\varphi(n)$ primitive $n$th roots. 

> [!Proposition]
> Let $\zeta_{n}\in \overline{F}$ be a primitive $n$th root of unity. Then $F[\zeta_{n}]$ is a splitting field of $x^{n}-1$. In particular, the extension $F[\zeta]/F$ is Galois. 

> [!Definition]
> The $n$th **cyclotomic polynomial** in $\mathbb{C}[x]$ is defined to be
> $$
> \begin{align}
> \Phi_{n}(x)=\prod_{(k, n)=1}(x-e^{ 2\pi ik/n }).
> \end{align}
> $$
> 

> [!Proposition]
> $$
> x^{n}-1=\prod_{\substack{d\ | \ n\\1\leqslant  d\leqslant  n}}\Phi_{d}(x).
> $$

> [!Corollary]
> $\Phi_{n}(x)\in \mathbb{Z}[x]$ for all $n$. 
> 
> > [!Proof]-
> > 
> > First, it is clear that all the coefficients of $\Phi_{n}(x)$ are real (by grouping complex conjugates). The claim is true for $n=1$. 
> > 
> > Assume $n> 1$. Assume for all $d\ | \ n$ and $d< n$, $\Phi_{d}(x)\in \mathbb{Z}[x]$. Further, each $\Phi_{d}(x)$ is monic. Thus, 
> > $$
> > \Phi_{n}(x)=\frac{x^{n}-1}{\prod_{\substack{d\ | \  n\\ d< n}}\Phi_{d}(x)}.
> > $$
> > Thus, we can obtain $\Phi_{n}(x)$ by long division. Since both the numerator and the denominator are in $\mathbb{Z}[x]$, it follows that $\Phi_{n}(x)\in \mathbb{Z}[x]$. 
> 

> [!Corollary]
> Let $p$ be prime. Then, $\Phi_{p}=x^{p-1}+x^{p-2}+\dots+x+1$. 
> 
> > [!Proof]-
> > $$
> > = \frac{x^{p}-1}{x-1}.
> > $$
> > 
> 

> [!Definition]
> The $n$th cyclotomic field extension of $\mathbb{Q}$ is defined to be $E_{n}:=\mathbb{Q}[\zeta_{n}]$. 

> [!Remark]
> 4. $E_{n}=\mathbb{Q}[\zeta_{n}^{k}]$ for any $(n, k)=1$. 
> 5. $E_{n}$ is the splitting field $(\subseteq \mathbb{C})$ of $x^{n}-1$ over $\mathbb{Q}$. 

> [!Proposition]
> $\text{Aut}(E_{n})\quad(=\text{Aut}_{\mathbb{Q}}(E_{n}))\quad\cong \text{Aut}_{\textsf{Gp}}(\mathbb{Z}/n\mathbb{Z})\cong(\mathbb{Z}/n\mathbb{Z})^{\times}$.


---

# Extensions of Q associated with finite abelian groups

Given any group $G$, we can always find a field extension $E/E^{G}$ with Galois group $G$, where $E=F(x_{1}, \dots, x_{n})$ and $n$ is such that $G\hookrightarrow \mathfrak{S}_{n}$. However, this does not let us control the base field $E^{G}$. We can construct extensions with base field $\mathbb{Q}$ having any desired Galois group if the group is abelian:

> [!Theorem]
> Let $G$ be finite abelian. Then there exists a finite Galois extension $F/\mathbb{Q}$ such that $\text{Aut}_{\mathbb{Q}}(F)\cong G$. 

> [!Theorem] @isaacsAlgebraGraduateCourse2009 20.14
> For all $n> 1$, there exist infinitely many prime numbers $p$ such that $p\equiv1 \mod n$. 
