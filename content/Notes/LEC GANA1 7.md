---
id: "559"
date: 2026-09-10
time: 15:31
tags:
  - GANA1
  - Lecture
P1: true
desc: MCT corollaries, DCT and corollaries, Lp spaces, convergence in measure
---
# MCT corollaries

We have the following immediate consequence of MCT, which allows us to swap $\sum$ and $\int$ for nonnegative measurable functions. 

> [!Corollary]
> Let $f_{n}, f:(X, \mathcal{F})\to[0, \infty]$ be measurable, and suppose $\sum_{i=1}^{n}f_{i}\uparrow f$ pointwise. Then, by the [[LEC GANA1 6#^de9d0c|monotone convergence theorem]], 
> $$
> \begin{align}
> \sup _{n}\int_{X}\sum_{i=1}^{n} f_{i}=\int_{X}f,
> \end{align}
> $$
> or, 
> $$
> \sum_{i=1}^{\infty} \int_{X}f_{i}=\int_{X}\sum_{i=1}^{\infty} f_{i}.
> $$
> 

^d5ec73


> [!Corollary]
> Let $f:(X, \mathcal{F})\to[0, \infty]$ be measurable. For all $A\in \mathcal{F}$,
> $$
> \gamma(A)=\int_{A}fd\mu=\int_{X}f 1_{A}d\mu.
> $$
> Then $\gamma$ is a measure. Countable additivity comes from [[#^d5ec73]]. 


---

# Integration of real valued measurable functions

We now extend [[LEC GANA1 6#^2c598a]] to measurable functions that are not nonnegative:

> [!Definition] Integral of a measurable real valued function
> Let $f:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable. Define
> $$
> \begin{align}
> f_{+}(x) & =\max\{ 0, f(x) \} \\
>  & =f 1_{\{ t:f(t)\geqslant  0 \}}.
> \end{align}
> $$
> Clearly, $f_{+}\geqslant 0$ and is measurable. Similarly, define $f_{-}=-f 1_{\{ t:f(t)< 0 \}}$. Then $f=f_{+}-f_{-}$, $f_{+}f_{-}=0$, and $|f|=f_{+}+f_{-}$ is nonnegative. 
> 
> We call $f$ **integrable** if $\int |f|< \infty$. This implies $\int f_{+}, \int f_{-}< \infty$, and we define
> $$
> \int_{\Omega}fd\,\mu:=\int_{\Omega}f_{+}\,d\mu-\int_{\Omega}f_{-}\,d\mu.
> $$
> 

^f29946

> [!Remark]
> Let $f, g:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be integrable functions. 
> 1. $\int(\alpha f+g)=\alpha \int f+\int g$. 
> 2. if $f\geqslant 0$, then $\int f\geqslant 0$. 
> 3. if $f\geqslant g$, then $\int f\geqslant \int g$. 

> [!Theorem] Dominated convergence theorem
> Let $f_{n}, f, g_{n}, g:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable functions such that 
> 1. $|f_{n}|\leqslant  g_{n}$ and $|f|\leqslant g$ pointwise for all $x\in \mathbb{R}$ and $n\in \mathbb{N}$,
> 2. $f_{n}\to f$ a.e.,
> 3. $g_{n}\to g$ a.e.,
> 4. $\int g_{n}< \infty$ and $\int g< \infty$, and 
> 5. $\int g_{n}\to \int g$. 
> 
> Then
> $$
> \lim_{ n \to \infty } \int f_{n}(x)\, d\mu=\int f(x)\,d\mu
> $$
> and
> $$
> \int |f_{n}-f|\,d\mu\to 0.
> $$
> 

^1795b3


> [!Corollary]
> Let $f_{n}, f, g:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable functions such that $|f_{n}|\leqslant g$ pointwise, $f_{n}\to f$ a.e., and $\int g< \infty$. Then, the conclusions of [[#^1795b3]] follow.

> [!Corollary]
> Let $\mu$ be a finite measure on $(\Omega, \mathcal{F})$. Let $f_{n}, f:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable functions such that $|f_{n}|\leqslant k$ pointwise for some $k> 0$, and $f_{n}\to f$ a.e. Then, the conclusions of [[#^1795b3]] follow. 


---

# $L^{p}$, $L^{\infty}$ spaces and convergence in measure

> [!Definition] $L^{p}$ spaces
> For a measure space $(\Omega, \mathcal{F}, \mu)$, define
> $$
> L^{1}(\Omega, \mathcal{F}, \mu)=\left\{  f:(\Omega, \mathcal{F})\to \mathbb{R}: f\text{ measurable},\int |f|< \infty  \right\}.
> $$
> We will write $L^{1}$ in place of $L^{1}(\Omega, \mathcal{F}, \mu)$ when the measure space is clear form context. $L^{1}$ is a vector space. 
> 
> For $f_{n}, f\subseteq L^{1}$, we say that **$f_{n}\to f$ in $L^{1}$** if $\int |f-f_{n}|\to 0$. 
> 
> We also have $L^{p}$ spaces for $0< p< \infty$:
> $$
> L^{p}(\Omega, \mathcal{F}, \mu)=\left\{  f:(\Omega, \mathcal{F})\to \mathbb{R}: f\text{ measurable},\int |f|^{p}< \infty  \right\}.
> $$
> 


> [!Example]
> 1. $1_{[n, \infty)}\to 0$ pointwise, but $\int 1_{[n, \infty]}=\infty$ for all $n$, and does not converge to $\int 0=0$. 
> 2. $n 1_{(0, 1/n)}\to 0$ pointwise, but $\int n 1_{(0, 1/n)}=1$ for all $n$, and does not converge to $0$.  



> [!Proposition]
> 1. If $f\geqslant 0$, then $\int f=0$ $\implies$ $f=0$ a.e..
> 2. Let $f$ be a nonnegative integrable function. Then, $\mu(\{ t:f(t)=\infty \})=0$. 
> 3. Let $f:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable and satisfy $\int_{A}f=0$ for all $A\in \mathcal{F}$. Then, $f=0$ a.e..

> [!Definition] Convergence in measure
> Let $f_{n}, f:(\Omega, \mathcal{f}, \mu)\to \mathbb{R}$ be measurable. We say that **$\{ f_{n} \}$ converges to $f$ in measure**, and write $f_{n}\xrightarrow{\mu}f$, if for all $\epsilon> 0$, 
> $$
> \mu(\{ t:|(f_{n}-f)(t)|\geqslant  \epsilon \})\to 0.
> $$
> 

For example, $1_{[n, \infty)}\to 0$ a.e., but $1_{[n, \infty)}\cancel{\xrightarrow{\mu}} 0$. 

> [!Proposition]
> 1. If $\mu$ is a finite measure on $(\Omega, \mathcal{F})$, then $f_{n}\to f$ a.e. $\implies$ $f_{n}\xrightarrow{\mu}f$. 
> 2. If $f_{n}\xrightarrow{\mu}f$, there exists a subsequence $\{ f_{n_{k}} \}$ such that $f_{n_{k}}\to f$ a.e..

> [!Definition] $L^{\infty}$ space
> For a measure space $(\Omega, \mathcal{F}, \mu)$, define
> $$
> L^{\infty}(X, \mathcal{F}, \mu)=\{ f:(\Omega, \mathcal{F})\to \mathbb{R} :f\text{ is measurable}, |f(t)|\leqslant  M< \infty \text{ a.e.}\}.
> $$
> Define
> $$
> \lVert f \rVert _{\infty}=\inf \{ k:|f(t)|\leqslant k\text{ a.e.} \}.
> $$
> For $f_{n}, f\in L^{\infty}$, we say that **$f_{n}\to f$ in $L^{\infty}$** if $\lVert f-f_{n} \rVert_{\infty}\to 0$. 

%% typo: vasanth writes $\leqslant$ instead of $>$ below %%

> [!Remark]
> Suppose $k_{n}\downarrow \lVert f \rVert_{\infty}$, and let $A_{n}=\{ t:|f(t)|> k_{n} \}$. Clearly, $\mu(A_{n})=0$ and $A_{n}\downarrow A$. Thus, $\mu(A_{n})\downarrow \mu(A)$, and $\mu(\{ t:|f(t)|> \lVert f \rVert_{\infty} \})=0$. 

^da0b0d

> [!Remark]
> Let $f_{n}, f\in L^{\infty}$, and $f_{n}\to f$ in $L^{\infty}$. Let
> $$
> \begin{align}
> A_{n} & =\{ t:|(f-f_{n})(t)|>  \lVert f-f_{n} \rVert _{\infty} \} \\
> A & =\{ t:|f(t)|> \lVert f \rVert _{\infty}  \}
> \end{align}
> $$
> By [[#^da0b0d]], $\mu(A_{n})=\mu(A)=0$. Let
> $$
> B=A\cup\left( \bigcup_{n=1}^{\infty} A_{n} \right).
> $$
> Note that $\mu(B)=0$ (monotone continuity!). On $B^{c}$, $f_{n}\to f$ *uniformly*: $|f_{n}(t)-f(t)|\leqslant \lVert f_{n}-f \rVert_{\infty}\to 0$ for all $t$. 


> [!Remark]
> Suppose $f_{n}\to f$ in $L^{p}$. Let $A^{\epsilon}_{n}=\{ t:|(f-f_{n})(t)|\geqslant \epsilon \}$. Since $\int |f_{n}-f|^{p}\geqslant \epsilon^{p}\mu(A^{\epsilon}_{n})$, we have $\mu(A_{n}^{\epsilon})\to 0$ for all $\epsilon> 0$. Thus, 
> $$
> f_{n}\xrightarrow{L^{p}}f\implies f_{n}\xrightarrow{\mu}f\quad\forall0< p< \infty.
> $$
> Similarly, if $f_{n}\to f$ in $L^{\infty}$, $\mu(A_{n}^{\epsilon})=0$ for all $n\geqslant N$, for some $N$ determined by $\epsilon$. Thus,  
> $$
> f_{n}\xrightarrow{L^{\infty}}f\implies f_{n}\xrightarrow{\mu}f.
> $$
> 

> [!Proposition]
> Let $f_{n}, f:(\Omega, \mathcal{F}, \mu)\to \mathbb{R}$ be measurable with $f_{n}, f\geqslant 0$, $\int f_{n}, \int f< \infty$, $\int f_{n}\to \int f$, and $f_{n}\to f$ a.e.. Then, 
> $$
> \int |f_{n}-f|\to 0.
> $$
> 

> [!Corollary]
> Let $f_{n}$, $f$ be density functions, i.e., $\int f_{n}=\int f=1$, and $f_{n}, f\geqslant 0$. Then, $f_{n}\to f$ a.e. $\implies$ $\int |f_{n}-f|\to 0$. 