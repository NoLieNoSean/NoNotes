---
id: "571"
date: 2026-09-30
time: 14:00
tags:
  - Lecture
  - DGEO
pics: true
desc: Hopf-Rinow Theorem
P1: true
---
> [!Lemma]
> Let $\gamma:[a, b]\to M$ be minimizing, $t_{1}, t_{2}\in[a, b]$. Then, $\gamma|_{[t_{1}, t_{2}]}$ is also minimizing. 

> [!Lemma]
> Let $\gamma:[a, b]\to M$ be minimizing, $p=\gamma(a)$, $r=\gamma(b)$. Let $q=\gamma(t_{0})$. Then, $d(p, r)=d(p, q)+d(q, r)$. 

> [!Lemma]
> Let $p, q, r\in M$ be such that $d(p, r)=d(p, q)+d(q, r)$. Suppose $\gamma_{1}:p\rightsquigarrow q$ and $\gamma_{2}:q\rightsquigarrow r$ are minimizing. Then $\gamma=\gamma_{1}*\gamma_{2}:p\rightsquigarrow r$ is minimizing. 


> [!Theorem] Hopf-Rinow
> Let $M$ be a smooth manifold. TFAE:
> 1. Every maximal geodesic in $M$ is defined for all $t\in \mathbb{R}$. 
> 2. $\forall p\in M$, $\exp_{p}$ is defined on all $T_{p}M$. 
> 3. There exists $p\in M$ such that $\exp_{p}$ is defined on all $T_{p}M$. 
> 4. $(M, d_{M})$ is a complete metric space. 

^0b65ae

[!Proof]-

(1) ⇒ (2)

(2) ⇒ (3)

(4) ⇒ (1)

(3) ⇒ (4) Consider the statement

(3') For all $q\in M$, there exists a minimizing geodesic $p\rightsquigarrow q$. 

We first show that (3') ⇒ (3). 




> [!Definition] Complete manifold
> $M$ is called **complete** if any of the equivalent conditions of [[#^0b65ae]] are satisfied. 

