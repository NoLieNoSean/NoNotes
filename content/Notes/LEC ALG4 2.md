---
id: "373"
date: 2026-01-07
time: 11:41
tags:
  - ALG4
  - Lecture
  - Processed
---
Recall that $R$-[[LEC ALG3 3#^2e9663|modules]], along with $R$-[[LEC ALG3 3#^db10f5|module homomorphisms]], [[Categorical notes on Modules|from an abelian category]] $R\textsf{-Mod}$. If $\varphi:M\to N$ is a homomorphism, then $\varphi$ is an isomorphism $\iff$ $\varphi$ is bijective. The proof goes exactly as seen [[LEC ANA1 21#Isomorphisms and homeomorphisms|here]].

> [!Definition]
> 1. A **generating set** of $M$ is a subset $X\subseteq M$ such that for all $y\in M$, there exist $r_{1}, \dots, r_{n}\in R$ and $x_{1}, \dots, x_{n}\in X$ such that $\sum_{i=1}^{n} r_{i}x_{i}=y$. If finite $X$ exists, $M$ is said to be **finitely generated**.
> 2. A set $X\subseteq M$ is said to be **linearly independent** if $\sum_{i=1}^{n}r_{i}x_{i_{n}}=0$ $\implies$ $r_{i}=0 ~\forall i$, i.e, every finite trivial linear combination has trivial coefficients. 
> 3. A set $X\subseteq M$ is said to be a **basis** if $X$ is generating and linearly independent. 

^59c172

# Free modules

$R$ is a (commutative) ring, $M$ is a $R$-module.

> [!Definition] Free module
> Given a set $A$, the **free $R$-module on $A$**, denoted $F^{R}(A)$ (together with a set function $j:A\to F^{R}(A)$) is an $R$-module such that for all $R$-modules $M$ and set functions $f:A\to M$ there exists a unique $R$-module homomorphism $\varphi:F^{R}(A)\to M$ such that the diagram 
> ```latex
> % latex-id: ccf1-cb75-2a1d-437b-8f6f
> \begin{tikzcd}
> F^{R}(A)\ar[r, "\varphi"]&M\\
> A\ar[u, "j"]\ar[ur, "f"']&\\
> \end{tikzcd}
> ```
> commutes.

^552c68

The construction of such a module generalizes directly the case of [[LEC ALG2 14#Free abelian groups|abelian groups]] [^1], replacing $\mathbb{Z}$ with an arbitrary ring $R$. We will denote the coproduct $\bigoplus_{a\in A}M$ by $M^{\oplus A}$. 

[^1]: Which, remember, are just $\mathbb{Z}$-modules!

> [!Proposition]
> $F^{R}(A)\cong R^{\oplus A}$.
> 
> > [!Proof]-
> > 
> > [[Categorical notes on Modules#^9d0119|Recall]] that $R^{\oplus A}$ consists of all tuples $(r_{a})_{a\in A}$ with finite support. It is easily seen that $E:=\{ e_{a} :a\in A\}$, where $e_{a}:A\to R$ are defined by
> > $$
> > e_{a}(a')=\begin{cases}
> > 1_{R} & a=a' \\
> > 0_{R} & a\ne a'
> > \end{cases}
> > $$
> > is a basis for $R^{\oplus A}$. Since we require $f$ from [[#^552c68]] to be a homomorphism, fixing the values of $f$ on $E$ determines $f$ on all of $R^{\oplus A}$. It remains to check that the determined map is indeed an $R$-module homomorphism, which is easily done [^3]. 
> 

^e7a50f

It should now be clear that

> [!Proposition] 
> $M$ is a free $R$-module on some set $A$ $\iff$ $M$ has a [[#^59c172|basis]]. 

^440836

[[#^440836]] was used by Kummini as the definition of free module.

# Misc

> [!Proposition]
> Let $M$ be an $R$-module. Then there exists a free module $F$ and a surjective $R$-module homomorphism $F\to M$. 
> 
> > [!Proof]-
> > 
> > Let $F$ be the free module with basis $\{ e_{m}:m\in M \}$. Define $\varphi:F\to M$ by $e_{m}\mapsto m$. 
> 

If we have a generating set for $M$, we can do better:

> [!Proposition]
> Let $M$ be an $R$-module. Let $X\subseteq M$ be a generating set. Let $F$ be the free module with basis $X$. Then there exists an $R$-linear surjective map $F\to M$ defined by $\sum r_{x}e_{x}\mapsto \sum r_{x}x$. 


[^3]: This proof looks very similar to that of [[Categorical notes on groups#^8e8d67]] - noting that every element of the coproduct can be uniquely expressed via a "basis", using this to define a map, and then verifying that this map is actually a group / module homomorphism. The proofs of [[LEC ALG2 14#^ae5ef6]] / [[LEC ALG2 14#^4898a7]] bypass this by invoking [[Categorical notes on groups#^8e8d67]] / [[Categorical notes on groups#^2cc108]].2 respectively and using the universal property of coproducts. You can see a [[Categorical notes on groups#^8e8d67]]-style proof of [[LEC ALG2 14#^ae5ef6]] at @aluffiAlgebraChapter02009 II.5.4. Indeed, you can prove [[#^e7a50f]] by invoking [[Categorical notes on groups#^2cc108]].2 and the universal property of coproducts instead. 
