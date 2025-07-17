## Total derivatives

Let $\mathbf{f}:S\to \mathbb{R}^{m}$ be defined on $S\subseteq \mathbb{R}^{n}$ and let $\mathbf{c}\in S^{\circ}$.

> [!Definition]
> $\mathbf{f}$ is **differentiable** at $\mathbf{c}$ if there exists a linear transformation $\mathbf{T}_{\mathbf{c}}:\mathbb{R}^{n}\to \mathbb{R}^{m}$ such that
> $$
> \lim_{ \mathbf{v} \to \mathbf{0} } \frac{1}{\lVert \mathbf{v} \rVert }\left( \mathbf{f}(\mathbf{c}+\mathbf{v})-\mathbf{f}(\mathbf{c})-\mathbf{T}_{\mathbf{c}}(\mathbf{v}) \right)=\mathbf{0},
> $$
> in which case the **total derivative** of $\mathbf{f}$ at $\mathbf{c}$ is defined to be $\mathbf{T}_{\mathbf{c}}$. $\mathbf{T}_{\mathbf{c}}$ is also denoted by $\mathbf{f}'(\mathbf{c})$.

Essentially, $\mathbf{f}$ is differentiable at $\mathbf{c}$ if there exists a linear function $\mathbf{T}_{\mathbf{c}}:\mathbb{R}^{n}\to \mathbb{R}^{m}$ such that 
$$
\mathbf{f}(\mathbf{c}+\mathbf{v})=\mathbf{f}(\mathbf{c})+\mathbf{T}_{\mathbf{c}}(\mathbf{v})+\lVert \mathbf{v} \rVert \mathbf{E}_{\mathbf{c}}(\mathbf{v}),
$$
where $\mathbf{E}_{\mathbf{c}}(\mathbf{v})\to \mathbf{0}$ as $\mathbf{v}\to \mathbf{0}$. The above equation is called a **first order Taylor formula**.

> [!Theorem]
> If $\mathbf{f}$ is differentiable at $\mathbf{c}$, then $\mathbf{T}_{\mathbf{c}}$ is uniquely determined.

