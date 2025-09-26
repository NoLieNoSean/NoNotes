---
tags:
  - CAL2
  - Lecture
date: 2025-09-25
time: 10:57
---
# Partitions of unity

[!Example] @spivakCalculusManifoldsModern1965 2.26
Suppose $A\subseteq \mathbb{R}^{n}$ is open, $C\subseteq A$ is compact. Then, there exists a $C^{\infty}$ function $f:A\to \mathbb{R}$ such that $f(x)=1$ for all $x\in C$ and $f$ is $0$ outside a closed set $B$ in $A$. In other words, $\text{supp}(f)\subseteq A$.

[!Theorem]
Let $A\subseteq \mathbb{R}^{n}$ be any subset. Let $\mathcal{O}$ be an open cover of $A$. Then there is a collection $\Phi$ of $C^{\infty}$ functions defined on an open set containing $A$ such that the following hold:
1. $\forall x\in A$, $\forall\varphi\in \Phi$, $0\leq\varphi(x)\leq 1$.
2. $\forall x\in A$, $\exists$ an open set $V_{x}\subseteq \mathbb{R}^{n}$ containing $x$ such that all but finitely many $\varphi\in \Phi$ are zero on $V_{x}$.
3. $\forall x\in A$, $\sum_{\varphi\in \Phi}\varphi(x)=1$.
4. $\forall\varphi\in \Phi$, $\exists U\in \mathcal{O}$ such that $\text{supp}(\varphi)\subseteq U$.

[!Proof]-
First prove when $A$ is compact.