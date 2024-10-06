---
tags:
  - ALG1
---

## Left and right invertibility

For more on left and right inverses, look up exercise 1 [[Analysis1_HW1.pdf|here]].
### Left inverse
Let $A:V\to W$ be a [[Linear Transformations|linear transformation]]. It is said to be *left invertible* if there exists a linear transformation $B:W \to V$ such that $BA = I_{V}$. $A$ must be injective for $B$ to exist.

### Right inverse
The transformation $A$ is called *right invertible* if there exists a linear transformation $C:W\to V$ such that $AC=I_{W}$. $A$ must be surjective for $C$ to exist. 

---
### Properties and examples

$B$ and $C$ are called the *left and right inverses* of $A$.
Generally, $B$ and $C$ are not unique.

 Examples:
- The LT $\begin{bmatrix}1\\1\end{bmatrix}$ (which maps from $\mathbb{R}\to \mathbb{R}^2$) is left invertible, but not right invertible. Notice that it is injective, i.e, only one vector in $\mathbb{R}^{2}$ is associated with every vector in $\mathbb{R}$. However, it is not surjective, since it cannot map to vectors which are not of the form $\begin{pmatrix}x\\x\end{pmatrix}$. It has infinitely many left inverses of the form $\begin{bmatrix}a & 1-a\end{bmatrix}$.
- The LT $\begin{bmatrix}1&1\end{bmatrix}$ (which maps from $\mathbb{R}^{2}\to \mathbb{R}$) is right invertible, but not left invertible. Note that it is surjective, with every vector in $\mathbb{R}$ being mapped to. It is clearly not injective, with every vector lying on the line $x+y=a, \begin{pmatrix}x \\ y\end{pmatrix} \in \mathbb{R}^{2}$ being mapped to $a\in \mathbb{R}$. It also has infinitely many right inverses of the form $\begin{bmatrix}b\\1-b\end{bmatrix}$. 

---
## Invertible transformations

### Definition

>[!Definition]
>A linear transformation $A:V\to W$ is called *invertible* if it is both right and left invertible. 

### Coincidence of left and right inverses

>[!Theorem]
>If a linear transformation $A:V\to W$ is invertible, then its left and right inverses $B$ and $C$ are unique and coincide.

>**Proof**
>Let $BA=I$ and $AC=I$. Then, 
>$$
>BAC = B(AC) = BI=B
>$$
>also
>$$
>BAC=(BA)C= IC = C
>$$
>therefore $B=C$. 
>
>Suppose for some transformation $B_{1}$ we have $B_{1}A=I$. repeating the above reasoning with $B_{1}$ instead of $B$ we get $B_{1}=C$. Therefore the left inverse $B$ is unique. A similar reasoning can be applied to $C$. ❏

>[!Corollary]
>A transformation $A:V\to W$ is invertible if and only if there exists a unique linear transformation (denoted $A^{-1}$), $A^{-1}:W\to V$, such that 
>$$
>A^{-1}A=I_{V}, \quad AA^{-1} = I_{W}
>$$

It is clear from the above corollary that if $A$ is invertible, $A^{-1}$ is also invertible.

>[!Theorem]
>An invertible matrix must be square. Moreover, if a square matrix has either a left or right inverse, it is invertible.

Proof: TBD

---
### Inverse of a product/composition of transformations

>[!theorem]
>If LTs $A$ and $B$ are invertible (and the product $AB$ is defined), then the product $AB$ is invertible, and $(AB)^{-1} = B^{-1}A^{-1}$. 

>**Proof**
>$$
>(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AIA^{-1}=AA^{-1}=I,
>$$
>and similarly,
>$$
>(B^{-1}A^{-1})AB=B^{-1}(A^{-1}A)B=B^{-1}IB=B^{-1}B=I.
>$$
>❏

The invertibility of the product $AB$ does not imply $A$ and $B$ are invertible. However, 

>[!Theorem]
>If one of the factors (either $A$ or $B$) and the product $AB$ is invertible, then the second factor is invertible too. 

>**Proof**
>Assume $B$ and $AB$ are invertible.
>$$
>\begin{align}
>(AB)^{-1}(AB)&=I\\
>B(AB)^{-1}(AB)B^{-1}&=BIB^{-1}\\
>B(AB)^{-1}A&=I\\
>\end{align}
>$$
>Thus, $A$ has a left inverse, namely $B(AB)^{-1}$. Also, 
>$$
>\begin{align}
>(AB)(AB)^{-1}&=I\\
>A(B(AB)^{-1})&=I
>\end{align}
>$$
>Thus, $A$ has a right inverse, namely $B(AB)^{-1}$. Therefore, $A$ is invertible. ❏

---
### Inverse of transpose

>[!Theorem]
>If a matrix $A$ is invertible, then $A^T$ is also invertible and $(A^T)^{-1} =(A^{-1})^T$

The proof is trivial.
