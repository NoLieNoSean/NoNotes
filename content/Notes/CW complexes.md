---
id: "466"
date: 2026-06-14
time: 14:38
tags:
---
> [!Definition] Cell
> An **open $n$-cell** is any topological space that is homeomorphic to the open unit ball $\mathbb{B}^{n}$, and a **closed $n$-cell** is any space homeomorphic to $\overline{\mathbb{B}^{n}}$. 

Any compact convex subset of $\mathbb{R}^{n}$ with nonempty interior is a closed $n$-cell, with its interior being an open $n$-cell [@leeIntroductionTopologicalManifolds2011 Prop 5.1]. 

> [!Definition] Cell decomposition and Cell complex
> If $X$ is a nonempty topological space, a **cell decomposition of $X$** is a partition $\mathcal{E}$ of $X$ into subspaces that are open cells of various dimensions, such that the following condition is satisfied: for each cell $e\in \mathcal{E}$ of dimension $n\geqslant 1$, there exists a continuous map $\Phi$ from some closed $n$-cell $D$ into $X$ (called a **characteristic map for $e$**) that restricts to a homeomorphism from $D^{\circ}$ onto $e$ and maps $\partial D$ into the union of all cells of $\mathcal{E}$ of dimensions strictly less than $n$. A **cell complex** is a Hausdorff space $X$ together with a specific cell decomposition of $X$ (though not necessarily with specific choices of characteristic maps). 
> 
> Given a cell complex $(X, \mathcal{E})$, the open cells in $\mathcal{E}$ are typically just called the **cells** of $X$. 

^ec3f7d

Notes of caution:
1. Although each $e\in \mathcal{E}$ is an open cell, it is not necessarily an open subset of $X$. 
2. By [[The Quotient Topology#^c8571b]].1 and [[Preliminaries to Topology#^1b4b44]], the image of a characteristic map for $e\in \mathcal{E}$ is equal to $\overline{e}$, so each cell is [[Compactness#^f8dbab|precompact]] in $X$; bit its closure might not be a closed cell, because the characteristic map need not be injective on the boundary. 

> [!Definition] CW complex
> A **CW complex** is a [[#^ec3f7d|cell complex]] $(X, \mathcal{E})$ satisfying the following additional conditions:
> 	**(C)losure finiteness:** The closure of each cell is contained in a union of finitely many cells. 
> 	**(W)eak topology:** The topology of $X$ is [[Triangulable manifolds#^81c464|coherent]] with the family of closed subspaces $\{ \overline{e}: e\in \mathcal{E} \}$. 

---

# Fundamental groups of CW Complexes


We use the [[The Seifert-Van Kampen Theorem#^faa3c4|Seifert-Van Kampen Theorem]] to give an algorithm for computing a presentation of the fundamental group of a finite CW complex. 

We start with **graphs**: CW complexes of dimension $0$ or $1$. Give edge, vertex, subgraph, self-loop, multiple edges, simple graph, (trivial/closed/simple) edge path, cycle, and tree the obvious meanings [@leeIntroductionTopologicalManifolds2011 p. 257]. 

Here's the main result:

> [!Theorem] Fundamental Group of a Finite Graph, @leeIntroductionTopologicalManifolds2011 10.12
> Let $\Gamma$ be a finite connected graph. Choose a vertex $v$ as base point, and let $T\subseteq\Gamma$ be a spanning tree. Let $e_{1}, \dots, e_{n}$ be the edges of $\Gamma$ that are not in $T$ and for each $i$ let $\{ w_{i}, w_{i}' \}$ be the set of vertices incident with $e_{i}$. We can choose paths $g_{i}$ and $h_{i}$ in $T$ form $v$ to $w_{i}$ and $w_{i}'$, and let $f_{i}$ denote the loop $g_{i}*e_{i}*h_{i}^{-1}$. 
> 
> Then, $\pi_{1}(\Gamma, v)=F(\{ [f_{1}], \dots, [f_{n}] \})$. 

The next step is to examine the consequence of attaching cells of higher dimensions. We begin with $2$-cells. The basic idea is that when a $2$-cell is attached to a space $X$, certain elements of $\pi_{1}(X)$ become nullhomotopic in the adjunction space and are hence killed. 

> [!Proposition] Attaching a disk, @leeIntroductionTopologicalManifolds2011 10.13
> Let $X$ be a path-connected topological space, and let $\tilde{X}$ be the space obtained by attaching a closed $2$-cell $D$ to $X$ along an attaching map $\varphi:\partial D\to X$. Let $v\in \partial D$, $\tilde{v}=\varphi(v)\in X$, and $\gamma=\varphi_{*}(\alpha)\in \pi_{1}(X, \tilde{v})$, where $\alpha$ is a generator of $\pi_{1}(\partial D, v)\cong \mathbb{Z}$. Then the homomorphism $\pi_{1}(X, \tilde{v})\to \pi_{1}(\tilde{X}, \tilde{v})$ induced by inclusion $X \hookrightarrow \tilde{X}$ is surjective, and its kernel is the [[LEC ALG2 13#^82859e|normal closure]] of $\{ \gamma \}$. 

^27d76a

The analogous result for higher-dimensional cells is much simpler, for reasons that become clear after a little thought:

> [!Proposition] Attaching an $n$-cell, @leeIntroductionTopologicalManifolds2011 10.14
> Let $X$ be a path-connected space, and let $\tilde{X}$ be a space obtained by attaching an $n$-cell to $X$, which $n\geqslant 3$. Then the inclusion $X \hookrightarrow \tilde{X}$ induces an isomorphism of fundamental groups. 

^49ffc2

The description of the fundamental group of a Finite CW complex is what you'd expect in light of [[#^27d76a]] and [[#^49ffc2]]: you essentially take the fundamental group of the $1$-skeleton and quotient by the normal closure of all the elements which represent loops going around boundaries of $2$-cells, "killing" them. @leeIntroductionTopologicalManifolds2011 10.15 assumes the base point lies in the closure of each of the $2$-cells. I can see a way of removing this requirement by using [[Homotopy, Covering Spaces and the Fundamental Group#^5fc6cf]]. I'm too lazy to work out the details now #t