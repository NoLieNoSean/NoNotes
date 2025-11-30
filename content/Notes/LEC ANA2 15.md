---
id: "339"
date: 2025-10-31
time: 15:22
tags:
  - ANA2
  - Lecture
  - Processed
---
# More on path connectedness

Recall [[LEC ANA2 14#^486748]]. 

> [!Example]
> 
> Let 
> $$
> E=\left\{ \left( x, \sin\left( \frac{1}{x} \right) \right) :x\in(0, 1] \right\} .
> $$
> $\overline{E}=E\cup \{ 0\}\times[-1, 1]$. Clearly, $E$ is connected (in fact, path connected), and hence $\overline{E}$ is connected. However, $\overline{E}$ is not path connected.
> 
> Indeed, suppose there is a path $\gamma$ connecting $(0, 0)$ and $(1, \sin(1))$. Let $K=\gamma ^{-1}(\{ 0 \}\times[-1, 1])\subseteq[0, 1]$. Since $K$ is compact, we have $t_{0}:=\sup K\in K$; note that $t_{0}\ne1$. For all $t> t_{0}$, $\gamma(t)\in E$. Thus, $\pi_{x}(\gamma(t_{0}))=0$, whereas $\pi_{x}(\gamma(t_{0}+1/k))> 0$ for all $k> 0$. 
> 
> Fix $\theta\in[0, 2\pi)$ such that $\sin\theta\ne P_{y}(\gamma(t_{0}))$. Let $\{ t_{i} \}\subseteq(t_{0}, 1]$ be such that $\{ t_{i} \}\to t_{0}$. For each $t_{i}$, there exists $n_{i}\in \mathbb{N}$ such that
> $$
> \pi_{x}(\gamma(t_{0}))=0<\frac{1}{2\pi n_{i}+\theta}< \pi_{x}(\gamma(t_{i})).
> $$
> By the [[LEC ANA1 22#^30e172|intermediate value theorem]], there exists $0<r_{i}< t_{i}$ such that $\pi_{x}(\gamma(r_{i}))=\frac{1}{2\pi n_{i}+\theta}$. It follows that $\{ \pi_{y}(\gamma(r_{i})) \}\to \sin\theta$, a contradiction.

> [!Proposition]
> The image of a path connected set under a continuous map is path connected.

^48654b

> [!Lemma]
> Let $p$ be a complex polynomial in $n$ complex variables. Let $Z(p)$ be the zero set of $p$. $\mathbb{C}^{n}\setminus Z(p)$ is path connected. 
> 
> > [!Proof]-
> > 
> > Let $\mathbf{z}, \mathbf{w}\in \mathbb{C}^{n}\setminus Z(p)$. Define $\gamma:\mathbb{C}\to \mathbb{C}^{n}$ by
> > $$
> > \gamma(z)=z\mathbf{z}+(1-z)\mathbf{w}.
> > $$
> > $p(\gamma(z))$ is a polynomial in one variable, so $Z(p\circ\gamma)\subseteq \mathbb{C}$ is a finite set. Therefore, $\mathbb{C}\setminus Z(p\circ\gamma)$ is path connected. By [[#^48654b]], $\gamma(\mathbb{C}\setminus Z(p\circ\gamma))\subseteq \mathbb{C}^{n}\setminus Z(p)$ is path connected. Observe that $\mathbf{z}, \mathbf{w}\in\gamma(\mathbb{C}\setminus Z(p\circ\gamma))$. 
> 

^3caffc

> [!Example]
> It is immediate from [[#^3caffc]] that $GL_{n}(\mathbb{C})$ is path connected.


---
# Cantor set

> [!Definition]
> Define $\mathcal{C}_{0}=[0, 1]$. Express $\mathcal{C}_{n}$, $n\geqslant 0$, as
> $$
> \mathcal{C}_{n}=\coprod_{i\in I_{n}}J_{i}^{n},
> $$
> where $|I_{n}|=2^{n}$ and
> $$
> J_{i}^{n}=\left[ \frac{i}{3^{n}}, \frac{i+1}{3^{n}} \right] .
> $$
> Define 
> $$
> \mathcal{C}_{n+1}:=\coprod_{i\in I_{n}} \left[ \frac{3i}{3^{n+1}}, \frac{3i+1}{3^{n+1}} \right] \cup \left[ \frac{3i+2}{3^{n+1}}, \frac{3i+3}{3^{n+1}} \right] .
> $$
> Define the **Cantor set** $\mathcal{C}$ to be
> $$
> \mathcal{C}:=\bigcap_{i={0}}^{\infty}\mathcal{C}_{i}.
> $$
> 

$\mathcal{C}$ is clearly non-empty (it contains the endpoints of all $J^{n}_{i}$) and compact.

> [!Proposition]
> $\mathcal{C}$ is perfect.
> 
> > [!Proof]-
> > 
> > We have to show that every $x\in \mathcal{C}$ is a limit point of $\mathcal{C}$. This is clear, since for $\epsilon> 0$, we can choose $n$ such that $3^{n}<\epsilon$, forcing an endpoint of some $J^{n}_{i}$ to lie in $(x-\epsilon, x+\epsilon)$. 
> 

^21c874

It follows from [[TST ANA2 Quiz 1#^5a0ea7]] and [[#^21c874]] that $\mathcal{C}$ is uncountable.

> [!Proposition]
> $\mathcal{C}$ is homeomorphic to $\{ 0, 2 \}^{\mathbb{N}}$ with the product topology.
>  
> > [!Proof]-
> > 
> > Observe that each $x\in \mathcal{C}$ has a unique expression of the form
> > $$
> > \begin{align}
> > x=\sum_{i=1}^{\infty} \frac{a_{i}}{3^{i}} &  & (a_{k}\in \{ 0, 2 \}),
> > \end{align}
> > $$
> > since $0. 0\overline{2}=0.1$. This allows us to define a bijection $\varphi:\mathcal{C}\to \{ 0, 2 \}^{\mathbb{N}}$. By [[AS ANA2 1#^bf5811]], a sequence in $\{ 0, 2 \}^{\mathbb{N}}$ converges iff it converges coordinate-wise. Thus, to show $\varphi$ is continuous, it suffices to show $\pi_{i}\circ\varphi$ is continuous for each $i\in \mathbb{N}$, which is immediate since these are locally constant maps. Since $\mathcal{C}$ is compact, it follows from [[LEC ANA1 21#^8a68b8]] that $\varphi$ is a homeomorphism.
> 

^280810

[[#^280810]] can be seen an another proof of the uncountability of $\mathcal{C}$.

> [!Proposition]
> $\mathcal{C}^{\mathbb{N}}$ is homeomorphic to $\mathcal{C}$.
> 
> > [!Proof]-
> > 
> > We have to show $\{ 0, 2 \}^{\mathbb{N}}\cong(\{ 0, 2 \}^{\mathbb{N}})^{\mathbb{N}}$. Let $\varphi$ be the diagonal bijection $\{ 0, 2 \}^{\mathbb{N}}\to(\{ 0, 2 \}^{\mathbb{N}})^{\mathbb{N}}$:
> > 
> > $$
> > \mathbf{x}_{n}=(x_{n}^{1}, x_{n}^{2}, \dots)\quad \mapsto\quad 
> > 
> > \left( \begin{array}{ccc}
> > ( & x^{1}_{n} &, &  x^{3}_{n}  &, & x^{6}_{n} &, & x^{10}_{n} &, & \dots  & ),\\
> > ( & x^{2}_{n} &, &   x^{5}_{n} &, &  x^{9}_{n} &, &\dots &   &  & ),\\
> > ( & x^{4}_{n} &, & x^{8}_{n} &, & \dots &  &  & &  &  ), \\
> > ( & x^{7}_{n} &,  & \dots &  &  &  &  &  &  & ), \\
> >  &  &  &  & &  \vdots &  &  &  & 
> > \end{array} \right) =: \left( \begin{array}{}
> > \mathbf{z}_{1, n} \\
> > \mathbf{z}_{2, n} \\
> > \mathbf{z}_{3, n} \\
> > \mathbf{z}_{4, n} \\
> > \vdots \\ 
> > \end{array} \right) 
> > $$
> > 
> > If a sequence $\{ \mathbf{x}_{n} \}_{n=1}^{\infty}$ converges in $\{ 0, 2 \}^{\mathbb{N}}$, it must converge coordinate-wise, that is, each $\{ x_{n}^{i} \}$ converges as $n\to \infty$. In particular, $x^{1}_{n}, x^{3}_{n}, x^{6}_{n}, \dots$ converge coordinate-wise, so $\mathbf{z}_{1, n}$ converges. Similarly, $\mathbf{z}_{k, n}$ converge as $n\to \infty$ for all $k$. Therefore, the sequence $\{ (\mathbf{z}_{1, n}, \mathbf{z}_{2, n}, \dots) \}_{n=1}^{\infty}$ converges "coordinate-wise", and hence converges in $(\{ 0, 2 \}^{\mathbb{N}})^{\mathbb{N}}$. Thus, $\varphi$ is continuous. That $\varphi$ is a homeomorphism follows form the compactness of $\{ 0, 2 \}^{\mathbb{N}}$ and [[LEC ANA1 21#^8a68b8]]. 
> 

> [!Proposition]
> There exists continuous and surjective $f:\mathcal{C}\to[0, 1]$. 
> 
> > [!Proof]-
> > Define $f$ by
> > $$
> > \begin{align}
> > f\left( \sum_{i=1}^{\infty} \frac{a_{i}}{3^{i}} \right) =\sum_{i=1}^{\infty} \frac{a_{i}}{2^{i+1}}.
> > \end{align}
> > $$
> > Let $x\in \mathcal{C}$ and $f(x)=y$. Let $\epsilon> 0$. Choose $n$ such that $1/2^{n}<\epsilon$. Let $2\delta=1/3^{n}$. The ternary representations of all elements in $(x-\delta, x+\delta)\cap \mathcal{C}$ will have their first $n$ digits fixed. If $x'$ is such an element, then 
> > $$
> > |f(x)-f(x')|\leqslant \sum_{i=n+1}^{\infty} \frac{1}{2^{i}}=\frac{1}{2^{n}}<\epsilon.
> > $$
> > Thus, $f$ is continuous. 
> 

Note that $f$ is not injective, since $f(0.0\overline{2})=f(0.2)$. 

> [!Fact]
> Any compact metric space is a continuous image of $\mathcal{C}$[^1].


> [!Proposition]
> $\mathcal{C}$ is nowhere dense in $[0, 1]$. 
 
> [!Definition]
> $S\subseteq X$ is **totally disconnected** if for $x, y\in S$, $x\ne y$, there exist open $U_{x}\ni x$ and $U_{y}\ni y$ such that $U_{x}\cap U_{y}=\emptyset$ and $U_{x}\sqcup U_{y}\supseteq S$. 

^4d5c32

> [!Proposition]
> $\mathcal{C}$ is totally disconnected.
> 
> > [!Proof]-
> > 
> > Suppose $x, y\in \mathcal{C}$, $x\ne y$. There must exist $J^{n}_{i}$ such that $x\in J^{n}_{i}$ and $y\not\in J^{n}_{i}$[^2]. Now, 
> > $$
> > J^{n}_{i}\cap \mathcal{C}= \left( \frac{i}{3^{n}}-\frac{1}{3^{n+1}}, \frac{i+1}{3^{n}} +\frac{1}{3^{n+1}}\right)\cap \mathcal{C}.
> > $$
> > It follows[^3]  that $J^{n}_{i}\cap \mathcal{C}$ is clopen in $\mathcal{C}$. $U_{x}:=J^{n}_{i}\cap \mathcal{C}$, $U_{y}:=\mathcal{C}\setminus(J^{n}_{i}\cap \mathcal{C})$ satisfy [[#^4d5c32]]. 
> 


[^1]: Idea: Cover with $2^{k}$ many balls, where $k$ is fixed for each level? 

[^2]: this follows from the fact that $\mathcal{C}$ is compact and hence has the Cantor intersection property: [[LEC CAL1 6#Cantor intersection theorem]].

[^3]: [[LEC ANA1 15#Subspace topology]]
