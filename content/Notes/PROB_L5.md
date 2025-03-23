## Discrete Random Vector

> [!Definition]
> Let $(\Omega, \mathcal{F}, P)$ be a probability space. $\mathbf{X}:\Omega\to \mathbb{R}^{n}$ is called a *discrete random vector* if $|\mathrm{Im}~\mathbf{X}|\leq\aleph_{0}$ and $\{ \omega\in \Omega\ | \ \mathbf{X}(\omega)=\mathbf{x} \}\in \mathcal{F}$ for all $\mathbf{x}\in \mathbb{R}^{n}$.

If $f:\mathbb{R}^{n}\to \mathbb{R}^{m}$ is any function and $\mathbf{X}:\Omega\to \mathbb{R}^{n}$ is a random vector, $f\circ\mathbf{X}$ is also a random vector. In particular, if $m=1$, $f\circ\mathbf{X}$ is a random variable. 

> [!Theorem]
> Let $\mathbf{X}:\Omega\to \mathbb{R}^{n}$, $\omega\mapsto(X_{1}(\omega), X_{2}(\omega), \dots, X_{n}(\omega))$ where $X_{i}:\Omega\to \mathbb{R}$. $\mathbf{X}$ is a random vector iff each $X_{i}$ is a random variable.

> **Proof of $\implies$**
> Let $f_{i}:\mathbb{R}^{n}\to \mathbb{R}$ be the projection map $(x_{1}, x_{2}, \cdots, x_{n})\mapsto x_{i}$. Then, $x_{i}=f_{i}\circ \mathbf{X}$ is a random variable.
> 
> **Proof of $\impliedby$**
> $$
> (X=(x_{1}, x_{2}, \cdots, x_{n}))=\bigcap_{i=1}^{n} (X_{i}=x_{i}),
> $$
> which is in the $\sigma$ algebra since it is closed under countable intersections.

> [!Definition]
> Let $\mathbf{X}=(X_{1}, X_{2}, \dots, X_{n}):\Omega\to \mathbb{R}^{n}$ be a random vector. Then, $f_{\mathbf{X}}:\mathbb{R}^{n}\to[0, 1]$ defined by $f_{\mathbf{X}}(\mathbf{x})=P(\mathbf{X}=\mathbf{x})$ is called a *joint probability mass function* of the random variables $X_{1}, X_{2}, \dots, X_{n}$, or just the probability mass function of $\mathbf{X}$. The density function $f_{X_{i}}$ of $X_{i}$ is called the $i$th *marginal density* of $\mathbf{X}$ or $f_{\mathbf{X}}$.

