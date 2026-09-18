---
id: "537"
date: 2026-08-19
time: 14:00
tags:
  - Lecture
  - DGEO
desc: Riemannian Isometries, curves, lengths, reparameterizations, intrinsic metric
P1: true
P2: true
---
# Riemannian Isometries

Recall that the standard inner product on $\mathbb{R}^{k}$ is defined by
$$
\langle v, w \rangle =\sum_{i=1}^{k} v^{i}w^{i}.
$$

> [!Definition] First fundamental form
> For $p\in M\subseteq \mathbb{R}^{n}$, the **first fundamental form** of $M$ at $p$ is the inner product $g_{p}:T_{p}M\times T_{p}M\to \mathbb{R}$ obtained by restricting the standard inner product of $\mathbb{R}^{k}$ to $T_{p}M$. The first fundamental form is abbreviated as FFF, and denoted $\mathrm{I}_{M}$. 

We say that a property of $M$ is **intrinsic** if it can be described purely in terms of the FFF of $M$. 

> [!Definition] Isometries and local isometries
> 1. An **isometry** from $M$ to $N$ is a diffeomorphism $F:M\to N$ such that for all $p\in M$, $DF_{p}:T_{p}M\to T_{F(p)}N$ is a linear isometry, i.e. for all $v, w\in T_{p}M$, 
> $$
> \langle DF_{p}(v), DF_{p}(w) \rangle_{F(p)} =\langle v, w \rangle_{p}.
> $$
> 	We may also refer to such isometries as **Riemannian isometries**, to distinguish them from metric isometries. 
> 2. A smooth map $F:M\to N$ is called a **local isometry** if for all $p\in M$, there exist open neighborhoods $U\subseteq M$ of $p$ and $V\subseteq N$ of $F(p)$ such that $F|_{U}:U\to V$ is an isometry. 
> 3. Two manifolds $M, N$ are **locally isometric** around $p\in M$ and $q\in N$ if there exists open neighborhoods $U\subseteq M$ of $p$ and $V\subseteq N$ of $q$ and an isometry $F:U\to V$ with $F(p)=q$. 

^88035c

Since intrinsic properties can be completely described in terms of the FFF, they are preserved by isometries. 

