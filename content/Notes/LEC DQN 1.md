---
id: "384"
date: 2026-01-13
time: 10:16
tags:
  - DQN
  - Lecture
---
Recall that the general solution for the first-order linear differential equation $\dot{x}=ax$ is $x(t)=ce^{ at }$. 

[!Definition]
1. An **ordinary DE** is an equation containing an unknown function of one variable real/complex variable $x$ and its derivatives. 
2. A **Linear DE** is a DE that is linear in the unknown function and its derivatives. 
3. The **order** of a DE is the highest order of derivative of the unknown function that appears in the DE. 
4. A system of DEs is said to be **uncoupled** if each DE depends on only one variable. 
5. A system of DEs is said to be **autonomous** if there is no explicit dependence on the independent variable (for example, time). 
6. Initial conditions which result in a constant solution are called **equilibrium points**. 
7. 








An example:
- $x'=ax$. 
- find soln by integration: $x(t)=k e^{ at }$. 
- If $u(t)$ is any solution, then $\frac{d}{dt}(u(t)e^{ -at })=0$ (work this out), so $u(t)e^{ -at }$ must be a constant $k$. Thus, $x(t)=k e^{ at }$ is the only possible family of solutions. 
- Fit in initial conditions: $u(t)=u(0)e^{ at }$. Since $u$ can by translated by any $t_{0}$, was can assume WLOG that the "initial condition" is at $t=0$. 
- When $k=0$, $x(t)=0$. These are called *equilibrium points* (where the solution becomes constant). 

$$
x'=ax\left( 1-\frac{x}{N} \right)
$$
- Population small: rate $\propto ax$, the size of the population
- Population exceeds $N$, the rate becomes negative. 
- Can assume $N=1$ after normalizing $x$ by $N$. 
- This reduces the dependence of the RHS on just $a$. RHS usually denoted by $f_{\text{parameters}}(x)$, in this case $f_{a}(x)$. 
- This is an example of a *first order, autonomous(RHS only function of $x$, no explicit dependence on $t$), non-linear* DE. 
- Solution:
$$
\begin{align}
\int \frac{dx}{x(1-x) } & =\int adt \\
x(t)= \frac{ke^{ at }}{1+ke^{ at }}
\end{align}
$$
we have $k=\frac{x(0)}{1-x(0)}$. 
$$
\begin{align}
x(t)=\frac{x(0)e^{ at }}{1-x(0)+x(0)e^{ at }}
\end{align}
$$
equilibria are attained at $x(0)=1$ ($x(t)=1$) and $x(0)=0$ ($x(t)=0$). 

---

# Systems of Differential equations

$$
\begin{align}
x_{1}' & =f_{1}(t, x_{1}, \dots, x_{n}) \\
 & \vdots \\
x_{n}' & =f_{n}(t, x_{1}, \dots, x_{n})
\end{align}
$$
Assume $f_{i}\in C^{\infty}$ for all $i$ (partial derivatives of all orders exist and are continuous). In vector notation, $X'=F(t, X)$. If autonomous, we have $X'=F(X)$. $X_{0}$ such that $F(X_{0})=0$ are equilibrium points, and correspond to solutions $X(t)=X_{0}$. 

We can write second-order diff equations in this form. Consider $mx''+bx'+kx=0$. This can be written as
$$
\begin{align}
x' & =y \\
y' & =-bx-ay \\
 \\
\begin{bmatrix}
x' \\
y'
\end{bmatrix} & =\begin{bmatrix}
0 & 1 \\
-b & -a
\end{bmatrix}\begin{bmatrix}
x \\
y
\end{bmatrix}
\end{align}
$$

Uncoupled linear systems.
