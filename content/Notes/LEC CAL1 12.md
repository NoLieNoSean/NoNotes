---
id: "181"
date: January 2025
---

## Monotonicity and Bimonotonicity

> [!Definition]
> Let $D\subseteq \mathbb{R}^{n}$ and let $f:D\to \mathbb{R}$ be any function. Let $I$ and $J$ be intervals in $\mathbb{R}$ such that $I\times J\subseteq D$. We say that
> 1. $f$ is *monotonically increasing* on $I\times J$ if for all $\mathbf{x}, \mathbf{y}\in I\times J$, $\mathbf{x}\leq \mathbf{y}\implies f(\mathbf{x})\leq f(\mathbf{y})$. 
> 2. $f$ is *monotonically decreasing* on $I\times J$ if for all $\mathbf{x}, \mathbf{y}\in I\times J$, $\mathbf{x}\leq \mathbf{y}\implies f(\mathbf{x})\geq f(\mathbf{y})$.
> 3. $f$ is *bimonotonically increasing* on $I\times J$ if for all $\mathbf{x}, \mathbf{y}\in I\times J$, $\mathbf{x}\leq \mathbf{y}\implies$ $f(x_{1}, y_{2})+f(x_{2}, y_{1})\leq f(x_{1}, y_{1})+f(x_{2}, y_{2})$.
> 4. $f$ is *bimonotonically decreasing* on $I\times J$ if for all $\mathbf{x}, \mathbf{y}\in I\times J$, $\mathbf{x}\leq \mathbf{y}\implies$ $f(x_{1}, y_{2})+f(x_{2}, y_{1})\geq f(x_{1}, y_{1})+f(x_{2}, y_{2})$.
> 5. $f$ is *bimonotonic* on $I\times J$ if $f$ is bimonotonically increasing or bimonotonically decreasing on $I\times J$. 

> [!Theorem] Proposition
> Let $I, J$ be nonempty intervals in $\mathbb{R}$. Given any $\phi:I\to \mathbb{R}$ and $\psi:I\to \mathbb{R}$, consider $f:I\times J\to \mathbb{R}$ and $g:I\times J\to \mathbb{R}$ defined by
> $$
> f(x, y)\equiv \phi(x)+\psi(y),
> $$
> $$
> g(x, y)\equiv \phi(x)\psi(y)
> $$
> for $(x, y)\in I\times J$. Then, 
> 1. $f$ is monotonically increasing on $I\times J$ iff $\phi$ is increasing on $I$ and $\psi$ is increasing on $J$.
> 2. Assume $\phi(x)\geq 0$ and $\psi(y)\geq 0$ for all $x\in I$ and $y\in J$, and $\phi(x_{0})> 0$ and $\psi(y_{0})> 0$ for some $x_{0}\in I$ and $y_{0}\in J$. Then $g$ is monotonically increasing on $I\times J$ iff $\phi$ is increasing on $I$ and $\psi$ is increasing on $J$.
> 3. $f$ is always bimonotonically increasing and decreasing on $I\times J$.
> 4. If $\phi$ is monotonic on $I$ and $\psi$ is monotonic on $J$, then $g$ is bimonotonic on $I\times J$. More specifically, if $\phi$ and $\psi$ are both increasing or both decreasing, then $g$ is bimonotonically increasing, whereas if one of them is increasing and the other is decreasing, then $g$ is bimonotonically decreasing.

> [!Info]
> A function $f:I\to \mathbb{R}$ where $I\subseteq \mathbb{R}$ is an interval is said to be *concave* if for any $\alpha\in[0, 1]$, 
> $$
> f((1-\alpha)x+\alpha y)\geq(1-\alpha)f(x)+\alpha f(y).
> $$
> Similar definition for convex functions.

> [!Theorem] Proposition
> Let $I, J$ be nonempty intervals in $\mathbb{R}$. The set
> $$
> I+J\equiv \{ x+y\ | \  x\in I \text{ and } y\in J \}
> $$
> is an interval in $\mathbb{R}$. Further, let $\phi:I+J\to \mathbb{R}$ be any function and consider $f:I\times J\to \mathbb{R}$ defined by
> $$
> f(x, y)\equiv \phi(x+y)
> $$
> for $(x, y)\in I\times J$. Then,
> 1. $\phi$ is increasing/decreasing on $I+J$ $\implies$ $f$ is monotonically increasing/decreasing on $I\times J$.
> 2. $\phi$ is convex/concave on $I+J$ $\implies$ $f$ is bimonotonically increasing/decreasing on $I\times J$
> 
> 

> **Proof**
> First, let's show that $I+J$ is an interval. Let $x_{1}, x_{2}\in I$ and $y_{1}, y_{2}\in J$ be such that $x_{1}+y_{1}\leq x_{2}+y_{2}$ and consider $r\in \mathbb{R}$ such that $x_{1}+y_{1}< r< x_{2}+y_{2}$. Then, there exists $t\in[0, 1]$ such that $r=t(x_{1}+y_{1})+(1-t)(x_{2}+y_{2})=$ $tx_{1}+(1-t)x_{2}+ty_{1}+(1-t)y_{2}$. Note that $tx_{1}+(1-t)(x_{2})\in I$ and $ty_{1}+(1-t)y_{2}\in J$, and we are done.
> 
> $(1)$ should be clear. Next, suppose $\phi$ is convex on $I+J$. Consider $\mathbf{x}, \mathbf{y}\in I\times J$ such that $\mathbf{x}\leq \mathbf{y}$ and $\mathbf{x}\ne \mathbf{y}$. Note that
> $$
> x_{1}+y_{2} = \lambda(x_{1}+y_{1})+(1-\lambda)(x_{2}+y_{2})
> $$
> and
> $$
> x_{2}+y_{1}=(\lambda-1)(x_{1}+y_{1})+\lambda(x_{2}+y_{2}),
> $$
> where $\lambda\in[0, 1]$ can be explicitly computed. Since $\phi$ is convex,
> $$
> \phi(x_{1}+y_{2})\leq\lambda \phi(x_{1}+y_{1})+(1-\lambda)(x_{2}+y_{2})
> $$
> and 
> $$
> \phi(x_{2}+y_{1})\leq \lambda \phi(x_{2}+y_{2})+(1-\lambda)\phi(x_{1}+y_{1}).
> $$
> Thus, 
> $$
> \phi(x_{1}+y_{2})+\phi(x_{2}+y_{1})\leq \phi(x_{1}+y_{1})+\phi(x_{2}+y_{2}).
> $$
> It follows that $f$ is bimonotonically increasing.




