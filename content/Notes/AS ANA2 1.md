---
tags:
  - ANA2
date: 2025-09-15
time: 11:13
id: "15"

---

# Problem 1

**$\mathcal{C}$ is a commutative ring**

Define addition and multiplication on $\mathcal{C}$ componentwise. Let $\{ x_{n} \}, \{ y_{n} \}\in\mathcal{C}$. 
$$
\begin{align}
|x_{n}+y_{n}-x_{m}-y_{m}| & \leq |x_{n}+y_{n}|+|x_{m}+y_{m}| \\
 & \leq\epsilon,
\end{align}
$$
so $\{ x_{n}+y_{n} \}$ is Cauchy. Similarly, if we choose $M$ such that $|x_{n}|< M$ and $|y_{n}|< M$ for all $n$, we have
$$
\begin{align}
|x_{n}y_{n}-x_{m}y_{m}| & =|x_{n}(y_{n}-y_{m})+y_{m}(x_{n}-x_{m})| \\
 & \leq |x_{n}||(y_{n}-y_{m})|+|y_{m}||x_{n}-x_{m}| \\
 & \leq M\epsilon.
\end{align}
$$
Thus, $\{ x_{n}y_{n} \}$ is Cauchy.

The constant sequence $1, 1, \dots$ is the identity. Addition and multiplication are clearly commutative. Thus, $\mathcal{C}$ is commutative ring. 

**$\mathcal{N}$ is a maximal ideal in $\mathcal{C}$**

Let $\mathcal{N}$ be the set of all sequences in $\mathcal{C}$ converging to $0$. Suppose $\{ y_{n} \}\not\in \mathcal{N}$. Let $\mathcal{N}'$ be the smallest ideal containing $\mathcal{N}\cup \{ \{ y_{n} \} \}$. To show that $\mathcal{N}$ is a maximal ideal, it suffices to show that $\mathcal{N}'=\mathcal{C}$. Let $\{ x_{n} \}\in \mathcal{C}$ and suppose $\{ x_{n} \}$ does not converge to $0$. Then, there exists $N$ such that for all $n\geq N$, $x_{n}$ and $y_{n}$ are nonzero. Define $\{ z_{n} \}$ by
$$
z_{n}=\begin{cases}
x_{n}/y_{n} & n\geq N \\
0 & n< N.
\end{cases}
$$
To show that $\{ z_{n} \}\in \mathcal{C}$, it suffices to show that $\{ 1/y_{n} \}_{n\geq N}$ is Cauchy. Since $\{ y_{n} \}\not\in \mathcal{N}$, there exists $m> 0$ such that $m< |y_{n}|$ for all $n$. 
$$
\begin{align}
\left| \frac{1}{y_{n}}-\frac{1}{y_{m}} \right| &  =\left| \frac{y_{n}-y_{m}}{y_{n}y_{m}} \right|  \\
 & \leq\frac{|y_{n}-y_{m}|}{m^{2}} \\
 & \leq \epsilon/m^{2}.
\end{align}
$$
$\{ z_{n} \}\in \mathcal{C}$ follows since $\mathcal{C}$ is a ring. Let $\{ w_{n} \}$ be defined by
$$
w_{n}=\begin{cases}
x_{n} & n< N \\
0 & n\geq N.
\end{cases}
$$
It is clear that $\{ w_{n} \}\in \mathcal{N}$. We can now express $\{ x_{n} \}$ as 
$$
\{ x_{n} \}=\{ z_{n} \}\{ y_{n} \}+\{ w_{n} \},
$$
where $\{ y_{n} \}, \{ w_{n} \}\in \mathcal{N}'$, so $\{ x_{n} \}\in \mathcal{N}'$. It follows that $\mathcal{N}'=\mathcal{C}$. 

We have shown that $\mathcal{N}$ is a maximal ideal of $\mathcal{C}$. It follows from the definition of maximal ideals that $\mathbb{R}:=\mathcal{C}/\mathcal{N}$ is a field.

