---
tags:
  - CAL2
  - Lecture
  - Processed
date: 2025-10-09
time: 10:34
id: "199"
---
# Change of variables

If $g:[a, b]\to \mathbb{R}$ is continuously differentiable and $f:\mathbb{R}\to \mathbb{R}$ is continuous, then
$$
\int_{g(a)}^{g(b)} f =\int_{a}^{b} (f\circ g)\cdot g' . 
$$

> [!Theorem]
> Let $A\subseteq \mathbb{R}^{n}$ be open and let $g:A\to \mathbb{R}^{n}$ be a 1-1, continuously differentiable function such that $\det g'(x)\ne 0$ for all $x\in A$. Suppose that $f:g(A)\to \mathbb{R}$ is integrable[^1]. Then, 
> $$
> \int_{g(A)}f=\int_{A}(f\circ g)|\det g'|.
> $$
> 

*This is essentially a pullback!*

[^1]: Note that $g(A)$ is open.

> [!Example]
> Evaluate:
> $$
> \int_{0}^{1} \int_{0}^{\sqrt{ 1-x^{2} }} e^{ 1-x^{2}-y^{2} } \, dy  \, dx. 
> $$
> $g$ will be of type $(0, 1)\times(0, \pi/2)\to \mathbb{R}^{2}$, $g(r, \theta)=(r\cos\theta, r\sin\theta)$. 
> $$
> g'(r, \theta)=\begin{bmatrix}
> \cos\theta & -r\sin\theta \\
> \sin\theta & r\cos\theta
> \end{bmatrix}
> $$
> $\det g'=r$. Thus, the above integral is equal to
> $$
> \int_{A}e^{ 1-r^{2} }r=\int_{0}^{\pi/2} \int_{0}^{1} re^{ 1-r^{2} } \, dr  \, d\theta=\pi(e-1)/4
> $$
> 

> [!Example]
> Find the area of the region in $\mathbb{R}^{2}$ bounded by $y=x^{3}$, $y=2x^{3}$, $xy=1$, $xy=3$.
> 
> Use change of variables $u=x^{3}/y$, $v=xy$. $g(u, v)=(u^{1/4} v^{1/4}, u^{-1/4}v^{3/4})$. The region $A$ is $(1/2, 1)\times(1, 3)$ (we are only looking at the first quadrant). 
> $$
> g'(u, v)=1/4\begin{bmatrix}
> u^{-3/4}v^{1/4} & u^{1/4}v^{-3/4} \\
> -u^{-5/4}v^{3/4} & 3u^{-1/4}v^{-1/4}
> \end{bmatrix}
> $$
> $\det g'=\frac{1}{4u}$. Thus, the area is given by
> $$
> \frac{1}{4}\int_{1}^{3} \int_{1/2}^{1} \frac{1}{u} \, du  \, dv=\frac{\ln 2}{2}. 
> $$
> The total area is $\ln 2$.              
