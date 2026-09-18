---
id: "555"
date: 2026-08-26
time: 23:45
tags:
  - DGEO
  - Lecture
P1: true
desc: the covariant derivative, intrinsicness
---
> [!Definition] Pushforward
> Let $F:M\to N$ be a diffeomorphism. Define $F_{*}:\mathfrak{X}(M)\to \mathfrak{X}(N)$ by
> $$
> F_{*}X|_{F(q)}:=DF_{q}(X_{q}).
> $$
> 

> [!Lemma]
> Let $F:M\to N$ be a diffeomorphism. Let $f\in C^{\infty}(N)$, $v\in T_{p}M$. Then $D_{v}(f\circ F)=D_{F_{*}v}f$.

> [!Lemma]
> Let $F:M\to N$ be a diffeomorphism. Then, $F_{*}:\mathfrak{X}(M)\to \mathfrak{X}(N)$ is a Lie algebra homomorphism, i.e., $F_{*}[X, Y]=[F_{*}X, F_{*}Y]$. 

# Covariant derivative

Let $M\subseteq \mathbb{R}^{k}$. Given $X\in \mathfrak{X}(M)$, $p\in M$ and $v\in T_{p}M$, we'd like to define the directional derivative of $X$ at $p$ in the direction $v$, $\nabla_{v}X$. The definition should be intrinsic, i.e., if $F:M\to N$ is an isometry then $\nabla_{F_{*}v}F_{*}X=F_{*}(\nabla_{v}X)$. We also require that $\nabla_{v}X\in T_{p}M$. 

We could consider $D_{v}X$. However, this does not work because
1. in general, $D_{v}X\not\in T_{p}M$, and
2. the operation is not intrinsic, i.e., $D_{F_{*}v}F_{*}X\ne F_{*}(D_{v}X)$. 

> [!Example]
> Let $M=(-\pi, \pi)\times \mathbb{R}\subseteq \mathbb{R}^{2}$. Let $F:M\to \mathbb{R}^{3}$ be
> $$
> F(x, y)=(\cos x, \sin x, y).
> $$
> The image $N=F(M)$ is the cylinder over $S^{1}\setminus \{ (-1, 0) \}$. $F$ is a local parameterization of $N$. 
> 
> Let $X=E_{1}$ on $M$. Then $D_{X}X\equiv 0$ on $M$.
> 
> However, $D_{F_{*}X}F_{*}X$ is nowhere vanishing on $N$ (note that $F_{*}X$ is the coordinate vector field $F_{1}$; see the following lemma):
> $$
> \begin{align}
> D_{F_{1}}F_{1}|_{F(x, y)}=F_{11}(x, y)=-(\cos x, \sin x, 0),
> \end{align}
> $$
> which nonzero and perpendicular to $T_{F(x, y)}$ at all points of $N$!

^05125d

> [!Lemma]
> For a local parameterization $\varphi:\Omega\to V$, $D_{\varphi_{i}}\varphi_{j}|_{\varphi(a)}=\partial_{ij}\varphi(a)$.
> 
> > [!Proof]-
> > $$
> > \begin{align}
> > D_{\varphi_{i}}\varphi_{j}|_{\varphi(a)} & =D\varphi_{j}|_{\varphi(a)}(\varphi_{i}|_{\varphi(a)}) \\
> >  & =D\varphi_{j}|_{\varphi(a)}(D\varphi_{a}(e_{i})) \\
> >  & = D(\varphi_{j}\circ\varphi)_{a}(e_{i}) \\
> >  & =\partial_{i}(\varphi_{j}\circ\varphi)(a) \\
> >  & =\partial_{i}\partial_{j}\varphi(a).
> > \end{align}
> > $$
> > 

