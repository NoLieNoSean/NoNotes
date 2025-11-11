---
tags:
  - CAL1
  - Lecture
  - Processed
date: 2025-01-17
time: 11:50
id: "173"
---
Recall what an [[LEC ALG1 21#Inner Product Spaces|inner product space]] is. Define $C[a, b]\equiv \{ f:[a, b]\to \mathbb{C}:f\text{ is continuous} \}$. Define
$$
\langle f, g \rangle \equiv \int_{a}^{b} f\overline{g}.
$$
Note that first of all [[LEC ANA1 27#^d99859|the integral exists]]. $\langle f, f \rangle=0$ iff $f=0$ follows from @kumaresanTopologyMetricSpaces2005 Lemma 1.1.11. The rest of the properties of the inner product follow from the properties of the Riemann integral. Given an inner product on a vector space, we can always define a norm on the vector space by
$$
\lVert f \rVert^{2} \equiv \langle f, f \rangle.
$$
On $C[a, b]$, 
$$
\lVert f \rVert ^{2}\equiv\int_{a}^{b} |f|^{2} .
$$
On $C[a, b]$, we can also define a sup-norm
$$
\lVert f \rVert _{\infty}\equiv \sup _{x\in[a, b]}|f(x)|
$$

> [!Theorem]
> $C[a, b]=(C[a, b], \lVert \cdot \rVert_{\infty})$ is a [[LEC CAL1 1#Preliminaries|complete normed linear space]]. 
> 
> > [!Proof]-
> > We have to show that every Cauchy sequence in $C[a, b]$ converges (in $C[a, b]$, of course). Suppose $(f_{n})$ is a Cauchy sequence in $C[a, b]$. Then, given $\epsilon>0$, $\exists N\in \mathbb{N}$ such that $n_{1}, n_{2}\geq N\implies \lVert f_{n_{1}}-f_{n_{2}} \rVert_{\infty}<\epsilon \implies \sup_{x\in[a, b]}|f_{n_{1}}(x)-f_{n_{2}}(x)|<\epsilon$. So, $(f_{n})$ satisfies the [[LEC ANA1 33#The Cauchy Criterion|Cauchy criterion]] for [[LEC ANA1 33#Uniform convergence|uniform convergence]]. Thus, $(f_{n})\to f$, where $f$ is continuous due to [[LEC ANA1 33#^8504b1]]. 
> 

^9dd2a2

Note that $(C[a, b], \lVert \cdot \rVert_{\infty})$ and $(C[a, b], \lVert \cdot \rVert)$, where the latter uses the norm induced by the inner product, are different spaces. The first one is complete, and the second one is not. As a counterexample, consider the sequence of functions $(f_{n})=x, x^{2}, x^{3}, \dots$  in $(C[0, 1], \lVert \cdot \rVert)$. They converge to a function $f$ which is $1$ at $x=1$ and $0$ everywhere else - certainly not in $C[0, 1]$. However, the sequence of functions is a Cauchy sequence with respect to $\lVert \cdot \rVert$: For every $\epsilon>0$, $\exists N\in \mathbb{N}$ such that $n_{1}, n_{2}>N \implies \sqrt{  \int_{0}^{1} |x^{n_{1}}-x^{n_{2}}|^{2} \, dx}<\epsilon$. While we are at it, also note that $(f_{n})$ is not a Cauchy sequence in $(C[a, b], \lVert \cdot \rVert_{\infty})$.

---

# On inner products in a NLS

Refer @treilLinearAlgebraDone2014 chapter 5 for parallelogram identity, polarization identity, and the relation between norms and inner products. Basically, every inner product space can be made into a NLS by the standard definition ($\lVert x \rVert=\sqrt{ \langle x, x \rangle}$). However, an inner product can be defined on an NLS iff the norm satisfies the parallelogram identity.

> [!Definition] Parallelogram identity
> For any vectors $\mathbf{u}$, $\mathbf{v}$
> $$
> \lVert \mathbf{u}+\mathbf{v} \rVert ^{2}+\lVert \mathbf{u}-\mathbf{v} \rVert ^{2}=2(\lVert \mathbf{u} \rVert ^{2}+\lVert \mathbf{v} \rVert ^{2}).
> $$
> 

^dead55

> [!Definition] Polarization identities
> For $\mathbf{x}, \mathbf{y}\in V$
> $$
> \langle \mathbf{x}, \mathbf{y} \rangle =\frac{1}{4}(\lVert \mathbf{x}+\mathbf{y} \rVert ^{2}-\lVert \mathbf{x}-\mathbf{y} \rVert ^{2})
> $$
> if $V$ is a real inner product space, and
> $$
> \langle \mathbf{x}, \mathbf{y} \rangle =\frac{1}{4}\sum_{\alpha=\pm 1, \pm i}\alpha \lVert \mathbf{x}+\alpha \mathbf{y} \rVert ^{2}
> $$
> if $V$ is a complex inner product space. 

^c6f497

It can be verified that if the norm satisfies the parallelogram identity, then the inner product $\langle \mathbf{x}, \mathbf{y} \rangle$ defined by the polarization identities is indeed an inner product. Treil does not supply this proof.