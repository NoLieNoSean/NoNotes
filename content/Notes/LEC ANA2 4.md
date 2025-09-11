---
tags:
  - ANA2
  - Lecture
  - Processed
date: 2025-09-05
time: 17:01
---
# Completions, reprise

[[LEC CAL1 6#Constructing the completion of a metric space|We have already seen a construction of the completion]]. We will now prove that the completion of a metric space is unique. We have also not proven that $\mathbb{R}$ is complete yet, which we will also do in this course.
## Uniqueness of completion

> [!Remark]
> Recall [[LEC ANA1 11#^78c16d|continuous functions map convergent sequences to convergent sequences]]. Similarly, uniformly continuous functions map Cauchy sequences to Cauchy sequences (should be clear from the definition). Important to note here that continuous functions may not preserve Cauchyness: Consider the image of the sequence $\{ 1/n \}_{n=2}^{\infty}$ under the continuous map $f:(0, 1)\to \mathbb{R}$ defined by $x\mapsto 1/x$. 

> [!Theorem] Universal property of completions
> The completion $\tilde{X}$ of a metric space $X$ satisfies the following [[Intro to Category Theory#Universal Properties|universal property]]: if $Y$ is any complete metric space and $f$ is any uniformly continuous function from $X$ to $Y$, then there exists a unique uniformly continuous function $\overline{f}$ from $\tilde{X}$ to $Y$ that extends $f$:
> 
> ```tikz
> \usepackage{tikz-cd, amsmath, amssymb}
> \begin{document}
> \begin{tikzcd}
> X\ar[d,hook, ""]\ar[r, "f"]&Y\\
> \tilde{X}\ar[ru, "\exists!\overline{f}"']&
> \end{tikzcd}
> \end{document}
> ```
> 
> > [!Proof]-
> > Let $x\in \tilde{X}$. Let $\{ x_{n} \}$ be a Cauchy sequence in[^1] $X$ converging to $x$. Since $f$ is uniformly continuous, $\{ f(x_{n}) \}$ is Cauchy. $Y$ is complete, so $\{ f(x_{n}) \}$ must converge. We are forced to define $\overline{f}(x)$ to be the limit of $\{ f(x_{n}) \}$, since we need $\overline{f}$ to be continuous.
> > 
> > We have to show $\overline{f}$ is well defined. Suppose $\{ y_{n} \}\subseteq X$ also converges to $x$. Consider the sequence $\{ z_{n} \}=x_{1}, y_{1}, x_{2}, y_{2}, \dots$. It clearly converges to $x$, and hence it and its image $\{ f(z_{n}) \}$ under $f$ is Cauchy. $\{ f(z_{n}) \}$ has $\{ f(x_{n}) \}$ as a subsequence, which forces it to converge to $\overline{f}(x)$. It follows that the subsequence $\{ f(y_{n}) \}$ also converges to $\overline{f}(x)$.
> > 
> > It remains to show $\overline{f}$ is uniformly continuous. Let $\epsilon> 0$. Let $\delta$ be such that for all $a, b\in X$, $d(a, b)<\delta \implies d(f(a), f(b))<\epsilon$, that is, $\delta$ is $f$'s response to the $\epsilon$-challenge. We will show that the same $\delta$ works for $\overline{f}$. Let $x, y\in \tilde{X}$. Let $\{ x_{n} \}, \{ y_{n} \}\subseteq {X}$ such that $\{ x_{n} \}\to x$ and $\{ y_{n} \}\to y$. Note that $d(x_{n}, y_{n})\to d(x, y)$. If $d(x, y)<\delta$, then there exists $N$ such that for all $n\geq N$, $d(x_{n}, y_{n})<\delta$, so $d(f(x_{n}), f(y_{n}))<\epsilon$. Now, 
> > $$
> > \begin{align}
> > d(\overline{f}(x), \overline{f}(y)) & \leq \underbrace{ d(\overline{f}(x), f(x_{n})) }_{ \to 0 }+\underbrace{ d(f(x_{n}), f(y_{n})) }_{ <\epsilon \text{ for }n\geq N }+\underbrace{ d(f(y_{n}), \overline{f}(y)) }_{ \to 0 } \\
> >  & < \epsilon
> > \end{align}
> > $$
> > for sufficiently large $n$. 
> 
> 

^f13fc5

> [!Proposition]
> Completion of a metric space is unique. That is, if $X$ is a metric space and $X_{1}$ and $X_{2}$ are complete metric spaces such that there exist isometries $\varphi_{1}:X\to X_{1}$ and $\varphi_{2}:X\to X_{2}$ and $\varphi_{1}(X)\subseteq X_{1}$, $\varphi_{2}(X)\subseteq X_{2}$ are dense. Then, there exists a bijective isometry $\varphi:X_{1}\to X_{2}$ such that $\varphi(\varphi_{1}(x))=\varphi_{2}(x)$. 

^1143c2

This follows immediately from the fact that initial objects in a category are isomorphic.

> [!Note] Vasanth's way
> 
> Vasanth proved the following lemma. It is essentially the same as [[#^f13fc5]], and the same proof works; just replace $\tilde{X}$ with $\overline{A}$. 
> 
> > [!Lemma]
> > Let $X, Y$ be metric spaces. Suppose $Y$ is complete. Let $f:A(\subseteq X)\to Y$ be uniformly continuous. Then, there exists a unique uniformly continuous $\overline{f}:\overline{A}\to Y$ such that $\overline{f}\ | \ _A=f$. 
> 
> ^9f74ac
> 
> Here is his proof for [[#^1143c2]]: $\varphi_{1}^{-1}:\varphi_{1}(X)\to X$ is a bijective isometry; compose with $\varphi_{2}$ to obtain another bijective isometry $\varphi_{2}\varphi_{1}^{-1}:\varphi_{1}(X)\to\varphi_{2}(X)$. By [[#^9f74ac]], there exists a uniformly continuous $\varphi:\overline{\varphi_{1}(X)}=X_{1}\to X_{2}$ such that $\varphi\ | \ _{\varphi_{1}(X)}=\varphi_{2}\varphi_{1}^{-1}$. It is clear that $\varphi$ is a bijective isometry.

## Alternate proof of completeness of $(\tilde{X}, \tilde{d})$ 

An alternate (and neater) proof of completeness of the completion constructed [[LEC CAL1 6#Completion of a metric space|here]]. We assume we have already shown $\phi(X)$ is dense in $\tilde{X}$ ([[LEC CAL1 6#$X$ is dense in $( tilde{X}, tilde{d})$|our previous proof of this]] does not depend on $(\tilde{X}, \tilde{d})$ being complete, so we can keep that). 

> [!Claim]
> For all Cauchy sequences in $\phi(X)$, a limit exists in $\tilde{X}$. 
> 
> > [!Proof]-
> > Let $\{ y_{n} \}$ be a Cauchy sequence in $\phi(X)$. Recall that each $y_{n}$ is an equivalence class of Cauchy sequences, and since each $y_{n}\in \phi(X)$, we can write $y_{n}=[P_{n}]$, where $P_{n}$ is the constant sequence $x_{n}, x_{n}, \dots$ for some $x_{n}\in X$. 
> > 
> > It is clear that $\{ x_{n} \}$ is a Cauchy sequence in $X$. Consider $[\{ x_{n} \}]$ in $\tilde{X}$. 
> > $$
> > \begin{align}
> > \tilde{d}(y_{m}, [\{ x_{n} \}]) & =\left( \lim_{ n \to \infty } d(x_{m}, x_{n}) \right)  \to 0\text{ as }m\to \infty.
> > \end{align}
> > $$
> > Thus, $\{ y_{m} \}\to[\{ x_{n} \}]$ in $\tilde{X}$.

^455f0c

Now, If $\{ z_{n} \}\subseteq \tilde{X}$ is a Cauchy sequence, using the fact that $\phi(X)$ is dense in $\tilde{X}$, we can construct a sequence $\{ y_{n} \}\subseteq \phi(X)$ such that $\tilde{d}(z_{n}, y_{n})< 1/n$. 

$\{ y_{n} \}$ is a Cauchy sequence, since
$$
\begin{align}
\tilde{d}(y_{n}, y_{m})\leq \tilde{d}(y_{n}, z_{n})+\tilde{d}(z_{n}, z_{m})+\tilde{d}(z_{m}, y_{m})\to 0\text{ as }m, n\to \infty.
\end{align}
$$
Let $\{ y_{n} \}$ converge to some $y$ in $\tilde{X}$, by [[#^455f0c]]. It follows that $\{ z_{n} \}$ also converges to $y$:
$$
\begin{align}
\tilde{d}(z_{n}, y) & \leq \tilde{d}(z_{n}, y_{n})+\tilde{d}(y_{n}, y)\to 0\text{ as }n\to \infty.
\end{align}
$$
Thus, every Cauchy sequence in $\tilde{X}$ converges, and $\tilde{X}$ is complete.

---

# Completeness of $\mathscr{l}_{1}$

Recall $\mathscr{l}_{p}$ [[LEC ANA2 1#Sequence spaces|is a NLS]] for $1\leq p\leq \infty$ with the $p$-norm. [[LEC ANA2 3#^eb4855|We have shown]] $\mathscr{l}_{\infty}$ is complete. 

We will now show $\mathscr{l}_{1}$ is complete.

Let $\{ \mathbf{x}_{n} \}\subseteq \mathscr{l}_{1}$ be Cauchy, with $\mathbf{x}_{n}=\{ x_{n}^{k} \}_{k=1}^{\infty}$. Then, $\lim_{ n, m \to \infty } \lVert \mathbf{x}_{n}-\mathbf{x}_{m} \rVert = 0$, so
$$
\begin{align}
 & \lim_{ n, m \to \infty } \sum_{k=1}^{\infty} |x_{n}^{k}-x_{m}^{k}|=0 \\
\implies & \lim_{ n, m \to \infty } |x^{k}_{n}-x^{k}_{m}|=0\quad \text{for each }k.
\end{align}
$$
$\{ x^{k}_{n} \}_{n=1}^{\infty}$ is Cauchy for each $k$. Let $\{ x_{n}^{k} \}\to x^{k}$ for each $k$.

$\{ x^{k} \}$ is our candidate limit for $\{ \mathbf{x}_{n} \}$. We have to prove $\{ x^{k} \}\in \mathscr{l}_{1}$ and $\{ \mathbf{x}_{n} \}\to \{ x^{k} \}$. Let $M$ be such that $\lVert \mathbf{x}_{n} \rVert\leq M$ for all $n$ (Cauchy sequences are bounded). 
$$
\begin{align}
\sum_{k=1}^{N} |x^{k}| & \leq \sum_{k=1}^{N} |x^{k}-x^{k}_{n_{0}}|+\sum_{k=1}^{N} |x^{k}_{n_{0}}| \\
 & =\lim_{ m \to \infty } \sum_{k=1}^{N} |x^{k}_{m}-x^{k}_{n_{0}}|+\sum_{k=1}^{N} |x^{k}_{n_{0}}| \\
 & \leq \lim_{ m \to \infty } \lVert \mathbf{x}_{m}-\mathbf{x}_{n_{0}}\rVert +\sum_{k=1}^{N} |x^{k}_{n_{0}}|  \\
 & \leq M +\lVert \mathbf{x}_{n_{0}} \rVert 
\end{align}
$$
for all $N$. Thus, $\sum_{k=1}^{\infty}|x^{k}|< \infty$ (monotone convergence!), and $\{ x^{k} \}\in \mathscr{l}_{1}$. 

It remains to show $\{ \mathbf{x}_{n} \}\to \{ x^{k} \}$, that is,
$$
\begin{align}
\lim_{ n \to \infty }\lVert \mathbf{x}_{n}-\{ x^{k} \}\rVert & =\lim_{ n \to \infty } \sum_{k=1}^{\infty} |x_{n}^{k}-x^{k}|=0.
\end{align}
$$
Let $\epsilon> 0$. Choose $n_{0}$ such that for all $n, m\geq n_{0}$, $\lVert \mathbf{x}_{n}-\mathbf{x}_{m} \rVert<\epsilon$. Then, for $n\geq n_{0}$, we have

$$
\sum_{k=1}^{N} |x^{k}_{n}-x^{k}|=\lim_{ m \to \infty } \sum_{k=1}^{N} |x^{k}_{n}-x^{k}_{m}|\leq \lim_{ m \to \infty } \lVert \mathbf{x}_{n}-\mathbf{x}_{m} \rVert \leq\epsilon
$$
for all $N$. Then, for $n\geq n_{0}$, 
$$
\begin{align}
\sum_{k=1}^{\infty} |x^{k}_{n}-x^{k}|\leq\epsilon.
\end{align}
$$
We are done!

> [!Exercise]
> Prove $\mathscr{l}_{2}$ is complete.



[^1]:Technically, in $\phi(X)$, where $\phi$ is the inclusion map $X\to \tilde{X}$. 