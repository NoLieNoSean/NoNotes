# Basic notions

## Vector spaces

- Defining axioms of [[Vector spaces]] and properties derivable from them.
## Linear combinations and bases

- Definition of a linear combination.
- Definitions of complete and linearly independent systems.
- Definition of a basis: a system of vectors such that any $\mathbf{v}\in V$ admits a unique representation as a linear combination of the basis vectors. This implies that a basis must be complete and linearly independent.

- any finite complete system contains a basis.

## Linear transformations

- Definition of LT
- It is sufficient to know how a LT $A:V\to W$ acts on a basis of $V$ to know how $A$ acts on any vector in $V$. In $\mathbb{F}^{n}$, this implies that an LT $A:\mathbb{F}^{n}\to \mathbb{F}^{m}$ is completely defined by its values on the standard basis of $\mathbb{F}^{n}$. 
- Considering a basis is not essential, one can use any generating set. So, a LT $A:V\to W$ is completely defined by its values on a generating set.
- Thus, LTs from $\mathbb{F}^{n}$ to $\mathbb{F}^{m}$ can be represented as multiplication by a matrix (notice how LTs from $\mathbb{F}$ to $\mathbb{F}$ are represented by multiplication by real numbers, which are essentially $1\times 1$ matrices).
## Composition of linear transformations and matrix multiplication

Definition of matrix multiplication.

- Properties of matrix multiplication
	- Distributivity
	- can take multiples out
	- Associativity of  linear transformations
$$
\begin{align}
(AB)C\mathbf{x}=A(BC)\mathbf{x} \\
(AB)(C(\mathbf{x}))=A((BC)(\mathbf{x})) \\
A(B(C(\mathbf{x})))=A(B(C(\mathbf{x})))
\end{align}
$$

Trace and matrix multiplication
- If $AB$ and $BA$ are defined, $\mathrm{Tr}(AB)=\mathrm{Tr}(BA)$.
  For the proof, consider two linear transformations, $T$ and $T_{1}$, acting from $M_{n\times m}$ to $\mathbb{F}$, defined by $T(X)=\mathrm{Tr}(AX)$ and $T_{1}(X)=\mathrm{Tr}(XA)$. To prove the theorem it is sufficient to show that $T =T_{1}$. This can be done by showing that $T$ and $T_{1}$ take the same values on the standard basis in $M_{n\times m}$.
## Invertible transformations

### Preliminaries

- Let $A:V\to W$ be a linear transformation. We say that the transformation $A$ is left invertible if there exists a linear transformation $B:W\to V$ such that $BA=I$.
- We say that $A$ is right invertible if there exists a linear transformation $C:W\to V$ such that $AC=I$.
- Note that we did not assume the uniqueness of $B$ or $C$ here, and generally left and right inverses are not unique.
- A LT is invertible if it is both left and right invertible.
	- left invertible $\iff$ the LT is injective (p50)
	- right invertible $\iff$ the LT is surjective
- If a LT is  invertible then its left and right inverses are unique, and coincide
	- Corollary: A transformation $A:V\to W$ is invertible iff there exists a unique transformation, denoted by $A^{-1}$, $A^{-1}:W\to V$ such that $A^{-1}A=I_{V}$ and $AA^{-1}=I_{W}$.
- A matrix is invertible if its corresponding LT is invertible 
- Properties of invertible transformations
### Isomorphisms

