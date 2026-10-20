---
id: "551"
date: 2026-09-02
time: 22:59
tags:
  - DGEO
  - Lecture
desc: Parallel transport, Hessian, geodesics
P1: true
---
# Parallel transport

> [!Definition] Parallel transport
> By [[LEC DGT 8#^f806e0]], if $\gamma:I\to M$ is smooth, then given $u\in T_{\gamma(t_{0})}M$, there exists parallel vector field $V_{u}\in \mathfrak{X}(\gamma)$ with $V(t_{0})=u$. We call $V_{u}$ the **parallel transport** of $u$ along $\gamma$. We use the notation
> $$
> \begin{align}
> P_{t_{0}t_{1}}^{\gamma}:T_{\gamma(t_{0})}M\to T_{\gamma(t_{1})}M, \quad u\mapsto V_{u}(t_{1}).
> \end{align}
> $$
> 
> More generally, if $\gamma$ is piecewise smooth, there exists a partition $a=a_{0}< a_{1}<\dots< a_{k}=b$ such that $\gamma|_{[a_{i-1}, a_{i}]}$ is smooth for all $i=1, \dots, k$, and we define $V|_{[a_{i}, a_{i+1}]}$ to be the parallel transport of $V(a_{i})$ along $\gamma|_{[a_{i}, a_{i+1}]}$.

> [!Lemma]
> $P_{t_{0}t_{1}}^{\gamma}:T_{\gamma(t_{0})}M\to T_{\gamma(t_{1})}M$ is a linear isometry. 

^df3518

> [!Remark]
> 
> Suppose $\gamma:I\to M$ is smooth. Let $\tau\in I$. Let $\{ b_{i} \}_{i=1}^{n}$ be an orthonormal basis of $T_{\gamma(\tau)}M$. Let $E_{i}$ be the PT of $b_{i}$ along $\gamma$. By [[#^df3518]], $\{ E_{i} (t)\}_{i=1}^{n}$ is an ONB of $T_{\gamma(t)}M$ for all $t\in I$. Now, for $V\in \mathfrak{X}(\gamma)$, we have
> $$
> V(t)=V^{i}(t)E_{i}(t), 
> $$
> where $V^{i}(t)=\langle V(t), E_{i}(t) \rangle$ is smooth. Using [[LEC DGT 8#^5959ee]].2, $D_{t}V=\dot{V}^{i}E_{i}$. So, 
> $$
> V\text{ is parallel} \iff D_{t}V\equiv 0\iff \dot{V}^{i}=0\,\forall i\iff\text{each }V^{i}\text{ is constant}. 
> $$
> 

^098938

> [!Proposition]
> Let $v\in T_{p}M$, $X\in \mathfrak{X}(M)$. Let $\gamma:(-\epsilon, \epsilon)\to M$ be smooth with $\gamma(0)=p$, $\gamma'(0)=v$. Then, 
> $$
> \nabla_{v}X|_{p}=\lim_{ h \to 0 } \frac{P_{h0}^{\gamma}(X_{\gamma(h)})-X_{p}}{h}.
> $$
> 
> > [!Proof]-
> > 
> > Let $V=X|_{\gamma}\in \mathfrak{X}(\gamma)$, and $\{ E_{i} \}_{i=1}^{n}$ be parallel transports along $\gamma$ of an orthonormal basis $\{ E_{i}(0) \}_{i=1}^{n}$ of $T_{\gamma(0)}M$ as in [[#^098938]]. By [[LEC DGT 8#^5959ee]].3, 
> > $$
> > \nabla_{v}X|_{p}=\nabla_{\gamma'(0)}X|_{\gamma(0)}=D_{t}(V)(0)=\dot{V}^{i}(0)E_{i}(0).
> > $$
> > Next, we have $X_{\gamma(h)}=V^{i}(h)E_{i}(h)$. By [[#^098938]] its parallel transport to $\gamma(0)$ is given by $P_{h0}^{\gamma}(X_{\gamma(h)})=V^{i}(h)E_{i}(0)$. Thus, 
> > $$
> > \begin{align}
> > \lim_{ h \to 0 } \left( \frac{V^{i}(h)-V^{i}(0)}{h} \right)E_{i}(0)=\dot{V}^{i}(0)E_{i}(0).
> > \end{align}
> > $$
> > 



---

# The Hessian

Suppose $L$ is a finite dimensional inner product space. Recall that there exists a linear isometry $T:L\to L^{*}$ given by $Tu=\langle \_{, u} \rangle$. For all $\lambda\in L^{*}$, there exists unique $u$ such that $\lambda(v)=\langle v, u \rangle$ for all $v\in L$. 

> [!Definition] Gradient
> For $f\in C^{\infty}(M)$ and $Df_{p}:T_{p}M\to \mathbb{R}$, there exists unique $u_{p}\in T_{p}M$ such that $Df_{p}(v)=\langle v, u_{p} \rangle$ for all $v\in T_{p}M$. Define the vector field $X_{f}$ on $M$ by $X_{f}(p)=u_{p}$. We call $X_{f}$ the **gradient of $f$**, and have $Df_{p}(v)=\langle X_{f}, v \rangle(p)$. 

> [!Proposition]
> For $f\in C^{\infty}(M)$, $X_{f}$ is a smooth vector field. 

> [!Definition] Hessian
> Let $f\in C^{\infty}(M)$. Define $\text{Hess}\,f|_{p}:T_{p}M\times T_{p}M\to \mathbb{R}$ by
> $$
> \text{Hess}\,f|_{p}(v, w)=\langle \nabla_{v}X_{f}, w \rangle.
> $$
> 

^28cc56

> [!Remark]
> In [[#^28cc56]], choose local extensions $Y, Z$ of $v, w$. 
> 
> Observe that the RHS can now be expressed as
> $$
> \begin{align}
> \langle \nabla_{Y}X_{f}, Z \rangle  & =D_{Y}\langle X_{f}, Z \rangle -\langle X_{f}, \nabla_{Y}Z \rangle  \\
>  & =D_{Y}D_{Z}f -D_{\nabla_{Y}Z}f \\
>  & =D_{Z}D_{Y}f-D_{\nabla_{Z}Y}f \\
>  & =\langle \nabla_{Z}X_{f}, Y \rangle 
> \end{align}
> $$
> Thus, the Hessian is symmetric.


---
# Geodesics

> [!Definition] Geodesic
> A smooth curve $\gamma:I\to M$ is called **geodesic** if $D_{t}\gamma'\equiv 0$. 


> [!Remark]
> If $V\in \mathfrak{X}(\gamma)$ with $V(t)=V^{i}(t)\varphi_{i}|_{\gamma(t)}$ for a local parameterization $\varphi$, 
> $$
> \begin{align}
> D_{t}(V)(t) & =\dot{V}^{i}(t)\varphi_{i}|_{\gamma(t)}+V^{i}(t)(D_{t}\varphi_{i}|_{\gamma})(t).
> \end{align}
> $$
> Let $\overline{\gamma}:=\varphi ^{-1}\circ\gamma=(\gamma^{1}, \dots, \gamma^{n})$ be the coordinate representation of $\gamma$ wrt $\varphi$. Note that $\gamma'=(\varphi \circ \overline{\gamma})'=\dot{\gamma}^{i}\varphi_{i}|_{\gamma(t)}$. We have
> $$
> \begin{align}
> (D_{t}\varphi_{i}|_{\gamma})(t) & =\nabla_{\gamma'(t)}\varphi_{i} \\
>  & = \dot{\gamma}^{j}(t)\nabla_{\varphi_{j}|_{\gamma(t)}}\varphi_{i} \\
>  & = (\dot{\gamma}^{j}\cdot(\Gamma^{k}_{ji} \circ \overline{\gamma}))(t)\,\varphi_{k}|_{\gamma(t)},
> \end{align}
> $$
> so
> $$
> \begin{align}
> \boxed{D_{t}(V)=(\dot{V}^{k}+ V^{i}\dot{\gamma}^{j}(\Gamma^{k}_{ji}\circ \overline{\gamma}))\varphi_{k}|_{\gamma}U}
> \end{align}
> $$
> If we plug $V=\gamma'$, we get
> $$
> D_{t}\gamma'=(\ddot{\gamma}^{k}+\dot{\gamma}^{i}\dot{\gamma}^{j}(\Gamma^{k}_{ji}\circ \overline{\gamma}))\varphi_{k}|_{\gamma}.
> $$
> 
> 

^d14b66

> [!Theorem]
> For every $p\in M$ and $w\in T_{p}M$, there exists $\epsilon> 0$ and a geodesic $\gamma:(-\epsilon, \epsilon)\to M$ with $\gamma(0)=p$ and $\gamma'(0)=w$. Moreover, if there exist two geodesics $\gamma_{1}, \gamma_{2}:I\to M$ with $\gamma_{1}(0)=\gamma_{2}(0)=p$ and $\gamma_{1}'(0)=\gamma_{2}'(0)=w$, then $\gamma_{1}\equiv\gamma_{2}$ on $I$. 
> 
> > [!Proof]-
> > 
> > Let $\varphi:\Omega\to U$ be a local parameterization around $p$. By [[#^d14b66]], $\gamma:I\to U$ is a geodesic with $\gamma(0)=p$, $\gamma'(0)=w$ iff
> > $$
> > \begin{align}
> >  & \ddot{\gamma}^{k}(t)+\dot{\gamma}^{i}(t)\dot{\gamma}^{j}(t)\Gamma^{k}_{ji}(\gamma^{1}(t), \dots, \gamma^{n}(t))=0   & \forall k=1, \dots, n \\
> >   & \gamma^{k}(0)=p^{k}, \dot{\gamma}^{k}(0)=w^{k},
> > \end{align}
> > $$
> > where $\varphi ^{-1}(p)=(p^{1}, \dots, p^{n})$ and $w=w^{i}\varphi_{i}|_{p}$. 
> > 
> > If we let $\sigma_{k}:=\dot{\gamma}^{k}$, this condition can be written as a system of $2n$ equations with an initial condition:
> > $$
> > \begin{align}
> >  & \begin{rcases}
> > \dot{\gamma}^{k} & =\sigma^{k} \\
> > \dot{\sigma}^{k} & =-\sigma^{i}\sigma^{j}\Gamma_{ji}^{k}(\gamma^{1}, \dots, \gamma^{n})
> > \end{rcases}2n \text{ eqns} \\\\
> >  & \gamma^{k}(0)=p^{k} \\
> >  & \sigma^{k}(0)=w^{k}.
> > \end{align}
> > $$
> > 
> > By the [[Nonlinear systems#^4078e8|existence-uniqueness theorem]], there exists $\epsilon> 0$ and a unique smooth solution on $(-\epsilon, \epsilon)$. 
> > 
> > Finally, suppose there exist two $\gamma_{1}, \gamma_{2}$ as in the statement. Let
> > $$
> > J:=\{ t\in I:\gamma_{1}(t)=\gamma_{2}(t), \gamma_{1}'(t)=\gamma_{2}'(t) \}.
> > $$
> > $J=(\gamma_{1}-\gamma_{2})^{-1}(0)\cap(\gamma_{1}'-\gamma_{2}')^{-1}(0)$ is closed in $I$. If $t_{0}\in J$, we've shown that there exists $\eta> 0$ such that $\gamma_{1}\equiv\gamma_{2}$ on $(t_{0}-\eta, t_{0}+\eta)$. Thus, $J$ is open in $I$, whence $J=I$. 
> 


> [!Theorem]
> For all $p\in M$, $w\in T_{p}M$, there exists a unique maximal geodesic $\gamma:I\to M$ with $\gamma(0)=p$ and $\gamma'(0)=w$, i.e., if $\sigma:J\to M$ is another geodesic with $\sigma(0)=p$ and $\sigma'(0)=w$, then $J\subseteq I$ and $\sigma\equiv\gamma$ on $J$. 

^ba5caa

