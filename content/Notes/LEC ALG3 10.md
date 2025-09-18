---
tags: 
date: "2025-09-11"
time: "09:27"
---
[!Fact]
Let $k$ be a field. Then, $S=k[x_{1}, \dots, x_{n}]$ is a UFD. This follows from the fact that any regular local ring is a UFD. A Local ring $R$ is one which has a unique maximal ideal $\mathfrak{m}$. If a ring is regular local, then $\mathfrak{m}/\mathfrak{m}^{2}$ is a vector space over $R/\mathfrak{m}$. 

[!Exercise]
$\dim R[x]\leq 1+\dim R$. 

It follows that $\dim \mathbb{Z}[x]=2$. 

$\mathbb{C}[x]$ is a Euclidean domain. Define the degree of a power series to be the degree of the smallest non-zero term. 

[!Definition]
Let $R$ be a ring and $S$ be a subset of $R$. An element $d\in R$ is a gcd of $S$ if
1. $d\ | \ a$ for all $a\in S$, and
2. If $c\ | \ a$ for all $a\in S$, then $c\ | \ d$. 

[!Theorem]
Let $a_{1}, \dots, a_{n}\in R$. Let $S=\{ a_{1}, \dots, a_{n} \}$. Then,
$$
d\in R\text{ is gcd of }S \text{ such that }d=\sum_{i=1}^{n} r_{i}a_{i}\text{ for }r_{i}\in R\iff(d)=(a_{1})+(a_{1})+\dots+(a_{n})=(a_{1}, \dots, a_{n})
$$

[!Proof]-

Let $d=\gcd S$ such that $d=\sum_{i=1}^{n}r_{i}a_{i}$. Since $d\in(a_{1})+\dots+(a_{n})$, we have $(d)\subseteq(a_{1})+\dots+(a_{n})$. Also, since $d\ | \ a_{i}$ for all $i$, $(a_{i})\subseteq(d)$ for all $i$, and the reverse inclusion holds.

Conversely, suppose $(d)=(a_{1})+\dots+(a_{n})$. $d=\sum_{i=1}^{n}r_{i}a_{i}$ and $d\ | \ a_{i}$ immediately follow.  show property $(2)$. Show that if there exists another gcd $d'$, $d$ and $d'$ are associates.

[!Example]
Let $R$ be a ring. Suppose $d$ is the gcd of $S=\{ a_{1}, \dots, a_{n} \}$. It is possible that $d$ may not be expressible as a $R$ linear combination of the elements of $S$. For example, $1$ is the gcd of $\{ x, y \}$ in $k[x, y]$, but $1\not\in \langle x, y \rangle$. 

[!Theorem]
Every PID is a UFD.


$\mathbb{Z}[x]/(2, x+1, x^{2}+5)$.

Show that $(x^{2}+5, 3)$ is not a prime ideal.


---

