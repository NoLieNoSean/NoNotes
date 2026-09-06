---
id: "537"
date: 2026-08-19
time: 14:00
tags:
  - Lecture
  - DGEO
---
> [!Definition] First fundamental form
> For $p\in M\subseteq \mathbb{R}^{n}$, the **first fundamental form** of $M$ at $p$ is the inner product $g_{p}:T_{p}M\times T_{p}M\to \mathbb{R}$ obtained by restricting the standard inner product of $\mathbb{R}^{k}$ to $T_{p}M$. The first fundamental form is abbreviated as FFF, and denoted $I_{M}$. 

> [!Definition] Isometries and local isometries
> 1. An **isometry** from $M$ to $N$ is a diffeomorphism $F:M\to N$ such that for all $p\in M$, $DF_{p}:T_{p}M\to T_{F(p)}N$ is a linear isometry, i.e. for all $v, w\in T_{p}M$, 
> $$
> \langle DF_{p}(v), DF_{p}(w) \rangle_{F(p)} =\langle v, w \rangle_{p}.
> $$
> 	We may also refer to such isometries as **Riemannian isometries**, to distinguish them from metric isometries. 
> 2. A smooth map $F:M\to N$ is called a **local isometry** if for all $p\in M$, there exist open neighborhoods $U\subseteq M$ of $p$ and $V\subseteq N$ of $F(p)$ such that $F|_{U}:U\to V$ is an isometry. 
> 3. Two manifolds $M, N$ are **locally isometric** around $p\in M$ and $q\in N$ if there exists open neighborhoods $U\subseteq M$ of $p$ and $V\subseteq N$ of $q$ and an isometry $F:U\to V$ with $F(p)=q$. 

^88035c

Since $g_{p}$ is a bilinear form on $T_{p}M$, we can represent $g_{p}$ by a matrix once we fix a basis for $T_{p}M$. 

Let $\phi:\Omega\to V$ be a local parameterization of $M$. Then $\phi_{1}, \dots, \phi_{n}$ form a basis of $T_{p}M$ for all $p\in V$. 

> [!Definition]
> For $1\leqslant i, j\leqslant n$, the **components of the first fundamental form with respect to $\phi$** are smooth functions $g_{ij}:\Omega\to \mathbb{R}$ defined by
> $$
> \begin{align}
> g_{ij} & :=\langle \phi_{i}|_{\phi(a)}, \phi_{j}|_{\phi(a)} \rangle \\
>  & = \langle \partial_{i}\phi(a), \partial_{j}\phi(a) \rangle .
> \end{align}
> $$
> The matrix of $g_{\phi(a)}$ with respect to the basis $\phi_{1}|_{\phi(a)}, \dots, \phi_{n}|_{\phi(a)}$ is given by 
> $$
> G(a):=(g_{ij}(a))_{1\leqslant  i, j\leqslant  n}.
> $$

Clearly, $G(a)$ is a symmetric, positive definite matrix. 

> [!Proposition]
> $M$ and $N$ are locally isometric around $p\in M$ and $q\in N$ $\iff$ there exists open $\Omega \subseteq \mathbb{R}^{n}$, local parameterizations $\phi:\Omega\to U\subseteq M$ and $\psi:\Omega\to V\subseteq N$ such that $p\in U$, $q\in V$, $\phi ^{-1}(p)=\psi ^{-1}(q)$ and $g_{ij}^{\phi}(a)=h_{ij}^{\psi}(a)$ for all $a\in \Omega$, where $g=\mathrm{I}_{M}$ and $h=\mathrm{I}_{N}$. 


We call $\gamma:[a, b]\to M$ **regular** if it is smooth and $|\gamma'(t)|\ne 0$ for all $t\in[a, b]$. 

We define the length of a piecewise regular curve $\gamma:[a, b]\to M$ by
$$
L(\gamma):=\int_{a}^{b} |\gamma'(t)| \, dt.
$$

> [!Definition] Intrinsic distance
> Given a manifold $M$, the **intrinsic distance function** on $M$ is defined to be
> $$
> D_{m}(p, q):=\inf \{ L(\gamma):\gamma:[a, b]\to M \text{ is a p.w regular curve with }\gamma(a)=p, \gamma(b)=q\}.
> $$

^0c7a72

[!Lemma]
If $M$ is connected then any two points in $M$ can be joined by a piecewise regular curve. 

---

Reparameterization and normalization of curves