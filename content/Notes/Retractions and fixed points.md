---
id: "447"
date: 2026-04-13
time: 14:19
tags:
---
> [!Abstract]
> We use our knowledge of the [[Covering Spaces and the Fundamental Group#^91f4c3|fundamental group of the circle]] to prove some classical results in topology. 

> [!Definition] Retraction
> If $A\subseteq X$, a **retraction** of $X$ onto $A$ is a continuous map $r:X\to A$ such that $r\ | \ A=\mathrm{id}_{A}$. If such a map $r$ exists, we say that $A$ is a retract of $X$. 

^cda84f

> [!Lemma]
> If $A$ is a retract of $X$, then the homomorphism induced by the the inclusion $j:A\to X$ is injective. 

^e945e8

> [!Lemma]
> Let $h:S^{1}\to X$ be a continuous map. Then the following conditions are equivalent. 
> 1. $h$ is nullhomotopic. 
> 2. $h$ extends to a continuous map $k:B^{2}\to X$. 
> 3. $h_{*}$ is the trivial homomorphism of fundamental groups. 
> 
> > [!Proof]-
> > 
> > $(1\implies 2)$ Use the [[The Quotient Topology#^461a5c|universal property of quotient maps]]. 
> > $(2\implies 3)$ Use [[Covering Spaces and the Fundamental Group#^3d339c|funtoriality]] of the map $h\mapsto h_{*}$. 
> > $(3 \implies 1)$ Use the [[The Quotient Topology#^461a5c|universal property of quotient maps]]. 
> 

> [!Theorem]
> Given a nonvanishing vector field[^1] on $B^{2}$, there exists a point of $S^{1}$ where the vector field points directly inward and a point of $S^{1}$ where it points directly outward. 

> [!Theorem] Brouwer fixed point theorem for the disc
> If $f:B^{2}\to B^{2}$ is continuous, then there exists a point $x\in B^{2}$ such that $f(x)=x$. 

[^1]: A vector field on $B^{2}$ is an ordered pair $(x, v(x))$ where $x$ is in $B^{2}$ and $v$ is a continuous map of $B^{2}$ into $\mathbb{R}^{2}$. 