---
id: "546"
date: 2026-09-02
time: 12:04
tags:
---
Suppose $G$ is a finitely generated group. Say $S\subseteq G$ is a finite generating set. We obtain a metric $d_{s}$ on $G$ where
$$
d_{S}(r_{0}, r_{1})=l_{s}(r_{0}^{-1}r_{1})
$$
where $l_{S}(x)$ is the smallest number $l\geqslant 0$ such that
$$
x=s_{1}^{\epsilon_{1}}s_{2}^{\epsilon_{2}}\dots s_{l}^{\epsilon_{l}}, \quad s_{i}\in S ,\epsilon_{i}\in \{ -1, 1 \}.
$$
$d_{s}$ is called the word metric, and is indeed a metric. We consider the Cayley graph $C$ of $(G, S)$. $V(C)=G$, and $g, h$ are joined by an edge in $C$ if $h=gs$ for $g=hs$ for $s\in S$. Then $C$ is a connected graph. 

---

Let $(X, d)$ be a metric space. A path $\sigma:[a, b]\to X$ is called rectifiable if
$$
l(\sigma)=\sup_{\lVert \underline{t} \rVert }\sum_{i=0}^{n-1} d(\sigma(t_{i}), \sigma(t_{i-1}))
$$
is finite, where $\underline{t}$ is a partition $a=t_{0}< t_{1}<\dots< t_{n}=b$. 

Compatible rectifiable curves can be concatenated, and the result is rectifiable. 

[!Lemma]
1. If $\sigma:[a, b]\to X$ is a rectifiable path of length $l$, then there exists continuous monotone $\lambda:{[a, b]}\to[0, l]$ such that $\lambda(t)=l(\sigma|_{[a, t]})$. 
2. There exists unique $\tilde{\sigma}:[0, l]\to X$ such that $\tilde{\sigma}(\lambda(t))=\sigma(t)$ for all $t\in[a, b]$. We call $\tilde{\sigma}$ a reparameterization of $\sigma$ by arc length. 
3. If $\{ \sigma_{n}:[a, b]\to X \}$ is a sequence of rectifiable curves which converges uniformly to a path $\sigma:[a, b]\to X$ and if $\sigma$ is rectifiable, then, for any $\epsilon> 0$, there exists $N$ such that $l(\sigma)\leqslant l(\sigma_{n})+\epsilon$ for all $n\geqslant N$. 

[!Proof]-

$(3)$ 

[!Definition] Parameterization proportional to arc length

[!Definition] Geodesic
A geodesic $\sigma:[0, l]\to X$ is a path such that $d(\sigma(t), \sigma(t'))=|t-t'|$ for all $t, t'\in[0, l]$. If the arc length reparameterization is linear, we say that $\sigma$ is a constant speed reparameterization. 

[!Definition] Local geodesic
A local geodesic $\sigma:[a, b]\to X$ is a path such that there exists $\epsilon> 0$ such that for any $t\in[a, b]$, and for all $t', t''\in[t-\epsilon, t+\epsilon]$, $d(\delta(t'), \sigma(t''))=|t'-t''|$. 

A geodesic metric space $(X, d)$ is a metric space in which any two points are joined by a geodesic. $(X, d)$ is uniquely geodesic if any two points are joined by a unique geodesic. 

[!Definition] Convex sets
S subset $C\subseteq X$ is called convex if any two points $x, y\in C$ are joined by a geodesic in $X$ and any such geodesic is contained in $C$.

