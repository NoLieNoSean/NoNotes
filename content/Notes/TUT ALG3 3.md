---
tags:
  - ALG3
  - Tutorial
date: 2025-08-21
time: 15:46
---
# Problem 2

> [!Exercise]
> Let $R=\mathbb{C}[x, y, z]$ and $S=\mathbb{C}[t]$. Let $\phi:R\to S$ be a homomorphism defined by $\phi(x)=t^{3}$, $\phi(y)=t^{4}$, and $\phi(z)=t^{5}$. Show that $\ker \phi=(x^{3}-yz, y^{2}-xz, z^{2}-x^{2}y)$. 

Let $I=(x^{3}-yz, y^{2}-xz, z^{2}-x^{2}y)$. We will prove that
$$
\frac{R}{I}\cong \mathbb{C}[t^{3}, t^{4}, t^{5}].
$$
Define the map $\varphi:R/I\to \mathbb{C}[t^{3}, t^{4}, t^{5}]$ by $p(x, y, z)+I\mapsto \phi(p(x, y, z))$. It is easily verified that this is a well defined homomorphism. It is also clearly surjective. It only remains to show injectivity.

Let $p(x, y, z)\in R$. Note that the following rewrite rules when applied on $p(x, y, z)$ preserve membership in $p(x, y, z)+I$:
$$
\mathfrak{R}=\begin{cases}
 (1) & x^{3}\to yz, \\
 (2) & x^{2}y\to z^{2}, \\
 (3) & y^{2}\to xz. \\
\end{cases}

$$

> [!Claim]
> Any sequence of applications of the above rules will terminate, that is, a polynomial on which the rules cannot be applied will be obtained in a finite number of steps. 

This is clear, since rules $(1)$ and $(2)$ reduce the degree of the polynomial, and while rule $(3)$ does not alter the degree, its applications are limited by the number of $y$'s in the polynomial and the degree will have to be sacrificed eventually to get more $y$'s.

It can be easily deduced that for any polynomial $p(x, y, z)\in R$, any sequence of applications of the rules in $\mathfrak{R}$ must terminate in a polynomial in the set
$$
S=\begin{align}
\{ x, y, x^{2}, xy , 1\}\{ z^{k}\ | \   k\in \mathbb{Z}_{\geq 0} \}.
\end{align}
$$
Next, consider the map $\psi:S\to \mathbb{C}[t^{3}, t^{4}, t^{5}]$ given by
$$
\psi(s(x, y, z))=\varphi(s(x, y, z)+I).
$$

> [!Claim]
> $\psi$ is injective.
> 
> > [!Proof]-
> > 
> > We will prove injectivity for monomials; the general case follows. Let $x^{i}y^{j}z^{k}$ and $x^{a}y^{b}z^{c}$ be two monomials in $S$ such that $\psi(x^{i}y^{j}z^{k})=\psi(x^{a}y^{b}z^{c})$. Then, 
> > $$
> > 3i+4j+5k=3a+4b+5c.
> > $$
> > Assume $j\ne b$. The only possible cases are $j=1, b=0$, or $j=0, b=1$. WLOG, if $j=1$, we have 
> > $$
> > 4=5(c-k)+3(a-i),
> > $$
> > which requires $a-i\leq -2$ or $a-i\geq 3$, which together with $j=1$ imply $x^{i}y^{j}z^{k}\not\in S$. Thus, $j=b$. $i=a$ and $k=c$ immediately follow. 
> 

> [!Claim]
> For a given polynomial $p(x, y, z)$, any sequence of applications of the rules in $\mathfrak{R}$ will terminate in the same polynomial.
> 
> > [!Proof]-
> > We have established that any polynomial obtained by application of the rules on $p(x, y, z)$ stays in $p(x, y, z)+I$. Since $\psi$ is injective, no two elements of $S$ lie in the same coset of $I$, so there is only one element of $S$ that $p(x, y, z)$ can reduce to.
> > 

^1e43fe

For $p(x, y, z)\in R$, denote the unique reduced polynomial by $\tilde{p}(x, y, z)$.

