---
id: "397"
date: 2026-01-27
time: 12:27
tags:
  - TOP
---
> [!Definition]
> Let $X$ and $Y$ be topological spaces, let $p:X\to Y$ be a surjective map. The map $p$ is said to be a **quotient map** provided a subset $U$ of $Y$ is open in $Y$ iff $p ^{-1}(U)$ is open in $X$. 

We say that a subset $C$ of $X$ is **saturated** with respective to a surjective map $p:X\to Y$ if $C$ is a union of sets of the form $p ^{-1}(\{ y \})$ for $y\in Y$. Thus, $p$ is a quotient map iff it is continuous and maps saturated open sets of $X$ to open sets of $Y$. 

> [!Definition]
> If $X$ is a space and $A$ is a set and if $p:X\to A$ is a surjective map, then  there exists exactly one topology $\mathcal{T}$ on $A$ relative to which $p$ is a quotient map; it is called the **quotient topology** induced by $p$. 

> [!Definition]
> Let $X$ be a topological space, and let $X^{*}$ be a partition of $X$ into disjoint subsets whose union is $X$. Let $p:X\to X^{*}$ be the surjective map that carries each point of $X$ to the element of $X^{*}$ containing it. In the quotient topology induced by $p$, the space $X^{*}$ is called a **quotient space** of $X$. 

> [!Proposition]
> Let $p:X\to Y$ be a quotient map; let $A$ be a subspace of $X$ that is saturated with respect to $p$. Let $q:A\to p(A)$ be the map obtained by restricting $p$. 
> 1. If $A$ is either open or closed in $X$, then $q$ is a quotient map. 
> 2. If $p$ is either an open map or a closed map, then $q$ is a quotient map. 


