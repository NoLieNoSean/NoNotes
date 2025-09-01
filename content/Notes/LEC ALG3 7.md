---
tags:
  - ALG3
  - Lecture
date: 2025-08-26
time: 10:21
---
> [!Definition]
> A **size function** on an integral domain $R$ can be any function $\sigma$ whose domain is the set of nonzero elements of $R$, and whose range is the set of nonnegative integers. An integral domain $R$ is a **Euclidean domain** if there is a size function $\sigma$ on $R$ such that division with remainder is possible, in the following sense: Let $a, b\in R$, and suppose $a\ne 0$. There are elements $q$ and $r$ in $R$ such that $b=aq+r$, and either $r=0$ or $\sigma(r)<\sigma(a)$.



> [!Definition]
> Let $a, b\in R$. We say $a\ | \ b$ if there is an element $r\in R$ such that $b=ar$. If $a\ | \ b$ and $b\ | \ a$, we say $a$ and $b$ are associates.

> [!Proposition]
> Let $a, b\in R$.
> 1. $a\ | \ b\iff(b)\subseteq(a)$.
> 2. $a$ and $b$ are associates $\iff$ $(a)=(b)$.
> 3. $u$ is a unit $\iff$ $u\ | \ a$ for all $a\in R$.
> 4. Association is an equivalence relation.

> [!Definition]
> An element $a$ is **irreducible** if $a$ is not a unit and $a=a_{1}a_{2}$ implies $a_{1}$ is a unit or $a_{2}$ is a unit.
> An element $p$ is **prime** if $p=ab$ implies $p\ | \ a$ or $p\ | \ b$.

These notions coincide for UFDs, but are not equivalent in general. 

Every prime is irreducible in an integral domain. The converse is not generally true.

[!Example]
$(1+i)$ and $(1-i)$ are associates in the ring of Gaussian integers. 
$(\overline{2})$ and $(\overline{3})$ are associates in $\mathbb{Z}/8\mathbb{Z}$. 
In $\mathbb{Z}[\sqrt{ -5 }]$, $\langle 6 \rangle=\langle 2 \rangle\langle 3 \rangle=\langle 1-\sqrt{ -5 } \rangle\langle 1+\sqrt{ -5 } \rangle$.

In a notherean ring, the radical of every ideal can be written as a finite intersection of prime ideals.

Hilbert: If $R$ is Notherean then $R[x]$ is notherean. Thus, $\mathbb{Z}[x_{1}, \dots, x_{n}]$ is notherean. $[x_{1}, \dots, x_{n}]$ is notherean for any field $k$. If $R$ is notherean, for any ideal $I$ of $R$, $R/I$ is notherean. 

Also, $R=k[x, y]$ is notherean. However, $S=k[x, xy, xy^{2}, \dots]$ is not notherean: $\langle x \rangle \subset \langle x, y \rangle \subset \langle x, xy^{2} \rangle \subset\dots$ (exercise: show that $S$ is not notherean, that is, this chain does not stabilize).

[!Theorem]
Let $R$ be an integral domain, $a, b\in R$, $a, b\ne 0$. Then, 
1. $a$ is prime $\iff$ $\langle a \rangle$ is a nonzero prime ideal. (ID hypothesis not required.)
2. If $R$ is not a field, then $b$ is irreducible  $\iff$ $\langle b \rangle$ is maximal in the set of all proper principal ideals.
3. Every prime element is irreducible.
4. If $R$ is a PID, $p$ is prime $\iff$ $p$ is irreducible.
5. Every associate of an irreducible/prime element is irreducible/prime.
6. The only divisors of irreducible elements are units of $R$.

[!Proof]-
$(1)$ Suppose $a$ is prime. Let $\alpha\beta\in \langle a \rangle$. We need to show that $\alpha\in \langle a \rangle$ or $\beta\in \langle a \rangle$. $\alpha\beta=ar$. $a\ | \ ar=\alpha\beta$, so $a\ | \ \alpha\beta$, so $a\ | \ \alpha$ or $a\ | \ \beta$. 

Conversely, suppose $(a)$ is prime. Let 

$(2)$ Suppose $b$ is irreducible. We have to show that $\langle b \rangle$ is maximal among all principal ideals, that is, if $\langle b \rangle \subseteq \langle c \rangle$ then $\langle b \rangle=\langle c \rangle$ or $\langle c \rangle=R$. $b=cr$. $c$ is unit or $r$ is unit.

Conversely, suppose $\langle b \rangle$ is maximal in the set of all principle ideals. If $b=b_{1}b_{2}$, then $\langle b \rangle\subseteq \langle b_{1} \rangle$. 

