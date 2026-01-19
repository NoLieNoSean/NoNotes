---
tags:
  - CategoryTheory
id: "65"
---
Refer @aluffiAlgebraChapter02009 [pp. 18].
# Categories
 
> [!Definition] Category
> A **category** $\textsf{C}$ consists of
> - a class $\text{Obj}(\textsf{C})$ of *objects* of this category; and
> - for every two objects $A, B$ of $\textsf{C}$, a set $\text{Hom}_{\textsf{C}}(A, B)$ of *morphisms*, with the properties listed below.
> 
> Properties of morphisms:
> 1. For every object $A$ of $\textsf{C}$, there exists (at least) one morphism $1_{A}\in \text{Hom}_{\textsf{C}}(A, A)$ of morphisms, the *identity* on $A$. 
> 2. One can *compose* morphisms: two morphisms $f\in \text{Hom}_{\textsf{C}}(A, B)$ and $g\in \text{Hom}_{\textsf{C}}(B, C)$ determine a morphism $gf\in \text{Hom}_{\textsf{C}}(A, C)$. That is, for every triple of objects $A, B, C$ of $\textsf{C}$, there is a function (of sets) $\text{Hom}_{\textsf{C}}(A, B)\times \text{Hom}_{\textsf{C}}(B, C)\to \text{Hom}_{\textsf{C}}(A, C)$, and the image of the pair $(f, g)$ is denoted by $gf$.
> 3. This 'composition law' is *associative*: if $f\in \text{Hom}_{\textsf{C}}(A, B)$, $g\in \text{Hom}_{\textsf{C}}(B, C)$, and $h\in \text{Hom}_{\textsf{C}}(C, D)$, then $(hg)f=h(gf)$.
> 4. The *identity morphisms are identities with respect to composition*: for all $f\in \text{Hom}_{\textsf{C}}(A, B)$, we have $f 1_{A}=f$, $1_{B}f=f$.

^05a089

Also, note that if two morphisms are the same, then necessarily they have the same source and the same target: source and target are part of the datum of a morphism (and by extension, set-functions too).

Refer [@aluffiAlgebraChapter02009, pp. 20] for examples.

> [!Note]
> In @aluffiAlgebraChapter02009 [pp.22] Example 3.5, we could drop the requirement for morphisms in $\textsf{C}_{A}$ to be *commutative* diagrams. In this new category, call it $\textsf{D}_{A}$, morphisms $f_{1}\to f_{2}$ correspond to all morphisms $\sigma:Z_{1}\to Z_{2}$. However, such a category doesn't yield anything new, since $\text{Hom}_{\textsf{D}_{A}}(f, f')$ is the same as long as the domains of $f$ and $f'$ are fixed. In other words, morphisms in $\textsf{D}_{A}$ depend only on the $Z$'s and ignore the maps to $A$. So, $\textsf{D}_{A}$ is essentially $\textsf{C}$ itself, where the objects are the pairs $(Z, f)$, but the $f$'s are forgotten in defining the morphisms.

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
> 	are *commutative* diagrams
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

^912207

