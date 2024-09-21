---
tags:
  - ALG1
---

## Transformations
A *transformation* $T$ from a set $X$ (domain) to a set $Y$ (codomain) is a rule that for each argument $x \in X$ assigns a value $y\in Y$.
We write $T:X\rightarrow Y$ to say that $T$ is a transformation with domain $X$ and codomain $Y$. 

---
## Linear transformations
Let $V,W$ be vector spaces over the same field $\mathbb{F}$. A transformation $T:V\rightarrow W$ is called *linear* if
1. $T(\mathbf{u}+\mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v}) \ \  \forall \mathbf{u}, \mathbf{v} \in V$
2. $T(\alpha \mathbf{v}) = \alpha T(\mathbf{v})$

Properties 1 and 2 together are equivalent to $T(\alpha \mathbf{u}+\beta \mathbf{v}) = \alpha T(\mathbf{u}) + \beta T(\mathbf{v})\ \ \forall \mathbf{u},\mathbf{v}\in V \text{ and } \alpha,\beta\in \mathbb{F}$.
In other words, $T$ applied on a linear combination of $\mathbf{u}$ and $\mathbf{v}$ should equal the same linear combination of the transformed versions of $\mathbf{u}$ and $\mathbf{v}$. 

---
### Properties of linear transformations
- $T(\mathbf{0})=\mathbf{0}$.
- $T(V)$ is a vector space (subspace of $W$).
- $\text{Ker }T$ is a subspace of $V$.

---
### Matrix-vector multiplication as a linear transformation
A linear transformation $T:\mathbb{F}^n\rightarrow \mathbb{F}^m$ can be represented as "multiplication" by a [[Matrices|matrix]]. 

Claim: It is sufficient to know how $T$ acts on the standard [[bases|basis]] $\mathbf{e}_{1}, \mathbf{e}_{2}, \dots \mathbf{e}_{n}$ of $\mathbb{F}^n$. Namely, it is sufficient to know $n$ vectors in $\mathbb{F}^m$,
$$
\mathbf{a}_1:=T(\mathbf{e}_1),\quad\mathbf{a}_2:=T(\mathbf{e}_2),\quad\ldots\mathrm{~,~}\quad\mathbf{a}_n:=T(\mathbf{e}_n).
$$
This is easy to show. Let $\mathbf{x}=(x_{1}, x_{2}, \dots, x_{n})^T$ . Then, $\mathbf{x}=\sum_{k=1}^{n}x_{k}\mathbf{e}_{k}$, and 
$$
T(\mathbf{x})=T(\sum_{k=1}^nx_k\mathbf{e}_k)=\sum_{k=1}^nT(x_k\mathbf{e}_k)=\sum_{k=1}^nx_kT(\mathbf{e}_k)=\sum_{k=1}^nx_k\mathbf{a}_k.
$$

So, if we join the vectors (columns) $\mathbf{a}_{1},\mathbf{a}_{2},\dots,\mathbf{a}_{n}$ together in a matrix $A=[\mathbf{a}_{1},\mathbf{a}_{2},\dots,\mathbf{a}_{n}]$, this matrix contains all the information about $T$. We package $a_{i}$ together in manner because it makes it easy to compute $T(\mathbf{x})$ when we define the product of a matrix and a vector like so:
$$
A\mathbf{x}=\sum_{k=1}^nx_k\mathbf{a}_k=x_1\left(\begin{array}{c}a_{1,1}\\a_{2,1}\\\vdots\\a_{m,1}\end{array}\right)+x_2\left(\begin{array}{c}a_{1,2}\\a_{2,2}\\\vdots\\a_{m,2}\end{array}\right)+\ldots+x_n\left(\begin{array}{c}a_{1,n}\\a_{2,n}\\\vdots\\a_{m,n}\end{array}\right)
$$
So, by this *column by coordinate* definition of matrix by vector multiplication, we have $T(\mathbf{x}) = A\mathbf{x}$, where the columns of $A$ are the standard basis vectors of $\mathbb{F}^n$ transformed by $T$.

>[!Things to remember]
>- A linear transformation $T$ is completely defined by its values on the standard basis in its domain. In fact, the basis need not be standard - one can consider any basis, even a generating set (every generating set has a basis, right?)
>- Matrix multiplication did not just "happen" to be a linear transformation; it was defined specifically to be one.
>- It naturally arises from this definition that the number of columns of the matrix must equal the number of entries in the vector.
>- If $T$ is a linear transformation from $\mathbb{F}^n \to \mathbb{F}^r$, $T$ is represented by a $r\times n$ matrix

>[!Note]
>Often no distinction is made between a linear transformation and its matrix. $T\mathbf{x}$ may mean applying $T$ on $\mathbf{x}$ or multiplying $\mathbf{x}$ by the matrix of $T$.

>[!Important]
>We previously claimed that it is sufficient to know how a linear map $T$ acts on a basis of its domain to know how it acts on any member of its domain. Taking this further, it is also true that if we merely assign an element from a vector space $B$ to every element of a basis of a vector space $A$, we get a linear map $L:A\to B$.

---
### Linear transformations as a vector space
If we fi vector spaces $V$ and $W$ and consider the collection of all linear transformations from $V$ to $W$ (denoted by $\mathcal{L}(V,W)$), we can define two operations on $\mathcal{L}(V,W)$: multiplication by a scalar and addition like so
1. $(\alpha T)\mathbf{v} = \alpha(T\mathbf{v})\ \ \forall \mathbf{v} \in V\ \ \forall T \in \mathcal{L}(V,W)$
2. $(T_{1}+T_{2})\mathbf{v} = T_{1}\mathbf{v}+T_{2}\mathbf{v}\ \ \forall \mathbf{v}\in V\ \ \forall T\in \mathcal{L}(V,W)$

It can be easily shown that these operations satisfy the axioms of a [[Vector spaces|vector space]]. Thus, $\mathcal{L}(\mathbb{F}^n, \mathbb{F}^m)$ is a vector space.


## Matrix multiplication

Knowing [[#Matrix-vector multiplication as a linear transformation|matrix-vector multiplication]], a natural way arises to define the product $AB$ of two matrices: multiply by $A$ each column of $B$, and join the resulting column vectors into a matrix. 
If $\mathbf{b}_{1}, \mathbf{b}_{2}, \dots, \mathbf{b}_{r}$ are the columns of $B$, then $A\mathbf{b}_{1}, A\mathbf{b}_{2}, \dots, A\mathbf{b}_{r}$ are the columns of $AB$.
It is clear that in order for the multiplication to be defined, the number of columns in $A$ must equal the number of rows in $B$ (LADW, p20 for a better explanation of why this is natural).

Matrix multiplication is associative and distributive. One can also take scalar multiples out. In general, it is not commutative. 