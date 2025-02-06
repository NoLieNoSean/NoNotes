---
tags:
  - PROB
  - Lecture
date: 2025-02-28
time: 15:30
---
Note that if $X$ is a random variable on $(\Omega, \mathcal{F}, P)$ and $f:\mathbb{R}\to \mathbb{R}$, then $f\circ X$ is also a random variable.

## Random vector

> [!Definition]
> Let $(\Omega, \mathcal{F}, P)$ be a probability space. $\mathbf{X}:\Omega\to \mathbb{R}^{n}$ is called a *random vector* if $|\mathrm{Im}~\mathbf{X}|\leq\aleph_{0}$ and $\{ \omega\in \Omega\ | \ \mathbf{X}(\omega)=\mathbf{x} \}\in \mathcal{F}$ for all $\mathbf{x}\in \mathbb{R}^{n}$.

If $f:\mathbb{R}^{n}\to \mathbb{R}^{m}$ is any function and $\mathbf{X}:\Omega\to \mathbb{R}^{n}$ is a random vector, $f\circ\mathbf{X}$ is also a random vector. In particular, if $m=1$, $f\circ\mathbf{X}$ is a random variable. 

> [!Theorem]
> Let $\mathbf{X}:\Omega\to \mathbb{R}^{n}$, $\omega\mapsto(X_{1}, X_{2}, \dots, X_{n})$ where $X_{i}:\Omega\to \mathbb{R}$. $\mathbf{X}$ is a random vector iff each $X_{i}$ is a random variable.

> [!Theorem]
> Let $f_{\mathbf{X}}$ be a joint probability mass function of $\mathbf{X}$ on $(\Omega, \mathcal{F}, P)$. If $\mathbf{X}=(X_{1}, X_{2}, \dots, X_{n})$, we know that each $X_{i}$ is a random variable. The probability mass function $f_{X_{i}}$ can be expressed in terms of $f_{\mathbf{X}}$ like so:
> $$
> f_{X_{i}}(x)=\sum_{\mathbf{x}\in \mathbb{R}^{n}, ~ x_{i}=x} f_{\mathbf{X}}(\mathbf{x}).
> $$

[!Definition]
If $X$ is a random variable on $\Omega$, define $F(x)=P(X\leq x)=P(X\in (-\infty, x])$.


[!Theorem] Proposition
- $F$ is increasing.
- $\lim_{ x \to \infty }F(x)=1$
- $\lim_{ x \to -\infty }F(x)=0$
- $\lim_{ x \to x_{0}^{+} }F(x)=F(x_{0})$ (right continuity).

[!Definition]
Let $X$ and $Y$ be random variables on $(\Omega, \mathcal{F}, P)$. We say $X$ and $Y$ are independent if $P(\{ X=x \}\cap \{ Y=y \})=P(X=x)P(Y=y)$.

[!Remark]
The above definition 


[!Theorem] Corollary
If $X$ and $Y$ are independent, $P(X\in A, Y\in B)=P(X\in A)P(Y\in B)$.

[!Proposition]
$X$, $Y$ are independent. $f, g:\mathbb{R}\to \mathbb{R}$. $f\circ X$ and $g\circ Y$ are independent.

