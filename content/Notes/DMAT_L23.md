---
tags:
  - DMAT
  - Lecture
date: 2025-04-12
time: 12:00
---

## Probabilistic methods

> [!Theorem] Claim
> Every graph can be converted to a bipartite graph by deleting edges. Moreover, every graph with $m$ edges has a bipartite graph with at least $m/2$ edges (so one has to remove at most $m/2$ edges to make the graph bipartite.)

**Probabilistic Proof**
The lemma is equivalent to showing "every graph vertex set can be partitioned into two parts such that there are at least $m/2$ edges between the two parts". 

Assign every vertex a color (R/B) uniformly and independently at random. Let $E'$ denote the subset of edges whose terminals are colored red and blue. We want to find $\mathbb{E}(|E'|)$.

What is the expected number of edges who's terminals are colored red and blue? Every edge in $E$ occurs in $E'$ with probability $1/2$. Let $X_{1}, \dots, X_{m}$ be indicator variables such that $|E'|=\sum X_{i}$. Then, $\mathbb{E}(|E'|)=\mathbb{E}\left( \sum X_{i} \right)=\frac{m}{2}$. Thus, there must exist a coloring where $|E'|\geq m/2$.


**Algorithmic proof**

...

---

## Back to matching problems

Recall: a vertex cover is a set of vertices such that each edge has at least one endpoint in the set. An edge cover is similarly defined. 

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
## Matching in general graphs

> [!Definition]
> A 1-factor is a spanning 1 regular subgraph (its edge set is a perfect matching).

In a graph $H$, let $o(H)$ be the number of odd components (odd number of vertices). In a graph $G$, a necessary condition for a 1-factor is the following: $o(G\setminus S)\leq |S|$ whenever $S\subseteq V(G)$. Tutte's condition claims that this is also a sufficient condition.



---
references
- The probabilistic method by noga alon and spencer (chapter 1)
- handout: pairwise-indepdendence, k-wise independence, inequalities (Markov, Chebyshev, cherwff smth)
- 

---
## Finite fields

[[Finite fields]]
