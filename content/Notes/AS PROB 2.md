---
id: "21"
date: February 2025
---


# Problem 1

> [!Question]
> if $X$ is a continuous random variable with distribution function $F$ and density function $f$, show that the random variable $Y=|X|$ is also continuous and express (with proof) its cumulative distribution function and density in terms of $F$ and $f$. Find the density of $Y$ when $X$ has (i) normal distribution (ii) exponential distribution and (iii) Cauchy distribution.

For $Y$ to be a random variable, $\{ \omega\in \Omega\ | \ Y(\omega)\leq r \}\in \mathcal{A}$ for all $r$. 
$$
\begin{align}
\{  \ Y\leq r \} & = \{ |X|\leq r \} \\
	 & =\{ X\leq r \}\cap \{ X\geq-r \},
\end{align}
$$
both of which are in $\mathcal{A}$ since $X$ is a random variable. Hence, $Y$ is a random variable.

FTSOC, assume $Y$ is not continuous, that is, there exists $r\in \mathbb{R}^{+}$ such that $P(Y=r)\ne 0$. This implies $P(X=r, X=-r)=P(X=r)+P(X=-r)\ne 0$. However, this is not possible since $X$ is a continuous random variable.

For $y\geq 0$, 
$$
\begin{align}
F_{Y}(y) & =P(|X|\leq y)\\
 & =P(-r\leq X\leq y) \\
 & =F_{X}(y)-F_{X}(-y)
\end{align}
$$
We can prove that the function defined by
$$
f_{Y}(y)=\begin{cases}
f_{X}(y)+f_{X}(-y) & y\geq 0 \\
0 & \text{otherwise}
\end{cases}
$$
is the density of $|X|$ by integration: for $y\geq 0$,
$$
\begin{align}
\int_{-\infty}^{y} f_{Y}(u) \, du  & =\int_{0}^{y} f_{X}(u)+f_{X}(-u) \, du \\
  & =F_{X}(y)-F_{X}(0)- \int_{0}^{-y} f_{X}(u) \, du \\
 & =F_{X}(y)-F_{X}(0)-[F_{X}(-y)-F_{X}(0)]  \\
 & =F_{X}(y)-F_{X}(-y) \\
 & = F_{Y}(y).
\end{align}
$$

If $X\sim n(0, 1)$, 
$$
f_{|X|}(x)=\begin{dcases}
\frac{2}{\sqrt{ 2\pi }}e^{-x^{2}/2} & x\geq 0 \\\\
0 & \text{otherwise}
\end{dcases}
$$
If $X\sim \exp(\lambda)$, its density remains unchanged, since it is a positive random variable.

If $X\sim\text{Cauchy}$,
$$
f_{|X|}(x)=\begin{dcases}
\frac{2}{\pi(1+x^{2})} & x\geq 0 \\\\
0 & \text{otherwise}
\end{dcases}
$$
# Problem 2

> [!Question]
> Show that the integral 
> $$
> \int_{-\infty}^{\infty} |x - \mu| f(x) \, dx
> $$ 
> becomes minimum when $\mu$ is the median of the distribution with density $f$. (For continuous distributions, the median is the point $x_0 \in \mathbb{R}$ such that $F(x_0) = 1/2$.)

$$
G(\mu)\equiv\int_{-\infty}^{\infty} |x - \mu| f(x) \, dx=\int_{-\infty}^{\mu} (\mu-x)f(x) \, dx +\int_{\mu}^{\infty} (x-\mu) f(x)\, dx .
$$
Assume $f$ is continuous. Then, both integrands on the right are continuous, and the partial derivative with respect to $\mu$ of both exist on $\mathbb{R}$. Thus, we have
$$
\frac{d}{d\mu} \int_{-\infty}^{\mu} (\mu-x)f(x) \, dx=\int_{-\infty}^{\mu} f(x) \, dx +(\mu-\mu)f(\mu),
$$
$$
\frac{d}{d\mu} \int_{\mu}^{\infty} (x-\mu)f(x) \, dx=-\int_{\mu}^{\infty} f(x) \, dx -(\mu-\mu)f(\mu).
$$
So
$$
G'(\mu)=F(\mu)-(1-F(\mu))=2F(\mu)-1
$$
Setting the derivative equal to zero, we get
$$
F(\mu)=\frac{1}{2}.
$$
Thus, the median point is a stationary point, denoted by $x_{0}$. Next, notice that $G'$ inherits the properties of continuity and monotonicity form $F$. Thus, from the mean value theorem, for $x< x_{0}$, $G(x_{0})-G(x)=(x_{0}-x)G'(h)< 0$ for some $h< x_{0}$, and for $x> x_{0}$, $G(x)-G(x_{0})=(x-x_{0})G'(h)> 0$ for some $h> x_{0}$. Thus, $G$ attains its minimum value at $x_{0}$.

