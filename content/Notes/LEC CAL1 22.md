# Implicit function theorem

> [!Info] Notation
> If $\mathbf{x}\in \mathbb{R}^{n}$ and $\mathbf{y}\in \mathbb{R}^{m}$, 
> $$
> (\mathbf{x}, \mathbf{y})\equiv(x_{1}, \dots, x_{n}, y_{1}, \dots, y_{m})\in \mathbb{R}^{n+m}.
> $$
> 
> Secondly, Every $A\in \mathcal{L}(\mathbb{R}^{n+m}, \mathbb{R}^{n})$ can be split into two linear transformations $A_{x}$ and $A_{y}$, defined by
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
Then $\mathbf{F}$ is a $C^{1}$ mapping of $E$ into $\mathbb{R}^{n+m}$.