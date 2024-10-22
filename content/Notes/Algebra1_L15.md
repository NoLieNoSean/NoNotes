---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-10-10
time: 14:00
---
## Computing the determinant

Recall the [[Algebra1_L14#Determinants|defining properties of the determinant function]] from the previous lecture. We will soon show that the function satisfying these properties is unique. Assuming this to be the case, how would we actually compute the determinant of a given matrix?

>[!Theorem] Lemma 1
>If $A$ has a zero row or column, $\det A=0$. 

>**Proof**
>Let the $j^{th}$ row of $A$ be a zero row.
>Let $R_{j} \to -R_{j}$ give the matrix $A'$. Then,
>$$
> \begin{align}
 \det A &= - \det A'\\
 \det A &= - \det A\\
 \det A &= 0.
>\end{align} 
>$$
>❏

>[!Theorem] Lemma 2
>If $A$ is upper/lower triangular, then $\det A$ is the product of its diagonal entries.

> **Proof**:
> Let $A$ be an $n\times n$ upper triangular matrix.
> 
> *Case 1:* One of the diagonal entries of $A$ is zero.
> Pick the lowest zero on the diagonal, say $a_{ii}$. All the entries to the left of $a_{ii}$ on row $i$ are $0$, since $A$ is upper triangular. All the entries to the right of $a_{ii}$ on row $i$ can be made $0$ using row operations, since $a_{kk}\ne 0, \ i<k\leq n$. Thus, row $i$ can be made a zero row using row operations. From lemma 1 and the property that row operations do not change the determinant, it follows that $\det A=0$. 
> $$
> \begin{bmatrix}
>a_{11} \\
>& \ddots \\
>&  & a_{ii} \\
>&  &  & \ddots \\
>&  &  &  & a_{nn}
>\end{bmatrix}
> $$
> *Case 2:* None of the diagonal entries of $A$ are zero.
> Scale row $i$ by $a_{ii}^{-1}$. This gives us an upper triangular matrix with all the diagonal entries equal to $1$. This can be reduced to $I_{n\times n}$ using row operations, which has determinant $1$. So, we have
> $1={\det A}\ \ a_{11}^{-1}a_{22}^{-1}\dots a_{nn}^{-1}$ $\implies$ $\det A=a_{11}a_{22}\dots a_{nn}$. ❏

>[!Theorem] Proposition
> We may compute the determinant of a matrix $A$ by using row operations. Let $B$ a row reduced form of $A$. Then, 
> $$
> \det A = {(-1)^r}\, \frac{\text{ product of diagonal entries of }B}{\text{product of scaling factors}}
> $$
> where $r$ is the number of rows swapped in getting from $A$ to $B$.

This follows immediately from the preceding lemmas and the properties of the determinant.
This also shows that $\det A=\det A^{T}$.

---
## Another characterization of the determinant

>[!Definition] 
>Let $V_{1}, V_{2}, \dots, V_{k}$ and $W$ be vector spaces. A function $f:V_{1}\times V_{2}\times\dots \times V_{k}\to W$ is called *multilinear* if it is [[Algebra1_L11#Linear maps|linear]] in each of the $k$ arguments, when the rest of the arguments are kept constant.

For example, $\mathbb{R}^{2}\to \mathbb{R}, (a, b)\mapsto ab$ is multilinear with $k=2$, or bilinear.

The determinant can be thought of as a function of the row vectors of a matrix:
$$
\det A=\det \begin{bmatrix}
\mathbf{r}_{1}^{T} \\
\mathbf{r}_{2}^{T} \\
\vdots \\
\mathbf{r}_{n}^{T}
\end{bmatrix}=\det (\mathbf{r}_{1},  \mathbf{r}_{2}, \dots, \mathbf{r}_{n}).
$$

>[!Theorem] Lemma
>Let $\mathbf{r}_{1}, \mathbf{r}_{2}, \dots, \mathbf{r}_{n}$ be the row vectors of an $n\times n$ matrix $A$. Let $\mathbf{r}_{1}=\mathbf{x}_{1}+\mathbf{x}_{2}$. Then, 
>$\det(\mathbf{x}_{1}+\mathbf{x}_{2},\mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}) \\ =\det(\mathbf{x}_{1}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n})+\det(\mathbf{x}_{2}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n})$.

>**Proof**
>If $\mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$ are linearly dependent, a zero row can be had using row operations in all three matrices, and thus all three determinants are zero. Thus, assume $\mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$ are linearly independent. 
>
>Let $\mathbf{r}_{1},\mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$ be linearly dependent. Then, $\det A=0$ and $\mathbf{x}_{1}+\mathbf{x}_{2}$ can be expressed as a linear combination $L$ of $\mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$. Thus, $\mathbf{x}_{2}=L-\mathbf{x}_{1}$, and since $L$ can be gotten rid of using row operations, $\det(\mathbf{x}_{2}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n})=-\det(\mathbf{x}_{1}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n})$. 
>
>Let $\mathbf{r}_{1},\mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$ be linearly independent. If $\mathbf{x}_{1}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$ are linearly dependent or $\mathbf{x}_{2}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$ are linearly dependent, the lemma is trivially true. Thus, assume both sets are linearly independent. Also, $\mathbf{x}_{1}, \mathbf{x}_{2}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$ has to be linearly dependent, since $\mathbb{R}^{n}$ cannot have a linearly independent set of more than $n$ vectors. So, $\mathbf{x}_{2}=\alpha \mathbf{x}_{1}+L$, for some linear combination $L$ of $\mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$. Both the left and right and sides simplify to $\det((1+\alpha)\mathbf{x}_{1}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n})$, and we are done. ❏

