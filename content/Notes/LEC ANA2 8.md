---
tags:
  - ANA2
  - Lecture
date: 2025-09-19
time: 15:35
---
Reviewed [[LEC ANA1 21#^8a68b8]]. 

---


[!Example]
Let $k:[0, 1]\times[0, 1]\to \mathbb{R}$ be continuous. Define $T_{k}:C[0, 1]\to C[0, 1]$ by
$$
(T_{k}f)(x)=\int_{0}^{1} k(x, y)f(y) \, dy 
$$
Let $k_{x}(y):=k(x, y)$. If $\{ x_{n} \}\to x$, the sequence of functions $\{ k_{x_{n}} \}$ must converge to $k_{x}$ pointwise due to the continuity of $k$. Also, by the extreme value theorem, $k\leq M$ on $[0, 1]\times[0, 1]$ for some $M> 0$, so each $k_{x_{n}}$ is bounded by the integrable constant function $M$ on $[0, 1]$. By the [[LEC PROB 10#^f84359|Dominated convergence theorem]], 
$$
\begin{align}
\lim_{ n \to \infty } (T_{k}f)(x_{n}) & =\lim_{ n \to \infty } \int_{0}^{1} k(x_{n}, y)f(y) \, dy \\
  & =\int_{0}^{1} \lim_{ n \to \infty } k(x_{n}, y)f(y) \, dy \\
 & =\int_{0}^{1} k(x, y)f(y) \, dy  \\
 & =(T_{k}f)(x).
\end{align}
$$
So, $T_{k}f$ is continuous for every $f$.
$$
\mathcal{F}=\overline{\{ T_{k}f:\lVert f \rVert _{\infty}\leq 1 \}}\subseteq C[0, 1].
$$
$\mathcal{F}$ is closed, clearly. 
$$
\begin{align}
 & \left| (T_{k}f)(x) \right| \leq \int_{0}^{1} \left| k(x, y) \right| \left| f(y) \right|  \, dy\leq \lVert f \rVert _{\infty}\lVert k \rVert _{\infty} \quad \forall x \\
 & \implies \lVert T_{k}f \rVert _{\infty}\leq \lVert f \rVert _{\infty}\lVert k \rVert _{\infty}.
\end{align}
$$

> [!Remark]
> Side note: Note that $T_{k}$ is linear. Now,
> $$
> \begin{align}
> \lVert T_{k}f-T_{k}g \rVert _{\infty} & =\lVert T_{k}(f-g) \rVert _{\infty} \\
>  & \leq \lVert f-g \rVert _{\infty}\lVert k \rVert _{\infty}.
> \end{align}
> $$
> Thus, $T_{k}$ is uniformly continuous.

If $\lVert f \rVert_{\infty}\leq 1$, then $\lVert T_{k}f \rVert\leq \lVert k \rVert_{\infty}$. Thus, $\mathcal{F}$ is bounded in $C[0, 1]$. 

It remains to show that $\mathcal{F}$ is equicontinuous. 
$$
\begin{align}
\lVert T_{k}f(x)-T_{k}f(x') \rVert  & \leq \int_{0}^{1} \left| k(x, y)-k(x', y) \right|  \, dy \\
 & \leq \int_{0}^{1} \epsilon \, dy  \\
 & = \epsilon.
\end{align}
$$
($k$ is uniformly continuous!)

---
Reviewed [[LEC CAL1 10#The Banach contraction principle]]. 

[!Proposition]
Suppose $T^{k}$ is a contraction. Then $T$ has a fixed point.

[!Proof]-
$$
\begin{align}
d(x, Tx) & =d(T^{k}x, T^{k}(Tx)) \\
 & =d(T^{k}x, T(T^{k}x)) \\
  & \leq cd(x, Tx),
\end{align}
$$
Since $c< 1$ $d(x, Tx)=0$, so $x=Tx$.

[!Proposition]
Suppose $X$ is compact. $T:X\to Y$ such that $d(Tx, Ty)< d(x, y)$ for all $x\ne y$. Then there exists a unique fixed point.

[!proof]-
$x\mapsto d(x, Tx)$ is a continuous function. Thus there exists $x_{0}\in X$ such that $d(x_{0}, Tx_{0})=\inf_{x\in X} d(x, Tx)$. Let $y=Tx_{0}$. Then $d(y, Ty)< d(x_{0}, Tx_{0})$. Thus, $x_{0}=Tx_{0}$. 

---

[!Proposition]
Let $V\subseteq B(S)$ be a closed NLS. Let $T:V\to V$ (need not be linear) satisfy:
1. $T(f)\leq T(g)$ if $f\leq g$ (these are pointwise comparisons).
2. There exists $0<\beta< 1$ such that $T(f+g)\leq(Tf)+\beta c$ for all $f, c$. 
Then $T$ has a unique fixed point.

[!Proof]-
ETP $T$ is a contraction with $\beta$. Fix $f, g\in V$. Let $c=\lVert f-g \rVert_{\infty}$. Then, 
$$
\begin{align}
f\leq g+c \\
g\leq f+c
\end{align}
$$
So, 
$$
\begin{align}
 (Tf) & \leq T(g+c) \\
 & \leq(Tg)+\beta c \\
 \\
  (Tf-Tg) & \leq\beta c \\
  T(f-g) & \leq\beta \lVert f-g \rVert _{\infty}
\end{align}
$$
So, $\lVert Tf-Tg \rVert_{\infty}\leq\beta \lVert f-g \rVert_{\infty}$, and we're done.

---

[!Definition]
$X$ is a metric space. $S\subseteq X$ is nowhere dense if $(\overline{S})^{\circ}=\emptyset$.

[!Definition]
Closed $F\subseteq X$ is said to be meagre of category I if $F$ can be written as a union of countably many closed nowhere dense sets.






