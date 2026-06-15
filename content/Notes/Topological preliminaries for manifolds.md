---
id: "467"
date: 2026-06-14
time: 17:11
tags:
---
> [!Abstract]
> I've collected basic definitions and topological facts about manifolds here. 

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

# Manifolds as quotient spaces

None of the defining properties of manifolds (locally Euclidean, Hausdorff, second countable) are automatically inherited by quotient spaces. If we wish to prove that a given quotient space is a manifold, we have to prove at least that it is locally Euclidean and Hausdorff:

> [!Proposition] @leeIntroductionTopologicalManifolds2011 Prop 3.56
> Suppose $P$ is a second countable space and $M$ is a quotient space of $P$. If $M$ is locally Euclidean, then it is second countable. Thus if $M$ is locally Euclidean and Hausdorff, it is a manifold. 
> 
> > [!Proof]-
> > Let $q:P\to M$ denote the quotient map, and let $\mathcal{U}$ be a cover of $M$ by coordinate balls. The collection $\{ q^{-1}(U):U\in \mathcal{U} \}$ is an open cover of $P$, which has a countable subcover by [[Countability and Separation axioms#^c0f7b5]].1. Let $\mathcal{U}'\subseteq \mathcal{U}$ denote a countable subset of $\mathcal{U}$ such that $\{ q^{-1}(U):U\in \mathcal{U}' \}$ covers $P$. Then, $\mathcal{U}'$ is a countable cover of $M$ by coordinate balls. Each such ball is second countable, so $M$ is second countable. 
> 

# Manifolds are paracompact

A key topological fact about manifolds is that [[Compactness#^6e5ca5|they are all paracompact]]; this is a consequence of second countability. In fact, for spaces that are Hausdorff and locally Euclidean with countably many components, the two conditions are equivalent. 

