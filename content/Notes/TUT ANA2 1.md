---
id: "330"
date: 2025-10-24
time: 18:00
tags:
  - ANA2
  - Tutorial
---
# Applications of [[LEC ANA2 10#^90f996]]

> [!Corollary]
> Let $X$ be a Banach space. If a sequence of bounded operators $(T_{n})$ converges pointwise, that is, the limit of $(T_{n}(x))$ exists for all $x\in X$, then these pointwise limits define a bounded linear operator $T$.
> 
> > [!Proof]-
> > It is clear that the pointwise limit $T(x)=\lim_{ n \to \infty }T_{n}(x)$ is a linear operator. $\{ T_{n}(x) \}$ is bounded for each $x\in X$. [[LEC ANA2 10#^90f996]] implies $M:=\sup_{n\in \mathbb{N}}\lVert T_{n} \rVert< \infty$. Now for any $x\in X$, 
> > $$
> > \begin{align}
> > |T(x)|=\left| \lim_{ n \to \infty } T_{n}(x) \right| =\lim_{ n \to \infty } \left| T_{n}(x) \right| \leqslant M|x|,
> > \end{align}
> > $$
> > Thus, $\lVert T \rVert\leqslant M$. 
> 

^d4a27f

> [!Proposition]
> The convergence $\{ T_{n} \}\to T$ in [[#^d4a27f]] is uniform on a compact subset $K\subseteq X$.
> 
> > [!Proof]-
> > 
> > Let $K\subseteq X$ be compact. Fix $\epsilon> 0$. Let $M=\text{max}\{ \sup_{n\in N}\lVert T_{n} \rVert, \lVert T \rVert \}$. Cover $K$ by a finite set of open balls $\{ B_{r}(x_{i}) \}_{i=1, \dots, N}$ of radius $r=\epsilon/M$. Since $T_{n}\to T$ pointwise on each of $x_{1}, \dots, x_{N}$, for all large $n$, $\lVert T_{n}(x_{i})-T(x_{i}) \rVert<\epsilon$ for all $i=1, \dots, N$. By the triangle inequality, we find for all large $n$, for all $x\in K$, $\lVert T_{n}(x)-T(x) \rVert\leqslant {3}\epsilon$.
> 


[!Example]
Let $\{ a_{n} \}$. If for all $\{ x_{n} \}\in \ell^{1}$, $\sum a_{n}x_{n}$ converges, then $\{ a_{n} \}\in \ell^{\infty}$. 

[!Example]

---

# The diagonal argument

> [!Proposition]
> Let $E$ be a countable set. Let $f_{n}:E\to \mathbb{R}$ be such that $\{ f_{n}(x) \}_{n=1}^{\infty}$ is bounded for each $x\in E$. Then, there exists a subsequence $\{ f_{n_{k}} \}_{k=1}^{\infty}$ such that $\{ f_{n_{k}}(x) \}_{k=1}^{\infty}$ is convergent for all $x\in E$.