- isomorphic spaces can be considered as different representations of the same space, i.e, all properties and constructions involving vector space operations are preserved under isomorphisms.
- If $A$ is an isomorphism, so is $A^{-1}$. 
- isomorphisms map bases/linearly independent sets/linearly dependent sets/complete sets to bases/linearly independent sets/linearly dependent sets/complete sets
	- Theorem: Let $A:V\to W$ be an isomorphism, and let $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n}$ be a basis in $V$. Then the system $A\mathbf{v}_{1}, A\mathbf{v}_{2}, \dots, A\mathbf{v}_{n}$ is a basis in $W$.
	- Proof: Let $\mathbf{w}\in W$. Then, $A^{-1}\mathbf{w}\in V$. Since $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n}$ is a basis in $V$, $A^{-1}\mathbf{w}$ must have a unique decomposition in their terms. $A^{-1}\mathbf{w}=\sum\alpha_{i}\mathbf{v}_{i}$. Multiplying by $A$ on both sides, we get $AA^{-1}\mathbf{w}=\mathbf{w}=\sum\alpha_{i}(A\mathbf{v}_{i})$. Thus, the system $A\mathbf{v}_{1}, A\mathbf{v}_{2}, \dots, A\mathbf{v}_{n}$ is complete. To show that it is linearly independent, consider another decomposition of $\mathbf{w}$ in their terms: $\mathbf{w}=\sum\beta_{i}(A\mathbf{v}_{i})$. Multiplying both sides by $A^{-1}$, we get $A^{-1}\mathbf{w}=\sum\beta_{i}(A^{-1}A\mathbf{v_{i}})=\sum\beta_{i}\mathbf{v_{i}}$. This gives $\alpha_{i}=\beta_{i}$. Note that both identities $AA^{-1}=I$ and $A^{-1}A=I$ were used here.
- basis to basis maps are isomorphisms
### Invertibility and equations

Links the notion of invertibility with the existence and number of solutions.

- A LT $A:X\to Y$ is invertible iff $A\mathbf{x}=\mathbf{b}$ has a unique solution $\mathbf{x}\in X$ for every $\mathbf{b}\in Y$. corr: An $m\times n$ matrix is invertible iff its columns form a basis in $\mathbb{F}^{m}$, since the column vectors are obtained by applying the transformation on the standard basis in $\mathbb{F}^{n}$.

An $m\times n$ matrix $A$ is invertible $\iff$ its corresponding LT is invertible/an isomorphism $\iff$ $A$ must map the standard basis in $\mathbb{F}^{n}$ to a basis in $\mathbb{F}^{m}$ $\iff$ the columns of $A$ must be linearly independent.

From pivot analysis, we will later show that the column vectors forming a basis in $\mathbb{F}^{m}$ requires $n=m$. so the matrix must be square.

---

# Systems of linear equations

- Row operations (which are equivalent to left multiplication by an invertible matrix) do not change the solution set of a system.
- Echelon form:
	- All zero rows, if any, are below the non zero rows.
	- For any non zero row, its leading entry is to the right of the previous row's leading entry.
- Reduced echelon form:
	- All pivot entries are $1$.
	- All entries above the pivots are $0$. Note that all entries below the pivots are also $0$ because of the echelon form.


>[!Note]
> Let $\mathcal B = \{  \mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3}\}$ be a basis in $\mathbb{R}^{3}$. Let a linear transformation map these vectors to $\mathbf{w}_{1}, \mathbf{w}_{2}, \mathbf{w}_{3}$ respectively. Let $P$ be the matrix with $\mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3}$ as its columns. Then $P^{-1}$ will transform coordinates from the standard basis to $\mathcal B$. So, The matrix of the transformation in the standard basis will be $AP^{-1}$, where $A$ is the matrix with $\mathbf{w}_{1}, \mathbf{w}_{2}, \mathbf{w}_{3}$ as its columns.
> 

## Analyzing pivots

- relation between column vectors and positions of pivots in the echelon form
	- pivot in every column $\iff$ column vectors are linearly independent $\iff$ a solution, if it exists, is unique (injectivity)
	- pivot in every row $\iff$ column vectors are complete $\iff$ a solution always exists (surjectivity)

remember how the notions of pivots, linear independence/completeness, and the existence/uniqueness of solutions are linked.

- constraints on the sizes of linearly independent and
	- any linearly independent set in $\mathbb{F}^{n}$ cannot have more than $n$ vectors in it. proof by previous point
	- Any complete set in $\mathbb{F}^{n}$ has at least $n$ vectors.

