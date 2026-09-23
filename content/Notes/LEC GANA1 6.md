---
id: "550"
date: 2026-09-04
time: 14:47
tags:
  - GANA1
  - Lecture
desc: integration of simple and nonnegative measurable functions, monotone convergence theorem, Fatou's lemma
P1: true
P2: true
---
> [!Definition]
> Let $(\Omega, \mathcal{F}, \mu)$ be a measure space. We say that a statement $\textsf{p}$ on elements of $\Omega$ is true *almost everywhere* if there exists $F\in \mathcal{F}$ such that $\mu(F)=0$ and for all $x\in F^{c}$, $\textsf{p}$ holds. 

> [!Definition]
> Let $(\Omega, \mathcal{F}, \mu)$ be a measure space, and $X$ be a metric space. Let $f_{n}, f:(\Omega, \mathcal{F})\to X$ be measurable functions. We say that
> 1. $f_{n}\to f$ **almost everywhere (a.e.)** if there exists $F\in \mathcal{F}$ with $\mu(F)=0$ such that $f_{n}\to f$ pointwise on $F^{c}$. 
> 2. $f_{n}\to f$ **almost uniformly** if for all $\epsilon> 0$, there exists $F_{\epsilon}\in \mathcal{F}$ with $\mu(F_{\epsilon})< \epsilon$ such that $f_{n}\to f$ uniformly on $F_{\epsilon}^{c}$. 
> 3. $f_{n}\to f$ **uniformly a.e.** if there exists $F\in \mathcal{F}$ with $\mu(F)=0$ such that $f_{n}\to f$ uniformly on $F^{c}$. 

> [!Remark]
> 1. $f_{n}\to f$ uniformly a.e. $\implies$ $f_{n}\to f$ almost uniformly $\implies$ $f_{n}\to f$ a.e..
> 2. $f_{n}\to f$ almost uniformly $\centernot\implies$ $f_{n}\to f$ uniformly a.e.: consider $\{ x^{n} \}$ on $[0, 1]$.

> [!Proposition]
> Let $(X, \mathcal{F}, \mu)$ be a measure space with $\mu$ *finite*. Let $f_{n}, f:(X, \mathcal{F})\to \mathbb{R}$. Then, $f_{n}\to f$ a.e. $\implies$ $f_{n}\to f$ almost uniformly.
> 
> > [!Proof]-
> > 
> > Define
> > $$
> > A^{n}_{k}:=\bigcup_{m=n}^{\infty}\{ x\in X:|f_{m}(x)-f(x)|\geqslant  1/k \} .
> > $$
> > $A^{n}_{k}\downarrow\limsup_{n}A^{n}_{k}=:A_{k}$. If $x\in A_{k}$, then $|f_{m}(x)-f(x)|\geqslant 1/k$ for infinitely many $m$, so $f_{m}(x)\not\to f(x)$, and $\mu(A_{k})=0$. 
> > 
> > Fix $\epsilon> 0$. Since $\mu(A^{n}_{k})\downarrow \mu(A_{k})=0$, for every $k\in \mathbb{N}$ there exists $n_{k}\in \mathbb{N}$ such that $\mu(A^{n_{k}}_{k})<\epsilon/2^{k}$. Define
> > $$
> > A_{\epsilon}=\bigcup_{k=1}^{\infty} A_{k}^{n_{k}}.
> > $$
> > Then, $\mu(A_{\epsilon})\leqslant \sum \mu(A^{n_{k}}_{k})=\epsilon$. 
> > 
> > Thus, for all $k\in \mathbb{N}$ there exists $n_{k}$ such that for all $m\geqslant n_{k}$, 
> > $$
> > |f_{m}(x)-f(x)|< 1/k \quad \forall x\in X \setminus A_{\epsilon}.
> > $$
> > Therefore, $f_{n}\to f$ uniformly on $A^{c}_{\epsilon}$. 
> > 
> 

---

# Integration of simple and nonnegative measurable functions

