---
tags:
  - PROB
---

# Expectation of continuous random variables

> [!Definition]
> Let $X$ be a continuous random variable with density $f$. $X$ is said to have **finite expectation** if
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
> 
> > [!Proof]-
> > This proof is not analytically rigorous.
> > $$
> > \begin{align}
> > \int_{0}^{\infty} (1-F(x)) \, dx  & =\int_{0}^{\infty} \left( \int_{x}^{\infty} f(t) \, dt \right)  \, dx 
> > \end{align}
> > $$
> > You can think of the integral on the right as integrating the function $f(t, x)=f(t)$ on the region $\{ (x, t):0\leq x\leq \infty, x\leq t\leq \infty \}$. This region can also be expressed as $\{ (x, t): 0\leq t\leq \infty, 0\leq x\leq t \}$. Thus, the integral becomes
> > $$
> > \begin{align}
> > \int_{0}^{\infty} \left( \int_{0}^{t} f(t) \, dx \right)  \, dt
> > \end{align}=\int_{0}^{\infty} tf(t) \, dt =E(X).
> > $$
> 

More generally, if $X$ is not positive, 
$$
EX=\int_{0}^{\infty}(1-F(x))  \, dx -\int_{-\infty}^{0} F(x) \, dx 
$$
(Yes, the sign ahead of the second integral in negative, not positive. Check your integration limits.)

> [!Theorem] LOTUS
> Let $X$ be a continuous random variable with density $f$. Let $g:\mathbb{R}\to [0, \infty)$ be such that $g(X)$ is a continuous random variable. Then,
> $$
> E(g(X))=\int_{-\infty}^{\infty} g(x)f(x) \, dx.
> $$
> 
> > [!Proof]-
> > $$
> > \begin{align}
> > E(g(X)) & =\int_{0}^{\infty}(1-F_{g(X)}(u))  \, du\\
> >   & =\int_{0}^{\infty} P(g(X)> u) \, du \\
> >   & =\int_{0}^{\infty} \int_{B}f_{X}(y)\,dy \, du  & B=\{ y\ | \  g(y)> u \}  \\
> >  & = \int_{-\infty}^{\infty} \int_{0}^{g(y)} f_{X}(y) \, du  \, dy \\
> >  & =\int_{-\infty}^{\infty} g(y)f_{X}(y) \, dy   \\
> > \end{align}
> > $$
> 

> [!Error] Vasanth's proof is incorrect!
> Vasanth stated the theorem for a general function $g:\mathbb{R}\to \mathbb{R}$, and supplied the following proof:
> 
> > [!Proof]-
> > $$
> > E(g(X))=\int_{0}^{\infty}(1-F_{g(X)}(u))  \, du -\int_{-\infty}^{0} F_{g(X)}(u) \, du
> > $$
> > 
> > $$
> > \begin{align}
> > & \int_{0}^{\infty} (1-F_{g(X)}(u)) \, du \\
> >   & =\int_{0}^{\infty} P(g(X)> u) \, du \\
> >   & =\int_{0}^{\infty} \int_{B}f_{X}(y)\,dy \, du  & B=\{ y\ | \  g(y)> u \}  \\
> >  & = \boxed{\int_{0}^{\infty} \int_{0}^{g(y)} f_{X}(y) \, du  \, dy} \\
> >  & =\int_{0}^{\infty} g(y)f_{X}(y) \, dy   \\
> >  \\
> >  & \int_{-\infty}^{0} F_{g(X)}(u) \, du \\
> >  & =\int_{-\infty}^{0} P(g(X)\leq u) \, du \\
> >  & =\int_{-\infty}^{0} \int_{B}f_{X}(y)\,dy \, du  & B=\{ y\ | \  g(y)< u \} \\
> >  & =\boxed{\int_{-\infty}^{0} \int_{g(y)}^{0} f_{X}(y) \, du  \, dy}  \\
> >  & =-\int_{-\infty}^{0} g(y)f_{X}(y)  \, dy
> > \end{align}
> > $$
> > 
> 
> The boxed steps are incorrect; the limits of the first integral in both cases must be $-\infty$ and $\infty$. The way to remedy this is to prove the theorem for a positive function $g$, and then to use the result $E(X)=E(X^{+})-E(X^{-})$ to prove the theorem for general $g$.

