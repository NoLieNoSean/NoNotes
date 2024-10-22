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

Let $T:V\to W$ is a linear map, with $B_{V}$ and $B_{W}$ being bases of $V$ and $W$ respectively. The matrix of $T$ in the given bases is the matrix whose columns are coordinate vectors of $T(B_{V})$ with respect to the basis $B_{W}$.

> [!example]
> Let  $T : V \to W$ be  the derivative map where $V = \mathbb{P}_{3}$ and $W =\mathbb{P}_{2}$. Let the bases be
> $$
> B_{V} = \{ 1,x,x^2,x^3 \} \quad \quad B_{W} = \{ 1,x,x^2 \}
> $$
> Observe that:
> $$
>  T(1)  = 0 \quad\quad T(x) = 1 \quad\quad T(x^2) = 2x \quad\quad T(x^3) = 3x^2
> $$
> We can now write the matrix of $T$ in the bases $B_{V}$ and $B_{W}$ denoted by $\mathcal{M}_{B_{V}, B_{W}}(T)$ as (note the implicit establishment of isomorphisms to $\mathbb{R}^{n}$) :
> $$
> \mathcal{M}_{B_{V}, B_{W}}(T)=\begin{bmatrix}
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

$\hom(V,W) \equiv \{ \text{all linear maps} \ T: V \to W \}$.
### Relation to Matrices

For two vector spaces $V$ and $W$ with dimensions $p$ and $q$ and $T:v\to W$, $\mathcal{M}_{B_{V}, B_{W}}(T)$ is a $q \times p$ matrix, as we have [[Algebra1_L12#Matrices of linear maps in fdvsp|seen]]. As every $T$ has a single matrix for a fixed set of bases,  $\mathcal{M}_{B_{V}, B_{W}}(T)$ is a function. That is,
$$
\mathcal{M}_{B_{V}, B_{W}}(T):\hom(V, W)\to \{ q\times p \text{ matrices} \}.
$$
**Exercise:** Prove that $\mathcal{M}_{B_{V}, B_{W}}$ is an isomorphism of vector spaces.
Thus, $\hom(V,W) \cong \{ q \times p \ \text{matrices} \}$. Therefore $\dim \hom(V,W) = p\times q$.

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
>Let $T:V\to W$ be a linear transformation. We aim to find $\mathcal{M}_{B'_{V}, B'_{W}}(T)$ given that $\mathcal{M}_{B_{V}, B_{W}}(T) = A$.
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
>\mathcal{M}_{B_{V}',B_{W}'}(T)=Q^{-1}\mathcal{M}_{B_{V},B_{W}}(T)P
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
>$\mathcal{M}_{B_{V}, B_{U}}(S\circ T)=\mathcal{M}_{B_{W}, B_{U}}(S)\mathcal{M}_{B_{V}, B_{W}}(T)$

>**Proof**
>Let
>$$
>\begin{align}
>A_{q\times p}&=\mathcal{M}_{B_{V}, B_{W}}(T) & = (a_{ij})\\
>B_{r\times q}&=\mathcal{M}_{B_{W}, B_{U}}(S) & = (b_{ij})\\
>C_{r\times p}&=\mathcal{M}_{B_{V}, B_{U}}(S \circ T) & = (c_{ij})
>\end{align}
>$$
>Recall the [[Linear Transformations#Matrix-vector multiplication as a linear transformation|representation of linear transformations as matrices]].
>$$c_{i,j} = \text{Coefficient of} \ \mathbf{u_{i}} \ \text{in} \ (S \circ T)(\mathbf{v_{j}})$$
>Now,
>$$
>\begin{align}
>(S \circ T)(\mathbf{v_{j}}) &= S\left( \sum_{\nu=1}^{q} a_{\nu, j} \mathbf{w_{\nu}}\right) \\
>&= \sum_{\nu=1}^{q} a_{\nu, j} S(\mathbf{w_{\nu}})\\
>&= \sum_{\nu=1}^{q} a_{\nu, j} \sum_{\lambda=1}^{r}b_{\lambda,\nu} \mathbf{u_{\lambda}}.
>\end{align}
>$$
>As we want the coefficient of $\mathbf{u_{i}}$, we will only take the $\lambda = i$ term from the second sum. That is
>$$
>c_{ij} = \sum_{\nu=1}^{q} a_{\nu, j}b_{i, \nu} = (AB)_{ij}.
>$$
>❏

---
## A "Good" basis for a linear map

Let $T:V\to W$ be a linear map with $\dim V = p$ and $\dim W = q$. We want to choose bases $B_{V}$ and $B_{W}$ such that $\mathcal{M}_{B_{V}, B_{W}}(T)$ is as simple as possible. 

Let $\text{rank} \ T = r$. Now, take a basis of $\ker T$, $\{\mathbf{k}_{1}, \dots \mathbf{k}_{p-r}\}$ (Recall the [[Algebra1_L11#Rank nullity theorem for general linear maps over fdvsps|rank nullity theorem]]).
Extend to get a basis of $V$,  $B_{V} = \{ \mathbf{k}_{1}, \dots \mathbf{k}_{p-r}, \mathbf{v}_{1}, \dots \mathbf{v}_{r} \}$.
We have shown that $T(\mathbf{v}_{1}) \dots T(\mathbf{v}_{r})$ are a basis of $\text{Im} \ T$ (See [[Algebra1_L11#Rank nullity theorem for general linear maps over fdvsps|here]]).
Extend this to a basis of $W$. $B_{W} = \{ T(\mathbf{k}_{1}) \dots T(\mathbf{k}_r), \mathbf{w}_{1}, \dots \mathbf{w}_{q-r} \}$.
Now $\mathcal{M}_{B_{V}, B_{W}}(T)$ will be 
$$
\left[\begin{array}{ccccc|ccccc}
0 & 0 & 0 & \dots & 0 & \mathbf{1} & 0 & 0 & \dots & 0 \\ 
0 & 0 & 0 & \dots & 0 & 0 & \mathbf{1} & 0 & \dots & 0 \\ 
0 & 0 & 0 & \dots & 0 & 0 & 0 & \mathbf{1} & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots\\ 
0 & 0 & 0 & \dots & 0 & 0 & 0 & 0 & \dots & \mathbf{1} \\
\hline 0 & 0 & 0 & \dots & 0 & 0 & 0 & 0 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \dots & 0 & 0 & 0 & 0 & \dots & 0
\end{array}\right]
$$
More concisely, 
$$
\Large
\left[\begin{array}{c|c}
\mathbf{0}_{r\times(p-r)} & I_{r\times r} \\
\hline\mathbf{0}_{(q-r)\times(p-r)}& \mathbf{0}_{(q-r)\times r}
\end{array}\right]
$$
