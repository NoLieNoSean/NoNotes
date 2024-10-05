---
tags:
  - ANA1
---

In Abbot, two versions of the theorem are supplied:

>[!Theorem]
>If $A_{1}, A_{2},\dots A_{m}$ are each countable sets, then the union $A_{1}\cup A_{2}\cup\dots\cup A_{m}$ is countable.

>[!Theorem]
>If $A_{n}$ is a countable set for each $n\in \mathbb{N}$, then $\bigcup_{n=1}^{\infty}A_{n}$ is countable.

Only the second one is mentioned [[Finite, countable, and uncountable sets#Combining countable sets|here]]. 

The first theorem can be proved by induction, but that proof cannot be used for the second theorem, because induction does not apply for the infinite case.

The second theorem is proved by partitioning $\mathbb{N}$ into infinitely many countable subsets. This can be achieved like so
$$
\begin{aligned}
&\begin{array}{ccccccccc}1&&3&&6&&10&&15&\cdots\end{array} \\
&\begin{array}{ccccccc}2&&5&&9&&14&\cdots\end{array} \\
&\begin{array}{cccccc}4&&8&&13&\cdots\end{array} \\
&\begin{array}{ccc}7&&12&\cdots\end{array} \\
&\begin{array}{cc}11&\ldots\end{array} \\
&~\vdots
\end{aligned}
$$
where the $i$th row represents $C_{i}$, a part of $\mathbb{N}$. Clearly, all $C_{i}$ are countable and disjoint. Assume $A_{i}$ are disjoint (this not being the case can be easily remedied). Now, we define a bijection $f_{n}: C_{i}\to A_{i}$ (the existence of which is guaranteed by the definition of begin countable). Finally, we define a function $f:\mathbb{N}\to \bigcup_{n=1}^{\infty}A_{n}$ as
$$
f(n)=\begin{cases}f_1(n)&\mathrm{if~}n\in C_1\\f_2(n)&\mathrm{if~}n\in C_2\\\vdots&\end{cases}
$$
It is easy to show that $f$ is injective and surjective. Thus the result. 

Refer UA solutions, p2.


