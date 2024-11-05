---
tags:
  - ALG1
  - Lecture
date: 2024-10-29, Tuesday
time: 14:00
---
## Recall
[[Algebra1_L18#Characteristic Polynomial|Characteristic Polynomial]]

>[!Theorem] Lemma
> The characteristic polynomial of a linear operator is independent of the basis

>**Proof**:
> $$
> \det(Ix-PAP^{-1})=\det(P(Ix-A)P^{-1})=\det(Ix-A)
> $$

>[!Theorem] Corollary
> Similar Matrices have the same eigenvalues.

**Exercise:** Let $K$ and $W$ be the kernel and the image of a linear operator $T:V\to V$. TFAE
- $V \cong K \oplus W$
- $K \cap W = \{ 0 \}$
- $V = K + W$
## General Vector Spaces

> [!Proposition]
> 
> Let $V$ be a nontrivial vector space over $\mathbb{C}$. Then any linear operator $T: V \to V$ will have at least one eigenvector 

> **Proof:**
> The characteristic polynomial of $T$ will be of degree $\geq 1$. By the Fundamental Theorem of Algebra, this will have at least one complex root. Hence proved.

> [!Proposition]
> Every complex $n \times n$ matrix is similar to an upper triangular matrix.

> **Proof:**
> We want to show that for every complex $n \times n$ matrix $A$ there exists a complex $n \times n$ invertible matrix $P$ such that $PAP^{-1}$ is upper triangular.
> 
> $A$ has at least one eigenvector, call it $v$ and its corresponding eigenvalue $\lambda$,
> Extend $\{ v \}$ to a basis of $V$. In this basis, observe that
> $$
> A' =
> \left[
> \begin{array}{c|ccc}
> \lambda  & * & \cdots & * \\
> \hline 
> 0 \\
> \vdots  &  & D\\
> 0
> \end{array}
> \right]
> $$
> By induction hypothesis on $D$, there exists an $(n-1) \times (n-1)$ matrix $Q$ such that $QDQ^{-1}$ is upper triangular. Observe that the 
> $$
> G =
> \left[
> \begin{array}{c|ccc}
> 1 & 0 & \cdots & 0 \\
> \hline
> 0 \\
> \vdots &  & Q \\
> 0
> \end{array}
> \right]
> \qquad
> {G}^{-1} =
> \left[
> \begin{array}{c|ccc}
> 1 & 0 & \cdots & 0 \\
> \hline
> 0 \\
> \vdots &  & Q^{-1} \\
> 0
> \end{array}
> \right]
> $$
> Using block multiplication of matrices it is evident that ${G}^{-1}$ has the above form and that $GA'{G}^{-1}$ will be upper triangular.
> 
> Since $A$ and $A'$ are similar, we can write $A' = KAK^{-1}$ for some change of basis matrix of $K$. Observe that $GAG^{-1} = (GK)A(K^{-1}G^{-1}) = (GK)A(GK)^{-1}$ is upper triangular. Put $P =GK$ and we are done.

>[!Remark]
> If $A$ is an $n \times n$ matrix over a field $\mathbb{F}$ such that its characteristic polynomial is a product of linear factors in $\mathbb{F}$, then there exists an invertible matrix $P$ (with entries in $\mathbb{F}$) such that $PAP^{-1}$ is upper triangular

## Diagonal Matrices

> [!Theorem] Proposition
> 
> An $n \times n$ matrix $A$ is similar to a diagonal matrix $\iff$ there exists a basis of $\mathbb{F}^n$ that consists of eigenvectors

> **Proof:**
> 
> Suppose there exists a basis of $\mathbb{F}^n$ that consists of eigenvectors, that is there exists $\beta = \{ v_{1}, v_{2},\dots,v_{n} \}$ such that $T(v_{i}) = \lambda_{i}v_{i}$. Then
> $$
> \mathcal{M}_{\beta}=
> \begin{bmatrix}
> \lambda_{1} \\
> & \lambda_{2} \\
> &  & \ddots \\
> &  &  & \lambda_{n} 
> \end{bmatrix}
> $$

> [!Theorem]
> 
> For a linear operator $T: V \to V$ over a field $\mathbb{F}$, if $p_{_{T}}(x)$ has $n$ distinct roots in $\mathbb{F}$ then there is a basis for $V$ with respect to which the matrix of $T$ is diagonal.

>[!example]
> $$
> A =
> \begin{bmatrix}
> 4 & 1 \\
> -2 & 1
> \end{bmatrix}
> $$
> The characteristic polynomial will be $\det(A-xI) = (x-2)(x-3)$.
> 
> **2-Eigenspace:**
> $$
> \ker
> \left(
> \begin{bmatrix}
> 4 & 1 \\
> -2 & 1
> \end{bmatrix}
> -
> \begin{bmatrix}
> 2 & 0 \\
> 0 & 2
> \end{bmatrix}
> \right)
> =
> \text{span}\,
> \left(
> \begin{bmatrix}
> 1 \\
> -2
> \end{bmatrix}
> \right)
> $$
> **3-Eigenspace:**
> $$
> \ker
> \left(
> \begin{bmatrix}
> 4 & 1 \\
> -2 & 1
> \end{bmatrix}
> -
> \begin{bmatrix}
> 3 & 0 \\
> 0 & 3
> \end{bmatrix}
> \right)
> =
> \text{span}\,
> \left(
> \begin{bmatrix}
> 1 \\
> -1
> \end{bmatrix}
> \right)
> $$
> > [!tip]- Sanity Check
> > The change of basis matrix to the eigen-basis will be
> > $$
> > G=\begin{bmatrix}
> > 1 & 1 \\
> > -2 & -1
> > \end{bmatrix}
> > $$
> > So $G^{-1}AG$ must give a diagonalized matrix
> > $$
> > G^{-1}AG =
> > \begin{bmatrix}
> > 1 & 1 \\
> > -2 & -1
> > \end{bmatrix}^{-1}
> > \begin{bmatrix}
> > 4 & 1 \\
> > -2 & 1
> > \end{bmatrix}
> > \begin{bmatrix}
> > 1 & 1 \\
> > -2 & -1
> > \end{bmatrix} =
> > 
> > \begin{bmatrix}
> > 2 & 0 \\
> > 0 & 3
> > \end{bmatrix}
> > $$
> > **BEHOLD! THE DIAGONALISED MATRIX !!!!!11!!!**
> > 

## Multiplicity of an eigenvalue

Let $A$ be an $n \times n$ matrix and $\lambda$ be an eigenvalue of $A$

1) *Geometric Multiplicity of $\lambda$*
	$\dim(\ker(A-\lambda I))$ = dimension of the $\lambda$-eigenspace
1) *Algebraic Multiplicity of $\lambda$*
	 Number of times $(x-\lambda)$ appears in the factorization of $p_{_{T}}(x)$