- constraints on the size of a basis in $\mathbb{F}^{n}$
	- any two bases in a vector space $V$ have the same number of vectors in them.
	  proof: consider two bases $A$ and $B$ in $V$ having $n$ and $m$ vectors. WLOG $n\leq m$. Define a basis to basis map $T$ mapping the standard basis in $\mathbb{F}^{n}$ to $A$. This makes it an isomorphism. The inverse of an isomorphism is also an isomorphism. Apply $T^{-1}$ on $B$. Isomorphisms map a basis to a basis. So, $T^{-1}B$ is a basis with $m$ vectors in $\mathbb{F}^{n}$. from the previous point, $m\leq n$. so $n=m$.
	- since the standard basis in $\mathbb{F}^{n}$ has $n$ vectors, it follows that any basis in $\mathbb{F}^{n}$ has $n$ vectors.


### Corollaries about invertible matrices

- A matrix $m\times n$ $A$ is invertible iff its echelon form has a pivot in every column and every row.
  Proof: a matrix $A$ is invertible $\iff$ $A\mathbf{x}=\mathbf{y}$ has a unique solution $\mathbf{x}$ for every $\mathbf{y}$, drawn from the appropriate sets $\iff$ $A$ must have a pivot in every column and every row.
- An invertible matrix must be square, since it must have a pivot in every column and every row.
- If a square ($n\times n$) matrix is left invertible or right invertible, then it is invertible. 


## Finding $A^{-1}$ by row reduction

Any invertible matrix is row equivalent to the identity matrix, and thus any invertible matrix can be represented as a product of elementary matrices.

## Dimension

The dimension of a vector space $V$ is the number of vectors in a basis.

A vector space $V$ is finite-dimensional iff it has a finite spanning system.

If $\dim V=n$, there always exists an isomorphism $A:V\to \mathbb{R}^{n}$. This allows us to import quite a few results we proved for $\mathbb{R}^{n}$ to general finite dimensional vector spaces:
- Any linearly independent system in a fdvsp $V$ cannot have more than $\dim V$ vectors in it.
  Prototypical proof: Let $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{m}$ be a linearly independent system, and let $A:V\to \mathbb{R}^{n}$ be an isomorphism. Then, $A\mathbf{v}_{1}, A\mathbf{v}_{2}, \dots, A\mathbf{v}_{m}$ is a linearly independent system in $\mathbb{R}^{n}$, which implies $m\leq n$. 
- Any complete system in a fdvsp $V$ must have at least $\dim V$ vectors in it. 

A linearly independent system in a fdvsp can be completed to a basis.

## General solution of a linear system

$$

\boxed{
\begin{align}
 & \text{General solution of }\\

 & A\mathbf{x}=\mathbf{b}
\end{align}
}
=

\boxed{
\begin{align}
 & \text{A particular solution of }\\

 & A\mathbf{x}=\mathbf{b}
\end{align}
}
+
\boxed{
\begin{align}
 & \text{Kernel of } A
\end{align}
}
$$

## Fundamental subspaces of a matrix

The fundamental subspaces: $\text{Ran } A$, $\text{Ker } A$, $\text{Ran }A^{T}$, $\text{Ker }A^{T}$.

the rank of a matrix is the dimension of its range.

### Computing fundamental subspaces and rank

Let $A$ be a matrix. Let $A_{e}=EA$ be its echelon form.
- The pivot columns of $A$ give us a basis in $\text{Ran }A$.
- The pivot rows of $A_{e}$ give us a basis in $\text{Ran } A^{T}$, the row space of $A$.
- To find a basis in the null space of $A$, one needs to solve the homogeneous equation $A\mathbf{x}=\mathbf{0}$.

---
Why do the pivot columns of $A$ give us a basis in $\text{Ran }A$?

