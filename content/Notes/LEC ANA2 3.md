---
tags:
  - ANA2
  - Lecture
  - Processed
date: 2025-09-03
time: 17:06
id: "163"
---
# Completeness

> [!Definition]
> 1. A **Cauchy space** is a complete metric space.
> 2. A **Banach space** is a complete normed linear space .
> 3. A **Hilbert space** is a complete inner product space.


> [!Highlights]
> - $B(S)$ with the sup norm is always a Banach space for any set $S$.
> - $C_{b}(S)$ is a subspace of $B(S)$. It is also a Banach space. When $S$ is compact, $C_{b}(S)=C(S)$, and $C(S)$ is a Banach space.

*Completeness is not a topological property; it depends on the metric*. Two metrics may induce the same topology (generate the same open sets), but the space may be complete under one metric and not complete under the other. For example, both of the metrics
$$
d_{1}(n, m)=|n-m|,
$$
$$
d_{2}(n, m)=\left| 1/n-1/m \right|.
$$
induce the discrete topology on $\mathbb{N}$. A sequence converges under $d_{1}$ iff it is constant for all $n$ greater than some $N$. The same holds for $d_{2}$ (check this!), so a sequence converges under $d_{1}$ iff it converges under $d_{2}$.

Under $d_{1}$, all Cauchy sequences also satisfy the 'constant after some $N$'. However, under $d_{2}$, the sequence $\{ x_{n} =n\}$ is Cauchy, but it doesn't converge! So $(\mathbb{N}, d_{1})$ is complete, while $(\mathbb{N}, d_{2})$ is not.

