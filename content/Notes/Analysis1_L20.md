---
tags:
  - ANA1
  - Lecture
---
2024-09-27, Friday
1402

---
![[1728577113539.jpg]]

To do:
- [x] uniform continuity
- [ ] connectedness

>[!Recall]
>Definition of [[Analysis1_L17#Absolute and relative definitions of open cover compactness|open cover compactness]].

---

## Uniform continuity

Definition of continuity:
$\forall x \in X$, $\forall \epsilon>0$, $\exists\delta>0$ such that $\forall x'\in X$, $d(x, x')<\delta \implies d(f(x), f(x'))<\epsilon$.

Definition of uniform continuity:
$\forall\epsilon>0$, $\exists\delta>0$ such that $\forall x, x'\in X$, $d(x, x')<\delta \implies d(f(x), f(x'))<\epsilon$.

note that uniform continuity implies continuity, but the converse is generally not true.

>[!Theorem]
>$X$ is compact, $f:X\to Y$ is continuous. Then, $f$ is uniformly continuous.

