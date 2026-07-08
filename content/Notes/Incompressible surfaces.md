---
id: "490"
date: 2026-07-03
time: 17:14
tags:
---

Recall the definition of a essential simple closed curve in a $2$-manifold:

> [!Definition] Essential separating simple closed curve, @schultensIntroduction3manifolds2014 2.2.1
> Let $S$ be a connected surface. A [[Homotopy and Isotopy on Surfaces#^ecc097|simple closed curve]] $c$ in $S$ is **separating** if $S\setminus c$ has two components. Otherwise, it is **nonseparating**. A simple closed curve $c$ in a surface $S$ is **inessential** if $c$ is separating and a component of $S\setminus c$ is a disk or annulus. The curve $c$ is **essential** if it is nonessential. 

We now generalize this notion to essential surfaces in $3$-manifolds. 

> [!Definition] Proper submanifold, @schultensIntroduction3manifolds2014 3.4.1
> A submanifold $S$ in a compact $n$-manifold $M$ is **proper** if $\partial S=S\cap \partial M$. 

^95c967

For Schultens, submanifolds are proper by default. 

> [!Definition] Essential Simple Arc, @schultensIntroduction3manifolds2014 3.4.3
> A simple arc $\alpha$ in a surface $F$ is **essential** if there is no simple arc $\beta$ in $\partial F$ such that $\alpha \cup \beta$ is a closed $1$-manifold that bounds a disk in $F$. 

^febd30

> [!Definition] Compressible Surface, @schultensIntroduction3manifolds2014 3.4.4
> Let $M$ be a $3$-manifold. A surface $S$ in $M$ is **compressible** if either
> - $S$ is a $2$-sphere bounding a $3$-ball in $M$, or
> - there is a simple closed curve $c$ in $S$ that bounds a disk $D$ with interior in $M\setminus S$ but that bounds no disk with interior a component of $S\setminus c$. 
> 
> A surface that is not compressible is called **incompressible**. The disk $D$ is called a **compressing disk** for $S$. 

^adf688

There exists a clean algebraic characterization of compressible surfaces - see [[Dehn's Lemma#^c07d50]]. 

> [!Example]
> 
> The purple torus $T$ is an embedding of $\mathbb{T}^{2}$ in $\mathbb{T}^{3}$ (the model I'm using has two of the three pairs of faces identified, with the third pair - which manifests as a pair of tori after the first two pairs are identified - pending identification). 
> ![[-20260707165410597.jpg]]
> 
> $b_{3}=0$ corresponds to @schultensIntroduction3manifolds2014 Fig 3.21 ($T$ is compressible), and $b_{3}=5$ corresponds to Fig 3.22 ($T$ is incompressible). 
> 
> <iframe src="https://www.desmos.com/3d/snix0ekscv" width="100%" height= "500px"></iframe>

> [!Example] @schultensIntroduction3manifolds2014 Exr 3.4.3
> #td Suppose that $F$ is a surface and $\phi$ is a homeomorphism of $F$. Then each copy of $F\times \{ \text{point} \}$ of $F$ in the [[Preliminaries to 3-Manifolds#^8cfc5c|mapping torus]] of $\phi$ is incompressible. 

> [!Definition] Boundary compressible surface, @schultensIntroduction3manifolds2014 3.4.6
> Let $M$ be a $3$-manifold. A surface $S\subseteq M$ is **boundary compressible** if there is an [[#^febd30|essential]] simple arc $\alpha$ in $S$ and an essential simple arc $\beta$ in $\partial M$ such that $\alpha \cup\beta$ is a closed $1$-manifold that bounds a disk $D$ in $M$ with interior disjoint from $S$. A surface that is not boundary compressible is **boundary incompressible**. 

^f6ac5c

> [!Definition] Boundary parallel surface
> Let $M$ be a connected $3$-manifold. A surface $F\subseteq M$ is **boundary parallel** if it is separating and a component of $M\setminus F$ is homeomorphic to $F\times I$. 

^adb96a

> [!Definition] Essential surface, @schultensIntroduction3manifolds2014 3.4.7
> Let $M$ be a connected $3$-manifold. A $2$-sphere $S\subseteq M$ is **essential** if it does not bound a $3$-ball. A surface $F\subseteq M$ is **essential** if it is [[#^adf688|incompressible]], [[#^f6ac5c|boundary incompressible]], and not [[#^adb96a|boundary parallel]]. 

^f1e7c9

> [!Definition] Haken 3-manifold, @schultensIntroduction3manifolds2014 3.4.8
> An orientable [[Preliminaries to 3-Manifolds#^bcc199|irreducible]] $3$-manifold that contains a [[#^95c967|proper]] [[#^f1e7c9|essential]] surface is called a **Haken $3$-manifold**. 

^a0711b

