---
tags:
  - DMAT
  - Lecture
date: 2025-02-26
time: 11:51
---
## Edge Reconstruction Conjecture

> [!Theorem] Conjecture
> Let $G$,$H$ be two graphs on $n$ vertices with $m$ edges, with $m\geq 4$. Let the edge sets of $G$ and $H$ be $E(G) = \{e_1,...,e_m\}$ and $E(H) = \{f_1,...,f_m\}$. Suppose $G\setminus e_{i}\cong H\setminus f_{i}$ for all $1\leq i\leq m$. Then,  $G\cong H$.

> [!Info]
> Recall that a "homomorphism" is a structure preserving map, which in this context means mapping edges to edges. So, any map $\phi$ which preserves edges is called a homomorphism. Just like in group theory, a bijective homomorphism is called an isomorphism, and two graphs are said to be isomorphic if there exists an isomorphism between them. Isomorphic graphs have the same structure up to relabelling of vertices.

The conjecture does not hold when $m=3$. The graphs $G=(V, E_{1})$ and $H=(V, E_{2})$ with $V=\{ 1, 2, 3 , 4\}$, $E_{1}=\{ \{ 1, 2 \} , \{ 2, 3 \}, \{ 3, 1 \}\}$ and $E_{2}=\{ \{ 1, 2 \}, \{ 1, 3 \}, \{ 1, 4 \}\}$ are a counterexample.

> [!Theorem] Lemma
> Let $G$ be a graph with $E(G)=\{ e_{1}, e_{2}, \dots, e_{m} \}$. Then, it is sufficient to know the set of all maximal proper subgraphs of $G$, that is, $S=\{ G\setminus e_{i}\ | \ i\in[m] \}$ to compute the number of edge-proper subgraphs of $G$ that are isomorphic to a given graph $T$. 

> **Proof**
> Let $T$ be a graph with $j$ edges, $1\leq j< m$. Let $\alpha$ be the number of subgraphs of $G$ that are isomorphic to $T$. Let $\alpha_{i}$ be the number of subgraphs of $G$ that are isomorphic to $T$ and contain the edge $e_{i}$. Then, $\alpha-\alpha_{i}$ is known since it is the number of subgraphs of $G\setminus e_{i}$ that are isomorphic to $T$. Thus from $S$ and $T$ we know $m$, $j$, and $\alpha-\alpha_{i}$. So, we also know 
> $$
> M=\sum_{i=1}^{m} (\alpha-\alpha_{i})=m\alpha-\sum_{i=1}^{m} \alpha_{i}.
> $$
> Note here that $\sum_{i=1}^{m}\alpha_{i}=j\alpha$, since every subgraph of $G$ that is isomorphic to $T$ is counted $j$ times in the sum. Thus, we have $M=(m-j)\alpha$. Since $m\ne j$, we have $\alpha=M/(m-j)$. Thus, the knowledge of $S$ an $T$ are sufficient to determine $\alpha$.


> [!Theorem] Theorem (Lovasz)
> The Edge Reconstruction Conjecture is true when $m > \frac{1}{2}\binom{n}{2}$.

