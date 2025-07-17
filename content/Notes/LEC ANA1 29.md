---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-26
time: 9:30
---
![[1729920845842.jpg]]

## Integration of vector valued functions

Rudin, 6.23

> [!Definition]
> Let $f_{1}, f_{2}, \dots, f_{k}:[a, b]\to \mathbb{R}$. Let $\mathbf{f}:[a, b]\to \mathbb{R}^{k}$ defined by $\mathbf{f}(x)=(f_{1}(x), f_{2}(x), \dots, f_{k}(x))$. 
> We say $\mathbf{f}\in\mathscr{R}$ if $f_{j}\in\mathscr{R}$ for all $1\leq j \leq k$. If this is the case, we define
> $$
> \int_{a}^{b} \mathbf{f} \, dx =\left( \int_{a}^{b} f_{1} \, dx ,\dots, \int_{a}^{b} f_{k} \, dx  \right).
> $$

Similar definition exists for the Stieltjes integral. Note that parts [[LEC ANA1 27#a|a]], [[LEC ANA1 27#c|c]] and [[LEC ANA1 27#e|e]] of the properties of integrals are valid for these integrals, and so is the [[LEC ANA1 28#Integration and differentiation|fundamental theorem of calculus]]:

Rudin, 6.24

> [!Theorem]
> Let $\mathbf{f}:[a, b]\to \mathbb{R}^{k}$. If $\mathbf{f}\in\mathscr R$ on $[a, b]$ and if there is a differentiable function $\mathbf{F}:[a, b]\to \mathbb{R}^{k}$ such that $\mathbf{F}'=\mathbf{f}$, then
> $$
> \int_{a}^{b} \mathbf{f}(x) \, dx =\mathbf{F}(b)-\mathbf{F}(a).
> $$

### Analogue of 6.13b

Rudin, 6.25

> [!Theorem]
> Let $\mathbf{f}:[a, b]\to \mathbb{R}^{k}$. If $\mathbf{f}\in\mathscr{R}$, then
> $$
> |\mathbf{f}|\in\mathscr{R}\text{ and } \left|\int_{a}^{b} \mathbf{f} \, dx\right|\leq \int_{a}^{b} |\mathbf{f}| \, dx  .
> $$

> **Proof**
> $|\mathbf{f}|=\sqrt{ f_{1}^{2}+f_{2}^{2}+\dots f_{k}^{2} }$. By definition, each $f_{i}\in\mathscr{R}$. It [[LEC ANA1 27#Compositions of integrable functions with continuous functions|follows]] that $f_{i}^{2}$ is integrable for each $i$, since $x^{2}$ is continuous (alternatively, the [[LEC ANA1 28#Product of integrable functions is integrable|product of two integrable functions is integrable]]). Also, note that $x^{2}$ is bijective and continuous on $[0, \infty)$. Thus, $\sqrt{ x }$ is continuous on $[0, \infty)$. It [[LEC ANA1 21#Continuous bijective maps on compact sets are homeomorphisms|follows]] that $|\mathbf{f}|\in\mathscr{R}$.
> 
> Now, let $\mathbf{y}\equiv \int_{a}^{b} \mathbf{f} \, dx=(y_{1}, y_{2}, \dots, y_{n})$. 
> $$
> \begin{align}
> |\mathbf{y}|^{2} & = \sum_{j=1}^{k}  y_{j}^{2}=\sum_{j=1}^{k} y_{j}\left( \int_{a}^{b} f_{j} \, dx  \right)=\int_{a}^{b} \left( \sum_{j=1}^{k} y_{j}f_{j} \right)  \, dx  \\
>  & =\int_{a}^{b} \mathbf{y}\cdot \mathbf{f} \, dx .
> \end{align}
> $$
> From the Cauchy-Schwarz inequality, we have
> $$
> \mathbf{y}\cdot \mathbf{f}\leq |\mathbf{y}||\mathbf{f}|.
> $$
> Thus, we have
> $$
> |\mathbf{y}|^{2}=\int_{a}^{b} \mathbf{y}\cdot \mathbf{f} \, dx \leq \int_{a}^{b} |\mathbf{y}||\mathbf{f}| \, dx  = |\mathbf{y}|\int_{a}^{b} |\mathbf{f}| \, dx .
> $$
> If $|\mathbf{y}|=0$, the result is trivial. If $|\mathbf{y}|\ne 0$, divide both sides by $|\mathbf{y}|$ to obtain the result. ❏

---
## Rectifiable curves

Rudin, 6.26

> [!Definition]
> A [[LEC ANA1 11#Definition|continuous]] mapping $\boldsymbol{\gamma}:[a, b]\to \mathbb{R}^{k}$ is called a *curve*. If $\boldsymbol{\gamma}$ is injective, it is called an *arc*. If $\boldsymbol{\gamma}(b)=\boldsymbol{\gamma}(a)$, $\boldsymbol{\gamma}$ is called a *closed curve*. 

Consider a [[LEC ANA1 26#Partitions|partition]] $P=\{ x_{0}, x_{1}, \dots, x_{n} \}$ of $[a, b]$. Define
$$
\begin{align}
\Lambda(P, \boldsymbol{\gamma})\equiv\sum_{i=1}^{n} |\boldsymbol{\gamma}(x_{i})-\boldsymbol{\gamma}(x_{i-1})|; \\
\end{align}
$$
$$
\Lambda(\boldsymbol{\gamma})\equiv \sup \Lambda(P, \boldsymbol{\gamma}).
$$
If $\Lambda(\boldsymbol{\gamma})$ is finite, we say $\boldsymbol{\gamma}$ is *rectifiable*, and has length $\Lambda(\boldsymbol{\gamma})$.

To motivate what's coming, let $f:[a, b]\to \mathbb{R}$ and let $\boldsymbol{\gamma}:[a, b]\to \mathbb{R}^{2}$, $x\xmapsto{\boldsymbol{\gamma}}(x, f(x))$ be the curve of $f$. Recall the high school formula for finding the length of the curve of $f$:
$$
L=\int_{a}^{b} \sqrt{ 1+f'(x)^{2} } \, dx .
$$
Note that $\boldsymbol{\gamma}'(x)=(1, f'(x))$, and that $L$ can be rewritten as
$$
\int_{a}^{b} |\boldsymbol{\gamma}'(t)| \, dt .
$$
Thus, it makes sense to conjecture that $\Lambda(\boldsymbol{\gamma})=\int_{a}^{b} |\boldsymbol{\gamma}'(t)| \, dt$ in general. For the integral to be defined, $\boldsymbol{\gamma}'$ needs to exist, and $|\boldsymbol{\gamma}'|$ needs to be integrable.
One way to ensure integrability is to require $\boldsymbol{\gamma}'$ to be continuous, [[LEC ANA1 15#Vector valued functions whose components are continuous|since that makes]] $|\boldsymbol{\gamma}'|$ continuous, and [[LEC ANA1 27#Continuous functions|continuous real valued functions are integrable]].

Rudin, 6.27

> [!Theorem]
> If $\boldsymbol{\gamma}'$ exists and is continuous, then $\boldsymbol{\gamma}$ is rectifiable and
> $$
> \Lambda(\boldsymbol{\gamma})=\int_{a}^{b} |\boldsymbol{\gamma}'(t)| \, dt .
> $$

> **Proof**
> Fix $P$. From the [[LEC ANA1 28#Integration and differentiation|fundamental theorem of calculus]] and [[#Analogue of 6.13b|6.25]], we have
> $$
> |\boldsymbol{\gamma}(x_{i})-\boldsymbol{\gamma}(x_{i-1})|= \left|\int_{x_{i-1}}^{x_{i}} \boldsymbol{\gamma}'(t) \, dt \right|\leq \int_{x_{i-1}}^{x_{i}} |\boldsymbol{\gamma}'(t)| \, dt.
> $$
> Summing up both sides, we get
> $$
> \Lambda(P, \boldsymbol{\gamma})\leq \int_{a}^{b} |\boldsymbol{\gamma}'(t)| \, dt .
> $$
> Thus, 
> $$
> \Lambda(\boldsymbol{\gamma})=\sup \Lambda(P, \boldsymbol{\gamma})\leq \int_{a}^{b} |\boldsymbol{\gamma}'(t)| \, dt .
> $$
> Now, if we bound the integral above by $\Lambda(\boldsymbol{\gamma})+\epsilon$ where $\epsilon$ is a quantity that can be made arbitrarily small, we are done. Let $\epsilon>0$. [[LEC ANA1 28#Integration and differentiation|Recall]] that since $\boldsymbol{\gamma}'\in\mathscr{R}$ on $[a, b]$, $\boldsymbol{\gamma}'$ is uniformly continuous on $[a, b]$. So, we get to pick $\delta>0$ such that whenever $|s-t|<\delta$, we have $|\boldsymbol{\gamma}'(s)-\boldsymbol{\gamma}'(t)|<\epsilon$. Choose $P$ such that $\Delta x_{i}<\delta \ \forall i$. This ensures that for all $t\in[x_{i-1}, x_{i}]$ we have $\boldsymbol{\gamma}'(t)=\boldsymbol{\gamma}'(x_{i})+\boldsymbol{\zeta}(t)$ where $|\boldsymbol{\zeta}(t)|<\epsilon$. Now,
> $$
> \begin{align}
> \int_{x_{i-1}}^{x_{i}} |\boldsymbol{\gamma}'(t)| \, dt \leq  & \int_{x_{i-1}}^{x_{i}} |\boldsymbol{\gamma}'(x_{i})| \, dt+\int_{x_{i-1}}^{x_{i}} |\boldsymbol{\zeta}(t)| \, dt   \\
> = & \left|\int_{x_{i-1}}^{x_{i}} \boldsymbol{\gamma}'(x_{i}) \, dt\right|+\int_{x_{i-1}}^{x_{i}} |\boldsymbol{\zeta}(t)| \, dt \\
> \leq & \left|\int_{x_{i-1}}^{x_{i}} \boldsymbol{\gamma}'(x_{i}) \, dt\right|+\epsilon\Delta x_{i} \\
> = & \left|\int_{x_{i-1}}^{x_{i}} \boldsymbol{\gamma}'(t) \, dt -\int_{x_{i-1}}^{x_{i}} \boldsymbol{\zeta}(t) \, dt \right|+\epsilon\Delta x_{i}  \\
> \leq & \left|\int_{x_{i-1}}^{x_{i}} \boldsymbol{\gamma}'(t) \, dt\right| +\left|\int_{x_{i-1}}^{x_{i}} \boldsymbol{\zeta}(t) \, dt \right|+\epsilon\Delta x_{i}  \\
> \leq  & |\boldsymbol{\gamma}(x_{i})-\boldsymbol{\gamma}(x_{i-1})|+2\epsilon\Delta x_{i}.
> \end{align}
> $$
> Summing up both sides, we get
> $$
> \begin{align}
> \int_{a}^{b} |\boldsymbol{\gamma}'(t)| \, dt   & \leq  \Lambda(P, \boldsymbol{\gamma})+2\epsilon(b-a) \\
>  & \leq \Lambda(\boldsymbol{\gamma})+2\epsilon(b-a).
> \end{align}
> $$
> This combined with the previous inequality gives
> $$
> \Lambda(\boldsymbol{\gamma})\leq \int_{a}^{b} |\boldsymbol{\gamma}'(t)| \, dt\leq\Lambda(\boldsymbol{\gamma})+2\epsilon(b-a).
> $$
> ❏