**$<$ is a total order on $\mathbb{R}$**

For $r\in \mathbb{R}$, say $0< r$ if for each $\{ y_{n} \}\in r$, there exists $N$ such that for all $n\geq N$, $y_{n}> 0$. Note that $0\not< 0$. Next, for $r, s\in \mathbb{R}$, say $r< s$ if $0< s-r$.

Let $r\in \mathbb{R}$ and suppose $r\ne 0$ and $0\not< r$. Let $\{ y_{n} \}\in r$. Since $\{ y_{n} \}$ does not converge to $0$, there exists $l\in \mathbb{Q}$ such that $l< |y_{n}|$ for all $n$. Since $\{ y_{n} \}$ is Cauchy, there exists $N$ such that $|y_{n}-y_{m}|< l$ for all $n, m> N$. Since $\{ y_{n} \}$ must have infinitely many negative terms, this tells us that $y_{n}< 0$ for all $n> N$. Thus, $r< 0$. We have shown that for all $r\in \mathbb{R}$, one of $r=0$, $0< r$, or $r< 0$ is true. If follows that for all $r, s\in \mathbb{R}$, either one of $r=s$, $s< r$, $r< s$ is true. Thus, $<$ is a total order on $\mathbb{R}$.

**$(\mathbb{R}, <)$ is a [[Ordered fields|totally ordered field]]**

We have to prove for all $x,y,z\in \mathbb{R}$, 
1. If $y<z$, then $x+y<x+z$, and
2. If $x>0, y>0$ then $xy>0$.

$(1)$ follows directly from our definition of $<$ and the fact that $\mathbb{R}$ is a ring:
$$
\begin{align}
y-z< 0 & \implies 0+y-z< 0 \\
 & \implies x-x+y-z< 0 \\
 & \implies x+y-(x+z)< 0 \\
 & \implies x+y< x+z.
\end{align}
$$
For $(2)$, consider $\{ x_{n}y_{n} \}\in xy$. Since $x, y> 0$, there exists $N$ such that for all $n> N$, $x_{n}, y_{n}> 0$. It follows that for all $n> N$, $x_{n}y_{n}> 0$. Thus, $xy> 0$. 

Note from $(2)$, we get that if $x> y$ and $z> 0$, $zx> zy$.

**The Archimedean property**

Suppose $x, y\in \mathbb{R}^{+}$. If $x> y$, we are done, so assume $x< y$. Since $\mathbb{R}$ is a field, $y/x\in \mathbb{R}$. We can identify $n\in \mathbb{N}$ with $[\{ n, n, n, \dots \}]\in \mathbb{R}$. If $y/x=n\in \mathbb{N}$, then $y/x< n+1$. Otherwise, $y/x$ partitions $\mathbb{N}$ into two sets $G$ and $L$ of natural numbers that are greater and lesser than $y/x$ respectively. If $G$ is nonempty, let $n$ be the smallest element of $G$ (which we can pick since $\mathbb{N}$ is well ordered), and $y/x< n$. If $G$ is empty, we must have $L=\mathbb{N}$. Then for every $\{ z_{n} \}\in y/x$, for every $m\in \mathbb{N}$, there exists $N_{m}$ such that $z_{n}> m$ for all $n\geq N_{m}$. This contradicts the fact that $\{ z_{n} \}$ is a Cauchy sequence and hence bounded in $\mathbb{Q}$.

---

# Problem 2

Suppose $a, b\in[x]$ and $c, d\in[y]$. 
$$
\begin{align}
d(a, c) & \leq d(a, b)+d(b, d)+d(d, c) \\
 & =d(b, d). \\
 \\
d(b, d) & \leq d(b, a)+d(a, c)+d(c, d) \\
 &  =d(a, c).