# Problem 3

> [!Question]
> Show that
> $$
> F(x, y)=\begin{cases}
> 0 & x+y< 1 \\
> 1 & x+y\geq 1
> \end{cases}
> $$
> is not a joint distribution function.

Consider the region $[0, 1]\times[0, 1]$. The probability of attaining this region is given by
$$
F(1, 1)+F(0, 0)-F(1, 0)-F(0, 1)=1+0-1-1=-1.
$$
Thus, $F$ cannot be a probability distribution function.

# Problem 4

> [!Question]
> If $\log X$ is normally distributed, find the density of $X$.

Let $Y=\log X$. It is given that 
$$
f_{Y}=\frac{1}{\sqrt{ 2\pi }}e^{ -x^{2}/2 }.
$$
We with to find the distribution of $e^{Y}$. Since $e^{ x }$ is a differentiable and strictly monotonic function on $\mathbb{R}$, we have $f_{X}(x)=f_{e^{Y}}(x)=0$ for $x\leq 0$ and 
$$
\begin{align}
f_{X}(x)& =f_{Y}(\log x)\left| \frac{d}{dx} \log x  \right|  \\
 & =\frac{1}{x\sqrt{ 2\pi }}e^{ -(\log x)^{2}/2 }
\end{align}
$$
for $x> 0$.

# Problem 5

> [!Question]
> Suppose $X$ has a symmetric distribution about $a$. Show that $E(X)=a$, provided it exists.

$$
\begin{align}
E(X) & =\int_{-\infty}^{\infty} xf(x) \, dx  \\
 & =\int_{-\infty}^{\infty} (u+a)f(u+a) \, du \\
  & =\int_{-\infty}^{\infty} \underbrace{ uf(u+a) }_{ \text{odd} } \, du +\int_{-\infty}^{\infty} af(u+a) \, du \\
  & =a
\end{align}
$$

# Problem 6

> [!Question]
> If $E(X)=E(X^{2})=0$, show that $P(X=0)=1$.

