---
id: "504"
date: 2026-08-04
time: 14:02
tags:
  - LIALG
---
Reference: @humphreysIntroductionLieAlgebras1972, first two chapters

Grade breakup: Quiz 4x5, Assignment 3x5, MidSem 25, Final 40

---

> [!Definition] Lie algebra
> A vector space $L$ over a field $F$ with an operation $L\times L\to L$ denoted by $(x, y)\mapsto[xy]$ and called the **bracket** or **commutator** of $x$ and $y$ is called a **Lie algebra** over $F$ is the following axioms are satisfied:
> 1. The bracket operation is bilinear.
> 2. $[xx]=0$ for all $x\in L$. 
> 3. $[x[yz]]+[y[zx]]+[z[xy]]=0$ for all $x, y, z\in L$. This is called the Jacobi identity. 

> [!Remark]
> Let $x, y\in L$. Then, 
> $$
> \begin{align}
> 0 & = [(x+y)(x+y)] \\
>  & =[xx]+[xy]+[yx]+[yy]=0 \\
> \implies & [xy]=-[yx]\quad \forall x, y\in L.
> \end{align}
> $$
> If $\text{char}(F)\ne 2$, this also gives us $[xx]=0$ for all $x\in L$. 

> [!Note]
> In this course, all Lie algebras are finite dimensional. 

> [!Definition] Lie algebra homomorphism
> Let $L$ and $L'$ be two Lie algebras over $F$. An $F$-linear map $\varphi:L\to L'$ is said to be a **homomorphism of Lie algebras** if $\varphi$ preserves the Lie bracket, that is, 
> $$
> \begin{align}
> \varphi([xy])=[\varphi(x)\,\varphi(y)]\quad \forall x, y\in L .
> \end{align}
> $$
> 

> [!Definition] Lie subalgebra
> Let $L$ be a Lie algebra over $F$, and let $K$ be a vector subspace of $L$. Then $K$ is said to be a **Lie subalgebra** of $L$ if $[xy]\in K$ for every $x, y\in L$. 

> [!Example]
> Let $V$ be a finite dimensional vector space over $F$. Then, $\text{End}(V)$ is an associative $F$-algebra with pointwise addition, pointwise scalar multiplication, and composition of mappings as multiplication. Define $[xy]=xy-yx$ for $x, y\in \text{End}(V)$. Check that this makes $\text{End}(V)$ a Lie algebra. We denote this Lie algebra by $\mathfrak{gl}(V)$. 
> 


Let $n\in \mathbb{N}$. Define $\mathrm{Tr}:M(n, F)\to F$ as usual; this is a linear form on $M(n, F)$, i.e., $\mathrm{Tr}~\in M(n, F)^{*}$. Also, $\mathrm{Tr}~(xy-yx)=0$ for every $x, y\in M(n, F)$, i.e., $\mathrm{Tr}~([xy])=0$. Since $[ab]=0$ for all $a, b\in F$ is the only possible Lie algebra structure on $F$ (thanks to bilinearity), it follows that $\mathrm{Tr}$ is a Lie algebra homomorphism. Also, $\mathrm{Tr}(gxg^{-1})=\mathrm{Tr}~(x)$ for every $x\in M(n, F)$ and $g\in GL(n, F)$. 

Let $V$ be a finite dimensional vector space over $F$ of dimension $n$. Using the map $\varphi: \text{End}(V)\to M(n, F)$, we define trace on $\text{End}(V)$. This is independent of the choice of basis and hence well defined, since $\mathrm{Tr}(gxg^{-1})=\mathrm{Tr}~(x)$. 

Let $\mathfrak{sl}(V)=\{ x\in \mathfrak{gl}(V): \mathrm{Tr}(x)=0 \}$. Since $\mathrm{Tr}([xy])=0$ for every $x, y\in \mathfrak{gl}(V)$, $\mathfrak{sl}(V)$ is a Lie subalgebra of $\mathfrak{gl}(V)$. Similar definition for $\mathfrak{sl}(n, F)$. Check that this has dimension $n^{2}-1$. 

Assume that $\text{char}(F)\ne 2$. Let $n\in \mathbb{N}$. Let $E$ be the matrix
$$
\begin{bmatrix}
 &  & 1 \\
 & \ddots &  \\
1 &  & 
\end{bmatrix}
$$
Define $\varphi:M(n, F)\to M(n, F)$ by $\varphi(x)=E(-x^{t})E^{-1}$. Note that $[xy]^{t}=-[x^{t}y^{t}]$. 
Thus $\varphi$ is an automorphism of the Lie algebra $\mathfrak{gl}(n, F)$ of order $2$. 

Define $SO(n, F)=\{ x\in \mathfrak{sl}(n, F):\varphi(x)=x \}$. If $x, y\in SO(n, F)$, then $\varphi([xy])=[\varphi(x), \varphi(y)]=[x, y]$, so $[x, y]\in SO(n, F)$. Thus, $SO(n, F)$ is a Lie subalgebra of $\mathfrak{sl}(n, F)$. 


