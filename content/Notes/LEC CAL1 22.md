---
id: "191"
date: January 2025
---

# Implicit function theorem

> [!Info] Notation
> If $\mathbf{x}\in \mathbb{R}^{n}$ and $\mathbf{y}\in \mathbb{R}^{m}$, 
> $$
> (\mathbf{x}, \mathbf{y})\equiv(x_{1}, \dots, x_{n}, y_{1}, \dots, y_{m})\in \mathbb{R}^{n+m}.
> $$
> 
> Secondly, every $A\in \mathcal{L}(\mathbb{R}^{n+m}, \mathbb{R}^{n})$ can be split into two linear transformations $A_{x}$ and $A_{y}$, defined by
> $$
> A_{x}\mathbf{h}\equiv A(\mathbf{h}, \mathbf{0}),\quad A_{y}\mathbf{k}\equiv A(\mathbf{0, \mathbf{k}})
> $$
> for any $\mathbf{h}\in \mathbb{R}^{n}$, $\mathbf{k}\in \mathbb{R}^{m}$. Then $A_{x}\in \mathcal{L}(\mathbb{R}^{n}, \mathbb{R}^{n})$, $A_{y}\in \mathcal{L}(\mathbb{R}^{m}, \mathbb{R}^{n})$, and
> $$
> A(\mathbf{h}, \mathbf{k})=A_{x}\mathbf{h}+A_{y}\mathbf{k}.
> $$

Consider a system of $n$ equations in $n+k$ variables $\mathbf{f}(\mathbf{x}, \mathbf{t})=\mathbf{0}$, where $\mathbf{f}:\mathbb{R}^{n+k}\to \mathbb{R}^{n}$, $\mathbf{x}\in \mathbb{R}^{n}$, and $\mathbf{t}\in \mathbb{R}^{k}$. If $\mathbf{f}$ is the map
$$
(\mathbf{x}, \mathbf{t})\mapsto \begin{bmatrix}
f_{1}(\mathbf{x}, \mathbf{t}) \\
\vdots \\
f_{n}(\mathbf{x}, \mathbf{t})
\end{bmatrix},
$$
then $\mathbf{f}(\mathbf{x}, \mathbf{t})=\mathbf{0}$ represents the system of equations
$$
\begin{array}{c}
f_{1}(\mathbf{x}, \mathbf{t})=0,\\
\vdots \\
f_{n}(\mathbf{x}, \mathbf{t})=0.
\end{array}
$$
Clearly, every system of $n$ equations in $n+k$ variables can be expressed in this manner.

Note that every such system of equations always represents a relation on $\mathbb{R}^{n}\times \mathbb{R}^{k}$, namely, the tuples $(\mathbf{x}, \mathbf{t})$ which satisfy the system. The implicit function theorem tells us when such a relation is (locally) a function from $\mathbb{R}^{k}$ to $\mathbb{R}^{n}$, that is, when $\mathbf{x}$ can be determined uniquely as a function $\boldsymbol{\varphi}$ of $\mathbf{t}$, in which case $\mathbf{f}$ is said to implicitly define $\boldsymbol{\varphi}$.

The linear version of the implicit function theorem is as follows:

> [!Theorem]
> If $A\in \mathcal{L}(\mathbb{R}^{n+m}, \mathbb{R}^{n})$ and if $A_{x}$ is invertible, then there corresponds to every $\mathbf{k}\in \mathbb{R}^{m}$ a unique $\mathbf{h}\in \mathbb{R}^{n}$ such that $A(\mathbf{h}, \mathbf{k})=\mathbf{0}$. This $\mathbf{h}$ can be computed from $\mathbf{k}$ by the formula
> $$
> \mathbf{h}=-(A_{x})^{-1}A_{y}\mathbf{k}.
> $$
> **Proof**
> $A(\mathbf{h}, \mathbf{k})=\mathbf{0}$ iff $A_{x}\mathbf{h}+A_{y}\mathbf{k}=\mathbf{0}$. Given $\mathbf{k}\in \mathbb{R}^{m}$, this can be solved uniquely for $\mathbf{h}$ iff $A_{x}$ is invertible, in which case $\mathbf{h}=-(A_{x})^{-1}A_{y}\mathbf{k}$. 