As in the [[PROB_L3#Discrete random variables|one dimensional case]], $f_{\mathbf{X}}$ has the following properties:
- $f_{\mathbf{X}}(\mathbf{x})\geq 0$ for all $\mathbf{x}\in \mathbb{R}^{n}$, and $f_{\mathbf{X}}(\mathbf{x})>0$ for at most countably many $\mathbf{x}\in \mathbb{R}^{n}$, which may be denoted by $\{ \mathbf{x}_{1}, \mathbf{x}_{2}, \dots \}$.
- $\sum_{i}f(\mathbf{x}_{i})=1$. 

Also, any real valued function $f$ on $\mathbb{R}^{n}$ having these properties is the density function for some $n$ dimensional random vector, and is called a discrete $n$ dimensional density function.

The marginal densities of $\mathbf{X}$ can be obtained from the density of $\mathbf{X}$:

> [!Theorem]
> Let $f_{\mathbf{X}}$ be the density function of a random vector $\mathbf{X}$ defined on $(\Omega, \mathcal{F}, P)$. If $\mathbf{X}=(X_{1}, X_{2}, \dots, X_{n})$, we know that each $X_{i}$ is a random variable. The probability mass functions $f_{X_{i}}$ can be expressed in terms of $f_{\mathbf{X}}$ like so:
> $$
> f_{X_{i}}(c)=P\left( \bigcup_{\mathbf{x}\in \mathrm{Im}~\mathbf{X}\ | \  x_{i}=c}(\mathbf{X}=\mathbf{x}) \right)=\sum_{\mathbf{x}\in \mathrm{Im}~\mathbf{X}\ | \  x_{i}=c}P(\mathbf{X}=\mathbf{x}). 
> $$

---
## Independent Random Variables

The concept of independent random variables is very similar to independent events. Recall that two events $A$ and $B$ are independent if $P(A\cap B)=P(A)P(B)$. We say discrete random variables $X$ and $Y$ are independent if $P(\{ X=x \}\cap \{ Y=y \})=P(X=x)P(Y=y)$ for all $x, y$. In other words, the joint density of $X$ and $Y$ should be given by $f(x, y)=f_{X}(x)f_{Y}(y)$. 

> [!Definition]
> Let $X_{1}, X_{2}, \dots, X_{r}$ be $r$ discrete random variables having densities $f_{1}, f_{2}, \dots, f_{r}$ respectively. These random variables are said to be *mutually independent* if their joint density function $f$ is given by
> $$
> f(x_{1}, x_{2}, \dots, x_{r})=f_{1}(x_{1})f_{2}(x_{2})\dots f_{r}(x_{r}).
> $$
> 

If $A_{1}, A_{2}, \dots, A_{r}$ are any $r$ subsets of $R$, then
$$
P(X_{1}\in A_{1}, \dots, X_{r}\in A_{r})=P(X_{1}\in A_{1})\dots P(X_{r}\in A_{r}).
$$
To see this, note that
$$
\begin{align}
P(X_{1}\in A_{1}, \dots, X_{r}\in A_{r}) & =\sum_{x_{1}\in A_{1}}\dots \sum_{x_{r}\in A_{r}}P(X_{1}=x_{1}, \dots, X_{r}=x_{r}) \\
 & =\sum_{x_{1}\in A_{1}}\dots \sum_{x_{r}\in A_{r}}P(X_{1}=x_{1})\dots P(X_{r}=x_{r}) \\
 & = \prod_{i=1}^{r} \left( \sum_{x\in A_i}P(X_{i}=x)  \right)  \\
 & =\prod_{i=1}^{r} P(X_{i}\in A_{i}).
\end{align}
$$

> [!Theorem] Proposition
> Let $X$ and $Y$ be independent random variables, and let $f, g:\mathbb{R}\to \mathbb{R}$. Then, $f\circ X$ and $g\circ Y$ are independent random variables.

> [!Theorem] Proposition
> Let $f_{1}$ and $f_{2}$ be two probability mass functions. Then, there exists $(\Omega, \mathcal{F}, P)$ and $X, Y:\Omega\to \mathbb{R}$ such that $f_{X}=f_{1}$, $f_{Y}=f_{2}$, and $X$ and $Y$ are independent.

[[Introduction to Probability Theory (Paul G. Hoel, Sidney C. Port, Charles J. Stone).pdf#page=74|Example 14 here]] is pertinent.

### The multinomial distribution

We have previously seen that if $X_{1}, X_{2}, \dots, X_{n}$ have a common Bernoulli density with parameter $p$ ($f(1)=p$, $f(0)=1-p$), then $S_{n}=X_{1}+X_{2}+\dots X_{n}$ is [[PROB_L3#Binomial distribution|binomially distributed]] with parameters $n$ and $p$. Trials that result in either success or failure are called Bernoulli trials, and the above situation is described by saying we perform $n$ Bernoulli trials with common probability $p$ for success. 

More generally, consider an experiment, such as rolling a die, that can result in a finite number $r$ of distinct possible outcomes. Let $Y$ be a random variable which assumes the values $1, \dots, r$ so that $\{ Y=i \}$ represents the fact that the experiment yielded the $i$th outcome. Let $p_{i}=P(Y=i)$. An n-fold independent repetition of the experiment can be represented by the random vector $(Y_{1}, Y_{2}, \dots, Y_{n})$, where $Y_{1}, Y_{2}, \dots, Y_{n}$ have the same distribution as $Y$ and are independent. Now, let $X_{i}$, $i=1, 2, \dots, r$, denote the number of trials that yield the $i$th outcome. The joint density of $X_{1}, X_{2}, \dots, X_{r}$ follows the multinomial distribution with parameters $n$ and $p_{1}, p_{2}, \dots, p_{r}$:

$$
\begin{align}
f(x_{1}, x_{2}, \dots, x_{r})=\begin{dcases}
\frac{n!}{(x_{1}!)\dots(x_{r}!)}p_{1}^{x_{1}}\dots p_{r}^{x_{r}} & x_{i}\in \mathbb{Z}_{\geq 0 }, \sum x_{i}=n \\
0 & \text{otherwise.}
\end{dcases}
\end{align}
$$
Note that the random variables $X_{1}, \dots, X_{r}$ are not independent. In fact, knowing any $r-1$ of them determines the $r$th. 

### Poisson Approximation to the binomial distribution

Given $\lim_{ n \to \infty }np_{n}\to\lambda$, 
$$
\lim_{ n \to \infty } \binom{n}{k}(p_{n})^{k}(1-p_{n})^{n-k}=\frac{\lambda^{k}}{k!}e^{-\lambda}.
$$
So, the limit of the binomial distribution with parameters $n$ and $p_{n}$ as $n\to \infty$ is the poisson distribution with parameter $\lambda$. 