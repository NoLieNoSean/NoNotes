---
tags: 
date: "2025-09-11"
time: "17:10"
---
[!Proposition]
Let $(X, d)$ be a metric space. $C(X)$ is the space of continuous bounded functions $f:X\to \mathbb{C}$. There exists an isometry $\varphi:X\to C(X)$. $\overline{\varphi(X)}$ is the completion of $X$.

[!Proof]-
Fix $a\in X$. For $x\in X$, define $f_{x}(y)=d(x, y)-d(a, y)$. 

1 $f_{x}$ is uniformly continuous.
$$
\begin{align}
|f_{x}(y)-f_{x}(z)|=|(d(x, y)-d(a, y))-(d(x, z)-d(a, z))|\leq 2d(y, z)
\end{align}
$$


2 $f_{x}$ is bounded.

Thus, $f_{x}\in C(X)$.

Define $\varphi:X\to C(X)$ defined by $\varphi(x)=f_{x}$. For any $x, x'\in X$,
$$
\begin{align}
|f_{x}(y)-f_{x'}(y)|=|d(x, y)-d(x', y)|\leq d(x, x')\quad \forall y\in X.
\end{align}
$$
So, 
$$
\sup_{y\in X}|f_{x}(y)-f_{x'}(y)|\leq d(x, x').
$$
At $y=x$, $|f_{x}(y)-f_{x'}(y)|$ attains $d(x, x')$. Thus, 
$$
\lVert f_{x}-f_{x'} \rVert =\sup_{y\in X}|f_{x}(y)-f_{x'}(y)| =d(x, x').
$$

---

[!Definition]
Vanishing diameter

[!Proposition]
Let $\{ A_{n} \}$ with $A_{n}\subseteq X$ with $d(A_{n})\to 0$, and $\bigcap_{i=1}^{\infty}A_{i}\ne \emptyset$. Suppose $f:(X, d_{1})\to (Y, d_{2})$ is continuous. Then $d_{2}(f(A_{n}))\to 0$.

[!Proof]-
It should be clear that $\bigcap_{i=1}^{\infty}A_{i}=\{ x \}$. Let $\epsilon> 0$. $f$ is continuous, so there exists $\delta$ such that $d_{1}(x, y)<\delta$ implies $d_{2}(f(x), f(y))<\epsilon$. Choose $n_{0}$ such that $d(A_{n})<\delta$ for all $n\geq n_{0}$. If $y\in A_{n}$, then $d_{1}(x, y)<\delta$, so $d_{2}(f(x), f(y))<\epsilon$. Thus, $d_{2}(f(A_{n}))< 2\epsilon$. 

Counterexample when $\bigcap_{i=1}^{\infty}A_{i}=\emptyset$: Let $A_{n}=(0, 1/n]$, $f(x)=\sin(1/x)$. $f(A_{n})=[-1, 1]$ for all $n$. 

---

Cantor intersection theorem

---

$\mathscr{l}_{1}$ is separable

Let $\mathcal{F}\subseteq \mathscr{l}_{1}$ be the set of all sequences in $\mathscr{l}_{1}$ which have finitely many non-zero terms. Take $\mathcal{F}_{\mathbb{Q}}$ to mean the obvious thing. You can 'think' (work out the inclusions) of $\mathcal{F}_{\mathbb{Q}}$ as
$$
\mathcal{F}_{\mathbb{Q}}=\bigcup_{i=1}^{\infty} \mathbb{Q}^{i}.
$$
Thus, $\mathcal{F}_{\mathbb{Q}}$ is countable. It is clear that $\mathcal{F}_{\mathbb{Q}}$ is dense in $\mathcal{F}$. We need to prove that $\mathcal{F}$ is dense in $\mathscr{l}_{1}$, and we'll be done.

Let $\{ x_{k} \}\in \mathscr{l}_{1}$. Define $\overline{x}_{n}(k)=x_{k}$ if $k\leq n$, and $0$ for all $k> n$. $\overline{x}_{n}\in \mathcal{F}$. 
$$
\begin{align}
\lVert \overline{x}_{n}-\overline{x} \rVert _{1} & =\sum_{k=1}^{\infty} \lVert \overline{x}_{n}(k)-\overline{x}(k) \rVert  \\
 & = \sum_{k=n}^{\infty} |x_{k}|\to 0.
\end{align}
$$
---

$C_{0}=\{ \{ x_{n} \}\ | \ x_{n}\to 0 \}\subset \mathscr{l}_{\infty}$ wrt $\lVert \cdot \rVert_{\infty}$ is separable. Enough to prove...


$\mathscr{l}_{\infty}$ is not separable. 



◻️

---

Completion of separable metric space is separable. 

---

totally bounded.

Any totally bounded set is separable.