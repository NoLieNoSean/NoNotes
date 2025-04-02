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

Consider the special case when $F$ is differentiable. Then, $f=F'$ satisfies $(1)$ due to the [[ANA1_L28#The fun theorem|fundamental theorem of calculus]].

Not all continuous distribution functions have densities. A continuous distribution function $F$ admits a density iff $F$ is *absolutely continuous* (ANA 3 stuff).

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
> Differentiate.
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
> Note that $F$ may not be differentiable at all points. To rigorously establish the validity of the above result, integrate $g$ to obtain $G$.

> [!Example]
> Take $Y=\sigma X+\mu$, $\sigma, \mu\in \mathbb{R}$ in the previous example. If we let $F$ and $G$ denote the distributions of $X$ and $Y$, 
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

#### Exponential density

> [!Definition]
> The *exponential density with parameter $\lambda$* is the density $f$ defined by
> $$
> f(x)=\begin{cases}
> \lambda e^{-\lambda y} & y> 0 \\
> 0 & y\leq 0.
> \end{cases}
> $$

#### Cauchy density

> [!Definition]
> The *Cauchy density* is the density $f$ given by
> $$
> f(x)=\frac{1}{\pi(1+x^{2})},\quad x\in \mathbb{R}.
> $$

