---
tags: 
date: "2025-08-19"
time: "08:59"
---
[!Theorem]
Let $R$ be a commutative ring. The set of all nilpotent elements is an ideal in $R$.

[!Definition]
$\sqrt{ I }=\{ r\in R\ | \ x^{n}\in I \text{ for some }n\}$.


Properties:
- $\sqrt{ \sqrt{ I } }=\sqrt{ I }$
- $\sqrt{ I\cap J }=\sqrt{ I }\cap \sqrt{ J }$.
- If $I$ is prime, then $\sqrt{ I }=I$.

$\sqrt{ (0) }$, called the nil radical of $R$, is the ideal of nilpotent elements.

[!Theorem]
If $n=p_{1}^{a_{1}}\dots p_{k}^{a_{k}}$, then $\sqrt{ (\overline{0}) }=(\overline{p_{1}p_{2}\dots p_{n}})$. 

[!Proof]-
Showed that $\sqrt{ (p^{a}) }=(p)$:
$$
\begin{align}

\end{align}
$$
More generally, If $P\subset R$ is a prime ideal, then $\sqrt{ P^{n} }=P$ for all $n\in \mathbb{Z}$.

---


[!Exercise]
Let $R=\frac{k[x, y]}{(x^{2}y^{2})}$. Find $\sqrt{ (0) }$. 

Let $J=(x^{2}y^{2})$. Show that $J=(x^{2})\cap(y^{2})$. Then, $\sqrt{ (x^{2}y^{2}) }=\sqrt{ (x^{2}) }\cap \sqrt{ (y^{2}) }$. Show that $(x^{2})=(x)^{2}$. Thus, $\sqrt{ (x^{2}y^{2}) }=\sqrt{ (x) }\cap \sqrt{ (y) }$. Show that $(x)$ is prime in $k[x, y]$ by showing that $k[x, y]/(x)\cong k(y)$. 