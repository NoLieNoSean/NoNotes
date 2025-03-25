---
tags: 
date: "2025-03-24"
time: "11:54"
---
## Matrix tree theorem

Counting number of spanning trees in a graph.
A spanning subgraph of a graph $G$ is a graph $H$ that has the same vertex set as $G$ and every edge of $H$ is an edge of $G$.

A graph $G$ has a spanning tree iff it is connected. A spanning subgraph which is a tree is called a spanning tree of $G$. 

For example $K_{4}\setminus \{ \text{any edge} \}$ has 8 spanning trees.

### Graphs and matrices

#### Adjacency matrix

$\mathcal{A}=[v_{i, j}]$, $v_{i, j}=1$ iff $\{ i, j \}\in E(G)$. 

#### Laplacian matrix

$\mathcal{L}=\mathcal{D}-\mathcal{A}$, where $\mathcal{D}$ is the degree matrix.

The degree matrix is a diagonal matrix, where $d_{i, i}$ is the degree of the vertex $i$. 

Each row sum/column sum of $\mathcal{L}$ is zero.

If $G$ is an undirected graph and $\mathcal{L}$ is its laplacian matrix, then $\det \mathcal{L}=0$.

> [!Theorem] Matrix tree theorem
> The determinant of $L[i]$ ($L$ with the $i$th row and $i$th column deleted) is equal to the number of spanning trees of $G$, for all $i$.


Linear algebraic result: If $B$ is matrix such that its row sums and column sums are zero, then $\det B[i]=\det B[j]$ for all $i, j$. 

Another one: Any matrix, $A\in \mathbb{R}^{n\times n}$. $\det(A+E_{ii})=\det(A)+\det A[i]$.
Proof idea: use permutation definition of determinants.

**Proof**
Induction on number of edges of $G$. Let $\mathcal{T}(G)$ be the number of spanning trees in $G$. Let $G-e$ be the graph with edge $e$ removed, and let $G\setminus e$ be the graph with edge $e$ contracted. We would like to find a relation between $\mathcal{T}(G)$, $\mathcal{T}(G-e)$, and $\mathcal{T}(G\setminus e)$. 

If $i$ is an isolated vertex of $G$, $G$ does not have a spanning tree, and $\mathcal{L}(G)[i]=0$. Checks out.

Next, assume $G$ does not have isolated vertices. Let $e\in E(G)$ be incident on $i$. For any spanning tree $T$, either $e\in T$ or $e\not\in T$. 

All the spanning trees where $e\not\in T$=number of spanning trees in $G-e$=$\mathcal{T}(G-e)$. 
Also, observe that $\mathcal{T}(G\setminus e)$=number of trees $T$ where $e\in T$. 

Thus, $\mathcal{T}(G)=\mathcal{T}(G-e)+\mathcal{T}(G\setminus e)$. Observe that $\mathcal{T}(G-e)$ has one fewer edge, and $\mathcal{T}(G\setminus e)$ has one fewer vertex.

Next, note that $\mathcal{L}(G)[i]=L_{G-e}[i]+E_{jj}$, where $e=\{ i, j \}$. 

So, $\det(\mathcal{L}_{G}[i])=\det (\mathcal{L}_{G-e}[i]+E_{jj})$=$\det(L_{G-e}[i])+\det \mathcal{L}_{G-e}[i, j]$=$\det(L_{G-e}[i])+\det \mathcal{L}_{G}[i, j]$

Next, note that $\mathcal{L}_{G\setminus e}[j]=\mathcal{L}_{G}[i, j]$. 