---
tags:
  - CAL1
  - Lecture
  - Processed
date: 2025-01-07
time: 11:50
---
## Preliminaries

Recall what a [[LEC ALG1 21#Normed spaces|normed vector space]] is. We say that $V$ is a complete normed linear space if $(V, \lVert \cdot \rVert)$ is a [[Cauchy sequences#Complete metric space|complete metric space]] with respect to the metric induced by the norm.

### Equivalence of norms

> [!Definition]
> Let $V$ be a normed linear space with respect to two norms $\lVert \cdot \rVert^{\times}$ and $\lVert \cdot \rVert^{\circ}$. We say that the two norms are *equivalent* if there exist $c_{1}, c_{2}\in \mathbb{R}$ such that 
> $$
> c_{1}\lVert \cdot \rVert^{\times} \leq \lVert \cdot \rVert ^{\circ}\leq c_{2}\lVert \cdot \rVert ^{\times}.
> $$

> [!Info]- An aside
> Two metrics $\rho$ and $\sigma$ on a set $X$ are said to be *equivalent* if there exist positive numbers $c_{1}$ and $c_{2}$ such that for all $x_{1}, x_{2}\in X$, 
> $$
> c_{1}\sigma(x_{1}, x_{2})\leq \rho(x_{1}, x_{2})\leq c_{2} \sigma(x_{1}, x_{2}).
> $$
> It can be shown that a subset of $X$ is open in the metric space $(X, \rho)$ if and only if it is open in $(X, \sigma)$.
> 
> Note that if two norms are equivalent, the metrics induced by them are also equivalent for the same $c_{1}$ and $c_{2}$.

## The p-norm

The p-norm generalizes the euclidean norm in $\mathbb{R}^{n}$. 

> [!Definition]
> For $1\leq p\leq \infty$ and $\mathbf{x}\in \mathbb{R}^{n}$,
> $$
> \begin{align}
> \lVert \mathbf{x} \rVert _{p}=\left( \sum_{i=1}^{n} |x_{i}|^{p} \right)^{1/p}
> \end{align}
> $$

Notice that for $p=\infty$, $\lVert \mathbf{x} \rVert_{\infty}=\max \{ |x_{i}| \}$.

All the properties except the triangle inequality are trivial to show. The only non trivial property that needs to be proved is the triangle inequality.

> [!Theorem] Minkowski Inequality
> The p-norm satisfies the triangle inequality, i.e,
> $$
> \left( \sum |x_{i}+y_{i}|^{p} \right)^{1/p}\leq\left( \sum |x_{i}|^{p} \right)^{1/p}+\left( \sum |y_{i}|^{p} \right)^{1/p}.
> $$
> 
> > [!Proof]-
> > If $p=1$, the claim follows from the triangle inequality in $\mathbb{R}$. For $1<p$, we have
> > $$
> > \begin{align}
> > \sum |x_{i}+y_{i}|^{p} & =\sum |x_{i}+y_{i}|^{p-1}|x_{i}+y_{i}| \\
> >  & \leq \sum |x_{i}+y_{i}|^{p-1}|x_{i}|+\sum |x_{i}+y_{i}|^{p-1}|y_{i}| \\
> > \end{align}
> > $$
> > Applying [[Holder's inequality]] ($\frac{1}{q}\equiv1-\frac{1}{p}$), we get
> > $$
> > \begin{align}
> > \sum |x_{i}+y_{i}|^{p}  \leq  & \left( \sum |x_{i}|^{p} \right)^{1/p}\left( \sum |x_{i}+y_{i}|^{(p-1)q} \right)^{1/q} +  \\
> >    &  \left( \sum |y_{i}|^{p} \right)^{1/p}\left( \sum |x_{i}+y_{i}|^{(p-1)q} \right)^{1/q}  \\
> > \implies \left( \sum |x_{i}+y_{i}|^{p} \right)^{1/p}\leq & \left( \sum |x_{i}|^{p} \right)^{1/p}+\left( \sum |y_{i}|^{p} \right)^{1/p}& (p-1)q=p
> > \end{align}
> > $$
> >
> 

Quick exercise: verify the triangle inequality for the infinity norm.