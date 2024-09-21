---
tags:
  - ALG1
---

## Definition

An $m \times n$ matrix is a rectangular array with $m$ rows and $n$ columns.
$$
A=(a_{j,k})_{j=1,\mathrm{~}k=1}^{m,\mathrm{~}n}=\left(\begin{array}{cccc}a_{1,1}&a_{1,2}&\ldots&a_{1,n}\\a_{2,1}&a_{2,2}&\ldots&a_{2,n}\\\vdots&\vdots&&\vdots\\a_{m,1}&a_{m,2}&\ldots&a_{m,n}\end{array}\right)
$$


>[!Note] 
>Matrices can be added and scaled, and the set of all $m \times n$ matrices satisfy all of the axioms of a [[Vector spaces|vector space]]. Matrices can be treated as vectors.

---
## Systems of linear equations

Matrices can be used to represent systems of linear equations. 
For example, these equations

$$
\begin{aligned}

&{a}_{11}{x}_{1}+{a}_{12}{x}_{2}+{a}_{13}{x}_{3}={b}_{1} \\

&{a}_{21}{x}_{1}+{a}_{22}{x}_{2}+{a}_{23}{x}_{3}={b}_{2} \\

&{a}_{31}{x}_{1}+{a}_{32}{x}_{2}+{a}_{33}{x}_{3} ={b}_{3} 

\end{aligned}
$$
can be represented as

$$
\begin{bmatrix}{a}_{11}&{a}_{12}&{a}_{13}\\{a}_{21}&{a}_{22}&{a}_{23}\\{a}_{31}&{a}_{32}&{a}_{33}\end{bmatrix}\begin{bmatrix}{x}_1\\{x}_2\\{x}_3\end{bmatrix}=\begin{bmatrix}{b}_1\\{b}_2\\{b}_3\end{bmatrix}
$$
$$
A\begin{bmatrix}{x}_1\\{x}_2\\{x}_3\end{bmatrix}=\begin{bmatrix}{b}_1\\{b}_2\\{b}_3\end{bmatrix}
$$
The number of rows in $A$ represents the number of equations, and the number of columns in $A$ represents the number of variables. $A$ is called the *coefficient matrix* of the system.
### Augmented matrix
The above representation can be further condensed into an augmented matrix:
$$
\left[
    \begin{array}{ccc|c}
        a_{11} & a_{12} & a_{13}  & b_{1} \\
 a_{21} & a_{22} & a_{23} & b_{2} \\
 a_{31} & a_{32} & a_{33} & b_{3} \\
  
    \end{array}
\right]
$$

### [[Solving linear systems, Pivots]]

---
## Representations of linear transformations

Matrices can be used to represent [[Linear Transformations#Linear transformations|linear transformations]]. 

>[!Definition]
>A matrix is called invertible if the corresponding linear transformation is invertible.

This gives way to a definition of [[Linear Transformations#Matrix multiplication|matrix multiplication]].

---
## Transpose

Given a matrix $A$, its *transpose* is defined by transforming the rows of $A$ into columns.
$$
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6
\end{pmatrix}^T
= \begin{pmatrix}
1 & 4 \\
2 & 5 \\
3 & 6
\end{pmatrix}
$$
When you take the transpose of a product, you change the order of terms. 
$$
(AB)^T = B^TA^T
$$


