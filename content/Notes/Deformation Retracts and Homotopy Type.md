---
id: "477"
date: 2026-06-24
time: 20:49
tags:
---

> [!Lemma] @munkresTopology2000 58.1
> Let $h, k:(X, x_{0})\to (Y, y_{0})$ be continuous maps. If $h$ and $k$ are homotopic, and if the image of the base point $x_{0}$ of $X$ remains fixed at $y_{0}$ during the homotopy, then the homomorphisms $h_{*}$ and $k_{*}$ are equal. 
> 
> > [!Proof]-
> > 
> > Let $f$ be a loop based at $x_{0}$ in $X$. We need to show that $h\circ f$ and $k\circ f$ are path homotopic. Let $H:X\times I\to Y$ be a homotopy between $h$ and $k$ such that $H(x_{0}, t)=y_{0}$ for all $t$. The composite
> > $$
> > I\times I\xrightarrow{f\times \mathrm{id}}X\times I\xrightarrow{H}Y
> > $$
> > is a path homotopy between $h\circ f$ and $k\circ f$. 
> 

We know that the inclusion $S^{1}\hookrightarrow \mathbb{R}^{2}\setminus \{ 0 \}$ induces an inclusion of fundamental groups from [[Retractions and Fixed Points#^e945e8]]; using the above lemma, we show that it is in fact an isomorphism, for all $n$. 

> [!Theorem] @munkresTopology2000 58.1
> The inclusion map $j:S^{n}\to R^{n+1}\setminus \{ 0 \}$ induces an isomorphism of fundamental groups. 

We can draw similar conclusions whenever it is possible to continuously deform the identity map on a space to the inclusion map of a subspace, while being constant on said subspace. 

> [!Definition] Deformation retraction
> Let $A$ be a subspace of $X$. We say that $A$ is a **deformation retract** of $X$ if the identity map of $X$ is homotopic to a [[Retractions and Fixed Points#^cda84f|retraction]] of $X$ onto $A$. We say that $A$ is a **strong deformation retract** of $X$ if each point of $A$ remains fixed during the homotopy. This means that there is a continuous map $H:X\times I\to X$ such that $H(x, 0)=x$ and $H(x, 1)\in A$ for all $x\in X$, and $H(a, t)=a$ for all $a\in A$. The homotopy $H$ is called a **(strong) deformation retraction** of $X$ onto $A$. 

^136a06

> [!Theorem] @munkresTopology2000 58.3
> Let $A$ be a [[#^136a06|strong deformation retract]] of $X$; let $x_{0}\in A$. Then the inclusion map
> $$
> j:(A, x_{0})\to(X, x_{0})
> $$
> induces an isomorphism of fundamental groups. 

However, there exist spaces that are not strong deformation retracts of each other, but still have isomorphic fundamental groups (like the figure eight space and the theta space, for instance). This suggests the possibility that there might be a more general way of showing two spaces have isomorphic fundamental groups. 

> [!Definition] Homotopy equivalence
> Let $f:X\to Y$ and $g:Y\to X$ be continuous maps. Suppose that the map $g\circ f:X\to X$ is homotopic to $\mathrm{id}_{X}$ and the map $f\circ g:Y\to Y$ is homotopic to $\mathrm{id}_{Y}$. Then the maps $f$ and $g$ are called **homotopy equivalences**, and each is said to be a **homotopy inverse** of the other. It is clear that homotopy equivalence is a *equivalence relation*. Two spaces that are homotopy equivalent are said to have the same **homotopy type**. 

^1d6da4

For example, if $A$ is a strong deformation retract of $X$, then $A$ has the same homotopy type as $X$: if we let $j:A\hookrightarrow X$ be the inclusion and let $r:X\to A$ be the retraction mapping, then the composite $r\circ j$ *equals* the identity map of $A$, and the composite $j\circ r$ is by hypothesis homotopic to $\mathrm{id}_{X}$. 

We now show that two spaces that have the same homotopy type have isomorphic fundamental groups. 

> [!Lemma]
> Let $h, k:X\to Y$ be continuous maps; let $h(x_{0})=y_{0}$ and $k(x_{0})=y_{1}$. If $h$ and $k$ are homotopic, there is a path $\alpha$ in $Y$ form $y_{0}$ to $y_{1}$ such that $k_{*}=\hat{\alpha}\circ h_{*}$. Indeed, if $H:X\times I\to Y$ is the homotopy between $h$ and $k$, then $\alpha$ is the path $\alpha(t)=H(x_{0}, t)$. 
> 
> ```latex
> % latex-id: f959-df90-2ea3-4768-888a
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwwLCJcXHBpXzEoWCwgeF8wKSJdLFsxLDAsIlxccGlfMShZLCB4XzApIl0sWzEsMSwiXFxwaV8xKFksIHlfMSkiXSxbMCwxLCJoXyoiXSxbMCwyLCJrXyoiLDJdLFsxLDIsIlxcaGF0e1xcYWxwaGF9Il1d 
> \[\begin{tikzcd} {\pi_1(X, x_0)} & {\pi_1(Y, x_0)} \\ & {\pi_1(Y, y_1)} \arrow["{h_*}", from=1-1, to=1-2] \arrow["{k_*}"', from=1-1, to=2-2] \arrow["{\hat{\alpha}}", from=1-2, to=2-2] \end{tikzcd}\]
> \end{document}
> ```

> [!Theorem] @munkresTopology2000
> Let $f:X\to Y$ be continuous; let $f(x_{0})=y_{0}$. If $f$ is a [[#^1d6da4|homotopy equivalence]], then
> $$
> f_{*}:\pi_{1}(X, x_{0})\to \pi_{1}(Y, y_{0})
> $$
> is an isomorphism.

The theta space and the figure eight space are both strong deformation retracts of the doubly punctured plane. Therefore, they are homotopy equivalent to each other. 

In fact, two spaces $X$ and $Y$ have the same homotopy type iff they are homeomorphic to strong deformation retracts of a single space: the mapping cylinder of a homotopy equivalence $f:X\to Y$ strong deformation retracts onto homeomorphic images of $X$ and $Y$. 

> [!Definition] Mapping cylinder
> The **mapping cylinder** of a continuous map $f:X\to Y$ is defined by the [[The Quotient Topology#^a08554|quotient]]
> $$
> M_{f}=([0, 1]\times X)\cup_{f}Y.
> $$
> 

^c9ba65

> [!Theorem] @fuchsNoteMappingCylinders1971
> Let $f:X\to Y$ be continuous. Then, $Y$ is a [[#^136a06|strong deformation retract]] of the [[#^c9ba65|mapping cylinder]] $M_{f}$. If $f$ is a [[#^1d6da4|homotopy equivalence]], then $X\times \{ 0 \}\subseteq M_{f}$ is a strong deformation retract of $M_{f}$. 

