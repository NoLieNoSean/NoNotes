# Ring of fractions

A Commutative ring $R$ is always a subring of a larger ring $Q$, called the *ring of fractions*, in which every nonzero element of $R$ that is not a zero divisor is a unit in $Q$. If $R$ is an integral domain, $Q$ will be a field, called the *field of fractions* of $R$.

> [!Theorem]
> Let $R$ be a commutative ring. Let $D$ be any nonempty subset of $R$ that does not contain $0$, does not contain any zero divisors and is closed under multiplication. Then there is a commutative ring $Q$ such that $Q$ contains $R$ as a subring and every element of $D$ is a unit in $Q$. Also, 
> 1. every element of $Q$ is of the form $rd^{-1}$, for some $r\in R$ and $d\in D$. If $D=R\setminus \{ 0 \}$ then $Q$ is a field.
> 2. $Q$ is the "smallest" ring containing $R$ in which all elements of $D$ become units. Precisely, $Q$ satisfies this universal property: If $h:R\to S$ in an injective ring homomorphism such that $h(d)$ is a unit for every $d\in D$, there exists a unique injective homomorphism $\overline{h}:Q\to S$ such that $\overline{h}\ | \ _{R}=h$. 

---

# Localization

[!Definition]
Let $R$ be an integral domain. Let $S\subseteq R$ be a multiplicative set. Define the **localization** of $R$ as $S$ by
$$
S^{-1}R:=\left\{  \frac{a}{b}:a\in R, b\in S  \right\}.
$$
$a/s=b/s'$ if $as'=bs$. 