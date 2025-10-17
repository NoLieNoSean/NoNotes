---
id: "238"
---

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

# Tools
## Dominated convergence theorem

We will use the DCT frequently in the upcoming proofs.

> [!Theorem] DCT for sequences of sequences
> Let $f_{n}:\mathbb{N}\to \mathbb{R}$ be a sequence for $n\in N$. Assume a summable positive sequence $r:\mathbb{N}\to \mathbb{R}_{\geq 0}$ exists such that $\ | \ f_{n}(i)\ | \ \leq r(i)$ for all $n$ and $i$, that is, $|f_{n}|\leq r$ for all $n$. Let the sequence of sequences $(f_{n})$ converge to a sequence $f$ pointwise, that is $f_{n}(i)\to f(i)$ for all $i$. Then, each $f_{n}$ is summable, $f$ is summable, and
> $$
> \lim_{ n \to \infty } \sum_{i=1}^{\infty} f_{n}(i)= \sum_{i=1}^{\infty} \lim_{ n \to \infty } f_{n}(i)=\sum_{i=1}^{\infty} f(i).
> $$
> 

^0988fa

To put it simply, if a sequence of sequences is bounded by a summable sequence and converges pointwise to a sequence, then the limit of its sum is the sum of its limit. Here, summable means [[LEC ANA1 31#Prologue|absolutely convergent]]. Note that the conclusion that each $f_{n}$ is summable follows from the hypothesis that it is bounded by a summable sequence.

> [!Theorem] DCT for sequences of functions
> Let $f_{n}:\mathbb{R}\to \mathbb{R}$ be a measurable function for $n\in \mathbb{N}$. Assume an integrable positive function $r:\mathbb{R}\to [0, \infty)$ exists such that $|f_{n}|\leq r$ for all $n$. Let the sequence of functions $(f_{n})$ converge to a function $f$ pointwise. Then, $f_{n}$ is integrable, $f$ is integrable, and
> $$
> \lim_{ n \to \infty } \int_{-\infty}^{\infty} f_{n}(\mu)\,d\mu= \int_{-\infty}^{\infty} \lim_{ n \to \infty } f_{n}(\mu)\,d\mu=\int_{-\infty}^{\infty} f(\mu)\,d\mu.
> $$
> 

^f84359

Here, integrable means [[Intro to Measure theory#Lebesgue Integration|Lebesgue integrable]]. Any measurable function that is absolutely dominated by an integrable function is integrable[^1] (thus, the conclusion that each $f_{n}$ is integrable follows from the hypothesis that it is measurable and bounded by an integrable function). 

[^1]: Note that there does not exist a similar property for Riemann integrals, that is, being absolutely dominated by a Riemann integrable function does not imply Riemann integrability. Even if we assume Riemann integrability in the hypothesis, we cannot conclude that the limit is Riemann integrable ([[LEC ANA1 33#Sequences of functions|here's an example]]). The [[LEC ANA1 33#Limit of uniformly converging integrable functions is integrable (and more)|closest analogue]] of the DCT in Riemann land does away with the dominating function and requires the sequence of functions to converge uniformly instead.


> [!Theorem] DCT for sequences of random variables
> Let $(X_{n})$ be a sequence of random variables. Let $X$ be a random variable such that for every $\omega\in \Omega$, we have $X_{n}(\omega)\to X(\omega)$, that is, $(X_{n})$ converges to $X$ pointwise. Assume there is an integrable random variable $Y$ such that $|X_{n}|\leq Y$. Then,
> $$
> EX_{n}\to EX.
> $$
> 
> > [!Proof]-
> > Treat each $X_{n}$, $X$ and $Y$ as measurable functions (they are measurable by the [[LEC PROB 8#Continuous random variables|definition]] of a random variable)
> > $$
> > X_{n}, X, Y:(\Omega, \mathcal{F})\to (\mathbb{R}, \mathcal{B}),
> > $$
> > where $\mathcal{B}$ is the Borel $\sigma$-algebra on $\mathbb{R}$. The probability measure $P$ on $\Omega$ plays the role of the Lebesgue measure. We are given that $|X_{n}|\leq Y$, and that
> > $$
> > EY=\int_{\Omega}Y(\omega)~dP(\omega)< \infty.
> > $$
> > So, we have all the hypotheses of the DCT, which enables us to write
> > $$
> > \lim_{ n \to \infty } EX_{n}=\lim_{ n \to \infty } \int_{\Omega}X_{n}(\omega)~dP(\omega)=\int_{\Omega}X(\omega)~dP(\omega)=EX.
> > $$
> > 
> 

A random variable is said to be integrable if it has finite expectation.
## Fubini's Theorem

Used to justify swapping integrals.

> [!Theorem] Fubini's Theorem
> For a function $g(t, y)$ defined on $\mathbb{R}\times \mathbb{R}$, if
> $$
> \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} |g(t, y)| \, dy \, dt< \infty 
> $$
> then the double integral equals the iterated integrals in either order.

---
# Characteristic functions

> [!definition]
> $X:\Omega\to \mathbb{C}$ is a **complex random variable** if $\mathrm{Re}~X$ and $\mathrm{Im}~X$ are both real random variables.

> [!definition]
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
> > 
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
From the [[Intro to Measure theory#Dominated convergence theorem|dominated convergence theorem]] (one can take the dominating function $g$ to be $|x|e^{-x^{2}/2}$), we have
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
> If $X$ and $Y$ are [[LEC PROB 9#Independent continuous random variables|independent]] random variables, then
> $$
> \varphi_{X+Y}(t)=\varphi_{X}(t)\varphi_{Y}(t)
> $$
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > \varphi_{X+Y}(t) & =Ee^{ it(X+Y) } \\
> >  & =Ee^{ itX }e^{ itY } \\
> >  & =Ee^{ itX }Ee^{ itY } \\
> >  & =\varphi_{X}(t)\varphi_{Y}(t).
> > \end{align}
> > $$

## Properties of characteristic functions

Property 0: $\varphi_{X}(0)=1$, $|\varphi_{X}(t)|\leq 1$.

> [!Theorem] Property 1
> A characteristic function is [[LEC ANA1 20#Uniform continuity|uniformly continuous]].
> 
> > [!Proof]-
> > 
> > Let $\varphi$ be the characteristic function of $X$.
> > $$
> > \begin{align}
> > |\varphi(t+h)-\varphi(t)| & =|Ee^{ itX }(e^{ ihX }-1)| \\
> >  & \leq E|e^{ itX }(e^{ ihX }-1)| \\
> >  & = E(|e^{ itX }||e^{ ihX }-1|) \\
> >  & =E|e^{ ihX }-1|
> > \end{align}
> > $$
> > From the dominated convergence theorem,
> > $$
> > \begin{align}
> >   \lim_{ h \to 0 } E|e^{ ihX }-1|  & =\lim_{ h \to 0 } \int_{-\infty}^{\infty} |e^{ ihX }-1|f_{X}(x) \, dx \\ 
> > 	 & =\int_{-\infty}^{\infty} \lim_{ h \to 0 } |e^{ ihX }-1|f_{X}(x) \, dx  \\
> > 	 & =0.
> > \end{align}
> > $$
> > Since $e^{ihX}\to 0$ as $h\to 0$, given $\epsilon$, we can choose $\delta$ such that $E|e^{ ihX }-1|<\epsilon$ if $|h|<\delta$. 
> 

> [!Definition]
> A function $\varphi:\mathbb{R}\to \mathbb{C}$ is called **positive definite** if for all $z_{1}, \dots, z_{k}\in \mathbb{C}$ and $t_{1}, \dots, t_{k}\in \mathbb{R}$, $k\in \mathbb{N}$, 
> $$
> \sum_{i, j=1}^{n}z_{i}\overline{z_{j}}~\varphi(t_{i}-t_{j})\geq 0.
> $$

> [!Theorem] Property 2
> A characteristic function is positive definite.
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > \sum_{i, j=1}^{n}z_{i}\overline{z_{j}}~\varphi(t_{i}-t_{j}) & =\sum_{i, j=1}^{n}z_{i}\overline{z_{j}}~Ee^{ it_{i}X-it_{j}X } \\
> >  & =\sum_{i, j=1}^{n}z_{i}\overline{z_{j}}~Ee^{ it_{i}X }\overline{e^{ it_{j}X }} \\
> >  & = E\left( \sum_{i, j=1}^{n}z_{i}\overline{z_{j}}~e^{ it_{i}X }\overline{e^{ it_{j}X }} \right) \\
> >  & =E\left| \sum_{i=1}^{n} z_{i}e^{ it_{i}X } \right|^{2} \\
> >  & \geq 0.
> > \end{align}
> > $$
> 

## Bochner's Theorem

Note that for any distribution function $F$, there exists a random variable with distribution $F$.

Bochner's Theorem claims that the properties listed in the previous section completely characterize characteristic functions.

> [!Theorem] Bochner's Theorem
> If $\varphi:\mathbb{R}\to \mathbb{C}$ satisfies
> 1. $\varphi(0)=1$, $|\varphi|\leq 1$;
> 2. $\varphi$ is continuous;
> 3. $\varphi$ is positive definite;
> 
> Then there exists a distribution function $F$ such that if $X$ is a random variable with distribution $F$, $\varphi_{X}=\varphi$.

(continuity and positive definiteness together apparently imply uniform continuity.)

In other words, there exists a surjective map from the space of all distribution functions to the space of all functions satisfying the three listed properties (called characteristic functions from now on).

We will now prove that this map is injective.

## Inverse theorem

### Inverse theorem for integer valued random variables

> [!theorem] 
> 
> Let $X$ be an integer valued random variable. Let $f_{X}$ be the mass function of $X$, and let $\varphi_{X}$ be the characteristic function of $X$. Then, 
> $$
> f_{X}(k)=\frac{1}{2\pi}\int_{-\pi}^{\pi} e^{ -itk }\varphi_{X}(t) \, dt.
> $$
> 
> 
> > [!Proof]-
> > 
> > Compute:
> > $$
> > \begin{align}
> >  & \frac{1}{2\pi}\int_{-\pi}^{\pi} e^{ -itk } \left[ \sum_{j=-\infty}^{\infty} e^{ijt}f_{X}(j) \right] \, dt
> > \end{align}
> > $$
> > 
> > $$
> > \begin{align}
> >  & =\frac{1}{2\pi}\sum_{j=-\infty}^{\infty}f_{X}(j)\int_{-\pi}^{\pi}   e^{ it(j-k) } \, dt \\
> >  & = f_{X}(k)+\frac{1}{2\pi}\sum_{j\ne k}f_{X}(j)\underbrace{ \int_{-\pi}^{\pi}   e^{ it(j-k) } \, dt }_{ =0 } \\
> >  & =f_{X}(k).
> > \end{align}
> > $$
> > 
> 
> > [!Info]- Justifying swapping the sum and integral
> > 
> > Now, we need to justify swapping the sum and the integral (see [here](https://math.stackexchange.com/questions/83721/when-can-a-sum-and-integral-be-interchanged) for more). From Tonelli's theorem, we have $\int \sum f_{n}=\sum \int f_{n}$ if $f_{n}\geq 0$ for all $n, x$, without any further conditions needed. Then Fubini's theorem says that for general $f_{n}$, if $\sum \int |f_{n}|< \infty$ or $\int \sum |f_{n}|< \infty$ (by Tonelli the two are equivalent), then $\int \sum f_{n}=\sum \int f_{n}$. This can also be proven using [[#The dominated convergence theorem|DCT]]: Consider the functions 
> > $$
> > \begin{align}
> >  f_{n}(t) & = \sum_{j=-n}^{n} e^{ it(j-k) }f_{X}(j) \quad\text{ for }n\in \mathbb{N}, \\
> >  \\
> > f(t) & =\sum_{j=-\infty}^{\infty} e^{ it(j-k) }f_{X}(j).
> > \end{align}
> > $$
> > Clearly, $f_{n}\to f$ pointwise. Now, 
> > $$
> > \begin{align}
> > |f_{n}|\leq \sum_{j=-n}^{n} |e^{ -itk }e^{ ijt }f_{X}(j)|=\sum_{j=-n}^{n} f_{X}(j)< 1.
> > \end{align}
> > $$
> > The constant function $1$ is integrable on the bounded interval $[-\pi, \pi]$. Thus,
> > $$
> > \begin{align}
> >  & \int_{-\pi}^{\pi} \sum_{j=-\infty}^{\infty} e^{ it(j-k) }f_{X}(j) \, dt \\
> >  & = \int_{-\pi}^{\pi} \lim_{ n \to \infty } \sum_{j=-n}^{n} e^{ it(j-k) }f_{X}(j) \, dt \\
> >  & =\lim_{ n \to \infty }\int_{-\pi}^{\pi}  \sum_{j=-n}^{n} e^{ it(j-k) }f_{X}(j) \, dt \\
> >  & =\lim_{ n \to \infty }\sum_{j=-n}^{n}\int_{-\pi}^{\pi}   e^{ it(j-k) }f_{X}(j) \, dt \\
> >  & =\sum_{j=-\infty}^{\infty}\int_{-\pi}^{\pi}   e^{ it(j-k) }f_{X}(j) \, dt.
> > \end{align}
> > $$
> 


### Inverse theorem for discrete random variables

> [!theorem] 
> 
> Let $X$ be a discrete random variable with density $f_{X}$ and characteristic function $\varphi_{X}$. Then,
> $$
> f_{X}(x)=\lim_{ T \to \infty } \frac{1}{2T}\int_{-T}^{T} e^{ -itx }\varphi_{X}(t) \, dt.
> $$
> 
> > [!Proof]-
> > 
> > Note that the support of $X$ is countable.
> > $$
> > \begin{align}
> >  & \lim_{ T \to \infty } \frac{1}{2T}\int_{-T}^{T} e^{ -itx }\varphi_{X}(t) \, dt \\
> >  & = \lim_{ T \to \infty } \frac{1}{2T}\int_{-T}^{T} e^{ -itx }\left[ \sum_{y\in \mathbb{R}}e^{ ity }f_{X}(y) \right]  \, dt \\
> >  & =\lim_{ T \to \infty }\frac{1}{2T} \sum_{y\in \mathbb{R}}f_{X}(y)\int_{-T}^{T} e^{ it(y-x) }  \, dt \\
> >  & =f_{X}(x)+\lim_{ T \to \infty }\frac{1}{2T} \sum_{y\ne x}f_{X}(y)\int_{-T}^{T} e^{ it(y-x) }  \, dt  \\
> >  & =f_{X}(x)+\lim_{ T \to \infty }\sum_{y\ne x}\underbrace{ f_{X}(y) \frac{\sin(T(y-x))}{T(y-x)} }_{ |\cdot|\leq f_{X} } \\
> >  & =f_{X}(x)+\sum_{y\ne x}f_{X}(y)\lim_{ T \to \infty } \frac{\sin(T(y-x))}{T(y-x)} \\
> >  & =f_{X}(x).
> > \end{align}
> > $$

### Inverse theorem for continuous random variables

> [!Theorem] 
> Let $X$ be a continuous random variable with continuous density $f$ and integrable characteristic function $\varphi$ ($\int_{-\infty}^{\infty} |\varphi(t)| \, dt< \infty$). Then, 
> $$
> f(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty} e^{ -itx }\varphi(t) \, dt. 
> $$
> 
> > [!Proof]-
> > Notice that
> > $$
> > \begin{align}
> > \lim_{ \epsilon \to 0 } \int_{-\infty}^{\infty} \underbrace{ e^{ -\epsilon^{2}t^{2}/2 } e^{ -itx }\varphi(t) }_{ |\cdot|\leq |\varphi(t)| }\, dt =\int_{-\infty}^{\infty} e^{ -itx }\varphi(t) \, dt. 
> > \end{align}
> > $$
> > Let's compute the limit on the left.
> > $$
> > \begin{align}
> >  & \lim_{ \epsilon \to 0 } \int_{-\infty}^{\infty} e^{ -\epsilon^{2}t^{2}/2 }e^{ -itx } \left( \int_{-\infty}^{\infty} e^{ iyt }f(y) \, dy  \right) \, dt  \\
> >  & =\lim_{ \epsilon \to 0 } \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} e^{ -\epsilon^{2}t^{2}/2 }e^{ -itx }   e^{ iyt }f(y) \, dy  \, dt 
> > \end{align}
> > $$
> > 
> > To use [[#Fubini's Theorem]] to swap the integrals, we must show that the integrand is absolutely integrable.
> > $$
> > \begin{align}
> >  & \iint_{\mathbb{R}^{2}}|e^{ -\epsilon^{2}t^{2}/2 }e^{ -itx }   e^{ -iyt }f(y)|\,dy\,dt \\
> >  & =\iint_{\mathbb{R}^{2}}e^{ -\epsilon^{2}t^{2}/2 }f(y)\,dy\,dt \\
> >  & =\left( \int_{-\infty}^{\infty} e^{ -\epsilon^{2}t^{2}/2 } \, dt  \right) \left( \int_{-\infty}^{\infty} f(y) \, dy  \right)  \\
> >  & = \frac{\sqrt{ 2\pi }}{\epsilon}.
> > \end{align}
> > $$
> > Now, we can swap those pesky integrals:
> > $$
> > \begin{align}
> > \lim_{ \epsilon \to 0 } \int_{-\infty}^{\infty}f(y)\int_{-\infty}^{\infty} e^{ -\epsilon^{2}t^{2}/2 }e^{ it(y-x) } \, dt  \, dy.
> > \end{align}
> > $$
> > Substitute $u=\epsilon t$.
> > $$
> > \begin{align}
> > \lim_{ \epsilon \to 0 } \frac{1}{\epsilon}\int_{-\infty}^{\infty}f(y)\int_{-\infty}^{\infty} e^{ -u^{2}/2 }e^{ iu(y-x)/\epsilon } \, du  \, dy.
> > \end{align}
> > $$
> > If we dress the expression nicely, we'll see that the inner integral is the characteristic function of the normal distribution evaluated at $(y-x)/\epsilon$, which we have [[#Characteristic functions of common distributions|already computed]]:
> > $$
> > \begin{align}
> >  & \lim_{ \epsilon \to 0 } \frac{\sqrt{ 2\pi }}{\epsilon}\int_{-\infty}^{\infty}f(y)\int_{-\infty}^{\infty} \frac{1}{\sqrt{ 2\pi }}e^{ i\left( \frac{y-x}{\epsilon} \right)u }e^{ -u^{2}/2 } \, du  \, dy \\
> >  & =\lim_{ \epsilon \to 0 } \frac{\sqrt{ 2\pi }}{\epsilon}\int_{-\infty}^{\infty}f(y)~~~\varphi_{n(0, 1)}\left( \frac{y-x}{\epsilon} \right)  \, dy  \\
> >  & =\lim_{ \epsilon \to 0 } \frac{\sqrt{ 2\pi }}{\epsilon}\int_{-\infty}^{\infty}f(y)~e^{ -(y-x)^{2}/2\epsilon^{2} } \, dy.
> > \end{align}
> > $$
> > Substitute $v=(y-x)/\epsilon$.
> > $$
> > \begin{align}
> >  & \lim_{ \epsilon \to 0 } \sqrt{ 2\pi }\int_{-\infty}^{\infty}f(\epsilon v+x)~e^{-v^{2}/2} \, dv.
> > \end{align}
> > $$
> > Passing the limit inside is tricky; since $f$ may not be bounded and $\epsilon$ does not vanish on taking absolute value, using the DCT directly is difficult. Instead, we use the DCT on an compact interval $[-R, R]$ (where $f$ is bounded) to show that in $[-R, R]$, we can take the limit inside. We then show that as we increase $R$, the integral on $[-R, R]^{c}$ vanishes (requires justification I don't have time for now).
> > $$
> > \begin{align}
> > \sqrt{ 2\pi }\underbrace{ \int_{-R}^{R} \lim_{ \epsilon \to 0 } f(\epsilon v+x)~e^{ -v^{2}/2 } \, dv }_{ f\text{ bounded; DCT applicable} }+\underbrace{ \lim_{ \epsilon \to 0 }  \int_{[-R, R]^{c}}f(\epsilon v+x)~e^{ -v^{2}/2 }\,dv }_{ \to 0\text{ as }R\to \infty }.
> > \end{align}
> > $$
> > 
> > Thus, the expression becomes
> > $$
> > \begin{align}
> >  &  f(x)\sqrt{ 2\pi }\int_{-\infty}^{\infty}~e^{-v^{2}/2} \, dv=f(x).
> > \end{align}
> > $$
> > 
> 
^3092aa

