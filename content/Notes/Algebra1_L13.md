---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-10-08
time: 14:09
---
![[1728577113536.jpg]]
## Recall

Let $T:V\to W$ be a [[Algebra1_L11#Linear maps|linear map]], with $B_{V}$ and $B_{W}$ being bases of $V$ and $W$ respectively. Define isomorphisms $\phi:V\to \mathbb{R}^{\text{Dim }V}$ and $\psi:W\to \mathbb{R}^{\text{Dim }W}$. Then, the columns of the matrix of $T$ are $\psi T\phi ^{-1} \mathbf{v}_{1}$, $\psi T\phi ^{-1} \mathbf{v}_{2}$, ..., $\psi T\phi ^{-1} \mathbf{v}_{\text{Dim} V}$ where $\mathbf{v}_{i}\in B_{V}$. 

> [!example]
> Let  $T : V \to W$ be  the derivative map where $V = \mathbb{P}_{3}$ and $W =\mathbb{P}_{2}$. Let the bases be
> $$
> B_{V} = \{ 1,x,x^2,x^3 \} \quad \quad B_{W} = \{ 1,x,x^2 \}
> $$
> Observe that:
> $$
>  T(1)  = 0 \quad\quad T(x) = 1 \quad\quad T(x^2) = 2x \quad\quad T(x^3) = 3x^2
> $$
> We can now write the matrix of $T$ in the bases $B_{V}$ and $B_{W}$ denoted by $M_{B_{V}, B_{W}}(T)$ as (note the implicit establishment of isomorphisms to $\mathbb{R}^{n}$) :
> $$
> M_{B_{V}, B_{W}}(T)=\begin{bmatrix}
> 0 & 1 & 0 & 0 \\
> 0 & 0 & 2 & 0  \\
> 0 & 0 & 0 & 3
> \end{bmatrix}
> $$

---
## Homomorphisms

> [!Definition]
>A *homomorphism* is a structure preserving map between two algebraic structures of the same type.

Contrast with isomorphism, which is a structure preserving map between two structures of the same type which can be reversed by an inverse mapping.

A linear map is a homomorphism of vector spaces. 
$$
\hom(V,W) \equiv \{ \text{All linear maps} \ T: V \to W \}
$$
#### Relation to Matrices

For two vector spaces $V$ and $W$ with dimensions $p$ and $q$ respectively, $M_{B_{V}, B_{W}}(T)$ is a $q \times p$ matrix.
As every $T$ has a single matrix for a fixed set of bases,  $M_{B_{V}, B_{W}}(T)$ is a function. That is, 
$$M_{B_{V}, B_{W}}(T):\hom(V, W)\to \{ q\times p \text{ matrices} \}$$
**Exercise:** Prove that $M_{B_{V}, B_{W}}$ is an isomorphism of vector spaces.
Thus, $\hom(V,W) \cong \{ q \times p \ \text{matrices} \}$. Therefore $\dim \hom(V,W) = p\times q$

---
## Change of basis
(Ref. 2.4 Hoffman)

Let $V$ be a vector space of dimension $n$. Now, let
$$
\begin{align*}
\text{old basis} \ B_{V} & \equiv \{ \mathbf{v}_{1}, \mathbf{v}_{2}, \dots \mathbf{v}_{n} \}\\
\text{new basis} \ \widetilde{B}_{V} & \equiv \{ \mathbf{w}_{1}, \mathbf{w}_{2}, \dots \mathbf{w}_{n} \}\\
\end{align*}
$$
Each $\mathbf{w}_{j}$ permits representation as a linear combination of $B_{V}$.
$$
\mathbf{w}_{j}=\begin{bmatrix}
\mathbf{v}_{1} & \mathbf{v}_{2} & \dots & \mathbf{v}_{n}
\end{bmatrix}\begin{bmatrix}p_{1, j} \\
p_{2, j} \\
\vdots \\
p_{n, j}\end{bmatrix},
$$
where the left "row vector of vectors" is called a *hyper vector*. 
Using the rule for matrix multiplication, we have
$$
\begin{bmatrix}
\mathbf{w}_{1} & \mathbf{w}_{2} & \dots & \mathbf{w}_{n}
\end{bmatrix}=\begin{bmatrix}
\mathbf{v}_{1} & \mathbf{v}_{2} & \dots & \mathbf{v}_{n}
\end{bmatrix}
\begin{bmatrix}
p_{1,1} & p_{1,2} & \dots  & p_{1,n}\\
p_{2,1} & p_{2,2} & \dots  & p_{2,n} \\
\vdots  & \vdots  & \ddots & \vdots \\
p_{n,1} & p_{n,2} & \dots  & p_{n,n}
\end{bmatrix}.
$$
Denote the hyper vector of the $\mathbf{v}_{i}$'s  as $A$ and that of the $\mathbf{w}_{i}$'s as $B$. The above will become $B = AP$. Fix an arbitrary vector $\mathbf{u} \in V$. $\mathbf{u}$ will have a coordinate vector in $B_{V}$ (call it $\mathbf{c}$) and one in $B_{W}$ (call it $\mathbf{c'}$) such that $\mathbf{u} = A\mathbf{c} = B\mathbf{c'}$.
$$
\begin{align*}
\mathbf{u} = A\mathbf{c} & = B\mathbf{c'}\\
A\mathbf{c} &= AP{\mathbf{c'}}\\
\mathbf{c} &= P\mathbf{c'}
\end{align*}
$$
That is **Old coordinates = (Change of Basis Matrix) New coordinates**

>[!Example]
>Let $T:V\to W$ be a linear transformation. We aim to find $M_{B'_{V}, B'_{W}}(T)$ given that $M_{B_{V}, B_{W}}(T) = A$.
>$$
>\begin{matrix}
> & V & &W \\
>\text{old basis} & B_{V}  &\overset{A}\longrightarrow & B_{W} \\
>& P \big\uparrow & & Q \big\uparrow \\
>\text{new basis} & B'_{V}  & & B'_{W}
>\end{matrix}
>$$
>Fix a vector $\mathbf{v} \in V$ and let $\mathbf{x}$ be its "new" (given) coordinates. Now
>$$
>\begin{align}
>\text{New coordinates of v} & = \mathbf{x} \\
>\text{Old coordinates of v} & = P\mathbf{x} \\
>\text{Transformed coordinates in old basis} &= AP\mathbf{x} \\
>\text{Transformed coordinates in new basis} &= Q^{-1}AP\mathbf{x} 
>\end{align}
>$$
>Therefore,
>$$
>M_{B_{V}',B_{W}'}(T)=Q^{-1}M_{B_{V},B_{W}}(T)P
>$$

---
## Composition of linear maps in terms of the matrices

$$
\begin{matrix}
 & V & \overset T\longrightarrow & W & \overset S\longrightarrow &U \\
\text{dim} & p& & q && r \\
\text{basis} & B_{V} && B_{W}& & B_{U}
\end{matrix}
$$

>[!Theorem] Claim 
>$M_{B_{V}, B_{U}}(S\circ T)=M_{B_{W}, B_{U}}(S)M_{B_{V}, B_{W}}(T)$

>**Proof**
>Let
>$$
>\begin{align}
>A_{q\times p}&=M_{B_{V}, B_{W}}(T) & = (a_{ij})\\
>B_{r\times q}&=M_{B_{W}, B_{U}}(S) & = (b_{ij})\\
>C_{r\times p}&=M_{B_{V}, B_{U}}(S \circ T) & = (c_{ij})
>\end{align}
>$$
>Recall the representation of [[Linear Transformations]] as matrices.
>$$c_{i,j} = \text{Coefficient of} \ \mathbf{u_{i}} \ \text{in} \ (S \circ T)(\mathbf{v_{j}})$$
>Now,
>$$
>\begin{align}
>(S \circ T)(\mathbf{v_{j}}) &= S\left( \sum_{\nu=1}^{q} a_{\nu, j} \mathbf{w_{\nu}}\right) \\
>&= \sum_{\nu=1}^{q} a_{\nu, j} S(\mathbf{w_{\nu}})\\
>&= \sum_{\nu=1}^{q} a_{\nu, j} \sum_{\lambda=1}^{r}b_{\lambda,\nu} \mathbf{u_{\lambda}}
>\end{align}
>$$
>As we want the coefficient of $\mathbf{u_{i}}$, we will only take the $\lambda = i$ term from the second sum. That is
>$$
>c_{ij} = \sum_{\nu=1}^{q} a_{\nu, j}b_{i, \nu} = (AB)_{ij}.
>$$
>❏

---
## A "Good basis" for a linear map

Let $T:V\to W$ be a linear map with $\dim V = p$ and $\dim W = q$.
Let $\text{rank} \ T = r$. Now,
1) Take a basis of $\ker T$ ;                    $\{\mathbf{k}_{1}, \dots \mathbf{k}_{p-r}\}$
2) Extend to get a basis of $V$,  $\beta_{V} = \{ \mathbf{k}_{1}, \dots \mathbf{k}_{p-r}, \mathbf{v}_{1}, \dots \mathbf{v}_{r} \}$
3) We have shown that $T(\mathbf{v}_{1}) \dots T(\mathbf{v}_{r})$ are a basis of $\text{Im} \ T$ (See [[Algebra1_L11#Rank nullity theorem for general linear maps over fdvsps|here]]).
4) Extend this to a basis of $W$. $\beta_{W} = \{ T(\mathbf{k}_{1}) \dots T(\mathbf{k}_r), \mathbf{w}_{1}, \dots \mathbf{w}_{q-r} \}$
5) Now $M_{\beta_{V}, \beta_{W}}(T)$ will be 
$$
\left[\begin{array}{ccccc|ccccc}
0 & 0 & 0 & \dots & 0 & \mathbf{1} & 0 & 0 & \dots & 0 \\
0 & 0 & 0 & \dots & 0 & 0 & \mathbf{1} & 0 & \dots & 0 \\
0 & 0 & 0 & \dots & 0 & 0 & 0 & \mathbf{1} & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots\\
0 & 0 & 0 & \dots & 0 & 0 & 0 & 0 & \dots & \mathbf{1} \\
0 & 0 & 0 & \dots & 0 & 0 & 0 & 0 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & 0 & 0 & 0 & 0 & \dots & 0
\end{array}\right]
$$
(Basically $I_{q\times q}$ but with the last $q-r$ elements of its diagonal 0).