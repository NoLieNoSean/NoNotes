---
id: "314"
date: 2025-10-15
time: 15:53
tags:
  - ANA2
  - Lecture
  - Processed
---
# Discontinuities of pointwise limit of continuous functions 

[[LEC ANA1 33#Sequences of functions|We have seen]] that the pointwise limit of continuous maps is not continuous; we will now characterize the set of discontinuities of such maps.

> [!Lemma]
> Let $X$ be a complete metric space. $f_{n}:X\to \mathbb{C}$ are continuous functions, and $f_{n}\to f$ pointwise. Given any ball $B\subseteq X$ and $\epsilon> 0$, there is another ball $B_{0}\subseteq B$ and $m\in \mathbb{N}$ such that $|f_{m}(x)-f(x)|<\epsilon$ for all $x\in B_{0}$.
> 
> > [!proof]-
> > $\overline{B}$ is complete. Define
> > $$
> > F_{n}:=\{ x\in \overline{B}:|f_{k}(x)-f_{l}(x)|\leq\epsilon \quad \forall k, l\geq n\}.
> > $$
> > $F_{n}$ is closed since[^1]
> > $$
> > F_{n}=\bigcap_{k, l\geq n}\{ x\in \overline{B}:|f_{k}(x)-f_{l}(x)|\leq\epsilon \}.
> > $$
> > Since $f_{n}\to f$ pointwise, we have 
> > $$
> > \bigcup_{n=1}^{\infty} F_{n}=\overline{B}.
> > $$
> > By [[LEC ANA2 8#^1a2743]], there exists $m$ such that $F_m$ is not nowhere dense, that is, $F_m$ has nonempty interior. Thus, there exists an open ball $B_{0}\subseteq F_m$ such that for $x\in B_{0}$, $|f_m(x)-f_{l}(x)|\leq \epsilon$ for all $l\geq n_{0}$. As $l\to \infty$, $|f_{m}(x)-f(x)|\leq\epsilon$, for all $x\in B_{0}$. 
> 

^e7be30

> [!Theorem]
> Let $X$ be a complete metric space and $f_{n}:X\to \mathbb{C}$ be continuous for all $n\in \mathbb{N}$ and $f_{n}\to f$ pointwise. Then, $D=\{ x\in X\ | \ f\text{ dicontinuous at }x \}$ is [[LEC ANA2 8#^5f5dd5|meagre]]. 
> 
> > [!Proof]-
> > Recall [[LEC CAL2 3, 4#^aca9e3]]. Define
> > $$
> > D_{n}:=\{ x\in X: o(f, x)\geq 1/n\}.
> > $$
> > By [[LEC CAL2 3, 4#^99db22]], $D_{n}$ is closed. By [[LEC CAL2 3, 4#^30212b]], $D=\bigcup_{n=1}^{\infty}D_{n}$. It suffices to show that each $D_{n}$ is nowhere dense. 
> > 
> > Fix $D_{n_{0}}$. FTSOC, suppose there exists an open ball $B\subseteq D_{n_{0}}$. Then, by [[#^e7be30]] there exists $B_{0}\subseteq B$ and $m\in \mathbb{N}$ such that 
> > $$
> > \begin{align}
> >  |f_{m}(x)-f(x)|< 1/3n_{0} &  & (\forall x\in B_{0}).
> > \end{align}
> > $$
> > Since $f_{m}$ is continuous, there exists another ball $B_{0}'\subseteq B_{0}$ such that
> > $$
> > \begin{align}
> > |f_{m}(y)-f_{m}(z)|< 1/3n_{0} &  & (\forall y, z\in B_{0}).
> > \end{align}
> > $$
> > For $y, z\in B_{0}'$, we have
> > $$
> > \begin{align}
> > |f(y)-f(z)| & \leq |f(y)-f_{m}(y)|+|f_{m}(y)-f_{m}(z)|+|f_{m}(z)-f(z)| \\
> >  & < 1/n_{0},
> > \end{align}
> > $$
> > a contradiction.
> > 
> 
> 

[^1]: Note that $|f_{k}-f_{l}|$ is a continuous function, and that $[-\epsilon, \epsilon]$ is closed.  

---
# Uniform boundedness theorem

> [!Theorem] Uniform boundedness theorem
> Let $X$ be a complete normed linear space. Let $\{ T_{i} \}_{i\in I}$ be a collection of bounded linear operators such that for each $x\in X$, there exists $M$ satisfying $\sup_{i\in I}\lvert T_{i}(x) \rvert\leq M$. Then, $\sup_{i\in I}\lVert T_{i} \rVert< \infty$.
> 
> > [!Proof]-
> > 
> > Let $F_{n}=\{ x\in X:\lvert T_{i}x \rvert\leq n\quad\forall i\in I \}$. As usual, each $F_{n}$ is closed, since[^2]
> > $$
> > F_{n}=\bigcap_{i\in I}\{ x\in X:|T_{i}x|\leq n \},
> > $$
> > and we have $\bigcup_{n=1}^{\infty}F_{n}=X$. By [[LEC ANA2 8#^1a2743]], there exists $F_{m}$ with non-empty interior. Let $B\subseteq F_{m}$ be a closed ball with center $v_{0}$ and radius $r$. If $|x|=1$, 
> > $$
> > \begin{align}
> > |T_{i}x|=\left| T_{i}\left( \frac{(v_{0}+rx)-v_{0}}{r} \right)  \right| =\left| \frac{T_{i}(v_{0}+rx)-T_{i}(v_{0}) }{r}\right| \leq \frac{2n}{r}  &  & (\forall T_{i})
> > \end{align}
> > $$
> > Thus, $\lVert T_{i} \rVert\leq2n/r$ for all $i$, and $\sup_{i\in I}\lVert T_{i} \rVert\leq 2n/r$.
> 

[^2]: Again, the map $x\mapsto |T_{i}x|$ is continuous by [[LEC CAL1 3#^b01b34]] and [[LEC CAL1 3#^67b79d]], and $[-n, n]$ is closed.

[!Corollary]
$T_{n}:X\to X$ $n\in \mathbb{N}$ such that for all $x\in X$, $\{ T_{n}(x) \}$ converges. Define $T(x)=\lim_{ n \to \infty }T_{n}(x)$. this is linear. Then $|T(x)|\leq M$ for all $x$ such that $|x|=1$. 

[!Example]
Let $\{ a_{n} \}$. If for all $\{ x_{n} \}\in \ell^{1}$, $\sum a_{n}x_{n}$ converges, then $\{ a_{n} \}\in \ell^{\infty}$. 

[!Example]
