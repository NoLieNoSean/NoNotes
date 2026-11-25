---
id: "587"
date: 2026-10-09
time: 10:30
tags:
  - Lecture
  - DGEO
pics: true
desc: Flat spaces are locally isometric to Euclidean space
P1: true
P2: true
---
# Flat spaces are locally isometric to Euclidean space

> [!Notation]
> [[LEC DGT 15#^a4f2fa|Recall]] that the [[LEC DGT 8#^4a1f11|curvature tensor]] $R$ is a $(1, 3)$ smooth tensor field. Define
> $$
> \mathrm{Rm}(X, Y, Z, W):=\langle R(X, Y)Z, W \rangle .
> $$
> $\mathrm{Rm}$ is a smooth $(0, 4)$ tensor field.

^e854a7

> [!Theorem]
> TFAE:
> 1. $R_{M}\equiv 0$ (equivalently, $\mathrm{Rm}_{M}\equiv 0$).
> 2. $M$ is [[LEC DGT 5#^88035c|locally isometric]] to $\mathbb{R}^{n}$.

2 ⇒ 1: Denote the curvature tensor of $\mathbb{R}^{n}$ by $\overline{R}$. For $U\subseteq \mathbb{R}^{n}$ and $\overline{X}, \overline{Y}, \overline{Z}\in \mathfrak{X}(U)$, 
$$
\begin{align}
\overline{R}(\overline{X}, \overline{Y})\overline{Z} & =\nabla_{\overline{X}}\nabla_{\overline{Y}}\overline{Z}-\nabla_{\overline{Y}}\nabla_{\overline{X}}\overline{Z} -\nabla_{[\overline{X}, \overline{Y}]}\overline{Z} \\
 & =D_{\overline{X}}D_{\overline{Y}}\overline{Z}-D_{\overline{Y}}D_{\overline{X}}\overline{Z} -D_{[\overline{X}, \overline{Y}]}\overline{Z}.
\end{align}
$$
By [[LEC DGT 4#^79bf9f]].2, $\overline{R}(\overline{X}, \overline{Y})\overline{Z}=0$. Thus, $\overline{R}\equiv 0$. 

Now, let $p\in M$, $u, v, w\in T_{p}M$; we need to show that $R_{p}(u, v)w=0$. Let $V$ be a neighborhood of $p$, and $\varphi:\Omega\to V$ be an isometry. Let $X, Y, Z\in \mathfrak{X}(V)$ be such that $X_{p}=u$, $Y_{p}=v$, $Z_{p}=w$. Let $\overline{X}, \overline{Y}, \overline{Z}$ be the coordinate representations of $X, Y, Z$. Because the [[LEC DGT 8#^ed8589|curvature tensor is intricsic]], we have
$$
\begin{align}
0 =\varphi_{*}(\overline{R}(\overline{X}, \overline{Y})\overline{Z}) & =R(\varphi_{*}\overline{X}, \varphi_{*}\overline{Y})\varphi_{*}\overline{Z} \\
 & =R(X, Y)Z.
\end{align}
$$
Thus, $R_{p}(u, v)w=R(X, Y)Z|_{p}=0$. 

1 ⇒ 2: Fix $p\in M$. Fix local parameterization $\varphi:I^{n}\to U$ around $p$, where $I=(-1, 1)$ and $\varphi(0, \dots, 0)=p$. 

> [!Lemma]
> For all $v\in T_{p}M$, there exists $X\in \mathfrak{X}(U)$ such that $X_{p}=v$ and $X$ is parallel on $U$, i.e., $\nabla_{w}X|_{q}=0$ for all $q\in U$ and $w\in T_{q}M$. 
> 
> > [!Proof]-
> > 
> > To begin with, assume $n=2$.
> > 
> > Identify $U$ with $I^{2}$ via $\varphi$, so that we denote $p\in U$ by $\varphi ^{-1}(p)$. We need to define $X$ on $U$ such that $X_{(0, 0)}=v$ and $X$ is parallel. 
> > 
> > Let $\gamma:I\to U$ be the curve $t\mapsto(t, 0)$ for $t\in I$. Define $X$ on $I\times \{ 0 \}$ using the [[LEC DGT 9#^8e6628|parallel transport]] of $v$ along $\gamma$:
> > $$
> > X(t, 0):=P^{\gamma}_{0, t}(v).
> > $$
> > Let $\sigma_{t'}:I\to U$ be the curve $t\mapsto(t', t)$ for $t\in I$. Define $X$ on $I^{2}$ using the parallel transport of $X(t_{1}, 0)$ along $\sigma_{t_{1}}$:
> > $$
> > X(t_{1}, t_{2}):=P^{\sigma_{t_{1}}}_{0, t_{2}}(X(t_{1}, 0))=(P^{\sigma_{t_{1}}}_{0, t_{2}}\circ P_{0, t_{1}}^{\gamma})(v).
> > $$
> > ---
> > 
> > We have to show that $X$ is smooth. Recall [[LEC DGT 9#^d14b66]]. Let $X(t, 0)=V_{0}^{i}(t)\varphi_{i}|_{(t, 0)}$. Consider the following class of initial value problems
> > $$
> > \begin{align}
> > \dot{V}^{k} & =-V^{i}\dot{\sigma}_{t_{1}}^{j}(\Gamma_{ji}^{k}\circ \overline{\sigma_{t_{1}}}), & \\
> > V^{k}(0) & = V_{0}^{k}(t_{1})
> > \end{align}
> > $$
> > for $t_{1}\in I$. If we write $\overline{V}=(V^{1}, \dots, V^{n})$, it can be rewritten as
> > $$
> > \begin{align}
> > \dot{\overline{V}}  & = F(\overline{V}, t_{1}, t), \\
> > \overline{V}(0) & = \overline{V}_{0}(t_{1}),
> > \end{align}
> > $$
> > where $t_{1}$ serves as a parameter in the language of [[Nonlinear systems#^2d49a1]]. This is an ODE with parameter $t_{1}$ and smooth initial data. The theorem gives us a smooth[^1] solution $U(t_{1}, t)$[^2] for $(t_{1}, t)\in I_{1}\times I_{2}\subseteq I^{2}$. Since $X(t_{1}, t_{2})=U^{k}(t_{1}, t_{2})\varphi_{k}|_{(t_{1}, t_{2})}$, $X$ is smooth, after possibly shrinking $I^{2}$. 
> > 
> > ---
> > 
> > It suffices to show that $\nabla_{\varphi_{i}}X\equiv 0$ on $U$ for $i=1, 2$. 
> > 
> > Let $\gamma:I\to U$ be the curve $t\mapsto(t, 0)$ for $t\in I$. $\gamma'(t)=\varphi_{1}|_{(t, 0)}$. Therefore, using [[LEC DGT 8#^5959ee]].3 and the fact that $X\circ\gamma\in \mathfrak{X}(\gamma)$ is a parallel vector field,
> > $$
> > \nabla_{\varphi_{1}}X|_{(t, 0)}=D_{t}(X\circ\gamma)|_{(t, 0)}=0\quad \forall t\in I.
> > $$
> > 
> > Similarly, observe that $\sigma_{t_{1}}'(t)=\varphi_{2}|_{(t_{1}, t)}$. Again, $X\circ\sigma_{t_{1}}\in \mathfrak{X}(\sigma_{t_{1}})$ is parallel. 
> > $$
> > \nabla_{\varphi_{2}}X|_{(t_{1}, t_{2})}=D_{t}(X\circ\sigma_{t_{1}})|_{(t_{1}, t_{2})}=0\quad \forall (t_{1}, t_{2})\in I^{2}.
> > $$
> > 
> > Let $Y=\nabla_{\varphi_{1}}X$. It remains to show that $Y|_{(t_{1}, t_{2})}=0$ for all $(t_{1}, t_{2})\in I^{2}$. Because $R(\varphi_{1}, \varphi_{2})X\equiv 0$ and $[\varphi_{1}, \varphi_{2}]=0$ ([[LEC DGT 4#^5180d1]].1), $0\equiv \nabla_{\varphi_{1}}\nabla_{\varphi_{2}}X\equiv \nabla_{\varphi_{2}}\nabla_{\varphi_{1}}X$. So, $\nabla_{\varphi_{2}}Y\equiv 0$. However, we also have
> > $$
> > \begin{align}
> > \nabla_{\varphi_{2}}Y|_{\sigma_{t_{1}}} & =D_{t}(Y\circ\sigma_{t_{1}}).
> > \end{align}
> > $$
> > Thus, $Y\circ\sigma_{t_{1}}$ is a parallel vector field over $\sigma_{t_{1}}$. Since $Y|_{\sigma_{t_{1}}(0)}=\nabla_{\varphi_{1}}X|_{(t_{1}, 0)}=0$, we have $Y|_{\sigma_{t_{1}}(t)}=0$ for all $t\in I$. In other words, $\nabla_{\varphi_{1}}X|_{(t_{1}, t_{2})}=0$ for all $(t_{1}, t_{2})\in I^{2}$. 
> > 
> > ---
> > 
> > For the general case, let $n\in \mathbb{Z}^{+}$. We define $X$ by
> > $$
> > \begin{align}
> > X(t_{1}, \dots, t_{n})=(P_{n-1}\circ P_{n-2}\circ\dots \circ P_{0})(v),
> > \end{align}
> > $$
> > where $P_{i}$ is the parallel transport along $t\mapsto(t_{1}, \dots, t_{i}, t, 0, \dots, 0)$ from $t=0$ to $t=y_{i+1}$. As before, $X$ is smooth. 
> > 
> > Consider the statement 
> > $$
> > \begin{align}
> > (*) &  & \nabla_{\varphi_{1}}X\equiv\dots\equiv \nabla_{\varphi_{k}}X\equiv 0\text{ on }I^{k}\times \{ 0 \}.
> > \end{align}
> > $$
> > As before, $(*)$ holds for $k=1$. Suppose $(*)$ holds for $k=m$. Fix $(y_{1}, \dots, y_{m})\in I^{m}$, and let $\sigma(t)=(y_{1}, \dots, y_{m}, t,0, \dots, 0)$. Note that $\sigma'(t)=\varphi_{m+1}|_{\sigma(t)}$, and $X\circ\sigma\in \mathfrak{X}(\sigma)$ is parallel; it immediately follows that $\nabla_{\varphi_{m+1}}X|_{\sigma}=D_{t}(X\circ\sigma)=0$, so $\nabla_{\varphi_{m+1}}X\equiv 0$ on $I^{m+1}\times \{ 0 \}$. 
> > 
> > As before, we have $0\equiv \nabla_{\varphi_{j}}\nabla_{\varphi_{m+1}}X\equiv \nabla_{\varphi_{m+1}}\nabla_{\varphi_{j}}X$ for $1\leqslant j\leqslant m$. Let $Y=\nabla_{\varphi_{j}}X$; we have
> > $$
> > \nabla_{\varphi_{m+1}}Y|_{\sigma}=D_{t}(Y\circ\sigma).
> > $$
> > By the induction hypothesis, $Y(\sigma(0))=0$. Thus, $Y\circ\sigma=0$. In other words, $\nabla_{\varphi_{j}}X\equiv 0$ on $I^{m+1}\times \{ 0 \}$. Thus, $(*)$ holds for $k=m+1$. 
> > 
> > By induction, $(*)$ holds for $k=n$. 
> 

^b6eda5

[^1]: [[Nonlinear systems#^2d49a1]] only states the $C^{1}$ version, but the corresponding $C^{\infty}$ version holds and it is what we're using here. 

[^2]: We're using the fact that the initial data vary smoothly with and are completely determined by the parameter $t_{1}$.

Let $\{ b_{1}, \dots, b_{n} \}$ be an orthonormal basis of $T_{p}(M)$. By [[#^b6eda5]], there exist $B_{i}\in \mathfrak{X}(U)$ such that $B_{i}|_{p}=b_{i}$ and each $B_{i}$ is parallel. Observe that $[B_{i}, B_{j}]=\nabla_{B_{i}}B_{j}-\nabla _{B_{j}}B_{i}=0$. Using [[LEC DGT 4#^ceeba3]], we obtain a local parameterization $\psi:\Omega\to V\subseteq U$, $p\in V$ such that $\psi_{i}=B_{i}$. 

Define $f_{ij}:=\langle B_{i}, B_{j} \rangle\in C^{\infty}(U)$. Using the calculation from [[LEC DGT 7#^8b6902]], we have
$$
\begin{align}
\partial_{k}(f_{ij}\circ\varphi) & =D_{\varphi_{k}}f_{ij} \\
 & =\langle \nabla_{\varphi_{k}}B_{i}, B_{j} \rangle+\langle B_{i}, \nabla_{\varphi_{k}}B_{j} \rangle   \\
 & = 0
\end{align}
$$
for all $k$. Thus, $f_{ij}$ is constant on $U$. It follows that $\langle B_{i}, B_{j} \rangle=\delta_{ij}$ on $U$. 

Finally, for all $a\in \Omega$, 
$$
\begin{align}
\langle D\psi_{a}(e_{i}), D\psi_{a}(e_{j}) \rangle & =\langle \psi_{i}, \psi_{j} \rangle |_{\psi(a)} \\
 & =\delta_{ij}.
\end{align}
$$
So, $D\psi_{a}:\mathbb{R}^{n}\to T_{\psi(a)}M$ is a linear isometry for all $a\in \Omega$, making $\psi$ an isometry $\Omega\to V$. 


