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
#### Uniform density

> [!Definition]
> Let a and $b$ be constants with $a\leq b$. The *uniform density* on the interval $(a, b)$ is the density $f$ defined by 
> $$
> f(x)=\begin{dcases}
> (b-a)^{-1} & a< x< b \\
> 0  & \text{otherwise}.
> \end{dcases}
> $$

#### Normal density

> [!Definition]
> The *standard normal density* is usually denoted by $\varphi$, and is defined by
> $$
> \varphi(x)=\frac{1}{\sqrt{ 2\pi }}e^{-x^{2}/2}.
> $$
> Its distribution is denoted by $\Phi$.

Let $X$ be a random variable having the standard normal density $\varphi$ and let $Y=\mu+\sigma X$, where $\sigma> 0$. Then, by the preceding example, $Y$ has the density $g$ given by
$$
g(y)=\frac{1}{\sigma}\varphi\left( \frac{{y-\mu}}{\sigma} \right).
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
> Let $X$ be random variable such that $P(X> a)P(X> b)=P(X> a+b)$ holds. Then either $P(X\geq 0)=0$ or $X$ is exponentially distributed.

[[Introduction to Probability Theory (Paul G. Hoel, Sidney C. Port, Charles J. Stone).pdf#page=138|proof]]
#### Cauchy density

> [!Definition]
> The *Cauchy density* is the density $f$ given by
> $$
> f(x)=\frac{1}{\pi(1+x^{2})},\quad x\in \mathbb{R}.
> $$

