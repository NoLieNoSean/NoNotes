## Continuous random variables

What follows is the general definition of a random variable.

> [!Definition]
> Let $(\Omega, \mathcal{A}, P)$ be a probability space. A function $X:\Omega\to \mathbb{R}$ is a random variable if $\{ X\leq x \}\in \mathcal{A}$ for all $x\in \mathbb{R}$.

It follows from the definition that for all intervals of the form $(a, b]$, $a< b$, $X^{-1}(a, b]$ is in $\mathcal{A}$. Since $\mathcal{A}$ is closed under countable intersections, it follows that the preimages of all intervals of all types are in $\mathcal{A}$ (including singletons). Additionally, since every open set in $\mathbb{R}$ is an [[ANA1_HW4_sub.pdf|at most countable disjoint union of open intervals]], the preimage of every open set is in $\mathcal{A}$. It follows that the preimage of every closed set is also in $\mathcal{A}$. 

Note that this definition is compatible with our earlier definition of a [[PROB_L3#Discrete random variables|discrete random variable]].

Recall our definition of the [[PROB_L3#The distribution function|distribution function]] $F$ of a random variable $X$ and its properties. In particular, we showed that $F(x+)-F(x-)=P(X=x)$. We motivate the definition of a continuous random variable by our desire for the distribution function to be continuous:

> [!Definition]
> A random variable $X$ is called a *continuous random variable* if $P(X=x)=0$ for all $x\in \mathbb{R}$.

Observe that $X$ is a continuous random variable iff its distribution function is continuous at every $x$. 

### Densities of continuous random variables

> [!Definition]
> A *density function with respect to integration* is a nonnegative integrable function $f$ such that 
> $$
> \int_{-\infty}^{\infty} f(x) \, dx =1.
> $$

Note that if $f$ is a density function, then the function $F$ defined by
$$
\begin{align}
F(x)=\int_{-\infty}^{x} f(y) \, dy, \quad x\in \mathbb{R} \quad\quad (1)
\end{align}
$$
is a continuous function (follows from a generalization of [[ANA1_L28#Integration and differentiation|this]] theorem) satisfying all the properties of a distribution function. Thus, $F$ is a continuous distribution function. We say that this distribution function has density $f$. Further, if $f$ is continuous at a point $x_{0}\in \mathbb{R}$, then $F$ is differentiable at $x_{0}$, and $F'(x_{0})=f(x_{0})$. In other words, $F'=f$ where ever $f$ is continuous. 

Given a distribution function $F$, we say that it admits a density if there exists a function $f:\mathbb{R}\to \mathbb{R}$ satisfying $(1)$. Note that if $F$ admits a density, $(1)$ does not uniquely determine $f$, as one can always change the value of $f$ at finitely many points and not affect the integral. 

Given a distribution function $F$, consider the case when $F$ is differentiable. Then, $f=F'$ satisfies $(1)$ due to the [[ANA1_L28#The fun theorem|fundamental theorem of calculus]] (But isn't that only on finite intervals?)  (How do we know that $f$ is integrable here?). 

Not all continuous distribution functions have densities. A continuous distribution function $F$ admits a density iff $F$ is *absolutely continuous* (ANA 3 stuff). (So does differentiability imply absolute continuity?)

If $X$ is a random variable having density $f$, then
$$
P(a\leq X\leq b)=\int_{a}^{b} f(x) \, dx\quad a\leq b.
$$
#### Densities of functions of continuous random variables

> [!Example]
> Let $X$ be a continuous random variable having density $f$. Let $Y=X^{2}$. What is the density of $Y$? 
> 
> Let $F$ and $G$ denote the distributions of $X$ and $Y$. Then $G(y)=0$ for $y\leq 0$. For $y> 0$, 
> $$
> \begin{align}
> G(y) & =P(Y\leq y)=P(X^{2}\leq y) \\
>  & =P(-\sqrt{ y }\leq X\leq \sqrt{ y }) \\
>  & =F(\sqrt{ y })-F(-\sqrt{ y }).
> \end{align}
> $$
> Everything till this point is totally rigorous. Now, differentiate.
> $$
> G'(y)=\frac{1}{2\sqrt{ y }}(F'(\sqrt{ y })+F'(-\sqrt{ y })).
> $$
> Thus $Y=X^{2}$ has density $g$ given by
> $$
> g=\begin{dcases}
> \frac{f(\sqrt{ y })+f(-\sqrt{ y })}{2\sqrt{ y }} & y> 0 \\
> 0 & y\leq 0.
> \end{dcases}
> $$
> Note that $G$ and $F$ may not be differentiable at all points. To rigorously establish the validity of the above result, define $g$ as above, and integrate it to obtain $F(\sqrt{ y })-F(-\sqrt{ y })$ (subtleties: show that $g$ is a density function: non negativity and integrability. Showing that $\int_{-\infty}^{y} g(x) \, dx=F(\sqrt{ y })-F(-\sqrt{ y })$ shows that $\int_{-\infty}^{\infty} g(x) \, dx=1$ and that $g$ is indeed a density of $G$). 

> [!Example]
> Take $Y=\sigma X+\mu$, $\sigma, \mu\in \mathbb{R}$ , $\sigma> 0$ in the previous example. If we let $F$ and $G$ denote the distributions of $X$ and $Y$, 
> $$
> \begin{align}
> G(y) & =P(Y\leq y) \\
>  & =P(\sigma X+\mu\leq y) \\
>  & =P\left( X\leq \frac{{y-\mu}}{\sigma} \right) \\
>  & =F\left( \frac{y-\mu}{\sigma} \right).
> \end{align}
> $$
> Differentiate.
> $$
> G'(y)=\frac{1}{\sigma}F'\left( \frac{y-\mu}{\sigma} \right).
> $$
> 

The following theorem provides a general solution for some functions of $X$. 

> [!Theorem]
> Let $\phi$ be a differentiable and strictly monotonic function on an interval $I$. Let $X$ be a continuous random variable having density $f$ such that $f(x)=0$ for $x\not\in I$. Then $Y=\phi(X)$ has density $g$ given by $g(y)=0$ for $y\not\in \phi(I)$ and
> $$
> g(y)=f(x)\left| \frac{dx}{dy} \right| \quad y\in \phi(I)\quad \text{and}\quad x=\phi ^{-1}(y).
> $$

[[Introduction to Probability Theory (Paul G. Hoel, Sidney C. Port, Charles J. Stone).pdf#page=131|proof]]
#### Symmetric densities

> [!Definition]
> A density function $f$ is called *symmetric* if $f(x)=f(-x)$ for all $x$.
> A random variable $X$ is called *symmetric* if $X$ and $-X$ have the same distribution function.

> [!Theorem]
> Let $X$ be a random variable that has a density. Then $X$ has a symmetric density iff $X$ is a symmetric random vairable.

We prove this for continuous random variables; the proof for discrete random variables is similar.

> Proof of $\implies$
> Let $X$ have a symmetric density $f$. Then, 
> $$
> \begin{align}
> P(-X\leq x) & =P(X\geq -x) \\
>  & =\int_{-x}^{\infty} f(t) \, dt \\
>   & =\int_{-\infty}^{x} f(-t) \, dt \\
>   & =\int_{-\infty}^{x} f(t) \, dt \\
>   & =P(X\leq x).
> \end{align}
> $$
> Thus, $F_{{-X}}=F_{X}$. 
> 
> Proof of $\impliedby$
> Let $X$ be a symmetric random variable, that is, $X$ and $-X$ have the same distribution function. Now, if $g$ is a density of $X$, it follows that $g$ is also a density of $-X$. From the previous theorem, we have $g(x)=g(-x)$.

If a continuous distribution function $F$ has a symmetric density $f$, then $f(0)=1/2$. The values of negative $x$s can be calculated using the values of positive $x$s : $F(-x)=1-F(x)$. 
#### Uniform density

> [!Definition]
> Let a and $b$ be constants with $a\leq b$. The *uniform density* on the interval $(a, b)$ is the density $f$ defined by 
> $$
> f(x)=\begin{dcases}
> (b-a)^{-1} & a< x< b \\
> 0  & \text{otherwise}.
> \end{dcases}
> $$

Note that proving the existence of a uniformly distributed random variable requires measure theory.

> [!Theorem] Proposition
> Let $X$ be a continuous random variable with differentiable strictly increasing distribution $F$ and density $f=F'$. Then $F(X)$ and $1-F(X)$ have the uniform distribution $[0, 1]$. 

> **Proof**
> $f_{F(X)}(y)=0$ for $y$ not in $(0, 1)$. If $y\in(0, 1)$,
> $$
> \begin{align}
> f_{F(X)}(y) & = f(F^{-1}(y))\left| \frac{d}{dy}F^{-1}(y) \right| \\
>  & = F'(F^{-1}(y))\left| \frac{d}{dy}F^{-1}(y) \right|  \\
>  & = \frac{d}{dy}F(F^{-1}(y)) \\
>  & =1.
> \end{align}
> $$
> The fact that $F^{-1}$ is an increasing function has been used.

This can also be proved without using the density (and thus without assuming $F$ is differentiable): for $y\in(0, 1)$,
$$
\begin{align}
F_{F(X)}(y) & =P(F(X)\leq y)\\
 & =P(X\leq F^{-1}(y)) \\
 & =F(F^{-1}(y)) \\
 & =y.
\end{align}
$$
It follows from monotonicity that if $y\leq 0$, $F_{F(X)}(y)=0$, and if $y\geq 1$, $F_{F(X)}(y)=1$. 

Next, let $F$ again be a continuous strictly increasing distribution function, and let $Y\sim\text{Unif}(0, 1)$. Then, $F^{-1}(Y)$ is a random variable with distribution function $F$: for all $x\in \mathbb{R}$,
$$
\begin{align}
F_{F^{-1}(Y)}(x) & =P(F^{-1}(Y)\leq x) \\
 & =P(Y\leq F(x)) \\
 & =F(x).
\end{align}
$$
Thus, given any continuous strictly increasing distribution function, there exists a random variable with that distribution. 
#### Normal density

> [!Definition]
> The *standard normal density* is usually denoted by $\varphi$, and is defined by
> $$
> \varphi(x)=\frac{1}{\sqrt{ 2\pi }}e^{-x^{2}/2}.
> $$
> Its distribution is denoted by $\Phi$.

If $g$ is any non-negative function such that
$$
0< \int_{-\infty}^{\infty} g(t) \, dt < \infty,
$$
Then $g$ can be normalized by dividing by the value of the above integral to yield a density function. For example, if $g(x)=e^{-x^{2}/2}$, 

$$
\begin{align}
\int_{-\infty}^{\infty} e^{-x^{2}/2} \, dx  & =\sqrt{ \int_{-\infty}^{\infty} e^{-x^{2}/2}\,dx\int_{-\infty}^{\infty} e^{-y^{2}/2} \,dy} \\
 & =\sqrt{\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{-(x^{2}+y^{2})/2} \, dx  \, dy   } \\
 & =\sqrt{ \int_{0}^{\infty} \int_{-\pi}^{\pi} e^{-r^{2}/2} \, rdr  \, d\theta  } \\
 & =\sqrt{ 2\pi \int_{0}^{\infty} r e^{ -r^{2}/2 }  \, dr  } \\
 & = \sqrt{ 2\pi },
\end{align}
$$
so the function $e^{-x^{2}/2}/\sqrt{ 2\pi }$ is a density function. (Nobody seems to know a way to evaluate the above integral besides this whacky trick). 

Let $X$ be a random variable having the standard normal density $\varphi$ and let $Y=\mu+\sigma X$, where $\sigma> 0$. Then, by the preceding example, $Y$ has the density $g$ given by
$$
g(y)=\frac{1}{\sigma}\varphi\left( \frac{{y-\mu}}{\sigma} \right)=\frac{1}{\sigma \sqrt{ 2\pi}}e^{ ^{-(y-\mu)^{2}/2\sigma^{2}}}.
$$
$g$ is called the normal density with mean $\mu$ and variance $\sigma^{2}$, and is denoted by $n(\mu, \sigma^{2})$. From the same example, we know that the distribution function of $Y$ is given by 
$$
P(Y\leq y)=\Phi\left( \frac{y-\mu}{\sigma} \right).
$$
So, If $Y$ is distributed as $n(\mu, \sigma^{2})$ and $a\leq b$, then
$$
P(a\leq Y\leq b)=\Phi\left( \frac{b-\mu}{\sigma} \right)-\Phi\left( \frac{a-\mu}{\sigma} \right).
$$
If a random variable $Y$ is distributed as $n(\mu, \sigma^{2})$, then the random variable $a+bY$, $b\ne 0$ is distributed as
$$
a+b(\mu+\sigma X)=(a+b\mu)+b\sigma X\sim n(a+b\mu, b^{2}\sigma^{2})
$$
where $X\sim n(0, 1)$.  
#### Exponential density

> [!Definition]
> The *exponential density with parameter $\lambda$* is the density $f$ defined by
> $$
> f(x)=\begin{cases}
> \lambda e^{-\lambda x} & x\geq 0 \\
> 0 & x< 0.
> \end{cases}
> $$

The corresponding distribution function is
$$
F(x)=\begin{cases}
1-e^{ -\lambda x } & x\geq 0 \\
0 & x< 0. 
\end{cases}
$$
An important property of exponentially distributed random variables is that if $X$ is such a variable, then
$$
P(X> a)P(X> b)=P(X> a+b),\quad a\geq 0\text{ and }b\geq 0,
$$
or, equivalently,   
$$
P(X\geq a+b\ | \  X> a)=P(X> b),\quad a\geq 0\text{ and }b\geq 0.
$$
This result is similar to the one obtained [[PROB_L4#Geometric distribution|here]] for geometrically distributed random variables.

The above property actually characterizes the family of exponential distributions:

> [!Theorem]
> Let $X$ be random variable such that $P(X> a)P(X> b)=P(X> a+b)$ holds for all $a, b\in \mathbb{R}$. Then either $P(X\geq 0)=0$ or $X$ is exponentially distributed.

[[Introduction to Probability Theory (Paul G. Hoel, Sidney C. Port, Charles J. Stone).pdf#page=138|proof]]
#### Cauchy density

> [!Definition]
> The *Cauchy density* is the density $f$ given by
> $$
> f(x)=\frac{1}{\pi(1+x^{2})},\quad x\in \mathbb{R}.
> $$
 
> [!Theorem] Proposition
> If $X\sim\text{Cauchy}$, then $\frac{1}{X}\sim\text{Cauchy}$.

It can be easily shown that if $X\sim\text{Cauchy}$, $X$ does not have finite expectation. 
#### Gamma density

Consider functions $g$ of the form
$$
g(x)=\begin{cases}
x^{\alpha-1}e^{-\lambda x} & x> 0 \\
0 & x\leq 0.
\end{cases}
$$
Here, we require $\alpha> 0$ and $\lambda> 0$ in order that $g$ be integrable (how do I show that $g$ is integrable under these conditions?). In normalizing $g$ to make it a density we must evaluate 
$$
c=\int_{0}^{\infty} x^{\alpha-1}e^{ -\lambda x } \, dx. 
$$
On making the change of variable $y=\lambda x$, we get
$$
c=\frac{1}{\lambda^{\alpha}}\int_{0}^{\infty} y^{\alpha-1}e^{ -y } \, dy.
$$
There is no simple formula for this integral. Instead, it is used to define what is called the *Gamma function*:

> [!Definition]
> $$
> \Gamma(\alpha)\equiv\int_{0}^{\infty} x^{\alpha-1}e^{ -x } \, dx , \quad\alpha> 0.
> $$

So, $c=\Gamma(\alpha)/\lambda^{\alpha}$. Note the formula
$$
\int_{0}^{\infty} x^{\alpha-1}e^{ -\lambda x } \, dx= \frac{\Gamma(\alpha)}{\lambda^{\alpha}}.
$$
The normalized function $g/c$ is called the *gamma density* with parameters $\alpha$ and $\lambda$, denoted by $\Gamma(\alpha, \lambda)$. 

> [!Definition]
> The *gamma density* is defined as follows.
> $$
> \Gamma(x;\alpha, \lambda)\equiv \begin{dcases}
> \frac{\lambda^{\alpha}}{\Gamma(\alpha)}x^{\alpha-1}e^{ -\lambda x } &  x> 0 \\
> 0 & x\leq 0.
> \end{dcases}
> $$

The exponential densities are special cases of gamma densities. Specifically, the exponential density with parameter $\lambda$ is the same as the gamma density $\Gamma(1, \lambda)$. 

> [!Note] Properties of the gamma function
> $$
> \begin{align}
>  & 1.\ \ \Gamma(1)=1 \\
>  & 2.\ \ \Gamma(1/2)=\sqrt{ \pi } \\
>  & 3.\ \ \Gamma(\alpha+1)=\alpha\Gamma(\alpha) \\
>  & 4.\ \ \Gamma(n)=(n-1)!, \quad n\in \mathbb{N} \\
>  & 5.\ \ \Gamma\left( \frac{n}{2} \right)=\frac{\sqrt{ \pi }(n-1)!}{2^{n-1} \left( \frac{n-1}{2} \right)!}, \quad n\in \mathbb{N}, n\text{ is odd}
> \end{align}
> $$
> 
> ---
> 
> Let $X\sim n(0, 1)$. If $d$ is the density of $X^{2}$, using the formula we derived previously, we get $d$ to be
> $$
> d(x)= \frac{1}{\sqrt{ 2\pi x }}e^{-x/2},\quad x> 0
> $$
> Note that 
> $$
> d(x)=\frac{1}{\sqrt{ 2\pi }} g(x),
> $$
> with $\alpha=1/2$ and $\lambda=1/2$. Since $d$ is a density, it follows that the normalization constant for $g$ is equal to $\sqrt{ 2\pi }$. Thus, 
> $$
> \begin{align}
>    & \frac{1}{\sqrt{ 2\pi }} =\frac{\lambda^{\alpha}}{\Gamma(\alpha)}= \frac{1}{\Gamma(1/2)\sqrt{ 2 }} \\
> \implies & \Gamma(1/2) =\sqrt{ \pi }.
> \end{align}
> $$
> ---
> The third property can be derived by integrating by parts:
> $$
> \begin{align}
> \Gamma(\alpha+1) & =\int_{0}^{\infty} x^{\alpha}e^{ -x } \, dx  \\
>  & =-x^{\alpha}e^{ -x } {\Huge\ |  }^{\infty}_{0}+\int_{0}^{\infty} \alpha x^{\alpha-1}e^{ -x } \, dx  \\
>  & =\alpha\Gamma(\alpha).
> \end{align}
> $$

There is no simple formula for the distribution function corresponding to $\Gamma(\alpha, \lambda)$ except when $\alpha=m$ is a positive integer $\geq 2$, in which case
$$
\begin{align}
\int_{0}^{x} \frac{\lambda^{m}}{(m-1)!}y^{m-1}e^{ -\lambda y } \, dy  & = \left[ -\frac{(\lambda y)^{m-1}e^{ -\lambda y }}{(m-1)!} \right] _{0}^{x}+\int_{0}^{x} \frac{\lambda^{m-1}y^{m-2}e^{ -\lambda y }}{(m-2)!}\, dy \\
 & =\int_{0}^{x} \frac{\lambda^{m-1}y^{m-2}e^{ -\lambda y }}{(m-2)!}\, dy -\frac{(\lambda x)^{m-1}e^{ -\lambda x }}{(m-1)!}.
\end{align}
$$
On repeating $m-1$ times, we get
$$
\int_{0}^{x} \frac{\lambda^{m}}{(m-1)!}y^{m-1}e^{ -\lambda y } \, dy=1-e^{ -\lambda x }\sum_{i=0}^{m-1} \frac{(\lambda x)^{i}}{i!}.
$$
This formula provides a connection between a random variable $X\sim\Gamma(m, \lambda)$ and a random variable $Y\sim\text{Poisn}(\lambda x)$ having a [[PROB_L4#Poisson distribution|Poisson distribution]] with parameter $\lambda x$:
$$
P(X\leq x)=P(Y\geq m).
$$
 
> [!Note] Expectation of the gamma distribution
> Let $X\sim\Gamma(\alpha, \lambda)$. Then, 
> $$
> \begin{align}
> \frac{\lambda^{\alpha}}{\Gamma(\alpha)}\int_{0}^{\infty} x^{\alpha}e^{ -\lambda x } \, dx  & =\frac{\lambda^{\alpha}}{\Gamma(\alpha)} \frac{\Gamma(\alpha+1)}{\lambda^{\alpha+1}} \\
>   &  =\frac{\alpha}{\lambda}< \infty.
> \end{align}
> $$
> Thus, $X$ has finite expectation, and $E(X)=\alpha/\lambda$. 
> 

---

## Expectation of continuous random variables

> [!Definition]
> Let $X$ be a continuous random variable with density $f$. $X$ is said to have *finite expectation* if
> $$
> \int_{-\infty}^{\infty} |t|f(t) \, dt< \infty, 
> $$
> in which case $E(X)$ is defined to be
> $$
> E(X)=\int_{-\infty}^{\infty} tf(t) \, dt.
> $$

> [!Theorem] Proposition
> Let $X$ be a positive continuous random variable with distribution $F$ and density $f$. Then $X$ has finite expectation iff $\int_{0}^{\infty} P(X\geq x) \, dx< \infty$, in which case, 
> $$
> \begin{align}
> E(X) & =\int_{0}^{\infty} P(X\geq x) \, dx \\
>  & =\int_{0}^{\infty} (1-F(x)) \, dx 
> \end{align}
> $$

> **Proof**
> Our proof is not going to be analytically rigorous.
> $$
> \begin{align}
> \int_{0}^{\infty} (1-F(x)) \, dx  & =\int_{0}^{\infty} \left( \int_{x}^{\infty} f(t) \, dt \right)  \, dx 
> \end{align}
> $$
> You can think of the integral on the right as integrating the function $f(t, x)=f(t)$ on the region $\{ (x, t):0\leq x\leq \infty, x\leq t\leq \infty \}$. This region can also be expressed as $\{ (x, t): 0\leq t\leq \infty, 0\leq x\leq t \}$. Thus, the integral becomes
> $$
> \begin{align}
> \int_{0}^{\infty} \left( \int_{0}^{t} f(t) \, dx \right)  \, dt
> \end{align}=\int_{0}^{\infty} tf(t) \, dt =E(X).
> $$

More generally, if $X$ is not positive, 
$$
EX=\int_{0}^{\infty}(1-F(x))  \, dx -\int_{-\infty}^{0} F(x) \, dx 
$$

> [!Theorem]
> Let $X, Y$ be continuous random variables with joint distribution $f$. Let $g:\mathbb{R}\to[0, \infty)$ such that $g(X, Y)$ is a continuous random variable. Then, 
> $$
> E(g(X, Y))=\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y)f(x, y) \, dx  \, dy.
> $$
> 

Even works when $g:\mathbb{R}\to \mathbb{R}$.


> [!Example]
> Let $X\sim n(0,  1)$. Clearly, 
> $$
> \int_{-\infty}^{\infty} |t|e^{-t^{2}/2} \, dt=2< \infty.
> $$
> Thus,
> $$
> E(X)=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty}te^{ -t^{2}/2 }  \, dt=0 ,
> $$
> since the integrand is an odd function.

Since integration is a linear operator, it follows that $E(X+Y)=E(X)+E(Y)$, as with discrete random variables. We can now define variance to be $E[(X-\mu)^{2}]$, which simplifies to $E(X^{2})-\mu^{2}$.

> [!Example]
> Let $X\sim n(0, 1)$. $\text{Var}(X)=E(X^{2})-\mu=E(X^{2})$. Note that
> $$
> \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} |t^{2}|e^{-t^{2}/2} \, dt =1< \infty.
> $$
> Using a generalization of the first property [[PROB_L7#Properties of expectation|here]] with $\varphi(x)=x^{2}$, we have
> $$
> \begin{align}
> E(X^{2})=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} t^{2}e^{ -t^{2}/2 } \, dt=1. 
> \end{align}
> $$

> [!Theorem] LOTUS
> Let $X$ be a continuous random variable with density $f$. Let $g:\mathbb{R}\to [0, \infty)$ be such that $g(X)$ is a continuous random variable. Then,
> $$
> E(g(X))=\int_{-\infty}^{\infty} g(x)f(x) \, dx.
> $$

---

## Moments of continuous random variables

Defined in the same way as moments of discrete random variables are defined.

> [!Example]
> If $X\sim\Gamma(\alpha, \lambda)$, 
> $$
> \begin{align}
> EX^{n} & =\frac{\lambda^{\alpha}}{\Gamma(\alpha)}\int_{0}^{\infty} x^{n+\alpha-1}e^{ -\lambda x } \, dx  \\
>  & =\frac{\lambda^{\alpha}\Gamma(n+\alpha)}{\Gamma(\alpha)\lambda^{n+\alpha}} \\
>  & = \frac{(n+\alpha-1)!}{\lambda^{n}(\alpha-1)!}
> \end{align}
> $$
> If $X\sim\text{Exp}(\lambda)$, $X\sim\Gamma(1, \lambda)$, so
> $$
> EX^{n}= \frac{n!}{\lambda^{n}}.
> $$
> If $X\sim n(0, \sigma^{2})$, $X^{2}\sim\Gamma(1/2, 1/2\sigma^{2})$. Thus, we can compute all even moments of $X$, and hence all odd moments of $X$ also exist.

---

## Independent continuous random variables

