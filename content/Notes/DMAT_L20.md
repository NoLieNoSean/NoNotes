---
tags:
  - DMAT
  - Lecture
date: 2025-04-02
time: 11:52
---
## Connectivity

We concern ourselves with only simple graphs here. 

> [!Definition]
> A graph $G$ is *$k$-vertex connected* if it has at least $k+1$ vertices and it remains connected after removing any $k-1$ vertices.
> $G$ is *$k$-edge connected* if it remains connected after removing any $k-1$ edges.
> The *vertex connectivity* of $G$ is the maximum $k$ such that $G$ is $k$-vertex connected. Ditto for *edge connectivity*.

$k$-vertex connected $\implies$ $k-1$-vertex connected.

$2$-vertex connected graphs have at least $3$ vertices, and the graph remains connected after deleting any vertex. 

> [!Definition]
> A vertex $v$ is called a cut vertex if $G-v$ has more connected components than $G$.

A cut edge is aka a bridge.

If $G$ is connected, then $v$ is a cut vertex iff $G-v$ is disconnected.

$v$ is a cut vertex of a graph $G$ iff there are two vertices $u$ and $w$ such that $v$ lies in every path between $u$ and $w$.

> [!Theorem]
> If $\{ v, w \}$ is a bridge and $\text{deg}(v)\geq 2$, then $v$ is a cut-vertex.

> [!Theorem]
> A graph $G$ with $n\geq 3$ vertices is $2-$connected iff every pair of vertices are part of a cycle.

**Proof of $\implies$**
Let $u, v$ be any pair of vertices. Induction on $d(u, v)$. Base case: if $d(u, v)=1$, $u$ and $v$ must be in a cycle since $\{ u, v \}$ cannot be a cut-edge. Next, assume for $k-1$ and prove for $k$ (hint: neighbors of $u$).

---

a maximal connected subgraph $H$ is a subgraph which is not contained in any larger connected subgraph.

> [!Definition]
> A subgraph $H$ is a block of $G$ if $H$ is 2-connected and not contained in any larger 2-connected subgraph.

Blocks are edge-disjoint. Every edge must be part of a block. Two blocks may share a vertex.

An equivalence relation on edges which partitions a graph into blocks: $e\sim f$ if $e$ and $f$ are contained in a common cycle.

---

## Ear decomposition

> [!Definition]
> An *ear* of a graph $G$ is a path in $G$ in which every vertex except for the first and last has degree two.

When we add an ear to a graph, we take two vertices $v$ and $w$ of $G$ and create an ear by adding entirely new edges and vertices to form a $v-w$ path. 

> [!Theorem] Lemma
> If $G$ is $2$-connected and we add an ear to $G$, it remains $2$-connected.

> [!Definition]
> An *ear decomposition* of $G$ is a sequence of ear-adding steps which starts from a cycle graph and ends at $G$.

> [!Theorem]
> Every $2$-connected graph has an ear decomposition.

---

## Matching in a graph

Hall's marriage theorem

For a bipartite graph $G$, we can construct a matrix $M$ such that $G$ has a perfect matching iff $M$ has non-zero determinant.

There is a formula for counting perfect matchings.

