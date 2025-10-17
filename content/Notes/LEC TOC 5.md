---
tags:
  - TOC
  - Lecture
date: 2025-08-13
time: 09:10
id: "244"
---
> [!Recall]
> Closure properties of recognizable languages: closed under boolean operations $(\cap, \cup, -^{c})$. Saw the cartesian product construction for intersections.

Recognizable languages are also closed under homomorphisms, inverse homomorphisms, concatenation, and the kleene star.

> [!Definition]
> A **homomorphism** is a function $h:\Sigma^{*}\to\Gamma^{*}$ such that $h(uv)=h(u)h(v)$, and $h(\epsilon)=\epsilon$. 

A homomorphism $h:\Sigma^{*}\to\Gamma^{*}$ is uniquely determined by its values on $\Sigma$.

[!Proposition]
If $L\subseteq\Sigma^{*}$ is a recognizable and $h:\Sigma^{*}\to\Gamma^{*}$ is a homomorphism, then $h(L)\subseteq\Gamma^{*}$ is also recognizable. If $M\subseteq\Gamma^{*}$ is recognizable, then $h^{-1}(M)\subseteq\Sigma^{*}$ is also recognizable.

[!Proof]-
Let $A$ be an NFA over $\Sigma$ recognizing $L$. Replace every edge in $A$ labelled $a\in\Sigma$ with a path which reads $h(a)\in\Gamma^{*}$. 

Let $B$ be an NFA over $\Gamma$ recognizing $M$. Create a copy $B'$ of $B$. Remove all transitions in $B'$. Connect two states $\alpha, \beta$ in $B'$ with an arrow labelled $a\in\Sigma$ if $\beta$ can be reached from $\alpha$ on reading $h(a)$ in $B$.

[!Proposition]
Recognizable languages are closed under concatenation.

[!Proposition]
Recognizable languages are closed under iteration.

---

# Rational languages

[!Definition]
The set of **rational languages** are the smallest class of languages such that
1. it contains every finite language
2. is closed under union
3. is closed under concatenation
4. is closed under Keene star


---

#### **Key Ideas**

Homomorphisms: definition, recognizable languages are closed under images of homomorphisms and inverse images of homomorphisms. Rational expressions: definition as the smallest class of languages containing finite languages and closed under certain operations.

#### **References**

Homomorphisms: Kozen, chapter 10

Rational expressions: Sipser, pages 63-66

#### **Practice Problems**

Kozen, homework 2 (pg 302), problem 3

Sipser, problem 1.57 (pg 92)

Last modified: Monday, 18 August 2025, 3:19 PM