> [!Exercise]
> Let $(X, d)$ be a metric space. Show that $\rho=d/(1+d)$ is a metric. Show that $\{ x_{n} \}$ is Cauchy wrt $d$ $\iff$ $\{ x_{n} \}$ is Cauchy wrt $\rho$. %% [MSE](https://math.stackexchange.com/questions/309198/if-dx-y-is-a-metric-then-fracdx-y1-dx-y-is-also-a-metric)  %%

> [!Example] Completeness of $B(S)$
> Let $S$ be any set. Define $B(S)$ as we do [[LEC ANA1 33#Another perspective on uniform convergence|here]], with the metric induced by the sup norm. We will show that $B(S)$ is complete.
> 
> Let $\{ f_{n} \}\subseteq B(S)$ be Cauchy. Then, 
> $$
> \sup_{s\in S}|f_{n}(s)-f_{m}(s)|\to 0\text{ as }n, m\to 0.
> $$
> Thus, for every $s\in S$, $\{ f_{n}(s) \}_{n=1}^{\infty}$ is Cauchy in $\mathbb{R}$. Define $f(s):=\lim_{ n \to \infty }f_{n}(s)$. First, we have to show $f\in B(S)$ (that is, $f$ is bounded).  [[Cauchy sequences#^aeb73a|Cauchy sequences are bounded]]; since $B(S)$ is an NLS, we can write $\lVert f_{n} \rVert\leq M$ for some $M$. Then,
> $$
> \begin{align}
>  |f(s)| & = \lim_{ n \to \infty } |f_{n}(s)| \\
>  &\leq \lim_{ n \to \infty } \left( |f_{n}(s)-f_{n'}(s)|+|f_{n'}(s)| \right)  \\
>  & \overset{!}{\leq} \lim_{ n \to \infty } \lVert f_{n}-f_{n'} \rVert +\lVert f_{n'} \rVert  \\
>  & \leq\epsilon+\lVert f_{n'} \rVert\leq\epsilon+M \quad \forall s
> \end{align}
> $$
> so $f\in B(S)$. The limit in $(!)$ exists because $\lVert f_{n}-f_{n'} \rVert$ is a Cauchy sequence[^2] in $\mathbb{R}$. We now need to show $f_{n}\to f$ under $\lVert \cdot \rVert_{\infty}$, that is, $\lVert f_{n}-f \rVert\to 0$. For $\epsilon> 0$, take $N$ such that $\lVert f_{m}-f_{n} \rVert<\epsilon$ for all $n, m\geq N$. Then, for all $n\geq N$, 
> $$
> \begin{align}
> |f_{n}(s)-f(s)| & =\lim_{ m \to \infty } |f_{m}(s)-f_{n}(s)| \quad \forall s\\
>  & \leq \lim_{ m \to \infty } \lVert f_{m}-f_{n} \rVert \leq\epsilon\\
>  \implies \lVert f_{n}-f  \rVert   & \leq \epsilon.
> \end{align}
> $$
> 
^eb4855

A good idea is to prove uniform convergence first; boundedness then is immediate. See @pughRealMathematicalAnalysis2015 4.3.

Note that this also shows $\mathscr{l}_{\infty}=B(\mathbb{N})$ is complete.

Also note that *$B(S)$ with the sup norm is always a Banach space for any set $S$* (no topology or metric needed at all). The structure of $S$ starts to matter only when we restrict to subspaces like $C_{b}(S)$, because you need a topology on $S$ to know what "continuous" means, and compactness determines whether "continuous implies bounded" (in which case we just write $C(S)$). 

> [!Proposition]
> If $(X, d)$ is a complete metric space, then $A\subseteq X$ is complete iff $A$ is closed in $X$.

> [!Example]
> Let $C[0, 1]\subseteq B[0, 1]$ be the space of all continuous functions on $[0, 1]$ equipped with the metric induced by the sup norm. [[LEC CAL1 4#^9dd2a2|We have shown]] that $C[0, 1]$ is complete: essentially, we know that any Cauchy sequence in $C[0, 1]$ converges in the complete ambient space $B[0, 1]$; showing that the limit lies in $C[0, 1]$ requires us to show that the limit is continuous, which is true because [[LEC ANA1 33#^8504b1|the uniform limit of continuous functions is continuous]].
> 
> Now, consider $C^{1}[0, 1]\subseteq C[0, 1]$, the set of all continuously differentiable functions on $[0, 1]$. $C^{1}[0, 1]$ is a dense subset of $C[0, 1]$[^1], and thus is not complete. However, $C^{1}[0, 1]$ with $\lVert f \rVert_{\infty}^{1}:=\lVert f \rVert_{\infty}+\lVert f' \rVert_{\infty}$ is complete. If $\{ f_{n} \}\subseteq C^{1}[0, 1]$ is Cauchy wrt $\lVert \cdot \rVert^{1}_{\infty}$, then $\{ f_{n} \}$ and $\{ f_{n}' \}$ are both Cauchy in $C[0, 1]$, and thus must converge to functions $f$ and $g$. We can now say that $f'=g$ by [[LEC ANA1 33#^94a1f8]]. 

> [!Remark]
> For a general metric space $S$, you can still consider $C_{b}(S)$, the space of all bounded continuous functions with the sup norm. This is complete as well; the same proof works. Thus, *$C_{b}(S)$ is a Banach space for all metric spaces $S$*. If $S$ happens to be compact, then $C(S)=C_{b}(S)$ is a Banach space.

^e12a1f

> [!Example]
> 
> Consider the spaces $(C[0, 1], \lVert \cdot \rVert_{1})$ and $(C[0, 1], \lVert \cdot \rVert_{\infty})$. For every $f\in C[0, 1]$, 
> $$
> \lVert f \rVert _{1}=\int_{0}^{1} |f| \leq \lVert f \rVert _{\infty}\cdot 1,
> $$
> so $\lVert \cdot \rVert_{1}\leq \lVert \cdot \rVert_{\infty}$ on $C[0, 1]$. In particular, convergence in $\lVert \cdot \rVert_{\infty}$ implies convergence in $\lVert \cdot \rVert_{1}$. Equivalently, by [[LEC ANA1 15#^50d7a4|the sequence criterion for continuity]], the identity map
> $$
> I:(C[0, 1], \lVert \cdot \rVert _{\infty})\to(C[0, 1], \lVert \cdot \rVert _{1})
> $$
> is continuous. So, if $S\subseteq C[0, 1]$ is closed under $\lVert \cdot \rVert_{1}$, it is closed under $\lVert \cdot \rVert_{\infty}$. 
> 
> The norms are not [[LEC CAL1 1#^ae90b2|equivalent]], however: there is no constant $c> 0$ such that $c\lVert f \rVert_{\infty}\leq \lVert f \rVert_{1}$ for all $f\in C[0, 1]$, the classic counterexample being the sequence of triangular 'spike' functions of height $1$ and base $1/n$: $\lVert f \rVert_{\infty}=1$ for every $n$, but $\lVert f_{n} \rVert_{1}\to 0$. $(C[0, 1], \lVert \cdot \rVert_{1})$ is not complete, either: $(x^{n})\to 1_{\{ 1 \}}\not\in C[0, 1]$. 

^226f96



[^1]: Because polynomials are dense in $C[0, 1]$, and every polynomial is in $C^{1}[0, 1]$. Proof uses the Weierstrass approximation theorem. 


[^2]: $\lVert f_{n}-f_{n'} \rVert-\lVert f_{m}-f_{n'} \rVert\leq \lVert f_{n}-f_{m} \rVert$. 
