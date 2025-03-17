---
tags: 
date: "2025-03-17"
time: "11:55"
---


---

## Simple graphs


A $v-w$ walk in a graph is a sequence of vertices $v_{0}=v, v_{1}, \dots, v_{l}=w$, where adjacent vertices have an edge between them. The length of the walk is $l$.

A $v-w$ path is a $v-w$ walk in which no vertices are repeated.

Let $G$ be a graph. We define a relation $\sim$ on $G$ by $v\sim w$ if there exists a $v-w$ walk. Easy to check that $\sim$ is a equivalence relation. The equivalence classes $G/\sim$ are called the connected components of $G$. 

> [!Theorem]
> Let $v$ and $w$ be two vertices in $G$. If there exists a $v-w$ walk, then there exists a $v-w$ path. Moreover, the shortest $v-w$ walk is a path.

---

## Induction trap

Graph on $n$ vertices, each vertex is end point of at least two edges, then graph has at least $2n-3$ edges.

False statement. 

Spoof by induction.

Issue: Not all $n$ vertex graphs can be built by appending to $n-1$ vertex graph with the same property.

---

A template for proof by induction on number of vertices.

Statement: Any graph with $n$ vertices with property $A$ has property $B$.

Inductive hypothesis: Assume all $n-1$ vertex graphs with property $A$ also have property $B$. 

Let $G$ be a graph with $n$ vertices satisfying property $A$. Choose a vertex $v$ of $G$ such that $G\setminus v$ has property $A$ (needs an argument). By inductive hypothesis, $G\setminus v$ has property $B$. Add $v$ to $G$ to obtain $G$, and show that this also has property $B$ (also needs an argument).

Exercise: every graph $G$ whose minimum degree is $2$ contains a cycle. 

---

A graph is a bipartite graph if it doesn't have any odd cycles.

---

Theorem: In every graph, the number of vertices with odd degree is even.

Pf 1 by double counting

Pf 2 by the handshake argument



---