\end{align}
$$
Thus, $d(a, c)=d(b, d)$ and $\tilde{d}$ is well defined.

Let $A$ be an open subset of $(X, d)$. Suppose $x\in A$. Let $B\subseteq A$ be an open ball (taken in $d$) centered at $x$. If $d(x, y)=0$ for any $y$, it is clear that $y\in B$. Thus, $A$ contains $[x]$. It follows that $A$ is a union of equivalence classes of $\sim$. 

To show that $\pi(A)$ is open in $\tilde{X}$, it is sufficient to show that $\pi(B_{r}(x))=B_{r}([x])$ for all $x, r$. Suppose $[y]\in \pi(B_{r}(x))$. Then, there is $a\in[y]$ such that $a\in B_{r}(x)$. Thus, $\tilde{d}([x], [y])=d(x, a)< r$ so $[y]\in B_{r}([x])$. Conversely, suppose $[y]\in B_{r}([x])$. Then, $\tilde{d}([x], [y])=d(x, b)< r$ for all $b\in[y]$. It follows that $[y]\subseteq B_{r}(x)$ and $[y]\in \pi(B_{r}(x))$.

---

# Problem 3

> [!Exercise]
> Let $\mathbb{R}^*$ be the extended real number system $[-\infty, \infty]$. Define $f : \mathbb{R}^* \mapsto [-1, 1]$ by
> $$f(x) = \frac{x}{1 + |x|} \quad \forall x \in (-\infty, \infty), \quad 
> f(-\infty) = -1, \quad f(\infty) = 1.$$
> Show that $f$ is a bijection and non-decreasing. Prove that 
> $$d(x, y) = |f(x) - f(y)|$$
> is a metric. Describe the open subsets of $(\mathbb{R}^*, d)$. Is it compact?

^4391a5


**$d$ is a metric**

Suppose $y\in(0, 1)$. Then, $y=\frac{x}{1+|x|}$ implies $x> 0$, and
$$
\begin{align}
y=\frac{x}{1+x}\iff x= \frac{1}{1-y}.
\end{align}
$$
Similarly, if $y\in(-1, 0)$, we have $x< 0$ and
$$
\begin{align}
y=\frac{x}{1-x}\iff x= \frac{1}{1+y}.
\end{align}
$$
Lastly, $y=0\iff x=0$, $y=1\iff x=\infty$, and $y=-1\iff x=-\infty$. Thus, $f$ is a bijection.

Next, $f(1)> f(x)$ for all $x\in[-1, 1)$ and $f(-1)< f(x)$ for all $x\in(-1, 1]$. For $x\in(-1, 1)$, $f'(x)$ is given by
$$
f'(x)=\frac{1}{(|x|+1)^{2}},
$$
which is $> 0$ for all $x\in(-1, 1)$. Thus, $f$ is increasing on $[-1, 1]$.

Define $d(x, y)=|f(x)- f(y)|$. $d$ is clearly positive definite and symmetric. That $d$ respects the triangle inequality follows directly from the triangle inequality for the real numbers:
$$
\begin{align}
\left|f(x)-f(y) \right| \leq \left|f(x)-f(z) \right|+\left|f(z)-f(y) \right|.
\end{align}
$$

**Open sets**

It is clear that $f:(\mathbb{R}^{*}, d)\to[-1, 1]$ and $f^{-1}:[-1, 1]\to(\mathbb{R}^{*}, d)$ are continuous: for $\epsilon> 0$, we have
$$
d(x, y)<\epsilon \iff |f(x)-f(y)|<\epsilon.
$$
Thus, $(\mathbb{R}^{*}, d)$ and $[-1, 1]$ are homeomorphic and $(\mathbb{R}^{*}, d)$ is compact. The open sets in $(\mathbb{R}^{*}, d)$ are precisely the preimages of the open sets in $[-1, 1]$: open intervals of the form $(a, b)$, and semi-open intervals of the form $(a, \infty]$ and $[\infty, b)$.


