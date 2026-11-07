---
id: "598"
date: 2026-09-11
time: 19:37
tags:
  - Lecture
  - DGEO
pics: true
P1: true
desc: geodesics are local minimizers
---
Recall [[LEC DGT 11#^d5b74f]] - If $\gamma$ is a piecewise regular length minimizing curve, then $\gamma$ is smooth and arc length parameterization of $\gamma$ is a geodesic. 

The converse is not true: For example, a geodesic connecting two points on $S^{2}$ need not be length minimizing! However, a local version of the converse can be obtained. 

> [!Definition] Injectivity radius
> Let $p\in M$. The injectivity radius at $p$ is defined to be
> $$
> \text{inj}(p)=\sup \{ a> 0: \exp_{p}:B_{a}(0)\to M\text{ is a diffeo. onto its image}\}
> $$
> 

> [!Lemma]
> Let $\rho=\text{inj}(p)$. Then, $\exp_{p}:B_{\rho}(0)\to M$ is a diffeomorphism onto its image. 
> 
> > [!Proof]-
> > 
> > Let $w\in B_{\rho}(0)$. There exists $|w|< a< \rho$ such that $\exp_{p}:B_{a}(0)\to M$ is a diffeomorphism onto its image. Thus, a neighborhood of $w$ is diffeomorphic onto its image under $\exp_{p}$. 
> > 
> > For $w_{1}, w_{2}\in B_{\rho}(p)$, there exists $|w_{1}|, |w_{2}|< a< \rho$ such that $\exp_{p}:B_{a}(0)\to M$ is a diffeomorphism onto its image. Thus, $\exp_{p}(w_{1})\ne \exp_{p}(w_{2})$. 
> 

> [!Definition]
> Let $\rho=\text{inj}(p)$, $U=\exp_{p}(B_{\rho}(0))$. For $0<\epsilon< \rho$, define 
> $$
> \begin{align}
> \Sigma_{\epsilon} & :=\exp_{p}(\partial B_{\epsilon}(0)) \\
>  & = \{ \exp_{p}(v):v\in T_{p}M, |v|=\epsilon \}.
> \end{align}
> $$
> Clearly, $\Sigma_{\epsilon}\subseteq M$ is a submanifold. On $U$, choose a normal parameterization $\varphi:\Omega\to U$ centered at $p$ with coordinates $(x^{1}, \dots, x^{n})$. Define $r:U\to \mathbb{R}$, the **distance from $p$**, by
> $$
> r:=\left[  (x^{1})^{2}+\dots+(x^{n})^{2} \right]^{1/2}.
> $$
> $r$ is smooth on $U\setminus \{ p \}$. On $\mathbb{R}^{n}\setminus \{ 0 \}$, define
> $$
> E_{r}|_{y}=\frac{y^{i}}{|y|}E^{i},
> $$
> where $E^{i}\equiv e_{i}$. On $U\setminus \{ p \}$, define the **unit radial vector field**
> $$
> \begin{align}
> \varphi_{r}|_{q} & :=D\varphi_{a}(E_{r}|_{a})\\
>  &  = D\varphi_{a}\left( \frac{x^{i}(q)}{r(q)}e_{i} \right) \\
>  & =\frac{x^{i}(q)}{r(q)}\varphi_{i}|_{q},
> \end{align}
> $$
> where $a=\varphi ^{-1}(q)$. 

> [!Lemma]
> Let $\gamma(t)=\exp_{p}(tv)$ be a geodesic passing through $p$. Then, $\varphi_{r}|_{\gamma(t)}=\hat{\gamma}'(t)$. 
> 
> > [!Proof]-
> > 
> > Let $\overline{v}=(v^{1}, \dots, v^{n})$, $v=v^{i}b_{i}$ in the orthonormal coordinates corresponding to $\varphi$. Then, $\gamma'(t)=D\varphi(v^{1}, \dots, v^{n})=v^{i}\varphi_{i}|_{\gamma(t)}$.
> > $$
> > \begin{align}
> > \varphi_{r}|_{\gamma(t)}=\frac{tv^{i}}{|t\overline{v}|}\varphi_{i}|_{\gamma(t)}= \frac{v^{i}}{|\overline{v}|}\varphi_{i}|_{\gamma(t)}.
> > \end{align}
> > $$
> > Since $b_{1}, \dots, b_{n}$ is an orthonormal basis, $|\overline{v}|=|v|$, and
> > $$
> > \varphi_{r}|_{\gamma(t)}=\frac{1}{|v|}\gamma'(t).
> > $$
> > The claim now follows from the fact that $|v|=|\gamma'(0)|=|\gamma'(t)|$. 
> 


> [!Theorem]
> 1. $|\varphi_{r}(q)|=1$ for all $q\in U\setminus \{ p \}$ 
> 2. $\varphi_{r}\perp \Sigma_{\epsilon}$ for all $0<\epsilon< \rho$
> 3. $\text{grad}\,r=\varphi_{r}$. 


[!Proof]-


> [!Theorem]
> Let $\rho$ be the injectivity radius at $p\in M$. Let $q\in U=\exp_{p}(B_{\rho}(0))$. Then the geodesic segment in $U$ from $p$ to $q$ is the unique (up to reparameterization) minimizing curve in $M$ from $p$ to $q$. 