Note that Vasanth erred here on another point; if $g$ is form $\mathbb{R}$ to $[0, \infty)$, the integration bounds still remain $-\infty$ and $\infty$.

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

## Variance

We can now define **variance** to be $E[(X-\mu)^{2}]$, which simplifies to $E(X^{2})-\mu^{2}$ (assume linearity of expectation for the moment).

> [!Example]
> Let $X\sim n(0, 1)$. $\text{Var}(X)=E(X^{2})-\mu=E(X^{2})$. Note that
> $$
> \frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} |t^{2}|e^{-t^{2}/2} \, dt =1< \infty.
> $$
> Using the LOTUS property with $\varphi(x)=x^{2}$ yields
> $$
> \begin{align}
> E(X^{2})=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} t^{2}e^{ -t^{2}/2 } \, dt=1. 
> \end{align}
> $$

---
# Moments of continuous random variables

Defined analogously to [[LEC PROB 7#Moments|moments of discrete random variables]].

> [!Example] Examples
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
> If $X\sim n(0, \sigma^{2})$, $X^{2}\sim\Gamma(1/2, 1/2\sigma^{2})$. Thus, all even moments of $X$ exist, and we can compute them via the gamma density. In a bit, we will show that If a continuous random variable has a moment of order $r$, then it has a moment of order $k$ for all $k\leq r$, [[LEC PROB 7#Properties of Moments|as we did for discrete random variables]]. It'll then follow that all odd moments of $X$ also exist, and subsequently must be zero due to an odd integrand:
> $$
> \int_{-\infty}^{\infty} \overbrace{ x^{n}\underbrace{ f_{X}(x) }_{ \text{even} }  }^{ \text{odd} }\, dx =0.
> $$

---
# Joint distributions 

We say the random vector $(X, Y)$ has density $f_{X, Y}$ if
$$

F_{X, Y}(x, y)=\int_{-\infty}^{x} \int_{-\infty}^{y} f_{X, Y}(x, y) \, dy  \, dx .

$$
and
$$
\iint_{-\infty}^{\infty}f_{X, Y}(x, y)  \, dy \,dx=1.
$$
Also, if $f_{X, Y}$ is continuous at $(x, y)$, then $F_{X, Y}$ is differentiable at $(x, y)$, and
$$
\begin{align}
\left( \frac{\partial F_{X, Y}}{\partial x} \right)(x, y)= \int_{-\infty}^{y} f_{X, Y}(x, y) \, dy,\\ \\
\left( \frac{\partial F_{X, Y}}{\partial y} \right)(x, y)= \int_{-\infty}^{x} f_{X, Y}(x, y) \, dx,\\ \\
\left( \frac{\partial^{2} F_{X, Y}}{\partial x\partial y} \right)(x, y)=  f_{X, Y}(x, y).
\end{align}
$$
Also note that
$$
\begin{align}
\lim_{ x \to \infty } F_{X, Y}(x, y)=F_{Y}(y), \\
\lim_{ y \to \infty } F_{X, Y}(x, y)=F_{X}(x), \\
\end{align}
$$
and
$$
\begin{align}
\int_{-\infty}^{\infty} f_{X, Y}(x, y) \, dx =f_{Y}(y), \\
\int_{-\infty}^{\infty} f_{X, Y}(x, y) \, dy =f_{X}(x),
\end{align}

$$

> [!Example]
> Here's now you compute normalization factors:
> 
> $$
> \begin{align}
>  & \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} e^{ -(x^{2}-xy+y^{2})/2 } \, dx  \, dy \\
>  & = \int_{-\infty}^{\infty}e^{ -3y^{2}/8  } \int_{-\infty}^{\infty} e^{ -(x-y/2)^{2}/2 } \, dx  \, dy  \\
>  & =\sqrt{ 2\pi }\int_{-\infty}^{\infty}e^{ -(\sqrt{ 3 }y/2)^{2}/2}   \, dy   \\
>  & =\frac{4\pi}{\sqrt{ 3 }}.
> \end{align}
> $$

> [!Theorem]
> Let $X, Y$ be continuous random variables with joint distribution $f$. Let $g:\mathbb{R}^{2}\to [0, \infty)$ such that $g(X, Y)$ is a continuous random variable. Then, 
> $$
> E(g(X, Y))=\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y)f(x, y) \, dx  \, dy.
> $$
> 
> 
> > [!Proof]-
> > Let $F\equiv F_{g(X, Y)}$ and $f\equiv f_{X, Y}$, the joint density of $X$ and $Y$.
> > $$
> > \begin{align}
> > E(g(X, Y)) & =\int_{0}^{\infty} (1-F(z)) \, dz  \\
> >  & = \int_{0}^{\infty} P(g(X, Y)\geq z) \, dz \\
> >   & = \int_{0}^{\infty} {\iint _{B}}f(x, y) \,dx\,dy \,\,\, dz,\quad B={\{ (x, y)\ | \  g(x, y)\geq z \}} \\
> >  & =\iint_{\mathbb{R}^{2}}\int_{0}^{g(x, y)} f(x, y) \, dz\,\,\,dx\,dy  \\
> >  & = \iint_{\mathbb{R}^{2}}g(x, y)f(x, y)\,dx\,dy.
> > \end{align}
> > $$
> 

We will now prove linearity of expectation for a specific case. The result will be used to prove linearity of expectation generally.

> [!Theorem]
> Let $X$ be a continuous random variable with finite expectation. Define $X^{+}\equiv \max(X, 0)$ and $X^{-}\equiv\max(-X, 0)$ (Clearly, $X=X^{+}-X^{-}$ and $|X|=X^{+}+X^{-}$). Then, $E(X)=E(X^{+})-E(X^{-})$.
> 
> > [!Proof]-
> > Note that $X^{+}$ and $X^{-}$ are not continuous random variables - they have non zero density at $0$. However, since $0$ does not contribute to the expectation, we are (sort of) justified in writing
> > $$
> > \begin{align}
> > E(X^{+}) & =\int_{0}^{\infty} P(X^{+}\geq x) \, dx  \\
> >  &=\int_{0}^{\infty} P(X\geq x) \, dx  \\
> >  &=\int_{0}^{\infty} (1-F_{X}(x)) \, dx \\\\ \\
> > E(X^{-}) & =\int_{0}^{\infty} P(X^{-}\geq x) \, dx  \\
> >  & =\int_{0}^{\infty} P(X\leq -x) \, dx  \\
> >  & =\int_{0}^{\infty} F_{X}(-x) \, dx  \\
> >  & =\int_{-\infty}^{0} F_{X}(x) \, dx 
> > \end{align}
> > $$
> > It follows that
> > $$
> > \begin{align}
> > E(X^{+})-E(X^{-}) & =E(X).
> > \end{align}
> > $$
> > 
> 

So, if $g:\mathbb{R}^{2}\to \mathbb{R}$, we can write $E(g(X, Y))=E(g^{+}(X, Y))-E(g^{-}(X, Y))$, where $g^{+}\equiv \max(g, 0)$ and $g^{-}\equiv\max(-g, 0)$ are both non negative functions, and apply the previous theorem to obtain the general LOTUS property:

$$
\begin{align}
E(g(X, Y)) & = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g^{+}(x, y)f(x, y) \, dx  \, dy -\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g^{-}(x, y)f(x, y) \, dx  \, dy \\
 & =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y)f(x, y) \, dx  \, dy.
\end{align}
$$
This allows us to prove the linearity of expectation.

> [!Theorem] Linearity of expectation
> Let $X$ and $Y$ be continuous random variables with finite expectation. Then, $E(X+Y)=E(X)+E(Y)$.
> 
> > [!Proof]-
> > Let $g:\mathbb{R}^{2}\to \mathbb{R}$ be defined by $(x, y)\mapsto x+y$. Let $f$ be the joint density of $X$ and $Y$. Then, 
> > $$
> > \begin{align}
> >  & E(g(X, Y))=E(X+Y) \\
> >  & =\iint_{\mathbb{R}^{2}}(x+y)f(x, y)\,dx\,dy \\
> >  & =\int_{-\infty}^{\infty} x\int_{-\infty}^{\infty} f(x, y) \, dy  \, dx +\int_{-\infty}^{\infty} y\int_{-\infty}^{\infty} f(x, y) \, dx  \, dy  \\
> >  & = \int_{-\infty}^{\infty} xf_{X}(x) \, dx +\int_{-\infty}^{\infty} yf_{Y}(y) \, dy \\
> >   & =E(X)+E(Y).
> > \end{align}
> > $$
> 

---
# Independent continuous random variables

> [!Definition]
> Random variables $X$ and $Y$ are **independent** if the events $\{ X\leq x \}$ and $\{ Y\leq y \}$ are independent for all $x$ and $y$, that is, $F(x, y)=F_{X}(x)F_{Y}(y)$. 

It follows from the definition that $X$ and $Y$ are independent iff $f_{X, Y}(x, y)=f_{X}(x)f_{Y}(y)$.

If $X$ and $Y$ are independent, it follows that
$$
P(X\in[a, b], Y\in[c, d])=P(X\in[a, b])P(Y\in[c, d]).
$$
This implies, that for any two "reasonable" (I suppose [[Intro to Measure theory#Measures and spaces|measurable]]) sets $A$ and $B$, 
$$
P(X\in A, Y\in B)=P(X\in A)P(Y\in B).
$$

> [!Example]
> Let the joint distribution of $(X, Y)$ be given by
> $$
> f_{(X, Y)}(x, y)=\begin{cases}
> 1 & (x, y)\in[0, 1]\times[0, 1] \\
> 0 & \text{otherwise.}
> \end{cases}
> $$
> We can compute $f_{X}$ and $f_{Y}$:
> $$
> \begin{align}
> f_{X}(x) & =\int_{-\infty}^{\infty} f_{X, Y}(x, y) \, dy \\
>  & =\begin{cases}
> 1 & x\in[0, 1] \\
> 0 & \text{otherwise.}
> \end{cases} \\
>  \\
> f_{Y}(y) & =\int_{-\infty}^{\infty} f_{X, Y}(x, y) \, dx \\
>  & =\begin{cases}
> 1 & y\in[0, 1] \\
> 0 & \text{otherwise.}
> \end{cases}
> \end{align}
> $$
> Notice that $f_{X, Y}(x, y)=f_{X}(x)f_{Y}(y)$. Thus, $X$ and $Y$ are independent.

> [!Example]
> Let the joint distribution of $(X, Y)$ be given by
> $$
>  f_{(X, Y)}(x, y)=\begin{cases}
>  2 & 0\leq x\leq 1, 0\leq y\leq 1, x+y\leq 1 \\
>  0 & \text{otherwise.}
>  \end{cases}
> $$
> Verify that this is indeed a density. Again, we can compute the marginals:
> $$
> \begin{align}
> f_{X}(x) 
>  & =\begin{cases}
> 2(1-x) & x\in[0, 1] \\
> 0 & \text{otherwise.}
> \end{cases} \\
>  \\
> f_{Y}(y) & =\int_{-\infty}^{\infty} f_{X, Y}(x, y) \, dx \\
>  & =\begin{cases}
> 2(1-y) & y\in[0, 1] \\
> 0 & \text{otherwise.}
> \end{cases}
> \end{align}
> $$
> Notice that $f_{X, Y}(x, y)\ne f_{X}(x)f_{Y}(y)$. $X$ and $Y$ are not independent.

> [!Example] Example: $n$ dimensional standard Gaussian
> The two dimensional standard Gaussian (which just means [[LEC PROB 8#Normal density|normal]], btw), which is denoted by $\mathcal{N}(\mathbf{0}, I_{2\times 2})$, is defined like so:
> $$
> \begin{align}
> f(x, y)=\frac{1}{2\pi}e^{ -(x^{2}+y^{2})/2 }, \quad (x, y)\in \mathbb{R}^{^{2}}.
> \end{align}
> $$
> Its marginal densities are
> $$
> \begin{align}
> f_{Y}(y)=\frac{1}{2\pi}e^{ -y^{2}/2 }\int_{-oo}^{\infty}  e^{ -x^{2}/2 }\, dx =\frac{1}{\sqrt{ 2\pi }}e^{ -y^{2}/2 }\sim n(0, 1), \\
> f_{X}(x)=\frac{1}{2\pi}e^{ -x^{2}/2 }\int_{-oo}^{\infty}  e^{ -y^{2}/2 }\, dx =\frac{1}{\sqrt{ 2\pi }}e^{ -x^{2}/2 }\sim n(0, 1).
> \end{align}
> $$
> Note that $f(x, y)=f_{X}(x)f_{Y}(y)$, so if $(X, Y)\sim \mathcal{N}(\mathbf{0}, I_{2\times 2})$, $X$ and $Y$ are independent.

> [!Example]
> Let $X\sim\text{Exp}(\lambda)$, $Y\sim\text{Exp}(\mu)$, $X$ and $Y$ are independent. Find $P(X\leq Y)$.
> $$
> \begin{align}
>  & P(X\leq Y)=E (1_{\{ X\leq Y \}}) \\
>  & =\iint_{\{ (x, y)\ | \  x\leq y \}} f(x, y)\,dy\,dx \\
>  & = \int_{0}^{\infty} \int_{0}^{y} f(x, y) \, dx  \, dy \\
>   & = \int_{0}^{\infty} f(y)\int_{0}^{y} f(x) \, dx  \, dy \\
>  & =\lambda \mu\int_{0}^{\infty}  e^{-\lambda y}\int_{0}^{y}  e^{ -\mu x } \, dx  \, dy  \\
>  & =\lambda \int_{0}^{\infty} e^{ -\lambda y }(1-e^{ -\mu y }) \, dy \\
>  & = \frac{\lambda}{\lambda+\mu}.
> \end{align}
> $$

If $X$ and $Y$ are independent and $f$ and $g$ are functions form $\mathbb{R}$ to $\mathbb{R}$, then $f(X)$ and $g(X)$ are independent.

## Expectation of independent random variables

> [!Theorem]
> $X$ and $Y$ are independent iff $E(XY)=E(X)(Y)$.
> 
> > [!Proof]-
> > If $X$ and $Y$ are independent, then
> > $$
> > \begin{align}
> > E(XY) & =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xyf_{X, Y}(x, y) \, dx  \, dy  \\
> >  & =\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} xyf_{X}(X)f_{Y}(y) \, dx  \, dy \\
> >   & =\left( \int_{-\infty}^{\infty} xf_{X}(x) \, dx  \right) \left( \int_{-\infty}^{\infty} yf_{Y}(y) \, dy  \right)  \\
> >  & =E(X)E(Y).
> > \end{align}
> > $$
> > Conversely, if $E(XY)=E(X)(Y)$, observe that
> > $$
> > \begin{align}
> > F_{X, Y}(x, y) & =P(X\leq x, Y\leq y)\\
> >  & = E~1_{\{ X\leq x, Y\leq y \}} \\
> >  & =E~(1_{\{ X\leq x \}}1_{\{ Y\leq y \}}) \\
> >  & =(E~1_{\{ X\leq x \}})(E~1_{\{ Y\leq y \}}) \\
> >  & =F_{X}(x)F_{Y}(y).
> > \end{align}
> > $$
> > 

