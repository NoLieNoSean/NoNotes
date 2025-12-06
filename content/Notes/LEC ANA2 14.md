---
id: "337"
date: 2025-10-29
time: 15:15
tags:
  - ANA2
  - Lecture
  - Processed
---
# Path connectedness

> [!Definition] Path connectedness
> Let $X$ be a metric space. Let $x, y\in X$. A **path** from $x$ to $y$ is a continuous function $\gamma:[0, 1]\to X$ such that $\gamma(0)=x$, $\gamma(1)=y$. If there exists a path between $x$ and $y$, the points are said to be **path connected**. $S\subseteq X$ is called path connected if every pair of points $x, y\in S$ are path connected. 

The relation induced by path connectedness is an equivalence relation.

> [!Proposition]
> Path connected $\implies$ connected.
> 
> > [!Proof]-
> > 
> > Suppose $X$ is path connected. FTSOC, suppose $X=A\sqcup B$, where $A$ and $B$ are nonempty and open in $X$. Let $a\in A$ and $b\in B$. Let $\gamma:[0, 1]\to X$ be a path from $a$ to $b$. $\gamma([0, 1])=(\gamma([0, 1])\cap A) \sqcup (\gamma([0, 1])\cap B)$ is a separation of $\gamma([0, 1])$, which is supposed to be a connected set by [[LEC ANA1 22#^26ad1a]].
> 

> [!Example]
> Let $S\subseteq \mathbb{R}^{n}$ be countable. Then, $\mathbb{R}^{n}\setminus S$ is path connected. 
> This follows from the fact that there are uncountably many disjoint paths between any two fixed points in $\mathbb{R}^{n}$; for instance, there are uncountably many circles passing through any two given points. 

> [!Example]
> Open balls in any NLS are path connected. Indeed, if $x, y\in B_{r}(x_{0})$, then for all $0\leqslant t\leqslant 1$, 
> $$
> \begin{align}
> \lVert (tx+(1-t)y)-x_{0} \rVert   & \leqslant \lVert t(x-x_{0}) \rVert +\lVert (1-t)(y-x_{0})  \rVert  \\
>  & \leqslant tr+(1-t)r \\
>  & =r,
> \end{align}
> $$
> so $tx+(1-t)y\in B_{r}(x_{0})$. It follows that $\gamma(t)=tx+(1-t)y$ is a path between $x$ and $y$.  

^40b7b9

> [!Proposition]
> Let $X$ be a NLS. If $U\subseteq X$ is open and connected, it is path connected.  
> 
> > [!Proof]-
> > Fix $x_{0}\in U$. Let $E=\{ x\in U:x, x_{0}\text{ are path connected} \}$. It suffices to prove $E$ is both open and closed in $U$.
> > 
> > Let $x\in E$. Since $U$ is open, there exists an open ball $B$ centered at $x$ contained in $U$; it follows from [[#^40b7b9]] that $B\subseteq E$. Therefore, $E$ is open. The same argument shows $E^{c}$ is open.
> 

> [!Example]
> Clearly, if $E$ is connected, any $F$ such that $E\subseteq F\subseteq \overline{E}$ is connected - just apply [[LEC ANA2 13#^440651]]. Here's an example where $E$ is path connected, $\overline{E}$ is path connected, and $F$ is connected (but not path connected!):
> $$
> \begin{align}
>  & K:=  \bigcup_{i=1}^{\infty} \left( \left\{  1/i \right\}\times[0, 1] \right), \\
>  & E:=K\cup([0, 1]\times \{ 0 \}), \\
>  & \overline{E}=E\cup(\{ 0 \}\times[0, 1]) ,\\
>  & F:=E\cup \{ (0, 1) \}.
> \end{align}
> $$
> Clearly, $E$ and $\overline{E}$ are path connected. Suppose $\gamma:[0, 1]\to F$ is a path from $(0, 1)$ to $(1, 0)$.  Let $t_{0}=\sup\gamma ^{-1}(\{ (0, 1) \})$. We claim that there exists $\epsilon> 0$ such that $\gamma((t_{0}, t_{0}+\epsilon))\subseteq K$. If such an $\epsilon$ did not exist, we can construct a sequence $\{ t_{n}\ \}\to t_{0}$ such that $t_{n}> t_{0}$ and $\pi_{y}(\gamma(t_{n}))\to 0$, yielding a contradiction. 
> 
> Since $(t_{0}, t_{0}+\epsilon)$ is connected, we must have $\gamma((t_{0}, t_{0}+\epsilon))\subseteq \{ 1/n_{0} \}\times[0, 1]$ for some $n_{0}\in \mathbb{N}$. For any $\{ t_{n} \}\to t_{0}$ such that $t_{n}> t_{0}$, we have $\pi_{x}(\gamma(t_{n}))=1/n_{0}\ne 0$, a contradiction. Thus, there does not exist a path from $(0, 1)$ to $(1, 0)$ in $F$.

^486748



