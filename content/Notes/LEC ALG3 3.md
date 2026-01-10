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

The theory of modules is based on the observation that $\text{End}_{\textsf{Ab}}(G)$ is a ring for every abelian group $G$[^1]. Recall that we defined [[LEC ALG2 7#Group actions|group actions]] as group homomorphisms from a fixed group to the group of automorphisms of a set. Analogously, *the left-action of a ring $R$ on an abelian group $M$ is a homomorphism of rings $\sigma:R\to \text{End}_{\textsf{Ab}}(M)$*. We say that $\sigma$ makes $M$ into a **left $R$ module**. The uncurried version $\rho$ has type $R\times M\to M$, with the relation between them given by $\rho(r, m)=\sigma(r)(m)$. $\rho(r, m)$ is denoted by $rm$. An equivalent definition using $\rho$ follows.

> [!Definition] Module
> Let $R$ be a ring (with $1$). A **left $R$ module** is an additive abelian group $M$ with the operation $R\times M\to M$ , $(r, m)\mapsto rm$ with the following axioms
> 1. $(r+s)m=rm+sm$
> 2. $r(m+n)=rm+rn$
> 3. $rs(m)=r(sm)$
> 4. $1m=m$
> 

^2e9663

(1) and (3) are due to $\sigma$ being a (ring) homomorphism; (2) is $\sigma(r)$ being a (group) endomorphism of $M$. 

Ditto for right $R$ module. Similar to [[LEC ALG2 7#^bee0cf|right group actions]], a right $R$-module structure may be identified with a left-$R^{\circ}$ module structure, where $R^{\circ}$ is the 'opposite ring' obtained by reversing the order of multiplication. However, unlike the case for groups, $R$ and $R^{\circ}$ are *not isomorphic in general*. 

Some trivial facts:
1. $0\cdot m=0$;
2. $r\cdot 0=0$;
3. $(-1)\cdot m=-m$.

> [!Proposition]
> Every abelian group is a $\mathbb{Z}$-module, in exactly one way.
> 
> > [!Proof]-
> > Let $G$ be an abelian group. Since $\mathbb{Z}$ is [[LEC ALG3 1#Ring homomorphisms|initial]] in $\textsf{Ring}$, there exists exactly one homomorphism
> > $$
> > \mathbb{Z}\to\text{End}_{\textsf{Ab}}(G).
> > $$
> > 
> 

^04c10a

> [!Definition] Module homomorphisms
> A **homomorphism** of $R$-modules is a homomorphism of abelian groups which is compatible with the module structure. That is, if $M, N$ are $R$-modules and $\varphi:M\to N$ is a function, then $\varphi$ is a homomorphism of $R$-modules iff
> - $\varphi(m_{1}+m_{2})=\varphi(m_{1})+\varphi(m_{2})$, for all $m_{1}, m_{2}\in M$;
> - $\varphi(rm)=r\varphi(m)$, for all $r\in R$ and $m\in M$.

Given a ring $R$, the identity $M\to M$ is an $R$-module homomorphism. Clearly, the composition of two $R$-module homomorphisms is an $R$-module homomorphism. *Thus, $R$-modules form a [[Intro to Category Theory#^05a089|Category]], denoted by $R\textsf{-Mod}$.* The trivial group $0$ has a unique module structure over any ring $R$ and is a zero-object in $R\textsf{-Mod}$, that is, it is both initial and final. It can be easily verified that a bijective homomorphism of $R$-modules is an isomorphism in $R\textsf{-Mod}$. By [[#^04c10a]], the category $\mathbb{Z}\textsf{-Mod}$ is the same as the category $\textsf{Ab}$. 

> [!Proposition]
> Let $R, S$ be rings and $\varphi:R\to S$ be a ring homomorphism. Then, $S$ is an $R$ module.
> 
> > [!Proof]-
> > Let $i:S\to \text{End}_{\textsf{Ab}}(S)$ be defined by $s\mapsto(r\mapsto sr)$ (it is easily seen that $r\mapsto sr$ is indeed a group homomorphism for all $s$). We need to verify that $i$ is a ring homomorphism:
> > $$
> > \begin{align}
> > i(s_{1}+s_{2}) & =r\mapsto(s_{1}+s_{2})r \\
> >  & =r\mapsto s_{1}r+s_{2}r \\
> >  & =(r\mapsto s_{1}r)+(r\mapsto s_{2}r) \\
> >  & =i(s_{1})+i(s_{2}). \\
> >  \\
> > i(s_{1}s_{2}) & =r\mapsto s_{1}s_{2}r \\
> >  & =(r\mapsto s_{1}r)\circ(r\mapsto s_{2}r) \\
> >  & =i(s_{1})\circ i(s_{2}).
> > \end{align}
> > $$
> > So, $i\circ\varphi:R\to \text{End}_{\textsf{Ab}}(S)$ is a ring homomorphism, making (the underlying group of) $S$ an $R$-module. Concretely, the action is $(r, s)\mapsto\varphi(r)s$.
> 

^e65692

In [[#^e65692]], if we require $R$ to be commutative and $\varphi$ to map $R$ to the center of $S$, the ring operation in $S$ become compatible with the $R$-module structure:
$$
(r_{1}s_{1})(r_{2}s_{2})=\varphi(r_{1})s_{1}\varphi(r_{1})s_{2}=\varphi(r_{1})\varphi(r_{2})s_{1}s_{2}=(r_{1}r_{2})(s_{1}s_{2}).
$$
Such a structure is called an $R$-algebra.

> [!Definition] $R$-algebra
> Let $R$ be a commutative ring. An **$R$-algebra** is a ring homomorphism $\alpha:R\to S$ such that $\alpha(R)$ is contained in the center of $S$. 

^419c68

[[#^419c68]] defines an $R$-algebra as a ring with compatible $R$-module structure; it can also be thought of as an $R$-module with a compatible ring structure.


> [!Remark]
> Recall that for $G, H\in \textsf{Ab}$, $\text{Hom}_{\textsf{Ab}}(G, H)\in \textsf{Ab}$, with the group operation inherited from $H$: $(\varphi_{1}+\varphi_{2})(g):=\varphi_{1}(g)+\varphi_{2}(g)$. Note that commutativity is required for this prescription to yield an element in $\text{Hom}_{\textsf{Ab}}(G, H)$:
> $$
> \begin{align}
> (\varphi_{1}+\varphi_{2})(g_{1}+g_{2}) & =\varphi_{1}(g_{1})+\varphi_{1}(g_{2})+\varphi_{2}(g_{1})+\varphi_{2}(g_{2}) \\
>   & =\varphi_{1}(g_{1})+\varphi_{2}(g_{1})+\varphi_{1}(g_{2})+\varphi_{2}(g_{2}) \\
>  & =(\varphi_{1}+\varphi_{2})(g_{1})+(\varphi_{1}+\varphi_{2})(g_{2}).
> \end{align}
> $$
> The remaining group axioms are easily verified.
> 
> Similarly, if $R$ is a commutative ring, each set $\text{Hom}_{R\textsf{-Mod}}(M, N)$ can be seen as an element of $R\textsf{-Mod}$. Indeed, let $M$ and $N$ be $R$-modules. Since homomorphisms of $R$-modules are in particular homomorphisms of abelian groups, 
> $$
> \text{Hom}_{R\textsf{-Mod}}(M, N)\subseteq \text{Hom}_{\textsf{Ab}}(M, N).
> $$
> The operation making $\text{Hom}_{\textsf{Ab}}(M, N)$ into a group clearly preserves $\text{Hom}_{R\textsf{-Mod}}(M, N)$, so the latter is an abelian group. For $r\in R$ and $\varphi\in \text{Hom}_{R\textsf{-Mod}}(M, N)$, the prescription $(r\varphi)(m):=r\varphi(m)$ defines a function $r\varphi:M\to N$. This function is an $R$-module homomorphism if $R$ is commutative, because
> $$
> (r\varphi)(am)=r\varphi(am)=(ra)\varphi(m)\overset{!}{=}(ar)\varphi(m)=a(r\varphi(m)).
> $$
> Thus, we have a natural action of $R$ on the abelian group $\text{Hom}_{R\textsf{-Mod}}(M, N)$, and it is immediate to verify that the associated map $R\to \text{End}_{\textsf{Ab}}(\text{Hom}_{R\textsf{-Mod}}(M, N))$ is a ring homomorphism, making $\text{Hom}_{R\textsf{-Mod}}(M, N)$ into an $R$-module.
> 

^e7f7db

## Submodules and quotients

> [!Definition]
> A **submodule** $N$ of an $R$-module $M$ is a subgroup of $M$ preserved by the action of $R$ on $M$. 

> [!Example]
> 1. $R$ itself is a left $R$-module; the submodules of $R$ are the left ideals of $R$.
> 2. Both the kernel and the image of an $R$-module homomorphism $\varphi:M\to M'$ are submodules (of $M$ and $M'$, respectively).
> 3. If $r$ is in the center of $R$ and $M$ is an $R$-module, then $rM=\{ rm\ | \ m\in M \}$ is a submodule of $M$. If $I$ is any (left-) ideal of $R$, then $IM=\left\{  \sum_{i}r_{i}m_{i}\ | \ r_{i}\in I, m_{i}\in M  \right\}$ is a submodule of $M$.

If $N$ is a submodule of $M$, then it is in particular a normal subgroup of the abelian group $(M, +)$, so $M/N$ is an abelian group. [[LEC ALG3 2#Quotients|As usual]], we are interested in the question: what properties must $N$ have so that the natural projection $\pi:M\to M/N$ is a $R$-module homomorphism?

If $\pi$ is a homomorphism, we have
$$
r(m+N)=r\pi(m)=\pi(rm)=(rm+N)
$$
for all $m\in M$. Thus, we are forced to define the action of $R$ on $M/N$ by 
$$
r(m+N):=rm+N.
$$
It turns out (as can be easily verified) that *this prescription defines a $R$-module structure on $M/N$ for all submodules $N$*. This is very similar to what happens in $\textsf{Ab}$, where every subgroup is normal - unlike in $\textsf{Gp}$ or $\textsf{Ring}$, being a kernel poses no restriction on the relevant substructures.

The $R$-module $M/N$ is called the **quotient** of $M$ by $N$.

> [!Example]
> If $R$ is a ring and $I$ is a two-sided ideal of $R$, then all three of $I$, $R$, and the quotient ring $R/I$ are $R$-modules. There are two ways to view the module $R/I$: As the module arising from the canonical projection $R\to R/I$ and [[#^e65692]], or as the quotient of the $R$-module $R$ by its submodule $I$. The latter works even when $R$ is not commutative and $I$ is just a (say) left-ideal: the quotient $R/I$ is not defined as a ring, but it is defined as a left-module. The action of $R$ on $R/I$ is given by left multiplication: $r(a+I)=(ra+I)$. 

The universal property and isomorphism theorems are what you'd expect; see @aluffiAlgebraChapter02009 [p.161, 162]. 

> [!Proposition]
> Let $N$ be a submodule of an $R$-module $M$. Then for every homomorphism of $R$-modules $\varphi:M\to P$ such that $N\subseteq \ker\varphi$ there exists a unique homomorphism of $R$-modules $\tilde{\varphi}:M/N\to P$ such that the diagram
> 
> ```latex
> 
> % latex-id: 7a49-3dbf-c79b-4ace-b3ff
> \begin{tikzcd}
> M\ar[rr, "\varphi"]\ar[rd, "\pi"']&&P\\
> &M/N\ar[ru, "\exists !\tilde{\varphi}"']&
> \end{tikzcd}
> ```
> commutes. 


> [!Proposition]
> Every $R$-module homomorphism $\varphi:M\to M'$ may be decomposed as follows:
> ```latex
> 
> 
> % latex-id: a3c5-ccb5-06fc-40cd-940e
> \begin{tikzcd}
> M\ar[rrr, bend left, "\varphi"]\ar[r, "\varphi"]& M/\ker\varphi\ar[swap]{r}{\tilde{\varphi}}[swap]{\sim}& \text{im}\,\varphi\ar[r, hook]&M'
> \end{tikzcd}
> ```
> 

> [!Proposition]
> Let $N$ be a submodule of an $R$-module $M$, and let $P$ be a submodule of $M$ containing $N$. Then $P/N$ is a submodule of $M/N$, and
> $$
> \begin{align}
> \frac{M/N}{P/N}\cong \frac{M}{P}.
> \end{align}
> $$
> 

Imitate proof of [[LEC ALG3 2#^f12ed2]]. 

## Finitely generated modules

> [!Definition] Finitely generated module
> The left $R$-module $M$ is **finitely generated** if there exist $a_{1}, \dots, a_{n}$ in $M$ such that for any $x\in M$, there exist $r_{1}, \dots, r_{n}\in R$ with $x=r_{1}a_{1}+r_{2}a_{2}+\dots r_{n}a_{n}$.

^db6ba2

> [!Warning]
> $M$ being a finitely generated abelian group is not the same thing as it being a finitely generated $R$-module. $\mathbb{R}$ is not finitely generated as an abelian group, but is finitely generated by $\{ 1 \}$ as an $\mathbb{R}$-module.

[^1]: If $G$, $H$ are abelian groups, then $\text{Hom}_{\textsf{Ab}}(G, H)$ is also an abelian group, with addition defined pointwise. $\text{End}_{\textsf{Ab}}(G)=\text{Hom}_{\textsf{Ab}}(G, G)$ further allows its constituent morphisms to be composed; it is a ring with multiplication defined to be composition. See @aluffiAlgebraChapter02009 III.1.1.