First, notice that the pivot columns of $A_{e}$ are linearly independent. Since row reduction is left multiplication by invertible matrices, it does not change linear independence. Thus, the pivot columns of $A$ are linearly independent. We now have to show that the pivot columns of $A$ span the column space. Let $\mathbf{c}_{1}, \mathbf{c}_{2}, \dots, \mathbf{c}_{r}$ be the pivot columns of $A$. Consider a column vector $\mathbf{c}$ of $A$. We have to show
$$
\begin{align}
\mathbf{c}=\alpha_{1}\mathbf{c}_{1}+\alpha_{2}\mathbf{c}_{2}+\dots+\alpha_{r}\mathbf{c}_{r}. 
\end{align}
$$
Note that the pivot columns of $A_{e}$ span the column space of $A_{e}$. Thus, we have
$$
\begin{align}
E\mathbf{c}=\alpha_{1}E\mathbf{c}_{1}+\alpha_{2}E\mathbf{c}_{2}+\dots+\alpha_{r}E\mathbf{c}_{r}
\end{align}
$$
Left multiplication by $E^{-1}$ gives us the required equation.

---
Why do the pivot rows of $A_{e}$ give a basis in the row space of $A$?

It is pretty obvious that the pivot rows of $A_{e}$ are a basis in the row space of $A_{e}$, and we know that row operations do not change the row space of a matrix. 
(
Proof that row operations do not change the row space of a matrix:
Note that $\text{Ran } T=T(V)$ for any LT $T:V\to W$.
$$
\begin{align}
\text{Ran }A_{e}^{T}  & = \text{Ran }(A^{T}E^{T})  \\
 & =(A^{T}E^{T} )(\mathbb{R}) \\
 & =A^{T}(E^{T}(\mathbb{R})) \\
 & =A^{T}(\mathbb{R}) \\
 & =\text{Ran }A^{T}
\end{align}
$$

)

---

### Rank theorem

Since the dimensions of both the row space and column space are equal to the number of pivots in the RREF of the matrix, they are equal.
$$
\text{rank }A=\text{rank }A^{T} 
$$
The rank-nullity theorem: Let $A$ be a $m\times n$ matrix.
- $\dim \ker A+\dim\text{Ran }A=\dim \ker A+\text{rank }A=n$.
- $\dim\ker A^{T}+\dim\text{Ran }A^{T}=\dim\ker A^{T}+\text{rank }A=m$.

---
### Change of coordinates

Matrix of a linear transformation
- Let $T:V\to W$ be a linear transformation, and let $A$ and $B$ be bases in $V$(dim n) and $W$(dim m) respectively. The matrix of $T$, denoted $[T]_{BA}$, is an $m\times n$ matrix which maps $[\mathbf{v}]_{A}\mapsto[T\mathbf{v}]_{B}$. 
- $[T\mathbf{v}]_{B}=[T]_{BA}[\mathbf{v}]_{A}$.

Change of coordinate matrix
- Let $A$ and $B$ be two bases in $V$. The matrix of the identity transformation in different bases gives change of bases matrix. For example, $[I]_{BA}$ maps $[\mathbf{v}]_{A}\to[\mathbf{v}]_{B}$. 
- $[\mathbf{v}]_{B}=[I]_{BA}[\mathbf{v}]_{A}$.
- The columns of $[I]_{BA}$ are just the coordinates in basis $B$ of the basis vectors $A$.

change of coordinates for the matrix of a transformation

similar matrices

# Determinants

Basic motivation: $n$-dimensional volume of parallelepiped determined by $n$ vectors.

Basic properties of the determinant
- Multilinearity
- antisymmetry
- normalization: $\det I=1$.

Properties derivable from above properties:
- The determinant does not change under column operations of the third kind.

### Determinants of diagonal and triangular matrices

Determinant of a diagonal/triangular matrix is equal to the product of its diagonal entries.

Computing the determinant for a general matrix: Row reduce it to a triangular form.

$\det A=0$ iff $A$ is not invertible.

$\det A=\det A^{T}$

$\det AB=\det A\det B$

### Formal definition and uniqueness

[[Algebra1_L16]]

### Cofactor expansions

$C_{j, k}=(-1)^{j+k}\det A_{j,k}$.

