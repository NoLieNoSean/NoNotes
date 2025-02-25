---
tags:
  - CAL1
  - Lecture
date: 2025-02-06
time: 11:50
---
> [!Theorem] Extreme value theorem
> Let $X$ be a metric space. Then $X$ is compact if and only if every continuous real valued function on $X$ takes a maximum and a minimum value.

We have already shown the forward implication [[Analysis1_L16#Extreme value theorem|here]].

> **Proof of $\impliedby$**
> Assume every real valued function on $X$ takes a minimum and maximum value. To show that $X$ is compact, it is [[CAL1_L8#Characterization of compact sets|necessary and sufficient]] to show that it is complete and totally bounded.
> 
> Argue by contradiction to show $X$ is totally bounded. If $X$ is not totally bounded, there exists $r> 0$ and a countably infinite subset of $X$ which we may enumerate as $\{ x \}_{n=1}^{\infty}$, for which the collection of open balls $\{ B_{r}(x) \}$ is disjoint. 
> 
> It remains to show that $X$ is complete. Let $(x_{n})$ be a Cauchy sequence in $X$. For each $x\in X$, we infer form the triangle inequality that $\{ d(x, x_{n}) \}$ is a Cauchy sequence in $\mathbb{R}$, which converges since $\mathbb{R}$ is complete. 


> [!Theorem] Lebesgue covering Lemma
> Let $\{ O_{\lambda} \}_{\lambda\in\Lambda}$ be an open cover of a compact metric space $X$. Then there exists $\epsilon> 0$, called a *Lebesgue number* for the cover, such that for each $x\in X$, the ball $B_{\epsilon}(x, X)$ is contained in some member of the cover.

**Proof**
Assume there is no such Lebesgue number.