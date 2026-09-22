---
id: "559"
date: 2026-09-10
time: 15:31
tags:
  - GANA1
  - Lecture
---

We have the following immediate consequence of MCT, which allows us to swap $\sum$ and $\int$ for nonnegative measurable functions. 

> [!Corollary]
> Let $\{ f_{n} \}, f:(X, \mathcal{F})\to[0, \infty]$ be measurable, and suppose $\sum_{i=1}^{n}f_{i}\uparrow f$ pointwise. Then, by the [[LEC GANA1 6#^de9d0c|monotone convergence theorem]], 
> $$
> \begin{align}
> \sup _{n}\int_{X}\sum_{i=1}^{n} f_{i}=\int_{X}f,
> \end{align}
> $$
> or, 
> $$
> \sum_{i=1}^{\infty} \int_{X}f_{i}=\int_{X}\sum_{i=1}^{\infty} f_{i}.
> $$
> 

^d5ec73


> [!Corollary]
> Let $f:(X, \mathcal{F})\to[0, \infty]$ be measurable. For all $A\in \mathcal{F}$,
> $$
> \gamma(A)=\int_{A}fd\mu=\int_{X}f 1_{A}d\mu.
> $$
> Then $\gamma$ is a measure. Countable additivity comes from [[#^d5ec73]]. 


---

We now extend [[LEC GANA1 6#^2c598a]] to measurable functions that are not nonnegative:

> [!Definition] Integral of a measurable real valued function
> Let $f:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable. Define
> $$
> \begin{align}
> f_{+}(x) & =\max\{ 0, f(x) \} \\
>  & =f 1_{\{ t:f(t)\geqslant  0 \}}.
> \end{align}
> $$
> Clearly, $f_{+}\geqslant 0$ and is measurable. Similarly, define $f_{-}=-f 1_{\{ t:f(t)< 0 \}}$. Then $f=f_{+}-f_{-}$, $f_{+}f_{-}=0$, and $|f|=f_{+}+f_{-}$ is nonnegative. 
> 
> We call $f$ **integrable** if $\int |f|< \infty$. This implies $\int f_{+}, \int f_{-}< \infty$, and we define
> $$
> \int_{\Omega}fd\,\mu:=\int_{\Omega}f_{+}\,d\mu-\int_{\Omega}f_{-}\,d\mu.
> $$
> 

> [!Remark]
> Let $f, g:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be integrable functions. 
> 1. $\int(\alpha f+g)=\alpha \int f+\int g$. 
> 2. if $f\geqslant 0$, then $\int f\geqslant 0$. 
> 3. if $f\geqslant g$, then $\int f\geqslant \int g$. 

> [!Theorem] Dominated convergence theorem
> Let $f_{n}, f, g_{n}, g:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable functions such that 
> 1. $|f_{n}|\leqslant  g_{n}$ and $|f|\leqslant g$ pointwise for all $x\in \mathbb{R}$ and $n\in \mathbb{N}$,
> 2. $f_{n}\to f$ a.e.,
> 3. $g_{n}\to g$ a.e.,
> 4. $\int g_{n}< \infty$ and $\int g< \infty$, and 
> 5. $\int g_{n}\to \int g$. 
> 
> Then
> $$
> \lim_{ n \to \infty } \int f_{n}(x)\, d\mu=\int f(x)\,d\mu
> $$
> and
> $$
> \int |f_{n}-f|\,d\mu\to 0.
> $$
> 

^1795b3


> [!Corollary]
> Let $f_{n}, f, g:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable functions such that $|f_{n}|\leqslant g$ pointwise, $f_{n}\to f$ a.e., and $\int g< \infty$. Then, the conclusions of [[#^1795b3]] follow.

> [!Corollary]
> Let $\mu$ be a finite measure on $(\Omega, \mathcal{F})$. Let $f_{n}, f:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable functions such that $|f_{n}|\leqslant k$ pointwise for some $k> 0$, and $f_{n}\to f$ a.e. Then, the conclusions of [[#^1795b3]] follow. 


---

[!Definition]
For a measure space $(\Omega, \mathcal{F}, \mu)$, define
$$
L^{1}(\Omega, \mathcal{F}, \mu)=\left\{  f:(\Omega, \mathcal{F})\to \mathbb{R}: f\text{ measurable},\int |f|< \infty  \right\}.
$$
We will write $L^{1}$ in place of $L^{1}(\Omega, \mathcal{F}, \mu)$ when the measure space is clear form context. $L^{1}$ is a vector space. 

For $\{ f_{n} \}, f\subseteq L_{1}$, we say that $f_{n}\to f$ in $L^{1}$ if $\int |f-f_{n}|\to 0$. 

We also have $L^{p}$ spaces for $0< p< \infty$:
$$
L^{p}(\Omega, \mathcal{F}, \mu)=\left\{  f:(\Omega, \mathcal{F})\to \mathbb{R}: f\text{ measurable},\int |f|^{p}< \infty  \right\}.
$$



> [!Example]
> 1. $1_{[n, \infty)}\to 0$ pointwise, but $\int 1_{[n, \infty]}=\infty$ for all $n$, and does not converge to $\int 0=0$. 
> 2. $n 1_{(0, 1/n)}\to 0$ pointwise, but $\int n 1_{(0, 1/n)}=1$ for all $n$, and does not converge to $0$.  

---

[!Proposition]
1. If $f\geqslant 0$, then $\int f=0$ $\implies$ $f=0$ a.e..
2. 