---
id: "347"
date: 2025-11-08
time: 10:59
tags:
  - ANA2
---
See @munkresTopology2000 §17, §30, §31, §32.
# Separation axioms

> [!Definition]
> A topological space in which singletons are closed is called
> 1. **Fréchet ($T_{1}$)** if for every pair of distinct points, each has a neighborhood not containing the other point.
> 2. **Hausdorff ($T_{2}$)** if distinct points have disjoint open neighborhoods.
> 3. **regular ($T_{3}$)** if every closed set $C$ and point $p\not\in C$ have have disjoint open neighborhoods.
> 4. **normal ($T_{4}$)** if any two disjoint closed sets have disjoint open neighborhoods.

Clearly, $T_{4}$+$T_{1}$ $\implies$ $T_{3}$+$T_{1}$ $\implies$ $T_{2}$ $\implies$ $T_{1}$.

## Hausdorff spaces

There are several niceties that we take for granted in metric spaces:
1. all singletons are closed;
2. a sequence cannot converge to more than one point.

These are not true for arbitrary topological spaces. As we ascend the classification ladder from $T_{1}$ to $T_{4}$, topological spaces become more well-behaved; the above properties are attained at $T_{2}$.

Merely assuming $T_{1}$ tames the zoo significantly:

> [!Proposition]
> A topological space $X$ is $T_{1}$ $\iff$ every finite point set in $X$ is closed.

> [!Proposition]
> Let $X$ be a $T_{1}$ space, and $A\subseteq X$. Then the point $x$ is a limit point of $A$ iff every neighborhood of $x$ contains infinitely many points of $A$.

$T_{2}$ spaces are nicer, and most spaces that arise in math are $T_{2}$. 

> [!Proposition]
> A sequence of points in a $T_{2}$ space converges to at most one point.

> [!Proposition]
> The product of two $T_{2}$ / $T_{3}$ spaces is a $T_{2}$ / $T_{3}$ space. A subspace of a $T_{2}$ / $T_{3}$ space is a $T_{2}$ / $T_{3}$ space. 

^f0873d

There is no analogue of [[#^f0873d]] for normal spaces. 

## Normal spaces

A topological space homeomorphic to a metric space is said to be **metrizable**. [[#^ae93c1]] provides three sufficient conditions for a space to be normal.

> [!Proposition]
> 1. Every regular separable space is normal.
> 2. Every metrizable space is normal.
> 3. Every compact Hausdorff space is normal.

^ae93c1


---

# Countability axioms

> [!Definition]
> A topological space $X$ is said to be
> 1. **First countable** if for each $x\in X$ there is a countable collection $\{ U_{n} \}_{n\in \mathbb{Z}}$ of neighborhoods of $x$ such that any neighborhood $U$ of $x$ contains at least one of the sets $U_{n}$.
> 2. **Second countable** if $X$ has a countable basis.

A metrizable space always satisfies the first countability axiom, but the converse is not true. Not all metric spaces are second countable. 

Both countability axioms are well behaved with respect to the operations of taking subspaces and countable products:

> [!Proposition]
> 1. A subspace of a (first/second) countable space is (first/second) countable. 
> 2. A countable product of (first/second) countable spaces is (first/second) countable.

In a first countable space, convergent sequence are adequate to detect limit points of sets and to check continuity of functions:

> [!Proposition]
> Let $X$ be a topological space.
> 1. Let $A\subseteq X$. If there is a sequence of points in $A$ converging to $x$, then $x\in \overline{A}$; the converse holds if $X$ is first countable.
> 2. Let $f:X\to Y$. If $f$ is continuous, then for every convergent sequence $\{ x_{n} \}\to x$ in $X$, the sequence $\{ f(x_{n}) \}$ converges to $f(x)$. Then converse holds if $X$ is first countable.

Two important consequences of the second countability axiom are results we have seen before:

> [!Proposition]
> Let $X$ be a second countable space. Then, 
> 1. Every open covering of $X$ contains a countable subcover. ([[LEC CAL1 9#^0bd0b5]])
> 2. $X$ is [[LEC CAL1 9#^9c3671|separable]]. ([[LEC CAL1 9#^b788c7]], $\impliedby$)

A space for which every open cover contains a countable subcover is called a **Lindelöf space**. The Lindelöf property and separability are weaker in general than the second countability axiom. (separable + first countable) does not imply second countable either (the proof of ([[LEC CAL1 9#^b788c7]], $\implies$) does not hold when the metric space hypothesis is replaced by first countability; do you see why?). However, both properties are equivalent to second countability for metrizable spaces. 



---

# Urysohn metrization theorem

> [!Theorem] Urysohn
> Every second countable $T_{3}$ topological space is metrizable.