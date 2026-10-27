---
id: "552"
date: 2026-09-04
time: 22:59
tags:
  - DGEO
  - Lecture
desc: exponential map, tangent bundle
P1: true
---
> [!Notation]
> For $p\in M$ and $w\in T_{p}M$, let $\gamma_{w}:I_{w}\to M$ denote [[LEC DGT 9#^ba5caa|the maximal geodesic]] with $\gamma_{w}(0)=p$ and $\gamma_{w}'(0)=w$.

> [!Lemma]
> For all $v\in T_{p}M$ and $c\ne 0$, 
> $$
> \begin{align}
>  & I_{cv}=c^{-1}I_{v}, \\
>  & \gamma_{cv}(t)=\gamma_{v}(ct)\quad \forall t\in I_{cv}
> \end{align}
> $$
> 

> [!Definition] The exponential map
> Given $p\in M$, define
> $$
> \begin{align}
>  & \mathcal{E}_{p}:=\{ v\in T_{p}M :1\in I_{v}\}, \\\\
>  & \exp_{p}:\mathcal{E}_{p}\to M, \quad \exp_{p}(v)=\gamma_{v}(1).
> \end{align}
> $$
> 

Notes:
1. $1\in I_{v}\iff[0, 1]\in I_{v}$. Since $0\in \mathcal{E}_{p}$ ($I_{0}=\mathbb{R}$), $\mathcal{E}_{p}$ is a *star-shaped* subset of $T_{p}M$ wrt 0. 
2. If $v=tu$ for, then $\exp_{p}(v)=\gamma_{tu}(1)=\gamma_{u}(t)$. 
3. For any $v\in T_{p}M$, $I_{v}=\{ s\in \mathbb{R} :sv\in \mathcal{E}_{p}\}$.

> [!Definition] The tangent bundle
> Let $M^{n}\subseteq \mathbb{R}^{k}$ be a manifold. The **tangent bundle** of $M$, $TM=\{ (p, v)\in \mathbb{R}^{k}\times \mathbb{R}^{k}:p\in M, v\in T_{p}M \}$.

> [!Proposition]
> $TM\subseteq \mathbb{R}^{2k}$ is a manifold of dimension $2n$. 

> [!Definition]
> $\mathcal{E}:=\{ (p, v)\in TM, v\in \mathcal{E}_{p} \}$. Define $\exp:\mathcal{E}\to M$ by $\exp(p, v)=\exp_{p}(v)$. 

The following two lemmas will be proved in the graduate manifolds course. 

> [!Lemma]
> Let $F$ be a Lipschitz continuous vector field on a manifold $M$. Then for all $p\in M$ there exists $\epsilon> 0$ and a unique $C^{1}$ function $y:(-\epsilon, \epsilon)\to M$ such that $y_{p}(0)=p$ and $y'_{p}(t)=F(y_{p}(t))$. Moreover, if $F$ is smooth, then $y$ is also smooth. 

^37f71e

> [!Lemma]
> Suppose $F\in \mathfrak{X}(M)$. Denote the unique maximal integral curves of [[#^37f71e]] by $y_{p}:I_{p}\to M$, $y_{p}(0)=p$. Define $\mathcal{D}=\{ (t, p) \in \mathbb{R}\times M\vartheta\in I_{p}\}$, $\theta:\mathcal{D}\to M$ by $\theta(t, p)=y_{p}(t)$. Then $\mathcal{D}$ is open in $\mathbb{R}\times M$, and $\theta$ is smooth. 

> [!Proposition]
> $\mathcal{E}\subseteq TM$ is open and $\exp:\mathcal{E}\to M$ is smooth. 

> [!Proposition]
> $\mathcal{E}_{p}\subseteq T_{p}M$ is open and $\exp_{p}:\mathcal{E}_{p}\to M$ is smooth. 


> [!Proposition]
> $D(\exp_{p})_{0}:T_{p}M\to T_{p}M$ is the identity. 
> 
> > [!Proof]-
> > 
> > Recall [[LEC DGT 3#^233791]]. Let $c:(-\epsilon, \epsilon)\to T_{p}M$ be defined by $c(t)=tv$, so that $c(0)=0$ and $c'(0)=v$. Then, 
> > $$
> > D(\exp_{p})_{0}(v)=(\exp_{p}\circ c)'(0)=(\exp_{p}(tv))'(0)=(\gamma_{v}(t))'(0)=v.
> > $$
> > 


By the [[LEC DGT 3#^0d2d87|inverse function theorem]], there exists $\epsilon> 0$ and an open neighborhood $U\subseteq M$ of $p$ such that $\exp_{p}:B_{\epsilon}(0)\to U$ is a diffeomorphism. 

> [!Definition] normal neighborhood and parameterization
> An open neighborhood $U$ of $p\in M$ is called a **normal neighborhood** of $p$ if there exists a star shaped neighborhood $V$ of $0$ in $T_{p}M$ such that $\exp_{p}:V\to U$ is a diffeomorphism. 
> 
> Suppose $\{ b_{i} \}$ is an orthonormal basis of $T_{p}M$ and $B:\mathbb{R}^{n}\to T_{p}M$ maps $e_{i}\mapsto b_{i}$. Let $\Omega=B^{-1}(V)$. Then, $\varphi:\Omega\to U$ defined by $\varphi=\exp_{p}\circ B$ is called a **normal parameterization** of $U$. 