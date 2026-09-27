---
id: "556"
date: 2026-09-09
time: 11:52
tags:
  - GGT
  - Lecture
desc: Length spaces, geodesics, and closed local geodesics
---
Ref: Bridson-Haefligh, Part 1 ch 3


> [!Proposition]
> Let $(X, d)$ be a metric space, and let $\overline{d}:X\times X\to[0, \infty]$ be the map which assigns to each pair of points $x, y\in X$ the infimum of the lengths of rectifiable curves which join them (if no such curve exists then $\overline{d}(x, y)=0$). 
> 1. $\overline{d}$ is a metric. 
> 2. $\overline{d}(x, y)\geqslant d(x, y)$ for all $x, y\in X$, i.e., the topology induced by $\overline{d}$ is finer than the topology induced by $d$. 
> 3. If $c:[a, b]\to X$ is continuous with respect to the topology induced by $\overline{d}$, then it is continuous with respect to the topology induced by $d$. 
> 4. If a map $c:[a, b]\to X$ is a rectifiable curve in $(X, d)$, then it is a continuous and rectifiable curve in $(X, \overline{d})$. 
> 5. The length of a curve $c:[a, b]\to X$ in $(X, \overline{d})$ is the same as its length in $(X, d)$. 
> 6. $\overline{\overline{d}}=\overline{d}$. 

^ed6c2f


> [!Definition] Length metric and length space
> Let $(X, d)$ be a metric space. The map $\overline{d}$ from [[#^ed6c2f]] is called the **length metric** associated to $d$, and $(X, \overline{d})$ is called the **length space** associated to $(X, d)$. Note that $d=\overline{d}$ iff $(X, d)$ is a length space. 


The topologies induced by $d$ and $\overline{d}$ may be different. For example, the graph of a nonrectifiable curve in $I\times I$ is compact in the topology induced by $d$, but noncompact in the topology induced by $\overline{d}$. 


> [!Theorem]
> Let $X$ be a length metric space. Suppose that $X$ is complete (as a metric space) and locally compact. Then
> 1. Every closed bounded subset in $X$ is compact. 
> 2. $X$ is a geodesic space. 

Proof uses [[#^4414ec]]. For example, $\mathbb{R}^{2}\setminus \{ 0 \}$ with $\lVert \cdot \rVert$ is not complete; it is also not a geodesic metric space. $\mathbb{R}^{2}\setminus \{ 0 \}\cong S^{1}\times \mathbb{R}$, however, satisfies the hypotheses. 

> [!Corollary]
> A length space is proper iff it is complete and locally compact. 

Thus, a proper length space is geodesic. 



> [!Lemma] Arzela-Ascoli
> If $X$ is a compact metric space and $Y$ is a separable metric space, then every sequence of equicontinuous maps $f_{n}:Y\to X$ has a subsequence that converges (uniformly on compact subsets) to a continuous map $f:Y\to X$. 

^4414ec

> [!Corollary]
> If $X$ is a compact metric space and if $\{ \sigma_{n}:I\to X \}$ is a sequence of linearly reparameterized geodesics then there exists a linearly reparameterized geodesic $\sigma:I\to X$ and a subsequence $\{ \sigma_{n_{k}} \}$ such that $\{ \sigma_{n_{k}} \}\to\sigma$ uniformly. 

^3f63a7

A variation of [[#^3f63a7]]:

> [!Proposition]
> Let $X$ be a proper geodesic metric space. Let $x, y\in X$, and suppose that there is a unique geodesic segment joining $x$ to $y$ in $X$; let $c[0, 1]\to X$ be a linear parameterization of this segment. Let $c_{n}:[0, 1]\to X$ be linearly reparameterized geodesics in $X$, and suppose $c_{n}(0)\to x$ and $c_{n}(1)\to y$. Then, $c_{n}\to c$ uniformly. 


> [!Definition]
> Let $X$ be a uniquely geodesic space. Let $c(x, y)$ denote the linear reparameterization $[0, 1]\to X$ of the geodesic segment joining $x$ to $y$. Geodesics in $X$ are said to **vary continuously with their endpoints** if $c(x_{n}, y_{n})\to c(x, y)$ uniformly whenever $x_{n}\to x$ and $y_{n}\to y$. 

> [!Corollary]
> If a proper metric space $X$ is uniquely geodesic, then geodesics in $X$ vary continuously with their endpoints. 

---


> [!Theorem]
> Suppose $X$ is a compact geodesic metric space which is semi-locally simply connected. Then every loop $S^{1}\to X$ is either null-homotopic or homotopic to a closed local geodesic. 


Proof uses [[LEC CAL1 8#^1e576d|Lebesgue number lemma]].