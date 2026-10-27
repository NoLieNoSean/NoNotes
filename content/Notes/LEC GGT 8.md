---
id: "546"
date: 2026-09-02
time: 12:04
tags:
  - Lecture
  - GGT
desc: geodesic and arc length for arbitrary metric spaces
P1: true
P2: true
---
We define the notions of geodesic and arc length for arbitrary metric spaces. 

> [!Definition] Geodesic
> Let $(X, d)$ be a metric space. 
> 1. A **geodesic path** joining $x\in X$ to $y\in X$ is a map $c:[0, l]\to X$ such that $c(0)=x$, $c(l)=y$ and $d(c(t), c(t'))=|t-t'|$ for all $t, t'\in[0, l]$. The image of $c$ is called a **geodesic segment** with endpoints $x$ and $y$. 
> 2. A map $c:I\to X$ is called a **linearly reparameterized geodesic** if there exists a constant $\lambda$ such that $d(c(t), c(t'))=\lambda |t-t'|$ for all $t, t'\in I$. 
> 3. A **geodesic ray** in $X$ is a map $c:[0, \infty)\to X$ such that $d(c(t), c(t'))=|t-t'|$ for all $t, t'\in \mathbb{R}$. A **geodesic line** in $X$ is a map $c:\mathbb{R}\to X$ such that $d(c(t), c(t'))=|t-t'|$ for all $t, t'\in \mathbb{R}$. 
> 4. A **local geodesic** in $X$ is a map $c:I\to X$ with the property that for every $t\in I$, there exists $\epsilon> 0$ such that $d(c(t'), c(t''))=|t'-t''|$ for all $t', t''\in(t-\epsilon, t+\epsilon)$. 
> 5. $(X, d)$ is said to be a **geodesic space** if every two points in $X$ are joined by a geodesic. We say $(X, d)$ is **uniquely geodesic** if there is exactly one geodesic joining $x$ to $y$, for all $x, y\in X$. 
> 6. A subset $C\subseteq(X, d)$ is said to be **convex** if every pair of points $x, y\in C$ can be joined by a geodesic in $X$ and the image of every such geodesic is contained in $C$. 
> 

^11d791


> [!Definition] Curve length
> Let $(X, d)$ be a metric space. The length of a curve $\sigma:[a, b]\to X$ is
> $$
> l(\sigma)=\sup_{\lVert \underline{t} \rVert }\sum_{i=0}^{n-1} d(\sigma(t_{i}), \sigma(t_{i-1}))
> $$
> where $\underline{t}$ is a partition $a=t_{0}< t_{1}<\dots< t_{n}=b$. We say $\sigma$ is **rectifiable** if $l(\sigma)$ is finite. 

^8a3681

Compatible rectifiable curves can be concatenated, and the result is rectifiable. 

> [!Lemma] @bridsonMetricSpacesNonpositive1999 I.1.20
> Let $\sigma:[a, b]\to X$ be a path. 
> 1. $l(\sigma)\geqslant d(\sigma(a), \sigma(b))$ and $l(\sigma)=0$ iff $\sigma$ is a constant map. 
> 2. If $\phi$ is a weakly monotonic map from $[a', b']$ onto $[a, b]$, then $l(\sigma)=l(\sigma \circ \phi)$.
> 3. If $\sigma$ is the concatenation of two paths $c_{1}$ and $c_{2}$, then $l(\sigma)=l(\sigma_{1})+l(\sigma_{2})$. 
> 4. If is rectifiable of length $l$, then there exists continuous monotone $\lambda:{[a, b]}\to[0, l]$ such that $\lambda(t)=l(\sigma|_{[a, t]})$. 
> 5. There exists unique $\tilde{\sigma}:[0, l]\to X$ such that $\tilde{\sigma}(\lambda(t))=\sigma(t)$ for all $t\in[a, b]$. We call $\tilde{\sigma}$ a reparameterization of $\sigma$ by arc length. 
> 6. If $\{ \sigma_{n}:[a, b]\to X \}$ is a sequence of rectifiable curves which converges uniformly to $\sigma$ and $\sigma$ is rectifiable, then for any $\epsilon> 0$ there exists $N$ such that $l(\sigma)-\epsilon\leqslant l(\sigma_{n})$ for all $n\geqslant N$. 
> 
> > [!Proof]-
> > 
> > $(1)$, $(2)$, and $(3)$ are clear from [[#^8a3681]]. 
> > 
> > To prove $(4)$, it suffices to show that given $\epsilon> 0$, one can partition $[a, b]$ into finitely many subintervals so that the length of $c$ restricted to each of these subintervals is at most $\epsilon$. Indeed, for $\epsilon> 0$, let $a=a_{0}< a_{1}<\dots< a_{n}=b$ be such a partition. Suppose $\{ t_{n} \}\to t$, and let $t\in[a_{i}, a_{i+1}]$. Let $N$ be such that $t_{n}\in[a_{i}, a_{i+1}]$ for all $n\geqslant N$. Then, $|l(\sigma|_{[a, t_{k}]})-l(\sigma|_{[a, t_{l}]})|=l(\sigma|_{[t_{k}, t_{l}]})<\epsilon$ for all $k, m\geqslant N$. 
> > 
> > $(5)$ is clear form $(1)$. 
> 
