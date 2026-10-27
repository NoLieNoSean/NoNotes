---
id: "567"
date: 2026-09-18
time: 14:00
tags:
  - LIALG
  - Lecture
desc: Inner derivations of semisimple algebras, abstract Jordan decomposition
P1: true
---
# Abstract Jordan decomposition

> [!Theorem]
> If $L$ is semisimple, then $\text{ad}(L)=\mathrm{Der}(L)$ (i.e., every derivation of $L$ is inner).

^e32576

[[#^e32576]] can be used to introduce an abstract Jordan decomposition in an arbitrary semisimple Lie algebra $L$. Recall ([[LEC LIALG 9#^eea5fe]]) that if $\mathfrak{A}$ is any $F$-algebra of finite dimension, then $\mathrm{Der}(\mathfrak{A})$ contains the semisimple and nilpotent parts in $\text{End}(\mathfrak{A})$ of all of its elements. In particular, since $\mathrm{Der}(L)$ coincides with $\text{ad}(L)$ and $L\to \text{ad}(L)$ is injective, each $x\in L$ determines unique elements $s, n\in L$ such that $\text{ad}(x)=\text{ad}(s)+\text{ad}(n)$. This means that $x=s+n$, with $[sn]=0$, $s$ ad-semisimple, and $n$ ad-nilpotent. We write $s=x_{s}$, $n=x_{n}$, and call these the **semisimple** and **nilpotent parts** of $x$. 
