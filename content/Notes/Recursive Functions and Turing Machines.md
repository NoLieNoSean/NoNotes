---
id: "486"
date: 2026-06-26
time: 16:31
tags:
---


> [!Definition] Composition and Primitive recursion
> $f:\mathbb{N}^{k}\to \mathbb{N}$ is obtained by **composition** from $g:\mathbb{N}^{l}\to \mathbb{N}$ and $h_{1}, \dots, h_{l}:\mathbb{N}^{k}\to \mathbb{N}$ if $f(\vec{n})=g(h_{1}(\vec{n}), \dots, h_{l}(\vec{n}))$. 
> 
> $f:\mathbb{N}^{k+1}\to\mathbb{N}$ is obtained by **primitive recursion** from $g:\mathbb{N}^{k}\to \mathbb{N}$ and $h:\mathbb{N}^{k+2}\to \mathbb{N}$ if
> $$
> \begin{align}
> f(0, \vec{n}) & =g(\vec{n}) \\
> f(i+1, \vec{n}) & = h(i, f(i, \vec{n}), \vec{n}).
> \end{align}
> $$
> 

^bc0108

> [!Definition] Minimization
> $f:\mathbb{N}^{k}\to \mathbb{N}$ is obtained by **$\mu$-recursion** or **minimization** from $g:\mathbb{N}^{k+1}\to \mathbb{N}$, denoted by $f(\vec{n})=\mu i(g(i, \vec{n})=0)$ if
> $$
> \begin{align}
> f(\vec{n})=\begin{cases}
> i & g(i, \vec{n})=0\text{ and } g(j, \vec{n})> 0 \,\forall j< i \\
> \textsf{undefined}  & \text{otherwise}.
> \end{cases}
> \end{align}
> $$
> 

^3d22a0

> [!Definition] Primitive Recursive and Recursive functions
> The class of **primitive recursive functions** is the smallest class of functions $f:\mathbb{N}^{k}\to \mathbb{N}$ 
> 1. Containing the **initial functions**:
> 	1. $\textsf{Zero}$: $Z(n)=0$
> 	2. $\textsf{Succ}$: $S(n)=n+1$
> 	3. $\textsf{Proj}$: $\Pi^{k}_{i}(n_{1}, \dots, n_{k})=n_{i}$.
> 2. Closed under [[#^bc0108|composition and primitive recursion]]. 
> 
> The class of **partial recursive functions** is the smallest class of partial functions from $\mathbb{N}^{n}$ to $\mathbb{N}$ which satisfy the above conditions and in addition are closed under [[#^3d22a0|minimization]]. A function is **recursive** if it is defined on the full domain $\mathbb{N}^{n}$ are partial recursive. 

^76c316

> [!Definition] Primitive Recursive Relation
> A relation $R\subseteq \mathbb{N}^{k}$ is **primitive recursive** if its characteristic function $c_{R}:\mathbb{N}^{k}\to \{ 1, 0 \}$ is [[#^76c316|primitive recursive]]. 

^dd2731

> [!Definition] Recursively Enumerable and Recursive sets
> A set $A$ is **recursively enumerable** if it is the range of a partial [[#^76c316|recursive function]]. A set $A$ is **recursive** if there is a recursive function $f$ with $f(x)=1$ for $x\in A$ and $f(x)=0$ for $x\not\in A$. 

^58c981

> [!Definition] Diophantine sets
> A set $A\subseteq \mathbb{N}$ is **Diophantine** is there are $n\in \mathbb{N}$ and polynomials $f, g$ with coefficients in $\mathbb{N}$ such that
> $$
> A=\{ x: \exists y_{1}\dots \exists y_{n}[f(x, y_{1}, \dots, y_{n})=g(x, y_{1}, \dots, y_{n})] \}.
> $$
> 

^e1ac92

A general theorem of Matiyasevich says that if a set is defined by a system of Diophantine equations, it can also be defined by a system of Diophantine equations in only 9 variables.

> [!Theorem] Matiyasevich
> A set $A\subseteq \mathbb{N}$ is [[#^58c981|recursively enumerable]] iff it is [[#^e1ac92|Diophantine]]. 

> [!Corollary]
> Let $\langle , \rangle:\mathbb{N}^{2}\to \mathbb{N}$ be the Cantor bijection. 
> A function $\psi:\mathbb{N}\to \mathbb{N}$ is partial recursive iff the set $\{ \langle x, \psi(x) \rangle:x\in\text{Dom}(\psi) \}$ is Diophantine. A set $A\subseteq \mathbb{N}$ is recursive iff the set $\{ \langle x, A(x) \rangle:x\in \mathbb{N} \}$ is Diophantine. 

# Turing computability

> [!Proposition]
> [[#^dd2731|Primitive recursive relations]] are
> 1. closed under boolean operations $c_{\neg \varphi}=1-c_{\varphi}$, and $c_{\varphi\wedge \psi=c_{\varphi}\cdot c_{\psi}}$. 
> 2. closed under bounded universal quantification: 
> $$
> \begin{align}
> \text{If }\varphi(z, \vec{x})=(\forall y\leqslant  z)\psi(y, \vec{ x}), \quad \text{then }c_{\varphi}(z, \vec{ x})=\prod _{y \leqslant  z}c_{\psi}(y, \vec{ x}).
> \end{align}
> $$
> 3. closed under bounded $\mu$-recursion:
> $$
> \begin{align}
> \chi(z, \vec{ x})=\mu y_{\leqslant  z}\varphi(y, \vec{ x})=\begin{cases}
> \mu y.\varphi(y, \vec{ x}) & (\exists y \leqslant  z)\varphi(y, \vec{ x}) \\
>  z+1 & \text{otherwise}.
> \end{cases}
> \end{align}
> $$
> 

It follows that $x=y$, $x< y$, $\varphi \vee \psi$, $\varphi\to \psi$, and $(\exists y\leqslant z)\varphi(y, \vec{ x})$ are primitive recursive, when $\varphi$ and $\psi$ are.

> [!Definition] Turing computable function
> $f:\mathbb{N}\to \mathbb{N}$ is **Turing computable** if $f=R_{M}$ for a Turing machine $M$. 

^8b52cb

> [!Theorem]
> Any [[#^8b52cb|Turing computable]] (partial) function $f:\mathbb{N}\to \mathbb{N}$ is also (partial) recursive. 

^0c269a

See @mukundRecursiveFunctionsTuring2026 for details on how computations by Turing machines can be emulated by recursive functions; it is pretty hairy. 
 
[[#^0c269a]] ($f$ Turing computable $\implies$ $f(n)=\textsf{fst}[\mu r.\textsf{run}_{M}(n, r)]$, where $\textsf{run}_{M}$ is primitive recursive) can be stated in more general terms:

> [!Theorem] Kleene's normal form theorem
> A function $f$ is (partial) recursive iff there is a primitive recursive predicate $T$ such that $f(n)=\textsf{fst}(\mu r .T(n, r))$ for all $n$. 

