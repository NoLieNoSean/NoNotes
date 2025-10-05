# Ring of fractions

A Commutative ring $R$ is always a subring of a larger ring $Q$, called the *ring of fractions*, in which every nonzero element of $R$ that is not a zero divisor is a unit in $Q$. If $R$ is an integral domain, $Q$ will be a field, called the *field of fractions* of $R$.

> [!Theorem] @dummitAbstractAlgebra2004 [p. 260] 
> Let $R$ be a commutative ring. Let $D$ be any nonempty subset of $R$ that does not contain $0$, *does not contain any zero divisors* and is closed under multiplication. Then there is a commutative ring $Q$ such that $Q$ contains $R$ as a subring and every element of $D$ is a unit in $Q$. Also, 
> 1. every element of $Q$ is of the form $rd^{-1}$, for some $r\in R$ and $d\in D$. If $D=R\setminus \{ 0 \}$ then $Q$ is a field.
> 2. $Q$ is the "smallest" ring containing $R$ in which all elements of $D$ become units. Precisely, $Q$ satisfies this universal property: If $h:R\to S$ in an injective ring homomorphism such that $h(d)$ is a unit for every $d\in D$, there exists a unique injective homomorphism $\overline{h}:Q\to S$ such that $\overline{h}\ | \ _{R}=h$. 

---
# Localization

We now generalize the notion of ring of fractions so that $D$ can have zero divisors. Note that when $D$ only contained non-zero divisors, the defining equivalence relation on $D^{-1}R$ was
$$
\frac{r}{s}=\frac{r'}{s'}\quad \text{iff }\quad rs'=r's.
$$
We cannot use the same definition here: suppose $rs'-r's\ne 0$ and $u\in D$ is such that $u(rs'-s'r)=0$. Since $u$ is a unit in $D^{-1}R$, we have
$$
\frac{r}{s}=\frac{r'}{s'}\iff\frac{ur}{s}=\frac{ur'}{s'},
$$
forcing $r/s=r'/s'$. The following definition provides the obvious remedy: 

> [!Definition]
> Let $R$ be a commutative ring and $S\subseteq R$ be a multiplicative subset. The **localization** $S^{-1}R$ is the ring of fractions $r/s$ with $r\in R$, $s\in S$, modulo the relation
> $$
> \frac{r}{s}=\frac{r'}{s'}\quad \text{ iff }\quad \exists u\in S\text{ with }u(s'r-sr')=0.
> $$

^5149e4

Standard examples of multiplicative sets include:
1. $S=R\setminus \mathfrak{p}$, for a prime ideal $\mathfrak{p}$
2. $S=\{ 1, f, f^{2}, \dots \}$
3. $S=R\setminus \{ 0 \}$, where $R$ is an integral domain (localizing at this $S$ just gives us the field of fractions of $R$).

If $0\in S$, $S^{-1}R$ is the zero ring, so we usually exclude $0$ form $S$. There is a canonical embedding
$$
\iota:R\to S^{-1}R, \quad r\mapsto r/1,
$$
which is injective iff $S$ does not contain any zero divisors.

There is a bijection between the set of prime ideals of $S^{-1}R$ and the set of prime ideals of $R$ that are disjoint from $S$ (stated [[TUT ALG3 3#^a53acd|here]] for integral domains, this apparently holds in general. Check this).

## Localization of a module

> [!Definition]
> Let $M$ be an $R$-module and $S\subseteq R$ be a multiplicative set. The **localization** of $M$ at $S$ is denoted $S^{-1}M$ or $M_{S}$ and constructed analogously to [[#^5149e4]].

$S^{-1}M=0$ iff for every $m\in M$ there exists $s\in S$ with $sm=0$. For $S=R\setminus \mathfrak{p}$, this gives: $M_{\mathfrak{p}}=0$ iff for every $m\in M$ there is $s\not\in p$ with $sm = 0$. Equivalently, $M_{\mathfrak{p}}\ne 0$ iff there exists $m\in M$ with $\text{Ann}_{R}(m)\subseteq \mathfrak{p}$. 