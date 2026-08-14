---
id: "396"
date: 2026-01-27
time: 12:55
tags:
  - TOP
---
# Homotopy of paths

> [!Definition] Homotopy and Path Homotopy
> A **homotopy** between maps $p, q:X\to Y$ is a continuous map $h:X\times I\to Y$ such that $h(\_{}, 0)=p$ and $h(\_{, 1})=q$, where $I=[0, 1]$. 
> 
> Let $X$ be a space. For $x\in X$, define $c_{x}$ to be the constant map $I\to \{ x \}$. Two paths $f, g:I\to X$ are said to be **path homotopic** if they are homotopic *though paths from $x$ to $y$*. In other symbols, there must exist a homotopy $h:I\times I\to X$ such that
> 1. $h(\_{}, 0)=f$, 
> 2. $h(\_{}, 1)=g$, 
> 3. $h(0, \_{})=c_{x}$, and
> 4. $h(1, \_{})=c_{y}$.
> 
> ```latex
> 
> 
> % latex-id: cb6f-b1ae-0d92-4141-967d
> \begin{document}
> 
> \begin{center}
> \begin{tikzpicture}[scale=1.2]
> 
> % Top horizontal line
> \draw (-0.95, 1) -- (0.95,1);
> 
> % Bottom horizontal line
> \draw (-0.95,-1) -- (0.95,-1);
> 
> % Left vertical line
> \draw (-1,-0.95) -- (-1,0.95);
> 
> % Right vertical line
> \draw (1,-0.95) -- (1,0.95);
> 
> % Top labels
> \node at (0, -1.2) {\tiny $f$};
> \node at (0, 1.2) {\tiny $g$};
> \node at (1.2, 0) {\tiny $c_{y}$};
> \node at (-1.2, 0) {\tiny $c_{x}$};
> 
> \end{tikzpicture}
> \end{center}
> 
> \end{document}
> ```
> 
> Homotopy and path homotopy are denoted by $\simeq$ and $\simeq_{p}$ respectively, and are equivalence relations[^1].
> 
> We write $[f]$ for the path homotopy equivalence class of $f$. We say that $f$ is a loop if $f(0)=f(1)$. 

^ccf037

> [!Definition] Straight line homotopy
> Let $f$ and $g$ be any two maps of a space $X$ into a convex subspace $Y$ of $\mathbb{R}^{n}$. Then, $f$ and $g$ are homotopic by the **straight-line homotopy** 
> $$
> F(x, t)=(1-t)f(x)+tg(x).
> $$
> 

