---
id: "535"
date: 2026-08-23
time: 19:12
tags:
---
Let $X$ and $Y$ be complex inner product spaces throughout. We denote the Hermitian adjoint of a matrix $A$ by $A^{*}$. 

> [!Definition] Isometry
> An operator $U:X\to Y$ is called an **isometry** if it preserves the norm, 
> $$
> \lVert U\mathbf{x} \rVert =\lVert \mathbf{x} \rVert \quad \forall \mathbf{x}\in X.
> $$
> 

> [!Proposition]
> An operator $U:X\to Y$ is an isometry iff it satisfies one of the following equivalent conditions: 
> 1. $U$ preserves the inner product. 
> 2. $U^{*}U=I$. 

Thus, isometries are always left invertible. 

> [!Definition] Unitary operator
> An isometry $U:X\to Y$ is called **unitary** if it is invertible. 

> [!Proposition]
> An isometry $U:X\to Y$ is a unitary operator iff $\dim X=\dim Y$. 

> [!Definition] Unitary matrix
> 1. A square matrix $U$ is called **unitary** if $U^{*}U=I$, i.e., a unitary matrix is a matrix of a unitary operator acting in $\mathbb{F}^{n}$. 
> 2. A unitary matrix with real entries is called an **orthogonal** matrix. 

Some notes:
1. For a unitary transformation $U$, $U^{-1}=U^{*}$. 
2. If $U$ is unitary, $U^{*}=U^{-1}$ is also unitary. 
3. Isometries take orthonormal systems to orthonormal systems. 
4. A product of unitary operators is unitary as well. 
5. A matrix $U$ is an isometry iff its columns form an orthonormal system.  
6. $|\det U|=1$ for unitary $U$. In particular, if $U$ is orthogonal, $\det U=\pm 1$. 
7. If $\lambda$ is an eigenvalue of $U$, then $|\lambda|=1$. 

---

# Unitary equivalent operators


> [!Definition] Unitary equivalent operators
> Operators $A$ and $B$ are called **unitary equivalent** if there exists a unitary operator $U$ such that $A=UBU^{*}$. 

Since for a unitary $U$ we have $U^{-1}=U^{*}$, unitary equivalent matrices are similar as well. The converse is not true. 

> [!Proposition]
> A matrix $A$ is unitary equivalent to a diagonal one iff it as an orthonormal basis of eigenvectors. 


---

# Upper triangular representation of an operator

> [!Theorem]
> Let $A:X\to X$ be an operator acting in a complex inner product space. There exists an orthonormal basis $\mathbf{u}_{1}, \dots, \mathbf{u}_{n}$ in $X$ such that the matrix of $A$ in this basis is upper triangular. 
> 
> In other words, any $n\times n$ matrix $A$ can be represented as $A=UTU^{*}$, where $U$ is unitary, and $T$ is an upper triangular matrix. 

Note that even if we start from a real matrix $A$, the matrices $U$ and $T$ can have complex entires - any rotation matrix, for instance. 

However, if $A$ has all real eigenvalues, we can find real $U$ and $T$. 

---

# Spectral theorem for self-adjoint and normal operators

> [!Theorem] Spectral theorem for self-adjoint matrices
> Let $A=A^{*}$ be a self-adjoint operator in an inner product space $X$ ($X$ can be complex or real). Then all eigenvalues of $A$ are real, and there exists an orthonormal basis of eigenvalues of $A$ in $X$. 
> 
> In other words, $A$ can be represented as
> $$
> A=UDU^{*},
> $$
> where $U$ is a unitary matrix and $D$ is a *real* diagonal matrix. Moreover, if the matrix $A$ is real, $U$ can be chosen to be real. 

Thus, self-adjoint matrices are unitarily equivalent to a diagonal matrix. Can we characterize all such matrices? Suppose the matrix of an operator $A$ in some orthonormal basis is diagonal. It is easy to see that for a diagonal matrix $D$, 
$$
D^{*}D=DD^{*}.
$$
Therefore $A$ must satisfy $A^{*}A=AA^{*}$. 

> [!Definition]
> An operator(matrix) $N$ is called **normal** if $N^{*}N=NN^{*}$. 

Clearly, any self-adjoint operator ($A^{*}A=AA^{*}$) is normal. Also, any unitary operator is normal. 

It turns out that normality is also sufficient to achieve unitary equivalence to a diagonal matrix:

> [!Theorem] Spectral theorem for normal operators
> Any normal operator $N$ in a complex vector space has an orthonormal basis of eigenvectors. 
> 
> In other words, any normal matrix can be represented as
> $$
> N=UDU^{*},
> $$
> where $U$ is unitary and $D$ is diagonal. 


The following proposition gives a very useful characterization of normal operators:

> [!Proposition]
> An operator $N:X\to X$ is normal iff 
> $$
> \lVert N\mathbf{x} \rVert =\lVert N^{*}\mathbf{x} \rVert \quad \forall \mathbf{x}\in X.
> $$
> 
