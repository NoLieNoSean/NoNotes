---
id: "334"
date: 2025-10-28
time: 09:32
tags:
---
> [!Fact]
> Every submodule of a finitely generated noetherian module are finitely generated.

^743963

[!Question]
Let $R\subseteq S$ be Noetherian rings, and $\alpha, \beta\in S$ are algebraic over $R$. Suppose there exist $f(x), g(x)\in R[x]$ such that $f(\alpha)=0$, and $g(\alpha)=0$. Is $\alpha+\beta$ algebraic over $R$? Is $\alpha\beta$ algebraic over $R$?

Use the tower $R[\alpha][\beta]/R[\alpha]/R$ to conclude that $R[\alpha][\beta]$ is a finitely generated $R$ module. By [[#^743963]], $R[\alpha+\beta]\subseteq R[\alpha]{\beta}$ is finitely generated. Thus, $\alpha+\beta$ is algebraic over $R$. 

Same question for fields


---

> [!Definition]
> Let $L/F$. Let $K_{1}/F$ and $K_{2}/F$ be such that $K_{1}, K_{2}\subseteq L$. Let $K_{1}K_{2}$ denote the smallest field containing $K_{1}$ and $K_{2}$.


[!Example]
Let $\alpha_{1}, \dots, \alpha_{n}\in L$ be such that $K_{2}=F(\alpha_{1}, \dots, \alpha_{n})$. If $K_{1}\subseteq L$ is any field, then $K_{1}K_{2}=K_{1}(\alpha_{1}, \dots, \alpha_{n})$. 

[!Example]
Let $p, q$ be prime numbers. Let $\eta_{p}$ and $\eta_{q}$ be roots of unity. $K_{1}=\mathbb{Q}(\eta_{p})$, $K_{2}=\mathbb{Q}(\eta_{q})$. 

Show that $K_{1}K_{2}=\mathbb{Q}(\eta_{pq})$.

Let $1=mp+nq$. Then, 
$$
\begin{align}
e^{ 2\pi i/pq }=(e^{ 2\pi i /p})^{m}(e^{ 2\pi i/q })^{n}
\end{align}
$$
so $\supseteq$ is clear. $\subseteq$ is also clear.


[!Example]
Let $F=\mathbb{Q}$. Let $\alpha$ be a cube root of $2$ and $\omega$ be a cube root of unity. Let $\psi:\mathbb{Q}[\alpha]\to \mathbb{Q}[\alpha w]$ by $\alpha\mapsto\alpha \omega$. If $\alpha$ is a root of $f(x)$, then $\alpha \omega$ is also a root of $f(x)$.


[!Question]
Let $F$ be a field and $f(x)\in F[x]$. A field extension $K/F$ such that $K$ contains all roots of $f$ is called the splitting field of $F$. 

