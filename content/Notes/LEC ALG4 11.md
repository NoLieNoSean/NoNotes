---
id: "407"
date: 2026-02-13
time: 11:13
tags:
  - ALG4
  - Lecture
---
[!Theorem]
Let $R$ be a PID and $M$ be a fintiely generated torsion $R$-module. Then there exists unique nonzero elements $q_{1}, \dots, q_{s}\in R$ such that $q_{1}\ | \ q_{2}\ | \ \dots\ | \ q_{s}$ and
$$
M\cong \frac{R}{\langle q_{1} \rangle }\oplus\dots \oplus \frac{R}{\langle q_{s} \rangle }.
$$

[!Proof]-

What you'd expect; use [[LEC ALG3 6#^1c5a62]]. Look up uniqueness though. 

---

# Rational canonical form

> [!Definition]
> Let $k$ be a field. The companion matrix of a monic polynomial $x^{n}+\sum_{i=0}^{n-1}a_{i}x^{i}\in k[x]$ is 
> $$
> \begin{bmatrix} 
> 0 & 0 & 0 & \dots & -a_{0} \\
> 1 & 0 & 0 & \dots & -a_{1} \\
> 0 & 1 & 0 & \dots & -a_{2} \\
> \vdots & \vdots & \vdots & \ddots & \vdots \\
> 0 & 0 & 0 & \dots & -a_{n-1} \\
> \end{bmatrix},
> $$
> i.e, the matrix of a linear transformation $T$ in the basis $\{ \overline{1}, \dots, \overline{x}^{n-1} \}$ (...)

[!Definition] Rational canonical form
Let $k$ be field, $V$ a $k$-vector space. Let $T:V\to V$ be $k$-linear. Let $q_{1}(x), \dots, q_{s}(x)\in k[x]$ be such that $q_{1}\ | \ \dots\ | \ q_{s}$ and
$$
V\cong \frac{k[x]}{\langle q_{1} \rangle }\oplus\dots \oplus\frac{k[x]}{\langle q_{s} \rangle }
$$
as a $k[x]$-module. The rational canonical form of $T$ is a block diagonal matrix whose blocks are companion matrices of the summands above. 


---

# Tensor products

@bourbakiAlgebra1974 ch 3, 4

[!Motivation]
Let $M$ be an $R$-module. Suppose $M$ is finitely generated with finitely many relations. 