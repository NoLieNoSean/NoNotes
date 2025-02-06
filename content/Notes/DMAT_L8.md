---
tags:
  - DMAT
  - Lecture
date: 2025-02-03
time: 11:53
---
## The twelve fold way

Placement of $m$ balls in $n$ boxes.

Unrestricted
- labeled, labeled: $n^{m}$
- unlabeled, labeled: $\binom{n+m-1}{n-1}$
- labeled, unlabeled: $\sum_{i=1}^{n}{S}(m, i)$.
- unlabeled, unlabeled: $P_{n}=\sum_{i=1}^{n}P(m, i)$. where $P(m, i)$ is the number of ways to split $m$ into $i$ parts. No closed for $P_{n}$. 

Generating function for $P_{n}$:
$$
\sum_{n\geq{0}}P_{n}x^{n}=\prod_{j=1}^{\infty}\left( \frac{1}{1-x^{j}} \right)
$$
Generating function for (unlabeled, labeled): $(1+x+x^{2}+\dots)^{n}=\frac{1}{(1-x)^{n}}=(1-x)^{-n}$.

Injective
- labeled, labeled: $(n)_{m}$
- unlabeled, labeled : $\binom nm$
- labeled, unlabeled: 0 or 1
- unlabeled, unlabeled: 0 or 1

Surjective
- labeled, labeled: $S(m, n)n!$
- unlabeled, labeled: $\binom{m-1}{n-1}$
- labeled, unlabeled: $S(m, n)$
- unlabeled, unlabeled: $P(m, n)$. 


---
## Recurrence relations and generating functions

### Number of subsets

Let $F(n)=$ number of subsets of $[n]$.

$F(n)=2F(n-1)$ for all $n\geq 1$
$F(0)=1$

Let $\phi(x)\equiv \sum_{n\geq 0}F(n)x^{n}$. This is called a generating function.

$$
2x\phi(x)=\sum_{n\geq 1} F(n)x^{n}=\phi(x)-1
$$
so, $\phi(x)=\frac{1}{1-2x}=1+2x+(2x)^{2}+(2x)^{3}+\dots$


### The Fibonacci sequence

Let $F(n)$ be the Fibonacci sequence.

$F(n)$ is the number of ways to climb a flight of $n$ steps taking one or two steps at a time.

> [!Note]
> In general, a linear recurrence relation
> $f(n)=a_{1}F(n-1)+\dots+a_{k}f(n-k)$ given $f(0)$, $f(1)$, ..., $f(k-1)$. Solution is unique. $a_{i}$ could be functions of $n$. 

Let $\psi(x)=\sum_{n\geq 0}F(n)x^{n}$.
$$
x\psi(x)=\sum_{n\geq 0} F(n)x^{n+1}
$$
$$
x^{2}\psi(x)=\sum_{n\geq 0}F(n)x^{n+2}
$$
$$
\psi(x)-x\psi(x)-x^{2}\psi(s)=1
$$
So, $\psi(x)=\frac{1}{1-x-x^{2}}$

Let
$$
\frac{1}{1-x-x^{2}}=\frac{1}{(1-\alpha x)(1-\beta x)}=\frac{a}{1-\alpha x}+\frac{b}{1-\beta x}
$$
where $\alpha=\frac{{1+\sqrt{ 5 }}}{2}$ and $\beta=\frac{{1-\sqrt{ 5 }}}{2}$. 

We know $a+b=1$ and $a\beta+b\alpha=0$. 
We can solve for $a$ and $b$: $a=\frac{{\sqrt{ 5 }-1}}{2\sqrt{ 5 }}$, $b=\frac{{\sqrt{ 5 }+1}}{2\sqrt{ 5 }}$.
Thus, we have $F(n)=a\alpha^{n}+ b\beta^{n}$.

### Derangements

$D_{n}$ is the number of derangements of size $n$.

$D_{0}=1$, $D_{1}=0$, $D_{2}=1$, $D_{n}=(n-1)(D_{n-1}+D_{n-2})$

Note that $d_{n}-nd_{n-1}=(-1)(d_{n-1}-(n-1)d_{n-2})=(-1)^{n}$.

Thus, $\frac{d_{n_{}}}{n!}-\frac{d_{n-1}}{(n-1)!}=\frac{(-1)^{n}}{n!}$, $n\geq 1$. 

Thus, 
$$
\frac{d_{n}}{n!}=\sum_{n\geq 0} \frac{(-1)^{i}}{i!}
$$