---

# Problem 4

$\rho$ is clearly positive definite and symmetric. We only have to show the triangle inequality. 

Let $x, y, z\in \mathbb{R}^{2}$. If $x, y, z$ lie on the same line through the origin, we are done. Suppose $x=\lambda y$ and $z\ne \lambda x$. Then, 
$$
\begin{align}
\rho(x, y) & =d_{2}(x, y) \\
 & \leq d_{2}(x, 0)+d_{2}(y, 0) \\
 & \leq d_{2}(x, 0)+d_{2}(y, 0) +2d_{2}(z, 0) \\
 & =\rho(z, x)+\rho(z, y).
\end{align}
$$
Suppose $x=\lambda z$ and $y\ne\lambda z$.
$$
\begin{align}
\rho(x, y) & =d_{2}(x, 0)+d_{2}(y, 0)  \\
 & \leq d_{2}(z, x)+d_{2}(z, 0)+d_{2}(y, 0) \\
 & =\rho(z, x)+\rho(z, y).
\end{align}
$$
The case where $y=\lambda z$ and $z\ne \lambda z$ is analogous. Suppose $x\ne \lambda z$, $z\ne\lambda y$. 
$$
\begin{align}
\rho(x, y) & =d_{2}(x, 0)+d_{2}(y, 0) \\
 & \leq d_{2}(x, 0)+d_{2}(y, 0)+2d_{2}(z, 0) \\
 & =\rho(x, z)+\rho(z, y).
\end{align}
$$
Let $U$ be open in $(\mathbb{R}^{2}, d_{2})$ and $p\in U$ not be the origin. There exists an open ball $B_{\epsilon, d_{2}}(p)\subseteq U$. Let $\epsilon'=\min\{ \epsilon, d_{2}(p, 0) \}$. Then, $B_{\epsilon', \rho}(p)\subseteq U$. If $p$ is the origin, open balls of a given radius centered at $p$ are the same in $d_{2}$ and $\rho$. Thus, $U$ is open in $(\mathbb{R}^{2}, \rho)$. 

If $p\in \mathbb{R}^{2}$ is not the origin, consider $B_{\epsilon, \rho}(p)$ where $\epsilon< d_{2}(p, 0)$. This is clearly not open in $(\mathbb{R}^{2}, d_{2})$.

---
# Problem 5

It is clear that $D$ is positive definite and symmetric. The triangle inequality is again an immediate consequence of the triangle inequality in $\mathbb{R}$:
$$
D(x, y)=\left| \frac{x}{1-x}-\frac{y}{1-y} \right| \leq\left| \frac{x}{1-x}-\frac{z}{1-z} \right|+\left| \frac{z}{1-z}-\frac{y}{1-y} \right|=D(x, z)+D(z, y).
$$
Let $i:(X, d)\to(X, D)$ be the identity map. Let $x\in (X, D)$ and $\epsilon> 0$. Choose $\delta> 0$ such that $\delta/(1-x-\delta)<\epsilon$. If $d(x, y)<\delta$, 
$$
\begin{align}
\frac{x}{1-x}-\frac{y}{1-y}\leq \frac{x-y}{1-y}\leq \frac{x-y}{1-x-\delta}\leq \frac{\delta}{1-x-\delta}\leq\epsilon &  & \text{ if }x< y
\end{align}
$$

$$
\begin{align}
\frac{y}{1-y}-\frac{x}{1-x}\leq \frac{y-x}{1-x}\leq \frac{y-x}{1-x-\delta}\leq \frac{\delta}{1-x-\delta}\leq\epsilon &  & \text{ if }y< x.
\end{align}
$$
Thus, $i$ is continuous. 