The same argument as in [[#^1e43fe]] can be used to show that if $p(x, y, z)$ and $q(x, y, z)$ lie in the same coset of $I$, then $\tilde{p}(x, y, z)=\tilde{q}(x, y, z)$. Thus, we have a bijection between the cosets of $I$ and $S$ given by
$$
p(x, y, z)+I\leftrightarrow \tilde{p}(x, y, z).
$$

Let $\alpha(t^{3}, t^{4}, t^{5})\in \mathbb{C}[t^{3}, t^{4}, t^{5}]$. Since $\varphi$ is a surjective homomorphism, there exists $p(x, y, z)+I$ such that $\varphi(p(x, y, z)+I)=\alpha(t^{3}, t^{4}, t^{5})$. It follows that $\psi(\tilde{p}(x, y, z))=\alpha(t^{3}, t^{4}, t^{5})$, so $\psi$ is surjective, and hence bijective.

> [!Claim]
> $\varphi$ is injective, and hence a bijection.
> 
> > [!Proof]-
> > $$
> > \begin{align}
> >  & \varphi(p(x, y, z)+I)  =\varphi(q(x, y, z)+I) \\
> >  & \varphi(\tilde{p}(x, y, z)+I)  =\varphi(\tilde{q}(x, y, z)+I) \\
> >  & \psi(\tilde{p}(x, y, z))  =\psi(\tilde{q}(x, y, z)) \\
> >    & \tilde{p}(x, y, z)  =\tilde{q}(x, y, z) \\\\ 
> > \implies & p(x, y, z)+I =q(x, y, z)+I.
> > \end{align}
> > $$

Thus, $R/I\cong \mathbb{C}[t^{3}, t^{4}, t^{5}]$. Together with the obvious observation that $I\subseteq \ker\varphi$, this implies $I=\ker\varphi$.

---

# Problem 8

> [!Exercise]
> Suppose $I_{1}+\dots+I_{n}=R$ and for each $1\leq k\leq n$, $I_{k}\cap(I_{1}+\dots+I_{k-1}+I_{k+1}+\dots+I_{n})=(0)$. Then show that there is an isomorphism $R\cong I_{1}\times\dots \times I_{n}$. 

There must exist elements $a_{1}, \dots, a_{n}$, $a_{i}\in I_{i}$, such that $a_{1}+\dots+a_{n}=1$ in $R$. Further, these elements are unique: If some $a_{i}'$'s satisfied the same property, then
$$
\sum_{i=1}^{n} (a_{i}-a'_{i})=0,
$$
so for each $k$, $(a_{k}-a'_{k})=\sum_{i\ne k}(a_{i}-a'_{i})$. Note that the LHS is a member of $I_{k}$, and the RHS is a member of $(I_{1}+\dots+I_{k-1}+I_{k+1}+\dots+I_{n})$. Thus, we have $a_{k}=a'_{k}$ for all $k$. The same method can be used to prove that if $e_{1}+\dots+e_{n}=e'_{1}+\dots+e_{n}'$ and $e_{i}, e'_{i}\in I_{i}$, then $e_{i}=e'_{i}$; we will be using this shortly.

Before we proceed, we have to show that $I_{1}\times\dots \times I_{n}$ is indeed a ring. The only it is missing is an identity, and $(a_{1}, \dots, a_{n})$ does the job. Indeed, for $b_{i}\in I_{i}$, 
$$
\begin{align}
(b_{1}+\dots+b_{n}) & =(b_{1}+\dots+b_{n})(a_{1}+\dots+a_{n}) \\
 & =b_{1}a_{1}+\dots+b_{n}a_{n},
\end{align}
$$
since all the cross terms must lie in $I_{i}\cap I_{j}$ for some $i\ne j$, and thus must be $0$. Hence, $b_{i}=b_{i}a_{i}$, and we have
$$
(b_{1}, \dots, b_{n})(a_{1}, \dots, a_{n})=(b_{1}a_{1}, \dots, b_{n}a_{n})=(b_{1}, \dots, b_{n})
$$
for all $(b_{1}, \dots, b_{n})\in I_{1}\times\dots \times I_{n}$. 

Define a map $\varphi:R\to I_{1}\times\dots \times I_{n}$ by
$$
r\mapsto(ra_{1}, \dots, ra_{n}).
$$
This is clearly a well defined map which respects addition. To see that it respects multiplication, pull the same trick as before: write 
$$
r_{1}r_{2}=(r_{1}a_{1}+\dots+r_{1}a_{n})(r_{2}a_{1}+\dots+r_{2}a_{n})=r_{1}a_{1}r_{2}a_{1}+\dots+r_{1}a_{n}r_{2}a_{n},
$$
which then is equal to $r_{1}r_{2}(a_{1}+\dots+a_{n})$, so we have $r_{1}r_{2}a_{i}=r_{1}a_{i}r_{2}a_{i}$. Multiplication is okay!

All that's left to prove is surjectivity. Take $(b_{1}, \dots, b_{n})\in I_{1}\times\dots \times I_{n}$, and observe that
$$
\varphi(b_{1}+\dots+b_{n})=(b_{1}a_{1}, \dots, b_{n}a_{n})=(b_{1}, \dots, b_{n}).
$$

> [!Exercise]
> If $I_{1}, \dots, I_{n}$ are ideals in $R$, then show that there is an injective map $\varphi:R/(I_{1}\cap\dots \cap I_{n})\to(R/I_{1})\times\dots \times(R/I_{n})$.

^08d416

Define the obvious map
$$
\varphi\left( r+\bigcap I_{i} \right):=(r+I_{1}, \dots, r+I_{n}).
$$
That $\varphi$ is a homomorphism is immediate. If $r_{1}, r_{2}$ are such that $\varphi\left( r_{1}+\bigcap I_{i} \right)=\varphi\left( r_{2}+\bigcap I_{i} \right)$, then $r_{1}-r_{2}\in I_{i}$ for all $i$, so $r_{1}-r_{2}\in \bigcap I_{i}$, so $r_{1}+\bigcap I_{i}=r_{2}+\bigcap I_{i}$.

> [!Exercise]
> Suppose $I_{i}+I_{j}=R$ for all $i\ne j$. If $b_{1}, \dots, b_{n}\in R$, then show that there exists $b\in R$ such that $b\cong b_{i}\mod I_{i}$ for all $i=1, \dots, n$.

We just have to show that the homomorphism in [[#^08d416]] is surjective given these hypotheses. For the pair $I_{i}, I_{j}$, let $e_{i_{j}}\in I_{i}$ and $e_{j_{i}}\in I_{j}$ be the elements such that $e_{i_{j}}+e_{j_{i}}=1$. Then, we have
$$
\begin{align}
1 & =(e_{1_{2}}+e_{2_{1}})(e_{1_{3}}+e_{3_{1}})\dots(e_{1_{n}}+e_{n_{1}}) \\
 & = \alpha_{1}+e_{2_{1}}e_{3_{1}}\dots e_{n_{1}},
\end{align}
$$
where $\alpha_{1}\in I_{1}$. Thus, we have shown that $I_{1}+I_{2}I_{3}\dots I_{n}=R$. Generally, we have $I_{k}+\prod_{i\ne k}I_{i}=R$ for all $k$. For $I_{k}$, let $v_{k}$ be an element in $\prod_{i\ne k}I_{i}$ such that $u_{k}+v_{k}=1$, where $u_{k}\in I_{k}$. Note that $v_{k}\in 1+I_{k}$ and $v_{k}\in I_{i}$ for $i\ne k$.

Now, consider $(a_{1}, \dots, a_{n})\in(R/I_{1})\times\dots \times(R/I_{n})$. We have
$$
\varphi(a_{1}v_{1}+\dots+a_{n}v_{n})=(a_{1}, \dots, a_{n}).
$$

---

# Problem 11

> [!Exercise]
> Let $\varphi:R\to S$ be a surjective homomorphism. Let $I\in R$ and $J\in S$ be [[LEC ALG3 2#Correspondence and third isomorphism|corresponding]] ideals. Show that $I$ is prime iff $J$ is prime.

^1bab8a

Since $I$ and $J$ are corresponding ideals, we know $J=\varphi(I)$, $I=\varphi ^{-1}(J)$, and $\ker\varphi \subseteq I$. 

Assume $I$ is prime. Suppose $x, y\in S$ such that $xy\in J$. Since $\varphi$ is surjective, $x=\varphi(a)$ and $y=\varphi(b)$ for some $a, b\in R$. Then $\varphi(a)\varphi(b)=\varphi(ab)\in J$, so $ab\in\varphi ^{-1}(J)=I$, so $a\in I$ or $b\in I$, hence $\varphi(a)\in J$ or $\varphi(b)\in J$. 

Assume $J$ is prime. Suppose $a, b\in R$ such that $ab\in I$. Then, $\varphi(ab)=\varphi(a)\varphi(b)\in J$, so either $\varphi(a)\in J$ or $\varphi(b)\in J$, so $a\in I$ or $b\in I$. 

> [!Exercise]
> Describe all prime ideals in $\mathbb{Z}[x]$.

Let $\mathfrak{P}$ be a prime ideal of $\mathbb{Z}[x]$. Then $\mathfrak{P}\cap \mathbb{Z}$ is a prime ideal of $\mathbb{Z}$ (this holds whenever $R\subseteq S$ are commutative rings). We have two possibilities: $\mathfrak{P}\cap \mathbb{Z}=(0)$, or $\mathfrak{P}\cap \mathbb{Z}=(p)$ for some prime $p$.

## Case 1: $\mathfrak{P}\cap \mathbb{Z}=(0)$.

### Stuff on localization

> [!Lemma] @milneAlgebraicNumberTheory2020 1.11
> Consider a (commutative) integral domain $A$ and a multiplicative subset $S$ of $A$. For an ideal $\mathfrak{a}$ of $A$, let $\mathfrak{a}^{e}$ denote the ideal it generates in the localization $S^{-1}A$; for an ideal $\mathfrak{a}$ of $S^{-1}A$, write $\mathfrak{a}^{c}$ for $\mathfrak{a}\cap A$. Then:
> 1. $\mathfrak{a}^{ce}=\mathfrak{a}$ for all ideals $\mathfrak{a}$ of $S^{-1}A$. 
> 2. $\mathfrak{a}^{ec}=\mathfrak{a}$ if $\mathfrak{a}$ is a prime ideal of $A$ disjoint from $S$.

^dcf5b4

Basically, we have maps in two directions between the set of ideals of $A$ and the set of ideals of $S^{-1}A$ called the expansion and contraction maps given by[^1]
$$
\begin{array}{ccc}
A &  & S^{-1}A \\\hline
\mathfrak{a} & \mapsto & \mathfrak{a}^{e}:=(\mathfrak{a})(S^{-1}A) \\
 \mathfrak{b}^{c}:=\mathfrak{b}\cap A& \gets &  \mathfrak{b}
\end{array}
$$
Contraction followed by expansion is the identity on the set of ideals of $S^{-1}A$. Expansion followed by contraction is the identity when restricted to prime ideals of $A$ disjoint from $S$.

> [!Lemma]
> Let $A$ be a (commutative) integral domain and let $S$ be a multiplicative subset of $A$. The map $\mathfrak{p}\mapsto \mathfrak{p}^{e}$ is a bijection from the set of prime ideals in $A$ such that $\mathfrak{p}\cap S=\emptyset$ to the set of prime ideals in $S^{-1}A$; the inverse map is $\mathfrak{p}\mapsto \mathfrak{p}\cap A$.
> 
> > [!Proof]-
> > Let $\mathfrak{p}\subset A$ be a prime ideal such that $\mathfrak{p}\cap S=\emptyset$. It is easy to see that elements of $\mathfrak{p}^{e}$ are of the form $p/s$, where $p\in P$ and $s\in S$. Let $a_{1}/s_{1}, a_{2}/s_{2}\in S^{-1}A$ such that $a_{1}a_{2}/s_{1}s_{2}=p/s\in \mathfrak{p}^{e}$. Then, $a_{1}a_{2}s=s_{1}s_{2}p$. Since $s_{1}s_{2}p\in \mathfrak{p}$ and $s\not\in \mathfrak{p}$, we have $a_{1}\in \mathfrak{p}$ or $a_{2}\in \mathfrak{p}$, so $a_{1}/s_{1}\in \mathfrak{p}^{e}$ or $a_{2}/s_{2}\in \mathfrak{p}^{e}$. Hence, $\mathfrak{p}^{e}$ is a prime ideal.
> > 
> > Let $\mathfrak{p}\subset S^{-1}A$ be a prime ideal. It is clear that $\mathfrak{p}\cap A$ is a prime ideal in $A$. $\mathfrak{p}$ cannot contain any elements of $S$, since if it did it would also contain $1$. 
> > 
> > [[#^dcf5b4]] shows that the two maps are inverses.
> 

^a53acd

This provides the necessary context to understand @magidinAnswerClassificationPrime2012 .
### Back to the problem at hand

If $\mathfrak{P}=(0)$, we are done; otherwise, let $S=\mathbb{Z}\setminus\{ 0 \}$. $S$ is a multiplicative set and $S\cap \mathfrak{P}=\emptyset$. Localize $\mathbb{Z}[x]$ at $S$ to obtain $\mathbb{Q}[x]$. [[LEC ALG3 2#^2e8cc1|Since]] $\mathbb{Q}[x]$ is a PID and $S^{-1}\mathfrak{P}$ is a prime ideal in $\mathbb{Q}[x]$ (by [[#^a53acd]]), $S^{-1}\mathfrak{P}$ is of the form $(q(x))$ for some irreducible[^2] polynomial $q(x)$. We may assume that $q(x)$ has integer coefficients and that the gcd of its coefficients is $1$ (!). 

From [[#^a53acd]], we know that $(S^{-1}\mathfrak{P})\cap \mathbb{Z}[x]= (q(x))(\mathbb{Q}[x])\cap \mathbb{Z}[x]=\mathfrak{P}$. This is precisely $(q(x))(\mathbb{Z}[x])$. Thus, $\mathfrak{P}$ is of the form $(q(x))$ for some irreducible polynomial $q(x)\in \mathbb{Z}[x]$. 
## Case 2: $\mathfrak{P}\cap \mathbb{Z}=(p)$.

Consider the image of $\mathfrak{P}$ in $\mathbb{Z}[x]/(p)\cong \mathbb{F}_{p}[x]$. Since the map is onto, by [[#^1bab8a]] the image is prime. The prime ideals of $\mathbb{F}_{p}[x]$ are of the form $(q(x))$ where $q(x)$ is monic and irreducible over $\mathbb{F}_{p}[x]$. If the image is $(0)$, then $\mathfrak{P}=(p)$, and we are done.

Otherwise, let $p(x)$ be a polynomial in $\mathbb{Z}[x]$ that reduces to $q(x)$ modulo $p$ and that is monic. Note that $p(x)$ must be irreducible in $\mathbb{Z}[x]$, since any nontrivial factorization in $\mathbb{Z}[x]$ would induce a nontrivial factorization in $\mathbb{F}_{p}[x]$. 

By the correspondence theorem, $\mathfrak{P}$ is the inverse image of $(q(x))$ under the projection homomorphism $\pi:\mathbb{Z}[x]\to \mathbb{Z}[x]/(p)$. We claim that $\mathfrak{P}=(p, p(x))$. It is clear that $(p, p(x))\subseteq \mathfrak{P}$ since $\pi((p, p(x)))\subseteq(q(x))$. Conversely, let $r(x)\in \mathfrak{P}$. Then, there exists $s(x)\in \mathbb{F}_{p}[x]$ such that $s(x)q(x)=\overline{r}(x)$. If $t(x)$ is a polynomial in $\mathbb{Z}[x]$ such that it reduces to $s(x)$ mod $p$, then $t(x)p(x)-r(x)\in(p)$. Thus, there exists a polynomial $u(x)\in \mathbb{Z}[x]$ such that $r(x)=t(x)p(x)+pu(x)$. Therefore, $r(x)\in(p, p(x))$, hence $\mathfrak{P}\subseteq(p, p(x))$, giving equality.











[^1]: Katex does not support `\mapsfrom` :(
[^2]: [[LEC ALG3 4#^340b52|Recall]] that prime and maximal ideals coincide for PIDs.