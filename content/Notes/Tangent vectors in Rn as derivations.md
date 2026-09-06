---
id: "440"
date: 2026-03-27
time: 16:28
tags:
---
Follows @tuIntroductionManifolds2011 §2. 

---


> [!Notation]
> We write points in $\mathbb{R}^{n}$ as $p=(p^{1}, \dots, p^{n})$, and a vector in the tangent space $T_{p}\mathbb{R}^{n}$ as $v_{p}=\langle v^{1}, \dots, v^{n} \rangle$. We usually denote the standard basis for $\mathbb{R}^{n}$ or $T_{p}\mathbb{R}^{n}$ by $e_{1}, \dots, e_{n}$. 

Let $p\in \mathbb{R}^{n}$ and $f$ be a real valued $C^{\infty}$ function in a neighborhood of $p$. Let $v_{p}\in T_{p}\mathbb{R}^{n}$. The [[LEC CAL1 15#^7a4d1e|directional derivative]] of $f$ in direction $v_{p}$ [^1] is defined to be
$$
D_{v_{p}}f:=\left.\frac{d}{dt}\right|_{t=0} f(c(t)),
$$
where
$$
c(t):=(p^{1}+tv^{1}, \dots, p^{n}+tv^{n}).
$$
By the [[LEC CAL1 17#^67af50|chain rule]], 
$$
D_{v_{p}}f=\sum_{i=1}^{n} v_{p}^{i}\frac{ \partial f }{ \partial x^{i} } (p).
$$

^0a8d1f

Note that $D_{v_{p}}f$ is a *number*, not a function. We write
$$
D_{v_{p}}=\left. \sum v_{p}^{i}\frac{ \partial  }{ \partial x^{i} }  \right|_{p}
$$
for the map that sends $f\mapsto D_{v_{p}}f$. 

[^1]: "at $p$" is implied by the tangent vector belonging to $T_{p}\mathbb{R}^{n}$

> [!Notation]
> We may write $v$ in place of $v_{p}$ and $D_{v}$ in place of $D_{v_{p}}$ when $p$ is clear from context. 

The association $v\mapsto D_{v}$ allows us to think of tangent vectors as operators on functions. We will now explore this further. 

> [!Definition] Germs of functions
> Let $p\in \mathbb{R}^{n}$. Consider the set of all pairs $(f, U)$, where $U$ is a neighborhood of $p$ and $f:U\to \mathbb{R}$ is $C^{\infty}$. We write $(f, U)\sim(g, V)$ if there is an open set $W\subseteq U\cap V$ containing $p$ such that $f=g$ on $W$. This is an equivalence relation; the equivalence class of $(f, U)$ is called the **germ** of $f$ at $p$. We write $C_{p}^{\infty}\mathbb{R}^{n}$ or simply $C_{p}^{\infty}$ when admissible for the set of all germs of $C^{\infty}$ functions on $\mathbb{R}^{n}$ at $p$. Addition, multiplication of functions, and scalar multiplication induce corresponding operations on $C_{p}^{\infty}$, *making it an $\mathbb{R}$-algebra*. 

Note that functions belonging to the same germ at $p$ will have the same directional derivatives at $p$. 
# Derivations at a point

For each tangent vector $v_{p}$, the directional derivative along $v_{p}$ is a map of real vector spaces $D_{v_{p}}:C^{\infty}_{p}\to \mathbb{R}$. It can be easily verified from [[#^0a8d1f]] that $D_{v_{p}}$ is $\mathbb{R}$-linear and satisfies the "Leibniz rule":
$$
D_{v_{p}}(fg)=(D_{v_{p}}f)g(p)+f(p)D_{v_{p}}g.
$$

> [!Definition] derivation
> Any linear map $D:C_{p}^{\infty}\to \mathbb{R}$ satisfying the Leibniz rule is called a **derivation at $p$**. We denote the set of all derivations at $p$ by $\mathfrak{D}_{p}\mathbb{R}^{n}$. It is easily verified that this is in fact a *real vector space*. 

Thus far, we know that directional derivatives at $p$ are all derivations at $p$, so there is a map
$$
\begin{align}
\phi:T_{p}\mathbb{R}^{n} & \to \mathfrak{D}_{p}\mathbb{R}^{n} \\
 & v\mapsto D_{v}=\sum_{i=1}^{n} v^{i}\left. \frac{ \partial  }{ \partial x^{i} }  \right|_{p}.
\end{align}
$$
Since $D_{v}$ is clearly linear in $v$, the map $\phi$ is a *linear map of $\mathbb{R}$-vector spaces*. 

> [!Theorem]
> $\phi$ is an isomorphism. 

Thus, one may identify the tangent vectors at $p$ with the derivations at $p$:
$$
v=\sum_{i=1}^{n} v^{i}\left. \frac{ \partial ~~~ }{ \partial x^{i} }  \right|_{p}.
$$