$\text{Var}(X)=E(X^{2})-E(X)^{2}=0$. From [[LEC PROB 7#Chebyshev's inequality|Chebyshev's inequality]], it follows that
$$
\begin{align}
P(|X|\geq t)=0 \text{ for all }t> 0.
\end{align}
$$
Now, 
$$
\begin{align}
 & P(|X|\geq t)=0  \\
\implies  & P(|X|> t)=0 \\
\implies  & 1-F_{|X|}(t)=0 \\
\implies & F_{|X|}(t)=1\text{ for all }t> 0.
\end{align}
$$
From right continuity of the distribution function, it follows that $F(0)=1$. So, 
$$
P(X=0)=P(|X|=0)=\lim_{ x \to 0^{+} } F(x)-\lim_{ x \to 0^{-} } F(x)=1.
$$

# Problem 7

> [!Question]
> Let $X$ and $Y$ have the joint density
> $$
> f(x, y)=cx^{n_{1}-1}(y-x)^{n_{2}-1}e^{ -y }\quad\text{ for }0< x< y< \infty.
> $$
> Find $c$ and the marginal distributions of $X$ and $Y$.

$$
\begin{align}
 & \int_{0}^{\infty} \int_{x}^{\infty} f(x, y) \, dy  \, dx  \\
 & = \int_{0}^{\infty} e^{ -y }\int_{0}^{y} x^{n_{1}-1}(y-x)^{n_{2}-1} \, dx  \, dy.
\end{align}
$$
For the inner integral, use the substitution $t=x/y$, which yields $x=ty$ and $dx=ydt$.
$$
\begin{align}
\int_{0}^{y} x^{n_{1}-1}(y-x)^{n_{2}-1} \, dx &=\int_{0}^{1} (ty)^{n_{1}-1}(y-ty)^{n_{2}-1} \, ydt  \\
 & =y^{n_{1}+n_{2}-1}\int_{0}^{1} t^{n_{1}-1}(1-t)^{n_{2}-1} \, dt.
\end{align}
$$
The integral is the $\beta$ function $B(n_{1}, n_{2})$, which is equal to $\frac{\Gamma(n_{1})\Gamma(n_{2})}{\Gamma(n_{1}+n_{2})}$. Thus, the inner integral becomes
$$
y^{n_{1}+n_{2}-1} \frac{\Gamma(n_{1})\Gamma(n_{2})}{\Gamma(n_{1}+n_{2})}.
$$
Substituting this back, we get
$$
\frac{\Gamma(n_{1})\Gamma(n_{2})}{\Gamma(n_{1}+n_{2})}\int_{0}^{\infty} y^{n_{1}+n_{2}-1} e^{ -y } \, dy=\frac{\Gamma(n_{1})\Gamma(n_{2})}{\Gamma(n_{1}+n_{2})} \Gamma(n_{1}+n_{2})=\Gamma(n_{1})\Gamma(n_{2}).
$$
Thus, $c=\frac{1}{\Gamma(n_{1})\Gamma(n_{2})}$.
$$
\begin{align}
F_{X}(u)=\lim_{ v \to \infty } F_{X, Y}(u, v) & =  c\int_{0}^{u}x^{n_{1}-1} \int_{x}^{\infty} (y-x)^{n_{2}-1}e^{ -y } \, dy  \, dx  \\
 & =c\int_{0}^{u} x^{n_{1}-1}\int_{0}^{\infty} z^{n_{2}-1}e^{ -x-z } \, dz  \, dx \\
& =c\Gamma(n_{2})\int_{0}^{u} x^{n_{1}-1}e^{ -x }  \, dx  \\
 & = \frac{1}{\Gamma(n_{1})}\int_{0}^{u} x^{n_{1}-1}e^{ -x } \, dx .
\end{align}
$$
Thus, $X\sim\Gamma(n_{1}, 1)$.
$$
\begin{align}
F_{Y}(v)=\lim_{ u \to \infty } F_{X, Y}(u, v) & =c \int_{0}^{v} \int_{0}^{y}  x^{n_{1}-1}(y-x)^{n_{2}-1}e^{ -y }\,dx\,dy \\
 & =c\int_{0}^{v}e^{ -y } \int_{0}^{y}  x^{n_{1}-1}(y-x)^{n_{2}-1}\,dx\,dy \\
& =\frac{1}{\Gamma(n_{1}+n_{2})}\int_{0}^{v} y^{n_{1}+n_{2}-1}e^{ -y }\,dy.
\end{align}
$$
Thus, $Y\sim\Gamma(n_{1}+n_{2})$.
# Problem 8

> [!Question]
> Calculate the characteristic function of a Gamma distribution with parameters $\alpha$ and $\lambda$ and deduce the characteristic function of $\chi^{2}$.

Let $X\sim\Gamma(\alpha, \lambda)$.
$$
\begin{align}
\varphi_{X}(t)= E(e^{ itX }) & =\frac{\lambda^{\alpha}}{\Gamma(\alpha)}\int_{0}^{\infty}x^{\alpha-1}e^{-(\lambda-it)x} \, dx. \\
 & =\frac{\lambda^{\alpha}}{\Gamma(\alpha)} \frac{\Gamma(\alpha)}{(\lambda-it)^{\alpha}} \\
 & =\frac{\lambda^{\alpha}}{(\lambda-it)^{\alpha}}.
\end{align}
$$
Let $Z_{1}\sim n(0, 1)$. If $d$ is the density of $Z_{1}^{2}$, then we can compute $d$ to be
$$
d(x)= \frac{1}{\sqrt{ 2\pi x }}e^{-x/2},\quad x> 0
$$
which is $\Gamma(1/2, 1/2)$. If $Z_{2}, \dots, Z_{n}\sim n(0, 1)$, then
$$
\begin{align}
\varphi_{\chi_{n}^{2}}=\varphi_{Z_{1}^{2}+\dots+Z_{n}^{2}}(t) & =\varphi_{Z_{1}^{2}}(t)\dots\varphi_{Z_{n}^{2}}(t) \\
 & = \frac{{\left( \frac{1}{2} \right)^{n/2}}}{\left( \frac{1}{2}-it \right)^{n/2}} \\
\end{align}
$$
The above the characteristic function of $\Gamma\left( \frac{n}{2}, \frac{1}{2} \right)$. Hence, $\chi_{n}^{2}\sim\Gamma\left( \frac{n}{2}, \frac{1}{2} \right)$.
# Problem 9

> [!Question]
> Let $X_{1}$ and $X_{2}$ be independent exponential variables with parameter $\lambda$. Find the joint density function of $(Y_{1}, Y_{2})$, where $Y_{1}=X_{1}+X_{2}$ and $Y_{2}=X_{1}/X_{2}$, and show that they are independent.

$$
\begin{align}
F_{(Y_{1}, Y_{2})}(y_{1}, y_{2}) & =P(Y_{1}\leq y_{1}, Y_{2}\leq y_{2}) \\
 & =P(X_{1}+X_{2}\leq y_{1}, X_{1}/X_{2}\leq y_{2}) \\
 & = \iint_{S}f_{X_{1}}(x_{1})f_{X_{2}}(x_{2})\,dx_{1}\,dx_{2},
\end{align}
$$
where $S=\{ (x_{1}, x_{2})\ | \ x_{1}+x_{2}\leq y_{1} \}\cap \{ (x_{1}, x_{2}) \ | \ x_{1}/x_{2}\leq y_{2}\}$. The integral can now be expressed as the sum of the following two integrals:
$$
\begin{align}
 & \int_{0}^{y_{1}/(1+y_{2})} \int_{0}^{y_{2}x_{2}} f_{X_{1}}(x_{1})f_{X_{2}}(x_{2}) \, dx_{1}  \, dx_{2}  \\
 & =\int_{0}^{y_{1}/(1+y_{2})} f_{X_{2}}(x_{2})\int_{0}^{y_{2}x_{2}} f_{X_{1}}(x_{1}) \, dx_{1}  \, dx_{2}  \\ 
 & =\lambda\int_{0}^{y_{1}/(1+y_{2})} (e^{-\lambda x_{2} })(1-e^{ -\lambda y_{2}x_{2} })  \, dx_{2}   \\
 & = \left[ \frac{e^{ -\lambda x_{2}(1+y_{2}) }}{1+y_{2}}-e^{ -\lambda x_{2} } \right] _{0}^{y_{1}/(1+y_{2})} \\
 & = \frac{e^{ -\lambda y_{1} }}{1+y_{2}}-e^{ -\lambda y_{1} /(1+y_{2})}-\frac{1}{1+y_{2}}+1,
\end{align}
$$

$$
\begin{align}
 & \int_{y_{1}/(1+y_{2})}^{y_{1}}\int_{0}^{y_{1}-x_{2}} f_{X_{1}}(x_{1})f_{X_{2}}(x_{2}) \, dx_{1}   \, dx_{2} \\
 & =\int_{y_{1}/(1+y_{2})}^{y_{1}}f_{X_{2}}(x_{2})\int_{0}^{y_{1}-x_{2}} f_{X_{1}}(x_{1}) \, dx_{1}   \, dx_{2} \\
 & =\lambda\int_{y_{1}/(1+y_{2})}^{y_{1}}(e^{ -\lambda x_{2} })(1-e^{ -\lambda(y_{1}-x_{2}) })   \, dx_{2} \\
 & =\lambda\int_{y_{1}/(1+y_{2})}^{y_{1}}e^{ -\lambda x_{2} }-e^{ -\lambda y_{1} }  \, dx_{2} \\
 & =\lambda\left[ -\frac{e^{ -\lambda x_{2} }}{\lambda}-x_{2}e^{ -\lambda y_{1} } \right] _{y_{1}/(1+y_{2})}^{y_{1}} \\
 & =e^{ -\lambda y_{1}/(1+y_{2}) } +\frac{\lambda y_{1}}{1+y_{2}}e^{-\lambda y_{1}}-e^{ -\lambda y_{1} }-\lambda y_{1}e^{ -\lambda y_{1} }.
\end{align}
$$
Thus, 
$$
F_{(Y_{1}, Y_{2})}(y_{1}, y_{2})=\frac{e^{ -\lambda y_{1} }}{1+y_{2}}-e^{ -\lambda y_{1} /(1+y_{2})}-\frac{1}{1+y_{2}}+1+e^{ -\lambda y_{1}/(1+y_{2}) } +\frac{\lambda y_{1}}{1+y_{2}}e^{-\lambda y_{1}}-e^{ -\lambda y_{1} }-\lambda y_{1}e^{ -\lambda y_{1} }
$$
Compute the joint density:
$$
f_{(Y_{1}, Y_{2})}(y_{1}, y_{2})=\frac{ \partial^{2} }{ \partial y_{1} \partial y_{2} } F_{(Y_{1}, Y_{2})}(y_{1}, y_{2})=\frac{{\lambda}^{2} y_{1} \mathrm{e}^{-{\lambda}y_{1}}}{\left(y_{2} + 1\right)^{2}}.
$$
Now, 
$$
\begin{align}
f_{Y_{1}}(y_{1}) & =\int_{0}^{y_{1}} f_{X_{1}}(x)f_{X_{2}}(y_{1}-x) \, dx \\
 & = \lambda^{2}\int_{0}^{y_{1}}  e^{ -\lambda y_{1}} \, dx  \\
 & =\lambda^{2}e^{ -\lambda y_{1} }y_{1}
\end{align}
$$
and
$$
\begin{align}
f_{Y_{2}}(y_{2}) & =\int_{0}^{\infty} xf_{X_{1}}(x)f_{X_{2}}(xy_{2}) \, dx \\
	 & =\lambda^{2}\int_{0}^{\infty}xe^{ -\lambda x(1+y_{2})}  \, dx  \\
	 & =\lambda^{2} \left( \frac{1}{(\lambda+\lambda y_{2})^{2}} \right) \\
	 & =\frac{1}{(1+y_{2})^{2}}.
\end{align}
$$
Since
$$
\begin{align}
f_{(Y_{1}, Y_{2})}=f_{Y_{1}}f_{Y_{2}},
\end{align}
$$
it follows that $Y_{1}$ and $Y_{2}$ are independent random variables.