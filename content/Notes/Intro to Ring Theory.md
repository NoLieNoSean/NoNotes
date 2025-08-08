Refer @dummitAbstractAlgebra2004 chapter 7
Additional material from @aluffiAlgebraChapter02009 chapter 3 
These references disagree on many definitions.
# Preliminaries

> [!Definition] Ring
> A **ring** $R$ is a set with two binary operations, $+$ and $\cdot$, satisfying 
> 1. $(R, +)$ is an abelian [[LEC ALG2 1#^50bec9|group]].
> 2. $\cdot$ is associative: $(ab)c=a(bc)$ for all $a, b, c\in R$.
> 3. the distributive law holds in $R$: for all $a, b, c\in R$, $(a+b)c=ac+bc$ and $a(b+c)=ab+ac$.
> 
> $R$ is said to be **commutative** if $\cdot$ is commutative. $R$ is said to have an **identity** if there is an element $1\in R$ with $1a=a1=a$ for all $a\in R$.

> [!Warning]
> Many sources (including Conrad's notes) require that a ring $R$ has an identity (in other words, that $(R, \cdot)$ be a monoid).

Note that if $R$ has an identity, the distributive law forces $(R, +)$ to be abelian: 
$$
\begin{align}
(1+1)(a+b) & =(1+1)a+(1+1)b \\
 & =a+a+b+b \\
 \\
(1+1)(a+b) & =1(a+b)+1(a+b) \\
 & =a+b+a+b \\ \\
 \implies  & a+b=b+a.
\end{align}
$$

> [!Proposition] Properties of rings
> Let $R$ be a ring. Then, 
> 1. $0a=a0=0$ for all $a\in R$.
> 2. $(-a)b=a(-b)=-ab$ for all $a, b\in R$.
> 3. $(-a)(-b)=ab$ for all $a, b\in R$.
> 4. If $R$ has an identity, it is unique.
> 5. If $R$ has an identity and $a\in R$ has a multiplicative inverse (that is, there exists $b\in R$ such that $ab=ba=1$), it is unique.

> [!Example] The zero and trivial rings
> If $R$ has an identity and $1=0$, $a=1a=0a=0$ for all $a\in R$. Thus, $R=\{ 0 \}$, the **zero ring**. We usually exclude this possibility by requiring that $1\ne 0$.
> 
> Let $(R, +)$ be an abelian group. Define $ab=0$ for all $a, b\in R$. This is a ring, and is called the **trivial ring**. Multiplication does not add any new structure, and the trivial ring does not have an identity unless it is the zero ring.

> [!Definition]
> 1. A nonzero element $a\in R$ is a **left-zero-divisor** if there exist elements $b\ne 0$ in $R$ for which $ab=0$. Ditto for **right zero divisors**. Both are collectively called **zero divisors**.
> 2. Assume $R$ has an identity $1\ne 0$. An element $u\in R$ is a **left-unit** if $\exists v\in R$ such that $uv=1$.; it is a **right-unit** if $\exists v\in R$ such that $vu=1$. **Units** are two-sided units.


> [!Proposition] Aluffi III.1.12
> In a ring $R$, 
> 1. $u$ is not a left (right) zero divisor $\iff$ left (right) multiplication by $a$ is injective;
> 2. $u$ is a left (right) unit $\iff$ left (right) multiplication by $u$ is surjective;
> 3. $u$ is a left (right) unit $\implies$ right (left) multiplication by $u$ is injective, that is, $u$ is not a right (left) zero divisor.

^357946

It follows that a two sided zero divisor can not be a two sided unit.


> [!Definition] 
> 1. A ring $R$ with identity $1\ne 0$ is called a **division ring** if every nonzero $a\in R$ is a unit.
> 2. A commutative ring $R$ with identity $1\ne 0$ is called an **integral domain** if it has no zero divisors.
> 

A commutative division ring is a [[Fields#Axioms|field]]. A finite integral domain is also a field (Immediate proof from [[#^357946]]). Another equivalent way to arrive at a field is to make $(R^{\times}, \cdot)$ an abelian group for any ring $R$.

> [!Theorem] Wedderburn
> A finite division ring is necessarily commutative, i.e, is a field.

> [!Definition]
> A **subring** of the ring $R$ is a subgroup of $R$ that is closed under multiplication.

To show that a subset of a ring $R$ is a subring, it suffices to show that it is nonempty and closed under subtraction and multiplication.  

---

# Ring homomorphisms and quotient rings

> [!Definition]
> Let $R$ and $S$ be rings.
> 1. A **ring homomorphism** is a map $\varphi:R\to S$ satisfying $\varphi(a+b)=\varphi(a)+\varphi(b)$ for all $a, b\in R$ and $\varphi(ab)=\varphi(a)\varphi(b)$ for all $a, b\in R$. 
> 2. The **kernel** of the ring homomorphism $\varphi$, denoted $\ker\varphi$, is the set of elements of $R$ that map to $0$ in $S$.
> 3. A bijective ring homomorphism is called an **isomorphism**.

^6d13b3

If $\varphi:R\to S$ is a ring homomorphism, $\varphi:(R, +)\to(S, +)$ is a group homomorphism, and their kernels coincide.

> [!Proposition]
> Let $R$ and $S$ be rings and let $\varphi:R\to S$ be a homomorphism.
> 1. $\mathrm{Im}~\varphi$ is a subring of $S$.
> 2. $\ker\varphi$ is a subring of $R$. Furthermore, if $\alpha\in \ker\varphi$, then $r\alpha$ and $\alpha r\in \ker\varphi$ for every $r\in R$, i.e, $\ker\varphi$ is closed under multiplication by elements from $R$.

^58dd55

Analogous to [[LEC ALG2 2#^76946c|this]] result from group theory.
## Ideals

Let $\varphi:R\to S$ be a ring homomorphism with kernel $I$. Since $\varphi$ is in particular a homomorphism of abelian groups, the fibers of $\varphi$ (the additive cosets $r+I$, denoted by $R/I$) have the additive group structure of the additive quotient group of the additive abelian group $R$ by the (necessarily normal) subgroup $I$, with addition defined by
$$
(r+I)+(s+I)=(r+s)+I.
$$
Additionally, we can define a multiplicative structure on $R/I$ by
$$
(r+I)\times(s+I)=(rs)+I.
$$
This is well defined: for $\alpha, \beta\in I$, we have (from [[#^58dd55]])
$$
\begin{align}
(r+\alpha+I)\times(s+\beta+I) & =(r+\alpha)(s+\beta)+I \\
 & = rs+I.
\end{align}
$$
This makes the additive quotient group $R/I$ into a ring. Distributivity follows directly from the distributivity of $R$.

As in the case for groups, we can also consider when $+$ and $\times$ as defined above can be used to define a ring structure on the collection of cosets of an arbitrary subgroup $I$ of $R$ (for groups, [[LEC ALG2 3#^450126|we found]] that for $H< G$, $G/H$ is a group with the group operation defined by $(aH)(bH)=(ab)H$ iff $H\triangleleft G$). As noted above, since $R$ is an abelian additive group, the subgroup $I$ is necessarily normal, so $R/I$ is automatically an additive abelian group. However, $R/I$ in general does not have a multiplicative structure induced from $R$. So, what does it take?

Let $I$ be an arbitrary subgroup of $(R, +)$. For multiplication as defined to be well defined, we must have $(r+\alpha)(s+\beta)+I=rs+I$ for all $r, s\in R$ and all $\alpha, \beta\in I$. Letting $r=s=0$, we see that $I$ must be closed under multiplication, that is, $I$ must be a subring of $R$. Next, by letting $s=0$, we see that $I$ must be closed under multiplication on the left by elements from $R$. Similarly, letting $r=0$ tells us that $I$ must be closed under multiplication on the right by elements from $R$. Note that these are precisely the properties we used from [[#^58dd55]] above to show that $R/I$ is a ring when $I$ is the kernel of a ring homomorphism. Thus, the quotient $R/I$ of a ring $R$ by a subgroup $I$ has a natural ring structure iff $I$ is closed under multiplication on the left and right by the elements from $R$ (so in particular must be a subring of $R$). Such subrings are called **ideals**.

> [!Definition] Ideal
> Let $R$ be a ring, and let $I$ be a subgroup of $R$.
> 1. $I$ is a **left ideal** of $R$ if $I$ is a subring of $R$ and $I$ is closed under left multiplication by elements from $R$, i.e, $rI\subseteq I$ for all $r\in R$.
> 2. $I$ is a **right ideal** of $R$ if $I$ is a subring of $R$ and $I$ is closed under right multiplication by elements of $R$.
> 3. $I$ is an **ideal** of $R$ if it is both a left ideal and a right ideal of $R$.

> [!Proposition]
> Let $R$ be a ring and let $I$ be an ideal of $R$. Then the additive quotient group $R/I$ is a ring under the binary operations
> $$
> \begin{align}
>   & (r+I)+(s+I)=(r+s)+I \\
>  & (r+I)\times(s+I)=(rs)+I
> \end{align}
> $$
> for all $r, s\in R$. Conversely, if $I$ is any subgroup such that the above operations are well defined, then $I$ is an ideal of $R$.

## The isomorphism theorems

> [!Theorem] First isomorphism theorem for rings
> If $\varphi:R\to S$ is a ring homomorphism, then $\ker \varphi$ is an ideal of $R$, $\varphi(R)$ is a subring of $S$, and $R/\ker\varphi\cong \varphi(R)$. [[LEC ALG2 4#^396133|*]]

> [!Theorem]
> If $I$ is an ideal of $R$, them the map $R\to R/I$ defined by $r\mapsto r+I$ is a surjective ring homomorphism with kernel $I$, called the *natural projection*. 

Thus, every ideal is the kernel of a ring homomorphism and vice versa [[LEC ALG2 3#^23ccea|*]].

> [!Theorem] Second isomorphism theorem for rings
> Let $A$ be a subring and let $B$ be an ideal of $R$. Then $A+B=\{ a+b\ | \ a\in A, b\in B \}$ is a subring of $R$, $A\cap B$ is an ideal of $A$ and $(A+B)/B\cong A/(A\cap B)$. [[LEC ALG2 8#^e98d1f|*]]
> 
> > [!Proof]-
> > From the second isomorphism theorem for groups (note that $N_{(R, +)}(B)=(R, +)$), $A+B$ is a subgroup of $R$, $A\cap B$ is a subgroup of $A$, and $(A+B)/B$ and $A/(A\cap B)$ are isomorphic as groups. It is easy to check that $A+B$ is closed under multiplication. Thus, $A+B$ is a subring of $R$. Define a map $A\to(A+B)/B$ by $a\mapsto a+B$. This is a ring homomorphism. It follows from the first isomorphism theorem that $A\cap B$ is an ideal of $A$ and $(A+B)/B\cong A/(A\cap B)$.
> 

> [!Theorem] Third isomorphism theorem for rings
> Let $I$ and $J$ be ideals of $R$ with $I\subseteq J$. Then $J/I$ is an ideal of $R/I$ and $(R/I)/(J/I)\cong R/J$. [[LEC ALG2 6#^de06fc|*]] 
> 
> > [!Proof]-
> > Note that since $I$ is an ideal of $J$, $J/I$ is a ring. It is easily verified that $J/I$ is closed under multiplication with elements from $R/I$. Thus, $J/I$ is an ideal of $R/I$, and $(R/I)/(J/I)$ is a ring. Consider the map $R/I\to R/J$ defined by $a+I\mapsto a+J$. This is a ring homomorphism with kernel $J/I$. It follows from the first isomorphism theorem that $(R/I)/(J/I)\cong R/J$.

> [!Theorem] Correspondence theorem for rings
> Let $I$ be an ideal of $R$. The correspondence $A\leftrightarrow A/I$ is an inclusion preserving bijection between the set of subrings $A$ of $R$ that contain $I$ and the set of subrings of $R/I$. Also, $A$ (a subring containing $I$) is an ideal of $R$ iff $A/I$ is an ideal of $R/I$. [[LEC ALG2 5#^90ba83|*]] 
> 
> > [!Proof]-
> > From the correspondence theorem for groups, we have a inclusion preserving bijection between the set of subgroups of $R$ containing $I$ and the set of subgroups of $R/I$, given by $A\leftrightarrow A/I$. Since $A$ is a subring of $R$ $\iff$ $A/I$ is a subring of $R/I$, a restriction of this bijection to the set of subrings of $R$ is the correspondence we are after. The second assertion is trivial.

