---
id: "555"
date: 2026-08-26
time: 23:45
tags:
  - DGEO
  - Lecture
P1: true
desc: the covariant derivative and its intrinsicness
---
> [!Definition] Pushforward
> Let $F:M\to N$ be a diffeomorphism. Define $F_{*}:\mathfrak{X}(M)\to \mathfrak{X}(N)$ by
> $$
> F_{*}X|_{F(q)}:=DF_{q}(X_{q}).
> $$
> 

> [!Lemma]
> Let $F:M\to N$ be a diffeomorphism. Let $f\in C^{\infty}(N)$, $v\in T_{p}M$. Then $D_{v}(f\circ F)=D_{F_{*}v}f$.
> 
> > [!Proof]-
> > 
> > Choose $\gamma$ such that $\gamma(0)=p$, $\gamma'(0)=v$. Then, $(F\circ\gamma)'(0)=F_{*}v$. 
> > $$
> > \begin{align}
> > D_{v}(f\circ F)=(f\circ F\circ\gamma)'(0)=D_{F_{*}v}f.
> > \end{align}
> > $$
> > 
> 

^1d8e76

> [!Lemma]
> Let $F:M\to N$ be a diffeomorphism. Then, $F_{*}:\mathfrak{X}(M)\to \mathfrak{X}(N)$ is a Lie algebra homomorphism, i.e., $F_{*}[X, Y]=[F_{*}X, F_{*}Y]$. 
> 
> > [!Proof]-
> > 
> > Let $\varphi:\Omega\to V$ be a local parameterization of $M$. Then $\tilde{\varphi}=F\circ\varphi:\Omega\to F(V)$ is a local parameterization of $N$. If $X=X^{i}\varphi_{i}$, 
> > $$
> > F_{*}X=F_{*}(X^{i}\varphi_{i})=X^{i}F_{*}\varphi_{i}=X^{i} \tilde{\varphi}_{i},
> > $$
> > so the coordinate representation of $X$ wrt to $\varphi$ is equal to the coordinate representation of $F_{*}X$ wrt $\tilde{\varphi}$. 
> > 
> > Let $\tilde{X}=F_{*}X$, $\tilde{Y}=F_{*}Y$. Note that $\tilde{\varphi}_{*}\overline{X}_{a}=\tilde{X}_{\tilde{\varphi}(a)}$. Thus, 
> > $$
> > F_{*}[X, Y]_{\varphi(a)}=F_{*}\varphi_{*}[\overline{X}, \overline{Y}]_{a}=\tilde{\varphi}_{*}[\overline{X}, \overline{Y}]_{a}=[\tilde{X}, \tilde{Y}]_{\tilde{\varphi}(a)}.
> > $$
> > 
> 

# Covariant derivative

Let $M\subseteq \mathbb{R}^{k}$. Given $X\in \mathfrak{X}(M)$, $p\in M$ and $v\in T_{p}M$, we'd like to define a derivative of $X$ at $p$ in the direction $v$, $\nabla_{v}X\in T_{p}M$, such that it is intrinsic, i.e., if $F:M\to N$ is an isometry then $\nabla_{F_{*}v}F_{*}X=F_{*}(\nabla_{v}X)$.

We could consider $D_{v}X$. However, this does not work because
1. in general, $D_{v}X\not\in T_{p}M$, and
2. the operation is not intrinsic, i.e., $D_{F_{*}v}F_{*}X\ne F_{*}(D_{v}X)$. 

> [!Example]
> Let $M=(-\pi, \pi)\times \mathbb{R}\subseteq \mathbb{R}^{2}$. Let $F:M\to \mathbb{R}^{3}$ be
> $$
> F(x, y)=(\cos x, \sin x, y).
> $$
> The image $N=F(M)$ is the cylinder over $S^{1}\setminus \{ (-1, 0) \}$. $F$ is a local[^1] parameterization of $N$. 
> 
> Let $X=E_{1}$ on $M$. Then $D_{X}X\equiv 0$ on $M$.
> 
> However, $D_{F_{*}X}F_{*}X$ is nowhere vanishing on $N$ ($F_{*}X$ is the coordinate vector field $F_{1}$; see the following lemma):
> $$
> \begin{align}
> D_{F_{1}}F_{1}|_{F(x, y)}=F_{11}(x, y)=-(\cos x, \sin x, 0),
> \end{align}
> $$
> which is nonzero and perpendicular to $T_{F(x, y)}$ at all points of $N$!

^05125d

