---
id: "345"
date: 2025-11-06
time: 09:00
tags:
  - ALG3
  - Lecture
  - Processed
---
# Finite fields

Quick preliminary facts:
1. Let $K$ be a finite field. The characteristic of a finite field must be prime, so $K$ will contain one of the prime fields $F=\mathbb{F}_{p}$. 
2. Since $K$ is finite, it will be finite dimensional when considered as a vector space over $\mathbb{F}_{p}$. Using [[LEC ALG3 16#^bacf07]], this tells us that the extension $K/\mathbb{F}_{p}$ is algebraic. 
3. Let $r$ denote the degree $[K:F]$. Recall that $[K:F]=r$ implies $K$ has an $F$-basis of size $r$. Thus, as an $F$-vector space, $K$ is isomorphic to the space $F^{r}$ of column vectors, which contains $p^{r}$ elements, customarily denoted by $q$. Fields of order $q$ are denoted by $\mathbb{F}_{q}$.
4. Conversely, if $K$ is a finite field of order $p^{r}$, we immediately have $\mathbb{F}_{p}\subseteq K$, since we cannot have $p^{r}=p_{1}^{r_{1}}$. 
5. Do not confuse $\mathbb{F}_{q}$ with the ring $\mathbb{Z}/q\mathbb{Z}$, which isn't a field.

> [!Example]
> Consider $\mathbb{F}_{4}$. There is just one irreducible polynomial of degree $2$ in $\mathbb{F}_{2}[x]$, namely $f(x)=x^{2}+x+1$, and $\mathbb{F}_{4}$ is obtained by adjoining a root of $\alpha$ of this polynomial to $F$ [^1]
> $$
> \mathbb{F}_{4}\cong \mathbb{F}_{2}[x]/(x^{2}+x+1).
> $$
> By [[LEC ALG3 15#^5c70c9]], $\{ 1, \alpha \}$ is a $\mathbb{F}_{2}$-basis for $\mathbb{F}_{4}$. It follows that $\mathbb{F}_{4}=\{0, 1, \alpha, 1+\alpha \}$.

[^1]: See the proof of [[LEC ALG3 19#^b196e5]]. 

> [!Lemma]
> Let $q=p^{r}$ be a positive power of $p$. 
> 1. The polynomial $x^{q}-x\in \mathbb{F}_{p}[x]$ has no multiple root in any field extension of $\mathbb{F}_{p}$. 
> 2. In the polynomial ring $\mathbb{F}_{p}[x, y]$, $(x+y)^{q}=x^{q}+y^{q}$.
> 
> > [!Proof]-
> > 
> > $(1)$ The derivative of $x^{q}-x$ is $qx^{q-1}-1=-1$. Thus, $x^{q}-x$ and its derivative are relatively prime. Use [[LEC ALG3 20#^32c098]]. 
> > 
> > ---
> > 
> > $(2)$ Expand $(x+y)^{p}$ in $\mathbb{Z}[x, y]$. The binomial coefficients $\binom{p}{r}$ are divisible by $p$ for $r$ in the range $1< r< p$. Thus, the map $\mathbb{Z}[x, y]\to \mathbb{F}_{p}[x, y]$ sends these coefficients to zero, and $(x+y)^{p}=x^{p}+y^{p}$ in $\mathbb{F}_{p}[x, y]$. The result is obtained for $q=p^{r}$ by induction.
> 

^0890ce

> [!Lemma]
> Let $p$ be a prime and let $q=p^{r}$ be a positive power of $p$. Let $L$ be a field of characteristic $p$, and let $K$ be the set of roots of $x^{q}-x$ in $L$. Then $K$ is a subfield of $L$. 
> 
> > [!Proof]-
> > 
> > Let $\alpha$ and $\beta$ be roots of the polynomial $x^{q}-x$ in $L$. We have to show that $\alpha+\beta$, $-\alpha$, $\alpha\beta$, $\alpha ^{-1}$, and $1$ are roots of the same polynomial.
> > 1. $(\alpha+\beta)^{q}=\alpha^{q}+\beta^{q}=\alpha+\beta$, by [[#^0890ce]].2.
> > 2. $(-\alpha)^{q}=(-1)^{q}\alpha^{q}=-\alpha$. 
> > 3. $(\alpha\beta)^{q}=\alpha^{q}\beta^{q}=\alpha\beta$
> > 4. $(\alpha ^{-1})^{q}=\alpha ^{-1}$
> > 5. $1^{q}=1$.
> > 
> 

^f27db6

> [!Theorem]
> Let $p$ be a prime integer, and let $q=p^{r}$ be a positive power of $p$.
> 1. Let $K/\mathbb{F}_{p}$ be a field of order $q$. The elements of $K$ are roots of the polynomial $x^{q}-x\in \mathbb{F}_{p}[x]$. 
> 2. The irreducible factors of the polynomial $x^{q}-x$ over the prime field $\mathbb{F}_{p}$ are the irreducible polynomials in $\mathbb{F}_{p}[x]$ whose degrees divide $r$. 
> 3. Let $K$ be a field of order $q$. The multiplicative group $K^{\times}$ of nonzero elements of $K$ is a cyclic group of order $q-1$. 
> 4. There exists a field of order $q$, and all fields of order $q$ are isomorphic. 
> 5. A field of order $p^{r}$ contains a subfield of order $p^{k}$ iff $k$ divides $r$. 
> 
> 
> > [!Proof]-
> > 
> > $(1)$ The multiplicative group $K^{\times}$ has order $q-1$. Therefore the order of any element $\alpha$ of $K^{\times}$ divides $q-1$, so $\alpha^{q-1}-1=0$, which means $\alpha$ is a root of the polynomial $x^{q-1}-1$. The remaining root of $K$, zero, is the root of the polynomial $x$. So every element of $K$ is a root of $x^{q}-x$. 
> > 
> > ---
> > 
> > $(3)$ By [[LEC ALG2 14#^05ad21]], $K^{\times}$ is a direct sum of cyclic subgroups, say $H_{1}\oplus\dots \oplus H_{k}$, where $H_{i}$ has order $d_{i}$, and $d_{1}\ | \ d_{2}\ | \ \dots\ | \ d_{k}$. let $d:=d_{k}$. For every $\alpha\in K^{\times}$, we have $\alpha^{d}=1$. Therefore every element of $K^{\times}$ is a root of the polynomial $x^{d}-1$. This polynomial has at most $d$ roots in $K$, and therefore $|K^{\times}|=q-1\leqslant d$. On the other hand, $|K^{\times}|=|H_{1}\oplus\dots \oplus H_{k}|=d_{1}\dots d_{k}$. So $d_{1}\dots d_{k}=|K^{\times}|=q-1\leqslant d$. Since $d=d_{k}$, the only possibility is that $k=1$ and $q-1=d$. Therefore $K^{\times}=H_{1}$, and $K^{\times}$ is cyclic. 
> > 
> > ---
> > 
> > $(4)$ There exists a field extension $L/\mathbb{F}_{p}$ in which $x^{q}-x$ splits completely by [[LEC ALG3 20#^951c0b]]. The $q$ roots of $x^{q}-x$ in $L$ form a field by [[#^f27db6]]. 
> > 
> > We will now show that two fields $K$ and $K'$ of the same order $q=p^{r}$ are isomorphic. As we know, both can be viewed as extensions $K/\mathbb{F}_{p}$ and $K'/\mathbb{F}_{p}$. Let $\alpha$ be a generator for the cyclic group $K^{\times}$. Then $K=\mathbb{F}_{p}(\alpha)$, so the irreducible polynomial $f$ for $\alpha$ over $\mathbb{F}_{p}$ has degree $[K:\mathbb{F}_{p}]=r$. $f$ generates the ideal of polynomials in $\mathbb{F}_{p}[x]$ with root $\alpha$, since if $g\in \mathbb{F}_{p}[x]$ is such that $g(\alpha)=0$, then $f$ and $g$ are not relatively prime in $\mathbb{F}_{p}[x]$ by [[LEC ALG3 20#^0d5264]], and $f$ being irreducible forces $f\ | \ g$. Since $\alpha$ is a root of $x^{q}-x$, $f$ divides $x^{q}-x$. Since $x^{q}-x$ splits completely in $K'$, $f$ has a root $\alpha'$ in $K'$ too. Then $\mathbb{F}_{p}(\alpha)$ and $\mathbb{F}_{p}(\alpha')$ are both isomorphic to $\mathbb{F}_{p}[x]/(f)$, hence to each other. Since the degree of the extension $\mathbb{F}_{p}(\alpha')/\mathbb{F}_{p}$ is equal to $r$, $|\mathbb{F}_{p}(\alpha')|=p^{r}$, so we must have $\mathbb{F}_{p}(\alpha')=K'$. Therefore, $K$ and $K'$ are isomorphic.
> > 
> > ---
> > 
> > $(5)$ Let $q=p^{r}$ and $q'=p^{k}$. Then $[\mathbb{F}_{q}:\mathbb{F}_{p}]=r$ and $[\mathbb{F}_{q'}:\mathbb{F}_{p}]=k$; we can't have $\mathbb{F}_{p}\subseteq \mathbb{F}_{q'}\subseteq \mathbb{F}_{q}$ unless $k\ | \ r$. 
> > 
> > Suppose $k\ | \ r$, say $r=ks$. Substitution of $y=p^{k}$ into the equation $y^{s}-1=(y-1)(y^{s-1}+\dots+y+1)$ shows that $q'-1$ divides $q-1$. Let $K$ be a field of order $q$. Since the multiplicative group $K^{\times}$ is cyclic of order $q-1$, and since $q'-1$ divides $q-1$, $K^{\times}$ contains an element $\beta$ of order $q'-1$. Then $q'-1$ powers of this element are roots of $x^{q'-1}-1$ in $K$. Therefore $x^{q'}-x$ splits completely in $K$. [[#^f27db6]] shows that the roots form a field of order $q'$.
> > 
> > ---
> > 
> > $(2)$ Let $g$ be an irreducible polynomial over $\mathbb{F}_{p}$ of degree $k$. The polynomial $x^{q}-x$ splits into linear factors in $\mathbb{F}_{q}$. 
> > 
> > If $g$ divides $x^{q}-x$, it will also factor into linear factors in $\mathbb{F}_{q}$, so it will have a root $\beta$ in $\mathbb{F}_{q}$. Now, 
> > $$
> > \begin{align}
> > r=\underbrace{ [\mathbb{F}_{q}:\mathbb{F}_{p}] }_{ r }=[\mathbb{F}_{q}:\mathbb{F}_{p}(\beta)]\underbrace{ [\mathbb{F}_{p}(\beta):\mathbb{F}_{p}] }_{ k },
> > \end{align}
> > $$
> > so $k\ | \ r$. 
> > 
> > Conversely, suppose that $k$ divides $r$. Let $\beta$ be a root of $g$ in an extension field of $\mathbb{F}_{p}$. Then $[\mathbb{F}_{p}(\beta):\mathbb{F}_{p}]=k$, so $|\mathbb{F}_{p}(\beta)|=p^{k}$. By $(5)$, $K$ contains a subfield $S$ of order $p^{k}$, and by $(4)$, there exists an isomorphism $\tau: \mathbb{F}_{p}(\beta)\to S$. Note that the isomorphism must be the identity on $\mathbb{F}_{p}$. By [[LEC ALG3 19#^0d49d1]], $\beta^{\tau}\in S$ is a root of $g$. Therefore $g$ has a root in $K$, and so $g$ divides $x^{q}-x$ by [[LEC ALG3 20#^0d5264]].
> 


^977ed1

> [!Corollary]
> For every positive integer $r$, there exists an irreducible polynomial of degree $r$ over $\mathbb{F}_{p}$. 
> 
> > [!Proof]-
> > 
> > By [[#^977ed1]].4, there is a field $K$ of order $q=p^{r}$. Its degree over $\mathbb{F}_{p}$ is $r$. By [[#^977ed1]].3, $K^{\times}$ is cyclic. Clearly, a generator $\alpha$ for this cyclic group will generate $K$ as an extension field, i.e, $K=\mathbb{F}_{p}(\alpha)$. Since $[K:\mathbb{F}_{p}]=r$, the degree of the irreducible polynomial of $\alpha$ over $\mathbb{F}_{p}$ is $r$ by [[LEC ALG3 15#^5c70c9]]. 
> 

^4e0304

> [!Remark]
> The proof of [[#^4e0304]] tells us that a field of order $p^{r}$ can be obtained by going modulo an irreducible polynomial of degree $r$ in $\mathbb{F}_{p}[x]$. Conversely, if $f\in \mathbb{F}_{p}[x]$ is irreducible of degree $r$, then the quotient $\mathbb{F}_{p}[x]/(f)$ is a field (because $(f)$ is maximal), and is an $\mathbb{F}_{p}$-vector space of dimension $r$, hence has cardinality $p^{r}$. Therefore it is a field with $p^{r}$ elements, and by [[#^977ed1]].4, isomorphic to $\mathbb{F}_{p^{r}}$. 

^91a225

> [!Proposition]
> No finite field is algebraically closed.
> 
> > [!Proof]-
> > 
> > Let's suppose that $K$ is finite and write $K=\{\alpha_{1}, \ldots , \alpha_{n}\}$. Now take the polynomial $p (x)=(x-\alpha_{1})\ldots (x-\alpha_{n}) +1\in K[x]$. It's easy to see that $p (x)$ doesn't have any roots in $K$. Hence, $K$ is not algebraically closed.
> 