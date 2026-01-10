---
id: "373"
date: 2026-01-07
time: 11:41
tags:
  - ALG4
  - TOP
---
# Free modules

$R$ is a ring, $M$ is a module.

[!Definition]
A **generating set** of $M$ is a subset $X\subseteq M$ such that for all $y\in M$, there exist $r_{1}, \dots, r_{n}\in R$ and $x_{1}, \dots, x_{n}\in X$ such that $\sum_{i=1}^{n} r_{i}x_{i}=y$. 

If finite $X$ exists, $M$ is said to be finitely generated. 


[!Definition] Linear independence

[!Definition] Free module
$M$ is said to be free if it has a basis, i.e, $X\subseteq M$ which is generating and linearly independent.

[!Example]
For $R=\mathbb{Q}[x, y]$, $I=(x, y)$ is not a free $R$-module. 


[!Theorem]
Given any set $X$, there exists a free module $M$ with basis $X$. 

When $X$ is a singleton, $M=R$ has basis $\{ 1_{R} \}$ (in fact, any invertible $u\in R$ works). 

Here's another way: take a symbol $e_{1}$. Consider the set of formal symbols $N:=\{ re_{1}:r\in R \}$. Define $re_{1}+se_{1}:=(r+s)e_{1}$ and $s(re_{1}):=(sr)e_{1}$ (and the additive identity and anything else that doesn't follow). Then, $N$ with a free $R$-module with basis $\{ e_{1} \}$. 

Exercise: Show that the map $N\to R$ defined by $re_{1}\mapsto r$ is an $R$-linear isomorphism. Are there other isomorphisms? (Yes!)

For $X=\{ 1, \dots, n \}$, 
$$
M=\left\{ \begin{bmatrix}
r_{1} \\
r_{2} \\
\vdots \\
r_{n}
\end{bmatrix} :r_{1}, \dots, r_{n}\in R\right\}
$$
is free with the "standard basis". 

Or, you could take symbols $e_{1}, \dots, e_{n}$ and define the set formal symbols
$$
\{ r_{1}e_{1}+\dots+r_{n}e_{n}:r_{1}, \dots, r_{n}\in R \}
$$
and define an $R$-module structure on it. 

(Recasting the same using functions $X\to R$). For $X=\mathbb{N}$. For arbitrary $X$. 

[!Definition] Free module on $X$
$$
\left\{  \sum r_{x}e_{x}:r_{x}=0\text{ for all but finitely many }x\in X  \right\}
$$
[!Proposition]
Let $M$ be an $R$-module. THen there exists a free module $F$ and a surjective map $F\to M$. 

[!Proof]-

Let $F$ be the free module with basis $M$. Write $\{ e_{m}:m\in M \}$ for the basis. Define $\varphi:F\to M$ by $e_{m}\mapsto m$. 

[!Remark]
Universal property of free modules

[!Proposition]
Let $X\subseteq M$ be a generating set. Let $F$ be the free module with basis $X$. Then there exists an $R$-linear surjective map $F\to M$ defined by $\sum r_{x}e_{x}\mapsto \sum r_{x}x$. 


Coming up: Noetherian rings and modules. 

[!Remark]
Let $\pi:M\to F$ be an $R$-linear map with $F$ free 