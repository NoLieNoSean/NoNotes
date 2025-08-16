---
tags:
  - ALG3
  - Lecture
date: 2025-08-07
time: 09:12
---
# Quotients

> [!Definition]
> Let $I\subseteq R$ and $(I, +)$ be an abelian group. $I$ is a left/right **ideal** if it is closed under left/right multiplication by elements of $R$. 

Let $I$ be a subgroup of the abelian group $(R, +)$ of a ring $R$. Subgroups of abelian groups are automatically normal, so we have a quotient group $R/I$, whose elements are cosets $r+I$ of $I$. Further, we have a surjective group homomorphism
$$
\pi:R\to R/I, \quad r\mapsto r+I.
$$
What requirements should $I$ meet, in order to have a ring structure on $R/I$, such that $\pi$ becomes a ring homomorphism? If $\pi$ is a ring homomorphism, there is only one way to define a ring structure on $R/I$:
$$
(a+I)(b+I)=\pi(a)\pi(b)=\pi(ab)=ab+I.
$$
Thus, there is only one sensible ring structure on $R/I$, given by $(a+I)(b+I)\equiv ab+I$. Note that if this operation is well defined, $R/I$ is a ring. When is this operation well defined?

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

**Thus, $R/I$ is a ring, in such a way that the canonical projection $\pi:R\to R/I$ is a ring homomorphism, iff $I$ is an ideal of $R$.**

The [[LEC ALG2 4#^43c508|mapping property of quotient groups]] provides the scaffolding for its analogue in $\textsf{Ring}$: the needed (group) homomorphism exists and is unique by the group theoretic theorem; verifying it is a ring homomorphism is immediate.

> [!Theorem] @aluffiAlgebraChapter02009 III.3.8
> Let $I$ be a two-sided ideal of a ring $R$. Then for every ring homomorphism $\varphi:R\to S$ such that $I\subseteq \ker\varphi$ there exists a unique ring homomorphism $\tilde{\varphi}:R/I\to S$ so that the diagram
> 
> ```tikz
> \usepackage{tikz-cd, amsmath, amssymb}
> \begin{document}
> \begin{tikzcd}
> R\ar[rr, "\varphi"]\ar[rd, "\pi"']&&S\\
> &R/I\ar[ru, "\exists!\tilde{\varphi}"']&
> \end{tikzcd}
> \end{document}
> ```
> commutes.

^d9ba22

This allows for the canonical decomposition and the first isomorphism theorem for rings. The realization that the ideals of a quotient $R/I$ are in bijective correspondence with ideals of $R$ containing $I$ leads to the third isomorphism theorem:

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

> [!Warning]
> $J/I$ is not a ring! 

## Properties of ideals under homomorphisms

> [!Theorem]
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

Analogous to [[LEC ALG2 5#^82cf21|this proposition]] from group theory. 

## Characteristic

The fact that $\mathbb{Z}$ is initial in $\textsf{Ring}$ prompts a natural definition. For a ring $R$, let $f:\mathbb{Z}\to R$ be the unique ring homomorphism. Then, $\ker f=n\mathbb{Z}$ for a well-defined nonnegative integer $n$ determined by $R$. This is called the **characteristic** of $R$.

> [!Definition]
> The **characteristic** of a ring is the smallest integer $n> 0$ such that $nr=0$. If $nr\ne 0$ for all $n> 0$, $\text{char}(R)=0$. 

---
# Ideals

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
> > where $p(x)\in k[x]$ and $r(x)$ has degree less than $f(x)$. But, $f(x)$ has minimal degree, so $r(x)=0$. It follows that $I=(f(x))$. 
> 

[^1]: Minimal degree monic polynomials, if they exist, are unique in polynomial rings. They must exist in this case since $k$ is a field. See @leeuwenAnswerPrincipalIdeal2013 for more info.

$\mathbb{Z}[x]$, however, is not a PID: the ideal $(2, x)$ cannot be generated by a single element.