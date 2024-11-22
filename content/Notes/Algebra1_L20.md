---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-11-05
time: 14:00
---
## Dual Spaces

### Preliminaries

For vector spaces $V$ and $W$ over a field $\mathbb{F}$, we define
$$
\hom_{\mathbb{F}}(V,W) \equiv \{ \text{All linear transformations $V \to W$} \}.
$$
This is a vector space over $\mathbb{F}$ with point-wise addition and scalar multiplication.

> [!Important]
> The field over which a vector space is defined can change its dimension. For example, consider the complex numbers $\mathbb{C}$ as a vector space over the field $\mathbb{C}$. The dimension of this vector space is 1, i.e, $\dim_{\mathbb{C}}\mathbb{C}=1$. However, if we consider $\mathbb{C}$ as a vector space over the field $\mathbb{R}$, its dimension is 2, i.e, $\dim_{\mathbb{R}}\mathbb{C}=2$. 

> [!Theorem] Theorem
> If $\dim_{\mathbb{F}}V=m$ and $\dim_{\mathbb{F}}W=n$ then $\dim_{\mathbb{F}}\hom_{\mathbb{F}}(V,W)=mn$

> **Proof**
> Let $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{m}$ be a basis of $V$.
> Let $\mathbf{w}_{1}, \mathbf{w}_{2}, \dots, \mathbf{w}_{n}$ be a basis of $W$.
> For a vector $\mathbf{v} \in V$, $\mathbf{v} = \lambda_{1}\mathbf{v}_{1} + \lambda_{2}\mathbf{v}_{2}+\dots\lambda_{m}\mathbf{v}_{m}$ for some $\lambda_{i} \in \mathbb{F}$.
> 
> For $1 \leq i \leq m$ and $1 \leq j \leq n$, define $T_{ij}: V \to W$ such that $\mathbf{v} \mapsto \lambda_{i}\mathbf{w}_{j}$. Observe that
> $$
> T_{ij}(\mathbf{v}_{k}) =
> \begin{cases}
> 0 & k \neq i \\
> \mathbf{w}_{j} & k = i
> \end{cases}
> $$
> We want to show that $\{ T_{ij} \}$ is a basis for $\hom_{\mathbb{F}}(V,W)$.
> 
> **1) $\{T_{ij}\}$ is a spanning set**
> Let $S \in \hom_{\mathbb{F}}(V,W)$.
> $$
> S(\mathbf{v}_{i}) \in W \implies S(\mathbf{v}_{i}) = \alpha_{i1}\mathbf{w}_{1}+\alpha_{i 2}\mathbf{w}_{2}+\dots+\alpha_{in}\mathbf{w}_{n}.
> $$
> Define
> $$
> S_{0}\equiv
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
> S_{0}(\mathbf{v}_{k}) &  = \alpha_{11}T_{11}(\mathbf{v}_{k})+\dots+\alpha_{mn}T_{mn}(\mathbf{v}_{k}) \\
> & =\alpha_{k1}\mathbf{w}_{1}+\alpha_{k2}\mathbf{w}_{2}+\dots+\alpha_{k n}\mathbf{w}_{n} \\
> & = S(\mathbf{v}_{k}).
> \end{align}
> $$
> That is, $S$ and $S_{0}$ agree on the basis of $V$. Since a linear map is characterized by the values it takes on a basis, this implies $S$ and $S_{0}$ are equal. Therefore $S \in \text{Span}\left(\{ T_{ij} \}\right)$.
> 
> **2) $\{ T_{ij} \}$ is a linearly independent set**
> Suppose there exist $\beta_{ij}$ such that
> $$
> \beta_{11}T_{11} + \dots + \beta_{mn}T_{mn} = 0.
> $$
> Now for $1 \leq k \leq m$, we can say
> $$
> \begin{align}
>          & (\beta_{11}T_{11} + \dots + \beta_{mn}T_{mn})(\mathbf{v}_{k}) = 0 \\
> \implies & \beta_{k 1} \mathbf{w}_{1} + \dots+\beta_{k n}\mathbf{w}_{n} = 0 \\
> \implies & \beta_{k 1} = \beta_{k 2} = \dots = \beta_{k n} = 0
> \end{align} 
> $$
> Therefore all $\beta_{ij} = 0$. ❏

>[!Theorem] Corollary
> A basis for the set of all $m \times n$ matrices is given by matrices $\{ M_{ij} \}$ with $1$ in the $(i, j)^{th}$ position and $0$s everywhere else.

>[!Theorem] Corollary
> $$
> \dim_{\mathbb{F}}\hom_{\mathbb{F}}(V, \mathbb{F}) = \dim_{\mathbb{F}} V.
> $$

So, if $V$ is a finite dimensional vector space, then $V\cong \hom(V, \mathbb{F})$, since $V \cong \mathbb{F}^{\dim V} \cong \hom(V,\mathbb{F})$. There is no universal construction for an isomorphism $\phi:V\to\hom(V, \mathbb{F})$ though, because defining such an isomorphism requires us to pick a basis. More on this in a bit.
### Notation

