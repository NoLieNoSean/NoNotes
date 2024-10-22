---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-09-19, Thursday
time: 14:05
---
## Linear maps in $\mathbb{R}^{n}$ are matrices

>[!Theorem]
>Any linear map $T:\mathbb{R}^{p}\to \mathbb{R}^{q}$ is of the form $f_{A}(\mathbf{x})$ for some $q\times p$ matrix $A$. 

>**Proof**
>Take $\mathbf{x}=(c_{1}, c_{2}, c_{3}, \dots, c_{p})^{T}=c_{1}\mathbf{e}_{1}+c_{2}\mathbf{e}_{2}+\dots+c_{p}\mathbf{e}_{p}$.
>Then, $T\left( \sum_{i=1}^{p}c_{i}\mathbf{e}_{i} \right)=\sum_{i=1}^{p}c_{i}T(\mathbf{e}_{i})$.
>Define $\mathbf{u}_{i}\equiv T(\mathbf{e}_{i})$.
>It follows that, $T(\mathbf{x})=\begin{bmatrix}\mathbf{u}_{1}&\mathbf{u}_{2}&\dots&\mathbf{u}_{p}\end{bmatrix}\mathbf{x}$. ❏

Thus, the matrix $A$ corresponding to $T$ (the matrix $A$ such that $T=f_{A}$) is the matrix whose columns are the images of the standard basis of $\mathbb{R}^{p}$ under $T$ in the canonical order. 

Note that every linear map $T:\mathbb{R}^{p}\to \mathbb{R}^{q}$ has a unique $q\times p$ matrix $A$ associated with it, i.e, there exists a bijection $\zeta:\mathcal{L}(\mathbb{R}^{p}, \mathbb{R}^{q})\to  \mathcal{M}_{q\times p}(\mathbb{R})$, $\zeta(T)=\text{ matrix of } T$, where the domain of $\zeta$ is the set of all linear maps from $\mathbb{R}^{p}$ to $\mathbb{R}^{q}$ and the codomain is the set of all $q\times p$ matrices with real entries. We have [[Linear Transformations#Linear transformations as a vector space|seen]] that both are vector spaces. It can also be easily verified that $\zeta$ is itself a linear map. Thus, $\mathcal{L}(\mathbb{R}^{p}, \mathbb{R}^{q})\cong \mathcal {M}_{q\times p}(\mathbb{R})$. 
### Examples

Observe that the following maps are linear for geometric reasons. Find their matrices (In the standard basis, of course).

1) $\mathbb{R}^{2}\to \mathbb{R}^{2}$, rotation by $\theta$.
$$
\begin{bmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{bmatrix}
$$
2) $\mathbb{R}^{3}\to \mathbb{R}^{3}$, rotation by $\theta$ around $x, y, z$ axis.
$$
R_{z}=\begin{bmatrix}
\cos\theta & -\sin\theta & 0 \\
\sin\theta & \cos\theta & 0 \\
0 & 0 & 1
\end{bmatrix}
$$
$$
R_{y}=\begin{bmatrix}
\cos\theta & 0 & -\sin\theta \\
0 & 1 & 0 \\
\sin\theta & 0 & \cos\theta
\end{bmatrix}
$$
$$
R_{x}=\begin{bmatrix}
1 & 0 & 0 \\
0 & \cos\theta & -\sin\theta \\
0 & \sin\theta & \cos\theta
\end{bmatrix}
$$
3) $\mathbb{R}^{2}\to \mathbb{R}^{2}$, reflection about the $y=x$ line.
$$
\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}
$$
4) $\mathbb{R}^{3}\to \mathbb{R}^{3}$, reflection about the $XY$ plane.
$$
\begin{bmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{bmatrix}
$$
5) Composition of 1 followed by 3, i.e, rotation by $\theta$ followed by reflection about $y=x$.
$$
\begin{bmatrix} 
\sin\theta & \cos\theta\\
\cos\theta & -\sin\theta 
\end{bmatrix}
$$

---
## Matrices of linear maps in fdvsp

