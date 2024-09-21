---
tags:
  - ANA1
---

>[!Theorem]
>Given any set $A$, there does not exist a function $f:A\to P(A)$ that is onto (where $P(A)$ is the power set of $A$).

>**Proof**
>FTSOC, assume that $f:A\to P(A)$ is onto. Construct $B = \{ a\in A \ | \ a\not\in f(a) \}$. Since $f$ is onto, $B = f(a')$ for some $a' \in A$. Consider the possibilities:
>- If $a'\in B$: $a'\in f(a')$, which means $a'\not\in B$.
>- If $a'\not\in B$: $a'\not\in f(a')$, which means $a'\in B$.
>
>Thus, we have reached a contradiction. ❏

Cantor's theorem states that there is no onto function from $\mathbb{N}$ to $P(\mathbb{N})$, i.e, $P(\mathbb{N})$ is [[Finite, countable, and uncountable sets|uncountable]]. In fact, $P(\mathbb{N})\sim \mathbb{R}$.

Another implication of Cantor's theorem is that $P(\mathbb{R})$ has a different (precisely, larger) cardinality than $\mathbb{R}$. And $P(P(\mathbb{R}))$ has a larger cardinality than $P(\mathbb{R})$, and so on.

## Cantor's continuum hypothesis

Having divided the universe of sets into disjoint groups, it would be convenient to attach a “number” to each collection which could be used the way natural numbers are used to refer to the sizes of finite sets. Given a set $X$, there exists something called the cardinal number of $X$, denoted $\text{card}~X$, which behaves very much in this fashion. For instance, two sets $X$ and $Y$ satisfy $\text{card}~X =\text{card}~Y$ if and only if $X\sim Y$. (Rigorously defining $\text{card}~X$ requires some significant set theory. One way this is done is to define $\text{card}~X$ to be a very particular set that can always be uniquely found in the same equivalence class as $X$.)

Looking back at Cantor’s Theorem, we get the strong sense that there is an order on the sizes of infinite sets that should be reflected in our new cardinal number system. Specifically, if it is possible to map a set $X$ into $Y$ in a 1–1 fashion, then we want $\text{card}(X) \leq \text{card}(Y)$ . Writing the strict inequality $\text{card}(X)<\text{card}(Y)$ should indicate that it is possible to map $X$ into $Y$ but that it is not the case that $X\sim Y$. Restated in this notation, Cantor’s Theorem states that for every set $A$, $\text{card}(A)<\text{card}(P(A))$. 

Because of the importance of countable sets, the symbol $\aleph_{0}$ is frequently used for $\text{card}(\mathbb{N})$. The subscript “0” is appropriate when we remember that countable sets are the smallest type of infinite set. In terms of cardinal numbers, if $\text{card}(X)<\aleph_{0}$, then $X$ is finite. Thus, $\aleph_{0}$ is the smallest infinite cardinal number. The cardinality of $\mathbb{R}$ is also significant enough to deserve the special designation $c=\text{card}~\mathbb{R} = \text{card}~(0,1)$. In [[Finite, countable, and uncountable sets#Uncountable sets|here]], we have proved that $\aleph_{0}<c$. The question that plagued Cantor was whether there were any cardinal numbers strictly in between these two. Put another way, does there exist a set A ⊆ R with card N < card A < card R? Cantor was of the opinion that no such set existed. In the ordering of cardinal numbers, he conjectured, $c$ was the immediate successor of $\aleph_{0}$.

This is *Cantor's continuum hypothesis*, and it is undecidable. It can be accepted or rejected as a statement about the nature of infinite sets, and in neither case will any logical contradictions arise.