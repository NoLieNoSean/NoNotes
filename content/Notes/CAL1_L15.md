## Derivatives of vector valued functions

[[Mathematical Analysis (Tom A. Apostol) (Z-Library).pdf#page=127|ref]]

> [!Definition]
> Let $\mathbf{f}:(a, b)\to \mathbb{R}^{n}$. Then $\mathbf{f}=(f_{1}, \dots, f_{n})$ where each component $f_{k}$ is a real-valued function defined on $(a, b)$. We say that $\mathbf{f}$ is differentiable at each point $c$ in $(a, b)$ if each component $f_{k}$ is [[ANA1_L23#Derivatives of real functions|differentiable]] at $c$ and we define
> $$
> \mathbf{f}'(c)=(f_{1}'(c), \dots, f_{n}'(c)).
> $$

Many of the [[ANA1_L23#Algebra of derivatives|algebraic theorems]] on differentiation are also valid for vector-valued functions, since they can be applied component-wise. For example, if $\mathbf{f}$ and $\mathbf{g}$ are vector-valued functions differentiable at $c$ and if $\lambda$ is a real valued function differentiable at $c$, then $\mathbf{f}+\mathbf{g}$, $\lambda \mathbf{f}$, and $\mathbf{f}\cdot \mathbf{g}$ are differentiable at $c$ and we have
$$
\begin{align}
(\mathbf{f} + \mathbf{g})'(c) &= \mathbf{f}'(c) + \mathbf{g}'(c), \\
(\lambda \mathbf{f})'(c) &= \lambda'(c)\mathbf{f}(c) + \lambda(c)\mathbf{f}'(c), \\
(\mathbf{f} \cdot \mathbf{g})'(c) &= \mathbf{f}'(c) \cdot \mathbf{g}(c) + \mathbf{f}(c) \cdot \mathbf{g}'(c).
\end{align}
$$
There is also a chain rule for differentiating compositions of vector valued functions with real valued functions which is also proved component-wise: If $\mathbf{f}$ is vector valued and $u$ is real valued, if $u'(c)$ and $\mathbf{f}'(u(c))$ exist, and the domain of $\mathbf{f}$ contains a neighborhood of $u(c)$, then the composite function $\mathbf{g}\equiv \mathbf{f}\circ u$ is differentiable at $c$ and
$$
\mathbf{g}'(c)=\mathbf{f}'(u(c))u'(c).
$$
The mean value theorem, as stated here [[ANA1_L24#Mean value theorem|here]], does not hold for vector valued functions. A modified version is proved [[CAL1_L18#The mean value theorem|here]]. 

---
## Partial derivatives

> [!Definition]
> Let $S\subseteq \mathbb{R}^{n}$ be open and let $f:S\to \mathbb{R}$. If $\mathbf{x}=(x_{1}, \dots, x_{n})$ and $\mathbf{c}=(c_{1}, \dots, c_{n})$ are two points of $S$ having corresponding coordinates equal except for the $k$th, we can consider the limit
> $$
> \lim_{ x_{k} \to c_{k} } \frac{f(\mathbf{x})-f(\mathbf{c})}{x_{k}-c_{k}}.
> $$
> When this limit exists, it is called the **partial derivative** of $f$ with respect to the $k$th coordinate, and is denoted by
> $$
> D_{k}f(\mathbf{c}),\quad f_{k}(\mathbf{c}),\quad \frac{ \partial f }{ \partial x_{k} } (\mathbf{c}).
> $$

Note that a function of $n$ variables can have partial derivatives at a point with respect to each of the variables and yet not be continuous at the point.

---
## Directional derivatives

> [!Definition]
> Let $S\subseteq \mathbb{R}^{n}$ and $\mathbf{f}:S\to \mathbb{R}^{m}$. Let $\mathbf{c}\in S^{\circ}$, and $\mathbf{u}\in \mathbb{R}^{n}$. The **directional derivative** of $\mathbf{f}$ at $\mathbf{c}$ in the direction $\mathbf{u}$, denoted by $\mathbf{f}'(\mathbf{c};\mathbf{u})$, is defined by
> $$
> \mathbf{f}'(\mathbf{c};\mathbf{u})=\lim_{ h \to 0 } \frac{\mathbf{f}(\mathbf{c}+h\mathbf{u})-\mathbf{f}(\mathbf{c})}{h},
> $$
> whenever the limit on the right exists.

> [!Warning]
> You can assume $\lVert \mathbf{u} \rVert=1$ if that helps. However, as defined, $\mathbf{f}'(\mathbf{c};\mathbf{u})$ does depend on $\lVert \mathbf{u} \rVert$. To be precise, $\mathbf{f}'(\mathbf{c};\lambda\mathbf{u})=\lambda \mathbf{f}'(\mathbf{c};\mathbf{u})$.

If $\mathbf{u}=\mathbf{e}_{k}$, then $\mathbf{f}'(\mathbf{c};\mathbf{e}_{k})$ is called a **partial derivative** and is denoted by $D_{k}\mathbf{f}(\mathbf{c})$. When $\mathbf{f}$ is real valued this agrees with the definition given in the previous section.

A function can have a finite directional derivative $\mathbf{f}'(\mathbf{c};\mathbf{u})$ for every $\mathbf{u}$ but may fail to be continuous at $\mathbf{c}$. The [[CAL1_L16#Total derivatives|total derivative]], a more suitable generalization, does guarantee continuity, and also extends the principal theorems of the one-dimensional derivative.

