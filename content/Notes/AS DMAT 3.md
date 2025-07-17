# Problem 1

> [!Question]
> Let $p$ be a prime and consider the cyclic group $C_{p}=\langle \sigma \rangle$ of order $p$ acting on all $p$-tuples $(a_{1}, a_{2}, \dots, a_{p})\in[n]^{p}$ by cyclic shift. That is, $(a_{1}, a_{2}, \dots, a_{p})\sigma=(a_{p}, a_{1}, \dots, a_{p-1})$. Analyzing the orbits and stabilizers of this group action show that $p$ divides $np-n$.

Let $\mathcal{O}$ be the number of orbits. From [[LEC DMAT 14#Burnside's Lemma|Burnside's Lemma]], 
$$
\begin{align}
\mathcal{O} & =\frac{1}{p}\sum _{g\in C_{p}}\text{fix}(g).\\
\end{align}
$$
Now, $\text{fix(e)}=n^{p}$, and since $p$ is prime, the remaining $p-1$ members of $C_{p}$ only fix tuples containing a single repeating number. Thus, 
$$
\mathcal{O}=\frac{{n^{p}+(p-1)n}}{p}=\frac{{n^{p}-n}}{p}+n.
$$
Since $\mathcal{O}$ is a natural number, it follows that $p$ divides $n^{p}-n$.


---
# Problem 2

> [!Question]
> Considering the [[LEC DMAT 14#An example 2-colorings of a cube|group of rotational symmetries of the cube]] discussed in class, find the number of distinguishable 17 dollar cubes that can be built using three types of edges: one dollar lead bars, two dollar silver bars, and three dollar gold bars.

Let $E=\{ e_{1}, e_{2}, \dots, e_{12} \}$ denote the edge set. Let $\Phi=\{ \text{Pb}, \text{Au}, \text{Ag} \}$, and let $w(\text{Pb})=1$, $w(\text{Au})=2$, $w(\text{Ag})=3$. The figure generating series is $a(t)=t+t^{2}+t^{3}$. Let $G\leq\text{Sym}(E)$ be the rotational symmetries of the cube. The cycle types of the elements of $G$ are as follows:

| Symmetry                                   | Cycle type                 | Count |
| ------------------------------------------ | -------------------------- | ----- |
| *The identity symmetry*                    | $c_{1}(g)=12$              | 1     |
| *Face symmetries ($180\degree$ rotations)* | $c_{2}(g)=6$               | 3     |
| *Face Symmetries ($90^{\circ}$ rotations)* | $c_{4}(g)=3$               | 6     |
| *Edge Symmetries*                          | $c_{1}(g)=2$, $c_{2}(g)=5$ | 6     |
| *Vertex Symmetries*                        | $c_{3}(g)=4$               | 8     |

From the [[LEC DMAT 15#Cycle index theorem|cycle index theorem]], the function generating series is given by 
$$
\begin{align}
b(t) & =Z(G; a(t), \dots, a(t^{12}))\\
 & =\frac{1}{24}\sum_{g\in G}a(t)^{c_{1}(g)}\dots a(t^{12})^{c_{12}(g)} \\
 & =\frac{1}{24}\Big(a(t)^{12}+3a(t^{2})^{6}+6a(t^{4})^{3}+6a(t)^{2}a(t^{2})^{5}+8a(t^{3})^{4}\Big). \\
\end{align}
$$
The number of distinguishable $17$ dollar cubes is the coefficient of $t^{17}$ in $b(t)$, which is $153$. 

---
# Problem 3

> [!Question]
> If we delete a node $v$ from a tree (together with all edges that end there), we get a graph whose connected components are trees. We call these connected components the branches at node $v$. Prove that every tree has a node such that every branch at this node contains at most half the nodes of the tree.

Let $T$ be a tree on $n$ nodes. Pick an arbitrary vertex $\mathbf{v}_{0}$ of $T$. Let $C^{0}_{1}, C^{0}_{2}, \dots, C^{0}_{k_{0}}$ be the branches at $\mathbf{v}_{0}$. If $|C^{0}_{i}|\leq \left\lfloor  \frac{n}{2}  \right\rfloor$ for each $1\leq i\leq k_{0}$, we are done. Else, let $|C^{0}_{\alpha}|=\left\lfloor  \frac{n}{2}  \right\rfloor+\lambda_{0}$, for some $1\leq\alpha\leq k_{0}$ and positive integer $\lambda_{0}$. Let $\mathbf{v}_{1}$ be the vertex that connects $C^{0}_{\alpha}$ to $\mathbf{v}_{0}$. Define $C^{1}_{1}\equiv T\setminus C^{0}_{\alpha}$, and let $C^{1}_{2}, \dots, C^{1}_{k_{1}}$ be the remaining branches at $\mathbf{v}_{1}$. Note that $|C^{1}_{1}|=n-\left\lfloor  \frac{n}{2}  \right\rfloor-\lambda_{0}\leq \left\lfloor  \frac{n}{2}  \right\rfloor$. 

If $|C^{1}_{i}|\leq \left\lfloor  \frac{n}{2}  \right\rfloor$ for each $2\leq i\leq k_{1}$, we are done. Else, let $|C^{1}_{\beta}|=\left\lfloor  \frac{n}{2}  \right\rfloor+\lambda_{1}$, for some $2\leq\beta\leq k_{1}$ and positive integer $\lambda_{1}$. Note that $\lambda_{1}<\lambda_{0}$. Thus, if we continue in this manner, we are guaranteed to find a node $\mathbf{v}$ such that every branch contains at most half the nodes of the tree in no more than $\lambda_{0}$ steps. 

---
# Problem 4

> [!Question]
> Prove that in a finite undirected graph where each vertex has degree ≥ 2 must have a cycle. Is this necessarily true for infinite graphs? Also prove the following: Let G be a finite directed graph. If every vertex of G has out-degree at least 1, then G has a directed cycle.

Let $G$ be a finite undirected graph where each vertex has degree $\geq 2$. Let $v_{0}$ be an arbitrary vertex of $G$. Let $v_{1}$ be a vertex $v_{0}$ is connected to. $v_{1}$ must be connected to another vertex $v_{2}$ other than $v_{0}$, since it has degree of at least $2$. Inductively, $v_{k}$ must be connected to a vertex $v_{k+1}\ne v_{k-1}$. Since $G$ is finite, vertices will eventually repeat in the sequence $v_{0}, v_{1}, \dots$. Let $v_{l}=v_{m}$, $l< m$. Then, $v_{l},\dots, v_{m-1}$ is a cycle. 

This not true for infinite graphs. A simple counterexample is the graph $G$ on $\mathbb{N}$ where $(n, n+1)\in E(G)$ for each $n\in \mathbb{N}$. 

Let $G$ be a finite directed graph where each vertex has out degree at least $1$. Let $v_{0}$ be an arbitrary vertex of $G$. Let $v_{0}\to v_{1}$ be an edge. Since every vertex has at least one outgoing edge, the sequence can be extended to any arbitrary length. Again, since $G$ is finite, vertices are bound to repeat eventually, yielding a cycle $v_{l}\to\dots\to v_{m-1}\to v_{l}$ for some $l< m$ and $v_{l}=v_{m}$. 

---
# Problem 5

> [!Question]
> Prove that in a connected graph G with at least three vertices, any two longest paths have a vertex in common.

Let $G$ have $n$ vertices. Let the maximal path length in $G$ be $k$ edges. FTSOC, assume $G$ has two paths of length $k$ with disjoint vertex sets $V=\{ v_{0}, \dots, v_{k} \}$ and $V'=\{ v_{0}', \dots, v_{k}' \}$. Since $G$ is connected, there exists an edge between $V_{1}$ and $V_{2}$ in $G$, say $\{ v_{i}, v_{j}' \}$. If $i\geq k/2$, define $\overline{v}$ to be $v_{0}$, else define $\overline{v}$ to be $v_{k}$. If $j\geq k/2$, define $\overline{v}'$ to be $v'_{0}$, else define $\overline{v}'$ to be $v'_{k}$. The path $\overline{v}, \dots, v_{i}, v_{j}', \dots, \overline{v}'$ has a minimum length of $k+1$, a contradiction.

---
# Problem 6

> [!Question]
> We know that for any $n$, the set of all transpositions (2-cycles) generates the symmetric group $\mathfrak{S}_{n}$. We associate a graph on the vertex set $[n]$ to a set of transpositions by identifying the transposition $(i j)$ with the edge joining the vertices $i$ and $j$. Show that a set of transpositions generates $\mathfrak{S}_{n}$ if and only if the corresponding graph on $[n]$ is connected.

Let $S$ be a set of transpositions on $[n]$, and $G$ be the corresponding graph on $[n]$.

Assume $G$ is not connected. Let $C$ be a connected component of $G$. Let $a\in V(C)$. For all transpositions $\sigma\equiv(i, j)\in S$, the edge $(i, j)$ of $G$ must be in either $E(C)$ or $E(G\setminus C)$. In the first case, $\sigma(a)\in V(C)$, and in the second case, $\sigma(a)=a\in V(C)$. Inductively, $(\sigma_{k}\dots\sigma_{1})(a)\in V(C)$ for all positive integers $k$. It follows that $S$ cannot generate $\tau\equiv(a, b)\in\mathfrak{S}_{n}$ for any $b\in V(G\setminus C)$. Thus, $S$ does not generate $\mathfrak{S}_{n}$. 

Conversely, assume $G$ is connected. For any $a, b\in[n]$, there exists a path between $a$ and $b$ in $G$. Let this path be $(v_{0}\equiv a, v_{1}), \dots, (v_{k-1}, v_{k}\equiv b)$. 

> [!Theorem] Lemma
> $\{(v_{0}\equiv a, v_{1}), \dots, (v_{k-1}, v_{k}\equiv b)\}$ generates $(a, b)$. 

> **Proof**
> We proceed by induction on $k$. The Lemma holds trivially for $k=1$. Assume the lemma holds for $k=m-1$ for a positive integer $m$. So, $\{(v_{1}, v_{2}), \dots, (v_{k-1}, v_{k})\}$ generates $\rho\equiv(v_{1}, b)$. Now, $(a, v_{1})\rho(a, v_{1})=(a, v_{1})(v_{1}, b)(a, v_{1})=(a, b)$. 

Thus, $S$ can generate every transposition $(a, b)$, for $a, b\in[n]$. Since $\mathfrak{S}_{n}$ is generated by the set of all transpositions of $[n]$, $S$ generates $\mathfrak{S}_{n}$. 

---
# Problem 7

> [!Question]
> Let $A$ be an incidence matrix of an undirected graph $G$. Let $E'=\{ e_{i_{1}}, \dots, e_{i_{k}} \}$ be a subset of edges of  $G$. Show the following using induction on k. If the edges in E′ do not form a cycle, then the columns in A associated with those edges are linearly independent. The converse is true if the graph is bipartite.

Let $\mathbf{e}_{i}$ be the column in $A$ associated with the edge $e_{i}$, and let $C_{E}$ be the collection of columns in $A$ associated with the edges in $E$.

For $k=1$, the proposition clearly holds. Assume that the proposition holds for $k=n-1$. Let $E'=\{ e_{i_{1}}, \dots, e_{i_{n}} \}$ not have any cycles. Then, $C_{E'\setminus e_{i_{n}}}$ is linearly independent. FTSOC, assume $C_{E'}$ is linearly dependent. Then, there exists a non-trivial linear combination $\alpha_{1}\mathbf{e}_{i_{1}}+\dots+\alpha_{n}\mathbf{e}_{i_{n}}=\mathbf{0}$. Also, $\alpha_{n}\ne 0$, since a non-trivial linear combination of $C_{E'\setminus e_{i_{n}}}$ equalling $\mathbf{0}$ does not exist. Let $\overline{E}'\subseteq E'$ be the subcollection of $E'$ with non-zero coefficient in the linear combination. Let $V'$ be the set of vertices that edges in $\overline{E}'$ are incident on. $(V', \overline{E}')$ is a subgraph of $G$. Each $v\in V'$ has a minimum degree of $2$, since otherwise the linear combination cannot evaluate to $\mathbf{0}$. [[LEC DMAT 16#Some theorems|We know]] that a graph with minimum degree $2$ contains a cycle, contradicting our hypothesis that $E'$ does not have any cycles. Thus, $C_{E'}$ is linearly independent.

Next, we will prove the contrapositive of the converse, that is, If $G$ is bipartite and some edges in $E'$ form a cycle, $C_{E'}$ is linearly dependent. [[LEC DMAT 16#Some theorems|If a graph is bipartite, it doesn't have any odd cycles]]. Thus, the cycle in $E'$ must be of even length. Let $e_{j_{1}}, \dots, e_{j_{2a}}, e_{j_{1}}$ be edges of the cycle, in that order. Now, note that $(\mathbf{e}_{j_{1}}+\mathbf{e}_{j_{3}}+\dots+\mathbf{e}_{2a-1})-(\mathbf{e}_{j_{2}}+\mathbf{e}_{j_{4}}+\dots+\mathbf{e}_{2a})$, a non-trivial linear combination of $C_{E'}$, is equal to $\mathbf{0}$, since every vertex that has an edge associated with it in the first sum also has one in the second sum, and no other edge associated with it in both the sums . Thus, $C_{E'}$ is linearly dependent.

---
# Problem 8

> [!Question]
> The spanning tree game is a 2-player game. Each player in turn selects an edge. Alice starts by deleting an edge, and then Bob fixes an edge (which has not been deleted yet); an edge fixed cannot be deleted later on by the other player. Bob wins if he succeeds in constructing a spanning tree of the graph; otherwise, Alice wins. Prove the following. If there are two spanning trees in the graph whose edge sets are disjoint, Bob can win no matter how Alice plays.

Let $G$ be a graph on $n$ nodes. Let $T$ and $T'$ be two spanning trees of $G$ such that $E(T)\cap E(T')=\emptyset$. Let the set of edges fixed by Bob be $B$. Suppose Alice deletes edge $e$. If $e\not\in E(T)\cup E(T')$, Bob can randomly fix $e'\in E(T)$. Now, suppose $e\in E(T)\cup E(T')$. WLOG, $e\in E(T)$. 

> [!Theorem] Lemma
> If $T, T'$ are spanning trees of a connected graph $G$ and $e\in E(T)\setminus E(T')$, then there is an edge $e'\in E(T')\setminus E(T)$ such that $T-e+e'$ is a spanning tree of $G$.

> **Proof**
> Every edge of $T$ is a cut-edge of $T$. Let $U$ and $U'$ be the two components of $T-e$. Since $T'$ is a spanning tree, it must contain an edge $e'$ with endpoints in $U$ and $U'$. $T-e+e'$ is a spanning tree.

So, there exists $e'\in E(T')\setminus E(T)=E(T')$ such that $T-e+e'$ is a spanning tree. Bob picks $e'$. Redefine $T$ to be $T-e+e'$. Now, $E(T)\cap E(T')=\{ e' \}$. Also, $B\subseteq E(T)$. 

For the second move, Alice cannot pick an edge from $E(T) \cap E(T')$, and $|E(T)\setminus E(T')|=|E(T')\setminus E(T)|\geq n-2$. Again, if Alice's choice $e$ is in $E(T)\setminus E(T')$, Bob can find an $e'$ in $E(T')\setminus E(T)$ such that $T-e+e'$ is a spanning tree, and if $e$ is in $E(T')\setminus E(T)$, Bob can find an $e'$ in $E(T)\setminus E(T')$ such that $T'-e+e'$ is a spanning tree. If he hasn't fixed $e'$ already, he fixes it, and updates the value of $T$ or $T'$ as before. In all other cases, Bob randomly fixes $e'\in E(T)$. $B$ remains a subset of $E(T)$. 

Inductively, on the $k$th move, Alice cannot delete an edge from $E(T)\cap E(T')$, since Bob has claimed all those edges as they were created. Alice must pick her edge from $E(T)\setminus E(T')$, $E(T')\setminus E(T)$, or $(E(T)\cup E(T'))^{c}$. Bob proceeds as before.

At every step, $B$ grows by $1$, and $B\subseteq E(T)$. Thus, in $n-1$ moves, Bob can grow $B$ to $E(T)$, winning the game (note that $T$ may be redefined several times in the course of the game; it nevertheless remains a spanning tree).