> [!Definition] Integral of simple function
> Let $f:(X, \mathcal{F})\to[0, \infty]$ be a simple function. Let
> $$
> f=\sum_{i=1}^{n} a_{i}1_{A_{i}},
> $$
> where $a_{i}\in \mathbb{R}$ and $A_{i}\cap A_{j}=\emptyset$ if $i\ne j$. Define
> $$
> \int_{X}f\,d\mu=\sum_{i=1}^{n} a_{i}\mu(A_{i})
> $$
> 

^391a08

> [!Proposition]
> Let $f, g$ be simple functions. 
> 1. [[LEC GANA1 6#^391a08]] is well defined. 
> 2. $\int (af+g)=a\int f+\int g$. 
> 3. If $f\geqslant 0$, then $\int f\geqslant 0$. If $f\geqslant g$, then $\int f\geqslant \int g$. 
> 
> > [!Proof]-
> > $(1)$ Suppose $f=\sum a_{i}1_{A_{i}}=\sum b_{i}1_{B_{j}}$. Then, we have
> > $$
> > f=\sum_{i, j}a_{i}1_{A_{i}\cap B_{j}}=\sum_{i, j}b_{j}1_{A_{i}\cap B_{j}}.
> > $$
> > It follows that 
> > $$
> > \sum_{i} a_{i}\mu(A_{i})= \sum_{i, j}a_{i}\mu(A_{i}\cap B_{j})=\sum_{i, j}b_{j}\mu(A_{i}\cap B_{j})=\sum_{j}b_{j}\mu(B_{j}).
> > $$
> > 
> > $(2)$ If $f=\sum_{i}a_{i}1_{A_{i}}$ and $g=\sum b_{j}1_{B_{j}}$, we can express both of these (and thus $af+g$) in the form $f=\sum_{i, j}a_{i}1_{A_{i}\cap B_{j}}$, $g=\sum_{i, j}b_{j}1_{A_{i}\cap B_{j}}$. The result follows. 
> > 
> > $(3)$ is clear. 
> 

> [!Proposition]
> Let $f:(X, \mathcal{F})\to[0, \infty]$ is measurable. Suppose $\{ f_{n} \}$, $\{ g_{n} \}$ are sequences of simple functions such that $f_{n}\uparrow f$ and $g_{n}\uparrow f$. Then
> $$
> \sup_{n}\int f_{n}=\sup_{n}\int g_{n}.
> $$
> 
> 
> > [!Proof]-
> > 
> > It suffices to prove 
> > $$
> > \sup _{n}\int f_{n}\geqslant  \alpha \int g_{n}
> > $$
> > for any $n\in \mathbb{N}$ and $\alpha\in(0, 1)$. 
> > 
> > Fix $\alpha\in(0, 1)$ and $N\in \mathbb{N}$. Define
> > $$
> > E_{n}=\{ x\in X:f_{n}(x)\geqslant  \alpha g_{N}(x) \}.
> > $$
> > Suppose $g_{N}=\sum_{i=1}^{k}a_{i}1_{A_{i}}$. Write
> > $$
> > \begin{align}
> > \int f_{n} & =\int f_{n}1_{E_{n}}+\int f_{n}1_{E_{n}^{c}} \\
> >  & \geqslant  \int f_{n}1_{E_{n}} \\
> >  & \geqslant  \alpha \int g_{N}1_{E_{n}} \\
> >  & =\alpha \sum_{i=1}^{k} a_{i}\mu(A_{i}\cap E_{n}).
> > \end{align}
> > $$
> > Since both $f_{n}(x)\uparrow f(x)$ and $g_{n}(x)\uparrow f(x)$, for every $x$, $f_{n}(x)\geqslant \alpha g_{N}(x)$ for sufficiently large $n$. Thus, $E_{n}\uparrow X$, so $(A_{i}\cap E_{n})\uparrow A_{i}$. It follows that $\mu(A_{i}\cap E_{n})\uparrow \mu(A_{i})$ for all $i=1, \dots, k$. Taking the supremum of both sides of the preceding inequality, we obtain
> > $$
> > \sup _{n}\int f_{n}\geqslant  \alpha \int g_{N}.
> > $$
> > 
> 

Thus, we can define

> [!Definition] Integral of nonnegative measurable function
> Let $f:(X, \mathcal{F})\to[0, \infty]$ be measurable, and $\{ f_{n} \}$ be a sequence of simple functions such that $f_{n}\uparrow f$. Define
> $$
> \int_{X}f\,d\mu=\sup_{n}\int f_{n}\,d\mu.
> $$
> 

^2c598a

> [!Proposition]
> Let $f, g$ be measurable functions. 
> 1. $\int (af+g)=a\int f+\int g$. 
> 2. If $f\leqslant g$, then $\int f\leqslant \int g$. 

> [!Lemma]
> Let $f:(X< \mathcal{F})\to[0, \infty]$ be measurable. Then, 
> $$
> \int f\,d\mu=\sup \left\{  \int_{X}s\,d\mu:s\text{ is simple and }s\leqslant  f  \right\}.
> $$
> 
> > [!Proof]-
> > 
> > Denote the supremum in the statement by $M$. It follows from [[#^2c598a]] that $\int f\leqslant M$. Furthermore, it is clear that if $s$ is a simple function with $s\leqslant f$, then $\int s\leqslant \int f$. Thus, we have $\int f\geqslant M$. 
> 

^fab189

> [!Theorem] Monotone convergence theorem
> Let $\{ f_{n} \}, f:(X, \mathcal{F})\to[0, \infty]$ be measurable, and suppose $f_{n}\uparrow f$ pointwise. Then, 
> $$
> \sup _{n}\int_{X}f_{n}=\int_{X} f.
> $$
> 
> 
> > [!Proof]-
> > 
> > It follows form [[#^fab189]] that $\sup_{n}\int f_{n}\leqslant \int f$. It remains to show the reverse inequality. It suffices to show that for any simple $s\leqslant f$, it holds that $\sup_{n}\int f_{n}\geqslant \int s$.  
> > 
> > Consider the bounded family $s\wedge f_{n}$. For each $n$, there exists simple $s_{n}$ such that
> > $$
> > s_{n}\leqslant  s\wedge f_{n}\leqslant  s_{n}+1/n.
> > $$
> > Define $t_{n}:=\max \{ s_{1}, \dots, s_{n} \}$. Because $s_{i}\leqslant f_{i}\leqslant f_{n}$, 
> > $$
> > t_{n}\leqslant  s\wedge f_{n}\leqslant t_{n}+1/n.
> > $$
> > Because $f_{n}\uparrow f$ and $s\leqslant f$, we have $s\wedge f_{n}\uparrow s$. So, $t_{n}\uparrow s$, whence $\int t_{n}\uparrow \int s$. Thus, 
> > $$
> > \begin{align}
> > t_{n} & \leqslant  f_{n} \\
> > \implies \int t_{n} & \leqslant  \int f_{n} \\
> >  \implies \sup _{n}\int t_{n} & \leqslant  \sup _{n}\int f_{n} \\
> >  \implies \int s & \leqslant  \sup _{n}\int f_{n}.
> > \end{align}
> > $$
> > 
> > 
> 

^de9d0c

> [!Theorem] Fatou's lemma
> Let $\{ f_{n} \}:(X, \mathcal{F})\to[0, \infty]$ be measurable positive real valued functions. Then
> $$
> \int\liminf_{n}f_{n}\leqslant \liminf_{n}\int f_{n}.
> $$
> 
> 
> 
> > [!Proof]-
> > 
> > Let $g_{n}:=\inf_{m\geqslant n}f_{m}$. We have $g_{n}\uparrow \liminf f_{n}$. By [[#^de9d0c|MCT]], $\int g_{n}\uparrow \int\liminf_{n} f_{n}$. On the other hand, 
> > $$
> > \begin{align}
> > \int g_{n} & \leqslant \int f_{m} & \forall m\geqslant  n  \\
> >  \implies \int g_{n} & \leqslant \inf _{m\geqslant  n}\int f_{m} \\
> >  \implies \sup _{n}\int g_{n} & \leqslant \sup _{n}\inf _{m\geqslant  n}\int f_{m} \\
> > \implies \int \liminf_{n}f_{n} & \leqslant  \liminf_{n}\int f_{n}.
> > \end{align}
> > $$
> > 
> > 