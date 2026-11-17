---
id: "580"
date: 2026-10-07
time: 13:59
tags:
  - Lecture
  - DGEO
pics: true
desc: Tensor fields
P1: true
P2: true
---
# Tensor fields

> [!Remark]
> Recall the [[LEC ALG4 12#^2dca86|universal property of tensor products]]. Recall that for any finite dimensional vector space $V$, we have
> $$
> (V^{*})^{\otimes k}\cong (V^{\otimes k})^{*}\cong\text{Mult}(V^{k}, \mathbb{R}),
> $$
> and
> $$
> V^{\otimes l}\otimes V^{*\,\otimes k}\cong\text{Mult}(V^{k}, V^{l}).
> $$
> 

^11ca6d

> [!Definition] Vector field on $\mathbb{R}^{n}$
> Let $U\subseteq \mathbb{R}^{n}$ be open. A **tensor field of type $(l, k)$** on $U$ is a map
> $$
> F:U\to T^{l}_{k}(\mathbb{R}^{n}):=(\otimes^{l}\mathbb{R}^{n})\otimes (\otimes^{k}(\mathbb{R}^{n})^{*}).
> $$
> Let $\{ e_{1}, \dots, e_{n} \}$ be a basis of $\mathbb{R}^{n}$, $\{ w^{1}, \dots, w^{n} \}$ be the dual basis. Then, a tensor field $F$ of type $(l, k)$ can be expressed as
> $$
> F(x)=F^{j_{1}, \dots, j_{l}}_{i_{1}, \dots, i_{k}}(x)(e_{j_{1}}\otimes \dots \otimes e_{j_{l}})\otimes (w^{i_{1}}\otimes \dots \otimes w^{i_{k}}).
> $$
> We say that $F$ is **smooth** if each $F^{j_{1}, \dots, j_{l}}_{i_{1}, \dots, i_{k}}$ is smooth. 

In particular, by [[#^11ca6d]], If $F$ is a $(0, k)$ tensor field on $U$, then for each $p\in U$, $F_{p}$ is a multilinear map $(\mathbb{R}^{n})^{k}\to \mathbb{R}$. Similarly, if $F$ is a $(1, k)$ tensor field on $U$, then for each $p\in U$, $F_{p}$ is a multilinear map $(\mathbb{R}^{n})^{k}\to \mathbb{R}^{n}$. 

> [!Definition] Tensor field on a manifold
> A tensor of type $(l, k)$ at $p\in M$ is an element of
> $$
> T^l_k(T_pM)
> :=(\otimes^{l}T_{p}M)\otimes (\otimes^{k}T_{p}^{*}M).
> $$
> A **tensor field of type $(l, k)$** on $M$ is an assignment 
> $$
> p\mapsto F_p\in T^l_k(T_pM). 
> $$
> 

^53a96c

A tensor field of $(0, 0)$, $(1, 0)$, and $(0, 1)$ are real valued functions, vector fields, and covector fields on $M$ respectively.

> [!Example]
> Let $f\in C^{\infty}(M)$. Then, $df$ is a covector field on $M$ defined by
> $$
> df|_{p}:T_{p}M\to \mathbb{R}, \quad (df|_{p})(v):=Df_{p}(v).
> $$
> 

> [!Lemma]
> Let $\varphi:\Omega\to V$ be a local parameterization with local coordinates $\varphi ^{-1}=(x^{1}, \dots, x^{n})$. We have seen that $\{ \varphi_{i} |_{p}\}$ is a basis of $T_{p}M$ for $p\in V$. $\{ dx^{i}|_{p} \}$ is the dual basis of $\{ \varphi_{i}|_{p} \}$. 
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > dx^{i}|_{p} (\varphi_{j}|_{p}) & =D(x^{i}\circ\varphi)|_{\varphi ^{-1}(p)}(e_{j}) \\
> >  & =\partial_{j}(x^{i}\circ\varphi)|_{\varphi ^{-1}(p)} \\
> >   & =\delta_{ij}.
> > \end{align}
> > $$
> > 
> 

> [!Remark]
> Let $V, W$ be $\mathbb{R}$-vector spaces, and $A:V\to W$ be an isomorphism. Let $A^{*}:W\to V$ be the dual map, $A^{*}(\alpha)=\alpha \circ A$. Then, 
> $$
> (A^{-1})^{\otimes l}\otimes (A^{*})^{\otimes k}:T^{l}_{k}(W)\to T^{l}_{k}(V)
> $$
> is an isomorphism. If $\{ v_{1}, \dots, v_{n} \}$ is a basis of $V$, $\{ v^{1}, \dots, v^{n} \}$ is its dual, and $\{ w^{1}, \dots, w^{n} \}$ is the dual of $\{ w_{1}, \dots, w_{n} \}:=\{ Av_{1}, \dots, Av_{n} \}$, then $A^{*}w^{i}=v^{i}$ for all $1\leqslant i\leqslant n$. In other words, 
> $$
> (v_{j_{1}}\otimes \dots \otimes v_{l_{l}})\otimes (v^{i_{1}}\otimes \dots \otimes v^{i_{k}})\xmapsto{(A^{-1})^{\otimes l}\otimes (A^{*})^{\otimes k}}(w_{j_{1}}\otimes \dots \otimes w_{l_{l}})\otimes (w^{i_{1}}\otimes \dots \otimes w^{i_{k}}).
> $$
> 

^8acb26

> [!Definition] Coordinate representation of tensor fields
> 
> Let $F$ be an $(l, k)$ tensor field on $M$. For a local coordinate chart $\varphi:\Omega\to U$, $F$ can be expressed as
> $$
> F=
> F^{j_1\cdots j_l}_{i_1\cdots i_k}
> (\varphi_{j_{1}}\otimes\cdots\otimes
> \varphi_{j_{l}})
> \otimes
> (dx^{i_{1}}\otimes\cdots\otimes dx^{i_{k}}).
> $$
> The functions $F^{j_1\cdots j_l}_{i_1\cdots i_k}$ are called the **components** of $F$ wrt $\varphi$. 
> 
> Recall the notion of [[LEC DGT 4#^5ef441|coordinate representations of a vector field]]: for $X\in \mathfrak{X}(U)$, there exists a corresponding $\overline{X}\in \mathfrak{X}(\Omega)$ such that $X=D\varphi \overline{X}$, or $\overline{X}=(D\varphi)^{-1}X$. In light of [[#^8acb26]], the role of $(D\varphi)^{-1}|_{p}:T_{p}M\to \mathbb{R}^{n}$ for tensor fields is played by the map 
> $$
> (D\varphi)^{-1\,\otimes l}\otimes (D\varphi)^{*\,\otimes k}|_{p}:T^{l}_{k}(T_{p}M)\to T^{l}_{k}(\mathbb{R}^{n}),
> $$
> and the **coordinate representation of $F$** is given by
> $$
> \begin{align}
> \overline{F} & =((D\varphi)^{-1\,\otimes l}\otimes (D\varphi)^{*\,\otimes k})F \\
>  & = \overline{F}^{j_1\cdots j_l}_{i_1\cdots i_k}
> (e_{j_{1}}\otimes \dots \otimes e_{j_{l}})\otimes (w^{i_{1}}\otimes \dots \otimes w^{i_{k}}),
> \end{align}
> $$
> where $\overline{F}^{j_1\cdots j_l}_{i_1\cdots i_k}=F^{j_1\cdots j_l}_{i_1\cdots i_k}\circ\varphi$. 

> [!Definition] Smooth tensor field
> We call a $(l, k)$ tensor field $F$ on $M$ **smooth** if for every local parameterization $\varphi:\Omega\to U$, we have every $F^{j_1\cdots j_l}_{i_1\cdots i_k}\in C^{\infty}(U)$. Note that this is equivalent to requiring every $\overline{F}^{j_1\cdots j_l}_{i_1\cdots i_k}\in C^{\infty}(\Omega)$. The space of $(l, k)$ tensor fields on $M$ is a $C^{\infty}(M)$-module, and is denoted by $T^{l}_{k}(M)$. 

> [!Lemma]
> Let $F$ be a tensor field on $M$. Let $\varphi, \psi:\Omega\to V$ be two local parameterizations. Then the components of $F$ are smooth wrt $\varphi$ iff they are smooth wrt $\psi$. 
> 
> > [!Proof]-
> > 
> > Follows form the fact that $\psi ^{-1}\circ\varphi$ and $\varphi ^{-1}\circ \psi$ are smooth. 

> [!Notation]
> 
> We have seen that if $F$ is a $(l, k)$ tensor field on $M$, then $F_{p}:(T_{p}M)^{k}\to (T_{p}M)^{l}$. Given vector fields $X_{1}, \dots, X_{k}$ on $M$, we can define
> $$
> \tilde{F}(X_{1}, \dots, X_{k})(p)=F_{p}(X_{1}(p), \dots, X_{k}(p)).
> $$
> $\tilde{F}(X_{1}, \dots, X_{k})$ is a function on $M$ for $l=0$, and a vector field on $M$ for $l=1$. 

> [!Lemma]
> Let $F$ be a $(0, k)$ tensor field on $M$. TFAE:
> 1. $F$ is smooth. 
> 2. $\tilde{F}(X_{1}, \dots, X_{k})\in C^{\infty}(M)$ for all $X_{1}, \dots, X_{k}\in \mathfrak{X}(M)$.
> 
> > [!Proof]-
> > 
> > 1 ⇒ 2: For a local parameterization $\varphi:\Omega\to U$, let $F=F^{}_{i_1\cdots i_k}dx^{i_{1}}\otimes\dots \otimes dx^{i_{k}}$. If $X_{j}=X_{j}^{a}\varphi_{a}$, then $dx^{i}(X_{j})=X^{i}_{j}$, and $\tilde{F}(X_{1}, \dots, X_{k})=F_{i_{1}, \dots, i_{k}}X_{1}^{i_{1}}\dots X_{k}^{i_{k}}$. 
> > 
> > 2 ⇒ 1: Fix $p\in M$. Let $\varphi:\Omega\to V$ be a local parameterization around $p$. Let $U\subseteq V$ be an open neighborhood of $p$ such that $\overline{U}\subseteq V$, $\overline{U}$ compact. There exists $\theta\in C^{\infty}(M)$ such that $\theta\equiv 1$ on $U$ and $\text{supp}(\theta)\subseteq V$. $Y_{i}:=\theta \circ\varphi_{i}\in \mathfrak{X}(M)$, and $Y_{i}=\varphi_{i}$ on $U$. It follows that $F_{i_{1}, \dots, i_{k}}=\tilde{F}(Y_{i_{1}}, \dots, Y_{i_{k}})$ on $U$ is smooth on $U$, whence $F$ is smooth. 
> 

^342932

Similarly, we have

> [!Lemma]
> Let $F$ be a $(1, k)$ tensor field on $M$. TFAE:
> 1. $F$ is smooth. 
> 2. $\tilde{F}(X_{1}, \dots, X_{k})\in \mathfrak{X}(M)$ for all $X_{1}, \dots, X_{k}\in \mathfrak{X}(M)$.

^9d0dd1

So, if $F$ is a smooth $(0, k)$ (resp $(1, k)$) tensor field on $M$, then $F$ induces a $C^{\infty}(M)$-multilinear map $\tilde{F}:\mathfrak{X}(M)^{k}\to C^{\infty}(M)$ (resp $\mathfrak{X}(M)$). We will now show that the converse holds, too. 

Suppose $\mathcal{F}:\mathfrak{X}(M)^{k}\to C^{\infty}(M)$ (resp. $\mathfrak{X}(M)$) is any $C^{\infty}(M)$-multilinear.

> [!Lemma]
> Let $X_{1}, \dots, X_{k}\in \mathfrak{X}(M)$. Suppose there exists an index $i$ such that $X_{i}\equiv 0$ on a neighborhood $U$ of $p$. Then $\mathcal{F}(X_{1}, \dots, X_{k})(p)=0$.
> 
> > [!Proof]-
> > 
> > Assume $i=1$. Let $\theta\in C^{\infty}(M)$ such that $\theta\equiv 1$ on a neighborhood of $p$ and $\text{supp}(\theta)\subseteq U$, so that $\theta X_{1}\equiv 0$ on $M$. Then, 
> > $$
> > \begin{align}
> > 0 & =\mathcal{F}(\theta X_{1}, X_{2}, \dots, X_{k}) \\
> >  & =\theta \mathcal{F}(X_{1}, \dots, X_{k})
> > \end{align}
> > $$
> > Because $\theta(p)=1$, we have $\mathcal{F}(X_{1}, \dots, X_{k})(p)=0$. 
> 

^ce6b34

> [!Lemma]
> Let $X_{1}, \dots, X_{k}\in \mathfrak{X}(M)$. Suppose $X_{i}(p)=0$. Then $\mathcal{F}(X_{1}, \dots, X_{k})(p)=0$. 
> 
> > [!Proof]-
> > 
> > Assume $i=1$. Let $\varphi:\Omega\to V$ be a local parameterization around $p$. $X_{1}=u^{j}\varphi_{j}$, $u^{j}(p)=0$ for all $j$. Let $\theta\in C^{\infty}(M)$ be such that $\text{supp}(\theta)\subseteq V$ and $\theta\equiv 1$ on a neighborhood of $p$. Define $\tilde{u}^{j}:=\theta u^{j}\in C^{\infty}(M)$, $Y_{j}=\theta\varphi_{j}\in \mathfrak{X}(M)$. $X_{1}':=\tilde{u}^{j}Y_{j}\equiv X_{1}$ on a neighborhood of $p$. By [[#^ce6b34]], 
> > $$
> > \begin{align}
> > \mathcal{F}(X_{1}, \dots, X_{k})(p) & =\mathcal{F}(X_{1}',\dots, X_{k} )  \\
> >  & =\tilde{u}^{j}(p)\mathcal{F}(Y_{j}, X_{2}, \dots, X_{k})(p) \\
> >  &  =0.
> > \end{align}
> > $$
> > 
> 

^c2e9db

> [!Proposition]
> Let $(\mathfrak{X}(M))^{*}$ denote the $C^{\infty}(M)$-dual of $\mathfrak{X}(M)$. 
> 1. $T^{0}_{k}(M)\cong(\mathfrak{X}(M))^{*\,\otimes k}$
> 2. $T^{1}_{k}(M)\cong\mathfrak{X}(M)\otimes(\mathfrak{X}(M))^{*\,\otimes k}$. 
> 
> > [!Proof]-
> > 
> > (1) The map $F\mapsto \tilde{F}$ gives a $C^{\infty}(M)$-module homomorphism $T^{0}_{k}(M)\to(\mathfrak{X}(M))^{*\,\otimes k}$. For $C^{\infty}(M)$-multilinear $\mathcal{F}:(\mathfrak{X}(M))^{k}\to C^{\infty}(M)$, define $F^{\mathcal{F}}\in T^{0}_{k}$ by
> > $$
> > F^{\mathcal{F}}_{p}(v_{1}, \dots, v_{k}):=\mathcal{F}(X_{1}, \dots, X_{k})(p),
> > $$
> > where $X_{1}, \dots, X_{k}$ are such that $X_{i}(p)=v_{i}$; this is well defined by [[#^c2e9db]] and $F^{\mathcal{F}}_{p}$ is clearly multilinear, making $F^{\mathcal{F}}$ a $(0, k)$ tensor field on $M$. It is easily seen that $\tilde{F^{\mathcal{F}}}=\mathcal{F}$. By [[#^342932]], $F^{\mathcal{F}}$ is smooth. 
> > 
> > (2) follows in a similar way. 
> 

> [!Remark]
> In general, we have $T^{l}_{k}(M)\cong(\mathfrak{X}(M))^{\otimes l}\otimes(\mathfrak{X}(M))^{* \,\otimes k}$ as $C^{\infty}(M)$-modules, where $\mathfrak X(M)^* = \operatorname{Hom}_{C^\infty(M)} (\mathfrak X(M),C^\infty(M))$.

> [!Example]
> The covariant derivative and Lie bracket are not induced by tensor fields:
> 1. Let $A:\mathfrak{X}(M)\times \mathfrak{X}(M)\to \mathfrak{X}(M)$ be the map $A(X, Y)=\nabla_{X}Y$; recall that $A$ is not $C^{\infty}(M)$-multilinear in its second slot. 
> 2. Let $B:\mathfrak{X}(M)\times \mathfrak{X}(M)\to \mathfrak{X}(M)$ be the map $B(X, Y)=[X, Y]$; recall that ([[LEC DGT 4#^51b187]]) $B$ is not $C^{\infty}(M)$-linear in any slot: $[X, fY]=(D_{X}f)Y+f[X, Y]$. 

> [!Example] The curvature tensor is a $(1, 3)$ smooth tensor field
> 
> Recall [[LEC DGT 8#^bd8b5d]]. Is is clear that $p\mapsto R_{p}$ is a $(1, 3)$ tensor field on $M$. Smoothness follows from [[#^9d0dd1]]. 