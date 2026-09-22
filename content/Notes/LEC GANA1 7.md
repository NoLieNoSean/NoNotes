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


[!Corollary]
For all $A\subseteq \mathcal{F}$, for $f\geqslant 0$ measurable, define 
$$
\gamma(A)=\int_{A}fd\mu=\int_{X}f 1_{A}d\mu.
$$
Then $\gamma$ is a measure. Countable additivity comes from corollary to MCT. 


---

[!Definition] integral of a measurable real valued function

Let $f:\Omega \to \mathbb{R}$ be measurable. Define
$$
\begin{align}
f_{+}(x) & =\max\{ 0, f(x) \} \\
 & =f 1_{\{ 1:f(t)\geqslant  0 \}}.
\end{align}
$$
Clearly, $f_{+}\geqslant 0$ and measurable. Similarly, define $f_{-}=f 1_{\{ f< 0 \}}$. Then $f=f_{+}-f_{-}$, $f_{+}f_{-}=0$, and $|f|=f_{+}+f_{-}$. We now define $\int_{\Omega}f$ as $\int_{\Omega}f_{+}-\int_{\Omega}f_{-}$.

[!Definition]
A measurable function $f:\Omega\to \mathbb{R}$ is integrable if $\int_{\Omega}|f|d\mu< \infty$. This implies $\int_{\Omega}f_{+}, \int_{\Omega}f_{-}< \infty$, and we define
$$
\int_{\Omega}fd\mu=\int_{\Omega}f_{+}d\mu-\int_{\Omega}f_{-}d\mu.
$$

[!Remark]
1. the integral defined above is $\mathbb{R}$-linear. 
2. if $f\geqslant 0$, then $\int f\geqslant 0$. 
3. if $f\geqslant g$, then $\int f\geqslant \int g$. 

[!Theorem] Dominated convergence theorem
Let $f_{n}, f, g_{n}, g:\Omega\to \mathbb{R}$ be such that 
$$
\begin{align}
 & |f_{n}(x)|\leqslant  g_{n}(x) & \forall x\in \mathbb{R}  \\ 
 & |f(x)|\leqslant  g(x) & \forall x\in \mathbb{R}
\end{align}
$$
and $f_{n}(x)\to f(x)$ almost everywhere and $g_{n}(x)\to g(x)$ almost everywhere and $\int g_{n}< \infty$ and $\int g< \infty$ and $\int g_{n}\to \int g$. Then
$$
\lim_{ n \to \infty } \int f_{n}(x)\, d\mu=\int f(x)\,d\mu
$$