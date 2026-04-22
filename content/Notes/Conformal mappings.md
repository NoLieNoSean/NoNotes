---
id: "443"
date: 2026-03-30
time: 14:28
tags:
  - CANA
---

> [!Definition]
> A bijective holomorphic function $f:U\to V$ is called a **conformal map** or **biholomorphism**. Given such $f$, we say that $U$ and $V$ are **conformally equivalent**. 

> [!Proposition] @steinComplexAnalysis2003 Prp 8.1.1
> If $f:U\to V$ is holomorphic and injective, then $f'(z)\ne 0$ for all $z\in U$. In particular, the inverse of $f$ defined on its range is holomorphic, and this the inverse of a conformal map is also holomorphic. 

> [!Theorem]
> Let
> $$
> F(z)=\frac{i-z}{i+z}, \quad \text{and}\quad G(w)=i\frac{1-w}{1+w}.
> $$
> $F:\mathbb{H}\to \mathbb{D}$ is a conformal map with inverse $G$. 

^c5b41a

---

# The schwarz lemma

> [!Lemma] Schwarz
> Let $F:\mathbb{D}\to \mathbb{D}$ be holomorphic with $f(0)=0$. Then ^5e27dc
> 1. $|f(z)|\leqslant |z|$ for all $z\in \mathbb{D}$. 
> 2. If for some $z_{0} \ne 0$ we have $|f(z_{0})|=|z_{0}|$, then $f$ is a rotation. 
> 3. $|f'(0)|\leqslant 1$, and if equality holds, then $f$ is a rotation. 

Proof uses [[Meromorphic functions and the Logarithm#^cd86f1]] extensively. 

## Automorphisms of the disc

Define
$$
\psi_{\alpha}=\frac{\alpha-z}{1-\overline{\alpha}z}, \quad  \text{where }\alpha\in \mathbb{C}\text{ and }|\alpha|< 1.
$$
$\psi_{\alpha}$ is an automorphism of $\mathbb{D}$ with these properties:
1. $\psi_{\alpha}^{-1}=\psi_{\alpha}$. 
2. $\psi_{\alpha}(0)=\alpha$ and $\psi_{\alpha}(\alpha)=0$. 

> [!Theorem]
> If $f$ is an automorphism of $\mathbb{D}$, then there exist $\theta\in \mathbb{R}$ and $\alpha\in \mathbb{D}$ such that
> $$
> f(z)=e^{ i\theta }\frac{\alpha-z}{1-\overline{\alpha}z}.
> $$
> 

Proof uses [[#^5e27dc]].

Setting $\alpha=0$ yields the following corollary:

> [!Corollary]
> The only automorphisms of the unit disc that fix the origin are the rotations. 

[!Question]
What is $\text{Aut}(\mathbb{D})$ isomorphic to?

## Automorphisms of H

Let $F:\mathbb{H}\to \mathbb{D}$ be as defined in [[#^c5b41a]]. Let $\Gamma:\text{Aut}(\mathbb{D})\to \text{Aut}(\mathbb{H})$ be the map given by conjugating by $F$:
$$
\Gamma(\varphi)=F^{-1}\circ\varphi \circ F.
$$
Clearly, $\Gamma$ is a (group) *isomorphism*.

[!Theorem]
Given $M\in SL_{2}(\mathbb{R})$, define $f_{M}$ by
$$
f_{M}(z)=\frac{az+b}{cz+d}.
$$
Every $\varphi\in \text{Aut}(\mathbb{H})$ takes the form $f_{M}$ for some $M\in SL_{2}(\mathbb{R})$. Conversely, every map of this form is an automorphism of $\mathbb{H}$. 

[!Proof]-

Denote $SL_{2}(\mathbb{R})$ by $\mathcal{G}$. 
1. $f_{M}$ maps $\mathbb{H}$ into itself. 
2. $f_{M}\circ f_{M'}=f_{MM'}$. 
	1. It follows that each $f_{M}$ is an automorphism. Thus, the map $f_{\_}$ becomes a group homomorphism from $\mathcal{G}$ to $\text{Aut}(\mathbb{H})$, i.e., a group action. 
3. the action is transitive. 
4. $F\circ f_{M_{\theta}}\circ F^{-1}$ corresponds to rotation by $-2\theta$ in $\mathbb{D}$. 
5. ...

---

# The Riemann mapping theorem

> [!Theorem] Riemann
> Suppose $\Omega$ is proper and simply connected. If $z_{0}\in \Omega$, then there exists a unique conformal map $F:\Omega\to \mathbb{D}$ such that
> $$
> F(z_{0})=0 \quad \text{and}\quad F'(z_{0})> 0.
> $$

> [!Definition]
> A family $\mathcal{F}$ of holomorphic functions on $\Omega$ is said to be **normal** if every sequence in $\mathcal{F}$ has a subsequence that converges uniformly on every compact subset of $\Omega$ (the limit need not be in $\mathcal{F}$). 

> [!Theorem]
> Suppose $\mathcal{F}$ is a family of holomorphic functions on $\Omega$ that is uniformly bounded on compact subsets of $\Omega$. Then, 
> 1. $\mathcal{F}$ is uniformly continuous on every compact subset of $\Omega$. 
> 2. $\mathcal{F}$ is a normal family. 

> [!Proposition]
> If $\Omega$ is a connected open subset of $\mathbb{C}$ and $\{ f_{n} \}$ a sequence of injective holomorphic functions on $\Omega$ that converges uniformly on every compact subset of $\Omega$ to a (holomorphic) function $f$, then $f$ is either injective or constant.

