---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-03-24
time: 11:54
id: "216"
---
# Properties of trees

> [!Theorem]
> For an $n$ vertex graph $G$, the following are equivalent (and characterize the trees with $n$ vertices).
> 1. $G$ is connected and has no cycles.
> 2. $G$ is connected and has $n-1$ edges.
> 3. $G$ has $n-1$ edges and no cycles.
> 4. For $u, v\in V(G)$, $G$ has exactly one $u, v$-path.

> [!Theorem] Corollary
> 1. Every edge of a tree is a cut-edge.
> 2. Adding one edge to a tree forms exactly one cycle.
> 3. Every connected graph contains a spanning tree.
> 

> [!Theorem]
> If $T, T'$ are spanning trees of a connected graph $G$ and $e\in E(T)\setminus E(T')$, then there is an edge $e'\in E(T')-E(T)$ such that
> 1. $T-e+e'$ is a spanning tree of $G$, and
> 2. $T'+e-e'$ is a spanning tree of $G$.

> **Proof**
> Every edge of $T$ is a cut-edge of $T$. Let $U$ and $U'$ be the two components of $T-e$. Let $E_{1}$ be the set of edges in $T'$ with endpoints in $U$ and $U'$. Since $T'$ is connected, $E_{1}$ is nonempty. 
> 
> Also, the graph $T'+e$ contains a unique cycle $C$. Since $T$ is acyclic, $E_{2}\equiv E(C)\setminus E(T)$ is nonempty. Now, since $e\in E(C)$, and $e$ connects $U$ and $U'$, there must be another edge $e'\in E(C)$ which connects $U$ and $U'$. Note that $e$ is the only edge in $T$ connecting $U$ and $U'$. Thus, $e'\in E_{1}\cap E_{2}$, and $T-e+e'$ and $T'+e-e'$ are both spanning trees of $G$.

---
# Spanning trees

> [!Definition]
> A *spanning tree* of a connected graph $G$ is a subgraph of $G$ which contains all the vertices of $G$, and is, of course, a tree.

> [!Theorem] 
> Every connected graph $G$ has a spanning tree.

> **Proof**
> Algorithmic constructive proof. Let $G=(V, E)$. $n$ vertices, $m$ edges. Let $E_{0}=\emptyset$, $V_{0}=\{ v_{0} \}$, where $v_{0}$ is an arbitrary vertex. Having constructed $V_{i-1}$ and $E_{i-1}$ find an edge $e_{i}=\{ x_{i}, y_{i} \}$ such that $x_{i}\in V_{i-1}$ and $y_{i}\in V\setminus V_{i-1}$. Then, $V_{i}=V_{i-1}\cup \{ y_{i} \}$ and $E_{i}=E_{i-1}\cup \{ e_{i} \}$. If no such edge exists, stop. If the algorithm returns $n-1$ edges, then the resulting subgraph is a spanning tree. Otherwise, $G$ is disconnected.

---
# Counting spanning trees

