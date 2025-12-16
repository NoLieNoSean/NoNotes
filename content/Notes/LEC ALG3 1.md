---
tags:
  - ALG3
  - Lecture
  - Processed
date: 2025-08-05
time: 09:09
id: "106"
---
First quiz on Sep 1.

Clare's definitions match the ones from @aluffiAlgebraChapter02009 : all rings have $1$, and ring homomorphisms map $1$ to $1$. Ideals are no longer subrings (since that would need them to have a $1$, which in turn would force any ideal to be the whole ring).

---
# Ring homomorphisms

Same definition as [[Intro to Ring Theory#^6d13b3|here]], but with the additional requirement that $\varphi(1_{R})=1_{S}$.

It is evident that rings form a [[Intro to Category Theory#^05a089|category]], denoted $\textsf{Ring}$, with ring homomorphisms as morphisms.

The zero ring is clearly *final* in $\textsf{Ring}$. It is not initial because of the requirement that ring homomorphisms send $1$ to $1$.

$\mathbb{Z}$ is *initial* in $\textsf{Ring}$: for every  ring $R$ we can define a group homomorphism $\varphi:\mathbb{Z}\to R$ by $\varphi(n)=n1_{R}$. But $\varphi$ is in fact a ring homomorphism, since $\varphi(1)=1_{R}$, and 
$$
\begin{align}
\varphi(mn) & =(mn)1_{R}=m(n 1_{R}) \\
 & =(m 1_{R})\cdot(n 1_{R}) \\
 & =\varphi(m)\cdot\varphi(n).
\end{align}
$$
This ring homomorphism is uniquely determined by the requirement that $\varphi(1)=1_{R}$ and the fact that $\varphi$ preserves addition. 

> [!Info]
> 
> The fact that $\mathbb{Z}$ is initial in $\textsf{Ring}$ prompts a natural definition. For a ring $R$, let $f:\mathbb{Z}\to R$ be the unique ring homomorphism. Then, $\ker f=n\mathbb{Z}$ for a well-defined nonnegative integer $n$ determined by $R$. This is called the **characteristic** of $R$.
> 
> 
> The **characteristic** of a ring is the smallest integer $n> 0$ such that $nr=0$. If $nr\ne 0$ for all $n> 0$, $\text{char}(R)=0$. 
> 
> If $k$ is a field, then $\text{char}(k)$ is $0$ or $p$ for some prime $p$, since the image of the homomorphism $\varphi:\mathbb{Z}\to k$ is an integral domain and $\mathbb{Z}/\ker\varphi\cong \mathrm{Im}~\varphi$, so $\ker\varphi$ is a prime ideal of $\mathbb{Z}$.


Ring homomorphisms preserve units: that is, if $u$ is a left/right unit in $R$ and $\varphi:R\to S$ is a ring homomorphism, then $\varphi(u)$ is a left/right unit. Indeed, if $v$ is a right inverse of $u$, then $\varphi(u)\varphi(v)=\varphi(uv)=\varphi(1_{R})=1_{S}$.

On the other hand, the image of a non-zero-divisor by a ring homomorphism may well be a zero-divisor: the canonical projection $\pi:\mathbb{Z}\to \mathbb{Z}/6\mathbb{Z}$ is a ring homomorphism, and $\pi(2)=[2]_{6}$ is a zero divisor.

## Monomorphisms and epimorphisms

Remember that a monomorphism is a left cancellable morphism (and not necessarily a left invertible one!). 

The analogue of [[Categorical notes on group theory#^79d9ee]] holds in $\textsf{Ring}$:

> [!Proposition] @aluffiAlgebraChapter02009 III.2.4
> For a ring homomorphism $\varphi:R\to S$, the following are equivalent:
> 1. $\varphi$ is a monomorphism;
> 2. $\ker\varphi=\{ 0 \}$;
> 3. $\varphi$ is injective (as a set function)
> 
> > [!Proof]-
> > $(1)\implies(2)$: Using [[#^0422dc]], we get unique homomorphisms $\text{ev}_{r}:\mathbb{Z}[x]\to R$ and $\text{ev}_{0}:\mathbb{Z}[x]\to R$ such that $\text{ev}_{r}(x)=r$ and $\text{ev}_{0}(x)=0$. Consider the parallel compositions
> > $$
> > \mathbb{Z}[x] \underset{\text{ev}_{0}}{\overset{\text{ev}_{r}}{\rightrightarrows}}R\overset{\varphi}{\to}S.
> > $$
> > since $\varphi(r)=0=\varphi(0)$, the compositions $\varphi \circ \text{ev}_{r}$ and $\varphi \circ \text{ev}_{0}$ agree; hence $\text{ev}_{r}=\text{ev}_{0}$. Therefore $r=\text{ev}_{r}(x)=\text{ev}_{0}(x)=0$, which proves $(2)$.
> 

Note that we had to get a little creative here since we couldn't use $\ker\varphi$ as we did in the group theoretic version, since $\ker\varphi$ is not a subring.

However, unlike $\textsf{Set}$, $\textsf{Gp}$, and $\textsf{Ab}$, *epimorphisms need not be surjective* in $\textsf{Ring}$. Consider the inclusion homomorphism $\iota :\mathbb{Z}\to \mathbb{Q}$: $\iota$ is not surjective, hence it is not an epimorphism in $\textsf{Set}$ or $\textsf{Ab}$; but it is an epimorphism in $\textsf{Ring}$ since if homomorphisms $\alpha_{1}, \alpha_{2}:\mathbb{Q}\to R$ agree on $\mathbb{Z}$, then they must agree on $\mathbb{Q}$:
$$
\alpha_{i}\left( \frac{p}{q} \right)=\alpha_{i}(p)\alpha_{i}(q^{-1})=\alpha_{i}(p)\alpha_{i}(q)^{-1}.
$$
Thus, in $\textsf{Ring}$, a homomorphism may be both a monomorphism and an epimorphism without being an isomorphism!

## Cayley's Theorem analog

Let $|G|$ denote the underlying set of a group $G$. For $r\in G$, let $\lambda_{r}:|G|\to |G|$ be the map $g\mapsto rg$. [[LEC ALG2 7#^3ca8d2|Cayley's theorem]] for groups says that the map 
$$
\varphi:G\to \text{Aut}_{\textsf{Set}}(G),\quad   r\mapsto\lambda_{r}
$$
is an injective group homomorphism (i.e, a faithful group action). 

We have a similar result for rings. Let $R$ be a ring, and for $r\in R$, define $\lambda_{r}$ to be the left multiplication map. 

> [!Proposition] @aluffiAlgebraChapter02009 III.2.7
> Let $R$ be a ring. Then, the map $r\to\lambda_{r}$ is an injective ring homomorphism
> $$
> \lambda:R\to \text{End}_{\textsf{Ab}}(R).
> $$
> 



---
# Polynomial rings

Let $R$ be a ring. A **polynomial** $f(x)$ in the indeterminate $x$ and with coefficients in $R$ is a *finite* linear combination of nonnegative 'powers' of $x$ with coefficients in $R$. Two polynomials are taken to be equal if all the coefficients are equal. The set of polynomials in $x$ over $R$ is noted $R[x]$. With addition and multiplication defined as one would expect, $R[x]$ is a ring. 

The **degree** of a nonzero polynomial, denoted $\text{deg}f(x)$, the the largest integer $d$ for which the coefficient of $x^{d}$ is nonzero. This is well behaved only if $R$ is an integral domain.

The ring $R[x]$ is commutative if $R$ is commutative, it is an integral domain if $R$ is an integral domain. However, it cannot be a field even if $R$ is a field, since $x$ has no inverse in $R[x]$.

> [!Proposition]
> Let $A=\{ a_{1}, a_{2}, \dots, a_{n} \}$. Let $\mathscr{R}_{A}$ be the category of ordered pairs $(j, R)$, where $R$ is a commutative ring, $j:A\to R$ is a set function, with morphisms $(j_{1}, R_{1})\to(j_{2}, R_{2})$ being commutative diagrams
> 
> ```latex
> % latex-id: ec35-52a8-b066-4cf1-8e20
> \begin{tikzcd}
> R_{1}\ar[r, "\varphi"] & R_{2}\\
> A\ar[u, "j_{1}"]\ar[ur, "j_{2}"'] &
> \end{tikzcd}
> ```
> in which $\varphi$ is a ring homomorphism.
> 
> $(i, \mathbb{Z}[x_{1}, \dots, x_{n}])$ is initial in $\mathscr{R}_{A}$, where $i:A\to \mathbb{Z}[x_{1}, \dots, x_{n}]$ sends $a_{k}$ to $x_{k}$.
> 
> 
> > [!Proof]-
> > Let $(j, R)$ be an arbitrary object of $\mathscr{R}_{A}$; we have to show that there is a unique morphism $(i, \mathbb{Z}[x_{1}, \dots, x_{n}])\to(j, R)$, that is, there exists exactly one ring homomorphism $\varphi:\mathbb{Z}[x_{1}, \dots, x_{n}]\to R$ such that
> > 
> > ```latex
> > 
> > % latex-id: 061b-e609-617b-4374-a8a0
> > \begin{tikzcd}
> > \mathbb{Z}[x_{1}, \dots, x_{n}]\ar[r, "\varphi"] & R\\
> > A\ar[u, "i"]\ar[ur, "j"'] &
> > \end{tikzcd}
> > 
> > ```
> > commutes. 
> > 
> > The commutativity of the diagram forces $\varphi(x_{k})=j(a_{k})$ for $k=1, \dots, n$. Since $\varphi$ is a ring homomorphism, 
> > $$
> > \begin{align}
> > \varphi\left( \sum m_{i_{1}\dots i_{n}}x_{1}^{i_{1}}\dots x_{n}^{i_{n}} \right) & =\sum\varphi(m_{i_{1}\dots i_{n}})\varphi(x_{1})^{i_{1}}\dots\varphi(x_{n})^{i_{n}} \\
> >  & =\sum \iota(m_{i_{1}\dots i_{n}})j(x_{1})^{i_{1}}\dots j(x_{n})^{i_{n}},
> > \end{align}
> > $$
> > where $\iota:\mathbb{Z}\to R$ is the unique ring homomorphism ($\mathbb{Z}$ is initial in $\textsf{Ring}$).
> > 
> > Thus, if $\varphi$ exists, it is unique. The formula above clearly preserves addition and sends $1$ to $1$. To show that $\varphi$ preserves multiplication, it is sufficient to show that it preserves multiplication of monomials:
> > 
> > $$
> > \begin{align}
> >  & \varphi(ax_{1}^{i_{1}}\dots x_{n}^{i_{n}}\cdot bx_{1}^{j_{1}}\dots x_{n}^{j_{n}})\\
> >  & =\varphi(abx_{1}^{i_{1}+j_{1}}\dots x_{n}^{i_{n}+j_{n}}) \\
> >  & =\varphi(ab)j(x_{1})^{i_{1}+j_{1}}\dots j(x_{n})^{i_{n}+j_{n}} \\
> >  & \overset{!}{=}\varphi(ab)j(x_{1})^{i_{1}}\dots j(x_{n})^{i_{n}}j(x_{1})^{j_{1}}\dots j(x_{n})^{j_{n}}. \\
> >  & =\varphi(a)j(x_{1})^{i_{1}}\dots j(x_{n})^{i_{n}}~\varphi(b)j(x_{1})^{j_{1}}\dots j(x_{n})^{j_{n}} \\
> >  & =\varphi(ax_{1}^{i_{1}}\dots x_{n}^{i_{n}})\varphi(ax_{1}^{j_{1}}\dots x_{n}^{j_{n}}).
> > \end{align}
> > $$
> > Note that the commutativity of $R$ was used in the step marked $!$. Also note that $\varphi(a)$, being $a1_{R}$, always commutes with all elements of $R$.
> > 
> > 
> 

^07b7c8

Note again that for any ring $S$, the image of the unique ring homomorphism $\iota:\mathbb{Z}\to S$ commutes with all elements of $S$. This property was crucial to proving that $\varphi$ respects multiplication.

> [!Example]
> For $n=1$, [[#^07b7c8]] says if $s$ is any element of a ring $S$, then there is a unique ring homomorphism $\mathbb{Z}[x]\to S$ sending $x$ to $s$ and extending the unique ring homomorphism $\iota:\mathbb{Z}\to S$. In this case commutativity of $S$ is immaterial ($n=1$, so the $j(x_{i})$'s do not need to commute with each other.)
> 
> More generally (still working with $n=1$), we can replace $\mathbb{Z}$ with an arbitrary ring $R$. We lose two things by doing this: the uniqueness of the homomorphism $R\to S$, and the elements of $S$ commuting with the elements of the image of the homomorphism. We solve the first deficiency by fixing a homomorphism $\alpha:R\to S$. As for the second one, we assume $S$ has an element $s$ which commutes with $\alpha(r)$ for all $r\in R$ (we just need one, since $n=1$). Then there is a unique ring homomorphism $\overline{\alpha}:R[x]\to S$ extending $\alpha$ and sending $x$ to $s$.
> 
> In particular, for commutative $S$, if we take $R=S$, and $\alpha:R\to S=\mathrm{id}_{S}$, for each $s\in S$ we get a unique homomorphism $\overline{\alpha}_{s}:S[x]\to S$ extending $\mathrm{id}_{S}$ and sending $x$ to $s$. This is called the *evaluation map* for polynomials over $S$ at $s$, and the reason is obvious:
> $$
> \begin{align}
> \overline{\alpha}_{s}\left( \sum a_{i}x^{i} \right) & =\sum \overline{\alpha}_{s}(a_{i})\overline{\alpha}_{s}(x)^{i} \\
>  & =\sum a_{i}s^{i}.
> \end{align}
> $$
> Thus, every polynomial $f(x)\in S[x]$ determines a *polynomial function* $f:S\to S$ defined by $s\mapsto \overline{\alpha}_{s}(f(x))$. 

^0422dc

> [!Example]
> Let $\varphi:R\to S$ be a homomorphism. The codomain can be extended using the inclusion $S\hookrightarrow S[x]$. [[#^0422dc]] gives us a unique homomorphism $\overline{\varphi}:R[x]\to S[x]$ extending $\varphi$ and sending $x$ to $x$.
> 
> In particular, if we take $S=R/I$ for some ideal $I$ of $R$, and $\varphi$ to be the natural projection, we get a unique extension $\overline{\pi}:R[x]\to(R/I)[x]$ sending $x$ to $x$. It is easy to see that $\ker \overline{\pi}=IR[x]$. Thus, 
> $$
> \frac{R[x]}{IR[x]}\cong (R/I)[x].
> $$
> 



---
# Products and coproducts

If $R_{1}$ and $R_{2}$ are rings, then $R_{1}\times R_{2}$ may be defined by endowing the direct product of groups $R_{1}\times R_{2}$ with componentwise multiplication. The identity is $(1_{R_{1}}, 1_{R_{2}})$. 

> [!Example]
> Componentwise multiplication is not the only ring structure one can define on the direct product of underlying groups. For example, $\mathbb{Z}/2\mathbb{Z}\times \mathbb{Z}/2\mathbb{Z}$, under componentwise multiplication, is not a division ring, and thus, not a field. However, it is possible to make it a division ring by altering the multiplication map:
> $$
> \begin{array}{l|llll}
> &0&a&b&1 \\
> \hline 
> 0 & 0 & 0 & 0  & 0 \\
> a  & 0 & a/b & 0/1 & a\\
> b  & 0 & 0/1 & b/a & b\\
> 1 & 0 & a & b & 1
> \end{array}
> $$
> The entries before the slashes are the one arising from componentwise multiplication, and those after are the alternate definitions (note that the first and fourth row and column are immutable). One only needs to very the distributive property for $a$ and $b$, which is easily done.

^2daa9c

However, $R_{1}\times R_{2}$ does not satisfy the [[Intro to Category Theory#Coproducts|universal property of coproducts]]: although [[Categorical notes on group theory#^8e8d67|there is]] a unique *group* homomorphism from $R_{1}\times R_{2}$ to $A$ for any $(A, \varphi_{R_{1}}, \varphi_{R_{2}})\in \textsf{C}^{R_{1}, R_{2}}$, this does not respect multiplication, and thus is not a ring homomorphism:
$$
\begin{align}
 & \varphi(1_{R_{1}\times R_{2}})=\varphi(1_{R_{1}}, 1_{R_{2}}) \\
 & =\varphi(1_{R_{1}}, 0)+\varphi(0, 1_{R_{2}})=1_{A}+1_{A}\ne 1_{A}.
\end{align}
$$


