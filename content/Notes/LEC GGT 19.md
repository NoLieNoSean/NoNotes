---
id: "596"
date: 2026-10-21
time: 11:56
tags:
  - Lecture
  - GGT
desc: End spaces
---
Let $X$ be a topological space. We say that a ray $r:[0, \infty)\to X$ is proper if the map $r$ is proper. 

Let $\mathcal{P}$ denote the set of proper rays of $X$. For $r_{1}, r_{2}\in \mathcal{P}$, we say that $r_{1}$ and $r_{2}$ **converge to the same end** if for every compact subset $K\subseteq X$, there exists $\tau> 0$ such that $r_{1}|_{[\tau, \infty)}$ and $t_{2}|_{[r, \infty)}$ are in the same path component of $X\setminus K$. 

If $r_{1}$ and $r_{2}$ converge to the same end, we write $r_{1} \sim r_{2}$. The equivalence class of $r\in \mathcal{P}$ is denoted as $\text{end}(r)$. 

Let $\{ r_{n} \}\subseteq \mathcal{P}$ be a sequence of proper rays in $X$. Say that $\text{end}(r_{n})\to\text{end}(r)$, $r\in \mathcal{P}$ if for every compact subset $K\subseteq X$ there exists $N\in \mathbb{N}$ and a sequence of positive reals $\{ T_{n} \}_{n\geqslant \mathbb{N}}$ such that for all $n\geqslant N$, $r_{n}|_{[T_{n}, \infty)}$ and $r|_{[T_{n}, \infty)}$ are in the same path component of $X\setminus K$. 

Topologize $\text{end}(X)$ by prescribing closed sets in the natural manner. 

[!Definition]
Let $X$ be a metric space, $x, y\in X$. We say that $x$ and $y$ can be connected via a $k$-path in $X$ if there exists a finite sequence of points $x=a_{0},\dots, a_{n}=y$ such that $d(a_{i}, a_{i+1})\leqslant k$. 

[!Lemma]
Let $X$ be a proper geodesic space, $x_{0}\in X$. Let $r_{1}, r_{2}$ be proper rays in $X$, $k> 0$. Then, $\text{end}(r_{1})=\text{end}(r_{2})$ iff for every $R> 0$, there exists $T> 0$ such that for all $t> T$, $r_{1}(t)$ and $r_{2}(t)$ can be connected by a $k$-path in $X\setminus B_{x_{0}}(R)$. 

[!Lemma]
Suppose that $G_{x_{0}}(X)$ is the set of all geodesic rays $r:[0, \infty)\to X$ with $r(0)=x_{0}$. Then the map $\varphi:G_{x_{0}}(X)\to\text{end}(X)$ defined by $\varphi(r)=\text{end}(r)$ is surjective. 

[!Lemma]
Let $X$ be a proper