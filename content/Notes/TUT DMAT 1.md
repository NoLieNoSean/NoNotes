---
tags:
  - DMAT
  - Tutorial
date: 2025-02-17
time: 19:00
id: "309"
---
## Problem 1

Let $\alpha\in \mathbb{R}$. Prove that there exists infinitely many $p, q\in \mathbb{N}$ such that
$$
\left| \alpha-\frac{p}{q} \right| < \frac{1}{q^{2}}.
$$

> [!Solution]-
> $$
> \left| \alpha-\frac{p}{q} \right| < \frac{1}{q^{2}}\iff \left| q\alpha-p \right| < \frac{1}{q}.
> $$
> Since we can choose $p$ independently of $q$, the above is true when $\{ q\alpha \}< \frac{1}{q}$. 
> 
> Let $N$ be an integer. Divide the interval $[0, 1]$ into $N$ equal parts $\left[ 0, \frac{1}{N} \right]\cup\left[ \frac{1}{N}, \frac{2}{N} \right]\cup\dots \cup\left[ \frac{{N-1}}{N}, 1 \right]$. Consider the numbers $\{ \alpha \}$, $\{ 2\alpha \}$, ..., $\{ N\alpha \}$. If $\{ i\alpha \}\in\left[ 0, \frac{1}{N} \right]$ for any $1\leq i\leq N$, we are done, since $\{ i\alpha \}< \frac{1}{N}\leq \frac{1}{i}$. Else, due to the pigeon hole principle, there must exist $\left[ \frac{{k-1}}{N}, \frac{k}{N} \right]$ such that $\{ i\alpha \}, \{ j\alpha \}\in \left[ \frac{{k-1}}{N}, \frac{k}{N} \right]$ for $i\ne j$. Then, 
> $$
> \begin{align}
>  & \left| \{ i\alpha \}-\{ j\alpha \} \right| < \frac{1}{N}\\
> \implies  & |i\alpha-j\alpha -\lfloor i\alpha \rfloor +\lfloor j\alpha \rfloor |< \frac{1}{N} \\
> \implies  & \left| \alpha-\frac{p}{i-j} \right| < \frac{1}{N(i-j)}< \frac{1}{(i-j)^{2}}
> \end{align}
> $$

---
## Problem 2

Consider a complete graph $K_{n}$ on $n$ vertices, where $n=2^{2k}$ for some $k\in \mathbb{Z}$. Color the edges red or blue. Show that there exists either a red clique or a blue clique of size $\frac{1}{2}\log_{2}n=k$.

> [!Solution]-
> This is an algorithmic proof. Initialize $R\equiv \{  \}$ and $B\equiv \{  \}$. Pick $v_{1}\in K_{n}$. Let $v_{1}$ have $r$ red edges and $b$ blue edges. If $r\geq b$, append $v_{1}$ to $R$ and delete all the $b$ vertices it was connected to through blue edges. Else, append $v_{1}$ to $B$ and delete all the $r$ vertices it was connected to through red edges. Note that after the first step, the number of vertices in the graph is bounded below by $2^{2k-1}$. 
> Pick another $v_{2}\in K_{n}$, and repeat. After the $m$th step, the number of vertices in the graph will be at least $2^{2k-m}$. This guarantees that we will be able to perform $2k$ steps before we run out of vertices. After $2k$ steps, $|R|\geq k$ or $|B|\geq k$. Take a subset of size $k$ from the larger one. 

---

## Problem 3: Thue's Lemma

Let $p$ be a prime, $a\in \mathbb{Z}$. Then, there exist $x, y\in \mathbb{Z}$ such that $0< |x|, |y|< \sqrt{ p }$ and $x\equiv ay \mod p$.


---

## Problem 4: Fermat's Christmas Theorem

If $p\equiv 1 \mod 4$, there exist $a, b\in \mathbb{N}$ such that $p=a^{2}+b^{2}$.


---

## Problem 5

There are $n$ boys and $n$ girls. Each boy likes $a$ girls, and each girl likes $b$ boys. For what values of $a$ and $b$ is a mutual liking guaranteed?






