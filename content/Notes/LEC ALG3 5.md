---
tags:
  - ALG3
  - Lecture
  - Processed
date: 2025-08-19
time: 08:59
---
# Radicals

> [!Proposition]
> Let $R$ be a commutative ring. The set of all nilpotent elements is an ideal in $R$.
> 
> > [!Proof]-
> > 
> > [[TUT ALG3 2#^8a30c9|This proof]] works verbatim with nilpotent polynomials replaced with nilpotent elements of $R$ to show that the set of nilpotent elements form an abelian group. The fact that they are closed under multiplication by $R$ is immediate.
> 

^041806

> [!Definition]
> 1. $\sqrt{ I }:=\{ r\in R\ | \ r^{n}\in I \text{ for some }n\}$. 
> 2. $\sqrt{ (0) }$, called the nilradical, is the ideal of nilpotent elements.
> 

^e9f650

If $R$ is commutative, by the same argument as [[#^041806]], $\sqrt{ I }$ is an ideal for all $I$. If $R$ is not commutative, $\sqrt{ I }$ is no longer an ideal, but a weaker condition holds:

> [!Proposition]
> $\sqrt{ I }$ consists of whole cosets of $I$.
> 
> > [!Proof]-
> > Let $r\in \sqrt{ I }$, that is, $r^{n}\in I$ for some $n$. Clearly, $(r+i)^{n}\in I$ for any $i\in I$, since all the terms in the binomial expansion that contain $i$ must be in $I$, and the only one that does not, $r^{n}$, is in $I$ by hypothesis.
> 

> [!Remark]
> If $I$ is an ideal in $R$ and $\pi:R\to R/I$ is the projection map, then $(\pi(\sqrt{ I }))=\sqrt{ (\overline{0}) }$.

> [!Proposition]
> 1. $\sqrt{ \sqrt{ I } }=\sqrt{ I }$.
> 2. $\sqrt{ I\cap J }=\sqrt{ I }\cap \sqrt{ J }$.
> 3. If $I$ is prime, then $\sqrt{ I }=I$.

> [!Lemma]
> If $P\subset R$ is a prime ideal, then $\sqrt{ P^{n} }=P$ for all $n\in \mathbb{Z}$.
> 
> > [!Proof]-
> > Let $e\in \sqrt{ P^{n} }$. Then, $e^{k}\in P^{n}\subseteq P$ for some $k\in \mathbb{Z}$. Since $P$ is prime, it follows that $e\in P$. Conversely, if $e\in P$, $e^{n}\in P^{n}$.
> 

^6f6d3a

> [!Proposition]
> If $n=p_{1}^{a_{1}}\dots p_{k}^{a_{k}}$, then $\sqrt{ (\overline{0}) }=(\overline{p_{1}p_{2}\dots p_{n}})$ in $\mathbb{Z}/n\mathbb{Z}$.
> 
> > [!Proof]-
> > $$
> > \begin{align}
> > \sqrt{ (\overline{0}) } & =\sqrt{ (\overline{p_{1}^{a_{1}}\dots p_{n}^{a_{n}}}) } \\
> >  & \overset{!}{=}\sqrt{ (\overline{p_{1}^{a_{1}}})\cap\dots \cap  (\overline{p_{n}^{a_{n}}})}  \\
> >  & =\sqrt{ (\overline{p_{1}^{a_{1}}}) }\cap\dots \cap \sqrt{ (\overline{p_{n}^{a_{n}}}) }, \\
> > \end{align}
> > $$
> > where the marked equality is true because $p_{1}^{a_{1}}, \dots, p_{n}^{a_{n}}$ are coprime. By [[#^6f6d3a]],  $\sqrt{ (\overline{p^{a}}) }=(\overline{p})$. Thus, we have
> > $$
> > \begin{align}
> > \sqrt{ (\overline{0}) } & =(\overline{p_{1}})\cap(\overline{p_{2}})\cap\dots \cap(\overline{p_{n}})=(\overline{p_{1}p_{2}\dots p_{n}}).
> > \end{align}
> > $$
> > 
> 

> [!Example]
> Let $R={k[x, y]}$ where $k$ is a field. Find $\sqrt{ (x^{2}y^{2}) }$. 
> 
> Clearly, $(x^{2}y^{2})=(x^{2})\cap(y^{2})$. Also, $(x^{2})=(x)^{2}$. Further, $(x)$ is a prime ideal (should be obvious, but Clare insists on showing $k[x, y]/(x)\cong k(y)$). Thus, using [[#^6f6d3a]], $\sqrt{ (x^{2}y^{2}) }=\sqrt{ (x)^{2} }\cap \sqrt{ (y)^{2} }=(x)\cap(y)=(xy)$.

> [!Proposition]
> Every radical ideal in a [[Noetherian rings|noetherian ring]] is a finite intersection of prime ideals.
> 
> > [!Proof]-
> > First, we will show that if $I$ is a radical ideal and $ab\in I$, then $I=\sqrt{ I+(a) }\cap \sqrt{ I+(b) }$. $I\subseteq \sqrt{ I+(a) }\cap \sqrt{ I+(b) }$ is clear. To show the reverse inclusion, suppose $c\in\sqrt{ I+(a) }\cap \sqrt{ I+(b) }$. Then, $c^{n}=i+ar$ and $c^{m}=i'+br'$ for some integers $n, m$ and $i, i'\in I$, $r, r'\in R$. We now have
> > $$
> > \begin{align}
> > c^{n+m}=ii'+ibr'+i'ar+abrr' \in I.
> > \end{align}
> > $$
> > $c^{n+m}\in I$ implies $c\in I$, since $I$ is a radical ideal. 
> > 
> > Now, If $I$ is not a prime ideal, there exist $a, b$ such that $ab\in I$ but $a, b\not\in I$. We can thus write $I$ as the intersection of two radicals $I_{1}$ and $I_{2}$ containing $(a)$ and $(b)$ respectively. If either $I_{1}$ or $I_{2}$ is not prime, we repeat the process. We are guaranteed to reach a prime ideal eventually, since otherwise we'd have an infinite ascending chain of ideals.