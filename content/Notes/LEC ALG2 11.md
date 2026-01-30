---
id: "100"
date: March 2025
---
# Sylow's theorems

Note that the following lemma is a special case of [[LEC ALG2 3#Cauchy's Theorem|Cauchy's theorem]], which we have already proved.

> [!Lemma]
> If $G$ is a finite abelian group and $p$ is a prime dividing $|G|$, then $G$ has an element of order $p$.

Alternate proof using induction:

> [!Proof]-
> 
> Fix a prime $p$. Complete induction on $|G|$. Vacuously true for $|G|< p$. If $|G|=p$, $G$ is cyclic, and has an element of order $p$. 
> 
> For $|G|> p$, pick $x\ne e$ in $G$. If $|x|=pn$, $x^{n}$ is an element of order $p$. 
> 
> Thus, assume $p$ does not divide $|x|$. Since $G$ is abelian, $\langle x \rangle\triangleleft G$. Now, $|G|=|G/\langle x \rangle||\langle x \rangle|$. Since $p$ does not divide $|\langle x \rangle|$, it must divide $|G/\langle x \rangle|$. Since $x\ne e$, $|G/\langle x \rangle|< |G|$. By the induction hypothesis, $G/\langle x \rangle$ has an element $y\langle x \rangle$ of order $p$. Note that $y\not\in \langle x \rangle$, since that would make $y\langle x \rangle$ the identity in $G/\langle x \rangle$. Now, since $y^{p}\langle x \rangle=\langle x \rangle$, $y^{p}\in \langle x \rangle$. Clearly, then, $\langle y \rangle\ne \langle y^{p} \rangle$. This forces $|y^{p}|< |y|$, which in turn implies $p$ divides $|y|$. This takes us back to the previous case, so there exists a power of $y$ which has order $p$. 

> [!Lemma]
> Let $P\in\text{Syl}_{p}(G)$. If $Q$ is any p-subgroup of $G$, then $Q\cap N_{G}(P)=Q\cap P$.
> 
> > [!Proof]-
> > Recall that $N_{G}(P)\leq G$, and $P\leq N_{G}(P)$. Also recall that the intersection of two subgroups is a subgroup. It follows then that $Q\cap P\leq Q\cap N_{G}(P)$. It remains to show that $Q\cap N_{G}(P)\leq Q\cap P$. This is equivalent to showing $Q\cap N_{G}(P)\leq P$. Let $H\equiv Q\cap N_{G}(P)$. Note that $H\leq N_{G}(P)$, so $PH\leq G$. Also, $H\leq PH$ and $P\leq PH$. If we show that $PH\leq P$, we will be done. We know that 
> > $$
> > \begin{align}
> > |PH|= \frac{|P||H|}{|P\cap H|}.
> > \end{align}
> > $$
> > Now, $H\leq Q$, so $p$ divides $|H|$. Similarly, $p$ divides $|P\cap H|$. So, $PH$ is a p-subgroup. Moreover, $P\leq PH$ and $P$ being a Sylow p-subgroup forces $P=PH$. Thus, $H\leq P$. 
> 

> [!Definition]
> Let $G$ be a group and $p$ be a prime. 
> 
> 1. A group of order $p^{\alpha}$ for some $\alpha\geqslant 1$ is called a **$p$-group**. Subgroups of $G$ which are $p$-groups are called $p$-subgroups.
> 2. If $G$ is a group of order $p^{\alpha}m$, where $p\nmid m$, then a subgroup of order $p^{\alpha}$ is called a **Sylow $p$-subgroup** of $G$. 
> 3. The set of Sylow $p$-subgroups of $G$ is denoted by $\text{Syl}_{p}(G)$ and the number of Sylow $p$-subgroups of $G$ is denoted by $n_{p}(G)$ (or just $n_{p}$ when $G$ is clear from context).
> 
> 

^2553c3

> [!Theorem]
> Let $G$ be a group of order $p^{\alpha}m$, where $p$ is a prime not dividing $m$. Then, 
> 
> 1. Sylow p-subgroups of $G$ exist.
> 2. If $P$ is a Sylow p-subgroup of $G$ and $Q$ is any p-subgroup of $G$, then there exists $g\in G$ such that $Q\leq gPg^{-1}$, that is, $Q$ is contained in some conjugate of $P$. In particular, any two Sylow p-subgroups of $G$ are conjugate in $G$. 
> 3. The number of Sylow p-subgroups of $G$ is of the form $1+kp$. Further, $n_{p}$ is the index of the normalizer $N_{G}(P)$ in $G$, for any Sylow p-subgroup $P$, hence, $n_{p}$ divides $m$. 

**Proof of 1**
Induction on $|G|$. If $|G|=1$, there is nothing to prove. Assume inductively the existence of sylow p-subgroups for all groups of order less than $|G|$. 

Let $G=p^{\alpha}m$, $p$ does not divide $m$. If $p$ divides $|Z(G)|$, since $Z(G)$ is abelian, it has an element $x$ of order $p$. Since $\langle x \rangle\leq Z(G)$, $\langle x \rangle\triangleleft G$. It follows that $G/\langle x \rangle$ is a group, which has order $p^{\alpha-1}m$. Form the inductive hypothesis, $G/\langle x \rangle$ must have a sylow p-subgroup of order $p^{\alpha-1}$. From the correspondence theorem, this subgroup corresponds to a subgroup of $G$ of order $p^{\alpha}$, completing the proof for this case.

Consider the case when $p$ does not divide $|Z(G)|$. The class equation of $G$ is
$$
|G|=|Z(G)|+\sum_{i=1}^{n} [G:C_{G}(g_{i})],
$$
where $g_{i}$, $1\leq i\leq n$ are representatives of the conjugacy classes of $G$. There must exist $g_{i}$ such that $p$ does not divide $[G:C_{G}(g_{i})]$. We know form the orbit-stabilizer theorem that $|C_{G}(x)||\theta_{x}|=|G|$. In this context, the equation would read $|C_{G}(g_{i})||G:C_{G}(g_{i})|=|G|$. It follows that $p^{\alpha}$ must divide $|C_{G}(g_{i})|$. $g_{i}\not\in Z(G)$, so $|C_{G}(g_{i})|\leq |G|$. From the inductive hypothesis, $C_{G}(g_{i})$ must have a sylow p-subgroup of order $p^{\alpha}$, which is of course a subgroup of $G$, completing the proof.


**Proof of 2** 

Let $P$ be a Sylow-$p$ subgroup. Let $S=\{ P_{1}, P_{2}, \dots, P_{r} \}$ be the set of all conjugates of $P$. Let $Q$ be any p-subgroup of $G$. 