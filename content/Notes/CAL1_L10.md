---
tags:
  - CAL1
  - Lecture
date: 2025-02-07
time: 11:50
---
## Separable metric spaces

> [!Definition]
> A metric space $X$ is said to be *separable* provided there is a countable subset of $X$ that is dense in $X$

> [!Warning]
> Note that the term **“separable”** for a metric space with a dense countable subset has **nothing to do with connectedness** or the concept of [[Analysis1_L22#Connected sets|separations]] in topology.

> [!Theorem] 
> A compact metric space is separable.

### Second-countable spaces

> [!Definition]
> A metric space $X$ is *second-countable* if there is a countable collection $\{ O_{n} \}_{n=1}^{\infty}$ of open subsets of $X$ such that any open subset of $X$ is the union of a subcollection of $\{ O_{n} \}_{n=1}^{\infty}$.

> [!Theorem]
> A metric space is separable iff it is second-countable.




> [!Theorem]
> Every subset of a separable metric space is separable.

### Lindelöf covering theorem

> [!Theorem]
> Every open cover in a separable metric space has a countable subcover.


---

## Baire category theorem

> [!Definition]
> We call a subset $A$ of a metric space $X$ *dense* in $X$ if every nonempty open subset of $X$ contains a point in $A$.
> 
> We call a subset $A$ of a metric space $X$ *hollow* in $X$ if $A$ has an empty interior (taken in $X$). 

> [!Theorem] Lemma
> A set is dense if and only if its complement is hollow.

> [!Theorem] Baire category theorem
> Let $X$ be a complete metric space.
> 1. Let $\{ \mathcal{O}_{n} \}_{n=1}^{\infty}$ be a countable collection of open dense subsets of $X$. Then the intersection $\bigcap_{n=1}^{\infty}\mathcal{O}_{n}$ is also dense in $X$. 
> 2. Let $\{ \mathcal{F}_{n} \}_{n=1}^{\infty}$ be a countable collection of closed hollow subsets of $X$. Then the union $\bigcup_{n=1}^{\infty}F_{n}$ also is hollow.

