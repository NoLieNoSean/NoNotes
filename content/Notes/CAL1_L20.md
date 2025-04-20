## Higher order derivatives

Let $f:\mathbb{R}^{n}\to \mathbb{R}$. Then, $f'$ is a map from $\mathbb{R}^{n}$ to $\mathcal{L}(\mathbb{R}^{n}, \mathbb{R})$:
$$
\mathbf{x}\xmapsto{f'}(f'(\mathbf{x}): \mathbf{t}\xmapsto{f'(\mathbf{x})}f'(\mathbf{x})(\mathbf{t})).
$$
Since $\mathcal{L}(\mathbb{R}^{n}, \mathbb{R})\cong\mathbb{R}^{n}$, $f'$ can be thought of as a map from $\mathbb{R}^{n}$ to $\mathbb{R}^{n}$. Now, let $\mathbf{g}\equiv f'$. Then, $\mathbf{g}'$ would be a map from $\mathbb{R}^{n}$ to $\mathcal{L}(\mathbb{R}^{n}, \mathbb{R}^{n})$:
$$
\mathbf{g}':\underset{\in\mathbb{R}^{n}}{{ \mathbf{x} }}\xmapsto{}\left(\underset{\in \mathcal{L}(\mathbb{R}^{n}, \mathcal{L}(\mathbb{R}^{n}, \mathbb{R}))}{\mathbf{g}'(\mathbf{x})}: \underset{\in \mathbb{R}^{n}}{\mathbf{t}_{1}}\xmapsto{}\left(\underset{\in \mathcal{L}(\mathbb{R}^{n}, \mathbb{R})}{\mathbf{g}'(\mathbf{x})(\mathbf{t}_{1})}: \underset{\in \mathbb{R}^{n}}{\mathbf{t}_{2}}\xmapsto{}\underset{\in \mathbb{R}}{\mathbf{g}'(\mathbf{x})(\mathbf{t}_{1})(\mathbf{t}_{2})}\right)\right).
$$
Remember that $\mathbf{g}(\mathbf{x}+\mathbf{t}_{1})=\mathbf{g}(\mathbf{x})+\mathbf{g}'(\mathbf{x})(\mathbf{t}_{1})+\lVert \mathbf{t}_{1} \rVert \mathbf{E}(\mathbf{t}_{1})$, so $\mathbf{g}'(\mathbf{x})(\mathbf{t}_{1})$ is a linear approximation of the linear transformation $\mathbf{g}(\mathbf{x}+\mathbf{t}_{1})-\mathbf{g}(\mathbf{x})$. 

> [!Definition]
> Let $f:U\to \mathbb{R}$, where $U$ is an open subset of $\mathbb{R}^{n}$. Let $\mathbf{x}\in U$, and assume that $f'(\mathbf{x})$ exists. Further, let $\mathbf{g}\equiv f'$ and assume that $\mathbf{g}'(\mathbf{x})$ exists. Then, the **second order directional derivative** $f''(\mathbf{x};\mathbf{t})$, $\mathbf{t}\in \mathbb{R}^{n}$, is defined to be $\mathbf{g}'(\mathbf{x})(\mathbf{t})(\mathbf{t})$.

Lets obtain the expression for $f''(\mathbf{x}, \mathbf{t})$. First, recall that
$$
\mathbf{x}\xmapsto{f'}\begin{bmatrix}
D_{1}f(\mathbf{x}) & \dots & D_{n}f(\mathbf{x})
\end{bmatrix}.
$$
Taking the [[CAL1_L16#Total derivatives in terms of partial derivatives|derivative]], we obtain
$$
\begin{align}
\mathbf{g}':\mathbf{x}\xmapsto{}\left(\mathbf{g}'(\mathbf{x}): \mathbf{t}\mapsto \left( \begin{bmatrix}
D_{1, 1}f(\mathbf{x}) & D_{2, 1}f(\mathbf{x}) & \dots & D_{n, 1}f(\mathbf{x}) \\
D_{1, 2}f(\mathbf{x}) & D_{2, 2}f(\mathbf{x}) & \dots & D_{n, 2}f(\mathbf{x}) \\
\vdots & \vdots & \ddots & \vdots \\
D_{1, n}f(\mathbf{x}) & D_{2, n}f(\mathbf{x}) & \dots & D_{n, n}f(\mathbf{x})
\end{bmatrix}\mathbf{t} \right)^{T} \right)
\end{align}
$$
So, 
$$
\begin{align}
\mathbf{g}'(\mathbf{x})(\mathbf{t})=\begin{bmatrix}
D_{1, 1}f(\mathbf{x})t_{1} + D_{2, 1}f(\mathbf{x})t_{2} + \dots + D_{n, 1}f(\mathbf{x})t_{n} \\
D_{1, 2}f(\mathbf{x})t_{1} + D_{2, 2}f(\mathbf{x})t_{2} + \dots + D_{n, 2}f(\mathbf{x})t_{n} \\
\vdots \\
D_{1, n}f(\mathbf{x})t_{1} + D_{2, n}f(\mathbf{x})t_{2} + \dots + D_{n, n}f(\mathbf{x})t_{n}
\end{bmatrix}^{T}.
\end{align}
$$
It follows that 
$$
\begin{align}
f''(\mathbf{x};\mathbf{t})=\mathbf{g}'(\mathbf{x})(\mathbf{t})(\mathbf{t})= \sum_{j=1}^{n} \sum_{i=1}^{n} D_{i, j}f(\mathbf{x})t_{i}t_{j}.
\end{align}
$$
The **third order directional derivative** is similarly defined to the second order one, and the same procedure yields
$$
\begin{align}
f'''(\mathbf{x};\mathbf{t})= \sum_{k=1}^{n} \sum_{j=1}^{n} \sum_{i=1}^{n} D_{i, j, k}f(\mathbf{x})t_{i}t_{j}t_{k}.
\end{align}
$$
The symbol $f^{(m)}(\mathbf{x}, \mathbf{t})$ is similarly defined. Often, $f^{(m)}(\mathbf{x}, \mathbf{t})$ is used to represent the corresponding algebraic expression when all the $m$th order partial derivatives are defined, even if $f^{(m-1)}$ is not differentiable at $\mathbf{x}$.

## Taylor's formula for functions from Rn to R

> [!Theorem]
> Assume that $f$ and all its partial derivatives of order $< m$ are differentiable at each point of an open set $S\subseteq \mathbb{R}^{n}$. If $\mathbf{a}$ and $\mathbf{b}$ are two points of $S$ such that $L(\mathbf{a}, \mathbf{b})\subseteq S$, then there is a point $\mathbf{z}$ on the line segment $L(\mathbf{a}, \mathbf{b})$ such that
> $$
> \begin{align}
> \mathbf{f}(\mathbf{b})=f(\mathbf{a})+\sum_{k=1}^{m-1} \frac{1}{k!}f^{(k)}(\mathbf{a};\mathbf{b}-\mathbf{a})+\frac{1}{m!}f^{(m)}(\mathbf{z};\mathbf{b}-\mathbf{a}).
> \end{align}
> $$

