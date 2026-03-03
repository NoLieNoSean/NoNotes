---
id: "428"
date: 2026-02-27
time: 17:51
tags:
  - CANA
---
Let $\omega_{1}, \omega_{2}\in \mathbb{C}$ be linearly independent over $\mathbb{R}$ and let $L=\{ m\omega_{1}+n\omega_{2}:m, n\in \mathbb{Z} \}$ be the lattice they generate. 

> [!Exercise]
> Prove that $G_{2k}(L)$ converges absolutely for all $k> 1$. Here $G_{2k}(L)$ is defined as
> $$
> G_{2k}(L)=\sum_{\omega\in L\setminus \{ 0 \}}\omega^{-2k}.
> $$
> 

For $r\in \mathbb{Z}_{> 0}$, define $S_{r}:=\{ m\omega_{1}+n\omega_{2} : m+n=r\}$. Then, $L\setminus \{ 0 \}=\bigcup_{r> 0}S_{r}$ and $|S_{r}|=(2r+1)^{2}-(2r-1)^{2}=8r$ for $r> 0$. WLOG, suppose $|\omega_{1}|\leqslant |\omega_{2}|$. Then, for every $\omega\in S_{r}$, $|\omega|\geqslant r|\omega_{1}|$. Therefore, we can write
$$
\sum_{\omega\in L\setminus \{ 0 \}}\frac{1}{|\omega|^{2k}}=\sum_{r=1}^{\infty} \sum_{\omega\in S_{r}}\frac{1}{|\omega|^{2k}}\leqslant \sum_{r=1}^{\infty} \frac{8r}{|r\omega_{1}|^{2k}}=\frac{8}{|\omega_{1}|^{2k}}\sum_{r=1}^{\infty} \frac{1}{r^{2k-1}}.
$$
Since $2k-1> 1$, $\sum 1/r^{2k-1}$ [[LEC ANA1 30#^464056|converges]].  it follows from the comparison test that $G_{2k}(L)$ converges absolutely.

---

> [!Exercise]
> Find all limit points of the set $\{ x_{n} \}$
> $$
> x_{n}=\frac{1}{n}\sum_{k=1}^{n} k^{ib}, \quad n=1, 2, \dots
> $$
> where $b$ is a nonzero real number. 

