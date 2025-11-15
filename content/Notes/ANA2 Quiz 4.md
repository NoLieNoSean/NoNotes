---
id: "353"
date: 2025-11-12
time: 17:00
tags:
  - ANA2
---
# Problem 1

> [!Exercise]
> Let $A\subseteq \mathbb{R}^{2}$ be a countable set. Then prove that $\mathbb{R}^{2}\setminus A$ is path connected.

Let $x, y\in \mathbb{R}^{2}\setminus A$. For each $r\in[\lVert x-y \rVert/2, \infty)$, there exists a circle passing through $x$ and $y$ with radius $r$. All circles in this family intersect at $x$ and $y$, and thus do not intersect at any other point. Each circle in this family can be used to prescribe a path from $x$ to $y$. Since this is an uncountable family, and $A$ is countable, it follows that there must exist some $r$ such that the path along the circle with radius $r$ does not intersect $A$. 

---

# Problem 2

$V$ is a real Hilbert space, not necessarily separable.

## Part a

> [!Exercise]
> Prove that if $V=W\oplus W^{\perp}$ then $W$ and $W^{\perp}$ are closed.

Let $\{ w_{n} \}_{n=1}^{\infty}\subseteq W$ converge to $v=w+w^{\perp}$. We have $\langle w_{n}, w^{\perp} \rangle=0$ for all $n$. 
$$
\begin{align}
\langle w+w^{\perp}, w^{\perp} \rangle & =\left\langle  \lim_{ n \to \infty } w_{n}, w^{\perp}  \right\rangle  \\
 & =\lim_{ n \to \infty } \langle w_{n}, w^{\perp} \rangle \\
 & =0.
\end{align}
$$
Therefore, $w^{\perp}=0$, and $W$ is closed. A symmetric argument shows $W^{\perp}$ is closed.

> [!Exercise]
> Provide an example of a subspace of a Hilbert space which is not closed.

Let $H$ be a separable Hilbert space with a countable orthonormal basis $\mathcal{B}$. Then, $\text{span }\mathcal{B}$ is a subspace of $H$ which is not closed. We have seen that $\text{span }\mathcal{B}$ is dense in $H$; if $\text{span }\mathcal{B}$ were equal to $H$, we would be able to write $H$ as a countable union of proper, closed, nowhere dense subspaces, contradicting Baire's theorem. 

## Part b

> [!Exercise]
> Every closed convex subset of a Hilbert space has a unique element on minimal norm. 

^c8f02f

Let $S$ be a closed convex subset of $V$. Let $\alpha=\inf_{x\in S}\lVert x \rVert$. Let $\{ x_{n} \}_{n=1}^{\infty}\subseteq S$ be any sequence such that $\lVert x_{n} \rVert\to \alpha$. Since $S$ is convex, we have
$$
\left\lVert  \frac{x_{n}+x_{m}}{2}  \right\rVert \geqslant \alpha
$$
for all $n, m$. Now, 
$$
\begin{align}
\lVert x_{n}-x_{m} \rVert^{2} +\lVert x_{n}+x_{m} \rVert^{2} &  =2\lVert x_{n} \rVert^{2} +2\lVert x_{m} \rVert^{2}  \\
\lVert x_{n}-x_{m} \rVert^{2}  & \leqslant 2\lVert x_{n}\rVert^{2} +2\lVert x_{m} \rVert ^{2}-4\alpha.
\end{align}
$$
It follows that $\lVert x_{n}-x_{m} \rVert\to 0$ as $n, m\to 0$. Since $V$ is complete, $\{ x_{n} \}$ must converge, say to $x$. $\lVert x \rVert=\lVert \lim_{ n \to \infty }x_{n} \rVert=\lim_{ n \to \infty }\lVert x_{n} \rVert=\alpha$. If $\{ y_{n} \}$ is another sequence such that $\lVert y_{n} \rVert\to \alpha$ and $\{ y_{n} \}\to y$, the interlaced sequence $x_{1}, y_{1}, x_{2}, y_{2}, \dots$ also has the property of the norms of its elements converging to $\alpha$, hence $x=y$. Thus, $x$ is the unique element of minimal norm in $S$. 

