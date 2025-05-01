# Graph coloring

> [!Definition]
> The **chromatic number**, denoted by $\chi(G)$, of a graph is the minimum number of colors required to color it.

## Greedy coloring algorithm

looked at a greedy algorithm to assign colors. uses at most $d(G)+1$ colors. does not always yield chromatic number. Bipartite graphs (which are 2-colorable) can be constructed for which the algo used $n/2$ colors.
## Chromatic polynomial

$M_{G}(\lambda)$ is the number of ways to color a graph $G$ with at most $\lambda$ colors.

Examples:
Let $G=$ `x----x----x`
Then, $M_{G}(\lambda)=\lambda(\lambda-1)(\lambda-1)$.

Let $G=K_{3}$.
Then, $M_{G}(\lambda)=\lambda(\lambda-1)(\lambda-2)$.

Let $G$ be![[Drawing 2025-04-21 12.00.48.excalidraw|100]]($A$ and $B$ are non adjacent vertices)

Colorings of $G$ with $\lambda$ colors are of two types:
1. Colorings in which $A$ and $B$ have different colors
2. " " " " same color

A colorings of $G$ of type $(1)$ will be a valid coloring of the graph $G'$ obtained by connecting the vertices $A$ and $B$.

Conversely, any coloring of $G'$ will be of type $(1)$.

Further, a coloring of $G$ of type $(2)$ will be a coloring of $G''$ obtained from $G$ by contracting the vertices $A$ and $B$.

$G''$ looks like this:
![[Drawing 2025-04-21 12.06.34.excalidraw|100]]

conversely, any coloring of $G''$ corresponds to a type-2 coloring of $G$.

Thus, we have
$$
M_{G}(\lambda)=M_{G'}(\lambda)+M_{G''}(\lambda).\quad(*)
$$
For example, if $G=$`x----x----x`, 
$$
M_{G}(\lambda)=M_{K_{3}}(\lambda)+M_{K_{2}}(\lambda).
$$

Claim: the chromatic polynomial of a graph can be computed using $(*)$ repeatedly as a sum of chromatic polynomials of complete graphs. This also justifies why $M_{G}(\lambda)$ is a polynomial, since $M_{K_{k}}(\lambda)$ is clearly a polynomial in $\lambda$ for all $k$.
## Coloring planar graphs

> [!Theorem] Euler's Theorem
> Every planar graph has at least one vertex with degree at most $5$.

> **Proof**
> [[DMAT_L24#Planar graphs|We know]] that for a planar graph, $e\leq 3n-6$. If every vertex had degree 6 or higher, we would have at least $3n$ edges, a contradiction.

> [!Claim]
> Every planar graph is $6$-colorable.

> **Proof**
> Induction on number of vertices of $G$. Let $G$ be a planar graph with $k+1$ vertices. Let $S$ be a vertex with degree at most $5$. Remove $S$ from $G$ to obtain $G'$. By induction hypothesis, $G'$ is $6$-colorable. Now, let's add $S$ back to $G'$. At most $5$ colors are used in coloring the neighbors of $S$, so we have at least one color left to color $S$ with. Thus, $G$ is $6$-colorable.

---
# Tournaments

> [!Definition]
> A **tournament** is an orientation of an undirected complete graph.

> [!Definition]
> A **Hamiltonian path** is a path in an undirected or directed graph that visits each vertex exactly once.

> [!Claim]
> Every tournament contains a Hamiltonian path.

There are tournaments with only one hamiltonian path (think of an example)

> [!Theorem]
> There is a tournament $T$ with $n$ players and at least $\frac{n!}{2^{n-1}}$ Hamiltonian paths.

> **Proof**
> Consider a random tournament $T$ where the direction of each edge is determined by a fair coin flip. Let $X$ be the number of Hamiltonian paths in it. Now, there are $n!$ many paths. For each Hamiltonian path $\Pi$, let $X_{_{\Pi}}$ be the indicator rv corresponding to the event that $\Pi$ is a hampath in $T$, and $E(X_{\Pi})=\frac{1}{2^{n-1}}$. So, 
> $$
> E(X)=E\left( \sum X_{\Pi}\right)=\sum E(X_{\Pi})=\frac{n!}{2^{n-1}}.
> $$
> Thus, there exists at least one graph $T$ with at least $\frac{n!}{2^{n-1}}$ Hamiltonian paths.

---

> [!Definition]
> Given a $k$, a tournament has property $S_{k}$ if for every subset of size $k$ players, there is a remaining player who defeats them all.

> [!Theorem] (Exercise)
> For some $n, k$, if
> $$
> \binom{n}{k}(1-2^{-k})^{n-k}< 1,
> $$
> then there exists a tournament $T_{n}$ with property $S_{k}$.


