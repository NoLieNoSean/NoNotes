---
tags:
  - ALG1
---

## Properties

### Axioms
A vector space $V$ is a collection of objects called vectors, along with two operations, addition of vectors and multiplication of a vector by a scalar from a [[Fields|field]] $\mathbb{F}$, such that the following 8 properties (aka axioms of vector spaces) hold:

Additive properties:
- Commutativity
- Associativity
- Zero vector: Existence of special vector $\bf{0}$ such that $\bf{v} + \bf{0} = \bf{v}$ for all $\bf{v} \in V$. Note that this does not explicitly require $\mathbf{0}$ to be unique.
- Additive inverse: For every vector $\bf{v}\in V$ there exists a vector $\bf{w} \in V$ such that $\bf{v + w = 0}$. Note that this does not explicitly require $\mathbf{w}$ to be unique for a given $\mathbf{v}$.

Multiplicative properties:
- Multiplicative identity: $1\bf{v} = \bf{v}$ for all $\bf{v} \in V$.
- Multiplicative associativity: $(\alpha\beta)\bf{v} = \alpha(\beta\bf{v})$ for all $\bf{v} \in V$ and scalars alpha and beta. 

Distributive properties:
- $\alpha(\mathbf{u}+\mathbf{v})=\alpha \mathbf{u}+\alpha \mathbf{v}$ for all $\mathbf{u}, \mathbf{v} \in V$ and all scalars $\alpha$.
- $(\alpha+\beta)\mathbf{v} = \alpha \mathbf{v} +\beta \mathbf{v}$ for all $v \in V$ and scalars $\alpha, \beta$.

>[!Note] 
> The scalars used to define vector multiplication can be drawn from any field. Usually, this is $\mathbb{R}$. Such vector spaces are called vector spaces over $\mathbb{R}$, or real vector spaces. If the scalars are complex numbers, the vector space is called a vector space over $\mathbb{C}$, or a complex vector space. Any complex vector space is a real vector space as well, since if you can multiply by a complex number, you can also multiply by a real number. If $\mathbb{F}$ is used to denote the set of scalars, then the results are true for both $\mathbb{R}$ and $\mathbb{C}$.

>[!Important]
>$\emptyset$ is not a vector space, since it does not contain a $\mathbf{0}$ vector.

### Properties derivable from above axioms
- $\mathbf{0} \in V$ is unique.
- For any $\mathbf{v}$, a vector $\mathbf{w}$ such that $\mathbf{v}+\mathbf{w}=\mathbf{0}$ is uniquely determined. It is denoted by $-\mathbf{v}$.
- $0\mathbf{v} = \mathbf{0}$.
- $(-1)\mathbf{v}=-\mathbf{v}$.

## $\mathbb{R}^n$
$\mathbb{R}^n$ is a vector space. 
$$
\mathbb{R}^n = \begin{Bmatrix}
\begin{pmatrix}
x_{1} \\
x_{2} \\
\vdots \\
x_{n}
\end{pmatrix} |~ x_{i} \in \mathbb{R}
\end{Bmatrix}
$$
>[!Note]
>It can be shown that all vector spaces are isomorphic with $\mathbb{R}^n$.

$\mathbb{R}^n$ consists of all columns of size $n$. Addition and multiplication are defined entry-wise.

$$
\alpha\left(\begin{array}{c}v_1\\v_2\\\vdots\\v_n\end{array}\right)=\left(\begin{array}{c}\alpha v_1\\\alpha v_2\\\vdots\\\alpha v_n\end{array}\right),\quad\left(\begin{array}{c}v_1\\v_2\\\vdots\\v_n\end{array}\right)+\left(\begin{array}{c}w_1\\w_2\\\vdots\\w_n\end{array}\right)=\left(\begin{array}{c}v_1+w_1\\v_2+w_2\\\vdots\\v_n+w_n\end{array}\right)
$$
### K-cell
If $a_{i}<b_{i}$ for $i = 1,\dots,k$, the set of all points $\mathbf{x}=(x_{1},x_{2},\dots, x_{k})$ in $\mathbb{R}^{k}$ whose coordinates satisfy the inequalities $a_{i}\le x_{i}\le b_{i}$ for $1\le i \le k$ is called a *k-cell*. A 1-cell is an interval, a 2-cell is a rectangle, etc.
## $\mathbb{P}_{n}$
The space $\mathbb{P}^n$ consists of all polynomials of degree up to $n$.