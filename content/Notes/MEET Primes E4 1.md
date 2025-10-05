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



---



# Preliminaries

Let $R$ be a Noetherian commutative ring. An ideal $I$ of $R$ is called primary if it is a proper ideal and for each pair of elements $x$ and $y$ in $R$ such that $xy\in I$, either $x$ or some power of $y$ is in $I$; equivalently, every zero-divisor in the quotient $R/I$ is nilpotent. The radical of a primary ideal $Q$ is a prime ideal and $Q$ is said to be $\mathfrak{p}$-primary for $\mathfrak{p}=\sqrt{ Q }$.

Any ideal $I$ is a Noetherian commutative ring has an irredundant **primary decomposition** into primary ideals:
$$
I=Q_{1} \cap\dots \cap Q_{n}.
$$
By irredundant, we mean that removing any of the $Q_{i}$ changes the intersection, and all the prime ideals $\sqrt{ Q_{i} }$ are distinct.

This decomposition is unique in the following sense: the set $\text{Ass}_{R}(I):=\{ \sqrt{ Q_{i} }\ | \ i \}$ is uniquely determined by $I$, and is called the set of **associated primes** of $I$. Minimal elements in $\text{Ass}_{R}(I)$ are called **isolated primes** while the rest (those properly containing associated primes) are called **embedded primes**.

Here's another way to think about associated primes: Let $R$ be a Noetherian ring, $M$ be a finitely generated $R$-module. Let $S\subseteq M$ be nonempty. Define the **annihilator** of $S$ to be
$$
\text{Ann}_{R}(S)=\{ r\in R\ | \ rs=0\text{ for all }s\in S \}.
$$
A nonzero $R$-module $N$ is called a **prime module** if $\text{Ann}_{R}(N)=\text{Ann}_{R}(N')$ for any nonzero submodule $N'$ of $N$. 
- For a prime module $N$, $\text{Ann}_{R}(N)$ is a prime ideal in $R$.
- An **associated prime** of $M$ is an ideal of the form $\text{Ann}_{R}(N)$ where $N$ is a prime submodule of $M$. Equivalently, when $R$ is commutative, an **associated prime** of $M$ is an ideal of the form $\text{Ann}_{R}(x)$, for $x\in M$.
- See that $\text{Ass}_{R}(R/I)$, interpreted using this definition, is the same thing as $\text{Ass}_{R}(I)$ interpreted using the previous definition.
- Easy to see that $\text{Ass}(Q)=\{ \sqrt{ Q } \}$ if $Q\subseteq R$ is primary.

$\text{Min}(I)$ denotes the set of prime ideals $\mathfrak{p}$ that are minimal wrt inclusion among the prime ideals containing $I$.

Note that $\mathfrak{p}$ is a minimal prime ideal of $R/I$ iff $\mathfrak{p}\in\text{Min}(I)$.

> [!Fact]
> For an ideal $I$ of a Noetherian ring $R$, $\text{Ass}(I)$ is a finite set, and $\text{Min}(I)\subseteq\text{Ass}(I)$.

> [!Theorem] @brodmannAsymptoticStability$operatornameAssM 
> Let $R$ be a Noetherian ring, $I$ an ideal of $R$ and $M$ a finitely generated $R$-module. Let $A$ be the map from $\mathbb{N}$ to subsets of $\text{spec}(R)$ defined by $A(n)=\text{Ass}_{R}(M/I^{n}M)$. Then, there exists $n_{0}$ such that for all $n\geq n_{0}$, $A(n)=A(n_{0})$. 

In particular, for $M=R$, we have $A(n)=\text{Ass}_{R}(I^{n})$. The smallest $n_{0}$ for which $A(n)$ stabilizes is denoted by $\text{astab}(I)$.

---
# Definitions

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

