---
id: "542"
date: 2026-08-28
time: 10:34
tags:
  - DGEO
  - Lecture
---
Recall [[LEC DGT 7#^9c4967]]. 

> [!Definition] Second fundamental form
> For $p\in M$, the **second fundamental form** of $M$ at $p$, $\mathbb{I}_{p}:T_{p}M\times T_{p}M\to N_{p}M$ is defined by
> $$
> \mathbb{I}_{p}(v, w)=(D_{v}\Pi)(w).
> $$
> 
> 

> [!Lemma]
> $\mathbb{I}_{p}(X_{p}, Y_{p})=\hat{\Pi}(D_{X}Y)|_{p}$. 


[!Lemma]
$\mathbb{I}_{p}(v, w)=\mathbb{I}_{p}(w, v)$ for all $v, w\in T_{p}M$. 

$\mathbb{I}$ is not preserved by local isometries, so it is not intrinsic. However, one can define certain quantities using $\mathbb{I}$ which are intrinsic. 

%% Curvature tensor stuff%%

---

> [!Definition]
> Given $p\in M$ and a vector field $X$ defined on a neighborhood of $p$, define the **covariant derivative of $X$ at $p$** in the direction $v\in T_{p}M$ by
> $$
> \nabla_{v}X:=\Pi(D_{v}X).
> $$
> 


> [!Definition] Vector field along a curve
> Let $\gamma:I\to M$ be smooth. A **smooth vector field along $\gamma$** is a smooth map $V:I\to \mathbb{R}^{k}$ such that $V(t)\in T_{\gamma(t)}M$. Denote the space of all smooth vector fields along $\gamma$ by $\mathfrak{X}(\gamma)$. 

Note that if $\gamma:I\to M$ is smooth, then $\gamma'\in \mathfrak{X}(\gamma)$. 

If $\gamma(I)\subseteq U$ and $X\in \mathfrak{X}(U)$ , then $V(t)=X(\gamma(t))$ is a smooth vector field along $\gamma$. However, not all members of $\mathfrak{X}(\gamma)$ arise this way, and there do exist smooth vector fields along $\gamma$ that cannot be extended to smooth ambient vector fields. 


> [!Definition]
> Let $\gamma:I\to M$ be smooth. The **covariant derivative along $\gamma$**, $D_{t}:\mathfrak{X}(\gamma)\to \mathfrak{X}(\gamma)$ is defined by
> $$
> D_{t}V(t)=\Pi_{\gamma(t)}(V'(t)).
> $$

