---
id: "104"
date: April 2025
---

#Incomplete
# Orthogonal matrices

Basic facts and definitions
1. Any set of orthogonal nonzero vectors in $\mathbb{R}^{n}$ is independent.
2. A real $n\times n$ matrix is orthogonal if $A^{T}A=I$.
3. An $n\times n$ matrix $A$ is orthogonal iff its columns form an orthonormal basis of $\mathbb{R}^{n}$.

4. The product of orthogonal matrices is orthogonal, and the inverse of an orthogonal matrix, its transpose, is orthogonal. The orthogonal matrices form a subgroup $O_{n}$ of $GL_{n}$, the *orthogonal group*.
5. The determinant of an orthogonal matrix is $\pm 1$. The orthogonal matrices with determinant $1$ form a subgroup $SO_{n}$ of $O_{n}$, called the special orthogonal group.

6. An orthogonal operator $T$ on $\mathbb{R}^{n}$ is a linear operator that preserves the dot product: For every pair $X, Y$ of vectors, $(TX\cdot TY)=X\cdot Y$.
7. A linear operator $T$ on $\mathbb{R}^{n}$ is orthogonal iff it preserves lengths of vectors: $(TX\cdot TY)=(X\cdot X)$
8. A linear operator $T$ on $\mathbb{R}^{n}$ is orthogonal iff its matrix $A$ with respect to the standard basis is an orthogonal matrix.

> [!Theorem]
> The orthogonal $2\times 2$ matrices with determinant one are the matrices
> $$
> \begin{bmatrix}
> \cos\theta & -\sin\theta \\
> \sin\theta & \cos\theta
> \end{bmatrix},
> $$
> and the ones with determinant $-1$ are
> $$
> \begin{bmatrix}
> \cos\theta & \sin\theta \\
> \sin\theta & -\cos\theta
> \end{bmatrix},
> $$


> [!Definition]
> A **rotation** of $\mathbb{R}^{3}$ about the origin is a linear operator $\rho$ with these properties:
> - $\rho$ fixes a unit vector $u$, called a pole of $\rho$, and
> - $\rho$ rotates the two-dimensional subspace $W$ orthogonal to $u$. 

> [!Lemma]
> A $3\times 3$ orthogonal matrix $M$ with determinant $1$ has an eigenvalue equal to $1$.

> [!Theorem] Euler's theorem
> The $3\times 3$ rotation matrices are the orthogonal $3\times 3$ matrices with determinant $1$.

Suppose that $M$ represents a rotation $\rho$ with spin $(u, \alpha)$. We form an orthonormal basis $\mathbf{B}$ of $\mathbb{R}^{3}$ by appending to $u$ an orthonormal basis of its orthogonal space $W$. The matrix $M'$ of $\rho$ with respect to this basis will have the form
$$
\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos\theta & -\sin\theta \\
0 & \sin\theta & \cos\theta
\end{bmatrix},
$$
from the definition of a rotation in $\mathbb{R}^{3}$. Note that $M'$ is orthogonal and has determinant $1$. Moreover, $M=PM'P^{-1}$, where $P=[\mathbf{B}]$. Since its columns are orthonormal, $[\mathbf{B}]$ is orthogonal. Therefore $M$ is also orthogonal, and its determinant is equal to $1$.

Conversely, let $M$ be an orthogonal matrix with determinant $1$, and let $T$ denote left multiplication my $M$. Let $u$ be a unit-length eigenvector with eigenvalue $1$, and let $W$ be the two-dimensional subspace orthogonal to $u$. Since $T$ is an orthogonal operator that fixed $u$, it sends $W$ to itself. So, $W$ is a $T$-invariant subspace, and we can restrict the operator to $W$. 

Since $T$ is orthogonal, it preserves lengths, so its restriction to $W$ is orthogonal too. $W$ has dimension 2, and we know the orthogonal operators in dimension 2: they are rotations and reflections. If $T$ acts on $W$ as a reflection, (recall that $T$ fixes $u$), it must have a determinant of $-1$. Since this is not the case, $T|_{W}$ is a rotation in $\mathbb{R}^{2}$. Thus, $T$ is a rotation in $\mathbb{R}^{3}$.