Let $\{ \lambda_{1}, \lambda_{2},\dots,\lambda_{\gamma} \}$ be the distinct eigenvalues for $A$ (over $\mathbb{C}$). Denote the geometric multiplicity of $\lambda_{i}$ by $g_{i}$ and the algebraic multiplicity of the same by $a_{i}$.

> [!Theorem] Theorem 1
> $$
> \sum_{i=1}^{r} g_{i}= \dim V \iff A \text{ is diagonilisable}
> $$

> **Proof:**
> This proof follows from [[Algebra1_L19#Diagonal Matrices|this]]

> [!Theorem] Theorem 2
> 
>  $a_{i} \geq g_{i}$ for each $i$ 

> **Proof:**
> Fix $i$, call $\lambda_{i} = \lambda, \ g_{i} = g, \ a_{i} = a$. Take $v_{1}, v_{2},\dots,v_{g}$ to  be the basis of $\ker{A-\lambda I}$. Extend this to a basis of $V$ by appending $v_{g+1}, v_{g+2},\dots,v_{n}$. By writing the matrix of $T$ in this basis we get
> $$
> \left[
> \begin{array}{c|cc}
> \lambda I_{g} & *\ \ \\
> \hline \mathbf{0} & *\ \
> \end{array}
> \right]
> $$
> The characteristic polynomial of $T$ will be of the form $p_{_{T}}(x) = (x-\lambda)^gh(x)$. Now, $h(x)$ may contain a factor of $(x-\lambda)$. Hence the number of times $(x-\lambda)$ appears in $p_{_{T}}(x)$ will be $g + r$ for some $r \in \mathbb{N}$. Hence Proved.