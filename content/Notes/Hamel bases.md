---
id: "348"
date: 2025-11-08
time: 11:12
tags:
  - ANA2
  - topology
  - algebra
---
# Hamel bases

See @vaidyanathanMTH503Functional2017.

> [!Definition]
> A **Hamel basis** for a vector space $E$ over $\mathbb{R}$ or $\mathbb{C}$ is a set $\mathcal{B}\subseteq E$ such that every element $x\in E$ can be expressed uniquely as a (finite) linear combination of elements in $\mathcal{B}$.

^c53024

> [!Definition]
> An infinite set of vectors is said to be **linearly independent** if every finite subset is linearly independent. 

^c239fa

> [!Proposition]
> For a subset $\mathcal{B}\subseteq E$, TFAE:
> 1. $\mathcal{B}$ is a Hamel basis for $E$;
> 2. $\mathcal{B}$ is a maximal linearly independent set;
> 3. $\mathcal{B}$ is a minimal spanning set.

We have [[LEC ALG1 8#^ee7fb9|seen previously]] that every finite dimensional vector space has a basis. With the extension of the notion of basis to infinite dimensional spaces with Hamel bases, this holds for all vector spaces:

> [!Theorem]
> Every vector space has a basis.

Also see [[LEC ANA2 9#^bd2fbe]]. 

---

# $\mathbb{R}^{\mathbb{N}}$ does not have a countable basis

> [!Lemma]
> A countable product of completely metrizable spaces is completely metrizable.
> 
> > [!Proof]-
> > 
> > Given a metric space $(Y, d)$, the metric $d'(x, y)=\min\{ 1, d(x, y) \}$ is also complete, and induces the same topology $Y$ as $d$. 
> > 
> > Now, suppose that $(X_{i}, \rho_{i})_{i=1}^{\infty}$ is a sequence of metric spaces. For sequences $\mathbf{x}=\{ x_{i} \}$ and $\mathbf{y}=\{ y_{i} \}$, define
> > $$
> > \rho(\mathbf{x}, \mathbf{y})=\sum_{i=1}^{\infty} \frac{1}{2^{i}}\rho_{i}(x_{i}, y_{i}).
> > $$
> > It can be shown, in the style of [[AS ANA2 1#^8c4c5c]], that $\rho$ metrizes the product topology on 
> > $$
> > X=\prod_{i=1}^{\infty} X_{i}.
> > $$
> > If $(X_{i}, d_{i})$ is a sequence of complete metric spaces, each $(X_{i}, \rho_{i})$ is also complete and the metric $\rho$ as above is complete as well (see [[AS ANA2 1#^f9262b]]). Thus, the product of completely metrizable spaces is also completely metrizable.
> 

^e387a5

> [!Exercise]
> Show that $\mathbb{R}^{\mathbb{N}}$, the set of all functions $\mathbb{N}\to \mathbb{R}$, does not have a countable basis.
> 
> > [!Proof]-
> > 
> > Suppose $\mathbb{R}^{\mathbb{N}}$ has a countable basis $\mathcal{B}=\{ w_{i} \}_{i=1}^{\infty}$. Equip $\mathbb{R}^{\mathbb{N}}$ with the product topology $\tau$. By [[#^e387a5]], $V:=(\mathbb{R}^{\mathbb{N}}, \tau)$ is completely metrizable. $V$ inherits the countable basis $\mathcal{B}$. Denote by $V_{i}$ the subspace of $V$ spanned by $\{ w_{1}, \dots, w_{i} \}$. It is clear from the topology of $V$ that each $V_{i}$ is nowhere dense[^1]. Additionally, each $V_{i}$, being homeomorphic to $\mathbb{R}^{i}$, is closed. Since every $v\in \mathbb{R}^{\mathbb{N}}$ can be expressed as a finite linear combination of $\{ w_{i} \}_{i=1}^{\infty}$, we have
> > $$
> > V=\bigcup_{i=1}^{\infty} V_{i},
> > $$
> >  contradicting the Baire category theorem ([[LEC ANA2 8#^1a2743]]).
> 
> > [!Proof]-
> > 
> > Taken from @schipperusAnswerProofUncountable2017
> > Here is a diagonalization argument. Let $\{f_i\}_{i=1}^{\infty}$ be a countable set we find $g\not \in \text{span} \{f_i\}$. Construct $g$ as follows. 
> > 
> > Consider the vector
> > $$
> > (f_1(1), f_2(2)).
> > $$
> > Define $(g(0),g(1))$ not to be a linear multiple of this vector. 
> > Now look at the vectors
> > $$
> > \begin{align}
> > (f_0(2), f_0(3), f_0(4)),\\
> > (f_1(2), f_1(3), f_1(4)).
> > \end{align}
> > $$
> > Define $(g(2),g(3),g(4))$ to not be a linear combination of these vectors. Now look at the vectors
> > $$
> > \begin{align}
> > (f_0(5), f_0(6), f_0(7),f_0(8)),\\ 
> > (f_1(5), f_1(6), f_1(7),f_1(8)),\\
> > (f_2(5), f_2(6), f_2(7),f_2(8)).\\
> > \end{align}
> > $$
> > Define $(g(5),g(6),g(7),g(8))$ not in the span of these three vectors, and so on. It is clear that $g$ is not in the span of $\{ f_{i} \}$. 
> 


[^1]: any open neighborhood in $\mathbb R^{\mathbb N}$ leaves infinitely many coordinates free; no finite-dimensional subspace can contain such a neighborhood.
