---
tags:
  - ANA1
  - Lecture
date: 2024-10-30, Wednesday
time: 10:32
---
Quiz next week! likely on Tuesday 5:30. Uniform continuity, connectedness.
Test following week on Ch 5, 6

---

## Series

Will get to:

Consider a series of functions $f_{1}, f_{2}, f_{3}, \dots:X\to Y$. "$f_{n}\to f$" means for each $x\in X$, $f_{n}(x)\to f(x)$, i.e, point-wise convergence. In other words, 
$$
\forall x, \forall\epsilon>0, \exists N\text{ such that }\forall n>N, d_{Y}(f_{n}(x), f(x))<\epsilon.
$$
Note that $N$ might depend on $x$ in this definition. If we can get $N$ which is independent of $x$, we say that the sequence uniformly converges.




> [!Definition]
> $$
> \sum_{i=1}^{\infty}a_{n}=\lim_{ n \to \infty } s_{n}\text{ where }s_{n}=\sum_{i=1}^{n} a_{n}.
> $$
> "$a_{n}$ converges" means the limit is a real number.

Remark: For convergence, only $a_{n}$ with $n>N_{0}$ for any fixed $N_{0}$ matter.

Cauchy:
> [!Theorem]
> $\sum a_{n}$ converges $\iff$ $\forall\epsilon>0$, $\exists N$ such that $\forall m\geq n>N$, we have 
> $$
> \left| \sum_{k=n}^{m} a_{n} \right|<\epsilon
> $$
> 

corollary: $\sum a_{n}$ converges $\implies$ $\lim_{ n \to \infty }a_{n=0}$. 
Converse not true! 1/n diverges


Remark: by triangle inequality+ Cauchy
$$
\sum |a_{n}|\text{ converges }\implies \sum a_{n}\text{ converges } 
$$
### Comparison test

> [!Theorem]
> a) If $|a_{n}|\leq c_{n}$ for $n\geq$ some $N_{0}$ and $\sum c_{n}$ converges, then $\sum a_{n}$ converges.
> b) If $a_{n}\geq d_{n}\geq 0$ for $n\geq$ some $N_{0}$, and $\sum d_{n}$ diverges, them $\sum a_{n}$ diverges.

> **Proof**
> Given $\epsilon>0$, we know that $\exists N$ such that $\forall m\geq n> N$ we have 
> $$
> \left| \sum_{k=n}^{m} c_{k} \right|<\epsilon
> $$
> The same $N$ works for $\sum a_{n}$. 
> $$
> \left( \sum_{k=n}^{m} a_{n} \right)\leq \sum_{k=n}^{m} |a_{n}|\leq \sum_{k=n}^{m} c_{n}.
> $$
> ❏
> 
> 
> b is the contrapositive of a.

Note that $a_{n}\geq 0$ for all $n$ $\implies$ ($\sum a_{n}$ converges $\iff$ $(s_{n})$ is bounded).







3.26

3.27

3.28

3.30

