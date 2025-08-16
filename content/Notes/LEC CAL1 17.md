# The chain rule

> [!Theorem]
> Assume that $\mathbf{g}$ is differentiable at $\mathbf{a}$, with total derivative $\mathbf{g}'(\mathbf{a})$. Let $\mathbf{b}=\mathbf{g}(\mathbf{a})$ and assume that $\mathbf{f}$ is differentiable at $\mathbf{b}$, with total derivative $\mathbf{f}'(\mathbf{b})$. Then the composition function $\mathbf{h}=\mathbf{f}\circ \mathbf{g}$ is differentiable at $\mathbf{a}$ and the total derivative $\mathbf{h}'(\mathbf{a})$ is given by
> $$
> \mathbf{h}'(\mathbf{a})=\mathbf{f}'(\mathbf{b})\circ \mathbf{g}'(\mathbf{a}),
> $$
> the composition of the linear functions $\mathbf{f}'(\mathbf{b})$ and $\mathbf{g}'(\mathbf{a})$.
> 
> 
> >[!Proof]-
> > We will show that a [[LEC CAL1 16#Total derivatives|first order Taylor formula]] exists for $\mathbf{h}$.
> > $$
> > \begin{align}
> > \mathbf{h}(\mathbf{a}+\mathbf{y})-\mathbf{h}(\mathbf{a})  & =\mathbf{f}(\mathbf{g}(\mathbf{a}+\mathbf{y}))-\mathbf{f}(\mathbf{g}(\mathbf{a})) \\
> >  & =\mathbf{f}(\mathbf{b}+\mathbf{v})-\mathbf{f}(\mathbf{b}),
> > \end{align}
> > $$
> > where $\mathbf{v}\equiv \mathbf{g}(\mathbf{a}+\mathbf{y})-\mathbf{b}$. Since $\mathbf{g}$ is differentiable at $\mathbf{a}$, we have
> > $$
> > \begin{align}
> > \mathbf{v}=\mathbf{g}'(\mathbf{a})(\mathbf{y})+\lVert \mathbf{y} \rVert \mathbf{E}_{\mathbf{a}}(\mathbf{y}),  &  & (1)
> > \end{align}
> > $$
> > where $\mathbf{E}_{\mathbf{a}}(\mathbf{y})\to \mathbf{0}$ as $\mathbf{y}\to \mathbf{0}$. Since $\mathbf{f}$ is differentiable at $\mathbf{b}$, we have
> > $$
> > \begin{align}
> > \mathbf{f}(\mathbf{b}+\mathbf{v})-\mathbf{f}(\mathbf{b})=\mathbf{f}'(\mathbf{b}) & (\mathbf{v})+\lVert \mathbf{v} \rVert \mathbf{E}_{\mathbf{b}}(\mathbf{v}),
> > \end{align}
> > $$
> > where $\mathbf{E}_{\mathbf{b}}(\mathbf{v})\to \mathbf{0}$ as $\mathbf{v}\to \mathbf{0}$. Using $(1)$, 
> > $$
> > \begin{align}
> > \mathbf{f}(\mathbf{b}+\mathbf{v})-\mathbf{f}(\mathbf{b}) & =\mathbf{f}'(\mathbf{b})[\mathbf{g}'(\mathbf{a})(\mathbf{y})]+\lVert \mathbf{y} \rVert \mathbf{f}'(\mathbf{b})[\mathbf{E}_{\mathbf{a}}(\mathbf{y})]+\lVert \mathbf{v} \rVert \mathbf{E}_{\mathbf{b}}(\mathbf{v}) \\
> >  & =\mathbf{f}'(\mathbf{b})[\mathbf{g}'(\mathbf{a})(\mathbf{y})]+\lVert \mathbf{y} \rVert \mathbf{E}(\mathbf{y}),
> > \end{align}
> > $$
> > where $\mathbf{E}(\mathbf{0})=\mathbf{0}$ and
> > $$
> > \mathbf{E}(\mathbf{y})=\mathbf{f}'(\mathbf{b})[\mathbf{E}_{\mathbf{a}}(\mathbf{y})]+\frac{\lVert \mathbf{v} \rVert }{\lVert \mathbf{y} \rVert }\mathbf{E}_{\mathbf{b}}(\mathbf{v})
> > $$
> > if $\mathbf{y}\ne \mathbf{0}$. To complete the proof we need to show that $\mathbf{E}(\mathbf{y})\to \mathbf{0}$ as $\mathbf{y}\to \mathbf{0}$. The first term clearly tends to $\mathbf{0}$ as $\mathbf{y}\to \mathbf{0}$, and $\mathbf{E}_{\mathbf{b}}(\mathbf{0})\to \mathbf{0}$ since $\mathbf{v}\to \mathbf{0}$ as $\mathbf{y}\to \mathbf{0}$. We will be done if we show that $\lVert \mathbf{v} \rVert/\lVert \mathbf{y} \rVert$ is bounded. From results obtained [[LEC CAL1 16#Bounding the total derivative|here]],
> > $$
> > \begin{align}
> > \lVert \mathbf{v} \rVert \leq \lVert \mathbf{g}'(\mathbf{a})(\mathbf{y}) \rVert +\lVert \mathbf{y} \rVert \lVert \mathbf{E}_{\mathbf{a}}(\mathbf{y}) \rVert \leq \lVert \mathbf{y}   \rVert (M+\lVert \mathbf{E}_{\mathbf{a}}(\mathbf{y}) \rVert ),
> > \end{align}
> > $$
> > where $M=\sum_{k=1}^{m}\lVert \nabla g_{k}(\mathbf{a}) \rVert$. Hence $\lVert \mathbf{v} \rVert/\lVert \mathbf{y} \rVert$ remains bounded as $\mathbf{y}\to \mathbf{0}$. We therefore obtain the first order Taylor formula
> > $$
> > \begin{align}
> > \mathbf{h}(\mathbf{a}+\mathbf{y})-\mathbf{h}(\mathbf{a}) & =\mathbf{f}'(\mathbf{b})[\mathbf{g}'(\mathbf{a})(\mathbf{y})]+\lVert \mathbf{y} \rVert \mathbf{E}(\mathbf{y})
> > \end{align}
> > $$
> > where $\mathbf{E}(\mathbf{y})\to \mathbf{0}$ as $\mathbf{y}\to \mathbf{0}$. Thus, $\mathbf{h}$ is differentiable at $\mathbf{a}$, with derivative $\mathbf{f}'(\mathbf{b})\circ \mathbf{g}'(\mathbf{a})$.
> 

The matrix of $\mathbf{h}'(\mathbf{a})$ is given by   
$$
\mathbf{D}\mathbf{h}(\mathbf{a})=\mathbf{D}\mathbf{f}(\mathbf{b})\mathbf{D}\mathbf{g}(\mathbf{a}).
$$
If $\mathbf{g}:\mathbb{R}^{p}\to \mathbb{R}^{n}$ and $\mathbf{f}:\mathbb{R}^{n}\to \mathbb{R}^{m}$, then $\mathbf{D}\mathbf{g}(\mathbf{a})$ is an $n\times p$ matrix, $\mathbf{D}\mathbf{f}(\mathbf{b})$ is an $m\times n$ matrix, and $\mathbf{D}\mathbf{h}(\mathbf{a})$ is an $m\times p$ matrix. The above matrix equation is equivalent to the $mp$ scalar equations
$$
\begin{align}
D_{j}h_{i}(\mathbf{a}) & = \sum_{k=1}^{n} D_{k}f_{i}(\mathbf{b})D_{j}g_{k}(\mathbf{a}) \\
 & =\nabla f_{i}(\mathbf{b})\cdot D_{j}\mathbf{g}(\mathbf{a}).
\end{align}
$$
In particular, if $p=m=1$, $h'(a)=\nabla f(\mathbf{b})\cdot\mathbf{D}\mathbf{g}(a)$.

> [!Theorem]
> Let $f$ and $D_{2}f$ be continuous on a rectangle $[a, b]\times[c, d]$. Let $p$ and $q$ be differentiable on $[c, d]$ such that $p(y), q(y)\in[a, b]$ for each $y\in[c, d]$. Define $F$ by
> $$
> F(y)\equiv \int_{p(y)}^{q(y)} f(x, y) \, dx ,\quad y\in[c, d].
> $$
> Then $F'(y)$ exists for each $y\in(c, d)$ and is given by
> $$
> F'(y)=\int_{p(y)}^{q(y)} D_{2}f(x, y) \, dx +f(q(y), y)q'(y)-f(p(y), y)p'(y).
> $$
> 
> > [!Proof]-
> > Consider the maps $\mathbf{h}:[c, d]\to [a, b]\times[a, b]\times[c, d]$ and $g:[a, b]\times[a, b]\times[c, d]\to \mathbb{R}$ defined by $y\mapsto \begin{bmatrix}p(y)&q(y)&y\end{bmatrix}^{\intercal}$ and $\begin{bmatrix}x_{1}&x_{2}&x_{3}\end{bmatrix}\mapsto \int_{x_{1}}^{x_{2}} f(t, x_{3}) \, dt$. Then, $F=g\circ \mathbf{h}$, and
> > $$
> > \begin{align}
> > F'(y) & =\nabla g(\mathbf{h}(y))\cdot \mathbf{D}\mathbf{h}(y) \\
> >  & =D_{1}g(\mathbf{h}(y))p'(y)+D_{2}g(\mathbf{h}(y))q'(y)+D_{3}g(\mathbf{h}(y)) \\
> > \end{align}
> > $$
> > We know from [[LEC ANA1 28#Integration and differentiation|here]] that
> > $$
> > \begin{align}
> > D_{1}g(\mathbf{h}(y))  & =\left( \frac{d}{dx_{1}}\int_{x_{1}}^{x_{2}} f(t, x_{3}) \, dt  \right)(\mathbf{h}(y)) \\
> >  & = (-f(x_{1}, x_{3}))(\mathbf{h}(y)) \\
> >  & = -f(p(y), y), \\
> >  \\
> > D_{2}g(\mathbf{h}(y)) & =(f(x_{2}, x_{3}))(\mathbf{h}(y)) \\
> >  & =f(q(y), y).
> > \end{align}
> > $$
> > Also, 
> > $$
> > \begin{align}
> > D_{3}g(\mathbf{h}(y)) & =\left( \int_{x_{1}}^{x_{2}} D_{2}f(t, x_{3}) \, dt  \right)(\mathbf{h}(y)) \\
> >  & = \int_{p(y)}^{q(y)} D_{2}f(t, y) \, dt.
> > \end{align}
> > $$
> > 
> 

Note that [[LEC ANA1 27#Continuous functions|continuous functions are integrable]], and hence the above integrals are well defined. Also note that $f$ being continuous [[LEC ANA1 15#Vector valued functions whose components are continuous|implies]] $f_{1}$ and $f_{2}$ are continuous.