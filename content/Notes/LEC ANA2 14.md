---
id: "337"
date: 2025-10-29
time: 15:15
tags:
  - ANA2
  - Lecture
---
> [!Definition] Path connectedness
> Let $X$ be a metric space. Let $x, y\in X$. A **path** from $x$ to $y$ is a continuous function $\gamma:[0, 1]\to X$ such that $\gamma(0)=x$, $\gamma(1)=y$. If there exists a path between $x$ and $y$, the points are said to be **path connected**. $S\subseteq X$ is called path connected if every pair of points $x, y\in S$ are path connected. 

Path connectedness is a equivalence relation. 

> [!Proposition]
> Path connected $\implies$ connected.

[!Examples]
These are path connected:
1. $\mathbb{R}^{n}\setminus \{ \text{countable set} \}$
2. open balls in NLS

[!Proposition]
Let $X$ be a NLS. If $U\subseteq X$ is open and connected, it is path connected. 

[!Proof]-
Let $x_{0}\in U$. Let $E=\{ x\in U:x, x_{0}\text{ are path connected} \}$. It suffices to prove $E$ is both open and closed. 

Let $x\in E$. Since $U$ is open, there exists an open ball centered at $x$ contained in $U$; since open balls in an NLS are path connected, the open ball also lies in $E$, hence $E$ is connected. It can be similarly shown that $E^{c}$ is open. 

> [!Proposition]
> Let $E$ be connected. Then, any $F$ such that $E\subseteq F\subseteq \overline{E}$ is path connected.

> [!Example]
> Standard example of a connected but not path connected set.


