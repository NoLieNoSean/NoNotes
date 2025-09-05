---
tags:
  - ANA2
  - Lecture
  - Processed
date: 2025-09-03
time: 17:06
---
# Completeness

*Completeness is not a topological property; it depends on the metric*. Two metrics may generate induce the same topology (generate the same open sets), but the space may be complete under one metric and not complete under the other. For example, both of the metrics
$$
d_{1}(n, m)=|n-m|,
$$
$$
d_{2}(n, m)=\left| 1/n-1/m \right|.
$$
induce the discrete topology on $\mathbb{N}$. A sequence converges under $d_{1}$ iff it is constant for all $n$ greater than some $N$. The same holds for $d_{2}$ (check this!), so a sequence converges under $d_{1}$ iff it converges under $d_{2}$.

Under $d_{1}$, all Cauchy sequences also satisfy the 'constant after some $N$'. However, under $d_{2}$, the sequence $\{ x_{n} =n\}$ is Cauchy, but it doesn't converge! So $(\mathbb{N}, d_{1})$ is complete, while $(\mathbb{N}, d_{2})$ is not.

> [!Exercise]
> Let $(X, d)$ be a metric space. Show that $\rho=d/(1+d)$ is a metric. Show that $\{ x_{n} \}$ is Cauchy wrt $d$ $\iff$ $\{ x_{n} \}$ is Cauchy wrt $\rho$.

## Completions, reprise

> [!Theorem]
> Every metric space has a unique [[LEC CAL1 6#^407939|completion]].

[[LEC CAL1 6#Constructing the completion of a metric space|We have already seen the construction of the completion]]. We will prove its uniqueness. We have also not proven that $\mathbb{R}$ is complete yet, which we also do.

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
> so $f\in B(S)$. The limit in $(!)$ exists because $\lVert f_{n}-f_{n'} \rVert$ is a Cauchy sequence in $\mathbb{R}$. We now need to show that $f_{n}\to f$ under $\lVert \cdot \rVert_{\infty}$, that is, $\lVert f_{n}-f \rVert\to 0$. For $\epsilon> 0$, take $N$ such that $\lVert f_{m}-f_{n} \rVert<\epsilon$ for all $n, m\geq N$. Then, for all $n\geq N$, 
> $$
> \begin{align}
> |f_{n}(s)-f(s)| & =\lim_{ m \to \infty } |f_{m}(s)-f_{n}(s)| \quad \forall s\\
>  & \leq \lim_{ m \to \infty } \lVert f_{m}-f_{n} \rVert \leq\epsilon\\
>  \implies \lVert f_{n}-f  \rVert   & \leq \epsilon.
> \end{align}
> $$
> 

Note that this also shows $\mathscr{l}_{\infty}=B(\mathbb{N})$ is complete.

> [!Proposition]
> If $(X, d)$ is a complete metric space, then $A\subseteq X$ is complete iff $A$ is closed in $X$.

> [!Example]
> Let $C[0, 1]\subseteq B[0, 1]$ is the space of all continuous functions on $[0, 1]$ equipped with the metric induced by the sup norm. [[LEC CAL1 4#^9dd2a2|We have shown]] that $C[0, 1]$ is complete: essentially, we know that any Cauchy sequence in $C[0, 1]$ converges in the complete ambient space $B[0, 1]$; showing that the limit lies in $C[0, 1]$ requires us to show that the limit is continuous, which is true because [[LEC ANA1 33#^8504b1|the uniform limit of continuous functions is continuous]].
> 
> Now, consider $C^{1}[0, 1]\subseteq C[0, 1]$, the set of all continuously differentiable functions on $[0, 1]$. $C^{1}[0, 1]$ is a dense subset of $C[0, 1]$[^1], and thus is not complete (incidentally, this makes $C[0, 1]$ a [[LEC CAL1 9#Separable metric spaces|separable]] space). However, $C^{1}[0, 1]$ with $\lVert f \rVert_{\infty}^{1}:=\lVert f \rVert_{\infty}+\lVert f' \rVert_{\infty}$ is complete. If $\{ f_{n} \}\subseteq C^{1}[0, 1]$ is Cauchy wrt $\lVert \cdot \rVert^{1}_{\infty}$, then $\{ f_{n} \}$ and $\{ f_{n}' \}$ are both Cauchy in $C[0, 1]$, and thus must converge to functions $f$ and $g$. We can now say that $f'=g$ by [[LEC ANA1 33#^94a1f8]]. 

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
> The norms are not [[LEC CAL1 1#^ae90b2|equivalent]], however: there is no constant $c> 0$ such that $c\lVert f \rVert_{\infty}\leq \lVert f \rVert_{1}$ for all $f\in C[0, 1]$, the classic counter example being the sequence of triangular 'spike' functions of height $1$ and base $1/n$: $\lVert f \rVert_{\infty}=1$ for every $n$, but $\lVert f_{n} \rVert_{1}\to 0$. $(C[0, 1], \lVert \cdot \rVert_{1})$ is not complete, either: $(x^{n})\to 1_{\{ 1 \}}\not\in C[0, 1]$. 



[^1]:Because polynomials are dense in $C[0, 1]$, and every polynomial is in $C^{1}[0, 1]$. Proof uses the Weierstrass approximation theorem. 


