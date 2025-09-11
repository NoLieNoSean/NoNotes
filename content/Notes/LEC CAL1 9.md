---
tags:
  - CAL1
  - Lecture
date: 2025-02-07
time: 11:50
---
# Separable metric spaces

> [!Definition]
> A metric space $X$ is said to be **separable** provided there is a countable subset of $X$ that is dense in $X$

> [!Warning]
> The notion of **separable** for a metric space with a dense countable subset is distinct from that of connectedness and [[LEC ANA1 22#Connected sets|separations]] in topology.

> [!Theorem] 
> A compact metric space is separable.
> 
> > [!Proof]-
> > Let $X$ be a compact metric space. Then, $X$ is totally bounded. For each $n\in \mathbb{N}$, let $B_{n}$ be a finite collection of balls of radius $1/n$ which covers $X$. Let $D=\{ x\ | \ B_{1/n}(x)\in B_{n}\text{ for some }n \}$. Then $D$ is countable and dense.
> 
## Second-countable spaces

> [!Definition]
> A metric space $X$ is **second-countable** if there is a countable collection $\{ O_{n} \}_{n=1}^{\infty}$ of open subsets of $X$ called a **basis** such that any open subset of $X$ is the union of a subcollection of $\{ O_{n} \}_{n=1}^{\infty}$.

> [!Theorem]
> A metric space is separable iff it is second-countable.
> 
> > [!proof]-
> > Suppose $X$ is separable. Let $D$ be a countable dense subset of $X$. Assume $D$ is countably infinite, and let $(x_{n})$ be an enumeration of $D$. Then, $\mathcal{A}=\{ B_{1/m}(x_{n}) \}_{n, m\in \mathbb{N}}$ is a countable collection of open subsets of $X$. We claim that every open subset of $X$ is the union of a subcollection of $\mathcal{A}$. Indeed, let $\mathcal{O}$ be an open subset of $X$. Let $x\in \mathcal{O}$. Since $\mathcal{O}$ is open, $B_{2/m}(x)\subseteq \mathcal{O}$ for some $m$. Since $D$ is dense in $X$, we can find $x_{n}$ such that  $x_{n}\in B_{1/m}(x)$. Now, observe that $x\in B_{1/m}(x_{n})\subseteq \mathcal{O}$. Thus, every $x\in \mathcal{O}$ is in some member of $\mathcal{A}$ contained in $\mathcal{O}$. 
> > 
> > To prove the converse, suppose there is a countable collection $\{ \mathcal{O}_{n} \}_{n=1}^{\infty}$ of open sets such that any open subset of $X$ is the union of a subcollection of $\{ \mathcal{O}_{n} \}_{n=1}^{\infty}$. For each $n$, pick a point in $\mathcal{O}_{n}$ and call it $x_{n}$. Then the set $\{ x_{n} \}_{n=1}^{\infty}$ is countable and dense since every nonempty open subset of $X$ is the union of a subcollection of $\{ \mathcal{O} _{n}\}_{n=1}^{\infty}$ and therefore contains points in $\{ x_{n} \}_{n=1}^{\infty}$. 
> 

> [!Theorem]
> Every subset of a separable metric space is separable.
> 
> > [!Proof]-
> > Let $E$ be a subset of a separable metric space $X$. From the previous theorem, we know that $X$ has a countable base $\mathcal{A}=\{ \mathcal{O}_{n} \}_{n=1}^{\infty}$. Now, every element in $\mathcal{B}=\{ \mathcal{O}_{n}\cap E \}_{n=1}^{\infty}$ is open in $E$ due to [[LEC ANA1 15#Subspace topology|subspace topology]], and $\mathcal{B}$ is countable. Also, any open set $\mathcal{O}$ in $E$ can be expressed as $\mathcal{O}'\cap E$, where $\mathcal{O}'$ is open in $X$. Since $\mathcal{O}'$ can be expressed as a countable union of elements in $\mathcal{A}$, it follows that $\mathcal{O}$ can be expressed as a countable union of elements in $\mathcal{B}$. 
> 
## Lindelöf covering theorem

> [!Theorem]
> Let $X$ be a separable metric space, and let $A\subseteq X$. Let $F$ be an open covering of $A$. Then, there exists a countable subcollection of $F$ which also covers $A$.
> 
> > [!Proof]-
> > Since $X$ is separable, it has a countable basis $\mathcal{A}=\{ \mathcal{O} _{n}\}_{n=1}^{\infty}$. Express each $f\in F$ as a union of elements in $\mathcal{A}$. Then, $\bigcup f$ is a subcollection $\mathcal{B}\subseteq\mathcal{A}$. For each $b\in \mathcal{B}$, pick $f\in F$ such that $f\supseteq b$. The collection of all these $f$ gives a countable subcollection of $f$ which covers $A$.

Succinctly, "every open cover in a separable metric space has a countable subcover".


---
# Baire category theorem

> [!Definition]
> We call a subset $A$ of a metric space $X$ *dense* in $X$ if every nonempty open subset of $X$ contains a point in $A$.
> 
> We call a subset $A$ of a metric space $X$ *hollow* in $X$ if $A$ has an empty interior (taken in $X$). 

> [!Lemma]
> A set is dense if and only if its complement is hollow.

> [!Theorem] Baire category theorem
> Let $X$ be a complete metric space.
> 1. Let $\{ \mathcal{O}_{n} \}_{n=1}^{\infty}$ be a countable collection of open dense subsets of $X$. Then the intersection $\bigcap_{n=1}^{\infty}\mathcal{O}_{n}$ is dense in $X$. 
> 2. Let $\{ \mathcal{F}_{n} \}_{n=1}^{\infty}$ be a countable collection of closed hollow subsets of $X$. Then the union $\bigcup_{n=1}^{\infty}F_{n}$ is hollow in $X$.

