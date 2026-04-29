---
id: "442"
date: 2026-03-30
time: 00:49
tags:
  - CANA
---
# The gamma function

> [!Definition]
> For $s> 0$, the **gamma function** is defined by
> $$
> \Gamma(s):=\int_{0}^{\infty} e^{ -t }t^{s-1} \, dt.
> $$

^2b2927

The integral converges for each positive $s$[^1]. 

[^1]: Near $t=0$, $t^{s-1}$ is integrable for $s> 0$. Deal with large $t$ separately: given $\epsilon> 0$, produce $M$ such that for all $r_{2}> r_{1}> M$, $\int_{r_{1}}^{r_{2}} e^{ -t }t^{s-1} \, dt<\epsilon$. The standard trick is to dominate the polynomial factor by a smaller exponential for large $t$. 

> [!Proposition]
> The gamma function extends to a holomorphic function in the half-plane $\mathrm{Re}(s)> 0$, and is still given there by the integral formula from [[#^2b2927]]. 
> 
> > [!Proof]-
> > 
> > It suffices to show that the integral defines a homomorphic function in every strip $S_{\delta, M}=\{ \delta< \mathrm{Re}~(s)< M \}$. Let $\sigma=\mathrm{Re}~(s)$. Recall that $\Gamma(s)$ is defined by
> > $$
> > \Gamma(s)=\lim_{ \epsilon \to 0 } \int_{\epsilon}^{1/\epsilon} e^{ -t }t^{s-1} \, dt.
> > $$
> > The family of partial integrals is Cauchy, since[^2]
> > $$
> > \left| \int_{\epsilon}^{\epsilon'} e^{ -t }t^{s-1} \, dt  \right| \leqslant \int_{\epsilon}^{\epsilon'} e^{ -t }t^{\sigma-1} \, dt \to 0 \text{ as }\epsilon, \epsilon'\to 0 \text{ or } \infty.
> > $$
> > Thus, $\Gamma(s)$ is defined for all $s\in S_{\delta, M}$. For $\epsilon> 0$, let
> > $$
> > F_{\epsilon}(s)=\int_{\epsilon}^{1/\epsilon} e^{ -t }t^{s-1} \, dt.
> > $$
> > By [[Cauchy's Theorem and Its Applications#^adaf14]], $F_{\epsilon}$ is holomorphic on the strip $S_{\delta, M}$. By [[Cauchy's Theorem and Its Applications#^4e9e39]], it suffices to show that $F_{\epsilon}$ converges uniformly to $\Gamma$ on $S_{\delta, M}$.
> > $$
> > \begin{align}
> > \left| F(s)-F_{\epsilon}(s) \right|  & \leqslant \int_{0}^{\epsilon} e^{ -t }t^{\sigma-1} \, dt +\int_{1/\epsilon}^{\infty} e^{ -t }t^{\sigma-1} \, dt.
> > \end{align}
> > $$
> > The first integral can be uniformly bounded by $\epsilon^{\delta}$ for $0<\epsilon< 1$. The second integral converges uniformly as well, since
> > $$
> > \left| \int_{1/\epsilon}^{\infty} e^{ -t }t^{\sigma-1} \, dt  \right| \leqslant \int_{1/\epsilon}^{\infty} e^{ -t }t^{M-1} \, dt\leqslant C\int_{1/\epsilon}^{\infty} e^{ -t/2 } \, dt \to 0.
> > $$
> > 
> 

Despite the fact that the integral defining $\Gamma$ is not absolutely convergent for other values of $s$, we can go further and prove that there exists a meromorphic function on $\mathbb{C}$ that equals $\Gamma$ in the half-plane $\mathrm{Re}(s)> 0$. Once we prove existence, uniqueness follows from [[Cauchy's Theorem and Its Applications#^dd5abc]]. 

> [!Lemma]
> If $\mathrm{Re}(s)> 0$, then
> $$
> \Gamma(s+1)=s\Gamma(s).
> $$
> As a consequence $\Gamma(n+1)=n!$ for $n=0, 1, 2, \dots$.
> 
> > [!Proof]-
> > 
> > Integrating by parts in the finite integrals gives
> > $$
> > \int_{\epsilon}^{1/\epsilon} \frac{d}{dt} (e^{ -t }t^{s}) \, dt=-\int_{\epsilon}^{1/\epsilon} e^{ -t }t^{s} \, dt+s\int_{\epsilon}^{1/\epsilon} e^{ -t }t^{s-1} \, dt.
> > $$
> > The formula follows by letting $\epsilon\to 0$, and noting that the LHS vanishes because $e^{-t}t^{s}\to 0$ as $t\to 0$ or $t\to \infty$. 
> 

^fe8ed6

> [!Theorem]
> The function $\Gamma(s)$ initially defined for $\mathrm{Re}(s)> 0$ has an analytic continuation to a meromorphic function on $\mathbb{C}$ whose only singularities are ==simple== poles at the nonpositive integers $s=0, -1, \dots$. The residue of $\Gamma$ at $s=-n$ is $(-1)^{n}/n!$.
> 
> > [!Proof]-
> > 
> > It suffices to extend $\Gamma$ to each half-plane $\mathrm{Re}~(s)>-m$, where $m\geqslant 1$ is an integer. For $\mathrm{Re}~(s)>-1$, we define
> > $$
> > F_{1}(s)=\frac{\Gamma(s+1)}{s}.
> > $$
> > Since $\Gamma(s+1)$ is holomorphic in $\mathrm{Re}~(s)> -1$, we see that $F_{1}$ is meromorphic in that half plane, with the only possible singularity a simple pole at $s=0$. The fact that $\Gamma(1)=1$ shows that $F_{1}$ does in fact have a simple pole at $s=0$, with residue $1$ ([[Meromorphic functions and the Logarithm#^6f601e]]). Moreover, if $\mathrm{Re}~(s)> 0$, then $F_{1}(s)=\Gamma(s+1)/s=\Gamma(s)$ by [[The Gamma and Zeta functions#^fe8ed6]]. So $F_{1}$ extends $\Gamma$ to a meromorphic function on the half-plane $\mathrm{Re}~(s)>-1$. Continue in this fashion to define $F_{m}$ for $\mathrm{Re}~(s)>-m$. Successive applications of the lemma show that $F_{m}(s)=\Gamma(s)$ for $\mathrm{Re}~(s)> 0$. By [[Cauchy's Theorem and Its Applications#^dd5abc]], this also means that $F_{m}=F_{k}$ for $1\leqslant k\leqslant m$ on the domain of $F_{k}$. 
> 

> [!Remark]
> [[#^fe8ed6]] shows that $\Gamma(s+1)=s\Gamma(s)$ for $\mathrm{Re}(s)> 0$. By analytic continuation, this formula remains true whenever $s\ne 0, -1, -2, \dots$, that is, whenever $s$ is not a pole of $\Gamma$. This follows from [[Cauchy's Theorem and Its Applications#^dd5abc]] because both sides of the formula are holomorphic in the complement of the poles of $\Gamma$ and are equal when $\mathrm{Re}(s)> 0$. 

## Properties of gamma

> [!Theorem]
> For all $s\in \mathbb{C}$,
> $$
> \Gamma(s)\Gamma(1-s)=\frac{\pi}{\sin \pi s}.
> $$
> 
> > [!Proof]-
> > 
> > It suffices to prove the identity for $0< s< 1$, since it then holds on all of $\mathbb{C}$ by [[Cauchy's Theorem and Its Applications#^dd5abc|analytic continuation]]. First, observe that for $0< a< 1$, 
> > $$
> > \int_{0}^{\infty} \frac{v^{a-1}}{1+v} \, dv=\int_{-\infty}^{\infty} \frac{e^{ ax }}{1+e^{ ax }} \, dx =\frac{\pi}{\sin \pi a}.
> > $$
> > To establish the theorem, note that for $0< s< 1$, we may write
> > $$
> > \Gamma(s-1)=\int_{0}^{\infty} e^{ -u }u^{-s} \, du=t\int_{0}^{\infty} e^{ -vt }(vt)^{-s} \, dv,
> > $$
> > where for $t> 0$ we made the change of variables $vt=u$. This trick then gives
> > $$
> > \begin{align}
> > \Gamma(1-s)\Gamma(s) & = \int_{0}^{\infty} e^{ -t }t^{s-1}\Gamma(s-1) \, dt \\
> >   & =\int_{0}^{\infty} e^{ -t }t^{s-1}\left( t\int_{0}^{\infty} e^{ -vt }(vt)^{-s} \, dv  \right) \, dt  \\
> >  & =\dots =\frac{\pi}{\sin \pi s}.
> > \end{align}
> > $$
> > 
> 

> [!Theorem]
> The function $\Gamma$ has the following properties:
> 1. $1/\Gamma(s)$ is an entire function of $s$ with simple zeroes at $s=0, -1, -2, \dots$ and it vanishes nowhere else. 
> 2. $1/\Gamma(s)$ has growth
> $$
> \left| \frac{1}{\Gamma(s)} \right| \leqslant c_{1}e^{ c_{2}|s|\log |s| }.
> $$
> 

> [!Theorem]
> For all $s\in \mathbb{C}$, 
> $$
> \frac{1}{\Gamma(s)}=e^{ \gamma s }s\prod_{n=1}^{\infty} \left( 1+\frac{s}{n} \right)e^{ -s/n },
> $$
> where
> $$
> \gamma=\lim_{ N \to \infty } \sum_{n=1}^{\infty} \frac{1}{n}-\log N.
> $$

# The zeta function

The **zeta function** is initially defined for real $s> 1$ by the convergent series
$$
\zeta(s)=\sum_{i=1}^{\infty} \frac{1}{n^{s}}.
$$
In parallel to the gamma function, we first extend $\zeta$ to a half-plane in $\mathbb{C}$. 

> [!Proposition]
> The series defining $\zeta(s)$ converges for $\mathrm{Re}(s)> 1$, and the function $\zeta$ is holomorphic in this half-plane. 
> 
> > [!Proof]-
> > 
> > If $s=\sigma+it$, where $\sigma$ and $t$ are real, then
> > $$
> > |n^{-s}|=|e^{ -s\log n }|=e^{ -\sigma \log n }=n^{-\sigma}.
> > $$
> > As a consequence, if $\sigma> 1+\delta> 1$ the series defining $\zeta$ is uniformly bounded by $\sum_{n=1}^{\infty}1/n^{1+\delta}$, which converges. Therefore, the series $\sum 1/n^{s}$ converges uniformly on every half-plane $\mathrm{Re}~(s)> 1+\delta> 1$, and therefore defines a holomorphic function in $\mathrm{Re}~(s)> 1$. 
> 

> [!Definition]
> The **theta function** is defined for real $t> 0$ by
> $$
> \vartheta(t)=\sum_{n=-\infty}^{\infty} e^{ -\pi n^{2}t }.
> $$

$\vartheta$ satisfies the functional equation
$$
\vartheta(t)=t^{-1/2}\vartheta(1/t).
$$


> [!Proposition]
> 1. $|\vartheta(t)-1|\leqslant Ce^{ -\pi t }$ for some $C> 0$, and all $t\geqslant 1$. 
> 2. $\vartheta(t)\leqslant Ct^{-1/2}$ for $0< t\leqslant 1$. 

> [!Theorem]
> If $\mathrm{Re}(s)> 1$, then
> $$
> \pi^{-s/2}\Gamma(s/2)\zeta(s)=\frac{1}{2}\int_{0}^{\infty} u^{(s/2)-1}[\vartheta(u)-1] \, du.
> $$
> 
> > [!Proof]-
> > 
> > Use Fubini to swap the sum and integral.
> > $$
> > \begin{align}
> > \frac{1}{2}\int_{0}^{\infty} u^{(s/2)-1}[\vartheta(u)-1] \, du  & = \int_{0}^{\infty} u^{(s/2)-1}\sum_{n=1}^{\infty} e^{ -\pi n^{2}u } \, du  \\
> >  & = \sum_{n=1}^{\infty} \int_{0}^{\infty} u^{(s/2)-1}e^{ -\pi n^{2}u } \, du \\
> >   & =\sum_{n=1}^{\infty} \Gamma(s/2)(\pi n^{2})^{-s/2} \\
> >  & =\pi^{-s/2}\Gamma(s/2)\zeta(s).
> > \end{align}
> > $$
> > 
> 

> [!Definition]
> For $\mathrm{Re}(s)> 1$, 
> $$
> \xi(s):=\pi^{-s/2}\Gamma(s/2)\zeta(s).
> $$
> 

> [!Theorem]
> The function $\xi$ is holomorphic for $\mathrm{Re}(s)> 1$ and has an analytic continuation to all of $\mathbb{C}$ as a meromorphic function with simple poles at $s=0$ and $s=1$. Moreover, 
> $$
> \xi(s)=\xi(1-s)\quad \forall s\in \mathbb{C}.
> $$

[!Proof]-

Let $\psi(u)=[\vartheta(u)-1]/2$. The functional equation for the theta function, namely $\vartheta(u)=u^{-1/2}\vartheta(1/u)$, implies
$$
\psi(u)=u^{-1/2}\psi(1/u)+\frac{1}{2u^{1/2}}-\frac{1}{2}.
$$


> [!Theorem]
> The zeta function has a meromorphic continuation into the entire complex plane, whose only singularity is a simple pole at $s=1$. 

> [!Theorem]
> $$
> \prod_{p}\frac{1}{1-p^{-s}}=\zeta(s)
> $$

[^2]: Details: The Cauchy estimate tells you that for every sequence of epsilons $\epsilon_{n}\to 0$, the limit converges. The Cauchy estimate also forces all these limits to be the same. 
