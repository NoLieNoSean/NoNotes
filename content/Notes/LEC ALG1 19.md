---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-10-29
time: 14:00
---
## Recall

> [!Theorem] Lemma
> The [[LEC ALG1 18#Characteristic Polynomial|characteristic Polynomial]] of a linear operator is independent of the basis.
> 
> >[!Proof]-
> > $$
> > \det(Ix-PAP^{-1})=\det(P(Ix-A)P^{-1})=\det(Ix-A)
> > $$
> 

>[!Theorem] Corollary
> Similar Matrices have the same eigenvalues.

**Exercise:** Let $K$ and $W$ be the kernel and the image of a linear operator $T:V\to V$. Show that the following are equivalent:
- $V \cong K \oplus W$;
- $K \cap W = \{ 0 \}$;
- $V = K + W$.

---
## Complex vs Real vector spaces

> [!Theorem] Proposition
> 
> Let $V$ be a nontrivial vector space over $\mathbb{C}$. Then any linear operator $T: V \to V$ will have at least one eigenvalue, and hence at least one eigenvector.
> 
> > [!Proof]-
> > The characteristic polynomial of $T$ will be of degree $\geq 1$. By the Fundamental Theorem of Algebra, this will have at least one complex root.
> 

> [!Info]
> The fundamental theorem of algebra states that every non-constant polynomial with complex coefficients has at least one complex root. This implies that any polynomial of degree $n\geq 1$ with complex coefficients has exactly $n$ complex roots counting multiplicity. So, any operator in a complex vector space has exactly $n$ eigenvalues counting multiplicity.

> [!Example]
> On the other hand, it is easy to construct a linear map in a real vector space with no real eigenvalues. Consider the rotation map, $R_{\theta}:\mathbb{R}^{2}\to \mathbb{R}^{2}$. It's characteristic polynomial $x^{2}-2\cos\theta\, x+1$ does not have real roots for $\theta\ne n\pi$. But $R_{\theta}:\mathbb{C}^{2}\to \mathbb{C}^{2}$ has eigenvalues $e^{i\theta}$ and $e^{-i\theta}$.

> [!Theorem] Proposition
> Every complex $n \times n$ matrix is similar to an upper triangular matrix.
> 
> > [!Proof]-
> > We want to show that for every complex $n \times n$ matrix $A$ there exists a complex $n \times n$ invertible matrix $P$ such that $PAP^{-1}$ is upper triangular.
> > 
> > $A$ has at least one eigenvalue, call it $\lambda$ and its corresponding eigenvector $\mathbf{v}$. Extend $\{ \mathbf{v} \}$ to a basis $\mathcal{B}$ of $V$. Observe that
> > $$
> > [A]_{\mathcal{B}\mathcal{B}} =
> > \left[
> > \begin{array}{c|ccc}
> > \lambda  & * & \cdots & * \\
> > \hline 
> > 0 \\
> > \vdots  &  & D\\
> > 0
> > \end{array}
> > \right]
> > $$
> > for some $(n-1)\times(n-1)$ matrix $D$. By induction hypothesis on $D$, there exists an $(n-1) \times (n-1)$ invertible matrix $Q$ such that $QDQ^{-1}$ is upper triangular. Define 
> > $$
> > G \equiv
> > \left[
> > \begin{array}{c|ccc}
> > 1 & 0 & \cdots & 0 \\
> > \hline
> > 0 \\
> > \vdots &  & Q \\
> > 0
> > \end{array}
> > \right]
> > \qquad
> > {G}^{-1} =
> > \left[
> > \begin{array}{c|ccc}
> > 1 & 0 & \cdots & 0 \\
> > \hline
> > 0 \\
> > \vdots &  & Q^{-1} \\
> > 0
> > \end{array}
> > \right]
> > $$
> > Using block multiplication of matrices it is evident that ${G}^{-1}$ has the above form and that $G[A]_{\mathcal{B}\mathcal{B}}{G}^{-1}$ will be upper triangular.
> > 
> > If we denote the standard basis by $\mathcal{S}$, we can write $[A]_{\mathcal{B}\mathcal{B}} = [I]_{\mathcal{B}\mathcal{S}}[A]_{\mathcal{S}\mathcal{S}}[I]_{\mathcal{S}\mathcal{B}}$. Observe that
> > $$
> >   G[A]_{\mathcal{B}\mathcal{B}}G^{-1}=G[I]_{\mathcal{B}\mathcal{S}}[A]_{\mathcal{S}\mathcal{S}}[I]_{\mathcal{S}\mathcal{B}}G^{-1}=(G[I]_{\mathcal{B}\mathcal{S}})A(G[I]_{\mathcal{B}\mathcal{S}})^{-1},
> > $$
> > where we have used the fact that $A=[A]_{\mathcal{S}\mathcal{S}}$ and $[I]_{\mathcal{B}\mathcal{S}}^{-1}=[I]_{\mathcal{S}\mathcal{B}}$. Put $P=G[I]_{\mathcal{B}\mathcal{S}}$. 
> 

>[!Info] Remark
> If $A$ is an $n \times n$ matrix over a field $\mathbb{F}$ such that its characteristic polynomial is a product of linear factors in $\mathbb{F}$, then there exists an invertible matrix $P$ (with entries in $\mathbb{F}$) such that $PAP^{-1}$ is upper triangular.

---
## Diagonalization

Diagonalization of a linear operator $T:V\to V$ entails finding a basis $B$ of $V$ such that $[T]_{BB}$ is a diagonal matrix. Such a basis does not always exist, i.e, not all operators can be diagonalized. 

For operators in $\mathbb{F}^{n}$, the diagonalizability of $A$ implies $A$ can be expressed as $A=SDS^{-1}$, where $D$ is a diagonal matrix and $S$ is an invertible matrix with entries in $\mathbb{F}$, i.e, $A$ is similar to a diagonal matrix.

> [!Theorem] Proposition
> 
> A $n\times n$ matrix $A$ (with values in $\mathbb{F}$) is diagonalizable $\iff$ there exists a basis of $\mathbb{F}^n$ that consists of eigenvectors of $A$.
> 
> > [!Proof]-
> > Let $A=SDS^{-1}$ for some diagonal matrix $D=\text{diag}\{ \alpha_{1}, \alpha_{2}, \dots, \alpha_{n} \}$ and invertible matrix $S$. Let $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n}$ be the column vectors of $S$. Note that $S\mathbf{e}_{k}=\mathbf{v}_{k}\implies S^{-1}\mathbf{v}_{k}=\mathbf{e}_{k}$. Notice what happens when we compute $A\mathbf{v}_{k}$:
> > $$
> > \begin{align}
> > A\mathbf{v}_{k}=SDS^{-1}\mathbf{v}_{k}=SD\mathbf{e}_{k}=S(\alpha_{k}\mathbf{e}_{k})=\alpha_{k}\mathbf{v}_{k}.
> > \end{align}
> > $$
> > So, the column vectors of $S$ are eigenvectors of $A$. Since the column vectors of $S$ form a basis of $\mathbb{F}^{n}$, we are done.
> > 
> > To prove the converse, suppose there exists a basis of $\mathbb{F}^n$ that consists of eigenvectors of $A$, i.e, $\mathcal{B} = \{ \mathbf{v}_{1}, \mathbf{v}_{2},\dots,\mathbf{v}_{n} \}$ such that $A\mathbf{v}_{i} = \lambda_{i}\mathbf{v}_{i}$. Then
> > $$
> > [A]_{\mathcal{B}\mathcal{B}}=
> > \begin{bmatrix}
> > \lambda_{1} \\
> > & \lambda_{2} \\
> > &  & \ddots \\
> > &  &  & \lambda_{n} 
> > \end{bmatrix}.
> > $$
> > If we represent the standard basis by $\mathcal{S}$, we have $A=[A]_{\mathcal{S}\mathcal{S}}=[I]_{\mathcal{S}\mathcal{B}}[A]_{\mathcal{B}\mathcal{B}}[I]_{\mathcal{B}\mathcal{S}}$. We have shown above that $[A]_{\mathcal{B}\mathcal{B}}$ is diagonal, and we know that $[I]_{\mathcal{S}\mathcal{B}}=[I]_{\mathcal{B}\mathcal{S}}^{-1}$.
> 

Obviously, an abstract operator $T:V\to V$ is diagonalizable iff its matrix in any basis is diagonalizable. Thus, it follows that $T$ is diagonalizable iff there exists a basis of $V$ that consists of eigenvectors of $T$.
### A simple sufficient condition for an operator to be diagonalizable

> [!Theorem]
> If an operator $T: V \to V$ has exactly $n=\dim V$ *distinct* eigenvalues, then $T$ is diagonalizable.
> 
> > [!Proof]-
> > Let $\lambda_{1}, \lambda_{2}, \dots, \lambda_{n}$ be the distinct eigenvalues. For each eigenvalue $\lambda_{i}$, let $\mathbf{v}_{i}$ be a corresponding eigenvector. [[LEC ALG1 17#Eigenvectors with distinct eigenvalues are linearly independent|Then]], $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n}$ are linearly independent. Hence, they form a basis of $V$. ❏
> 

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

### Multiplicity of an eigenvalue

To arrive at a stronger criterion of diagonalizability, we need to understand multiplicities of eigenvalues.

>[!Definition]
>Let $\lambda$ be an eigenvalue of an operator $A$.
>The *Geometric Multiplicity* of $\lambda$ is the dimension of the $\lambda$-eigenspace, $\dim(\ker(A-\lambda I))$.
>The *Algebraic Multiplicity* of $\lambda$ is the number of times $(x-\lambda)$ appears in the factored characteristic polynomial of $A$.

Let $\{ \lambda_{1}, \lambda_{2},\dots,\lambda_{\gamma} \}$ be the distinct eigenvalues for $A$ (over $\mathbb{C}$). Denote the geometric multiplicity of $\lambda_{i}$ by $g_{i}$ and the algebraic multiplicity of the same by $a_{i}$.

> [!Theorem]
> 
>  $a_{i} \geq g_{i}$ for each $i$.

> **Proof**
> Fix $i$, call $\lambda_{i} = \lambda, \ g_{i} = g, \ a_{i} = a$. Take $v_{1}, v_{2},\dots,v_{g}$ to  be the basis of $\ker{A-\lambda I}$. Extend this to a basis of $V$ by appending $v_{g+1}, v_{g+2},\dots,v_{n}$. By writing the matrix of $T$ in this basis we get
> $$
> \left[
> \begin{array}{c|cc}
> \lambda I_{g} & *\ \ \\
> \hline \mathbf{0} & *\ \
> \end{array}
> \right]
> $$
> The characteristic polynomial of $T$ will be of the form $p_{_{T}}(x) = (x-\lambda)^gh(x)$. Now, $h(x)$ may contain a factor of $(x-\lambda)$. Hence the number of times $(x-\lambda)$ appears in $p_{_{T}}(x)$ will be $g + r$ for some $r \in \mathbb{N}$.

### Criterion of diagonalizability

This theorem holds for vector spaces over general fields.

> [!Theorem]
> Let an operator $A:V\to V$ have exactly $n=\dim V$ eigenvalues (counting multiplicities) (Since any operator in a complex vector space has exactly $n$ eigenvalues, this assumption is moot in the complex case). Then, $A$ is diagonalizable if and only if for each eigenvalue $\lambda$, the geometric multiplicity of $\lambda$ coincides with the algebraic multiplicity of $\lambda$.

We know that $g_{i}\leq a_{i}\forall i$ and the hypothesis requires $\sum a_{i}=n$. Thus, this theorem boils down to
$$
A \text{ is diagonalizable} \iff \sum_{i=1}^{\gamma} g_{i}= \dim V.
$$
> **Proof of $\implies$**
> If $A$ is diagonalizable, $[A]_{\mathcal{B}\mathcal{B}}$ is diagonal for some basis $\mathcal{B}$. Observe that geometric and algebraic multiplicities coincide for diagonal matrices. It follows that they must coincide for $A$ too. 
> 
> **Proof of $\Longleftarrow$**
> Let $\lambda_{1}, \lambda_{2}, \dots, \lambda_{\gamma}$ be the distinct eigenvalues of $A$, and let $E_{k}$ be the $\lambda_{k}$-eigenspace for $1\leq k\leq\gamma$. We know that these subspaces are linearly independent, i.e, $\bigcap_{i} E_{i}=\emptyset$. Let $\mathcal{B}_{k}$ be a basis of $E_{k}$. It follows that $\mathcal{B}\equiv\bigcup_{i}\mathcal{B}_{i}$ is linearly independent. Also, 
> $$
> \begin{align}
> |\mathcal{B}|=\sum_{i=1}^{\gamma}  |\mathcal{B}_{i}|=\sum_{i=1}^{\gamma} \dim(\ker(A-\lambda_{i} I))=\sum_{i=1}^{\gamma} g_{i}=n.
> \end{align}
> $$
> A linearly independent system of size $n$ is a basis. Thus, $\mathcal{B}$ is a basis of $V$. ❏

The theorem can be restated specifically for real matrices:

> [!Theorem]
> A real $n\times n$ matrix $A$ admits real factorization (i.e representation as $A=SDS^{-1}$ where $S$ and $D$ are real matrices, $D$ is diagonal and $S$ is invertible) iff it admits complex factorization and all eigenvalues of $A$ are real.

Note:
- The requirement of having $n$ eigenvalues is not moot for real matrices.
- The eigenvalues being real forces the eigenvectors to be real, which in turn forces $S$ to be real.
