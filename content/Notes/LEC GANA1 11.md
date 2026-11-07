---
id: "583"
date: 2026-10-09
time: 15:36
tags:
  - GANA1
  - Lecture
desc: Bounded operators
---


> [!Exercise] Assignment
> Let $X$ be a compact metric space. Consider $(C(X), \lVert \cdot \rVert)$. For fixed $x_{0}\in X$. Define $\mathcal{M}=\{ f\in C(X):f(x_{0})=0 \}$. Show that $\mathcal{M}$ is closed. Show that $C(X)/\mathcal{M}\cong(\mathbb{C},\lVert \cdot \rVert)$ as Banach spaces. 

> [!Exercise] Assignment
> Let $X_{0}$ be a NLS. Show that there exists a Banach space $X$ and Linear, one dimensional, and norm preserving embedding $X_{0}\hookrightarrow X$ such that $X_{0}$ is dense in $X$. If $X'$ also satisfies the same conditions, $X\cong X'$ as Banach spaces. 

---
# Bounded operators

Recall [[LEC CAL1 3#^b01b34]]. 


[!Example]
Let $T\in M_{n, m}(\mathbb{C})$. Then, $T^{*}T$ is self adjoint. By [[Structure of operators in inner product spaces#^7e0cb4|the spectral theorem for self-adjoint operators]], there exists a unitary matrix $U$ (i.e., $U^{*}U=I$) such that $T^{*}T=UDU^{*}$, where $D=\text{diag}(\lambda_{1}, \dots, \lambda_{m})$ is a real diagonal matrix. Let $\lambda=\text{max}\{ \lambda_{1} , \dots, \lambda_{m}\}$. 

We'll compute $\lVert T \rVert$. 
$$
\begin{align}
\sup _{\lVert x \rVert \leqslant  1}\lVert Tx \rVert ^{2} & = \sup \langle Tx, Tx \rangle  \\
 & =\sup \langle T^{*}Tx, x \rangle  \\
 & =\sup \langle T^{*}TUx, Ux \rangle  \\
 & =\sup \langle U^{*}T^{*}TUx, x \rangle \\
 & =\sup \langle Dx, x \rangle   \\
 & =\sup \sum\lambda_{k}|x_{k}^{2}| \\
 & =\lambda,
\end{align}
$$
where the last equality can be obtained using [[LEC DGT 3#^b63347|Lagrange multipliers]]. 




