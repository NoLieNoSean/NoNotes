---
tags:
  - ANA2
  - Lecture
  - Processed
date: 2025-09-24
time: 15:31
---

> [!Proposition]
> Let $(X, \lVert \cdot \rVert)$ be a NLS. Then $X$ is complete iff for every $\{ x_{n} \}_{n=1}^{\infty}\subseteq X$, 
> $$
> \sum_{n=1}^{\infty} \lVert x_{n} \rVert < \infty \implies \sum_{n=1}^{\infty} x_{n}\in X.
> $$
> 
> > [!Proof]-
> > $(\implies)$ Suppose $X$ is complete. Let $\{ x_{n} \}\subseteq X$ such that $\sum_{n=1}^{\infty}\lVert x_{n} \rVert< \infty$. It suffices to prove $\sum_{n=1}^{N}x_{n}$ is Cauchy, that is
> > $$
> > \left\lVert  \sum_{k=n}^{m} x_{n}  \right\rVert \to 0.
> > $$
> > But, $\left\lVert  \sum_{k=n}^{m}x_{k}  \right\rVert\leq \sum_{k=n}^{m}\lVert x_{n} \rVert\to 0$ by hypothesis.
> > 
> > $(\impliedby)$ Suppose $\{ x_{n} \}\subseteq X$ is Cauchy. There exists $n_{1}$ such that $\lVert x_{n}-x_{n_{1}} \rVert< 1$ for $n\geq n_{1}$. Similarly, there exists $n_{k}$ such that $\lVert x_{n}-x_{n_{k}} \rVert< 1/2^{k}$ for $n\geq n_{k}$. For this subsequence
> > $$
> > \begin{align}
> > \lVert x_{n_{k+1}}-x_{n_{k}} \rVert < 1/2^{k} \\
> > \implies \sum_{k=1}^{\infty} \lVert x_{n_{k+1}}-x_{n_{k}} \rVert < \infty.
> > \end{align}
> > $$
> > By hypotheses, $\sum_{k=1}^{N} (x_{n_{k+1}}-x_{n_{k}})$ converges, say to $x$. Then, $x_{n_{N+1}}\to x+x_{n_{1}}$. Thus, $\{ x_{n} \}$ has a convergent subsequence. Since $\{ x_{n} \}$ is Cauchy, $\{ x_{n} \}$ converges.

