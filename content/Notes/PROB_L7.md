## Expectation

Suppose $X$ is any discrete random variable having possible values $x_{1}, x_{2}, \dots$. We would like to define the expectation of $X$ as
$$
EX=\sum_{j=1}^{\infty} x_{j}f(x_{j}).
$$
If the support of $X$ is finite, we are good. In the general discrete case, the definition is valid only if the sum $\sum_{j}|x_{j}|f(x_{j})< \infty$ is defined (basically, the sequence $(x_{j}f(x_{j}))$ must converge absolutely, to avoid [[DMAT_PS1#2 e|Riemann rearrangement]] shenanigans). This leads to the following.

> [!Definition]
> Let $X$ be a discrete random variable having density $f$. If $\sum_{j}|x_{j}|f(x_{j})< \infty$, we say that $X$ has finite expectation and we define its expectation by 
> $$
> EX=\sum_{j=1}^{\infty}x_{j}f(x_{j}).
> $$
> On the other hand if $\sum_{j}|x_{j}|f(x_{j})=\infty$, then we say $X$ does not have finite expectation and $EX$ is undefined.

It should be evident that $X$ has finite expectation iff $|X|$ has finite expectation.

If $X$ has a [[PROB_L3#Binomial distribution|binomial distribution]] with parameters $n$ and $p$, $EX=np$. 

If $X$ is [[PROB_L4#Poisson distribution|Poisson distributed]] with parameter $\lambda$, $EX=\lambda$.

If $X$ has a [[PROB_L4#Geometric distribution|geometric distribution]] with parameter $p$, $EX=\frac{{1-p}}{p}$.

[[Introduction to Probability Theory (Paul G. Hoel, Sidney C. Port, Charles J. Stone) (Z-Library).pdf#page=93|ref]]

### Properties of expectation

> [!Theorem] Theorem 1
> Let $\mathbf{X}$ be a discrete $r$-dimensional random vector having density $f$ and let $\varphi$ be a real valued function on $\mathbb{R}^{r}$. Then, the random variable $Z=\varphi(\mathbf{X})$ has finite expectation iff
> $$
> \sum_{\mathbf{x}}|\varphi(\mathbf{x})|f(\mathbf{x})< \infty.
> $$
> If $Z$ has finite expectation, 
> $$
> EZ=\sum_{\mathbf{x}}\varphi(\mathbf{x})f(\mathbf{x}).
> $$

> **Proof**
> Clearly, 
> $$
> \sum_{j}|z_{j}|f_{Z}(z_{j})=\sum_{\mathbf{x}}|\varphi(\mathbf{x})|f_{\mathbf{X}}(\mathbf{x}).
> $$
> Thus, $Z$ has finite expectation iff $\sum_{\mathbf{x}}|\varphi(\mathbf{x})|f(\mathbf{x})< \infty$. Similarly, it is clear that
> $$
> \sum_{j}z_{j}f_{Z}(z_{j})=\sum_{\mathbf{x}}\varphi(\mathbf{x})f_{\mathbf{X}}(\mathbf{x}),
> $$
> and the second part follows.

> [!Theorem] Theorem 2
> Let $X$ and $Y$ be two random variables having finite expectation.
> 1. If $c$ is a constant and $P(X=c)=1$, then $EX=c$.
> 2. If $c$ is a constant, then $cX$ has finite expectation and $E(cX)=cEX$. 
> 3. $X+Y$ has finite expectation and $E(X+Y)=EX+EY$.
> 4. Suppose $P(X\geq Y)=1$. Then $EX\geq EY$; moreover $EX=EY$ iff $P(X=Y)=1$.
> 5. $|EX|\leq E|X|$.

> **Proof of 3**
> 
> Let $\mathbf{W}=(X, Y)$. Let $\varphi:\mathbb{R}^{2}\to \mathbb{R}$ be defined by $\varphi(x, y)=x+y$. Then, $X+Y=\varphi(\mathbf{W})$ has finite expectation if
> $$
> \begin{align}
> \sum_{\mathbf{w}}|\varphi(\mathbf{w})|f_{\mathbf{W}}(\mathbf{w})\leq \infty 
> \end{align}
> $$
> Now, 
> $$
> \begin{align}
> \sum_{x, y}|x+y|f_{\mathbf{W}}(x, y) & \leq \sum_{x, y} |x|f_{\mathbf{W}}(x, y)+\sum_{x, y}|y|f(x, y) \\
> 	 & =\sum_{x}|x|\sum_{y}f_{\mathbf{W}}(x, y)+\sum_{y}|y|\sum_{x}f_{\mathbf{W}}(x, y) \\
> 	 & =\sum_{x}|x|f_{\mathbf{x}}(x)+\sum_{y}|y|f_{\mathbf{Y}}(y)\leq \infty.
> 
> \end{align}
> $$
> Hence, $X+Y$ has finite expectation. From the definition of expectation, we get
> $$
> \begin{align}
> E(X+Y) & =\sum_{x, y}(x+y)f(x, y) \\
> 	 & =\sum_{x, y}xf(x, y)+\sum_{x, y}yf(x, y) \\
> 	 & =EX+EY.
> 
> \end{align}
> $$
> **Proof of 4**
> Let $Z=X-Y$. 
> $$
> \sum_{z}zf_{Z}(z)=EZ=E(X-Y)=EX-EY.
> $$
> Since $P(Z\geq 0)=P(X\geq Y)=1$, $z> 0$ for all $z$ in the support of $Z$. Thus, $EX-EY\geq 0$. If $EX=EY$, all $z$ in the support of $Z$ are forced to be $0$, so we get $P(Z=0)=P(X=Y)=1$. 

> [!Theorem] Theorem 3
> Let $X$ be a random variable such that for some constant $M$, $P(|X|\leq M)=1$. Then $X$ has finite expectation and $|EX|\leq M$. 

> [!Theorem] Theorem 4
> Let $X$ and $Y$ be two independent random variables having finite expectations. Then $XY$ has finite expectation and $E(XY)=(EX)(EY)$.

> **Proof**
> Since $X$ and $Y$ are independent, the joint density of $X$ and $Y$ is $f_{X}(x)f_{Y}(y)$. Thus
> $$
> \begin{align}
> \sum_{x, y}|xy|f(x, y) & =\sum_{x, y}|x||y|f_{X}(x)f_{Y}(y) \\
>  & =\left( \sum_{x}|x|f_{X}(x) \right)\left( \sum_{y}|y|f_{Y}(y) \right)\leq \infty.
> \end{align}
> $$
> So, $XY$ has finite expectation. Using Theorem $1$, we can conclude that $E(XY)=(EX)(EY)$.


> [!Theorem] Theorem 5
> Let $X$ be a nonnegative integer-valued random variable. Then $X$ has finite expectation iff the series $\sum_{x=1}^{\infty}P(X\geq x)$ converges. If the series does converge, then $EX=\sum_{x=1}^{\infty}P(X\geq x)$.

> **Proof**
> Follows from the fact that
> $$
> \sum_{x=1}^{\infty} xP(X=x)=\sum_{x=1}^{\infty} P(X\geq x).
> $$

---

## Moments

Let $X$ be a discrete random variable, and let $r\geq 0$ be an integer. We say that $X$ has a moment of order $r$ if $X^{r}$ has finite expectation. In that case we define the $r$th moment of $X$ as $EX^{r}$. If $X$ has a moment of order $r$, then the $r$th moment of $X-\mu$, where $\mu=EX$, is called the $r$th *central moment* of $X$. 
$$
EX^{r}=\sum_{x}x^{r}f(x)
$$
$$
E(X-\mu)^{r}=\sum_{x}(x-\mu)^{r}f(x).
$$
> [!Theorem] Theorem 6
> If the random variables $X$ and $Y$ have moments of order $r$, then $X+Y$ also has a moment of order $r$.

If $X$ is a random variable having finite second moment, then the *variance* of $X$, denoted by $V(X)$, is defined to be the second central moment of $X$:
$$
V(X)=E(X-EX)^{2}
$$
By expanding the right hand side, we get $V(X)-EX^{2}-(EX)^{2}$. The nonnegative number $\sigma=\sqrt{ V(X) }$ is called the *standard deviation* of $X$ or of $F_{X}$.