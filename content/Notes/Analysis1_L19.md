---
tags:
  - ANA1
  - Lecture
  - Processed
---
2024-09-27, Friday
1034

---
## Infinite limits and limits at infinity

Let $f:E\to Y$, $E\subset X$, $a$ is a limit point of $E$.
Let  $\lim_{ x \to a }f(x)=L$.

[[Analysis1_L10#Definition of limit of a function in metric spaces|Recall]] our definition of the limit of a function. Note that (when $X$  or $Y$ is the extended real set) it is not applicable when $a$ or $L$ are $\pm \infty$, since it considers open balls centered at $a$ and $L$. To get around this, we will define what neighborhoods of $\pm \infty$ are, and reformulate the definition of limits to only use neighborhoods.

Rudin, 4.32

>[!Definition]
>For any real $c$, the set of real numbers $x$ such that $x>c$ is called a *neighborhood of infinity* and is denoted by $(c, \infty)$. Ditto for $-\infty$.

Now, we can define limits as $x$ approaches $\infty$ and limits that are themselves $\infty$. Of the nine combinations, two examples are given:
- Let $Y=\mathbb{R}$. $\lim_{ x \to a }f(x)=\infty$ means for every neighborhood $(M, \infty)$ of $\infty$, there exists a neighborhood $V$ of $a$ such that $f(V\cap E\setminus \{ a \})\subset (M, \infty)$. 
- Let $X=\mathbb{R}$. $\lim_{ x \to -\infty }f(x)=L$ means for every neighborhood $U$ of $L$, there exists a neighborhood $V=(-\infty, N)$ of $-\infty$ such that $f((-\infty, N)\cap E)\subset U$. 

Thus, we can make the following general definition:

Rudin, 4.33

>[!Definition]
>Let $f:E\to Y$, $E\subset X$, $a$ is a limit point of $E$.
>$\lim_{ x \to a }f(x)=L$ means for any neighborhood $U$ of $L$, there exists a neighborhood $V$ of $a$ such that $f(V\cap E\setminus \{ a \})\subset U$.

$Y$ or $X$ can be $\mathbb{R}\cup \{ -\infty, \infty \}$ (with $E$ being $\mathbb{R}$, of course), and since we have the neighborhoods infinity defined, the definition works!

With this, we have formulated taking limits in the extended real number system in terms of neighborhoods. Note that our definitions now are completely bereft of $\epsilon$'s and $\delta$'s, i.e, they depend only on what the open sets are in the domain and codomain, and not on the actual value of a metric.

Rudin, 4.34

>[!Theorem]
>$f, g$ are defined on $E\subset R$. As $t\to x$, $f(t)\to A$ and $g(t)\to B$, where $x$, $A$, and $B$ are in the extended real number system. 
>Then, $A$ and $B$ are unique, $(f+g)(t)\to A+B$, $fg(t)\to AB$, and $(f/g)(t)\to A/B$, provided the RHS is defined.

This is basically stating that the [[Analysis1_L11#Uniqueness of limit of a function|uniqueness of a limit]] and the [[Analysis1_L11#Algebra of limits of functions|algebra of limits of functions]] continue to hold after our new definitions. It can be easily verified.

---
## Discontinuities

### One sided limits

Rudin, 4.25

>[!Definition]
>Let $(a, b)\subset \mathbb{R}$, and $a\le c<b$. 
>$f:(a, b)\to \mathbb{R}$.
>
>Then, $f(c+)=\lim_{ x \to c^{+} }f(x)=L$ means any of these:
>- For all $\epsilon>0$, there exists $\delta>0$ such that $0<x-c<\delta$ $\implies$ $|f(x)-L|<\epsilon$.
>- Use the general definition (4.33) with $E=[c, b)$.
>- For any sequence $( t_{n} )$ in $(c, b)$ such that $(t_{n})\to c$, is is true that $f(t_{n})\to L$. 
>
>Ditto for left handed limits.

We define one sided limits since they help us to study discontinuous and monotonic functions.
### Discontinuous functions

Rudin, 4.26

>[!Definition]
>If $f$ is not continuous at some $x$ in its domain, then we say that $f$ is *discontinuous* at $x$. 
>Suppose $f:(a, b)\to Y$ is discontinuous at $x\in(a, b)$.
>Two kinds of discontinuities exist.
>1. *First kind:* $f(x^{+})$ and $f(x^{-})$ both exist. They are either unequal (in which case the value of $f(x)$ does not matter), or they are equal to each other but unequal to $f(x)$.
>2. *Second kind:* not first kind.

---
## Monotonic functions

Rudin, 4.28

>[!Definition]
>$f:(a, b)\to \mathbb{R}$ is *monotone increasing* if for all $a<x_{1}<x_{2}<b$, $f(x_{2})\le f(x_{2})$. 

Rudin, 4.29

>[!Theorem]
>Let $f(a, b)\to \mathbb{R}$ be a monotone increasing function. Then,
>1.  The left hand limit and right hand limit exist at every point $x$ in $(a, b)$. Also,  $f(x^{-})=\sup \{ f(t)\ |\ a<t<x \}$ and $f(x^{+})=\inf\{ f(t)\ |\ x<t<b \}$. Also, $f(x^{-})\leq f(x)\leq f(x^{+})$. 
>2. $a<x<y<b$ $\implies$ $f(x^{+})\le f(y^{-})$. 

>**Proof of 1**
>Let $s$ be the supremum mentioned. Given $\epsilon>0$, find $t_{1}\in(a, x)$ such that $s-\epsilon<f(t_{1})\le s$. Take $\delta=x-t_{1}$. For all $t$ such that $t_{1}<t<x$($0<x-t<\delta$), $f(t_{1})\le f(t)\le s$. ❏
>
>**Proof of 2**
>Observe that $\inf\{ f(t)\ |\ x<t<b \}=\inf\{ f(t)\ |\ x<t<y \}$. Thus, $f(x^{+})$ and $f(y^{-})$ are the infimum and supremum of the same set. the result follows. ❏

Rudin, 4.30

>[!Theorem]
>If $f:(a, b)\to \mathbb{R}$ is monotonic and $E=\{ x\ |\ f\text{ is discontinuous at }x \}$, then
>1. each discontinuity is of the first kind, and
>2. $E$ is finite or countable.

>**Proof**
>(1) follows form the fact the the left and right limits exist at every point in the functions domain. For (2), the hypothesis tells us that for each $x\in E$,  $f(x^{-})<f(x^{+})$. Thus, with each element in $E$, we can associate a rational number $r(x)$ such that $f(x^{-})<r(x)<f(x^{+})$. Since $x_{1}<x_{2}$ implies $f(x_{1}^{+})\leq f(x_{2}^{-})$, we have $r_{1}\ne r_{2}$ if $x_{1}\ne x_{2}$. Thus, we have a bijection between $E$ and a subset of $\mathbb{Q}$, which we know is countable. ❏

See examples 4.27

