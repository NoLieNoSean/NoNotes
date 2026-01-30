---
id: "182"
date: January 2025
---

## Line segments and paths

> [!Definition]
> Let $\mathbf{c}, \mathbf{d}\in \mathbb{R}^{n}$. The **line segment** joining $\mathbf{d}$ and $\mathbf{d}$ is defined to be the subset 
> $$
> \{ \mathbf{c}+t(\mathbf{d}-\mathbf{c})\ | \  t\in[0, 1] \}.
> $$

> [!Definition]
> A **path** in $\mathbb{R}^{n}$ is an $n$-tuple $(x_{1}, \dots, x_{n})$ of continuous functions $x_{1}, \dots, x_{n}:[\alpha, \beta]\to \mathbb{R}$, where $\alpha, \beta\in \mathbb{R}$ and $\alpha<\beta$. The path is said to be from $(x_{1}(\alpha), \dots, x_{n}(\alpha))$ to $(x_{1}(\beta), \dots, x_{n}(\beta))$.

> [!Definition]
> $D\subseteq \mathbb{R}^{n}$ is said to be
> 1. **convex** if the line segment joining any two points of $D$ lies in $D$,
> 2. **path-connected** if any two points of $D$ can be joined by a path that lies in $D$.

> [!Definition]
> Let $D\subseteq \mathbb{R}^{n}$ and $f:D\to \mathbb{R}$ be any function. Also, let $A$ be a convex subset of $D$.
> $f$ is **convex** on $A$ if for all $\mathbf{c}, \mathbf{d}\in A$ and $t\in(0, 1)$, we have
> $$
> f(\mathbf{c}+t(\mathbf{d}-\mathbf{c}))\leq f(\mathbf{c})+t(f(\mathbf{d})-f(\mathbf{c})),
> $$
> $f$ is **concave** on $A$ if for all $\mathbf{c}, \mathbf{d}\in A$ and $t\in(0, 1)$, we have
> $$
> f(\mathbf{c}+t(\mathbf{d}-\mathbf{c}))\geq f(\mathbf{c})+t(f(\mathbf{d})-f(\mathbf{c})).
> $$
> 

---
## Local extrema and saddle points

> [!Definition]
> Let $\Gamma$ be a path in $\mathbb{R}^{2}$ given by $\mathbf{x}(t)$, $t\in[\alpha, \beta]$.
> 1. $\Gamma$ is said to pass through a point $\mathbf{x}_{0}\in \mathbb{R}^{2}$ if there is $t_{0}\in(\alpha, \beta)$ such that $\mathbf{x}(t_{0})=\mathbf{x}_{0}$.
> 2. If $x_{1}$ and $x_{2}$ are differentiable at $t_{0}\in(\alpha, \beta)$ and $\mathbf{x}'(t_{0})\equiv(x_{1}'(t_{0}), x_{2}'(t_{0}))\ne \mathbf{0}$, we define the **tangent** of $\Gamma$ at $\mathbf{x}(t_{0})$ to be $\mathbf{x}'(t_{0})$.
> 3. $\Gamma$ is called a **regular path** if the tangent is defined for all $t\in(\alpha, \beta)$.

> [!Definition]
> Let $D\subseteq \mathbb{R}^{2}$ and let $\mathbf{x_{0}}\in D^{\circ}$. Let a path $\Gamma$ lie in $D$ and be given by $\mathbf{x}(t)$ for $t\in[\alpha, \beta]$, and let $\mathbf{x}(t_{0})=\mathbf{x}_{0}$ for some $t_{0}\in(\alpha, \beta)$. Let $f:D\to \mathbb{R}$ be any function. Define $F:[\alpha, \beta]\to \mathbb{R}$ by $F(t)\equiv f(\mathbf{x}(t))$. We say that
> 1. $f$ has a local maximum at $\mathbf{x}_{0}$ along $\Gamma$ if $F$ has a local maximum at $t_{0}$,
> 2. $f$ has a local minimum at $\mathbf{x}_{0}$ along $\Gamma$ if $F$ has a local minimum at $t_{0}$.

> [!Definition]
> Suppose $\Gamma_{1}$ and $\Gamma_{2}$ are regular paths in $\mathbb{R}^{2}$ which pass through the same point $\mathbf{x}_{0}$. Then $\Gamma_{1}$ and $\Gamma_{2}$ are said to **intersect transversally** at $\mathbf{x}_{0}$ if their tangent vectors at $\mathbf{x}_{0}$ are defined and are not multiples of each other.

> [!Definition]
> Let $D\subseteq \mathbb{R}^{2}$ and let $\mathbf{x}_{0}$ be an interior point of $D$. We say that a function $f:D\to \mathbb{R}$ has 
> 1. a **local maximum** at $\mathbf{x}_{0}$ if there is $\delta> 0$ such that $B_{\delta}(\mathbf{x}_{0})\subseteq D$ and $f(\mathbf{x})\leq f(\mathbf{x}_{0})$ for all $\mathbf{x}\in B_{\delta}(\mathbf{x}_{0})$,
> 2. a **local minimum** at $\mathbf{x}_{0}$ if there is $\delta> 0$ such that $B_{\delta}(\mathbf{x}_{0})\subseteq D$ and $f(\mathbf{x})\geq f(\mathbf{x}_{0})$ for all $\mathbf{x}\in B_{\delta}(\mathbf{x}_{0})$,
> 3. a **saddle point** at $\mathbf{x}_{0}$ is there are regular paths $\Gamma_{1}$ and $\Gamma_{2}$ lying in $D$ and intersecting transversally at $\mathbf{x}_{0}$ such that $f$ has a local maximum along $\Gamma_{1}$ and a local minimum along $\Gamma_{2}$ at $\mathbf{x}_{0}$.
