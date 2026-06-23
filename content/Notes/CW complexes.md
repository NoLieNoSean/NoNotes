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
2. By [[The quotient topology#^c8571b]].1 and [[Preliminaries to Topology#^1b4b44]], the image of a characteristic map for $e\in \mathcal{E}$ is equal to $\overline{e}$, so each cell is [[Compactness#^f8dbab|precompact]] in $X$; bit its closure might not be a closed cell, because the characteristic map need not be injective on the boundary. 

> [!Definition] CW complex
> A **CW complex** is a [[#^ec3f7d|cell complex]] $(X, \mathcal{E})$ satisfying the following additional conditions:
> 	**(C)losure finiteness:** The closure of each cell is contained in a union of finitely many cells. 
> 	**(W)eak topology:** The topology of $X$ is [[Triangulable manifolds#^81c464|coherent]] with the family of closed subspaces $\{ \overline{e}: e\in \mathcal{E} \}$. 

