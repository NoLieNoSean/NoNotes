---
tags:
  - ALG3
  - Lecture
date: 2025-08-05
time: 09:09
---
First quiz on Sep 1.

---
# Rings

Clare's definitions match the ones from @aluffiAlgebraChapter02009 : all rings have $1$, and ring homomorphisms map $1$ to $1$. Ideals are no longer subrings (since that would need them to have a $1$, which in turn would force any ideal to be the whole ring).

> [!Definition]
> Let $I\subseteq R$ and $(I, +)$ be an abelian group. $I$ is a left/right ideal if it is closed under left/right multiplication by elements of $R$. 

## Ring homomorphisms

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

Ring homomorphisms preserve units: that is, if $u$ is a left/right unit in $R$ and $\varphi:R\to S$ is a ring homomorphism, then $\varphi(u)$ is a left/right unit. Indeed, if $v$ is a right inverse of $u$, then $\varphi(u)\varphi(v)=\varphi(uv)=\varphi(1_{R})=1_{S}$.

On the other hand, the image of a non-zero-divisor by a ring homomorphism may well be a zero-divisor: the canonical projection $\pi:\mathbb{Z}\to \mathbb{Z}/6\mathbb{Z}$ is a ring homomorphism, and $\pi(2)=[2]_{6}$ is a zero divisor.

## Polynomial rings

Let $R$ be a ring. A **polynomial** $f(x)$ in the indeterminate $x$ and with coefficients in $R$ is a *finite* linear combination of nonnegative 'powers' of $x$ with coefficients in $R$. Two polynomials are taken to be equal if all the coefficients are equal. The set of polynomials in $x$ over $R$ is noted $R[x]$. With addition and multiplication defined as one would expect, $R[x]$ is a ring. 

The **degree** of a nonzero polynomial, denoted $\text{deg}f(x)$, the the largest integer $d$ for which the coefficient of $x^{d}$ is nonzero. This is well behaved only if $R$ is an integral domain.

The ring $R[x]$ is commutative if $R$ is commutative, it is an integral domain if $R$ is an integral domain. However, it cannot be a field even if $R$ is a field, since $x$ has no inverse in $R[x]$.

> [!Proposition]
> Let $A=\{ a_{1}, a_{2}, \dots, a_{n} \}$. Let $\mathscr{R}_{A}$ be the category of ordered pairs $(j, R)$, where $R$ is a commutative ring, $j:A\to R$ is a set function, with morphisms $(j_{1}, R_{1})\to(j_{2}, R_{2})$ being commutative diagrams
> 
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
> R_{1}\ar[r, "\varphi"] & R_{2}\\
> A\ar[u, "j_{1}"]\ar[ur, "j_{2}"'] &
> \end{tikzcd}
> \end{document}
> ```
> in which $\varphi$ is a ring homomorphism.
> 
> $(i, \mathbb{Z}[x_{1}, \dots, x_{n}])$ is initial in $\mathscr{R}_{A}$, where $i:A\to \mathbb{Z}[x_{1}, \dots, x_{n}]$ sends $a_{k}$ to $x_{k}$.
> 
> 
> > [!Proof]-
> > Let $(j, R)$ be an arbitrary object of $\mathscr{R}_{A}$; we have to show that there is a unique morphism $(i, \mathbb{Z}[x_{1}, \dots, x_{n}])\to(j, R)$, that is, there exists exactly one ring homomorphism $\varphi:\mathbb{Z}[x_{1}, \dots, x_{n}]\to R$ such that
> > 
> > ```tikz
> > \usepackage{tikz-cd, amsmath, amssymb}
> > \begin{document}
> > \begin{tikzcd}
> > \mathbb{Z}[x_{1}, \dots, x_{n}]\ar[r, "\varphi"] & R\\
> > A\ar[u, "i"]\ar[ur, "j"'] &
> > \end{tikzcd}
> > \end{document}
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
