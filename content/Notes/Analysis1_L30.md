---
tags:
  - ANA1
  - Lecture
date: 2024-10-30
time: 10:32
---
Quiz next week! likely on Tuesday 5:30. Uniform continuity, connectedness.
Test following week on Ch 5, 6.

---
## Series

> [!Info]- Will get to
> 
> Consider a series of functions $f_{1}, f_{2}, f_{3}, \dots:X\to Y$. "$f_{n}\to f$" means for each $x\in X$, $f_{n}(x)\to f(x)$, i.e, point-wise convergence. In other words, 
> $$
> \forall x, \forall\epsilon>0, \exists N\text{ such that }\forall n>N, d_{Y}(f_{n}(x), f(x))<\epsilon.
> $$
> Note that $N$ might depend on $x$ in this definition. If we can get $N$ which is independent of $x$, i.e, determined only by $\epsilon$, we say that the sequence uniformly converges.

### Preliminaries

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

The triangle inequality gives us
$$
\sum |a_{n}|\text{ converges }\implies \sum a_{n}\text{ converges }.
$$
Also, if we take $m=n$ in the above theorem, we get the following corollary.

> [!Theorem] Corollary
> $\sum a_{n}$ converges $\implies$ $\lim_{ n \to \infty }a_{n=0}$. 

The converse is not true! $\sum \frac{1}{n}$ diverges.

Rudin, 3.24

> [!Theorem]
> Suppose $a_{n}\geq 0$ for all $n$. Then, $\sum a_{n}$ converges $\iff$ $(s_{n})$ is bounded.

Note that only the backward implication has any value; the forward implication is true for all convergent series, since [[Sequences and convergence#Boundedness|convergent sequences are bounded]]. The former is true because $(s_{n})$ is monotone.
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
>(b) is just the contrapositive of (a). ❏

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

3.27

3.28

3.30

