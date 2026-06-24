---
id: "467"
date: 2026-06-14
time: 17:11
tags:
---
> [!Abstract]
> Definitions and topological facts related to topological manifolds. 

Recall [[Urysohn Lemma and Applications#^6bc1cb]]: A topological $n$-manifold is a [[Countability and Separation Axioms#^25afed|second countable]] [[Countability and Separation Axioms#^e86df7|Hausdorff]] space which is locally Euclidean of dimension $n$. Alternatively, we can define define a topological $n$-manifold to be a second countable Hausdorff space with an atlas:

> [!Definition] Topological manifold
> Let $M$ be a topological space. A family of pairs $\{ (M_{\alpha}, \phi_{\alpha}) \}$ with the following properties is called an **atlas**:
> 1. $M_{\alpha}$ is an open subset of $M$ for all $\alpha$ and $M=\bigcup_{\alpha}M_{\alpha}$; 
> 2. $\phi_{\alpha}$ is a homeomorphism from $M_{\alpha}$ to an open subset of $\mathbb{R}^{n}$ for all $\alpha$. 
> 
> A pair $(M_{\alpha}, \phi_{\alpha})$ is called a **chart** of $M$. A space which admits an atlas with charts to $\mathbb{R}^{n}$ is called a **topological $n$-manifold**. 
> 
> By a **$n$-manifold**, we mean a topological $n$-manifold, unless otherwise specified. 

^8eb8ab

Since the Hausdorff property and second countability are hereditary[^2], open subsets of $n$-manifolds are $n$-manifolds. 

> [!Proposition]
> The product of two manifolds is a manifold. 
> 
> > [!Proof]-
> > 
> > The collection $\{ (M_{\alpha}\times N_{\beta}, \phi_{\alpha}\times \psi_{\beta}) \}$ is an atlas:
> > 
> > ```latex
> > % latex-id: 825b-8c79-a429-49f2-ab01
> > \begin{document}
> > % https://q.uiver.app/#q=WzAsNyxbMSwxLCJNX1xcYWxwaGFcXHRpbWVzIE5fXFxiZXRhIl0sWzAsMV0sWzAsMCwiTV9cXGFscGhhIl0sWzAsMiwiTl9cXGJldGEiXSxbMiwxLCJVXFx0aW1lcyBWIl0sWzMsMCwiVSJdLFszLDIsIlYiXSxbMCwyXSxbMCwzXSxbNCw1XSxbNCw2XSxbMiw1LCJcXHBoaV9cXGFscGhhIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzMsNiwiXFxwc2lfXFxiZXRhIiwyLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn19fV0sWzAsNSwiIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsNiwiIiwxLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsNCwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiYXJyb3doZWFkIn0sImJvZHkiOnsibmFtZSI6ImRvdHRlZCJ9fX1dLFs0LDIsIiIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFs0LDMsIiIsMSx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ== 
> > \[\begin{tikzcd} {M_\alpha} &&& U \\ {} & {M_\alpha\times N_\beta} & {U\times V} \\ {N_\beta} &&& V \arrow["{\phi_\alpha}", tail reversed, from=1-1, to=1-4] \arrow[from=2-2, to=1-1] \arrow[dashed, from=2-2, to=1-4] \arrow[dotted, tail reversed, from=2-2, to=2-3] \arrow[from=2-2, to=3-1] \arrow[dashed, from=2-2, to=3-4] \arrow[dashed, from=2-3, to=1-1] \arrow[from=2-3, to=1-4] \arrow[dashed, from=2-3, to=3-1] \arrow[from=2-3, to=3-4] \arrow["{\psi_\beta}"', tail reversed, from=3-1, to=3-4] \end{tikzcd}\]
> > \end{document}
> > ```
> > 
> 

^5ea3e2

> [!Definition] Euclidean and regular balls
> We call any open subset of an $n$-manifold $M$ that is homeomorphic to a ball in $\mathbb{R}^{n}$ a **Euclidean ball** in $M$. 
> 
> A Euclidean ball $B\subseteq M$ is called **regular** if it has the following properties:
> 1. There is a Euclidean ball $B'\subseteq M$ containing $\overline{B}$.
> 2. For some $r> 0$, there is a chart $\varphi:B'\to B_{2r}(0)\subseteq \mathbb{R}^{n}$ that sends $\overline{B}$ onto $\overline{B}_{r}(0)$. 

^49ffed

> [!Proposition] @leeIntroductionTopologicalManifolds2000, 4.31
> Every manifold has a countable basis of regular Euclidean balls. 
> 

[^2]: [[Countability and Separation Axioms#^f0873d]], [[Countability and Separation Axioms#^54d9fd]] 

We also have the following:

> [!Definition] Manifold with boundary
> An $n$-dimensional **manifold with boundary** is a second countable Hausdorff space in which every point has a neighborhood homeomorphic to an open subset of the $n$-dimensional upper half space $\mathbb{H}^{n}=\{ (x_{1}, \dots, x_{n})\in \mathbb{R}^{n}:x_{1}\geq 0 \}$[^3]. We continue to call these homeomorphisms charts. 
> 
> $\mathbb{H}^{n}$ itself is obviously a manifold with boundary; its boundary is defined to be the set of points where $x_{n}=0$. If $M$ is a manifold with boundary, a point that is in the inverse image of $\partial \mathbb{H}^{n}$ under some chart is called a **boundary point of $M$**, and a point that is in the inverse image of $\text{Int}\,\mathbb{H}^{n}$ is called an **interior point**. The **boundary of $M$** is defined to be the set of all boundary points of $M$. 
> 

It is true that for a $n$-manifold with boundary $M$, $M=\partial M \sqcup\text{Int}\,M$. We will prove this later #td. An $n$-manifold is an $n$-manifold with boundary (with empty boundary). 

> [!Definition] Submanifold, @schultensIntroduction3manifolds2014 1.1.16
> Let $M$ be an $n$-manifold with boundary. A **$p$-dimensional submanifold** of $M$ is a *closed* subset $L$ of $M$ for which there exists an atlas $\{ (M_{\alpha}, \phi_{\alpha}) \}$ of $M$ and $p\in \{ 0, \dots, n \}$ such that for all $x\in L$ in the interior of $M$ there is a chart in the atlas with $x\in M_{\alpha}$ and
> $$
> \phi_{\alpha}(L\cap M_{\alpha})= \mathbb{R}^{p}\times \{ \mathbf{0} \}\subseteq \mathbb{R}^{n}
> $$
> and for all $x\in L$ in the boundary of $M$ there is a chart in the atlas such that $x\in M_{\alpha}$ and [^4]
> $$
> \phi_{\alpha}(L\cap M_{\alpha})= \mathbb{H}^{p}\times \{ \mathbf{0} \}\subseteq \mathbb{H}^{n}
> $$
> and such that
> $$
> \phi_{\alpha}(x)\in \partial \mathbb{H}^{p}\times\{ \mathbf{0} \}\subseteq \partial \mathbb{H}^{n}.
> $$
> 

[^3]: Lee requires $x_{n}\geq 0$ instead. 

[^4]: Schultens writes $\{ \mathbf{0} \}\times \partial \mathbb{H}^{p}$ here; I believe this is a mistake, since we want the interior of $\mathbb{H}^{p}$ to sit inside the interior of $\mathbb{H}^{n}$ 

> [!Remark]
> The boundary $\partial M$ of an $n$-manifold $M$ is not a submanifold of $M$, though it is an $(n-1)$-dimensional manifold that is contained in $M$. 

Schultens calls an $n$-manifold **closed** if $M$ is compact and $\partial M=\emptyset$. 
# Manifolds as quotient spaces

None of the defining properties of manifolds (locally Euclidean, Hausdorff, second countable) are automatically inherited by quotient spaces. If we wish to prove that a given quotient space is a manifold, we have to prove at least that it is locally Euclidean and Hausdorff:

> [!Proposition] @leeIntroductionTopologicalManifolds2011 Prop 3.56
> Suppose $P$ is a second countable space and $M$ is a quotient space of $P$. If $M$ is locally Euclidean, then it is second countable. Thus if $M$ is locally Euclidean and Hausdorff, it is a manifold. 
> 
> > [!Proof]-
> > Let $q:P\to M$ denote the quotient map, and let $\mathcal{U}$ be a cover of $M$ by coordinate balls. The collection $\{ q^{-1}(U):U\in \mathcal{U} \}$ is an open cover of $P$, which has a countable subcover by [[Countability and Separation Axioms#^c0f7b5]].1. Let $\mathcal{U}'\subseteq \mathcal{U}$ denote a countable subset of $\mathcal{U}$ such that $\{ q^{-1}(U):U\in \mathcal{U}' \}$ covers $P$. Then, $\mathcal{U}'$ is a countable cover of $M$ by coordinate balls. Each such ball is second countable, so $M$ is second countable. 
> 

# Manifolds are paracompact

A key topological fact about manifolds is that [[Compactness#^6e5ca5|they are all paracompact]]; this is a consequence of second countability. In fact, for spaces that are Hausdorff and locally Euclidean with countably many components, the two conditions are equivalent. 

# Orientability 

Defining a notion of orientability for topological manifolds requires an understanding of homology; I'm putting it off for now. See @HomologyOrientabilityGeneral2025


> [!Definition] Orientation-preserving maps
> stub

^5125c8
