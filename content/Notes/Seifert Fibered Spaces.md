---
id: "489"
date: 2026-07-03
time: 15:06
tags:
---
Seifert fibered spaces constitute an important class of $3$-manifolds. Not all of them are [[Haken Manifolds#^a0711b|Haken]], but many are. 

> [!Definition] Fibered Solid Torus
> The **fibered solid torus** of type $(l, m)$, where $l$ and $m$ are coprime, is a solid torus partitioned into circles obtained as follows: Consider the cylinder $\mathbb{D}^{2}\times[-1, 1]$. It is partitioned into intervals of the form $\{ \text{point} \}\times[-1, 1]$. Identify $\mathbb{D}^{2}\times \{ -1 \}$ to $\mathbb{D}^{2}\times \{ 1 \}$ by settings $(re^{ i {2}\pi\theta }, 1)$ equal to $\left( re^{ i 2 \pi \left( \theta + \frac{m}{l} \right) } , -1\right)$, for $m\in \mathbb{N}\cup \{ 0 \}$ and $l\in \mathbb{N}$. A circle formed by intervals of the form $\{ \text{point} \}\times[-1, 1]$ is called a **fiber** of the fibered solid torus. 

^ef5d7d

> [!Definition]
> 1. A **fiber-preserving homeomorphism** between fibered solid tori $T_{1}$ and $T_{2}$ is a homeomorphism $h:T_{1}\to T_{2}$ that takes fibers to fibers. 
> 2. The **core** of a fibered solid torus is the fiber obtained from $\{ 0 \}\times I$. 
> 3. If $l> 1$, we call the fibered solid torus $T$ of type $(l, m)$ an **exceptionally fibered** solid torus. In this case the core of $T$ is called an **exceptional fiber** and all other fibers of $T$ are called **regular fibers**. 
> 4. If $l=1$, then we call a fibered solid torus $T$ of type $(l, m)$ a **regularly fibered** solid torus. In this case all the fibers of $T$ are called **regular fibers**. 

We may assume $0\leqslant m\leqslant l/2$ in [[#^ef5d7d]] - indeed, any fibered solid torus is homeomorphic via a fiber preserving homeomorphism to a fibered solid torus of type $(l, m)$ with $l$ and $m$ satisfying this constraint. With this assumption, the existence of a fiber-preserving homeomorphism between a fibered solid torus of type $(l_{1}, m_{1})$ and a fibered solid torus of type $(l_{2}, m_{2})$ necessitates $l_{1}=l_{2}$ and $m_{1}=m_{2}$. 

<iframe src="https://www.desmos.com/3d/shxuuabhve" width="100%" height= "500px"></iframe>  

> [!Definition] Fibered neighborhood
> A **fibered neighborhood** of a simple closed curve $f$ in a $3$-manifold $M$ is
> 1. a closed [[Topological manifolds#^a8b826|regular neighborhood]] homeomorphic of a fibered solid torus via a fiber preserving homeomorphism when $f$ is in the interior of $M$, or
> 2. a closed regular neighborhood homeomorphic to a product $(\text{half-disk})\times \mathbb{S}^{1}$ partitioned in fibers $\{ \text{point} \}\times \mathbb{S}^{1}$ when $f\subseteq \partial M$. 

> [!Definition] Seifert fibered space
> An orientable $3$-manifold $M$ is a **Seifert fibered space** if $M$ is the union of pairwise disjoint simple closed curves called **fibers** such that each fiber in $M$ has a closed regular neighborhood that is a fibered neighborhood. The description of $M$ in terms of fibers is called the **Seifert fibration** of $M$. 

> [!Example]
> Any $\mathbb{S}^{1}$-[[Fiber bundles#^a3d022|bundle]] over a surface is a Seifert fibered space can be endowed with a regular Seifert fibration, weather or not the bundle is trivial. 