# Convergence

> [!Definition]
> A sequence of random variables $\{ X_{n} \}_{n=1}^{\infty}$ converges **almost surely** to a random variable $X$ if
> $$
> P\{ \omega\ | \  X_{n}(\omega)\to X(\omega) \}=1.
> $$
> Denoted by $X_{n}\xrightarrow{\text{a.s}}X$.

> [!Definition]
> A sequence of random variables $\{ X_{n} \}_{n=1}^{\infty}$ converges **in probability** to a random variable $X$ if for all $\epsilon> 0$,
> $$
> \lim_{ n \to \infty }P(|X_{n}-X|>\epsilon)=0.
> $$
> Denoted by $X_{n}\xrightarrow{\text{p}}X$.

> [!Definition]
> A sequence $\{ X_{n} \}_{n=1}^{\infty}$ of random variables with distribution functions $\{ F_{n} \}_{n=1}^{\infty}$ converges **in distribution** to a random variable $X$ with distribution function $F$ if for all $x\in \mathbb{R}$ at which $F$ is continuous,
> $$
> \lim_{ n \to \infty } F_{n}(x)=F(x).
> $$
> Denoted by $X_{n}\xrightarrow{\text{d}}X$.

The limit of a sequence of random variables is almost surely (that is, bar a set of measure zero) unique for almost sure convergence and for convergence in probability. In other words, we have $X_{n}\xrightarrow{\text{a.s}}X$ or $X_{n}\xrightarrow{\text{p}}X$, then $X(w)$ is uniquely determined for all but a set of measure zero. This is not the case for convergence in distribution; take an iid sequence $\{ X_{n} \}_{n=1}^{\infty}$ for example:
$$
(X_{n})\xrightarrow{\text{d}}X_{k}\quad \text{for all }k\in \mathbb{N}.
$$

