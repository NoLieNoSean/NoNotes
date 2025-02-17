---
tags:
  - PROB
  - Lecture
date: 2025-02-28
time: 15:30
---
Note that if $X$ is a random variable on $(\Omega, \mathcal{F}, P)$ and $f:\mathbb{R}\to \mathbb{R}$ is any function, then $f\circ X$ is also a random variable, since $( f\circ X=c )=\bigcup_{x\in f^{-1}(c)}(X=x)$.

## Random vector

> [!Definition]
> Let $(\Omega, \mathcal{F}, P)$ be a probability space. $\mathbf{X}:\Omega\to \mathbb{R}^{n}$ is called a *random vector* if $|\mathrm{Im}~\mathbf{X}|\leq\aleph_{0}$ and $\{ \omega\in \Omega\ | \ \mathbf{X}(\omega)=\mathbf{x} \}\in \mathcal{F}$ for all $\mathbf{x}\in \mathbb{R}^{n}$.

If $f:\mathbb{R}^{n}\to \mathbb{R}^{m}$ is any function and $\mathbf{X}:\Omega\to \mathbb{R}^{n}$ is a random vector, $f\circ\mathbf{X}$ is also a random vector. In particular, if $m=1$, $f\circ\mathbf{X}$ is a random variable. 

> [!Theorem]
> Let $\mathbf{X}:\Omega\to \mathbb{R}^{n}$, $\omega\mapsto(X_{1}(\omega), X_{2}(\omega), \dots, X_{n}(\omega))$ where $X_{i}:\Omega\to \mathbb{R}$. $\mathbf{X}$ is a random vector iff each $X_{i}$ is a random variable.

> **Proof of $\implies$**
> Let $f_{i}:\mathbb{R}^{n}\to \mathbb{R}$ be the projection map $(x_{1}, x_{2}, \cdots, x_{n})\mapsto x_{i}$. Then, $x_{i}=f_{i}\circ \mathbf{X}$ is a random variable.
> 
> **Proof of $\impliedby$**
> $$
> (X=(x_{1}, x_{2}, \cdots, x_{n}))=\bigcap_{i=1}^{n} (X_{i}=x_{i}),
> $$
> which is in the $\sigma$ algebra since it is closed under countable intersections.

> [!Definition]
> Let $\mathbf{X}:\Omega\to \mathbb{R}^{n}$ be a random vector. Then, $f_{\mathbf{X}}:\mathbb{R}^{n}\to[0, 1]$ defined by $f_{\mathbf{X}}(\mathbf{x})=P(\mathbf{X}=\mathbf{x})$ is called a *joint probability mass function* of $\mathbf{X}$.

> [!Theorem]
> Let $f_{\mathbf{X}}$ be a joint probability mass function of $\mathbf{X}$ on $(\Omega, \mathcal{F}, P)$. If $\mathbf{X}=(X_{1}, X_{2}, \dots, X_{n})$, we know that each $X_{i}$ is a random variable. The probability mass functions $f_{X_{i}}$ can be expressed in terms of $f_{\mathbf{X}}$ like so:
> $$
> f_{X_{i}}(c)=P\left( \bigcup_{\mathbf{x}\in \mathrm{Im}~\mathbf{X}\ | \  x_{i}=c}(\mathbf{X}=\mathbf{x}) \right)=\sum_{\mathbf{x}\in \mathrm{Im}~\mathbf{X}\ | \  x_{i}=c}P(\mathbf{X}=\mathbf{x}). 
> $$

> [!Definition]
> If $X$ is a random variable on $\Omega$, define $F(x)=P(X\leq x)=P(X\in (-\infty, x])$.

> [!Theorem] Proposition
> - $F$ is increasing.
> - $\lim_{ x \to \infty }F(x)=1$
> - $\lim_{ x \to -\infty }F(x)=0$
> - $\lim_{ x \to x_{0}^{+} }F(x)=F(x_{0})$ (right continuity).

The fourth point is shown by considering any monotone decreasing sequence $(\epsilon_{n})$ converging to $0$, and observing that 
$$
\begin{align}
F(x_{0}) & =P(X\leq x_{0}) \\
 & =P((-\infty, x_{0}]) \\
 & =\lim_{ n \to \infty } P((-\infty, x_{0}+ \epsilon_{n}] ) \\
 & =\lim_{ n \to \infty } F(x_{0}+\epsilon_{n})
\end{align}
$$
Note that for discrete random variables, $F$ may not be left continuous.

> [!Definition]
> Let $X$ and $Y$ be discrete random variables on $(\Omega, \mathcal{F}, P)$. We say $X$ and $Y$ are independent if $P(\{ X=x \}\cap \{ Y=y \})=P(X=x)P(Y=y)$ for all $x, y$.

> [!Remark]
> The above definition implies, when $X$ and $Y$ are independent, $f_{(X, Y)}((x, y))=f_{X}(x)f_{Y}(y)$.

> [!Theorem] Corollary
> If $X$ and $Y$ are independent, $P(X\in A, Y\in B)=P(X\in A)P(Y\in B)$.

> [!Proposition]
> $X$, $Y$ are independent. $f, g:\mathbb{R}\to \mathbb{R}$. $f\circ X$ and $g\circ Y$ are independent.

> [!Proposition]
> Let $f_{1}$ and $f_{2}$ be two probability mass functions. Then, there exists $(\Omega, \mathcal{F}, P)$ and $X, Y:\Omega\to \mathbb{R}$ such that $f_{X}=f_{1}$, $f_{Y}=f_{2}$, and $X$ and $Y$ are independent.

**Proof**
