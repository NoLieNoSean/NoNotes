---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-09-11
time: 11:54
---
## Recall

>[!Recall]
>If $f:W\to V$ is an isomorphism, so is $f^{-1}:V\to W$. 
>If $f:V\to W$ is an isomorphism, and $g:W\to U$ is an isomorphism, then $gf:V\to U$ is an isomorphism.
>^^ Try to prove these. should be easy.
>.
>If $S$ is a basis for $V$, then $f(S)$ is a basis for $W$. 
>If $(\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n})$ is an ordered basis of $V$, then we have an isomorphism $f:\mathbb{R}^{n}\to V$.

>[!Theorem] Invariance of dimension
>Let $V$ be a fdvsp. Then, any two bases of $V$ have the same, necessarily finite, cardinality, called the dimension of $V$ (over $\mathbb{R}$. necessary to state cuz the fdvsp might be defined over several fields).

---

## Corollaries

1. In a fdvsp $V$ of dimension $n$, If $S$ is any spanning set with $|S|=n$, then $S$ must be linearly independent, and hence a basis. 
2. If $I$ is a linearly independent set with cardinality $n$, it must be a spanning set, and hence, a basis. 
3. If $W\subseteq V$ is a subspace of $V$, then the dimension of $W$ is less than or equal to the dimension of $V$. Equality holds iff $W=V$.

>**Proof of 3**
>
>Take a basis $B$ for $W$. (note that since $V$ is fd, so is $W$, because spanning set for $V$ will give a spanning set for $W$).
>$B$ stays linearly independent over $V$.
>Then, by our proposition yesterday, $\text{Dim }W=|B|\le |\text{basis for }V|=\text{Dim }V$. ❏

>[!Remark]
>For vector spaces that are not fdvsp, existence of a basis can be shown using strategy $A$ (not strategy $B$) and Zorn's lemma, and the Axiom of Choice. Uniqueness of cardinality also holds, and requires set theory to show. Not part of this course.

---
## How to calculate with bases?

### Example 1

Does $(1, 2)$ and $(3, 8)$ form a basis of $\mathbb{R}^{2}$?
You can show that these are linearly independent, and by corollary 2, they must be a basis of $\mathbb{R}^{2}$. Knowing this, we can say that any $(x, y)\in \mathbb{R}^{2}$ can be expressed as a unique linear combination of these vectors.

### Example 2
Let $V$ be the set of all polynomials in $x$ of degree $\le$ 2.
Dim(V) = 3, as $\{ 1, x, x^{2} \}$ is a basis.
Exercise: find coefficients of $3+4x-9x^{2}$ in the basis $\{ 1, 1+x, 1+x+x^{2} \}$.


### Example 3
$A$ is a $r\times c$ matrix, $f_{A}:\mathbb{R}^{c}\to \mathbb{R}^{r}$. 
How to find basis of null space of $A$?
Observe that the null space of $A$ is the same as the null space of the RREF $R$ of $A$. 
Consider this example:
$$
R=
\begin{bmatrix}
0 &  1 & p & 0 & q & 0 \\
0 & 0 & 0 & 1 & r & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$
Consider the equation $R\mathbf{x}=\mathbf{0}$, i.e, 
$$
R=
\begin{bmatrix}
0 &  1 & p & 0 & q & 0 \\
0 & 0 & 0 & 1 & r & 0 \\
0 & 0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3} \\
x_{4} \\
x_{5} \\
x_{6}
\end{bmatrix}=\begin{bmatrix}
0 \\
0 \\
0 \\
0
\end{bmatrix}
$$

The solution to $R\mathbf{x}=\mathbf{0}$ is of the form:

$$
\begin{bmatrix}
x_{1} \\
-px_{3}-qx_{5} \\
x_{3} \\
-rx_{5} \\
x_{5} \\
0
\end{bmatrix}
=x_{1}\begin{bmatrix}
1 \\
0 \\
0 \\
0 \\
0 \\
0 
\end{bmatrix}
+x_{3}\begin{bmatrix}
0 \\
-p \\
1 \\
0 \\
0 \\
0
\end{bmatrix}
+x_{5}
\begin{bmatrix}
0 \\
-p \\
0 \\
-r \\
1 \\
0
\end{bmatrix}
$$

Notice that the pivot variables are expressed in terms of the free variables.
Call the vectors on the right $\mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3}$. $x_{1}$, $x_{2}$, $x_{3}$ are free variables.
You can show that these will always be linearly independent, provided we obtain them via the RREF. 
Thus, the dimension of the null space of $A$ is 3.
Thus, $\{ \mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3} \}$ is a basis for the kernel of $A$.
Conclusion: Dimension of null space = Number of free variables.