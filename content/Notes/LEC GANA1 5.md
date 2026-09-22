---
id: "549"
date: 2026-09-03
time: 14:47
tags:
  - GANA1
  - Lecture
desc: measurable functions and their approximation by simple functions
P1: true
---
# Measurable functions

> [!Definition] measure space
> Let $X$ be a set, $\mathcal{F}$ be a $\sigma$-algebra on $X$, and $\mu$ be a measure on $(X, \mathcal{F})$. 
> 1. The tuple $(X, \mathcal{F})$ is called a **measurable space**. 
> 2. The tuple $(X, \mathcal{F}, \mu)$ is called a **measure space**. 

> [!Definition] measurable function
> Let $(X, \mathcal{F})$ and $(Y, \mathcal{G})$ be measure spaces. A function $\phi:X\to Y$ is **measurable** if $\phi ^{-1}(A)\in \mathcal{F}$ for all $A\in \mathcal{G}$. 

If $\mathcal{G}=\sigma(S)$, then $\phi$ is measurable iff $\phi ^{-1}(A)\in \mathcal{F}$ for all $A\in S$. 

> [!Proposition]
> Let $(X, \mathcal{F})$ be a measurable space. Let $\phi:X\to \mathbb{R}$ be any map. Then, $\phi$ is a measurable map $(X, \mathcal{F})\to(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ iff any of the following hold:
> 1. $\phi ^{-1}((a, b))\in \mathcal{F}$ for all $(a, b)\subseteq \mathbb{R}$. 
> 2. $\phi ^{-1}((-\infty, t])\in \mathcal{F}$ for all $t\in \mathbb{R}$. 
> 3. $\phi ^{-1}([t, \infty)\in \mathcal{F}$ for all $t\in \mathbb{R}$. 
> 

> [!Proposition]
> Let $X, Y$ be metric spaces. If $f:X\to Y$ is a continuous map, then $f:(X, \mathcal{B}(X))\to(Y, \mathcal{B}(Y))$ is measurable. 

> [!Proposition]
> 4. Composition of measurable functions is measurable. 
> 5. $\phi=(\phi_{1}, \dots, \phi_{n}):(X, \mathcal{F})\to (\mathbb{R}^{N}, \mathcal{B}(\mathbb{R}^{N}))$ is measurable iff each $\phi_{i}$ is measurable. 

> [!Corollary]
> Let $\phi_{1}, \phi_{2}:(X, \mathcal{F})\to (\mathbb{R}, \mathcal{B}(\mathbb{R}))$. Then, $\phi_{1}+\phi_{2}$, $\phi_{1}\phi_{2}$, $\phi_{1}\wedge \phi_{2}$, and $\phi_{1}\vee \phi_{2}$ are measurable. 

> [!Proposition]
> Let $\phi:(X, \mathcal{F})\to(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ be measurable. Then, $f:(X, \mathcal{F})\to(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ defined by
> $$
> f(x)=\begin{cases}
> 1/\phi(x) & \phi(x)\ne 0 \\
> 0 & \phi(x)=0
> \end{cases}
> $$
> is measurable. 

> [!Remark]
> If $\varphi, \chi:(X, \mathcal{F})\to \mathbb{R}$ are measurable, then $\{ x:\varphi(x)=\chi(x) \}$ is measurable. 

> [!Corollary]
> Let $\{ \varphi_{n} \}$ be a countable family of measurable functions $(X, \mathcal{F})\to \mathbb{R}$. The set $\{ x\in X:\lim_{n }\varphi_{n}(x) \text{ exists} \}$ is measurable. 

> [!Proposition]
> Let $\{ \varphi_{n}\}$ be a countable family of measurable functions $(X, \mathcal{F})\to(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ with $|\varphi_{n}(x)|< M$ for all $x\in X$ and $n\in \mathbb{N}$. Then, $\sup_{n}\varphi_{n}$, $\inf_{n}\varphi_{n}$ $\limsup_{n}\varphi_{n}$, $\liminf_{n}\varphi_{n}$ are measurable. 

We can drop the boundedness hypothesis if we extend the codomain:

> [!Notation]
> Denote $\mathbb{R}\cup \{ -\infty, \infty \}$ with the usual topology by $\overline{\mathbb{R}}$. For brevity, we will denote the measurable space $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ by $\mathbb{R}$ and $(\overline{\mathbb{R}}, \mathfrak{B}(\overline{\mathbb{R}}))$ by $\overline{\mathbb{R}}$. 
> 
> More generally, a metric space when used as a measurable space without specifying the measure is assumed to be equipped with the Borel measure. 

> [!Definition]
> Call $\phi:(X, \mathcal{F})\to \overline{\mathbb{R}}$ **measurable** if $\phi ^{-1}(A)\in \mathcal{F}$ for all $A\in \mathcal{B}(\mathbb{R})$ and $\phi ^{-1}(\{ -\infty \}), \phi ^{-1}(\{ \infty \})\in \mathcal{F}$. 

> [!Proposition]
> Let $\{ \varphi_{n} \}$ be a countable family of measurable functions $(X, \mathcal{F})\to \overline{\mathbb{R}}$. Then, $\sup_{n}\varphi_{n}$ is measurable. 


---

# Simple functions

> [!Definition] Simple function
> Let $(X, \mathcal{F})$ be a measurable space, and let $A\in \mathcal{F}$. Denote the indicator function on $A$ by $1_{A}$:
> $$
> 1_{A}(x)=\begin{cases}
> 1 & x\in A  \\
> 0  & x\not\in A.
> \end{cases}
> $$
> $1_{A}:(X, \mathcal{F})\to \mathbb{R}$ is measurable. 
> 
> Call a measurable function $\phi:(X, \mathcal{F})\to \mathbb{R}$ **simple** if $\phi(X)$ is finite. 


If $\phi(X)=\{ t_{1}, \dots, t_{n} \}\subseteq \mathbb{R}$ and $A_{i}=\phi ^{-1}(\{ t_{i} \})$, we have
$$
\phi=\sum_{i=1}^{n} t_{i}1_{A_{i}}.
$$

> [!Proposition]
> Let $f:(X, \mathcal{F})\to [0, \infty]$ be measurable. Then there exist simple functions $f_{n}:(X, \mathcal{F})\to \mathbb{R}$ such that $f_{n}(x)\uparrow f(x)$ for all $x\in X$. Furthermore, if there exists $M> 0$ such that $|f(x)|< M$ for all $x\in X$, then $f_{n}\to f$ uniformly. 
