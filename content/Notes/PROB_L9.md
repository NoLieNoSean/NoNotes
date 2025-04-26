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
> Let $X$ be a continuous random variable with density $f$. Let $g:\mathbb{R}\to \mathbb{R}$ be such that $g(X)$ is a continuous random variable. Then,
> $$
> E(g(X))=\int_{-\infty}^{\infty} g(x)f(x) \, dx.
> $$
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
> >  & = \int_{0}^{\infty} \int_{0}^{g(y)} f_{X}(y) \, du  \, dy \\
> >  & =\int_{0}^{\infty} g(y)f_{X}(y) \, dy   \\
> >  \\
> >  & \int_{-\infty}^{0} F_{g(X)}(u) \, du \\
> >  & =\int_{-\infty}^{0} P(g(X)\leq u) \, du \\
> >  & =\int_{-\infty}^{0} \int_{B}f_{X}(y)\,dy \, du  & B=\{ y\ | \  g(y)< u \} \\
> >  & =\int_{-\infty}^{0} \int_{g(y)}^{0} f_{X}(y) \, du  \, dy  \\
> >  & =-\int_{-\infty}^{0} g(y)f_{X}(y)  \, dy
> > \end{align}
> > $$
> > 
> 

Note that Vasanth erred here; if $g$ is form $\mathbb{R}$ to $[0, \infty)$, the integration bounds still remain $-\infty$ and $\infty$.

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

Defined analogously to [[PROB_L7#Moments|moments of discrete random variables]].

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
> If $X\sim n(0, \sigma^{2})$, $X^{2}\sim\Gamma(1/2, 1/2\sigma^{2})$. Thus, all even moments of $X$ exist, and we can compute them via the gamma density. In a bit, we will show that If a continuous random variable has a moment of order $r$, then it has a moment of order $k$ for all $k\leq r$, [[PROB_L7#Properties of Moments|as we did for discrete random variables]]. It'll then follow that all odd moments of $X$ also exist, and subsequently must be zero due to an odd integrand:
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
\lim_{ y \to \infty } F_{X, Y}(x, y)=F_{X}(x). \\
\end{align}
$$

> [!Theorem]
> Let $X, Y$ be continuous random variables with joint distribution $f$. Let $g:\mathbb{R}^{2}\to [0, \infty)$ such that $g(X, Y)$ is a continuous random variable. Then, 
> $$
> E(g(X, Y))=\int_{-\infty}^{\infty} \int_{-\infty}^{\infty} g(x, y)f(x, y) \, dx  \, dy.
> $$
> 

> **Proof**
> Let $F\equiv F_{g(X, Y)}$ and $f\equiv f_{X, Y}$, the joint density of $X$ and $Y$.
> $$
> \begin{align}
> E(g(X, Y)) & =\int_{0}^{\infty} (1-F(z)) \, dz  \\
>  & = \int_{0}^{\infty} P(g(X, Y)\geq z) \, dz \\
>   & = \int_{0}^{\infty} {\iint _{B}}f(x, y) \,dx\,dy \,\,\, dz,\quad B={\{ (x, y)\ | \  g(x, y)\geq z \}} \\
>  & =\iint_{\mathbb{R}^{2}}\int_{0}^{g(x, y)} f(x, y) \, dz\,\,\,dx\,dy  \\
>  & = \iint_{\mathbb{R}^{2}}g(x, y)f(x, y)\,dx\,dy.
> \end{align}
> $$

If $g:\mathbb{R}^{2}\to \mathbb{R}$, we can write $E(g(X, Y))=E(g^{+}(X, Y))-E(g^{-}(X, Y))$, where $g^{+}\equiv \max(g, 0)$ and $g^{-}\equiv\max(-g, 0)$ are both non negative functions, and apply the previous theorem.

This allows us to prove the linearity of expectation.

> [!Theorem] Linearity of expectation
> Let $X$ and $Y$ be continuous random variables with finite expectation. Then, $E(X+Y)=E(X)+E(Y)$.

> **Proof**
> Let $g:\mathbb{R}^{2}\to \mathbb{R}$ be defined by $(x, y)\mapsto x+y$. Let $f$ be the joint density of $X$ and $Y$. Then, 
> $$
> \begin{align}
>  & E(g(X, Y))=E(X+Y) \\
>  & =\iint_{\mathbb{R}^{2}}(x+y)f(x, y)\,dx\,dy \\
>  & =\int_{-\infty}^{\infty} x\int_{-\infty}^{\infty} f(x, y) \, dy  \, dx +\int_{-\infty}^{\infty} y\int_{-\infty}^{\infty} f(x, y) \, dx  \, dy  \\
>  & = \int_{-\infty}^{\infty} xf_{X}(x) \, dx +\int_{-\infty}^{\infty} yf_{Y}(y) \, dy \\
>   & =E(X)+E(Y).
> \end{align}
> $$

---
# Independent continuous random variables

> [!Definition]
> Random variables $X$ and $Y$ are **independent** if the events $\{ X\leq x \}$ and $\{ Y\leq y \}$ are independent, that is, $F(x, y)=F_{X}(x)F_{Y}(y)$. 

If $X$ and $Y$ are independent iff $f_{X, Y}(x, y)=f_{X}(x)f_{Y}(y)$.