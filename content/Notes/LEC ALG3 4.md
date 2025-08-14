---
tags:
  - ALG3
  - Lecture
date: 2025-08-14
time: 09:10
---

Defined polynomial and power series rings. Noted that if $R$ is a division ring, so is $R((x))$. 

[!Example] Ideals in $\mathbb{Z}[x]$
Let $\varphi:\mathbb{Z}\to \mathbb{Z}[x]$ be the natural injection. If $I$ is an ideal in $\mathbb{Z}[x]$, $\varphi ^{-1}(I)$ must be an ideal in $\mathbb{Z}$. Thus, $n\mathbb{Z}\subseteq I$ for some $n$.

[!Exercise] $R^{op}$
$R^{op}$ is $R$ as a set. Denote the elements of $R^{op}$ by $a^{op}$ where $a\in R$. Define multiplication by $a^{op}b^{op}=(ba)^{op}$. Check:
1. $R$ is a division ring $\iff$ $R^{op}$ is
2. $(R^{op})^{op}\cong R$.


#### Properties of ideals
Let $R$ be a commutative ring with $1$. Let $I, J$ be ideals of $R$.
1. $I+J=\{ i+j\ | \ i\in I, j\in J \}$. This is a subring of $R$.
2. $IJ=\{ i_{1}j_{1}+\dots+i_{n}j_{n}\ | \ i_{k}\in I, j_{k}\in J , n\geq 1\}$.

$IJ\subseteq I\cap J$. 

#### Generators of ideals
Let $I$ be an ideal. $X=\{ a_{i}\ | \ a_{i}\in I \}\subseteq I$ is said to generate $I$ if every element of $I$ can be written as a finite sum $r_{i_{1}}a_{i_{1}}+\dots+r_{i_{k}}a_{i_{k}}$, $r_{i}\in R$. 

If $I=(a_{1}, \dots, a_{n})$ and $J=(b_{1}, \dots, b_{k})$, then $I+J=(a_{1}, \dots, a_{n},b_{1}, \dots, b_{k})$. $IJ=(a_{i}b_{j}\ | \ 1\leq i\leq n, 1\leq j\leq k)$. 

3. $I(J_{1}+\dots+J_{k})=IJ_{1}+\dots+IJ_{k}$.
4. $(IJ)K=I(JK)$.
5. $I:J=\{ r\in R\ | \ rJ\subseteq I \}$.

[!Exercise]
$I=(x^{2}, xy)$, $J=(y)$. What is $I:J$?

[!Example]
Let $R=\mathbb{C}[x, y, z]$ or $\mathbb{R}[x, y, z]$ or $\mathbb{Q}[z, y, z]$. $I=(x^{3}-yz, y^{2}-xz, z^{2}-x^{2}y)$, $J=(x, y)$. Show that $I\cap J=(x^{3}-yz, y^{2}-xz)$.


---

# Prime and maximal ideals

[!Definition]
An ideal $P\subset R$ is prime if for any two ideals $I, J\in R$, 
$$
IJ\subseteq P\implies I\subseteq P\text{ or }J\subseteq P.
$$

[!Lemma]
Let $P$ be an ideal in $R$. If for all $a, b\in R$, $ab\in P\implies a\in P\text{ or }b\in P$, then $P$ is a prime ideal.

[!corollary]
Let $R$ be a commutative ring with $1$. Then $P$ is a prime ideal $\iff$ $R/P$ is an integral domain.