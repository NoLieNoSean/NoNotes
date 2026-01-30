---
id: "102"
---
# Free groups

Refer @balsdonFREEGROUPSGEOMETRY, @suryFreeGroupsBasics2010.
See @robinsonBANACHTARSKIPARADOX2015 for an interesting application of free groups.

Intuitively, a free group is a group which has no nontrivial relations among its elements - it satisfies the bare minimum requirements to be called a group (the group axioms) and nothing more. ^68d01d

> [!Definition]
> Given a non-empty set $S$, and a map $\theta:S\to F$ into a group $F$, the pair $(F, \theta)$ is said to be a **free group** on the set $S$ if, for any function $\varphi:S\to G$ to any group $G$, there is a ==unique== homomorphism $\overline{\varphi}:F\to G$ such that $\varphi=\overline{\varphi}\circ\theta$. When $\theta$ is an inclusion, we call $\overline{\varphi}$ the unique extension of $\varphi$ to $F$. 
> 
> ```latex
> % latex-id: a143-53a6-14a3-4ad1-90cd
> \begin{document}
> \begin{tikzcd}
>  S\ar[r, "\varphi"]\ar[d, "\theta"']&G\\
>  F\ar[ru, dotted, "\overline{\varphi}"']&\\
>  \end{tikzcd}
> \end{document}
> ```
> 


^1e47e5

> [!Proposition]
> If $(F, \theta)$ is a free group on a set $S$, then
> 1. $\theta$ must be injective.
> 2. $(F, \text{inclusion})$ is free on $\text{im}(\theta)$. 
> 3. $\text{im}(\theta)$ generates $F$. 
> 
> > [!Proof]-
> > 
> >  $(1)$ and $(2)$ are clear, so $S\subseteq F$. Let $i$ be the inclusion $S\hookrightarrow F$. The unique extension of $i$ to $F$ is clearly the identity [^1]. Consider the inclusions $i_{1}:S\hookrightarrow \langle S \rangle$ and $i_{2}:\langle S \rangle\hookrightarrow F$. Clearly, $i=i_{2}\circ i_{1}$. Let $\pi$ be the unique extension of $i_{1}$ to $F$.   Then, we have $i=i_{2}\circ \pi \circ i$, forcing $i_{2}\circ \pi=\text{id}$. Since $i_{2}$ is an inclusion, this forces $\langle S \rangle=F$.  
> > 
> > ```latex
> > % latex-id: a0c9-7ea5-2a53-44ef-bfff
> > \begin{tikzcd}
> > S\ar[r, "i_{1}"]\ar[rr, bend left, "i"]\ar[d, hook, "i"']&\langle S \rangle \ar[r, "i_{2}"]&F\\
> > F\ar[ru, "\pi"]\ar[rru, dashed,  "id"']&&
> > \end{tikzcd}
> > ```
> > 
> 

## Constructing a free group on any arbitrary set

To construct a free group, start with an arbitrary set, say $S=\{ a, b, \dots \}$. Let $S'$ be the set that contains the symbols $a$ and $a^{-1}$ for every $a\in S$, $i$.$e$, $S'=\{ a, a^{-1}, b, b ^{-1} , \dots\}$. The elements of $S'$ are called symbols. Define a word to be a finite string of symbols, in which repetition is allowed. Let $W$ be the set of all words along with the empty string $e$. Define the product operation on $W$ to be concatenation. Obviously, $W$ is not a group, since inverses do not exist (yet).

If a word looks like $\dots x x ^{-1}\dots$ for some $x\in S'$, we may agree to "cancel" the two symbols $x$ and $x ^{-1}$. Call a word *reduced* if no such reduction can be made. Starting with any $w\in W$, we can make a finite sequence of reductions to arrive at a reduced word $\overline{w}$, which is called the *reduced form* of $w$. There may be more than one way to arrive at the reduced word. If we want the notion of a reduced word to be well defined, we must ensure that all paths lead to $\overline{w}$.

