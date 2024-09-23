---
tags:
  - ALG1
  - Lecture
---

2024-09-19, Thursday
1405

---


Claim: Any linear map $T:\mathbb{R}^{p}\to \mathbb{R}^{q}$ is of the form $f_{A}(\mathbf{x})$ for some $q\times p$ matrix $A$. 

>**Proof**
>Take $\mathbf{x}=(c_{1}, c_{2}, c_{3}, \dots, c_{p})^{T}=c_{1}\mathbf{e}_{1}+c_{2}\mathbf{e}_{2}+\dots+c_{p}\mathbf{e}_{p}$.
>$T\left( \sum_{i=1}^{p}c_{i}\mathbf{e}_{i} \right)=\sum_{i=1}^{p}c_{i}T(\mathbf{e}_{i})$.
>$\mathbf{u}_{i}\equiv T(\mathbf{e}_{i})$.
>Thus, $T(\mathbf{x})=\begin{bmatrix}\mathbf{u}_{1}&\mathbf{u}_{2}&\dots&\mathbf{u}_{p}\end{bmatrix}\mathbf{x}$.

---

Exercise:
Observe that the following maps are linear for geometric reasons. Find their matrices (after choosing the bases). 

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
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{bmatrix}
$$
3) $\mathbb{R}^{2}\to \mathbb{R}^{2}$, reflection in the $y=x$ line.

$$
\begin{bmatrix}
0 & 1 \\
1 & 0
\end{bmatrix}
$$

4) $\mathbb{R}^{3}\to \mathbb{R}^{3}$, reflection in the $XY$ plane.
5) Composition of 1 followed by 3.

---

Now: matrix of a linear map $T:V\to W$ for any finite dimensional $V, W$ by picking a basis for $V$ and a basis for $W$.

Standard stuff: pick ordered basis, express $\mathbf{v}\in V$ as a linear combination of the basis, and define a LT from V to Rn which gives the coordinate vector of $\mathbf{v}$ in terms of the basis you picked.
ditto for W. 

$$
\begin{align}
T:V\to W \\
\psi: V\to \mathbb{R}^{p},  & V\cong \mathbb{R}^{p} \\
\phi: W\to \mathbb{R}^{q},  & W\cong \mathbb{R}^{q} \\
\end{align}
$$
where $\psi$ and $\phi$ are invertible (thus the isomorphisms). 

kljlkjlkj


---
Change of basis formula