>[!Theorem]
>
>Let $\mathbf{f}$ be a $C^{1}$ mapping of an open set $E\subseteq \mathbb{R}^{n+m}$ into $\mathbb{R}^{n}$. Let $(\mathbf{a}, \mathbf{b})\in E$. Define $A\equiv\mathbf{f}'(\mathbf{a}, \mathbf{b})$. Assume:
>
>- $\mathbf{f}(\mathbf{a}, \mathbf{b})=\mathbf{0}$;
>- $A_{x}$ is invertible.
>
>Then, there exist open sets $U\subseteq \mathbb{R}^{n+m}$ and $W\subseteq \mathbb{R}^{m}$, with $(\mathbf{a}, \mathbf{b})\in U$ and $\mathbf{b}\in W$, having the property: 
>
>To every $\mathbf{y}\in W$ corresponds a unique $\mathbf{x}$ such that 
>$$
>(\mathbf{x}, \mathbf{y})\in U\quad\text{ and } \mathbf{f}(\mathbf{x}, \mathbf{y})=\mathbf{0}.
>$$
>If this $\mathbf{x}$ is defined to be $\mathbf{g}(\mathbf{y})$, then
>
>-  $\mathbf{g}$ is a $C^{1}$ mapping of $W$ into $\mathbb{R}^{n}$;
>-  $\mathbf{g}(\mathbf{b})=\mathbf{a}$;
>-  $\mathbf{f}(\mathbf{g}(\mathbf{y}), \mathbf{y})=\mathbf{0}$ for all $\mathbf{y}\in W$;
>-  $\mathbf{g}'(\mathbf{b})=-(A_{x})^{-1}A_{y}$.

**Proof**
Define $\mathbf{F}:E\to \mathbb{R}^{n+m}$ by
$$
\mathbf{F}(\mathbf{x}, \mathbf{y})=(\mathbf{f}(\mathbf{x}, \mathbf{y}), \mathbf{y})\quad((\mathbf{x}, \mathbf{y})\in E).
$$
Its derivative is given by the block matrix
$$
\mathbf{F}'(\mathbf{x}, \mathbf{y})=\left[
\begin{array}{ccc}
 \underset{n\times (m+n)}{\mathbf{f}'(\mathbf{x}, \mathbf{y})}\\
\hline \underset{m\times n}{\mathbf{0}} ~~~ \underset{m\times m}{I}
\end{array}
\right].
$$
All the partial derivatives are clearly continuous. By [[LEC CAL1 19#^c71feb]], $\mathbf{F}$ is a $C^{1}$ mapping of $E$ into $\mathbb{R}^{n+m}$. Also, since $\det \mathbf{F}'(\mathbf{a}, \mathbf{b})=\det A_{x}\det I_{m\times m}=\det A_{x}\ne 0$, $\mathbf{F}'(\mathbf{a}, \mathbf{b})$ is invertible. It follows from the [[LEC CAL1 21#^ccd2d7|inverse function theorem]] that there exist open sets $U$ and $V$ in $\mathbb{R}^{n+m}$, with $(\mathbf{a}, \mathbf{b})\in U$, $(\mathbf{0}, \mathbf{b})\in V$, such that $\mathbf{F}$ is an injective mapping of $U$ onto $V$. 

Let $W$ be the set of all $\mathbf{y}\in \mathbb{R}^{m}$ such that $(\mathbf{0}, \mathbf{y})\in V$. Note that $\mathbf{b}\in W$. It is clear that $W$ is open since $V$ is open. If $\mathbf{y}\in W$, then $(\mathbf{0}, \mathbf{y})=\mathbf{F}(\mathbf{x}, \mathbf{y})$ for some $(\mathbf{x}, \mathbf{y})\in U$. It follows that $\mathbf{f}(\mathbf{x}, \mathbf{y})=\mathbf{0}$ for this $\mathbf{x}$. The uniqueness of $\mathbf{x}$ follows from the injectivity of $\mathbf{F}$ on $U$. This proves he first part of the theorem.

For the second part, define $\mathbf{g}(\mathbf{y})$ for $\mathbf{y}\in W$ to be the unique $\mathbf{x}$ such that $(\mathbf{x}, \mathbf{y})\in U$ and $\mathbf{f}(\mathbf{x}, \mathbf{y})=\mathbf{0}$. Then for $\mathbf{y}\in W$,
$$
\mathbf{F}(\mathbf{g}(\mathbf{y}), \mathbf{y})=(\mathbf{0}, \mathbf{y}).
$$
If $\mathbf{G}$ is the mapping of $V$ onto $U$ that inverts $\mathbf{F}$, then $\mathbf{G}\in C^{1}$ by the inverse function theorem and $(\mathbf{g}(\mathbf{y}), \mathbf{y})=\mathbf{G}(\mathbf{0}, \mathbf{y})$ for $\mathbf{y}\in W$.


> [!Theorem]
> Let $f:X\to \mathbb{R}^{n}$, where $X\subseteq \mathbb{R}^{n+m}$ is open, be $C^{1}$. Let $Z$ be the zero set of $f$. Let $f'(x, y)=[A_{x}~~A_{y}]$. Assume $A_{x}$ is invertible for all $(x, y)\in Z$. Then $M$ is a manifold of $\dim m$. 

The requirement above is not nThe function $f:\mathbb{R}^{3}\to \mathbb{R}$ defined by $f(x, y, z)=x^{2}+y^{2}+z^{2}-1$ does not satisfy these hypotheses: $A_{x}=[2x]$ is not invertible for $x=0$. However, at these points, we can solve for $z$ or $y$ instead; all three of these cannot be simultaneously zero. So, the zero set of $f$ is a manifold. 