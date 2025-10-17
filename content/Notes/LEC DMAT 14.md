---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-03-10
time: 11:55
id: "212"
---
## Counting with Symmetries

We want to count the number of distinct  $r$-colorings of an object. Let $X$ be the set of elements being colored (e.g., faces or vertices). A coloring is a function $c: V \to [r]$. Two colorings are considered the same if one can be transformed into the other by applying a symmetry of the object, such as a rotation.

The [[LEC ALG2 2#Symmetric groups|symmetric group]] on $X$, denoted $\text{Sym}(X)$, consists of all possible permutations of $X$. However, not all elements of $\text{Sym}(X)$ correspond to physically realisable transformations of the object. Typically, we restrict our attention to a subgroup $G$ of rigid transformations, such as rotations. More generally, any subgroup of $\text{Sym}(X)$ can be considered, depending on the context.

> [!example] Equilateral Triangle
> Consider an equilateral triangle and a colour set of $\{ R,B \}$. We wish to colour the vertices here, so $X$ will be the vertex set $\{ 1, 2, 3 \}$. $\text{Sym}(X)\cong S_{3}$. Whether we take $G\cong S_{3}$ (flipping is allowed) or $G\cong C_{3}$ (can't flip the triangle) doesn't make a difference when we are working with only two colours. The possible colourings and transformations between them are as follows:
> $$
> \begin{align}
> & RRR \\
> & RRB \overset{(1\ 2\ 3)}\longrightarrow RBR \overset{(1\ 2\ 3)}\longrightarrow BRR \overset{(1\ 2 \ 3)}\longrightarrow RRB\\
> & BBR \overset{(1\ 2 \ 3)}\longrightarrow RBB \overset{(1\ 2\ 3)}\longrightarrow BRB \overset{(1\ 2\ 3)}\longrightarrow RRB\\
> & BBB
> \end{align} 
> $$
> There are four equivalence classes. Hence, there are four distinct ways of colouring the triangle.
> 

### Formalization using Group Actions

Let $X$ be a finite set that is to be coloured with $r$ colours. Let $G\leqslant\text{Sym}(X)$ be a finite group [[LEC ALG2 7#Group actions|acting]] on $X$.

>[!Info] Notation
> Let $G$ be a group acting on a set $X$. The group action of $g \in G$ on $x \in X$ is written as $x^{g}$. We follow multiplication from the left, so $x^{g_{1}g_{2}} = (x^{g_{1}})^{g_{2}}$.

For some $\pi \in G$ and $x \in X$, define $x^{\pi}=\pi(x)$. It is easy to see that this will indeed be a group action.

Denote the set of all $r$-colourings $c:X\to [r]$ of $X$ by $\mathbb{C}$. Now let $G$ act on $\mathbb{C}$ as follows: for some $\pi \in G$ and $c \in \mathbb{C}$,
$$
c^{\pi} = c' \quad \text{such that} \quad c'(x) = c(x^{\pi ^{-1}}).
$$
(The inverse is technically required to make this a valid action, but is also easy to intuitively validate).

> [!Note]- Proof that this is a group action
> 1) For any $c \in \mathbb{C}$, $c^{1}=c'$ where $c'\in \mathbb{C}$ and $c'(x)=c(x^{1})=c(x)$, that is $c^{1} = c$.
> 2) For any $c \in \mathbb{C}$ and $\pi_{1}, \pi_{2} \in G$, we have
> $$
> c^{\pi_{1}} \equiv c' \quad \text{and} \quad (c')^{\pi_{2}}\equiv c''
> $$
> where $c'(x) = c(x^{\pi_{1}^{-1}})$ and $c''(x)=c'(x^{\pi_{2}^{-1}})$. Now
> $$
> \begin{align}
> (c^{\pi_{1}})^{\pi_{2}}(x) &= (c')^{\pi_{2}}(x) \\
> &= c''(x) \\
> &= c'(x^{\pi_{2}^{-1}}) \\
> &= c((x^{\pi_{2}^{-1}})^{\pi_{1}^{-1}}) \\
> &= c(x^{(\pi_{1}\pi_{2})^{-1}}) \\
> &= c^{\pi_{1}\pi_{2}}(x).
> \end{align}
> $$
> 
> 

#### Orbits

Recall that the action of $G$ defines an equivalence relation on $X$ as
$$
x_{1} \sim x_{2} \iff x_{2}=x_{1}^{g} \quad \text{for some $g \in G$}.
$$
The equivalence classes so formed are the [[LEC ALG2 8#Orbit, stabilizer and kernel|Orbit]]. Furthermore, 
$$
\begin{align}
\mathcal{O} (x)  & = \{ y \in X \ | \  y=x^{g}, \ g \in G\}, \\
G_{x} & = \{ g \in G\ | \  x^{g}=x \}. \\
\end{align}
$$
Note that counting the number of distinct colorings is equivalent to counting the number of orbits in the action of $G$ on $\mathbb{C}$. 

From the [[LEC ALG2 9#Orbit-stabilizer theorem|Orbit-stabilizer theorem]], we have
$$
|G| = |\mathcal{O}(x)||G_{x}|
$$
>[!proof]- Quick Intuitive Proof
>We construct a bijection between the elements of $\mathcal{O}(x)$ and the left cosets of $G_{x}$ in X.
>For every $\sigma \in G$ which maps $x \to y$, notice that $G_{x}\sigma$ maps $x \to y$. Clearly this is a bijection. As the cosets of $G_{x}$ partition $G$, we arrive at our result.

For $g \in G$, define $\text{fix}(g) \equiv \ | \  \{ x \in X \ | \  x^{g}=x \}\ |$. Note that $\text{fix}(1)=|X|$.

### Burnside's Lemma

> [!Theorem] Burnside's Lemma
> For a group $G$ acting on a set $X$, the number of orbits is
> $$
> \frac{1}{|G|}\sum_{g\in G}\text{fix}(g).
> $$

> **Proof** 
> We prove this by double counting. Let $X=\{ x_{1},x_{2},\dots, x_{m} \}$ and $G=\{ g_{1},g_{2},\dots g_{n} \}$. Make an $m \times n$ matrix $(M_{ij})$ as follows such that
> $$
> M_{ij}=\begin{cases}
> 1 & \text{if} \ x_{i}^{g_{j}}=x_{i} \\
> 0 & \text{otherwise.}
> \end{cases}
> $$
> The column-wise sum will be the sum, over $g_{j}$, of all the $x_{i}$ that are fixed by a given $g_{j}$, ie. it is the sum of $\text{fix}(g_{j})$. Hence
> $$
> \text{Column-wise Sum} = \sum_{g \in G}\text{fix}(g).
> $$
> The row-wise sum will be the sum, over $x_{i}$, of all those $g_{j}$ that fix $x_{i}$, ie. the stabilizer of $x_{i}$. Hence
> $$
> \text{Row-wise Sum} = \sum_{x \in X}|G_{x}|.
> $$
> Since they both represent the total number of $1s$ in the matrix, they are the same. Let $\mathcal{O}_{1}, \mathcal{O}_{2}, \dots, \mathcal{O}_{l}$ be the distinct orbits in $X$, now
> $$
> \begin{align}
> \sum_{g \in G}\text{fix}(g)  & = \sum_{x \in X}|G_{x}| \\
>  & =\sum_{x \in X} \frac{|G|}{|\mathcal{O}(x)|} \\
>  & = |G|\sum_{k=1}^{l}\sum_{x \in \mathcal{O}_{k}} \frac{1}{|\mathcal{O}(x)|}.
> \end{align}
> $$
> The inner sum will be $1$ since the term $\frac{1}{|\mathcal{O}_{k}|}$ is being added $\mathcal{O}_{k}$ number of times. Hence the $RHS$ will be $|G|$ times the number of orbits. Rearranging, we get
> $$
> \text{\#orbits} = \frac{1}{|G|} \sum_{g\in G}\text{fix}(g).
> $$

### An example: 2-colorings of a cube

Consider a cube with faces $R,L,F,B,U,D$ which correspond to Right, Left, Front, Back, Up and Down respectively. 

Let $G$ denote the set of all orientations of a cube obtained through rotations. The cardinality of $G$ will be $24$.

>[!proof]-
>There are $6$ choices for the front face and $4$ for the side one; these uniquely determine an orientation.
>Alternatively, you can embed a tetrahedron in the cube such that its edges correspond with a set of pairwise non-adjacent edges of the cube (there are two such sets of edges). It will have two orientations upon rotating the cube. This will give a isomorphism to $S_{4}$.
>![[Pasted image 20250316144333.jpeg|500]]
>The pink colored vertices form one tetrahedron, and the grey colored ones form another.

There are four types of symmetries present here. 

1) Face Symmetries ($180^{\circ}$ Rotations) - 3
	- $(U)(D)(F\ B)(R\ L)$
	- $(L)(R)(U\ D)(F\ B)$
	- $(F)(B)(R\ L)(U\ D)$
2) Face Symmetries ($90^{\circ}$ Rotations) - 6
	- $(U)(D)(F\ L\ B\ R)$ and its inverse
	- $(F)(B)(R\ D\ L\ U)$ and its inverse
	- $(R)(L)(U\ F\ D\ B)$ and its inverse
3) Edge Symmetries - 6
	- $(U\ D)(L\ B)(F\ R)$
	- $(U\ D)(L\ F)(B\ R)$
	- $(R\ L)(U\ F)(B\ D)$
	- $(R\ L)(F\ D)(U\ B)$
	- $(F\ B)(R\ U)(L\ D)$
	- $(F\ B)(R\ D)(L\ U)$
4) Vertex Symmetries - 8
	- $(F\ U\ R)(L\ B\ D)$ and its inverse
	- $(F\ R\ D)(U\ B\ L)$ and its inverse
	- $(R\ U\ B)(F\ L\ D)$ and its [[Untitled.gif|inverse]]
	- $(R\ D\ B)(F\ U\ L)$ and its inverse
5) The identity symmetry - 1
	-  $(R)(L)(F)(B)(U)(D)$
 

All together, we have 24 symmetries, as expected. Note that for a symmetry $g$, $\text{fix}(g)=2^{^{c(g)}}$, where $c(g)$ is the number of cycles in the cycle representation of $g$. Using Burnside's lemma,
$$
\#\text{orbits}=\frac{1}{24}\left( 3\times 2^{4}+6\times 2^{3}+6\times 2^{3}+8\times 2^{2}+ 1 \times 2^{6} \right)= \frac{240}{24}=10.
$$
Thus, there are $10$ distinct ways to 2-color a cube.

[[A note on the symmetries of a rigid solid]]