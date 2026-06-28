---
id: "362"
date: 2025-12-05
time: 11:57
tags:
  - ANA2
---
# Problem 5

## Part a

Let $S=\{ \sqrt{ 2 }\cos(nt/2):n\in \mathbb{Z} \}$. $S$ is orthonormal:
$$
\begin{align}
\langle \sqrt{ 2 }\cos(nt/2) , \sqrt{ 2 }\cos(mt/2) \rangle  & = \frac{1}{2\pi}\int_{0}^{2\pi} 2\cos(nt/2)\cos(mt/2) \, dt \\
  & =\frac{1}{2\pi}\int_{0}^{2\pi} \cos\left( \frac{(n-m)t}{2} \right)+\cos\left( \frac{(n+m)t}{2} \right) \, dt \\
 & =\begin{cases}
1 & n=m \\
 0 & n\ne m.
\end{cases}
\end{align}
$$
Observe that $\mathcal{A}:=\text{span}\,S$ is a unital subalgebra of $(C([0, 2\pi], \mathbb{R}), \lVert \cdot \rVert_{\infty})$ which separates points. By [[LEC ANA2 11#^b2e532]], $\mathcal{A}$ is dense in $(C([0, 2\pi], \mathbb{R}), \lVert \cdot \rVert_{\infty})$. Thus, for every $f\in C([0, 2\pi], \mathbb{R})$, there exists $\{ f_{n} \}\subseteq \mathcal{A}$ such that $\{ f_{n} \}\rightrightarrows f$. It follows that $|f-f_{n}|^{2}\rightrightarrows 0$. By [[LEC ANA1 33#^9132bb]],
$$
\begin{align}
\lim_{ n \to \infty } \int_{0}^{2\pi} |f-f_{n}|^{2} \, dx = 0,
\end{align}
$$
so $\{ f_{n} \}\to f$ under $\lVert \cdot \rVert_{2}$. It follows that $\mathcal{A}$ is dense in $(C([0, 2\pi], \mathbb{R}), \lVert \cdot \rVert_{2})$. The embedding of $(C([0, 2\pi], \mathbb{R}), \lVert \cdot \rVert_{2})$ in $X$ is dense in $X$, since Riemann integrable functions can be approximated arbitrarily well by continuous functions when using $\lVert \cdot \rVert_{2}$. It follows that (the image under the quotient map of) $C([0, 2\pi], \mathbb{R})$ remains dense in $L$, and hence in $L^{2}$. Thus, $\mathcal{A}$ is dense in $L^{2}([0, 2\pi], \mathbb{R})$. 

## Part b

Note that 
$$
\frac{1}{2\pi}\sum_{m=1}^{k}\left(\frac{8m((-1)^{n}-1)}{n^{2}-4m^{2}}\right)\sqrt{2}\sin\left(mx\right)\to \sqrt{ 2 }\cos(nt/2)\quad \text{as}\quad k\to \infty
$$
for all $n$ [^1]. It follows that $T$ is dense in $L^{2}([0, 2\pi], \mathbb{R})$. 

Suppose, for contradiction, there exists $p\in T$ with 
$$
\varphi(f)=\langle p, f \rangle =\frac{1}{2\pi}\int_{0}^{2\pi}p(x)f(x)  \, dx 
$$
for every $f\in T$. Then for every $f\in T$
$$
\frac{1}{2\pi}\int_{0}^{2\pi} (p(x)-x)f(x) \, dx =0,
$$
so $p-x$ is orthogonal to every element of $T$. Since $T$ is dense in $L^{2}([0, 2\pi])$ and the inner product is continuous, $p-x$ is orthogonal to all of $L^{2}$, which forces $p-x=0$ in $L^{2}$. But $x$ is not a trigonometric polynomial, so this is impossible. 

This does not violate Riesz, since $T$ is not closed and hence not a complete space. 

Yes, $\varphi$ is representable as a functional on $L^{2}([0, 2\pi])$. $x\in L^{2}([0, 2\pi])$, and for every $f\in L^{2}([0, 2\pi])$, the map
$$
f\mapsto\frac{1}{2\pi}\int_{0}^{2\pi} xf=\langle x, f \rangle 
$$
is a bounded linear functional, since $|\langle x, f \rangle|\leqslant \lVert x \rVert _{2}\lVert f \rVert _{2}$ and is represented by $[x]\in L^{2}([0, 2\pi])$ via Riesz. 

[^1]: At this point, I realized that $S'=\{ 1 \}\cup \{ \sqrt{ 2 }\cos nt, \sqrt{ 2 }\sin nt:n\in \mathbb{N} \}$ is also an ONB, and one from which the density of $T$ in $L^{2}([0, 2\pi])$ is evident. Instead of redoing my work from part a, I instead show that elements of $S$ can be approximated by trigonometric polynomials using the Fourier series of $\sqrt{ 2 }\cos(nt/2)$ in $S'$. 

---

# Problem 2

> [!Exercise]
> Find the Fourier series of the function $f:[-\pi, \pi]\to \mathbb{R}$ given by $f(x)=x^{2}$. Deduce that
> $$
> \begin{align}
> \sum_{n=1}^{\infty} \frac{1}{n^{4}}=\frac{\pi^{4}}{90}.
> \end{align}
> $$
> 


$$
\begin{align}
\hat{f}(n)=\frac{1}{2\pi} \int_{-\pi}^{\pi}x^{2}e^{ -inx }  \, dx = \begin{cases}
 \dfrac{2(-1)^{n}}{n^{2}} & n\ne 0 \\\\
 \dfrac{\pi^{2}}{3} & n=0
\end{cases}
\end{align}
$$
We now have
$$
\frac{\pi^{4}}{5}=\lVert f \rVert _{2}^{2}=\frac{\pi^{4}}{9}+\sum_{n=-\infty}^{-1} |\hat{f}(n)|^{2}+\sum_{n=1}^{\infty} |\hat{f}(n)|^{2}= \frac{\pi^{4}}{9}+\sum_{n=1}^{\infty} \frac{8}{n^{4}}.
$$


---

# Problem 3

> [!Exercise]
> Suppose that $\{ f_{k} \}_{k=1}^{\infty}$ is a sequence of Riemann integrable functions on the interval $[0, 1]$ such that
> $$
> \int_{0}^{1} |f_{k}(x)-f(x)| \, dx \to 0.
> $$
> Show that $\hat{f}_{k}(n)\to \hat{f}(n)$ uniformly in $n$ as $k\to \infty$.

$$
\begin{align}
|\hat{f}_{k}(n)-\hat{f}(n)|  & =\left| \int_{0}^{1} (f_{k}(x)-f(x))e^{ -inx } \, dx  \right|   \\
 & \leqslant \int_{0}^{1} |f_{k}(x)-f(x)| \, dx  \\
 \\
\implies \sup_{n\in \mathbb{N}}|\hat{f}_{k}(n)-\hat{f}(n)| & \leqslant \int_{0}^{1} |f_{k}(x)-f(x)| \, dx\to 0 \quad \text{ as }\quad k\to 0
\end{align}

$$
Thus, $\hat{f}_{k}(n)\to \hat{f}(n)$ uniformly. 


---

# Problem 4
