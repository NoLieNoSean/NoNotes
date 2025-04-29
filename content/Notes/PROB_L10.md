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
# The dominated convergence theorem

We will use the DCT frequently in the coming proofs.

> [!Theorem] DCT (for sequences of sequences)
> Let $f_{n}:\mathbb{N}\to \mathbb{R}$ be a sequence for $n\in N$. Assume a summable positive sequence $r:\mathbb{N}\to \mathbb{R}_{\geq 0}$ exists such that $\ | \ f_{n}(i)\ | \ \leq r(i)$ for all $n$ and $i$, that is, $|f_{n}|\leq r$ for all $n$. Let the sequence of sequences $(f_{n})$ converge to a sequence $f$ pointwise, that is $f_{n}(i)\to f(i)$ for all $i$. Then, each $f_{n}$ is summable, $f$ is summable, and
> $$
> \lim_{ n \to \infty } \sum_{i=1}^{\infty} f_{n}(i)= \sum_{i=1}^{\infty} \lim_{ n \to \infty } f_{n}(i)=\sum_{i=1}^{\infty} f(i).
> $$
> 

To put it simply, if a sequence of sequences is bounded by a summable sequence and converges pointwise to a sequence, then the limit of its sum is the sum of its limit. Here, summable means [[ANA1_L31#Prologue|absolutely convergent]]. Note that the conclusion that each $f_{n}$ is summable follows from the hypothesis that it is bounded by a summable sequence.

> [!Theorem] DCT (for sequences of functions)
> Let $f_{n}:\mathbb{N}\to \mathbb{R}$ be a measurable function for $n\in N$. Assume an integrable positive function $r:\mathbb{N}\to [0, \infty)$ exists such that $|f_{n}|\leq r$ for all $n$. Let the sequence of functions $(f_{n})$ converge to a function $f$ pointwise. Then, $f_{n}$ is integrable, $f$ is integrable, and
> $$
> \lim_{ n \to \infty } \int_{-\infty}^{\infty} f_{n}(\mu)\,d\mu= \int_{-\infty}^{\infty} \lim_{ n \to \infty } f_{n}(\mu)\,d\mu=\int_{-\infty}^{\infty} f(\mu)\,d\mu.
> $$
> 

Here, integrable means [[Measure theory 101#Lebesgue Integration|Lebesgue integrable]]. Any measurable function that is absolutely dominated by an integrable function is integrable[^1] (thus, the conclusion that each $f_{n}$ is integrable follows from the hypothesis that it is measurable and bounded by an integrable function). 

[^1]: Note that there does not exist a similar property for Riemann integrals, that is, being absolutely dominated by a Riemann integrable function does not imply Riemann integrability. Even if we assume Riemann integrability in the hypothesis, we cannot conclude that the limit is Riemann integrable ([[ANA1_L33#Sequences of functions|here's an example]]). The [[ANA1_L33#Limit of uniformly converging integrable functions is integrable (and more)|closest analogue]] of the DCT in Riemann land does away with the dominating function and requires the sequence of functions to converge uniformly instead.



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
> 
> > [!Proof]-
> > Since $E(X)=e^{ i\theta }|E(X)|$ for some $\theta$, we have
> > $$
> > \begin{align}
> > |E(X)| & =e^{ -i\theta }E(X) \\
> >  & =\mathrm{Re}~(e^{ -i\theta }E(X)) \\
> >  & =\mathrm{Re}~(E(e^{ -i\theta }X)) \\
> >  & = E(\mathrm{Re}~(e^{ -i\theta }X))
> > \end{align}
> > $$
> > Now, $\mathrm{Re}~(e^{ -i\theta }X)\leq |e^{ -i\theta }X|=|X|$. Thus, we have
> > $$
> > E(\mathrm{Re}~(e^{ -i\theta }X))\leq E(|X|).
> > $$
> 

Note the following facts for all $z\in \mathbb{C}$, which are also easy to verify (just use the Taylor expansion for $e^{z}$):
1. $\frac{d}{dt}e^{zt}=ze^{ zt }$,
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



> [!Theorem] Properties of the characteristic function
> The characteristic function is [[ANA1_L20#Uniform continuity|uniformly continuous]].

[!Proof]-
Let $\varphi$ be the characteristic function of $X$.
$$
\begin{align}
|\varphi(t+h)-\varphi(t)| & =|Ee^{ itX }(e^{ ihX }-1)| \\
 & \leq E|e^{ itX }(e^{ ihX }-1)| \\
 & = E(|e^{ itX }||e^{ ihX }-1|) \\
 & =E|e^{ ihX }-1|
\end{align}
$$
Since $e^{ihX}\to 0$ as $h\to 0$, given $\epsilon$, we can choose $\delta$ such that $E|e^{ ihX }-1|<\epsilon$ if $|h|<\delta$. 

## Characteristic functions of common distributions

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
\frac{d}{dt}\varphi_{X}(t) & =\frac{-1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} \sin (tx)~x~e^{-x^{2}/2} \, dx .\\
 & =\frac{-1}{\sqrt{ 2\pi }}\left( [-\sin (tx)e^{ -x^{2}/2 }]_{-\infty}^{\infty}+t\int_{-\infty}^{\infty} \cos(tx)e^{ -x^{2}/2 } \, dx  \right) \\
 & = \frac{-t}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} \cos(tx)e^{ -x^{2}/2 } \, dx. 
\end{align}
$$
This yields a simple differential equation.
$$
\begin{align}
\frac{d}{dt} \varphi_{X}(t) & =-t\varphi_{X}(t) \\ 
\int \frac{1}{\varphi_{X}(t)}~d\varphi_{X}(t) & =-\int tdt \\
\varphi_{X}(t) & =ce^{ -t^{2}/2 }
\end{align}
$$
$\varphi_{X}(0)=1$ tells us that $c=1$. Thus,
$$
\varphi_{X}(t)=e^{ -t^{2}/2 }.
$$
If $Y= \mu+\sigma X$, then $Y\sim n(\mu, \sigma^{2})$.
$$
\begin{align}
\varphi_{Y}(t) & =Ee^{ it(\mu+\sigma X )} \\
 & =e^{ \mu it }Ee^{ it\sigma X } \\
 & =e^{ \mu it }\varphi_{X}(\sigma t) \\
 & =e^{ \mu it }e^{ -\sigma^{2}t^{2}/2 }
\end{align}
$$
## Characteristic function of sum of independent random variables

> [!Theorem]
> If $X$ and $Y$ are [[PROB_L9#Independent continuous random variables|independent]] random variables, then
> $$
> \varphi_{X+Y}(t)=\varphi_{X}(t)\varphi_{Y}(t)
> $$
> 
> > [!Proof]-
> > $$
> > \begin{align}
> > \varphi_{X+Y}(t) & =Ee^{ it(X+Y) } \\
> >  & =Ee^{ itX }e^{ itY } \\
> >  & =Ee^{ itX }Ee^{ itY } \\
> >  & =\varphi_{X}(t)\varphi_{Y}(t).
> > \end{align}
> > $$

