---
id: "329"
date: 2025-10-24
time: 15:03
tags:
---
# Connected spaces

Let $X$ be a topological space. Recall [[LEC ANA1 22#^d3e14f]] and [[LEC ANA1 22#^b8ca19]]. 

> [!Proposition]
> $X$ is connected iff every continuous function $f:X\to \{ \pm 1 \}$, where $\{ \pm 1 \}$ has the discrete topology, is constant.
> 
> > [!Proof]-
> > Define $A=f^{-1}(1)$, $B=f^{-1}(-1)$. Clearly, $A\cap B=\emptyset$, $A\cup B=X$, and $A$ and $B$ are open. Thus, if $f$ is not constant, $X$ is not connected. If $X$ is not connected, you can define $f$ to map the separation of $X$ to $-1$ and $+1$. 
> 

^440651

> [!Lemma]
> A set $J\subseteq \mathbb{R}$ is connected iff $J$ is an interval.

[!Example]
- $GL(2, \mathbb{R})$ is not collected; Trivial by [[LEC ANA1 22#^26ad1a]]. 
- $O(2, \mathbb{R})=\{ A\in GL(2, \mathbb{R}):AA^{T}=\text{id} \}$ is not connected.


[!Proposition]
Let $A, B\subseteq X$ be connected. If $A\cap B\ne \emptyset$, then $A\cup B$ is connected. 

[!Proof]-
Use [[#^440651]].


[!Proposition]
If $X$ and $Y$ are connected, $X\times Y$ is connected.

[!Proof]-

Pick some continuous $f:X\times Y\to \{ \pm 1 \}$. For every $y\in Y$, define
$$
i_{y}:X\to X\times Y, x\mapsto(x, y)
$$
and for every $x\in X$, define
$$
j_{x}:Y\to X\times Y, y\mapsto(x, y).
$$
These are continuous families. Thus, the maps $f\circ i_{y}$ and $f\circ i_{x}$ are constant.

Fix $(x_{0}, y_{0})\in X\times Y$. Then


[!Proposition]
Let $X$ be connected. $f:X\to \mathbb{R}$ be locally constant(implies continuous), that is, every $x\in X$ has an open neighborhood in $X$ on which $f$ is constant. Then, $f$ is constant.

[!Proof]-
Show that $V_{x_{0}}:=\{ x\in X:f(x)=f(x_{0}) \}$ is clopen.

[!Corollary]
Let $U\subseteq \mathbb{R}^{n}$ be open and connected. $f:U\to R$ be differentiable. If $\mathbf{D}f(p)=0$ for all $p\in U$, then $f$ is continuous.