---
tags:
  - ALG2
  - Lecture
  - Processed
date: 2025-02-06
time: 9:10
---
## Orbit and stabilizer

> [!Definition]
> Let $\phi:G\times X\to X$ be a group action. For $x\in X$, define the *orbit of $x$* by
> $$
> \theta_{x}\equiv \{ gx\ | \  g\in X \}.
> $$

Note that $\theta_{x}\subset X$, and has no group structure.

> [!Definition]
> Let $\phi:G\times X\to X$ be a group action. For $x\in X$, define the *stabilizer of $x$* by
> $$
> G_{x}\equiv \{ g\in G\ | \  gx=x \}.
> $$

It is easy to verify that $G_{x}<G$ for all $x\in X$.

> [!Example]
> In [[ALG2_L7|this]] example, $\theta_{\Pi_{1}}=\theta_{\Pi_{2}}=\theta_{\Pi_{3}}=X$, and $G_{\Pi_{1}}=\{  e, (12)(34), (13)(24), (14)(23),  (1324), (1423), (12), (34) \}$, which is just the union of the inverse images of $(\Pi_{1}, \Pi_{2}, \Pi_{3})$ and $(\Pi_{1}, \Pi_{3}, \Pi_{2})$. Ditto for $G_{\Pi_{2}}$ and $G_{\Pi_{3}}$.

> [!Example]
> Let $G=GL_{2}(\mathbb{R})$ and $X=\mathbb{R}^{2}$. Let $\phi:G\times X\to X$ be defined by $\phi(M, \mathbf{v})=M\mathbf{v}$, $i$.$e$, $G$ acts on $X$ by left multiplication (verify that this is a group action). 
> 
> For $\mathbf{x}=\begin{bmatrix}0\\0\end{bmatrix}$, $\theta_{\mathbf{x}}=\{ \mathbf{x} \}$, $G_{\mathbf{x}}=G$.
> For $\mathbf{x}=\begin{bmatrix}1\\0\end{bmatrix}$, $\theta_{\mathbf{x}}=\mathbb{R}^{2}-\{ \mathbf{0} \}$, $G_{\mathbf{x}}=\begin{bmatrix}1&*\\0&d\ne {0}\end{bmatrix}$. 

---

## Groups acting on themselves

Let $G$ be a group, and $X=G$. Standard group actions include
1. Left multiplication: $\phi(g, x)=gx\equiv g\circ x$.
2. Right multiplication: $\phi(g, x)=gx\equiv x\circ g^{-1}$.
3. [[ALG2_L4#Conjugation|Conjugation]]: $\phi(g, x)=gx\equiv g\circ x\circ g^{-1}$. The stabilizer of $x$ under conjugation, also denoted by $Z(x)$, is called the centralizer of $x$. It is the set of all $g\in G$ which commute with $x$. Note that the orbit of $x$, $\{ \phi_{g}(x)\ | \ g\in G \}$, is the [[Normalizers and Conjugacy#Conjugacy|conjugacy class]] of $X$.

$G$ can also act on $G/H$ for some $H<G$: $\phi(g, aH)=gaH$. $\theta_{aH}=G/H$, $G_{aH}=aHa^{-1}$. 

