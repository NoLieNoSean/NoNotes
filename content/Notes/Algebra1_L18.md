---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-10-17
time: 14:00
---
## Finding eigenstuff

Recall definitions of [[Algebra1_L17|eigenvalues, eigenvectors, and eigenspaces]].

Here is more involved example of finding eigenvectors given the eigenvalues.

>[!Example]
> Say we want to find the eigenvectors of
> $$
> A = 
> \begin{bmatrix}
> \frac{7}{2} & 0 & 3 \\
> -\frac{3}{2} & 2 & -3 \\
> -\frac{3}{2} & 0 & -1
> \end{bmatrix},
> $$
> 
> given that the eigenvalues of $A$ are $2$ and $1/2$. 
> For $\lambda = 2$, we have
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
>   0 & 0 & 0
> \end{bmatrix}
> $$
> Using the fact that $\ker M = \ker (\text{RREF} \ M)$, we can say that the any vector $\mathbf{v}$ in the 2-eigenspace of $A$ is in the span of the basis vectors of $\ker (A-2I_{3})$. That is
> $$
> \mathbf{v} \in \text{Span} \left(
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
> So, we have obtained three linearly independent eigenvectors and two eigenvalues. Since $A$ cannot have more than 3 linearly independent eigenvectors, we can be sure that no more eigenvalues exist.

>[!info]
>If $0$ is an eigenvalue of $A$, then $\ker (A-0I) = \ker{A}$ is nonzero $\iff A$ is non-invertable.

### Characteristic Polynomial

We know how to find the eigenvectors of a matrix given its eigenvalues. So, how do we find the eigenvalues?

>[!definition] 
>The *characteristic polynomial* of an $n \times n$ matrix $A$ is defined as
>$$
> f(x) = \det(A-xI_{n}).
>$$

>[!Theorem]
> $\lambda_{0}$ is an eigenvalue of $A \iff f(\lambda_{0}) = 0$.

> **Proof**
> $$
> \begin{align}
> &\lambda_{0} \text{ is an eigenvalue of A} \\
> \iff & (A - \lambda_{0}I)\mathbf{v} =0 \text{ has a non trivial solution} \\
> \iff & A-\lambda_{0}I \text{ is not invertable} \\
> \iff & \det(A-\lambda_{0} I) = 0 \\
> \iff & f(\lambda_{0}) = 0
> \end{align}
> $$

> [!Example]
> Say we want to find the eigenvalues of
> $$
> A = \begin{bmatrix}
> 5 & 2 \\
> 2 & 1
> \end{bmatrix}.
> $$
> The characteristic polynomial of $A$ is
> $$
> f(x) = \det(A - x I) = \det
> \begin{bmatrix}
> 5-x & 2 \\
> 2 & 1-x
> \end{bmatrix}=x^2-6x+1,
> $$
> the roots of which are $3 \pm 2\sqrt{2}$.

>[!Theorem]
>Let $A$ be a $n\times n$ matrix. Then, the characteristic polynomial of $A$ is of degree $n$ and is of the form $f(x) = (-1)^n\ x^n + (-1)^{n-1}\ \mathrm{Tr}(A)\ x^{n-1}+\dots+\det(A)$.

> **Proof**
> It is obvious from the nature of the determinant that $f$ is of degree $n$ (this in fact gives another proof of $A$ having at most $n$ eigenvalues). For a $2\times{2}$ matrix $A$, we have
> $$
> \begin{align}
> f(x)=\det \begin{bmatrix}
> a-x & b \\
> c & d-x 
> \end{bmatrix}
>  & =(a-x)(d-x)-bc \\
>  & =x^{2}-(a+d)x+(ad-bc) \\
>  & =x^{2}-\mathrm{Tr}(A)\ x+\det A
> \end{align}
> $$
> Now we shall prove the theorem for general $n$. Observe from the definition of $f$ that $f(0)=\det A$. Thus, the constant term is $\det A$. 
> 
> If use [[Algebra1_L15#Cofactor expansions|cofactor expansion]] along the first row to compute the determinant, observe that only the first term in the expansion will have a $x^{n}$ and $x^{n-1}$ term. Thus, we only need to bother with the first term.
> $$
> \begin{align}
> \det (A-xI_{n}) & =\det \left[\begin{array}{c|ccc}
> a_{1,1}-x& a_{1, 2}  & \dots & a_{1, n}\\
> \hline
> a_{2, 1} \\
> \vdots &  & {\large B-xI_{n-1}}\\
> a_{n, 1}
> \end{array}\right] \\ \\
>  & =(a_{1, 1}-x)\det (B-xI_{n-1}) + \dots
> \end{align}
> $$
> If we proceed inductively with $n=2$ as our base case, we have
> $$
> \begin{align}
> \det(B-xI_{n-1})=(-1)^{n-1}x^{n-1}+(-1)^{n-2}\ \mathrm{Tr}(B)x^{n-2}+\dots
> \end{align}
> $$
> Thus, we have
> $$
> \begin{align}
> (a_{1, 1}-x)\det (B-xI_{n-1}) &  =(a_{1, 1}-x)\ \Big((-1)^{n-1}x^{n-1}+(-1)^{n-2}\ \mathrm{Tr}(B)x^{n-2}+\dots\Big) \\
>  & = (-1)^{n}x^{n}+(-1)^{n-1}\mathrm{Tr}(B)x^{n-1}+a_{1,1}(-1)^{n-1}x^{n-1}+\dots \\
>  & = (-1)^{n}x^{n}+(-1)^{n-1}\mathrm{Tr}(A)x^{n-1}+\dots
> \end{align}
> $$
> ❏

>[!important]
> For a upper/lower triangular matrix $A$, the characteristic polynomial is of the form
> $$
> f(x) = (a_{11}-x)(a_{22}-x)\dots(a_{nn} - x).
> $$
> We can see that the diagonal entries are the eigenvalues of $A$.

---

## Eigenstuff of abstract operators

Linear operators can have different matrices. For linear operators in $\mathbb{R}^{2}$ and $\mathbb{R}^{3}$, geometric intuition tells us that eigenvalues should be properties of the map itself, and not the matrix used to represent it. This is true in general.

>[!Definition]
>Two $n\times n$ matrices $A$ and $B$ are *similar* if there exists an invertible $n\times n$ matrix $P$ such that
>$$
>A=PBP^{-1}.
>$$

Note that the determinants of similar matrices are equal. $\det PBP^{-1}=\det P\det B\det P^{-1}=\det B$.

>[!Info] Notation
>So far, the matrix of a linear transformation $T:V\to W$ in bases $B_{V}$ and $B_{W}$ has been denoted by $\mathcal{M}_{B_{V}, B_{W}}(T)$. From now on, it will be denoted by $[T]_{B_{V}B_{W}}$. Note that the change of basis matrix between two bases $B_{V}$ and $B_{V}'$ can now be denoted as $[I]_{B_{V}B_{V}'}$. If $\mathbf{v}\in V$, the coordinate vector of $\mathbf{v}$ in basis $B_{V}$ is denoted as $[\mathbf{v}]_{B_{V}}$. Thus, we have $[\mathbf{v}]_{B_{V}}=[I]_{B_{V}B_{V}'}[\mathbf{v}]_{B_{V}'}$. 

One should think of two similar matrices as representing the same abstract linear operator $T:V\to V$ in different bases. For example, if $B$ and $B'$ are bases of $V$, then $[T]_{BB}$ and $[T]_{B'B'}$ are similar matrices, related by $[T]_{BB}=[I]_{BB'}[T]_{B'B'}[I]_{B'B}$. 

From the previous section, we know how to find the eigenvalues of a matrix. How do we find the eigenvalues of an abstract linear operator $T:V\to V$? We pick an arbitrary basis, and compute the eigenvalues of the matrix of the operator in that basis. We can do this because similar matrices have the same characteristic polynomial:

>Let $A=SBS^{-1}$.
>$A-\lambda I=SBS^{-1}-\lambda SIS^{-1}=S(B-{\lambda I})S^{-1}$.
>So, $\det(A-\lambda I)=\det(B-\lambda I)$.

Therefore, we can define the characteristic polynomial of an operator as the characteristic polynomial of its matrix in some basis. As we have discussed above, the result does not depend on the choice of the basis, so characteristic polynomial of an operator is well defined.

>[!Warning] Similar matrices do not have the same eigenvectors!
>Let $A=SBS^{-1}$. Let $\mathbf{v}$ be an eigenvector of $A$ with eigenvalue $\lambda$. Then, $A\mathbf{v}=\lambda \mathbf{v}$. So, $SBS^{-1}\mathbf{v}=\lambda \mathbf{v}$. Hence, $BS^{-1}\mathbf{v}=\lambda S^{-1}\mathbf{v}$, i.e, $S^{-1}\mathbf{v}$ is the eigenvector in $B$ with eigenvalue $\lambda$.





Observe that $I_{n}$ is the only matrix similar to $I_{n}$. 
Note that similarity is an equivalence relation.
Also note that if $A$ is similar to $B$, $A^{r}$ is similar to $B^{r}$.