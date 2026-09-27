---
id: "563"
date: 2026-09-11
time: 11:29
tags:
  - Lecture
  - GGT
desc: Pulling a length metric back to a covering space
---
# Length metrics on covering spaces

> [!Definition]
> 
> Let $X$ be a length space and let $\tilde{X}$ be Hausdorff space. Let $p: \tilde{X}\to X$ be a continuous map that is a local homeomorphism[^1]. Given a path $c:[0, 1]\to \tilde{X}$, define its length $l(c)$ to be the length of the curve $p\circ c$ in $X$. Define a pseudometric on $\tilde{X}$ by setting $\tilde{d}(\tilde{x}, \tilde{y})$ equal to the infimum of the length of paths in $\tilde{X}$ joining them. 
> 
> $\tilde{d}$ is a metric, and is called the **metric induced on $\tilde{X}$ by $p$**. 

[^1]: Not quite the same as a covering map, since surjectivity is not required. The book calls these étale maps.

> [!Proposition]
> Let $X$ be a length space, and $\tilde{X}$ be a Hausdorff space. Let $p: \tilde{X}\to X$ be a local homeomorphism. Let $\tilde{d}$ be the metric induced on $\tilde{X}$ by $p$. 
> 1. $p:(\tilde{X}, \tilde{d})\to(X, d)$ is a local isometry. 
> 2. $\tilde{d}$ is a length metric. 
> 3. $\tilde{d}$ is the unique metric on $\tilde{X}$ that satisfies (1) and (2). 

> [!Definition]
> A metric space $X$ is said to be **locally uniquely geodesic** if for each $x\in X$ there is an $r> 0$ such that every pair of points $y, z\in B(x, r)$ can be joined by a unique geodesic in $X$ and this geodesic lies in $B(x, r)$. 

> [!Proposition]
> Let $p: \tilde{X}\to X$ be a map of length spaces such that
> 1. $X$ is connected, 
> 2. $p$ is a local homeomorphism, 
> 3. the length of every path in $\tilde{X}$ is not bigger than the length of its image under $p$, 
> 4. $X$ is locally uniquely geodesic and geodesics in $X$ vary continuously with their endpoints locally, and
> 5. $\tilde{X}$ is complete.
> 
> Then, $p$ is a covering map. 
