---
tags:
  - ANA2
  - Lecture
  - Processed
date: 2025-08-18
time: 15:26
id: "161"
---
Reviewed metric spaces, vector spaces, [[LEC ALG1 21#Normed spaces|normed spaces]], and the [[LEC CAL1 3#Equivalence of norms|equivalence of norms in finite dimensional vector spaces]]. 

---
# Sequence spaces

> [!Definition] 
> Let $1\leq p\leq \infty$. Define
> $$
> \ell_{p}:=\{ \{ a_{n} \}_{n=1}^{\infty} :a_{n}\in \mathbb{R}\text{ or }\mathbb{C}, \text{ and }\sum_{n=1}^{\infty} |a_{n}|^{p}< \infty \}.
> $$
> Let $\ell_{\infty}$ denote $(B(\mathbb{N}), \lVert \cdot \rVert_{\infty})$ (this is the space defined [[LEC ANA1 33#Another perspective on uniform convergence|here]] with $X=\mathbb{N}$, which we have shown to be an NLS). @kumaresanTopologyMetricSpaces2005 1.1.38 proves $\ell_{p}$ for $1\leq p< \infty$ is a NLS with norm defined by $\lVert (a_{n}) \rVert_{p}:=\left( \sum_{n=1}^{\infty}|a_{n}|^{p} \right)^{1/p}$. 


> [!Remark]
> Recall that an inner product can be defined on an NLS iff the norm satisfies the [[LEC CAL1 4#^dead55|parallelogram identity]]. Consider $\mathbf{x}=(1, 0, 0, \dots)$ and $\mathbf{y}=(0, 1, 0, 0, \dots)$ in $\ell_{p}$. 
> $$
> \|\mathbf{x}+\mathbf{y}\|_p^2 + \|\mathbf{x}-\mathbf{y}\|_p^2 = 2\times(1+1)^\frac{2}{p} = 2^{1+\frac{2}{p}}
> $$
> Meanwhile,
> $$
> 2(\|\mathbf{x}\|_p^2+\|\mathbf{y}\|_p^2) = 2\times(1+1) = 4.
> $$
> If the parallelogram law holds, then
> $$
> 2^{1+\frac{2}{p}} = 4 \implies 1+\frac{2}{p} = 2 \implies p = 2.
> $$
> Thus, *$\ell_{2}$ is the only $\ell_{p}$ space which is an inner product space*. An inner product on $\ell_{2}$ can now be obtained from the [[LEC CAL1 4#^c6f497|polarization identity]]; We prescribe it explicitly and give an alternate proof in [[#^02d59c]].

> [!Proposition]
> $\ell_{2}$ is an inner product space, with the inner product defined by 
> $$
> \langle \{ x_{n} \}, \{ y_{n} \} \rangle=\sum_{n=1}^{\infty} x_{n}\overline{y}_{n}.
> $$
> 
> > [!Proof]-
> > 
> > From the [[The complex field#The Cauchy-Schwarz inequality in complex numbers|Cauchy-Schwarz inequality]], we have
> > $$
> > \begin{align}
> > \left\lvert \sum_{i=1}^{n} x_{i}\overline{y}_{i} \right\rvert ^{2} & \leqslant  \sum_{i=1}^{n} |x_{i}|^{2}\sum_{i=1}^{n} |y_{i}|^{2} \\
> >  & \leqslant \sum_{i=1}^{\infty} |x_{i}|^{2}\sum_{i=1}^{\infty} |y_{i}|^{2}
> > \end{align}
> > $$
> > for each $n\in \mathbb{N}$. It follows that $\sum_{i=1}^{\infty}x_{i}\overline{y}_{i}$ converges. The remaining properties of [[LEC ALG1 21#^dd5bbe]] are immediate.

^02d59c
