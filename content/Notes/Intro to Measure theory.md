---
id: "67"
date: March 2025
---


## Measures and spaces

> [!Definition]
> Consider a set $X$ and a $\sigma$-algebra $\mathcal{F}$ on $X$. The $(X, \mathcal{F})$ is called a **measurable space**. The elements of $\mathcal{F}$ are called **measurable sets** within the space.

> [!Definition]
> Let $(X, \mathcal{F})$ be a measure space. A set-theoretic function $\mu:\mathcal{F}\to \mathbb{R}$ is called a **measure** if the following hold:
> 1. $\mu(E)\geq 0$ for all $E\in \mathcal{F}$.
> 2. $\mu(\emptyset)=0$.
> 3. For all countable collections $\{ E_{k} \}_{k=1}^{\infty}$ of pairwise disjoint sets in $\mathcal{F}$,
> $$
> \mu\left( \bigcup_{k=1}^{\infty} E_{k} \right)=\sum_{k=1}^{\infty} \mu(E_{k}).
> $$

> [!Definition]
> A **measure space** is a measurable space $(X, \mathcal{F})$ with a measure $\mu$.

> [!Definition]
> Let $(X, \Sigma)$ and $(Y, \Delta)$ be measurable spaces. A function $f:X\to Y$ is said to be **measurable** if for every $E\in \Delta$ the pre-image of $E$ under $f$ is in $\Sigma$. In other words, $f^{-1}(E)\in\Sigma$ for all $E\in\Delta$.  

^80e256

