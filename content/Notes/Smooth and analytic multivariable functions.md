---
id: "471"
date: 2026-06-19
time: 15:29
tags:
---
> [!Abstract]
> We generalize our definitions of smoothness and [[LEC ANA1 32#^d04d92|analyticity]] to multivariable functions. 

> [!Notation]
> Indices on coordinates are in superscript, not subscript. 

> [!Definition] Multivariable smooth functions, @tuIntroductionManifolds2011 Def 1.1
> Let $k$ be a nonnegative integer. A real-valued function $f:U\to \mathbb{R}$ is said to be $C^{k}$ at $p\in U$ if its partial derivatives 
> $$
> \frac{\partial^{j}f}{\partial x^{i_{1}}\dots \partial x^{i_{j}}}
> $$
> of all orders $j\leqslant k$ exist and are continuous at $p$ [^1]. The function $f:U\to \mathbb{R}$ is $C^{\infty}$ or **smooth** at $p$ if it is $C^{k}$ for all $k\geqslant 0$. A vector-valued function $f:U\to \mathbb{R}^{m}$ is said to be $C^{k}$ at $p$ if all of its component functions $f^{1}, \dots, f^{m}$ are $C^{k}$ at $p$. We say that $f:U\to \mathbb{R}^{m}$ is $C^{k}$ on $U$ if it is $C^{k}$ at every point in $U$. A similar definition holds for a $C^{\infty}$ function on an open set $U$. 

^861ecb

[^1]: Nice to note that the mixed partials are invariant under permutation, by [[LEC CAL1 19#^1c8495]]. 

> [!Definition] Diffeomorphism
> A **$C^{q}$-diffeomorphism** is a $C^{q}$ map $f:U\to V$ with a $C^{q}$ inverse $g:V\to U$. 

> [!Definition] Multivariable real-analytic functions
> Let $f:U\to \mathbb{R}$ be a real valued function, where $U\subseteq \mathbb{R}^{n}$. We say that $f$ is **real-analytic** on $U$ if for every $x\in U$, there exists a power series
> $$
> \sum_{\alpha\in \mathbb{N}^{n}}a_{\alpha}h^{\alpha}
> $$
> which converges in a neighborhood $V$ of the origin and for all $x+h\in x+V\subseteq U$, 
> $$
> f(x+h)=\sum_{\alpha\in \mathbb{N}^{n}}a_{\alpha}h^{\alpha},
> $$
> where $\alpha=(\alpha_{1}, \dots, \alpha_{n})$, $a_{\alpha}\in \mathbb{R}$, and $h^{\alpha}=h_{1}^{\alpha_{1}}\dots h_{n}^{\alpha_{n}}$. 

We next show that a convergent power series can be differentiated term by term in its region of convergence, just like in the single variable case ([[LEC ANA1 32#^523f3a]]).

> [!Notation]
> For $I=(i_{1}, \dots, i_{k})\in[n]^{k}$, define
> $$
> \begin{align}
> \alpha_{I} & :=(\#\{ j:i_{j}=l \})_{l=1}^{n} \in \mathbb{N}^{n}, \\
>  \partial^{I} & :=\frac{ \partial^{k}  }{ \partial x^{i_{1}}\dots \partial x^{i_{k}} }.
> \end{align}
> $$
> For $\alpha=(\alpha_{1}, \dots, \alpha_{n})\in \mathbb{N}^{n}$, define
> $$
> \begin{align}
> \alpha! & :=\alpha_{1}!\alpha_{2}!\dots\alpha_{n}! , \\
>|\alpha| & := \alpha_{1}+\alpha_{2}+\dots+\alpha_{n},\\
> I_{\alpha} & :=(\underbrace{ 1, 1, \dots, 1 }_{ \alpha_{1} }, \underbrace{ 2, 2, \dots, 2 }_{ \alpha_{2} }, \dots, \underbrace{ n, n, \dots, n }_{ \alpha_{n} }).
> \end{align}
> $$
> 

By [[LEC CAL1 19#^1c8495]], $\partial^{I}=\partial^{I_{\alpha_{I}}}$. 

> [!Theorem]
> Let $U\subseteq \mathbb{R}^{n}$ be a neighborhood of $0$. Let $f:U\to \mathbb{R}$ be defined by
> $$
> f(x)=\sum_{\alpha\in \mathbb{N}^{n}}a_{\alpha}x^{\alpha}.
> $$
> Then, for $x\in U$ and $I=(i_{1}, \dots, i_{k})\subseteq[n]^{k}$, 
> $$
> \partial^{I}f(x)=\sum_{\alpha\in \mathbb{N}^{n}, \alpha\geqslant  \alpha_{I}}\frac{\alpha!a_{\alpha}}{(\alpha-\alpha_{I})!}x^{\alpha-\alpha_{I}}.
> $$
> 

This gives us
$$
a_{\alpha}= \frac{1}{\alpha!}\partial^{I_{\alpha}}f(0).
$$
We thus arrive at the generalization of the Taylor series, and the fact that real-analytic functions are equal to their Taylor series in their region of convergence:

> [!Theorem]
> Suppose $f$ is real-analytic on $U\subseteq \mathbb{R}^{n}$. Then every $x\in U$ has a neighborhood $V$ in which 
> $$
> \begin{align}
> f(x+h)=\sum_{\alpha\in \mathbb{N}^{n}}\frac{1}{\alpha!}\partial^{I_{\alpha}}f(x)h^{\alpha}.
> \end{align}
> $$

> [!Remark]
> Here's another common way of writing the Taylor series, as it appears on [@tuIntroductionManifolds2011 p. 4]:
> $$
> \begin{align}
> f(x-h) & =\sum_{\alpha\in \mathbb{N}^{n}}\frac{1}{\alpha!}\partial^{I_{\alpha}}f(x)h^{\alpha} \\
>  & = \sum_{k=0}^{\infty}\frac{1}{k!} \sum_{\substack{ |\alpha|=k}}\frac{k!}{\alpha!}\partial^{I_{\alpha}}f(x)h^{\alpha}  \\
>  & =\sum_{k=0}^{\infty} \frac{1}{k!}\sum_{I\in[n]^{k}}\partial^{I}f(x)h^{\alpha_{I}}.
> \end{align}
> $$
> 