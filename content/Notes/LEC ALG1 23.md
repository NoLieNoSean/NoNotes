---
tags:
  - ALG1
  - Lecture
date: 2024-11-14
time: 14:00
id: "89"
---
## Bilinear forms

We will now generalize the notion of the inner product. We will see that the [[LEC ALG1 21#Inner Product Spaces|inner product, as defined in the previous lecture]], is a positive definite symmetric (bilinear) form on a real vector space, and a positive definite Hermitian form on a complex vector space. 

> [!Definition]
> A *bilinear form* on a real vector space $V$ is a map $V\times V\to \mathbb{R}$. Given a pair of vectors $\mathbf{v}$ and $\mathbf{w}$, the form returns a real number denoted from now on by $\langle \mathbf{v}, \mathbf{w} \rangle$. (This is no longer the inner product from the previous lecture!) A bilinear form is linear in each variable.
> $$
> \left\langle  \sum x_{i}\mathbf{v}_{i}, \mathbf{w}  \right\rangle=\sum x_{i}\langle \mathbf{v}_{i}, \mathbf{w} \rangle
> $$
> $$
> \left\langle  \mathbf{v}, \sum \mathbf{w}_{j}y_{j}  \right\rangle =\sum \langle \mathbf{v}, \mathbf{w}_{j} \rangle y_{i}
> $$

Let $\langle \,, \rangle$ be a bilinear form on $V$. Let $V$ have a basis $\mathcal{B}=( \mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n} )$. Let $\mathbf{v}, \mathbf{w}\in V$. Then, 
$$
\langle \mathbf{v}, \mathbf{w} \rangle =\left\langle  \sum_{i} x_{i}\mathbf{v}_{i}, \sum_{j} \mathbf{v}_{j}y_{j} \right\rangle=\sum_{i, j}x_{i}\langle \mathbf{v}_{i}, \mathbf{v}_{j} \rangle  y_{j}.
$$
Observe that this sum can be expressed as
$$
\begin{bmatrix}
x_{1} & x_{2} & \dots & x_{n}
\end{bmatrix}
\begin{bmatrix}
\langle \mathbf{v}_{1}, \mathbf{v}_{1}  \rangle  & \langle \mathbf{v}_{1}, \mathbf{v}_{2} \rangle  & \dots & \langle \mathbf{v}_{1}, \mathbf{v}_{n} \rangle  \\
\langle \mathbf{v}_{2}, \mathbf{v}_{1}  \rangle  & \langle \mathbf{v}_{2}, \mathbf{v}_{2} \rangle  & \dots & \langle \mathbf{v}_{2}, \mathbf{v}_{n} \rangle  \\ 
\vdots & \vdots  & \ddots  & \vdots  \\
\langle \mathbf{v}_{n}, \mathbf{v}_{1}  \rangle  & \langle \mathbf{v}_{n}, \mathbf{v}_{2} \rangle  & \dots & \langle \mathbf{v}_{n}, \mathbf{v}_{n} \rangle  \\ 
\end{bmatrix}
\begin{bmatrix}
y_{1} \\
y_{2} \\
\vdots \\
y_{n}
\end{bmatrix}
$$
$$
=[\mathbf{v}]_{\mathcal{B}}^{T}A[\mathbf{w}]_{\mathcal{B}}
$$
The matrix $A$ is known as the matrix of the bilinear form in the basis $\mathcal{B}$ (may be denoted as $[\langle \,, \rangle]_{\mathcal{B}}$. This is non-standard.) Note that the bilinear form itself is independent of the basis chosen; what changes with the choice of basis is its matrix representation. Thus, given a bilinear form $\langle \, , \rangle$ on $V$, $\langle \mathbf{v}, \mathbf{w} \rangle$ can be calculated by using any basis $\mathcal{B}$ to be $[\mathbf{v}]_{\mathcal{B}}^{T} \  [\langle \,, \rangle]_{\mathcal{B}} \ [\mathbf{w}]_{\mathcal{B}}$. 

Similarly, any bilinear form $\langle \,, \rangle$ on $\mathbb{R}^{n}$ is given by
$$
\langle \mathbf{v}, \mathbf{w} \rangle =\mathbf{v}^{T}A\mathbf{w}
$$
for some $n\times n$ matrix $A$. Note that we didn't have to choose a basis to arrive at the above equation (in a sense, it is "canonical"); the elements of $\mathbb{R}^{n}$ are column vectors, and naturally allow a bilinear form to be described in the above manner. Of course, if we treat $\mathbb{R}^n$ as an abstract vector space and choose an arbitrary basis $\mathcal{B}$, we can write elements in terms of their coordinates in $\mathcal{B}$, leading again to the formula: $[\mathbf{v}]_{\mathcal{B}}^{T} \  [\langle \,, \rangle]_{\mathcal{B}} \ [\mathbf{w}]_{\mathcal{B}}$. The distinction between treating $\mathbb{R}^n$ as a coordinate space with its canonical basis and as an abstract vector space with a chosen basis is subtle but important.

### Change of basis

The matrix of a bilinear form $\langle \,, \rangle$ depends on our choice of basis, as must be evident from the above discussion. How does this matrix change when we change the basis?

Let $\langle \,, \rangle$ be a bilinear form on a real vector space $V$, and let $A$ and $A'$ be its matrices with respect to bases $\mathcal {B}$ and $\mathcal {B'}$. Let $P$ be the the [[LEC ALG1 13#Change of basis|change of basis matrix]] from $\mathcal {B}$ to $\mathcal {B'}$ (i.e, $[\mathbf{v}]_{\mathcal {B}}=P[\mathbf{v}]_{\mathcal {B'}}$ for all $\mathbf{v}\in V$). Then, 

$$
\begin{align}
\langle \mathbf{v}, \mathbf{w} \rangle =[\mathbf{v}]_{\mathcal {B}}^{T}A[\mathbf{w}]_{\mathcal {B}}=(P[\mathbf{v}]_{\mathcal {B'}})^{T}A(P[\mathbf{w}]_{\mathcal {B'}})=[\mathbf{v}]_{\mathcal {B'}}^{T}(P^{T}AP) [\mathbf{w}]_{\mathcal {B'}}
\end{align}.
$$
Thus, we have $A'=P^{T}AP$. 

> [!Theorem]
> If $A$ is the matrix of a bilinear form is a basis, and you change the basis such that the change of basis matrix is $P$, the new matrix of the bilinear form is $P^{T}AP$.

> [!Important]
> For a real vector space $V$ with dimension $n$, when a basis is given, both linear operators and bilinear forms are described by $n\times n$ matrices. However, the theories of linear operators and bilinear forms are not equivalent. When one makes a change of basis, the matrix $A$ of a bilinear form changes to $P^{T}AP$, while the matrix $A$ of a linear operator changes to $P^{-1}AP$. 

### Symmetric forms

A bilinear form is *symmetric* if $\langle \mathbf{v}, \mathbf{w} \rangle=\langle \mathbf{w}, \mathbf{v} \rangle$ for all $\mathbf{v}, \mathbf{w}\in V$. "symmetric form" is short for "symmetric bilinear form". 

Let $A$ be an $n\times n$ matrix. Say the form defined by $\mathbf{v}^{T}A\mathbf{w}$ on $\mathbb{R}^{n}$ is symmetric. Then, we must have $\langle \mathbf{e}_{i}, \mathbf{e}_{j} \rangle=\langle \mathbf{e}_{j}, \mathbf{e}_{i} \rangle$ for all $i, j$. Note that $\mathbf{e}_{i}^{T}A\mathbf{e}_{j}=a_{ij}$. Thus, we have $a_{ij}=a_{ji}$ for all $i, j$, i.e, $A$ is symmetric! Is the converse true? Let $A$ be symmetric. Thinking of $\mathbf{v}^{T}A\mathbf{w}$ as a $1\times 1$ matrix, it is equal to its transpose. Thus, we have $\langle \mathbf{v}, \mathbf{w} \rangle=\mathbf{v}^{T}A\mathbf{w}=\mathbf{w}^{T}A^{T}\mathbf{v}=\mathbf{w}^{T}A\mathbf{v}=\langle \mathbf{w}, \mathbf{v} \rangle$. 

> [!Theorem]
> Let $A$ be an $n\times n$ matrix. The form $\mathbf{v}^{T}A\mathbf{w}$ on $\mathbb{R}^{n}$ is symmetric if and only if $A$ is symmetric.

Now consider a bilinear form $\langle \,, \rangle$ on an abstract vector space $V$. Pick an arbitrary basis $\mathcal {B}$. Let the matrix of the bilinear form in this basis be $A$. Then, if the form is symmetric, $[\mathbf{v}]_{\mathcal {B}}^{T}A[\mathbf{w}]_{\mathcal {B}}=[\mathbf{w}]^{T}_{\mathcal {B}}A[\mathbf{v}]_{\mathcal {B}}$, i.e, the form on $\mathbb{R}^{n}$ defined by $\mathbf{x}^{T}A\mathbf{y}$ is symmetric, which implies $A$ is symmetric.

> [!Theorem]
> A bilinear form $\langle \,, \rangle$ is symmetric if and only if its matrix with respect to an arbitrary basis is a symmetric matrix.

### Positive definite forms

A bilinear form is positive definite if $\langle \mathbf{v}, \mathbf{v} \rangle>0$ for all nonzero vectors $\mathbf{v}$. The dot product is a symmetric, positive definite form on $\mathbb{R}^{n}$. The matrix of the dot product on $\mathbb{R}^{n}$ is the identity matrix. Thus, if $\langle \,, \rangle$ is the dot product, $\langle \mathbf{v}, \mathbf{w} \rangle=\mathbf{v}^{T}\mathbf{w}$. If we change basis to $\mathcal {B}$ using a change of basis matrix $P$, then $\langle \mathbf{v}, \mathbf{w} \rangle=[\mathbf{v}]_{\mathcal {B}}P^{T}P[\mathbf{w}]_{B}$, i.e, the matrix of the dot product becomes $P^{T}P$. If the [[LEC ALG1 21#Orthogonal matrices|change of basis is orthogonal]], $P^{T}P$ is the identity matrix, and $\langle \mathbf{v}, \mathbf{w} \rangle=\langle [\mathbf{v}]_{\mathcal {B}}, [\mathbf{w}]_{\mathcal {B}} \rangle$. 

Analogously to the terminology for positive forms, we say a matrix $A$ is positive definite if the form defined by $A$ on $\mathbb{R}^{n}$ is positive definite, i.e, $\mathbf{x}^{T}A\mathbf{x}>0$ for all nonzero column vectors $\mathbf{x}$. Evidently, if the form $\mathbf{x}^{T}A\mathbf{x}$ is equivalent to the dot product (which is positive definite), $A$ must be positive definite.

Consider the following properties of a real $n\times n$ matrix:
1. The form $\mathbf{x}^{T}A\mathbf{x}$ on $\mathbb{R}^{n}$ represents the dot product with respect to some basis of $\mathbb{R}^{n}$.
2. There is an invertible matrix $P$ such that $A=P^{T}{P}$.
3. The matrix $A$ is symmetric and positive definite.

We have seen that 1 and 2 are equivalent, and that 1 implies 3. We will see that 3 implies 1 in a bit. So, the above statements are equivalent.

---

## Hermitian forms

> [!Definition]
> A *Hermitian form* on a complex vector space $V$ is a map $V\times V\to \mathbb{C}$ denoted by $\langle \mathbf{v}, \mathbf{w} \rangle$. A Hermitian form is
> 1. Conjugate linear in the first variable
> 2. Linear in the second variable
> 3. Hermitian symmetric

- Because of Hermitian symmetry, $\langle \mathbf{v}, \mathbf{v} \rangle=\overline{\langle \mathbf{v}, \mathbf{v} \rangle}$, so $\langle \mathbf{v}, \mathbf{v} \rangle\in \mathbb{R}$ for all $\mathbf{v}\in V$. 
- The transpose operation is replaced by the adjoint here: $A^{*}=\overline{A^{T}}$. 
- The standard hermitian form is the complex analogue of the the dot product: $\langle \mathbf{v}, \mathbf{w} \rangle =\mathbf{v}^{*}\mathbf{w}$.

The matrix of a Hermitian form with respect to a basis is defined as for bilinear forms. The matrix of the standard hermitian form on $\mathbb{C}^{n}$ is the identity matrix. 


$A$ is a hermitian matrix $\iff$ the form defined by $A$ is a hermitian form.
Change of basis: $A'=P^{*}AP$.

Eigenvalues (and so trace and determinant) of a Hermitian matrix are real numbers.
Cor: eigenvalues of real symmetric matrix are real numbers.

P is a unitary matrix (analog to orthogonal matrices): $P^{*}P=I$. It's columns are orthonormal with respect to the standard hermitian form.

Change of basis in $\mathbb{R}^{n}$ preserves dot product if and only if the change of basis matrix is orthogonal. Similarly, a change of basis in $\mathbb{C}^{n}$ preserves the standard Hermitian form $X^{*}Y$ if and only if the change of basis matrix is unitary.

A form may be degenerate on a subspace, though it is nondegenerate on the whole space, and vice versa. Example:
$$
\begin{bmatrix}
0 & 1 & 1 \\
1 & 0 & 1 \\
1 & 1 & 0
\end{bmatrix}
$$
non degenerate on R3. Degenerate on the span of $[1, 0, 0]$.

A vector $\mathbf{v}$ is a null vector iff its coordinate vector $Y$ solves the homogeneous equaiton $AY=0$.
The form in nondegenerate iff the matrix mKA is invertible.

Let $\langle \,, \rangle$ be a symmetric form on a re