---
tags: 
date: "2025-09-16"
time: "09:33"
---
[!Remark]
Every ideal in a ring is a module over $R$. Look up nakayama's lemma.

[!Remark]
Let $f:R\to S$ be a homomorphism and $M$ be a $S$-module $\implies$ $M$ is an $R$-module. If $M$ is an $R$-module, then for any ideal $J\subseteq ann(M)$, $M$ is $R/J$ module. 

$ann(M)=\{ r\in R\ | \ rM=0 \}$.

---

[!Theorem]
Every PID is a UFD.

[!Proof]-
factorization exists: Suppose $R$ is a PID. We prove by contradiction. Suppose there exists nonzero nonunit $x$ which cannot be factors as a finite product of irreducible elements. Let $S$ be the set of all such elements. Let $\alpha\in S$. Then $(\alpha)\subseteq M$ where $M$ is a maximal ideal and $M=(\beta)$ where $\beta$ is irreducible. So $(\alpha)\subseteq(\beta)$, $\alpha=f\beta$. $f$ can't be a unit, since that would mean $\alpha \not\in S$. For the same reason, $f$ can't be written as the product of a unit and finitely many irreducibles. Thus, $f$ is forced to be in $S$. So, $(\alpha)\subset(\beta)$, and the inclusion is proper. Continue this process to get an infinite chain; this is a contradiction. 

Uniqueness of factorization:jjj

