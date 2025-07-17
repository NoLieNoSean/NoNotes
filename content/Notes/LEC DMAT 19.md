---
tags:
  - DMAT
  - Lecture
date: 2025-03-26
time: 11:53
---
## Minimum spanning trees

> [!Definition]
> In a connected weighted graph, a *minimum spanning tree* is a [[LEC DMAT 18#Spanning trees|spanning tree]] with minimum weight.

### Kruskal's algorithm for MSTs

[[Introduction to Graph Theory (Douglas B. West).pdf#page=117|ref]]

> [!Algorithm]
> **Input**: A weighted connected graph.
> **Idea**: Maintain an acyclic subgraph $H$, enlarging it by edges with low weight to form a spanning tree. Consider edges in nondecreasing order of weight, breaking ties arbitrarily.
> **Initialization**: Set $E(H)=\emptyset$.
> **Iteration**: If the next cheapest edge joins two components of $H$, then include it; otherwise, discard it. Terminate when $H$ is connected.

> [!Theorem]
> In a connected weighted graph $G$, Kruskal's Algorithm constructs a minimum-weight spanning tree.

> **Proof**
> It should be clear that the algorithm produces a tree. Let $T$ be the resulting tree, and let $T^{*}$ be a spanning tree of minimum weight. If $T=T^{*}$, we are done. Else, let $e$ be the first edge chosen for $T$ that is not in $T^{*}$. Adding $e$ to $T^{*}$ creates one cycle $C$. Since $T$ has no cycle, $C$ has an edge $e'\not\in E(T)$. Since $T^{*}$ contains $e'$ and all the edges of $T$ chosen before $e$, both $e'$ and $e$ are available when the algorithm choses $e$, and hence $w(e)\leq w(e')$. Now, consider the spanning tree $T^{*}+e-e'$, and note that it does not exceed $T^{*}$ in weight and agrees with $T$ for a longer list of initial edges than $T^{*}$ does. Repeating this argument eventually yields a minimum-weight spanning tree that agrees completely with $T$.

---

## A digression: Matroids

[[Combinatorics Topics, Techniques, Algorithms (Peter J. Cameron).pdf#page=214|ref]]

Examples of matroids: 
- Uniform matroid: all subsets of size $k$
- Linear matroid

Any $e\in \mathcal{I}$ such that $e$ is an element of maximal cardinality is called a base of the matroid.

Graphic matroid: $(E, \mathcal{I})$, where an element in $\mathcal{I}$ is a subset of $E$ containing no cycles. 

Exercise 1: Verify that this is a matroid. 
Exercise 2: Find a linear representation of a matroid, $i$.$e$, a map from $E$ to $\mathbb{R}^{k}$ for some $k$.