## Part c

Let $W$ be a closed subspace of $V$. 

> [!Exercise]
> Given any $v\in V$, show that the set $v+W$ is closed and convex.

Suppose $\{ v+w_{n} \}_{n=1}^{\infty}\subseteq v+W$ is Cauchy. It follows immediately that $\{ w_{n} \}$ is Cauchy. Since $W$ is closed, $\{ w_{n} \}$ converges, say to $w$. $\lVert (v+w_{n})-(v+w) \rVert=\lVert w_{n}-w \rVert\to 0$, so $\{ v+w_{n} \}\to v+w$. Thus, $v+W$ is closed. 

Suppose $v+w_{1}, v+w_{2}\in v+W$. 
$$
\begin{align}
(v+w_{1})t+(v+w_{2})(1-t)= v+w_{1}t+w_{2}(1-t)\in v+W &  & (t\in[0, 1]). 
\end{align}
$$
Thus, $v+W$ is convex. 

Let $v+w\in v+W$ be the unique element with minimum norm, as in [[#^c8f02f]]. Then, $-w$ is unique element such that $\lVert v-(-w) \rVert$ is minimum, that is, $w':=-w$ is the element of $W$ that is closest to $v$.

> [!Exercise]
> Prove that $v-w'\in W^{\perp}$. 

Let $\overline{w}\in W$. For all $\epsilon> 0$, 
$$
\begin{align}
\lVert v-w' \rVert^{2}  & \leqslant \lVert v-w'-\epsilon \overline{w} \rVert^{2}  \\
\langle v-w', v-w' \rangle  & \leqslant \langle v-w', v-w' \rangle -2\epsilon \langle v-w', \overline{w} \rangle +\epsilon^{2}\langle \overline{w}, \overline{w} \rangle  \\
 & \langle v-w', \overline{w} \rangle \leqslant \epsilon \lVert \overline{w} \rVert ^{2}.
\end{align}
$$
It follows that $\langle v-w', \overline{w} \rangle=0$ for all $\overline{w}\in W$. 

Therefore, any $v\in V$ can be expressed as
$$
v=w'+(v-w'),
$$
where $w'\in W$ and $v-w'\in W^{\perp}$. Since $W\cap W^{\perp}=\{ 0 \}$, It follows that this decomposition is unique, and $V=W\oplus W^{\perp}$. 

> [!Exercise]
> $W=W^{\perp \perp}$. 

We have $V=W\oplus W^{\perp}=W^{\perp}\oplus W^{\perp \perp}$. Let $w\in W$. There exist $x\in W^{\perp}$, $y\in W^{\perp \perp}$ such that $w=x+y$. 
$$
\begin{align}
\langle w, x \rangle  & =\langle x, x \rangle +\langle y, x \rangle  \\
0 & =\lVert x \rVert ^{2}+0,
\end{align}
$$
so $x=0$ and $w=y$. It follows that $W\subseteq W^{\perp \perp}$; a symmetric argument lets us conclude $W=W^{\perp \perp}$. 

> [!Exercise]
> For a (not necessarily closed) subspace $W$ of $V$, its closure $\overline{W}$ equals $W^{\perp \perp}$.

We will first prove that $W^{\perp}=(\overline{W})^{\perp}$. Let $\tilde{w}\in W^{\perp}$. Let $\{ w_{n} \}_{n=1}^{\infty}\subseteq W$ converge to $\overline{w}\in \overline{W}$. Then, 
$$
\langle \tilde{w}, \overline{w} \rangle =\left\langle \tilde{w}, \lim_{ n \to \infty } w_{n} \right\rangle =\lim_{ n \to \infty } \langle \tilde{w}, w_{n} \rangle =0.
$$
Thus, $\tilde{w}\in(\overline{W})^{\perp}$, and $W^{\perp}=(\overline{W})^{\perp}$. 

Finally, $\overline{W}=((\overline{W})^{\perp})^{\perp}=W^{\perp \perp}$. 