> [!Proposition]
> A complete NLS is not a countable union of proper closed subspaces.
> 
> > [!Proof]-
> > 
> > By [[LEC ANA2 8#^1a2743]], It suffices to prove that if $K$ is a proper closed subspace of $X$, then $K$ is nowhere dense. Since $K\ne X$, there exists $y\not\in K$. Clearly, $y/\lVert y \rVert$ is not in $K$ either, so WLOG we can assume $\lVert y \rVert=1$. If $x\in K$, then $x+\epsilon y\not\in K$ for all $\epsilon> 0$.  Since $\lVert x-(x+\epsilon y) \rVert=\lVert \epsilon y \rVert=\epsilon$, this implies $x\not\in K^{\circ}$, so $K$ is nowhere dense.
> 


---

# Nowhere differentiable functions are not meagre in C\[0, 1\]

> [!Lemma]
> Let $\mathscr{P}$ be the set of all piecewise linear functions in $C[0, 1]$. $\mathscr{P}$ is dense in $C[0, 1]$. 
> 
> > [!Proof]-
> > Suppose $f\in C[0, 1]$. Let $\epsilon> 0$. Let $\delta$ be chosen by the uniform continuity of $f$. Choose $0=x_{0}< x_{1}<\dots < x_{n}=1$ such that the distance between two consecutive $x_{i}$'s is less than $\delta$. Let $p\in \mathscr{P}$ be the piecewise linear interpolation on $(x_{0}, f(x_{0})), \dots, (x_{n}, f(x_{n}))$.
> > 
> > If $x\in[0, 1]$, $x\in[x_{i}, x_{i+1}]$ for some $i$. 
> > $$
> > \begin{align}
> > |f(x)-p(x)| & \leq |f(x)-f(x_{i+1})|+|f(x_{i+1})-p(x)|.
> > \end{align}
> > $$
> > $|f(x)-f(x_{i+1})|<\epsilon$ by construction. $|f(x_{i+1})-p(x)|=|p(x_{i+1})-p(x)|\leq |p(x_{i+1})-p(x_{i})|<\epsilon$. 
> 

^9920c5

> [!Theorem]
> The subset of nowhere differentiable continuous functions in $C[0, 1]$ is of second category.
> 
> > [!Proof]-
> > 
> > By [[LEC ANA2 8#^1a2743]], we know that $C[0, 1]$ is of second category. Thus, it suffices to show that the subset $D$ of $C[0, 1]$ consisting of functions which are differentiable at at least one point in $[0, 1]$ is of first category.
> > 
> > Define 
> > $$
> > E_{N}=\{ f\in C[0, 1] : \exists x_{0}\in C[0, 1]\text{ such that } |f(x)-f(x_{0})|\leq N|x-x_{0}|~~\forall x\in[0, 1]\}.
> > $$
> > Note that if $f$ is differentiable at $x_{0}$, then there exists $N$ such that $|f(x)-f(x_{0})|\leq N|x-x_{0}|$ for all $x\in[0, 1]$: we can bound $|f(x)-f(x_{0})|/|x-x_{0}|$ on $(x_{0}-\epsilon, x_{0}+\epsilon)\setminus \{ x_{0} \}$ for some $\epsilon> 0$ using the fact that its limit exists as $x\to 0$, and it is easy to bound it on $[0, x_{0}-\epsilon]\cup[x_{0}+\epsilon, 1]$ using the fact that $f$ is continuous. It follows that $D\subseteq \bigcup_{N=1}^{\infty}E_{N}$. We only need to prove each $E_{N}$ is closed and $E_{N}^{\circ}=\emptyset$.
> > 
> > **Each $E_{N}$ is closed in $C[0, 1]$** 
> > 
> > Suppose $\{ f_{n} \}\subseteq E_{N}$ and $f_{n}\to f$ in $C[0, 1]$. For each $f_{n}\in E_{n}$, there exists $x_{n}\in[0, 1]$ such that $|f_{n}(x)-f_{n}(x_{n})|\leq N|x-x_{n}|$ for all $x\in[0, 1]$. $[0, 1]$ is compact; $\{ x_{n} \}$ must have a convergent subsequence; WLOG assume it is $\{ x_{n} \}$. Let $\{ x_{n} \}\to x_{0}$. It suffices to show 
> > $$
> > |f(x)-f(x_{0})|\leq N|x-x_{0}|
> > $$
> > for all $x\in[0, 1]$. 
> > $$
> > \begin{align}
> > |f(x)-f(x_{0})| & \leq |f(x)-f_{n}(x)|+|f_{n}(x)-f_{n}(x_{0})|+|f_{n}(x_{0})-f(x_{0})|
> > \end{align}
> > $$
> > Since convergence in $B[0, 1]$ implies uniform convergence, the first and third terms can be individually bounded by $\epsilon$ for $n\geq n_{0}$. 
> > $$
> > \begin{align}
> > |f_{n}(x)-f_{n}(x_{0})| & \leq |f_{n}(x)-f_{n}(x_{n})|+|f_{n}(x_{n})-f_{n}(x_{0})| \\
> >  & \leq \underbrace{ N|x-x_{n}| }_{ \to N|x-x_{0}| }+\underbrace{ N|x_{n}-x_{0}| }_{ \to 0 } \\
> >    \implies &  |f(x)-f(x_{0})|\leq N|x-x_{0}| +4\epsilon.
> > \end{align}
> > $$
> > 
> > **$E_{N}^{\circ}$ is empty for each $N$**
> > 
> > We have to show that for all $f\in E_{N}$, for all $\epsilon> 0$, there exists $g\in E_{N}^{c}$ such that $\lVert g-f \rVert<\epsilon$. Let $f\in E_{N}$. Let $\epsilon> 0$. Choose $p\in \mathscr{P}$ such that $\lVert f-p \rVert_{\infty}<\epsilon$, which we can do by [[#^9920c5]]. Let $M>\max\{ N+ |m_{i}| \}$, where the $m_{i}$'s are the slopes of the linear parts of $p$. 
> > 
> > Choose $\delta$ such that $0<\delta<\epsilon/M$. Choose $0=x_{0}< x_{1}<\dots < x_{n}$ such that $|x_{i+1}-x_{i}|<\delta$. 
> > 
> > Define $h$ by $h(x_{i})=0$, $h((x_{i}+x_{i+1})/2)=\epsilon$, and the linear interpolation through these points elsewhere. Then, the slopes of $h$ are $> M$. 
> > 
> > Take $g=p+h$. Then, 
> > $$
> > |g(x)-g(y)|\geq N|x-y|
> > $$
> > for all $x, y$. Thus, $g\not\in E_{N}$, and $\lVert f-g \rVert_{\infty}< 2\epsilon$: $\lVert f-(p+h) \rVert\leq \lVert f-p \rVert+\lVert h \rVert<\epsilon$. 