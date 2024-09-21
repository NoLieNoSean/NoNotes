---
tags:
  - ALG1
---

Linear systems are solved by performing *row reduction* on the [[Matrices#Augmented matrix|augmented matrix]] to reduce it to the *echelon form*, from which a solution can easily be written.

## Echelon and reduced echelon form

>[!Definition]
>A matrix is in *echelon form* if it satisfies the following two conditions:
>1. All zero rows, if any, are below the non zero entries.
>2. For any non-zero row its leading entry(pivot) is strictly to the right of the leading entry in the previous row.

>[!Definition]
>A matrix is in *reduced echelon form* if it is in echelon form and
>1. All pivot entries equal 1
>2. All entries above the pivots are 0 (Note that all entries below the pivots are also zero cuz of echelon form).

---
## Row operations

There are three *row operations* we can use to perform row reduction. Every row operation as what is called an *elementary matrix* associated with it, and performing the row operation is equivalent to [[Linear Transformations#Matrix multiplication|multiplying]] the augmented matrix by the elementary matrix. Elementary matrices are [[Invertible Transformations#Invertible transformations|invertible]], and hence, performing row operations does not change the solution set of the system of linear equations (All solutions $\mathbf{x}$ of the equation $A\mathbf{x}=\mathbf{b}$ must satisfy $EA\mathbf{x}=E\mathbf{b}$, and any solution to the latter must satisfy $E^{-1}EA\mathbf{x}=E^{-1}E\mathbf{b}$). 
### Row exchange

Let $E$ be the matrix

 ![[Pasted image 20240909022651.png|400]]

Then, rows $j$ and $k$ of $EM$ are rows $k$ and $j$ of $M$. 
$E=E^{-1}$.

### Row scaling

Let $E$ be the matrix

![[Pasted image 20240909023424.png|400]]

Then, row $k$ of $EM$ is row $k$ of $M$ scaled by $a$.
Replace $a$ by $\frac{1}{a}$ to obtain $E^{-1}$.

### Row replacement
Let $E$ be the matrix

![[Pasted image 20240909024408.png|400]]

Then, row $k$ of $EM$ is $a$ times row $j$ of $M$ added to row $k$ of $M$. 
Replace $a$ by $-a$ to obtain $E^{-1}$. 

---
## Row reduction
Consists of three steps:
1. Find the leftmost non-zero column of the matrix.
2. Make sure, by applying row operations of type 1 (row exchange), if necessary, that the first (the upper) entry of this column is non-zero. This entry will be called the *pivot* entry or simply the pivot.
3. “Kill” (i.e. make them 0) all non-zero entries below the pivot by adding (subtracting) an appropriate multiple of the first row from the rows number 2, 3, . . . , m.
4. Forget the row you just worked with, and repeat from step 1 till you run out of rows or pivots.

The end result is a matrix in echelon form.

To get reduced echelon form from echelon form, we work from the bottom to the top and from the right to the left, using row replacement to kill all entries above the pivots.

---
## Writing solution from RREF

Consider the RREF
$$
\left[\begin{array}{ccccc|c}\boxed{1}&2&0&0&0&1\\0&0&\boxed{1}&5&0&2\\0&0&0&0&\boxed{1}&3\end{array}\right]
$$
Columns without a pivot are called *free variables*. The solution can be expressed in vector form like so:
$$
\mathbf{x}=\left(\begin{array}{c}1-2x_2\\x_2\\2-5x_4\\x_4\\3\end{array}\right)=\left(\begin{array}{c}1\\0\\2\\0\\3\end{array}\right)+x_2\left(\begin{array}{c}-2\\1\\0\\0\\0\end{array}\right)+x_4\left(\begin{array}{c}0\\0\\-5\\1\\0\end{array}\right),\quad x_2,x_4\in\mathbb{F}.
$$

---
## Analyzing the pivots

All questions about existence of a solution and it uniqueness can be answered by analyzing pivots in the echelon (reduced echelon) form of the coefficient/augmented matrix.

Consider a linear system with $n$ equations and $m$ variables. It can be represented as $A\mathbf{x}=\mathbf{y}$, where $A$ is an $n\times m$ matrix, $\mathbf{x}\in \mathbb{F}^{m}$, $\mathbf{y}\in \mathbb{F}^{n}$. 

Analyzing the pivots in the coefficient matrix ($A$) tells us about the [[Invertible Transformations#Left inverse|injectivity]] and [[Invertible Transformations#Right inverse|surjectivity]] of the [[Linear Transformations#Linear transformations|linear transformation]] represented by the coefficient matrix.

>[!Important]
>
>1. A solution $\mathbf{x}$ for some $\mathbf{y}$ (if it exists) is *unique* $\iff$ 
>   there are *no free variables* $\iff$
>   the echelon form $A$ has a *pivot in every column*. $\underset{ * }{ \iff }$ 
>   the column vectors of $A$ are [[Bases#Linearly independent systems|linearly independent]]
>2. A solution $\mathbf{x}$ exists *for all* $\mathbf{y}$ $\iff$ 
>   the echelon form of $A$ has *no zero row* $\iff$ 
>   the echelon form of $A$ has a *pivot in every row*. $\underset{ ** }{ \iff }$
>   the column vectors of $A$ form a [[Bases#Spanning systems|spanning set]] in $\mathbb{F}^{n}$ 
>   
>It follows from these statements that $A\mathbf{x}=\mathbf{y}$ has a unique solution $\mathbf{x}$ for every $\mathbf{y}$ if and only if the echelon form of $A$ has a pivot in every column and row, i.e, the column vectors of $A$ are a [[Bases#Definition|basis]] in $\mathbb{F}^{m}$. [[LADW.pdf#page=57|ref]]

(\*) and (\*\*) are easy to see if you recall what [[Linear Transformations#Matrix-vector multiplication as a linear transformation|matrix multiplication]] means, and what it means to be linearly independent/complete.

Given a vector $\mathbf{y}$ in the codomain $\mathbb{F}^{n}$, analyzing the augmented matrix $[\ A\ |\ \mathbf{y}\ ]$ tells us whether the system is consistent for this choice of $\mathbf{y}$. 

>[!Important]
>A system $A\mathbf{x}=\mathbf{y}$ is inconsistent for a given $\mathbf{y}$ $\iff$
>there is a pivot in the last column of the echelon form of the *augmented* matrix.

---
## Corollaries about linear independence and bases

### Too hot

>[!Theorem]
>Any linearly independent system of vectors in $\mathbb{F}^{n}$ cannot have more than $n$ vectors in it.

>**Proof**
>An $n\times m$ matrix cannot have a pivot in every column if $m>n$. ❏

### Too cold

>[!Theorem]
>Any spanning set in $\mathbb{F}^{n}$ must have at least $n$ vectors.

>**Proof**
>An $n\times m$ matrix cannot have a pivot in every row if $m<n$. ❏

### Goldilocks?

>[!Theorem]
>Any basis in $\mathbb{F}^{n}$ must have exactly $n$ vectors in it.

>**Proof**
>A basis must be linearly independent and complete. Thus, $m\le n$, and $m\ge n$ $\implies$ $m=n$. ❏

>[!Theorem]
>Any two bases in a vector space $V$ have the same number of vectors in them.

I get to say "obviously" here, right?