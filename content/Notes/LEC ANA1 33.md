---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-11-13
time: 15:33
---
![[Pasted image 20241118191126.png]]

# Sequences of functions

> [!Definition]
> Suppose $(f_{n})_{n=1}^{\infty}$ is a sequence of functions defined on a set $E$, and suppose that the sequence of numbers $(f_{n}(x))$ converges for every $x\in E$. We can then define a function $f$ by
> $$
> f(x)\equiv \lim_{ n \to \infty } f_{n}(x)\ \ \ \ \ (x\in E).
> $$
> Under these circumstances, we say that $(f_{n})$ *converges pointwise* (or simply converges) on $E$ to the *limit function* $f$. 

> [!Definition]
> Similarly, if $\sum f_{n}(x)$ converges for every $x\in E$, and if we define
> $$
> f(x)=\sum_{n=1}^{\infty}f_{n}(x)\ \ \ \ \ (x\in E),
> $$
> then $f$ is called the *sum* of the series $\sum f_{n}$. 

We want to determine whether important properties of functions such as continuity and differentiability are preserved under these limit operations. For example, if $(f_{n})\to f$ is a sequence of pointwise convergent functions, and every $f_{n}$ is continuous, is the limit function $f$ continuous? Several easy examples can be constructed with little thought to show that this is definitely not the case. For example, consider the sequence of functions $(f_{n})$ defined by $f_{n}=x^{n}$ on $[0, 1]$. Each $f_{n}$ is continuous. Now, consider the limit function, $f=\lim_{ n \to \infty }f_{n}$. For any $x\in[0, 1)$, $(f_{n}(x))$ converges to $0$. But at $x=1$, $(f_{n}(1))\to 1$. So, we get
$$
f=\lim_{ n \to \infty } f_{n}=\begin{cases}
0 & x\in[0, 1) \\
1 & x=1,
\end{cases}
$$
which is clearly discontinuous. So, pointwise convergence does not preserve properties such as continuity. However, a stronger form of convergence, called **uniform convergence**, does. Uniform limits of functions preserve [[#^8504b1|continuity]], uniform continuity, [[#^9132bb|integrability]], and - with additional hypothesis - [[#^94a1f8|differentiability]].

> [!Important] Remark
> To say $f$ is continuous at a limit point $x$ means 
> $$
> \lim_{ t \to x } f(t)=f(x).
> $$
> Hence, to ask whether the limit of a sequence of continuous functions is continuous is the same as to ask whether 
> $$
> \begin{align}
>  & \lim_{ t \to x } f(t)= \lim_{ n \to \infty } f_{n}(x) \\
>  & \lim_{ t \to x } (\lim_{ n \to \infty } f_{n}(t))= \lim_{ n \to \infty } (\lim_{ x \to t } f_{n}(t)) 
> \end{align}
> $$
> (We have used the definition of $f$ as the pointwise limit of $(f_{n})$ and the hypothesis that $f_{n}$ are continuous). So, we are essentially asking whether the order in which limit processes are carried out is immaterial. As noted before, this is not true for pointwise convergent functions, but is true for uniformly convergent functions.

---
# Uniform convergence

Recall our definition of [[LEC ANA1 20#Uniform continuity|uniform continuity]] and how it relates to vanilla continuity. Something similar will happen here. Notice that the definition of pointwise convergence can be restated like so:

> [!Definition]
> Let $f_{n}:E\to \mathbb{R}$. $(f_{n})$ is **pointwise convergent** if
> $$
> \forall x\in E \ \ \forall\epsilon>0\ \ \exists N\text{ such that }n>N\implies |f_{n}(x)-f(x)|<\epsilon.
> $$

Compare with the definition of uniform convergence:

> [!Definition]
> Let $f_{n}:E\to \mathbb{R}$. $(f_{n})$ is **uniformly convergent** if
> $$
>   \forall\epsilon>0\ \ \exists N\text{ such that }(\forall x\in E\text{ and }n>N )\implies |f_{n}(x)-f(x)|<\epsilon.
> $$

$(f_{n})$ converges uniformly if and only if 
$$
\lim_{ n \to \infty } \sup _{x\in E}|f_{n}(x)-f(x)|=0.
$$

$(f_{n})$ converging uniformly to $f$ is denoted by $(f_n) \rightrightarrows f$. (The parentheses denoting that $f_{n}$ are elements of a sequence may periodically be dropped.)

There exist parallel definitions for $\sum f_{n}\to f$ and $\sum f_{n}\rightrightarrows f$. 

## Another perspective on uniform convergence

Let $X$ be a metric space. Define
$$
B(X)\equiv \{ f:X\to \mathbb{R} \ |\ f(X) \text{ is a bounded set}\}.
$$
Define a norm on $B(X)$ by
$$
\lVert f \rVert =\sup _{x\in X}\ \lvert f(x) \rvert .
$$
This turns $B(X)$ into a [[LEC ALG1 21#Normed spaces|normed linear space]] over $\mathbb{R}$, since all the properties of the norm are satisfied by our definition:
1. $\lVert \alpha f \rVert=|\alpha|\lVert f \rVert$ for all $\alpha\in \mathbb{R}$ and $f\in B(X)$. This is easy to see, since if a function is scaled by $\alpha$, its maximum value is also scaled by $\alpha$.
2. $\lVert f \rVert\geq 0$ with $\lVert f \rVert=0$ if and only if $f=0$. 
3. $\lVert f+g \rVert\leq \lVert f \rVert+\lVert g \rVert$.

> [!Note]- Proof of the triangle inequality
> 
> $$
> \begin{align}
> L & \equiv \sup _{x\in X}\ |f(x)+g(x)| \\
> R & \equiv \sup _{x\in X}\ |f(x)|+ \sup _{x\in X}\ |g(x)|
> \end{align}
> $$
> From the triangle inequality for real numbers, we know that
> $$
> \begin{align}
> |f(x)+g(x)|\leq |f(x)|+|g(x)|\ \ \ \  \forall x\in X \\
> \end{align}
> $$
> We know that $|f(x)|+|g(x)|\leq \sup |f(x)|+ \sup |g(x)|=\lVert f \rVert+\lVert g \rVert$. This is true for all $x$. Thus, $\lVert f \rVert+\lVert g \rVert$ is an upper bound for $\lvert f(x)+g(x) \rvert$. Thus, we have
> $$
> \sup \lvert f(x)+g(x) \rvert \leq \lVert f \rVert + \lVert g \rVert .
> $$
> Note the order in which the suprema were taken in the above proof.

Therefore, we get a metric $d(f, g)=\lVert f-g \rVert$. 

> [!Claim]
> $f_{n}\rightrightarrows f$ $\iff$ $f_{n}\to f$ in $B(X)$, i.e, $\forall\epsilon>0$, $\exists N$ such that $n>N$ $\implies$ $\lVert f_{n}-f \rVert<\epsilon$.
> 
> > [!Proof]-
> > $$
> > \lVert f_{n}-f \rVert\leq\epsilon \iff \sup _{x\in X}\ |f_{n}(x)-f(x)|\leq\epsilon \iff |f_{n}(x)-f(x)|\leq\epsilon \ \ \forall x\in X
> > $$

> [!Info] Remark
> Consider $\mathscr{B}([0, 1])$. Let $\mathscr{C}([0, 1])$ be the set of all continuous functions on $[0, 1]$. Now, since continuous functions on compact sets are bounded, $\mathscr{C}([0, 1])\subset\mathscr{B}([0, 1])$. Since the limit of uniformly converging continuous functions is continuous the limit of every convergent sequence $(f_{n})$ in $\mathscr{C}([0, 1])$ is also in $\mathscr{C}([0, 1])$, i.e, $\mathscr{C}([0, 1])$ is a [[LEC ANA1 13#Epilogue|closed]] subset of $\mathscr{B}([0, 1])$!

## Results due to uniform convergence

1. Uniform limit of continuous functions is continuous.
2. Uniform limit of Riemann integrable functions is Riemann integrable, and the limit of the integrals is the integral of the limit.
3. Uniform limit of differentiable functions is differentiable provided that the sequence of derivatives also converge uniformly.

> [!Theorem] Rudin 7.12
> $f_{n}\rightrightarrows f$ and each $f_{n}$ continuous on $E$ $\implies$ $f$ is continuous on $E$.
> 
> > [!Proof]-
> > Let $x\in E$. We'll show continuity of $f$ at $x$. Let $\epsilon>0$. Pick $N$ such that $n\geq N$ $\implies$ $|f_{n}(y)-f(y)|<\epsilon$ for all $y\in E$. Let $\delta>0$ such that $d(x, t)<\delta \implies |f_{N}(t)-f_{N}(x)|<\epsilon$.  Now, if $d(x, t)<\delta$, we have
> > $$
> > \begin{align}
> > |f(x)-f(t)| & \leq |f(x)-f_{N}(x)|+|f_{N}(x)-f_{N}(t)|+|f_{N}(t)-f(t)| \\
> >  & < \epsilon+\epsilon+\epsilon
> > 
> > \end{align}
> > $$
> 

^8504b1

Denote by $C[0, 1]$ the set of continuous functions in $B[0, 1]$. Then, [[#^8504b1]] says that $C[0, 1]$ is a closed subset of $B[0, 1]$. 

> [!Theorem] Rudin 7.16
> $f_{n}\rightrightarrows f$ and each $f_{n}\in\mathscr{R}$ on $[a, b]$ $\implies$ $f\in\mathscr{R}$ on $[a, b]$ and
> $$
> \int_{a}^{b} f \, dx =\lim_{ n \to \infty } \int_{a}^{b} f_{n} \, dx .
> $$
> 
> > [!Proof]-
> > Let $\epsilon_{n}=\sup_{x\in[a, b]}|f(x)-f_{n}(x)|$. Since $f_{n}$ converges uniformly to $f$, $(\epsilon_{n})\to 0$. Now, 
> > $$
> > \begin{align}
> > f_{n}(x)-\epsilon_{n}\leq f(x)\leq f_{n}(x)+\epsilon_{n}
> > \end{align}
> > $$
> > Consider a partition $P$ of $[a, b]$. Then, the first inequality above gives us
> > $$
> > \begin{align}
> > L(P, f_{n}(x)-\epsilon_{n})\leq L(P, f(x)) \leq \underline{\int_{a}^{b}} f(t) \, dt.
> > \end{align}
> > $$
> > The above is true for every partition $P$. So, we can take the supremum or infimum on the left (doesn't matter which, both are equal):
> > $$
> > \int_{a}^{b} f_{n}(t)-\epsilon_{n} \, dt\leq \underline{\int_{a}^{b}} f(t) \, dt.
> > $$
> > Applying the same idea on the other side gives us
> > $$
> > \begin{align}
> > \int_{a}^{b} f_{n}(t) \, dt -\epsilon_{n}(b-a)\leq \underline{\int_{a}^{b}} f(t) \, dt\leq \overline{\int_{a}^{b}} f(t)\,dt\leq \int_{a}^{b} f_{n}(t) \, dt+\epsilon_{n}(b-a) 
> > \end{align}
> > $$
> > Thus, 
> > $$
> > \overline{\int_{a}^{b}} f(t)\, dt - \underline{\int_{a}^{b}} f(t)\, dt \leq 2\epsilon_{n}(b-a).
> > $$
> > Thus, $f$ is integrable on $[a, b]$.
> 

^9132bb

Denote by $\mathscr{R}[0, 1]$ the set of integrable functions in $B[0, 1]$. Then, [[#^9132bb]] says that $\mathscr{R}[0, 1]$ is a closed subset of $B[0, 1]$, and the integral function $f\mapsto \int_{a}^{b} f \, dx$ is a continuous map from $\mathscr{R}[0, 1]$ to $R$ (by [[LEC ANA1 11#^78c16d|the sequence criterion]]).

> [!Example] Term by term integration
> A uniformly convergent series of integrable functions $\sum f_{k}$ can be integrated term-by-term:
> $$
> \int_{a}^{b} \sum_{k=0}^{\infty} f_{k}(x) \, dx =\sum_{k=0}^{\infty} \int_{a}^{b} f_{k}(x) \, dx .
> $$
> 


> [!Theorem] Rudin 7.17
> Suppose
> - $f_{n}$ are differentiable on $[a, b]$,
> - $f_{n}'\rightrightarrows\text{ a function, say }g\text{ on }[a, b]$, and
> - there exists some $x_{0}\in[a, b]$ such that $f_{n}(x_{0})$ converges.
> 
> Then, $f_{n}\rightrightarrows\text{a function }f$ and $f'(x)=g(x)$ for all $x\in[a, b]$.

A cuter version with weaker hypothesis:

> [!Theorem] @pughRealMathematicalAnalysis2015 4.9
> Suppose
> 1. $f_{n}:[a, b]\to \mathbb{R}$ is differentiable for each $n$;
> 2. $f_{n}\rightrightarrows f$;
> 3. $f_{n}'\rightrightarrows g$ for some function $g$.
> 
> Then, $f$ is differentiable with $f'=g$

^94a1f8
## Criteria for uniform convergence

### The Cauchy Criterion

> [!Theorem]
> The sequence of functions $(f_{n})$ defined on $E$ converges uniformly on $E$ if and only if for every $\epsilon>0$ there exists an integer $N$ such that $m\geq N$, $n\geq N$, $x\in E$ implies 
> $$
> |f_{n}(x)-f_{m}(x)|\leq \epsilon.
> $$
> 
> > [!Proof]-
> > Let $N$ be such that $n>N$ implies $|f_{n}(x)-f(x)|<\epsilon$ for all $x\in E$. Thus, $\forall n, m > N$,
> > $$
> > \begin{align}
> > |f_{n}(x)-f_{m}(x)| & \leq|f_{n}(x)-f(x)|+|f(x)-f_{m}(x)| \\
> >  & \leq \epsilon + \epsilon \ \ 
> > \end{align}
> > $$
> > ---
> > Conversely, the [[Cauchy sequences#Proof of Cauchy $ implies$ convergent|Cauchy criterion]] for sequences of real numbers tells us that the sequence $(f_{n}(x))$ converges for every fixed $x$. Thus, $(f_{n})$ is pointwise convergent to some function $f$. We need to prove that this convergence is uniform. Choose $N$ such that $m, n\geq N$ implies $|f_{n}(x)-f_{m}(x)|\leq \epsilon$ for all $x\in E$. Now, keep $n$ and $x$ fixed, and consider the sequence obtained by incrementing $m$: $|f_{n}(x)-f_{m+1}(x)|, |f_{n}(x)-f_{m+2}(x)|, \dots$. All of these are less than $\epsilon$. Thus, their limit must also be less than $\epsilon$. So, we have
> > $$
> > |f_{n}(x)-f(x)|\leq \epsilon\ \ \ \  \forall n\geq N, \forall x\in E.
> > $$
> 
### The M-test

> [!Theorem]
> Suppose $(f_{n})$ is a sequence of functions defined on $E$, and suppose 
> $$
> |f_{n}(x)|\leq M_{n}\ \ \ \ (x\in E, n=1, 2, 3,\dots).
> $$
> Then, $\sum M_{n}$ converges $\implies$ $\sum f_{n}$ converges uniformly on $E$.
> 
> > [!Proof]-
> > If $\sum M_{n}$ converges, then, for arbitrary $\epsilon>0$, from the [[LEC ANA1 30#Preliminaries|Cauchy criterion for series]], 
> > $$
> > \left\lvert  \sum_{i=n}^{m} f_{i}(x)  \right\rvert \leq \sum_{i=n}^{m} M_{i}\leq \epsilon\ \ \ \ (x\in E),
> > $$
> > provided $m$ and $n$ are large enough. Uniform convergence follows from the Cauchy criterion for uniform convergence. Note the implicit use of the triangle inequality above.
> 
