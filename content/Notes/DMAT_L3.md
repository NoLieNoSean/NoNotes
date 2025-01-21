---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-01-15
time: 11:50
---
## Cardinal numbers

### Zorn's lemma

An chain is a subset of a partial order in which any two elements are comparable (basically, a total ordered subset).
Equivalent to the axiom of choice.

> [!Theorem] Zorn's Lemma
> Let $(S, \leq)$ be any partially ordered set such that every chain $C$ has an upper bound. Then, $S$ has a maximal element.

> [!Theorem]
> For all $A, B$ either $|A|\leq|B|$, $|A|\geq|B|$.

Let $|A|=\alpha$ and $|B|=\beta$. Assume WLOG $A$ and $B$ are infinite. 

$S\equiv \{ (C, f) : C\subset A, f:C\to B \text{ is injective}\}$

$S$ is a partial order, with $(C_{1}, f_{1})\leq(C_{2}, f_{2})$ if $C_{1}\subset C_{2}$ and $f_{1}\subset f_{2}$, i.e, $f_{2}|_{C_{1}}=f_{1}$. 

Let $K$ be any chain in $S$. Let

$$
C'=\bigcup_{(C, f)\in K}C
$$
$$
f'=\bigcup_{(C, f)\in K}f
$$
Clearly, $f'$ is well defined, and is injective. Thus, $(C', f')$ is an upper bound for $K$. By Zorn's lemma, $S$ has a maximal element $(M, g)$, $M\subset A$, $g:M\to B$, injective.

If $M=A$, we are done, since we have found an injection from $A$ to $B$, i.e, $A\leq B$.
Suppose $M\subset A$ (proper subset), and $g(M)$ is a proper subset of $B$. Then, we can contradict the maximality of $(M, g)$ by extending it in a basic manner. If $g(M)=B$, we have found a surjection from $B$ to $A$, so $A\geq B$. 

> [!Theorem]
> Let $A$ and $B$ be any infinite sets.
> - $|A|+|A|=|A|$
> - $|A||A|=|A|$
> - $|A|\leq |B|$ $\implies$ $|A|+|B|=|B|$.

We will need the following theorem:

> [!Theorem]
> every infinite set $A$ has a disjoint covering of countable sets.

Coming up in the next lecture.

---

## More cardinal arithmetic

The cardinality of $\mathbb{N}$ is denoted by $\aleph_{0}$. The cardinality of the reals is denoted by $c$. We know that the cardinality of $\mathbb{R}$ and the interval $[0, 1]$ is the same (several bijections exist, like the stereographic projection of a unit circle onto the real line, or the sigmoid function). Also, the cardinality of $[0, 1]$ is the same as the cardinality of $\{ 0, 1 \}^{\mathbb{N}}$ (set of all binary sequences). Thus, the cardinality of $\mathbb{R}$ is $|\{ 0, 1 \}^{\mathbb{N}}|=2^{\aleph_{0}}$. 

Now, several non-trivial conclusions can be drawn using [[DMAT_L2#Cardinal arithmetic|cardinal arithmetic]].
- $|\mathbb{R}^{n}|=|\mathbb{R}\times \mathbb{R}\times\dots \times \mathbb{R}|=|\mathbb{R}|^{n}=(2^{\aleph_{0}})^{n}=2^{\aleph_{0}n}$. Now, $\aleph_{0}n=|\mathbb{N}\times \{ 1, 2, \dots, n \}|=|\mathbb{N}|$. Thus, $|\mathbb{R}^{n}|=|\mathbb{R}|$.
- Similarly, since $|\mathbb{N}\times \mathbb{N}|=|\mathbb{N}|$, we have $|\mathbb{R}^{\mathbb{N}}|=|\mathbb{R}|$, and $|\mathbb{R}^{\mathbb{Q}}|=|\mathbb{R}|$. 
- That is about as far as we can stretch it, since [[Cantor's Theorem]] forces the cardinality of the power set of $\mathbb{R}$ to be greater than $\mathbb{R}$.
- $|\mathbb{R}^{\mathbb{R}}|=2^{\aleph_{0}c}=2^{c}$.

Interesting note: while the set of all functions from $\mathbb{R}$ to $\mathbb{R}$ has cardinality $2^{c}$, the set of all continuous functions from $\mathbb{R}$ to $\mathbb{R}$ has cardinality $c$. This is because a continuous function is fully determined by the values it takes on a [[Analysis1_L14#Dense subsets|dense]] subset of its domain (Rudin, 4.4 [[Analysis1_HW4.pdf#page=3]]). So the cardinality of the set is equal to $\mathbb{R}^{\mathbb{Q}}$, and hence to $\mathbb{R}$. 


---

Set theory source: Set theory appendix, Algebra by serge lang