>[!Definition]
> If $V$ is a vector space over field $\mathbb{F}$, then its *dual space* is $\hat{V}\equiv\hom_{\mathbb{F}}(V, \mathbb{F})$.

Elements of $\hat{V}$, $f: V \to \mathbb{F}$ are called *linear functionals*.

If $V$ has basis $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n}$ then define $\hat{v}_{i} \in \hat{V}$ as 
$$
\hat{v_{i}}(\mathbf{v}_{k})
\equiv
\begin{cases}
0 & i \neq k \\
1 & i = k
\end{cases}
$$
These are the $T_{ij}$'s from above ($j$ is moot since $\dim\mathbb{F}=1$). It is evident that $\hat{v}_{1},\hat{v}_{2},\dots,\hat{v}_{n}$ is a basis of $\hat{V}$.

>[!important] Remark
> If $V$ is a finite dimensional vector space and $\exists \ \mathbf{v} \in V$ such that $\mathbf{v} \neq 0$ then there is an $f \in \hat{V}$ such that $f(\mathbf{v}) \neq 0$.
> 
> Incidentally, this is also true for infinite dimensional vector spaces.

### The double dual

> [!Definition]
> We will denote the dual space of the dual space of $V$ (aka the *double dual* of $V$) by $\hat{\hat{V}} \equiv \hom_{\mathbb{F}}(\hat{V}, \mathbb{F})$.

For $\mathbf{v}_{0} \in V$, define corresponding $T_{\mathbf{v}_{0}} \in \hat{\hat{V}}$ ($T_{\mathbf{v}_{0}}:\hat{V}\to \mathbb{F}$) such that $f \xmapsto{T_{\mathbf{v}_{0}}} f(\mathbf{v}_{0})$. Define $\psi: V \to \hat{\hat{V}}$ such that $\mathbf{v} \xmapsto{\psi} T_{\mathbf{v}}$.

Now, observe that $T_{\mathbf{v}}$ is linear over $\mathbf{v}$:
$$
T_{\alpha \mathbf{v}+\beta \mathbf{w}}(f) = f(\alpha \mathbf{v}+\beta \mathbf{w})=\alpha f(\mathbf{v}) + \beta f(\mathbf{w}) = \alpha T_{\mathbf{v}}(f)+\beta T_{\mathbf{w}}(f).
$$
Hence,
$$
\psi(\alpha \mathbf{v} + \beta \mathbf{w}) = T_{\alpha \mathbf{v}+\beta \mathbf{w}}= \alpha T_{\mathbf{v}}+\beta T_{\mathbf{w}}=\alpha \psi(\mathbf{v})+\beta \psi(\mathbf{w}).
$$
So, $\psi$ is a linear map!
#### Is psi an isomorphism?

If we can show that $\psi(\mathbf{v}) = 0 \implies \mathbf{v} = 0$ then we can say that $\psi$ is injective.
$$ 
\begin{array}{lll}
 & \psi(\mathbf{v}) & = 0 \\
 \implies & T_{\mathbf{v}} & = 0 \\
 \implies& T_{\mathbf{v}}(f) & = 0  & \forall \ f \in \hat{V} \\
  \implies& f(\mathbf{v}) & = 0 & \forall \ f \in \hat{V} \\
  \implies& \mathbf{v}  & = 0 &\because \text{ if }\mathbf{v}\ne 0, \text{ then }\exists f\in \hat{V}\text{ s.t } f(\mathbf{v})\ne 0 
\end{array}
$$
Now, from the [[Algebra1_L11#Rank nullity theorem for general linear maps over fdvsps|rank nullity theorem]], $\dim \mathrm{Im}\ \psi=\dim V$. Note that $\dim V= \dim\hat{V}=\dim \hat{\hat{V}}$. Hence, $\psi$ is surjective. Therefore, $\psi$ is a bijective linear map, i.e, an isomorphism.
$$
\psi: V \overset{\sim}\longrightarrow \hat{\hat{V}}
$$
Notice that we did not have to make any arbitrary "choices" (like choosing a basis, etc) when defining $\psi$. Such an isomorphism is called a *canonical isomorphism*. Contrast with an isomorphism $\phi:V\to \hat{V}$, which requires us to pick a basis to define. Thus, $V\cong \hat{V}$ is not canonical, while $V\cong \hat{\hat{V}}$ is.

This renders all higher dual spaces moot, since we have canonical isomorphisms
$$
V\cong \hat{\hat{V}}\cong \hat{\hat{\hat{\hat{V}}}}\cong\dots,
$$
$$
\hat{V}\cong \hat{\hat{\hat{V}}}\cong \hat{\hat{\hat{\hat{\hat{V}}}}}\cong\dots.
$$
