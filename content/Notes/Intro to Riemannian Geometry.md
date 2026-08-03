---
id: "500"
date: 2026-07-15
time: 16:54
tags:
---
A [[Differentiable manifolds#^183f6b|smooth manifold]] lacks geometric notions such as distance between points, angles between vectors, path lengths, volumes, etc. These can be recovered by introducing additional structure via the **metric tensor**. 

> [!Definition] Metric tensor, @martelliIntroductionGeometricTopology2025 1.2.1
> A **metric tensor** for a [[Differentiable manifolds#^183f6b|smooth manifold]] $M$ is the datum of a [[LEC ALG1 23#^00968f|symmetric]] [[LEC ALG1 23#^5b93ce|scalar product]] $g$ on each [[Differentiable manifolds#^995b96|tangent space]] $T_{p}M$ of $M$, which varies smoothly on $p$, i.e., for each chart $\varphi:U\to V$ and $p\in U$, the entries of the [[LEC ALG1 23#The Matrix of a Bilinear Form|matrix]] of $g$ in the coordinates induced[^1] on $T_{p}M$ by $\varphi$ vary smoothly with $p$. 

^2e7093

[^1]: [[Differentiable manifolds#^59fc8b|Recall]] that given a chart $\varphi:U\to \mathbb{R}^{n}$, we get induced vector space isomorphisms $T_{p}M\cong \mathbb{R}^{n}$ for each $p\in U$. 

> [!Definition] Riemannian manifold
> A **Riemannian manifold** $(M, g)$ is a [[Differentiable manifolds#^183f6b|smooth manifold]] $M$ with a [[#^2e7093|metric tensor]] $g$ that is [[LEC ALG1 23#^922e66|positive definite]] at every point. 

^a44f2d

The metric tensor on a Riemannian manifold is a positive definite symmetric bilinear form - an [[LEC ALG1 21#^dd5bbe|inner product]]. Thus, the metric tensor defines a [[LEC ALG1 21#^2ffc13|norm]] for every tangent vector, and an angle between tangent vectors with the same base point by $\langle a, b \rangle/(\lVert a \rVert\lVert b \rVert)$. 

> [!Definition] Velocity
> Let $M$ be a smooth manifold. If $\gamma:I\to M$ is a curve, its **velocity** $\gamma'(t)$ for $t\in I$ is the [[Differentiable manifolds#^995b96|tangent vector]] $\gamma'(t):=d\gamma_{t}(1)$. 

^8ee3cb

> [!Definition] Attributes of curves in Riemannian manifolds
> 1. In a [[#^a44f2d|Riemannian manifold]], the [[#^8ee3cb|velocity]] $\gamma'(t)$ of a curve $\gamma:I\to M$ at a time $t\in I$ has a norm $\lVert \gamma'(t) \rVert\geqslant 0$, called **speed**, and two curves that meet at a point with non-zero velocities form a well-defined angle. 
> 2. The **length** of $\gamma$ is defined as
> $$
> \begin{align}
> L(\gamma):=\int_{0}^{1} \lVert \gamma'(t) \rVert  \, dt 
> \end{align}
> $$
> 	 and is finite if $\gamma$ is $C^{1}$ (analogous to [[LEC ANA1 29#^f26daa]]) #nv . The length is invariant under reparameterization. 


[!Definition] Geodesic
1. A **geodesic** is a curve $\gamma:I\to M$ with constant speed $k$ that realizes locally the distance: every $t\in I$ has a closed neighborhood $[t_{0}, t_{1}]\in I$ with $d(\gamma(t_{0}), \gamma(t_{1}))=L(\gamma|_{[t_{0}, t_{1}]})=k(t_{1}-t_{0})$. 
2. A geodesic $\gamma:I\to M$ is **maximal** if it cannot be extended to a geodesic on a strictly larger interval $J\supseteq I$. 

[!Theorem]
Let $p\in M$ be a point and $v\in T_{p}M$ a tangent vector. There exists a unique maximal geodesic $\gamma:I\to M$ 


