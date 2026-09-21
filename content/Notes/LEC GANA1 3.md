---
id: "532"
date: 2026-08-20
time: 15:33
tags:
  - Lecture
  - GANA1
desc: construction of the Caratheodory extension, the Borel measure
P1: true
P2: true
---
# Constructing the Caratheodory extension 

Recall [[LEC GANA1 2#^9aa087]]. In this lecture, we will construct $\mathcal{M}$ and $\tilde{\mu}$. 

> [!Definition] Outer measure
> Let $\mu$ be a measure on an algebra $\mathcal{A}$. Define $\mu^{\star}:P(\Omega)\to[0, \infty]$ by
> $$
> \mu^{\star}(E)=\inf_{A_{n}\in \mathcal{A},\, E\subseteq \bigcup_{n=1}^{\infty} A_{n}}\sum_{n=1}^{\infty}\mu(A_{n})
> $$
> for $E\subseteq \Omega$. 

^8560c6

> [!Proposition]
> 1. $\mu^{\star}|_{\mathcal{A}}=\mu$. 
> 2. $\mu^{\star}$ is countably subadditive. 
> 
> > [!Proof]-
> > 
> > $(1)$ Let $A\in \mathcal{A}$. On considering the sequence $A_{1}=A$ and $A_{n}=\emptyset$ for $n\geqslant 2$, we obtain $\mu^{\star}(A)\leqslant \mu(A)$. To prove the reverse inequality, consider $\{ A_{n} \}\subseteq \mathcal{A}$ such that $A\subseteq \bigcup_{n=1}^{\infty}A_{n}$. We have $A =\bigcup_{n=1}^{\infty} (A_{n}\cap A)$. By the countable subadditivity of $\mu$, 
> > $$
> > \begin{align}
> > \mu(A)\leqslant \sum_{n=1}^{\infty} \mu(A_{n}\cap A)\leqslant \sum_{n=1}^{\infty} \mu(A_{n}). 
> > \end{align}
> > $$
> > It follows from the definition of $\mu^{\star}$ that $\mu(A)\leqslant \mu^{\star}(A)$. 
> > 
> > $(2)$ Let $E=\bigcup_{n=1}^{\infty}E_{n}$, $E, E_{n}\in P(\Omega)$. Given $\epsilon> 0$, there exist $\{ A_{k}^{n} \}_{n, k=1}^{\infty}$ such that $E_{n}\subseteq \bigcup_{k=1}^{\infty}A^{n}_{k}$ and
> > $$
> > \mu^{\star}(E_{n})+\epsilon/2^{n}> \sum_{k=1}^{\infty} \mu(A^{n}_{k}).
> > $$
> > Summing over $n$, 
> > $$
> > \sum_{n=1}^{\infty} \mu^{\star}(E_{n})+\epsilon> \sum_{n, k=1}^{\infty} \mu(A^{n}_{k}).
> > $$
> > Note that $E\subseteq \bigcup_{n, k=1}^{\infty}A^{n}_{k}$. Since the above holds for all $\epsilon> 0$, we have $\sum_{n=1}^{\infty}\mu^{\star}(E_{n})\geqslant \mu^{\star}(E)$. 
> 

^7aee3f

> [!Definition]
> $\mathcal{M}:=\{ F\in P(\Omega):\mu^{\star}(E)=\mu^{\star}(E\cap F)+\mu^{\star }(E\cap F^{c}) \enspace \forall E\in P(\Omega) \}$. 

^3f00a0

> [!Proposition]
> $\mathcal{A}\subseteq \mathcal{M}$. 
> 
> > [!Proof]-
> > 
> > Let $A\in \mathcal{A}$. Let $E\in P(\Omega)$. By subadditivity of $\mu^{\star}$, $\mu^{\star}(E)\leqslant \mu^{\star}(E\cap A)+\mu^{\star}(E\cap A^{c})$. 
> > 
> > To prove the reverse inequality, let $\epsilon> 0$. Let $\{ A_{n} \}\subseteq \mathcal{A}$ be such that $E\subseteq \bigcup_{n=1}^{\infty}A_{n}$ and $\mu^{\star}(E)+\epsilon\geqslant \sum_{n=1}^{\infty}\mu(A_{n})$. Since $\mu$ is finitely additive on $\mathcal{A}$, and $E\cap A\subseteq \bigcup_{n=1}^{\infty}(A_{n}\cap A)$, $E\cap A^{c}\subseteq \bigcup_{n=1}^{\infty}(A_{n}\cap A^{c})$, we have
> > $$
> > \begin{align}
> > \mu^{\star}(E)+\epsilon  & \geqslant \sum_{n=1}^{\infty} \mu(A_{n}) \\
> >  & =\sum_{n=1}^{\infty} \mu(A_{n}\cap A)+\sum_{n=1}^{\infty} \mu(A_{n}\cap A^{c}) \\
> >  & \geqslant  \mu^{\star}(E\cap A)+\mu^{\star}(E\cap A^{c}).
> > \end{align}
> > $$
> > Since the above holds for all $\epsilon> 0$, $\mu^{\star}(E)\geqslant \mu^{\star}(E\cap A)+\mu^{\star}(E\cap A^{c})$ follows. 
> 

> [!Proposition]
> $\mathcal{M}$ is an algebra. 
> 
> > [!Proof]-
> > 
> > If $F\in \mathcal{M}$, it is clear that $F^{c}\in \mathcal{M}$. 
> > 
> > Suppose $F_{1}, F_{2}\in \mathcal{M}$. 
> > $$
> > \begin{align}
> > \mu^{\star}(E) & =\mu^{\star}(E\cap F_{1})+\mu^{\star}(E\cap F_{1}^{c}) \\
> >  & =\mu^{\star}(E\cap F_{1})+\mu^{\star}(E\cap F_{1}^{c}\cap F_{2})+\mu^{\star}(E\cap F_{1}^{c}\cap F_{2}^{c}).
> > \end{align}
> > $$
> > Since 
> > $$
> > \begin{align}
> > (E\cap F_{1})\cup(E\cap F_{1}^{c}\cap F_{2}) & =E\cap(F_{1}\cup(F_{1}^{c}\cap F_{2})) \\
> > 	 & =E\cap(F_{1}\cup F_{2}), 
> > \end{align}
> > $$
> > subadditivity of $\mu^{\star}$ gives
> > $$
> > \begin{align}
> > \mu^{\star}(E)\geqslant  \mu^{\star}(E\cap(F_{1}\cup F_{2}))+\mu^{\star}(E\cap(F_{1}\cup F_{2})^{c} ).
> > \end{align}
> > $$
> > The reverse inequality is a direct consequence of subadditivity. Thus, we have equality and $F_{1}\cup F_{2}\in \mathcal{M}$. 
> 

> [!Proposition]
> $\mu^{\star}$ is finitely additive on $\mathcal{M}$. 
> 
> > [!Proof]-
> > 
> > Let $F_{1}, F_{2}\in \mathcal{M}$ be such that $F_{1}\cap F_{2}=\emptyset$. Then,
> > $$
> > \begin{align}
> > \mu^{\star}(F_{1}\sqcup F_{2}) & =\mu^{\star}((F_{1}\sqcup F_{2})\cap F_{1})+\mu^{\star}((F_{1}\sqcup F_{2})\cap F_{1}^{c}) \\
> >  & =\mu^{\star}(F_{1})+\mu^{\star}(F_{2}).
> > \end{align}
> > $$
> > 
> 

^0229e6

> [!Proposition]
> $\mathcal{M}$ is a $\sigma$-algebra.
>   
> > [!Proof]-
> > 
> > Let $\{ A_{n} \}_{n=1}^{\infty}\subseteq \mathcal{M}$. Since $\mathcal{M}$ is an algebra, we assume these are disjoint. Let $S=\coprod_{n=1}^{\infty}A_{n}$, $S_{N}=\coprod_{n=1}^{N}A_{n}$. Let $E\in P(\Omega)$. 
> > 
> > We have
> > $$
> > \begin{align}
> > \mu^{\star}(E\cap S)+\mu^{\star}(E\cap S^{c}) & \leqslant \sum_{n=1}^{\infty} \mu^{\star}(E\cap A_{n})+\mu^{\star}(E\cap S^{c}) \\
> >  & \leqslant \limsup_{N}\left( \sum_{n=1}^{N}\mu^{\star}(E\cap A_{n})+\mu^{\star}(E\cap S_{N}^{c}) \right)  \\
> >  & =\limsup_{N}(\mu^{\star}(E)) \\
> >  & =\mu^{\star}(E).
> > \end{align}
> > $$
> > 
> > As usual, the reverse inequality follows from the subadditivity of $\mu^{\star}$. 
> 

^0ab5e7

> [!Corollary]
> $\mu^{\star}$ is a measure on $\mathcal{M}$. 
> 
> > [!Proof]-
> > 
> > From [[#^7aee3f]], [[#^0229e6]], and [[#^0ab5e7]], $\mu^{\star}$ is a finitely additive countably subadditive function on the $\sigma$-algebra $\mathcal{M}$. By [[LEC GANA1 2#^273f21]], $\mu^{\star}$ is a measure on $\mathcal{M}$. 
> 

---

# The Borel measure

Define
$$
\mathcal{A}=\left\{ \coprod_{k=1}^{N} [a_{k}, b_{k}):a_{k}, b_{k}\in \mathbb{R}\cup \{ -\infty, \infty \}, a_{k}< b_{k} \right\}.
$$
It can be shown that $\mathcal{A}$ is an algebra. Define $\lambda$ on $\mathcal{A}$ by
$$
\lambda \left(  \coprod_{k=1}^{N} [a_{k}, b_{k}) \right) =\sum_{k=1}^{N} (b_{k}-a_{k}).
$$
It can be shown that $\lambda$ is a measure on $\mathcal{A}$. Thus, by [[LEC GANA1 2#^9aa087]], $\lambda$ extends uniquely to a measure on $\sigma(\mathcal{A})$ (notice that $\lambda$ is $\sigma$-finite). Since this measure is just the restriction of the outer measure $\lambda^{\star}$ to $\sigma(\mathcal{A})$, we will just denote it by $\lambda^{\star}$. 

> [!Definition] Borel $\sigma$-algebra
> The **Borel $\sigma$-algebra** $\mathcal{B}(X)$ over a topological space $X$ is the $\sigma$-algebra generated by the open sets of $X$.

Note that $\sigma(\mathcal{A})=\mathcal{B}(\mathbb{R})$:
1. $\mathcal{A}\subseteq \mathcal{B}(\mathbb{R})$, so $\sigma(\mathcal{A})\subseteq \mathcal{B}(\mathbb{R})$. 
2. $\text{Op}(X)\subseteq\sigma(\mathcal{A})$ where $\text{Op}(X)$ is the family of all open sets of $X$, so $\mathcal{B}(\mathbb{R})\subseteq\sigma(\mathcal{A})$. 

We call $\lambda^{\star}$ the **Borel measure** on $\mathbb{R}$. 

> [!Example]
> 
> Recall that the [[LEC ANA2 15#^191119|Cantor set]] is an uncountable nowhere dense subset of $\mathbb{R}$; that is has Borel measure zero is clear from its construction. 
> 
> Here's an example of a nowhere dense set with nonzero measure. Let $\mathbb{Q}\cap[0, 1]=\{ r_{n}:n\in \mathbb{N} \}$ be an enumeration of the rationals in $[0, 1]$. Let
> $$
> A=\bigcup_{n=1}^{\infty} \left( r_{n}-\frac{\epsilon}{2^{n+1}}, r_{n}+\frac{\epsilon}{2^{n+1}} \right).
> $$
> $A$ is open, and by [[LEC GANA1 2#^f6c633]] and [[LEC GANA1 2#^267c6a]], $\lambda^{\star}(A)\leqslant \sum\epsilon/2^{n}=\epsilon$. So, $A^{c}\subseteq[0, 1]$ is closed and $\lambda^{\star}(A^{c})\geqslant 1-\epsilon$. It is clear by the construction that $\text{Int}(A^{c})=\emptyset$, so $A^{c}$ is nowhere dense in $[0, 1]$. 