[Original paper](https://www.sciencedirect.com/science/article/pii/0095895672900688) by Lovasz

> **Proof**
> 
> Let $\hat{G}\to \hat{H}$ (where $\hat{G}$ and $\hat{H}$ have the same number of vertices) represent the set of all isomorphisms from $\hat{G}$ to $\hat{H}$. We have to show that $G\to H$ is non-empty. 
> 
> Let $A_{i}$ be the set of all bijections $\phi$ from $V(G)$ to $V(H)$ such that if $e_{i}=\{ x_{i_{1}}, x_{i_{2}} \}\in E(G)$ then $\{ \phi(x_{i_{1}}), \phi(x_{i_{2}}) \}\in E(\overline{H})$, that is, $\phi$ maps edge $e_{i}$ of $G$ to a non-edge of $H$. We want $|G\to H|=\left| X\setminus \bigcup_{i=1}^{m}A_{i} \right|$.By the [[DMAT_L12#Principle of inclusion and exclusion|principle of inclusion and exclusion]], we have
> $$
> \left| X\setminus \bigcup_{i=1}^{m} A_{i} \right| =\sum_{I\subseteq[m]}(-1)^{|I|}A_{I}.
> $$
> For any $I\subseteq[m]$, define $\hat{G}_{I} = (V(\hat{G}), \{ e_{i}\ | \ i\in I \})$. $A_{I}$ is the set of all bijections that map $e_{i}$ into $\overline{H}$ for all $i\in I$. So, $|A_{I}| = |G_{I}\rightarrow \overline{H}|$. Thus,
> $$
> \begin{align}
> |G\rightarrow H|  & = \sum_{I\subseteq [m]}(-1)^{|I|}|G_{I}\rightarrow \overline{H}|. & (1)
> \end{align}
> $$
> Similarly considering $H\rightarrow H$ we get
> $$
> \begin{align}
> |H\rightarrow H|  & = \sum_{I\subseteq [m]}(-1)^{|I|}|H_{I}\rightarrow \overline{H}|. & (2)
> \end{align}
> $$
> Denote the number of edge-proper subgraphs of $G$ which are isomorphic to a graph $T$ by $\mathcal{S}_{G}(T)$. Note from the preceding lemma that for any given graph $T$ with $1\leq E(T)< m$, $\mathcal{S}_{G}(T)$ is completely determined by $\{ G\setminus e_{i}\ | \ i\in[m] \}$. Similarly, $\mathcal{S}_{H}(T)$ is completely determined by $\{ H\setminus f_{i}\ | \ i\in[m] \}$. From our hypothesis, we know that $\{ G\setminus e_{i}\ | \ i\in[m] \}=\{ H\setminus f_{i}\ | \ i\in[m] \}$, up to isomorphism. Thus, $\mathcal{S}_{G}(T)=\mathcal{S}_{H}(T)$ for all $T$. 
> 
> Now, let $\mathcal{T}$ be the set of all graphs possessing $j$ edges, where $1\leq j< m$. Then,
> $$
> \begin{align}
> \sum_{I\subset[m]}(-1)^{|I|}|G_{I}\to \overline{H}|=\sum_{T\in \mathcal{T}}(-1)^{|E(T)|}\mathcal{S}_{G}(T)|T\to \overline{H}|\\ \\ 
> \sum_{I\subset[m]}(-1)^{|I|}|H_{I}\to \overline{H}|=\sum_{T\in \mathcal{T}}(-1)^{|E(T)|}\mathcal{S}_{H}(T)|T\to \overline{H}|
> \end{align}
> $$
> Thus, the terms in $(1)$ and $(2)$ with $I\ne[m]$ are equal. For $I=[m]$, note that $|G\to \overline{H}|=0$ and $|H\to \overline{H}|=0$ since $m> \frac{1}{2}\binom{n}{2}$. Hence, $|G\to H|=|H\to H|> 0$ (the identity isomorphism!), and we are done.

---
## Generalizing the Inclusion Exclusion Principle

In order to further generalize the principle of inclusion and exclusion, we will develop some more theory on posets.
### The Incidence Algebra of a Poset

> [!Info]
> An *algebra* over a field $F$ is a vector space over $F$ that is also equipped with a bilinear multiplication operation $\cdot:V\times V\to V$. 

Suppose that $P=(X, \leq)$ is a poset and $|X|=n$. Define the *incidence algebra* of $P$ by
$$
I(P)\equiv \{ f\ : \  X\times X\to \mathbb{R} \ | \  f(x, y)=0\text{ unless }x\leq y\}.
$$
For $f,g\in I(P)$, define $(f+g)(x,y) \equiv f(x,y) + g(x,y)$ for all $x, y\in X$. Clearly, $f + g\in I(P)$. 
For $\alpha\in\mathbb{R}\text{ and }f\in I(P)$, define $(\alpha\cdot f)(x,y) = \alpha f(x,y)$  for all $x, y\in X$ so that $\alpha \cdot f\in I(P)$. 
For $f,g\in I(P)$, define 
$$
(f\cdot g)(x,y) \equiv \sum_{x \leq z \leq y}f(x,z)g(z,y) \quad\forall x, y\in X,
$$
and note that $(f\cdot g)\in I(P)$. Bilinearity is easily verified. Thus, with these definitions, the incidence algebra is indeed an algebra. 
### Matrix Representation of the Algebra

>[!Info] 
>A *linear extension* of a poset $P=(X,\leq)$ is a totally ordered set $P'=(X, \leq')$ that respects the poset's structure. That is, if $x, y\in X$, $x\leq y$ $\implies$ $x\leq'y$. 

Let $P' = \{x_1 \leq' x_2\leq' \cdots \leq' x_n\}$ be a linear extension of $P$. Let $\mathcal{M}_{n}(\mathbb{R})$ denote the algebra of $n\times n$ real matrices. Define a map $\varphi:I(P)\to \mathcal{M}_{n}(\mathbb{R})$ by $f\mapsto M_{f}\equiv [f(x_{i}, x_{j})]_{n\times n}$. 

We claim that $\varphi$ is an injective homomorphism. The injective part being obvious and trivial properties being easily proved, we will only check that $\varphi(fg)=\varphi(f)\varphi(g)$. Let $M_{(i, j)}$ denote the $i,j$th entry of $M$.
$$
\begin{align}
\varphi(fg)_{(i, j)} =(fg)(x_{i}, x_{j}) & =\sum_{x_{i} \leq z \leq x_{j}}f(x_{i},z)g(z,x_{j}). \\ \\

(\varphi(f)\varphi(g))_{(i, j)} & = \sum_{k=1}^{n} f(x_{i}, x_{k})g(x_{k}, x_{j}) \\
	 & = \sum_{x_{i}\leq x_{k}\leq x_{j}} f(x_{i}, x_{k})g(x_{k}, x_{j}).
\end{align}
$$
Note that $M_{f}$ is always upper triangular, and that the set of all upper triangular matrices in $\mathcal{M}_{n}(\mathbb{R})$ forms a subalgebra of $\mathcal{M}_{n}(\mathbb{R})$. Since $\varphi$ is an injective homomorphism, $I(P)\cong\mathrm{Im}~\varphi$, so $I(P)$ is isomorphic to a subalgebra of the algebra of upper triangular $n\times n$ matrices.

Now we shall have a look at a few important functions in $I(P)$. 
### Invertible elements in I(P)

The identity element of $I(P)$ is
$$
e(x,y) = \begin{cases}1, & x=y\\0 & \text{otherwise.}\end{cases}
$$
It is easy to verify that for any $f\in I(P)$, we have $f\cdot e = e\cdot f = f$. Note that the identity is unique, since the identity matrix is unique in $\varphi(I(P))$. Having defined the identity, we can talk about invertible elements.

Clearly,
$$
\begin{align}
 & f\text{ is invertible } \\
\iff & M_{f}=\varphi(f) \text{ is invertible} \\
\iff & \text{All diagonal entries of }M_{f}\text{ are nonzero} \\
\iff & f(x, x)\ne 0\quad\forall x\in X.
\end{align}
$$
Since $I(P)\cong \mathrm{Im}~\varphi$, $f^{-1}$ is given by $M_{f}^{-1}$. Indeed, $ff^{-1}=e$. If the $f(x, x)=1$ for all $x\in X$ and $f(x, y)\in \mathbb{Z}$ for all $x, y\in X$, then $f^{-1}$ is also integer valued for all $x, y\in X$. This is because if a upper triangular matrix $M$ has integer valued entries and all diagonal entries equal to 1, $M^{-1}$ is also diagonal with integer valued entries. We have $M = I - N$ for a strictly upper triangular (and hence nilpotent) matrix $N$. Thus, $M^{-1}  = I + N +N^2 + \cdots + N^{k}$ for some $k\in \mathbb{N}$.
### The Möbius function

Define the *incidence function* $i$ of $I(P)$ to be 
$$
i(x,y) = \begin{cases}1 & x\leq y\\ 0 & \text{otherwise.}\end{cases}
$$
The *Möbius function* is defined to be the inverse $\mu$ of the incidence function $i$. From the previous section, we know that $\mu$ must be integer valued. Since $\mu i=e$, we know that for all $x\in X$,
$$
\begin{align}
 & \mu i(x, x)=1 \\
\implies & \mu(x, x)i(x, x)=1 \\ 
 \implies & \mu(x, x)=1 .
\end{align}
$$
If $x\ne y$, 
$$
\begin{align}
 & \mu i(x, y)=0 \\
\implies & \sum_{x\leq z\leq y}\mu(x, z)i(z, y)=0 \\
 \implies & \sum_{x\leq z\leq y}\mu(x, z)=0 \\
\implies & \mu(x, y)=-\sum_{x\leq z< y}\mu(x, z).
\end{align}
$$
Thus, we get an inductive definition for $\mu$:
$$
\mu(x,y) = \begin{cases}1 & \text{if } x=y\\-\sum_{x\leq z<y}\mu(x,z) & \text{if } x\neq y.\end{cases}
$$

> [!Example] The Möbius function of a total order
> Suppose $P$ is a total order $a_1 < a_2 < \cdots < a_r$.
> Then it is easily verified that
> - $\mu(a_{i},a_{i}) = 1 \quad\forall 1\leq i\leq r$
> - $\mu(a_i,a_{i+1}) = -\mu(a_{i}, a_{i})= -1 \quad\forall 1 \leq i \leq r-1$ 
> - $\mu(a_i,a_j) = 0\quad\forall j > i+1$

>[!Lemma]
>The power set $\mathcal{P}([n])$ is order isomorphic to the cartesian product $\prod_{i=1}^{n}P_{i}$ where $P_{i} = \{a_i,b_i\}$ such that $a_i < b_i$

>**Proof**
>Indeed, $A\mapsto (\alpha_1,\alpha_2,...,\alpha_n)$ where $\alpha_i = a_i$ if $i \not\in A$ and $\alpha_i = b_{i}$ if $i\in A$ is an order preserving bijection

>[!Lemma]
>Let $P_1,P_2,...,P_n$ be posets with Möbius functions $\mu_i$. if $P = \prod_{i=1}^{n}P_{i}$, then its Möbius function $\mu$ is defined by $$\mu((\alpha_{1},\alpha_{2},...,\alpha_{n}) , (\beta_{1},\beta_{2},...,\beta_{n})) = \prod_{i=1}^{n}\mu_{i}(\alpha_{i},\beta_{i})$$

>**Proof** 
>call the product function on the right hand side $r$. Let $i$ be the incidence function of $P$. it is easily verified that $r\cdot i = i\cdot r = e$ and since inverses are unique, we have that the two functions are identical

---

## Chains and antichains in posets

> [!Theorem] 
> If $r$ is the maximum chain length in a poset $P$, then $P$ can be covered by $r$ chains (and no fewer).

Since A chain and an antichain can intersect at most 1 point, the no fewer part should be clear.

> [!Theorem] Dilworth's theoem
> If $r$ is the maximum antichain length in $P$, then $P$ can be covered by $r$ antichains (and no fewer).

**Proof**
by induction.   


