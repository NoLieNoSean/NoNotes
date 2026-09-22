---
id: "550"
date: 2026-09-04
time: 14:47
tags:
  - GANA1
  - Lecture
desc: integration of simple and nonnegative measurable functions, monotone convergence theorem, Fatou's lemma
P1: true
---
> [!Definition]
> Let $(\Omega, \mathcal{F}, \mu)$ be a measure space. We say that a statement $\textsf{p}$ on elements of $\Omega$ is true *almost everywhere* if there exists $F\in \mathcal{F}$ such that $\mu(F)=0$ and for all $x\in F^{c}$, $\textsf{p}$ holds. 

> [!Definition]
> Let $(\Omega, \mathcal{F}, \mu)$ be a measure space, and $X$ be a metric space. Let $f_{n}, f:(\Omega, \mathcal{F})\to X$ be measurable functions. We say that
> 1. $f_{n}\to f$ **almost everywhere (a.e.)** if there exists $F\in \mathcal{F}$ with $\mu(F)=0$ such that $f_{n}\to f$ pointwise on $F^{c}$. 
> 2. $f_{n}\to f$ **almost uniformly** if for all $\epsilon> 0$, there exists $F_{\epsilon}\in \mathcal{F}$ with $\mu(F_{\epsilon})< \epsilon$ such that $f_{n}\to f$ uniformly on $F_{\epsilon}^{c}$. 
> 3. $f_{n}\to f$ **uniformly a.e.** if there exists $F\in \mathcal{F}$ with $\mu(F)=0$ such that $f_{n}\to f$ uniformly on $F^{c}$. 


> [!Remark]
> 1. $f_{n}\to f$ uniformly a.e. $\implies$ $f_{n}\to f$ almost uniformly $\implies$ $f_{n}\to f$ a.e.
> 2. $f_{n}\to f$ almost uniformly $\centernot\implies$ $f_{n}\to f$ uniformly a.e.

> [!Proposition]
> Let $(X, \mathcal{F}, \mu)$ be a measure space with $\mu$ *finite*. Let $f_{n}, f:(X, \mathcal{F})\to \mathbb{R}$, and $f_{n}\to f$ a.e.. Then, $f_{n}\to f$ almost uniformly. 


---

# Integration of simple and nonnegative measurable functions

> [!Definition] Integral of simple function
> Let $f:(X, \mathcal{F})\to[0, \infty]$ be a simple function. Let
> $$
> f=\sum_{i=1}^{n} a_{i}1_{A_{i}},
> $$
> where $a_{i}\in \mathbb{R}$ and $A_{i}\cap A_{j}=\emptyset$ if $i\ne j$. Define
> $$
> \int_{X}f\,d\mu=\sum_{i=1}^{n} a_{i}\mu(A_{i})
> $$
> 

^391a08

> [!Proposition]
> Let $f, g$ be simple functions. 
> 1. [[LEC GANA1 6#^391a08]] is well defined. 
> 2. $\int (af+g)=a\int f+\int g$. 
> 3. If $f\geqslant 0$, then $\int f\geqslant 0$. If $f\geqslant g$, then $\int f\geqslant \int g$. 

> [!Proposition]
> Let $f:(X, \mathcal{F})\to[0, \infty]$ is measurable. Suppose $\{ f_{n} \}$, $\{ g_{n} \}$ are sequences of simple functions such that $f_{n}\uparrow f$ and $g_{n}\uparrow f$. Then
> $$
> \sup_{n}\int f_{n}=\sup_{n}\int g_{n}.
> $$
> 

> [!Definition] Integral of nonnegative measurable function
> Let $f:(X, \mathcal{F})\to[0, \infty]$ be measurable, and $\{ f_{n} \}$ be a sequence of simple functions such that $f_{n}\uparrow f$. Define
> $$
> \int_{X}f\,d\mu=\sup_{n}\int f_{n}\,d\mu.
> $$
> 

^2c598a

[!Lemma]
Let $f:(X< \mathcal{F})\to[0, \infty]$ be measurable. Then, 
$$
\int f\,d\mu=\sup \left\{  \int_{X}s\,d\mu:s\text{ is simple and }s\leqslant  f  \right\}.
$$


[!Proof]-
We will first prove the following: Let $s$ be a simple function such that $s\leqslant f$. Then, $\int s\leqslant \int f$. 


> [!Proposition]
> Let $f, g$ be measurable functions. 
> 1. $\int (af+g)=a\int f+\int g$. 
> 2. If $f\leqslant g$, then $\int f\leqslant \int g$. 


> [!Theorem] Monotone convergence theorem
> Let $\{ f_{n} \}, f:(X, \mathcal{F})\to[0, \infty]$ be measurable, and suppose $f_{n}\uparrow f$ pointwise. Then, 
> $$
> \sup _{n}\int_{X}f_{n}=\int_{X} f.
> $$
> 

^de9d0c

> [!Theorem] Fatou's lemma
> Let $\{ f_{n} \}:(X, \mathcal{F})\to(0, \infty)$ be measurable positive real valued functions. Then
> $$
> \int\liminf_{n}f_{n}\leqslant \liminf_{n}\int f_{n}.
> $$
> 



