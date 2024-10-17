---
tags:
  - ALG1
  - Lecture
date: 2024-10-16
time: 11:50
---
>[!Recall]
>[[Algebra1_L16#Invariant Subspaces| Invariant Subspace]]
>[[Algebra1_L16#What will the matrix of $T$ with respect to $ beta_v$ look like?|Matrix of a linear operator with respect to an invariant subspace]]
>[[Algebra1_L16#If the vector space is the direct sum of two invariant subspaces| If V is the direct sum of two invariant subspaces]]


## Eigenvectors and Eigenvalues
>[!Definition]
>An eigenvector $v$ of a linear map $A$ is a ***nonzero*** vector such that $T(v) = \lambda v$

>[!definition]
>An eigenvalue of $A$ is a scalar $\lambda$ such that the equations $Av = \lambda v$ has ***nontrivial*** solution

If $Av = \lambda v$ for some nontrivial $v$, then we say
1. $v$ is an eigenvector for $\lambda$
2. $\lambda$ is an eigenvalue for $v$
>[!Example]
>Let $$A= \left[\begin{array}{cc} 2 &2 \\ -4 & 8\end{array}\right]$$
>Now consider the vectors $v = \left[\begin{array}{c}1 \\ 1\end{array}\right], w = \left[\begin{array}{c}2 \\ 1\end{array}\right]$. 
>Notice that $Av = \begin{bmatrix} 4 \\4 \end{bmatrix} = 4v$. Thus $v$ is an eigenvector of $A$. 
>On the other hand, $Aw = \begin{bmatrix}  6 \\ 0\end{bmatrix} \neq \lambda w$ for any $\lambda \in \mathbb{R}$. Thus it is not an eigenvector of $A$

>[!Example] Example: (Reflection)
>Let $T:\mathbb{R}^2\mapsto\mathbb{R}^2$ be the linear map that reflects over the line $L :y = -x$
>Consider vectors $w$ and $w'$, perpendicular to $L$ and parallel to $L$ respectively. 
>Notice that $w$ is an eigenvector with eigenvalue $-1$ and $w$ is an eigenvector with value $1$.
>![[Screenshot 2024-10-16 at 10.12.49 PM.png]]


>[!Example] Example: Projection
>Let $T:\mathbb{R}^{2}\mapsto \mathbb{R}^2$ be the projection map that projects a vector vertically onto the $x$-axis. Notice once again that vectors along the line $y = 0$ ($x$ axis) and the line perpendicular to the $x$ axis consist of eigenvectors.

>[!Example] Example: Rotation
>Consider a rotation map $R_{\theta}$ on $\mathbb{R}^2$ that rotates a vector by an angle $\theta \neq n\pi, n\in \mathbb{Z}$ 
>in this case we can see geometrically itself that no eigenvectors exist

The preceding discussion suggests that linear maps somehow have a "preferred direction"

>[!Lemma] Lemma: Eigenvectors with different eigenvalues are independent

>**Proof**
>Suppose eigenvectors $v_1,v_2,...,v_k$ of $A$ have distinct eigenvalues $\lambda_1,\lambda_2,..,\lambda_k$
>If the vectors are linearly independent, we are done.
>If they are not independent , choose maximal $j$ such that $v_1,...,v_{j-1}$ is linearly independent. Note that $j > 1$. This means $v_1,v_2,...,v_j$ is not linearly independent. Reorder the basis such that $v_j$ does not have eigenvalue 0. Thus we have a nontrivial relation 
>$$
>\sum\limits_{i = 1}^{j-1}\alpha_{i}v_{i} = v_j
>$$
>applying $A$ to both sides, we have 
>$$
>\sum\limits_{i = 1}^{j-1}\alpha_i\lambda_{i}v_{i}= \lambda_{j}v_j
>$$
>$$
>\implies \sum\limits_{i = 1}^{j-1}\alpha_i\frac{\lambda_i}{\lambda_j}v_{i}= v_j
>$$
>this is a problem, since we have found a way to express $v_j$ in two different ways with a linearly independent set, which isnt possible.

>[!Corollary]
>An $n\times n$ matrix has atmost $n$ eigenvalues.

### Eigenspaces
#### Goal: 
For a given real number and a linear map $A$, 
1. Check if it is an eigenvalue of $A$
2. If yes, find all vectors corresponding to said eigenvalue

Eigenvectors with eigenvalue $\lambda$, if they exist, are nonzero solutions of
$$
\begin{align}Av &= \lambda v\end{align} \\ \iff (A-\lambda I)v = 0\iff v\in \ker(A-\lambda I)
$$
>[!Definition] Definition: $\lambda-$eigenspace
>Let $A$ have eigenvalue $\lambda$. Then the $\lambda-$eigenspace if $A$ is the solution set of $(A-\lambda I)v = 0$. i.e, $\ker (A-\lambda I)$. Notice that since $\ker (A-\lambda I)$ is a subspace, the $\lambda-$eigenspace of an eigenvalue $\lambda$ is a subspace

>[!Example]
>Let $A = \begin{bmatrix}2 & -4\\ -1 & -1\end{bmatrix}$. We want to check if $\lambda = 3$ is an eigenvalue.
>
>$A - 3I = \begin{bmatrix}-1&-4 \\ -1&-4 \end{bmatrix}$
>
>Row reducing,
>
>$\mathrm{RREF}(A) = \begin{bmatrix}1 &4\\ 0& 0\end{bmatrix}$
>
>We can read off the solution $\begin{bmatrix}-4\\1 \end{bmatrix}$. We can also be sure this constitutes entirely of a basis of the $3-$eigenspace, since the dimension of the $3-$eigenspace is 1



