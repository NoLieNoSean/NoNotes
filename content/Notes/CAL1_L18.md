## The mean value theorem 

Recall the [[ANA1_L24#Mean value theorem|mean value theorem]] for functions from $\mathbb{R}$ to $\mathbb{R}$. It is false, in general, for vector valued functions from $\mathbb{R}^{n}$ to $\mathbb{R}^{m}$ when $m> 1$, as illustrated [[ANA1_L25#MVT analogue for vector valued functions|here]]. However, a useful generalization can be obtained by using the dot product:

> [!Theorem] Mean Value Theorem
> Let $S$ be an open subset of $\mathbb{R}^{n}$ and assume that $\mathbf{f}:S\to \mathbb{R}^{m}$ is differentiable at each point of $S$. Let $\mathbf{x}$ and $\mathbf{y}$ be two points in $S$ such that $L(\mathbf{x}, \mathbf{y})\subseteq S$. Then for every vector $\boldsymbol{\alpha}\in \mathbb{R}^{m}$ there is a point $\mathbf{z}\in L(\mathbf{x}, \mathbf{y})$ such that
> $$
> \boldsymbol{\alpha}\cdot (\mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x}))=\boldsymbol{\alpha}\cdot(\mathbf{f}'(\mathbf{z})(\mathbf{y}-\mathbf{x})).
> $$

We can now easily prove the weaker generalization stated [[ANA1_L25#MVT analogue for vector valued functions|here]]. Let $\mathbf{f}:S\to \mathbb{R}^{m}$ where $S\subseteq \mathbb{R}$ and $[x, y]\subseteq S$ be differentiable. Take $\boldsymbol{\alpha}$ to be $\mathbf{f}(y)-\mathbf{f}(x)$:
$$
\begin{align}
\lVert \mathbf{f}(y)-\mathbf{f}(x) \rVert ^{2} & =(\mathbf{f}(y)-\mathbf{f}(x))\cdot(\mathbf{f}'(z)(y-x)) \\
 & \leq (y-x)\lVert \mathbf{f}(y)-\mathbf{f}(x) \rVert \lVert \mathbf{f}'(z) \rVert  \\\\
\implies \lVert \mathbf{f}(y)-\mathbf{f}(x) \rVert & \leq(y-x)\lVert \mathbf{f}'(z) \rVert ,
\end{align}
$$
for some $z\in[x, y]$.