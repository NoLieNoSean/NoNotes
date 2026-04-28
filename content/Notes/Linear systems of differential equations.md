---
id: "384"
date: 2026-01-13
time: 10:16
tags:
  - DEQN
---
Recall that the general solution for the first-order linear differential equation $\dot{x}=ax$ is $x(t)=ce^{ at }$. 

> [!Definition]
> 1. An **ordinary DE** is an equation containing an unknown function of one variable real/complex variable $x$ and its derivatives. 
> 2. A **Linear DE** is a DE that is linear in the unknown function and its derivatives. 
> 3. The **order** of a DE is the highest order of derivative of the unknown function that appears in the DE. 
> 4. A system of DEs is said to be **uncoupled** if each DE depends on only one variable. 
> 5. A system of DEs is said to be **autonomous** if there is no explicit dependence on the independent variable (for example, time). 
> 6. Initial conditions which result in a constant solution are called **equilibrium points**. 
> 

# Exponentials of operators

A system of linear first order differential equations can be expressed as $\dot{\mathbf{x}}=A\mathbf{x}$. Solving this system is [[Linear systems of differential equations#^4f5916|equivalent]] to finding the "exponential matrix" $e^{ At }$, which we will do now. 

[[LEC CAL1 3#Topological properties of linear maps|Recall]] the properties of the operator norm. 

> [!Theorem]
> Given $T\in \mathcal{L}(\mathbb{R}^{n})$ and $t_{0}> 0$, the series
> $$
> \sum_{k=0}^{\infty} \frac{T^{k}t^{k}}{k!}
> $$
> is absolutely and uniformly convergent for all $|t|\leqslant t_{0}$. 

The exponential of the linear operator $T$ is defined by the absolutely convergent series
$$
e^{T}:=\sum_{k=0}^{\infty} \frac{T^{k}}{k!}.
$$

> [!Definition]
> Let $A$ be an $n\times n$ matrix. Then for $t\in \mathbb{R}$, 
> $$
> e^{ At }:=\sum_{k=0}^{\infty} \frac{A^{k}t^{k}}{k!}.
> $$

> [!Proposition]
> If $P$ and $T$ are linear transformations on $\mathbb{R}^{n}$ and $S=PTP^{-1}$, then $e^{ S }=Pe^{ T }P^{-1}$. 

^2631a8

> [!Corollary]
> If $A=P\,\text{diag}[\lambda_{j}]\,P^{-1}$, then $e^{ At }=P\,\text{diag}[e^{ \lambda_{j}t }]P^{-1}$. 

^5d7c66

> [!Proposition]
> If $S$ and $T$ are linear transformations on $\mathbb{R}^{n}$ which commute, then $e^{ S+T }=e^{ S }e^{ T }$. 

> [!Corollary]
> If $T$ is a linear transformation on $\mathbb{R}^{n}$, the inverse of the linear transformation $e^{ T }$ is given by $(e^{ T })^{-1}=e^{ -T }$. 

> [!Corollary]
> 1. If $A=\begin{bmatrix}a & -b \\b & a\end{bmatrix}$, then $e^{ A }=e^{ a }\begin{bmatrix}\cos b & -\sin b \\\sin b & \cos b\end{bmatrix}$. 
> 2. If $A=\begin{bmatrix}a & b \\ 0 & a \end{bmatrix}$, then $e^{ A }=e^{ a }\begin{bmatrix}1 & b \\ 0 & 1\end{bmatrix}$. 

^75eee3

> [!Proposition]
> Let $A$ be any $2\times 2$ matrix. There exists an invertible $2\times 2$ matrix $P$ (whose columns consist of generalized eigenvectors of $A$) such that the matrix $B=P^{-1}AP$ has one of the following forms:
> $$
> B=\begin{bmatrix}
> \lambda &  \\
>  & \mu
> \end{bmatrix}, \quad 
> B=\begin{bmatrix}
> \lambda & 1 \\
>  & \lambda
> \end{bmatrix}, \quad \text{or}\quad 
> B=\begin{bmatrix}
> a & -b \\
> b & a
> \end{bmatrix}.
> $$
> 

^4de480

We can now compute the matrix $e^{ At }$ for any $2\times {2}$ matrix $A$. Let $B$ be given by [[Linear systems of differential equations#^4de480]]. Then, by [[Linear systems of differential equations#^5d7c66]] and [[Linear systems of differential equations#^75eee3]],  
$$
e^{ Bt }=\begin{bmatrix}
e^{ \lambda t } & \\
 & e^{ \mu t }
\end{bmatrix}, \quad 
e^{ Bt }=e^{ \lambda t }\begin{bmatrix}
1 & t \\
 & 1 
\end{bmatrix},\quad \text{or}\quad 
e^{ Bt }=e^{ at }\begin{bmatrix}
\cos bt & -\sin bt \\
\sin bt & \cos bt
\end{bmatrix}.
$$
By [[Linear systems of differential equations#^2631a8]], $e^{ At }$ is given by
$$
e^{ At }=Pe^{ Bt }P^{-1}.
$$

---

# The fundamental theorem for linear systems

> [!Lemma]
> Let $A$ be a square matrix, then
> $$
> \frac{d}{dt} e^{ At }=Ae^{ At }.
> $$

> [!Theorem] The fundamental theorem for linear systems
> Let $A$ be an $n\times n$ matrix. Then for a given $\mathbf{x}_{0}\in \mathbb{R}^{n}$, the initial value problem
> $$
> \begin{align}
> \dot{\mathbf{x}}=A\mathbf{x}, \quad \mathbf{x}(0)=\mathbf{x}_{0}
> \end{align}
> $$
> has a unique solution by
> $$
> \mathbf{x}(t)=e^{ At }\mathbf{x}_{0}.
> $$
> 

^4f5916

---

# Computing exponential matrices

Complex eigenvalues:

> [!Theorem] 
> If the $2n\times 2n$ real matrix $A$ has $2n$ distinct complex eigenvalues $\lambda_{j}=a_{j}+ib_{j}$ and $\overline{\lambda}_{j}=a_{j}-ib_{j}$ and corresponding eigenvectors $\mathbf{w}_{j}=\mathbf{u}_{j}+i\mathbf{v}_{j}$ and $\overline{\mathbf{w}}_{j}=\mathbf{u}_{j}-i\mathbf{v}_{j}$, then $\{ \mathbf{v}_{1}, \mathbf{u}_{1}, \dots, \mathbf{v}_{n}, \mathbf{u}_{n} \}$ is a basis for $\mathbb{R}^{2n}$ and the matrix
> $$
> P=\begin{bmatrix}
> \mathbf{v}_{1} & \mathbf{u}_{1} & \mathbf{v}_{2} & \mathbf{u}_{2} & \dots & \mathbf{v}_{n} & \mathbf{u}_{n}
> \end{bmatrix}
> $$
> is invertible and 
> $$
> P^{-1}AP=\text{diag}\begin{bmatrix}
> a_{j} & -b_{j} \\
> b_{j} & a_{j}
> \end{bmatrix}.
> $$

Multiple real eigenvectors

> [!Theorem]
> Let $A$ be a real $n\times n$ matrix with real eigenvalues $\lambda_{1}, \dots, \lambda_{n}$ repeated according to their multiplicity. Then there exists a basis of generalized eigenvectors for $\mathbb{R}^{n}$. If $\{ \mathbf{v}_{1}, \dots, \mathbf{v}_{n} \}$ is any basis of generalized eigenvectors for $\mathbb{R}^{n}$, the matrix $P=\begin{bmatrix}\mathbf{v}_{1} & \dots & \mathbf{v}_{n} \end{bmatrix}$ is invertible, 
> $$
> A=S+N
> $$
> where $P^{-1}SP=\text{diag}[\lambda_{j}]$, and $N=A-S$ is nilpotent of order $k\leqslant n$, and $S$ and $N$ commute. 

Multiple complex eigenvalues

> [!Theorem]
> Let $A$ be a real $2n\times 2n$ matrix with complex eigenvalues $\lambda_{j}=a_{j}+ib_{j}$ and $\overline{\lambda}_{j}=a_{j}-ib_{j}$ for $j=1, \dots, n$. Then there exist generalized eigenvectors $\mathbf{w}_{j}=\mathbf{u}_{j}+i\mathbf{v}_{j}$ and $\overline{\mathbf{w}}_{j}=\mathbf{u}_{j}-i\mathbf{v}_{j}$ for $i=1, \dots, n$ such that $\{ \mathbf{v}_{1}, \mathbf{u}_{1}, \dots, \mathbf{v}_{n}, \mathbf{u}_{n} \}$ is a basis for $\mathbb{R}^{2n}$. For any such basis, the matrix $P=\begin{bmatrix}\mathbf{v}_{1} & \mathbf{u}_{1} & \dots & \mathbf{v}_{n} & \mathbf{u}_{n} \end{bmatrix}$ is invertible, and
> $$
> A=S+N
> $$
> where
> $$
> P^{-1}SP=\text{diag}\begin{bmatrix}
> a_{j} & -b_{j} \\
> b_{j} & a_{j}
> \end{bmatrix},
> $$
> the matrix $N=A-S$ is nilpotent of order $k\leqslant 2n$, and $S$ and $N$ commute. 

---

# Stability theory

Let $\mathbf{w}_{j}=\mathbf{u}_{j}+i\mathbf{v}_{j}$ be a generalized eigenvector of the real matrix $A$ corresponding to an eigenvalue $\lambda_{j}=a_{j}+ib_{j}$. Note that if $b_{j}=0$ then $\mathbf{v}_{j}=0$. Let
$$
B=\{ \mathbf{u}_{1}, \dots, \mathbf{u}_{k}, \mathbf{u}_{k+1}, \mathbf{v}_{k+1}, \dots, \mathbf{u}_{m}, \mathbf{v}_{m} \}
$$
be a basis of $\mathbb{R}^{n}$. 

> [!Definition]
> Let $\lambda_{j}=a_{j}+ib_{j}$, $\mathbf{w}_{j}=\mathbf{u}_{j}+i\mathbf{v}_{j}$ be as described above. Then
> $$
> \begin{align}
> E^{s} & =\text{span}\{ \mathbf{u}_{j}, \mathbf{v}_{j}:a_{j}< 0 \} \\
> E^{c} & =\text{span}\{ \mathbf{u}_{j}, \mathbf{v}_{j}:a_{j}=0 \} \\
> E^{u} & =\text{span}\{ \mathbf{u}_{j}, \mathbf{v}_{j}:a_{j}> 0 \}.
> \end{align}
> $$
> 

## Flow of a linear system

> [!Definition]
> 1. By the fundamental theorem, the solution to the IVP associated with $\dot{\mathbf{x}}=A\mathbf{x}$ is given by $\mathbf{x}(t)=e^{ At }\mathbf{x}_{0}$. The set of mappings $e^{ At }:\mathbb{R}^{n}\to \mathbb{R}^{n}$ is called the **flow** of the linear system. 
> 2. If all the eigenvalues of the $n\times n$ matrix $A$ have nonzero real part, then the flow $e^{ At }:\mathbb{R}^{n}\to \mathbb{R}^{n}$ is called a **hyperbolic flow** and the linear system is called a **hyperbolic linear system**. 
> 3. A subspace $E\subseteq \mathbb{R}^{n}$ is said to be **invariant** with respect to the flow $e^{ At }:\mathbb{R}^{n}\to \mathbb{R}^{n}$ if $e^{ At }E\subseteq E$ for all $t\in \mathbb{R}$. 

> [!Theorem] @perkoDifferentialEquationsDynamical2009 1.9.1
> Let $A$ be a real $n\times n$ matrix. Then
> $$
> \mathbb{R}^{n}=E^{s}\oplus E^{u}\oplus E^{c}.
> $$
> Furthermore, $E^{s}$, $E^{u}$, and $E^{c}$ are invariant with respect to the flow $e^{ At }$ of the system $\dot{\mathbf{x}}=A\mathbf{x}$. 

---

# Nonhomogeneous linear systems

We solve the nonhomogeneous linear system
$$
\dot{\mathbf{x}}=A\mathbf{x}+\mathbf{b}(t)
$$
where $A$ is an $n\times n$ matrix and $\mathbf{b}(t)$ is a continuous vector valued function. 

> [!Definition]
> A **fundamental matrix solution** of 
> $$
> \dot{\mathbf{x}}=A\mathbf{x}
> $$
> is any nonsingular $n\times n$ matrix function $\Phi(t)$ that satisfies
> $$
> \Phi'(t)=A\Phi(t)\quad \forall t\in \mathbb{R}.
> $$

For the system $\dot{\mathbf{x}}=A\mathbf{x}$, note that $\Phi(t)=e^{ At }$ is a fundamental matrix solution satisfying $\Phi(0)=I$. Moreover, any fundamental matrix solution $\Phi(t)$ is given by $\Phi(t)=e^{ At }C$ for some invertible matrix $C$ [^1]. 

[^1]: Consider $e^{ -At }\Phi(t)$. Note that $\Phi(t)e^{ -At }$ doesn't work, since $A$ and $\Phi(t)$ do not necessarily commute!

Once we have found a fundamental matrix solution, it is easy to solve the nonhomogeneous system. 

> [!Theorem]
> If $\Phi(t)$ is any fundamental matrix solution of $\dot{\mathbf{x}}=A\mathbf{x}$, then the solution of the nonhomogeneous linear system $\dot{\mathbf{x}}=A\mathbf{x}+\mathbf{b}(t)$ and the initial condition $\mathbf{x}(0)=\mathbf{x}_{0}$ is unique and is given by
> $$
> \mathbf{x}(t)=\Phi(t)\Phi ^{-1}(0)\mathbf{x}_{0}+\int_{0}^{t} \Phi(t)\Phi ^{-1}(\tau)\mathbf{b}(\tau) \, d\tau.
> $$

> [!Corollary]
> With $\Phi(t)=e^{ At }$, the solution of the nonhomogeneous linear system $\dot{\mathbf{x}}=A\mathbf{x}+\mathbf{b}(t)$ has the form
> $$
> \mathbf{x}(t)=e^{ At }\mathbf{x}_{0}+e^{ At }\int_{0}^{t} e^{ -A\tau }\mathbf{b}(\tau) \, d\tau.
> $$
> 
