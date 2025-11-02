---
id: "336"
date: 2025-10-29
time: 11:24
tags:
  - ALGO
---
# Problem 2

> [!Exercise]
> Describe and algorithm to find the size of the largest subset of segments in $S$ such that every pair crosses.

Let $P$ be the set of points and $S$ be the set of edges. Represent edges by objects with properties $\text{left}$, $\text{right}$, and $\text{id}$, where $e.\text{left}, e.\text{right}\in P$, $e.\text{left}< e.\text{right}$, and $e.\text{id}\in[1..m]$ for all edges $e\in S$. 

Let $E[1..n-1]$ be a 2d array such that $E[i]$ is an array containing all edges $e$ such that $e.\text{left}=i$ sorted in decreasing order of the property $\text{right}$. Assign $e.\text{id}$ to be the index of $e$ in $\text{flatten}(E)$ for all $e\in S$. 

Let $N[1..n-1]$ be an array such that $N[i]$ is the number of edges $e$ satisfying $e.\text{left}\leqslant i$.   

Let $F[2..n]$ be a 2d array such that $F[i]$ is an array containing all edges $e$ such that $e.\text{right}=i$ sorted in decreasing order of the property $\text{left}$. 

$$
\begin{align}
 & \text{MaximumClique}(N, F): \\
 &\quad  ans\gets 0\\
 &  \quad \text{for }i\text{ in }[1..n-1]: \\
 & \quad \quad ans=\text{max}(ans, \text{LIS}(\text{map}(e\to e.\text{id}, \text{filter}(e\to e.\text{id}\leqslant N[i], \text{flatten}(F[i+1..n])))) )\\
 & \quad \text{return }ans
\end{align}
$$

**Complexity**

The preprocessing requires $O(m\log m)$ time. $\text{MaximumClique}(N, F)$ runs in $O(mn\log m)$ time.