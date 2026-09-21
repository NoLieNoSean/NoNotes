---
id: "549"
date: 2026-09-03
time: 14:47
tags:
  - GANA1
  - Lecture
desc: measurable functions and their approximation by simple functions
---
# Measurability

[!Definition] 
Let $X$ be a set, $\mathcal{F}$ be a $\sigma$-algebra on $X$, and $\mu$ be a measure on $(X, \mathcal{F})$. 
1. The tuple $(X, \mathcal{F})$ is called a **measurable space**. 
2. The tuple $(X, \mathcal{F}, \mu)$ is called a **measure space**. 

[!Definition]
Let $(X, \mathcal{F})$ and $(Y, \mathcal{G})$ be measure spaces. A function $\phi:X\to Y$ is **measurable** if $\phi ^{-1}(A)\in \mathcal{F}$ for all $A\in \mathcal{G}$. 

If $\mathcal{G}=\sigma(S)$, then $\phi$ is measurable iff $\phi ^{-1}(A)\in \mathcal{F}$ for all $A\in S$. 

[!Proposition]
Let $(X, \mathcal{F})$ be a measurable space. Let $\phi:X\to \mathbb{R}$ be any map. Then, $\phi$ is a measurable map $(X, \mathcal{F})\to(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ iff any of the following hold:
1. $\phi ^{-1}((a, b))\in \mathcal{F}$ for all $(a, b)\subseteq \mathbb{R}$. 
2. $\phi ^{-1}((-\infty, t])\in \mathcal{F}$ for all $t\in \mathbb{R}$. 
3. $\phi ^{-1}([t, \infty)\in \mathcal{F}$ for all $t\in \mathbb{R}$. 

[!Proposition]
Let $X, Y$ be metric spaces. If $f:X\to Y$ is a continuous map, then $f:(X, \mathcal{B}(X))\to(Y, \mathcal{B}(Y))$ is measurable. 

[!Proposition]
