---
tags: 
date: 2024-11-09
time: 21:33
---
## Recall

For vector spaces $V$ and $W$ over a field $\mathbb{F}$, we define
$$
\hom_{\mathbb{F}}(V,W) = \{ \text{All linear transformations $V \to W$} \}
$$
This is a vector space over $\mathbb{F}$ with pointwise addition and scalar multiplication

> [!Theorem] Theorem
> If $\dim_{\mathbb{F}}V=m$ and $\dim_{\mathbb{F}}W=n$ then $\dim_{\mathbb{F}}\hom_{\mathbb{F}}(V,W)=mn$

> **Proof:**
> Let $v_{1}, v_{2}, \dots, v_{m}$ be a basis of $V$
> Let $w_{1}, w_{2}, \dots, w_{n}$ be a basis of $W$
> 
> For a vector $v \in V$,
> $$
> v = \lambda_{1}v_{1} + \lambda_{2}v_{2}+\dots\lambda_{m}v_{m}
> $$
> For some $\lambda \in \mathbb{F}$.
> For $1 \leq i \leq m$ and $1 \leq j \leq n$, define $T_{ij}: V \to W$ such that $v \mapsto \lambda_{i}w_{j}$.Observe that
> $$
> T_{ij}(v_{k}) =
> \begin{cases}
> 0 & k \neq i \\
> w_{j} & k = i
> \end{cases}
> $$
> We want to show that $T_{ij}$ is a basis for $\hom_{\mathbb{F}}(V,W)$.
> 
> **1) $\{T_{ij}\}$ is a spanning set**
> Let $S \in \hom_{\mathbb{F}}(V,W)$.
> $$
> S(v_{i}) \in W \implies S(v_{i}) = \alpha_{i1}w_{1}+\alpha_{i 2}w_{2}+\dots+\alpha_{in}w_{n}
> $$
> Define
> $$
> S_{0}=
> \begin{matrix}
> \alpha_{11}T_{11}  & + & \alpha_{12}T_{12} & + & \dots & + & \alpha_{1n}T_{1n} & + \\
> \alpha_{21}T_{21}  & + & \alpha_{22}T_{22} & + & \dots & + & \alpha_{2n}T_{2n}  & +\\
> \vdots & & \vdots &  & \ddots &  & \vdots\\
> \alpha_{m1}T_{m1}  & + & \alpha_{m2}T_{m2} & + & \dots & + & \alpha_{mn}T_{mn} \\
> 
> \end{matrix}
> $$
> Now,
> $$
> \begin{align}
> S_{0}(v_{k}) &  = \alpha_{11}T_{11}(v_{k})+\dots+\alpha_{mn}T_{mn}(v_{k}) \\
> & =\alpha_{k1}w_{1}+\alpha_{k2}w_{2}+\dots+\alpha_{k n}w_{n} \\
> & = S(v_{k})
> \end{align}
> $$
> That is, $S$ and $S_{0}$ agree on the basis of $V$. We say that two linear transformations are the same if they agree on the image of each vector of the domain, this is the same as the images of the basis being the same. Therefore $S \in \text{Span}\left(\{ T_{ij} \}\right)$.
> 
> **2) $\{ T_{ij} \}$ is a linearly independent set**
> Suppose there exist $\beta_{ij}$ such that
> $$
> \beta_{11}T_{11} + \dots + \beta_{mn}T_{mn} \equiv 0
> $$
> Now for some $1 \leq k \leq m$, we can say
> $$
> \begin{align}
>          & (\beta_{11}T_{11} + \dots + \beta_{mn}T_{mn})(v_{k}) \equiv 0 \\
> \implies & \beta_{k 1} w_{1} + \dots+\beta_{k n} = 0 \\
> \implies & \beta_{k 1} = \beta_{k 2} = \dots = \beta_{k n} = 0
> \end{align} 
> $$
> Therefore all $\beta_{ij} = 0$. Hence $\{ T_{ij} \}$ are linearly independent.

>[!Important] Corollary
> A basis for the set of all $m \times n$ matrices is given by matrices $\{ M_{ij} \}$ with $1$ in the $(i, j)^{th}$ position and $0$s everywhere else.

>[!important] Corollary
> $$
> \dim_{\mathbb{F}}\hom(V, \mathbb{F}) = \dim V
> $$
> > [!info]- Remark
> > 
> > If $V$ is a finite dimensional vector space, then
> > $$
> > V \cong \mathbb{F}^{\dim V} \cong \hom(V,\mathbb{F})
> > $$
> > But this isomorphism has many shortcomings as there is no universal construction for $V \cong \hom(V, \mathbb{F})$.

## Dual Spaces

