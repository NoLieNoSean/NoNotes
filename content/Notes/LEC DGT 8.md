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
# The Curvature Tensor

Recall [[LEC DGT 7#^9c4967]]. 

> [!Definition] Second fundamental form
> For $p\in M$, the **second fundamental form** of $M$ at $p$, $\mathbb{I}_{p}:T_{p}M\times T_{p}M\to N_{p}M$ is defined by
> $$
> \mathbb{I}_{p}(v, w):=(D_{v}\Pi)(w).
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

^273d1a

> [!Lemma]
> $\mathbb{I}_{p}(v, w)=\mathbb{I}_{p}(w, v)$ for all $v, w\in T_{p}M$. 
> 
> > [!Proof]-
> > Let $\varphi:\Omega\to V$ be a local parameterization around $p$. Let $v=v^{i}\varphi_{i}|_{p}$, $w=w^{i}\varphi_{i}|_{p}$. Define $X=v^{i}\varphi_{i}$, $Y=w^{i}\varphi_{i}$. Then, $X_{p}=v$, $Y_{p}=w$. By [[#^c71071]], and [[LEC DGT 7#^6fee36]], 
> > $$
> > \mathbb{I}_{p}(v, w)=\hat{\Pi}(D_{X}Y)|_{p}=\hat{\Pi}(D_{Y}X)|_{p}=\mathbb{I}_{p}(w, v).
> > $$
> > 

^e6aec2

> [!Lemma]
> $\mathbb{I}$ is bilinear, i.e, if $X, Y\in \mathfrak{X}(M)$ and $X=X^{i}\varphi_{i}$, $Y=Y^{j}\varphi_{j}$, then
> $$
> \mathbb{I}(X, Y)=X^{i}Y^{j}\mathbb{I}(\varphi_{i}, \varphi_{j}).
> $$
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > \mathbb{I}(X, Y) & =\hat{\Pi}(D_{X}Y) \\
> >  & = \hat{\Pi}(X^{i}(D_{\varphi_{i}}Y^{j})\varphi_{j}+X^{i}Y^{j}D_{\varphi_{i}}\varphi_{j}) \\
> >  & = \hat{\Pi}(X^{i}Y^{j}D_{\varphi_{i}}\varphi_{j}) \\
> >  & =X^{i}Y^{j} \hat{\Pi}(D_{\varphi_{i}}\varphi_{j}) \\
> >  & =X^{i}Y^{j}\mathbb{I}(\varphi_{i}, \varphi_{j}).
> > \end{align}
> > $$
> > 
> 

^f5b590

$\mathbb{I}$ is not preserved by local isometries (recall [[LEC DGT 7#^d4f63b]]), so it is not intrinsic. However, one can define certain quantities using $\mathbb{I}$ which are intrinsic.

> [!Definition] Riemann curvature tensor
> Let $X, Y, Z\in \mathfrak{X}(M)$. Define the **curvature tensor** as a map $\mathfrak{X}(M)\times \mathfrak{X}(M)\times \mathfrak{X}(M)\to \mathfrak{X}(M)$ by
> $$
> R(X, Y)Z:=\nabla_{X}\nabla_{Y}Z-\nabla_{Y}\nabla_{X}Z-\nabla_{[X, Y]}Z.
> $$
> 


> [!Proposition]
> The curvature tensor is intrinsic, i.e., if $F:M\to N$ is an isometry and $R$ and $\tilde{R}$ are the curvature tensors on $M$ and $N$ respectively, then
> $$
> \tilde{R}(F_{*}X, F_{*}Y)F_{*}Z=F_{*}(R(X, Y)Z).
> $$
> 
> > [!Proof]-
> > 
> > Let $X, Y, Z, W\in \mathfrak{X}(M)$. Denote $F_{*}X$, $F_{*}Y$, $F_{*}Z$, $F_{*}W$ by $\tilde{X}$, $\tilde{Y}$, $\tilde{Z}$, $\tilde{W}$. As we did in [[LEC DGT 7#^8c411c]], we will show that
> > $$
> > \langle \tilde{R}(\tilde{X}, \tilde{Y})\tilde{Z}, \tilde{W} \rangle =\langle F_{*}R(X, Y)Z, \tilde{W} \rangle .
> > $$
> > Let $\varphi:\Omega\to V$ be a local parameterization of $M$. Let $h_{ij}:\Omega \to \mathbb{R}^{k}$ be defined by $h_{ij}(a)=\mathbb{I}_{\varphi(a)}(\varphi_{i}, \varphi_{j})$. By [[#^e6aec2]], $h_{ij}=h_{ji}$. Using [[#^273d1a]], 
> > $$
> > \begin{align}
> > D_{\varphi_{i}}\varphi_{j} |_{\varphi(a)} & =\nabla_{\varphi_{i}}\varphi_{j} |_{\varphi(a)}+\mathbb{I}_{\varphi(a)}(\varphi_{i}, \varphi_{j}) \\
> > \implies \partial_{ij}\varphi & =\Gamma_{ij}^{l}\partial_{l}\varphi+h_{ij}.
> > \end{align}
> > $$
> > We start with the following identities:
> > $$
> > \begin{align}
> > \partial_{ijk}\varphi & =\partial_{k}\Gamma^{l}_{ij}\partial_{l}\varphi +\Gamma^{l}_{ij}(\Gamma^{m}_{kl}\partial_{m}\varphi+h_{kl})+\partial_{k}h_{ij} \\
> >  & =(\partial_{k}\Gamma^{m}_{ij}+\Gamma^{l}_{ij}\Gamma^{m}_{kl})\partial_{m}\varphi+\Gamma^{l}_{ij}h_{kl}+\partial_{k}h_{ij}. \\
> >  \\
> > \partial_{ikj}\varphi & = (\partial_{j}\Gamma^{m}_{ik}+\Gamma^{l}_{ik }\Gamma^{m}_{jl})\partial_{m}\varphi+\Gamma^{l}_{ik}h_{jl}+\partial_{j}h_{ik}.
> > \end{align}
> > $$
> > Rearrange, dot with $\partial_{s}\varphi$:
> > $$
> > \begin{align}
> >   \langle (\partial_{k}\Gamma^{m}_{ij}+\Gamma^{l}_{ij}\Gamma^{m}_{kl}-\partial_{j}\Gamma^{m}_{ik}-\Gamma^{l}_{ik}\Gamma^{m}_{jl})\partial_{m}\varphi, \partial_{s}\varphi \rangle
> >  & =\langle \partial_{j}h_{ik}-\partial_{k}h_{ij}+\Gamma^{l}_{ik}h_{jl}-\Gamma_{ij}^{l}h_{kl}, \partial_{s}\varphi \rangle \\
> > \underbrace{ (\partial_{k}\Gamma^{m}_{ij}+\Gamma^{l}_{ij}\Gamma^{m}_{kl}-\partial_{j}\Gamma^{m}_{ik}-\Gamma^{l}_{ik}\Gamma^{m}_{jl})g_{ms} }_{ \text{intrinsic} } & = \langle \partial_{j}h_{ik}-\partial_{k}h_{ij}, \partial_{s}\varphi \rangle  \\
> >  & = -\langle \partial_{k}h_{ij}, \partial_{s}\varphi \rangle +\langle \partial_{j}h_{ik}, \partial_{s}\varphi \rangle  \\
> >  & =\langle h_{ij}, \partial_{ks}\varphi \rangle -\langle h_{ik}, \partial_{js}\varphi \rangle  \\
> >  & = \langle h_{ij}, h_{ks} \rangle -\langle h_{ik} , h_{js}\rangle. 
> > \end{align}
> > $$
> > 
> > We now massage $\langle R(X, Y)Z, W \rangle$ into a form that allows us to use the intrinsicness of $\langle h_{ij}, h_{ks} \rangle -\langle h_{ik} , h_{js}\rangle$. We have the following identities:
> > $$
> > \begin{array}{lrcl}
> >  & (D_{Y}X & = & \nabla_{Y}X+\mathbb{I}(Y, X)) \\\\
> > (+) & D_{Z}D_{Y}X & = & D_{Z}\nabla_{Y}X+D_{Z}\mathbb{I}(Y, X) \\
> >  &  & = & \nabla_{Z}\nabla_{Y}X+\mathbb{I}(Z, \nabla_{Y}X)+D_{Z}\mathbb{I}(X, Y) \\\\
> >  (-) & D_{Y}D_{Z}X & = & \nabla_{Y}\nabla_{Z}X+\mathbb{I}(Y, \nabla_{Z}X)+D_{Y}\mathbb{I}(X, Z) \\ \\
> > (+) & D_{[Y, Z]}X & = & \nabla_{[Y, Z]}X+\mathbb{I}([Y, Z], X)
> > \end{array}
> > $$
> > which combine in the prescribed manner to yield (recall [[LEC DGT 4#^5180d1]].2)
> > $$
> > \begin{array}{rcl}
> > 0 & = &  \nabla_{Z}\nabla_{Y}X-\nabla_{Y}\nabla_{Z}X+\nabla_{[Y, Z]}X \\
> >   &  & +\mathbb{I}(Z, \nabla_{Y}X)-\mathbb{I}(Y, \nabla_{Z}X)+\mathbb{I}([Y, Z], X) \\
> >  &  & +D_{Z}\mathbb{I}(X, Y)-D_{Y}\mathbb{I}(X, Z).
> > \end{array}
> > $$
> > Rearranging and taking the inner product with $W$, we get
> > $$
> > \begin{align}
> > \langle \nabla_{Z}\nabla_{Y}X-\nabla_{Y}\nabla_{Z}X+\nabla_{[Y, Z]}X, W \rangle  & =-\langle D_{Y}\mathbb{I}(X, Z), W \rangle+\langle D_{Z}\mathbb{I}(X, Y), W \rangle  \\
> >  & =\langle \mathbb{I}(X, Z), D_{Y}W  \rangle -\langle \mathbb{I}(X, Y), D_{Z}W \rangle  \\
> >  & =\langle \mathbb{I}(X, Z), \mathbb{I}(Y, W) \rangle -\langle \mathbb{I}(X, Y), \mathbb{I}(Z, W) \rangle   \\
> >  & = X^{i}Y^{j}Z^{k}W^{s}(\langle h_{ik}, h_{js} \rangle -\langle h_{ij}, h_{ks} \rangle ),
> > \end{align}
> > $$
> > where we used [[#^f5b590]] in the last step. Denote $\mathbb{I}(\tilde{\varphi}_{i},  \tilde{\varphi}_{j})$ by $\tilde{h}_{ij}$. Since the quantity $\langle h_{ij}, h_{ks} \rangle -\langle h_{ik} , h_{js}\rangle$ is intrinsic, $(\langle h_{ij}, h_{ks} \rangle -\langle h_{ik} , h_{js}\rangle)\circ F^{-1}=\langle \tilde{h}_{ij}, \tilde{h}_{ks} \rangle -\langle \tilde{h}_{ik} , \tilde{h}_{js}\rangle$. Therefore, 
> > $$
> > \begin{align}
> > \langle \tilde{R}(\tilde{X}, \tilde{Y})\tilde{Z}, \tilde{W} \rangle  & =\tilde{X}^{i}\tilde{Y}^{j}\tilde{Z}^{k}\tilde{W}^{s}(\langle \tilde{h}_{ij}, \tilde{h}_{ks} \rangle -\langle \tilde{h}_{ik} , \tilde{h}_{js}\rangle) \\
> >  & = (X^{i}Y^{j}Z^{k}W^{s}(\langle h_{ij}, h_{ks} \rangle -\langle h_{ik} , h_{js}\rangle))\circ F^{-1} \\
> >  & =\langle R(X, Y)Z, W \rangle \circ F^{-1} \\
> >  & =\langle F_{*}R(X, Y)Z, \tilde{W} \rangle .
> > \end{align}
> > $$
> > 
> 


---
# Vector fields along curves

> [!Definition]
> Given $p\in M$ and a vector field $X$ defined on a neighborhood of $p$, define the **covariant derivative of $X$ at $p$** in the direction $v\in T_{p}M$ by
> $$
> \nabla_{v}X:=\Pi(D_{v}X).
> $$
> 


> [!Definition] Vector field along a curve
> Let $\gamma:I\to M$ be smooth. A **smooth vector field along $\gamma$** is a smooth map $V:I\to \mathbb{R}^{k}$ such that $V(t)\in T_{\gamma(t)}M$. Denote the space of all smooth vector fields along $\gamma$ by $\mathfrak{X}(\gamma)$. 

Note that if $\gamma:I\to M$ is smooth, then $\gamma'\in \mathfrak{X}(\gamma)$. 

If $\gamma(I)\subseteq U$ and $X\in \mathfrak{X}(U)$ , then $V(t)=X(\gamma(t))$ is a smooth vector field along $\gamma$. However, not all members of $\mathfrak{X}(\gamma)$ arise this way, and there exist smooth vector fields along $\gamma$ that cannot be extended to smooth ambient vector fields. 

> [!Definition] Covariant derivative along a curve
> Let $\gamma:I\to M$ be smooth. The **covariant derivative along $\gamma$**, $D_{t}:\mathfrak{X}(\gamma)\to \mathfrak{X}(\gamma)$ is defined by
> $$
> D_{t}V(t)=\Pi_{\gamma(t)}(V'(t)).
> $$

[[#^f694ff]] justifies the codomain being $\mathfrak{X}(\gamma)$. 

Note that if $V(t)=X(\gamma(t))$, then $V'(t)=DX_{\gamma(t)}\gamma'(t)=D_{\gamma'(t)}X$, so
$$
D_{t}V(t)=\nabla_{\gamma'(t)}X.
$$

> [!Lemma]
> Let $V$ be a vector field along $\gamma:I\to M$, $t_{0}\in I$, $\varphi:\Omega\to U$ is a local parameterization around $\gamma(t_{0})$. Suppose $V(t)=V^{i}(t)\varphi_{i}|_{\gamma(t)}$ for $t$ near $t_{0}$. Then $V$ is smooth at $t_{0}$ $\iff$ each $V^{i}$ is smooth at $t_{0}$. 

> [!Lemma]
> If $V\in \mathfrak{X}(\gamma)$, then $D_{t}(V)\in \mathfrak{X}(\gamma)$. 

^f694ff

> [!Proposition] Properties of $D_{t}$
> 1. $D_{t}:\mathfrak{X}(\gamma)\to \mathfrak{X}(\gamma)$ is $\mathbb{R}$-linear. 
> 2. For $f\in C^{\infty}(I)$, $(fV)'=f'V+fV'$, so $D_{t}(fV)=f'V+fD_{t}V$. 
> 3. If $V=\tilde{V}(\gamma(t))$, then $V'(t)=D_{\gamma'(t)}\tilde{V}$, and $D_{t}(V)(t)=\nabla_{\gamma'(t)}\tilde{V}$. 
> 4. $V'=D_{t}V+\mathbb{I}_{p}(\gamma', V)$. 
> 5. $\frac{d}{dt}\langle V, W \rangle=\langle V', W \rangle+\langle V, W' \rangle=\langle D_{t}V, W \rangle+\langle V, D_{t}W \rangle$.
> 

^5959ee

> [!Definition] Parallel vector field
> $V\in \mathfrak{X}(\gamma)$ is called **parallel** if $D_{t}V\equiv 0$. 

> [!Theorem]
> Given smooth $\gamma:I\to M$, $t_{0}\in I$, and $v_{0}\in T_{\gamma(t_{0})}M$, there exists a unique $V\in \mathfrak{X}(\gamma)$ such that $V$ is parallel and $V(t_{0})=v_{0}$. 

^f806e0
