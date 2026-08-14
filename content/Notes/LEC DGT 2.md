---
id: "514"
date: 2026-08-08
time: 16:15
tags:
  - Lecture
  - DGT
---
@guilleminDifferentialTopology1974 Ch 1

# Some local definitions

In this course, we think of manifolds as subsets of $\mathbb{R}^{n}$:

> [!Definition] $n$-manifold (yep, again)
> 1. Let $M\subseteq \mathbb{R}^{k}$ and $n$ be a nonnegative integer. We say that $M$ is an **$n$-dimensional manifold** if $M\ne \emptyset$ and for every $p\in M$, there are an open set $\Omega \subseteq \mathbb{R}^{n}$, an $M$-open neighborhood $V\subseteq M$ of $p$, and a [[Smooth and analytic multivariable functions#^861ecb|smooth]] map $\phi :\Omega\to \mathbb{R}^{k}$ such that $\phi(\Omega)=V$, $\phi:\Omega\to V$ is a homeomorphism, and $\phi$ is an [[LEC DGT 1#^3d6ea4|immersion]]. 
> 2. The map $\phi$ is called a local parameterization of $M$ and $\phi ^{-1}:V\to \Omega$ is called a **local coordinate map** or **coordinate system** on $M$. 
> 3. If $X$ and $Z$ are both manifolds in $\mathbb{R}^{N}$ and $Z\subseteq X$, then $Z$ is a **submanifold** of $X$. 

> [!Remark]
> Note that a smooth homeomorphism does not have to be a diffeomorphism - consider the map $\varphi:(-1, 1)\to \mathbb{R}^{2}$ defined by $(t)\mapsto(t^{3}, t^{3})$. However, we will see below that smooth homeomorphisms that are also immersions are diffeomorphisms (also note that the above example is not an immersion!). 

> [!Definition] Smooth maps between arbitrary subsets
> 1. A map $f:X\to \mathbb{R}^{m}$ defined on an arbitrary subset $X\subseteq \mathbb{R}^{n}$ is called **smooth** if it may be locally extended to a smooth map on open sets; that is, if around each point $x\in X$ there is an open set $U\subseteq \mathbb{R}^{n}$ and a smooth map $F:U\to \mathbb{R}^{m}$ such that $F$ equals $f$ on $U\cap X$. 
> 2. A bijection $f:X\to Y$ is called a **diffeomorphism** if both $f$ and $f^{-1}$ are smooth. 

^2da0d5

> [!Remark]
> 1. When $X$ and $Y$ are open, [[#^2da0d5]] agrees with the usual definition. A smooth map between arbitrary subsets is continuous in the relative topologies, because is is locally the restriction of a continuous ambient map. 
> 2. The composition of smooth maps is smooth, and so is the restriction of a smooth map. 

> [!Lemma] Coordinate maps are diffeomorphisms
> Let $\phi:\Omega\to V$ be a local parameterization of $M\subseteq \mathbb{R}^{k}$, where $\Omega \subseteq \mathbb{R}^{n}$ is open and $V\subseteq M$ is $M$-open. Then the coordinate map $\phi ^{-1}:V\to \Omega$ is smooth in the sense of [[#^2da0d5]]. Consequently, $\phi ^{-1}$ is a diffeomorphism. 

> [!Lemma] Transition maps are diffeomorphisms
> Suppose $\phi:\Omega \subseteq \mathbb{R}^{n}\to U$ and $\psi:\Theta:\subseteq \mathbb{R}^{m}\to V$ are local parameterizations of $M\subseteq \mathbb{R}^{k}$ near a point $p\in M$. Then the transition maps $\psi ^{-1}\circ \phi:\phi ^{-1}(U\cap V)\to \psi ^{-1}(U\cap V)$ and $\phi ^{-1}\circ \psi:\psi ^{-1}(U\cap V)\to \phi ^{-1}(U\cap V)$ are smooth.
> 
Incidentally, this also tells us that $n=m$, affirming that the dimension of a manifold at a point does not depend on the choice of local parameterizations and hence is well defined. It follows that if the manifold is path connected, the dimension of the manifold at all points must be the same, making the notion of dimension well defined for the entire manifold.

[!Proposition]
Let $M\subseteq \mathbb{R}^{k}$, let $p\in M$, and let $0\leqslant n\leqslant k$. The following conditions are equivalent.
1. There exist an open set $\Omega \subseteq \mathbb{R}^{n}$ and an $M$-open neighborhood $V\subseteq M$ of $p$, and a smooth immersion $\phi:\Omega\to \mathbb{R}^{k}$ that is a homeomorphism from $\Omega$ onto $V$. 
2. There exist an $M$-open neighborhood $V\subseteq M$ of $p$, an open set $\Omega \subseteq \mathbb{R}^{n}$, and a diffeomorphism $\psi:V\to \Omega$ where smoothness is understood in the sense of [[#^2da0d5]]. 
3. There exist open sets $U$, $A\subseteq \mathbb{R}^{k}$, with $p\in U$, and a diffeomorphism $\Phi:U\to A$ such that $\Phi(U\cap M)=A\cap(\mathbb{R}^{n}\times \{ \mathbf{0} \})$, where $\mathbf{0}\in \mathbb{R}^{k-n}$. 
4. There exist an open neighborhood $\tilde{U}\subseteq \mathbb{R}^{k}$ of $p$ and a smooth map $g: \tilde{U}\to \mathbb{R}^{k-n}$ such that $\tilde{U}\cap M=g^{-1}(0)$ and $Dg_{q}:\mathbb{R}^{k}\to \mathbb{R}^{k-n}$ is surjective for all $q\in \tilde{U}\cap M$. We call $g$ a **local defining function** for $M$. 






