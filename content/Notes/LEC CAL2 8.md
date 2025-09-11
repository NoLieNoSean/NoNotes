---
tags: 
date: "2025-09-11"
time: "10:34"
---
# Inverse function theorem
[!Lemma]
Let $\Omega \subseteq L(\mathbb{R}^{n})$ be the set of all invertible linear transformations from $\mathbb{R}^{n}\to \mathbb{R}^{n}$. If $A\in \Omega$, $B\in L(\mathbb{R}^{n})$, $\lVert B-A \rVert\lVert A^{-1} \rVert< 1$, then $B\in \Omega$. 
$\Omega$ is open and the map $\Omega\to \Omega$: $A\mapsto A^{-1}$ is continuous.

[!Lemma]
Let $f:\mathbb{R}^{n}\to \mathbb{R}^{n}$ be a contraction. Then there exists a unique $x\in \mathbb{R}^{n}$ such that $f(x)=x$.




[!Theorem]
Let $X\subseteq \mathbb{R}^{n}$ be open and let $f:X\to \mathbb{R}^{n}$ be continuously differentiable. Suppose $f'(a)$ is invertible for some $a\in X$. Then,
1. There exist open sets $U\subseteq X$, $V\subseteq \mathbb{R}^{n}$ such that $a\in U$, $b\in V$, and $f\ | \ _U:U\to V$ is a bijection.
2. Let $g:V\to U$ be the set theoretic inverse of $f\ | \ _U$. Then, $g\in C^{1}(V)$ and $g'(y)=(f'(g(y)))^{-1}$ for all $y\in V$.


$b=f(a)$.