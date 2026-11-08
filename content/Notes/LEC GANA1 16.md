---
id: "614"
date: 2026-11-02
time: 15:33
tags:
  - GANA1
  - Lecture
desc: Holder's and Minkowski's inequalities
---
> [!Exercise] Assignment
> Let $k\in L^{2}([0, 1]\times[0, 1])$. Define $T_{k}:L^{2}[0, 1]\to L^{2}[0, 1]$ by
> $$
> (T_{k}f)(y)=\int_{0}^{1} f(x)k(x, y) \, dx .
> $$
> Prove that $T_{k}$ is bounded. Compute $T_{k}^{*}$. 

> [!Exercise] Assignment
> Let $H$ be a Hilbert space. Let $T:H\to H$ be linear. Let $S:H\to H$ be such that $\langle Tx, y \rangle=\langle x, Sy \rangle$. Then, $T$ is bounded, and $T^{*}=S$. 



---

[!Definition]
Let $T$ be a bounded operator on $H$. We say that $T$ is normal if $TT^{*}=T^{*}T$. . 

[!Proposition]
Let $H$ be a complex Hilbert space. $T$ is normal iff $\lVert Tx \rVert=\lVert T^{*}x \rVert$ for all $x\in H$. 

> [!Proof]-
> 
> $$
> \begin{align}
> \lVert Tx \rVert ^{2} & =\langle Tx, Tx \rangle  \\
>  & =\langle T^{*}Tx, x \rangle  \\
>  & =\langle T T^{*}x, x \rangle  \\
>  & =\lVert T^{*}x \rVert ^{2}.
> \end{align}
> $$

Let $H=L^{2}(X, \mu)$. Let $f\in L^{\infty}(X, \mu)$. Define $(M_{f}f)=fg$. Shows that $M_{f}$ is a linear operator on $L^{2}(X,\mu)$ with norm $\lVert f \rVert_{\infty}$. Shows that $(M_{f})^{*}=M_{\overline{f}}$, and that $M_{f}$ is unitary. 

---

[!Exercise] Assignment
1. Let $H=L^{2}(\mathbb{R})$. For $t\in \mathbb{R}$, show that $(U_{t}f)(s)=f(s-t)$ is unitary. 
2. Let $H=L^{2}[0, \infty)$. For $t> 0$, show that
$$
(S_{t}f)(s)=\begin{cases}
f(s-t) & s\geqslant  t \\
0 & s< t
\end{cases}
$$
	is an isometry, but not unitary. 



Define $\tilde{L}^{p}(X)=\left\{  f\in L^{0}(X) , \int |f|^{p}< \infty \right\}$. ...

---

$L^{p}$ is Banach wrt $\lVert \cdot \rVert_{p}$. (we have already shown that $L^{\infty}$ is Banach, but I can't recall?)

---
Holder's inequality proof using convexity of $e^{x}$. 

---

Minkowski's inequality