> [!Theorem]
> 
> Almost sure convergence implies convergence in probability.
> 
> > [!Proof]-
> > 
> > If $\{ X_{n} \}$ converges to $X$ almost surely, it means that the event $O=\{ \omega\ | \ \lim_{ n \to \infty }X_{n}(\omega)\ne X(\omega) \}$ has probability $0$. Fix $\epsilon> 0$. Consider the sequence of sets
> > $$
> > A_{n}=\bigcup_{m\geq n}\{ |X_{m}-X|>\epsilon \}.
> > $$
> > This sequence of sets is decreasing ($A_{n}\supseteq A_{n+1}\supseteq\dots$) towards the set
> > $$
> > A_{\infty}=\bigcap_{n\geq 1}A_{n}.
> > $$
> > Thus, [[PROB_L1#Properties of the probability function|we have]] 
> > $$
> > \lim_{ n \to \infty } P(A_{n})=P(A_{\infty}).
> > $$
> > We shall now show that $P(A_{\infty})$ is $0$. For any point $\omega$ outside of $O$, we have $\lim_{ n \to \infty }X_{n}=X(\omega)$, which implies that $|X_{n}(\omega)-X(\omega)|<\epsilon$ for all $n\geq N$ for some $N$. In particular, for such $n$, the point $\omega$ will not lie in $A_{n}$, and hence won't lie in $A_{\infty}$. Therefore, $A_{\infty}\subseteq O$, and so $P(A_{\infty})=0$.
> > 
> > Finally, 
> > $$
> > P(|X_{n}-X|>\epsilon)\leq P(A_{n})\to 0,
> > $$
> > which by definition means $X_{n}$ converges in probability to $X$.
> 

> [!Theorem]
> Convergence in probability implies convergence in distribution.
> 
> > [!Proof]-
> > We want to show that
> > $$
> > P(X_{n}\leq x)\to P(X\leq x).
> > $$
> > Let $\epsilon> 0$.
> > $$
> > \begin{align}
> > P(X_{n}\leq x) & =  P(X_{n}\leq x, X\leq x+\epsilon) 
> >   + P(X_{n}\leq x, X > x+\epsilon) \\
> >  & \leq P(X\leq x+{\epsilon})+P(|X_{n}-X|\geq \epsilon)\\ \\
> > P(X\leq x-\epsilon) & =P(X\leq x-\epsilon, X_{n}\leq x)+P(X\leq x-\epsilon, X_{n}> x) \\
> >  & \leq P(X_{n}\leq x)+P(|X_{n}-X|\geq \epsilon)
> > \end{align}
> > $$
> > Combining the two inequalities, we get
> > $$
> > P(X\leq x-\epsilon)-P(|X_{n}-X|\geq \epsilon)~~{\large\leq}~~ P(X_{n}\leq x)~~{\large\leq} ~~P(X\leq x+{\epsilon})+P(|X_{n}-X|\geq \epsilon).
> > $$
> > Take [[LimSup and LimInf#Some observations and theorems|limsup]]:
> > $$
> > P(X\leq x-\epsilon)\leq \limsup_{n\to \infty}P(X_{n}\leq x)\leq P(X\leq x+\epsilon).
> > $$
> > Take liminf:
> > $$
> > P(X\leq x-\epsilon)\leq \liminf_{n\to \infty}P(X_{n}\leq x)\leq P(X\leq x+\epsilon).
> > $$
> > Thus, 
> > $$
> > F(x-\epsilon)\leq \liminf_{n\to \infty}P(X_{n}\leq x)\leq \limsup_{n\to \infty}P(X_{n}\leq x)\leq F(x+\epsilon).
> > $$
> > If $F$ is continuous at $x$, $\lim_{ \epsilon \to 0 }F(x-\epsilon)=\lim_{ \epsilon \to 0 }F(x+\epsilon)=F(x)$. Then, it follows that
> > $$
> > \lim_{ n \to \infty } P(X_{n}\leq x)=F(x).
> > $$
> > 
> 

Note that $(F_{n})\to F$, where $F_{n}$ and $F$ are distributions, does not imply $(f_{n})\to f$. The converse is true, however.

> [!Theorem]
> Let $F_{n}, F$ be distribution functions with densities $f_{n}$ and $f$. If $f_{n}\to f$ pointwise, then $F_{n}\to F$ pointwise.
> 
> > [!Proof]-
> > We want to prove that
> > $$
> > \int_{-\infty}^{x} f_{n} \, dx \to \int_{-\infty}^{x} f \, dx.
> > $$
> > Now,
> > $$
> > \left| \int_{-\infty}^{x} f_{n} \, dx - \int_{-\infty}^{x} f \, dx. \right| \leq \int_{-\infty}^{\infty} |f-f_{n}| \, dx ,
> > $$
> > so it suffices to prove that the integral on the right converges to $0$ as $n\to \infty$. Since
> > $$
> > \int_{-\infty}^{\infty} f_{n} \, dx =\int_{-\infty}^{\infty} f \, dx =1, 
> > $$
> > we have
> > $$
> > \int_{-\infty}^{\infty} (f-f_{n}) \, dx =0.
> > $$
> > So, 
> > $$
> > \int_{-\infty}^{\infty} (f-f_{n})^{+} \, dx =\int_{-\infty}^{\infty} (f-{f_{n}})^{-} \, dx 
> > $$
> > and
> > $$
> > \int_{-\infty}^{\infty} |f-f_{n}| \, dx =2\int_{-\infty}^{\infty} (f-f_{n})^{+} \, dx .
> > $$
> > Now, note that $f-f_{n}\leq f$, and $f$ is integrable. Thus, using [[PROB_L10#The dominated convergence theorem|DCT]], we have
> > $$
> > \begin{align}
> > \lim_{ n \to \infty }  2\int_{-\infty}^{\infty} (f-f_{n})^{+} \, dx = 0.
> > \end{align}
> > $$
> > 
> 
> 

> [!Theorem] Lemma
> If $X^{k}_{n}\xrightarrow{\text{d}}Y^{k}$, $Y^{k}\xrightarrow{\text{d}}X$, and
> $$
> \lim_{ k \to \infty } \limsup_{ n \to \infty } P(|X_{n}^{k}-X_{n}|\geq \epsilon)=0,
> $$
> then $X_{n}\xrightarrow{\text{d}}X$.
> 
> > [!Proof]- 
> > We want to show that
> > $$
> > P(X_{n}\leq x)\to P(X\leq x).
> > $$
> > As before, we can bound:
> > $$
> > F^{k}_{n}(x-\epsilon)-P(|X^{k}_{n}-X_{n}|\geq \epsilon)\leq F_{n}(x)\leq F^{k}_{n}(x+\epsilon)+P(|X^{k}_{n}-X_{n}|\geq \epsilon).
> > $$
> > Take liminf on the left, limsup on the right as $n\to \infty$:
> > $$
> > \begin{align}
> >  & \lim_{ n \to \infty } F^{k}_{n}(x-\epsilon)-\limsup_{ n \to \infty } P(|X^{k}_{n}-X_{n}|\geq \epsilon) \\
> > \leq  & \liminf_{ n \to \infty } F_{n}(x)\leq\limsup_{ n \to \infty } F_{n}(x) \\
> > \leq  & \lim_{ n \to \infty } F^{k}_{n}(x+\epsilon)+\limsup_{ n \to \infty } P(|X^{k}_{n}-X_{n}|\geq \epsilon) .
> > \end{align}
> > $$
> > Take limit as $k\to \infty$.
> > $$
> > \begin{align}
> >  & F(x-\epsilon)-\lim_{ k \to \infty } \limsup_{ n \to \infty } P(|X^{k}_{n}-X_{n}|\geq \epsilon) \\
> > \leq  & \liminf_{ n \to \infty } F_{n}(x)\leq\limsup_{ n \to \infty } F_{n}(x) \\
> > \leq  & F(x+\epsilon)+\lim_{ k \to \infty } \limsup_{ n \to \infty } P(|X^{k}_{n}-X_{n}|\geq \epsilon) .
> > \end{align}
> > $$
> > Using the hypothesis, 
> > $$
> > \begin{align}
> >  & F(x-\epsilon) 
> > \leq   \liminf_{ n \to \infty } F_{n}(x)\leq\limsup_{ n \to \infty } F_{n}(x) 
> > \leq   F(x+\epsilon) .
> > \end{align}
> > $$
> > It follows that at all continuous points of $F$, $\lim_{ n \to \infty }F_{n}(x)=F(x)$.
> 

> [!Theorem]
> Let $(X_{n})$ be a sequence of random variables with characteristic functions $\varphi_{n}$. Then $X_{n}\xrightarrow{d} X$ iff $\varphi_{n}\to\varphi$ pointwise.
> 
> > [!Proof]-
> > Let $Z\sim n(0, 1)$ be a random variable independent from $X_{n}$ and $X$. Let $Z_{k}=Z/k$. Then, $Z_{k}\sim n(0, \frac{1}{k^{2}})$. Define
> > $$
> > \begin{align}
> > X^{k}_{n} & =X_{n}+Z_{k}\\
> > Y^{k} & = X+Z_{k}
> > \end{align}
> > $$
> > Let $f^{k}_{n}$ be the density of $X^{k}_{n}$, and $f^{k}$ be the density of $Y^{k}$. Then, we have
> > $$
> > \begin{align}
> > f^{k}_{n}(x) & =\frac{1}{2\pi}\int_{-\infty}^{\infty} e^{ -itx }\varphi_{n}(t)e^{ -t^{2}/2k^{2} } \, dt  \\
> > f^{k} & =\frac{1}{2\pi}\int_{-\infty}^{\infty} e^{ -itx }\varphi(t)e^{ -t^{2}/2k^{2} } \, dt 
> > \end{align}
> > $$
> > If these densities are not continuous, we can arrive at these expressions using the convolution product:
> > $$
> > \begin{align}
> > f^{k}_{n}(x) & =\frac{k}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty}  f_{n}(y)e^{ -(x-y)^{2}k^{2}/2 } \, dy  \\
> >  & =\frac{k}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} f_{n}(y)\varphi_{kX}(y-x) \, dy  \\
> >  & =\frac{1}{2\pi }\int_{-\infty}^{\infty} f_{n}(y)\int_{-\infty}^{\infty}e^{ i(y-x)u } e^{ -u^{2}/2k^{2} } \, du  \, dy  \\
> >  & =\frac{1}{2\pi}\int_{-\infty}^{\infty}  \, e^{ -ixu }e^{ -u^{2}/2k^{2} }\int_{-\infty}^{\infty} e^{ iyu }f_{n}(y)  \, dy\, du  \\
> >  & =\frac{1}{2\pi}\int_{-\infty}^{\infty}  \, e^{ -ixu }e^{ -u^{2}/2k^{2} }\varphi_{n}(u)\, du .
> > \end{align}
> > $$
> > From the dominated convergence theorem, we have $f_{n}^{k}\to f^{k}$ pointwise for each $k$ (the dominating function being $e^{ -t^{2}/2k^{2} }$). We have shown that this implies $F_{n}^{k}\to F^{k}$ pointwise for each $k$, which by definition means $X_{n}^{k}\xrightarrow{\text{d}}Y^{k}$. Now, 
> > $$
> > \begin{align}
> > \lim_{ k \to \infty } P(|Y^{k}-X|\geq \epsilon) & =\lim_{ k \to \infty } P(|Z_{k}|\geq \epsilon) \\
> >  & =\lim_{ k \to \infty } P(|Z|\geq k\epsilon) \\
> >  & = 0.
> > \end{align}
> > $$
> > Thus, $Y^{k}\xrightarrow{\text{p}}X$ as $k\to \infty$. This implies $Y^{k}\xrightarrow{\text{d}}X$. 
> > 
> > 
> > 
> > Here, $P(|X_{n}^{k}-X_{n}|\geq \epsilon)=P(|Z^{k}|\geq \epsilon)=P(|Z|> k\epsilon)$. Thus,
> > $$
> > \begin{align}
> >  & \lim_{ k \to \infty } \limsup_{ n \to \infty } P(|X_{n}^{k}-X_{n}|\geq \epsilon)
> >  &  \\
> >  & =\lim_{ k \to \infty } P(|Z|\geq k\epsilon)=0.
> > \end{align}
> > $$
> > The lemma is applicable, and we have $X_{n}\xrightarrow{\text{d}}X$.

   