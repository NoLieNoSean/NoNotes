---
id: "497"
date: 2026-07-07
time: 22:29
tags:
---
> [!Definition] Hierarchy, @schultensIntroduction3manifolds2014 3.6.1
> Let $M$ be a compact $3$-manifold. A **hierarchy** for $M$ is a finite sequence of pairs $(M_{1}, F_{1}), \dots, (M_{n}, F_{n})$ such that
> 1. $F_{i}$ is a $2$-sided [[Incompressible surfaces#^adf688|incompressible]] and [[Incompressible surfaces#^f6ac5c|boundary-incompressible]] surface in $M$;
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

> [!Theorem] @schultensIntroduction3manifolds2014 3.6.2
> A compact orientable irreducible $3$-manifold $M$ is [[Incompressible surfaces#^a0711b|Haken]] iff $M$ has a [[#^e6f33a|hierarchy]]. 

^b2cee6

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

A key result on Haken manifolds is the following:

> [!Theorem] Waldhausen, @schultensIntroduction3manifolds2014 3.6.8
> [[Deformation Retracts and Homotopy Type#^1d6da4|Homotopy equivalent]] closed Haken manifolds are homeomorphic. 

#td Check this out!!! @agolVirtualHakenConjecture2013 shows that if $M$ is an irreducible $3$-manifold, then $M$ is finitely covered by $\mathbb{S}^{3}$ or by a Haken manifold.

Of course, this does not hold for $3$-manifolds in general.

> [!Definition] Lens space
> Let $T_{1}$, $T_{2}$ be solid tori. Let $m_{i}$, $l_{i}$ for $i\in \{ 1, 2 \}$ denote the filling curves from [[Homotopy and Isotopy on Surfaces#^d60470]]. Identify $T_{1}$ and $T_{2}$ along their boundaries via the element $[h]\in\text{Mod}(\partial T_{i})$ (recall [[The Mapping Class Group#^02a14f]]) corresponding to the singular matrix
> $$
> A_{h}=\begin{bmatrix}
> p & r \\
> q & s
> \end{bmatrix}.
> $$
> 
> The $3$-manifold so constructed is called a **lens space**. It is denoted by $L(p, q)$ [^1]. 

^0dc48d



> [!Remark]
> Why is the lens space completely determined by $p$ and $q$?

$L(7, 1)$ and $L(7, 2)$ have the same homotopy type ([[Deformation Retracts and Homotopy Type#^7765cb|and thus]] the same fundamental group and homology #cn ) but are not homeomorphic. #td look this up, too.
