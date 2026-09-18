---
id: "532"
date: 2026-08-20
time: 15:33
tags:
  - Lecture
  - GANA1
desc: construction of the Caratheodory extension
---
Recall [[LEC GANA1 2#^9aa087]]. In this lecture, we will construct $\mathcal{M}$ and $\tilde{\mu}$. 

> [!Definition] Outer measure
> Let $\mu$ be a measure on a $\sigma$-algebra $\mathcal{A}$. Define $\mu^{\star}:P(\Omega)\to[0, \infty]$ by
> $$
> \mu^{\star}(E)=\inf_{A_{n}\in \mathcal{A},\, E\subseteq \bigcup_{n=1}^{\infty} A_{n}}\sum_{n=1}^{\infty}\mu(A_{n})
> $$
> for $E\subseteq \Omega$. 

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

> [!Definition]
> $\mathcal{M}:=\{ F\in P(\Omega):\mu^{\star}(E)=\mu^{\star}(E\cap F)+\mu^{\star }(E\cap F^{c}) \enspace \forall E\in P(\Omega) \}$. 

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


[!Proposition]
$\mathcal{M}$ is a $\sigma$-algebra.

[!Proof]-
Let $\{ \mathcal{A}_{n} \}_{n=1}^{\infty}$ be from $\mathcal{M}$. Since $\mathcal{M}$ is an algebra, we can assume these are disjoint. 

[!Corollary]
$\mu^{\star}$ is a measure on $\mathcal{M}$. 