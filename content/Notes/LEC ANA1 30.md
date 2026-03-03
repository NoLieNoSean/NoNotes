---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-30
time: 10:32
id: "152"
---
Quiz next week! likely on Tuesday 5:30. Uniform continuity, connectedness.
Test following week on Ch 5, 6.

---
## Series: Look ahead

Consider a series of functions $f_{1}, f_{2}, f_{3}, \dots:X\to Y$. "$f_{n}\to f$" means for each $x\in X$, $f_{n}(x)\to f(x)$, i.e, point-wise convergence. In other words, 
$$
\forall x, \forall\epsilon>0, \exists N\text{ such that }\forall n>N, d_{Y}(f_{n}(x), f(x))<\epsilon.
$$
Note that $N$ might depend on $x$ in this definition. If we can get $N$ which is independent of $x$, i.e, determined only by $\epsilon$, we say that the sequence uniformly converges.

---
## Preliminaries

>[!Definition]
>Let $(b_{n})$ be a [[Sequences and convergence#Sequences|sequence]]. An *infinite series* is an expression of the form
>$$
>\sum_{n=1}^{\infty}b_{n} = b_{1}+b_{2}+b_{3}+\dots. 
>$$
>We define the corresponding sequence of partial sums $(s_{m})$ by 
>$$
>s_{m} = b_{1} + b_{2} + \dots+b_{m},
>$$
>and say that the series $\sum_{n=1}^{\infty}b_{n}$ *converges* to $B$ if the sequence $(s_{m})$ converges to $B$. In this case, we write $\sum_{n=1}^{\infty}b_{n}=B$.

Note that only $a_{n}$ with $n>N_{0}$ for any finite $N_{0}$ matter for determining whether a series converges. In other words, we can drop a finite number of terms in the beginning of the series.

The [[Cauchy sequences|Cauchy criterion]] can be restated for series:

> [!Theorem]
> $\sum a_{n}$ converges $\iff$ $\forall\epsilon>0$, $\exists N$ such that $\forall m\geq n>N$, we have 
> $$
> \left| \sum_{k=n}^{m} a_{k} \right|<\epsilon.
> $$

The triangle inequality yields
$$
\sum |a_{n}|\text{ converges }\implies \sum a_{n}\text{ converges}.
$$
Also, if we take $m=n$ in the above theorem, we get the following corollary.

> [!Theorem] Corollary
> $\sum a_{n}$ converges $\implies$ $\lim_{ n \to \infty }a_{n}=0$. 

The converse is not true! $\sum \frac{1}{n}$ diverges.

Rudin, 3.24

> [!Theorem]
> Suppose $a_{n}\geq 0$ for all $n$. Then, $\sum a_{n}$ converges $\iff$ $(s_{n})$ is bounded.

Note that only the backward implication has any value; the forward implication is true for all convergent series, since [[Sequences and convergence#Boundedness|convergent sequences are bounded]]. The former is true because $(s_{n})$ is monotone.

---
## Convergence tests
### Comparison test

Rudin, 3.25

> [!Theorem]
> Suppose $|a_{n}|\leq c_{n}$ for $n\geq$ some $N_{0}$.
> a) $\sum c_{n}$ converges $\implies$ $\sum a_{n}$ converges.
> b) $\sum a_{n}$ diverges $\implies$ $\sum c_{n}$ diverges.

> **Proof**
> Given $\epsilon>0$, we know that $\exists N$ such that $\forall m\geq n> N$ we have 
> $$
> \sum_{k=n}^{m} c_{k} <\epsilon
> $$
> The same $N$ works for $\sum a_{n}$. 
> $$
> \left|\sum_{k=n}^{m} a_{k}\right| \leq \sum_{k=n}^{m} |a_{k}|\leq \sum_{k=n}^{m} c_{k}<\epsilon.
> $$
>(b) is just the contrapositive of (a).

### Rudin, 3.27

Rudin, 3.27

> [!Theorem]
> Suppose $a_{1}\geq a_{2}\geq a_{3}\geq\dots\geq 0$. Then the series $\sum a_{n}$ converges if and only if the series
> $$
> \sum_{k=0}^{\infty}2^{k}a_{2^{k}}=a_{1}+2a_{2}+4a_{4}+8a_{8}+\dots
> $$
> converges.

> **Proof of $\Longleftarrow$**
> $s_{n}=a_{1}+a_{2}+\dots+a_{n}$
> $t_{k}=a_{1}+2a_{2}+\dots+2^{k}a_{2^{k}}$
> For $n<2^{k}$,
> $$
> \begin{align}
> s_{n}  & < a_{1}+(a_{2}+a_{3})+(a_{4}+\dots+a_{7})+\dots+(a_{2^{k}}+\dots+a_{2^{k+1}-1}) \\
>  & \leq a_{1}+2a_{2}+4a_{4}+\dots+2^{k}a_{2^{k}} \\
>  & = t_{k}
> \end{align}
> $$
> Since $(t_{n})$ converges, we know it is bounded, i.e, $t_{k}\leq M$ for all $k$. We have shown that for every $n$, there exists a $k$ such that $s_{n}<t_{k}$. Thus, $(s_{n})$ is bounded, and hence it must converge. ❏
> 
> **Proof of $\implies$**
> Let $n, k\in \mathbb{Z}^{+}$. For $n\geq 2^{k}$,
> $$
> \begin{align}
> s_{n} & \geq a_{1}+a_{2}+(a_{3}+a_{4})+(a_{5}+\dots+a_{8})+\dots+(a_{2^{k-1}+1}+\dots+a_{2^{k}}) \\
>  & \geq \frac{1}{2}a_{1}+a_{2}+2a_{4}+4a_{8}+\dots+2^{k-1}a_{2^{k}}  \\
>  & =\frac{1}{2}t_{k}
> \end{align}
> $$
> So, for all $k$, there exists an $n$ such that $t_{k}\leq 2s_{n} \leq M$ for some $M$. ❏

---
## Standard series

To use the comparison test efficiently, we need to have plenty of series of nonnegative terms whose convergence or divergence is known.
### The geometric series

Rudin, 3.26

> [!Theorem]
> If $0\leq x < 1$, then
> $$
> \sum_{n=0}^{\infty}x^{n}= \frac{1}{1-x}.
> $$
> If $x\geq 1$, the series diverges.

> **Proof**
> If $x\ne 1$, 
> $$
> s_{n}=\sum_{k=0}^{n} x^{k}= \frac{{1-x^{n+1}}}{1-x}.
> $$
> The result follows if we let $n\to \infty$.

### The p-series

> [!Theorem] @rudinPrinciplesMathematicalAnalysis1976, 3.28
> $\sum \frac{1}{n^{p}}$ converges if $p>1$ and diverges if $p\leq 1$. 
> 
> > [!Proof]-
> > 
> > If $p\leq 0$, then the series diverges because $\lim_{ n \to \infty }1/n^{p}\ne 0$. If $p>0$, we can use 3.27. 
> > $$
> > \begin{align}
> > t_{k}=\sum 2^{k}\left( \frac{1}{2^{kp}} \right)=\sum 2^{(1-p)k}.
> > \end{align}
> > $$
> > This is a geometric series. If $p \in (0, 1]$, $2^{1-p}\geq 1$, and $t_{k}$ diverges, implying $\sum \frac{1}{n^{p}}$ diverges. Similarly, if $p>1$, $2^{1-p}<1$, and $t_{k}$ converges, implying $\sum \frac{1}{n^{p}}$ converges.
> 

^464056


---
## The number e

Rudin, 3,30

> [!Definition]
> $$
> \begin{align}
> e= \sum_{n=0}^{\infty} \frac{1}{n!}.  
> \end{align}
> $$

Since
$$
\begin{align}
s_{n}< 1+1+ \frac{1}{2}+ \frac{1}{2^{2}}+\frac{1}{2^{3}}+\dots,
\end{align}
$$
$s_{n}$ converges.

Rudin, 3.31

> [!Theorem]
> $$
> \lim_{ n \to \infty } \left( 1+\frac{1}{n} \right)^{n}=e.
> $$
> 
> > [!Proof]-
> > Let
> > $$
> > s_{n}=\sum_{k=0}^{n} \frac{1}{k!}, \ \ \ \ \ t_{n}=\left( 1+\frac{1}{n} \right)^{n}.
> > $$
> > We have to show that $\lim_{ n \to \infty }t_{n}$ exists, and that it is equal to $\lim_{ n \to \infty }s_{n}$. [[LimSup and LimInf#Limsup = Liminf iff the sequence converges|Recall]] that a limit exists only when $\lim\sup =\lim\inf$. We know that for any sequence, $\lim\inf\leq \lim\sup$. The goal is to show
> > $$
> > e\leq \liminf_{ n \to \infty } t_{n}\leq\limsup_{ n \to \infty } t_{n}\leq e.
> > $$
> > > **Part 1: Showing $\lim\sup t_{n}\leq e$**
> > > $$
> > > \begin{align}
> > > t_{n} & = \left( 1+\frac{1}{n} \right)^{n} \\
> > >  & = \sum_{k=0}^{n} \left( \frac{1}{n} \right)^{k}\begin{pmatrix}
> > > n \\
> > > k
> > > \end{pmatrix} \\
> > >  & =\sum_{k=0}^{n} \frac{1}{n^{k}} \frac{{n!}}{k!(n-k)!} \\
> > >  & =1+1+\sum_{k=2}^{n} \frac{1}{k!} \frac{(n-k+1)\dots(n-1)}{n^{k-1}} \\
> > >  & =1+1+\sum_{k=2}^{n} \frac{1}{k!} \left( 1-\frac{1}{n} \right)\left( 1-\frac{2}{n} \right)\dots\left( 1-\frac{{k-1}}{n} \right) \\
> > >  & \leq 1+1+\sum_{k=2}^{n} \frac{1}{k!} \\
> > >  & =s_{n}
> > > \end{align}
> > > $$
> > > So, $t_{n}\leq s_{n}$ for all $n$. It follows that $\lim\sup t_{n}\leq \lim\sup s_{n}$. Since $(s_{n})\to e$, $\lim\sup s_{n}=\lim\inf s_{n}=\lim s_{n}=e$. So we get $\lim\sup t_{n}\leq e$.
> > 
> > > **Part 2: Showing $\lim\inf t_{n}\leq e$**
> > > Fix $m$. For $n\geq m$,
> > > $$
> > > \begin{align}
> > >  t_{n} 
> > >    & \geq \underbrace{ 1+1+\sum_{k=2}^{m} \frac{1}{k!} \left( 1-\frac{1}{n} \right)\left( 1-\frac{2}{n} \right)\dots\left( 1-\frac{{k-1}}{n} \right) }_{ u_{n} }.
> > >  \end{align}
> > > $$
> > > Note that $(u_{n})$ is a convergent sequence. 
> > > $$
> > > \begin{align}
> > > \liminf _{ n \to \infty } t_{n} & \geq \liminf _{ n \to \infty } u_{n} \\
> > >  & = \sum_{k=0}^{m} \frac{1}{k!}  
> > > \end{align}
> > > $$
> > > This is true for every $m$. Thus, we have $\liminf t_{n}\geq e$. 
> > 

Rudin, 3.32

> [!Theorem]
> $e$ is irrational.

> **Proof**
> If $s_{n}$ has the same definition as in the previous proof, 
> $$
> \begin{align}
> e-s_{n} & = \sum_{k=n+1}^{\infty} \frac{1}{k!} \\
>  & < \frac{1}{(n+1)!}\left( 1+ \frac{1}{n+1}+\frac{1}{(n+1)^{2}}+\dots \right) \\
>  & =\frac{1}{n!n}.
> \end{align}
> $$
> Now, let $e=\frac{p}{q}$. Then,
> $$
> 0<q!(e-s_{q})< \frac{1}{q}.
> $$
> Note that $q!e$ and $q!s_{q}$ are integers. But there does not exist an integer between 0 and 1. ❏