LADW derives the cofactor expansion formula from the properties of the determinant. This has the advantage of importing all previously known properties of the determinant directly to cofactor expansions, and also easy proofs that cofactor expansions along any row or column are equal. 

On the other hand, if we are directly presented with the cofactor expansion formula, we will have to prove that it satisfies the properties of the determinant, and that cofactor expansions along different rows and columns are equal. Here's a roadmap:

Consider the specific formula for cofactor expansion along column-1.

Prove antisymmetry, linearity for ROWS. Thus, we have shown that CF-C1 computes the determinant of the row vectors of a matrix. 

This allows us to import all the properties we have proved abstractly for determinants, particularly, the fact that CF-C1 of $A$ is equal to CF-C1 of $A^{T}$. Thus, we get that cofactor expansion along row 1 also computes the determinant. We can proceed to use the properties of the determinant with respect to the column vectors. This allows us to swap the first column with any arbitrary column, and change the sign of the determinant. We can now go back to the cofactor expansion along column 1 (the sign change due to column exchange is cancelled by the sign change in the cofactors when expanding along column 1). Thus, column expansion along any column gives the determinant.

---
#### Cofactor formula for the inverse of a matrix

If $A$ is an invertible matrix and $C$ is it's cofactor matrix, then
$$
A^{-1}=\frac{1}{\det A}C^{T}.
$$

Since $A$ is invertible, the equation $A\mathbf{x}=\mathbf{b}$ has a unique solution
$$
\mathbf{x}=A^{-1}\mathbf{b}=\frac{1}{\det A}C^{T}\mathbf{b}
$$
Note that $C^{T}\mathbf{b}$ is the vector
$$
\begin{bmatrix}
\det B_{1} \\
\det B_{2} \\
\vdots \\
\det B_{n}
\end{bmatrix}
$$
where $B_{k}$ is the matrix obtained on replacing column $k$ of $A$ with the vector $\mathbf{b}$.

---
# Spectral theory
## Diagonalization

A matrix $A$ with entries in $\mathbb{F}$ admits a representation $A=SDS^{-1}$, where $D$ is a diagonal matrix and $S$ is an invertible one iff there exists a basis in $\mathbb{F}^{n}$ of eigenvectors of $A$. Moreover, in this case the diagonal entries of $D$ are the eigenvalues and the columns of $S$ are the corresponding eigenvectors.

Functions of diagonal matrices are easy to compute.

Eigenvectors with distinct eigenvalues are linearly independent. Note that this implies that the eigenspaces of a linear operator are linearly independent.

If a linear operator $A:V\to V$ has exactly $n=dimV$ distinct eigenvalues, then it is diagonalizable. (Since this implies $A$ also has $n$ eigenvectors with different eigenvalues each, so they can form a basis).

An operator $A:V\to V$ having exactly $n=dimV$ eigenvalues is diagonalizable iff the geometric multiplicity and algebraic multiplicity of each of its eigenvalues coincides.

If a real $n\times n$ matrix $A$ admits complex factorization and all of its eigenvalues are real,
then it admits real factorization.

---
# Inner product spaces

## Inner product and norm in $\mathbb{C}^{n}$

We first define the norm in $\mathbb{C}^{n}$, and then define the inner product such that that norm is induced by our inner product.
$$
(\mathbf{z}, \mathbf{w})=\mathbf{w}^{*}\mathbf{z}
$$
The inner product we just defined has the following properties:
- Conjugate symmetry: $(\mathbf{x}, \mathbf{y})=\overline{(\mathbf{y}, \mathbf{x})}$
- Linearity in the first slot
- Non negativity and Non degeneracy.

More generally, for any complex or real vector space $V$, an inner product on $V$ is a function from $V\times V\to \mathbb{R}/\mathbb{C}$ such that the above properties are satisfied. A space $V$ together with an inner product is called an inner product space. An inner product induces a norm. 

Properties of the inner product:
- Conjugate linear in the second slot
- $(0, x)=(x, 0)=0$

The CS inequality
Triangle inequality
