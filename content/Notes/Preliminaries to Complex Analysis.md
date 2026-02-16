---
id: "370"
date: 2026-01-05
time: 15:33
tags:
  - CANA
  - Processed
---
# Preliminaries

Holomorphicity is the complex analytic version of differentiability. 

> [!Definition] Holomorphicity
> $f:\mathbb{C}\to \mathbb{C}$ is said to be **holomorphic** at a point $z\in \mathbb{C}$ if
> $$
> \lim_{ h \to 0 } \frac{f(z+h)-f(z)}{h}
> $$
> exists. The limit is denoted by $f'(z_{0})$ when it exists, and is called the **derivative** of $f$ at $z_{0}$. $f$ is said to be holomorphic in open $\Omega \subseteq \mathbb{C}$ if $f$ is holomorphic at every point in $\Omega$. 

^f94b35

$f$ is holomorphic at $z_{0}\in \Omega$ iff there exists a complex number $f'(z_{0})$ such that
$$
\begin{align}
f(z_{0}+h)=f(z_{0})+f'(z_{0})h+h\psi(h),
\end{align}
$$

^6e5afc

where $\lim_{ h \to 0 }\psi(h)=0$. 

Some trivialities:

> [!Proposition]
> 1. If $f$ is holomorphic at $z_{0}$, $f$ is continuous at $z_{0}$. 
> 2. If $f$ and $g$ are holomorphic in $\Omega$, then
> 	1. $f+g$ is holomorphic in $\Omega$ and $(f+g)'=f'+g'$.
> 	2. $fg$ is holomorphic in $\Omega$ and $(fg)'=f'g+f'$.
> 	3. If $g(z_{0})\ne 0$, then $f/g$ is holomorphic at $z_{0}$ and $(f/g)'=(f'g-fg')/g^{2}$. 
> 3. If $f:\Omega\to U$ and $g:U\to \mathbb{C}$ are holomorphic, the chain rule holds: $(g\circ f)'=g'(f(z))f'(z)$ for all $z\in \Omega$. 

Proofs are routine.

