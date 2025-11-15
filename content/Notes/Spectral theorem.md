---
id: "351"
date: 2025-11-12
time: 11:37
tags:
  - ALG1
---
For an $m\times n$ matrix $A$, its Hermitian adjoint $A^{*}$ is defined by $A^{*}=\overline{A^{T}}$. The following identity is the main property of the adjoint matrix:
$$
\begin{align}
\langle A\mathbf{x}, \mathbf{y} \rangle=\langle \mathbf{x}, A^{*}\mathbf{y} \rangle &  & \forall \mathbf{x}\in \mathbb{C}^{n}, \mathbf{y}\in \mathbb{C}^{m}. 
\end{align}
$$
The above identity is often used as the definition of the adjoint operator, and it uniquely defines the adjoint. 

An operator $U:X\to Y$ is called an isometry, if it preserves the norm. This is equivalent to preserving the inner product. An operator is an isometry iff $U^{*}U=I$. An invertible isometry is called a unitary operator. A square matrix $U$ is called unitary if $U^{*}U=I$. A matrix $U$ is an isometry iff its columns form an orthonormal system. 

Matrices $A$ and $B$ are called unitary equivalent if there exists a unitary operator $U$ such that $A=UBU^{*}$. 

A Matrix $A$ is unitarily equivalent to a diagonal one iff it has an orthogonal basis of eigenvectors. 


---

Every complex matrix $A$ is unitary equivalent to an upper triangular matrix. 

Every real matrix $A$ is unitary(orthogonal) equivalent to a real upper triangular matrix if all of its eigenvalues are real.

Let $A=A^{*}$ be a self-adjoint matrix. Then $A$ can be represented as $A=UDU^{*}$, where $U$ is a unitary matrix and $D$ is a diagonal matrix with real entries. 