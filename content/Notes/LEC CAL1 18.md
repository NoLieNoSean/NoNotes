## The mean value theorem 

Recall the [[LEC ANA1 24#Mean value theorem|mean value theorem]] for functions from $\mathbb{R}$ to $\mathbb{R}$. It is false, in general, for vector valued functions from $\mathbb{R}^{n}$ to $\mathbb{R}^{m}$ when $m> 1$, as illustrated [[LEC ANA1 25#MVT analogue for vector valued functions|here]]. However, a useful generalization can be obtained by using the dot product:

> [!Theorem] Mean Value Theorem
> Let $S$ be an open subset of $\mathbb{R}^{n}$ and assume that $\mathbf{f}:S\to \mathbb{R}^{m}$ is differentiable at each point of $S$. Let $\mathbf{x}$ and $\mathbf{y}$ be two points in $S$ such that $L(\mathbf{x}, \mathbf{y})\subseteq S$. Then for every vector $\boldsymbol{\alpha}\in \mathbb{R}^{m}$ there is a point $\mathbf{z}\in L(\mathbf{x}, \mathbf{y})$ such that
> $$
> \boldsymbol{\alpha}\cdot (\mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x}))=\boldsymbol{\alpha}\cdot(\mathbf{f}'(\mathbf{z})(\mathbf{y}-\mathbf{x})).
> $$

> **Proof**
> Let $\mathbf{u}=\mathbf{y}-\mathbf{x}$. Since $S$ is open and $L(\mathbf{x}, \mathbf{y})\subseteq S$, there is a $\delta> 0$ such that $\mathbf{x}+t\mathbf{u}\in S$ for all real $t$ in the interval $(-\delta, 1+\delta)$. Let $\mathbf{a}$ be a fixed vector in $\mathbb{R}^{m}$ and let $F$ be the real valued function defined on $(-\delta, 1+\delta)$ by $F(t)=\mathbf{a}\cdot \mathbf{f}(\mathbf{x}+t\mathbf{u})$. Then, from the [[LEC CAL1 17#The chain rule|chain rule]], $F$ is differentiable on $(-\delta, 1+\delta)$ and its derivative is given by
> $$
> F'(t)= \mathbf{a}\cdot \mathbf{f}'(\mathbf{x}+t\mathbf{u};\mathbf{u})=\mathbf{a}\cdot \{ \mathbf{f}'(\mathbf{x}+t\mathbf{u})(\mathbf{u}) \}.
> $$
> By the usual mean value theorem, we have $F(1)-F(0)=F'(\theta)$ for some $\theta\in(0, 1)$. Now, 
> $$
> F'(\theta)=\mathbf{a}\cdot \{ \mathbf{f}'(\mathbf{x}+\theta \mathbf{u})(\mathbf{u}) \}=\mathbf{a}\cdot \{ \mathbf{f}'(\mathbf{z})(\mathbf{y}-\mathbf{x}) \},
> $$
> where $\mathbf{z}\equiv \mathbf{x}+\theta \mathbf{u}\in L(\mathbf{x}, \mathbf{y})$. Note that $F(1)-F(0)=\mathbf{a}\cdot \{ \mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x}) \}$ and we are done.

We can now easily prove the weaker version stated [[LEC ANA1 25#MVT analogue for vector valued functions|here]]. Let $\mathbf{f}:S\to \mathbb{R}^{m}$ where $S\subseteq \mathbb{R}$ and $[x, y]\subseteq S$ be differentiable. Take $\boldsymbol{\alpha}$ to be $\mathbf{f}(y)-\mathbf{f}(x)$:
$$
\begin{align}
\lVert \mathbf{f}(y)-\mathbf{f}(x) \rVert ^{2} & =(\mathbf{f}(y)-\mathbf{f}(x))\cdot(\mathbf{f}'(z)(y-x)) \\
 & \leq (y-x)\lVert \mathbf{f}(y)-\mathbf{f}(x) \rVert \lVert \mathbf{f}'(z) \rVert  \\\\
\implies \lVert \mathbf{f}(y)-\mathbf{f}(x) \rVert & \leq(y-x)\lVert \mathbf{f}'(z) \rVert ,
\end{align}
$$
for some $z\in[x, y]$. More generally, if $S\subseteq \mathbb{R}^{n}$, we have
$$
\lVert \mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x}) \rVert \leq \lVert \mathbf{f}'(\mathbf{z})(\mathbf{y}-\mathbf{x}) \rVert .
$$
Moreover, using [[LEC CAL1 16#Bounding the total derivative|this]] result, we have
$$
\lVert \mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x}) \rVert \leq M\lVert \mathbf{y}-\mathbf{x} \rVert,
$$
where $M=\sum_{k=1}^{m}\lVert \nabla f_{k}(\mathbf{z}) \rVert$. Note that $M$ depends on $\mathbf{z}$ and hence on $\mathbf{x}$ and $\mathbf{y}$. However, if all the partial derivatives $D_{j}f_{k}$ are bounded on $S$, there exists an upper bound $A$ for $M$, and hence
$$
\lVert \mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x}) \rVert \leq A\lVert \mathbf{y}-\mathbf{x} \rVert 
$$
for all $\mathbf{x}, \mathbf{y}\in S$ (so $\mathbf{f}$ satisfies the [[LEC CAL1 10#The Banach contraction principle|Lipschitz condition]], with the requirement that $\mathbf{f}$ map between the same spaces being relaxed).
### Functions with bounded and zero total derivative

> [!Theorem]
> Suppose $\mathbf{f}$ maps a convex open set $E\subseteq \mathbb{R}^{n}$ in $\mathbb{R}^{m}$, $\mathbf{f}$ is differentiable in $E$, and there is a real number $M$ such that for every $\mathbf{x}\in E$,
> $$
> \lVert \mathbf{f}'(\mathbf{x}) (\mathbf{v})\rVert \leq M\lVert \mathbf{v} \rVert 
> $$
> for every $\mathbf{v}\in \mathbb{R}^{n}$. Then
> $$
> \lVert \mathbf{f}(\mathbf{b})-\mathbf{f}(\mathbf{a}) \rVert \leq M\lVert \mathbf{b}-\mathbf{a} \rVert 
> $$
> for all $\mathbf{a}\in E$, $\mathbf{b}\in E$.

> **Proof**
> Since $E$ is convex, we can define $\mathbf{g}(t)\equiv \mathbf{f}(\mathbf{a}+t(\mathbf{b}-\mathbf{a}))$ for $t\in[0, 1]$. Now, $\mathbf{g}'(t)=\mathbf{f}'(\mathbf{a}+t(\mathbf{b}-\mathbf{a});\mathbf{b}-\mathbf{a})$, so that
> $$
> \lVert \mathbf{g}'(t) \rVert =\lVert \mathbf{f}'(\mathbf{a}+t(\mathbf{b}-\mathbf{a}))(\mathbf{b}-\mathbf{a}) \rVert \leq M\lVert \mathbf{b}-\mathbf{a} \rVert 
> $$
> for all $t\in[0, 1]$. It follows from the [[LEC ANA1 25#MVT analogue for vector valued functions|mean value theorem]] that for some $x\in[0, 1]$,
> $$
> \begin{align}
> \lVert \mathbf{g}(1) -\mathbf{g}(0)\rVert \leq \lVert \mathbf{g}'(x) \rVert\leq M\lVert \mathbf{b}-\mathbf{a} \rVert .
> \end{align}
> $$

> [!Theorem]
> Let $S$ be an open connected subset of $\mathbb{R}^{n}$, and let $\mathbf{f}:S\to \mathbb{R}^{m}$ be differentiable at each point of $S$. If $\mathbf{f}'(\mathbf{c})=\mathbf{0}$ for each $\mathbf{c}$ in $S$, then $\mathbf{f}$ is constant on $S$.

Follows as a corollary of the previous theorem by plugging $M=0$. Here's another proof.

> **Proof**
> Since $S$ is open and connected, it is polygonally connected, $i$.$e$, every pair of points $\mathbf{x}$ and $\mathbf{y}$ in $S$ can be joined by a polygonal arc lying in $S$. Denote the vertices of this arc by $\mathbf{p}_{1}, \dots, \mathbf{p}_{r}$, where $\mathbf{p}_{1}=\mathbf{x}$ and $\mathbf{p}_{r}=\mathbf{y}$. Since each segment $L(\mathbf{p}_{i+1}, \mathbf{p}_{i})\subseteq S$, the mean value theorem shows that
> $$
> \mathbf{a}\cdot(\mathbf{f}(\mathbf{p}_{i+1})-\mathbf{f}(\mathbf{p}_{i}))=0,
> $$
> for every $\mathbf{a}\in \mathbb{R}^{m}$. Adding these equations for $i=1, 2, \dots, r-1$, we get
> $$
> \mathbf{a}\cdot(\mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x}))=0,
> $$
> for every $\mathbf{a}$. Taking $\mathbf{a}=\mathbf{f}(\mathbf{y})-\mathbf{f}(\mathbf{x})$, we find $\mathbf{f}(\mathbf{x})=\mathbf{f}(\mathbf{y})$, so $\mathbf{f}$ is constant on $S$.