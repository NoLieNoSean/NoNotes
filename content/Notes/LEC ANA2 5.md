---
tags:
  - ANA2
  - Lecture
  - Processed
date: 2025-09-11
time: 17:10
---
# Completions using distance functions

Recall $C_{b}(X)$ is the space of continuous bounded functions $f:X\to \mathbb{R}$. [[LEC ANA2 3|We know that it is complete]].

> [!Proposition]
> Let $(X, d)$ be a metric space. There exists an isometric embedding $\varphi:X\to C_{b}(X)$. $\overline{\varphi(X)}$ is the completion of $X$.
> 
> > [!Proof]-
> > 
> > Fix $a\in X$. For each $x\in X$, define $f_{x}(y)=d(x, y)-d(a, y)$. $f_{x}$ is uniformly continuous:
> > $$
> > \begin{align}
> > |f_{x}(y)-f_{x}(z)| & =|(d(x, y)-d(a, y))-(d(x, z)-d(a, z))| \\
> >  & \leq |d(x, y)-d(x, z)|+|d(a, z)-d(z, y)| \\
> >  & \leq2d(y, z).
> > \end{align}
> > $$
> > $f_{x}$ is bounded, too: $|f_{x}(y)|\leq d(x, a)$. Thus, $f_{x}\in C_{b}(X)$.
> > 
> > Define $\varphi:X\to C_{b}(X)$ by $\varphi(x)=f_{x}$. For any $x, x'\in X$,
> > $$
> > \begin{align}
> > |f_{x}(y)-f_{x'}(y)|=|d(x, y)-d(x', y)|\leq d(x, x')\quad \forall y\in X.
> > \end{align}
> > $$
> > So, 
> > $$
> > \sup_{y\in X}|f_{x}(y)-f_{x'}(y)|\leq d(x, x').
> > $$
> > At $y=x$, $|f_{x}(y)-f_{x'}(y)|$ attains $d(x, x')$. Thus, $\lVert f_{x}-f_{x'} \rVert  =d(x, x')$, and $\varphi$ is an isometry.
> > 
> > Since $C_{b}(X)$ is complete, the completion of $\varphi(X)$ is given by $\overline{\varphi(X)}$. 
> 

---
# Separable spaces

Recall what a [[LEC CAL1 9#Separable metric spaces|separable space]] is.

> [!Lemma]
> The property of denseness is transitive, that is, If $X\subset Y\subset Z$, $X$ is dense in $Y$, and $Y$ is dense in $Z$, then $X$ is dense in $Z$.

^35d96d

> [!Proposition]
> $\mathscr{l}_{1}$ is separable.
> 
> > [!Proof]-
> > 
> > Let $\mathcal{F}\subseteq \mathscr{l}_{1}$ be the set of all sequences in $\mathscr{l}_{1}$ which have finitely many non-zero terms. Let $\mathcal{F}_{\mathbb{Q}}=\mathcal{F}\cap \mathbb{Q}^{\mathbb{N}}$. $\mathcal{F}_{\mathbb{Q}}$ is countable:
> > $$
> > \left| \mathcal{F}_{\mathbb{Q}} \right| =\left| \bigcup_{i=1}^{\infty} \mathbb{Q}^{i} \right|.
> > $$
> > It is clear that $\mathcal{F}_{\mathbb{Q}}$ is dense in $\mathcal{F}$. If we show $\mathcal{F}$ is dense in $\mathscr{l}_{1}$, we'll be done by [[#^35d96d]]. 
> > 
> > Let $\mathbf{x}=\{ x_{k} \}\in \mathscr{l}_{1}$. Let $\{ \mathbf{x}_{n} \}\subseteq \mathcal{F}$ be a sequence, with $\mathbf{x}_{n}=\{ x_{n}^{k} \}_{k=1}^{\infty}$ and
> > $$
> > \begin{align}
> > x_{n}^{k}:=\begin{cases}
> > x_{k} & k\leq n, \\
> > 0 & k> n.
> > \end{cases}
> > \end{align}
> > $$
> > Now,
> > $$
> > \begin{align}
> > \lVert \mathbf{x}_{n}-\mathbf{x} \rVert _{1} & =\sum_{k=1}^{\infty} |x_{n}^{k}-x_{k}| \\
> >  & =\sum_{k=n+1}^{\infty} |x_{k}|\to 0.
> > \end{align}
> > $$
> > Thus, $\{ \mathbf{x}_{n} \}\to \mathbf{x}$. 
> 

^74c8ab

> [!Exercise]
> 1. $\mathscr{l}_{p}$ is separable.
> 2. $C[0, 1]$ is separable.
>    ![[Pasted image 20250930105556.png]]

> [!Example]
> Define $C_{0}:=\{ \{ x_{n} \}\ | \ x_{n}\to 0 \}\subset \mathscr{l}_{\infty}$. We will show that $C_{0}$ is a separable subspace of $\mathscr{l}_{\infty}$. Let $\mathcal{F}\subseteq C_{0}$ be as in [[#^74c8ab]]. 
> Let $\mathbf{x}=\{ x_{k} \}\in C_{0}$, and define $\mathbf{x}_{n}$ as we have previously.
> $$
> \begin{align}
> \lVert \mathbf{x}_{n}-\mathbf{x} \rVert_{\infty} & =\sup _{k> n}|x_{k}|\to 0.
> \end{align}
> $$
> 

> [!Example]
> $\mathscr{l}_{\infty}$ is not separable. Consider $S=\{ \{ x_{n} \}\ | \ x_{n}\in \{ \pm 1 \} \}$. For any $\mathbf{x}, \mathbf{y}\in S$, $\lVert \mathbf{x}-\mathbf{y} \rVert_{\infty}=2$. Consider the disjoint uncountable collection of open balls $\{ B_{1}(\mathbf{x})\ | \ \mathbf{x}\in S \}$. Since a dense subset of $\mathscr{l}_{\infty}$ must intersect all open balls of $\mathscr{l}_{\infty}$, a countable dense subset doesn't exist.

> [!Exercise]
> 
> Completion of a separable metric space is separable. 
> 
> Immediate from [[#^35d96d]]. 

> [!Exercise]
> If a space is totally bounded, it is separable.
> 
> Let $X$ be a totally bounded space. For $\epsilon_{n}=1/n$, let $O_{n}$ be a finite cover of $X$ by balls of radius $\epsilon_{n}$, and define $S_{n}=\{ x\ | \ B_{\epsilon}(x)\in S_{n} \}$. Take $D=\bigcup_{n=1}^{\infty}S_{n}$. $D$ is countable. $D$ is dense in $X$ since for any $x\in X$, we have balls $B_{n}\in O_{n}$ such that $x\in B_{n}$ for all $n$, so the centers of the balls converge to $x$.

[!Exercise]
The space of all non-empty compact subsets of a separable metric space $M$ endowed with the [[LEC ANA2 2#^e94696|Hausdorff metric]] is separable.


---

> [!Proposition]
> Let $\{ A_{n} \}$ with $A_{n}\subseteq X$ with $d_{1}(A_{n})\to 0$, and $\bigcap_{i=1}^{\infty}A_{i}\ne \emptyset$. Suppose $f:(X, d_{1})\to (Y, d_{2})$ is continuous. Then $d_{2}(f(A_{n}))\to 0$.
> 
> > [!Proof]-
> > It should be clear that $\bigcap_{i=1}^{\infty}A_{i}=\{ x \}$. Let $\epsilon> 0$. $f$ is continuous, so there exists $\delta$ such that $d_{1}(x, y)<\delta$ implies $d_{2}(f(x), f(y))<\epsilon$. Choose $n_{0}$ such that $d_{1}(A_{n})<\delta$ for all $n\geq n_{0}$. If $y\in A_{n}$, then $d_{1}(x, y)<\delta$, so $d_{2}(f(x), f(y))<\epsilon$. Thus, $d_{2}(f(A_{n}))< 2\epsilon$. 
> 

Counterexample when $\bigcap_{i=1}^{\infty}A_{i}=\emptyset$: Let $A_{n}=(0, 1/n]$, $f(x)=\sin(1/x)$. $f(A_{n})=[-1, 1]$ for all $n$.

Reviewed the [[LEC CAL1 6#Cantor intersection theorem|Cantor intersection theorem]].