---
tags:
  - ANA1
  - Lecture
---
2024-09-27, Friday
1034

---
## Variations on $\lim_{ x \to a }f(x)=L$

>[!Definition] General definition
>Let $f:E\to Y$, $E\subset X$, $a$ is a limit point of $E$.
>$\lim_{ x \to a }f(x)=L$ means for any neighborhood $U$ of $L$, there exists a neighborhood $V$ of $a$ such that $f(V\cap E\setminus \{ a \})\subset U$.

When $X=\mathbb{R}$, we wish to define what it means to take the limit as $x\to \infty$, and when $Y\subset \mathbb{R}$, we wish to define what it means for $L$ to be $\infty$. To do this, we must first define what neighborhoods of $\infty$ and $-\infty$ in $\mathbb{R}$ are.

Rudin, 4.32

>[!Definition]
>For any real $c$, the set of real numbers $x$ such that $x>c$ is called a neighborhood of infinity and is denoted by $(c, \infty)$. Ditto for $-\infty$.

Now, we can define limits as $x$ approaches $\infty$ and limits that are themselves $\infty$. Of the nine combinations, two examples are given:
- Let $Y=\mathbb{R}$. $\lim_{ x \to a }f(x)=\infty$ means for every neighborhood $(M, \infty)$ of $\infty$, there exists a neighborhood $V$ of $a$ such that $f(V\cap E\setminus \{ a \})\subset (M, \infty)$. 
- Let $X=\mathbb{R}$. $\lim_{ x \to -\infty }f(x)=L$ means for every neighborhood $U$ of $L$, there exists a neighborhood $V=(-\infty, N)$ of $-\infty$ such that $f((-\infty, N)\cap E)\subset U$. 

What this really says is that the notion of limit and the notion of continuity can be defined for any topological space. Continuity makes sense in such a situation, because open sets makes sense. 
 

Rudin, 4.34

>[!Definition]
>$f, g$ are defined on $E\subset R$. As $t\to x$, $f(t)\to A$ and $g(t)\to B$, where $x$, $A$, and $B$ are in the extended real number system. 
>Then, $A$ and $B$ are unique, and $(f+g)(t)\to A+B$, $fg(t)\to AB$, provided the RHS is defined.


---
## One sided limits

>[!Definition]
>Let $(a, b)\subset \mathbb{R}$, and $a\le c<b$. 
>$f:(a, b)\to \mathbb{R}$.
>
>Then, $f(c+)=\lim_{ x \to c^{+} }f(x)=L$ means any of these:
>- For all $\epsilon>0$, there exists $\delta>0$ such that $0<x-c<\delta$ $\implies$ $|f(x)-L|<\epsilon$.
>- Use the general definition with $E=[c, b)$.
>- For any sequence $\{ t_{n} \}$ in $(c, b)$ such that $t_{n}\to c$, is is true that $f(t_{n})\to L$. 

---

If, for $x\in$ domain($f$) is not continuous at $x$, then we say that $f$ is discontinuous at $x$. 

Suppose $f:(a, b)\to Y$ is discontinuous at $x\in(a, b)$.
Two kinds of discontinuities exist.
1. First kind: $f(x^{+})$ and $f(x^{-})$ both exist. They are either unequal (in which case the value of $f(x)$ does not matter), or they are equal to each other but unequal to $f(x)$.
2. Second kind: not first kind.

---

>[!Definition]
>$f:(a, b)\to \mathbb{R}$ is *monotonically increasing* if for all $a<x_{1}<x_{2}<b$, $f(x_{2})\le f(x_{2})$. 

4.29
Let $f(a, b)\to \mathbb{R}$ be a monotone increasing function.
1. Then, $f(x^{-})=\sup \{ f(t)\ |\ a<t<x \}$ and $f(x^{+})=\inf\{ f(t)\ |\ x<t<b \}$. Also, $f(x^{-})\leq f(x)\leq f(x^{+})$. 
2. $a<x<y<b$ $\implies$ $f(x^{+})\le f(y^{-})$. 

>**Proof of 1**
>Let $s$ be the supremum mentioned. Given $\epsilon>0$, find $t_{1}\in(a_{1}, x)$. Now, $s-\epsilon<f(t_{1})\le \sup \{ f(t)\ |\ a<t<x \}$. Take $\delta=x-t_{1}$. For all $t$, $f(t_{1})\le f(t)\le s$. ❏
>
>**Proof of 2**
>Observe that $\inf\{ f(t)\ |\ x<t<b \}=\inf\{ f(t)\ |\ x<t<y \}$. Thus, $f(x^{+})$ and $f(y^{-})$ are the infimum and supremum of the same set. the result follows. ❏


4.30
Claim: if $f:(a, b)\to \mathbb{R}$ is monotonic and $E=\{ x\ |\ f\text{ is discontinuous at }x \}$, then
- each discontinuity is of the first kind
- $E$ is finite or countable (because we have a injective function from $E$ to $\mathbb{Q}$ defined by $g(x)$= rational $r\in(f(x^{-}), f(x^{+}))$)

See examples 4.27

