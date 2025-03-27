---
tags: 
date: "2025-03-26"
time: "11:53"
---

## Minimum spanning trees

Every connected graph $G$ has a spanning tree.

**Proof**
Algorithmic constructive proof. Let $G=(V, E)$. $n$ vertices, $m$ edges. Let $E_{0}=\emptyset$, $V_{0}=\{ v_{0} \}$, where $v_{0}$ is an arbitrary vertex. Having constructed $V_{i-1}$ and $E_{i-1}$ find an edge $e_{i}=\{ x_{i}, y_{i} \}$ such that $x_{i}\in V_{i-1}$ and $y_{i}\in V\setminus V_{i-1}$. Then, $V_{i}=V_{i-1}\cup \{ y_{i} \}$ and $E_{i}=E_{i-1}\cup \{ e_{i} \}$. If no such edge exists, stop. If the algorithm returns $n-1$ edges, then the resulting graph is a spanning tree. If $T$ has less than $n-1$ edges, then $G$ is disconnected. 

A minimum spanning tree is a spanning tree which has minimum weight.

MST algorithm: Sort the edges in increasing order of weight: $w(e_{1})\leq w(e_{2})\leq\dots\leq w(e_{m})$. At each step, include an edge if it does not form a cycle. 

### Kruskal's algorithm for MSTs

[[Introduction to Graph Theory (Douglas B. West).pdf#page=117|ref]]

#### A digression: Matroids

[[Combinatorics Topics, Techniques, Algorithms (Peter J. Cameron).pdf#page=214|ref]]

Examples of matroids: 
- Uniform matroid: all subsets of size $k$
- Linear matroid

Any $e\in \mathcal{I}$ such that $e$ is an element of maximal cardinality is called a base of the matroid.

Graphic matroid: $(E, \mathcal{I})$, where an element in $\mathcal{I}$ is a subset of $E$ containing no cycles. 

Exercise 1: Verify that this is a matroid. 
Exercise 2: Find a linear representation of a matroid, $i$.$e$, a map from $E$ to $\mathbb{R}^{k}$ for some $k$ 


