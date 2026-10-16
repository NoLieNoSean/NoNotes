---
id: "582"
date: 2026-10-08
time: 22:56
tags:
---
# Problem 1

Suppose $E\in \mathcal{F}$. Then, $E^{c}=X\cap E^{c}\in \mathcal{F}$. 
Suppose $E, F\in \mathcal{F}$. Because $E^{c}\in \mathcal{F}$, we have $(E\cup F)^{c}=E^{c}\cap F^{c}\in \mathcal{F}$, whence $E\cup F\in \mathcal{F}$. 

---

# Problem 2

That $\nu(\emptyset)=0$ is clear. Let $A\subseteq \Omega$, $A=\bigcup_{n=1}^{\infty}A_{n}$.  From the subadditivity of $\mu_{1}$ and $\mu_{2}$, we have
$$
\begin{align}
\mu_{1}(A) & \leqslant  \sum_{n=1}^{\infty} \mu_{1}(A_{n}) \\
\mu_{2}(A) & \leqslant \sum_{n=1}^{\infty} \mu_{2}(A_{n})
\end{align}
$$
WLOG, suppose $\nu(A)=\mu_{1}(A)$. Then, 
$$
\nu(A)=\mu_{1}(A)\leqslant \sum_{n=1}^{\infty} \mu_{1}(A_{n})\leqslant \sum_{n=1}^{\infty} \nu(A_{n}).
$$

---

# Problem 3

Denote the described set by $A$. Let $A_{n}$ denote the subset of $(0, 1)$ of all numbers such that the first occurrence of $0$ in their decimal expansion is at position $n$. Then, $A=\bigsqcup_{n=1}^{\infty}A_{n}$. Thus,
$$
\begin{align}
\mu(A) & =\sum_{n=1}^{\infty}\mu(A_{n}) \\
 & =\frac{1}{10}\sum_{n=1}^{\infty} \left( \frac{9}{10} \right)^{n-1} \\
 & =1.
\end{align}
$$

---

# Problem 4

Let $\mathbb{Q}\cap[0, 1]=\{ r_{n}:n\in \mathbb{N} \}$ be an enumeration of the rationals in $[0, 1]$. For $\epsilon> 0$, let
$$
B_{\epsilon}=\bigcup_{n=1}^{\infty} \left( r_{n}-\frac{\epsilon}{2^{n+1}}, r_{n}+\frac{\epsilon}{2^{n+1}} \right).
$$
$\lambda^{}(B_{\epsilon})\leqslant \sum\epsilon/2^{n}=\epsilon$. So, $\lambda^{}(B_{\epsilon}^{c})\geqslant 1-\epsilon$. It is clear by the construction that $\text{Int}(B_{\epsilon}^{c})=\emptyset$, so $B_{\epsilon}^{c}$ is nowhere dense in $[0, 1]$. 

Let $B=\bigcup_{n=1}^{\infty}B_{1/n}^{c}$. By monotone continuity, $\lambda(B)=\sup \lambda(B^{c}_{1/n})=1$. Define $A=B^{c}$. Clearly, $A$ and $B$ are Borel, and $\lambda(A)=0$. 

---

# Problem 5


Let $\mu$ be a Radon measure on $\mathbb{R}^{n}$. Let $B_{n}\in \mathcal{B}_{\mathbb{R}^{n}}$ denote the closed ball of radius $n$ centered at the origin. Because $\mathbb{R}^{n}=\bigcup_{n=1}^{\infty}B_{n}$ and $\mu(B_{n})< \infty$ for all $n$, $\mu$ is $\sigma$-finite. 

Define $f:\mathbb{R}\to[0, \infty]$ by
$$
f(x)=\begin{cases}
1/x^{2} & x> 0 \\
 0 & x\leqslant  0.
\end{cases}
$$
$f$ is clearly measurable. For $A\in \mathcal{B}_{\mathbb{R}}$, define
$$
\nu(A):=\int_{A}f\,d\lambda.
$$
We have shown that $\nu$ is a measure on $(\mathbb{R}, \mathcal{B}_{\mathbb{R}})$. Since we can write
$$
\mathbb{R}=(-\infty, 0]\cup \bigcup_{n=1}^{\infty} (1/n, \infty)
$$
and $\nu((1/n, \infty))< \infty$ for all $n$, we have that $\nu$ is $\sigma$-finite. However, $\nu([0, 1])=\infty$. 

---

# Problem 6

