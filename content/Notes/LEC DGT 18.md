---
id: "604"
date: 2026-10-21
time: 11:50
tags:
  - Lecture
  - DGEO
pics: true
desc: Jacobi fields, Ricci and scalar curvature
P1: true
P2: true
---
# Jacobi fields

Let $\gamma:I\to M$ be a geodesic, and suppose $\Gamma:K\times I\to M$ is a smooth variation of $\gamma$ through geodesics (not quite the same as [[LEC DGT 11#^edb7b8]], where we required the endpoints to be fixed). Write $S=\partial_{s}\Gamma$, $T=\partial_{t}\Gamma$. We have
-  $\Gamma(0, t)=\gamma(t)$, 
-  $D_{t}T\equiv 0$, as $\Gamma_{s}$ is a geodesic for each $s$. Consequently, $D_{s}D_{t}T=0$.

Using [[LEC DGT 17#^fe167e]] and [[LEC DGT 11#^e556a2]], 
$$
\begin{aligned} 0 &=R(S,T)T+D_tD_sT\\ &=R(S,T)T+D_t^2S. \end{aligned}
$$
Restricting to $s=0$ and writing $J(t)=S(0, t)$ for the variation field of $\Gamma$, we obtain
$$
\boxed{D_{t}^{2}J+R(J, \gamma')\gamma'=0.}
$$
This is called the **Jacobi equation**. 

> [!Definition] Jacobi field
> A vector field $J\in \mathfrak{X}(\gamma)$ satisfying the Jacobi equation is called a **Jacobi field** along $\gamma$. 

> [!Theorem] Existence and uniqueness of Jacobi fields
> Let $a\in I$, $p=\gamma(a)$. For all $v, w\in T_{p}M$, there exists a unique Jacobi field $J\in \mathfrak{X}(\gamma)$ such that
> $$
> J(a)=v, \quad D_{t}J(a)=w.
> $$
> 
> 
> > [!Proof]-
> > 
> > Choose an ONB $\{ e_{1}, \dots, e_{n} \}$ of $T_{p}M$, and let $\{ E_{1}, \dots, E_{n} \}$ be their parallel transported ONB system on $\gamma$. 
> > 
> > Let $J\in \mathfrak{X}(\gamma)$ by any smooth vector field, with $J=f^{i}E_{i}$. We have
> > $$
> > \begin{align}
> > D_{t}J & =\dot{f^{i}}E_{i}, \quad D_{t}^{2}J=\ddot{f^{i}}E_{i}.
> > \end{align}
> > $$
> > We also have $R(J, \gamma')\gamma'=f^{j}R(E_{j},\gamma')\gamma'$. Let $R^{i}_{j}$ be such that
> > $$
> > R(E_{j}, \gamma')\gamma'=R^{i}_{j}E_{i}.
> > $$
> > Then, $R(J, \gamma')\gamma'=f^{j}R^{i}_{j}E_{i}$. The Jacobi equation can now be written as
> > $$
> > (\ddot{f}^{i}+f^{j}R^{i}_{j})E_{i}=0
> > $$
> > Since $\{ E_{1}, \dots, E_{n} \}$ is a linearly independent system, this yields a system of $n$ equations:
> > $$
> > \ddot{f}^{i}+f^{j}R^{i}_{j}=0\quad i=1, \dots, n.
> > $$
> > ---
> > 
> > If we write $\mathbf{f}=(f^{1}, \dots, f^{n})$ and $R=[R^{i}_{j}]$, then this can be written as $\dot{\mathbf{f}}=R\mathbf{f}$. 
> > 
> > If we write $v=v^{i}E_{i}(a)$, $w=w^{i}E_{i}(a)$, $\mathbf{v}=(v^{1}, \dots, v^{n})$, $\mathbf{w}=(w^{1}, \dots, w^{n})$,
> > then $J(a)=v$ and $D_{t}J(a)=w$ translates to 
> > $$
> > f^{i}(a)=v^{i}, \quad \dot{f}^{i}(a)=w^{i}\quad i=1, \dots, n,
> > $$
> > or equivalently, 
> > $$
> > \mathbf{f}(a)=\mathbf{v}, \quad \dot{\mathbf{f}}(a)=\mathbf{w}.
> > $$
> > 
> > We apply the usual trick of converting a second order system into a first order system by setting
> > $$
> > \mathbf{y}=\begin{pmatrix}\mathbf{f}\\\dot{\mathbf{f}}\end{pmatrix},\quad A=\begin{pmatrix}0 & I \\  -R & 0\end{pmatrix} , \quad \mathbf{y}_{0}=\begin{pmatrix}\mathbf{v} \\  \mathbf{w}\end{pmatrix}.
> > $$
> > By [[Nonlinear systems#^e3d9fa]], there exists a unique solution on $I$. 
> 

^53eed3

> [!Theorem] Characterization by geodesic variations
> Let $J\in \mathfrak{X}(\gamma)$. Then, $J$ is a Jacobi field iff $J$ is a variation field of a variation of $\gamma$ through geodesics. 
> 
> > [!Proof]-
> > 
> > If $I$ is not compact - for example $I = \mathbb{R}$ when $M$ is incomplete - a variation $\Gamma : (-\varepsilon, \varepsilon) \times I \to M$ with uniform $\varepsilon > 0$ exists on every compact subinterval $I_0 \subseteq I$, or globally on $I$ if $M$ is complete (see [[LEC DGT 14#^0b65ae]]). We construct $\Gamma$ on $(-\varepsilon, \varepsilon) \times I_0$ for any compact subinterval $I_0 \subseteq I$.
> > 
> > Fix $a \in I_0$ and let $p = \gamma(a)$. Suppose $J \in \mathfrak{X}(\gamma)$ satisfies the Jacobi equation, and set
> > $$v = J(a) \in T_pM, \qquad w = D_t J(a) \in T_pM.$$
> > 
> > ---
> > **Construct a curve $\sigma$ and vector field $V$ along $\sigma$.** 
> > 
> > Choose a smooth curve $\sigma : (-\delta, \delta) \to M$ such that
> > $$\sigma(0) = p \qquad \text{and} \qquad \sigma'(0) = v$$
> > (for example, $\sigma(s) = \exp_p(sv)$ for sufficiently small $\delta > 0$).
> > 
> > Next, construct a smooth vector field $V \in \mathfrak{X}(\sigma)$ along $\sigma$ satisfying
> > $$V(0) = \gamma'(a) \qquad \text{and} \qquad D_s V(0) = w.$$
> > Explicitly, let $P_0(s), P_1(s) \in T_{\sigma(s)}M$ be the parallel transports of $\gamma'(a)$ and $w$ along $\sigma$ from $\sigma(0) = p$ to $\sigma(s)$, and define
> > $$V(s) := P_0(s) + s P_1(s).$$
> > Then $V$ is smooth along $\sigma$, $V(0) = P_0(0) = \gamma'(a)$, and since $D_s P_0 \equiv 0$ and $D_s P_1 \equiv 0$, the product rule gives
> > $$D_s V(s) = P_1(s) \implies D_s V(0) = P_1(0) = w.$$
> > ---
> > **Define geodesic variation $\Gamma$ via the exponential map.** 
> > 
> > Define
> > $$\Gamma(s, t) := \exp_{\sigma(s)}\big((t - a) V(s)\big).$$
> > Because $I_0$ is compact and $(0, t) \mapsto (t - a)\gamma'(a)$ lies in the domain $\mathcal{E} \subseteq TM$ of the exponential map for every $t \in I_0$, openness of $\mathcal{E}$ in $TM$ and compactness of $I_0$ guarantee that there exists $\epsilon \in (0, \delta)$ such that $\Gamma$ is well-defined and smooth on $(-\epsilon, \epsilon) \times I_0$. (We've seen this argument before in the proof of [[LEC DGT 11#^f8884c]]).
> > 
> > ---
> > **Verify $\Gamma$ is a variation of $\gamma$ through geodesics.**
> > 
> > For $s = 0$, $\Gamma(0, t) = \exp_p((t - a)\gamma'(a)) = \gamma(t)$ for all $t \in I_0$.
> > 
> > For each fixed $s \in (-\epsilon, \epsilon)$: the curve $t \mapsto \Gamma(s, t)$ is the geodesic starting at $\sigma(s)$ at time $t = a$ with initial velocity $V(s)$.
> > 
> > ---
> > **Verify the variation field $\widetilde{J}(t) := \partial_s \Gamma(0, t)$ equals $J(t)$.** 
> > 
> > Since $\Gamma$ is a variation of $\gamma$ through geodesics, $\tilde{J}$ is a Jacobi field. By [[LEC DGT 18#^53eed3|uniqueness of Jacobi fields]], it suffices to show that $\widetilde{J}(a) = v$ and $D_t \widetilde{J}(a) = w$.
> > 
> > Since $\exp_q(0_q) = q$ for every $q \in M$, we have $\Gamma(s, a) = \exp_{\sigma(s)}(0) = \sigma(s)$. Differentiating with respect to $s$ at $s = 0$ gives
> > $$\widetilde{J}(a) = \partial_s \Gamma(0, a) = \sigma'(0) = v.$$
> > 
> > For each $s$, the geodesic $t \mapsto \Gamma(s, t)$ has initial velocity $V(s)$ at $t = a$, meaning
> > $$
> > \partial_t \Gamma(s, a) = V(s).
> > $$
> > Using the symmetry $D_t \partial_s \Gamma = D_s \partial_t \Gamma$ from [[LEC DGT 11#^e556a2]] at $(s, t) = (0, a)$, we compute
> > $$D_t \widetilde{J}(a) = D_t \partial_s \Gamma(0, a) = D_s \partial_t \Gamma(0, a) = D_s V(0) = w.$$
> > 
> 

---

# Algebraic curvature tensors

Let $A$ be a finite dimensional real vector space. Consider $(0, 4)$-tensors $T\in \bigotimes^{4}A^{*}$ satisfying the curvature symmetries ([[LEC DGT 17#^68a42f]], [[LEC DGT 17#^15df4a]]):
$$
\begin{aligned} 
&T(u,v,w,z)=-T(v,u,w,z),\\ &T(u,v,w,z)=-T(u,v,z,w),\\ &T(u,v,w,z)=T(w,z,u,v),\\
 &T(u,v,w,z)+T(v,w,u,z)+T(w,u,v,z)=0. 
\end{aligned} 
$$
Such tensors are called **algebraic curvature tensors**. Denote their space by $\mathcal{R}(A^{*})$. 

> [!Proposition]
> Suppose $T_{1}, T_{2}\in \mathcal{R}(A^{*})$ and
> $$
> T_{1}(v, w, w, v)=T_{2}(v, w, w, v)
> $$
> for every linearly independent $v, w\in A$. Then, $T_{1}=T_{2}$. 

^487a97

---

# Sectional curvature agrees with Gaussian curvature for exponential surfaces

Fix $p\in M$ and a two-dimensional plane $\Pi\subset T_pM$. Choose $\varepsilon>0$ small enough that $\exp_p:B_\varepsilon(0)\longrightarrow M$ is a diffeomorphism onto its image ([[LEC DGT 11#^77f863]]). Define
$$S_\Pi:=\exp_p\bigl(\Pi\cap B_\varepsilon(0)\bigr).$$
This is a two-dimensional surface in $M$, with $T_pS_\Pi=\Pi$. 

> [!Proposition]
> Let $\overline{\text{Rm}}$ be the curvature tensor of $S_{\Pi}$. Then, for all $x, y, w, z\in T_{p}S_{\Pi}$, 
> $$
> \overline{\text{Rm}}_{p}(x, y, w, z)=\text{Rm}_{p}(x, y, w, z).
> $$
> In other words, $\overline{\text{Rm}}_{p}=\text{Rm}_{p}$ on $T_{p}S$. 
> 
> > [!Proof]-
> > 
> > Consider nested submanifolds
> > $$S\subset M\subset\mathbb R^k.$$
> > Denote the covariant derivatives on $M$ and $S$ by $\nabla$ and $\overline{\nabla}$. Recall that for $X, Y\in \mathfrak{X}(M)$,
> > $$D_XY=\nabla_XY+\mathbb{I}(X,Y).$$
> > Similarly, for $X,Y\in \mathfrak{X}(M)$ such that their restrictions to $S$ lie in $\mathfrak{X}(S)$, define $Q(X, Y)$ by
> > $$\nabla_XY=\bar\nabla_XY+Q(X,Y),$$
> > where $Q(X,Y)$ is normal to $S$ within $M$. We call $Q$ the second fundamental form of $S$ relative to $M$, with
> > $$Q_p:T_pS\times T_pS\longrightarrow (T_pS)^\perp
> > \subset T_pM.$$
> > Combining the two decompositions gives
> > $$D_XY=\bar\nabla_XY+\overline{\mathbb{I}}(X,Y),$$
> > where
> > $$\boxed{\overline{\mathbb{I}}(X,Y)=\mathbb{I}(X,Y)+Q(X,Y).}$$
> > Here $\overline{\mathbb{I}}$ is the second fundamental form of $S$ in $\mathbb R^k$. The two terms are orthogonal because $\mathbb{I}(X,Y)$ is normal to $M$, whereas $Q(X,Y)$ lies in $T_pM$ and is normal to $S$.
> > 
> > ---
> > Relation between $\overline{\text{Rm}}_{p}$ and $\text{Rm}_{p}$.  
> > 
> > [[LEC DGT 8#^bd8b5d|The Gauss equation]] applied to $\overline{\text{Rm}}$ yields 
> > $$\begin{aligned}
> > \overline{\text{Rm}}(w,x,y,z)
> > ={}&\langle\overline{\mathbb{I}}(w,z),\overline{\mathbb{I}}(x,y)\rangle\\
> > &-\langle\overline{\mathbb{I}}(w,y),\overline{\mathbb{I}}(x,z)\rangle.
> > \end{aligned}$$
> > Substituting $\overline{\mathbb{I}}=\mathbb{I}+Q$, and using the orthogonality just mentioned, gives the relation between the curvature tensors of $S$ and $M$:
> > $$\boxed{
> > \begin{aligned}
> > \overline{\text{Rm}}(w,x,y,z)
> > ={}&\text{Rm}(w,x,y,z)\\
> > &+\langle Q(w,z),Q(x,y)\rangle\\
> > &-\langle Q(w,y),Q(x,z)\rangle.
> > \end{aligned}
> > }$$
> > 
> > In particular, at any point $q$ where $Q_q=0$,
> > $$\overline{\text{Rm}}_q=\text{Rm}_q\quad\text{on }T_qS.$$
> > 
> > ---
> > 
> > **$Q_p=0$**
> > 
> > Recall that $S_\Pi=\exp_p(\Pi\cap B_\varepsilon(0))$.
> > 
> > Take any $u\in\Pi$, and consider
> > $$\gamma(t)=\exp_p(tu).$$
> > This is a geodesic in $M$, and it lies in $S_\Pi$. By the decomposition of the covariant derivative along $S_\Pi$,
> > $$D_t\gamma'
> > =
> > \bar D_t\gamma'+Q(\gamma',\gamma').$$
> > Since $\gamma$ is a geodesic in $M$,
> > $$D_t\gamma'=0.$$
> > The two terms on the right are respectively tangent and normal to $S_\Pi$. Therefore,
> > $$Q_p(u,u)=0.$$
> > Since $u\in\Pi=T_pS_\Pi$ was arbitrary, and $Q_p$ is symmetric ($Q=\overline{\mathbb{I}}-\mathbb{I}$) and bilinear, polarization implies
> > $$\boxed{Q_p=0.}$$
> > Therefore, we have
> > $$
> > \overline{\text{Rm}}_p=\text{Rm}_p\quad\text{on }T_pS.
> > $$

---
# Ricci and scalar curvature

> [!Definition] Ricci curvature
> The **Ricci curvature** $\text{Ric}_{p}:T_{p}M\times T_{p}M\to \mathbb{R}$ is the trace of the curvature operator:
> $$
> \operatorname{Ric}_p(v,w) := \operatorname{tr}\bigl(u\mapsto R_p(u,v)w\bigr). 
> $$
> 

^8471ce

> [!Remark]
> If $\{e_i\}_{i=1}^n$ is an orthonormal basis of $T_pM$, this becomes
> $$\boxed{ \operatorname{Ric}_p(v,w) = \sum_{i=1}^n \langle R_p(e_i,v)w,e_i\rangle = \sum_{i=1}^n \text{Rm}_p(e_i,v,w,e_i). }$$
> The curvature symmetries imply that
> $$\operatorname{Ric}_p(v,w)=\operatorname{Ric}_p(w,v).$$
> Thus, Ricci curvature is a symmetric $(0,2)$-tensor.

Equivalently, we can define $\operatorname{Ric}^{\flat}_p:T_pM\to T_pM$ by currying the Ricci curvature tensor:
$$
\langle\operatorname{Ric}^{\flat}_p(v),w\rangle =\operatorname{Ric}_p(v,w).
$$

> [!Definition] Scalar curvature
> The **scalar curvature** $S\in C^{\infty}(M)$ is the trace of the Ricci endomorphism:
> $$S(p):=\operatorname{tr}(\operatorname{Ric}^{\flat}_p). $$
> 

> [!Remark]
> In an orthonormal basis,
> $$
> \begin{aligned} 
> S(p) &=\sum_{i=1}^{n} \langle \operatorname{Ric}^{\flat}_p(e_{i}), e_{i} \rangle \\
> &=\sum_{i=1}^n\operatorname{Ric}_p(e_i,e_i)\\
>  &=\sum_{i,j=1}^n \operatorname{Rm}_p(e_j,e_i,e_i,e_j). 
> \end{aligned}
> $$

> [!Remark]
> In local coordinates, we write
> $$
> \begin{align}
> \text{Rm} & =R_{ijkl}\,dx^{i}\otimes dx^{j}\otimes dx^{k}\otimes dx^{l} \\
> \text{Ric} & =R_{ij}\,dx^{i}\otimes dx^{j} \\
> R_{ij} & =g^{il}R_{ijkl} \\
> S & =g^{ij}R_{ij}.
> \end{align}
> $$
> 


---
# The special case of surfaces

Suppose $\dim M=2$, and let $\{e_1,e_2\}$ be an orthonormal basis of $T_pM$.

The scalar curvature is
$$S(p)=\sum_{i,j=1}^2 \text{Rm}_p(e_i,e_j,e_j,e_i).$$
The terms with $i=j$ vanish by antisymmetry. The remaining terms are equal by the curvature symmetries:

$$\begin{aligned} S(p) &=\text{Rm}_p(e_1,e_2,e_2,e_1)\\ &\quad+\text{Rm}_p(e_2,e_1,e_1,e_2)\\ &=2\text{Rm}_p(e_1,e_2,e_2,e_1). \end{aligned}$$

> [!Definition] Gaussian curvature
> The **Gaussian curvature** $K\in C^{\infty}(M)$ is defined by
> $$
> K(p):=\frac12 S(p) =\text{Rm}_p(e_1,e_2,e_2,e_1).
> $$
> 

Moreover, on a surface, the entire Riemann curvature tensor is determined by $K$:
$$\boxed{ \text{Rm}(X,Y,Z,W) = K\bigl( \langle X,W\rangle\langle Y,Z\rangle - \langle X,Z\rangle\langle Y,W\rangle \bigr). }$$
Note the similarity with the Gauss equation from [[LEC DGT 8#^bd8b5d]]. 

Thus, in dimension two, specifying the Gaussian curvature completely specifies the Riemann curvature tensor.