The following lemma, along with [[LEC DGT 4#^51b187]], provides one way to compute derivations of vector fields on manifolds explicitly. 

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
> Let $M\subseteq \mathbb{R}^{k}$, $p\in M$. We can write $\mathbb{R}^{k}=T_{p}M\oplus N_{p}M$. Let $\Pi_{p}:\mathbb{R}^{k}\twoheadrightarrow T_{p}M$, $\hat{\Pi}_{p}:\mathbb{R}^{k}\twoheadrightarrow N_{p}M$ be orthogonal projections. Denote the space of linear endomorphisms of $\mathbb{R}^{k}$ by $\mathcal{L}$. Define $\Pi:M\to \mathcal{L}$ by $\Pi(p)=\Pi_{p}$. Define the **covariant derivative** $\nabla:\mathfrak{X}(M)\times \mathfrak{X}(M)\to \mathfrak{X}(M)$ by
> $$
> \nabla_{X}Y|_{p}:=\Pi_{p}(D_{X}Y).
> $$
> 
^9c4967

The following lemma justifies $\nabla_{X}Y\in \mathfrak{X}(M)$.

> [!Lemma]
> $\Pi:M\to \mathcal{L}$ is smooth. 

^7d2954



Recall [[LEC DGT 4#^51b187]]: 

![[LEC DGT 4#^51b187]]

We have these analogues for $\nabla$, all of which follow immediately from the corresponding identities for $D$ (the last one follows from the fact that $(D_{X}Y-\nabla_{X}Y)|_{p}\perp T_{p}M$ at each $p$).

> [!Proposition]
> Let $X, Y\in \mathfrak{X}(M)$, and $f\in C^{\infty}(M)$. The following hold:
> 1. $\nabla$ is $\mathbb{R}$-linear in both arguments. 
> 2. $\nabla_{fX}Y=f\nabla_{X}Y$. 
> 3. $\nabla_{X}(fY)=(D_{X}f)(Y)+f\nabla_{X}Y$. 
> 4. $\nabla_{X}Y-\nabla_{Y}X=[X, Y]$. 
> 5. $D_{X}\langle Y, Z \rangle=\langle D_{X}Y, Z \rangle+\langle Y, D_{X}Z \rangle=\langle \nabla_{X}Y, Z \rangle+\langle Y, \nabla_{X}Z \rangle$. 

^269bec


> [!Notation]
> Let $V\subseteq M\subseteq \mathbb{R}^{k}$. For $f\in C^{\infty}(V)$, 
> $$
> \partial_{i}f:=D_{\varphi_{i}}f\in C^{\infty}(V).
> $$
> Note that $D_{\varphi_{i}}f(\varphi(a))=\partial_{i}(f\circ\varphi)(a)$:
> $$
> \begin{align}
> D_{\varphi _{i}}f (\varphi(a)) & =Df_{\varphi(a)}(\varphi_{i}|_{\varphi(a)}) \\
>  & =Df_{\varphi(a)}(D\varphi_{a}(e_{i})) \\
>  & =D(f\circ\varphi)_{a}(e_{i}) \\
>  & =\partial_{i}(f\circ\varphi)(a).
> \end{align}
> $$
> 


> [!Definition] Christoffel symbols
> Let $\varphi:\Omega\to V$ be a local parameterization. Define $\Gamma_{ij}^{k}\in C^{\infty}(\Omega)$, the **Christoffel symbols**, by
> $$
> \nabla_{\varphi_{i}}\varphi_{j}|_{\varphi(a)}=\Gamma_{ij}^{k}(a)\varphi_{k}|_{\varphi(a)}.
> $$
> 

Note that for $X, Y\in \mathfrak{X}(M)$ with $X=X^{i}\varphi_{i}$ and $Y=Y^{j}\varphi_{j}$, we have
$$
\begin{align}
\nabla_{X}Y & =\nabla_{X^{i}\varphi_{i}}Y^{j}\varphi_{j}  \\
 & =X^{i}\nabla_{\varphi_{i}}Y^{j}\varphi_{j} \\
 & =X^{i}(D_{\varphi_{i}}Y^{j})\varphi_{j}+X^{i}Y^{j}\nabla_{\varphi_{i}}\varphi_{j} \\
 & =X^{i}(\partial_{i}Y^{j})\varphi_{j}+X^{i}Y^{j}(\Gamma_{ij}^{k}\circ\varphi ^{-1})\varphi_{k}.
\end{align}
$$

> [!Proposition]
> Let $\varphi:\Omega\to V$ be a local parameterization of $M$. Let $g_{ij}$ be [[LEC DGT 5#^926cee|components]] of $\mathrm{I}_{M}$ with respect to $\varphi$, and $\Gamma_{ij}^{k}$ be the Christoffel symbols with respect to $\varphi$. Denote the entries of $[g_{ij}]^{-1}$ by $g^{ij}$. Then, 
> $$
> \begin{align}
> \Gamma_{ij}^{k}=\frac{1}{2}(\partial_{i}g_{lj}+\partial_{j}g_{li}-\partial_{l}g_{ij})g^{lk}.
> \end{align}
> $$
> 
> 
> > [!Proof]-
> > 
> > We have 
> > $$
> > \partial_{ij}\varphi(a)=\Gamma_{ij}^{k}(a)\partial_{k}\varphi(a)+\nu_{ij}(a)
> > $$
> > for some $\nu_{ij}$ perpendicular to the tangent spaces at each point. Take take the inner product with $\partial_{l}\varphi$ to obtain
> > $$
> > \langle\partial_{l}\varphi,  \partial_{ij}\varphi \rangle =g_{lk}\Gamma_{ij}^{k}.
> > $$
> > Using
> > $$
> > \begin{align}
> > \partial_{l}g_{ij} & =\langle \partial_{il}\varphi, \partial_{j}\varphi  \rangle +\langle \partial_{i}\varphi, \partial_{jl}\varphi \rangle,  \\
> > \partial_{i}g_{jl} & =\langle \partial_{il}\varphi, \partial_{j}\varphi  \rangle +\langle \partial_{l}\varphi, \partial_{ij}\varphi \rangle,  \\
> > \partial_{j}g_{il} & =\langle \partial_{ij}\varphi, \partial_{l}\varphi \rangle +\langle \partial_{i}\varphi, \partial_{jl}\varphi \rangle ,
> > \end{align}
> > $$
> > we obtain
> > $$
> > \partial_{i}g_{jl}+\partial_{j}g_{il}-\partial_{l}g_{ij}=2\langle \partial_{l}\varphi, \partial_{ij}\varphi \rangle =2g_{lk}\Gamma^{k}_{ij}.
> > $$
> > Note that this is a system of $n$ equations, for $l=1, \dots, n$. It can be written as $\mathbf{v}=2[g_{lk}]\boldsymbol{\Gamma}_{ij}$, so $\boldsymbol{\Gamma}_{ij}=\frac{1}{2}[g^{lk}]\mathbf{v}$. 
> 

^c86eb5

> [!Remark]
> If we replace $\varphi_{i}, \varphi_{j}, \varphi_{k}$ in the proof of [[#^c86eb5]] with arbitrary vector fields $X, Y, Z$ (and using [[#^269bec]]) we obtain 
> $$
> \begin{align}
> D_{Z}\langle X, Y \rangle  & =\langle \nabla_{Z}X, Y \rangle +\langle X, \nabla_{Z}Y \rangle , \\
> D_{X}\langle Z, Y \rangle  & =\langle \nabla_{X}Z, Y  \rangle +\langle Z, \nabla_{X}Y \rangle , \\
> D_{Y}\langle Z, X \rangle  & =\langle \nabla_{Y}Z, X \rangle +\langle Z, \nabla_{Y}X \rangle .
> \end{align}
> $$
> Note that unlike the commuting mixed partials, $\nabla_{X}Y\ne\nabla_{Y}X$, so things turn out slightly messier:
> $$
> \begin{align}
>  & D_{X}\langle Z, Y \rangle +D_{Y}\langle Z, X \rangle -D_{Z}\langle X, Y \rangle  \\
>  & = \underbrace{ \langle Z, \nabla_{X}Y+\nabla_{Y}X \rangle }_{ 2\langle \nabla_{X}Y, Z \rangle +\langle Z, [Y, X] \rangle  } +\langle Y, [X, Z] \rangle +\langle X, [Y, Z] \rangle .
> \end{align}
> $$
> $$
> \begin{align}
> \implies  2\langle \nabla_{X}Y, Z \rangle   = \,& D_{X}\langle Z, Y \rangle +D_{Y}\langle Z, X \rangle -D_{Z}\langle X, Y \rangle  \\
>     & +\langle Z, [X, Y] \rangle +\langle Y, [Z, X] \rangle -\langle X, [Y, Z] \rangle .
> \end{align}
> $$
> 

^de839a

Finally, we prove that $\nabla$ is in fact intrinsic. 

> [!Theorem]
> If $F:M\to N$ is an isometry and $\nabla, \tilde{\nabla}$ are the covariant derivatives on $M, N$, then 
> $$
> \tilde{\nabla}_{F_{*}X}F_{*}Y=F_{*}(\nabla_{X}Y).
> $$
> 
> 
> > [!Proof]-
> > 
> > Let $Z\in \mathfrak{X}(M)$ be arbitrary. Denote $F_{*}X$, $F_{*}Y$, $F_{*}Z$ by $\tilde{X}$, $\tilde{Y}$, $\tilde{Z}$. Since $F$ is an isometry, $\langle \tilde{X}, \tilde{Y} \rangle_{F(p)}=\langle X, Y \rangle_{p}$, so $\langle X, Y \rangle=\langle \tilde{X}, \tilde{Y} \rangle\circ F$. By [[#^1d8e76]], 
> > $$
> > \begin{align}
> > D_{X}\langle Y, Z \rangle |_{p} & =D_{X}(\langle \tilde{Y}, \tilde{Z} \rangle \circ F)|_{p} \\
> >  & =D_{\tilde{X}}\langle \tilde{Y}, \tilde{Z} \rangle |_{F(p)}.
> > \end{align}
> > $$
> > Similarly, 
> > $$
> > \begin{align}
> > \langle \tilde{Z}, [\tilde{X}, \tilde{Y}] \rangle |_{F(p)} & =\langle F_{*}Z_{p}, F_{*}[X, Y]_{p} \rangle  \\
> >  & =\langle Z, [X, Y] \rangle |_{p}.
> > \end{align}
> > $$
> > By [[#^de839a]], 
> > $$
> > \begin{align}
> > 2\langle \tilde{\nabla}_{\tilde{X}}\tilde{Y}, \tilde{Z} \rangle|_{F(p)}  & = D_{\tilde{X}}\langle \tilde{Y}, \tilde{Z} \rangle |_{F(p)}+\dots \\
> >  & ~~~~~ + \langle \tilde{Z}, [\tilde{X}, \tilde{Y}] \rangle |_{F(p)}+\dots \\
> >  & =D_{X}\langle Y, Z \rangle |_{p}+\dots \\
> >  & ~~~~~ + \langle Z, [X, Y] \rangle |_{p} \\
> >  & =2\langle \nabla_{X}Y, Z \rangle |_{p}.
> > \end{align}
> > $$
> > The claim follows. 
> 

[^1]: Global?

## What about the normal component of $D_{X}Y$?

We can write
$$
D_{X}Y=\nabla_{X}Y+\hat{\Pi}(D_{X}Y).
$$
Recall that the two summands above are orthogonal. We have seen that $\nabla_{X}Y$ is intrinsic, but $\hat{\Pi}(D_{X}Y)$ is not. The latter depends on how the tangent space $T_{p}M$ varies with $p$. 

Since $\Pi:M\to \mathcal{L}(\mathbb{R}^{k}, \mathbb{R}^{k})$, $\Pi$ can be thought of as a smooth map from $M$ to $\mathbb{R}^{k^{2}}$. 

> [!Proposition]
> $\hat{\Pi}(D_{X}Y)=(D_{X}\Pi)(Y)$. 
> 
> > [!Proof]-
> > 
> > Let $\Pi=[\Pi_{i}^{j}]$. Because $\Pi(Y)=Y$, we have $\Pi_{i}^{j}Y^{j}=Y^{j}$. Applying $D_{X}$ on both sides, we obtain
> > $$
> > \begin{align}
> > (D_{X}\Pi_{i}^{j})Y^{j}+\Pi_{i}^{j}(D_{X}Y^{j}) & =D_{X}Y^{j}. \\
> > \implies(D_{X}\Pi)(Y)+\Pi (D_{X}Y) & =D_{X}Y \\
> >  \implies (D_{X}\Pi)(Y) =\hat{\Pi}(D_{X}Y).
> > \end{align}
> > $$
> 

^7cc2b0

> [!Lemma]
> $\hat{\Pi}(D_{X}Y)=\hat{\Pi}(D_{Y}X)$. 
> 
> > [!Proof]-
> > $0=\hat{\Pi}([X, Y])=\hat{\Pi}(D_{X}Y-D_{Y}X)=\hat{\Pi}(D_{X}Y)-\hat{\Pi}(D_{Y}X)$. 
> 

^6fee36

