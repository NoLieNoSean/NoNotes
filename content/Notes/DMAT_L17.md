---
tags: 
date: "2025-03-19"
time: "11:58"
---

> [!Theorem]
> A graph is bipartite iff it does not contain any odd cycles.

bipartite $\implies$ no odd cycles is easy

no odd cycles $\implies$ bipartite
Assume $G$ is connected. This doesn't hurt, since if $G$ isn't connected, we can make the same argument for the connected components of $G$ and take unions later. Let $u\in G$. Define $X=\{ v\in G\ | \ \text{the shortest path from u to v is of odd length} \}$, $Y=\{ v\in G\ | \ \text{the shortest path from u to v is of even length} \}$. We will show that $X$ and $Y$ are independent sets. Let $v, w\in X$. Let $w_{1}$ be the vertex after which there is no common vertex in the shortest paths from $u$ to $v$ and $w$ (it always exists!). Note that the path from $u$ to $w_{1}$ in both paths must have the same length. Thus, if there were an edge between $u$ and $v$, $u-v-w_{1}$ would form an odd cycle.

---

definition of cut edge

---

every tree on $n$ nodes has exactly n-1 edges.

lovasz, how to grow trees

---

If we delete a node $v$ from a tree, we get a graph whose connected components are trees. We call these branches of the node $v$.

Prove that every tree has a node such that every branch of this node contains at most half the nodes of the tree.

---

linear algebraic methods in combinatorics

A town has 32 residents, any two clubs have an even number of residents in common, and any cub has an od number of residents. Show that the town cannot have 33 clubs.

