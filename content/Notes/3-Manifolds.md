---
id: "458"
date: 2026-05-26
time: 00:42
tags:
  - MOC
---
# W22

## Preliminaries

Recall [[Urysohn Lemma and applications#^6bc1cb]]: a topological $n$-manifold is a [[Countability and Separation axioms#^25afed|second countable]] [[Countability and Separation axioms#^e86df7|Hausdorff]] space which is locally Euclidean of dimension $n$. Since the Hausdorff property and second countability are hereditary[^2], open subsets of $n$-manifolds are $n$-manifolds. 

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

[^2]: [[Countability and Separation axioms#^f0873d]], [[Countability and Separation axioms#^54d9fd]] 

We also have the following:

> [!Definition] Manifold with boundary
> An $n$-dimensional **manifold with boundary** is a second countable Hausdorff space in which every point has a neighborhood homeomorphic to an open subset of the $n$-dimensional upper half space $\mathbb{H}^{n}=\{ (x_{1}, \dots, x_{n})\in \mathbb{R}^{n}:x_{n}> 0 \}$. We continue to call these homeomorphisms charts. 
> 
> $\mathbb{H}^{n}$ itself is obviously a manifold with boundary; its boundary is defined to be the set of points where $x_{n}=0$. If $M$ is a manifold with boundary, a point that is in the inverse image of $\partial \mathbb{H}^{n}$ under some chart is called a **boundary point of $M$**, and a point that is in the inverse image of $\text{Int}\,\mathbb{H}^{n}$ is called an **interior point**. The **boundary of $M$** is defined to be the set of all boundary points of $M$. 
> 


It is true that for a $n$-manifold with boundary $M$, $M=\partial M \sqcup\text{Int}\,M$. We will prove this later. An $n$-manifold is an $n$-manifold with boundary (with empty boundary). 

We classify 1-manifolds (curves), 2-manifolds (surfaces), and 3-manifolds using a technique called triangulation, which requires understanding simplicial complexes. 
## [[Simplicial complexes]]

---
# W23

## Classification of curves

> [!Theorem] @leeIntroductionTopologicalManifolds2000 6.1
> A connected $1$-manifold is homeomorphic to $\mathbb{S}^{1}$ if it is compact and to $\mathbb{R}$ if it is not. 

^7cc648

Of course, this classifies the disconnected ones too, because it implies that each connected component of a disconnected $1$-manifold is a line or a circle, so every $1$-manifold is homeomorphic to a countable disjoint union of lines and/or circles. 
## [[Classification of compact surfaces]]
