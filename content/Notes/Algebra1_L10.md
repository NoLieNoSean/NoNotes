---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-09-12
time: 14:00
---
## Recall and orient

>[!Recall]
>[[Algebra1_L9#Example 3|Example 3]] from yesterday

In the previous lecture, we found a basis for the null space of a matrix. We now want to find a basis for the image of a matrix.

---
## The quest for a basis for the image of $f_{A}$ (column space)

### Strategy 1

Make rows into columns and vice versa, i.e, take the transpose. Not elaborated upon in class.
#### Transpose

Defined [[Matrices#Transpose|transpose]].

Properties of transpose:
- distributes over sums
- $(AB)^{T}=B^{T}A^{T}$. Observe that inverses work similarly.

$A\mathbf{x}=B$ is equivalent to $\mathbf{x}^{T}A^{T}=B^{T}$. Can solve the latter type of equations using *column operations*. Doing a column operations is the same as multiplying on the right by an elementary matrix.
$$
A\underset{ \text{Column operations} }{ \longrightarrow }AE
$$
### Strategy 2

Exploit properties of RREF.

$\text{Col }A:=\text{Span (Columns of A)}$ 

$\text{Row }A:=\text{Span (Rows of A)}$ 
#### Case 1: $A$ is in RREF.
The pivot columns are linearly independent, and the other columns are in their span.
In this case, A basis of $\text{Col }A = \{ \text{Pivot columns of }A \}$
#### General case: 
Row operations change the column space of $A$. For example, $\begin{bmatrix}\sqrt{ 2 }\\ \pi\end{bmatrix}\underset{ \text{Row operations} }{ \longrightarrow } \begin{bmatrix}1\\ 0\end{bmatrix}$. The spans of the two vectors are clearly different.

Insight: Find linear relations among column vectors of $A$, so that we can drop "unnecessary" columns to get a basis.
This is the same as finding non-trivial solutions to $A\mathbf{x}=\mathbf{0}$, which is equivalent to finding non trivial solutions to $\text{RREF}(A)~\mathbf{x}=\mathbf{0}$.
Any set of columns of RREF(A) is linearly dependent/independent $\iff$ the corresponding set of columns of $A$ is linearly dependent/independent.

Thus, a basis of $\text{Col }A=\{ \text{Columns of A corresponding to the pivot columns of RREF(A)} \}$

>[!Note] A better explanation
>We want to find a basis for the column space of $A$. We consider the pivot columns of $R=$RREF($A$). You can easily show that these are linearly independent, and span $\text{Col }R$. Thus, they are a basis for $\text{Col }R$. Now, it must be that $R=EA$, for some invertible matrix $E$. Thus, $R$ and $A$ are isomorphic, with $f_{E}$ being an isomorphism. If $f_{E}$ is an isomorphism, $f_{E}^{-1}$ is also an isomorphism. We know that an isomorphism maps a basis to a basis. Thus, the image of the pivot columns of $R$ under $f_{E}^{-1}$ (which are basically the corresponding columns in $A$) form a basis of $\text{Col }A$.

---
## Relation between rank and nullity

>[!Definition]
>*Nullity* of $A$ = Dimension of null space of $A$ = number of free variables.
>*Column rank* of $A$ = Dimension of $\text{Col }A$ = number of pivot variables.

### Equivalence of row rank and column rank

The row rank and column rank of $f_{A}$ are equal. Hence, we usually refer to them with just "rank".
To show this is the case, we will attempt to find the row rank by performing similar analysis to what we did in strategy 2.
#### Case 1: A is in RREF
Non-zero rows form a basis as they are linearly independent. 
#### General case
For an arbitrary matrix $A$, obtains its RREF $A'$. Then Rows of $A'$ are linear combinations of rows of $A$ and vice versa.

Thus, a basis for $\text{Row }A = \{ \text{Non zero row vectors of RREF(A)} \}$. 
Thus, $\text{Dim }(\text{Row }A) =\text{Number of pivots in RREF(A)}=\text{Dim }(\text{Col }A)$ 
Thus, column rank = row rank.

### Rank-nullity theorem

The preceding discussion coupled with our discussion in L9 regarding the basis for the null space of $f_{A}$ leads us to a powerful result. 

>[!Theorem]
>Rank of $A$ + Nullity of $A$ = # columns of $A$.
>Put another way, $\text{Dim }(\mathrm{Im}f_{A})+\text{Dim }(\text{Ker }f_{A})=\text{Dim }\mathbb{R}^{c}$

---
## Epilogue

Discussed abstract vector spaces
- Discussed how all $p\times q$ matrices form a vector space. In particular, observed that $M_{p\times q}\cong \mathbb{R}^{pq}$.
- If $X$ is any set, then $W=\{ f:X\to \mathbb{R} \}$ is a vector space under point wise addition and scalar multiplication. Exercise: if $X$ is finite, then what is the dimension of $W$?
	- My solution: If we fix an order for the elements of $X$, then every element of $W$ can be represented as a member of $\mathbb{R}^{n}$, where $n$ is the cardinality of $X$. For example, if $X=\{ x_{1}, x_{2}, x_{3} \}$, consider $f_{1}\in W$, where $f_{1}(x_{1})=r_{1}$, $f_{1}(x_{2})=r_{2}$, and $f_{1}(x_{3})=r_{3}$. Then, $f_{1}$ can be represented as $[r_{1}, r_{2}, r_{3}]^{T}$. Thus, if $X$ is finite, $W\cong \mathbb{R}^{|X|}$. 

