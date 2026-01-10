---
tags:
  - ALG3
  - Lecture
  - Processed
date: 2025-08-07
time: 09:12
id: "107"
---
# Quotients

> [!Definition]
> Let $I\subseteq R$ and $(I, +)$ be an abelian group. $I$ is a left/right **ideal** if it is closed under left/right multiplication by elements of $R$. 

Let $I$ be a subgroup of the abelian group $(R, +)$ of a ring $R$. Subgroups of abelian groups are automatically normal, so we have a quotient group $R/I$, whose elements are cosets $r+I$ of $I$. Further, we have a surjective group homomorphism
$$
\pi:R\to R/I, \quad r\mapsto r+I.
$$
==What requirements should $I$ meet, in order to have a ring structure on $R/I$, such that $\pi$ becomes a ring homomorphism?== If $\pi$ is a ring homomorphism, there is only one way to define a ring structure on $R/I$:
$$
(a+I)(b+I)=\pi(a)\pi(b)=\pi(ab)=ab+I.
$$
Thus, there is only one sensible ring structure on $R/I$, given by $(a+I)(b+I)\equiv ab+I$ (note that if this operation is well defined, $R/I$ is, in fact, a ring). When is this operation well defined?

> [!Claim]
> The operation $(a+I)(b+I)\equiv ab+I$ on $R/I$ is well defined iff $I$ is an ideal of $R$.
> 
> > [!Proof]-
> > Assume the operation is well defined, making $R/I$ into a ring, and $\pi$ into a ring homomorphism. $\ker \pi=I$. The absorption properties are easily verified: for all $a\in I$ and $r\in R$, 
> > $$
> > \begin{align}
> > \pi(ra)=\pi(r)\pi(a)=\pi(r)\cdot 0=0, \\
> > \pi(ar)=\pi(a)\pi(r)=0\cdot \pi(r)=0.
> > \end{align}
> > $$
> > Thus, $I$ is an ideal.
> > 
> > Conversely, assume $I$ is an ideal. Let $\alpha, \beta\in I$. 
> > $$
> > \begin{align}
> >  & (a+\alpha+I)(b+\beta+I) \\
> >  & =(a+\alpha)(b+\beta)+I \\
> >  & =ab+\alpha b+a\beta+\alpha\beta+I \\
> >  & =ab+I,
> > \end{align}
> > $$
> > which proves that the operation is well defined.
> 

*Thus, $R/I$ is a ring, in such a way that the canonical projection $\pi:R\to R/I$ is a ring homomorphism, iff $I$ is an ideal of $R$.*

