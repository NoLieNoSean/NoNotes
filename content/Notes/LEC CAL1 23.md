## Extrema of real valued functions of one variable

> [!Theorem]
> For some integer $n\geq 1$, let $f:\mathbb{R}\to \mathbb{R}$ have continuous $n$th derivative in the open interval $(a, b)$. Suppose also that for some $c\in(a, b)$, we have
> $$
> f'(c)=f''(c)=\dots=f^{(n-1)}(c)=0,\quad\text{ but }\quad f^{(n)}(c)\ne 0.
> $$
> Then for even $n$, $f$ has a local minimum at $c$ if $f^{(n)}(c)> 0$, and a local maximum at $c$ if $f^{(n)}(c)< 0$. If $n$ is odd, there is neither a local maximum nor a local minimum at $c$.
> 
> > [!Proof]-
> > Since $f^{(n)}(c)\ne 0$ and $f^{(n)}$ is continuous at $c$, there exists an interval $B(c)$ such that for every $x$ in $B(c)$, $f^{(n)}(x)$ will have the same sign as $f^{(n)}(c)$. Now by [[LEC ANA1 25#Taylor's theorem|Taylor's formula]] for functions from $\mathbb{R}$ to $\mathbb{R}$, for every $x\in B(c)$,
> > $$
> > \begin{align}
> > f(x)-f(c)= \frac{f^{n}(x_{1})}{n!}(x-c)^{n},
> > \end{align}
> > $$
> > where $x_{1}\in B(c)$. If $n$ is even, this equation implies $f(x)\geq f(c)$ when $f^{(n)}(c)> 0$ and $f(x)\leq f(c)$ when $f^{(n)}(c)< 0$. If $n$ is odd, it is clear that there can be no extremum at $c$.
> > 
> 

---

## Extrema of real valued functions of several variables

Given the existence of each partial derivative $D_{k}f(\mathbf{a})$ at some interior point $\mathbf{a}$ in the domain of $f$, every partial derivative being zero is a necessary condition for $f$ to have a local maximum or a local minimum at $\mathbf{a}$. We can also state this in terms of directional derivatives by saying that $f'(\mathbf{a};\mathbf{u})$ must be zero for every direction $\mathbf{u}$. This is not a sufficient condition, however.

> [!Definition]
> If $f$ is differentiable at $\mathbf{a}$ and if $\nabla f(\mathbf{a})=\mathbf{0}$, the point $\mathbf{a}$ is called a **stationary point** of $\mathbf{f}$. A stationary point is called a **saddle point** if every $n$-ball $B(\mathbf{a})$ contains points $\mathbf{x}$ such that $f(\mathbf{x})> f(\mathbf{a})$ and other points such that $f(\mathbf{x})< f(\mathbf{a})$.

To determine whether a function of $n$ variables has a local maximum, a local minimum, or a saddle point at a stationary point $\mathbf{a}$, we must determine the algebraic sign of $f(\mathbf{x})-f(\mathbf{a})$ for all $\mathbf{x}$ in a neighborhood of $\mathbf{a}$. As in the one-dimensional case, this is done with the help of [[LEC CAL1 20#Taylor's formula for functions from Rn to R|Taylor's formula]]. If the partial derivatives of $f$ are differentiable on an $n$-ball $B(\mathbf{a})$ then
$$
f(\mathbf{a}+\mathbf{t})-f(\mathbf{a})=\nabla f(\mathbf{a})\cdot \mathbf{t}+\frac{1}{2}f''(\mathbf{z};\mathbf{t}),
$$
where $\mathbf{z}$ lies on the line segment $L(\mathbf{a}, \mathbf{a}+\mathbf{t})$. At a stationary point we have $\nabla f(\mathbf{a})=\mathbf{0}$, so
$$
f(\mathbf{a}+\mathbf{t})-f(\mathbf{a})=\frac{1}{2}f''(\mathbf{z};t).
$$
Therefore, as $\mathbf{a}+\mathbf{t}$ ranges over $B(\mathbf{a})$, the algebraic sign of $f(\mathbf{a}+\mathbf{t})-f(\mathbf{a})$ is determined by that of $f''(\mathbf{z};\mathbf{t})$. We would like to relate the sign of $f''(\mathbf{z};\mathbf{t})$ to that of $f''(\mathbf{a};\mathbf{t})$. Define
$$
\lVert \mathbf{t} \rVert ^{2}\lvert E(\mathbf{t}) \rvert =\frac{1}{2}f''(\mathbf{z};\mathbf{t})-\frac{1}{2}f''(\mathbf{a};\mathbf{t})
$$
and note that
$$
\lVert \mathbf{t} \rVert ^{2}|E(\mathbf{t})|\leq \frac{1}{2}\sum_{i=1}^{n} \sum_{j=1}^{n} |D_{i, j}f(\mathbf{z})-D_{i, j}f(\mathbf{a})|\lVert \mathbf{t} \rVert ^{2}.
$$
This shows us that $E(\mathbf{t})\to \mathbf{0}$ as $\mathbf{t}\to 0$ if the second order partial derivatives of $f$ are continuous at $\mathbf{a}$. Now, we can write
$$
f(\mathbf{a}+\mathbf{t})-f(\mathbf{a})=\frac{1}{2}f''(\mathbf{a};\mathbf{t})+\lVert \mathbf{t} \rVert ^{2}E(\mathbf{t}).
$$
We will show that this equation allows us to say that the sign of $f(\mathbf{a}+\mathbf{t})-f(\mathbf{a})$ is the same as that of $\frac{1}{2}f''(\mathbf{a};\mathbf{t})$ in a neighborhood of $\mathbf{a}$.

> [!Theorem]
> Assume that the second order partial derivatives $D_{i, j}f$ exist in an $n$-ball $B(\mathbf{a})$ and are continuous at $\mathbf{a}$, where $\mathbf{a}$ is a stationary point of $f$. Let
> $$
> Q(\mathbf{t})=\frac{1}{2}f''(\mathbf{a};\mathbf{t})=\frac{1}{2}\sum_{i=1}^{n} \sum_{j=1}^{n} D_{i, j}f(\mathbf{a})t_{i}t_{j}.
> $$
> 1. If $Q(\mathbf{t})> 0$ for all $\mathbf{t}\ne \mathbf{0}$, $f$ has a relative minimum at $\mathbf{a}$.
> 2. If $Q(\mathbf{t})< 0$ for all $\mathbf{t}\ne \mathbf{0}$, $f$ has a relative maximum at $\mathbf{a}$.
> 3. If $Q(t)$ takes both positive and negative values, then $f$ has a saddle point at $\mathbf{a}$.

**Proof**
The function $Q$ is continuous at each point $\mathbf{t}$ in $\mathbb{R}^{n}$. Let $S=\{ \mathbf{t}\ | \ \lVert \mathbf{t} \rVert=1 \}$. If $Q(\mathbf{t})> 0$ for all $\mathbf{t}\ne \mathbf{0}$, then $Q(\mathbf{t})$ is positive on $S$. Since $S$ is compact, $Q$ has a minimum on $S$ (call it $m$), and $m> 0$. Now, $Q(c\mathbf{t})=c^{2}Q(\mathbf{t})$ for all real $\mathbf{c}$. Taking $c=1/\lVert \mathbf{t} \rVert$ when $\mathbf{t}\ne \mathbf{0}$, we see that $c\mathbf{t}\in S$, and $Q(c\mathbf{t})\geq m$, so $Q(\mathbf{t})\geq \lVert \mathbf{t} \rVert^{2}m$. So,
$$
f(\mathbf{a}+\mathbf{t})-f(\mathbf{a})=Q(\mathbf{t})+\lVert \mathbf{t} \rVert ^{2}E(\mathbf{t})\geq m\lVert \mathbf{t} \rVert ^{2}+\lVert \mathbf{t} \rVert ^{2}E(\mathbf{t}).
$$
Since $E(\mathbf{t})\to 0$ as $\mathbf{t}\to 0$, there is $r> 0$ such that $|E(\mathbf{t})|< m/2$ whenever $0< \lVert \mathbf{t} \rVert< r$. For such $\mathbf{t}$ we have 
$$
f(\mathbf{a}+\mathbf{t})-f(\mathbf{a})> m\lVert \mathbf{t} \rVert ^{2}-\frac{1}{2}m\lVert \mathbf{t} \rVert ^{2}> 0.
$$
Therefore $f$ has a relative minimum at $\mathbf{a}$.

[!Corollary]
Let $f$ be a real-valued function with continuous second-order partial derivatives exist in a ball $B(\mathbf{a})$ and are continuous at a stationary point $\mathbf{a}\in \mathbb{R}^{2}$. Let
$$
A=D_{1, 1}f(\mathbf{a})\quad B=D_{1, 2}f(\mathbf{a})\quad C=D_{2, 2}f(\mathbf{a}).
$$
Let
$$
\Delta=\det \begin{bmatrix}
A & B \\
B & C
\end{bmatrix}=AC-B^{2}.
$$
Then, we have
1. If $\Delta> 0$ and $A> 0$, $f$ has a relative minimum at $\mathbf{a}$.
2. If $\Delta> 0$ and $A< 0$, $f$ has a relative maximum at $\mathbf{a}$.
3. If $\Delta< 0$, $f$ has a saddle point at $\mathbf{a}$.