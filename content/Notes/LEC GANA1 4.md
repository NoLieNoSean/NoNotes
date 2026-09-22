---
id: "534"
date: 2026-08-21
time: 15:34
tags:
  - GANA1
  - Lecture
desc: completeness, the Lebesgue measure, regularity
P1: true
---

%% test %% 
> [!Recall]
> Recall the setup from [[LEC GANA1 3#The Borel measure]]:
> 1. $\lambda$ is a measure on the algebra $\mathcal{A}$. 
> 2. $\sigma(\mathcal{A})=\mathcal{B}(\mathbb{R})$, and $\lambda$ extends uniquely to a measure on $\mathcal{B}(\mathbb{R})$. 
> 
> Considering $\lambda$ as a measure on $\mathcal{A}$, define the outer measure $\lambda^{\star}$ as in [[LEC GANA1 3#^8560c6]] and the $\sigma$-algebra $\mathcal{M}_{\lambda}$ as in [[LEC GANA1 3#^3f00a0]]. 

^25b2a0

Before defining the Lebesgue measure, we will show that $\mathcal{M}_{\lambda}\subsetneq P(\mathbb{R})$, i.e., not all subsets of $\mathbb{R}$ are measurable. 
# Non measurable subsets of $\mathbb{R}$

For $A\in P(\mathbb{R})$, denote $\{ a+x:a\in A \}$ by $A+x$. 

> [!Proposition]
> $\lambda^{\star}(A+x)=\lambda^{\star}(A)$ for all $A\in P(\mathbb{R})$.

> [!Corollary]
> If $A\in \mathcal{M}_{\lambda}$ then $A+x\in \mathcal{M}_{\lambda}$ for all $x\in \mathbb{R}$. 

In particular, $\lambda^{\star}(A+x)=\lambda^{\star}(A)$ for all $A\in \mathcal{B}(\mathbb{R})$. 

> [!Proposition]
> $\mathcal{M}_{\lambda}\subsetneq P(\mathbb{R})$. 

^61d065

# The Lebesgue measure

> [!Definition] Complete $\sigma$-algebra
> A $\sigma$-algebra $\mathcal{F}$ is **complete** with respect to a measure $\mu$ if $A\in \mathcal{F}$ and $\mu(A)=0$ implies $B\in \mathcal{F}$ for all $B\subseteq A$. 

> [!Example]
> $\mathcal{B}(\mathbb{R})$ is not complete with respect to the measure $\lambda^{\star}$. 

> [!Proposition] Completion of a measure
> Let $\mu$ be a measure on a $\sigma$-algebra $\mathcal{F}\subseteq P(\Omega)$. Define
> $$
> \begin{align}
> \tilde{\mathcal{F}}=\{ A\subseteq P(\Omega) : \exists B_{1}\subseteq A\subseteq B_{2}, \mu(B_{2}\setminus B_{1})=0\}.
> \end{align}
> $$
> $\tilde{\mathcal{F}}$ is a $\sigma$-algebra. Define $\tilde{\mu}$ on $\tilde{\mathcal{F}}$ by $\tilde{\mu}(A)=\mu(B_{2})=\mu(B_{1})$. Then, $\tilde{\mu}$ is a measure on $\tilde{\mathcal{F}}$, $\tilde{\mu}|_{\mathcal{F}}=\mu$, and $\tilde{\mathcal{F}}$ is complete. We call $(\tilde{\mathcal{F}}, \tilde{\mu})$ the **completion** of $(\mathcal{F}, \mu)$. 

> [!Proposition]
> For any algebra $\mathcal{A}$ with $\sigma$-finite measure $\mu$, $(\mathcal{M}_{\mu}, \mu^{\star})$ is the completion of $(\sigma(\mathcal{A}), \mu^{\star})$. 

> [!Definition] Lebesgue measure
> Let $\mathcal{M}_{\lambda}\subseteq P(\mathbb{R})$ and $\lambda^{\star}$ be defined [[#^25b2a0|here]]. The measure $\lambda^{\star}$ restricted to $\mathcal{M}_{\lambda}$ is called the **Lebesgue measure** on $\mathbb{R}$. The Lebesgue measure can be restricted to a finite measure on any interval $[a, b]\subseteq \mathbb{R}$. 


> [!Corollary]
> $|\mathcal{M}_{\lambda}|=2^{c}$.

^ba1099

> [!Corollary]
> [[#^61d065]] and [[#^ba1099]] combined with the fact that $|\mathcal{B}(\mathbb{R})|=c$ gives us
> $$
> \mathcal{A}\subsetneq\mathcal{B}(\mathbb{R})\subsetneq \mathcal{M}_{\lambda}\subsetneq P(\mathbb{R}).
> $$
> 


> [!Remark]
> Let $\mu$ be the Lebesgue measure on $\mathbb{R}$. 
> 1. Given $\epsilon> 0$ and $A\in \mathcal{B}([a, b])$, there exists $U\in \mathcal{A}([a, b])$ such that $\mu(A\triangle U)<\epsilon$. 
> 2. For $A\in \mathcal{M}_{\lambda}$, there exists $B\in \mathcal{B}(\mathbb{R})$ such that $\mu(A\triangle B)=0$. 


---

# Regularity

> [!Proposition]
> Let $X$ be a metric space and $\mu$ be a finite measure on $\mathcal{B}_{X}$. Then for all $A\in \mathcal{B}_{X}$, 
> $$
> \begin{align}
> \mu(A) & =\inf \{ \mu(U):U\text{ is open}, A\subseteq U \}\\
>  & =\sup \{ \mu(F):F\text{ is closed}, F\subseteq A \}.
> \end{align}
> $$
> 

> [!Corollary]
> Let $X$ be a metric space. Let $\mu, \nu$ be measures on $\mathcal{B}(X)$. If $\mu(F)=\nu(F)$ for all closed $F\subseteq X$, then $\mu=\nu$. 

> [!Definition] Radon measure
> Let $X$ be a metric space. A measure $\mu$ on $\mathcal{B}(X)$ is **Radon** if $\mu(K)< \infty$ for all compact $K\subseteq X$.  

> [!Proposition]
> Let $\mu$ be a Radon measure on $\mathcal{B}(\mathbb{R}^{N})$. Then, 
> $$
> \begin{align}
> \mu(A) & =\inf \{ \mu(U):U \text{ is open}, A\subseteq U\} \\
>  & =\sup\{ \mu(K):K\text{ is compact}, K\subseteq A \}.
> \end{align}
> $$
> 