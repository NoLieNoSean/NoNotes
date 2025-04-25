---
tags:
  - DMAT
  - Lecture
date: 2025-04-16
time: 11:58
---
# Probabilistic methods in DM: Example 2

A **hypergraph** is made of **hyperedges**, which may connect more than two vertices.

A hypergraph is properly **2-colorable** if its vertices can be assigned one of two colors (typically red and blue) in such a way that no hyperedge is entirely composed of vertices of the same color.

A hypergraph is **k-uniform** if every hyperedge has $k$ vertices.

> [!Theorem]
> If $H$ is a $k$-uniform hypergraph with less than $2^{k-1}$ hyperedges, then $H$ is 2-colorable.

> **Proof**
> Color the vertices red or blue randomly uniformly independently. For every hyperedge $e$, let $A_{e}$ be the event that $e$ is monochromatic. $P(A_{e})=2\cdot 2^{-k}=2^{1-k}$. Now, 
> $$
> \begin{align}
> P\left( \bigcup_{e\in E(H)}A_{e} \right)  \leq \sum_{e\in E(H)}P(A_{e}) 
>   =|E(H)|2^{1-k} 
>   < 1.
> \end{align}
> $$
> Thus,
> $$
> \begin{align}
> P\left( \bigcap_{e\in E(H)}\overline{A_{e}} \right)=1-P\left( \bigcup_{e\in E(H)}A_{e} \right) > 0.
> \end{align}
> $$

---
# Planar graphs 

$K_{4}$ is easily shown to be planar. $K_{5}$ and $K_{3, 3}$ are famous examples of non-planar graphs.

> [!Definition]
> A **region** is an open set $U$ that contains a polygonal $u$-$v$ path for every $u, v\in U$. 
> The **faces** of a planar graph are maximal regions of the plane that are disjoint (when the planar graph is drawn without any crossings, of course).

The Jordan curve theorem says that any closed polygonal path divides the plane into two regions. 

> [!Theorem] Euler's formula
> If a connected planar graph $G$ has exactly $n$ vertices, $e$ edges, and $f$ faces, $n-e+f=2$.

**Proof**
By induction on $e$. If $e(G)=n-1$, then $G$ is a tree, and $f=1$. $n-e+f=2$.

If $e(G)\geq n$, then $G$ contains a cycle $C$. Choose an edge $g$ in $C$ such that $G'\equiv G\setminus g$ is connected. Then, $f'=f-1$, $e'=e-1$, and by induction hypothesis the theorem holds.


> [!Theorem]
> If $G$ is a planar graph with at least 3 vertices, then $e(G)\leq {3}|G|-6$. 

**Proof**
exercise, by induction

Moreover, if $G$ is triangle free, then $e(G)\leq 2|G|-4$.


