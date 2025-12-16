---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-11-13
time: 11:50
id: "154"
---
%% ![[1731646448545.jpg]] %%

# Real analytic functions

Let $\sum c_{n}x^{n}$ converge for $|x|<R$. Define
$$
\begin{align}
 & f:\{ x \in \mathbb{R}: |x| <R \}\to \mathbb{R} ,\\  & f(x)=\sum_{n=0}^{\infty} c_{n}x^{n}. \\
\end{align}
$$

^f743f0

$R$ has to be less than or equal to the [[LEC ANA1 31#Power series|radius of convergence]]. Functions which are locally (i.e, on some interval) defined by a convergent power series are called *analytic functions*. $f$ is a special kind of analytic function, since its power series at a single point converges on its entire domain, and hence $f$ is defined on its entire domain by the power series at that point, namely $0$. In this lecture, we will only be working with such functions. In general, however, such a point may not exist. Here's the general definition:

> [!Definition] @pughRealMathematicalAnalysis2015 [p. 158]
> A function $g:(a, b)\to \mathbb{R}$ is **analytic** if for each $x\in(a, b)$, there exists a power series
> $$
> \sum a_{r}h^{r}
> $$
> and a $\delta> 0$ such that if $|h|<\delta$, then the series converges and
> $$
> g(x+h)=\sum_{r=0}^{\infty} a_{r}h^{r}.
> $$
> 

^d04d92

We will soon show, in [[#^34b9d2]], that functions like $f$ satisfy [[#^d04d92]]. 

Let $f$ be as in [[#^f743f0]]. Natural questions:
1. Is $f$ continuous? Differentiable? Integrable?
2. What functions are real analytic? In the above example, we started with a convergent series and defined a function. Can we go the other way around, i.e, start with a function, and express it as a convergent power series centered at any point in its domain?

> [!Info] More questions
> At this point, we could just make the definitions 
> $$
> \begin{align}   
> e^{x}\equiv {1}+x+\frac{x^{2}}{2!}+\frac{x^{3}}{3!}+\dots, \\
> \sin x\equiv x -\frac{x^{3}}{3!}+\frac{x^{5}}{5!}+\dots, \\
> \cos x\equiv 1-\frac{x^{2}}{2!}+\frac{x^{4}}{4!}+\dots.
> \end{align}
> $$
> We have the tools to say that the above series converge for all $x$, so $\sin x$ and $\cos x$ are defined for all $x\in \mathbb{R}$. We can ask the above questions in particular for these functions.

---

> [!Theorem] @rudinPrinciplesMathematicalAnalysis1976 8.1
> Suppose the series $\sum_{n=0}^{\infty} c_{n}x^{n}$ converges for $|x|<R$. This allows us to define
> $$
> f(x)\equiv \sum_{n=0}^{\infty}c_{n}x^{n}\ \ \ \ \ (|x|<R),
> $$
> which is the limit $\lim_{ n \to \infty }f_{n}$, where $f_{n}=\sum_{i=0}^{n}c_{i}x^{i}$. 
> 
> Then, 
> 1. $(f_{n})$ [[LEC ANA1 33#^8f4bed|converges uniformly]] on $[-R+\epsilon, R-\epsilon]$ for all $\epsilon>0$. 
> 2. $f$ is continuous and differentiable on $(-R, R)$, and
> $$
> f'(x)= \sum_{n=1}^{\infty}nc_{n}x^{n-1}\ \ \ \ (|x|<R) .
> $$
> 

Since $f'(x)$ is also an analytic function, we can turn the crank again to get $f''(x)$, which is also analytic, and so on. Thus, any analytic function is infinitely differentiable. This yields an explicit formula for the $n$th derivative of $f$:

> [!Corollary]
> If 
> $$
> f(x)=\sum_{n=0}^{\infty} c_{n}x^{n}
> $$
> on $(-R, R)$, then $f^{(k)}(x)$ exists for all $k\geq 0$, and is given by
> $$
> \begin{align}
> f^{(k)}(x)=\sum_{n=k}^{\infty}n(n-1)\dots(n-k+1)c_{n}x^{n-k}  &  & x\in(-R, R).
> \end{align}
> $$
> 

^523f3a


The derivatives at $0$ are of particular interest:
$$
\begin{align}
f^{(k)}(0)=k!c_{n}
\end{align}
$$
$$
\implies c_{n}= \frac{f^{(k)}(0)}{k!}.
$$

^b31d2c

This tells us that *if a function is analytic, it must have a unique power series representation*! Additionally, we only need the derivatives at a single point to construct this power series about that point.

> [!Remark]
> Although a function $f$ may have derivatives of all orders (i.e, be smooth), the series $\sum c_{n}x^{n}$, where $c_{n}$ is computed by [[#^b31d2c]], need not converge to $f(x)$ for any $x\ne 0$. Since if $f$ had a power series representation, it would have to be $\sum c_{n}x^{n}$, this tells us that $f$ is not analytic on any neighborhood of $0$. For example, consider
> $$
> \begin{align}
> f(x)=\begin{cases}
> e^{ -1/x^{2} } & x\ne 0 \\
> 0 & x=0.
> \end{cases}
> \end{align}
> $$
> $f^{(n)}(0)=0$ for all $n\in \mathbb{N}$. However, $f$ is not constant in any neighborhood of $0$. 

^3fdabe

Having shown that an analytic function $f$ on $(-R, R)$ is infinitely differentiable on $(-R, R)$, we can calculate all derivatives $f^{(0)}(t), f^{(1)}(t), f^{(2)}(t), \dots$ at any point $t\in(-R, R)$. So, we can calculate the Taylor polynomial of $f$ at $t$ to any degree. But do these converge? If they do, do they converge to $f$? We will see that this is indeed the case.

> [!Theorem] Taylor, @rudinPrinciplesMathematicalAnalysis1976 8.4
> Suppose
> $$
> \begin{align}
> f(x)=\sum_{n=0}^{\infty} c_{n}x^{n} &  & x\in(-R, R).
> \end{align}
> $$
> If $a\in(-R, R)$, then $f$ can be expressed as a power series about the point $x=a$ which converges in $|x-a|< R-|a|$, and
> $$
> \begin{align}
> f(x)=\sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^{n} &  & |x-a|< R-|a|.
> \end{align}
> $$
> 

^34b9d2



---

# Misc

Suppose $\sum_{n=0}^{\infty}c_{n}x^{n}$ converges for $x\in(-R, R)$. If the series also converges at an endpoint, say $x=R$, then $f:=\sum_{n=0}^{\infty}c_{n}x^{n}$ is continuous not only in $(-R, R)$, but also at $x=R$. We take $R=1$ for simplicity:

> [!Proposition] @rudinPrinciplesMathematicalAnalysis1976 8.2
> Suppose $\sum c_{n}$ converges. Put
> $$
> \begin{align}
> f(x):=\sum_{n=0}^{\infty} c_{n}x^{n} &  & -1\leqslant x\leqslant 1.
> \end{align}
> $$
> Then,
> $$
> \lim_{ x \to 1 } f(x)=\sum_{n=0}^{\infty} c_{n}.
> $$
> 
