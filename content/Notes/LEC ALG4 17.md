---
id: "432"
date: 2026-03-06
time: 11:50
tags:
  - ALG4
  - Lecture
  - "#Processed"
---
# Galois Extensions

> [!Definition] Galois groups and fixed fields
> Let $E$ be a field. 
> 1. For a subfield $F\subseteq E$, the **Galois group** of the extension $E/F$ is the set (easily seen to be a subgroup of $\text{Aut}(E)$) of $F$-automorphisms of $E$. Denoted by $\text{Aut}_{F}(E)$ or $\text{Gal}(E/F)$. 
> 2. Given a subgroup $H\leqslant \text{Aut}(E)$, define the **fixed field** of $H$ to be $\{ \alpha\in E:\sigma(\alpha)=\alpha \,\forall \sigma\in H \}$. Denoted by $E^{H}$ or by $\text{Fix}(H)$. 

> [!Lemma]
> Let $E/F$ be an arbitrary field extension and let $G=\text{Gal}(E/F)$. Let $\mathcal{F}=\{ K:F\subseteq K\subseteq E \}$ be the set of intermediate fields between $F$ and $E$, and let $\mathcal{G}=\{ H:H\leqslant G \}$ be the set of subgroups of $G$. Define
> $$
> g:=\text{Gal}(E/\_{}) :\mathcal{F}\to \mathcal{G}\quad \text{and}\quad f:=\text{Fix}(\_{}) :\mathcal{G}\to \mathcal{F}.
> $$
> These satisfy the following:
> 1. $g(f(H))\supseteq H$ and $f(g(K))\supseteq K$ for $H\in \mathcal{G}$ and $K\in \mathcal{F}$. 
> 2. If $H_{1}\subseteq H_{2}$, then $f(H_{1})\supseteq f(H_{2})$ for $h_{i}\in \mathcal{G}$. 
> 3. If $K_{1}\subseteq K_{2}$, then $g(K_{1})\supseteq g(K_{2})$ for $K_{i}\in \mathcal{F}$. 

^17b999

