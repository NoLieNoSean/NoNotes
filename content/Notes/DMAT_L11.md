---
tags:
  - DMAT
  - Lecture
date: 2025-02-19
time: 11:50
---


## PHP and Ramsey theory

> [!Theorem] General form of PHP
> Let $X$ be a finite set. You have $r$ colors $\{ 1,2,\dots, r \}$. $|X|\geq \sum_{i=1}^{r}a_{i}-r+1$ guarantees existence of $a_{1}$ points colored $1$ or $a_{2}$ points colored 2, or so on.

Now, Let $X$ be the vertex set of a graph. $r$ color all edges (subsets of size 2). What is the condition on $|X|$ such that, given positive integers $\{ a_{1}, a_{2}, \dots, a_{r} \}$, for some $i$, there exists a subset of $X$ of size $a_{i}$ all of whose edges have the same color.

Notation: $R^{*}(\text{no. of colors}, \text{subset size}; a_{1}, a_{2}, \dots, a_{r})$ is the minimum number of $|X|$ such that the above property is satisfied. For example, $R^{*}(2, 2; 3, 3)=6$, $R^{*}(2, 2; 3, 4)=9$. We know that $43\leq R^{*}(2, 2; 5, 5)\leq 46$, but do not know its exact value.

> [!Theorem] Ramsey's theorem
> Given positive integers $r$, $k$, $a_{1}$, $a_{2}$, ..., $a_{r}$, for any r-coloring of $\binom{X}{k}$ where $X$ is a finite universe,
> $$
> c:\binom{X}{k}\to \{ a_{1}, a_{2}, \dots, a_{r} \},
> $$
> there exists a positive integer $R^{*}(r, k; a_{1}, a_{2}, \dots, a_{r})$ such that if $|X|\geq R^{*}(r, k; a_{1}, a_{2}, \dots, a_{r})$ then for any coloring $c$ there is an $i$ and a subset of size $a_{i}$ in $X$ such that every $k$-subset of $X$ is colored $i$.

We will first prove a simpler version: The existence of $R^{*}(2, 2; a_{1}, a_{2})$. 

> **Proof**
> Induction on $a_{1}+a_{2}$. Let $|X|=n$
> $n\geq R^{*}(2, 2;a_{1}-1, a_{2})+R^{*}(2, 2;a_{1}, a_{2}-1)$ works, and those two exist because of the induction hypothesis.
> Thus, $R^{*}(2, 2;a_{1}, a_{2})\geq R^{*}(2, 2;a_{1}-1, a_{2})+R^{*}(2, 2;a_{1}, a_{2}-1)$. 


We can bound $R^{*}(2, 2;a_{1}, a_{2})$ using induction.
$$
R^{*}(2, 2;a_{1}, a_{2})\leq \binom{a_{1}+a_{2}-2}{a_{1}-1}.
$$

> [!Theorem] Claim
> $R^{*}(2, 2;l, l)\geq c 2^{l/2}$.

**Proof**
Let $X$ be an n-vertex complete graph. Our goal is to make $n$ as large as possible such that $X$ does not satisfy Ramsey's condition, $i$.$e$, $X$ has no red l-clique or a blue l-clique.

Consider a random 2-coloring of the edges of $X$. Let $[n]$ be the vertex set. 
Sample space = set of all 2-colorings, of size $2^{\binom{n}{2}}$. The distribution is uniform.

For each subset $S$ of size $l$, Let $E_{S}$ be the event that $S$ is a red clique or a blue clique. Now, 
$$
P(E_{S})=\frac{1}{2^{\binom{l}{2}}}+\frac{1}{2^{\binom{l}{2}}}=\frac{2}{2^{\binom{l}{2}}}.
$$
$$
P\left( \bigcup_{S\in \binom{[n]}{l}} E_{S} \right)\leq \sum_{S\in \binom{[n]}{l}}P(E_{S})\leq \binom{n}{l} \frac{2}{2^{\binom{l}{2}}}
$$
so, we want
$$
\binom{n}{l} \frac{2}{2^{\binom{l}{2}}}< 1.
$$
Get a bound for $n$.