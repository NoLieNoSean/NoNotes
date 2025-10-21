---
tags:
  - ALG3
  - Lecture
  - Processed
date: 2025-08-21
time: 09:21
id: "111"
---
# Existence of maximal ideals

> [!Theorem] Krull's theorem
> Let $R$ be a non-zero ring. [[LEC ALG3 4#^a53c12|Maximal ideals]] exist in $R$ and every proper ideal is contained in some maximal ideal.
> 
> > [!Proof]-
> > 
> > Let $\Sigma$ be the set of all proper ideals in $R$. Order the elements of $\Sigma$ by inclusion. Let $C=\{ I_{i} \}_{i\in I}$ be a chain of ideals. Let $I=\bigcup_{i\in I}I_{i}$. It is easy to verify that $I$ is a proper ideal in $R$. By [[LEC DMAT 3#^98db69|Zorn's lemma]], there exists a maximal ideal $M$ in $\Sigma$.
> > 
> > A similar construction works to show that every proper ideal $I$ is contained in some maximal ideal. Let $P=\{ A\supset I :A\text{ is a proper ideal in }R\}$. Again, by Zorn's lemma, $P$ has a maximal element $N$. It is easy to see that $N$ must be a maximal ideal in $R$. By definition of $P$, $N$ must contain $I$. 

^5e9db5

# Chinese remainder theorem, reprise

The ideals $A$ and $B$ of a commutative ring $R$ are said to be **comaximal** if $A+B=R$.

> [!Theorem] Chinese remainder theorem
> Let $A_{1}, \dots, A_{k}$ be ideals in $R$. The map $R\to R/A_{1}\times\dots \times R/A_{k}$ defined by 
> $$
> r\mapsto(r+A_{1}, \dots, r+A_{k})
> $$
> is a ring homomorphism with kernel $A_{1}\cap\dots \cap A_{k}$. If $A_{1}, \dots , A_{k}$ are pairwise comaximal, then this map is surjective and $A_{1}\cap\dots \cap A_{k}=A_{1}\dots A_{k}$, so
> $$
> \frac{R}{A_{1}\dots A_{k}}=\frac{R}{A_{1}\cap\dots \cap A_{k}}\cong \frac{R}{A_{1}}\times\dots \times\frac{R}{A_{k}}.
> $$
> 
> > [!Proof]-
> > We first prove this for $k=2$; the general case will follow by induction. Consider the map $\varphi:R\to R/A_{1}\times R/A_{2}$ defined by $\varphi(r)=(r+A_{1}, r+A_{2})$. This map is clearly a ring homomorphism with kernel $A_{1}\cap A_{2}$.
> > 
> > It remains to show that if $A_{1}$ and $A_{2}$ are comaximal, then $\varphi$ is surjective and $A_{1}\cap A_{2}=A_{1}A_{2}$. Since $A_{1}+A_{2}=R$, there are elements $x\in A_{1}$ and $y\in A_{2}$ such that $x+y=1$. This equation shows that $\varphi(x)=(0, 1)$ and $\varphi(y)=(1, 0)$. If now $(r_{1}+A_{1}, r_{2}+A_{2})$ is an arbitrary element in $R/A_{1}\times R/A_{2}$, then the element $r_{2}x+r_{1}y$ maps to this element since
> > $$
> > \begin{align}
> > \varphi(r_{2}x+r_{1}y) & =\varphi(r_{2})\varphi(x)+\varphi(r_{1})\varphi(y) \\
> >  & =(r_{2}+A_{1}, r_{2}+A_{2})(0, 1)+(r_{1}+A_{1}, r_{1}+A_{2})(1, 0) \\
> >  & =(r_{1}+A_{1}, r_{2}+A_{2}).
> > \end{align}
> > $$
> > Thus, $\varphi$ is surjective. 
> > 
> > Finally, the ideal $A_{1}A_{2}$ is always contained in $A_{1}\cap A_{2}$. If $A_{1}$ and $A_{2}$ are comaximal and $x$ and $y$ are as above, then for any $c\in A_{1}\cap A_{2}$, $c=c1=c(x+y)=cx+cy\in A_{1}A_{2}$.
> > 
> > The general case follows by induction from the case of two ideals using $A=A_{1}$ and $B=A_{2}\dots A_{k}$ once we show that $A_{1}$ and $A_{2}\dots A_{k}$ are comaximal. By hypothesis, for each $i\in \{ 2, 3, \dots, k \}$, there are elements $x_{i}\in A_{1}$ and $y_{i}\in A_{i}$ such that $x_{i}+y_{i}=1$. It follows that $1=(x_{2}+y_{2})\dots(x_{k}+y_{k})$ is an element in $A_{1}+(A_{2}\dots A_{k})$. 

^1c5a62

> [!Example]
> Consider $n\in \mathbb{Z}$. $\mathbb{Z}$ is a UFD, so we can write $n=p_{1}^{a_{1}}\dots p_{r}^{a_{r}}$ for primes $p_{1}, \dots, p_{r}$. Since $\mathbb{Z}$ is a PID, prime ideals are maximal ideals, so $\langle p_{1} \rangle, \dots, \langle p_{r} \rangle$ are maximal ideals, and hence pairwise comaximal. It follows[^2] that the ideals $\langle p_{1} \rangle^{a_{1}}, \dots, \langle p_{r} \rangle^{a_{r}}$ are pairwise comaximal. By [[#^1c5a62]], we have[^1] $\langle p_{1}^{a_{1}} \rangle\cap \dots \cap \langle p_{r}^{a_{r}} \rangle=\langle p_{1}^{a_{1}} \rangle\dots \langle p_{r}^{a_{r}} \rangle=\langle p_{1}^{a_{1}}\dots p_{r}^{a_{r}} \rangle=\langle n \rangle$, and
> $$
> \frac{\mathbb{Z}}{n\mathbb{Z}}\cong \frac{\mathbb{Z}}{p_{1}^{a_{1}}\mathbb{Z}}\times\dots \times\frac{\mathbb{Z}}{p_{r}^{a_{r}}\mathbb{Z}}.
> $$
> Additionally,
> $$
> \frac{\mathbb{Z}}{n\mathbb{Z}}[x]\cong \frac{\mathbb{Z}}{p_{1}^{a_{1}}\mathbb{Z}}[x]\times\dots \times\frac{\mathbb{Z}}{p_{r}^{a_{r}}\mathbb{Z}}[x].
> $$
> 


[^2]: In any commutative ring, $I+J=R$ implies $I^{m}+J^{k}=R$ for all ideals $I, J\subseteq R$ and positive integers $m, k$ (just raise the identity $i+j=1$ to the power $m+k$).

[^1]:$\langle a \rangle\langle b \rangle=\langle ab \rangle$ in commutative rings.



