---
tags:
  - CAL1
  - Lecture
  - Processed
date: 2025-01-17
time: 11:50
---
Recall what an [[LEC ALG1 21#Inner Product Spaces|inner product space]] is. Now, define $C[a, b]\equiv \{ f:[a, b]\to \mathbb{C}:f\text{ is continuous} \}$. Define
$$
\langle f, g \rangle \equiv \int_{a}^{b} f\overline{g}.
$$
Given an inner product on a vector space, we can always define a norm on the vector space by
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

> **Proof**
> We have to show that every Cauchy sequence in $C[a, b]$ converges (in $C[a, b]$, of course). Suppose $(f_{n})$ is a Cauchy sequence in $C[a, b]$. Then, given $\epsilon>0$, $\exists N\in \mathbb{N}$ such that $n_{1}, n_{2}\geq N\implies \lVert f_{n_{1}}-f_{n_{2}} \rVert_{\infty}<\epsilon \implies \sup_{x\in[a, b]}|f_{n_{1}}(x)-f_{n_{2}}(x)|<\epsilon$. So, $(f_{n})$ satisfies the [[LEC ANA1 33#The Cauchy Criterion|Cauchy criterion]] for [[LEC ANA1 33#Uniform convergence|uniform convergence]]. Thus, $(f_{n})\to f$, where $f$ is continuous.

Note that $(C[a, b], \lVert \cdot \rVert_{\infty})$ and $(C[a, b], \lVert \cdot \rVert)$, where the latter uses the norm induced by the inner product, are different spaces. The first one is complete, and the second one is not. As a counter example, consider the sequence of functions $(f_{n})=x, x^{2}, x^{3}, \dots$  in $(C[0, 1], \lVert \cdot \rVert)$. They converge to a function $f$ which is $1$ at $x=1$ and $0$ everywhere else - certainly not in $C[0, 1]$. However, the sequence of functions is a Cauchy sequence with respect to $\lVert \cdot \rVert$: For every $\epsilon>0$, $\exists N\in \mathbb{N}$ such that $n_{1}, n_{2}>N \implies \sqrt{  \int_{0}^{1} |x^{n_{1}}-x^{n_{2}}|^{2} \, dx}<\epsilon$. While we are at it, also note that $(f_{n})$ is not a Cauchy sequence in $(C[a, b], \lVert \cdot \rVert_{\infty})$.

---

Refer LADW, chapter 5 for parallelogram identity, polarization identity, and the relation between norms and inner products.