Conversely, let $x\in(x, d)$ and $\epsilon> 0$. Choose $\delta=\epsilon$. Suppose $D(x, y)<\delta$. If $y< x$, choose $M$ such that $y< 1-M< x$ so $1-x< M< 1-y$. Then,
$$
\begin{align}
x-y\leq  \frac{x}{M}-\frac{y}{M}\leq \frac{x}{1-x}-\frac{y}{1-y}\leq\epsilon.
\end{align}
$$
If $x< y$, choose $M$ such that $x< 1-M< y$, and we again obtain $y-x\leq\epsilon$. Thus, $i^{-1}$ is continuous. A bicontinuous map is a homeomorphism. 

We know that $(X, d)$ is not complete: consider any sequence converging to $1$. $(X, D)$, on the other hand, is isometric to $\mathbb{R}_{\geq 0}$: it is immediate that the map $x\mapsto \frac{x}{1-x}$ is a bijective isometry. Since $\mathbb{R}_{\geq 0}$ is complete, it follows that $(X, D)$ is complete.

---
# Problem 6

> [!Exercise]
> Let $X=\{ \{ x_{n} \}_{n=1}^{\infty}:0\leq x_{n}\leq 1, \forall n\in \mathbb{N} \}$. Define $d(\{ x_{n} \}, \{ y_{n} \})=\sum_{n=1}^{\infty}\frac{1}{2^{n}}|x_{n}-y_{n}|$. Show that $d$ is a metric. Show that a sequence $\{ \overline{x_{n}} \}\subseteq X$, with $\overline{x_{n}}=\{ x_{m, n} \}_{m=1}^{\infty}$ converges iff $\{ x_{m, n} \}_{n=1}^{\infty}$ converges for each $m\in \mathbb{N}$. Describe the open subsets of $X$.

$d(\{ x_{n} \}, \{ y_{n} \})$ exists for all $\{ x_{n} \}, \{ y_{n} \}\in X$, since 
$$
\begin{align}
\sum_{n=1}^{\infty} \frac{1}{2^{n}}|x_{n}-y_{n}|\leq \sum_{n=1}^{\infty} \frac{1}{2^{n}},
\end{align}
$$
which is a convergent series. Since it is absolutely convergent, we can rearrange the terms in the series:
$$
\begin{align}
\sum_{n=1}^{\infty} \frac{1}{2^{n}}|x_{n}-y_{n}| & \leq \sum_{n=1}^{\infty} \frac{1}{2^{n}}(|x_{n}-z_{n}|+|z_{n}-y_{n}|) \\
 & =\sum_{n=1}^{\infty} \frac{1}{2^{n}}|x_{n}-z_{n}|+\sum_{n=1}^{\infty} \frac{1}{2^{n}}|z_{n}-y_{n}|.
\end{align}
$$
Thus, $d$ respects the triangle inequality. 

