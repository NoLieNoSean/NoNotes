---
id: "542"
date: 2026-08-28
time: 10:34
tags:
  - DGEO
  - Lecture
P1: true
desc: Second fundamental form, Curvature tensor, vector fields along curves
---
Recall [[LEC DGT 7#^9c4967]]. 

> [!Definition] Second fundamental form
> For $p\in M$, the **second fundamental form** of $M$ at $p$, $\mathbb{I}_{p}:T_{p}M\times T_{p}M\to N_{p}M$ is defined by
> $$
> \mathbb{I}_{p}(v, w)=(D_{v}\Pi)(w).
> $$
> 
> 

^bbaa3e

> [!Remark]
> By [[LEC DGT 7#^7cc2b0]], for $X, Y\in \mathfrak{X}(M)$, we have
> $$
> \mathbb{I}_{p}(X_{p}, Y_{p})=\hat{\Pi}(D_{X}Y)|_{p}.
> $$
> This also justifies the claimed codomain of $N_{p}M$ in [[#^bbaa3e]], since we can take any extension $Y$ of $w$ to a vector field in a neighborhood of $p$, and $(D_{v}\Pi)(w)=(D_{v}\Pi)(Y_{p})=\hat{\Pi}(D_{v}Y)\in N_{p}M$. 

^c71071

We therefore have the identity
$$
D_{X}Y=\nabla_{X}Y+\mathbb{I}(X, Y).
$$

> [!Lemma]
> $\mathbb{I}_{p}(v, w)=\mathbb{I}_{p}(w, v)$ for all $v, w\in T_{p}M$. 
> 
> > [!Proof]-
> > Let $\varphi:\Omega\to V$ be a local parameterization around $p$. Let $v=v^{i}\varphi_{i}|_{p}$, $w=w^{i}\varphi_{i}|_{p}$. Define $X=v^{i}\varphi_{i}$, $Y=w^{i}\varphi_{i}$. Then, $X_{p}=v$, $Y_{p}=w$. By [[#^c71071]], and [[LEC DGT 7#^6fee36]], 
> > $$
> > \mathbb{I}_{p}(v, w)=\hat{\Pi}(D_{X}Y)|_{p}=\hat{\Pi}(D_{Y}X)|_{p}=\mathbb{I}_{p}(w, v).
> > $$
> > 

$\mathbb{I}$ is not preserved by local isometries, so it is not intrinsic. However, one can define certain quantities using $\mathbb{I}$ which are intrinsic. 


%% Curvature tensor stuff%%

$$
\begin{align}
 & \langle \nabla_{Y}\nabla_{Z}X-\nabla_{Z}\nabla_{Y}X-\nabla_{[Y, Z]}X, W \rangle = \\
 & \langle \mathbb{I}(X, Z), \mathbb{I}(Y, W) \rangle -\langle \mathbb{I}(X, Y), \mathbb{I}(Z, W) \rangle .
\end{align}
$$


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

[!Lemma]
Let $V$ be a vector field along $\gamma:I\to M$, $t_{0}\in I$, $\varphi:\Omega\to U$ is a local parameterization around $\gamma(t_{0})$. Suppose $V(t)=V^{i}(t)\varphi_{i}|_{\gamma(t)}$ for $t$ near $t_{0}$. Then $V$ is smooth at $t_{0}$ $\iff$ each $V^{i}$ is smooth at $t_{0}$. 

[!Lemma]
If $V\in \mathfrak{X}(\gamma)$, then $D_{t}(V)\in \mathfrak{X}(\gamma)$. 

[!Proposition]
1. $D_{t}:\mathfrak{X}(\gamma)\to \mathfrak{X}(\gamma)$ is $\mathbb{R}$-linear. 
2. For $f\in C^{\infty}(I)$, $(fV)'=f'V+fV'$, so $D_{t}(fV)=f'V+fD_{t}V$. 
3. If $V=\tilde{V}(\gamma(t))$, then $V'(t)=D_{\gamma'(t)}\tilde{V}$, and $D_{t}(V)(t)=\nabla_{\gamma'(t)}\tilde{V}|_{\gamma(t)}$. 
4. $V'=D_{t}V+\mathbb{I}_{p}(\gamma', V)$. 
5. $\frac{d}{dt}\langle V, W \rangle=\langle V', W \rangle+\langle V, W' \rangle=\langle D_{t}V, W \rangle+\langle V, D_{t}W \rangle$.


[!Definition]
$V\in \mathfrak{X}(\gamma)$ is called **parallel** if $D_{t}V\equiv 0$. 

[!Theorem]
Given smooth $\gamma:I\to M$, $t_{0}\in I$, and $v_{0}\in T_{\gamma(t_{0})}M$, there exists a unique $V\in \mathfrak{X}(M)$ such that $V$ is parallel and $V(t_{0})=v_{0}$. 