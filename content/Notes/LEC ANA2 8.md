---
tags:
  - ANA2
  - Lecture
  - Processed
date: 2025-09-19
time: 15:35
id: "168"
---
Reviewed [[LEC ANA1 21#^8a68b8]]. 

---

# Examples for The Arzelà–Ascoli Theorem

> [!Example]
> Let $k:[0, 1]\times[0, 1]\to \mathbb{R}$ be continuous. Define $T_{k}:C[0, 1]\to C[0, 1]$ by
> $$
> (T_{k}f)(x)=\int_{0}^{1} k(x, y)f(y) \, dy.
> $$
> We need to verify the continuity of $T_{k}f$ to justify the codomain in the definition. Let $k_{x}(y):=k(x, y)$. If $\{ x_{n} \}\to x$, the sequence of functions $\{ k_{x_{n}} \}$ must converge to $k_{x}$ pointwise due to the continuity of $k$. Also, by the extreme value theorem, $k\leq M$ on $[0, 1]\times[0, 1]$ for some $M> 0$, so each $k_{x_{n}}$ is bounded by the integrable constant function $M$ on $[0, 1]$. By the [[LEC PROB 10#^f84359|dominated convergence theorem]], 
> $$
> \begin{align}
> \lim_{ n \to \infty } (T_{k}f)(x_{n}) & =\lim_{ n \to \infty } \int_{0}^{1} k(x_{n}, y)f(y) \, dy \\
>   & =\int_{0}^{1} \lim_{ n \to \infty } k(x_{n}, y)f(y) \, dy \\
>  & =\int_{0}^{1} k(x, y)f(y) \, dy  \\
>  & =(T_{k}f)(x).
> \end{align}
> $$
> So, $T_{k}f$ is continuous for every $f$ [^1].
> 
> Consider the collection
> $$
> \mathcal{F}=\overline{\{ T_{k}f:\lVert f \rVert _{\infty}\leq 1 \}}\subseteq C[0, 1].
> $$
> 
> ^d4f319
> 
> $\mathcal{F}$ is closed, clearly. $\mathcal{F}$ is also bounded [^2]:
> $$
> \begin{align}
>  & \left| (T_{k}f)(x) \right| \leq \int_{0}^{1} \left| k(x, y) \right| \left| f(y) \right|  \, dy\leq \lVert k \rVert _{\infty}\lVert f \rVert _{\infty} \quad \forall x \\
>  & \implies \lVert T_{k}f \rVert _{\infty}\leq \lVert f \rVert _{\infty}\lVert k \rVert _{\infty}.
> \end{align}
> $$
> 
> ^133df6
> 
> If $\lVert f \rVert_{\infty}\leq 1$, then $\lVert T_{k}f \rVert\leq \lVert k \rVert_{\infty}$. Thus, $\mathcal{F}$ is bounded in $C[0, 1]$. 
> 
> We're equicontinuity away from applying the Arzelà–Ascoli Theorem. Let $\epsilon> 0$ and $T_{k}f\in \mathcal{F}$. Choose $\delta$ by the uniform continuity of $k$. If $|x-x'|<\delta$,
> $$
> \begin{align}
> \lvert T_{k}f(x)-T_{k}f(x') \rvert  & \leq \int_{0}^{1} \left| k(x, y)-k(x', y) \right|  \, dy \\
>  & \leq \int_{0}^{1} \epsilon \, dy  \\
>  & = \epsilon.
> \end{align}
> $$
> We also have to consider functions that are in $\mathcal{F}$ by virtue of us taking the closure in [[#^d4f319]]. Let $F\in \mathcal{F}$ be such a function. Then, for $\epsilon> 0$, there exists $f$ with $\lVert f \rVert\leq 1$ such that $\lVert T_{k}f-F \rVert<\epsilon$. Then, for $|x-x'|<\delta$,
> $$
> \begin{align}
> |F(x)-F(x')| & \leq |F(x)-T_{k}f(x)|+|T_{k}f(x)-T_{k}f(x')|+|T_{k}f(x')-F(x')| \\
>  & \leq 3\epsilon.
> \end{align}
> $$
> so $\mathcal{F}$ is a equicontinuous family. By [[LEC ANA2 7#^d4059b|Arzelà–Ascoli]], $\mathcal{F}$ is compact.
> 

[^1]: Alternatively, you could observe that the convergence $\{ k_{x_{n}} \}\to k_{x}$ is actually uniform, and use [[LEC ANA1 33#^9132bb]] to conclude that $T_{k}f$ is continuous.
[^2]: Incidentally, since $T_{k}$ is linear, [[#^133df6]] implies $\lVert T_{k}f-T_{k}g \rVert_{\infty} =\lVert T_{k}(f-g) \rVert _{\infty} \\\leq \lVert f-g \rVert _{\infty}\lVert k \rVert _{\infty}$. So, $T_{k}$ is actually uniformly continuous!

---
# Consequences of completeness

Reviewed [[LEC CAL1 10#The Banach contraction principle]]. The conclusion holds even if $T^{k}$ is a contraction for some $k$.

> [!Proposition]
> Let $X$ be a complete metric space. Suppose $T^{k}$ is a contraction. Then $T$ has a unique fixed point.
> 
> > [!Proof]-
> > $T^{k}$ must have a unique fixed point, say $x$.
> > $$
> > \begin{align}
> > d(x, Tx) & =d(T^{k}x, T(T^{k}x)) \\
> >  & =d(T^{k}x, T^{k}(Tx)) \\
> >   & \leq cd(x, Tx).
> > \end{align}
> > $$
> > Since $c< 1$ $d(x, Tx)=0$, so $x=Tx$. It is clear that $T$ cannot have any other fixed points, since a fixed point of $T$ is also a fixed point of $T^{k}$.
> 

> [!Proposition]
> Suppose $X$ is compact. $T:X\to X$ such that $d(Tx_{1}, Tx_{2})< d(x_{1}, x_{2})$ for all $x_{1}\ne x_{2}$. Then there exists a unique fixed point.
> 
> > [!proof]-
> > $x\mapsto d(x, Tx)$ is a continuous function:
> > $$
> > \begin{align}
> > d(x, Tx) & \leq d(x, y)+d(y, Ty)+d(Ty, Tx) \\
> >  d(x, Tx)-d(y, Ty) & \leq 2d(x, y).
> > \end{align}
> > $$
> > Thus there exists $x_{0}\in X$ such that $d(x_{0}, Tx_{0})=\inf_{x\in X} d(x, Tx)$. Let $y=Tx_{0}$. Then $d(y, Ty)< d(x_{0}, Tx_{0})$. Thus, $x_{0}=Tx_{0}$. 
> 

> [!Proposition]
> Let $V\subseteq B(S)$ be a closed NLS containing all constant functions of $B(S)$. Let $T:V\to V$ (need not be linear) satisfy:
> 1. $T(f)\leq T(g)$ if $f\leq g$ (these are pointwise comparisons).
> 2. There exists $0<\beta< 1$ such that for all $f\in V$ and constant functions $c$, $T(f+c)\leq(Tf)+\beta c$.
> 
> Then $T$ has a unique fixed point.
> 
> > [!Proof]-
> > 
> > It suffices to show $T$ is a contraction with $\beta$. Fix $f, g\in V$. Let $c=\lVert f-g \rVert_{\infty}$. Then, 
> > $$
> > \begin{align}
> > f\leq g+c \\
> > g\leq f+c
> > \end{align}
> > $$
> > So, 
> > $$
> > \begin{align}
> >  (Tf) & \leq T(g+c) \\
> >  & \leq(Tg)+\beta c \\
> >  \\
> >   Tf-Tg & \leq\beta c =\beta \lVert f-g \rVert _{\infty}.
> > \end{align}
> > $$
> > Similarly, $Tg-Tf\leq\beta \lVert f-g \rVert_{\infty}$. So, $\lVert Tf-Tg \rVert_{\infty}\leq\beta \lVert f-g \rVert_{\infty}$, and we're done.
> 

---
# Baire Category theorem

> [!Definition]
> $X$ is a metric space. $S\subseteq X$ is **nowhere dense** if $(\overline{S})^{\circ}=\emptyset$.

> [!Definition]
> $F\subseteq X$ is said to be **meagre** or of **category I** if $F$ is contained in a countable union of closed nowhere dense sets. If $F\subseteq X$ is not of category I, it is said to be of **category II**.
> 

^5f5dd5

> [!Note]
> There are two definitions of a meagre set: the one given above, and this: $F\subseteq X$ is meagre if $F$ is equal to a countable union of nowhere dense sets. These are equivalent; the one given above is more convenient to work with because closed sets are easier to manipulate in proofs.

> [!Example]
> 1. Note that "meagre/Category I" is a property relative to the ambient topological space. $\mathbb{Z}$ is of first category in $\mathbb{R}$, but $\mathbb{Z}$ is not of first category in $\mathbb{Z}$, because nowhere dense sets do not exist in $\mathbb{Z}$ when it is regarded as the whole space. When we say a space is of category x, we mean it is of category x in itself.
> 2. $\mathbb{Q}$ is of first category in $\mathbb{R}$, and of first category in $\mathbb{Q}$. In fact, any countable metric space having no isolated points is of first category in itself.


> [!Theorem] Baire Category Theorem
> Let $X$ be a complete metric space. Let $\{ U_{n} \}_{n=1}^{\infty}$ be a collection of open and dense subsets of $X$. Then, $U=\bigcap_{n=1}^{\infty}U_{n}$ is dense in $X$.
> 
> > [!Proof]-
> > It suffices to show $B_{0}\cap U\ne \emptyset$ for any closed ball $B_{0}\subseteq X$ of radius $\delta$. Clearly, $B_{0}^{\circ}\cap U_{1}$ is open, and hence contains a closed ball $B_{1}$ of radius less than $\delta/2$. Iteratively, choose a closed ball  $B_{n}$ of radius $\delta/2^{n}$ such that $B_{n}\subseteq B_{n-1}^{\circ}\cap U_{n}$. $\{ B_{n} \}_{n=1}^{\infty}$ is a contracting sequence of nonempty closed subsets. Since $X$ is complete, $\bigcap_{n=1}^{\infty}B_{n}=\{ x \}$ for some $x\in X$. It follows that $x\in U$.

^44da7d
 
> [!Corollary]
> If $X$ is complete, then $X$ is of second category. In other words, a complete metric space cannot be expressed as a countable union of closed nowhere dense subsets.
> 
> > [!Proof]-
> > Let $\{ F_{n} \}_{n=1}^{\infty}$ be a collection of closed nowhere dense subsets of $X$. Then, $\{ F_{n}^{c} \}_{n=1}^{\infty}$ is a collection of open dense subsets of $X$. By [[#^44da7d]], $\left( \bigcup_{n=1}^{\infty}F_{n} \right)^{c}=\bigcap_{n=1}^{\infty}F_{n}^{c}$ is dense in $X$. Thus, $\bigcup_{n=1}^{\infty}F_{n}\ne X$.

^1a2743

> [!Exercise]
> 
> Show that there does not exist $f:\mathbb{R}\to\mathbb{R}$ that is only continuous on $\mathbb{Q}$.
> 
> Recall [Thomae's function](https://en.wikipedia.org/wiki/Thomae%27s_function) as an example of a function which is continuous only on the irrationals; something must go pear shaped when we try to achieve the same for the rationals. First, observe that the set of discontinuities $B$ of any function from $\mathbb{R}$ to $\mathbb{R}$ is a countable union of closed sets (aka an $F_{\sigma}$ set):
> $$
> B=\bigcup_{n=1}^{\infty} \{ x\in \mathbb{R}:o(f, x)\geq 1/n \};
> $$
> 
> see [[LEC CAL2 3, 4#^30212b]] and [[LEC CAL2 3, 4#^b75287]][^1]. Thus, if a function from $\mathbb{R}$ to $\mathbb{R}$ which is continuous only on $\mathbb{Q}$ existed, the irrationals would be a countable union of closed sets $\bigcup_{i=1}^{\infty}C_{i}$, but since the irrationals do not contain an interval, neither can any of the $C_{i}$. Therefore, each of the $C_{i}$ would be nowhere dense, and the irrationals would be a meagre set. It would follow that $\mathbb{R}$ is meagre, contradicting [[#^1a2743]].


[^1]: These theorems require $f$ to be bounded, but this can dealt with by extending the definitions to allow for infinite oscillation. 


[!Exercise]
For $f:[0, 1]\to \mathbb{R}$, define
$$
(D^{+}f)(a)=\limsup_{x\to a^{+}}\frac{f(x)-f(a)}{x-a}.
$$
Prove that for each $a\in[0, 1]$ the set $\{ f\in C[0, 1]:D^{+}f(a)=\infty \}$ is a dense $G_{\delta}$ subset. (A set is said to be $G_{\delta}$ if it is a countable intersection of open sets.)


I thought of considering the sets $S_{n}=\{ f\in C[0, 1]:D^{+}f(a)> n \}$ for $n\in \mathbb{N}$, but i do not think these are open.