> [!Example] Formalizing Example 3.10
> 
> Let $\textsf{C}$ be a category. Choose two fixed morphisms $\alpha:A\to C$ and $\beta:B\to C$ in $\textsf{C}$, with the same target $C$. Define a category $\textsf{C}_{\alpha, \beta}$ as follows:
> - $\text{Obj}(\textsf{C}_{\alpha, \beta})$ contains commutative diagrams
> 	```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}
> 	& A\ar[rd, "\alpha"] &\\
> 	Z\ar[ru, "f"]\ar[rd, "g"]&&C\\
> 	&B\ar[ru, "\beta"]&
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 	in $\textsf{C}$, and
> - morphisms correspond to commutative diagrams
> 	```tikz
> 	\usepackage{tikz-cd}
> 	\begin{document}
> 	\begin{tikzcd}
> 	&&A\ar[rd, "\alpha"]&\\
> 	Z_1\ar[rru, bend left, "f_1"]\ar[r, "\sigma"]\ar[rrd, bend right, "g_1"]& Z_2\ar[ru, "f_2"]\ar[rd, "g_2"]&&C\\
> 	&&B\ar[ru, "\beta"]
> 	\end{tikzcd}
> 	\end{document}
> 	```
> 
> 
> Again, the identities are inherited from $\textsf{C}$. 
> 
>The composition $(Z_{1}, f_{1}, g_{1})\xrightarrow{\sigma}(Z_{2}, f_{2}, g_{2})\xrightarrow{\tau}(Z_{3}, f_{3}, g_{3})$ is obtained by combining the diagrams of $\sigma$ and $\tau$ like so:
> 
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
> &&& A\ar[rd, "\alpha"]&\\
>  	 Z_1 \ar[rrru, bend left, "f_1"]\ar[r, "\sigma"]\ar[rrrd,bend right,  "g_1"'] & Z_2 \ar[rru, bend left, "f_2"'] \ar[rrd, bend right, "g_2"]\ar[r, "\tau"]&Z_3 \ar[ru, "f_3"'] \ar[rd, "g_3"]&&C\\
>  	 &&&B\ar[ru, "\beta"]&
> \end{tikzcd}
> \end{document}
> ```
> 
> and as before, it follows that
> 
> ```tikz
> \usepackage{tikz-cd}
> \begin{document}
> \begin{tikzcd}
> && A\ar[rd, "\alpha"]&\\
>  	 Z_1 \ar[rru, bend left, "f_1"]\ar[r, "\tau\sigma"]\ar[rrd,bend right,  "g_1"'] & Z_3 \ar[ru, "f_3"'] \ar[rd, "g_3"]&&C\\
>  	 &&B\ar[ru, "\beta"]&
> \end{tikzcd}
> \end{document}
> ```
> commutes. Associativity follows from $\textsf{C}$ being a category.

---
# Morphisms

## Isomorphisms and automorphisms

> [!Definition] Isomorphism
> A morphism $f\in \text{Hom}_{\textsf{C}}(A, B)$ is an **isomorphism** if it has a (two-sided) inverse under composition: that is, if $\exists g\in \text{Hom}_{\textsf{C}}(B, A)$ such that
> $$
> gf=1_{A}, \quad fg=1_{B}.
> $$

> [!Info] Groupoids
> A category in which every morphism is an isomorphism is called a **groupoid**. A category can be constructed form any set endowed with a reflexive and transitive relation (ensuring identities and composition respectively). If the relation also happens to be symmetric, the category constructed is a groupoid (every morphism now has an inverse).

> [!Note]
> The notion of a "bijective homomorphism" does NOT always correspond to what an isomorphism is in general categories. Consider $\textsf{Poset}$ as a counter example. 

