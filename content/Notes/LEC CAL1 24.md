---
id: "193"
---

## Extremum problems with side conditions

> [!Theorem]
> Let $f$ be a real valued function such that $f\in C'$ on an open set $S$ in $\mathbb{R}^{n}$. Let $g_{1}, \dots, g_{m}$ be $m$ real valued functions such that $\mathbf{g}=(g_{1}, \dots, g_{m})\in C_{1}$ on $S$, and assume that $m\leq n$. Let $X_{0}$ be that subset of $S$ on which $\mathbf{g}$ vanishes, that is, 
> $$
> X_{0}=\{ \mathbf{x}\ | \  \mathbf{x}\in S, \mathbf{g}(\mathbf{x})=\mathbf{0} \}.
> $$
> Assume that $\mathbf{x}_{0}\in X_{0}$ and assume that there exists an $n$-ball $B(\mathbf{x}_{0})$ such that $f(\mathbf{x})\leq f(\mathbf{x}_{0})$ for all $\mathbf{x}\in X_{0}\cap B(\mathbf{x}_{0})$ or such that $f(\mathbf{x})\geq f(\mathbf{x}_{0})$ for all $\mathbf{x}\in X_{0}\cap B(\mathbf{x}_{0})$. Assume also that the $m$-rowed determinant $[D_{j}g_{i}(\mathbf{x}_{0})]\ne 0$. Then there exist $m$ real numbers $\lambda_{1}, \dots, \lambda_{m}$ such that the following $n$ equations are satisfied:
> $$
> D_{r}f(\mathbf{x}_{0})+\sum_{k=1}^{m} \lambda_{k}D_{r}g_{k}(\mathbf{x}_{0})=0\quad(r=1, \dots, n).
> $$


[!Example]
Let $f:\mathbb{R}^{n}\to \mathbb{R}$ be a symmetric quadratic form given by 
$$
f(x_{1}, \dots, x_{n})=\sum_{1\leq i, j\leq n} a_{i, j}x_{i}x_{j}.
$$
Show that the maximum value of $f$ on $\{ x\in \mathbb{R}^{n}\ | \ \lVert \mathbf{x} \rVert=1 \}$ are eigenvalues of the matrix $[a_{i,j}]_{1\leq i, j\leq n}$.

Here, only a single constraint is provided: $g(\mathbf{x})=\lVert \mathbf{x} \rVert-1=0$. Note that the level set $L=\{ x\in \mathbb{R}^{n}\ | \ g(\mathbf{x})=0 \}$ is compact in $\mathbb{R}^{n}$. $f$ is a continuous function, so the restriction of $f$ to $L$ is continuous. From the extreme value theorem, $f$ must attain a maximum and a minimum value on $L$. Now,
$$
\begin{align}
f'(\mathbf{x}) & =\begin{bmatrix}
\sum_{i=1}^{n} a_{1,i}x_{i}+\sum_{i=1}^{n} a_{i, 1}x_{i} \\
\vdots \\
\sum_{i=1}^{n} a_{n,i}x_{i}+\sum_{i=1}^{n} a_{i, n}x_{i}
\end{bmatrix}^{T} \\

 & =(A\mathbf{x}+A^{T}\mathbf{x})^{T} \\
 & =(2A\mathbf{x})^{T}.\\\\\\ 
g'(x) & =2\mathbf{x}^{T}
\end{align}
$$
Clearly, $f$ is a $C^{1}$ mapping, and so is $g$. For $x_{1}\ne 0$, $\det[2x_{1}]\ne 0$. Let $\mathbf{p}$ be the point on $L$ where $f$ attains its maximum value. Then, there exists $\lambda$ such that
$$
\begin{align}
 & 2A\mathbf{p}=\lambda 2\mathbf{p} \\
 \implies & A\mathbf{p}=\lambda \mathbf{p}
\end{align}
$$
So, $\lambda$ is an eigenvalue of $A$. Now, 
$$
f(\mathbf{p})=\mathbf{p}^{T}A\mathbf{p}=\lambda\mathbf{p}^{T}\mathbf{p}=\lambda.
$$