Suppose $\{ \overline{x}_{n} \}\to \{ y_{n} \}$. Let $m'\in \mathbb{N}$. For every $\epsilon> 0$, there exists $N$ such that for all $n> N$, 
$$
\begin{align}
\sum_{m=1}^{\infty} \frac{1}{2^{m}}|\overline{x}_{m, n}-y_{m}|<\frac{\epsilon}{2^{m'}}.
\end{align}
$$
In particular, $|\overline{x}_{m', n}-y_{m'}|<\epsilon$ for each $n$. Thus, $\{ \overline{x}_{m', n} \}_{n=1}^{\infty}\to y_{m'}$. 

Conversely, suppose $\{ \overline{x}_{m, n} \}_{n=1}^{\infty}\to y_{m}$ for each $m$. Let $\epsilon> 0$. Choose $k$ such that 
$$
r:=\sum_{m=k+1}^{\infty} \frac{1}{2^{m}}< \frac{\epsilon}{2}.
$$
Let $N$ be such that for all $n> N$, $|\overline{x}_{m, n}-y_{m}|<\epsilon/2$ for $m\in \{ 1, \dots, k \}$. Now, for $n> N$,
$$
\begin{align}
\sum_{m=1}^{\infty} \frac{1}{2^{m}}|\overline{x}_{m, n}-y_{m}| & \leq\sum_{m=1}^{k} \frac{1}{2^{m}}|\overline{x}_{m, n}-y_{m}|+ r \\
 & \leq \frac{\epsilon}{2}(1-r)+r \\
 & \leq\frac{\epsilon}{2}(1-r)+\frac{\epsilon}{2} \\
 & \leq\epsilon .
\end{align}
$$
Thus, $\{ \overline{x}_{n} \}\to \{ y_{n} \}$.

Let
$$
U=\prod_{n=1}^{\infty} U_{n},
$$

^cdf3ef

where $U_{n}\subseteq[0, 1]$ are open in $[0, 1]$ and all are equal to $[0, 1]$ except finitely many, say $U_{n_{1}}, \dots, U_{n_{k}}$. Let $r_{n_{1}}, \dots, r_{n_{k}}$ be such that $B_{r_{n_{i}}}(x_{n_{i}})\subseteq U_{n_{i}}$ for each $i\in \{ 1, \dots, k \}$. Choose $\epsilon> 0$ such that $\epsilon<\min\{ r_{n_{1}}/2^{n_{1}}, \dots, r_{n_{k}}/2^{n_{k}} \}$. Then, $B_{\epsilon}(\{ x_{n} \})\subseteq U$, so $U$ is open in $X$.

Next, let $B_{r}(\{ x_{n} \})$ be an open ball in $X$. Let $k_{1}$ be such that $r 2^{k_{1}}> 1$. Let $k_{2}$ be such that $\sum_{n=k_{2}}^{\infty}1/2^{n}< r/2$. Let $k=\max\{ k_{1}, k_{2} \}$. Define
$$
\begin{align}
U=\left( \prod_{n=1}^{k-1} (x_{n}-r/2, x_{n}+r/2)\cap[0, 1] \right)\times \left( \prod_{n=k}^{\infty} [0, 1] \right) . 
\end{align}
$$
If $\{ y_{n} \}\in U$, 
$$
\begin{align}
d(\{ x_{n} \}, \{ y_{n} \}) & =\sum_{n=1}^{\infty} \frac{1}{2^{n}}|x_{n}-y_{n}| \\
	 & <\frac{r}{2}\sum_{n=1}^{k-1} \frac{1}{2^{n}}+\sum_{n=k}^{\infty} \frac{1}{2^{n}} \\
	 & < \frac{r}{2}+ \frac{r}{2} \\
	 & =r, 

\end{align}
$$
so $\{ y_{n} \}\in B_{r}(\{ x_{n} \})$, whence $U\subseteq B_{r}(\{ x_{n} \})$. It follows that any open set in $X$ can be written as a union of open sets of the form [[#^cdf3ef]]. 

Note that this is the [[Intro to Category Theory#^71ded8|product topology]] on $X$. 

---
# Problem 7

Suppose $A$ and $B$ are open. Consider $a+b\in A+B$, where $a\in A$ and $b\in B$. Since $A$ is open, there exists an open neighborhood $N\subseteq A$ of $a$. By definition, $N+b\subseteq A+b$. Since translation in $\mathbb{R}^{n}$ does not impact openness, $N+b$ is an open neighborhood of $a+b$ contained in $A+B$, from which it follows $A+B$ is open. Note that we only used the openness of $A$ in our argument. Therefore, if even one of $A$ or $B$ is open, $A+B$ is open.

Consider the lattices $L_{1}=\{ a\ | \ a\in \mathbb{Z} \}$ and $L_{2}=\{ a\sqrt{ 2 }\ | \ a\in \mathbb{Z} \}$ in $\mathbb{R}$. $L_{1}$ and $L_{2}$ are clearly closed. However, $L_{1}+L_{2}$ is dense in $\mathbb{R}$, and hence is not closed; Indeed, for $r\in \mathbb{R}$ and $\epsilon> 0$, the choice of $n$ such that $(\sqrt{ 2 }-1)^{n}< 2\epsilon$ allows us to choose $k$ such that $r-\epsilon< k(\sqrt{ 2 }-1)^{n}< r+\epsilon$. 

---
# Problem 8

Again, it is clear that $d$ is positive definite and symmetric.
$$
\left| \frac{1}{m}-\frac{1}{n} \right| \leq \left| \frac{1}{m}-\frac{1}{l} \right|+\left| \frac{1}{l}-\frac{1}{n} \right|. 
$$
The only limit point of $\mathbb{N}^{*}$ is $\infty$, since $d(\infty, n)=1/n$ can be arbitrarily small. For all $n\in \mathbb{N}$, $B_{r}(n)\cap \mathbb{N}^{*}=\{ n \}$, where $r=1/(n)-1/(n+1)$. Thus, the open sets in $\mathbb{N}^{*}$ are
1. all subsets of $\mathbb{N}$, and
2. sets of the form $\{ n\ | \ n\geq N \}\cup \{ \infty \}\cup S$, where $N\in \mathbb{N}$ and $S$ is any subset of $\mathbb{N}$.

Yes, $\mathbb{N}$ with respect to the restricted metric is a complete metric space since every Cauchy sequence must eventually become constant and hence must converge.

Since any function is continuous at the isolated points of its domain, we only need to check for continuity at $\infty$. If $f(\infty)=k\ne \infty$, $f$ must map a neighborhood of $\infty$ to $k$, that is, there must exist $N$ such that for all $n\geq N$, $f(n)=k$. If $f(\infty)=\infty$, for every $\epsilon> 0$, there exists $\delta> 0$ such that $d(n, \infty)<\delta \implies d(f(n), \infty)<\epsilon$, that is, for all $M\in \mathbb{N}$, there exists $N\in \mathbb{N}$ such that $f(n)> M$ for all $n> N$.

---
# Problem 9

Set $M=\int_{0}^{1} |g(x)| \, dx$. Suppose $I(f)=r$. Let $\epsilon> 0$. Set $\delta=\epsilon/M$. Then, if $\lVert f-h \rVert<\delta$, 
$$
\begin{align}
|I(f)-I(h)| & =\left| \int_{0}^{1} (f(x)-h(x))g(x) \, dx  \right|  \\
 & \leq \int_{0}^{1} \delta|g(x)| \, dx  \\
 & =\epsilon.
\end{align}
$$
---
# Problem 10

Suppose $h\in C[0, 1]$ is a limit point of $S_{x}:=\left\{  f\in C[0, 1]:\int_{0}^{x} f(t)g(t) \, dt\leq x  \right\}$. Let $M=\int_{0}^{x} g(t) \, dt$. Let $\epsilon> 0$. Let $f\in S_{x}$ be such that $\lVert f-h \rVert_{\infty}<\epsilon/M$. Then, 
$$
\begin{align}
\int_{0}^{x} h(t)g(t) \, dt  & =\int_{0}^{x} f(t)g(t) \, dt+\int_{0}^{x} (h(t)-f(t))g(t) \, dt \\
 & \leq\int_{0}^{x} f(t)g(t) \, dt+\int_{0}^{x} |h(t)-f(t)||g(t)| \, dt \\
 & \leq x+\epsilon.
\end{align}
$$
Since this holds for all $\epsilon> 0$, we obtain $\int_{0}^{x} h(t)g(t) \, dt\leq x$. Thus, $S_{x}$ contains all of its limit points, and is closed.

---
# Problem 11

$$
\begin{align}
x\in(A^{c})^{\circ} & \iff \exists B_{r}(x)\subseteq A^{c}, r> 0 \\
 & \iff x\not\in \overline{A} \\
 & \iff x\in(\overline{A})^{c}.
\end{align}
$$