We will now show that this makes the determinant multilinear. WLOG, fix $n-1$ row vectors $\mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}$. Let $T:\mathbb{R}^{n}\to \mathbb{R}$ defined by $T(\mathbf{x})=\det(\mathbf{x}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n})$. Then, 
$$
T(\alpha x)=\det(\alpha\mathbf{x}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n})=\alpha\det(\mathbf{x}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n})=\alpha T(\mathbf{x}).
$$
$$
\begin{align}
T(\mathbf{x}_{1}+\mathbf{x}_{2})= & \det(\mathbf{x}_{1}+\mathbf{x}_{2},\mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}) \\
= & \det(\mathbf{x}_{1}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n})+\det(\mathbf{x}_{2}, \mathbf{r}_{2}, \mathbf{r}_{3}, \dots, \mathbf{r}_{n}) \\
= & T(\mathbf{x}_{1})+T(\mathbf{x}_{2}).
\end{align}
$$
### New defining properties

Thus, we arrive at these alternate defining properties of the determinant:
1. $\det A$ is multilinear in the rows of $A$.
2. if $A$ has two identical rows then its determinant is zero.
3. The determinant of the identity matrix is one.

**Exercise:** Show that these are equivalent to the the previous defining properties.

---
## Cofactor expansions

>[!Definition]
>Let $A$ be an $n\times n$ matrix. 
>The $(i, j)$th *minor*, denoted by $A_{i, j}$ is the $(n-1)\times(n-1)$ matrix obtained by deleting the $i$th row and the $j$th column from $A$. 
>The $(i, j)$th *cofactor* is $C_{i, j}=(-1)^{i+j}\det A_{i, j}$.
>

Now, define $\det[a]\equiv a$. Note that it satisfies the defining properties.
Continue to define the determinant of $n\times n$ matrices inductively by the recursive formula 
$$
\det A=\sum_{j=1}^{n} a_{i, j}C_{i, j}.
$$
The above formula is called the cofactor expansion along the $i$th row. 
**Exercise:** Show that this formula satisfies the defining properties.

Since we are assuming that the function satisfying the defining properties of the determinant is unique, $\det A$ can have only one value. Thus, it follows that the cofactor expansion along any row gives the same result. However, here's how you prove this without that assumption:

>**Proof**
>We can show that the function "cofactor expansion along row 1" satisfies the defining properties of the determinant. Thus, $\det A=$ cofactor expansion of $A$ along row 1. Consider row $k$. Using $k-1$ row swaps, bring this row to the beginning, and call this new matrix $B$. Note that $\det A=(-1)^{k-1}\det B$. Also note that $B_{1, j}=A_{k, j}$. Now, $\det B=$ cofactor expansion along row 1 of $B$, i.e, 
>$$
>\begin{align}
>\det B & =\sum_{j=1}^{n} b_{1, j}(-1)^{1+j}\det B_{1, j} \\ 
> & =\sum_{j=1}^{n} b_{1, j}(-1)^{1+j}\det A_{k, j} \\
> & =\sum_{j=1}^{n} a_{k, j}(-1)^{1+j}\det A_{k, j}. \\
> \\
>\det A & =(-1)^{k-1}\det B \\
> & = \sum_{j=1}^{n} a_{k, j}(-1)^{k+j}\det A_{k, j},
>\end{align}
>$$
>which is the cofactor expansion of $A$ along row $k$. ❏

