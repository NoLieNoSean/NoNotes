---
id: "318"
date: 2025-10-22
time: 18:30
tags:
---
# Categories

> [!Definition] Category
> A **category** $\textsf{C}$ consists of
> - a class $\text{Obj}(\textsf{C})$ of *objects* of this category; and
> - for every two objects $A, B$ of $\textsf{C}$, a set $\text{Hom}_{\textsf{C}}(A, B)$ of *morphisms*, with the properties listed below.
> 
> Properties of morphisms:
> 1. For every object $A$ of $\textsf{C}$, there exists a morphism $1_{A}\in \text{Hom}_{\textsf{C}}(A, A)$, called the *identity* on $A$. 
> 2. One can *compose* morphisms: two morphisms $f\in \text{Hom}_{\textsf{C}}(A, B)$ and $g\in \text{Hom}_{\textsf{C}}(B, C)$ determine a morphism $gf\in \text{Hom}_{\textsf{C}}(A, C)$. That is, for every triple of objects $A, B, C$ of $\textsf{C}$, there is a function (of sets) $\text{Hom}_{\textsf{C}}(A, B)\times \text{Hom}_{\textsf{C}}(B, C)\to \text{Hom}_{\textsf{C}}(A, C)$, and the image of the pair $(f, g)$ is denoted by $gf$.
> 3. This 'composition law' is *associative*: if $f\in \text{Hom}_{\textsf{C}}(A, B)$, $g\in \text{Hom}_{\textsf{C}}(B, C)$, and $h\in \text{Hom}_{\textsf{C}}(C, D)$, then $(hg)f=h(gf)$.
> 4. The *identity morphisms are identities with respect to composition*: for all $f\in \text{Hom}_{\textsf{C}}(A, B)$, we have $f 1_{A}=f$, $1_{B}f=f$.


A category is called **concrete** if the objects of the category are structured sets and the arrows of the category are (certain) functions. 

> [!Example] Concrete categories
> - Groups and group homomorphisms
> - $R$-modules and $R$-module homomorphisms
> - Vector spaces and linear transformations
> - Topological spaces and continuous maps
> - Posets and monotone functions

The strength of category theory lies in its abstraction: objects do not have to be sets, and morphisms do not have to be functions.

> [!Example] Finite categories
> 
> ```latex
> % latex-id: e522-26cf-18ef-457d-8882
> \[\begin{tikzcd} &&&&& {*} & \star \\ {*} && {*} & \star &&& \bullet \arrow[from=1-6, to=1-7] \arrow[from=1-6, to=2-7] \arrow[from=1-7, to=2-7] \arrow[from=2-3, to=2-4] \end{tikzcd}\]
> ```
 

> [!Example] The category Rel
> Take sets as objects and take binary relations as arrows. That is, an arrow $f:A\to B$ is an arbitrary subset $f\subseteq A\times B$. The identity arrow on a set $A$ is the identity relation. Given $R\subseteq A\times B$ and $S\subseteq B\times C$, define composition $S\circ R$ by
> $$
> (a, c)\in S\circ R \iff \exists b. (a, b)\in R ~~\&~~(b, c)\in S.
> $$

> [!Example] Preorders
> A **preorder** is a set $P$ equipped with a binary relation $p\leq q$ thata is both reflexive and transitive: $a\leq a$, and if $a\leq b$ and $b\leq c$, then $a\leq c$ (what differentiates a preorder from a poset is the lack of antisymmetry). Any preorder $P$ can be regarded as a category by taking the objects to be the elements of $P$ and taking a unique arrow, $a\to b$ if and only if $a\leq b$. The reflexive and transitive conditions on $\leq$ ensure that this is indeed a category. Note that $\text{Hom}(a, b)$ for any $a, b\in P$ is a singleton if $a\leq b$, and empty otherwise.

^505e6c


