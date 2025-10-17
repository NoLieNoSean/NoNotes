---
tags:
  - CAL1
  - Lecture
  - Processed
date: 2025-01-10
time: 11:50
id: "172"
---
# Topological properties of linear maps

See @pughRealMathematicalAnalysis2015 5§1.

> [!Definition]
> If $V, W$ are normed spaces then the **operator norm** of a linear transformation $T:V\to W$ is
> $$
> \lVert T \rVert :=\sup \left\{  \frac{|T\mathbf{v}|}{|\mathbf{v}|}:\mathbf{v}\ne 0  \right\}.
> $$
> 

It is clear from the definition that $|T\mathbf{v}|\leq \lVert T \rVert|\mathbf{v}|$ for all $\mathbf{v}\in V$. 

> [!Proposition] Properties of the operator norm, @rudinPrinciplesMathematicalAnalysis1976 9.7
> 1. $\lVert A+B \rVert\leq \lVert A \rVert+\lVert B \rVert$,
> 2. $\lVert AB \rVert\leq \lVert A \rVert\lVert B \rVert$,
> whenever the matrices on the left are well defined.

^9a0d87

[[#^9a0d87]] (1) turns $\mathcal{L}(\mathbb{R}^{n}, \mathbb{R}^{m})$ with the distance between $A$ and $B$ defined by $\lVert A-B \rVert$ into a metric space.

> [!Proposition] @rudinPrinciplesMathematicalAnalysis1976 9.8
> Let $\Omega$ be the set of invertible linear operators on $\mathbb{R}^{n}$. If $A\in \Omega$ and $B\in \mathcal{L}(\mathbb{R}^{n})$, and
> $$
> \lVert B-A \rVert  < \frac{1}{\lVert A^{-1} \rVert},
> $$
> then $B\in \Omega$. Thus, $\Omega$ is an open subset of $\mathcal{L}(\mathbb{R}^{n})$. Further, the mapping $A\mapsto A^{-1}$ is continuous on $\Omega$ and obviously injective.

^a7608b


> [!Remark]
> The operator norm of a matrix is bounded above by its Euclidean norm:
> $$
> \begin{align}
>     &  |A\mathbf{x}|^{2}= \sum_{i}\left( \sum_{j}a_{ij}c_{j} \right)^{2} \leq  \sum_{i}\left( \sum_{j}a_{ij}^{2}\cdot\sum_{j}c_{j} \right)=|\mathbf{x}|^{2}\sum_{i, j}a_{ij}^{2} \\
>   & \implies \lVert A \rVert \leq\left( \sum_{i, j}a_{ij}^{2} \right)^{1/2}.
> \end{align}
> $$
> 

^3c2f75

> [!Proposition]
> Let $T:V\to W$ be a linear transformation from one normed space to another. The following are equivalent:
> 1. $\lVert T \rVert\leq \infty$.
> 2. $T$ is uniformly continuous.
> 3. $T$ is continuous.
> 4. $T$ is continuous at the origin.

> [!Proposition]
> Every linear transformation $T:\mathbb{R}^{n}\to W$ is continuous and every isomorphism $T:\mathbb{R}^{n}\to W$ is a homeomorphism.

> [!Corollary]
> When working with finite dimensional normed spaces, all linear transformations are continuous and all isomorphisms are homeomorphisms. 


---

# Equivalence of norms

We will prove that all norms on a finite dimensional normed linear space are equivalent.

> [!Lemma] 
> A norm is a continuous function.
> 
> > [!Proof]-
> > Consider a norm $\lVert \cdot \rVert:V\to \mathbb{R}$. We will prove that $\lVert \cdot \rVert$ is [[LEC ANA1 20#Uniform continuity|uniformly continuous]], which implies that it is also continuous. Let $\epsilon>0$. We need to find a $\delta$ such that $\lVert \mathbf{v}_{1}-\mathbf{v}_{2} \rVert<\delta\implies |\lVert \mathbf{v}_{1} \rVert-\lVert \mathbf{v}_{2} \rVert|<\epsilon$. But, we know that $|\lVert \mathbf{v}_{1} \rVert-\lVert \mathbf{v}_{2} \rVert|\leq \lVert \mathbf{v}_{1}-\mathbf{v}_{2} \rVert$. Thus, choosing $\delta=\epsilon$ will do. 

> [!Lemma]
> Suppose $(V, \lVert \cdot \rVert)$ is finite dimensional normed linear space. Consider $S=\{ \mathbf{x}\in V: \lVert \mathbf{x} \rVert=1 \}$. $S$ is [[LEC ANA1 13#Epilogue|closed]] in $(V, \lVert \cdot \rVert)$.

Since $\lVert \cdot \rVert$ is continuous, and singleton sets are closed, $\lVert \cdot \rVert^{-1}(\{ 1 \})$ is closed in $V$ ($f^{-1}$ [[LEC ANA1 14#Proof of the backward implication from the Analysis1_L13 Halfway through to a new definition of continuity last claim (Rudin, 4.8) in L13|of a closed set is closed]] when $f$ is a continuous function). 

> [!Proposition] 
> All norms on a finite dimensional vector space are equivalent.
> 
> > [!Proof]-
> > Let $\lVert \cdot \rVert$ be a norm on a finite dimensional vector space $V$ over $\mathbb{R}$. We will show that $\lVert \cdot \rVert$ is equivalent to $\lVert \cdot \rVert_{\infty}$, and the theorem will follow from the transitivity of the equivalence of norms. 
> > 
> > Note that the infinity norm is not unique, and depends upon a choice of basis. Fix a basis $\{ \mathbf{e}_{1}, \mathbf{e}_{2}, \dots, \mathbf{e}_{n} \}$ for $V$, and define the infinity norm with respect to this basis. Let $\mathbf{x}\in V$. Then, 
> > $$
> > \begin{align}
> > \lVert \mathbf{x} \rVert  & =\left\lVert  \sum x_{i}\mathbf{e}_{i}  \right\rVert  \\
> >  & \leq \sum \lVert x_{i}\mathbf{e}_{i} \rVert  \\
> >  & =\sum |x_{i}|\lVert \mathbf{e}_{i} \rVert  \\
> >  & \leq \lVert \mathbf{x} \rVert _{\infty}\sum \lVert \mathbf{e}_{i} \rVert 
> > \end{align}
> > $$
> > So, we have found a constant $c_{2}=\sum \lVert \mathbf{e}_{i} \rVert>0$ such that $\lVert \cdot \rVert\leq c_{2}\lVert \cdot \rVert_{\infty}$.  
> > 
> > To get $c_{1}$, consider the isomorphism $\varphi: \mathbb{R}^{n}\to(V, \lVert \cdot \rVert_{\infty})$. We have shown that this is a homeomorphism, so the image $\varphi(S)$ in $(V, \lVert \cdot \rVert_{\infty})$ of the unit sphere in $\mathbb{R}^{n}$ is compact. Two ways to go from here:
> > 
> > **Way 1:** Injectivity implies $0\not\in\varphi(S)$. $\varphi(S)$ being compact also implies $\varphi(S)$ is bounded, so $\lVert \mathbf{u} \rVert_{\infty}\leq d$ for all $\mathbf{u}\in\varphi(S)$ for some $d> 0$. Consider the identity map $\psi:(V, \lVert \cdot \rVert_{\infty})\to(V, \lVert \cdot \rVert)$. It is continuous, and hence $S'=\psi(\varphi(S))$ is compact. Injectivity again implies $0\not\in S'$. Now, $\{ 0 \}$ and $S'$ are disjoint compact sets, and hence the distance between them is nonzero. Thus, $c\leq \lVert \mathbf{v} \rVert$ for all $\mathbf{v}\in S'$ for some $c> 0$. 
> > 
> > Now, consider $\mathbf{v}\in V$. There exists $\lambda> 0$ and $\mathbf{v}'\in \varphi(S)$ such that
> > $\mathbf{v}=\lambda \mathbf{v}'$. $\lVert \mathbf{v} \rVert_{\infty}=\lambda \lVert \mathbf{v}' \rVert_{\infty}\leq\lambda d$, and $\lVert \mathbf{v} \rVert=\lambda \lVert \mathbf{v}' \rVert\geq\lambda c$. Thus,
> > $$
> > \begin{align}
> > \frac{c}{d}\lVert \mathbf{v} \rVert _{\infty}\leq \lVert \mathbf{v} \rVert . 
> > \end{align}
> > $$
> > 
> > **Way 2:** Same as the previous one, but instead consider the real function $V\to \mathbb{R}$ defined by $\mathbf{v}\mapsto \lVert \mathbf{v} \rVert$. This is continuous, and by the extreme value theorem must attain a minimum value on $\varphi(S)$, which cannot be zero since any norm of a nonzero vector can't be zero. Proceed as we did before.
> 

^3a3caf

---
# Heine Borel in finite dimensional normed linear spaces

The [[LEC ANA1 16#^f2a44b|Heine Borel]] theorem in ANA1 was stated for $\mathbb{R}^{k}$. It shouldn't be surprising that it in fact holds in all finite dimensional normed linear spaces. 

> [!Theorem]
> Let $(V, \lVert \cdot \rVert)$ be a finite dimensional normed linear space. Let $X\subseteq V$. Then, $X$ is compact $\iff$ $X$ is closed and bounded in $V$.
> 
> > [!Proof]-
> > Compact $\implies$ closed and bounded: true in any metric space.
> > 
> > For the converse, suppose $n=\dim V$. Choose a basis $v_{1}, \dots, v_{n}$ and let $T$ be the natural isomorphism from $\mathbb{R}^{n}$ to $V$ for this basis. This induces a norm $\lVert \cdot \rVert'$ on $V$. By [[#^3a3caf]], $\lVert  \cdot \rVert$ and $\lVert \cdot \rVert'$ are equivalent. Suppose there exist $c_{1}$ and $c_{2}$ such that
> > $$
> > c_{1}\lVert \cdot \rVert' \leq \lVert \cdot \rVert \leq c_{2}\lVert \cdot \rVert '.
> > $$
> > ^610a33
> > If a sequence in $\mathbb{R}^{n}$ converges, the images of the sequence must converge in $(V, \lVert \cdot \rVert')$, and thus they must also converge in $(V, \lVert \cdot \rVert)$ by the second inequality of [[#^610a33]]. Thus, by [[LEC ANA1 15#^50d7a4|the sequence criterion for continuity]], $T$ is continuous. Similarly, by the first inequality of [[#^610a33]], $T^{-1}$ is continuous.
> > 
> > Now, if $K\subseteq V$ is closed and bounded then $T^{-1}(K)\subseteq \mathbb{R}^{n}$ is closed and bounded, hence compact by the usual Heine Borel in $\mathbb{R}^{n}$. Since $T$ is continuous, $K=T(T^{-1}(K))$ is compact.

^98df3d

Obviously, this is NOT true in general for infinite dimensional normed linear spaces.