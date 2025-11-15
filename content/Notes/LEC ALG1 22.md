---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-11-12
time: 14:00
id: "88"
---
# More on orthogonal vectors

## Constructing orthonormal basis using Gram-Schmidt

Recall that If $V$ is a finite dimensional inner product space, it has an orthonormal set as a basis. 

> [!Example]
> Let $V$ be the set of all polynomials with real coefficients and degree $\leq 2$. Define
> $$
> \langle f, g \rangle =\int_{-1}^{1} f(t)g(t) \, dt
> $$
> The standard basis of $V$ is $( \mathbf{v}_{1}, \mathbf{v}_{2}, \mathbf{v}_{3} )\equiv( 1, t, t^{2})$. Applying the [[LEC ALG1 21#^f789a3|Gram-Schmidt Orthogonalization Process]], we get 
> $$
> \begin{align} \\
> \mathbf{w}_{1} & = \frac{\mathbf{v}_{1}}{\lVert \mathbf{v}_{1} \rVert}= \frac{1}{\sqrt{ \int_{-1}^{1}  \, dt  }}=\frac{1}{\sqrt{ 2 }}. \\
>  \\
> 
> \mathbf{u}_{2} & =\mathbf{v}_{2}-\langle \mathbf{v}_{2}, \mathbf{w}_{1} \rangle \mathbf{w}_{1} \\
>  & =t-\left( \int_{-1}^{1} t \frac{1}{\sqrt{ 2 }} \, dt   \right) \frac{1}{\sqrt{ 2 }} \\
>  & =t \\
>  \\
> \mathbf{w}_{2} & = \frac{\mathbf{u}_{2}}{\lVert \mathbf{u}_{2} \rVert }= \frac{t}{\sqrt{ \int_{-1}^{1} t^{2} \, dt  }} =t\sqrt{ \frac{3}{2} } \\
>  \\
> \mathbf{u}_{3} & =\mathbf{v}_{3}-\langle \mathbf{v}_{3}, \mathbf{w}_{1} \rangle \mathbf{w}_{1}-\langle \mathbf{v}_{3}, \mathbf{w}_{2} \rangle \mathbf{w}_{2}=t^{2} -\frac{1}{3} \\
>  \\
> \mathbf{w}_{3}  & =\frac{\mathbf{u}_{3}}{\lVert \mathbf{u}_{3} \rVert }= \frac{\sqrt{ 10 }}{4}(3t^{2}-1)
> \end{align}
> $$
> 
> Thus, $\left\{  \frac{1}{\sqrt{ 2 }}, t\sqrt{ \frac{3}{2} }, \frac{\sqrt{ 10 }}{4}(3t^{2}-1)  \right\}$ is an orthonormal basis for $V$. 

### The Orthogonal Decomposition Theorem

> [!Theorem]
> If $V$ is a finite dimensional inner product space and $W$ is a subspace of $V$, then
> $$
> V=W\oplus W^{\perp}
> $$
> 
> > [!Proof]-
> > 
> > Note that $W$ itself is an inner product space. So, $W$ has an orthonormal basis $\mathbf{w}_{1}, \mathbf{w}_{2}, \dots, \mathbf{w}_{r}$. For any $\mathbf{v}\in V$, define
> > $$
> > \begin{align}
> > \mathbf{v}_{0}\equiv\mathbf{v} -\sum_{i=1}^{r} \langle \mathbf{v}, \mathbf{w}_{i} \rangle \mathbf{w}_{i}. 
> > \end{align}
> > $$
> > Notice that $\mathbf{v}_{0}$ is orthogonal to each $\mathbf{w}_{i}$. Hence, $\mathbf{v}_{0}$ is orthogonal to $W$, i.e., $\mathbf{v}_{0}\in W^{\perp}$. We can now write
> > $$
> > \mathbf{v}=\underbrace{ \mathbf{v}_{0} }_{ \in W^{\perp} } +\underbrace{ \sum_{i=1}^{r} \langle \mathbf{v}, \mathbf{w}_{i} \rangle \mathbf{w}_{i} }_{ \in W }. 
> > $$
> > So, $\mathbf{v}\in V$ $\implies$ $\mathbf{v}\in W\oplus W^{\perp}$. We have already shown that $W\cap W^{\perp}=\{ \mathbf{0} \}$, so this decomposition is unique. Thus, $V=W\oplus W^{\perp}$. 
> 
> > [!Proof]-
> > 
> > Assume $\mathbb{F}=\mathbb{R}$ for simplicity. Let $\mathbf{v}\in V$. 
> > 
> > > [!Claim]
> > > 
> > > We can find $\mathbf{w}_{0}\in W$ such that $\lVert \mathbf{v}-\mathbf{w}_{0} \rVert\leq \lVert \mathbf{v}-\mathbf{w} \rVert$ for all $\mathbf{w}\in W$.
> > > 
> > > > [!Proof]-
> > > > 
> > > > Let $\mathbf{u}_{1}, \mathbf{u}_{2}, \dots, \mathbf{u}_{k}$ be a basis of $W$. Let $\mathbf{w}\in W$ be written as $\mathbf{w}=\sum\lambda_{i}\mathbf{u}_{i}$. Then, 
> > > > $$
> > > > \begin{align}
> > > > \lVert \mathbf{v}-\mathbf{w} \rVert^{2}  & =\left\langle \mathbf{v}- \sum_{i=1}^{k} \lambda_{i}\mathbf{u}_{i}, \mathbf{v}-\sum_{i=1}^{k} \lambda_{i}\mathbf{u}_{i} \right\rangle  \\
> > > >  & = \langle \mathbf{v}, \mathbf{v} \rangle +\sum_{i, j}\lambda_{i}\lambda_{j}\langle \mathbf{u}_{i}, \mathbf{u}_{j} \rangle -2\sum_{i}\lambda_{i}\langle \mathbf{v}, \mathbf{u}_{i} \rangle  
> > > > \end{align}
> > > > $$
> > > > Note that only the $\lambda_{i}$'s are variable in the above expression, and they are determined by $\mathbf{w}$. So, $\lVert \mathbf{v}-\mathbf{w} \rVert$ is a non-negative second degree function in $\lambda_{1}, \lambda_{2}, \dots, \lambda_{k}$. Calculus tells us that such functions must attain a minimum for some tuple $(\lambda_{1}', \lambda_{2}', \dots, \lambda_{k}')$. Take $\mathbf{w}_{0}\equiv \sum\lambda'_{i}\mathbf{u}_{i}$.
> > > 
> > > > [!Proof]-
> > > > 
> > > > Define a metric $d(\mathbf{x}, \mathbf{y})\equiv \lVert \mathbf{x}-\mathbf{y} \rVert$. This makes $V$ a [[Metric spaces|metric space]]. Let $S = \{ \mathbf{w}\in W \ |\ \lVert \mathbf{v}-\mathbf{w} \rVert\leq \lVert \mathbf{v} \rVert \}$. Let $\mathcal{B}$ be an orthonormal basis of $V$. Let $n=\dim V$. Define an isomorphism $\phi:V\to \mathbb{R}^{n}$ by $\phi(\mathbf{v})=[\mathbf{v}]_{\mathcal B}$. Note that the isomorphism preserves norms, i.e, $\lVert \mathbf{v} \rVert=\lVert [\mathbf{v}]_{\mathcal{B}} \rVert$, so $\lVert \mathbf{x}-\mathbf{y} \rVert=\lVert [\mathbf{x}]_{\mathcal{B}}-[\mathbf{y}]_{\mathcal{B}} \rVert$. Now consider a closed ball $B$ of radius $\lVert \mathbf{v} \rVert$ centered at $[\mathbf{v}]_{\mathcal{B}}$ in $\mathbb{R}^{n}$. From [[LEC ANA1 15#Subspace topology|subspace topology]], we know that $B\cap \phi(W)$ is closed in $\phi(W)$. Since $\phi(W)$ is a subspace of $\mathbb{R}^{n}$, it follows from the [[LEC ANA1 16#Heine Borel Theorem|Heine Borel theorem]] that $B\cap \phi(W)$ is compact. Observe that $\phi ^{-1}(B\cap \phi(W))=S$. Since $\phi ^{-1}$ is [[LEC ANA1 11#Definition|continuous]] (choose $\delta=\epsilon$), $S$ must also be compact. Define $f:S\to \mathbb{R}$ by $f(\mathbf{w})=\lVert \mathbf{v}-\mathbf{w} \rVert$. $f$ is continuous on its domain. From the [[LEC ANA1 16#Extreme value theorem|extreme value theorem]], $f$ must attain a minimum value on $S$. This must be the global minimum of $\lVert \mathbf{v}-\mathbf{w} \rVert$, since $\lVert \mathbf{v}-\mathbf{w} \rVert>\lVert \mathbf{v} \rVert$ outside $S$.
> > > 
> > 
> > > [!Claim] 
> > > 
> > > $\langle \mathbf{v}-\mathbf{w}_{0}, \mathbf{w} \rangle=0$ for all $\mathbf{w}\in W$.
> > > 
> > > > [!Proof]-
> > > > 
> > > > From Claim 1, we know that $\lVert \mathbf{v}-\mathbf{w}_{0} \rVert\leq \lVert \mathbf{v}-\mathbf{w} \rVert$ for all $\mathbf{w}\in W$. So, 
> > > > $$
> > > > \begin{align}
> > > >   \lVert \mathbf{v}-\mathbf{w}_{0} \rVert  & \leq \lVert \mathbf{v}-(\mathbf{w}+\mathbf{w}_{0}) \rVert \\ \\
> > > > \langle \mathbf{v}-\mathbf{w}_{0}, \mathbf{v}-\mathbf{w}_{0}  \rangle  & \leq \langle \mathbf{v}-(\mathbf{w}+\mathbf{w}_{0}), \mathbf{v}-(\mathbf{w}+\mathbf{w}_{0}) \rangle  \\
> > > >  &  \leq \langle \mathbf{w}, \mathbf{w} \rangle +\langle \mathbf{v}-\mathbf{w}_{0}, \mathbf{v}-\mathbf{w}_{0} \rangle -2\langle \mathbf{v}-\mathbf{w}_{0}, \mathbf{w}\rangle  \\ \\
> > > > 
> > > > 2\langle \mathbf{v}-\mathbf{w}_{0} , \mathbf{w}\rangle  & \leq \langle \mathbf{w}, \mathbf{w} \rangle \ \  \forall \,\mathbf{w}\in W.
> > > > \end{align}
> > > > $$
> > > > 
> > > > Let $m\in \mathbb{Z}^{+}$. $\frac{1}{m}\mathbf{w}\in W\ \forall \,\mathbf{w}\in W$. Thus, 
> > > > $$
> > > > \begin{align}
> > > > 2\left\langle  \mathbf{v}-\mathbf{w}_{0} , \frac{\mathbf{w}}{m} \right\rangle &  \leq \left\langle  \frac{\mathbf{w}}{m}, \frac{\mathbf{w}}{m}  \right\rangle  \\
> > > > \left\langle  \mathbf{v}-\mathbf{w}_{0} , \mathbf{w} \right\rangle  & \leq \frac{1}{2m}\left\langle  \mathbf{w}, \mathbf{w} \right\rangle  \\
> > > > \end{align}
> > > > $$
> > > > On letting $m\to \infty$, we get $\langle \mathbf{v}-\mathbf{w}_{0}, \mathbf{w} \rangle\leq 0$ for all $\mathbf{w}\in W$. Now, consider $-\mathbf{w}\in W$.
> > > > $$
> > > > \begin{align}
> > > > \langle \mathbf{v}-\mathbf{w}_{0}, -\mathbf{w} \rangle &  \leq 0 \\
> > > > \langle \mathbf{v}-\mathbf{w}_{0}, \mathbf{w} \rangle  & \geq 0 
> > > > \end{align}
> > > > $$
> > > > Therefore, $\langle \mathbf{v}-\mathbf{w}_{0}, \mathbf{w} \rangle=0$ for all $\mathbf{w}\in W$.
> > > 
> > 
> > Now, we can express $\mathbf{v}$ like so:
> > $$
> > \mathbf{v}=\underbrace{ (\mathbf{v}-\mathbf{w}_{0}) }_{ \in W^{\perp} }+\underbrace{ \mathbf{w}_{0} }_{ \in W }
> > $$
> > 
> 

### Orthogonal projections

We have seen that every $\mathbf{v}\in V$ can be written uniquely as $\mathbf{v}=\mathbf{w}+\mathbf{u}$, where $\mathbf{w}\in W$ and $\mathbf{u}\in W^{\perp}$. The *orthogonal projection* from $V$ to $W$ is the map $\Pi:V\to W$ defined by $\mathbf{v}\to \mathbf{w}$. Note that $\Pi$ is a linear map. Note that $\Pi(\mathbf{w})=\mathbf{w}$ if $\mathbf{w}\in W$, and $\Pi(\mathbf{w})=0$ if $\mathbf{w}\in W^{\perp}$. 

If $\mathbf{w}_{1}, \mathbf{w}_{2}, \dots, \mathbf{w}_{k}$ is an orthonormal bass for $W$, then 
$$
\Pi(\mathbf{v})=\sum_{i=1}^{k} \langle \mathbf{w}_{i}, \mathbf{v} \rangle \mathbf{w}_{i}.
$$
Note that $\mathbf{v}-\Pi(\mathbf{v})\in W^{\perp}$. If $W$ happened to be $V$, then $W^{\perp}=\{ 0 \}$. So, $\mathbf{v}=\Pi(\mathbf{v})$.