> [!Definition] Galois connection
> Whenever we have two partially ordered sets and two maps between them that satisfy the conclusions of [[#^17b999]], we say that the maps establish a **Galois connection** between the two sets. 

The following lemma is true for any Galois connection. 

> [!Lemma]
> Assume the situation and notation of [[#^17b999]]. Then $f$ and $g$ define inverse bijections between the subsets $\mathcal{F}_{0}\subseteq \mathcal{F}$ and $\mathcal{G}_{0}\subseteq \mathcal{G}$ defined by
> $$
> \mathcal{F}_{0}=\{ f(H):H\in \mathcal{G} \}\quad \text{and} \quad \mathcal{G}_{0}=\{ g(K) : K\in \mathcal{F}\}.
> $$
> Also, 
> $$
> \mathcal{F}_{0}=\{ K\in \mathcal{F}:f(g(K))=K \}\quad \text{and}\quad \mathcal{G}_{0}=\{ H\in \mathcal{G}:g(f(H))=H \}.
> $$
> 

The elements of $\mathcal{F}_{0}$ and $\mathcal{G}_{0}$ are called **closed** elements of $\mathcal{F}$ and $\mathcal{G}$. We will see:
1. If $E/F$ is finite, then $\mathcal{G}_{0}=\mathcal{G}$, i.e., every subgroup of $\text{Gal}(E/F)$ is closed ([[LEC ALG4 18#^fb187e]], [[LEC ALG4 21#^1150be]]).  
2. It is not true in general that every intermediate field of a finite extension is closed, but if the ground field $F$ happens to lie in $\mathcal{F}_{0}$, then this is true (when this happens, we say the extension $E/F$ is **Galois**) ([[LEC ALG4 19#^38f665]]). 
3. Furthermore, there exist relatively straightforward necessary and sufficient conditions for a finite extension $E/F$ to have the property that $F\in \mathcal{F}_{0}$ ([[LEC ALG4 19#^1f27bb]]). 

> [!Definition] Galois extension
> We say that the *finite* extension $E/F$ is a **Galois** extension if $F=\text{Fix}(\text{Gal}(E/F))$, i.e., $F$ is closed in $\mathcal{F}$.

^7dd101

How can we prove that a given finite extension $E/F$ is Galois? We need to show that every element of $E\setminus F$ is moved by some element $\sigma\in \text{Gal}(E/F)$. We will use the following lemma frequently. 

> [!Notation]
> For a map $\varphi:F_{1}\to F_{2}$ of fields, we write $\hat{\varphi}:F_{1}[x]\to F_{2}[x]$ for the map $\sum_{i=1}^{n}a_{i}x^{i}\mapsto \sum_{i=1}^{n}\varphi(a_{i})x^{i}$. 

> [!Lemma] @isaacsAlgebraGraduateCourse2009 18.3
> Let $E/F$ and write $G=\text{Gal}(E/F)$. Let $f\in F[x]$ with $f\ne 0$ and write $\Omega=\{ \alpha\in E:f(\alpha)=0 \}$. Suppose $\Omega$ is nonempty. The following hold. 
> 1. The action of $G$ on $E$ permutes the elements of $\Omega$. 
> 2. If the elements of $\Omega$ generate $E$ over $F$, then there exists an embedding $G\hookrightarrow \text{Sym}(\Omega)$. 
> 3. If $f$ is irreducible and $E$ is a splitting field over $F$ for some polynomial in $F[x]$, then $G$ acts transitively on $\Omega$. 
> 
> > [!Proof]-
> > 
> > $(1)$ is trivial. 
> > 
> > $(2)$ Suppose that $E$ is generated over $F$ by the elements of $\Omega$. Since $G$ acts on $\Omega$ by $(1)$, we have a natural homomorphism $G\to \text{Sym}(\Omega)$; we only have to show that the kernel $K$ is trivial. Let $\sigma\in K$. Since $E=F(\Omega)$ and $\sigma$ fixes $\Omega$, $\sigma$ must fix $E$, i.e., $\sigma=\mathrm{id}$. Thus, the homomorphism is an embedding. 
> > 
> > $(3)$ Suppose $f$ is irreducible in $F[x]$ and $E$ is the splitting field over $F$ of some polynomial $g\in F[x]$. Let $\alpha, \beta\in \Omega$; we need to produce $\sigma\in G$ such that $\sigma(\alpha)=\beta$. Let $\varphi:F(\alpha)\to F(\beta)$ be the $F$-isomorphism sending $\alpha\mapsto\beta$. Since $g\in F[x]$, we have $\hat{\varphi}g=g$. Using [[LEC ALG3 20#^bcf07f]], we get an $F$-isomorphism $\tilde{\varphi}:E\to E$ extending $\varphi$, i.e., sending $\alpha\mapsto\beta$. 
> 

^c54c9e

## Examples: Computing Galois groups

> [!Remark]
> 4. The prime subfield of $E$ is contained in $E^{G}$ for all $G\subseteq \text{Aut}(E)$, since any automorphism must map $1$ to $1$. 
> 5. $\text{Aut}_{\mathbb{R}}(\mathbb{C})$ contains complex conjugation, i.e., $a+ib\mapsto a-ib$ is an $\mathbb{R}$-automorphism of $\mathbb{C}$ of order $2$. 

We can write [[#^c54c9e]].1 like so:

> [!Lemma]
> Let $E/F$. For all $p\in F[x]$, all $\sigma\in \text{Gal}(E/F)$, and all $\alpha\in E$, $p(\alpha)=0$ $\iff$ $p(\sigma(\alpha))=0$. 

^437119

> [!Example] Degree 2, cyclic
> Suppose that $\text{char}(F)\ne 2$ and $[E:F]=2$. Let $\alpha\in E\setminus F$. Then, since $2=[E:F(\alpha)][F(\alpha):F]$ and $[F(\alpha):F]$ can't be $1$, we have $[E:F(\alpha)]=1$, i.e., $E=F(\alpha)$. 
> 
> Suppose $x^{2}+ax+b\in F[x]$ is the minpoly of $\alpha$. 
> $$
> \begin{align}
>  & \alpha^{2}+a\alpha+b=0 \\
> \implies  & \Bigg( \underbrace{ \alpha+\frac{a}{2} }_{ \not\in F } \Bigg)^{2} + \underbrace{ b- \frac{a^{2}}{4} }_{ \in F } =0.
> \end{align}
> $$
> Replacing $\alpha$ by $\alpha+a/2$, we can assume that $E=F(\alpha)$, $\alpha^{2}\in F$, $m_{F, \alpha}(x)=x^{2}-c$, $c\in F$. 
> 
> Now, since $\alpha^{2}\in F$, any $\sigma\in \text{Aut}_{F}(E)$ must map $\alpha\mapsto\alpha$ or $\alpha\mapsto-\alpha$. If $\sigma(\alpha)=\alpha$, then for all $r, s\in F$, $\sigma(r+s\alpha)=r+s\alpha$, so $\sigma=\mathrm{id}_{E}$. It is easily verified that $r+s\alpha\mapsto r-s\alpha$ is an element of $\text{Aut}_{F}(E)$ of order $2$. Thus, $\text{Aut}_{F}(E)=\mathbb{Z}/2\mathbb{Z}$. 

> [!Example] Degree 3, trivial
> Consider the degree 3 extension $E:=\mathbb{Q}(\sqrt[3]{ 2 } )/\mathbb{Q}$. The minpoly of $\sqrt[3]{2}$ over $\mathbb{Q}$ is $x^{3}-2$. Any $\sigma\in \text{Aut}_{\mathbb{Q}}(E)$ must map $\sqrt[3]{2}\mapsto\sqrt[3]{2}$ by [[#^437119]], since $E\subseteq \mathbb{R}$ and $x^{3}-2$ has only one real root. On the other hand, 
> $$
> E=\mathbb{Q}\oplus \mathbb{Q} \sqrt[3]{2}\oplus \mathbb{Q}\sqrt[3]{4}
> $$
> as a $\mathbb{Q}$-vector space. Thus, any $\sigma\in \text{Aut}_{\mathbb{Q}}(E)$ fixes all elements of $E$, i.e., $\text{Aut}_{\mathbb{Q}}(E)=\{ \text{id}_{E} \}$. 

^315029

> [!Example] Degree 3, cyclic
> Let $E$ be the subfield of $\mathbb{C}$ generated by all the roots of $x^{3}-3x+1$. Observe that if $\alpha\in \mathbb{R}$ is a root of $x^{3}-3x+1$, then so is $\alpha^{2}-2=:\beta$. Since $\alpha$ has degree $3$ over $\mathbb{Q}$, $\alpha\ne \alpha^{2}-2$. Similarly, we can also show that $\alpha^{4}-4\alpha^{2}+2=:\gamma$ is a root, and that $\gamma\ne \alpha$ (if it were, $x^{3}-3x+1$ would have to divide $x^{4}-4x^{2}-x +2$ in $\mathbb{Q}[x]$; it doesn't). Thus, $E=\mathbb{Q}(\alpha, \beta, \gamma)=\mathbb{Q}(\alpha)=\mathbb{Q}(\beta)=\mathbb{Q}(\gamma)$ [^2]. We can show that $a+b\alpha+c\alpha^{2}\mapsto a+b\beta+c\beta^{2}$ defines an element of $\text{Aut}_{\mathbb{Q}}(E)$[^1] of order $3$ which sends $\alpha\mapsto\beta\mapsto\gamma\mapsto\alpha$. By [[#^437119]], $\text{Aut}_{\mathbb{Q}}(E)$ can have at most $3$ elements, so it must be that $\text{Aut}_{\mathbb{Q}}(E)\cong \mathbb{Z}/3\mathbb{Z}$.

[^1]: Use [[LEC ALG3 15#^6a4ad7]]; $\mathbb{Q}(\alpha)\overset{\alpha\mapsto \overline{x}}{\cong}\mathbb{Q}[x]/(x^{3}-3x+1)\overset{ \overline{x}\mapsto\beta}{\cong} \mathbb{Q}(\beta)$. 

[^2]: Observe that, besides being isomorphic, these are actually *equal* as subfields of $\mathbb{C}$. This is not the case in [[#^315029]]: $\mathbb{Q}(\sqrt[3]{ 2 })$ and $\mathbb{Q}(\omega\sqrt[3]{ 2 })$ are isomorphic, but not equal as subfields of $\mathbb{C}$. 

> [!Example]
> Here's another degree $3$ extension whose automorphism group is nontrivial. Let $F$ be a field and consider $K=F(x_{1}, x_{2}, x_{3})$. From [[LEC ALG4 17#^a173be]], we know that $K^{\mathfrak{S}_{3}}=F(e_{1}, e_{2}, e_{3})$. We will [[LEC ALG4 18#^bc535a|show later]] that $[K:K^{\mathfrak{S}_{3}}]=|\mathfrak{S}_{3}|=6$. Consider the element
> $$
> \Delta=(x-y)(y-z)(z-x)\in K^{\mathfrak{A}_{3}}\setminus K^{\mathfrak{S}_{3}}.
> $$
> Clearly, $\Delta^{2}\in K^{\mathfrak{S}_{3}}$. Thus, the extension $F(e_{1}, e_{2}, e_{3}, \Delta)/K^{\mathfrak{S}_{3}}$ is of degree $2$. Since the extension $K/K^{\mathfrak{A}_{3}}$ is clearly not of degree $1$, the degrees in the following diagram are forced:
> 
> ```latex
> % latex-id: 96dd-989f-7d40-4254-9768
> \begin{document}
> % https://q.uiver.app/#q=WzAsNCxbMCwzLCJLXntcXG1hdGhmcmFre1N9X3szfX0iXSxbMCwxLCJLXntcXG1hdGhmcmFre0F9X3szfX0iXSxbMCwwLCJLIl0sWzEsMiwiRihlXzEsIGVfMiwgZV8zLCBcXERlbHRhKSJdLFswLDIsIjYiLDAseyJvZmZzZXQiOi0yLCJjdXJ2ZSI6LTMsInN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMSwyLCIzIiwyLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZG90dGVkIn0sImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMCwxLCIyIiwyLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn0sImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMCwzLCIyIiwyLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFszLDEsIjEiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifSwiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dXQ== 
> \[\begin{tikzcd} K & \\ {K^{\mathfrak{A}_{3}}} \\ & {F(e_1, e_2, e_3, \Delta)} \\ {K^{\mathfrak{S}_{3}}} \arrow["3"', dotted, no head, from=2-1, to=1-1] \arrow["1"', dashed, no head, from=3-2, to=2-1] \arrow["6", shift left=2, curve={height=-18pt}, no head, from=4-1, to=1-1] \arrow["2"', dashed, no head, from=4-1, to=2-1] \arrow["2"', no head, from=4-1, to=3-2] \end{tikzcd}\]
> \end{document}
> ```
> 
> Thus, $K/K^{\mathfrak{A}_{3}}$ is a degree $3$ extension (alternatively, we could've used [[LEC ALG4 18#^bc535a]] again to glean this). By [[#^17b999]], we have $\text{Gal}(K/K^{\mathfrak{A}_{3}})\supseteq \mathfrak{A}_{3}\ne \{ 1 \}$. 


---
# Symmetric polynomials 

Follows @artinAlgebra2011 §16.1.

Let $F$ be a field, and
$$
R:=F[x_{1}, \dots, x_{n}]\subseteq E=F(x_{1}, \dots, x_{n}).
$$
$\mathfrak{S}_{n}$ acts in $R$ and $E$ by permuting the variables
$$
\sigma(p(x_{1}, \dots, x_{n}))=p(x_{\sigma(1)}, \dots, x_{\sigma(n)}).
$$
This gives an embedding $\mathfrak{S}_{n}\hookrightarrow \text{Gal}(E/F)$. What is $E^{\mathfrak{S}_{n}}$?

> [!Proposition]
> Define
> $$
> \begin{align}
> e_{1} & :=\sum_{i=1}^{n} x_{i} \\
> e_{2} & :=\sum_{1\leqslant i< j\leqslant n}^{} x_{i}x_{j} \\
>  & \vdots \\
> e_{n} & :=\prod_{i=1}^{n} x_{i}.
> \end{align}
> $$
> Then $R^{\mathfrak{S}_{n}}=F[e_{1}, \dots, e_{n}]$ and $E^{\mathfrak{S}_{n}}=F(e_{1}, \dots, e_{n})$.

^a173be

[!Proof]-

We will prove for $n=3$. Note that $F[e_{1}, e_{2}, e_{3}]\subseteq R^{\mathfrak{S}_{n}}$. Suppose $p\in R$. Decompose $p$ as a sum of homogeneous polynomials:
$$
p=\sum_{i=1}^{r} p_{d_{i}},
$$
where $p_{d_{i}}$ is homogeneous of degree $d_{i}$. Since 
$$
\sigma(p)=\sum_{i=1}^{r} \sigma(p_{d_{i}}),
$$
if $p\in R^{\mathfrak{S}_{n}}$, each $p_{i}\in R^{\mathfrak{S}_{n}}$ too. Thus, to show $R^{\mathfrak{S}_{n}}\subseteq F[e_{1}, e_{2}, e_{3}]$, it suffices to show that for all homogeneous $p\in R^{\mathfrak{S}_{n}}$, $p\in F[e_{1}, e_{2}, e_{3}]$. 

%% Next note that a homogeneous polynomial in $R^{\mathfrak{S}_{n}}$ can be written as orbit sums. Introduce the graded lex order. Induct on the order. Note that the elementary symmetric polynomials are the smallest in the lex order among all orbit sums for a fixed degree.%%

Induct on the degree of $p$. If $\text{deg}\,p=0$, $p$ clearly is in $F[e_{1}, e_{2}, e_{3}]$. Suppose $\text{deg}\,p=1$. Write $p=ax+by+cz$. By considering transpositions in $\mathfrak{S}_{n}$, we see that $a=b=c$, so $p=ae_{1}\in F[e_{1}, e_{2}, e_{3}]$. 

Now suppose $\text{deg}\,p=d> 1$. 
$$
p=\sum_{\substack{(a, b, c)\in \mathbb{N}^{3}, \\a+b+c=d}}\lambda_{a, b, c}x^{a}y^{b}z^{c}\quad \lambda_{a, b, c}\in F.
$$
Let $\prec$ be the lex order on the set of monomials $\{ x^{a}y^{b}z^{c}:a+b+c=d \}$. Let $x^{a}y^{b}z^{c}$ be the largest monomial with nonzero coefficient in $p$. Considering the transpositions $(12)$ and $(23)$, we see that $a\geqslant b$ and $b\geqslant c$.  


---

[!Recall]
Field $F$, $x_{1}, \dots, x_{n}$ variables. $R=F[x_{1}, \dots, x_{n}]$. $K=F(x_{1}, \dots, x_{n})$. $S_{n}$ acts in $R$ and $k$ by permuting variables. WTST:
1. $R^{S_{n}}=F[e_{1}, \dots, e_{n}]=:A$, where $e_{i}$ are elementary symmetric polynomials. 
2. $k^{S_{n}}=F(e_{1}, \dots, e_{n})$ 

It is clear that $A\subseteq R^{S_{n}}$. Let $p\in R^{S_{n}}$. WLOG $p$ is homogeneous of degree $d$. Proceed by induction on $d$ to show that $p\in A$. For ease, take $n=3$. Reduce to the case that $p$ is the orbit sum of $x^{a}y^{b}z^{c}$, $a\geqslant b\geqslant c$. 

---

Proof continued:

Case 1: $c> 0$.

Case 2: $c=0$. 

...

This shows (1). (2) is an exercise. 




