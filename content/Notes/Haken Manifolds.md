---
id: "490"
date: 2026-07-03
time: 17:14
tags:
---
Essential simple closed curves play an important role in studying surfaces - they allow for the use of cut and paste techniques that suffice to classify surfaces (as Schultens does, but I suppose all of Lee's arguments can also be seen from this perspective). Pursuing this line of investigation in the study of three manifolds leads us to defining the 'essential surface', the three dimensional analog of the essential simple closed curve, and Haken manifolds as those admitting study via these surfaces:

> [!Definition] Haken 3-manifold, @schultensIntroduction3manifolds2014 3.4.8
> An orientable [[Preliminaries to 3-Manifolds#^bcc199|irreducible]] $3$-manifold that contains a [[Haken Manifolds#^95c967|proper]] [[Haken Manifolds#^f1e7c9|essential]] surface is called a **Haken $3$-manifold**. 

^a0711b

Alternatively, a Haken $3$-manifold is a irreducible orientable $3$-manifold containing an embedded $\pi_{1}$-injective surface - see [[Dehn's Lemma#^c07d50]]. 

We define an essential surface below. 
# Essential surfaces

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
> Let $M$ be a $3$-manifold. A surface $S\subseteq M$ is **boundary compressible** if there is an [[Haken Manifolds#^febd30|essential]] simple arc $\alpha$ in $S$ and an essential simple arc $\beta$ in $\partial M$ such that $\alpha \cup\beta$ is a closed $1$-manifold that bounds a disk $D$ in $M$ with interior disjoint from $S$. A surface that is not boundary compressible is **boundary incompressible**. 

^f6ac5c

> [!Definition] Boundary parallel surface
> Let $M$ be a connected $3$-manifold. A surface $F\subseteq M$ is **boundary parallel** if it is separating and a component of $M\setminus F$ is homeomorphic to $F\times I$. 

^adb96a

> [!Definition] Essential surface, @schultensIntroduction3manifolds2014 3.4.7
> Let $M$ be a connected $3$-manifold. A $2$-sphere $S\subseteq M$ is **essential** if it does not bound a $3$-ball. A surface $F\subseteq M$ is **essential** if it is [[Haken Manifolds#^adf688|incompressible]], [[Haken Manifolds#^f6ac5c|boundary incompressible]], and not [[Haken Manifolds#^adb96a|boundary parallel]]. 

^f1e7c9

---

# Properties of Haken manifolds

Pursuing a line of investigation analogous to what worked for surfaces gets us some decent milage, as the following results show. For examples of Haken manifolds, see [[Seifert Fibered Spaces]]. 
## Hierarchies

> [!Theorem] @schultensIntroduction3manifolds2014 3.6.2
> A compact orientable irreducible $3$-manifold $M$ is [[Haken Manifolds#^a0711b|Haken]] iff $M$ has a [[#^e6f33a|hierarchy]]. 

^b2cee6

> [!Definition] Hierarchy, @schultensIntroduction3manifolds2014 3.6.1
> Let $M$ be a compact $3$-manifold. A **hierarchy** for $M$ is a finite sequence of pairs $(M_{1}, F_{1}), \dots, (M_{n}, F_{n})$ such that
> 1. $F_{i}$ is a $2$-sided [[Haken Manifolds#^adf688|incompressible]] and [[Haken Manifolds#^f6ac5c|boundary-incompressible]] surface in $M$;
> 2. $M_{i}=M_{i-1}\setminus \eta(F_{i-1})$, for $\eta(F_{i-1})$ an open [[Topological manifolds#^a8b826|regular neighborhood]] of $F_{i-1}$;
> 3. $M_{1}=M$;
> 4. each component of $M_{n+1}$ is a $3$-ball. 
> 
> We call $n$ the **length** of the hierarchy.

^e6f33a

> [!Example]
> 
> Illustrations for the example on @schultensIntroduction3manifolds2014 p. 81; She sucks at making diagrams. 
> 
> $(M_{1}, F_{1})$: A $3$-torus and a incompressible $2$-torus inside it. 
> 
> ![[-20260707230239986.jpg|300]]
> 
> $(M_{2}, F_{2})$: The thickened $2$-torus $\mathbb{T}^{2}\times I$ and an incompressible annulus
> 
> ![[-20260707230347109.jpg|300]]
> 
> $(M_{3}, F_{3})$: The thickened annulus and an incompressible disk. 
> 
> ![[-20260707232724028.jpg|300]]
> 
> 

^078e0f

[[#^b2cee6]] tells us that a given Haken manifold can be constructed by taking an appropriate collection of $3$-balls and identifying appropriate portions of their boundaries. Surprisingly, four rounds of identifications always suffice:

> [!Theorem]
> Let $M$ be a Haken manifold. Then $M$ has a hierarchy of length $4$. 
> 
> Specifically, a Haken manifold admits a hierarchy
> $$
> (M_{1}, F_{1}), (M_{2}, F_{2}), (M_{3}, F_{3}), (M_{4}, F_{4})
> $$
> where $F_{1}$ consists of disjoint closed surfaces in $M$, $F_{2}$ consists of disjoint surfaces with non-empty boundary in $M_{2}$, $F_{3}$ consists of disjoint annuli, and $F_{4}$ consists of disjoint disks. 

#q but $F_{3}$ in [[#^078e0f]] is a disc? Does $\mathbb{T}^{3}$ have another hierarchy?

## Waldhausen's Theorem

A key result on Haken manifolds is the following:

> [!Theorem] Waldhausen, @schultensIntroduction3manifolds2014 3.6.8
> [[Deformation Retracts and Homotopy Type#^1d6da4|Homotopy equivalent]] closed Haken manifolds are homeomorphic. 

Of course, this does not hold for $3$-manifolds in general.

> [!Definition] Lens space
> Let $T_{1}$, $T_{2}$ be solid tori. Let $l_{i}$, $m_{i}$ for $i\in \{ 1, 2 \}$ denote the filling curves from [[Homotopy and Isotopy on Surfaces#^d60470]], with $[l_{i}]\cdot[m_{i}]=1$. Identify $T_{1}$ and $T_{2}$ along their boundaries via the element $[h]\in\text{Mod}(\partial T_{i})$ (recall [[The Mapping Class Group#^02a14f]]) corresponding to the singular matrix
> $$
> A_{h}=\begin{bmatrix}
> q & s \\
> p & r
> \end{bmatrix}=\begin{bmatrix}
> [h(m_{1})]\cdot[-l_{2}] & [h(l_{1})]\cdot[-l_{2}] \\
> [h(m_{1})]\cdot[m_{2}] & [h(l_{1})]\cdot[m_{2}]
> \end{bmatrix}.
> $$
> The $3$-manifold so constructed is called a **lens space**. It is denoted by $L(p, q)$. 

^0dc48d

> [!Remark]
> We need to justify the notation $L(p, q)$ - why does the space not depend on $r$ and $s$? Any lens space which sends $m_{1}$ to $pm_{2}+ql_{2}$ must be obtained by identifying via $h\in\text{Mod}(T_{i})$ with
> $$
> A_{h}=\begin{bmatrix}
> p &  r+kp\\
> q & s+kq
> \end{bmatrix}= \begin{bmatrix}
> p & r \\
> q & s
> \end{bmatrix}\begin{bmatrix}
> 1 & k \\
> 0 & 1
> \end{bmatrix}.
> $$
> Since Dehn twists can be extended to homeomorphisms of the solid torus, all these spaces are isomorphic. 
> 
> #td add some more deets here

> [!Example]
> $L(7, 1)$ and $L(7, 2)$ have the same homotopy type ([[Deformation Retracts and Homotopy Type#^7765cb|and thus]] the same fundamental group and homology #cn ) but are not homeomorphic (and thus also not Haken :( ). #td look this up, too.

## The Virtual Haken Conjecture

#td Check this out!!! @agolVirtualHakenConjecture2013 shows that if $M$ is an irreducible $3$-manifold, then $M$ is finitely covered by $\mathbb{S}^{3}$ or by a Haken manifold.
