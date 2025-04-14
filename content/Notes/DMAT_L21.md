---
tags:
  - Lecture
  - DMAT
date: 2025-04-07
time: 11:56
---
## Matching in a graph

Hall's marriage theorem

For a bipartite graph $G$, we can construct a matrix $M$ such that $G$ has a perfect matching iff $M$ has non-zero determinant.

There is a formula for counting perfect matchings.


> [!Definition]
> A *matching* $M$ is a subset of edges of a graph $G=(V, E)$ such that there is no vertex $v$ that is adjacent to two different edges in $M$.
> Given a matching $M$ in $G$ a vertex $v$ is *free/open/unmatched* if no edge in $M$ is incident to $v$. Otherwise it is called *closed/matched/covered*.
> A matching $M$ in $G$ such that every vertex is matched is called a *perfect matching*.

For a perfect matching to exist, the graph must have an even number of vertices. 
A maximum matching is a matching with largest possible cardinality.
$M$ is a maximal matching if it is no longer a matching after adding any additional edge.

## Perfect matching in bipartite graphs

Let $A$ and $B$ be two parts of a bipartite graph. A matching for this graph is a subset  of $A\times B$. 

Hall's condition is a necessary condition for the existence of a PM. A bipartite graph graph satisfies the Hall condition if for every $U\subset A$, $|N(U)|\geq |U|$, where $N(U)$ is the neighborhood of $U$.

This also happens to be a sufficient condition.

> [!Theorem] Hall's marriage theorem
> There exists a perfect matching saturating $L$ in a bipartite graph $\{ L\cup R, E \}$ iff for every subset $U\subseteq L$, $|N(U)|\leq |U|$.

Proof of $\impliedby$
By induction on $|L|$. Base case: $L$ has only one vertex. Induction step: let $a\in L$. $a$ must have some neighbor $b$ in $R$. 


---

number of PM in a bipartite graph $G$= permanent of its adjacency matrix.

If $G$ is a bipartite graph with $|L|=|R|=n$, then the adjacency matrix here is $n\times n$. (called Edmund's matrix)

A simpler claim: a PM in bipartite $G$ exists $\iff$ the determinant of $G$'s edmund matrix is nonzero.

The tutte matrix has the same condition for general graphs.

There is a natural correspondence between perfect matchings and permutations. 

The term in the determinant corresponding to a permutation $\sigma$ gives a non-zero monomial iff all the edges $(i, \sigma(i))$ are in $E$.




---

tut - maximum number of edges possible in a graph which does not have a triangle in it??