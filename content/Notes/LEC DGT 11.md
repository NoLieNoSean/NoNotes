---
id: "557"
date: 2026-09-09
time: 14:03
tags:
  - DGEO
  - Lecture
pics: true
desc: Normal coordinate systems, minimizing curves
P2: true
P1: true
---
# Normal coordinate systems

> [!Remark]
> Recall [[LEC DGT 10#^1a092d]]. By the [[LEC DGT 3#^0d2d87|inverse function theorem]], there exists $\epsilon> 0$ and an open neighborhood $U\subseteq M$ of $p$ such that $\exp_{p}:B_{\epsilon}(0)\to U$ is a diffeomorphism. 

^77f863

> [!Definition] normal neighborhood and parameterization
> An open neighborhood $U$ of $p\in M$ is called a **normal neighborhood** of $p$ if there exists a star shaped neighborhood $V$ of $0$ in $T_{p}M$ such that $\exp_{p}:V\to U$ is a diffeomorphism. 
> 
> Suppose $\{ b_{i} \}$ is an orthonormal basis of $T_{p}M$ and $B:\mathbb{R}^{n}\to T_{p}M$ maps $e_{i}\mapsto b_{i}$. Let $\Omega=B^{-1}(V)$. Then, $\varphi:\Omega\to U$ defined by $\varphi=\exp_{p}\circ B$ is called a **normal parameterization** of $U$. We call $\varphi ^{-1}$ a **normal coordinate system** (NCS) on $U$. 

^1b1064

> [!Lemma]
> Let $\varphi:\Omega\to U$ be a normal parameterization around $p\in M$. Then, $\varphi_{i}|_{p}=b_{i}$. 
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > \varphi_{i}|_{p} & =D\varphi_{0}(e_{i}) \\
> > 	 & =D(\exp_{p})_{0}Be_{i} \\
> > 	 &  =b_{i}.
> > 
> > \end{align}
> > $$
> > 

> [!Lemma]
> Let $\varphi$, $\psi$ be two normal parameterizations around $p\in M$, $\varphi ^{-1}=(x^{1}, \dots, x^{n})$, $\psi ^{-1}=(y^{1}, \dots, y^{n})$. Then there exists $A=(A^{j}_{i})\in O(n)$ such that $y^{j}=A^{j}_{i}x^{i}$. 
> 
> > [!Proof]-
> > 
> > $\varphi ^{-1}\circ \psi: \tilde{\Omega}\to \Omega$. Suppose $\varphi$, $\psi$ are obtained using $B, \tilde{B}:\mathbb{R}^{n}\to T_{p}M$ respectively. 
> > 
> > Then, 
> > $$
> > \begin{align}
> > \varphi ^{-1}\circ \psi=B^{-1}\circ \exp_{p}^{-1}\circ \exp_{p}\circ \tilde{B}=B^{-1}\tilde{B}\in O(n).
> > \end{align}
> > $$
> > 
> 

> [!Remark]
> 
> Suppose $F:M\to N$ is a local isometry, $p\in M$. Then, this diagram commutes:
> ```latex
> % latex-id: 0620-cb4d-f6d3-492b-8217
> \begin{document}
> % https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG1hdGhjYWwgRV9wIl0sWzEsMCwiXFxtYXRoY2FsIEVfe0YocCl9Il0sWzAsMSwiTSJdLFsxLDEsIk4iXSxbMiwzLCJGIiwyXSxbMCwxLCJERl9wIl0sWzAsMiwiXFxleHBfcCIsMl0sWzEsMywiXFxleHBfe0YocCl9Il1d
> \[\begin{tikzcd} {\mathcal E_p} & {\mathcal E_{F(p)}} \\ M & N \arrow["{DF_p}", from=1-1, to=1-2] \arrow["{\exp_p}"', from=1-1, to=2-1] \arrow["{\exp_{F(p)}}", from=1-2, to=2-2] \arrow["F"', from=2-1, to=2-2] \end{tikzcd}\] 
> 
> \end{document}
> ```
> Indeed, let $v\in \mathcal{E}_{p}$. By [[LEC DGT 9#^b80625]], $F\circ\gamma_{v}$ is a geodesic in $N$. Since $(F\circ\gamma_{v})(0)=F(p)$ and $(F\circ\gamma_{v})'(0)=F_{*}v$, we have $F\circ\gamma_{v}=\gamma_{F_{*}v}$ by [[LEC DGT 9#^ba5caa]]. It now follows that
> $$
> F(\exp_{p}(v))=F(\gamma_{v}(1))=\gamma_{F_{*}v}(1)=\exp_{F(p)}(F_{*}v).
> $$
> 

^71ee50

> [!Theorem]
> Suppose $F, G:M\to \tilde{M}$ are local isometries, with $M, \tilde{M}$ connected, $F(p)=G(p)$ and $DF_{p}=DG_{p}$ for some $p\in M$. Then $F\equiv G$. 
> 
> > [!Proof]-
> > 
> > Let $N=\{ q\in M:F(q)=G(q) \text{ and }DF_{p}=DG_{p}\}$. Continuity of $F$ and $G$ implies $N$ is closed. 
> > 
> > Let $q\in N$. By [[#^71ee50]], for $v\in \mathcal{E}_{q}$,
> > $$
> > \begin{align}
> > F(\exp_{q}(v)) & =\exp_{F(q)}(DF_{q}(v)) \\
> >  & =\exp_{G(q)}(DG_{q}(v)).
> > \end{align}
> > $$
> > Thus, $F\equiv G$ on $\exp_{q}(\mathcal{E}_{q})$. By [[#^77f863]], there exists $\epsilon> 0$ and open neighborhood $U_{q}\subseteq M$ of $q$ such that $B_{\epsilon}(0)\subseteq \mathcal{E}_{q}$ and $\exp_{q}:B_{\epsilon}(0)\to U_{q}$ is a diffeomorphism. So, $U_{q}\subseteq N$, and $N$ is open. $N$ is nonempty because $p\in N$. Since $M$ is connected, $N=M$. 
> 

> [!Proposition]
> Let $\varphi:\Omega\to U$ be a normal parameterization on $U$ entered at $p$ obtained from an ONB $\{ b_{i} \}$. Then, 
> 1. $\varphi ^{-1}(p)=0\in \mathbb{R}^{n}$. 
> 2. $g_{ij}(0)=\delta_{ij}$
> 3. for all $v=v^{i}b_{i}\in T_{p}M$, $\varphi ^{-1}(\gamma_{v}(t))=(tv^{1}, \dots, tv^{n})$.
> 4. $\Gamma_{ij}^{k}(0)=0$ for all $i, j, k$. 
> 5. $\partial_{k}g_{ij}(0)=0$ for all $i, j, k$. 
> 
> > [!Proof]-
> > 
> > $(1)$ is clear. 
> > 
> > $(2)$ $g_{ij}(0)=\langle \varphi_{i}|_{p}, \varphi_{j}|_{p} \rangle=\langle b_{i}, b_{j} \rangle=\delta_{ij}$. 
> > 
> > $(3)$ 
> > $$
> > \begin{align}
> > \gamma_{v}(t) & = \exp_{p}(tv) \\
> >  \varphi ^{-1} & =B\circ \exp_{p}^{-1} \\
> >  \varphi ^{-1}(\gamma_{v}(t)) & =B^{-1}(tv^{i}b_{i}) \\
> >  & =(tv^{1}, \dots, tv^{k}).
> > \end{align}
> > $$
> > 
> > $(4)$ Recall [[LEC DGT 9#^d14b66]]. Let $v=v^{i}b_{i}\in T_{p}M$, $\gamma=\gamma_{v}$, $\overline{\gamma}(t)=t(v^{1}, \dots, v^{k})$, $\gamma^{k}(t)=tv^{k}$. Then, for each $k$, 
> > $$
> > \begin{align}
> >  & \ddot{\gamma}^{k}+\dot{\gamma}^{i}\dot{\gamma}^{j}\Gamma_{ij}^{k}(\overline{\gamma})=0 \\
> > & 0+v^{i}v^{j}\Gamma_{ij}^{k}(0)=0.
> > \end{align}
> > $$
> > We will write $\Gamma^{k}_{ij}$ in place of $\Gamma^{k}_{ij}(0)$. 
> > 
> > If $v=b_{l}$, we have $v^{i}=\delta_{il}$ and
> > $$
> > \begin{align}
> >  & \delta_{il}\delta_{jl}\Gamma_{ij}^{k}=0,
> > \end{align}
> > $$
> > so $\Gamma_{ll}^{k}=0$ for all $l, k$. Next, if $v=b_{l}+b_{m}$, we have $v^{i}=\delta_{il}+\delta_{im}$ and
> > $$
> > \begin{align}
> > (\delta_{il}+\delta_{im})(\delta_{jl}+\delta_{jm})\Gamma_{ij}^{k} & =0 \\
> > \Gamma_{ll}^{k}+\Gamma_{lm}^{k}+\Gamma_{ml}^{k}+\Gamma_{mm}^{k} & =0 \\
> > \Gamma_{ml}^{k}+\Gamma_{lm}^{k} & =0 \\
> >   \Gamma_{ml}^{k}   & =0,
> > \end{align}
> > $$
> > because $\Gamma_{ml}^{k}=\gamma_{lm}^{k}$. 
> > 
> > $(5)$ 
> > $$
> > \begin{align}
> > g_{ij} & =\langle \partial_{i}\varphi, \partial_{j}\varphi \rangle  \\
> > \partial_{k}g_{ij} & =\langle \partial_{ik}\varphi, \partial_{j}\varphi \rangle  +\langle \partial_{i}\varphi , \partial_{kj}\varphi\rangle .
> > \end{align}
> > $$
> > Recall the expression $\partial_{ij}\varphi=\Gamma_{ij}^{k}\partial_{k}\varphi+\nu_{ij}$ from the proof of [[LEC DGT 7#^c86eb5]].
> > $$
> > \begin{align}
> > \partial_{k}g_{ij} (0)& = (\Gamma_{ik}^{m}g_{mj}+\Gamma_{jk}^{m}g_{mi})|_{0}=0.
> > \end{align}
> > $$
> > 
> > 
> 

---

# Minimizing curves are geodesics

> [!Definition] Minimizing curve
> Let $p, q\in M$, and let $\mathcal{L}=\{ \gamma:[0, 1]\to M: \gamma\text{ is p.w. regular}, \gamma(0)=p, \gamma(1)=q \}$. [[LEC DGT 5#^0c7a72|Recall]] that $d_{M}(p, q):=\inf \{ L(\gamma):\gamma\in \mathcal{L} \}$. We call $\gamma\in \mathcal{L}$ **minimizing** if $L(\gamma)=d_{M}(p, q)$. 

We will show that minimizing curves are geodesics. 

Let us consider the case when $\gamma$ is regular. 

> [!Definition] Proper variation
> Let $\gamma:[0, 1]\to M$ be a regular curve. A **proper variation** $\Gamma$ of $\gamma$ is a smooth map $\Gamma:(-\epsilon, \epsilon)\times[0, 1]\to M$ such that the following conditions are satisfied ($\Gamma_{s}(t)=\Gamma(s, t)$, $\Gamma_{s}:[0, 1]\to M$)
> 1. $\Gamma_{0}=\gamma$
> 2. for all $s\in(-\epsilon, \epsilon)$, $\Gamma_{s}(0)=p$, $\Gamma_{s}(1)=q$, and $\Gamma_{s}$ is regular. 

> [!Definition]
> Let $\Gamma:J\times I\to M$ be smooth. A **vector field along $\Gamma$** is a smooth map $V:J\times I\to \mathbb{R}^{k}$ such that $V(s, t)\in T_{\Gamma(s, t)}M$. 
> 
> For fixed $s$, $V_{s}(t)=V(s, t)\in \mathfrak{X}(\Gamma_{s})$. We call $D_{t}V(s, t):=D_{t}V_{s}(t)$ the **covariant derivative of $V$ along $\Gamma_{s}$**. 
> 
> For fixed $t$, $V_{t}(s)=V(s, t)\in \mathfrak{X}(\Gamma^{t})$. We call $D_{s}V(s, t):=D_{s}V_{t}(s)$ the **covariant derivative of $V$ along $\Gamma^{t}$**. 

Note that $\partial_{s}\Gamma$ and $\partial_{t}\Gamma$ are vector fields along $\Gamma$. We may denote them by $S$ and $T$ respectively. 

> [!Lemma]
> Let $\Gamma:J\times I\to M$ be smooth. $D_{s}\partial_{t}\Gamma=D_{t}\partial_{s}\Gamma$. 
> 
> > [!Proof]-
> > 
> > Let $\varphi:\Omega\to U$ be a local parameterization, and $\varphi ^{-1}=(x^{1}, \dots, x^{n})$ . Let $\overline{\Gamma}=\varphi ^{-1}\circ\Gamma=(\Gamma^{1}, \dots, \Gamma^{n})$. Then, $\Gamma=\varphi \circ \overline{\Gamma}$ and 
> > $$
> > \begin{align}
> >  & \partial_{t}\Gamma   =\partial_{t}\Gamma^{j}\varphi_{j}|_{\Gamma},  \\
> >  & \partial_{s}\Gamma =\partial_{s}\Gamma^{i}\varphi_{i}|_{\Gamma}.
> > \end{align}
> > $$
> > Using [[LEC DGT 9#^d14b66]], we have (we denote $\Gamma_{ij}^{k}$ by $c_{ij}^{k}$)
> > $$
> > \begin{align}
> > D_{t}\partial_{s}\Gamma & =(\partial_{ts}\Gamma^{k}+\partial_{s}\Gamma^{i}\partial_{t}\Gamma^{j}(c_{ij}^{k}\circ \overline{\Gamma}))\varphi_{k}|_{\Gamma},  \\
> > D_{s}\partial_{t}\Gamma & =(\partial_{st}\Gamma^{k}+\partial_{t}\Gamma^{j}\partial_{s}\Gamma^{i}(c_{ij}^{k}\circ \overline{\Gamma}))\varphi_{k}|_{\Gamma}.
> > \end{align}
> > $$
> > 
> 

^e556a2

The restriction of $T$ to $\gamma$ is $\gamma'$, i.e., $T(0, t)=\gamma'(t)$. On the other hand, $S(0, t)=\partial_{s}\Gamma(0, t)=(\Gamma^{t})'(0)$. 

> [!Definition] Variational field
> We call the restriction of $S$ to $\gamma$ the **variational field of $\Gamma$**, and denote it by $V(t)$. 

Because $\Gamma(s, 0)=p$ for all $s\in(-\epsilon, \epsilon)$, $S(s, 0)=0$ for all $s\in(-\epsilon, \epsilon)$, so $V(0)=0$. Similarly, $S(s, 1)=0$ for all $s\in(-\epsilon, \epsilon)$, and $V(1)=0$. 

> [!Lemma]
> If $V\in \mathfrak{X}(\gamma)$ with $V(0)=0$ and $V(1)=0$, then there exists a proper variation $\Gamma$ of $\gamma$ whose variational field is $V$. 
> 
> > [!Proof]-
> > 
> > Let $\Gamma^{t}$ be the geodesic segment starting at $\gamma(t)$ with initial velocity $V(t)$. Define
> > $$
> > \Gamma(s, t):=\Gamma^{t}(s)=\exp_{\gamma(t)}(sV(t)).
> > $$
> > Clearly, $V(t)=(\Gamma^{t})'(0)$. 
> > 
> > [[LEC DGT 10#^0cd610|Recall]] that $\mathcal{E}$ is an open subset of $TM$. Because $\gamma([0, 1])\subseteq M$ is compact, it follows from the [[LEC CAL1 8#^1e576d|Lebesgue number lemma]] that there exists $\epsilon> 0$ such that $\Gamma:(-\epsilon, \epsilon)\times[0, 1]\to M$ is well defined. 
> 

^f8884c

> [!Remark]
> Let $\Gamma$ be a proper variation of $\gamma$, $S=\partial_{s}\Gamma$, $T=\partial_{t}\Gamma$, $\hat{T}(s, t)=T(s, t)/\lVert T(s, t) \rVert$. Then, using [[LEC CAL1 17#^07b5e5]] and [[#^e556a2]], 
> $$
> \begin{align}
> \frac{d}{ds} L(\Gamma_{s}) & =\frac{d}{ds}  \int_{0}^{1} \langle T, T \rangle^{1/2}  \, dt \\
>  & = \int_{0}^{1} \langle T, T \rangle ^{-1/2}\langle D_{s}T, T \rangle  \, dt  \\
>  & =\int_{0}^{1} \langle D_{t}S, \hat{T} \rangle  \, dt \\
>  & =\int_{0}^{1} \left( \frac{d}{dt} \langle S, \hat{T} \rangle -\langle S, D_{t}\hat{T} \rangle \right)  \, dt \\
>  & =\langle S, \hat{T} \rangle (s, 1)-\langle S, \hat{T} \rangle (s, 0)-\int_{0}^{1} \langle S, D_{t}\hat{T} \rangle  \, dt  \\
>  & =0+0-\int_{0}^{1} \langle S, D_{t}\hat{T} \rangle  \, dt .
> \end{align}
> $$
> If $\gamma$ is minimizing, evaluating the above identity at $s=0$ gives
> $$
> \int_{0}^{1} \langle V, D_{t}\hat{T}|_{\gamma} \rangle  \, dt=0,
> $$
> where $V=S|\gamma$ is the variational field of $\Gamma$.

^c34b62


> [!Theorem]
> If $\gamma$ is minimizing then $\gamma$ is smooth and the [[LEC DGT 5#^44b2ea|arc length parameterization]] of $\gamma$ is a geodesic. 
> 
> > [!Proof]-
> > 
> > Let $\alpha\in C^{\infty}([0, 1])$ be any map such that $\alpha(0)=\alpha(1)=0$ and $\alpha> 0$ on $(0, 1)$. Let $\hat{\gamma}'(t):=\gamma'(t)/\lVert \gamma'(t) \rVert$. Define
> > $$
> > V:=\alpha D_{t}\hat{\gamma}'\in \mathfrak{X}(\gamma).
> > $$
> > By [[#^f8884c]], there exists a proper variation $\Gamma$ whose variational field is $V$. Let $T=\partial_{t}\Gamma$; recall that $T|_{\gamma}=T|_{s=0}=\gamma'$. By [[#^c34b62]], 
> > $$
> > \begin{align}
> > 0=\int_{0}^{1} \langle V, D_{t}\hat{\gamma}' \rangle  \, dt =\int_{0}^{1} \alpha \lVert D_{t}\hat{\gamma}' \rVert ^{2} \, dt,
> > \end{align}
> > $$
> > so $D_{t}\hat{\gamma}'\equiv 0$. 
> > 
> > Let $\tilde{\gamma}=\gamma \circ\varphi$ be the arc length parameterization of $\gamma$, so that $\lVert \tilde{\gamma}'(t) \rVert=1$ for all $t$. We therefore have
> > $$
> > \begin{align}
> > \tilde{\gamma}'(t) & =\gamma'(\varphi(t))\varphi'(t) \\
> >  & =\hat{\gamma}'(\varphi(t)),
> > \end{align}
> > $$
> > so $\tilde{\gamma}'=\hat{\gamma}'\circ\varphi$. [[LEC DGT 8#^58b7b2]] now implies $D_{t}\tilde{\gamma}'\equiv 0$. 

^d5b74f



#q what about piecewise regular curves?