---
tags:
  - ALG3
  - Lecture
  - Processed
date: 2025-08-12
time: 09:17
id: "108"
---
# Modules

The theory of modules is based on the observation that $\text{End}_{\textsf{Ab}}(G)$ is a ring for every abelian group $G$ (see @aluffiAlgebraChapter02009 III.1.1). Recall that we defined [[LEC ALG2 7#Group actions|group actions]] as group homomorphisms from a fixed group to the group of automorphisms of a set. Analogously, *the left-action of a ring $R$ on an abelian group $M$ is a homomorphism of rings $\sigma:R\to \text{End}_{\textsf{Ab}}(M)$*. The uncurried version $\rho$ has type $R\times M\to M$, with the relation between them given by $\rho(r, m)=\sigma(r)(m)$. $\rho(r, m)$ is denoted by $rm$. 

> [!Definition] Module
> Let $R$ be a ring (with $1$). A **left $R$ module** is an additive abelian group $M$ with the operation $R\times M\to M$ , $(r, m)\mapsto rm$ with the following axioms
> 1. $(r+s)m=rm+sm$
> 2. $r(m+n)=rm+rn$
> 3. $rs(m)=r(sm)$
> 4. $1m=m$
> 

Ditto for right $R$ module. Similar to [[LEC ALG2 7#^bee0cf|right group actions]], a right $R$-module structure may be identified with a left-$R^{\circ}$ module structure, where $R^{\circ}$ is the 'opposite ring' obtained by reversing the order of multiplication. However, unlike the case for groups, $R$ and $R^{\circ}$ are *not isomorphic in general*. Take 'module' to mean 'left module'.

Some trivial facts:
1. $0\cdot m=0$;
2. $(-1)\cdot m=-m$.

> [!Proposition]
> Every abelian group is a $\mathbb{Z}$-module, in exactly one way.
> 
> > [!Proof]-
> > Let $G$ be an abelian group. Since $\mathbb{Z}$ is initial in $\textsf{Ring}$, there exists exactly one homomorphism
> > $$
> > \mathbb{Z}\to\text{End}_{\textsf{Ab}}(G).
> > $$
> > 
> 


> [!Definition]
> A **homomorphism** of $R$-modules is a homomorphism of abelian groups which is compatible with the module structure. That is, if $M, N$ are $R$-modules and $\varphi:M\to N$ is a function, then $\varphi$ is a homomorphism of $R$-modules iff
> - $\varphi(m_{1}+m_{2})=\varphi(m_{1})+\varphi(m_{2})$, for all $m_{1}, m_{2}\in M$;
> - $\varphi(rm)=r\varphi(m)$, for all $r\in R$ and $m\in M$.

> [!Proposition]
> Let $R, S$ be rings and $\varphi:R\to S$ be a ring homomorphism. Then, $S$ is an $R$ module.
> 
> > [!Proof]-
> > $$
> > \begin{align}
> >  & R\times S\to S,  \\
> >  & (r, m)\mapsto rm:=\varphi(r)m
> > \end{align}
> > $$
> > Easy to verify that $S$ is an $R$ module.

^e65692

## Submodules and quotients

> [!Definition]
> A **submodule** $N$ of an $R$-module $M$ is a subgroup of $M$ preserved by the action of $R$ on $M$. 

> [!Example]
> 1. $R$ itself is a left $R$-module; the submodules of $R$ are the left ideals of $R$.
> 2. Both the kernel and the image of an $R$-module homomorphism $\varphi:M\to M'$ are submodules (of $M$ and $M'$, respectively).
> 3. If $r$ is in the center of $R$ and $M$ is an $R$-module, then $rM=\{ rm\ | \ m\in M \}$ is a submodule of $M$. If $I$ is any (left-) ideal of $R$, then $IM=\left\{  \sum_{i}r_{i}m_{i}\ | \ r_{i}\in I, m_{i}\in M  \right\}$ is a submodule of $M$.

If $N$ is a submodule of $M$, then it is in particular a normal subgroup of the abelian group $(M, +)$, so $M/N$ is an abelian group. As usual, we are interested in the question: what properties must $N$ have so that the natural projection $\pi:M\to M/N$ is a $R$-module homomorphism?

If $\pi$ is a homomorphism, we have
$$
r(m+N)=r\pi(m)=\pi(rm)=(rm+N)
$$
for all $m\in M$. Thus, we are forced to define the action of $R$ on $M/N$ by 
$$
r(m+N):=rm+N.
$$
It turns out (this can be easily verified) that this prescription defines a $R$-module structure on $M/N$ for all submodules $N$. This is very similar to what happens in $\textsf{Ab}$, where every subgroup is normal - unlike in $\textsf{Gp}$ or $\textsf{Ring}$, being a kernel poses no restriction on the relevant substructures.

The $R$-module $M/N$ is called the **quotient** of $M$ by $N$.

> [!Example]
> If $R$ is a ring and $I$ is a two-sided ideal of $R$, then all three of $I$, $R$, and the quotient ring $R/I$ are $R$-modules. There are two ways to view the module $R/I$: As the module arising from the canonical projection $R\to R/I$ and [[#^e65692]], or as the quotient of the $R$-module $R$ by its submodule $I$. The latter works even when $R$ is not commutative and $I$ is just a (say) left-ideal: the quotient $R/I$ is not defined as a ring, but it is defined as a left-module. The action of $R$ on $R/I$ is given by left multiplication: $r(a+I)=(ra+I)$. 





