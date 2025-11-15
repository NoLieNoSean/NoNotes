---
id: "344"
date: 2025-11-05
time: 17:01
tags:
  - ANA2
  - Lecture
  - Processed
---
# Hilbert spaces

A Hilbert space is a complete [[LEC ALG1 21#^dd5bbe|inner product space]]. Examples include $\mathbb{C}^{n}$ with the [[LEC ALG1 21#^54ba8c|usual inner product]], and $\ell_{2}$ ([[LEC ANA2 1#^02d59c]], [[LEC ANA2 4#^0a51be]]).

> [!Definition] Lebesgue spaces
> On $C[a, b]$, Define
> $$
> \langle f, g \rangle \equiv \frac{1}{b-a}\int_{a}^{b} f\overline{g}.
> $$
> Note that $C[a, b]$ is not complete under the norm induced by $\langle , \rangle$. Define $L^{2}([a, b])$ to be the completion of $C[a, b]$ with respect to $\langle , \rangle$. $L^{2}[a, b]$ is a Hilbert space. 

> [!Remark]
> Alternatively, an element of $L^{2}[a, b]$ is an equivalence class of [[Intro to Measure theory#^80e256|measurable]] functions $f:[a, b]\to \mathbb{C}$ for which 
> $$
> \int_{a}^{b} |f(x)|^{2} \, dx < \infty,
> $$
> where two functions are considered the same element of $L^{2}$ iff they do not differ outside of a set of measure zero. Note that while $L^{2}[a, b]$ is a Hilbert space, it is not an algebra, since it is not closed under multiplication.

> [!Definition] Orthonormal basis
> Let $H$ be a Hilbert space. $S\subseteq H$ is an **orthonormal basis** if it is [[LEC ALG1 21#^98652c|orthonormal]] and $\overline{\text{span}(S)}=H$.  

^5f2a03

Contrast with a [[Hamel bases#^c53024|Hamel basis]]. 

> [!Example]
> $\{ \mathbf{e}_{n} \}_{n=1}^{\infty}$ is an orthonormal basis for $\ell_{2}$, where $\mathbf{e}_{n}^{k}=\delta_{n, k}$. Indeed, if $\boldsymbol{\lambda}\in \ell_{2}$,
> $$
> \sum_{i=1}^{n} \lambda_{i}\mathbf{e}_{i}\to\boldsymbol{\lambda}.
> $$
> 

> [!Proposition]
> Any orthonormal subset of a separable Hilbert space is countable.
> 
> > [!Proof]-
> > 
> > Let $H$ be a separable Hilbert space, and $S\subseteq H$ be orthonormal. If $\mathbf{e}, \mathbf{f}\in S$, $\lVert \mathbf{e}-\mathbf{f} \rVert^{2}=\langle \mathbf{e}-\mathbf{f}, \mathbf{e}-\mathbf{f} \rangle=2$. Let $\{ x_{n} \}_{n=1}^{\infty}\subseteq H$ be dense in $H$. $B(x_{n}, \sqrt{ 2 }/2)$ can contain at most one element of $S$. Thus, $S$ must be countable.
> 

> [!Remark]
> Let $\{ \mathbf{x}_{1}, \dots, \mathbf{x}_{n} \}$ be an orthogonal subset of a Hilbert space $H$. Then, 
> $$
> \left\lVert  \sum_{i=1}^{n} \mathbf{x}_{i}  \right\rVert ^{2}=\sum_{i=1}^{n} \lVert \mathbf{x}_{i} \rVert^{2} .
> $$
> 

^3a18a6

> [!Proposition]
> Any orthonormal set is [[Hamel bases#^c239fa|linearly independent]].
> 
> > [!Proof]-
> > 
> > Let $S$ be an orthonormal set. Let $\{ \mathbf{x}_{1}, \dots, \mathbf{x}_{n} \}\subseteq S$. If $\sum_{i=1}^{n}\alpha_{i}\mathbf{x}_{i}=0$, $\alpha_{j}= \left\langle  \sum_{i=1}^{n}\alpha_{i}\mathbf{x}_{i},\mathbf{x}_{j}   \right\rangle=\langle \mathbf{0}, x \rangle= 0$. 
> 

> [!Proposition]
> Let $\{ \mathbf{e}_{1}, \dots, \mathbf{e}_{n} \}$ be an orthonormal set. Then
> 1. $\mathbf{x}-\sum_{i=1}^{n} \langle \mathbf{x}, \mathbf{e}_{i} \rangle \mathbf{e}_{i}$ is perpendicular to $\mathbf{e}_{j}$ for all $1\leqslant j\leqslant n$. 
> 2. $\sum_{i=1}^{n}|\langle \mathbf{x}, \mathbf{e}_{i} \rangle|^{2}\leqslant \lVert \mathbf{x} \rVert^{2}$. 
> 
> > [!Proof]-
> > 
> > $(1)$ is clear. Let $\mathbf{z}=\sum_{i=1}^{n} \langle \mathbf{x}, \mathbf{e}_{i} \rangle \mathbf{e}_{i}$. By $(1)$, $\mathbf{x}$ is orthogonal to $\mathbf{z}$. Using [[#^3a18a6]], 
> > $$
> > \begin{align}
> > \lVert \mathbf{x} \rVert ^{2} & =\left\lVert  \mathbf{x}-\mathbf{z} \right\rVert^{2} +\left\lVert  \mathbf{z}  \right\rVert   \\
> >  & \geqslant \left\lVert  \mathbf{z}  \right\rVert ^{2}\\
> >  & = \sum_{i=1}^{n} |\langle \mathbf{x}, \mathbf{e}_{i} \rangle |^{2} .
> > \end{align}
> > $$
> > 
> 

> [!Corollary]
> Let $H$ be a separable Hilbert space. Let $\{ \mathbf{e}_{n} \}_{n=1}^{\infty}$ be an orthonormal set in $H$. Then
> $$
> \sum_{i=1}^{\infty} |\langle \mathbf{x}, \mathbf{e}_{n} \rangle |^{2}< \infty.
> $$
> 

^9752cf


> [!Lemma]
> The inner product in continuous map from $H\times H$ to $\mathbb{C}$, that is, if $\{ \mathbf{x}_{n} \}\to \mathbf{x}$ and $\{ \mathbf{y}_{n} \}\to \mathbf{y}$, then $\langle \mathbf{x}_{n}, \mathbf{y}_{n} \rangle\to \langle \mathbf{x}, \mathbf{y} \rangle$. 
> 
> > [!Proof]-
> > $$
> > \begin{align}
> > \left| \langle \mathbf{x}_{n}, \mathbf{y}_{n} \rangle -\langle \mathbf{x}, \mathbf{y} \rangle  \right|  & \leqslant |\langle \mathbf{x}_{n}, \mathbf{y}_{n} \rangle -\langle \mathbf{x}_{n}, \mathbf{y} \rangle |+|\langle \mathbf{x}_{n}, \mathbf{y} \rangle -\langle \mathbf{x}, \mathbf{y} \rangle | \\
> >  & =|\langle \mathbf{x}_{n}, \mathbf{y}_{n}-\mathbf{y} \rangle |+|\langle \mathbf{x}_{n}-\mathbf{x}, \mathbf{y} \rangle | \\
> >  & \leqslant \lVert \mathbf{x}_{n} \rVert \lVert \mathbf{y}_{n}-\mathbf{y} \rVert +\lVert \mathbf{x}_{n}-\mathbf{x} \rVert \lVert \mathbf{y} \rVert  \\
> >  & \to 0 \text{ as }n\to \infty.
> > \end{align}
> > $$
> > 
> 

^181916

> [!Proposition]
> Let $\{ \mathbf{e}_{n} \}_{n=1}^{\infty}$ be an orthonormal set in a separable Hilbert space $H$. Let $\{ \alpha_{n} \}_{n=1}^{\infty}\subseteq \mathbb{C}$. TFAE:
> 1. $\sum_{n=1}^{\infty}\alpha_{n}\mathbf{e}_{n}$ converges.
> 2. $\sum_{n=1}^{\infty}|\alpha_{n}|^{2}< \infty$.
> 3. There exists $\mathbf{x}\in \overline{\text{span}\{ \mathbf{e}_{n} \}_{n=1}^{\infty}}$ such that $\langle \mathbf{x}, \mathbf{e}_{n} \rangle=\alpha_{n}$.
> 
> > [!Proof]-
> > 
> > $(1\iff 2)$ 
> > $$
> > \begin{align}
> >  & \sum_{n=1}^{\infty} \alpha_{n}\mathbf{e}_{n}< \infty \\
> >  & \iff \sum_{n=N}^{M}\alpha_{n}\mathbf{e}_{n}\to \mathbf{0} \text{ as }N, M\to \infty \\
> >  & \iff \left\lVert  \sum_{n=N}^{M}\alpha_{n}\mathbf{e}_{n}  \right\rVert \to 0 \text{ as }N, M\to \infty  \\
> >  & \iff \sum_{n=N}^{M} |\alpha_{n}|^{2}\to 0\text{ as }N, M\to \infty  \\
> >  & \iff \sum_{n=1}^{\infty} |\alpha_{n}|^{2}< \infty.
> > \end{align}
> > $$
> > $(1, 2\implies 3)$ Take $\mathbf{x}=\sum_{n=1}^{\infty}\alpha_{n}\mathbf{e}_{n}$. Using [[#^181916]], 
> > $$
> > \begin{align}
> > \langle \mathbf{x}, \mathbf{e}_{k} \rangle  & =\left\langle  \sum_{n=1}^{\infty} \alpha_{n}\mathbf{e}_{n}, \mathbf{e}_{k}  \right\rangle   \\
> >  & =\sum_{n=1}^{\infty} \langle \alpha_{n}\mathbf{e}_{n}, \mathbf{e}_{k} \rangle  \\
> >  & =\alpha_{k}.
> > \end{align}
> > $$
> > $(3 \implies 2)$ By [[#^9752cf]], 
> > $$
> > \begin{align}
> > \sum_{n=1}^{\infty} |\alpha_{n}|^{2}=\sum_{n=1}^{\infty}  | \langle \mathbf{x}, \mathbf{e}_{n} \rangle |^{2}< \infty.
> > \end{align}
> > $$
> > 
> 

^84dbb8

> [!Proposition]
> Let $H$ be a separable Hilbert space. Let $\{ \mathbf{e}_{n} \}_{n=1}^{\infty}$ be an orthonormal set. TFAE:
> 1. $\{ \mathbf{e}_{n} \}_{n=1}^{\infty}$ is an orthonormal basis.
> 2. $\{ \mathbf{e}_{n} \}_{n=1}^{\infty}$ is a maximal orthonormal set.
> 3. $\mathbf{x}=\sum_{n=1}^{\infty}\langle \mathbf{x}, \mathbf{e}_{n} \rangle \mathbf{e}_{n}$ for all $\mathbf{x}\in H$. 
> 4. $\langle \mathbf{x}, \mathbf{y} \rangle=\sum_{n=1}^{\infty}\langle \mathbf{x}, \mathbf{e}_{n} \rangle\langle \mathbf{e}_{n}, \mathbf{y} \rangle$ for all $\mathbf{x}, \mathbf{y}\in H$. 
> 5. $\lVert \mathbf{x} \rVert^{2}=\sum_{n=1}^{\infty}|\langle \mathbf{x}, \mathbf{e}_{n} \rangle|^{2}$ for all $\mathbf{x}\in H$. 
> 
> > [!Proof]-
> > 
> > $(1 \iff 2)$ If $\{ \mathbf{e}_{n} \}$ is a maximal orthonormal set, it follows that it is an orthonormal basis from $(2\implies 3)$. Suppose $\{ \mathbf{e}_{n} \}$ is an orthonormal basis, and $\mathbf{e}\perp \mathbf{e}_{n}$ for all $n$. Since $\overline{\text{span }\{ \mathbf{e}_{n} \}}=H$, we must have $\sum_{n=1}^{\infty}\alpha_{n}\mathbf{e}_{n}=\mathbf{e}$ for some coefficients $\alpha_{i}$. Taking the inner product with $\mathbf{e}$ on both sides results in a contradiction by [[#^181916]].  
> > 
> > $(2\implies 3)$ By [[#^9752cf]] and [[#^84dbb8]], $\sum_{n=1}^{\infty}\langle \mathbf{x}, \mathbf{e}_{n} \rangle \mathbf{e}_{n}$ converges. If $\mathbf{y}:= \mathbf{x}-\sum_{n=1}^{\infty}\langle \mathbf{x}, \mathbf{e}_{n} \rangle \mathbf{e}_{n}\ne 0$, $\mathbf{y}$ is perpendicular to $\mathbf{e}_{n}$ for all $n$, contradicting maximality. 
> > 
> > $(3\implies 4)$
> > $$
> > \begin{align}
> > \langle \mathbf{x}, \mathbf{y} \rangle  & =\left\langle  \sum_{i=1}^{\infty} \langle \mathbf{x}, \mathbf{e}_{i} \rangle \mathbf{e}_{i}, \sum_{j=1}^{\infty} \langle \mathbf{y}, \mathbf{e}_{j} \rangle \mathbf{e}_{j}  \right\rangle  \\
> >  & = \sum_{i=1}^{\infty} \sum_{j=1}^{\infty} \langle \mathbf{x}, \mathbf{e}_{i} \rangle \langle \mathbf{e}_{j}, \mathbf{y} \rangle \langle \mathbf{e}_{i}, \mathbf{e}_{j} \rangle  \\
> >  & =\sum_{i=1}^{\infty} \langle \mathbf{x}, \mathbf{e}_{i} \rangle \langle \mathbf{e}_{i}, \mathbf{y} \rangle .
> > \end{align}
> > $$
> > $(4\implies 5)$ is immediate. 
> > 
> > $(5\implies 2)$ Suppose $\{ \mathbf{e}_{n} \}_{n=1}^{\infty}$ is not maximal, that is, there exists nonzero $\mathbf{e}\in H$ such that $\mathbf{e}\perp \mathbf{e}_{n}$ for all $n$. Then, $\lVert \mathbf{e} \rVert^{2}=\sum_{n=1}^{\infty}|\langle \mathbf{e}, \mathbf{e}_{n} \rangle|^{2}=0$, a contradiction. 
> 

^754891

> [!Theorem]
> $S=\{ e^{ int }:n\in \mathbb{Z} \}\subseteq L^{2}[0, 2\pi]$ is an orthonormal basis.
> 
> > [!Proof]-
> > 
> > $S$ is orthonormal:
> > $$
> > \begin{align}
> > \langle e^{ int  }, e^{ imt } \rangle &  =\frac{1}{2\pi}\int_{0}^{2\pi} e^{ i (n-m)t } \, dt \\
> >   & =\begin{dcases}
> > 1 & n=m \\
> > \left[ \frac{e^{ i(n-m)t }}{i(n-m)} \right] _{0}^{2\pi}=0 & n\ne m.
> > \end{dcases}
> > \end{align}
> > $$
> > Let $\mathscr{C}:=C^{0}([0, 2\pi], \mathbb{C})$ be the space of all continuous periodic complex functions $f$ with period $2\pi$ - essentially, $C(S_{1}, \mathbb{C})$. Observe that $\mathcal{A}:=\text{span}\{ e^{ i nt }:n\in \mathbb{Z} \}$ is a unital self-adjoint [[LEC ANA2 11#^ba6b9c|subalgebra]] of $\mathscr{C}$ which separates points. By [[LEC ANA2 11#^c03f69]], $\mathcal{A}$ is dense in $(\mathscr{C}, \lVert \cdot \rVert_{\infty})$. Thus, for every $f\in \mathscr{C}$, there exists $\{ f_{n} \}\subseteq \mathcal{A}$ such that $\{ f_{n} \}\rightrightarrows f$. By [[LEC ANA1 33#^9132bb]],
> > $$
> > \begin{align}
> > \lim_{ n \to \infty } \int_{0}^{2\pi} |f-f_{n}|^{2} \, dx = 0,
> > \end{align}
> > $$
> > so $\{ f_{n} \}\to f$ under $\lVert \cdot \rVert_{\langle , \rangle}$. It follows that $\mathcal{A}$ is dense in $(\mathscr{C}, \lVert \cdot \rVert_{\langle , \rangle})$. Note that $(\mathscr{C}, \lVert \cdot \rVert_{\langle , \rangle})$ is dense in $(C([0, 2\pi], \mathbb{C}), \lVert \cdot \rVert_{\langle , \rangle})$, which is dense in $L^{2}[0, 2\pi]$ by definition. $\mathcal{A}$ is dense in $L^{2}[0, 2\pi]$ by [[LEC ANA2 5#^35d96d]]. 
> > 

^915903
