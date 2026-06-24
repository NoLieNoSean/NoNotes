---
id: "421"
date: 2026-02-21
time: 17:41
tags:
  - TOP
---
# The Urysohn Lemma

The following theorem expresses the most important property of normal spaces. Informally, it says that "closed subsets of a normal space can be separated by continuous functions". 

> [!Theorem] Urysohn lemma
> Let $X$ be a normal space, let $A$ and $B$ be disjoint closed subsets of $X$. Let $[a, b]$ be a closed interval in the real line. Then there exists a continuous map
> $$
> f:X\to[a, b]
> $$
> such that $f(x)=a$ for every $x\in A$, and $f(x)=b$ for every $x\in B$. 
> 
> %%
> > [!Proof]-
> > 
> > $x\in \overline{U}_{r}\implies f(x)\leqslant r$.
> > $x\not\in U_{r}\implies f(x)\geqslant r$.  
> 
> %%

> [!Definition]
> If $A$ and $B$ are two subsets of the topological space $X$, and if there is a continuous function $f:X\to[0, 1]$ such that $f(A)=\{ 0 \}$ and $f(B)=\{ 1 \}$, we say that $A$ and $B$ can be **separated by a continuous function**. 

> [!Definition] Complete regularity
> A space $X$ is **completely regular** if one-point sets are closed in $X$ and if for each point $x_{0}$ and each closed set $A$ not containing $x_{0}$, there is a continuous function $f:X\to[0, 1]$ such that $f(x_{0})=1$ and $f(A)=\{ 0 \}$. 

^994616

> [!Proposition]
> A subspace of a completely regular space is completely regular. A product of completely regular spaces is completely regular. 

^da93d4


---

# Urysohn metrization theorem

> [!Theorem] Urysohn
> Every second countable $T_{3}$ topological space is metrizable (In particular, can be imbedded in $\mathbb{R}^{\omega}$ with the product topology). 

> [!Proposition]
> Let $X$ be a space in which one-point sets are closed. Suppose that set $\{ f_{\alpha} \}_{\alpha\in J}$ is an indexed family of continuous functions $f_{\alpha}:X\to \mathbb{R}$ satisfying the requirement that for each point $x_{0}$ of $X$ and each neighborhood $U$ of $x_{0}$, there is an index $\alpha$ such that $f_{\alpha}$ is positive at $x_{0}$ and vanishes outside $U$. Then the function $F:X\to \mathbb{R}^{J}$ defined by
> $$
> F(x)=(f_{\alpha}(x))_{\alpha\in J}
> $$
> is an imbedding of $X$ in $\mathbb{R}^{J}$. If $f_{\alpha}$ maps $X$ into $[0, 1]$ for each $\alpha$, then $F$ imbeds $X$ in $[0, 1]^{J}$. 

^3206b8

> [!Proposition]
> A space $X$ is completely regular iff it is homeomorphic to a subspace of $[0, 1]^{J}$ for some $J$. 
> 
> > [!Proof]-
> > 
> > $(\implies)$ For every pair $(x, U)$, where $x\in X$ and $U$ is an open neighborhood of $x$, let $f_{(x, U)}$ be the function which is $1$ on $x$ and zero on $\overline{U}$. Use [[Urysohn Lemma and Applications#^3206b8]] with the collection $\{ f_{(x, U)} \}$. 
> > 
> > $(\impliedby)$ Follows immediately from [[Urysohn Lemma and Applications#^da93d4]]. 

^72b42d

---

# The Tietze Extension Theorem

> [!Theorem] Tietze
> Let $X$ be a normal space. Let $A$ be a closed subspace of $X$. 
> 1. Any continuous map of $A$ into the closed interval $[a, b]$ of $\mathbb{R}$ may be extended to a continuous map of all of $X$ into $[a, b]$. 
> 2. Any continuous map of $A$ into $\mathbb{R}$ may be extended to a continuous map of all of $X$ into $\mathbb{R}$. 

---

# Imbeddings of Manifolds

We have shown that every second countable regular space can be imbedded in the infinite dimensional euclidean space $\mathbb{R}^{\omega}$. We will now show that for compact manifolds, an imbedding into finite dimensional euclidean space $\mathbb{R}^{N}$ can be achieved. 

> [!Definition] $m$-manifold, @munkresTopology2000 §36
> An $m$-manifold is a second countable Hausdorff space $X$ such that each point $x$ of $X$ has a neighborhood that is homeomorphic with an open subset of $\mathbb{R}^{m}$. 

^6bc1cb

> [!Definition]
> If $\varphi:X\to \mathbb{R}$, then the **support** of $\varphi$ is defined to be the closure of the set $\varphi ^{-1}(\mathbb{R}\setminus \{ 0 \})$. Thus, if $x$ lies outside of the support of $\varphi$, there is some neighborhood of $x$ on which $\varphi$ vanishes. 

> [!Definition]
> Let $\{ U_{1}, \dots, U_{n} \}$ be a finite indexed open covering of the space $X$. An indexed family of continuous functions
> $$
> \varphi_{i}:X\to[0, 1]\quad \text{for }i=1, \dots, n,
> $$
> is said to be a **partition of unity** dominated by $\{ U_{i} \}$ if
> 1. $\text{supp}(\varphi_{i})\subseteq U_{i}$ for each $i$. 
> 2. $\sum_{i=1}^{n}\varphi_{i}(x)=1$ for each $x$. 

> [!Proposition]
> Let $\{ U_{1}, \dots, U_{n} \}$ be a finite open covering of the normal space $X$. Then there exists a partition of unity dominated by $\{ U_{i} \}$. 

> [!Theorem]
> If $X$ is a compact $m$-manifold, then $X$ can be imbedded in $\mathbb{R}^{N}$ for some positive integer $N$. 

^e4f9b0

The preceding theorem is true without the compactness hypothesis. See @leeIntroductionTopologicalManifolds2011 p. 116 for an outline; see the exercises of @munkresTopology2000 §50 for details.