[[Introduction to Graph Theory (Douglas B. West).pdf#page=104|ref]]

Given a graph $G$, we desire to count the number of spanning trees in $G$. 

> [!Definition]
> In a graph $G$, *contraction* of edge $e$ with endpoints $u, v$ is the replacement of $u$ and $v$ with a single vertex whose incident edges are the edges other than $e$ that were incident to $u$ or $v$. The resulting graph $G\cdot e$ has one less edge than $G$.
> ![[Pasted image 20250402103008.png|400]]

> [!Theorem] Lemma
> Let $\tau(G)$ denote the number of spanning trees of a graph $G$. If $e\in E(G)$ is not a loop, then $\tau(G)=\tau(G-e)+\tau(G\cdot e)$.

> [!Theorem] Lemma
> If $G$ is a connected loopless graph with no cycle of length greater than 2, then $\tau(G)$ is the product of the edge multiplicities.

## Graphs and matrices

> [!Definition]
> The *adjacency matrix* of a graph $G$ on $n$ nodes is the $n\times n$ matrix given by $\mathcal{A}=[a_{i, j}]$, where $a_{i, j}$ is the number of edges with endpoints $v_{i}$ and $v_{j}$.

If $G$ is loopless, all the diagonal entries of its adjacency matrix will be $0$. 

> [!Definition]
> The *Laplacian matrix* of a graph $G$ on $n$ nodes is the $n\times n$ matrix $\mathcal{L}=\mathcal{D}-\mathcal{A}$, where $\mathcal{D}$ is the diagonal matrix $[d_{i, i}]$, $d_{i, i}=\text{degree}(v_{i})$.

Note that each row sum/column sum of $\mathcal{L}$ is $0$.

> [!Theorem] Lemma
> Let $G$ be a graph on $n$ nodes and $\mathcal{L}$ be its laplacian matrix. Then, $\det \mathcal{L}=0$.

> **Proof**
> Perform row operations $\mathbf{r}_{1}\to \mathbf{r}_{1}+\mathbf{r}_{2}+\dots+\mathbf{r}_{n}$. Since each column sum is zero, this turns the first row into a zero row. [[LEC ALG1 15#Computing the determinant|It follows]] that the determinant must be zero.

$Q[i]$ denotes the matrix obtained on deleting the $i$th row and $i$th column from $Q$.

The following lemma should be clear:

> [!Theorem] Lemma
> For any square matrix $A$, $\det(A+E_{ii})=\det(A)+\det A[i]$.

## Matrix tree theorem

> [!Theorem] Matrix tree theorem
> Given a loopless graph $G$ with vertex set $v_{1}, \dots, v_{n}$, let $\mathcal{L}$ be its Laplacian matrix. If $\mathcal{L}^{*}$ is a matrix obtained by deleting row $s$ and column $t$ of $\mathcal{L}$, then $\tau(G)=(-1)^{s+t}\det \mathcal{L}^{*}$.

We will prove this for when $s=t$: $\tau(G)=\det \mathcal{L}[i]$ for any $i$.

> **Proof**
> If $G$ is not connected, let $v_{i}$ be an isolated vertex of $G$. Since the $i$th row and $i$th column of $\mathcal{L}$ are zero, $\mathcal{L}[i]$ retains the property of having zero row sum and column sum, and hence has determinant $0$. $\mathcal{L}[j]$ for $j\ne i$ would have a zero row, and hence have determinant zero. Checks out.
> 
> Now, let $G$ be connected. We induct on the number of edges of $G$. If $G$ has one edge, it must have exactly two vertices in order to not have loops and remain connected. The Laplacian matrix for $G$ would be
> $$
> \begin{bmatrix}
> 1 & -1 \\
> -1 & 1
> \end{bmatrix}.
> $$
> Clearly, $\det\mathcal{L}[1]=\det\mathcal{L}[2]=1$, in agreement with the fact that $G$ has only one spanning tree.
> 
> Next, let $G$ have $k$ edges, and assume the theorem holds for all graphs with $k-1$ edges. Let $i\in[n]$, and let $e=\{ v_{i}, v_{j} \}$ be an edge of $G$. Let $\mathcal{L}_{G-e}$ be the Laplacian matrix of $G-e$. Note that $\mathcal{L}[i]=\mathcal{L}_{G-e}[i]+E_{j, j}$. So, 
> $$
> \begin{align}
> \det(\mathcal{L}[i]) & =\det(\mathcal{L}_{G-e}[i]+E_{jj}) \\
>  & =\det(\mathcal{L}_{G-e}[i])+ \det (\mathcal{L}_{G-e}[i][j]) \\
>  & =\det(\mathcal{L}_{G-e}[i])+ \det (\mathcal{L}[i][j]).
> \end{align}
> $$
> Depending on which vertex remains after a contraction, either $\mathcal{L}_{G\cdot e}[j]=\mathcal{L}[i][j]$ or $\mathcal{L}_{G\cdot e}[i]=\mathcal{L}[i][j]$. WLOG, assume the former. Note that both $G-e$ and $G\cdot e$ have one fewer edge than $G$.
> $$
> \begin{align}
> \det(\mathcal{L}[i]) & =\det(\mathcal{L}_{G-e}[i])+\det(\mathcal{L}_{G\cdot e}[j]) \\
>  & = \tau(G-e)+\tau(G\cdot e) \\
>  & =\tau(G).
> \end{align}
> $$


%% 
> [!Theorem] Lemma
> If $B$ is a square matrix such that its row sums and column sums are zero, then $\det B[i]=\det B[j]$ for all $i, j$. 
 
%%