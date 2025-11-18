---
id: "334"
date: 2025-10-28
time: 09:32
tags:
  - ALG3
  - Lecture
  - Processed
---
# Algebraic elements form a subextenion

Let $K/F$ be a field extension, and $\alpha, \beta\in K$ be algebraic over $F$. Are $\alpha+\beta$, $\alpha\beta$, and $\alpha/\beta$ algebraic over $F$?

> [!Proposition]
> Let $K/F$ be a field extension. Then the elements of $K$ algebraic over $F$ form a subextension of $K/F$.
> 
> > [!Proof]-
> > 
> > Let $\alpha, \beta\in K$ be algebraic over $F$. Then $F(\alpha, \beta)/F$ is a finite extension by [[LEC ALG3 16#^167dcc]]. It follows from [[LEC ALG3 16#^80680b]] and [[LEC ALG3 16#^ead96e]] that $F(\alpha+\beta)/F$ is a finite extension, which implies $\alpha+\beta$ is algebraic by [[LEC ALG3 16#^bacf07]]. Similarly for the difference, product and quotient of $\alpha$ and $\beta$.
> > 
> 

^21beb3

We can pose the same question for integral extensions.

> [!Remark]
> 
> Let $S\subseteq R$ be rings, and $\alpha, \beta\in R$ be [[Quadratic integer rings#^f5a41a|integral]] over $S$. Are $\alpha+\beta$ and $\alpha\beta$ integral over $S$?
> 
> We can try to answer this in the fashion of [[#^21beb3]]: Using [[Quadratic integer rings#^ee7415]], $S[\alpha]$ and $S[\beta]$ are finitely generated $S$-modules. Hence, $S[\alpha, \beta]$ is a finitely generated $S$-module (by taking pairwise products of generators). So, $\alpha+\beta$ is algebraic over $S$ iff $S[\alpha+\beta]$ is a finitely generated $S$-module. Since $S[\alpha+\beta]\subseteq S[\alpha, \beta]$, it would suffice to know the following: a submodule of a finitely generated $S$-module is also finitely generated[^1]. This statement holds if $S$ is [[Noetherian rings|Noetherian]], but fails if $S$ otherwise. 
> 
> However, the Noetherian hypothesis is not required; this statement is true for any $S$. Basically, one has to show that $r\in R$ is integral over $S$ iff $S[r]$ is contained in a finitely generated $S$-module; since $S[\alpha, \beta]$ is finitely generated, we would be done. See @conradIntegralRingExtensions Proposition 1.


---

> [!Definition]
> Let $L/F$. Let $K_{1}/F$ and $K_{2}/F$ be such that $K_{1}, K_{2}\subseteq L$. $K_{1}K_{2}$ denotes the smallest field containing $K_{1}$ and $K_{2}$.

> [!Example]
> 
> Let $p, q$ be prime numbers. Let $\eta_{p}$ and $\eta_{q}$ be roots of unity. $K_{1}=\mathbb{Q}(\eta_{p})$, $K_{2}=\mathbb{Q}(\eta_{q})$. Let $1=mp+nq$. Any field containing $K_{1}$ and $K_{2}$ would contain $e^{ 2\pi i/pq }=(e^{ 2\pi i /p})^{m}(e^{ 2\pi i/q })^{n}$, 
> so $\mathbb{Q}(\eta_{pq})\subseteq K_{1}K_{2}$. Since $\mathbb{Q}(\eta_{p})\subseteq\mathbb{Q}(\eta_{pq})$ and $\mathbb{Q}(\eta_{q})\subseteq \mathbb{Q}(\eta_{pq})$, we have $K_{1}K_{2}=\mathbb{Q}(\eta_{pq})$. 
> 

[^1]: This was taken for granted when working with field extensions; subspaces of finite dimensional vector spaces are finite dimensional