> [!Lemma]
> There is only one reduced word for a given word $w$.

Proof by induction on $n$ (easy). See @artinAlgebra2011 [p. 211].

Define an equivalence relation $\sim$ on $W$ by $w\sim w'$ if $w$ and $w'$ have the same reduced word. Next, observe that products of equivalent words are equivalent, that is, $w\sim w'$ and $v\sim v'$ imply $wv\sim w'v'$. Therefore, it follows that the equivalence classes of words can be multiplied.

> [!Lemma]
> The set $W/\sim$ of equivalence classes is a group, with the law of composition induced from multiplication in $W$.
> 
> > [!Proof]-
> > The facts that multiplication is associative and that the class of the empty word $e$ is an identity follows from the corresponding facts in $W$. Also, for any $[xy\dots z]\in W/\sim$, $[z^{-1}\dots y^{-1}x ^{-1}]\in W/\sim$ is clearly its inverse.
> 

Let $F:=W/\sim$. Defining the map $\theta:S\to F$ by $x\mapsto [x]$, let us show that $(F, \theta)$ is free on $S$. 

> [!Proposition]
> $(F, \theta)$ is free on $S$. 
> 
> > [!Proof]-
> > 
> > Let $\varphi:S\to G$ be a map into any group. Let $S=\{ s_{\alpha}:\alpha\in I \}$, and the image $\text{im}\,(\theta)$ of $S$ in $F$ be denoted by $\{ s'_{\alpha}:\alpha\in I \}$. $\overline{\varphi}$ from [[#^1e47e5]], if it exists, must agree with $\varphi$ on $S$, that is, $\overline{\varphi}(s'_{\alpha})=\varphi(s_{\alpha})$. Since $\text{im}\,(\theta)$ generates $F$, this can be uniquely extended to a homomorphism $F\to G$.
> 

^383842

Thus, given a set $S$, we have constructed *a* free group on $S$. We will now show that free groups constructed on sets of the same cardinality are isomorphic. 
## Rank of a free group

