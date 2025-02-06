---
tags:
  - ALG2
  - Lecture
  - Processed
date: 2025-01-07
time: 09:13
---
## Groups

Refer the last section of [[Analysis1_L2]].

> [!Definition]
> A Group is a pair $G=(G, \star)$ consisting of a set of elements $G$, and a binary operation $\star$ on $G$, such that
> - $\star$ is *associative* for any $a, b, c\in G$. 
> - $G$ has an *identity* element, denoted $1_{G}$, such that $1_{G}\star g=g\star 1_{G}\ \ \forall g\in G$. 
> - Each $g\in G$ has an *inverse* $g^{-1}\in G$ such that $gg^{-1}=g^{-1}g=1_{G}$.

If $\star$ is commutative, the group is called an abelian group.

Abelian examples:
- The additive group of integers $(\mathbb{Z}, +)$.
- The multiplicative group of nonzero rational numbers $(\mathbb{Q}^{\times}, \cdot)$.
- Addition mod $n$: the residues modulo $n$ for some $n>0$ form a group $(\mathbb{Z}/n\mathbb{Z}, +)$ under addition. Each element of $\mathbb{Z}/n\mathbb{Z}$ is an equivalence class. For example, $\overline{1}=\{ 1+kn : k\in \mathbb{Z} \}\in \mathbb{Z}/n\mathbb{Z}$. Thus, $\mathbb{Z}/n\mathbb{Z}=\{ \overline{0}, \overline{1}, \dots, \overline{n-1} \}$. 
- Multiplication mod $p$: Let $p$ be a prime. Consider the nonzero residues modulo $p$, which we denote by $(\mathbb{Z}/p\mathbb{Z})^{\times}$. Then, $((\mathbb{Z}/p\mathbb{Z})^{\times}, \times)$ is a group. 

  > [!Question]- Why does $p$ need to be prime?
  > If $p$ is prime and $\gcd (p, a)=1$, it follows from [[Bezout’s lemma]] that there exist integers $x$ and $y$ such that $ax+py =1$. So, there exists a number $1\leq r<p$ such that $ar\equiv 1 \mod p$. If $p$ were not prime, say $p=mn$, we would have $mn\equiv0 \mod p$, making it impossible for $m$ and $n$ to have inverses. Can also be explained by [[Fermat's little theorem]].

- The set of all positive integers less than a given positive integer $n$ and co-prime to $n$ form a group under multiplication modulo $n$, which is denoted by $U(n)$.
  Proof: Let $a, b\in U(n)$. By definition,  $(a, n)=(b, n)=1$. To prove closure, we have to show that $ab\equiv c\mod n$, where $c\in U(n)$. Assume $c\not\in U(n)$, i.e, $(c, n)\ne 1$. Then, $ab-c=kn$ for some integer $k$, which implies $ab-c$ (and therefore $ab$) must be divisible by $(c, n)$. Contradiction! The existence of an identity is evident. To prove the existence of inverses, we invoke [[Euler's theorem]], which tells us that the order of every $a\in U(n)$ is less than or equal to the order (size) of $U(n)$, i.e, every element generates a cyclic subgroup. This is great, since we know that there always exists $k$ every every $a\in U(n)$ such that $a^{k}=1$, so the inverse of $a$ will just be $a^{k-1}$. 

Non-Abelian examples:
- $(GL_{n}(\mathbb{R}), \times)$: The set of $n\times n$ invertible real matrices. The fact that it is closed under $\times$ comes from the fact that if $A$ and $B$ are invertible matrices, $AB$ is also invertible.

### Properties of groups

Let $G$ be a group.
- The identity of $G$ is unique: If $1$ and $1'$ are identities, $1=1\star1'=1'$.
- The inverse of any element is unique: If $h$ and $h'$ are inverses of $g$, $h'=(hg)h'=h$.
- For any $g\in G$, $(g^{-1})^{-1}=g$.
- If $a, b\in G$, then $(ab)^{-1}=b^{-1}a^{-1}$.
- Pick a $g\in G$. Then the map $G\to G$ given by $x\mapsto gx$ is a bijection. The map is injective, since if $x_{1}\mapsto y$ and $x_{2}\mapsto y$, we have $gx_{1}=gx_{2}\implies x_{1}=x_{2}$. The map is surjective, since for any $y\in G$, $g^{-1}y\mapsto y$. 

### Subgroups

> [!Definition]
> Let $G=(G, \star)$ be a group. A *subgroup* of $G$ is a group $H=(H, \star)$ where $H$ is a subset of $G$. Mya be denoted $H\leq G$.

> [!Theorem]
> Every subgroup of $\mathbb{Z}$ is of the form $n\mathbb{Z}$, $n\geq 0$. 

> Proof
> Let $S$ be any subgroup of $\mathbb{Z}$. If $S=\{ 0 \}$, we are done. If not, choose smallest $h>0$. For any $g(>0)\in S$, write $g=qh + r$. If $r=0$, we are done. If $0<r<h$, then $r=g-qh\in S$, so we found a positive element smaller than $h$, which is a contradiction.