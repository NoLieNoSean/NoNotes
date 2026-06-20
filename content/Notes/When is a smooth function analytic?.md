---
id: "364"
date: 2025-12-06
time: 15:00
tags:
---
Recall [[LEC ANA1 32#^d04d92]]. We have seen that [[LEC ANA1 32#^523f3a|every analytic function is smooth]] but [[LEC ANA1 32#^3fdabe|not every smooth function is analytic]], that is, $C^{\omega}\subsetneq C^{\infty}$. 

Let $f:(a, b)\to \mathbb{R}$ be smooth. The Taylor series for $f$ at $x\in(a, b)$ is
$$
\sum_{k=0}^{\infty} \frac{f^{(k)}(x)}{k!}h^{k}.
$$
[[LEC ANA1 32#^f331cb|Recall]] that if $f$ is analytic then the $\sum a_{r}h^{r}$ of [[LEC ANA1 32#^d04d92]] must be the Taylor series for $f$ at $x$. 

Therefore, for $f$ to be analytic on $(a ,b)$, it is sufficient and necessary that for all $x\in(a, b)$, the Taylor series for $f$ at $x$
1. have positive radius of convergence, and
2. actually converge to $f$ on some interval $(x-\delta, x+\delta)$. 

Let $I=[x-\sigma, x+\sigma]$ be a subinterval of $(a, b)$, $\sigma> 0$. Denote by $M_{r}$ the maximum of $|f^{(r)}(t)|$ for $t\in I$. The derivative growth rate of $f$ on $I$ is
$$
\alpha=\limsup_{r\to \infty}\sqrt[r]{\frac{M_{r}}{r!}  }.
$$
Clearly, $\sqrt[r]{ |f^{(r)}(x)|/r! }\leqslant \sqrt[r]{ M_{r}/r! }$, so the [[LEC ANA1 31#^2bd39d|radius of convergence]] 
$$
\begin{align}
R=\dfrac{1}{\limsup_{r\to \infty}\sqrt[r]{\cfrac{|f^{(r)}(x)|}{r!}  }}
\end{align}
$$
of the Taylor series at $x$ satisfies 
$$
\frac{1}{\alpha}\leqslant R.
$$

> [!Lemma]
> If $\alpha\sigma\leqslant 1$, then the Taylor series converges uniformly to $f$ on the interval $I$. 

> [!Lemma]
> If $f$ is expressed as a convergent power series $f(x+h)=\sum c_{k}h^{k}$ with radius of convergence $R>\sigma$, then $f$ as bounded derivative growth rate on $I$. 

> [!Theorem] Analyticity Theorem, @pughRealMathematicalAnalysis2015 [p. 248]
> A smooth function is analytic iff it has locally bounded derivative growth rate.

> [!Corollary]
> A smooth function is analytic if its derivatives are uniformly bounded. 
> 
> > [!Proof]-
> > 
> > If $|f^{(r)}(\theta)|\leqslant M$, for all $r$ and $\theta$, then the derivative growth rate of $f$ is bounded. In fact, $\alpha=0$ and $R=\infty$. 

