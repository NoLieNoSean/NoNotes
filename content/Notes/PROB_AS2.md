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

# Problem 6

> [!Question]
> If $E(X)=E(X^{2})=0$, show that $P(X=0)=1$.

$\text{Var}(X)=E(X^{2})-E(X)^{2}=0$. From [[PROB_L7#Chebyshev's inequality|Chebyshev's inequality]], it follows that
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