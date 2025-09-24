---
tags:
  - ALG3
  - Tutorial
date: 2025-09-21
time: 20:45
---
# Problem 2

> [!Exercise]
> Let $F$ be a field. Prove that the ring $F[x, x^{-1}]$ of Laurent polynomials is a PID.

Let $R=F[x,  x ^{-1}]$. Note that $F[x]\subseteq R$ is a subring. Let $I$ be an ideal in $R$. $I\cap F[x]$ cannot be $\emptyset$: for every $h(x)\in I$, there exists $k\geq 0$ such that $x^{k}h(x)\in F[x]$. Let $f(x)$ be the minimum degree polynomial in $I\cap F[x]$. 

Let $g(x)\in I$ be arbitrary. Let $k\geq 0$ be the smallest integer such that $x^{k}g(x)\in F[x]$. Since $F[x]$ is a Euclidean domain, we can write:
$$
x^{k}g(x)=f(x)q(x)+r(x),
$$
where $q(x), r(x), \in F[x]$ and $\text{deg}(r(x))<\text{deg}(f(x))$. $r(x)=x^{k}g(x)-f(x)q(x)\in I\cap F[x]$, and since $f(x)$ is the minimum degree polynomial in $I\cap F[x]$, we must have $r(x)=0$. Thus, 
$$
g(x)=x^{-k}q(x)f(x),
$$
and $I=(f(x))$.

---

# Problem 3

> [!Exercise]
> Show that $x^{2}+x+1$ has a root in $\mathbb{F}_{p}$ $\iff$ $p\equiv 1\mod 3$, where $p> 3$.

^de56d5

Note that $(x^{2}+x+1)$ is not a square in $\mathbb{F}_{p}$: if
$$
(ax+b)^{2}=a^{2}x^{2}+2abx+b^{2}=x^{2}+x+1,
$$
we must have $a^{2}=1$, $b^{2}=1$, and $2ab=1$. $\pm 1$ are solutions for the first two equations, and these are the only ones (see [[LEC ALG3 9#^497a71]]; a quadratic polynomial may have at most 2 roots). It is now easily seen that these three equations have no solutions in $a, b$ for $p> 3$.

Since $x^{3}-1=(x-1)(x^{2}+x+1)$, $x^{2}+x+1$ has a root in iff $x^{3}-1$ has non trivial roots in $\mathbb{F}_{p}$ iff $x^{3}-1$ has three distinct roots. The roots of $x^{3}-1$ are solutions to $x^{3}\equiv 1\mod p$, which form a subgroup of order $3$ of $\mathbb{F}_{p}^{\times}$, which exists iff $\mathbb{F}_{p}^{\times}$ has an element of order $3$, which happens iff $3\ | \ p-1$ by [[LEC ALG2 3#^9f0c4c|Cauchy's theorem]], which is equivalent to $p\equiv 1 \mod 3$.


> [!Exercise]
> $(p)$ is maximal in $\mathbb{Z}[\omega]$ iff $p\equiv 2\mod 3$. 

$$
\begin{align}
 & (p)\text{ is maximal in }\mathbb{Z}[\omega] \\
\iff & \frac{\mathbb{Z}[\omega]}{(p)} \text{ is a field} \\
\iff & \frac{\mathbb{F}_{p}[x]}{x^{2}+x+1}\text{ is a field} \\
 \iff & (x^{2}+x+1)\text{ is maximal in }\mathbb{F}_{p}[x] \\
\iff & x^{2}+x+1\text{ is irreducible in }\mathbb{F}_{p}[x] \\
\iff & x^{2}+x+1=0\text{ has no roots in }\mathbb{F}_{p}[x] \\
  \iff & p\equiv 2\mod 3,
\end{align}
$$
where the last equivalence is obtained from [[#^de56d5]]. 