This is in direct analogy the the [[LEC ANA1 13#Halfway through to a new definition of continuity|definition of a continuous function between topological spaces]], where the preimage of any open set is open.

---
## Lebesgue Integration

The Dirichlet function exhibits one of the principal drawbacks of the Riemann integral: a uniformly bounded [^1], increasing sequence of Riemann integrable functions on a closed, bounded interval may converge pointwise to a function that is not Riemann integrable. The Lebesgue integral does not have this shortcoming.

In the following text, the domains of functions is assumed to be a measure space with measure $m$.

Some definitions:
1. A function is said to be **finitely supported** if it vanishes on the complement of a set of finite measure.
2. A function is said to be **simple** if it takes on only finitely many values. If $\lambda_{1}, \dots, \lambda_{n}$ are the values taken by a simple function $\varphi$, $\varphi(x)=\sum_{i=1}^{n}\lambda_{i}\chi_{E_{i}}(x)$, where $E_{i}\equiv\varphi ^{-1}(\lambda_{i})$ and $\chi_{E_{i}}$ is the indicator function of $E_{i}$.

> [!Definition]
> Let $\psi:E\to \mathbb{R}$ be a finitely supported, simple function. Then the **integral** of $\psi$ over $E$, $\int_{E}\psi \, dm$, is defined as follows: if $\psi$ is identically zero, define $\int_{E}\psi\,dm\equiv {0}$. Otherwise, let $\lambda_{1}, \dots, \lambda_{n}$ be the finite number of nonzero values taken by $\psi$ and define
> $$
> \int_{E}\psi\, dm=\sum_{i=1}^{n} \lambda_{i}\cdot m(E_{i}),
> $$
> where $E_{i}=\psi ^{-1}(\lambda_{i})$.

> [!Definition]
> A bounded measurable function $f:E\to \mathbb{R}$ defined on a measurable set $E$ is said to be **Lebesgue integrable** if
> $$
> \sup_{\varphi\leq f}\int_{E}\varphi\, dm=\inf_{f\leq\psi}\int_{E}\psi\,dm
> $$
> where the infimum and supremum are taken over finitely supported, simple functions on $E$. The common value of the infimum and supremum is called the **Lebesgue integral** of $f$ over $E$, denoted by $\int_{E}f\, dm$.

Analogous to the definition of the [[LEC ANA1 26#^f2c7f5|Riemann integral]]. 

If $f:[a, b]\to \mathbb{R}$ is a bounded, Riemann integrable function, then it is Lebesgue integrable and the two integrals are equal.

If $f:E\to \mathbb{R}$ is a bounded, finitely supported, measurable function, then it is Lebesgue integrable.

> [!Theorem] Bounded convergence theorem
> Assume $m(E)< \infty$ and $\{ f_{n}:E\to \mathbb{R} \}$ is a uniformly pointwise bounded sequence of measurable functions (note that these conditions make the $f_{n}$ Lebesgue integrable). If $\{ f_{n} \}\to f$ pointwise on $E$, then
> $$
> \lim_{ n \to \infty } \int_{E}f_{n}\,dm=\int_{E}f\,dm.
> $$

> [!Definition]
> The **integral** of a nonnegative measurable function $f:E\to[0, \infty]$ is defined by
> $$
> \int_{E}f\, dm=\sup_{0\leq h\leq f}\int_{E}h\, dm,
> $$
> where the supremum is taken over bounded, finitely supported, measurable functions $h$.

Note the the supremum may be infinity, and is always defined.

> [!Theorem] Fatou's Lemma
> If $\{ f_{n} :  E\to[0, \infty] \}$ is a sequence of nonnegative, measurable functions and $\{ f_{n} \}\to f$ pointwise on $E$, then
> $$
> \int_{E}f\,dm\leq \liminf_{ n \to \infty } \int_{E}f_{n}\,dm.
> $$

> [!Definition]
> A nonnegative, measurable function $f:E\to[0, \infty]$ is said to be **integrable** provided that
> $$
> \int_{E}f\,dm< \infty.
> $$

> [!Definition]
> A measurable function $f:E\to \mathbb{R}$ is said to be **integrable** provided that $\int_{E}|f|\,dm< \infty$, and for such a function, the **integral** of $f$ over $E$ is defined by
> $$
> \int_{E}f\,dm=\int_{E}f^{+}dm-\int_{E}f^{-}dm.
> $$
> 

> [!Theorem] The integral comparison test
> If $f:E\to \mathbb{R}$ is a measurable function, and there is a nonnegative, integrable function $g:E\to \mathbb{R}$ that dominates $f$ on $E$, in the sense that $|f|\leq g$ on $E$, then $f:E\to \mathbb{R}$ is integrable and
> $$
> \left| \int_{E}f\,dm \right|\leq \int_{E}|f|\,dm.
> $$
> 

### Dominated convergence theorem

> [!Theorem] Dominated convergence theorem
> Let $\{ f_{n}:E\to \mathbb{R} \}$ be a sequence of measurable functions. Assume that there is an integrable function $g:E\to[0, \infty]$ that dominates $\{ f_{n} \}$ on $E$, in the sense that $|f_{n}|\leq g$ on $E$ for all $n$. If $\{ f_{n} \}\to f$ pointwise on $E$, then $f:E\to \mathbb{R}$ is integrable and 
> $$
> \lim_{ n \to \infty } \int_{E}f_{n}\,dm=\int_{E}f\, dm
> $$

The following theorem replaces $m$ with the standard Lebesgue measure. It can be [proven](https://www.maths.tcd.ie/~richardt/MA2224/MA2224-ch4.pdf#page=6) using the dominated convergence theorem.

> [!Theorem] Differentiating under the integral sign
> Assume
> 1. $f:\mathbb{R}\times \mathbb{R}\to \mathbb{R}$,
> 2. the map $x\mapsto f(x, t)$ be measurable for all $t\in \mathbb{R}$,
> 3. $f(x, t_{0})$ is Lebesgue integrable for some $t_{0}$,
> 4. $\frac{\partial}{\partial t}f(x, t)$ exists for all $(x, t)\in \mathbb{R}^{2}$, and
> 5. there exists Lebesgue integrable $g:\mathbb{R}\to \mathbb{R}$ such that $\left| \frac{\partial f}{\partial t} \right|_{(x, t)}\leq g(x)$ for all $(x, t)\in \mathbb{R}^{2}$.
> 
> Then, the map $x\mapsto f(x, t)$ is integrable for all $t$, and the function $F$ defined by
> $$
> F(t)\equiv \int_{\mathbb{R}}f(x, t)\,dx
> $$
> is differentiable with derivative 
> $$
> F'(t)=\frac{d}{dt}\int_{\mathbb{R}}f(x, t)\,dx=\int_{\mathbb{R}} \frac{\partial}{\partial t}f(x, t)\,dx.
> $$
> 





[^1]: A sequence of real-valued functions is said to be uniformly bounded if there exists $M$ such that $|f_{n}(x)|\leq M$ for all $x\in E$ and $n\in \mathbb{N}$.

