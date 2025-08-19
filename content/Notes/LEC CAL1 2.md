---
tags:
  - CAL1
  - Lecture
  - Processed
date: 2025-01-09
time: 11:50
---
## Equivalence of p-norms

> [!Theorem]
> Any two [[LEC CAL1 1#The p-norm|p-norms]] are [[LEC CAL1 1#Equivalence of norms|equivalent]]. 

A few simple examples first:
- $\lVert \cdot \rVert_{1}$ and $\lVert \cdot \rVert_{\infty}$ are equivalent: $\lVert \cdot \rVert_{\infty}\leq \lVert \cdot \rVert_{1}\leq n\lVert \cdot \rVert_{\infty}$.
- $\lVert \cdot \rVert_{p}$ and $\lVert \cdot \rVert_{\infty}$ are equivalent: $\lVert \cdot \rVert_{\infty}\leq \lVert \cdot \rVert_{p}\leq n^{1/p}\lVert \cdot \rVert_{\infty}$.
- Note that equivalence is an equivalence relation, i.e, it is transitive.
  $\lVert \cdot \rVert_{1}$ and $\lVert \cdot \rVert_{p}$ are equivalent: $\frac{1}{n}\lVert \cdot \rVert_{1}\leq \lVert \cdot \rVert_{p}\leq n^{1/p}\lVert \cdot \rVert_{1}$.

Thus, all p-norms are equivalent.
