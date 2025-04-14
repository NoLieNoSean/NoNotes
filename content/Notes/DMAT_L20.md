---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-04-02
time: 11:52
---
## Connectivity

We concern ourselves with only simple graphs here.

> [!Definition]
> A graph $G$ is *$k$-vertex connected* if it has at least $k+1$ vertices and it remains connected after removing any $k-1$ vertices.
> $G$ is *$k$-edge connected* if it remains connected after removing any $k-1$ edges.
> The *vertex connectivity* of $G$ is the maximum $k$ such that $G$ is $k$-vertex connected. Ditto for *edge connectivity*.

For example $2$-vertex connected graphs have at least $3$ vertices, and the graph remains connected after deleting any vertex. "Connectivity" by itself refers to vertex connectivity.

Note that $k$-vertex connectivity implies $k$-edge connectivity.

> [!Definition]
> A vertex $v$ is called a *cut vertex* if $G-v$ has more connected components than $G$. A *cut edge/bridge* is similarly defined.

Some simple results:
1. If $G$ is connected, then $v$ is a cut vertex iff $G-v$ is disconnected.
2. $v$ is a cut vertex of a graph $G$ iff there are two vertices $u$ and $w$ such that $v$ lies in every path between $u$ and $w$.
3. If $\{ v, w \}$ is a bridge and $\text{deg}(v)\geq 2$, then $v$ is a cut-vertex.

> [!Theorem]
> A graph $G$ with $n\geq 3$ vertices is 2-vertex connected iff every pair of vertices are part of a cycle.

The fact that 2-vertex connectivity implies 2-edge connectivity is freely used in the following proof.

> **Proof of $\impliedby$**
> When $G$ has internally disjoint paths between any two vertices, deletion of one vertex cannot separate $u$ form $v$.
> 
> **Proof of $\implies$**
> Let $u, v$ be any pair of vertices. We will induct on $d(u, v)$. If $d(u, v)=1$, $u$ and $v$ must be in a cycle since $\{ u, v \}$ cannot be a cut-edge. Next, let $d(u, v)=k$. Let $v_{0}=u, \dots, v_{k}=v$ be a path between $u$ and $v$. By the inductive hypothesis, $v_{1}$ and $v_{k}$ must lie in a cycle. Let $\lambda_{1}$ and $\lambda_{2}$ be the two disjoint paths connecting $v_{1}$ and $v_{k}$.
> 
> Since $G$ is 2-connected, deleting the vertex[^1] $v_{1}$ should not disconnect it. Thus, there exists a path $w_{0}=u, \dots, w_{k'}=v$ such that $w_{1}\ne v_{1}$. Let $\lambda_{3}$ be the path between $w_{1}$ and $v$. 
> 
> If $\lambda_{3}$ does not share any vertices with $\lambda_{1}$ and $\lambda_{2}$, we are done, since $u\cdot\lambda_{1}$ and $u\cdot\lambda_{2}$ are disjoint paths connecting $u$ and $v$. Else, WLOG, let $\lambda_{1}$ be the first among $\lambda_{1}$ and $\lambda_{2}$ to share a vertex $z$ with $\lambda_{3}$. Let $\lambda_{4}$ be the path from $w_{1}$ to $v$ which follows $\lambda_{3}$ from $w_{1}$ to $z$, then $\lambda_{1}$ from $z$ to $v$. Then, $u\cdot \lambda_{2}$ and $u\cdot \lambda_{4}$ are disjoint paths connecting $u$ and $v$. 

[^1]: Note that we actually used 2-vertex connectivity here. 2-edge connectivity is not gonna cut it.

---
## Blocks

> [!Definition]
> A *block* of a graph $G$ is a maximal connected subgraph of $G$ that has no cut vertex. If $G$ itself is connected and has no cut vertex, then $G$ is a block.

Blocks are edge-disjoint. Every edge must be part of a block. Two blocks may share at most one vertex. When two blocks of $G$ share a vertex, it must be a cut-vertex of $G$. 

An equivalence relation on **edges** which partitions a graph into blocks: $e\sim f$ if $e$ and $f$ are contained in a common cycle.

---
## Ear decomposition

> [!Definition]
> An *ear* of a graph $G$ is a path in $G$ in which every vertex except for the first and last has degree two.

When we add an ear to a graph, we take two vertices $v$ and $w$ of $G$ and create an ear by adding new edges and vertices to form a $v-w$ path. 

> [!Definition]
> An *ear decomposition* of $G$ is a decomposition $P_{0}, \dots, P_{k}$ such that $P_{0}$ is a cycle and  $P_{i}$ for $i\geq 1$ is an ear of $P_{0} \cup\dots \cup P_{i}$.

> [!Theorem]
> A graph is 2-connected iff it has an ear decomposition. Furthermore, every cycle in a 2-connected graph is the initial cycle in some ear decomposition.

> **Proof of $\impliedby$**
> Since cycles are 2-connected, it suffices to show that adding an ear preserves 2-connectedness. This should be clear.
> 
> **Proof of $\implies$**
> Given a 2-connected graph $G$, we build an ear decomposition of $G$ form a cycle $C$ in $G$. Let $G_{0}=C$. Let $G_{i}$ be a subgraph obtained by successively adding $i$ ears. If $G_{i}\ne G$, then we can choose an edge $\{ u, v \}$ of $G\setminus E(G_{i})$ and an edge $\{ x, y \}\in E(G_{i})$. Because $G$ is 2-connected, $\{ u, v \}$ and $\{ x, y \}$ lie on a common cycle $C'$. Let $P$ be the path in $C'$ that contains $\{ u, v \}$ and exactly two vertices of $G_{i}$, one at each end op $P$. Now, $P$ can be added to $G_{i}$ to obtain a larger subgraph $G_{i+1}$ in which $P$ is an ear. The process ends only by absorbing all of $G$. 