Notice that in [[#^05125d]], the tangential component of $D_{F_{*}X}F_{*}X$ remains $0$. In general, it turns out that the tangential component of $D_{v}X$ is intrinsic. 

> [!Definition] The covariant derivative
> Let $M\subseteq \mathbb{R}^{k}$, $p\in M$. We can write $\mathbb{R}^{k}=T_{p}M\oplus N_{p}M$, where $N_{p}M$ is the normal space of $M$ at $p$. Let $\Pi_{p}:\mathbb{R}^{k}\twoheadrightarrow T_{p}M$, $\hat{\Pi}_{p}:\mathbb{R}^{k}\twoheadrightarrow N_{p}M$ be the standard orthogonal projections. Denote the space of linear endomorphisms of $\mathbb{R}^{k}$ by $\mathcal{L}$. Define $\Pi:M\to \mathcal{L}$ by $\Pi(p)=\Pi_{p}$. Define the **covariant derivative** $\nabla:\mathfrak{X}(M)\times \mathfrak{X}(M)\to \mathfrak{X}(M)$ by
> $$
> \nabla_{X}Y:=\Pi(D_{X}Y).
> $$

^9c4967

> [!Proposition]
> $\Pi:M\to \mathcal{L}$ is smooth. 

> [!Theorem]
> If $F:M\to N$ is an isometry and $\nabla, \tilde{\nabla}$ are the covariant derivatives on $M, N$, then 
> $$
> \tilde{\nabla}_{F_{*}X}F_{*}Y=F_{*}(\nabla_{X}Y).
> $$
> 

> [!Proposition]
> Let $X, Y\in \mathfrak{X}(M)$, and $f\in C^{\infty}(M)$.
> 1. $\nabla$ is $\mathbb{R}$-linear in both of its arguments (since $D$ is).
> 2. $\nabla_{fX}Y=f\nabla_{X}Y$ (since $D_{fX}Y=fD_{X}Y$). 
> 3. $\nabla_{X}(fY)=(D_{X}f)(Y)+f\nabla_{X}Y$ (since $D_{X}(fY)=(D_{X}f)Y+fD_{X}Y$). 
> 4. $\nabla_{X}Y-\nabla_{Y}X=[X, Y]$ (since $D_{X}Y-D_{Y}X=[X, Y]$). 
> 5. $D_{X}\langle Y, Z \rangle=\langle D_{X}Y, Z \rangle+\langle Y, D_{X}Z \rangle=\langle \nabla_{X}Y, Z \rangle+\langle Y, \nabla_{X}Z \rangle$. 

> [!Notation]
> For $f\in C^{\infty}(V)$ for $V\subseteq M\subseteq \mathbb{R}^{k}$, 
> $$
> \partial_{i}f:=D_{\varphi_{i}}f\in C^{\infty}(V).
> $$
> Note that $D_{\varphi_{i}}f(\varphi(a))=\partial_{i}(f\circ\varphi)(a)$. 

> [!Definition] The Christoffel symbols
> Let $\varphi:\Omega\to V$ be a local parameterization. Define $\Gamma_{ij}^{k}\in C^{\infty}(\Omega)$, the **Christoffel symbols**, by
> $$
> \nabla_{\varphi_{i}}\varphi_{j}|_{\varphi(a)}=\Gamma_{ij}^{k}(a)\varphi_{j}|_{\varphi(a)}.
> $$
> 
> Note that for $X, Y\in \mathfrak{X}(M)$ with $X=X^{i}\varphi_{i}$ and $Y=Y^{j}\varphi_{j}$, we have
> $$
> \begin{align}
> \nabla_{X}Y & =\nabla_{X^{i}\varphi_{i}}Y^{j}\varphi_{j}  \\
>  & =X^{i}\nabla_{\varphi_{i}}Y^{j}\varphi_{j} \\
>  & =X^{i}(D_{\varphi_{i}}Y^{j})\varphi_{j}+X^{i}Y^{j}\nabla_{\varphi_{i}}\varphi_{j} \\
>  & =X^{i}(\partial_{i}Y^{j})\varphi_{j}+X^{i}Y^{j}(\Gamma_{ij}^{k}\circ\varphi ^{-1})\varphi_{k}.
> \end{align}
> $$
> 

> [!Proposition]
> Let $\varphi:\Omega\to V$ be a local parameterization of $M$. Let $g_{ij}$ be components of $\mathrm{I}_{M}$ with respect to $\varphi$, and $\Gamma_{ij}^{k}$ be the Christoffel symbols with respect to $\varphi$. Denote the entries of the inverse matrix of $[g_{ij}]$ by $g^{ij}$. Then, 
> $$
> \begin{align}
> \Gamma_{ij}^{k}=\frac{1}{2}(\partial_{i}g_{lj}+\partial_{j}g_{li}-\partial_{l}g_{ij})g^{kl}
> \end{align}
> $$
> 

## What about the normal component of $D_{X}Y$?

We can write
$$
D_{X}Y=\nabla_{X}Y+\hat{\Pi}(D_{X}Y).
$$
Recall that the two summands above are orthogonal. We have seen that $\nabla_{X}Y$ is intrinsic, but $\hat{\Pi}(D_{X}Y)$ is not. The latter depends on how the tangent space $T_{p}M$ varies with $p$. 

> [!Proposition]
> $\hat{\Pi}(D_{X}Y)=(D_{X}\Pi)(Y)$. 

> [!Lemma]
> $\hat{\Pi}(D_{X}Y)=\hat{\Pi}(D_{Y}X)$. 

