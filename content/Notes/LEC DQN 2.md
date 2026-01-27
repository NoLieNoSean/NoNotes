---
id: "388"
date: 2026-01-16
time: 09:57
tags:
---
$X'=AX$. 
Uncoupled systems correspond to diagonal matrices. If the matrix is not diagonal but is diagonalizable (for example by having all distinct real eigenvalues), we can write $Y=P^{-1}X$. Then, $Y'=P^{-1}X=P^{-1}AX=(P^{-1}AP)(P^{-1}X)$, so $Y'=(P^{-1}AP)Y$. It follows that $X(t)=PE(t)P^{-1}X(0)$. 

[!Lemma]
Let $X'=AX$. Suppose $V_{0}$ is an eigenvector for $A$ with eigenvalue $\lambda\in \mathbb{R}$. Then $X(t)=e^{ \lambda t }V_{0}$ is a solution to the system.

[!Proof]-
$$
X'(t)=\lambda e^{ \lambda t }V_{0}=e^{ \lambda t }(\lambda V_{0})=e^{ \lambda t }(AV_{0})=AX(t).
$$

---

Equilibrium solutions: If $\det A\ne 0$, then $(0, 0, \dots, 0)$ is the only equilibrium solution. If $\det A=0$, they will correspond to a kernel of $A$. 

---

[!Definition]
If $A$ has negative eigenvalues $\lambda_{1}, \dots, \lambda_{k}$ and positive eigenvalues $\lambda_{k+1}, \dots, \lambda_{n}$ all distinct, let $\{ v_{1}, \dots, v_{n} \}$ be corresponding eigenvectors. Then, $E^{S}=\text{span}\{ v_{1}, \dots, v_{k} \}$ is called the stable subspace, and $E^{UN}=\text{span}\{ v_{k+1}, \dots, v_{n} \}$ is called the unstable subspace. 

> [!Theorem]
> Given $T\in L(\mathbb{R}^{n})$ and $t_{0}\geqslant 0$, 
> $$
> \sum_{k=0}^{\infty} \frac{T^{k}t^{k}}{k!}
> $$
> converges absolutely and uniformly for all $|t|\leqslant t_{0}$. 

the book shows absolute convergence. Convergence follows form the fact that all norms on $\mathbb{R}^{n}$ are equivalent and [[LEC ANA2 9#^9279fe]]. 



Use $M$-test. 

[!Definition]
For a matrix $A$, define
$$
e^{ At }:=\sum_{k=0}^{\infty} \frac{A^{k}t^{k}}{k!}
$$

[!proposition]
If $S=PTP^{-1}$, then $e^{S}=Pe^{T}P^{-1}$. 

[!proposition]
If $S, T\in L(\mathbb{R}^{n})$ commute, then $e^{S+T}=e^{ S }e^{ T }$. 

[!Proof]-

If $ST=TS$, then by the binomial theorem
$$
(S+T)^{n}=n!\sum_{j+k=n}\frac{S^{j}T^{k}}{j!k!}.
$$
Therefore, 
$$
e^{ S+T }=\sum_{n=0}^{\infty} \sum_{j+k=n}\frac{S^{j}T^{k}}{j+k}=e^{ S }e^{ T }
$$
[!Corollary]
$(e^{ T })^{-1}=e^{ -T }$.


[!Corollary]
If 
$$
A=\begin{bmatrix}
a & -b  \\
b & a
\end{bmatrix},
$$
then
$$
\begin{align}
e^{ A }=e^{ a }\begin{bmatrix}
\cos b & -\sin b \\
\sin b & \cos b
\end{bmatrix}
\end{align}
$$
Proof: write $\lambda=a+ib$. Write $A^{k}$ in terms of $\text{Re}(\lambda^{k})$ and $\text{Im}(\lambda^{k})$. 

[!Corollary]
If $A=\begin{bmatrix}a & b \\ 0 & 0\end{bmatrix}$, then $e^{ A }=e^{ a }\begin{bmatrix}1 & b \\ 0 & 1\end{bmatrix}$. 

[!Proof]-
Use the fact that $A=aI+B$ and that $aI$ and $B$ commute. 

