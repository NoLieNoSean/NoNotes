# Distributions of sums and quotients

## Distribution of X+Y

Let $X, Y$ be random variables (not necessarily independent) with joint distribution $f_{X,Y}$. We want to find $F_{X+Y}(z)$.
$$
\begin{align}
F_{X+Y}(z) & =P(X+Y\leq z) \\
 & = \iint_{\{ x+y\leq z \}}f(x, y)\,dx\,dy \\
 & =\int_{-\infty}^{\infty} \int_{-\infty}^{z-x} f(x, y) \, dy  \, dx. \\
 & =\int_{-\infty}^{\infty} \int_{-\infty}^{z} f(x, u-x) \, du  \, dx\\
 & = \int_{-\infty}^{z} \left( \int_{-\infty}^{\infty} f(x, u-x) \, dx \right)  \, du.
\end{align}
$$
Thus,
$$
f_{X+Y}(u)=\int_{-\infty}^{\infty} f(t, u-t) \, dt.
$$
Additionally, if $X$ and $Y$ are independent, we have
$$
\begin{align}
f_{X+Y}(u) & =\int_{-\infty}^{\infty} f_{X}(t)f_{Y}(u-t) \, dt  \\
 & =\int_{-\infty}^{\infty} f_{Y}(t)f_{X}(u-t) \, dt. 
\end{align}
$$
The above expression is analogous to the convolution product defined for densities of discrete random variables.

> [!Example]
> Let $X, Y\sim\text{Exp}(\lambda)$.
> $$
> \begin{align}
> f_{X+Y}(u) & =\int_{0}^{u} \lambda e^{ -\lambda t }\lambda e^{ -\lambda(u-t) } \, dt  \\
>  & =\lambda^{2}\int_{0}^{u} e^{ -\lambda u } \, dt \\
>  & =\lambda^{2}ue^{ -\lambda u }.
> \end{align}
> $$

---
# Characteristic functions

> [!Definition]
> $X:\Omega\to \mathbb{C}$ is a **complex random variable** if $\mathrm{Re}~X$ and $\mathrm{Im}~X$ are both real random variables.

> [!Definition]
> Let $X$ be a complex random variable. $X$ has **finite expectation** if $\mathrm{Re}~X$ and $\mathrm{Im}~X$ have finite expectation, in which case we define
> $$
> E(X)=E(\mathrm{Re}~X)+iE(\mathrm{Im}~X).
> $$

Note the following facts for real random variables:
1. $|E(X)|\leq E|X|$.
2. If $X\leq Y$, then $E(X)\leq E(Y)$.

It is easy to verify that $E(\alpha X+Y)=\alpha E(X)+E(Y)$ for complex random variables $X, Y$ and $\alpha\in \mathbb{C}$.

> [!Theorem]
> Let $X$ be a complex random variable. Then, $|E(X)|\leq E(|X|)$.

> **Proof**
> Since $E(X)=e^{ i\theta }|E(X)|$ for some $\theta$, we have
> $$
> \begin{align}
> |E(X)| & =e^{ -i\theta }E(X) \\
>  & =\mathrm{Re}~(e^{ -i\theta }E(X)) \\
>  & =\mathrm{Re}~(E(e^{ -i\theta }X)) \\
>  & = E(\mathrm{Re}~(e^{ -i\theta }X))
> \end{align}
> $$
> Now, $\mathrm{Re}~(e^{ -i\theta }X)\leq |e^{ -i\theta }X|=|X|$. Thus, we have
> $$
> E(\mathrm{Re}~(e^{ -i\theta }X))\leq E(|X|).
> $$

Note the following facts for all $z\in \mathbb{C}$, which are also easy to verify:
1. $\frac{d}{dt}e^{zt}=ze^{ zt }$.
2. $\int e^{zt}\,dt=e^{ zt }/z$.

> [!Definition]
> Let $X:\Omega\to \mathbb{R}$ be a random variable. Define the **characteristic function** of $X$ by
> $$
> \varphi_{X}(t)\equiv Ee^{itX},\quad t\in \mathbb{R}.
> $$

If $X$ is continuous, we have
$$
\varphi_{X}(t)=\int_{-\infty}^{\infty} e^{itx}f_{X}(x) \, dx.
$$
It is clear that $|\varphi_{X}|\leq 1$. 

[!Example] Examples
Let $X\sim\text{Unif}(a, b)$. 
$$
\begin{align}
\varphi_{X}(t) & =\int_{a}^{b} e^{ itx }f_{X}(x) \, dx  \\
 & =\frac{e^{ itb }-e^{ itz }}{(b-a)it}.
\end{align}
$$
Let $X\sim\text{Exp}(\lambda)$.
$$
\begin{align}
\varphi_{X}(t) & =\lambda\int_{0}^{\infty} e^{ itx }e^{ -\lambda x } \, dx  \\
 & = \frac{\lambda}{\lambda-it}.
\end{align}
$$
Let $X\sim n(0, 1)$. 
$$
\begin{align}
\varphi_{X}(t) & =\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} e^{ itx }e^{ -x^{2}/2 } \, dx  \\
 & =\frac{1}{\sqrt{ 2\pi }}\left( \int_{-\infty}^{\infty} \cos(tx)e^{ -x^{2}/2 } \, dx +i\underbrace{ \int_{-\infty}^{\infty} \sin(tx)e^{ -x^{2}/2 } \, dx }_{ =0 }  \right) \\
 & = \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} \cos(tx)e^{ -x^{2}/2 } \, dx 
\end{align}
$$
From the [[Measure theory 101#Dominated convergence theorem|dominated convergence theorem]] (one can take the dominating function $g$ to be $|x|e^{-x^{2}/2}$), we have
$$
\begin{align}
\frac{d}{dt}\varphi_{X}(t) & =\frac{-1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} x\sin (tx)e^{-x^{2}/2} \, dx . \\
 & =\frac{1}{\sqrt{ 2\pi }}
\end{align}
$$

