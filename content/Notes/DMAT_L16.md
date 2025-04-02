---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-03-17
time: 11:55
---
## Terminology

A *$v-w$ walk* in a graph is a sequence of vertices $v_{0}=v, v_{1}, \dots, v_{l}=w$, where adjacent vertices have an edge between them. The length of the walk is $l$.

A *$v-w$ path* is a $v-w$ walk in which no vertices are repeated.

Let $G$ be a graph. We define a relation $\sim$ on $G$ by $v\sim w$ if there exists a $v-w$ walk. Easy to check that $\sim$ is a equivalence relation. The equivalence classes $G/\sim$ are called the *connected components* of $G$. 

A *simple graph* is an undirected graph that contains no loops (edges connecting a vertex to itself) and no multiple edges (more than one edge between the same two vertices). 

> [!Theorem]
> Let $v$ and $w$ be two vertices in $G$. If there exists a $v-w$ walk, then there exists a $v-w$ path. Moreover, the shortest $v-w$ walk is a path.

---
## Induction Trap

Here's a false claim:

> [!Theorem] False claim
> Let $G$ be a graph on $n \geq 3$ vertices, where each vertex is the endpoint of at least two edges. Then, $G$ has at least $2n - 3$ edges.

> **Faulty proof by induction**
> We attempt to prove the claim using induction on $n$.
> 
> - **Base Case ($n = 3$)**:  
>   The only graph on three vertices where each vertex is the endpoint of at least two edges is the complete graph $K_3$, which has  $3 \geq 6 - 3$ edges. Hence, the statement holds for $n = 3$.
> 
> - **Inductive Step:**  
>   Assume that for $n - 1$, the theorem holds:  
>   Any graph on $n - 1$ vertices with the given property has at least $2(n - 1) - 3 = 2n - 5$ edges.
> 
>   Now, consider a graph $G$ on $n$ vertices satisfying the given property. If we obtain $G$ from a graph on $n - 1$ vertices by adding a vertex and at least two edges, then the number of edges in $G$ is at least  
> 
>   $$
>   (2n - 5) + 2 = 2n - 3.
>   $$
> 
>   Hence, by induction, the statement is "proved." **(But it's wrong!)**

The flaw in this proof is the assumption that every $n$-vertex graph satisfying the given property can be obtained by adding a vertex to an $(n-1)$-vertex graph with the same property. This is not necessarily true. A counterexample is any cyclic graph, such as $C_4$, which has fewer than $2n - 3$ edges despite satisfying the given vertex-degree condition.

### Template for Proof by Induction on Number of Vertices

**Statement:**  
Any graph with $n$ vertices satisfying property $A$ also has property $B$.

**Inductive Hypothesis:**  
Assume that all graphs on $n - 1$ vertices satisfying property $A$ also satisfy property $B$.

**Inductive Step:**
1. Let $G$ be a graph on $n$ vertices with property $A$.
2. Choose a vertex $v$ in $G$ such that the subgraph $G \setminus v$ satisfies property $A$ (*requires justification*).
3. By the inductive hypothesis, $G \setminus v$ has property $B$.
4. Show that adding $v$ to $G \setminus v$ results in a graph that also satisfies property $B$ (*requires justification*).

---
## Some theorems

> [!Theorem]
> Every graph $G$ whose minimum degree is $2$ contains a cycle. 

> [!Definition]
> A *bipartite graph* $G$ is a graph whose vertex set $V$ can be partitioned into two nonempty subsets $A$ and $B$ such that each edge of $G$ has one endpoint in $A$ and one endpoint in $B$.

> [!Theorem]
> A graph is a bipartite graph if it doesn't have any odd cycles.

> **Proof**
> One direction is very easy: if $G$ is bipartite with vertex sets $V_1$ and $V_2$, every step along a walk takes you either from $V_1$ to $V_2$ or from $V_2$ to $V_1$. To end up where you started, therefore, you must take an even number of steps.
> 
> Conversely, suppose that every cycle of $G$ is even. Let $v_0$ be any vertex. For each vertex $v$ in the same component $C_0$ as $v_0$, let $d(v)$ be the length of the shortest path from $v_0$ to $v$. Color red every vertex in $C_0$ whose distance from $v_0$ is even, and color the other vertices of $C_0$ blue. Do the same for each component of $G$. 
> 
> Check that if $G$ had any edge between two red vertices or between two blue vertices, it would have a closed walk of an odd number of edges, and hence an odd cycle. Thus, $G$ is bipartite, with the red vertices and the blue vertices forming the two parts.


> [!Theorem]
> In every graph, the number of vertices with odd degree is even.

> **Proof**
> Let $D(v)$ denote the degree of the vertex $v$. Note that $\sum_{v}D(v)=2|E|$. If we split the contribution to the LHS by vertices with odd degree and vertices with even degree, we observe that the sum of the degrees of vertices of odd degree is even. It follows that there must be an even number of vertices with odd degree.





