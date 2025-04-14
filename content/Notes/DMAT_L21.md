---
tags:
  - Lecture
  - DMAT
date: 2025-04-07
time: 11:56
---
## Matchings

> [!Definition]
> 1. A **matching** $M$ is a subset of edges of a graph $G=(V, E)$ such that there is no vertex $v$ that is adjacent to two different edges in $M$.
> 2. Given a matching $M$ in $G$ a vertex $v$ is **free/open/unmatched** if no edge in $M$ is incident to $v$. Otherwise it is called **covered/closed/matched**.
> 3. A matching $M$ in $G$ such that every vertex is matched is called a **perfect matching**.

For a perfect matching to exist, the graph must have an even number of vertices.

> [!Definition]
> 1. A **maximum matching** covers the largest possible number of vertices.
> 2. A matching $M$ is called a **maximal matching** if it is no longer a matching after the addition of any edge.

### Perfect matchings in bipartite graphs

**Hall's condition** is an easy to verify necessary condition for the existence of a perfect matching in a bipartite graph. A bipartite graph with bipartition $L\sqcup R$ satisfies Hall's condition if for every $U\subseteq L$, $|N(U)|\geq |U|$, where $N(U)$ is the neighborhood of $U$.

Interestingly, it also happens to be a sufficient condition.

> [!Theorem] Hall's Theorem
> There exists a perfect matching exhausting $L$ in a bipartite graph $(L\sqcup R, E)$ iff for every subset $U\subseteq L$, $|N(U)|\geq |U|$.

When the sets of the bipartition have the same size, Hall's Theorem is called **Hall's Marriage Theorem**. 

### Counting perfect matchings in bipartite graphs

A bipartite graph $G=(L\sqcup R, E)$ is called **balanced** if $|L|=|R|$.

> [!Definition]
> The **Edmonds matrix** $A$ of a balanced bipartite graph $G=(L\sqcup R, E)$ with sets of vertices $L=\{ l_{1}, \dots, l_{n} \}$ and $R=\{ r_{1}, \dots, r_{n} \}$ is defined by
> $$
> a_{ij}=\begin{cases}
> x_{ij} & (u_{i}, v_{j})\in E \\
> 0 & (u_{i}, v_{j})\not\in E
> \end{cases}
> $$
> where $x_{ij}$ are indeterminates.

A bipartite graph admits a perfect matching iff the polynomial $\det A$ in the $x_{ij}$s is not identically zero. 

There is a natural correspondence between perfect matchings and permutations. Each permutation $\sigma\in S_{n}$ represents a possible matching $\{ \{ l_{i}, r_{\sigma(i)} \} \ | \ i\in[n]\}$. The realizability of this matching depends on whether $G$ has the edges it requires (that is, $m_{i\sigma(i)}$ is nonzero for all $i$): If yes, the monomial corresponding to $\sigma$ will survive, and if not, it will vanish. Therefore, the number of perfect matchings in equal to the number of monomials in the polynomial $\det A$.

One way to compute the number of monomials in $\det A$ is to use what's called the permanent:

> [!Definition]
> The **permanent** of a $n\times n$ matrix $M$, denoted $\text{perm}\ M$, is defined similarly to the determinant but without the sign alternation.
> $$
> \text{perm}\ M=\sum_{\sigma\in S_{n}} m_{1\sigma_{1}}m_{2\sigma_{2}}\dots m_{n\sigma_{n}}.
> $$

The number of monomials in $\det A$ and $\text{perm}\ A$ are the same, but $\text{perm}\ A$ allows us to count them by simply substituting every $x_{ij}=1$.

The downside of the permanent is that it is incredibly expensive to compute. For $2\times 2$ matrices, the permanent can be expressed as a determinant like so:
$$
\text{perm} \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}=\det \begin{bmatrix}
a & -b  \\
c & d
\end{bmatrix}.
$$
However, for $3\times 3$ and larger matrices, a permanent cannot be expressed as a determinant (prove this!). The best known deterministic algorithm to calculate the permanent (Ryser's formula) takes $n 2^{n}$ steps (reduced from $n!$ by [[DMAT_L12#Principle of inclusion and exclusion|PIE]]).

> [!Note]
> A simpler claim was stated in class: A perfect matching in a balanced bipartite graph $G$ exists $\iff$ the determinant of $G$'s Edmonds matrix is nonzero. This is true, but only when the the determinant is in indeterminates. If we plug all $x_{ij}=1$, the determinant may evaluate to zero. For example, consider $K_{2, 2}$. Its Edmonds matrix is $\begin{bmatrix}x_{11}&x_{12}\\x_{21}&x_{22}\end{bmatrix}$. The determinant, $x_{11}x_{22}-x_{21}x_{12}$, while indeed a nonzero polynomial, evaluates to $0$ when all $x_{ij}$ are set to $1$.

As stated before, if we only wish to know whether a perfect matching exists or not, it suffices to compute the determinant of the Edmonds matrix and check if it is identically zero. In order to avoid symbolic computation (which is expensive), one may ask: is it possible to substitute numerical values into $x_{ij}$ in the Edmonds matrix and construe any useful information from the resulting determinant? It turns out that this works with high probability. The key tool that enables this is the **Schwartz–Zippel Lemma**, which gives a probabilistic bound on when a multivariate polynomial evaluates to zero.

> [!Theorem] Schwartz–Zippel Lemma
> Let $f(x_1, x_2, \dots, x_m)$ be a non-zero polynomial of total degree at most $d$ over a field $\mathbb{F}$, and let $S \subseteq \mathbb{F}$ be a finite subset. Then:
> 
> $$
> \Pr_{(a_1,\dots,a_m) \in S^m}[f(a_1,\dots,a_m) = 0] \leq \frac{d}{|S|}.
> $$
> 
> 

In practice, $\mathbb{F}$ is taken to be a sufficiently large [[Finite fields|finite field]] (finite fields are ideal for randomized algorithms because arithmetic over them is well-defined, exact (no floating point issues), and operations can be implemented efficiently). This also allows us to take $S$ to be the entire field and sample freely.

So, to test if a perfect matching exists, you
1. choose a large finite field $\mathbb{F}_p$, typically with prime $p \gg n$;
2. assign each variable $x_{ij} \in \mathbb{F}_p$ a random value (say, uniformly from $\{1, 2, \dots, p-1\}$); 
3. evaluate $\det M \bmod p$.

If the result is nonzero, then a perfect matching *definitely exists*. If the result is zero, there’s a small chance you hit a root; repeat with new random values to reduce error probability.

The **Tutte matrix** generalizes the Edmonds matrix to arbitrary (not necessarily bipartite) graphs.