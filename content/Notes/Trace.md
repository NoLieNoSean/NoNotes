---
tags:
  - ALG1
---

For a square [[Matrices#Definition|matrix]] $A$, its *trace* is defined as the sum of its diagonal entries
$$
\mathrm{Tr}A = \sum_{k=1}^{n} a_{k,k}.
$$

>[!Theorem]
>Let $A$ and $B$ be matrices of size $m\times n$ and $n\times m$ respectively. Then, $\mathrm{Tr}(AB) = \mathrm{Tr}(BA)$.


>**Proof**
>$$
>\mathrm{Tr}(AB) = \sum_{j=1}^{m} \sum_{i=1}^{n} a_{j,i}b_{i,j} =
> \sum_{i=1}^{n} \sum_{j=1}^{m} b_{i,j}a_{j,i}=
> \mathrm{Tr}(BA)
>$$
>Another way to prove this theorem would be to consider two [[Linear Transformations#Linear transformations|linear transformations]] $T, T_{1}:M_{n\times m}\to \mathbb{F}^1$(from the space of all $n\times m$ matrices to a field $\mathbb{F}$) defined by 
>$$
>T(X) = \mathrm{Tr}(AX), \quad T_{1}(X) = \mathrm{Tr}(XA).
>$$
>To prove the theorem it is sufficient to prove $T=T_{1}$.
>Recall that a linear transformation is completely defined by its values on a [[Bases#Spanning systems|generating system]]. An example of a simple generating system for $M_{n\times m}$ would be 
>$$
>S:=\{ X_{i,j}~|~1<i\leq n, 1<j\leq m \}
>$$
>where $X_{i,j}$ is a matrix where $x_{i,j} = 1$, and all other cells are zero. Thus, we only have to show that 
>$$
>T(X) = T_{1}(X)~~ \forall X \in S,
>$$
>
>which is trivial.


