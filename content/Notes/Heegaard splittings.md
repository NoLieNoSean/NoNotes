---
id: "498"
date: 2026-07-08
time: 04:09
tags:
---
A handle decomposition of a $3$-manifold is a particular way to build the $3$-manifold. Handle decompositions exist for manifolds of any dimension. 

> [!Definition] k-handle
> In the $3$-dimensional setting, a $k$-handle is a $3$-ball, thought of as $[0, 1]^{3}$, that is attached to some preexisting manifold along $[0, 1]^{3-k}\times \partial[0, 1]^{k}$. 


![[PRE Lens spaces and Heegaard splittings 2026-07-10 06.31.52.excalidraw.light.png|800]]


> [!Definition] Handle Decomposition
> A **handle decomposition** of a $3$-manifold $M$ is a sequence of $0$-handles, $1$-handles, $2$-handles, and $3$-handles whose union is $M$. 

Morse function theory grants us the following: $3$-manifolds (in fact, for for manifolds of all dimensions) admit handle decompositions (and) in which all $0$-handles are attached before all $1$-handles, all $1$-handles are attaches before all $2$-handles, all $2$-handles are attached before all $3$-handles, and so on. 

> [!Definition] Core and Cocore of a k-handle
> The **core** of a $3$-dimensional $k$-handle is $\left\{  \frac{1}{2}  \right\}^{3-k}\times[0, 1]^{k}$. The **cocore** is $[0, 1]^{3-k}\times \left\{  \frac{1}{2}  \right\}^{k}$. 

Given a handle decomposition of the $3$-manifold $M$, we can 'reverse the procedure' to obtain the dual handle decomposition: we attach what were formerly $3$-handles first, but they are now attached to nothing and are hence $0$-handles. We then attach what were formerly $2$-handles, but these are now attached along two disks and hence are $1$-handles. The core of a $k$-handle in the original handle decomposition is the cocore of the corresponding $(3-k)$-handle when we reverse the procedure. 

> [!Definition] Handlebody
> A **handlebody** is a compact connected orientable $3$-manifold with boundary that possesses a handle decomposition consisting of $0$-handles and $1$-handles. The **genus** of the **handlebody** is the genus of its boundary. 

> [!Definition] Meridian Disk
> A collection of **meridian disks** for a handlebody is a collection of disks that cut the handlebody into $3$-balls. 

Every handlebody has a collection of meridian disks: start with a handle decomposition consisting of only $0$-handles and $1$-handles and take the set of cocores of the $1$-handles in this handle decomposition. 

> [!Definition] Heegaard splitting
> A **Heegaard splitting** of a closed $3$-manifold $M$ is a decomposition $M=V\cup_{S}W$ such that $V, W$ are handlebodies and $S=\partial V=\partial W$. Here $S$ is called the **splitting surface** of $M=V\cup_{S}W$. Two Heegaard splittings are considered **equivalent** if their splitting surfaces are isotopic. The **genus** of a Heegaard splitting is the genus of $S$. 

^4fb38e

[[Haken Manifolds#^0dc48d|Lens spaces]] are our first examples of handle decompositions. 

> [!Example] Handle decomposition of $\mathbb{S}^{3}$
> 
> ![[PRE Lens spaces and Heegaard splittings 2026-07-10 06.44.38.excalidraw.light.png|800]]
> 


> [!Example]
> We can describe a Heegaard splitting of the $3$-torus as follows: we think of the $3$-torus as a quotient space obtained by identifying opposite sides of a cube. Denote a regular neighborhood of the $1$-skeleton of the cube by $V$ and denote the closure of its complement by $W$. Then both $V$ and $W$ are handlebodies. The two handlebodies meet in the surface $S$ of genus $3$.
> 
> ![[-20260710023245920.jpg|300]]
> 
> ![[Screenshot 2026-07-10 at 02.37.14.png|300]]

> [!Theorem] Moise, @schultensIntroduction3manifolds2014 6.1.12
> Every [[Topological manifolds#^5cf87b|closed]] orientable $3$-manifold admits a [[#^4fb38e|Heegaard splitting]]. 

