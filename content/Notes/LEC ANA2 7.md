---
tags:
  - ANA2
  - Lecture
date: 2025-09-17
time: 15:36
---
> [!Remark]
> Recall that a set is compact iff it is complete and totally bounded. Compactness is a topological property, but completeness and totally boundedness are not; they depend on the metric. Let $d_{1}$ and $d_{2}$ be metrics on $\mathbb{N}$, as defined [[LEC ANA2 3#Completeness|here]]. We have seen that while $(\mathbb{N}, d_{1})$ and $(\mathbb{N} ,d_{2})$ are the same topological space (they have the same open sets), the former is complete and the latter is not. Also, $(\mathbb{N}, d_{1})$ is not totally bounded, but $(\mathbb{N}, d_{2})$ is!

We now have the tools to prove [[LEC ANA1 20#^95867f]] more succinctly:

> [!Theorem]
> Let $X$ be compact, $f:X\to Y$ be continuous. Then, $f$ is uniformly continuous.
> 
> > [!Proof]-
> > Let $\epsilon> 0$. For $x\in X$, let $V_{x}=f^{-1}(B_{\epsilon/2}(f(x)))$. $V_{x}$ is open since $f$ is continuous. $\{ V_{x} \}_{x\in X}$ is an open cover of $X$. By the [[LEC CAL1 8#^1e576d|Lebesgue covering lemma]], there exists $\delta> 0$ such that for any $y\in X$, there exists $V_{x}$ such that $B_{\delta}(y)\subseteq V_{x}$. This $\delta$ works: If $z\in B_{\delta}(y)$, then $y, z\in V_{x}$, so $d(f(y), f(z))<\epsilon$.
> 
 
> [!Example]
> Open balls in $\mathscr{l}_{1}, \mathscr{l}_{2}, \dots, \mathscr{l}_{\infty}$ are not compact ([[LEC ANA2 6#^c45e7a|we have shown]] that any ball centered at the origin in these spaces is not totally bounded; any ball in an NLS can be obtained by scaling and translating the unit ball). 
> 
> We will now show that balls in $C[0, 1]$ are not compact. Consider the sequence $\{ t^{n} \}_{n=1}^{\infty}\subseteq B_{2}(0)$. $\{ t^{n} \}$ clearly does not have a converging subsequence: if it did, the subsequence would have to converge pointwise to the limit, and the pointwise limit of any subsequence is the pointwise limit of $\{ t^{n} \}$, which is not continuous.  
> 
> In fact, unit balls at not compact in any infinite dimensional NLS. Proving this requires some functional analysis.

---

# The Arzelà–Ascoli Theorem

The motivating question for this section: When is a subset of $C(X)$ compact? 

Equicontinuity is the natural generalization of [[LEC ANA1 20#^5d7328|uniform continuity]] to families of functions:

> [!Definition]
> Let $X$ be a compact metric space. $\mathcal{F}\subseteq C(X, Y)$ is a family of **equicontinuous** functions if for every $\epsilon> 0$ there exists $\delta> 0$ such that $d_{X}(x, y)<\delta \implies d_{Y}(f(x), f(y))<\epsilon$ for all $x, y\in X$ and for all $f\in \mathcal{F}$. 

For example, a family of [[LEC CAL1 10#^659739|Lipschitz mappings]] with the same Lipschitz constant is equicontinuous.

> [!Example]
> Let $(X, d)$, $(Y, \rho)$ be metric spaces. Let $\{ f_{n} \}_{n=1}^{\infty}\subseteq C(X, Y)$. There exists an equivalent metric on $X$ such that each $f_{n}$ is Lipschitz continuous. 
> 
> > [!Proof]-
> > First, note that for a single function $f:X\to Y$, the metric $d'(x, y)=d(x, y)+\rho(f(x), f(y))$ on $X$ makes $f$ Lipschitz with $c=1$. We can use the same idea when working with a countably family of functions. First, define the [[LEC ANA2 2#^f5a704|equivalent bounded metric]] $\rho'(x, y)=\rho(x, y)/(1+\rho(x, y))$ on $Y$.
> > 
> > Next, define
> > $$
> > d'(x, y)=d(x, y)+\sum_{n=1}^{\infty} \frac{1}{2^{n}}\rho'(f_{n}(x), f_{n}(y)).
> > $$
> > Then, $\rho'(f_{n}(x), f_{n}(y))\leq 2^{n}d'(x, y)$. 
> > 
> > You'll have to show $d'$ and $d$ are equivalent.
> 
> Note, however, that this does not make $\{ f_{n} \}$ equicontinuous: $2^{n}$ blows up as $n\to \infty$.

> [!Example]
> Let $X$ be a compact metric space. Let $F:X\times X\to Z$ be continuous. Let $f_{y}:=F(x, y)$. Show that $\mathcal{A}:=\{ f_{y}:y\in X \}$ is equicontinuous.
> 
> > [!Proof]-
> > Let $\epsilon> 0$. Since $X\times X$ is compact, $F$ is uniformly continuous. If we consider the metric $d((x_{1}, y_{1}), (x_{2}, y_{2}))=d(x_{1}, x_{2})+d(y_{1}, y_{2})$ on $X\times X$, there exists $\delta$ such that $d(x_{1}, x_{2})+d(y_{1}, y_{2})<\delta$ $\implies$ $d_{Z}(F(x_{1}, y_{1}),F(x_{2}, y_{2}))<\epsilon$ for all $x_{1}, x_{2}, y_{1}, y_{2}\in X$. In particular, for all $y\in X$, $d(x_{1}, x_{2})<\delta$ $\implies$ $d_{Z}(f_{y}(x_{1}), f_{y}(x_{2}))<\epsilon$. 
> 

> [!Example]
> Let $X\subset \mathbb{R}^{n}$ be convex and open. Let $\mathcal{A}$ be a family of differentiable functions from $X$ to $\mathbb{R}^{m}$. Assume that there exists $M> 0$ such that $\lVert Df(x) \rVert\leq M$ for all $f\in A$ and for all $x\in X$. Then, by [[LEC CAL1 18#^fb4aaf]], we have
> $$
> \begin{align}
> |f(x)-f(y)|\leq M|x-y|
> \end{align}
> $$
> for all $f\in \mathcal{A}$ and $x, y\in X$. Thus, $\mathcal{A}$ is equicontinuous.

> [!Theorem] Arzelà–Ascoli Theorem, @kumaresanTopologyMetricSpaces2005 4.4.8
> Let $X$ be a compact metric space. Then a set $\mathcal{B}\subseteq C(X)$ is compact iff $\mathcal{B}$ is bounded, closed, and equicontinuous.

[!Proof]-
$(\implies)$ If $\mathcal{B}$ is compact, [[LEC CAL1 7#^0b0337|it must be]] complete (and hence closed, since $X$ is complete) and totally bounded. Let $\epsilon> 0$. There exist $f_{i}\in \mathcal{B}$ for $1\leq i\leq n$ such that $\mathcal{B}\subset \bigcup_{i}B_{\epsilon}(f_{i})$. Let $\delta_{i}$ be chosen by the uniform continuity of $f_{i}$ for the given $\epsilon$. Let $\delta$ be the minimum of the $\delta_{i}$'s. Then, for $x, y\in X$ such that $d(x, y)<\delta$, for $f\in \mathcal{B}$ and $f'=f_{i}$ such that $f\in B_{\epsilon}(f_{i})$, we have
$$
\begin{align}
|f(x)-f(y)| & \leq |f(x)-f'(x)|+|f'(x)-f'(y)|+|f'(y)-f(y)| \\
 & <\epsilon+\epsilon+\epsilon.
\end{align}
$$
$(\impliedby)$ Assume $\mathcal{B}$ is closed, bounded, and equicontinuous. Since $C(X)$ is complete, $\mathcal{B}$ is complete, so it is sufficient to show that $\mathcal{B}$ is totally bounded. 