Since $g_{p}$ is a positive definite symmetric [[LEC ALG1 23#^d9a4f7|bilinear form]] on $T_{p}M$, we can represent $g_{p}$ by a positive definite symmetric matrix once we fix a basis for $T_{p}M$. 

> [!Definition] 
> Let $\phi:\Omega\to V$ be a local parameterization of $M$; $\phi_{1}, \dots, \phi_{n}$ form a basis of $T_{p}M$ for all $p\in V$. For $1\leqslant i, j\leqslant n$, the **components of the first fundamental form with respect to $\phi$** are smooth functions $g_{ij}:\Omega\to \mathbb{R}$ defined by
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
> 

> [!Example]
> Suppose $M^{m}\subseteq \mathbb{R}^{k}$, $N^{n}\subseteq \mathbb{R}^{l}$. Let $\varphi:\Omega\to U\subseteq M$, $\psi:\Theta\to V\subseteq N$ be local parameterizations around $p\in M$, $q\in N$. Then the product map $\rho:\Omega \times\Theta \to U\times V$ is a local parameterization of $M\times N$ around $(p, q)$. 
> 
> We have
> 1. $D\rho_{(a, b)}(u, v)=\begin{bmatrix}D\varphi_{a}(u) &  \\& D\psi_{b}(v)\end{bmatrix}$;
> 2. $T_{(\varphi(a), \psi(b))}(M\times N)=T_{\varphi(a)}M\times T_{\psi(b)}\times N$;
> 3. $\langle (u_{1}, v_{1}), (u_{2}, v_{2}) \rangle=\langle u_{1}, u_{2} \rangle+\langle v_{1}, v_{2} \rangle$;
> 4. the matrix of $\mathrm{I}_{M\times N}$ wrt $\rho$ is $G^{M\times N}(a, b)=\begin{bmatrix}G^{M}(a) &  \\& G^{N}(b)\end{bmatrix}$. 

> [!Proposition]
> $M$ and $N$ are locally isometric around $p\in M$ and $q\in N$ $\iff$ there exists open $\Omega \subseteq \mathbb{R}^{n}$, local parameterizations $\phi:\Omega\to U\subseteq M$ and $\psi:\Omega\to V\subseteq N$ such that $p\in U$, $q\in V$, $\phi ^{-1}(p)=\psi ^{-1}(q)$ and $g_{ij}^{\phi}(a)=h_{ij}^{\psi}(a)$ for all $a\in \Omega$, where $g=\mathrm{I}_{M}$ and $h=\mathrm{I}_{N}$. 
> 
> > [!Proof]-
> > 
> > Suppose there exists an isometry $F:U'\to V'$. Choose a local parameterization $\varphi:\Omega\to U\subseteq U'$ around $p$. Let $\psi:=F\circ\varphi$. 
> > $$
> > \begin{align}
> > h_{ij}(a) & =\langle \partial_{i}\psi(a), \partial_{j}\psi(a) \rangle  \\
> >  & =\langle DF_{\varphi(a)}(\partial_{i}\varphi(a)), DF_{\varphi(a)}(\partial_{j}\varphi(a)) \rangle  \\
> >  & = \langle \partial_{i}\varphi(a), \partial_{j}\varphi(a) \rangle  \\
> >  & =g_{ij}(a).
> > \end{align}
> > $$
> > For the converse, let $F:=\psi \circ\varphi ^{-1}$. Let $v, w\in T_{\varphi(a)}M$, with $v=\sum_{i}v^{i}\varphi_{i}|_{\varphi(a)}$, $w=\sum_{j}w^{j}\varphi_{j}|_{\varphi(a)}$. Since $F\circ\varphi=\psi$, we have $DF_{\varphi(a)}(\varphi_{i}|_{\varphi(a)})=\psi_{i}|_{\psi(a)}$. Thus, 
> > $$
> > \begin{align}
> > \langle DF_{\varphi(a)}(v), DF_{\varphi(a)}(w) \rangle  & =\sum_{i, j}v^{i}w^{j}\langle \psi_{i}|_{\psi(a)}, \psi_{j}|_{\psi(a)}  \rangle \\
> >  & =\sum_{i, j}v^{i}w^{j}h_{ij}(a) \\
> >  & =\sum_{i, j}v^{i}w^{j}g_{ij}(a) \\
> >  & =\langle v, w \rangle .
> > \end{align}
> > $$
> > 
> 

> [!Notation] Einstein summation convention
> If the same index appears twice in any term, that term is understood to be summed over all possible values of that index. 

# Curves, lengths, and reparameterizations

We call $\gamma:[a, b]\to M$ **regular** if it is smooth and $|\gamma'(t)|\ne 0$ for all $t\in[a, b]$. 

We call $\gamma$ **piecewise smooth (regular)** if there exists a partition $a=t_{0}< t_{1}<\dots< t_{m}=b$ such that $\gamma_{[t_{i-1}, t_{i}]}$ is smooth (regular) for all $i=1, \dots, m$. Note that this implies $|\gamma'(t)|$ is bounded away from $\{ t_{1}, \dots, t_{m} \}$. 

We define the **length** of a piecewise regular curve $\gamma:[a, b]\to M$ by
$$
L(\gamma):=\int_{a}^{b} |\gamma'(t)| \, dt.
$$

Suppose $\gamma:I\to M$ is smooth. A **reparameterization** of $\gamma$ is a curve of the form $\tilde{\gamma}=\gamma \circ\varphi:J\to M$ where $\varphi:J\to I$ is a diffeomorphism. Note that
$$
\begin{align}
L(\tilde{\gamma})=\int_{J}|\tilde{\gamma}'(s)|\,ds=\int_{J}|\gamma'(\varphi(s))||\varphi'(s)|\,ds=\int_{I}|\gamma'(t)|\,dt,
\end{align}
$$
so reparameterization preserves length. 

If $\gamma$ is piecewise smooth (regular), a **reparameterization** of $\gamma$ is a piecewise smooth (regular) curve of the form $\tilde{\gamma}=\gamma \circ\varphi:[c, d]\to M$, where $\varphi:[c, d]\to[a, b]$ is a homeomorphism for which there exists a partition $c=c_{0}<\dots < c_{k}=d$ of $[c, d]$ such that $\varphi|_{[c_{i-1}, c_{i}]}$ is a diffeomorphism onto its image. 

> [!Proposition]
> 1. The length of a piecewise smooth curve is invariant under reparameterization. 
> 2. If $\gamma$ is a piecewise regular curve $L(\gamma)=l$, then there exists a reparameterization $\tilde{\gamma}:[0, l]\to M$ of $\gamma$ such that $|\tilde{\gamma}'(s)|=1$ whenever $\tilde{\gamma}$ is smooth at $s$. 

> [!Definition] Arc length reparameterization
> Suppose $\gamma:[a, b]\to M$ is regular. Let $L(\gamma)=l$. Define $\alpha:[a, b]\to[0, l]$ by
> $$
> \alpha(t)=\int_{a}^{t} |\gamma'(\tau)| \, d\tau. 
> $$
> $\alpha'(t)=|\gamma'(t)|> 0$ (so $\alpha$ is a diffeomorphism), $\alpha(a)=0$, $\alpha(b)=l$. Let $\varphi=\alpha ^{-1}$ and $\tilde{\gamma}=\gamma \circ\varphi$. We have
> $$
> |\tilde{\gamma}'(s)|=|\gamma'(\varphi(s))||\varphi'(s)|= \frac{|\gamma'(\varphi(s))|}{\alpha'(\varphi(s))}=1.
> $$
> Therefore, 
> $$
> L(\tilde{\gamma}|_{[0, \sigma]})=\int_{0}^{\sigma} |\tilde{\gamma}'(s)| \, ds =\sigma.
> $$
> $\tilde{\gamma}$ is called the **arc length reparameterization** of $\gamma$. 


# Intrinsic distance function on a manifold

> [!Lemma]
> If $M$ is connected then any two points in $M$ can be joined by a piecewise regular curve. 
> 
> > [!Proof]-
> > 
> > Fix $p\in M$. Let $S$ be the set of all $q\in M$ such that there exists a piecewise regular curve from $p$ to $q$. We'll show that $S$ is both open and closed. 
> > 
> > Let $q\in S$. There exists a local parameterization $\varphi:B^{n}_{1}(0)\to V$ around $q$. For any $q'\in V$, there exists regular $\gamma:[0, 1]\to V$ form $q$ to $q'$ - just take the image under $\varphi$ of the straight line in $B_{1}^{n}(0)$. By concatenating $\gamma$ with a piecewise regular curve from $p$ to $q$, we obtain a piecewise regular curve from $p$ to $q'$. Thus, $V\subseteq S$, and $S$ is open. It can be shown that $S^{c}$ is open in a similar way. 

> [!Definition] Intrinsic distance
> Given a manifold $M$, the **intrinsic distance function** on $M$ is defined to be
> $$
> d_{M}(p, q):=\inf \{ L(\gamma):\gamma:[a, b]\to M \text{ is a p.w. regular curve with }\gamma(a)=p, \gamma(b)=q\}.
> $$

^0c7a72