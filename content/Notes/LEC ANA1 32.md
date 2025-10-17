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

## Real analytic functions

Let $\sum c_{n}x^{n}$ converge for $|x|<R$. Define
$$
\begin{align}
 & f:\{ x \in \mathbb{R}: |x| <R \}\to \mathbb{R} ,\\  & f(x)=\sum_{n=0}^{\infty} c_{n}x^{n}.
\end{align}
$$
$R$ is has to be less than or equal to the [[LEC ANA1 31#Power series|radius of convergence]], as defined in the previous lecture. Functions which are locally(i.e, on some interval) defined by a convergent power series are called *analytic functions*. The one above is a real analytic function defined locally around $0$ by a convergent power series. 

Natural questions:
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

To answer these questions, we will need to understand *uniform convergence*. 

---
## A look ahead

Let us black box "uniform convergence" for the moment and have a look at the results it affords us.

> [!Theorem] Theorem Rudin 8.1
> Suppose the series $\sum_{n=0}^{\infty} c_{n}x^{n}$ converges for $|x|<R$. This allows us to define
> $$
> f(x)\equiv \sum_{n=0}^{\infty}c_{n}x^{n}\ \ \ \ \ (|x|<R),
> $$
> which is the limit $\lim_{ n \to \infty }f_{n}$, where $f_{n}=\sum_{i=0}^{n}c_{i}x^{i}$. 
> 
> Then, 
> 1. $(f_{n})$ converges uniformly on $[-R+\epsilon, R-\epsilon]$ for all $\epsilon>0$. 
> 2. $f$ is continuous and differentiable on $(-R, R)$, and
> $$
> f'(x)= \sum_{n=1}^{\infty}nc_{n}x^{n-1}\ \ \ \ (|x|<R) .
> $$
> 

tldr; If a function is analytic, then the derivative exists and is given by (that expression). Note that this implicitly asserts that the sequence defining $f'(x)$ converges for $|x|<R$. 

Additionally, since $f'(x)$ is also an analytic function, we can turn the crank again to get $f''(x)$, which is also analytic, and so on. Any analytic function is infinitely differentiable, and applying the theorem on $f(x)$ also yields an expected formula for the nth derivative of $f$:

> [!Theorem] Corollary
> If 
> $$
> f(x)=\sum_{n=0}^{\infty} c_{n}x^{n}
> $$
> on $(-R, R)$, then $f^{(k)}(x)$ exists for all $k\geq 0$, and is given by
> $$
> f^{(k)}(x)=\sum_{n=k}^{\infty}n(n-1)\dots(n-k+1)c_{n}x^{n-k}. 
> $$
> 

The derivatives at $0$ are of particular interest:
$$
\begin{align}
f^{(k)}(0)=k(k-1)(k-2)\dots(1)c_{n} \\


\end{align}
$$
$$
\implies c_{n}= \frac{f^{(k)}(0)}{k!}
$$
This tells us that if a function is analytic, it must have a unique power series representation! Additionally, we only need the derivatives at a single point to construct this power series about that point.

This raises a question. We have shown that an analytic function on $(-R, R)$ is infinitely differentiable on $(-R, R)$. This allows us to calculate all derivatives $f^{(0)}(t), f^{(1)}(t), f^{(2)}(t), \dots$ at any point $t\in(-R, R)$. So, we can calculate the Taylor polynomial of the function at $t$ to any degree. But do these converge? If they do, do they converge to $f$?
$$
g(x)=\sum_{n=0}^{\infty}\left( \frac{f^{(n)}(t)}{n!} \right) (x-t)^{n}.
$$
In other words, is $g=f$? We will see that this is indeed the case. If a function is analytic on $(-R, R)$, is is also analytic on any subinterval of $(-R, R)$. 