Holomorphic functions have some really neat properties:
1. Every holomorphic function is infinitely many times complex differentiable ([[Cauchy's Theorem and Its Applications#^58d2c9]]). 
2. It's better: Every holomorphic function is analytic ([[Cauchy's Theorem and Its Applications#^f3eea8]])! Holomorphic and analytic are used synonymously. [[LEC ANA1 32#^3fdabe|Recall]] that for functions of real variables, analytic functions form a strict subset of smooth functions!

## Complex functions as maps $\mathbb{R}^{2}\to \mathbb{R}^{2}$

For $f:\mathbb{C}\to \mathbb{C}$ with $f=u+iv$, define $F:\mathbb{R}^{2}\to \mathbb{R}^{2}$ by $F(x, y)=(u(x, y), v(x, y))$. For $z=x+iy$, we may write $f(x, y)$ in place of $f(z)$ (treating $f$ as a function $\mathbb{R}^{2}\to \mathbb{C}$).

Contrast [[#^f94b35]] for the derivative of $f$ with [[LEC CAL1 16#^054571]] for the derivative of $F$. Clearly, ==complex differentiability differs significantly from the usual notion of multivariable real differentiability==. 

> [!Example]
> The function $f(z)=\overline{z}$ is not holomorphic. Indeed, we have
> $$
> \begin{align}
> \frac{f(z_{0}+h)-f(z_{0})}{h}=\frac{\overline{h}}{h}
> \end{align}
> $$
> which has no limit as $h\to 0$. However, when seen as a function from $\mathbb{R}^{2}\to \mathbb{R}^{2}$, the function $(x, y)\mapsto(x, -y)$ is clearly differentiable (indefinitely, even). 

There is, however, a connection between $f'$ (the complex derivative) and $F'$ (the total derivative): for $z_{0}=z_{0}+iy_{0}$, we have
$$
\begin{align}
f'(z_{0}) & =\lim_{ h_{1} \to 0 } \frac{f(x_{0}+h_{1}, y_{0})-f(x_{0}, y_{0})}{h_{1}} \\
 & = \frac{ \partial f }{ \partial x } (z_{0})\\ \\
f'(z_{0}) & =\lim_{ h_{2} \to 0 } \frac{f(x_{0}, y_{0}+h_{2})-f(x_{0}, y_{0})}{ih_{2}} \\
 & = \frac{1}{i}\frac{ \partial f }{ \partial y } (z_{0}).
\end{align}
$$
Therefore, if $f$ is holomorphic, we have
$$
\begin{align}
\frac{ \partial f }{ \partial x } =\frac{1}{i}\frac{ \partial f }{ \partial y } .
\end{align}
$$
Writing $f=u+iv$ and separating real and imaginary parts, we find that the partials of $u$ and $v$ exist, and they satisfy what are called the **Cauchy-Riemann** equations:
$$
\frac{ \partial u }{ \partial x } =\frac{ \partial v }{ \partial y } \quad \text{and}\quad \frac{ \partial u }{ \partial y } =-\frac{ \partial v }{ \partial x } .
$$

^0c7f0a

> [!Definition]
> $$
> \begin{align}
> \frac{ \partial  }{ \partial z } :=\frac{1}{2}\left( \frac{ \partial  }{ \partial x } +\frac{1}{i}\frac{ \partial  }{ \partial y }  \right)\quad \text{and}\quad \frac{ \partial  }{ \partial \overline{z} } :=\frac{1}{2}\left( \frac{ \partial  }{ \partial x } -\frac{1}{i}\frac{ \partial  }{ \partial y }  \right) .
> \end{align}
> $$

> [!Proposition]
> If $f=u+iv$ is holomorphic at $z_{0}$, then 
> $$
> \begin{align}
> \frac{ \partial f }{ \partial \overline{z} } (z_{0})=0 \quad \text{and}\quad f'(z_{0})=\frac{ \partial f }{ \partial z } (z_{0})=2\frac{ \partial u }{ \partial z } (z_{0}).
> \end{align}
> $$
> Also, the real-variate function $F(x, y)=(u(x, y), v(x, y))$ is differentiable, and
> $$
> \begin{align}
> \det F'(x_{0}, y_{0})=|f'(z_{0})|^{2}.
> \end{align}
> $$
> 
> 
> > [!Proof]-
> > 
> > The first two results are clear. Let $H=(h_{1}, h_{2})$ and $h=h_{1}+ih_{2}$. Using [[#^0c7f0a]],
> > $$
> > \begin{align}
> > F'(x_{0}, y_{0})(H)=\left( \frac{ \partial u }{ \partial x } -i\frac{ \partial u }{ \partial y }  \right) (h_{1}+ih_{2})=f'(z_{0})h,
> > \end{align}
> > $$
> > where a complex number has been identified with the pair of real and imaginary parts. Using [[#^6e5afc]], 
> > $$
> > \begin{align}
> >    & f(z_{0}+h)= f(z_{0})+f'(z_{0})h+h\psi(h) \\
> >   & \implies  F(x_{0}+h_{1}, x_{0}+h_{2})=F(x_{0}, y_{0})+F'(x_{0}, y_{0})(h_{1}, h_{2})+|h|\underbrace{ \left( \frac{h_{1}\psi_{1}(h)-h_{2}\psi_{2}(h)}{|h|}, \frac{h_{1}\psi_{2}(h)+h_{2}\psi_{1}(h)}{|h|} \right) }_{ \to 0\text{ as }h\to 0 }.
> > \end{align}
> > $$
> > Thus, $F$ is differentiable. The last result is a routine application of [[#^0c7f0a]].
> > 
> 

^ca85e1

> [!Remark]
> In [[#^ca85e1]], $f$ being holomorphic at $z_{0}$ guarantees that the total derivative of $F$ exists at $t_{0}$, but ==does not imply that the partials are continuous== (so [[LEC CAL1 19#^c71feb]] cannot be used in the proof). However, $f$ being holomorphic in a neighborhood of $z_{0}$ does imply the continuity of partials. 

What follows is an attempt at a "converse" of [[#^ca85e1]] (It is actually an iff characterization, but we do not have the tools to prove the reverse implication yet). 

> [!Theorem]
> Suppose $f=u+iv$ is a complex-valued funciton defined on an open set $\Omega$. If $u, v\in C^{1}$and satisfy the [[#^0c7f0a|Cauchy-Riemann equations]] on $\Omega$, then $f$ is holomorphic on $\Omega$ and $f'(z)=\frac{ \partial f }{ \partial z }$. 

## Power series

Recall [[LEC ANA1 31#^2bd39d]] and [[LEC ANA1 31#^2ff1e3]].

The complex analog of [[LEC ANA1 32#^3ac71d]]:

> [!Theorem] @steinComplexAnalysis2003 1.2.6
> The power series $f(z)=\sum_{n=0}^{\infty}a_{n}z^{n}$ defines a holomorphic function in its disc of convergence. The derivative of $f$ is also a power series obtained by differentiating term by term the series for $f$. Moreover, $f'$ has the same radius of convergence as $f$. 

^0db182

This tells us that an analytic function on $\Omega$ is also holomorphic on $\Omega$. We will see ([[Cauchy's Theorem and Its Applications#^f3eea8]]) that the converse is true, too.
## Integration along curves

> [!Definition]
> Given a smooth curve $\gamma$ in $\mathbb{C}$ parameterized by $z:[a, b]\to \mathbb{C}$, and $f$ a continuous function on $\gamma$, we define the **integral of $f$ along $\gamma$** by
> $$
> \int_{\gamma}f(z)dz:=\int_{a}^{b} f(z(t))z'(t) \, dt.
> $$
> The **length of $\gamma$** is defined to be
> $$
> \int_{a}^{b} |z'(t)| \, dt.
> $$
> It is easily shown that these definitions are independent of the parameterization $z$. 

> [!Proposition]
> Let $f$ be continuous and $\gamma$ be piecewise smooth. 
> $$
> \begin{align}
>  1.  \quad &  \int_{\gamma}(\alpha f(z)+\beta g(z))dz=\alpha \int_{\gamma}f(z)dz+\beta \int_{\gamma}g(z)dz. \\\\
>  2.  \quad &  \int_{\gamma}f(z)dz=-\int_{\gamma^{-}}f(z)dz. \\\\
>   3.  \quad & \left| \int_{\gamma}f(z)dz \right|  \leqslant \sup_{z\in\gamma}|f(z)|\cdot\text{length}(\gamma).
> \end{align}
> $$

> [!Lemma]
> Let $F$ be holomorphic in $\Omega$, and $z:[a, b]\to \mathbb{C}$ be smooth. Then, 
> $$
> \frac{d}{dt} F(z(t))=F'(z(t))z'(t).
> $$
> 
> > [!Proof]-
> > 
> > When $F=u+iv$ is seen as a function form $\mathbb{R}^{2}$ to $\mathbb{R}^{2}$ and $z=z_{1}+iz_{2}$ as a function from $[a, b]$ to $\mathbb{R}^{2}$, we can use [[LEC CAL1 17#^67af50|the multivariable chain rule]] to write
> > $$
> > \begin{align}
> > \frac{d}{dt} F(z(t)) & ={\begin{bmatrix}
> > \displaystyle\frac{ \partial u }{ \partial x }(z(t))  & \displaystyle\frac{ \partial u }{ \partial y } (z(t)) \\
> > \displaystyle\frac{ \partial v }{ \partial x } (z(t)) & \displaystyle\frac{ \partial v }{ \partial y } (z(t))
> > \end{bmatrix}}\begin{bmatrix}
> > z_{1}'(t) \\
> > z_{2}'(t)
> > \end{bmatrix} \\
> > \end{align}
> > $$
> > Using [[#^0c7f0a]], we can see that the RHS above is equal to
> > $$
> > \left( \frac{ \partial u }{ \partial x } (z(t)) +\frac{1}{i}\frac{ \partial u }{ \partial y } (z(t))\right)(z_{1}'(t)+iz_{2}'(t)),
> > $$
> > which is equal to $F'(z(t))z'(t)$ by [[#^ca85e1]]. 
> 

^c3084d

> [!Theorem]
> If a continuous function $f$ has a primitive $F$ in $\Omega$, and $\gamma$ is a curve in $\Omega$ that begins at $w_{1}$ and ends at $w_{2}$, then
> $$
> \int_{\gamma}f(z)dz=F(w_{1})-F(w_{2}).
> $$
> 
> 
> > [!Proof]-
> > 
> > If $\gamma$ is smooth, the proof is a simple application of [[#^c3084d]] and [[LEC ANA1 28#^88e00c|the fundamental theorem of calculus]]. Indeed, if $z(t):[a, b]\to \mathbb{C}$ is a parameterization for $\gamma$, then $z(a)=w_{1}$ and $z(b)=w_{2}$, and we have
> > $$
> > \begin{align}
> > \int_{\gamma}f(z)\,dz & =\int_{a}^{b} f(z(t))z'(t) \, dt \\
> >   & =\int_{a}^{b} F'(z(t))z'(t) \, dt \\
> >   & =\int_{a}^{b} \frac{d}{dt} F(z(t)) \, dt  \\
> >  & = F(z(b))-F(z(a)).
> > \end{align}
> > $$
> > If $\gamma$ is piecewise smooth, then we get a telescoping sum, with the end result unchanged. 
> 


Explore connections to [[LEC CAL2 9#^05ab36]]. 

> [!Corollary]
> If $\gamma$ is a closed curve in an open set $\Omega$, and $f$ is continuous and has a primitive in $\Omega$, then
> $$
> \int_{\gamma}f(z)dz=0.
> $$

^5b02bc

> [!Corollary]
> If $f$ is holomorphic in a (connected) region $\Omega$ and $f'=0$, then $f$ is constant. 

^f36590

