## Expectation

Suppose $X$ is any discrete random variable having possible values $x_{1}, x_{2}, \dots$. We would like to define the expectation of $X$ as
$$
EX=\sum_{j=1}^{\infty} x_{j}f(x_{j}).
$$
If the support of $X$ is finite, we are good. In the general discrete case, the definition is valid only if the sum $\sum_{j}|x_{j}|f(x_{j})$ is defined (basically, the sequence $(x_{j}f(x_{j}))$ must converge absolutely, to avoid [[DMAT_PS1#2 e|Riemann rearrangement]] shenanigans). This leads to the following.

> [!Definition]
> Let $X$ be a discrete random variable having density $f$. If $\sum_{j}|x_{j}|f(x_{j})< \infty$, we say that $X$ has finite expectation and we define its *expectation* by 
> $$
> EX=\sum_{j=1}^{\infty}x_{j}f(x_{j}).
> $$
> On the other hand if $\sum_{j}|x_{j}|f(x_{j})=\infty$, then we say $X$ does not have finite expectation and $EX$ is undefined.

It should be evident that $X$ has finite expectation iff $|X|$ has finite expectation.
### Properties of expectation

> [!Theorem] Property 1 (LOTUS)
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

> [!Theorem] Property 2
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

> [!Theorem] Property 3
> Let $X$ be a random variable such that for some constant $M$, $P(|X|\leq M)=1$. Then $X$ has finite expectation and $|EX|\leq M$. 

> [!Theorem] Property 4
> Let $X$ and $Y$ be two independent random variables having finite expectations. Then $XY$ has finite expectation and $E(XY)=(EX)(EY)$.

> **Proof**
> Since $X$ and $Y$ are independent, the joint density of $X$ and $Y$ is $f_{X}(x)f_{Y}(y)$. Thus
> $$
> \begin{align}
> \sum_{x, y}|xy|f(x, y) & =\sum_{x, y}|x||y|f_{X}(x)f_{Y}(y) \\
>  & =\left( \sum_{x}|x|f_{X}(x) \right)\left( \sum_{y}|y|f_{Y}(y) \right)\leq \infty.
> \end{align}
> $$
> So, $XY$ has finite expectation. Using Property $1$, we can conclude that $E(XY)=(EX)(EY)$.

> [!Theorem] Property 5
> Let $X$ be a nonnegative integer-valued random variable. Then $X$ has finite expectation iff the series $\sum_{x=1}^{\infty}P(X\geq x)$ converges. If the series does converge, then $EX=\sum_{x=1}^{\infty}P(X\geq x)$.

> **Proof**
> Follows from the fact that
> $$
> \sum_{x=1}^{\infty} xP(X=x)=\sum_{x=1}^{\infty} P(X\geq x).
> $$

---
## Moments

> [!Definition]
> Let $X$ be a discrete random variable, and let $r\geq 0$ be an integer. We say that $X$ has a moment of order $r$ if $X^{r}$ has finite expectation. In that case we define the *$r$th moment* of $X$ as $EX^{r}$. If $X$ has a moment of order $r$, then the $r$th moment of $X-\mu$, where $\mu=EX$, is called the *$r$th central moment* of $X$. 
> $$
> EX^{r}=\sum_{x}x^{r}f(x);
> $$
> $$
> E(X-\mu)^{r}=\sum_{x}(x-\mu)^{r}f(x).
> $$
> 

### Properties of Moments

> [!Theorem] Property 1
> If $X$ has a moment of order $r$, then $X$ has a moment of order $k$ for all $k\leq r$. 

> **Proof**
> Let $k\leq r$. For any $x$ in the support of $X$, it is always true that $|x|^{k}\leq |x|^{r}+1$. Since $\sum_{x}(|x|^{r}+1)f(x)=EX^{r}+1$, it follows from the [[ANA1_L30#Comparison test|comparison test]] that $\sum |x|^{k}f(x)$ converges. Thus, $X^{k}$ has finite expectation.  

> [!Example] A random variable which does not have finite first moment
> Let $f$ be the function defined on $\mathbb{R}$ by
> $$
> f(x)=\begin{dcases}
> \frac{1}{x(1+x)} & x=1, 2, \dots \\
> 0  & \text{otherwise.}
> \end{dcases}
> $$
> $f$ clearly satisfies the [[PROB_L3#Discrete density functions|properties]] of a discrete density function. However, $f$ does not have finite expectation because $\sum_{x}|x|f(x)=\sum_{x} \frac{1}{1+x}$ diverges.

> [!Example] A random variable which has a finite moment of order $r$ but no higher finite moment
> [[ANA1_L30#The p-series|We know]] that the series $\sum_{x\in \mathbb{N}} \frac{1}{x^{k}}$ converges for $k\geq 2$. Let the series $\sum_{x\in \mathbb{N}} \frac{1}{x^{r+2}}$ converge to $\mathscr{C}$. Let $X$ be a random variable with density
> $$
> f(x)=\begin{dcases}
> \frac{1}{\mathscr{C}x^{r+2}} & x=1, 2, \dots \\
> 0 & \text{otherwise.}
> \end{dcases}
> $$
> Then,
> $$
> EX^{r}=\sum_{x\in \mathbb{N}} \frac{1}{\mathscr{C}x^{2}}= \frac{\pi^{2}}{6\mathscr{C}}.
> $$
> But, $EX^{r+1}$ and all higher moments are not finite.

We know that the $r$th central moment of $X$ exists given $X$ has a moment of order $r$ because of the following theorem.

> [!Theorem] Property 2
> If the random variables $X$ and $Y$ have moments of order $r$, then $X+Y$ also has a moment of order $r$.

### Variance

> [!Definition]
> If $X$ is a random variable having finite second moment, then the *variance* of $X$, denoted by $V(X)$, is defined to be the second central moment of $X$:
> $$
> V(X)=E[(X-EX)^{2}].
> $$
> The nonnegative number $\sigma=\sqrt{ V(X) }$ is called the *standard deviation* of $X$ or $f_{X}$.

By expanding the right hand side, we get 
$$
V(X)=EX^{2}-(EX)^{2}.
$$
Note that $\text{Var}(X) =0$ iff $X$ is a constant.

$EX$ and $\text{Var}(X)$ can be computed using the [[PROB_L6#The probability generating function|PGF]] for $X$:
$$
EX=\Phi'_{X}(1),
$$
$$
\text{Var}(X)=\Phi''_{X}(1)+\Phi'_{X}(1)-(\Phi'_{X}(1))^{2}.
$$

---
## Variance of a sum

Let $X$ and $Y$ be two random variables each having finite second moment. Then $X+Y$ has finite second moment and hence finite variance. Also, 
$$
\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)+2E[(X-{EX})(Y-{EY})].
$$
The quantity $E[(X-{EX})(Y-EY)]$ is called the *covariance* of $X$ and $Y$. Thus, 
$$
\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)+2\text{Cov}(X, Y).
$$
Further, 
$$
\text{Cov}(X, Y)=E(XY)-(EX)(EY).
$$
From this, it is clear that $\text{Cov}(X, Y)=0$ when $X$ and $Y$ are independent (the converse is not true). So, if $X$ and $Y$ are independent, $\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)$. 

More generally, if $X_{1}, \dots, X_{n}$ are $n$ random variables each having a finite second moment, then
$$
\text{Var}\left( \sum_{i=1}^{n} X_{i} \right)=\sum_{i=1}^{n} \text{Var}(X_{i})+2\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} \text{Cov}(X_{i}, X_{j}).
$$
In particular, if $X_{1}, \dots, X_{n}$ are mutually independent, then
$$
\text{Var}\left( \sum_{i=1}^{n} X_{i} \right)=\sum_{i=1}^{n} \text{Var}(X_{i}).
$$
In particular, if $X_{1}, \dots, X_{n}$ are mutually independent random variables having a common variance $\sigma^{2}$ (for example, if they had the same density), then
$$
\text{Var}(X_{1}+\dots+X_{n})=n\text{Var}(X_{1})=n\sigma^{2}.
$$
Another useful fact is that $\text{Var}(aX)=a^{2}\text{Var}(X)$. 

### The Schwarz inequality

> [!Theorem] 
> Let $X$ and $Y$ have finite second moments. Then, 
> $$
> [E(XY)]^{2}\leq (EX^{2})(EY^{2}).
> $$
> Equality holds iff either $P(Y=0)=1$ or $P(X=aY)=1$ for some constant $a$.

**Proof**
If $P(Y=0)=1$ or $P(X=aY)=1$ equality holds trivially. 
  
> [!Note]- Sorry, I'm stupid (Not you, **I** am stupid)
> If $P(X=aY)=1$, then
> $$
> \begin{align}
> E(XY) & =\sum_{x, y}xyP(X=x, Y=y) \\
>  & =\sum_{y}y\sum_{x}xP(X=x, Y=y) \\
>  & =\sum_{y}y\left(ayP(X=ay, Y=y)+ \sum_{x\ne ay}xP(X=x, Y=y) \right)
> \end{align}
> $$
> Now, $\{ X=x, Y=y \}$ where $x\ne ay$ is a subset of $\{ X\ne aY \}$. $1=P(\{ X=aY \}\sqcup\{ X\ne aY \})=P(X=aY)+P(X\ne aY)$ so $P(X\ne aY)=0$. Now, $P(X=x, Y=y)\leq P(X\ne aY)$ when $x\ne ay$ so it follows that $P(X=x, Y=y)=0$ when $x\ne ay$. Therefore, 
> $$
> \begin{align}
> E(XY) & =\sum_{y}ay^{2}P(X=ay, Y=y)
> \end{align}
> $$
> Now, $P(Y=y)=P(Y=y, X=ay)+P(Y=y, X\ne ay)=P(Y=y, X=ay)$. Thus, 
> $$
> E(XY)=\sum_{y}ay^{2}P(Y=y)=aE(Y^{2}).
> $$
> Also, 
> $$
> \begin{align}
> E(X^{2}) & =\sum_{x}x^{2}P(X=x) \\
>  & =\sum_{ay}(ay)^{2}P(X=ay) \\
>  & =\sum_{ay}(ay)^{2}P(Y=y) \\
>  & =a^{2}E(Y^{2})
> \end{align}
> $$
> 

### The correlation coefficient

Applying the Schwarz inequality to the random variables $(X-EX)$ and $(Y-EY)$, we see that 
$$
(E[(X-EX)(Y-EY)])^{2}\leq[E(X-EX)^{2}][E(Y-EY)^{2}],
$$
that is, 
$$
[\text{Cov}(X, Y)]^{2}\leq\text{Var}(X)\text{Var}(Y);
$$
$$
\text{Cov}(X, Y)\leq \sqrt{  \text{Var}(X)\text{Var}(Y)}.
$$
For two random variables $X$ and $Y$ having finite non-zero variances, the quantity
$$
\rho(X, Y)\equiv \frac{\text{Cov}(X, Y)}{\sqrt{ \text{Var(X)}\text{Var}(Y) }}
$$
is called the *correlation coefficient* of $X$ and $Y$. Clearly, $-1\leq\rho(X, Y)\leq 1$. 

---
## Chebyshev's inequality

Let $X$ be a nonnegative random variable having finite expectation, and let $t$ be a positive real number. Definite the random variable $Y$ by setting $Y=0$ if $X< t$ and $Y=t$ if $X\geq t$. Then, 
$$
EY=tP(Y=t)+0P(Y=0)=tP(Y=t)=tP(X\geq t).
$$
Now clearly, $X\geq Y$ and hence $EX\geq EY$. Thus
$EX\geq EY=tP(X\geq t)$ or
$$
P(X\geq t)\leq \frac{EX}{t}.
$$
If we apply the the above inequality to the random variable $(X-\mu)^{2}$ and the number $t^{2}$, we get Chebyshev's inequality:
$$
P((X-\mu)^{2}\geq t^{2})\leq \frac{E(X-\mu)^{2}}{t^{2}}=\frac{\text{Var}(X)}{t^{2}}.
$$

> [!Theorem] Chebyshev's inequality
> Let $X$ be a random variable with mean $\mu$ and finite variance. Then for any real number $t> 0$
> $$
> P(|X-\mu|\geq t)\leq \frac{\text{Var}(X)}{t^{2}}.
> $$

Chebyshev's inequality gives an upper bound in terms of $\text{Var}(X)$ and $t$ for the probability that $X$ deviates from its mean by more than $t$ units.

---
## Laws of large numbers
### Weak law of large numbers

Let $X_{1}, \dots, X_{n}$ be $n$ independent random variables having the same distribution. These random variables may be thought of as $n$ independent measurements of some quantity that is distributed according to their common distribution. Suppose that the common distribution of these random variables has finite mean $\mu$. Then for $n$ sufficiently large we would expect that their arithmetic mean $S_{n}/n=(X_{1}+\dots+X_{n})/n$ should be close to $\mu$. If the $X_{i}$ also have finite variance, then
$$
\text{Var}\left( \frac{S_{n}}{n} \right) =\frac{n\sigma^{2}}{n^{2}}=\frac{\sigma^{2}}{n}
$$
and thus $\text{Var}(S_{n}/n)\to 0$ as $n\to \infty$, that is, as $n$ gets large, the distribution $S_{n}/n$ becomes more concentrated about its mean $\mu$. More precisely, by applying Chebyshev's inequality to $S_{n}/n$ we obtain
$$
P\left( \left| \frac{S_{n}}{n}-\mu \right| \geq\delta \right)\leq \frac{\text{Var}(S_{n}/n)}{\delta^{2}}=\frac{\sigma^{2}}{n\delta^{2}} .
$$
It follows that for any $\delta> 0$, 
$$
\lim_{ n \to \infty } P\left( \left| \frac{S_{n}}{n}-\mu \right|\geq \delta  \right)=0.
$$
The number $\delta$ can be thought of as the desired accuracy in the approximation of $\mu$ by $S_{n}/n$. The above equation assures us that no matter how small $\delta$ may be, the probability that $S_{n}/n$ approximates $\mu$ to within this accuracy converges to $1$ as the number of observations gets large. This is called the *Weak Law of Large Numbers*. 

> [!Theorem] Weak law of large numbers
> Let $X_{1}, X_{2}, \dots, X_{n}$ be independent random variables having a common distribution with finite expectation $\mu$ and let $S_{n}=X_{1}+\dots+X_{n}$. Then for any $\delta> 0$, 
> $$
> \lim_{ n \to \infty } P\left( \left| \frac{S_{n}}{n}-\mu \right| \geq \delta \right)=0.
> $$

### Strong law of large numbers

> [!Definition]
> We say that a sequence of random variables $\{ Y_{n} \}_{n=1}^{\infty}$ *converges in probability* to a random variable $Y$ if for all $\epsilon> 0$, $\lim_{ n \to \infty }P(|Y_{n}-Y|>\epsilon)=0$.

Denote $S_{n}/n$ by $\overline{S}_{n}$. Note that the weak law states that the sequence of events $\{ \overline{S}_{n} \}$ converges in probability to the constant random variable $\mu$. 

> [!Definition]
> We say that a sequence of random variables $\{ Y_{n} \}_{n=1}^{\infty}$ *converges almost surely* to a random variable $Y$ if $\lim_{ n \to \infty }Y_{n}(\omega)=Y(\omega)$ for almost every $\omega$, that is, $P(\{ \omega\ | \ \lim_{ n \to \infty }Y_{n}(\omega)=Y(\omega) \})=1$.

For discrete random variables, this reduces to $\lim_{ n \to \infty }Y_{n}(\omega)=Y(\omega)$ for all $\omega\in \Omega$. 