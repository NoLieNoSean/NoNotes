---
id: "369"
date: 2026-01-05
time: 11:30
tags:
  - ALG4
  - Processed
  - Lecture
---
# Existence of bases for vector spaces

Recall that [[Hamel bases#^9b8388|every vector space has a basis]]. This is NOT true for arbitrary modules!

> [!Example]
> Let $R=k[x, y]$. $I=\langle x, y \rangle$ is an $R$-module. $I$ does not have a $R$-basis:
> 1. $\{ x, y \}$ clearly generates $I$, by is not linearly independent: $xy-yx=0$.
> 2. Any subset of $\{ x, y \}$ does not generate $I$; in fact no singleton can generate $I$, since $I$ is not principal.
> 3. Use the argument in $(1)$ to see that any subset $S\subseteq I$ with $|S|\geqslant 2$ cannot generate $I$. 

An $R$-module $M$ is said to be **free** if it has a basis.