>[!theorem] Definition
> If $V$ is a vector space over field $\mathbb{F}$, then its dual space is $\hom_{\mathbb{F}}(V, \mathbb{F})$. The dual space of $V$ is donated by $\hat{V}$.

 - Elements of $\hat{V}$ are called linear functionals i.e. $f: V \to \mathbb{F}$ where $\text{vector }v \mapsto \text{scalar}\ f(v)$.

- If $V$ has basis $v_{1}, v_{2}, \dots, v_{n}$ then define $\hat{v}_{i} \in \hat{V}$ as 
$$
\hat{v_{i}}(v_{j})
=
\begin{cases}
0 & i \neq j \\
1 & i = j
\end{cases}
$$
These are the $T_{ij}$ s from [[Algebra1_L20#Recall|here]]. The dual basis of $V$ is $\hat{v}_{1},\hat{v}_{2},\dots,\hat{v}_{n}$.

>[!important] Corollary
> If $V$ is a finite dimensional vector space and $\exists \ v \in V$ such that $v \neq 0$ then there is an $f \in \hat{V}$ such that $f(v) \neq 0$.
> 
> This is also true for infinite dimensional vector spaces.

## Dual Space of a Dual Space

We will denote the dual space of the dual space of $V$ as $\hat{\hat{V}} \overset{\mathrm{def}}= \hom_{\mathbb{F}}(\hat{V}, \mathbb{F})$.

For a fixed $v_{0} \in V$ and variable $f \in \hat{V}$, define $T_{v_{0}} \in \hat{\hat{V}}$ as a function $T_{v_{0}}: \ \hat{V} \to \mathbb{F}$ where $f \mapsto f(v_{0})$.
Define $\psi: V \to \hat{\hat{V}}$ where $v \mapsto T_{v}$.

Observe that
$$
T_{\alpha v+\beta w}(f) = f(\alpha v+\beta w)=\alpha f(v) + \beta f(w) = \alpha T_{v}(f)+\beta T_{w}(f)
$$
Hence $\psi(\alpha v + \beta w) \equiv \alpha\psi(v) + \beta\psi(w)$. (don't forget that $\psi(v)$ is a function which operates on $f \in \hat{V}$)

### $\psi$ as an isomorphism

If we can show that $\psi(v) \equiv 0 \implies v = 0$ then we can say that $\psi$ is bijective ([[Algebra1_L11#Rank nullity theorem for general linear maps over fdvsps|rank nullity]])
$$ 
\begin{align}
\psi(v) & \equiv 0 \\
T_{v} & \equiv 0 \\
T_{v}(f) & = 0  & \forall \ f \in \hat{V} \\
f(v) & = 0 & \forall \ f \in \hat{V} \\
v  & = 0
\end{align}
$$
Hence, for finite (and infinite) dimensional vector spaces,
$$
\psi: V \overset{\sim}\longrightarrow \hat{\hat{V}}
$$
is an isomorphism (with canonical identification)

## Inner Product Spaces

Let $\mathbb{F}$ be $\mathbb{R}$ or $\mathbb{C}$. The motivation behind this is to define a notion of length and perpendicularity (angle) for vectors.


>[!theorem] Definition
> A vector space $V$ over $\mathbb{F} = \mathbb{R}, \mathbb{C}$ is an Inner Product Space if for any two $v, w \in V$, there is defined an element $\langle v,w \rangle \in \mathbb{F}$ such that it satisfies the following properties
>  - $\langle v,w \rangle$ = $\overline{\langle w,v \rangle}$
>  - $\langle v,v \rangle \geq 0$ and $\langle v,v \rangle = 0 \iff v = 0$
>  - $\langle \alpha u + \beta v,w \rangle$ = $\alpha\langle u,w \rangle + \beta\langle v,w \rangle$

>[!error] Hermitian Dot Product
> For vectors $v, w \in \mathbb{C}^n$, let $v = (v_{1}, v_{2}, \dots, v_{n})$ and $w =(w_{1}, w_{2}, \dots, w_{n})$. Define the inner product of $v$ and $w$ as
> $$
> \langle v, w \rangle = v_{1}\overline{w}_{1} + v_{2}\overline{w}_{2} + \dots + v_{n}\overline{w}_{n}
> $$
> where $\overline z$ denotes the complex conjugate.
> >[!info]- Motivation
> >
> >If we used the _naïve_ definition of the inner product, that is
> > $$
> > \langle v, w \rangle = v_{1}w_{1} + v_{2}w_{2}+\dots+v_{n}w_{n}
> > $$
> > Then for the example of $(1, i) \in \mathbb{C}^2$, we have $\langle (1, i),(1, i)\rangle = 1\cdot 1 + i \cdot i = 0$. This is somewhat of a problem as we expect this to be positive. If we use the _Hermitian dot product_, we get a nicer answer: $\langle (1, i),(1, i)\rangle = 1\cdot \bar{1} + i \cdot \bar{i} = 2$