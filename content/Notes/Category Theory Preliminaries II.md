---
id: "431"
date: 2026-03-06
time: 01:44
tags:
---
> [!Definition] Functor
> Let $\textsf{C}, \textsf{D}$ be categories. A **covariant functor** 
> $$
> \mathscr{F}:\textsf{C}\to \textsf{D}
> $$
> is an assignment of an object $\mathscr{F}(A)\in\text{Obj}(\textsf{D})$ for every $A\in\text{Obj}(\textsf{C})$ and of a function
> $$
> \text{Hom}_{\textsf{C}}(A, B)\to \text{Hom}_{\textsf{D}}(\mathscr{F}(A), \mathscr{F}(B))
> $$
> for every pair of objects $A, B$ in $\textsf{C}$. This function of also denoted $\mathscr{F}$ and must preserve identities and compositions. That is, 
> $$
> \mathscr{F}(1_{A})=1_{\mathscr{F}(A)}
> $$
> for all objects $A$ of $\textsf{C}$, and
> $$
> \mathscr{F}(\beta \circ \alpha)=\mathscr{F}(\beta)\circ \mathscr{F}(\alpha)
> $$
> for all objects $A, B, C$ of $\textsf{C}$, and for all $\alpha\in \text{Hom}_{\textsf{C}}(A, B)$ and $\beta\in \text{Hom}_{\textsf{C}}(B, C)$. 
> 
> A **contravariant functor** $\textsf{C}\to \textsf{D}$ is a covariant functor $\textsf{C}^{op}\to \textsf{D}$. 

^56cdbe

> [!Definition] Limit
> Let $\mathscr{F}: \textsf{I}\to \textsf{C}$ be a covariant functor. The **limit** of $\mathscr{F}$ (if it exists) is an object $L$ of $\textsf{C}$, endowed with morphisms $\lambda_{I}:L\to \mathscr{F}(I)$ for all objects $I$ of $\textsf{I}$, satisfying the following properties.
> 1. If $\alpha:I\to J$ is a morphism in $\textsf{I}$, then $\lambda_{J}=\mathscr{F}(\alpha)\circ\lambda_{I}$. 
> 2. $L$ is final with respect to this property. 

> [!Definition]
> Let $\textsf{C}, \textsf{D}$ be categories, and let $\mathscr{F}, \mathscr{G}$ be (say, covariant) functors $\textsf{C}\to \textsf{D}$. A **natural transformation** $\mathscr{F}\rightsquigarrow\mathscr{G}$ is the datum of a morphism $\nu_{X}:\mathscr{F}(X)\to \mathscr{G}(X)$ in $\textsf{D}$ for every object $X$ in $\textsf{C}$, such that $\forall\alpha:X\to Y$ in $\textsf{C}$ the diagram
> 
> ```latex
> % latex-id: 6fc7-34b6-8208-4442-9526
> \begin{document}
> % https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG1hdGhzY3J7Rn0oWCkiXSxbMiwwLCJcXG1hdGhzY3J7Rn0oWSkiXSxbMCwyLCJcXG1hdGhzY3J7R30oWCkiXSxbMiwyLCJcXG1hdGhzY3J7R30oWSkiXSxbMCwxLCJcXG1hdGhzY3J7Rn0oXFxhbHBoYSkiLDFdLFsyLDMsIlxcbWF0aHNjcntHfShcXGFscGhhKSIsMV0sWzAsMiwiXFxudV9YIiwxXSxbMSwzLCJcXG51X1kiLDFdXQ== 
> \[\begin{tikzcd} {\mathscr{F}(X)} && {\mathscr{F}(Y)} \\ \\ {\mathscr{G}(X)} && {\mathscr{G}(Y)} \arrow["{\mathscr{F}(\alpha)}"{description}, from=1-1, to=1-3] \arrow["{\nu_X}"{description}, from=1-1, to=3-1] \arrow["{\nu_Y}"{description}, from=1-3, to=3-3] \arrow["{\mathscr{G}(\alpha)}"{description}, from=3-1, to=3-3] \end{tikzcd}\]
> \end{document} 
> ```
> commutes. A **natural isomorphism** is a natural transformation $\nu$ such that $\nu_{X}$ is an isomorphism for every $X$. 

> [!Definition] Equivalence of categories
> Two categories $\textsf{C}$ and $\textsf{D}$ are said to be **equivalent** if there exist functors $\mathscr{F}:\textsf{C}\to \textsf{D}$ and $\mathscr{G}:\textsf{D}\to \textsf{C}$ such that $\mathscr{F}\circ \mathscr{G}$ is naturally isomorphic to $\mathrm{id}_{\textsf{D}}$ and $\mathscr{G}\circ \mathscr{F}$ is naturally isomorphic to $\mathrm{id}_{\textsf{C}}$. 

^4af834

> [!Definition] Adjoint
> Let $\textsf{C}, \textsf{D}$ be categories, and let $\mathscr{F}: \textsf{C}\to \textsf{D}$, $\mathscr{G}: \textsf{D}\to \textsf{C}$ be functors. We say that $\mathscr{F}$ and $\mathscr{G}$ are **adjoint** (and we say that $\mathscr{G}$ is right-adjoint to $\mathscr{F}$ and $\mathscr{F}$ is left-adjoint to $\mathscr{G}$) if there are *natural* isomorphisms
> $$
> \text{Hom}_{\textsf{C}}(X, \mathscr{G}(Y)) \xrightarrow{\sim}\text{Hom}_{\textsf{D}}(\mathscr{F}(X), Y)
> $$
> for all objects $X$ of $\textsf{C}$ and $Y$ of $\textsf{D}$. 

^a625a6

> [!Important]
> Left adjoints are applied to the left slot; likewise for right adjoints. 

> [!Proposition]
> Left adjoint functors preserve colimits; dually, right adjoint functors preserve limits. 
> 
> > [!Proof]-
> > 
> > To show that left adjoint functors preserve colimits, it suffices to show that they preserve coproducts and pushouts. Check this. 
> 

> [!Definition] Exact functors
> A functor is **exact** if it preserves exactness, that is, it sends exact sequences to exact sequences. 

