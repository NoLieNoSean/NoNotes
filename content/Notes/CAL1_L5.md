---
tags:
  - CAL1
  - Lecture
  - Processed
date: 2025-01-21
time: 11:50
---
> [!Theorem]
> Let $S\subset \mathbb{R}^{n}$ such that $\overline{S}=\mathbb{R}^{n}$ ($i$.$e$, $S$ is dense in $\mathbb{R}^{n}$). Let $\Omega$ be an open subset of $\mathbb{R}^{n}$. Then, $S\cap \Omega$ is [[ANA1_L14#Dense subsets|dense]] in $\Omega$.

> **Proof**
> Let $\omega\in \Omega$. If $\omega\in S\cap \Omega$, we are done.
> Else, let $N=B_{r_{1}}(\omega, \mathbb{R}^{n})\cap \Omega$ be a neighborhood of $\omega$ in $\Omega$. Since $\Omega$ is open, we know that there exists $r_{2}$ such that $B_{r_{2}}(\omega, \mathbb{R}^{n})\cap \Omega=B_{r_{2}}(\omega, \mathbb{R}^{n})$ (which is also true for all $r<r_{2}$). Let $r'=\min\{ r_{1}, r_{2} \}$. Now, 
> $$
> \begin{align}
> N\cap(\Omega \cap S) & =N\cap S \\
>  & \subset B_{r'}(\omega, \mathbb{R}^{n})\cap \Omega \cap S \\
>  & = B_{r'}(\omega, \mathbb{R}^{n}) \cap S,
> \end{align}
> $$
> which we know contains a point other than $\omega$ since $S$ is dense in $\mathbb{R}^{n}$.

> [!Theorem]
> Let $f:\mathbb{R}^{2}\to \mathbb{R}$. If $\lim_{ (x, y) \to (a, b) }f(x, y)=L$ and if the one dimensional limits $\lim_{ x \to a }f(x, y)$ and $\lim_{ y \to b }f(x, y)$ both exist, then
> $$
> \lim_{ x \to a } \lim_{ y \to b } f(x, y)=\lim_{ y \to b } \lim_{ x \to a } f(x, y)=L.
> $$

> **Proof**
> Let $g(y)=\lim_{ x \to a }f(x, y)$ and $h(x)=\lim_{ y \to b }f(x, y)$. Let $\epsilon>0$. There exists $\delta_{1}>0$ such that $0<\lVert (x, y)-(a, b) \rVert<\delta_{1} \implies$$|f(x, y)-L|<\epsilon$. 
> Now, $0<|x-a|< \frac{\delta_{1}}{\sqrt{ 2 }}$ and $0<|y-b| < \frac{\delta_{1}}{\sqrt{ 2 }}$ implies $0<\sqrt{ (x-a)^{2}+(y-b)^{2}}<\delta_{1}$. There also exists $\delta'>0$ such that $0<|y-b|<\delta'\implies$$|h(x)-f(x, y)|<\epsilon$. Let $\delta_{2}=\min\left\{  \frac{\delta_{1}}{\sqrt{ 2 }}, \delta'  \right\}$. 
> 
> Finally, $|h(x)-L|\leq |h(x)-f(x, y)|+|f(x, y)-L|$. If $0<|x-a|< \frac{\delta_{1}}{\sqrt{ 2 }}$ (and, since the inequality holds for all $y$, we can restrict $0<|y-b| < \delta_{2}$), then $|h(x)-L|\leq \epsilon+\epsilon=2\epsilon$. Thus, $\lim_{ x \to a }h(x)=L$. Ditto for the other iterative limit.