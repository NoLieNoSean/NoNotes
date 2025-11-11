---
id: "329"
date: 2025-10-24
time: 15:03
tags:
  - ANA2
  - Lecture
  - Processed
---
# Connected spaces

Let $X$ be a topological space. Recall [[LEC ANA1 22#^d3e14f]] and [[LEC ANA1 22#^b8ca19]]. 

> [!Proposition]
> $X$ is connected iff every continuous function $f:X\to \{ \pm 1 \}$, where $\{ \pm 1 \}$ has the discrete topology, is constant.
> 
> > [!Proof]-
> > Define $A=f^{-1}(1)$, $B=f^{-1}(-1)$. Clearly, $A\cap B=\emptyset$, $A\cup B=X$, and $A$ and $B$ are open. Thus, if $f$ is not constant, $X$ is not connected. If $X$ is not connected, you can define $f$ to map a separation $A\sqcup B$ of $X$ to $-1$ and $+1$ respectively.
> 

^440651

> [!Corollary]
> Let $A, B\subseteq X$ be connected. If $A\cap B\ne \emptyset$, then $A\cup B$ is connected. 

Reviewed [[LEC ANA1 22#^f5f9b2]], [[LEC ANA1 22#^26ad1a]], [[LEC ANA1 22#^30e172]]. 

> [!Example]
> - $GL(2, \mathbb{R})$ is not collected; consider the determinant map in [[LEC ANA1 22#^26ad1a]]. 
> - $O(2, \mathbb{R})=\{ A\in GL(2, \mathbb{R}):AA^{T}=\text{id} \}$ is not connected.


> [!Proposition]
> If $X$ and $Y$ are connected, $X\times Y$ is connected.
> 
> > [!Proof]-
> > 
> > Pick some continuous $f:X\times Y\to \{ \pm 1 \}$. For every $y\in Y$, define
> > $$
> > i_{y}:X\to X\times Y, x\mapsto(x, y)
> > $$
> > and for every $x\in X$, define
> > $$
> > j_{x}:Y\to X\times Y, y\mapsto(x, y).
> > $$
> > These are continuous families. By [[#^440651]], the maps $f\circ i_{y}$ and $f\circ i_{x}$ are constant.
> > 
> > Fix $(x_{0}, y_{0})\in X\times Y$. Then, for $(x, y)\in X\times Y$, 
> > $$
> > \begin{align}
> > f(x, y)=(f\circ i_{y})(x)=(f\circ i_{y})(x_{0})=f(x_{0}, y)=(f\circ j_{x_{0}})(y)=(f\circ j_{x_{0}})(y_{0})=f(x_{0}, y_{0}).
> > \end{align}
> > $$
> > Thus, $f$ is constant, and $X\times Y$ is connected.
> 

> [!Proposition]
> Let $X$ be connected. $f:X\to \mathbb{R}$ be locally constant, that is, every $x\in X$ has an open neighborhood in $X$ on which $f$ is constant[^1]. Then, $f$ is constant.
> 
> > [!Proof]-
> > 
> > Fix $x_{0}\in X$. Define $V_{x_{0}}:=\{ x\in X:f(x)=f(x_{0}) \}$. Clearly, $V_{x_{0}}$ and $V_{x_{0}}^{c}$ are open, that is, $V_{x_{0}}$ is clopen. Since $X$ is connected and $V_{x_{0}}$ is nonempty, $V_{x_{0}}=X$. 
> 

^aed63c

Saw [[LEC CAL1 18#^f0f6d5]] as a corollary of [[#^aed63c]]. 

[^1]: Note that this implies $f$ is continuous.
