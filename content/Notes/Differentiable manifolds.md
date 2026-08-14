---
id: "470"
date: 2026-06-18
time: 22:38
tags:
---
> [!Definition] Differentiable manifold, @schultensIntroduction3manifolds2014 1.2.2
> A **$C^{q}$-manifold**, for $q\in \mathbb{Z}_{\geqslant 0}$, is a [[Topological manifolds|topological manifold]] $M$ with an atlas that satisfies the additional requirement of being $C^{q}$, meaning that for any pair of charts $(M_{\alpha}, \phi_{\alpha})$, $(M_{\beta}, \phi_{\beta})$ in this atlas, the map $\phi_{\beta}\circ \phi_{\alpha}^{-1}$ (where it is defined) is $C^{q}$[^1]. A $C^{\infty}$ manifold is also called a **smooth manifold**. 

^183f6b

We will exclusively work with smooth manifolds, so the adjectives differentiable and smooth are synonymous.

[^1]: [[Smooth and analytic multivariable functions#^861ecb]]


> [!Definition] Morphisms in DIFF, @schultensIntroduction3manifolds2014 1.2.6
> 1. Let $M$ be a manifold with atlas $\{(M_{\alpha}, \phi_{\alpha}) \}$ and let $N$ be a manifold with atlas $\{ (N_{\beta}, \psi_{\beta}) \}$. We say that a map $f:M\to N$ is **$C^{q}$** if for all $\alpha, \beta$, the map $\psi_{\beta}\circ f\circ \phi_{\alpha}^{-1}$ (where it is defined) is $C^{q}$. A $C^{\infty}$ map is said to be **smooth**.
> 2. A $C^{q}$-map between $C^{q}$-manifolds with a $C^{q}$ inverse is called a **$C^{q}$-diffeomorphism**.

^bd5ec1


> [!Definition] Smooth Submanifold, @martelliIntroductionGeometricTopology2025 Def 1.1.7
> Essentially [[Topological manifolds#^8517b5]], but with a smooth atlas. 

^ae0294



> [!Definition] Tangent space
> Let $M$ be a smooth manifold of dimension $n$. We associate for each point $p\in M$ an $n$-dimensional *vector space* $T_{p}M$ called the **tangent space**. The space $T_{p}M$ may be defined as the set of all curves $\gamma:(-a, a)\to M$ such that $\gamma(0)=p$ and $a> 0$ is arbitrary, considered up to the following equivalence relation: we identify two curves that, read on some chart $(U_{i}, \varphi_{i})$, have the same tangent vector[^3] at $\varphi_{i}(p)$. *This definition does not depend on the chart chosen.* [^2]

^995b96

> [!Remark]
> A chart identifies $T_{p}M$ with the usual tangent space $\mathbb{R}^{n}$ at $\varphi_{i}(p)$ in the open set $V_{i}=\varphi_{i}(U_{i})$. *Two distinct charts $\varphi_{i}$ and $\varphi_{j}$ provide different identifications with $\mathbb{R}^{n}$, which differ by a linear isomorphism.* The structure of $T_{p}M$ as a vector space is therefore well-defined, while its identification with $\mathbb{R}^{n}$ is not. 

^59fc8b

Every smooth map $f:M\to N$ between differentiable manifolds induces at each point $p\in M$ a linear map $df_{p}:T_{p}M\to T_{f(p)}N$ between tangent spaces by $\gamma\mapsto f\circ\gamma$. 

> [!Definition] Local diffeomorphism
> A smooth map $f:M\to N$ is a **local diffeomorphism** at a point $p\in M$ if there are two open sets $U\subseteq M$ and $V\subseteq N$ containing respectively $p$ and $f(p)$ such that $f|_{U}:U\to V$ is a diffeomorphism. 

^42f88b

The [[LEC CAL1 21#^ccd2d7|inverse function theorem]] in $\mathbb{R}^{n}$ implies its analogue for smooth manifolds:

> [!Theorem] @martelliIntroductionGeometricTopology2025 1.1.6
> Let $f:M\to N$ be a smooth map between manifolds of the same dimension. The map is a [[#^42f88b|local diffeomorphism]] at $p\in M$ iff the differential $df_{p}:T_{p}M\to T_{f(p)}N$ is invertible. 


> [!Proposition]
> The product of smooth manifolds is smooth. 
> 
> > [!Proof]-
> > Let $M, N$ be smooth manifolds. We've already [[Topological manifolds#^5ea3e2|shown]] that $M\times N$ is a manifold. Showing that $M\times N$ is in fact smooth entails showing that for every pair of charts $(M_{\alpha}\times N_{\alpha'}, \phi_{\alpha}\times \psi_{\alpha'})$ and $(M_{\beta}\times N_{\beta'}, \phi_{\beta}\times \psi_{\beta'})$, the transition map $(\phi_{\alpha}\times \psi_{\alpha'})\circ(\phi_{\beta}\times \psi_{\beta'})^{-1}=(\phi_{\alpha}\times \psi_{\alpha'})\circ(\phi_{\beta}^{-1}\times \psi_{\beta'}^{-1})$ is smooth. Since $\phi_{\alpha}\circ \phi_{\beta}^{-1}$ and $\psi_{\alpha'}\circ \psi_{\beta'}^{-1}$ are given to be smooth and the product of smooth maps is smooth, it suffices to observe that the following diagram commutes, i.e., $(\phi_{\alpha}\times \psi_{\alpha'})\circ(\phi_{\beta}^{-1}\times \psi_{\beta'}^{-1})=(\phi_{\alpha}\circ\phi_{\beta}^{-1})\times( \psi_{\alpha'}\circ\psi_{\beta'}^{-1})$:
> > 
> > ```latex
> > % latex-id: 90d5-ed85-11da-4581-9d22
> > \begin{document}
> > % https://q.uiver.app/#q=WzAsOSxbMCwxLCJVXFx0aW1lcyBWIl0sWzIsMSwiKE1fXFxiZXRhXFxjYXAgTV9cXGFscGhhKVxcdGltZXMoTl9cXGJldGFcXGNhcCBOX1xcYWxwaGEpIl0sWzQsMSwiVSdcXHRpbWVzIFYnIl0sWzIsMCwiTV9cXGJldGFcXGNhcCBNX1xcYWxwaGEiXSxbMiwyLCJOX1xcYmV0YVxcY2FwIE5fXFxhbHBoYSJdLFswLDAsIlUiXSxbMCwyLCJWIl0sWzQsMCwiVSciXSxbNCwyLCJWJyJdLFsxLDNdLFsxLDRdLFswLDEsIlxccGhpX1xcYmV0YV57LTF9XFx0aW1lcyBcXHBzaV97XFxiZXRhJ31eey0xfSIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFsxLDIsIlxccGhpX1xcYWxwaGFcXHRpbWVzIFxccHNpX3tcXGFscGhhJ30iLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XSxbMCw1XSxbNSwzLCJcXHBoaV9cXGJldGFeey0xfSJdLFswLDZdLFs2LDQsIlxccHNpX3tcXGJldGEnfV57LTF9IiwyXSxbMiw3XSxbMiw4XSxbMyw3LCJcXHBoaV9cXGFscGhhIl0sWzQsOCwiXFxwc2lfe1xcYWxwaGEnfSIsMl1d
> > \[\begin{tikzcd} U && {M_\beta\cap M_\alpha} && {U'} \\ {U\times V} && {(M_\beta\cap M_\alpha)\times(N_\beta\cap N_\alpha)} && {U'\times V'} \\ V && {N_\beta\cap N_\alpha} && {V'} \arrow["{\phi_\beta^{-1}}", from=1-1, to=1-3] \arrow["{\phi_\alpha}", from=1-3, to=1-5] \arrow[from=2-1, to=1-1] \arrow["{\phi_\beta^{-1}\times \psi_{\beta'}^{-1}}"', dashed, from=2-1, to=2-3] \arrow[from=2-1, to=3-1] \arrow[from=2-3, to=1-3] \arrow["{\phi_\alpha\times \psi_{\alpha'}}"', dashed, from=2-3, to=2-5] \arrow[from=2-3, to=3-3] \arrow[from=2-5, to=1-5] \arrow[from=2-5, to=3-5] \arrow["{\psi_{\beta'}^{-1}}"', from=3-1, to=3-3] \arrow["{\psi_{\alpha'}}"', from=3-3, to=3-5] \end{tikzcd}\] 
> > \end{document}
> > ```
> > 
> > 
> 

^576aa3

# The Tangent and Normal bundles



> [!Definition] Vector bundle
> 1. A **smooth vector bundle** is a [[Fiber bundles#^2a8fcb|smooth fiber bundle]] with $F=\mathbb{R}^{n}$ where $h:p ^{-1}(v)\to F$ is isomorphism of vector spaces[^1] for each $v\in B$ and $p$ defined on a neighborhood of $v$. 
> 2. The **zero-section** of a smooth vector bundle is the section $s:B\to E$ that sends $v$ to $\mathbf{0}\in p ^{-1}(v)$. The image $s(B)$ of the zero-section is typically identified with $B$ via $s$. 

^69790c

[^1]: This is not a _requirement_ - it is merely specifying that we vector spaceize $p ^{-1}(v)$ by pulling back the vector space structure on $F$ via $h$. 

> [!Definition] Tangent bundle, @martelliIntroductionGeometricTopology2025 1.1.6
> Let $M$ be a differentiable manifold of dimension $n$. The union of all [[#^995b96|tangent spaces]]
> $$
> TM=\bigcup_{p\in M}T_{p}M
> $$
> is naturally a differentiable manifold of double dimension $2n$, called the **tangent bundle**. The tangent bundle $TM$ is naturally a [[#^69790c|smooth vector bundle]] over $M$, the fiber over $p\in M$ being the tangent space $T_{p}M$. 

^a4f970

> [!Definition] Normal bundle, @martelliIntroductionGeometricTopology2025 1.1.6
> Let $M\subseteq N$ be a [[#^ae0294|smooth submanifold]] of $N$. The **normal space** at a point $p\in M$ is the quotient vector space $\nu_{p}M:=T_{p}N/T_{p}M$. The **normal bundle** $\nu M$ is the union
> $$
> \nu M:=\bigcup_{p\in M}\nu_{p}M
> $$
> and is also naturally a [[#^69790c|smooth vector bundle]] over $M$. 

^3bf73d

The normal bundle is not canonically contained in $TN$ like the tangent bundle, but it may be embedded directly in $N$. 

> [!Definition] Vector field, @martelliIntroductionGeometricTopology2025 1.1.7
> A **vector field** $X$ on a smooth manifold $M$ is a [[Fiber bundles#^2a8fcb|section]] of its [[#^a4f970|tangent bundle]]. 

# Immersions, Embeddings, and Isotopies

> [!Definition] Immersions and embeddings, @martelliIntroductionGeometricTopology2025 1.1.8
> A smooth map $f:M\to N$ between smooth manifolds is an **immersion** if its differential is everywhere injective (this does not imply that $f$ is injective). The map is an **embedding** if its image is a [[#^ae0294|smooth submanifold]] and $f:M\to f(M)$ is a diffeomorphism. 

^4f491f

> [!Proposition] 
> If $M$ is compact, every injective [[#^4f491f|immersion]] $f:M\to N$ is an embedding. 

> [!Definition] Isotopy
> Two [[#^4f491f|embeddings]] $f_{0}, f_{1}:M\to N$ are **isotopic** if there is a [[Homotopy, Covering Spaces and the Fundamental Group#^ccf037|homotopy]] $H:M\times I\to N$ such that for all $t\in[0, 1]$, the map $f_{t}$ defined by $H(\_{, t})$ is an *embedding*. The map $H$ is called an **isotopy** between $f_{0}$ and $f_{1}$. Two submanifolds $S_{0}$, $S_{1}$ of $M$ are **isotopic** if their inclusion maps are isotopic. 

^d2add7

> [!Definition] Ambient isotopy
> An **ambient isotopy** on $N$ is an [[#^d2add7|isotopy]] between $\mathrm{id}_{N}$ and some other diffeomorphism $\varphi:N\to N$ such that every level is a diffeomorphism. Two [[#^4f491f|embeddings]] $\varphi, \psi:M\to N$ are **ambiently isotopic** if there is an ambient isotopy $F$ of $N$ such that $\psi=F_{1}\circ\varphi$.  
 
^42e788

> [!Proposition]
> If $M$ is compact, two [[#^4f491f|embeddings]] $\varphi, \psi:M\to N$ are [[#^d2add7|isotopic]] iff they are [[#^42e788|ambiently isotopic]]. 


# Tubular Neighborhoods


Tubular neighborhoods are the $\textsf{Diff}$ category equivalent of [[Topological manifolds#^a8b826|regular neighborhoods]] from $\textsf{Top}$. An easy way to obtain tubular neighborhoods is via the [[Urysohn Lemma and applications#^e4f9b0|Whitney embedding]] - if $Y$ is a submanifold of $X$, we can look at all points within a distance $\epsilon$ of $Y$. The following theorem gives us an explicit description of this set. 

> [!Theorem] The $\epsilon$-Neighborhood Theorem
> Let $Y$ be a compact $k$-dimensional submanifold of the $n$-manifold $X$. Let $Y^{\epsilon}$ denote the set of all points in $X$ with distance less than $\epsilon$ from $Y$. If $\epsilon$ is sufficiently small, then $Y^{\epsilon}$ is a $I^{n-k}$-[[Fiber bundles#^a3d022|bundle]] over $Y$, in which case $Y^{\epsilon}$ is called an **$\epsilon$-neighborhood** of $Y$. 

^759a38

#q How does one define regular neighborhoods, and how is the equivalence with $\epsilon$-neighborhoods established? See how regular neighborhoods relate to the definition of [[Topological manifolds#^49ffed|regular balls]]; ideally, regular balls should just end up being regular neighborhoods of points ($0$-dimensional manifolds), but [[Topological manifolds#^bd0bcd]] satisfies the definition of an $\epsilon$-neighborhood without being regular, so there's more that goes into translating between $\epsilon$-neighborhoods and regular neighborhoods. 


Alternatively, you can define the tubular neighborhood using the normal bundle:

> [!Definition] Tubular neighborhood, @martelliIntroductionGeometricTopology2025 1.1.10
> Let $M\subseteq N$ be a smooth submanifold. A **tubular neighborhood** of $M$ is an open subset $U\subseteq N$ diffeomorphic to the [[#^3bf73d|normal bundle]] via a diffeomorphism $\nu M\to U$ sending identically the [[#^69790c|zero-section]] onto $M$. 

^b4f283

The $\textsf{Diff}$ analog of [[Topological manifolds#^4bfc8c]] becomes 

> [!Theorem] @martelliIntroductionGeometricTopology2025 Thm 1.1.11
> Let $M\subseteq N$ be a closed smooth submanifold. A [[#^b4f283|tubular neighborhood]] for $M$ exists and is unique up to an [[#^d2add7|isotopy]] fixing $M$ and up to pre-composing with a bundle isomorphism of $\nu M$. 

# Orientability

> [!Definition] Orientability in DIFF, @schultensIntroduction3manifolds2014 1.3.1
> A $C^{\infty}$-manifold $M$ with boundary is **orientable** if it has an atlas such that the [[LEC CAL1 16#Total derivative in terms of partial derivatives|Jacobians]] of all transition maps have *positive* determinant. Otherwise $M$ is non-orientable. An **orientation** of $M$ is such an atlas. We often write $(M, \{ \phi_{\alpha} \})$ to denote an oriented manifold. 

^dbdef9

> [!Remark]
> Suppose $\mathbf{f}:U\to V$ is a differentiable map with differentiable inverse $\mathbf{g}:V\to U$, where $V, U\subseteq \mathbb{R}^{n}$ are connected. By the [[LEC CAL1 17#^67af50|chain rule]], we have
> $$
> \begin{align}
> \mathbf{g}(\mathbf{f}(\mathbf{x})) & =\mathbf{x} \\
> \mathbf{g}'(\mathbf{f}(\mathbf{x}))\mathbf{f}'(\mathbf{x}) & =I  & \mathbf{x}\in U.
> \end{align}
> $$
> Thus, $\mathbf{f}'(\mathbf{x})$ is invertible for all $\mathbf{x}\in U$. Moreover, if $\mathbf{f}$ and $\mathbf{g}$ are $C^{1}$ (i.e., if $\mathbf{f}$ is a $C^{1}$-diffeomorphism), we must have $\det \circ \mathbf{f}'(U)\subseteq(0, \infty)$ or $\det \circ \mathbf{f}'(U)\subseteq(- \infty, 0)$ since $\det \circ \mathbf{f}'(U)$ must be connected. Thus, we can talk of the sign of the determinant of the Jacobian of a diffeomorphism. It is clear that the sign of the Jacobian determinant multiplies on composition; in particular, a diffeomorphism and its inverse ($\mathbf{f}$ and $\mathbf{g}$, for instance) must have the same sign, since the sign of $I$ is positive. 

Let $M$ be a differentiable manifold with two orientations $(M, \{ \phi_{\alpha} \})$ and $(M, \{ \psi_{\beta} \})$. We say that the orientations of $(M, \{ \phi_{\alpha} \})$ and $(M, \{ \psi_{\beta} \})$ are said to **coincide** on the subset
$$
\begin{align}
\bigcup \{ M_{\alpha}\cap M_{\beta}\ne \emptyset: \phi_{\alpha}\circ \psi_{\beta}^{-1}\text{ has positive Jacobian determinant}\}
\end{align}
$$
and **differ** on the subset
$$
\begin{align}
\bigcup \{ M_{\alpha}\cap M_{\beta}\ne \emptyset: \phi_{\alpha}\circ \psi_{\beta}^{-1}\text{ has negative Jacobian determinant}\}.
\end{align}
$$
These sets are clearly open. They are also disjoint, since if $x$ lies in $M_{\alpha}\cap M_{\beta}$ and $M_{\alpha'}\cap M_{\beta'}$, we have
$$
\begin{align}
\phi_{\alpha'}\circ \psi_{\beta'}^{-1} & =\underbrace{ (\phi_{\alpha'}\circ \phi_{\alpha}^{-1}) }_{ \text{+ve Jacobian det} }\circ(\phi_{\alpha}\circ \psi_{\beta}^{-1})\circ\underbrace{ (\psi_{\beta}\circ \psi_{\beta'}^{-1}) }_{ \text{+ve Jacobian det} },
\end{align}
$$
so $\phi_{\alpha'}\circ \psi_{\beta'}^{-1}$ and $\phi_{\alpha}\circ \psi_{\beta}^{-1}$ have the same Jacobian determinant sign. Thus *for a connected manifold $M$, two orientations either coincide on all of $M$ or differ on all of $M$*. 

> [!Definition] Orientation-preserving maps, @schultensIntroduction3manifolds2014 1.3.4
> For a oriented $C^{\infty}$-manifolds $(M, \{ \phi_{\alpha} \})$, $(N, \{ \psi_{\beta} \})$ of the same dimension, a smooth map $h:M\to N$ is **orientation-preserving** if the Jacobians of the maps $\psi_{\beta}\circ h\circ \phi_{\alpha}^{-1}$ (where they are defined) all have positive determinant. If they all have negative determinant it is said to be **orientation-reversing**. 

^51ad4d

![[Differentiable manifolds 2026-06-19 18.21.46.excalidraw.dark.png]]
%%[[Differentiable manifolds 2026-06-19 18.21.46.excalidraw.md|🖋 Edit in Excalidraw]], and the [[Differentiable manifolds 2026-06-19 18.21.46.excalidraw.light.png|light exported image]]%%

> [!Definition] Orientation-preserving curves
> In a non-orientable manifold $M$ each chart defines a local orientation. If $c$ is a closed $1$-dimensional submanifold of $M$, then the transition maps for those charts of $M$ that meet $c$ may or may not have Jacobians with positive determinants. If there is an atlas for $M$ for which all charts that meet $c$ have transition maps whose Jacobians have positive determinants, then we say that $c$ is an **orientation-preserving** closed $1$-dimensional submanifold. If there is no such atlas, then $c$ is an **orientation-reversing** closed $1$-dimensional submanifold of $M$. 

^b6cdf3

> [!Definition] Induced orientation
> #td uses the language of differential forms

^1b8061

> [!Proposition]
> The product of two orientable manifolds is an orientable manifold. 
> 
> > [!Proof]-
> > Let $M$ and $N$ be oriented manifolds with orientations $\{ (M_{\alpha}, \phi_{\alpha}) \}$ and $\{ (N_{\alpha'}, \psi_{\alpha'}) \}$, and let $M\times N$ have the standard atlas $\{ (M_{\alpha}\times N_{\alpha'}, \phi_{\alpha}\times \psi_{\alpha'}) \}$. Showing that this atlas is a chart entails showing that for every pair of charts $(M_{\alpha}\times N_{\alpha'}, \phi_{\alpha}\times \psi_{\alpha'})$ and $(M_{\beta}\times N_{\beta'}, \phi_{\beta}\times \psi_{\beta'})$, the transition map (which is equal to $(\phi_{\alpha}\circ\phi_{\beta}^{-1})\times( \psi_{\alpha'}\circ\psi_{\beta'}^{-1})$ by the proof of [[#^576aa3]]) has positive Jacobian determinant. This follows, since both $\phi_{\alpha}\circ \phi_{\beta}^{-1}$ and $\psi_{\alpha'}\circ \psi_{\beta'}^{-1}$ have positive Jacobian determinant. 
> 

> [!Proposition] @schultensIntroduction3manifolds2014 1.3.7
> A manifold $M$ is non-orientable iff $M$ contains an orientation reversing closed $1$-dimensional submanifold.
> 
> > [!Proof]-
> > #td 
> 

^ccbd4e

# [[Transversality]]
# Misc Results

> [!Theorem]
> Differentiable manifolds are [[Triangulable manifolds#^d2b6e8|triangulable]]. 

> [!Theorem]
> $2$-manifolds and $3$-manifolds admit a unique differentiable structure. 

^f317d8

#q what is a "differentiable structure" in this context?

> [!Proposition] @martelliIntroductionGeometricTopology2025 Prop 1.1.13
> A connected compact manifold $M$ has a unique line bundle $E\to M$ up to isomorphism with [[#^dbdef9|orientable]] total space $E$. 

[^2]: Give a reasonable definition of addition here - I think the obvious idea works. Also see @guilleminDifferentialTopology1974

[^3]: Note that different parameterizations of the same curve yield parallel tangent vectors with different magnitudes!