The [[LEC ALG2 4#^43c508|mapping property of quotient groups]] provides the scaffolding for its analogue in $\textsf{Ring}$: the needed (group) homomorphism exists and is unique by the group theoretic theorem; verifying it is a ring homomorphism is immediate.

> [!Theorem] @aluffiAlgebraChapter02009 III.3.8
> Let $I$ be a two-sided ideal of a ring $R$. Then for every ring homomorphism $\varphi:R\to S$ such that $I\subseteq \ker\varphi$ there exists a unique ring homomorphism $\tilde{\varphi}:R/I\to S$ so that the diagram
> 
> ```latex
> % latex-id: ab54-7b06-74a7-471b-865e
> \begin{tikzcd}
> R\ar[rr, "\varphi"]\ar[rd, "\pi"']&&S\\
> &R/I\ar[ru, "\exists!\tilde{\varphi}"']&
> \end{tikzcd}
> ```
> commutes.

^d9ba22

This allows for the canonical decomposition and the first isomorphism theorem for rings. 

## Correspondence and third isomorphism

Observe that the ideals of $R$ containing $I$ are in bijective correspondence with the ideals of the quotient $R/I$: we [[LEC ALG2 5#^90ba83|already know]] that the subgroups $J$ of $R$ containing $I$ are in bijective correspondence with the subgroups of $R/I$, viz., $J\leftrightarrow J/I$. It is easily verified that $J/I$ is an ideal of $R/I$ iff $J$ is an ideal of $R$.

> [!Theorem] Correspondence theorem, @artinAlgebra2011 11.4.3
> Let $\varphi:R\to \mathcal{R}$ be a surjective homomorphism with kernel $K$. Let $I$ be an ideal of $R$ containing $K$ and $\mathcal{I}$ be an ideal of $\mathcal{R}$. Then, 
> 1. $\varphi(I)$ is an ideal of $\mathcal{R}$. 
> 2. $\varphi ^{-1}(\mathcal{I})$ is an ideal of $R$, and it contains $K$.
> 3. $\varphi(\varphi ^{-1}(\mathcal{I}))=\mathcal{I}$, and $\varphi ^{-1}(\varphi(I))=I$. 
> 4. If $\varphi(I)=\mathcal{I}$, then $R/I\cong \mathcal{R}/\mathcal{I}$. 

^629cc7

As in the case of groups, quotients by corresponding ideals are isomorphic:

> [!Theorem] @aluffiAlgebraChapter02009 III.3.11
> Let $I$ be an ideal of a ring $R$, and let $J$ be an ideal of $R$ containing $I$. Then $J/I$ is an ideal of $R/I$, and
> $$
> \frac{R/I}{J/I}\cong \frac{R}{J}.
> $$
> 
> 
> > [!Proof]-
> > Since $I\subseteq J=\ker(R\to R/J)$, [[#^d9ba22]] gives us an induced ring homomorphism $\varphi:R/I\to R/J$. Explicitly, $\varphi(r+I)=r+J$. Clearly, $\varphi$ is surjective. 
> > $$
> > \begin{align}
> > \ker\varphi & = \{ r+I\ | \  r+J=J \} \\
> >  & =\{ r+I\ | \  r\in J \} \\
> >  & =J/I.
> > \end{align}
> > $$
> > Thus, $J/I$ is an ideal, and the stated isomorphism follows from the first isomorphism theorem.

^f12ed2


==$J/I$ is not a ring!==

---
# Ideals

## Algebra of ideals

> [!Definition]
> Let $R$ be a commutative ring with $1$. Let $I, J$ be ideals of $R$.
> 1. $I+J:=\{ i+j\ | \ i\in I, j\in J \}$. This is a subring of $R$.
> 2. $IJ:=\{ i_{1}j_{1}+\dots+i_{n}j_{n}\ | \ i_{k}\in I, j_{k}\in J , n\geq 1\}$.

1. Clearly, $IJ\subseteq I\cap J$. 
2. If $n=p_{1}^{a_{1}}\dots p_{n}^{a_{n}}$, then $n\mathbb{Z}=(p_{1}^{a_{1}}\mathbb{Z})\cap\dots\cap (p_{n}^{a_{n}}\mathbb{Z})=(p_{1}^{a_{1}}\mathbb{Z})\cdot\dots\cdot (p_{n}^{a_{n}}\mathbb{Z})$.

> [!Definition]
> Let $I$ be an ideal of a ring $R$. $X=\{ a_{i}\ | \ a_{i}\in I \}\subseteq I$ is said to generate $I$ if every element of $I$ can be written as a finite sum $r_{i_{1}}a_{i_{1}}+\dots+r_{i_{k}}a_{i_{k}}$, $r_{i}\in R$. 

> [!Proposition]
> 1. If $I=(a_{1}, \dots, a_{n})$ and $J=(b_{1}, \dots, b_{k})$, then $I+J=(a_{1}, \dots, a_{n},b_{1}, \dots, b_{k})$ and $IJ=(a_{i}b_{j}\ | \ 1\leq i\leq n, 1\leq j\leq k)$. 
> 2. $I(J_{1}+\dots+J_{k})=IJ_{1}+\dots+IJ_{k}$.
> 3. $(IJ)K=I(JK)$.

[!Example]
Let $R=\mathbb{C}[x, y, z]$ or $\mathbb{R}[x, y, z]$ or $\mathbb{Q}[z, y, z]$. $I=(x^{3}-yz, y^{2}-xz, z^{2}-x^{2}y)$, $J=(x, y)$. Show that $I\cap J=(x^{3}-yz, y^{2}-xz)$.

## Properties of ideals under homomorphisms

> [!Proposition]
> 1. The inverse image of an ideal under a homomorphism is an ideal.
> 2. The image of an ideal under a surjective homomorphism is an ideal.
> 
> > [!Proof]-
> > Let $\varphi:R\to S$ be a homomorphism.
> > $(1)$ Let $I\subseteq S$ be an ideal. Let $a, b\in\varphi ^{-1}(I)$. Then, $\varphi(a+b)=\varphi(a)+\varphi(b)\in I$, so $a+b\in\varphi ^{-1}(I)$. Next, $0=\varphi(0)=\varphi(a)+\varphi(-a)$, so $\varphi(-a)=-\varphi(a)\in I$. Thus, $(\varphi ^{-1}(I), +)$ is an abelian group. Let $r\in R$. Then, $\varphi(ar)=\varphi(a)\varphi(r)\in I$, and $\varphi(ra)=\varphi(r)\varphi(a)\in I$, so $\varphi ^{-1}(I)$ is closed under left and right multiplication by $R$.
> > 
> > $(2)$ Let $I\subseteq R$ be an ideal. $\varphi(I)$ is clearly an abelian group. Let $(i+\ker\varphi)\in\varphi(I)$. Any element of $S$ may be expressed as $(s+\ker\varphi)$. Since 
> > $$
> > (i+\ker\varphi)(s+\ker\varphi)=(is+\ker\varphi)\in\varphi(I),
> > $$
> > $\varphi(I)$ is closed under left and right multiplication by $S$.
> 

^6a203e

Analogous to [[LEC ALG2 5#^82cf21|this proposition]] from group theory. 

For any ring $R$ with ideal $I$, we have a natural surjective homomorphism $\pi:R\to R/I$: $r\mapsto r+I$. If $J$ is an ideal in $R$, then $\pi(J)(R/I)$ (the ideal generated by $\pi(J)$ in $R/I$) is equal to $\pi(J)$, and is the ideal $(J+I)/I$. 

> [!Proposition]
> Let $\varphi:R\to S$ be a homomorphism. Let $I\subseteq R$ and $J\subseteq S$ be ideals such that $\varphi(I)\subseteq J$. Then, $\overline{\varphi}:R/I\to S/J$ is a homomorphism.

> [!Proposition]
> Let $\varphi:R\to S$. Let $I$ be an ideal in $R$. Let $\varphi(I)\cdot S$ be the ideal in $S$ generated by $\varphi(I)$. [[LEC ALG3 2#^ef8ced|Then]],  $\varphi ^{-1}(\varphi(I)\cdot S)$ is an ideal in $R$ containing $I$.
> 
> If $J$ is an ideal of $S$, $\varphi(\varphi ^{-1}(J))\cdot S$ is an ideal in $S$ contained in $J$.

It follows that every ideal $J\subseteq \mathbb{Z}[x]$ contains $n\mathbb{Z}$ for some $n$ on considering the inclusion homomorphism $\mathbb{Z}\to \mathbb{Z}[x]$. 
## Principal ideals

Let $a\in R$ be any element of a ring. Then the subset $I=Ra$ of $R$ is a left-ideal of $R$. Indeed, for all $r\in R$ we have $rI=rRa\subseteq Ra$. Similarly, $aR$ is a right ideal. 

> [!Definition]
> A **principal ideal** is an ideal that is generated by a single element.
> 
> 1. A **left principal ideal** of $R$ is a subset of $R$ given by $Ra$ for some element $a$.
> 2. A **right principal ideal** of $R$ is a subset of $R$ given by $aR$.
> 3. A **two-sided principal ideal** of $R$ is a subset of $R$ given by $RaR=\left\{  \sum_{i=1}^{n} r_{i}as_{i}\ | \ r_{1}, s_{1}, \dots, r_{n}, s_{n}\in R  \right\}$ for some element $a$, namely, the set of all finite sums of elements of the form $ras$.

When $R$ is commutative, the three notions coincide and are denoted $(a)$. This is the **principal ideal generated by $a$**. 

The zero-ideal $(0)=\{ 0 \}$ and the whole ring $(1)=R$ are both principal ideals.

> [!Lemma]
> If $\{ I_{\alpha} \}_{\alpha\in A}$ is a family of ideals of a ring $R$, then the sum $\sum_{\alpha}I_{\alpha}$ is an ideal of $R$.

> [!Definition]
> If $a_{\alpha}$ is any collection of elements of a *commutative* ring $R$, then
> $$
> (a_{\alpha})_{\alpha\in A}:=\sum_{\alpha\in A}(a_{\alpha})
> $$
> is the **ideal generated by the elements $a_{\alpha}$**. 

In particular, 
$$
(a_{1}, \dots, a_{n})=(a_{1})+\dots+(a_{n})
$$
is the smallest ideal of $R$ containing $a_{1}, \dots, a_{n}$; the elements of this ideal are of the form
$$
r_{1}a_{1}+\dots+r_{n}a_{n}
$$
for $r_{1}, \dots, r_{n}\in R$. 

> [!Definition]
> An ideal $I$ of $R$ is **finitely generated** if $I=(a_{1}, \dots, a_{n})$ for some $a_{1}, \dots, a_{n}\in R$.

> [!Example]
> Let $R$ be a commutative ring, and let $a, b\in R$. Let $\overline{b}$ denote the class of $b$ in $R/(a)$. Then, 
> $$
> \frac{R/(a)}{(\overline{b})}\cong R/(a, b).
> $$
> This follows from [[#^f12ed2]], since
> $$
> \begin{align}
> (\overline{b}) & =(b+(a))(R/(a)) \\
>  & = \{ br+(a)\ | \  r\in R \} \\
>  & = \frac{(a, b)}{(a)}.
> \end{align}
> $$
> 

^5c702e

> [!Definition]
> 1. A commutative ring $R$ is **Noetherian** if every ideal of $R$ is finitely generated.
> 2. An integral domain $R$ is a **PID (Principal Ideal Domain)** if every ideal of $R$ is principal.

$\mathbb{Z}$ is clearly a PID. 

> [!Theorem]
> If $k$ is a field, then $k[x]$ is a PID.
> 
> > [!Proof]-
> > Let $I\subseteq k[x]$ be any ideal. If $I=(0)$, then $I$ is principal. Otherwise, let $f(x)$ be the minimal degree monic polynomial in $I$ [^1]. Let $g(x)$ be any polynomial in $I$. We can express $g(x)$ as
> > $$
> > g(x)=f(x)p(x)+r(x),
> > $$
> > where $p(x)\in k[x]$ and $r(x)$ has degree less than $f(x)$. But, $f(x)$ has minimal degree, so $r(x)=0$ [^2]. It follows that $I=(f(x))$. 
> 

^2e8cc1

[^1]: Minimal degree monic polynomials in an ideal, if they exist, are unique in polynomial rings. They must exist in this case since $k$ is a field. See @leeuwenAnswerPrincipalIdeal2013 for more.

[^2]: With the convention that the degree of the polynomial $0$ is $-\infty$, $\text{deg}\,r(x)< \text{deg}\,f(x)$ is satisfied by $r(x)=0$ for all nonzero $f(x)$.

$\mathbb{Z}[x]$, however, is not a PID: the ideal $(2, x)$ cannot be generated by a single element.