> **Proof**
> Let $\mathbf{A}$ and $\mathbf{A}'$ both satisfy the equation in the above definition. Then, 
> $$
> \lim_{ \mathbf{v} \to 0 } \frac{1}{\lVert \mathbf{v} \rVert }(\mathbf{A}-\mathbf{A}')(\mathbf{v})=\mathbf{0}.
> $$
> For a fixed $\mathbf{v}$,
> $$
> \lim_{ t \to 0 } \frac{1}{\lVert t\mathbf{v} \rVert }(\mathbf{A}-\mathbf{A}')(t\mathbf{v})=\lim_{ t \to 0 } \frac{1}{\lVert \mathbf{v} \rVert}(\mathbf{A}-\mathbf{A}')(\mathbf{v})=\mathbf{0},
> $$
> so $(\mathbf{A}-\mathbf{A}')(\mathbf{v})=\mathbf{0}$ for every $\mathbf{v}$. It follows that $\mathbf{A}=\mathbf{A}'$.

> [!Theorem]
> Assume $\mathbf{f}$ is differentiable at $\mathbf{c}$ with total derivative $\mathbf{T}_{\mathbf{c}}$. Then the [[LEC CAL1 15#Directional derivatives|directional derivative]] $\mathbf{f}'(\mathbf{c};\mathbf{u})$ exists for every $\mathbf{u}\in \mathbb{R}^{n}$ and $\mathbf{T}_{\mathbf{c}}(\mathbf{u})=\mathbf{f}'(\mathbf{c};\mathbf{u})$.

> **Proof**
> $$
> \begin{align}
> \mathbf{f}'(\mathbf{c};\mathbf{u}) & =\lim_{ h \to 0 } \frac{f(\mathbf{c}+h\mathbf{u})-\mathbf{f}(\mathbf{c})}{h} \\
>  &=\lim_{ h \to 0 } \frac{\mathbf{T}_{\mathbf{c}}(h\mathbf{u})+\lVert h\mathbf{u} \rVert \mathbf{E}_{\mathbf{c}}(h\mathbf{u})}{h} \\
>  & =\mathbf{T}_{\mathbf{c}}(\mathbf{u}).
> \end{align}
> $$

> [!Theorem]
> If $\mathbf{f}$ is differentiable at $\mathbf{c}$, then $\mathbf{f}$ is continuous at $\mathbf{c}$.

> **Proof**
> Since $\mathbf{c}\in S^{\circ}$, we need to show $\lim_{ \mathbf{x} \to \mathbf{c} }\mathbf{f}(\mathbf{x})=\mathbf{f}(\mathbf{c})$. This is clear, since
> $$
> \begin{align}
> \lim_{ \mathbf{v} \to \mathbf{0} }\mathbf{f}(\mathbf{c}+\mathbf{v}) & =\lim_{ \mathbf{v} \to \mathbf{0} } (\mathbf{f}(\mathbf{c})+\mathbf{T}_{\mathbf{c}}(\mathbf{v})+\lVert \mathbf{v} \rVert\mathbf{E}_{\mathbf{c}}(\mathbf{v}) )  \\
>   & =\mathbf{f}(\mathbf{c}).
> \end{align}
> $$

### Total derivatives in terms of partial derivatives

Since the total derivative is a linear transformation, it can be [[Linear Transformations#Matrix-vector multiplication as a linear transformation|represented]] as left multiplication by a matrix. Let $\mathbf{f}:S\to \mathbb{R}^{m}$, $S\subseteq \mathbb{R}^{n}$, be differentiable at $\mathbf{c}\in S^{\circ}$. As we have previously noted, $\mathbf{T}_{\mathbf{c}}(\mathbf{e}_{k})=\mathbf{f}'(\mathbf{c};\mathbf{e}_{k})=D_{k}\mathbf{f}(\mathbf{c})$. Thus, the matrix of $\mathbf{T}_{\mathbf{c}}$ is given by
$$
\begin{align}
[\mathbf{T}_{\mathbf{c}}] & = \begin{bmatrix}
D_{1}\mathbf{f}(\mathbf{c}) & D_{2}\mathbf{f}(\mathbf{c}) & \dots & D_{n}\mathbf{f}(\mathbf{c})
\end{bmatrix} \\\\
 & = \begin{bmatrix}
D_{1}f_{1}(\mathbf{c}) & D_{2}f_{1}(\mathbf{c}) & \dots & D_{n}f_{1}(\mathbf{c}) \\
D_{1}f_{2}(\mathbf{c}) & D_{2}f_{2}(\mathbf{c}) & \dots & D_{n}f_{2}(\mathbf{c}) \\
\vdots & \vdots & \ddots & \vdots \\
D_{1}f_{m}(\mathbf{c}) & D_{2}f_{m}(\mathbf{c}) & \dots & D_{n}f_{m}(\mathbf{c})
\end{bmatrix},
\end{align}
$$
and $\mathbf{T}_{\mathbf{c}}(\mathbf{v})=[\mathbf{T}_{\mathbf{c}}]\mathbf{v}$. $[\mathbf{T}_{\mathbf{c}}]$ is denoted by $\mathbf{D}\mathbf{f}(\mathbf{c})$, and is called the **Jacobian matrix**.

The $k$th row of the Jacobian matrix is a vector in $\mathbb{R}^{n}$ called the **gradient vector** of $f_{k}$, denoted by $\nabla f_{k}(\mathbf{c})$. When $m=1$, $\mathbf{D}f(\mathbf{c})=\nabla f(\mathbf{c})^{\intercal}$, and $\mathbf{f}'(\mathbf{c};\mathbf{u})=\nabla f(\mathbf{c})\cdot \mathbf{u}$. More generally, we have
$$
\begin{align}
\mathbf{f}'(\mathbf{c})(\mathbf{v})=\sum_{k=1}^{m}(\nabla f_{k}(\mathbf{c})\cdot \mathbf{v} )~ \mathbf{e}_{k}.
\end{align}
$$
#### Bounding the total derivative

> [!Important]
> The above equation yields
> $$
> \begin{align}
> \lVert \mathbf{f}'(\mathbf{c})(\mathbf{v}) \rVert =\left\lVert \sum_{k=1}^{m} (\nabla f_{k}(\mathbf{c})\cdot \mathbf{v})~\mathbf{e}_{k}  \right\rVert \leq \sum_{k=1}^{m} |\nabla f_{k}(\mathbf{c})\cdot \mathbf{v}|\leq \lVert \mathbf{v} \rVert \sum_{k=1}^{m} \lVert \nabla f_{k}(\mathbf{c}) \rVert .
> \end{align}
> $$
> Therefore, 
> $$
> \lVert \mathbf{f}'(\mathbf{c})(\mathbf{v}) \rVert \leq M\lVert \mathbf{v} \rVert ,
> $$
> where $M=\sum_{k=1}^{m}\lVert \nabla f_{k}(\mathbf{c}) \rVert$.

#### When does the total derivative exist?

The Jacobian matrix $\mathbf{D}\mathbf{f}(\mathbf{c})$ is defined at each point $\mathbf{c}\in \mathbb{R}^{n}$ where all the partial derivatives $D_{k}f_{i}(\mathbf{c})$ exist. However, recall that the existence of all partial derivatives does not guarantee that the total derivative exists (given that a function is differentiable at a point, its derivative must be given by the Jacobian matrix, of course). So, when is a function differentiable? A simple criterion for differentiability can be stated as follows:

> [!Definition]
> A function is **continuously differentiable** on $U\subseteq \mathbb{R}^{n}$ if all of its partial derivatives exist and are continuous on $U$. Such a function is called a $C^{1}$ function.

> [!Theorem] Theorem (Criterion for differentiability)
> If $U$ is an open subset of $\mathbb{R}^{n}$, and $\mathbf{f}:U\to \mathbb{R}^{m}$ is a $C^{1}$ mapping, then $\mathbf{f}$ is differentiable on $U$, and its derivative is given by its Jacobian matrix.

This is a special case of a [[LEC CAL1 19#A sufficient condition for differentiability|more general criterion]] which relaxes the hypothesis slightly.


---

## Euler's theorem

[!Theorem]
Let $f$ be defined on an open set $S$ in $\mathbb{R}^{n}$.  Assume $f$ is homogeneous of degree $p$ over $S$. If $f$ is differentiable at $\mathbf{x}$, 
$$
\mathbf{x}\cdot \nabla f(\mathbf{x})=pf(\mathbf{x}).
$$

**Proof**
For fixed $\mathbf{x}$, define $g(\lambda)\equiv f(\lambda \mathbf{x})$. $g'(\lambda)=f'(\lambda \mathbf{x})\mathbf{x}$, so $g'(1)=f'(\mathbf{x})\mathbf{x}=\nabla f(\mathbf{x})\cdot \mathbf{x}$. Also, $g(\lambda)=\lambda^{p}f(\mathbf{x})$, so $g'(\lambda)=p\lambda^{p-1}f(\mathbf{x})$, and $g'(1)=pf(\mathbf{x})$.