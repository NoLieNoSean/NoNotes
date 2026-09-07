---
id: "524"
date: 2026-08-14
time: 15:42
tags:
  - STP
  - Lecture
---
Let $V$ be a real vector space of dimension $N$ with a bilinear form $\omega V\times V\to \mathbb{R}$ with
1. $\omega(u, v)=-\omega(v, u)$
2. If $\omega(u, v)=0$ for all $v$, then $u=0$. 

Suppose $N$ is even. Let $W$ be a $N/2$ dimensional vector space with a non-degenerate quadratic form. Consider $V=W\oplus W^{*}$. On $V$, define $\omega(X, \tilde{X}, (Y, \tilde{Y}))"=\tilde{Y}(X)-\tilde{X}(Y)$. This is clearly antisymmetric. Non-degeneracy can be proven by taking a basis and using the fact that $W$ has an orthonormal basis. 


---

[!Theroem]
Every symplectic vector space $V$ is even-dimensional. 

[!Proof]-
$\omega$ is a anti-symmetric and non-degenerate.  Let $(e_{1}, \dots, e_{N})$ be some basis for $V$. Then in this basis, $\omega$ is given by a matrix $A$. We must have $A^{T}=-A$, so $\det(A^{T})=(-1)^{N}\det A$. Thus, $N$ being odd would contradict non-degeneracy. 

---

Non-degenerate inner product $\implies$ $\exists$ ONB

[!Theorem] Darboux
Given a $2N$-dimensional $V$ with $\omega$, there exists a basis $\{ e_{1}, \dots, e_{N} \}$, $\{ e_{1}', \dots, e_{N}' \}$ such that $\omega(e_{i}, e_{j})=0$, $\omega (e_{i}', e_{j}')=0$, $\omega(e_{i}, e_{j}')=\delta_{ij}$ for all $1\leqslant i, j\leqslant N$. 

Note that $\omega^{2}=-I$. $\omega$ is called a *complex structure*. 

[!Proof]-

We induct on $N$. 

Let $V_{2}$ be a $2$-dimensional subspace. Given a vector $e$, there exists $e'$ such that $\omega(e, e')=1$. Consider $V_{2}$ as a subspace of $V$. Suppose $V$ has basis $e_{1}, e_{1}', \tilde{e}_{3}, \dots, \tilde{e}_{2N}$. Consider the symplectic complement $V_{2}^{\omega}$ of $V_{2}$ inside of $V$:
$$
V_{2}^{\omega}=\{ v\in V :\omega(v, u)=0\text{ for all }u\in V_{2}\}.
$$
Show that $V=V_{2}\oplus V_{2}^{\omega}$ - this only uses the fact that $\omega$ is non-degenerate. 

---


[!Example]
Consider $\mathbb{R}^{6}=(\vec{q}, \vec{p})$ with yada yada

---

Let $G$ be the set of all matrices which preserve $\omega$, that is, for all $g\in G$, $g\omega g^{T}=\omega$. $G$ is a group, denoted $SP(2N, \mathbb{R})$. The group of linear canonical transformations on $2N$-dimensional phase space is $SP(2N, \mathbb{R})$. 

---

[!]



