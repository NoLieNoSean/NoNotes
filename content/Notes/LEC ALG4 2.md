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

Note that $j$ must be necessarily injective!

The construction of such a module generalizes directly the case of [[LEC ALG2 14#Free abelian groups|abelian groups]] [^1], replacing $\mathbb{Z}$ with an arbitrary ring $R$. We will denote the coproduct $\bigoplus_{a\in A}M$ by $M^{\oplus A}$. 

By the virtue of being defined by a universal property, we know that $F^{R}(A)$, if it exists, is unique up to isomorphism for any given set $A$. 

We now provide an explicit realization of $F^{R}(A)$. 

> [!Proposition]
> $R^{\oplus A}$ is a free $R$-module on $A$. 
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
> > is a basis for $R^{\oplus A}$. Commutativity of the diagram from [[#^552c68]] fixes the values of $\varphi$ on $E$;  Since we require $\varphi$ to be a homomorphism, this determines $\varphi$ on all of $R^{\oplus A}$. It remains to check that the determined map is indeed an $R$-module homomorphism, which is easily done [^3]. 
> 

^e7a50f

## Some preliminary propositions

A simple application of Zorn's lemma shows that every module has maximal linearly independent subsets. In fact, we can prove something stronger:

> [!Proposition]
> Let $M$ be an $R$-module, and let $S\subseteq M$ be a linearly independent subset. Then there exists a maximal linearly independent subset of $M$ containing $S$. 
> 
> > [!Proof]-
> > 
> > Consider the family $\mathcal{I}$ of linearly independent subsets of $M$ containing $S$, ordered by inclusion. Since $S$ is linearly independent, $\mathcal{I}\ne 0$. By Zorn's lemma, it suffices to verify that every chain in $\mathcal{I}$ has an upper bound. Indeed, the union of a chain of linearly independent subsets containing $S$ is also linearly independent: because any relation of linear dependence only involves finitely many elements and these elements would all belong to one subset in the chain. 
> 

^331aed

See [[Addendum A to 373]] for results analogous results on minimal generating sets. 

We also see that being free is equivalent to having a basis.

> [!Proposition] 
> $M$ is a free $R$-module on some set $A$ $\iff$ $M$ has a [[#^59c172|basis]]. 
> 
> > [!Proof]-
> > 
> > If $B\subseteq M$ is linearly independent and generates $M$, then the corresponding homomorphism $R^{\oplus B}\to M$ is injective and surjective. Conversely, if $\varphi:R^{\oplus B}\to M$ is an isomorphism, then $B$ is identified with a subset of $M$ which generates it (because $\varphi$ is surjective) and is linearly independent (because $\varphi$ is injective). 
> 

^440836

[[#^440836]] was used by Kummini as the definition of free module.

## Vector spaces

==Bases are necessarily maximal linearly independent subsets and minimal generating subsets==; this holds over every ring. What makes vector spaces special is that the converse also holds. 

We have previously seen that every vector space has a basis ([[Hamel bases#^9b8388]]), from which it follows that ==every module over a field is free==. Here's another proof using [[#^331aed]]: Let $M$ be a $k$-module. Let $A$ be a maximal linearly independent subset of $M$. We will show that $A$ is a basis of $M$. Suppose $v\in M$, $v\not\in A$. Then $A\cup \{ v \}$ is not linearly independent, by the maximality of $A$; therefore, there exist distinct $a_{1}, \dots, a_{t}\in A$ such that $c_{0}v+c_{1}a_{1}+\dots c_{t}a_{t}=0$ for some $c_{0}, \dots, c_{t}\in k$ not all zero. Now, $c_{0}\ne 0$, since otherwise we would get a linear dependence relation among the elements of $A$. Since $k$ is a field, we can write
$$
v=\sum_{i=1}^{t} \frac{c_{i}}{c_{0}}a_{i},
$$
proving that $v\in \langle A \rangle$. 

In summary, using the results of this section and [[Addendum A to 373]], we have

> [!Proposition]
> Let $M$ be a $k$-module. For $A\subseteq M$, TFAE:
> 1. $A$ is a basis of $M$; 
> 2. $A$ is a maximal linearly independent subset of $M$; 
> 3. $A$ is a minimal generating set of $M$. 
> 
> Further, we have the following:
> 
> 4. $M$ is free.
> 5. If $S$ is a linearly independent subset of $M$, there exists a basis $S'$ of $M$ containing $S$. 
> 6. If $S$ is a generating subset of $M$, there exists a basis $S'$ of $M$ contained in $S$. 

When working with modules over integral domains, you can easily reduce the problem to the case of a vector space over a field by passing to the [[LEC ALG3 8#Ring of fractions|field of fractions]]:

> [!Proposition] @aluffiAlgebraChapter02009 Exr VI.1.7 ✦
> Let $R$ be an integral domain, and let $M=R^{\oplus A}$ be a free $R$-module. Let $k$ be the field of fractions of $R$, and view $M$ as a subset of $V=k^{\oplus A}$ in the evident way. A subset $S\subseteq M$ is linearly independent in $M$ (over $R$) iff it is linearly independent in $V$ (over $k$). Conclude that the rank of $M$ (as an $R$-module) equals the dimension of $V$ (as a $k$-vector space). Prove that if $S$ generates $M$ over $R$, then it generates $V$ over $K$. The converse is not true. 

## The rank of a free module

We now perform the familiar[^4] ritual of showing $|X_{1}|=|X_{2}| \iff F^{R}(X_{1})\cong F^{R}(X_{2})$, making the notion of rank well-defined and in particular allowing us to call $R^{\oplus n}$ (also denoted by just $R^{n}$) *the* free $R$-module of rank $n$. Kummini does this [[LEC ALG4 3#Rank of a free module is well-defined|later]]. Here's how Aluffi does it:

> [!Lemma] @aluffiAlgebraChapter02009 VI.1.9 ✦ 
> Let $R$ be an integral domain, and let $M$ be a free $R$-module. Let $B$ be a maximal linearly independent subset of $M$, and let $S$ be a linearly independent subset. Then, $|S|\leqslant |B|$. In particular, any two maximal linearly independent subsets of a free module over an integral domain have the same cardinality. 

^e70c6c

Since every basis for $M$ is a maximal linearly independent subset, it follows that every basis of $M$ has the same cardinality. 

> [!Theorem]
> Let $R$ be an integral domain, and let $X_{1}, X_{2}$ be sets. Then, 
> $$
> F^{R}(X_{1})\cong F^{R}(X_{2})\iff X_{1}\cong X_{2}.
> $$
> 
> > [!Proof]-
> > 
> > $(\implies)$ Let $i_{1}:X_{1}\to F^{R}(X_{1})$ and $i_{2}:X_{2}\to F^{R}(X_{2})$ be the (injective) set maps associated with $F^{R}(X_{1})$ and $F^{R}(X_{2})$ respectively. Then, $i_{1}(X_{1})$ is a basis for $F^{R}(X_{1})$. If $\varphi:F^{R}(X_{1})\to F^{R}(X_{2})$ is an isomorphism, then $\varphi(i_{1}(X_{1}))$ is a basis for $F^{R}(X_{2})$. Since $i_{2}(X_{2})$ is also a basis for $F^{R}(X_{2})$ and bases are maximal linearly independent subsets, it follows from [[#^e70c6c]] that $|X_{1}|=|X_{2}|$. 
> > 
> > $(\impliedby)$ See [[LEC ALG2 13#^0409cd]]. 
> 

^428c11

> [!Corollary]
> If $R$ is an integral domain, then 
> $$
> R^{m}\cong R^{n}\iff m=n.
> $$
> 

^facc1b

We can now make the definition

> [!Definition] Rank and dimension
> Let $R$ be an integral domain. The **rank** of a free $R$-module $M$, denoted $\text{rk}_{R}M$, is the cardinality of a maximal linearly independent subset of $M$. The rank of a vector space is called its **dimension**, denoted $\dim_{k}V$. 

> [!Remark]
> [[#^e70c6c]] tells us that every linearly independent subset $S$ of a free $R$-module $M$ must have cardinality lower than or equal to $\text{rk}_{R}M$. Similarly, every generating set must have cardinality greater than or equal to the rank. 

# Misc

> [!Proposition]
> Let $M$ be an $R$-module. Then there exists a free module $F$ and a surjective $R$-module homomorphism $F\twoheadrightarrow M$. 
> 
> > [!Proof]-
> > 
> > Let $F$ be the free module with basis $\{ e_{m}:m\in M \}$. Define $\varphi:F\to M$ by $e_{m}\mapsto m$. 
> 

^85f1ce

If we have a generating set for $M$, we can do better:

> [!Proposition]
> Let $M$ be an $R$-module. Let $X\subseteq M$ be a generating set. Let $F$ be the free module with basis $X$. Then there exists an $R$-linear surjective map $F\to M$ defined by $\sum r_{x}e_{x}\mapsto \sum r_{x}x$. 

^e839ad

> [!Proposition] @macdonaldIntroductionCommutativeAlgebra Ex. 2.11 ✦ 
> Let $R$ be commutative.
> 1. If $\varphi:R^{m}\to R^{n}$ is surjective, then $m\geqslant n$. 
> 2. If $\varphi:R^{m}\to R^{n}$ is injective, then $m\leqslant n$. 

^27be82

Analogue of [[LEC ALG1 8#^6a3bec]]:

> [!Proposition]
> Let $R$ be a commutative ring and $M$ a finitely generated $R$-module. Let $X$ be a finite linearly independent subset of $M$, and $Y$ be a finite generating set of $M$. Then, $|X|\leqslant |Y|$. 
> 
> > [!Proof]-
> > 
> > Let $X=\{ x_{1}, \dots, x_{s} \}$ and $Y=\{ y_{1}, \dots, y_{t} \}$. Let $\sigma:R^{\oplus X}\hookrightarrow M$ and $\pi:R^{\oplus Y}\twoheadrightarrow M$ be defined in the obvious ways. Now write $x_{i}=\sum_{j=1}^{t}a_{ij}y_{j}$ and define $\psi:R^{\oplus X}\to R^{\oplus Y}$ by $\psi(e_{i})=\sum_{j=1}^{t}a_{ij}e_{j}$. Clearly, $\pi \psi=\sigma$, so $\psi$ is injective. By [[#^27be82]], $s\leqslant t$. 
> 


[^1]: Which, remember, are just $\mathbb{Z}$-modules!

[^3]: This proof looks very similar to that of [[Categorical notes on groups#^8e8d67]] - noting that every element of the coproduct can be uniquely expressed via a "basis", using this to define a map, and then verifying that this map is actually a group / module homomorphism. The proofs of [[LEC ALG2 14#^ae5ef6]] / [[LEC ALG2 14#^4898a7]] bypass this by invoking [[Categorical notes on groups#^8e8d67]] / [[Categorical notes on groups#^2cc108]].2 respectively and using the universal property of coproducts. You can see a [[Categorical notes on groups#^8e8d67]]-style proof of [[LEC ALG2 14#^ae5ef6]] at @aluffiAlgebraChapter02009 II.5.4. Indeed, you can prove [[#^e7a50f]] by invoking [[Categorical notes on groups#^2cc108]].2 and the universal property of coproducts instead. 

[^4]: [[LEC ALG2 14#^b623d8]], [[LEC ALG2 13#^0409cd]], [[LEC ALG2 13#^cb59c5]]
