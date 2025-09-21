---
tags:
  - stub
draft: true
---
Axiom of choice, well ordering principle, Zorn's lemma.

> [!Axiom] Axiom of Choice
> If $F$ is a set that satisfies $\forall S\in F$, $\exists s\in S$, then
> $$
> \exists c:F\to \bigcup_{S\in F}S
> $$
> such that 
> $$
> \forall S\in F, c(S)\in S.
> $$
> $c$ is called a **choice function**.

> [!Axiom] Well Ordering Principle
> A well order is a total order $<$ on some set $W$, such that whenever $X$ is a non-empty subset of $W$, $X$ has a minimal element, that is
> $$
> \exists m\in X, \forall x\in X, x\not < m.
> $$
> Denote $m$ as $\min_{(W, <)}(X)$. Any set can be equipped with a well order.


Let $S$ be a set. Given a well-order $(W, <_{W})$, for each $w\in W$, the well-order obtained by restricting $<_{W}$ to $\{ w'\ | \ w'< \}$