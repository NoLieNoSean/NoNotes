---
tags:
  - CAL1
  - Lecture
  - Processed
date: 2025-01-10
time: 11:50
---
## Equivalence of norms

We will prove that all norms on a finite dimensional vector space are equivalent.

> [!Theorem] Lemma
> A norm is a continuous function.

> Consider a norm $\lVert \cdot \rVert:V\to \mathbb{R}$. We will prove that $\lVert \cdot \rVert$ is [[Analysis1_L20#Uniform continuity|uniformly continuous]], which implies that it is also continuous. Let $\epsilon>0$. We need to find a $\delta$ such that $\lVert \mathbf{v}_{1}-\mathbf{v}_{2} \rVert<\delta\implies |\lVert \mathbf{v}_{1} \rVert-\lVert \mathbf{v}_{2} \rVert|<\epsilon$. But, we know that $|\lVert \mathbf{v}_{1} \rVert-\lVert \mathbf{v}_{2} \rVert|\leq \lVert \mathbf{v}_{1}-\mathbf{v}_{2} \rVert$. Thus, choosing $\delta=\epsilon$ will do. 

> [!Theorem] Lemma
> Suppose $(V, \lVert \cdot \rVert)$ is finite dimensional normed linear space. Consider $S=\{ \mathbf{x}\in V: \lVert \mathbf{x} \rVert=1 \}$. $S$ is [[Analysis1_L13#Epilogue|closed]] in $(V, \lVert \cdot \rVert)$.

> Since $\lVert \cdot \rVert$ is continuous, and singleton sets are closed, $\lVert \cdot \rVert^{-1}(\{ 1 \})$ is closed in $V$ ($f^{-1}$ [[Analysis1_L14#Proof of the backward implication from the Analysis1_L13 Halfway through to a new definition of continuity last claim (Rudin, 4.8) in L13|of a closed set is closed]] when $f$ is a continuous function.)

> [!Theorem] 
> All norms on a finite dimensional vector space are equivalent.

> Let $\lVert \cdot \rVert$ be a norm on a finite dimensional vector space $V$ over $\mathbb{R}$. We will show that $\lVert \cdot \rVert$ is equivalent to $\lVert \cdot \rVert_{\infty}$, and the theorem will follow from the transitivity of the equivalence of norms. 
> 
> Note that the infinity norm is not unique, and depends upon a choice of basis. Fix a basis $\{ \mathbf{e}_{1}, \mathbf{e}_{2}, \dots, \mathbf{e}_{n} \}$ for $V$, and define the infinity norm with respect to this basis. Let $\mathbf{x}\in V$. Then, 
> $$
> \begin{align}
> \lVert \mathbf{x} \rVert  & =\left\lVert  \sum x_{i}\mathbf{e}_{i}  \right\rVert  \\
>  & \leq \sum \lVert x_{i}\mathbf{e}_{i} \rVert  \\
>  & =\sum |x_{i}|\lVert \mathbf{e}_{i} \rVert  \\
>  & \leq \lVert \mathbf{x} \rVert _{\infty}\sum \lVert \mathbf{e}_{i} \rVert 
> \end{align}
> $$
> So, we have found a constant $c_{2}=\sum \lVert \mathbf{e}_{i} \rVert>0$ such that $\lVert \cdot \rVert\leq c_{2}\lVert \cdot \rVert_{\infty}$.  
> 
> To get $c_{1}$, consider the unit sphere $S=\{ \mathbf{y}\in V \ |\ \lVert \mathbf{y} \rVert_{\infty}=1\}$ (do not get mislead by the generic name, $S$ is actually a cube). We know that $S$ is closed and bounded in $(V, \lVert \cdot \rVert_{\infty})$. We also know that isomorphisms between vector spaces are also [[Analysis1_L21#Homeomorphisms|homeomorphisms]] (prove this) (In finite dimensions, any linear map between normed spaces is continuous). 
> 
> Let $\phi$ be an isomorphism from $\mathbb{R}^{n}$ to $V$. Note that $\phi$ is continuous . Thus, $\phi ^{-1}(S)$ is closed in $\mathbb{R}^{n}$. Also note that $\phi ^{-1}(S)$ is bounded in $(\mathbb{R}^{n}, \lVert \cdot \rVert_{\infty})$. Thus, from the [[Analysis1_L16#Heine Borel Theorem|Heine Borel theorem]], $\phi ^{-1}(S)$ is [[Analysis1_L17#Open cover compactness|compact]]. Since [[Analysis1_L16#Image of a compact set under a continuous function|the image of a compact set under a continuous function is compact]], $S$ is compact. From the [[Analysis1_L16#Extreme value theorem|extreme value theorem]], the norm $\lVert \cdot \rVert$ must attain a minimum value on $S$, $c$. Now, if $c=0$, there exists $\mathbf{y}\in S$ such that $\lVert \mathbf{y} \rVert=0\implies \mathbf{y}=\mathbf{0}\implies \implies \lVert \mathbf{y} \rVert_{\infty}=0$, which is a contradiction. Thus, $c>0$. 
> 
> Now, we claim that $c\lVert \cdot \rVert_{\infty}\leq \lVert \cdot \rVert$. Suppose $\mathbf{x}\in V$. If $\mathbf{x}=\mathbf{0}$, the claim is trivially true. So, suppose $\mathbf{x}\ne \mathbf{0}$. Then, 
> $$
> \frac{\mathbf{x}}{\lVert \mathbf{x} \rVert _{\infty}}\in S
> $$
> By the definition of $c$, we have
> $$
> \begin{align}
> c\leq \left\lVert  \frac{\mathbf{x}}{\lVert \mathbf{x} \rVert _{\infty}}  \right\rVert  \\
> \implies c\lVert \mathbf{x} \rVert _{\infty} \leq \lVert \mathbf{x} \rVert 
> \end{align}
> $$
> Setting $c_{1}=c$ proves the theorem. ◻️
