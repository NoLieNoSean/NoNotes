---
id: "450"
date: 2026-04-25
time: 12:46
tags:
  - DEQN
---
# 1-parameter groups of symmetries

> [!Theorem] Lie
> Assume $\varphi_{t}$ is a $1$-parameter subgroup leaving 
> $$
> \frac{dy}{dx} = \frac{Y(x, y)}{X(x, y)}
> $$
> stable. Let $\Phi_{p}=\left. \frac{d}{dt}\varphi_{t}(p) \right|_{t=0}$ be given by
> $$
> \Phi_{p}=\xi(x, y)\frac{ \partial  }{ \partial x } +\eta(x, y) \frac{ \partial  }{ \partial y } .
> $$
> Then there exists a function $U(x, y)$ such that
> $$
> \frac{ \partial U }{ \partial x } =\frac{-Y}{X\eta-Y\xi}, \quad \frac{ \partial U }{ \partial y } =\frac{X}{X\eta-Y\xi},
> $$
> with $U(x, y)=c$ being solutions to the differential equation.  

The statement is equivalent to the statement that
$$
\frac{Xdy-Ydx}{X\eta-Y\xi}
$$
is an exact differential
$$
\frac{ \partial U }{ \partial x } dx+\frac{ \partial U }{ \partial y } dy
$$
or equivalently that $(X\eta-Y\xi)^{-1}$ is an *integrating factor* for the equation
$$
Xdy-Ydx=0.
$$

# Multi-parameter groups

Consider a transformation group of $\mathbb{R}^{n}$ depending effectively on $r$ parameters:
$$
T_{\mathbf{t}}:(x_{1}, \dots, x_{n})\to(x_{1}', \dots, x_{n}'),
$$
where
$$
x_{i}'=f_{i}(x_{1}, \dots, x_{n}; t_{1}, \dots, t_{r})
$$
and 
$$
T=I \text{ for }(t_{1}, \dots, t_{r})=(0, \dots, 0).
$$
If $T_{\mathbf{t}_{1}}$ and $T_{\mathbf{t}_{2}}$ are two transformations, then
$$
T_{\mathbf{t}_{1}}T_{\mathbf{t}_{2}}=T_{\varphi(\mathbf{t}_{1}, \mathbf{t}_{2})},
$$
where $\varphi$ is a smooth function of $\mathbf{t}_{1}$ and $\mathbf{t}_{2}$. Generalizing $\Phi_{p}$ above, define the vector fields on $\mathbb{R}^{n}$ for $k=1$ to $r$:
$$
V_{k}=\left( \frac{ \partial T }{ \partial t_{k} } \right)_{\mathbf{t}=0}= \sum_{i=1}^{n} \left( \frac{ \partial f_{i} }{ \partial t_{k} }  \right)_{\mathbf{t}=0}\frac{ \partial  }{ \partial x_{i} } .
$$
Now if $X$ and $Y$ are any vector fields on $\mathbb{R}^{n}$ they map $C^{\infty}(\mathbb{R}^{n}, \mathbb{R})$ into itself, so $X\circ Y$ and $Y\circ X$ are well defined maps of $C^{\infty}(\mathbb{R}^{n}, \mathbb{R})$ into itself. So is the bracket
$$
[X, Y]=X\circ Y-Y\circ X.
$$
Since $[X, Y]$ is easily seen to involve only first order derivatives (the second derivatives cancel), so $[X, Y]$ is another vector field. 

If we put $\mathfrak{g}=\left\{  X=\sum_{p=1}^{r}a_{p}V_{p}  :a_{p}\in \mathbb{R}\right\}$, one can show that the following relations are satisfied:
$$
\begin{align}
 & [X, Y]=-[Y, X] \\
 & [X, [Y, Z]]+[Y, [Z, X]]+[[Z, X], Y ]=0. 
\end{align}
$$
A vector space with a rule of composition $(X, Y)\mapsto[X, Y]$ satisfying these two properties is called a Lie algebra. Thus $\mathfrak{g}$ is a Lie algebra. 

> [!Definition]
> Let a system of ODEs be represented by the vector field $A$. A $r$-parameter group is a group of symmetries of the system if every generator $V\in \mathfrak{g}$ satisfies
> $$
> [V, A]=\lambda(x, y)A
> $$
> for some smooth scalar function $\lambda$. Geometrically, this means the flow of $V$ maps integral curves of $A$ to other integral curves of $A$. 