> [!Example] Slice categories
> Let $\textsf{C}$ be a category, and fix an object $A$ of $\textsf{C}$. Define a new category $\textsf{C}_{A}$ as follows:
> - $\text{Obj}(\textsf{C}_{A})$ consists of all morphisms from any object of $\textsf{C}$ to $A$; thus, objects of $\textsf{C}_{A}$ are morphisms of the type 
> 	
> 	```tikz
> 	\usepackage{tikz-cd, amsmath, amssymb}
> 	\begin{document}
> 	\begin{tikzcd}
> 	Z\ar[r, "f"]&A.
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 	
> - morphisms
> 	```tikz
> 	\usepackage{tikz-cd, amsmath, amssymb}
> 	\begin{document}
> 	\begin{tikzcd}
> 	Z_{1}\ar[r, "f_{1}"]&A\quad \quad \rightarrow\quad \quad Z_{2}\ar[r, "f_{2}"]&A
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 	are commutative diagrams
> 	```tikz
> 	\usepackage{tikz-cd, amsmath, amssymb}
> 	\begin{document}
> 	\begin{tikzcd}
> 	Z_{1}\ar[rr, "\sigma"]\ar[rd, "f_{1}"']&&Z_{2}\ar[ld, "f_{2}"]\\
> 	&A&
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 

> [!Example] 
> 
> Let $\textsf{C}$ be a category. Let $A, B\in\text{Obj}(\textsf{C})$. Define a new category $\textsf{C}_{A, B}$ like so:
> - $\text{Obj}(\textsf{C}_{A, B})$ consists of diagrams 
> 	
> 	```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}[row sep=tiny]
> 	& A\\
> 	Z \ar[ur, "f"]\ar[dr, "g"']&\\
> 	&B
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 	in $\textsf{C}$, denoted by $(Z, f, g)$; and
> - morphisms
> 	
> 	```tikz
> 	\usepackage{tikz-cd}
> 	\usepackage{amsmath}
> 	\usepackage{amssymb}
> 	\begin{document}
> 	\begin{tikzcd}[row sep=tiny]
> 		& A\\
> 		Z_1 \ar[ur, "f_1"]\ar[dr, "g_1"']&\\
> 		&B
> 	\end{tikzcd}
> 	\quad
> 	\begin{tikzcd}
> 		\longrightarrow
> 	\end{tikzcd}
> 	\quad
> 	\begin{tikzcd}[row sep=tiny]
> 		& A\\
> 		Z_2 \ar[ur, "f_2"]\ar[dr, "g_2"']&\\
> 		&B
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 	are commutative diagrams
> 	```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}
> 	 && A\\
> 	 Z_1 \ar[rru, bend left, "f_1"]\ar[r, "\sigma"]\ar[rrd,bend right,  "g_1"] & Z_2 \ar[ru, "f_2"] \ar[rd, "g_2"]&\\
> 	 &&B
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 
> As in example 3.5, the identities are inherited from the identities in $\textsf{C}$: for $(Z, f, g)$ in $\textsf{C}_{A, B}$, the identity $1_{(Z, f, g)}$ corresponds to the diagram
> ```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}
> 	 && A\\
> 	 Z \ar[rru, bend left, "f"]\ar[r, "1_Z"]\ar[rrd,bend right,  "g"] & Z \ar[ru, "f"] \ar[rd, "g"]&\\
> 	 &&B
> 	\end{tikzcd}
> 	\end{document}
> ```
> The composition $(Z_{1}, f_{1}, g_{1})\xrightarrow{\sigma}(Z_{2}, f_{2}, g_{2})\xrightarrow{\tau}(Z_{3}, f_{3}, g_{3})$ is achieved by combining the diagrams of $\sigma$ and $\tau$ in the following manner
> ```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}
> 	 &&& A\\
> 	 Z_1 \ar[rrru, bend left, "f_1"]\ar[r, "\sigma"]\ar[rrrd,bend right,  "g_1"'] & Z_2 \ar[rru, bend left, "f_2"'] \ar[rrd, bend right, "g_2"]\ar[r, "\tau"]&Z_3 \ar[ru, "f_3"'] \ar[rd, "g_3"]&\\
> 	 &&&B
> 	\end{tikzcd}
> 	\end{document}
> ```
> and since $\textsf{C}$ is a category, it follows that the diagram obtained by removing $Z_{2}$, i.e,
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
>  && A\\
>  Z_1 \ar[rru, bend left, "f_1"]\ar[r, "\tau\sigma"]\ar[rrd,bend right,  "g_1"] & Z_3 \ar[ru, "f_3"] \ar[rd, "g_3"]&\\
>  &&B
> \end{tikzcd}
> \end{document}
> ```
> commutes. Associativity immediately follows from the fact that composition is associative in $\textsf{C}$.

^db40b9


---

# Morphisms

## Isomorphisms and automorphisms

> [!Definition] Isomorphism
> A morphism $f\in \text{Hom}_{\textsf{C}}(A, B)$ is an **isomorphism** if it has a (two-sided) inverse under composition: that is, if $\exists g\in \text{Hom}_{\textsf{C}}(B, A)$ such that
> $$
> gf=1_{A}, \quad fg=1_{B}.
> $$

> [!Info] Groupoids
> A category in which every morphism is an isomorphism is called a **groupoid**. If the preorder in [[#^505e6c]] is symmetric, the category constructed is a groupoid (every morphism now has an inverse).

> [!Proposition]
> The inverse of an isomorphism is unique.

To hammer the point home, if $f$ is a morphism with a left-inverse $g_{1}$ and a right inverse $g_{2}$, then  $f$ is necessarily an isomorphism, $g_{1}=g_{2}$, and this morphism is the (unique) inverse of $f$.

More utterly standard stuff:

> [!Proposition]
> - Each identity $1_{A}$ is an isomorphism and its own inverse.
> - If $f$ is an isomorphism, then $f^{-1}$ is an isomorphism and further $(f^{-1})^{-1}=f$.
> - If $f\in \text{Hom}_{\textsf{C}}(A, B)$, $g\in \text{Hom}_{\textsf{C}}(B, C)$ are isomorphisms, then $gf$ is an isomorphism and $(gf)^{-1}=f^{-1}g^{-1}$.

^2c97fa



A morphism of an object $A$ of a category $\textsf{C}$ to itself is called an **endomorphism**. $\text{Hom}_{\textsf{C}}(A, A)$ is denoted by $\text{End}_{\textsf{C}}(A)$.

> [!Definition] Automorphism
> An **automorphism** of an object $A$ of a category $\textsf{C}$ is an isomorphism form $A$ to itself. The set of automorphisms of $A$ is denoted by $\text{Aut}_{\textsf{C}}(A)$; it is a subset of $\text{End}_{\textsf{C}}(A)$. 

From [[#^2c97fa]], we can infer than $\text{Aut}_{\textsf{C}}(A)$ is a group for all objects $A$ of all categories $\textsf{C}$. 
## Monomorphisms and epimorphisms

Note that defining qualities of morphisms by their actions on 'elements' (as we did in $\textsf{Set}$) is not an option here, because objects of an arbitrary category do not (in general) have 'elements'. However, recall that properties of morphisms in $\textsf{Set}$ such as injectivity and surjectivity did have alternative formulations which did not reference 'elements' at all (left cancellable and right cancellable functions, respectively). It turns out that these formulations of these notions do transfer nicely into the categorical setting.

> [!Definition] Monomorphism
> Let $\textsf{C}$ be a category. A morphism $f\in \text{Hom}_{\textsf{C}}(A, B)$ is a **monomorphism** if the following holds: for all objects $Z$ of $\textsf{C}$ and all morphisms $\alpha, \alpha'\in \text{Hom}_{\textsf{C}}(Z, A)$, 
> $$
> f\circ\alpha=f\circ\alpha'\implies\alpha=\alpha'.
> $$
> In other words, $f$ is a monomorphism if it is *left cancellable*.

> [!Definition] Epimorphism
> Let $\textsf{C}$ be a category. A morphism $f\in \text{Hom}_{\textsf{C}}(A, B)$ is an **epimorphism** if the following holds: for all objects $Z$ of $\textsf{C}$ and all morphisms $\alpha, \alpha'\in \text{Hom}_{\textsf{C}}(B, Z)$, 
> $$
> \alpha \circ f=\alpha'\circ f\implies\alpha=\alpha'.
> $$
> In other words, $f$ is an epimorphism if it is *right cancellable*.
> 

In $\textsf{Set}$, the monomorphisms are precisely the injective functions, and the epimorphisms are precisely the surjective functions.

Clearly, if a morphism is left/right invertible, it is left right cancellable. In particular, an isomorphism is epic and monic. The converse is not true, however. 
### Common Fallacies

Several things that we take for granted in $\textsf{Set}$ break in general categories:
#### epic + monic ${\implies}\mathllap{/~~~\,}$ isomorphism

In $\textsf{Set}$, a function is an isomorphism iff it is both injective and surjective, i.e iff it is both a monomorphism and an epimorphism. But in the category defined by $\leq$ on $\mathbb{Z}$, *every* morphism is both a monomorphism and an epimorphism (since there is at most one morphism between any two objects, the defining conditions become vacuously true), while the only isomorphisms are identities. 

#### epic ${\implies}\mathllap{/~~~\,}$ right invertible,     monic ${\implies}\mathllap{/~~~\,}$ left invertible

While 
$$
\begin{align}
 & f\text{ is right invertible }\implies f\text{ is an epimorphism}, \text{and} \\
 & f\text{ is left invertible }\implies f\text{ is a monomorphism}
\end{align}
$$
can be easily proven universally, the converse is not generally true (It is true, of course, in $\textsf{Set}$). For example, the map $n\mapsto 2n$ defines a left-cancellable group homomorphism $f:\mathbb{Z}/2\mathbb{Z}\to \mathbb{Z}/4\mathbb{Z}$. However, there is no group homomorphism $g:\mathbb{Z}/4\mathbb{Z}\to \mathbb{Z}/2\mathbb{Z}$ such that $gf=\mathrm{id}_{\mathbb{Z}/2\mathbb{Z}}$. Similarly, the map $n\mapsto n\mod 2$ defines a right-cancellable group homomorphism $f:\mathbb{Z}/4\mathbb{Z}\to \mathbb{Z}/2\mathbb{Z}$. However, since every homomorphism $g:\mathbb{Z}/2\mathbb{Z}\to \mathbb{Z}/4\mathbb{Z}$ must map $[1]_{2}$ to $[2]_{4}$, $f$ is not right invertible.

#### epic ${\implies}\mathllap{/~~~\,}$ surjective

In $\textsf{Set}$, $\textsf{Gp}$(!) and $\textsf{Ab}$, *epic $\iff$ surjective*.

$\textsf{Ring}$ does not conform to the standards of its brethren, unfortunately. Consider the inclusion homomorphism $\iota :\mathbb{Z}\to \mathbb{Q}$. $\iota$ is an epimorphism in $\textsf{Ring}$ since if homomorphisms $\alpha_{1}, \alpha_{2}:\mathbb{Q}\to R$ agree on $\mathbb{Z}$, then they must agree on $\mathbb{Q}$:
$$
\alpha_{i}\left( \frac{p}{q} \right)=\alpha_{i}(p)\alpha_{i}(q^{-1})=\alpha_{i}(p)\alpha_{i}(q)^{-1}.
$$
This makes for another example of a morphism which is monic and epic but not an isomorphism.

#### monic ${\implies}\mathllap{/~~~\,}$ injective

We'll get back to this in a bit ([[#^0dd429]]).

---

# Universal Properties

> [!Definition]
> Let $\textsf{C}$ be a category. 
> - We say that $I\in \text{Obj}(\textsf{C})$ is **initial** in $\textsf{C}$ if for all $A\in \text{Obj}(C)$, $\text{Hom}_{\textsf{C}}(I,A)$ is a singleton. 
> - We say that $F\in \text{Obj}(\textsf{C})$ is **final** in $\textsf{C}$  if for all $A\in \text{Obj}(\textsf{C})$, $\text{Hom}_{\textsf{C}}(A, F)$ is a singleton.

> [!Example]
> $\mathbb{Z}$ is initial in $\textsf{Ring}$. Singletons are final in $\textsf{Set}$.

A category need not have initial and final objects, and when they exist, they may not be unique. However, they are unique up to a unique isomorphism. Initial and final objects are collectively referred to as *terminal objects*.

> [!proposition]
> Let $\textsf{C}$ be a category.
> - If $I_{1}, I_{2}$ are both initial objects in $\textsf{C}$, then $I_{1}\cong I_{2}$.
> - If $F_{1}, F_{2}$ are both final objects in $\textsf{C}$, then $F_{1}\cong F_{2}$.
> 
> Moreover, these isomorphisms are uniquely determined.
> 
> > [!Proof]-
> > Since $I_{1}, I_{2}$ are initial objects, $|\text{Hom}_{\textsf{C}}(I_{1}, I_{2})|=|\text{Hom}_{\textsf{C}}(I_{2}, I_{1})|=$ $|\text{Hom}_{\textsf{C}}(I_{1}, I_{1})|=|\text{Hom}_{\textsf{C}}(I_{2}, I_{2})|=1$. Let $\varphi_{1}\in \text{Hom}_{\textsf{C}}(I_{1}, I_{2})$, $\varphi_{2}\in \text{Hom}_{\textsf{C}}(I_{2}, I_{1})$. It follows that $\varphi_{1}\varphi_{2}=\text{Id}_{I_{2}}$ and $\varphi_{2}\varphi_{1}=\text{Id}_{\varphi_{1}}$, whence $\varphi_{1}$ and $\varphi_{2}$ are isomorphisms. The same proof works for final objects.
> 

The same object can be both initial and final, as singletons are in the category of pointed sets.

> [!Definition]
> We say that a construction **satisfies a universal property** when it may be viewed as a terminal object of a category.

> [!Example] Quotienting by equivalence relations
> Let $\sim$ be an equivalence relation defined on a set $A$. Let $\textsf{C}$ be a category with objects $A\xrightarrow{\varphi} Z$, where $Z$ is any set, satisfying the property
> $$
> a\sim a'\implies \varphi(a)=\varphi(a').
> $$
> Let objects be denoted by $(\varphi, Z)$. Morphisms $(\varphi_{1}, Z_{1})\to(\varphi_{2}, Z_{2})$ are commutative diagrams
> 
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}[column sep=tiny]
> Z_1\ar[rr, "\sigma"]&&Z_2\\
> &A\ar[lu, "\varphi_1"]\ar[ru, "\varphi_2"']&
> \end{tikzcd}
> \end{document}
> ```
> 
> Denote by $\pi$ the canonical projection from $A$ to $A/\sim$. Then, $(\pi, A/\sim)$ is an initial object of $\textsf{C}$. Indeed, for any arbitrary $(\varphi, Z)$ in $\textsf{C}$, we can find a unique $\overline{\varphi}$ such that
> 
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}[column sep = tiny]
> A/\sim\ar[rr, "\overline{\varphi}"]&&Z\\
> &A\ar[lu, "\pi"]\ar[ru, "\varphi"']&
> \end{tikzcd}
> \end{document}
> ```
> commutes. 
> 
> This information can be sloppily summarized like so:
> 
> *The quotient $A/\sim$ is universal with respect to the property of mapping $A$ to a set in such a way that equivalent elements have the same image.*

## Products

> [!Definition] Universal property of products
> The product of objects $A, B$ in a category $\textsf{C}$ is the isomorphism class of final objects in the category $\textsf{C}_{A, B}$, as defined in [[#^db40b9]]. 

^25bb2d

> [!Example] Products of sets
> Let $\textsf{C}=\textsf{Set}$, and let $A, B\in \text{Obj}(\textsf{C})$. Consider the product $A\times B$ with the two natural projections:
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}[row sep = tiny]
> &A\\
> A\times B\ar[ru, "\pi_A"]\ar[rd, "\pi_B"']&\\
> &B
> \end{tikzcd}
> \end{document}
> ```
> Then for every $(Z, f, g)\in \text{Obj}(\textsf{C}_{A, B})$, there exists a unique morphism $\sigma:Z\to A\times B$ such that 
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
> && A\\
> Z \ar[rru, bend left, "f"]\ar[r, "\sigma"]\ar[rrd,bend right,  "g"] & A\times B \ar[ru, "\pi_A"] \ar[rd, "\pi_B"']&\\
> &&B
> \end{tikzcd}
> \end{document}
> ```
> commutes. In other words, $\text{Hom}((Z, f, g), (A\times B, \pi_{A}, \pi_{B}))$ is a singleton, whence $(A\times B, \pi_{A}, \pi_{B})$ is final in $\textsf{C}_{A, B}$.

> [!Exercise] Products of groups
> As another trivial example, show that for $G, H\in \textsf{Gp}$, the product group $G\times H$ that we know and love satisfies the universal property of products.

> [!Example] Product topology
> ```latex 
> % latex-id: f99b-5022-5814-4351-8f8b
> % !!! Coupled with Category Theory Preliminaries (Presentation) and LEC TOP 1
> 
> \begin{document}
> \begin{tikzcd}
> &&Y\ar[ddl, bend right, "f_{2}"']\ar[ddr, bend left, "f_{3}"]\ar[ddrr, bend left, "f_{4}"]\ar[ddll, bend right, "f_{1}"']\ar[d, "\exists!f"]&&\\
> &&\prod X\ar[dr, "\pi_{3}"']\ar[dl, "\pi_{2}"]\ar[dll, "\pi_{1}"']\ar[drr, "\pi_{4}"]&&\\
> X_{\alpha_{1}}&X_{\alpha_{2}}&\dots&X_{\alpha_{3}}&X_{\alpha_{5}}\\ 
> \end{tikzcd}
> \end{document}
> ```
> 


## Coproducts

> [!Definition] Universal property of coproducts
> The coproduct of objects $A, B$ in a category $\textsf{C}$ is the isomorphism class of initial objects in the category $\textsf{C}^{A, B}$.

^2e3ac5

> [!Example] Disjoint union of Sets
> Let $\textsf{C}=\textsf{Set}$. Let $A, B\in \text{Obj}(\textsf{C})$. Consider the disjoint union $A\amalg B$ with the inclusion maps $i_{A}$ and $i_{B}$:
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}[row sep = tiny]
> A\ar[rd, "i_A"]&\\
> &A\amalg B\\
> B\ar[ru, "i_B"']&
> \end{tikzcd}
> \end{document}
> ```
> Then for every $(Z, f_{A}, f_{B})$, there exists a unique morphism $\sigma:A\amalg B\to Z$ such that
> 
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
> A\ar[rd, "i_A"]\ar[rrd, bend left, "f_A"]&&\\
> &A\amalg B\ar[r, "\sigma"]&Z\\
> B\ar[ru, "i_B"']\ar[rru, bend right, "f_B"']&&&
> \end{tikzcd}
> \end{document}
> ```
> commutes. So, $(A\amalg B, i_{A}, i_{B})$ is initial in $\textsf{C}^{A, B}$.

> [!Example]
> If $G$ and $H$ are abelian groups, then the product $G\times H$ satisfies the [[Intro to Category Theory#Coproducts|universal property for coproducts]] in $\textsf{Ab}$.
> 
> > [!Proof]-
> > We need to show that $(G\times H, i_{G}, i_{H})$ is initial in $\textsf{C}^{G, H}$. Let $(A, \varphi_{G}, \varphi_{H})\in \textsf{C}^{G, H}$. We need a unique homomorphism $\varphi$ which makes the following diagram commute:
> > 
> > ```tikz
> > \usepackage{tikz-cd}
> > \begin{document}
> > \begin{tikzcd}
> > G\ar[rd, "i_G"]\ar[rrd, bend left, "\varphi_{G}"]&&\\
> > &G\times H\ar[r, "\varphi"]&A\\
> > H\ar[ru, "i_H"']\ar[rru, bend right, "\varphi_{H}"']&&&
> > \end{tikzcd}
> > \end{document}
> > ```
> > We are forced to define $\varphi(g, e_{H})\equiv\varphi_{G}(g)$ and $\varphi(e_{G}, h)\equiv\varphi_{H}(h)$ for all $g\in G$ and $h\in H$. Since we require $\varphi(g, h)=\varphi(g, e_{H})\varphi(e_{G}, h)$, our definitions determine $\varphi$ over its entire domain. So, we have exactly one candidate for $\varphi$. It it a homomorphism?
> > $$
> > \begin{align}
> > \varphi(a, b)\varphi(c, d) & =\varphi_{G}(a)\varphi_{H}(b)\varphi_{G}(c)\varphi_{H}(d) \\
> >  & \overset{!}{=}\varphi_{G}(a)\varphi_{G}(c)\varphi_{H}(b)\varphi_{H}(d) \\
> >  & =\varphi_{G}(ac)\varphi_{H}(bd) \\
> >  & =\varphi(ac, bd) \\
> >  & =\varphi((a, b)(c, d)).
> > \end{align}
> > $$
> > The marked equality is true since $A$ is abelian.
> 

What are coproducts in $\textsf{Gp}$?

> [!Exercise]
> Prove that the free group $F(\{ x, y \})$ is a coproduct $\mathbb{Z}\times \mathbb{Z}$ of $\mathbb{Z}$ by itself in the category $\textsf{Gp}$. 

---
# Free objects

> [!Definition] Free objects
> Let $\textsf{C}$ be a concrete category. Let $X$ be a set. A **free object** on $X$ is a pair consisting of an object $A$ in $\textsf{C}$ and an injection $i:X\to A$, that satisfies the following universal property:
> 
> For any object $B$ in $\textsf{C}$ and any map between sets $g:X\to B$, there exists a unique morphism $f:A\to B$ in $\textsf{C}$ making this diagram commute:
> 
> ```latex
> 
> % latex-id: e25f-e157-69e8-4f71-bb25
> \begin{tikzcd}
> A\ar[r, "f"]&B\\
> X\ar[u, "i"]\ar[ur, "g"']&
> \end{tikzcd}
> 
> ```
> 
> 

> [!Exercise]
> Show that the existence of a free object on the one element set in a concrete category implies that monomorphisms are injective.

> [!Example] A monic morphism which is not injective
> 
> An abelian group $(G, +)$ is **divisible** if, for every positive integer $n$ and every $g\in G$, there exists $y\in G$ such that $ny=g$. 
> 
> In the category of divisible (abelian) groups, the map $\pi:\mathbb{Q}\to \mathbb{Q}/\mathbb{Z}$ is a non-injective monomorphism. 
> 
> Indeed, suppose that $f,g\colon G\to \mathbb{Q}$ are such that $\pi\circ f= \pi\circ g$. Let $x\in G$. Then $f(x)-g(x) = n\in\mathbb{Z}$. If $n\neq 0$, then let $y\in G$ be such that $2ny=x$. Then $f(x) = f(2ny) = 2nf(y)$, hence $f(y) = \frac{1}{2n}f(x)$; and similarly $g(y) = \frac{1}{2n}g(x)$. Now, $f(y)-g(y)$ must be an integer, but
> 
> $$
> f(y)-g(y) = \frac{1}{2n}(f(x)-g(x)) = \frac{1}{2},
> $$
> 
> a contradiction. Therefore, $n=0$, so $f(x)=g(x)$. Thus, $f=g$ and $\pi$ is a monomorphism.

^0dd429

