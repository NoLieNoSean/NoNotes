---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-01-22
time: 11:51
id: "203"
---
## De Bruijn–Erdős theorem: another application of Zorn's lemma

A graph $G=(V, E)$ is $k-$colorable if it can be colored using $k$ colors such that no two connected vertices have the same color.

> [!Theorem]
> Let $G=(V, E)$ be an infinite graph such that every finite subgraph is k-colorable. This implies $G$ is k-colorable.

> **Proof**
> 
> If $G$ is $k$-colorable, there exists a function $\hat{c}:V\to \{ 1, 2, \dots k \}$ such that for all $\{ u, v \}\in E$, $\hat{c}(u)\ne\hat{c}(v)$. $\hat{c}^{-1}(i)$ is the set of all vertices in $V$ that have color $i$, and there will not exist any edges between its elements. 
> 
> Define $P\equiv\{ G'\equiv(V, E'):E'\supset E, \text{ every finite subgraph of } G' \text{ is k colorable} \}$. Define a partial order on $P$ by $G_{1}\leq G_{2}$ if $E(G_{1})\subset E(G_{2})$.  Let $C\subset P$ be a chain. Let $\hat{E}\equiv\bigcup_{(V, E')\in P}E'$, and let $\hat{G}\equiv(V, \hat{E})$ be our candidate upper bound for $C$. We have to show that $\hat{G}\in P$, i.e, every subgraph of $\hat{G}$ is k-colorable. Let $H=(U, \tilde{E})$ be a finite subgraph of $\hat{G}$. Let $\tilde{E}=\{ e_{1}, e_{2}, \dots, e_{n} \}$. Let $e_{i}\in E_{i}', (V, E_{i}')\in C$. Let $E'_{i_{1}}\subset E'_{i_{2}}\subset\dots \subset E'_{i_{n}}$. $H$ is a subgraph of $(V, E_{i_{n}}')$, which is in $P$, so $H$ is k-colorable.
> 
> So, by [[LEC DMAT 3#Zorn's lemma|Zorn's lemma]] , the partial order $P$ has a maximal element $\overline{G}=(V, \overline{E})$. Consider the binary relation $x, y\in V$, $x\sim y$ iff $\{ x, y \}\not\in \overline{E}$. Evidently, $\sim$ is reflexive and symmetric. We will show that it is transitive.
> 
> Let $x, y, z\in V$, $x\sim y$, $y\sim z$.
> Now, $x\sim y$ $\implies$ $\overline{G}+\{ x, y \}\not\in P$. So, $\overline{G}+\{ x, y \}$ has a finite subgraph $H_{1}=(U_{1}, E_{1})$ which is not $k$-colorable. Note that $\{ x, y \}\subset U_{1}$ and $\{ x, y \}\in E_{1}$ are forced. Also, for all k-colorings of $H_{1}\setminus \{ x, y \}$, $x$ and $y$ must get the same color. 
> Similarly, for $\overline{G}+\{ y, z \}$ there is a finite subgraph $H_{2}=(U_{2}, E_{2})$ which is not k-colorable and $\{ y, z \}\in U_{2}$. So, for all k-colorings of $H_{2}\setminus \{ y, z \}$, $y$ and $z$ have the same color. 
> Now consider $H_{1}\cup H_{2}\setminus \{ \{ x, y \}, \{ y, z \} \}$. It is k-colorable, and from the properties of $H_{1}\setminus \{ x, y \}$ and $H_{2}\setminus \{ x, y \}$ discussed above, $x$ and $y$ must have the same color, and $y$ and $z$ must have the same color. Thus, $x$ and $z$ must have the same color. So, we have found a subgraph of $\overline{G}$ such that in every possible k-coloring of the subgraph, $x$ and $z$ have the same color. This makes it impossible for $x$ and $z$ to be connected in $\overline{G}$. 
> 
> So, $\sim$ is an equivalence relation on $V$. It partitions $V$ into equivalence classes. 
> $$
> V=\bigsqcup_{i\in I}V_{i}
> $$
> $x\in V_{i}$ and $y\in V_{j}$, $i\ne j\in I$ implies $\{ x, y \}\in \overline{E}$. 
> 
> Claim: $|I|\leq k$.
> Otherwise, pick equivalence classes $V_{1}, V_{2}, \dots V_{k+1}$ and $v_{i}\in V_{i}$. The graph induced by $\{ v_{1}, v_{2}, \dots, v_{k+1} \}$ is a complete graph with $k+1$ vertices, which is not k-colorable. 
> 
> Thus, $\overline{G}$ is k-colorable. Note that any k-coloring for $\overline{G}$ also works for $G$. 
