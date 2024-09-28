## Theorem 1 ✅

Equivalent systems of linear equations have the same solutions. Two systems are called equivalent if each equation in each system can be expressed as a linear combination of the equations in the other system. 

---
## Theorem 2 ✅
To each elementary row operation $e$ there corresponds an elementary row operation $e_{1}$, of the same type as $e$, such that $e(e_{1}(A))=e_{1}(e(A))=A$ for each $A$. In other words, the inverse operation (function) of an elementary row operation exists and is an elementary row operation of the same type. 

---
>[!Definition]
>$A$ and $B$ are called row equivalent is $B$ can be obtained from $A$ by a finite sequence of row operations and vice versa.

---

## Theorem 3 ✅

If $A$ and $B$ are row equivalent, the homogeneous systems $AX=0$ and $BX=0$ have exactly the same solutions.

---

>[!Info]
>Hofmann's row reduced matrices are just RREFs with the order of rows not being fixed.

---

## Theorem 4
Every $m\times n$ matrix over the field $\mathbb{F}$ is row equivalent to a row reduced matrix.

---

## Theorem 5 ✅
Every $m\times n$ matrix $A$ is row equivalent to a row reduced echelon matrix.

---

## Theorem 6

If $A$ is an $m\times n$ matrix and $m<n$, the homogeneous system of linear equation $AX=0$ has a non-trivial solution.


---

## Theorem 7

If $A$ is an $n\times n$ matrix, then $A$ is row equivalent to the $n\times n$ identity matrix if and only if the system of equations $AX=0$ has only the trivial solution.

---

## Theorem 8 ✅

---
## Theorem 9 ✅

>[!Definition]
>An elementary matrix is a matrix obtained by performing a single row operation on the identity matrix.

Let $e$ be an elementary row operation and let $E$ be the $m\times m$ elementary matrix $E=e(I)$. Then, for every $m\times n$ matrix $A$, we have $e(A)=EA$. 

---
## Theorem 10 ✅

>[!Definition]
>Let $A$ be an $n\times n$ matrix over the field $\mathbb{F}$. An $n\times n$ matrix $B$ such that $BA=I$ is called the *left inverse* of $A$; an $n\times n$ matrix $B$ such that $AB=I$ is called the *right inverse* of $A$. If $AB+BA+I$, $B$ is called the *two sided inverse* of $A$ and $A$ is said to be invertible.  

If $A$ has a left inverse $B$ and a right inverse $C$, then $B=C$. 

>Proof: Suppose $BA=I$ and $AC=I$. Then,
>$B=BI=B(AC)=(BA)C=C$.

If $A$ is invertible, so is $A^{-1}$. 
If $A$ and $B$ are invertible, so is $AB$, and $(AB)^{-1}=A^{-1}B^{-1}$.

---

## Theorem 11 ✅

An elementary matrix is invertible.

---

## Theorem 12 ✅

If $A$ is an $n\times n$ matrix, the following are equivalent.
1. $A$ is invertible
2. $A$ is row equivalent to the $n\times n$ identity matrix.
3. $A$ is a product of elementary matrices.

If $A$ is an invertible $n\times n$ matrix and if a sequence of elementary row operations reduces $A$ to the identity, then that same sequence of operations when applied to $I$ yields $A^{-1}$.

Let $A$ and $B$ be $m\times n$ matrices. Then, $B$ is row equivalent to $A$ is and only if $B=PA$ for some invertible $n\times n$ matrix $P$. 

---
## Theorem 13 ✅

For an $n\times n$ matrix $A$, the following are equivalent:
1. $A$ is invertible.
2. $A\mathbf{x}=0$ has only the trivial solution.
3. $A\mathbf{x}=\mathbf{y}$ has a solution $\mathbf{x}$ for every $\mathbf{y}\in \mathbb{R}^{n}$.
