---
id: "584"
date: 2026-10-12
time: 18:31
tags:
  - Lecture
  - GANA1
desc: the Han-Banach Theorem
---
Let $X$ and $Y$ be NLS. We have seen that $B(X, Y)$ is a Banach space if $Y$ is Banach. 

In particular, $X^{\star}=B(X, \mathbb{C})$ is a Banach space, called the dual of $X$. 

Question: Does $X^{\star}$ separate points of $X$?

## Examples of unbounded operators

$C^{1}[0, 1]\subseteq C[0, 1]$, $Df=f'$. Consider the sequence $f_{n}=X^{n}/n$. $f_{n}$ converges uniformly to $0$, But $x^{n-1}$ does not. 

Let $\{ y_{n} \}$ be an unbounded sequence. Define $\varphi_{\{ y_{n} \}}(\{ x_{n} \})=\sum x_{n}\overline{y}_{n}$ on the subspace $X_{0}=\left\{  \{ x_{n} \}\in \ell_{1}:\sum |x_{n}\overline{y}_{n}|< \infty  \right\}\subseteq \ell_{1}$, and consider the sequence $e_{n}$. 

Consider $f_{M}=1_{(0, M)}/M\in L^{1}(\mathbb{R}, \lambda)$. Note that $\lVert f_{M} \rVert_{1}=1$. Define $T(f)(x)=xf(x)$. 

---

Is $X^{\star}\ne \{  0 \}$ when $X\ne \{  0 \}$?

[!Theorem] Han-Banach
Let $X$ be a real Banach space. Let $p:X\to[0, \infty)$ be such that $p(x+y)\leqslant p(x)+p(y)$, and $p(tx)=tp(x)$ for all $t\geqslant 0$. Let $X_{0}\subseteq X$ be a linear subspace, and let $\varphi_{0}:X_{0}\to \mathbb{R}$ be a linear function such that $|\varphi(x)|\leqslant p(x)$ for all $x\in X_{0}$. Then there exists $\varphi:X\to \mathbb{R}$ linear satisfying $|\varphi(x)|\leqslant p(x)$ and $\varphi|_{X_{0}}=\varphi_{0}$. 

[!Proof]-
Define
$$
S=\{ (Y, \chi):X_{0}\subseteq Y\subseteq X, \chi:Y\to \mathbb{R} \text{ satisfying ...}\}.
$$
Endow $S$ with the obvious PO, construct maximal element $(Y, \varphi)$ in the usual way. 

We claim that $Y=X$. 
If not, take $x_{0}\in X\setminus Y$, and define $Y'=\{ y+tx_{0}:y\in Y, t\in \mathbb{R} \}$. Need to find $t_{0}\in \mathbb{R}$ such that
$$
\begin{align}
|\varphi'(y+tx_{0})|:=|\varphi(y)+tt_{0}|\leqslant p(y+tx_{0})
\end{align}
$$
for all $t\in \mathbb{R}$. 

Then, $(Y', \varphi')\geqslant (Y, \varphi)$, a contradiction. 

For all $x, y\in Y$, we have
$$
\varphi(y)-p(y-x_{0})\leqslant  p(x+x_{0})-\varphi(x).
$$
Take supremum on the left, infimum on the right. Choose $t_{0}$ to be something that lies between the two sides of the inequality. 

Define $\varphi'(x+tx_{0})=\varphi(x)+tt_{0}$. 

For $t> 0$, we have
$$
\begin{align}
\varphi'(x+tx_{0}) & =\varphi(x)+tt_{0} \\
 & =t\left( \varphi\left( \frac{x}{t} \right)+t_{0} \right) \\
 & \leqslant  t p\left( \frac{x}{t}+x_{0} \right)  \\
 & =p(x+tx_{0}).
\end{align}
$$
For $t< 0$, we have
$$
\begin{align}
\varphi'(x+tx_{0}) & =\varphi(x)+(-t)(-t_{0}) \\
 & =-t\left( \varphi\left( \frac{x}{-t} \right)-t_{0} \right) \\
 & \leqslant -tp\left( \frac{x}{-t}-x_{0} \right) \\
 & =p(x+tx_{0}).
\end{align}
$$

> [!Lemma]
> Let $Y$ be over $\mathbb{C}$. Let $\varphi:Y\to \mathbb{C}$ be bounded. Define $f_{1}(x):=\mathrm{Re}(\varphi(x))$, $f_{2}:=\mathrm{Im}(\varphi(x))$. Then $f_{1}(ix)=-f_{2}(x)$. Conversely, given linear $f_{1}, f_{2}:X\to \mathbb{R}$, $\varphi(x):=f_{1}(x)+if_{2}(x)$ is complex linear if $f_{1}(ix)=-f_{2}(x)$. 

[!Theorem]
Let $X_{0}\subseteq X$ be NLS over $\mathbb{C}$ or $\mathbb{R}$. Let $\varphi_{0}:X_{0}\to \mathbb{C}$ be bounded. Then there exists $\varphi:X\to \mathbb{C}/\mathbb{R}$, bounded, and $\varphi|_{X_{0}}=\varphi_{0}$ and $\lVert \varphi \rVert=\lVert \varphi_{0} \rVert$. 

[!Proof]-

If $X$ is over $\mathbb{R}$, take the minkowski function to he $p(x)=\lVert \varphi_{0} \rVert\lVert x \rVert$ for all $x\in X$, and use the previous theorem. 

Suppose $X$ is over $\mathbb{C}$. Let $f_{1}=\text{Re}(\varphi_{0})$, $f_{2}=\text{Im}(\varphi_{0})$. Note that $f_{1}, f_{2}$ are bounded, and that we can write $\varphi_{0}(x)=f_{1}(x)-if_{1}(ix)$. Extend $f_{1}$ to $\tilde{f_{1}}:X\to \mathbb{R}$, and define $\varphi:X\to \mathbb{R}$ by
$$
\varphi(x)=\tilde{f_{1}}(x)-i \tilde{f_{1}}(ix).
$$
$\varphi$ is complex linear. Let $\varphi(x)=e^{ i\theta }|\varphi(x)|$. 
