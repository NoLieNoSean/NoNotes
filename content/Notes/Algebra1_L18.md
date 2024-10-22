---
tags:
  - ALG1
  - Lecture
date: 2024-10-17, Thursday
time: 14:00
---
## Eigenspaces

The $\lambda$-eigenspace of an $n \times n$ matrix $A$ is the null space of $A - \lambda I_{n}$.

>[!Example]
> We want to find the eigenvectors of
> $$
> A = 
> \begin{bmatrix}
> \frac{7}{2} & 0 & 3 \\
> -\frac{3}{2} & 2 & -3 \\
> -\frac{3}{2} & 0 & -1
> \end{bmatrix}
> $$
> Observe that for $\lambda = 2$, we have
> $$
> A-2I_{3} = 
> \begin{bmatrix}
> \frac{3}{2} & 0 & 3 \\
> -\frac{3}{2} & 0 & -3 \\
> -\frac{3}{2} & 0 & -3
> \end{bmatrix}
> \overset{\text{RREF}}\longrightarrow
> \begin{bmatrix}
> 1 & 0 & 2 \\
> 0 & 0 & 0 \\
  0 & 0 & 0
> \end{bmatrix}
> $$
> Using the fact that $\ker M = \ker (\text{RREF} \ M)$, we can say that the any vector $v$ in the 2-eigenspace of $A$ is in the span of the basis vectors of $\ker (A-2I_{3})$. That is
> $$
> v \in \text{Span} \left(
> \begin{bmatrix}
> 0 \\
> 1 \\
> 0
> \end{bmatrix},
> \begin{bmatrix}
> -2 \\
> 0 \\
> 1
> \end{bmatrix}
> \right)
> $$
> Note that the $2$-Eigenspace of $A$ is a plane in $\mathbb{R}^3$.
> We can repeat the same procedure for $\lambda = \frac{1}{2}$.
> $$
> \text{RREF} \left( A - \frac{1}{2}I_{3} \right) =
> \begin{bmatrix}
> 1 & 0 & 1 \\
> 0 & 1 & -1 \\
> 0 & 0 & 0
> \end{bmatrix}
> $$
> Here the basis of the null space turns out to be 
> $$
> \begin{bmatrix}
> -1 \\
> 1 \\
> 1
> \end{bmatrix}
> \leftarrow
> \text{Eigenvector}
> $$

 >[!info] Corollary
 >If $0$ is an eigenvalue of $A$, then $\ker (A-0I) = \ker{A}$ is nonzero $\iff A$ is non-invertable

## Characteristic Polynomial

>[!theorem] Definition
>The characteristic polynomial of an $n \times n$ matrix $A$ is the function
>$$
> f(x) = \det(A-xI_{n})
>$$

>[!Theorem]
> $\lambda_{0}$ is an Eigenvalue of $A \iff f(\lambda_{0}) = 0$
> 
> **Proof:**
>  $$
> \begin{align}
> &\lambda_{0} \text{ is an eigenvalue of A} \\
\iff & (A - \Lambda_{0}I)v =0 \text{ has a non trivial solution} \\
\iff & A-\lambda_{0}I \text{ is non invertable} \\
\iff & \det(A-\lambda_{0} I) = 0 \\
\iff & f(\lambda_{0}) = 0
> \end{align}
> $$

>[!Example]
>We want to find the eigenvalues of $A$ where
>$$
>A = \begin{bmatrix}
> 5 & 2 \\
> 2 & 1
> \end{bmatrix}
> $$
> The characteristic polynomial of $A$ will be
> $$
> f(x) = \det(A - x I) = \det
> \begin{bmatrix}
> 5-x & 2 \\
> 2 & 1-x
> \end{bmatrix}=x^2-6x+1
> $$
> We can find that the roots of $f$ are $3 \pm 2\sqrt{2}$ which are also its eigenvalues.

For any $n \times n$ matrix $A$, the following hold
- The characteristic polynomial of $A$ is of degree $n$
- The characteristic polynomial of $A$ is of the form $$
f(x) = (-1)^nx^n + (-1)^{n-1}\mathrm{Tr}(A)x^{n-1}+\dots+\det(A)
$$ (This gives another proof for "$A$ has at-most $n$ eigenvalues")

>[!info] Corollary
> For a upper/lower triangular matrix $A$, the characteristic polynomial is of the form
> $$
> f(x) = (a_{11}-x)(a_{22}-x)\dots(a_{nn} - x)
> $$
> We can see that the diagonal entries are the eigenvalues of $A$. [[Algebra1_L15|proof]]