[[Algebra1_L8#Isomorphisms|In lecture 8]], we saw how any fdvsp $V$ of dimension $p$ is isomorphic to $\mathbb{R}^{p}$. We also saw what an isomorphism between $V$ and $\mathbb{R}^{p}$ looked like, given a basis of $V$. Now, consider a linear map $T:V\to W$, where $V$ and $W$ are finite dimensional vector spaces of dimensions $p$ and $q$ respectively. If we fix bases $B_{V}$ for $V$ and $B_{W}$ for $W$, we can define an isomorphism which maps elements of $V$ to their coordinate vectors in $\mathbb{R}^{p}$ (ditto for $W$):
$$
\begin{align}
\psi: V\to \mathbb{R}^{p},  & V\cong \mathbb{R}^{p} \\
\phi: W\to \mathbb{R}^{q},  & W\cong \mathbb{R}^{q} \\
\end{align}
$$
With representations of elements of $V$ and $W$ in $\mathbb{R}^{n}$, we can construct a matrix for $T$. To do this, we first need to find a linear map which maps the coordinate vector of $\mathbf{v}\in V$ in $\mathbb{R}^{p}$ to the coordinate vector of $T(\mathbf{v})$ in $\mathbb{R}^{q}$. Then, we can express this map as a matrix as described in the first section.

$T$ takes in an element of $V$ and spits out an element of $W$. So, given a coordinate vector of $\mathbf{v}\in V$, we have to map it to $\mathbf{v}$, then apply $T$, then map the result to its coordinate vector in $\mathbb{R}^{q}$. Thus, the transformation we seek is $L= \phi T\psi ^{-1}$. 

Finally, the matrix of $T$ in bases $B_{V}$ and $B_{W}$ (denoted $\mathcal{M}_{B_{V}, B_{W}}(T)$) is $\begin{bmatrix}L(\mathbf{e}_{1})& L(\mathbf{e}_{2}) & \dots & L(\mathbf{e}_{p})\end{bmatrix}$. It is a $q\times p$ matrix.

### Change of basis

Let $B_{V}$ and $B_{V}'$ be two bases for $V$. Similarly, let $B_{W}$ and $B_{W}'$ be two bases for $W$. Let $T:V\to W$. Given $\mathcal{M}_{B_{V}, B_{W}}(T)$, how do we find $\mathcal{M}_{B_{V}', B_{W}'}(T)$? 

Just as we did previously, all we need to do is change the "interface" of $\mathcal{M}_{B_{V}, B_{W}}(T)$. We can define the following isomorphisms:
$$
\begin{array}{ll}
   \psi: V\to \mathbb{R}^{p}, & \psi(\mathbf{v})=\text{ coordinate vector of }\mathbf{v}\text{ in }B_{V}\\
  \psi': V\to \mathbb{R}^{p}, & \psi'(\mathbf{v})=\text{ coordinate vector of }\mathbf{v}\text{ in }B_{V}'\\ \\

  \phi: W\to \mathbb{R}^{q}, & \phi(\mathbf{w})=\text{ coordinate vector of }\mathbf{w}\text{ in }B_{W}\\
  \phi': W\to \mathbb{R}^{q}, & \phi'(\mathbf{w})=\text{ coordinate vector of }\mathbf{w}\text{ in }B_{W}'\\
\end{array}
$$
Then, $\mathcal{M}_{B_{V}', B_{W}'}(T)=\phi'\ \phi ^{-1}\ \mathcal{M}_{B_{V}, B_{W}}(T)\ \psi\ \psi'^{-1}$. 

$\psi\ \psi'^{-1}$ is a map from $\mathbb{R}^{p}\to \mathbb{R}^{p}$, so it must have a unique matrix representation, say $A$. Similarly, let $B$ be the matrix of $\phi\ \phi'^{-1}$. Note that $A$ is a $p\times p$ matrix, and $B$ is a $q\times q$ matrix. $A$ is called the change of basis matrix in $V$, and $B$ is called the change of basis matrix in $W$. Observe:
$$
\begin{align}
 & (\text{coordinate vector of }\mathbf{v} \text{ in }B_{V})=A(\text{coordinate vector of }\mathbf{v}\text{ in }B_{V}') \\
 & (\text{coordinate vector of }\mathbf{w} \text{ in }B_{W})=B(\text{coordinate vector of }\mathbf{w}\text{ in }B_{W}')
\end{align}
$$
Observe that the columns of $A$ are the coordinate vectors of the elements of $B_{V}'$ in $B_{V}$. Similarly, the columns of $B$ are the coordinate vectors of the elements of $B_{W}'$ in $B_{W}$.

Finally, we have $\mathcal{M}_{B_{V}', B_{W}'}(T)=B^{-1}\ \mathcal{M}_{B_{V}, B_{W}}(T)\ A$.

