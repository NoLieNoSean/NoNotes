---
id: "394"
date: 2026-01-23
time: 11:50
tags:
  - ALG4
  - Lecture
---
# Finitely generated torsion modules over PIDs

See @langAlgebra2002

$R$ PID, $M$ fg torsion module gen $\{ x_{1}, \dots, x_{n} \}$. 

[!Proposition]
$\text{Ann}_{R}(M)$ is a nonzero (principal) ideal. 

[!Proof]-

Clear that
$$
\bigcap\text{Ann}_{R}(Rx_{i})=\text{Ann}_{R}(M).
$$
Since $\text{Ann}_{R}(Rx_{i})\ne 0$ for all $i$, we see that the intersection is nonzero (just consider the product of the gens).

[!Definition]
Let $p\in R$ be prime. 
$$
M_{p}=\{ x\in M: \exists e\geqslant  0 \text{ such that }p^{e}x=0 \}
$$

[!Proposition]
There exists $e'\geqslant 0$ such that
$$
M_{p}=\{ x\in M: p^{e'}x=0 \}
$$

[!Proof]-
$\{ x\in M : px=0\}\subseteq \{ x\in M: p^{2}x =0\}\subseteq\dots$ .  Chain stabilizes since $M$ is Noetherian. 

[!Proposition]
TFAE:
1. $M(p)\ne 0$. 
2. $\exists x\ne 0$ such that $px =0$. 
3. $\text{Ann}(M)\subseteq \langle p \rangle$. 

[!Proof]-

$1 \iff 2$ is clear. 

$2 \implies 3$ Let $x\ne 0$ be such that $px = 0$. $\text{Ann}_{R}(M)\subseteq\text{Ann}_{R}(Rx)$. Note that $\text{Ann}_{R}(Rx)\supseteq \langle p \rangle$. 

$3 \implies 2$ see pic



[!Corollary]
$\{ p:p\in R \text{ prime }, M_{p}\ne 0 \}$ is a finite set (up to multiplication by units, of course). 

[!Proof]-

There are only finitely many prime ideals $\mathfrak{p}$ containing $\text{Ass}_{R}(M)$ (since PID $\implies$ UFD). 

[!Proposition]
Let $p, \pi$ be primes which are not multiples of each other. Then, $M(p)\cap M(\pi)=\emptyset$. 

[!Proof]-

Let $x\in M(p)\cap M(\pi)$. Then there exists $e\geqslant 0$ and $\epsilon\geqslant 0$ such that $p^{e}x=0=\pi^{\epsilon}x$. If $e=0$ then ...


[!Definition]
$A(M)=\{ p\in M:p \text{ prime }, M_{p}\ne 0\}$, up to multiplication by units. 

[!Theorem]
$$
M=\bigoplus_{p\in\text{A}(M)}M(p).
$$
[!Proof]-

Part 1: $\sum_{p\in A(M)}M(p)$ is a direct sum. 

Suppose $A(M)=\{ p_{1}, \dots, p_{m} \}$. WTST
$$
M(p_{1})\cap \sum_{i=2}^{m} M(p_{i})=0
$$
Let $x\in M(p_{i})\cap \sum_{i=2}^{m}M(p_{i})$. 

WLOG, there exists $e_{1}\geqslant 1$ such that $p_{1}^{e_{1}}x=0$ and $x_{i}\in M(p_{i})$ for $2\leqslant i\leqslant m$ such that $x=x_{2}+\dots+x_{m}$. 