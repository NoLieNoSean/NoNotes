---
tags:
  - ALG1
  - Lecture
date: 2024-10-10
time: 14:00
---
>[!Theorem] Proposition
> The determinant of a matrix  $A$ with a zero row is zero

>**Proof**
> WLOG assume that the $j^{th}$ row of $A$ is the zero row.
> Let $R_{j} \to -R_{j}$ gives the matrix $A'$. That is $$
> \begin{align}
 \det A &= - \det A'\\
 \det A &= - \det A\\
 \det A &= 0\\
\end{align} $$

>[!Theorem] Proposition
> The determinant of an upper/lower triangular matrix is the product of its diagonal entries

> **Proof**:
> 
> *Case 1:* One of the diagonal entries of $A$ is zero
> $$
> \begin{bmatrix}
a_{11} \\
 & \ddots \\
 &  & 0 \\
 &  &  & \ddots \\
 &  &  &  & a_{nn}
\end{bmatrix}
> $$
