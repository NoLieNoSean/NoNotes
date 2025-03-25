## Infinite sequences of Bernoulli trials

The distribution of the sum of $r$ independent, identically distributed geometric random variables with parameter $p$ is negative binomially distributed with parameters $r$ and $p$.

---

## The probability generating function

> [!Definition]
> Let $X$ be a nonnegative integer-valued random variable. The probability generating function $\Phi_{X}$ of $X$ is defined as 
> $$
> \begin{align}
> \Phi_{X}(t)=\sum_{x=0}^{\infty} P(X=x)t^{x}=\sum_{x=0}^{\infty} f_{X}(x)t^{x}, \quad -1\leq t\leq 1
> \end{align}
> $$
> 

> [!Important] Probability generating functions of standard distributions
> - Let $X$ have a *binomial distribution* with parameters $n$ and $p$. Then,
> $$
> \Phi_{X}(t)=(pt+1-p)^{n}.
> $$
> - Let $X$ have a *negative binomial distribution* with parameters $\alpha$ and $p$. Then, 
> $$
> \Phi_{X}(t)=  \left( \frac{p}{1-t(1-p)} \right)^{\alpha}.
> $$
> - Let $X$ have a *poisson distribution* with parameter $\lambda$. Then,
> $$
> \Phi_X(t)=e^{\lambda(t-1)}.
> $$
> 

> [!Theorem]
> Let $X_{1}, \dots, X_{r}$ be independent, nonnegative integer-valued random variables. Then, 
> $$
> \Phi_{X_{1}+\dots+X_{r}}(t)=\Phi_{X_{1}}(t)\dots\Phi_{X_{r}}(t).
> $$

If two non-negative integer valued random variables have the same probability generating function, they must have the same distribution. 
### Sums of independent random variables

> [!Theorem]
> Let $X_{1}, \dots, X_{r}$ be independent random variables.
> 1. If $X_{i}$ has the binomial distribution with parameters $n_{i}$ and $p$, then $X_{1}+\dots+X_{r}$ has the binomial distribution with parameters $n_{1}+\dots+n_{r}$ and $p$.
> 2. If $X_{i}$ has the negative binomial distribution with parameters $\alpha_{i}$ and $p$, then $X_{1}+\dots+X_{r}$ has the binomial distribution with parameters $\alpha_{1}+\dots+\alpha_{r}$ and $p$.
> 3. If $X_{i}$ has the poisson distribution with parameter $\lambda$, then $X_{1}+\dots+X_{r}$ has the poisson distribution with parameter $\lambda_{1}+\dots+\lambda_{r}$. 