---
id: "504"
date: 2026-08-04
time: 14:02
tags:
  - LIALG
  - Lecture
---

> [!Definition] Lie algebra
> A vector space $L$ over a field $F$ with an operation $L\times L\to L$ denoted by $(x, y)\mapsto[x,y]$ and called the **bracket** or **commutator** of $x$ and $y$ is called a **Lie algebra** over $F$ is the following axioms are satisfied:
> 1. The bracket operation is bilinear.
> 2. $[x,x]=0$ for all $x\in L$. 
> 3. The Jacobi identity: $[x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0$ for all $x, y, z\in L$.

^128a59

[[#^128a59]].1 and [[#^128a59]].2 applied to $[x+y, x+y]$ imply anticommutativity: $[x,y]=-[x, y]$, which is equivalent to [[#^128a59]].2 when $\text{char}(F)\ne 2$. 

A Lie algebra over $F$ is a [[LEC ALG3 3#^c44561|nonassociative $F$-algebra]]. 

All Lie algebras in this course are *finite-dimensional* vector spaces by default. 

> [!Definition] Lie algebra homomorphism
> Let $L$ and $L'$ be two Lie algebras over $F$. An $F$-linear map $\varphi:L\to L'$ is said to be a **homomorphism of Lie algebras** if $\varphi$ preserves the Lie bracket, that is, 
> $$
> \begin{align}
> \varphi([x,y])=[\varphi(x),\varphi(y)]\quad \forall x, y\in L .
> \end{align}
> $$
> 

> [!Definition] Lie subalgebra
> Let $L$ be a Lie algebra over $F$, and let $K$ be a vector subspace of $L$. Then $K$ is said to be a **Lie subalgebra** of $L$ if $[x,y]\in K$ for every $x, y\in K$. 

Note that any nonzero element $x\in L$ defines a one dimensional subalgebra $Fx$, with trivial multiplication.

# Linear Lie algebras

> [!Definition] General linear algebra
> Let $V$ be a finite dimensional vector space over $F$. Then, $\text{End}(V)$ is an [[LEC ALG3 3#^419c68|associative $F$-algebra]] with pointwise addition, pointwise scalar multiplication, and composition of mappings as multiplication. Define a new operation
> $$
> [x, y]=xy-yx
> $$
> called the **bracket** of $x$ and $y$. With this operation $\text{End}(V)$ becomes a Lie algebra over $F$. With this new nonassociative algebra structure, $\text{End}(V)$ is denoted $\mathfrak{gl}(V)$ and called the **general linear algebra**. By picking a basis for $V$, we can identity $\mathfrak{gl}(V)$ with the matrix algebra of all $n\times n$ matrices over $F$, denoted $\mathfrak{gl}(n, F)$. 

> [!Definition] Linear Lie algebra
> Any subalgebra of a Lie algebra $\mathfrak{gl}(V)$ is called a **linear Lie algebra**. 

> [!Example] Special linear algebra
> 
> Let $n\in \mathbb{N}$. Define $\mathrm{Tr}:M(n, F)\to F$ as usual; this is a linear form on $M(n, F)$, i.e., $\mathrm{Tr}~\in M(n, F)^{*}$. Using any identification $\text{End}(V)\longleftrightarrow M(n, F)$, we can define $\mathrm{Tr}$ on $\text{End}(V)$ - this is independent of the choice of basis since $\mathrm{Tr}(gxg^{-1})=\mathrm{Tr}(x)$. 
> 
> Since (i) $\mathrm{Tr}([xy])=0$ for all $x, y\in M(n, F)$ and (ii) $[ab]=0$ for all $a, b\in F$ is the only possible Lie algebra structure on $F$, we have that $\mathrm{Tr}$ is a Lie algebra homomorphism $\mathfrak{gl}(n, F)\to F$. Using the same reasoning, we can define $\mathrm{Tr}:\mathfrak{gl}(V)\to F$. 
> 
> Let $\mathfrak{sl}(V)=\{ x\in \mathfrak{gl}(V): \mathrm{Tr}(x)=0 \}$. Since $\mathrm{Tr}([xy])=0$ for every $x, y\in \mathfrak{gl}(V)$, $\mathfrak{sl}(V)$ is a Lie subalgebra of $\mathfrak{gl}(V)$, called the **special linear algebra**. Let $\mathfrak{sl}(n, F)$ be the associated matrix algebra. 


Assume that $\text{char}(F)\ne 2$. Let $n\in \mathbb{N}$. Let $E$ be the matrix
$$
\begin{bmatrix}
 &  & 1 \\
 & \ddots &  \\
1 &  & 
\end{bmatrix}
$$
Define $\varphi:M(n, F)\to M(n, F)$ by $\varphi(x)=E(-x^{t})E^{-1}$. Note that $[xy]^{t}=-[x^{t}y^{t}]$; $\varphi$ is an automorphism of $\mathfrak{gl}(n, F)$ of order $2$. 

Define $\mathfrak{so} (n, F)=\{ x\in \mathfrak{sl}(n, F):\varphi(x)=x \}$. If $x, y\in \mathfrak{so}(n, F)$, then $\varphi([x,y])=[\varphi(x), \varphi(y)]=[x, y]$, so $[x, y]\in \mathfrak{so}(n, F)$. Thus, $\mathfrak{so}(n, F)$ is a Lie subalgebra of $\mathfrak{sl}(n, F)$. 


[!Example] Symplectic algebra

[!Example] Orthogonal algebra

> [!Example] More linear algebras
> 
> Let $\mathfrak{t}(n, F)$, $\mathfrak{n}(n, F)$, and $\mathfrak{d}(n, F)$ be the set of all $n\times n$ upper triangular, strictly upper triangular, and diagonal matrices with entries in $F$. Each of these are Lie subalgebras of $\mathfrak{gl}(n, F)$. Further, 
> $$
> \mathfrak{t}(n, F)=\mathfrak{d}(n, F)\oplus \mathfrak{n}(n, F)
> $$
> as vector spaces with $[\mathfrak{d}(n, F), \mathfrak{n}(n, F)]=\mathfrak{n}(n, F)$, hence $[\mathfrak{t}(n, F), \mathfrak{t}(n, F)]=\mathfrak{n}(n, F)$. 




