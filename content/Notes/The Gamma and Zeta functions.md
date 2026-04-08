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

> [!Proposition]
> The gamma function extends to a holomorphic function in the half-plane $\mathrm{Re}(s)> 0$, and is still given there by the integral formula from [[#^2b2927]]. 

[^1]: Near $t=0$, $t^{s-1}$ is integrable for $s> 0$. Deal with large $t$ separately: given $\epsilon> 0$, produce $M$ such that for all $r_{2}> r_{1}> M$, $\int_{r_{1}}^{r_{2}} e^{ -t }t^{s-1} \, dt<\epsilon$. The standard trick is to dominate the polynomial factor by a smaller exponential for large $t$. 

Despite the fact that the integral defining $\Gamma$ is not absolutely convergent for other values of $s$, we can go further and prove that there exists a meromorphic function on $\mathbb{C}$ that equals $\Gamma$ in the half-plane $\mathrm{Re}(s)> 0$. Once we prove existence, uniqueness follows from [[Cauchy's Theorem and Its Applications#^dd5abc]]. 

> [!Lemma]
> If $\mathrm{Re}(s)> 0$, then
> $$
> \Gamma(s+1)=s\Gamma(s).
> $$
> As a consequence $\Gamma(n+1)=n!$ for $n=0, 1, 2, \dots$.

^fe8ed6

> [!Theorem]
> The function $\Gamma(s)$ initially defined for $\mathrm{Re}(s)> 0$ has an analytic continuation to a meromorphic function on $\mathbb{C}$ whose only singularities are ==simple== poles at the negative integers $s=0, -1, \dots$. The residue of $\Gamma$ at $s=-n$ is $(-1)^{n}/n!$.

> [!Remark]
> [[#^fe8ed6]] shows that $\Gamma(s+1)=s\Gamma(s)$ for $\mathrm{Re}(s)> 0$. By analytic continuation, this formula remains true whenever $s\ne 0, -1, -2, \dots$, that is, whenever $s$ is not a pole of $\Gamma$. This follows from [[Cauchy's Theorem and Its Applications#^dd5abc]] because both sides of the formula are holomorphic in the complement of the poles of $\Gamma$ and are equal when $\mathrm{Re}(s)> 0$. 

## Properties of gamma

> [!Theorem]
> For all $s\in \mathbb{C}$,
> $$
> \Gamma(s)\Gamma(1-s)=\frac{\pi}{\sin \pi s}.
> $$

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

> [!Proposition]
> The series defining $\zeta(s)$ converges for $\mathrm{Re}(s)> 1$, and the function $\zeta$ is holomorphic in this half-plane. 

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

> [!Theorem]
> The zeta function has a meromorphic continuation into the entire complex plane, whose only singularity is a simple pole at $s=1$. 

> [!Theorem]
> $$
> \prod_{p}\frac{1}{1-p^{-s}}=\zeta(s)
> $$