> [!Proposition]
> The inverse of an isomorphism is unique.
> 
> > [!Proof]-
> > This is an [[ANA1_HW1_Kulkarni_solutions.pdf#page=2|utterly standard]] verification.

To hammer the point home, if $f$ is a morphism with a left-inverse $g_{1}$ and a right inverse $g_{2}$, then necessarily $f$ is an isomorphism, $g_{1}=g_{2}$, and this morphism is the (unique) inverse of $f$.

More utterly standard stuff:

> [!Proposition]
> - Each identity $1_{A}$ is an isomorphism and its own inverse.
> - If $f$ is an isomorphism, then $f^{-1}$ is an isomorphism and further $(f^{-1})^{-1}=f$.
> - If $f\in \text{Hom}_{\textsf{C}}(A, B)$, $g\in \text{Hom}_{\textsf{C}}(B, C)$ are isomorphisms, then $gf$ is an isomorphism and $(gf)^{-1}=f^{-1}g^{-1}$.

^9e484d

A morphism of an object $A$ of a category $\textsf{C}$ to itself is called an **endomorphism**. $\text{Hom}_{\textsf{C}}(A, A)$ is denoted by $\text{End}_{\textsf{C}}(A)$.

> [!Definition] Automorphism
> An **automorphism** of an object $A$ of a category $\textsf{C}$ is an isomorphism form $A$ to itself. The set of automorphisms of $A$ is denoted by $\text{Aut}_{\textsf{C}}(A)$; it is a subset of $\text{End}_{\textsf{C}}(A)$. 

From [[#^9e484d]], we can infer than $\text{Aut}_{\textsf{C}}(A)$ is a group for all objects $A$ of all categories $\textsf{C}$:
- $\text{Aut}_{\textsf{C}}(A)$ is closed under composition;
- composition is associative
- $\text{Aut}_{\textsf{C}}(A)$ contains $1_{A}$, the identity for composition;
- every element $f\in \text{Aut}_{\textsf{C}}(A)$ has an inverse $f^{-1}\in \text{Aut}_{\textsf{C}}(A)$.

Note that we have already [[LEC ALG2 4#^27ea43|shown]] this for the category $\textsf{Gp}$, the category of groups with morphisms being group homomorphisms. 
## Monomorphisms and epimorphisms

Note that defining qualities of morphisms by their actions on 'elements' (as we did in $\textsf{Set}$) is not an option here, because objects of an arbitrary category do not (in general) have 'elements'. However, recall that properties of morphisms in $\textsf{Set}$ such as injectivity and surjectivity did have alternative formulations which did not reference 'elements' at all (left cancellable and right cancellable functions, respectively). It turns out that these formulations of these notions do transfer nicely into the categorical setting.

> [!Definition] Monomorphism
> Let $\textsf{C}$ be a category. A morphism $f\in \text{Hom}_{\textsf{C}}(A, B)$ is a **monomorphism** if the following holds: for all objects $Z$ of $\textsf{C}$ and all morphisms $\alpha, \alpha'\in \text{Hom}_{\textsf{C}}(Z, A)$, 
> $$
> f\circ\alpha=f\circ\alpha'\implies\alpha=\alpha'.
> $$
> In other words, $f$ is a monomorphism if it is *left cancellable*.

^8cec61

> [!Definition] Epimorphism
> Let $\textsf{C}$ be a category. A morphism $f\in \text{Hom}_{\textsf{C}}(A, B)$ is an **epimorphism** if the following holds: for all objects $Z$ of $\textsf{C}$ and all morphisms $\alpha, \alpha'\in \text{Hom}_{\textsf{C}}(B, Z)$, 
> $$
> \alpha \circ f=\alpha'\circ f\implies\alpha=\alpha'.
> $$
> In other words, $f$ is an epimorphism if it is *right cancellable*.
> 

In $\textsf{Set}$, the monomorphisms are precisely the injective functions, and the epimorphisms are precisely the surjective functions.

> [!Important]
> In $\textsf{Set}$, a function is an isomorphism iff it is both injective and surjective, hence iff it is both a monomorphism and an epimorphism. But in the category defined by $\leq$ on $\mathbb{Z}$, *every* morphism is both a monomorphism and an epimorphism (since there is at most one morphism between any two objects, the defining conditions become vacuously true), while the only isomorphisms are identities. Thus, this is not a property one should expect to hold in every category. 
> 
> As another example of $\textsf{Set}$ being special, notice that while 
> $$
> \begin{align}
>  & f\text{ is right invertible }\implies f\text{ is an epimorphism}, \text{and} \\
>  & f\text{ is left invertible }\implies f\text{ is a monomorphism}
> \end{align}
> $$
> can be easily proven universally, the converse is not generally true (It is true, of course, in $\textsf{Set}$). For example [^1], the map $n\mapsto 2n$ defines a left-cancellable group homomorphism $f:\mathbb{Z}/2\mathbb{Z}\to \mathbb{Z}/4\mathbb{Z}$. However, there is no group homomorphism $g:\mathbb{Z}/4\mathbb{Z}\to \mathbb{Z}/2\mathbb{Z}$ such that $gf=\mathrm{id}_{\mathbb{Z}/2\mathbb{Z}}$. Similarly, the map $n\mapsto n\mod 2$ defines a right-cancellable group homomorphism $f:\mathbb{Z}/4\mathbb{Z}\to \mathbb{Z}/2\mathbb{Z}$. However, since every homomorphism $g:\mathbb{Z}/2\mathbb{Z}\to \mathbb{Z}/4\mathbb{Z}$ must map $[1]_{2}$ to $[2]_{4}$, $f$ is not right invertible.
> 
> > [!Info]- A group theoretic digression
> > 
> > At this point, the question "When does a surjective homomorphism have a right inverse?" naturally arises. If $\varphi:G\to H$ is a surjective homomorphism, I conjectured that the answer is yes when $H$ is isomorphic to a subgroup of $G$ (based on having constructed a right inverse for [[LEC ALG2 3#^6cf5fb|this homomorphism]]). However, a much stronger condition is required: The existence of a right inverse for $\varphi$ is equivalent to the short exact sequence
> > $$
> > 1\to \ker\varphi\to G\to H\to 1
> > $$
> > splitting (Cf.  @conradSPLITTINGSHORTEXACT22 Theorem 3.3).
> 

[^1]: https://math.stackexchange.com/questions/3824875/monomorphism-that-is-not-left-invertible-epimorphism-that-is-not-right-invertib


---
# Universal Properties

> [!Definition]
> Let $\textsf{C}$ be a category. 
> - We say that $I\in \text{Obj}(\textsf{C})$ is **initial** in $\textsf{C}$ if for all $A\in \text{Obj}(C)$, $\text{Hom}_{\textsf{C}}(I,A)$ is a singleton. 
> - We say that $F\in \text{Obj}(\textsf{C})$ is **final** in $\textsf{C}$  if for all $A\in \text{Obj}(\textsf{C})$, $\text{Hom}_{\textsf{C}}(A, F)$ is a singleton.

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

> [!Definition]
> The product of objects $A, B$ in a category $\textsf{C}$ is the isomorphism class of final objects in the category $\textsf{C}_{A, B}$, as defined in [[#^912207]]. 

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

> [!Example] Product topology
> 
> ```latex
> 
> % latex-id: 9e5a-cf0d-8693-4106-b9bc
> \begin{tikzcd}
> &&Y\ar[ddl, bend right, "f_{2}"']\ar[ddr, bend left, "f_{3}"]\ar[ddrr, bend left, "f_{4}"]\ar[ddll, bend right, "f_{1}"']\ar[d, "\exists!f"]&&\\
> &&\prod X\ar[dr, "\pi_{3}"']\ar[dl, "\pi_{2}"]\ar[dll, "\pi_{1}"']\ar[drr, "\pi_{4}"]&&\\
> X_{\alpha_{1}}&X_{\alpha_{2}}&\dots&X_{\alpha_{3}}&X_{\alpha_{4}}\\
> \end{tikzcd}
> 
> ```
> 

^71ded8

## Coproducts

> [!Definition]
> The coproduct of objects $A, B$ in a category $\textsf{C}$ is the isomorphism class of initial objects in the category $\textsf{C}^{A, B}$.

> [!Example] Disjoint union of Sets
> Let $\textsf{C}=\textsf{Set}$. Let $A, B\in \text{Obj}(\textsf{C})$. Consider the disjoint union $A\amalg B$ with the inclusion maps $i_{A}$ and $i_{B}$:
> ```latex
> 
> % latex-id: cfe5-719f-6802-405a-b57c
> \begin{tikzcd}[row sep = tiny]
> A\ar[rd, "i_A"]&\\
> &A\amalg B\\
> B\ar[ru, "i_B"']&
> \end{tikzcd}
> 
> ```
> Then for every $(Z, f_{A}, f_{B})$, there exists a unique morphism $\sigma:A\amalg B\to Z$ such that
> 
> ```latex
> % latex-id: fda0-5333-3782-40ff-997a
> \begin{tikzcd}
> A\ar[rd, "i_A"]\ar[rrd, bend left, "f_A"]&&\\
> &A\amalg B\ar[r, "\sigma"]&Z\\
> B\ar[ru, "i_B"']\ar[rru, bend right, "f_B"']&&&
> \end{tikzcd}
> ```
> commutes. So, $(A\amalg B, i_{A}, i_{B})$ is initial in $\textsf{C}^{A, B}$.