> [!Definition]
> 
> For paths $f:x\to y$ and $g:y\to w$, define $fg$ to be the path obtained by traversing first $f$ and then $g$, going twice as fast on each. Define $f^{-1}$ to be $f$ traversed the other way around: $f^{-1}(s)=f(1-s)$. Composition of paths passes to equivalence classes: $[f][g]=[f g]$; well definedness follows from a simple application of [[Preliminaries to Topology#^7cc29d|the pasting lemma]]. 
> 
> ```latex
> % latex-id: c139-8bc6-b85f-4276-8d68
> \begin{document}
> \begin{center}
> \begin{tikzpicture}[scale=1.2]
> 
> % Top horizontal line
> \draw (-0.95,1) -- (-0.05,1);
> \draw (+0.05,1) -- (0.95,1);
> 
> 
> % Bottom horizontal line
> \draw (-0.95,-1) -- (-0.05,-1);
> \draw (+0.05,-1) -- (0.95,-1);
> 
> % Left vertical line
> \draw (-1,-0.95) -- (-1,0.95);
> 
> % Right vertical line
> \draw (1,-0.95) -- (1,0.95);
> 
> \draw (0,-0.95) -- (0,0.95);
> 
> 
> % Top labels
> \node at (-0.5, -1.2) {\tiny $f(2\cdot\_)$};
> \node at (-0.5, 1.2) {\tiny $f'(2\cdot\_)$};
> 
> \node at (0.5, -1.2) {\tiny $g(2\cdot\_)$};
> \node at (0.5, 1.2) {\tiny $g'(2\cdot\_)$};
> 
> 
> \node at (1.2, 0) {\tiny $c_{w}$};
> \node at (-1.2, 0) {\tiny $c_{x}$};
> \node at (0.2, 0) {\tiny $c_{y}$};
> 
> 
> \end{tikzpicture}
> \end{center}
> 
> \end{document}
> ```
> 

^e71ea2

> [!Lemma]
> Let $k:X\to Y$ is a continuous map. 
> 1. If $F$ is a path homotopy in $X$ between the paths $f$ and $f'$, then $k\circ F$ is a path homotopy in $Y$ between the paths $k\circ f$ and $k\circ f'$. 
> 2. If $f$ and $g$ are paths in $X$ with $f(1)=g(0)$, then $k\circ(fg)=(k\circ f)(k\circ g)$. 

^7d451b

> [!Proposition] @munkresTopology2000 51.2
> The operation defined in [[Homotopy, Covering Spaces and the Fundamental Group#^e71ea2]] is associative and admits left and right identities and inverses.
> 
> > [!Proof]-
> > 
> > Associativity is proven by using the fact that any two paths in $I$ form $0$ to $1$ are homotopic and [[Homotopy, Covering Spaces and the Fundamental Group#^7d451b]].1. 
> > 
> > Let $f:x\to y$ be a path in $X$. Consider the paths let $i$ be $\mathrm{id}_{I}$, which is a path in $I$ form $0$ to $1$. Since $I$ is convex, there exists a homotopy $G$ between $i$ and $e_{0}i$. By [[Homotopy, Covering Spaces and the Fundamental Group#^7d451b]], $f\circ G$ is a homotopy between $f\circ i=f$ and $f\circ (e_{0}i)=(f\circ e_{0})(f\circ i)=e_{x}f$. Similarly, $e_{y}$ is a right identity. 
> > 
> > Finally, note that $ii^{-1}$ is a path beginning and ending at $0$, and so is the constant path $e_{0}$; thus, there exists a homotopy between $ff^{-1}$ and $e_{x}$ (and $f^{-1}f$ and $e_{y}$). 
> 

^d124dc

---

# The fundamental group

> [!Definition] Fundamental group
> Define $\pi_{1}(X, x)$ to be the set of equivalence classes of loops that start and end at $x$. By [[Homotopy, Covering Spaces and the Fundamental Group#^d124dc]], this is a group. We call this the **fundamental group of $X$ relative the the base point $x$**. 

^b75e77

> [!Proposition]
> If $X$ is path connected and $x_{0}$ and $x_{1}$ are two points of $X$, then $\pi_{1}(X, x_{0})$ is isomorphic to $\pi_{1}(X, x_{1})$; this allows us to speak of "the" fundamental group of $X$. Precisely, every path $\alpha$ from $x_{0}$ to $x_{1}$ induces an *isomorphism* $\hat{\alpha}:\pi_{1}(X, x_{0})\to \pi_{1}(X, x_{1})$ by $[f]\mapsto[\alpha ^{-1}*f*\alpha]$. The isomorphism is independent of the path iff the fundamental group is abelian. 

^5fc6cf

> [!Remark] Induced homomorphisms
> The map from the category of pointed topological spaces to $\textsf{Gp}$ which maps $(X, x_{0})\mapsto \pi_{1}(X, x_{0})$ and $h:(X, x_{0})\to(Y, y_{0})$ to
> $$
> h_{*}:\pi_{1}(X, x_{0})\to \pi_{1}(Y, y_{0}), \quad [f]\mapsto[h\circ f]
> $$
> is a [[Category Theory Preliminaries II#^56cdbe|functor]]. We refer to $h_{*}$ as the homomorphism **induced by $h$**. 

^3d339c

[^1]: @munkresTopology2000 51.1

---

# Covering spaces

> [!Definition] Covering space
> Let $p:E\to B$ be a continuous surjective map. The open set $U$ of $B$ is said to be **evenly covered** by $p$ if the inverse image $p ^{-1}(U)$ can be written as the union of disjoint open sets $V_{\alpha}$ in $E$ such that for each $\alpha$, the restriction of $p$ to $V_{\alpha}$ is a *homeomorphism* of $V_{\alpha}$ onto $U$. The collection $\{ V_{\alpha} \}$ will be called a partition of $p ^{-1}(U)$ into **slices**. 
> 
> If every point $b\in B$ has a neighborhood $U$ that is evenly covered by $p$, then $p$ is called a **covering map**, and $E$ is said to be a **covering space** of $B$. 

^03ba68

Note that some authors (like Lee) assume $E$ is path connected. 

> [!Proposition] @munkresTopology2000 Exr. 53.3
> Let $p:E\to B$ be a covering map; let $B$ be connected. Show that if $p ^{-1}(b_{0})$ has cardinality $c$, then $p ^{-1}(b)$ has cardinality $c$ for every $b\in B$. We call $E$ a **$c$-fold covering** of $B$. 
> 
> > [!Proof]-
> > 
> > It suffices to observe that the relation
> > $$
> > x\sim x' \iff \text{the fibers over }x\text{ and }x'\text{ have the same cardinality}
> > $$
> > is an equivalence relation with open equivalence classes. The proof is similar to how we prove that an open connected space is path connected. See @cardonaAnswerFiberCovering2014 
> 

^04d08c

> [!Definition] Covering space
> In light of [[Homotopy, Covering Spaces and the Fundamental Group#^04d08c]], we can redefine a covering space as follows. Let $p:E\to B$ be a continuous surjective map, with $B$ connected. Let $I$ be a discrete space. We call $(E, p)$ a covering space if each $b\in B$ has a neighborhood $U$ with $p ^{-1}(U)$ homeomorphic to $U\times I$ via $h:p ^{-1}(U)\to U\times I$ such that 
> 
> ```latex
> % latex-id: b1a7-5b9e-3e80-4b99-adc2
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwwLCJwXnstMX0oVSkiXSxbMSwwLCJVXFx0aW1lcyBJIl0sWzEsMSwiVSJdLFswLDIsInAiLDJdLFsxLDIsIlxccGlfVSJdLFswLDEsImgiXV0= 
> \[\begin{tikzcd} {p^{-1}(U)} & {U\times I} \\ & U \arrow["h", from=1-1, to=1-2] \arrow["p"', from=1-1, to=2-2] \arrow["{\pi_U}", from=1-2, to=2-2] \end{tikzcd}\]
> \end{document}
> ```
> commutes. 



Covering spaces are instances of [[Fiber bundles#^a3d022|fiber bundles]]. 

> [!Proposition]
> Let $p:E\to B$ be a covering map. Then, 
> 1. for each $b\in B$, the subspace $p ^{-1}(b)\subseteq E$ has the discrete topology. 
> 2. $p$ is an open map. 
> 3. $p$ is a local homeomorphism of $E$ with $B$. The converse is not true. 

> [!Proposition]
> Let $p:E\to B$ be a covering map. If $B_{0}$ is a subspace of $B$, and if $E_{0}=p ^{-1}(B_{0})$, then the map $p_{0}:E_{0}\to B_{0}$ obtained by restricting $p$ is a covering map. 

> [!Proposition]
> If $p:E\to B$ and $p':E'\to B'$ are covering maps, then the product map
> $$
> p\times p':E\times E'\to B\times B'
> $$
> is a covering map. 

^0cd693

> [!Theorem] @munkresTopology2000 53.1
> The map $p:\mathbb{R}\to \mathbb{S}^{1}$ given by $p(x)=(\cos 2\pi x, \sin 2\pi x)$ is a covering map. 

^162985

> [!Corollary]
> It follows from [[Homotopy, Covering Spaces and the Fundamental Group#^162985]] and [[Homotopy, Covering Spaces and the Fundamental Group#^0cd693]] that the map $p\times p:\mathbb{R}^{2}\to \mathbb{T}^{2}$ is a covering map. 

^944522

## Lifting properties of covering maps for paths

> [!Definition] Lifting
> Let $p:E\to B$ be a map. If $f$ is a continuous mapping of some space $X$ into $B$, a **lifting** of $f$ is a map $\tilde{f}:X\to E$ such that $p\circ \tilde{f}=f$. 
> 
> ```latex
> % latex-id: a96d-3fdf-31c2-41bc-9a46
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMSwwLCJFIl0sWzEsMSwiQiJdLFswLDEsIlgiXSxbMCwxLCJwIl0sWzIsMSwiZiIsMl0sWzIsMCwiXFx0aWxkZXtmfSJdXQ==
> \[\begin{tikzcd} & E \\ X & B \arrow["p", from=1-2, to=2-2] \arrow["{\tilde{f}}", from=2-1, to=1-2] \arrow["f"', from=2-1, to=2-2] \end{tikzcd}\] 
> 
> \end{document}
> ```
> 


> [!Theorem]
> Let $p:E\to B$ be a covering map; let $p(e_{0})=b_{0}$. Paths $f:[0, 1]\to B$ beginning at $b_{0}$  (homotopies $F:[0, 1]^{2}\to B$ with $F(0, 0)=b_{0}$) have a *unique* lifting such that $\tilde{f}(0)=e_{0}$ ($\tilde{F}(0, 0)=e_{0}$). If $F$ is a path homotopy, $\tilde{F}$ is a path homotopy. 

Proof applies the [[LEC CAL1 8#Lebesgue covering Lemma|Lebesgue number lemma]] to $f([0, 1])$ ($F([0, 1]^{2})$).

> [!Theorem]
> Let $p:E\to B$ be a covering map; let $p(e_{0})=b_{0}$. Let $f$ and $g$ be two paths in $B$ from $b_{0}$ to $b_{1}$. Let $\tilde{f}$ and $\tilde{g}$ be their respective lifts to paths in $E$ beginning at $e_{0}$. If $f$ and $g$ are path homotopic, then $\tilde{f}$ and $\tilde{g}$ end at the same point of $E$ and are path homotopic. 

> [!Definition] The Monodromy action
> Let $p:E\to B$ be a covering map; let $b_{0}\in B$. Choose $e_{0}$ such that $p(e_{0})=b_{0}$. Then, $\pi_{1}(B, b_{0})$ [[LEC ALG2 7#Group actions|acts]] on $p ^{-1}(b_{0})$. This is known as the **Monodromy action**. The map $[f]\mapsto \tilde{f}_{e_{0}}(1)$, where $\tilde{f}_{e_{0}}$ is the lift of $f$ starting at $e_{0}$, is called the **lifting correspondence**. 

The following theorem helps us use covering maps to compute fundamental groups. 

> [!Theorem] @munkresTopology2000 54.4 & 54.6
> Let $p:E\to B$ be a covering map; let $p(e_{0})=b_{0}$. 
>  1. The homomorphism $p_{*}:\pi_{1}(E, e_{0})\to \pi_{1}(B, b_{0})$ is injective. 
> 2. If $E$ is path connected, the lifting correspondence $\phi:\pi_{1}(B, b_{0})\to p ^{-1}(b_{0})$ is surjective. In other words, the $\pi_{1}(B, b_{0})$-action on $p ^{-1}(b_{0})$ is transitive. 
> 3. If $E$ is simply connected, the lifting correspondence is bijective. 
> 4. Let $H=p_{*}(\pi_{1}(E, e_{0}))$. The lifting correspondence $\phi$ induces an injective map $\pi_{1}(B, b_{0})/H\to p ^{-1}(b_{0})$ of the collection of right cosets of $H$ into $p ^{-1}(b_{0})$, which is bijective if $E$ is path connected. 
> 5. If $f$ is a loop in $B$ based at $b_{0}$, then $[f]\in H$ iff $f$ lifts to a loop in $E$ based at $e_{0}$. 

^334a74

Look at @leeIntroductionTopologicalManifolds2011 Exm 11.17 for an example.

## The fundamental group of the circle

> [!Theorem] @munkresTopology2000 54.5
> The fundamental group of $S^{1}$ is isomorphic to $\mathbb{Z}$. 

^91f4c3

