---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-10-16
time: 11:50
---
>[!Recall]
>[[Algebra1_L16#Invariant Subspaces| Invariant Subspace]]

---
## Eigenvectors and Eigenvalues

>[!Definition]
>An *eigenvector* $\mathbf{v}$ of a linear map $A$ is a *nonzero* vector such that $A\mathbf{v} = \lambda \mathbf{v}$ for some scalar $\lambda\in \mathbb{R}$.

>[!definition]
>An *eigenvalue* of $A$ is a scalar $\lambda$ such that the equation $A\mathbf{v} = \lambda \mathbf{v}$ has a *nontrivial* solution.

If $A\mathbf{v} = \lambda \mathbf{v}$ for some nontrivial $\mathbf{v}$, then we say
1. $\mathbf{v}$ is an eigenvector for $\lambda$, and
2. $\lambda$ is an eigenvalue for $\mathbf{v}$.

>[!Example]
>Let $A= \left[\begin{array}{cc} 2 &2 \\ -4 & 8\end{array}\right]$. Consider the vectors $\mathbf{v} = \left[\begin{array}{c}1 \\ 1\end{array}\right], \mathbf{w} = \left[\begin{array}{c}2 \\ 1\end{array}\right]$. 
>
>Notice that $A\mathbf{v} = \begin{bmatrix} 4 \\4 \end{bmatrix} = 4\mathbf{v}$. Thus $\mathbf{v}$ is an eigenvector of $A$. 
>
>On the other hand, $A\mathbf{w} = \begin{bmatrix}  6 \\ 0\end{bmatrix} \neq \lambda \mathbf{w}$ for any $\lambda \in \mathbb{R}$. Thus $\mathbf{w}$ is not an eigenvector of $A$.

>[!Example] Example: Reflection
>Let $T:\mathbb{R}^2\mapsto\mathbb{R}^2$ be the linear map that reflects over the line $L :y = -x$
>Consider vectors $w$ and $w'$, perpendicular to $L$ and parallel to $L$ respectively. 
>Notice that $w$ is an eigenvector with eigenvalue $-1$ and $w$ is an eigenvector with value $1$.
>
>![[Screenshot 2024-10-16 at 10.12.49 PM.png]]

>[!Example] Example: Projection
>Let $T:\mathbb{R}^{2}\mapsto \mathbb{R}^2$ be the projection map that projects a vector vertically onto the $x$-axis. Notice that the vectors lying on the x axis and y axis are eigenvectors with eigenvalues 1 and 0 respectively.

>[!Example] Example: Rotation
>Consider a rotation map $R_{\theta}$ on $\mathbb{R}^2$ that rotates a vector by an angle $\theta \neq n\pi, n\in \mathbb{Z}$.
>In this case we can see geometrically that no eigenvectors exist.

>[!Theorem]
>Eigenvectors with distinct eigenvalues are linearly independent.

>**Proof**
>Suppose eigenvectors $\mathbf{v}_1,\mathbf{v}_2,...,\mathbf{v}_k$ of $A$ have distinct eigenvalues $\lambda_1,\lambda_2,..,\lambda_k$.
>FTSOC, assume $\mathbf{v}_1,\mathbf{v}_2,...,\mathbf{v}_k$ are linearly dependent. Then, for some $j$, $\mathbf{v}_{j}$ is in the span of $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{j-1}$. Choose smallest such $j$. This ensures $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{j-1}$ are linearly independent. Since eigenvectors cannot be zero, $j> 1$. 
> $$
> \begin{align}
> \mathbf{v}_{j} & =\alpha_{1}\mathbf{v}_{1}+\alpha_{2}\mathbf{v}_{2}+\dots+\alpha_{j-1}\mathbf{v}_{j-1}  & (1)\\ 
> \lambda_{j}\mathbf{v}_{j} & =\alpha_{1}\lambda_{1}\mathbf{v}_{1}+\alpha_{2}\lambda_{2}\mathbf{v}_{2}+\dots+\alpha_{j-1}\lambda_{j-1}\mathbf{v}_{j-1}, & (2)
> \end{align}
> $$
> where $(2)$ is obtained by applying $A$ on $(1)$. $\lambda_{j}(1)-(2)$ yields:
> $$
> \begin{align}
> \alpha_{1}(\lambda_{j}-\lambda_{1})\mathbf{v}_{1}+\alpha_{2}(\lambda_{j}-\lambda_{2})\mathbf{v}_{2}+\dots+\alpha_{j-1}(\lambda_{j}-\lambda_{j-1})\mathbf{v}_{j-1}=\mathbf{0}
> \end{align}
> $$
> which is a nontrivial null linear combination of a set of linearly independent vectors. $\Rightarrow\Leftarrow$ ❏

>[!Theorem] Corollary
>An $n\times n$ matrix has at most $n$ eigenvalues.

---
## Eigenspaces

For a given real number $\lambda$ and a $n\times n$ matrix, how do you
1. check if $\lambda$ is an eigenvalue of $A$, and
2. if yes, find all eigenvectors corresponding to $\lambda$?

Eigenvectors with eigenvalue $\lambda$, if they exist, must satisfy
$$
\begin{align}A\mathbf{v} &= \lambda \mathbf{v}\end{align} \\ \iff (A-\lambda I)\mathbf{v} = 0\iff \mathbf{v}\in \ker(A-\lambda I)
$$
This is great, since we already know [[Algebra1_L9#Example 3|how to find the kernel of a matrix]].
If $\ker(A-\lambda I)=\{\mathbf{0}\}$, then $\lambda$ is not an eigenvalue.

>[!Definition] Definition: $\lambda-$eigenspace
>Let $A$ have eigenvalue $\lambda$. The $\lambda$-eigenspace of $A$ is the null space of $A - \lambda I$. Notice that since $\ker (A-\lambda I)$ is a subspace, the $\lambda-$eigenspace of an eigenvalue $\lambda$ is a subspace.

>[!Example]
>Let $A = \begin{bmatrix}2 & -4\\ -1 & -1\end{bmatrix}$. 
>We want to check if $\lambda = 3$ is an eigenvalue.
>
>$A - 3I = \begin{bmatrix}-1&-4 \\ -1&-4 \end{bmatrix}$
>
>$\mathrm{RREF}(A-3I) = \begin{bmatrix}1 &4\\ 0& 0\end{bmatrix}$
>
>The basis of the kernel is $\left\{\begin{bmatrix}-4\\1 \end{bmatrix}\right\}$.
>So yes, $3$ is an eigenvalue, and has a one dimensional eigenspace associated with it.
