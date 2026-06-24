---
id: "479"
date: 2026-06-24
time: 22:12
tags:
Topics: Deck transformations, classification of covering spaces
---

We will denote a covering map $p:E\to B$ by $(E, B, p)$. 

> [!Definition] Covering transformation
> Let $(E, B, p)$ be a [[Covering Spaces and the Fundamental Group#^b75e77|covering space]]. A homeomorphism $t:E\to E$ is a **covering transformation** if $p\circ t=p$. 

> [!Example]
> 1. For $n\in \mathbb{Z}$, the map $t:\mathbb{R}\to \mathbb{R}$ given by $x \mapsto x+n$ is a covering transformation for the covering described in [[Covering Spaces and the Fundamental Group#^162985]]. 
> 2. For $n, m\in \mathbb{Z}$ the map $t:\mathbb{R}^{2}\to \mathbb{R}^{2}$ given by $t(x, y)=(x+n, y+m)$ is a covering transformation for the covering described in [[Covering Spaces and the Fundamental Group#^944522]]. 
> 3. The antipodal map of $\mathbb{S}^{n}$ is a covering transformation for the covering described in [[The Fundamental Groups of Some Surfaces#^e32251]]. 

> [!Proposition]
> The covering transformations for a given covering space form a group, called the group of **covering transformations**. #td

[!Lemma] @schultensIntroduction3manifolds2014 2.4.10
If $(E, B, p)$ is a covering, $B$ is a compact connected simplicial complex, and for $b\in B$, $p ^{-1}(b)$ is finite, then $\chi(E)=\#\{ p ^{-1}(b) \}\cdot \chi(B)$. 

> [!Definition] Branched covering
> Let $E$, $B$ be manifolds, $E'$ a submanifold of $E$, $B'$ a submanifold of $B$, and $p:E\to B$ a continuous map. The quintet $(E, E', B, B', p)$ is a **branched covering** if 
> 1. $p|_{E\setminus E'}:E\setminus E'\to B\setminus B'$ is a [[Covering Spaces and the Fundamental Group#^03ba68|covering map]]; 
> 2. $p|_{E'}:E'\to B'$ is a covering map. 
> 
> Here $B'$ is called the **branch locus** and $E'$ is called the **ramification locus**. 

Crucially, the two restrictions may have different indices. For example, $(\mathbb{C}, \mathbf{0}, \mathbb{C}, \mathbf{0}, \mathbf{z}\mapsto \mathbf{z}^{n})$ is a branched covering. 