---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-09
time: 15:55
---
![[1728577113476.jpg]]

## Derivatives of real functions

Rudin, 5.1

>[!Definition]
>Let $f: [a, b]\to \mathbb{R}$. For any $x\in[a, b]$, define the quantity
>$$
>f'(x)\equiv\lim_{ t \to x } \frac{{f(t)-f(x)}}{t-x}
>$$
>provided the [[Analysis1_L10#Definition of limit of a function in R|limit exists]], in which case we say $f$ is *differentiable* at $x$.

Note:
- We are justified in attempting to take the limit for all $x\in[a, b]$ since they are all limit points of $[a, b]$.
- We can make same definition for $f'(x)$ when $f$ is defined on $(a, b)$.
- Let $E=\{ x\ | \ f'(x) \text{ exists} \}$. Then, $f':E\to R$. We say $f$ is differentiable on $E$.

If $f'(x)$ exists, then define $u(t)$ by :

$$
u(t)\equiv \begin{cases}
{\huge \frac{{f(t)-f(x)}}{t-x}}-f'(x) & t\ne x \\
0 & t=x
\end{cases}
$$
, i.e, 
$$
{f(t)-f(x)}=(t-x)[f'(x)+u(t)]
$$
As $t\to 0$, $u(t)\to 0$.

### Differentiability implies continuity

Rudin, 5.2

>[!Theorem]
>$f'(x)$ exists $\implies$ $f$ is continuous at $x$.

>**Proof**
>$$
>\lim_{ t \to x }(f(t)-f(x))= \lim_{ t \to x } \frac{{f(t)-f(x)}}{t-x}(t-x).
>$$
>From the [[Analysis1_L11#Algebra of limits of functions|algebra of limits]], this is equal to
>$$
>\lim_{ t \to x } \frac{{f(t)-f(x)}}{t-x}\lim_{ t \to x } (t-x)=f'(x)\cdot 0 =0
>$$
>Thus, $\lim_{ t \to x }f(t)=f(x)$. ❏

The converse is NOT true!

### Algebra of derivatives

Rudin, 5.3

>[!Theorem]
>Suppose $f$ and $g$ are defined on $[a, b]$ and are differentiable at a point $x\in[a, b]$. Then, $f+g$, $fg$, and $f/g$ are differentiable are $x$, and
>1. $(f+g)'(x)=f'(x) +g'(x)$;
>2. $(fg)'(x)=f'(x)g(x)+f(x)g'(x)$;
>3. $\Large\left( \frac{f}{g} \right)'(x)=\frac{{f'(x)g(x)-f(x)g'(x)}}{g^{2}(x)}$, if $g(x)\ne 0$.

>**Proof of 1** 
>Follows from the [[Analysis1_L11#Algebra of limits of functions|algebra of limits]]. 
>
>**Proof of 2**
>$f(t)g(t)-f(x)g(x)=(f(t)-f(x))g(t)+(g(t)-g(x))f(x)$. 
>
>**Proof of 3**
>$\Large\frac{f(t)}{g(t)}-\frac{f(x)}{g(x)}=\frac{{(f(t)-f(x))g(x)-(g(t)-g(x))f(x)}}{g(x)g(t)}$.

### Chain rule

Rudin, 5.5

>[!Theorem]
>Suppose $f$ is defined $[a, b]$, $f'(x)$ exists at some $x\in[a, b]$, $g$ is defined on an interval $I$ which contains the range of $f$, and $g$ is differentiable at the point $f(x)$. 
>If $h(t)=g(f(t)), a\leq t\leq b$, then  $h$ is differentiable at $x$, and
>$$
>h'(x)=g'(f(x))f'(x).
>$$

> **Proof**
> Let $y=f(x)$. By the definition of the derivative, we have
> $$
> \begin{align}
> f(t)-f(x) & =(t-x)[f'(x)+u(t)], \\
> g(s)-g(y) & =(s-y)[g'(y)+v(s)],
> \end{align}
> $$
> where $t\in[a, b]$, $s\in I$, and $u(t)\to 0$ as $t\to x$, $v(s)\to 0$ as $s\to y$. Now, 
> $$
> \begin{align}
> h(t)-h(x)= & \ g(f(t))-g(f(x)) \\ 
> = & \ (f(t)-f(x))\ (g'(f(x))+v(f(t))) \\
> = & \ (t-x)\ (f'(x)+u(t))\ (g'(f(x))+v(f(t))) \\ \\
> 
> \implies \frac{{h(t)-h(x)}}{t-x}= & \ (f'(x)+u(t))\ (g'(f(x))+v(f(t))) \\
> \implies h'(x)= & \ \lim_{ t \to x } (f'(x)+u(t))\ (g'(f(x))+v(f(t)))
> \end{align}
> $$
> We know $u(t)$ vanishes as $t\to x$. As $t\to x$, $f(t)\to f(x)$ since $f$ is continuous at $x$. As $f(t)\to f(x)$, $v(f(t))\to 0$ . Thus, 
> $$
> h'(x)=f'(x)g'(f(x)).
> $$
> ❏

