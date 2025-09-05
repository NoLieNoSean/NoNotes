---
tags:
  - ANA2
  - Lecture
date: 2025-09-05
time: 17:01
---
We have shown that $l^{\infty}$ is complete. 

[!Proposition]
$l_{1}(\mathbb{N})$ is complete.

[!Proof]-
let $\{ \overline{x}_{n} \}_{n=1}^{\infty}\subseteq l_{1}$ be Cauchy. Then, 
$$
\begin{align}
\lim_{ n, m \to \infty } \lVert \overline{x}_{n}-\overline{x}_{m} \rVert _{1}\to 0
\implies \sum_{k=1}^{\infty} |x^{k}_{n}-x^{k}_{m}|\to 0\implies |x^{k}_{n}-x^{k}_{m}|\to 0\text{ as }n, m\to 0,
\end{align}
$$
so $\{ x^{k}_{n} \}_{n=1}^{\infty}$ is Cauchy for each $k$. Thus, there exists an $x_{k}$ such that $x^{k}_{n}\to x^{k}$. 

claim: $\overline{x}=\{ x^{k} \}_{n=1}^{\infty}\in l_{1}$ and $\overline{x}_{n}\to \overline{x}$ in $l_{1}$. 

[!Proof]
$$
\begin{align}
\sum_{k=1}^{N} |x^{k}| & \leq \sum_{k=1}^{N} |x^{k}-x^{k}_{n_{0}}|+\sum_{k=1}^{N} |x^{k}_{n_{0}}| \\
 & =\lim_{ m \to \infty } \sum_{k=1}^{N} |x^{k}_{m}-x^{k}_{n_{0}}|+\sum_{k=1}^{N} |x^{k}_{n_{0}}| \\
 & \leq \lim_{ m \to \infty } \lVert \overline{x}_{m}-\overline{x}_{n_{0}}\rVert +\sum_{k=1}^{N} |x^{k}_{n_{0}}|  \\
 & \leq \epsilon +\lVert \overline{x}_{n_{0}} \rVert 
\end{align}
$$
for all $N$. Thus, we have
$$
\sum_{k=1}^{\infty} |x^{k}|\leq \infty,
$$
and $\{ x^{k} \}_{n=1}^{\infty}\in l_{1}$. 

Now, we have to show that $\overline{x}_{n}\to \overline{x}$ in $l_{1}$, that is, $\lVert \overline{x}_{n}-\overline{x} \rVert\to 0$ as $n\to \infty$. 

$$
\begin{align}
\sum_{k=1}^{N} |x^{k}_{n}-x^{k}| & =\lim_{ m \to \infty } \sum_{k=1}^{N} |x^{k}_{n}-x^{k}_{m}|\leq \lim_{ m \to \infty } \lVert \overline{x}_{n}-\overline{x}_{m}  \rVert<\epsilon
\end{align}
$$
for $n\geq n_{0}$ for all $N$. Then, 
$$
\begin{align}
\sum_{k=1}^{\infty} |x^{k}_{n}-x^{k}|<\epsilon 
\end{align}
$$
for all $n\geq n_{0}$. Thus, 
$$
\lim_{ n \to \infty } \lVert \overline{x}_{n}-\overline{x} \rVert =0.
$$

---

[!Proposition]
Let $X, Y$ be metric spaces. $Y$ is complete. $A\subseteq X$, $f:A\to Y$ is uniformly continuous. Then there exists uniformly continuous $\overline{f}:\overline{A}\to Y$ which is uniformly continuous and $\overline{f}\ | \ _A=f$. 

[!Proof]-
$x\in \overline{A}$. Let $\{ x_{n} \}$ be a Cauchy sequence in $\overline{A}$ converging to $x$. Uniformly continuous functions map Cauchy sequences to Cauchy sequences. Since $Y$ is complete, there exists, we can define $\overline{f}(x)\gets f(x_{n})$. To show that this is well defined, interlace sequences.

Now, we have to show that $\overline{f}$ is uniformly continuous. 

---

[!Proposition]
Completion of a metric space is unique. That is, if $X$ is a metric space and $X_{1}$ and $X_{2}$ are complete metric spaces such that there exist isometries $\varphi_{1}:X\to X_{1}$ and $\varphi_{2}:X\to X_{2}$ and $\varphi_{1}(X)\subseteq X_{1}$, $\varphi(X)\subseteq X_{2}$ are dense. Then, there exists an isometry $\varphi:X_{1}\to X_{2}$ such that $\varphi(\varphi_{1}(x))=\varphi(\varphi_{2}(x))$. 