> [!Proposition]
> If $|X_{1}|=|X_{2}|$, then $F(X_{1})\cong F(X_{2})$. 
> 
> > [!Proof]-
> > 
> > Let $\alpha:X_{1}\to X_{2}$ be an isomorphism, and $(F_{1}, \theta_{1})$, $(F_{2}, \theta_{2})$ be free groups on $X_{1}$ and $X_{2}$ respectively. Let $\varphi_{1}:F_{1}\to F_{2}$ and $\varphi_{2}:F_{2}\to F_{1}$ be the unique homomorphisms given by [[#^1e47e5]] corresponding to $\theta_{2}\circ\alpha$ and $\theta_{1}\circ\alpha ^{-1}$ respectively. 
> > ```latex
> > % latex-id: c25e-fa32-6ff9-4946-bd81
> > \begin{tikzcd}[column sep = large]
> > X_{1} \ar[r, "\alpha"]\ar[rd, "\theta_{2}\circ\alpha"]\ar[d, "\theta_{1}"'] & X_{2}\ar[d, "\theta_{2}"] \\
> > F_{1}\ar[r, dashed, "\varphi_{1}"'] & F_{2}
> > \end{tikzcd}
> > ```
> > 
> > For all $x\in X_{1}$, 
> > $$
> > \begin{align}
> > \varphi_{2}(\varphi_{1}(\theta_{1}(x))) & =\varphi_{2}(\theta_{2}(\alpha(x))) \\
> >  & = \theta_{1}(\alpha ^{-1}(\alpha(x))) \\
> >  & =\theta_{1}(x).
> > \end{align}
> > $$
> > Therefore, $\varphi_{2}\circ\varphi_{1}$ makes this diagram commute:
> > ```latex
> > % latex-id: c902-e655-dfd4-4c9f-94a4
> > \begin{tikzcd}
> > X_{1}\ar[r, "\theta_{1}"]\ar[d, "\theta_{1}"'] & F_{1} \\
> > F_{1}\ar[ru, "\varphi_{2}\circ\varphi_{1}"'] & 
> > \end{tikzcd}
> > ```
> > Since the identity $\text{id}_{F_{1}}:F_{1}\to F_{1}$ also makes the above diagram commute, it follows that $\varphi_{2}\circ \varphi_{1}=\text{id}_{F_{1}}$. Similarly, $\varphi_{1}\circ\varphi_{2}=\text{id}_{F_{2}}$. Thus, $F_{1}\cong F_{2}$. 
> 

^0409cd

The converse is also true: isomorphic free groups must be on isomorphic sets. 

> [!Proposition]
> If $F(X_{1})\cong F(X_{2})$, then $|X_{1}|=|X_{2}|$. 
> 
> > [!Proof]-
> > 
> > Consider the sets $\text{Hom}(F(X_{1}), \mathbb{F}_{2})$ and $\text{Hom}(F(X_{2}), \mathbb{F}_{2})$ of group homomorphisms to the field $\mathbb{F}_{2}$. These sets are vector spaces over $\mathbb{F}_{2}$ with bases $X_{1}$ and $X_{2}$ respectively. Fixing an isomorphism $\theta:F(X_{1})\to F(X_{2})$,  we have an isomorphism of $\mathbb{F}_{2}$-vector spaces from $\text{Hom}(F(X_{2}), \mathbb{F}_{2})$ to $\text{Hom}(F(X_{1}), \mathbb{F}_{2})$ given by $\varphi\mapsto\varphi \circ\theta$ [^2]. Thus, [[LEC ALG4 3#^1fd2eb|their bases must have the same cardinality]], which proves $|X_{1}|=|X_{2}|$. 
> 

^cb59c5

In light of [[#^0409cd]] and [[#^cb59c5]], one may define

> [!Definition]
> The **rank** of any free group is the cardinality of a set $X$ on which it is free. 

## Generators and relations

> [!Definition]
> A **relation** among elements $x_{1}, x_{2}, \dots, x_{n}$ of a group $G$ is a word $r$ in the free group on the set $\{ x_{1}, x_{2}, \dots, x_{n} \}$ that evaluates to $1$ in $G$. 

The following should be easy to see:

> [!Proposition]
> Let $R$ be a subset of a group $G$. There exists a unique smallest normal subgroup $N$ of $G$ which contains $R$, called the **normal subgroup generated by $R$**. If a normal subgroup of $G$ contains $R$, it contains $N$. The elements of $N$ can be described as follows: Let $R'$ be the set consisting of elements $r$ and $r^{-1}$ with $r\in R$. An element of $G$ is in $N$ if it can be written as a product $y_{1}\dots y_{r}$ of some arbitrary length, where each $y_{v}$ is a conjugate of an element in $R'$.

> [!Definition]
> Let $\mathcal{F}$ be the free group on a set $S=\{ x_{1}, \dots, x_{n} \}$, and let $R=\{ r_{1}, \dots, r_{k} \}$ be a set of elements of $\mathcal{F}$. The **group generated by $S$ with relations $r_{1}, r_{2}, \dots, r_{k}$** is the quotient group $\mathcal{G}=\mathcal{F}/\mathcal{R}$, where $\mathcal{R}$ is the normal subgroup of $\mathcal{F}$ generated by $R$. $\mathcal{G}$ is denoted by $\langle x_{1}, \dots, x_{n}\ | \ r_{1}, \dots, r_{k} \rangle$.

Note that $\mathcal{R}$ is precisely the set of words in $\mathcal{F}$ which equate to the identity in $\mathcal{G}$. Let $R'$ be the set consisting of elements $r$ and $r^{-1}$ with $r\in R$. Let $R^{*}$ be the set of all conjugates of the members of $R'$: $\{ xrx ^{-1}\ | \ x\in \mathcal{F}, r\in R' \}$. Observe that any word in $\mathcal{G}$ which evaluates to the identity can be expressed as a product of the elements of $R^{*}$. For example, if $p, q\in \mathcal{F}$, we know that the word $pqr_{1}r_{3}^{-1}q^{-1}r_{2}^{4}p ^{-1}$ evaluates to the identity in $G$. It can be represented as a product of members of $R^{*}$ as 
$$
(pqr_{1}q^{-1}p ^{-1})(pqr_{3}^{-1}q^{-1}p ^{-1})(pr_{2}^{4}p ^{-1}).
$$
Now, for $x\in \mathcal{F}$, consider the coset $x\mathcal{R}$. These are a set of words whose equivalence can be established using the relations $R$ (observe that since $\mathcal{R}$ is normal, $x\mathcal{R}$ contains every possible word equivalent to $x$ that you can think of: $x\mathcal{R}=\mathcal{R}x=\mathcal{R}x\mathcal{R}=\mathcal{R}x^{2}\mathcal{R}x ^{-1}\mathcal{R}=\dots$). Thus, the cosets of $\mathcal{R}$ in $\mathcal{F}$ correspond to the distinct words in the group $\mathcal{G}$, modulo the relations in $R$. 

> [!Theorem] 
> Let $G$ be a group and $S=\{ x_{1}, \dots, x_{n} \}\subseteq G$. Let $R=\{ r_{1}, \dots, r_{k} \}$ be a set of relations satisfied by the elements of $S$ in $G$. Let $\mathcal{F}$ be the free group on $S$, and $\mathcal{R}$ be the normal subgroup of $\mathcal{F}$ generated by $R$. Let $\mathcal{G}:=\mathcal{F}/\mathcal{R}$. Then, there is a canonical homomorphism $\psi:\mathcal{G}\to G$ which is
> 1. surjective iff $S$ generates $G$;
> 2. injective iff every relation among the elements of $S$ is in $\mathcal{R}$. In other words, $\psi$ is injective iff $\mathcal{R}=\ker \psi$. 
> 
> If $\psi$ is bijective, we say $R$ forms a **complete set of relations** among the generators $S$, and $G\cong \mathcal{G}$. 
> 
> > [!Proof]-
> > 
> > [[#^1e47e5]] gives us a homomorphism $\varphi:\mathcal{F}\to G$ with $\varphi(x_{i})=x_{i}$. Clearly, $R\subseteq \ker\varphi$. Since $\ker\varphi$ is a normal subgroup and thus is closed under the operations we used to construct $\mathcal{R}$, $\mathcal{R}$ must also be contained in $\ker\varphi$. The [[LEC ALG2 4#^43c508|universal property of quotient groups]] gives us a map $\overline{\varphi}:\mathcal{G}\to G$. This is the map $\psi$.
> >  
> > $(1)$ is obvious; to see $(2)$, assume there exists a relation $\rho=1$ among the elements of $S$ which is not present in $\mathcal{R}$. Then, $\mathcal{R}$ and $\rho \mathcal{R}$ will be distinct elements of $\mathcal{F}/\mathcal{R}$. However, since both $\mathcal{R}$ and $\rho \mathcal{R}$ will be contained in $\ker\varphi$, we have $\psi(\mathcal{R})=\psi(\rho \mathcal{R})=1$. 
> 

> [!Corollary]
> A group is finitely generated iff it is a quotient of a finitely generated free group.
> 
> > [!Proof]-
> > 
> > A quotient of a finitely generated group is finitely generated (the image of the generators generate the image). Conversely, let $G$ be a finitely generated group, say generated by the finite set $S\subseteq G$. Let $\mathcal{F}$ be the free group generated by $S$. The homomorphism $\varphi:\mathcal{F}\to G$ supplied by [[#^1e47e5]] is  the identity on $S$, making it surjective. Therefore, $G\cong F/\ker\varphi$. 
> 




[^1]: The identity works, and it must be the only one because it does!

[^2]: This is an easy verification - injectivity and surjectivity of this map follow directly from the invertibility of $\theta$. 
