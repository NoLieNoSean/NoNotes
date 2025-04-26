---
tags:
  - DMAT
  - Lecture
date: 2025-04-12
time: 12:00
---
# Probabilistic methods in DM: Example 1

> [!Theorem] Claim
> Every graph can be converted to a bipartite graph by deleting edges. Moreover, every graph with $m$ edges has a bipartite graph with at least $m/2$ edges (so one has to remove at most $m/2$ edges to make the graph bipartite.)

> **Probabilistic Proof**
> The lemma is equivalent to showing "every graph vertex set can be partitioned into two parts such that there are at least $m/2$ edges between the two parts". 
> 
> Assign every vertex a color (R/B) uniformly and independently at random. Let $E'$ denote the subset of edges whose terminals are colored red and blue. We want to find $\mathbb{E}(|E'|)$.
> 
> Every edge in $E$ occurs in $E'$ with probability $1/2$. Let $X_{1}, \dots, X_{m}$ be indicator variables such that $|E'|=\sum X_{i}$. Then, $\mathbb{E}(|E'|)=\mathbb{E}\left( \sum X_{i} \right)=\frac{m}{2}$. Thus, there must exist a coloring where $|E'|\geq m/2$.

---
# Back to matching problems: Konig's theorem

> [!Definition]
> A **vertex cover** is a set of vertices such that each edge has at least one endpoint in the set. An edge cover is similarly defined. 

Since no vertex can cover two edges of a matching, the size of every vertex cover is at least the size of every matching.

> [!Theorem] Observation
> If $M$ is a [[DMAT_L21#Matchings|matching]] and $U$ is a vertex cover of $G$, then $|M|\leq |U|$.

Thus, we can use vertex covers to get an upper bound on the size of a maximum matching in a graph. The smallest vertex cover would provide us with the best upper bound. We can do one better for bipartite graphs, where the minimum vertex cover size is actually equal to the maximum matching size.

> [!Theorem] Konig's theorem
> The maximum cardinality of a matching in a bipartite graph $G$ is equal to the minimum cardinality of a vertex cover of its edges.

**Proof**
Let $M$ be a matching in $G$ of maximum cardinality. From every edge in $M$ let us choose one of its ends: the end in $B$ if some alternating path ends in that vertex, and its end in $A$ otherwise. We'll prove that the set $U$ of these $|M|$ vertices covers $E$.

Note that if an alternating path $P$ ends in a vertex $b\in B$, then $b\in U$ ($i$.$e$, $b$ is matched). (Why?)
        
As $M$ is a lergest matching, $P$ is not an augmenting path, $b$ is matched to some $a\in A$.

We have to show that $U$ covers $E$. Let an edge $ab\in E$ be given. If $a\in U$, we are done. so assume $a\not\in U$. To prove $b\in U$. 

An alternating path is a path which starts in $A$ at an unmatched vertex, then alternatively between edges from $E\setminus M$ and $M$. If $a$ is unmatched, then $ab$ itself is an alternating path. If not, then $ab'\in M$ for some $b'\in B$.

...


---
# Matching in general graphs

## Tutte's theorem

We will now characterize all graphs with perfect matchings. Observe that the following is clearly a necessary condition for a perfect matching to exist in a graph $G$:

>For every vertex subset $U$ in $G$, the graph $G\setminus U$ has at most $|U|$ odd connected components (connected components having an odd number of vertices).

Tutte's condition claims that this is also a sufficient condition.

> [!Theorem] Tutte's theorem
> A graph $G=(V, E)$ has a prefect matching if and only if for every subset $U$ of $V$, the subgraph $G\setminus U$ has at most $|U|$ odd connected components.

## The Tutte matrix

The Tutte matrix provides an algebraic method to check for the existence of perfect matchings, much like the [[DMAT_L21#Perfect matchings in bipartite graphs|Edmonds matrix]]. 

If the set of vertices is $V=\{ 1, 2, \dots, n \}$, the the Tutte matrix is an $n\times n$ skew-symmetric matrix $A$ with entries
$$
A=\begin{cases}
x_{ij} & (i, j)\in E\text{ and }i< j \\
-x_{i, j} & (i, j)\in E \text{ and }i> j \\
0 & \text{otherwise}
\end{cases}
$$
where $x_{ij}$ are indeterminates. The determinant $A$ is a polynomial in the $x_{ij}$s and is non-zero (as a polynomial) iff a perfect matching exists.

---
references
- The probabilistic method by noga alon and spencer (chapter 1)
- handout: pairwise-indepdendence, k-wise independence, inequalities (Markov, Chebyshev, cherwff smth)