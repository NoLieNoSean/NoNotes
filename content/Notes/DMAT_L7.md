---
tags:
  - DMAT
  - Lecture
date: 2025-01-29
time: 11:50
---

## Cayley's theorem

Refer Cameron.

A tree is a minimally connected graph.
A *cycle* is a sequence of distinct vertices $u_{1}, u_{2}, \dots u_{k}, u_{1}$ where 

> [!Theorem]
> A *tree* is a connected graph without cycles 

**Proof**
Suppose $T$ is an $n$ vertex tree $T=([n], E)$. Pick any two vertices (which could be the same) and call them head and tail. $(T, \text{head}, \text{tail})$ is called a $n$-vertebrate. $T$ has a unique path between the head and tail vertices, $\text{head}=u_{1}, u_{2}, u_{3}, \dots, u_{k}=\text{tail}$. For each $u\not\in \{ u_{1}, u_{2}, \dots, u_{k} \}$, there is a unique $u_{i}$ such that the path in $T$ from $u$ to $u_{i}$ does not contain any $u_{j}, j\ne i$. Now, define $S_{i}\equiv \{ u\in[n]\setminus \{ u_{1}, u_{2}, \dots, u_{k} \}\ |\ \text{the path from }u\text{ to }u_{i}\text{ does nto contain }u_{j} \forall j\ne i \}\cup \{ u_{i} \}$. Note that the $S_{i}$s partitions $[n]$. The subgraph of $T$ induced by $S_{i}$ is a tree $T_{i}$. 

Suppose $f:[n]\to[n]$ is any arbitrary function. For each $f$, there is a subset $S\subset[n]$ such that $f|_{S}\text:S\to S$ is a bijection. These set of vertices are going to be the "spine". 






Cayley's Theorem: The number of labelled trees on $n$ vertices is $n^{n-2}$. 

**Proof**

Suppose $T$ is a labelled tree with $N$ vertices. Pick 2 vertices, possibly with repetition, and call them the head and tail.