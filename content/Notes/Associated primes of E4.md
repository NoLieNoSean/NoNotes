---
tags:
date: 2025-09-15
time: 17:55
draft: true
---
> [!Note]- Images
>
> ![[1757939391377.jpg|308]]![[1757939391367.jpg|300]]
> ![[1757939391388.jpg]]
> ![[1757939391398.jpg]]
> ![[1757939391406.jpg]]


Let $R$ be a Noetherian commutative ring. An ideal $I$ of $R$ is called primary if it is a proper ideal and for each pair of elements $x$ and $y$ in $R$ such that $xy\in I$, either $x$ or some power of $y$ is in $I$; equivalently, every zero-divisor in the quotient $R/I$ is nilpotent. The radical of a primary ideal $Q$ is a prime ideal and $Q$ is said to be $\mathfrak{p}$-primary for $\mathfrak{p}=\sqrt{ Q }$.

Any ideal $I$ is a Noetherian commutative ring has an irredundant **primary decomposition** into primary ideals:
$$
I=Q_{1} \cap\dots \cap Q_{n}.
$$
Irredundant here means: removing any of the $Q_{i}$ changes the intersection, and all the prime ideals $\sqrt{ Q_{i} }$ are distinct.

This decomposition is unique in the following sense:
- the set $\text{Ass}_{R}(I)\equiv\text{Ass}_{R}(R/I):=\{ \sqrt{ Q_{i} }\ | \ i \}$ is uniquely determined by $I$, and is called the set of **associated primes** of $I$. Minimal elements in $\text{Ass}_{R}(I)$ are called **isolated primes** while the rest (those properly containing associated primes) are called **embedded primes**.


Let $R$ be a ring, $M$ be an $R$-module. Let $S\subseteq M$ be nonempty. $\text{Ann}_{R}(S)=\{ r\in R\ | \ rs=0\text{ for all }s\in S \}$.

A nonzero $R$-module $N$ is called a **prime module** if $\text{Ann}_{R}(N)=\text{Ann}_{R}(N')$ for any nonzero submodule $N'$ of $N$. 
- For a prime module $N$, $\text{Ann}_{R}(N)$ is a prime ideal.
- An **associated prime** of $M$ is an ideal of the form $\text{Ann}_{R}(N)$ where $N$ is a prime submodule of $M$.

$\text{Min}(I)$ denotes the set of prime ideals $\mathfrak{p}$ that are minimal wrt inclusion among the prime ideals containing $I$.


> [!Theorem] @brodmannAsymptoticStability$operatornameAssM 
> There exists $n_{0}$ such that $\text{Ass}(I^{n})=\text{Ass}(I^{n_{0}})$ for all $n\geq n_{0}$. The smallest such $n_{0}$ is denoted by $\text{astab}(I)$.

> [!Definition]
> $\epsilon_{q}=(\varepsilon_{1}, \dots, \varepsilon_{q})\subseteq k[y_{A}:A\subseteq[q]]$, where 
> $$
> \varepsilon_{i}=\prod_{A\subseteq[q], i\in A}y_{A}.
> $$

For example, 
$$
\epsilon_{3}=(y_{1}y_{12}y_{13}y_{123}, y_{2}y_{12}y_{23}y_{123}, y_{3}y_{13}y_{23}y_{123}).
$$
Let $I$ be a squarefree monomial ideal with $q$ generators. Then, properties of $I$ can be gleaned from properties of $\epsilon_{q}$.

> [!Theorem]
> $\text{astab}(I)\leq\text{astab}(\epsilon_{q})$, where $I$ is a squarefree monomial ideal with $q$ generators.



[!Question]
- Lemma 1.1 holds for $r=1$ too. Why $r\geq 2$ ?
- Why is $\text{Min}(I)\subseteq\text{Ass}(R/I)$?
- How does M2 compute ass?