---
id: "483"
date: 2026-06-25
time: 11:12
tags:
---
> [!Remark] Notes on general position
> We have the following insights from [[Transversality#^c993d4]] and [[Transversality#^47e8ef]]: For a $3$-manifold $M$, 
> 1. Compact $2$-submanifolds can always be isotoped to intersect in a compact $1$-dimensional submanifold; 
> 2. A compact $1$-submanifold and a compact $2$-submanifold can be isotoped to intersect at a finite number of points;
> 3. Compact $1$-submanifolds can be isotoped to be disjoint from $2$-, $1$-, or other $0$-submanifolds of $M$.  

# Bundles: First examples of 3-Manifolds

Any [[Topological manifolds#^5ea3e2|product manifold]] $X\times Y$ is a [[Fiber bundles#^a3d022|bundle]]; you can think of either $X$ or $Y$ as the base space. The annulus ($\mathbb{S}^{1}\times I$) is an example. 

> [!Definition] Trivial bundle
> A [[Fiber bundles#^a3d022|bundle]] that is isomorphic to a product bundle is called a **trivial bundle**. 

The annulus is a trivial bundle. The Möbius band is an $I$-bundle over $\mathbb{S}^{1}$ which is not isomorphic to $\mathbb{S}^{1}\times I$ (because of the half-twist, of course!). An easy way to see that the annulus and Möbius band are inequivalent is to note that their boundaries are $\mathbb{S}^{1}\sqcup \mathbb{S}^{1}$ and $\mathbb{S}^{1}$ respectively. 

Analogously, we can construct the trivial and nontrivial $I$ bundle over the Möbius band $\mathbb{M}$ (our first 3-manifolds!). Denote them by $M$ and $\tilde{M}$ respectively. It is easy to see that the total space of $\tilde{M}$ is the solid torus $\mathbb{S}^{1}\times \mathbb{B}^{2}$; I can't think of a way to embed $M$ into $\mathbb{R}^{3}$. There are two ways to see that $M$ and $\tilde{M}$ are non-isomorphic. We can compute their boundaries and note their difference, as before:
$$
\begin{align}
\partial M & =\partial(\mathbb{M}\times I)=(\partial \mathbb{M}\times I) \cup (\mathbb{M}\times \partial I) \\
 & =(\mathbb{S}^{1}\times I)\cup (\mathbb{M}\times \{ 0 \})\cup (\mathbb{M}\times \{ 1 \}) \\
 & = \mathbb{P}^{2}\#\mathbb{P}^{2} \\
 & = \mathbb{K}^{2}, \\
 \\
\partial \tilde{M} & = \partial(\mathbb{S}^{1}\times \mathbb{B}^{2}) \\
 & =\mathbb{T}^{2},
\end{align}
$$
where $\mathbb{P}^{2}\#\mathbb{P}^{2}=\mathbb{K}^{2}$ follows from [[Classification of compact surfaces#^358ad7]].

Another way is to look at $M$ and $\tilde{M}$ as mapping tori of $\mathbb{B}^{2}$:

> [!Definition] Mapping Torus
> Let $S$ be a closed connected $n$-manifold and $f:S\to S$ a homeomorphism. The **mapping torus** $M_{f}$ of $f$ is the $(n+1)$-manifold obtained from $S\times[-1, 1]$ by identifying the points $(x, -1)$ and $(f(x), 1)$ for all $x\in S$. The mapping torus of $f$ is a $S$-bundle over $\mathbb{S}^{1}$. 

Note that changing $f$ by an isotopy doesn't change the resulting manifold, so in fact $M_{f}$ only depends on the [[The Mapping Class Group#^fb44bb|mapping class]] of $\phi$. 

If we let $f$ denote a reflection of $\mathbb{B}^{2}$ and $\tilde{f}$ denote the antipodal map of $\mathbb{B}^{2}$, then we have $M=M_{f}$ and $\tilde{M}=M_{\tilde{f}}$. It is clear that $f$ and $\tilde{f}$ are not isotopic ( #td write an argument for this), so it follows that $M$ and $\tilde{M}$ are not equivalent.
# The Schönflies Theorem

> [!Lemma] Poincaré-Hopf Index Theorem
> Let $S$ be a surface and let $h:S\to \mathbb{R}$ be a Morse function. Then
> $$
> \chi(S)=\#(\text{minima of }h)+\#(\text{maxima of }h)-\#(\text{saddles of }h)
> $$

The **Jordan curve theorem** (aka the Schönflies theorem) states that for any simple closed curve $c$ in $\mathbb{R}^{2}$ (i.e., for any embedding $c:\mathbb{S}^{1}\hookrightarrow \mathbb{R}^{2}$), there exists a homeomorphism $f:\mathbb{R}^{2}\to \mathbb{R}^{2}$ such that $f|_{\mathbb{S}^{1}}=c$. This means that for any simple closed curve in $\mathbb{R}^{2}$, the inside is always homeomorphic to a disk, and the outside is always homeomorphic to the exterior of $\mathbb{S}^{1}$. 

The analogous statement in $3$ dimensions does not hold: The Alexander horned sphere is an embedding $\mathbb{S}^{2}\hookrightarrow \mathbb{R}^{3}$ such that $\pi_{1}(D_{\text{ext}})\ne \emptyset$, so the embedding cannot be extended to a homeomorphism of $\mathbb{R}^{3}$. 

However, it is true that every **locally flat** embedding of $\mathbb{S}^{2}$ into $\mathbb{R}^{3}$ extends to a homeomorphism of $\mathbb{R}^{3}$. This is known as the generalized Schönflies theorem. We can pretend to have completely salvaged the Jordan curve theorem by defining our submanifolds to be locally flat embeddings, [[Topological manifolds#^8517b5|as Schultens does]]. On observing the fact that homeomorphisms take submanifolds to submanifolds, The generalized Schönflies theorem now reads 

> [!Theorem] Generalized Schönflies
> Any $\mathbb{S}^{2}$-submanifold of $\mathbb{R}^{3}$ is the boundary of a $\mathbb{B}^{3}$-submanifold of $\mathbb{R}^{3}$[^2]. 

> [!Definition] Irreducible 3-manifold
> A $3$-manifold is **irreducible** if every $2$-sphere in $M$ bounds a $3$-ball. A $3$-manifold is **reducible** if it contains a $2$-sphere that does not bound a $3$-ball. 

^bcc199

For example, $\mathbb{S}^{2}\times \mathbb{S}^{1}$ is reducible. 

> [!Corollary]
> $\mathbb{R}^{3}$, $\mathbb{B}^{3}$, and $\mathbb{S}^{3}$ are irreducible. 

Alexander's Theorem is proved via an argument analogous to that used in the proof of the Schönflies theorem. 

> [!Theorem] Alexander
> Let $\mathbb{T}$ be a torus submanifold of $\mathbb{S}^{3}$, then one of the components of $\mathbb{S}^{3}\setminus \mathbb{T}$ has closure homeomorphic to a solid torus $\mathbb{S}^{1}\times \mathbb{B}^{2}$. 
> 
> > [!Proof]-
> > 
> > Let $\mathbb{T}\subseteq \mathbb{R}^{3}$ be a torus submanifold. We isotope $\mathbb{T}$ so that the height function $h:\mathbb{R}^{3}\to \mathbb{R}$ given by projection onto the third coordinate restricts to a Morse function $h|_{\mathbb{T}}$ ( #q How do we know we can do this?)
> 

> [!Note]- Some visual aid
> <iframe src="https://www.desmos.com/3d/1brst05c4i" width="100%" height= "500px"></iframe>
> 

In fact, both components of $\mathbb{S}^{3}\setminus \mathbb{T}$ are homeomorphic to a solid torus! This gives us our first example of a Heegaard splitting, specifically a Heegaard splitting of genus 1 of $\mathbb{S}^{3}$. 

> [!Remark]
> Alexander's Theorem does not generalize to surfaces of genus greater than of equal to $2$, in the sense that not every connected orientable $2$-dimensional submanifold of $\mathbb{S}^{3}$ is the boundary of a regular neighborhood[^1] of a graph in $\mathbb{S}^{3}$. #td I'll look into this once I've done some knot theory. 

The following notion is related to irreducibility for manifolds with non-empty boundary. 

> [!Definition] Boundary irreducibility
> A $3$-manifold $M$ is **boundary irreducible** if every simple closed curve $c$ in $\partial M$ that bounds a disk in $M$ cuts $M$ into two $3$-manifolds, one of this is a $3$-ball. 

$\mathbb{S}^{3}$ is boundary irreducible, since it has no boundary. The solid torus $V=\mathbb{S}^{1}\times \mathbb{B}^{2}$ is not boundary irreducible. 

---

# 3-Manifolds that are Prime but Reducible

> [!Definition] Prime manifold
> An $n$-manifold $M$ is **prime** if $M=M_{1}\#M_{2}$ implies either $M_{1}$ or $M_{2}$ is the $n$-sphere, i.e, that the [[Classification of compact surfaces#^9cb3a2|connected sum]] $M=M_{1}\#M_{2}$ is trivial. 

^c04f97

> [!Definition] Separating submanifold
> A submanifold $A$ of a connected manifold $X$ is **separating** if $X\setminus A$ has at least two components; otherwise it is **non-separating**. 

Mirroring our discussion above, we now consider two mapping tori of $\mathbb{S}^{2}$ (that is, $\mathbb{S}^{2}$ bundles over $\mathbb{S}^{1}$): $M_{f}=\mathbb{S}^{2}\times \mathbb{S}^{1}$ and $M_{\tilde{f}}$, where $f=\mathrm{id}_{\mathbb{S}^{2}}$ and $\tilde{f}$ is the antipodal map of $\mathbb{S}^{2}$. Schultens denotes $M_{\tilde{f}}$ by $\mathbb{S}^{2} \tilde{\times}\mathbb{S}^{1}$. 

These two $3$-manifolds contain non-separating $2$-spheres. The following theorem shows that this is a rare property. 

> [!Theorem] @schultensIntroduction3manifolds2014 3.3.4
> An [[#^bcc199|irreducible]] closed connected $3$-manifold is [[#^c04f97|prime]]. A closed connected prime $3$-manifold is either irreducible or $\mathbb{S}^{2}\times \mathbb{S}^{1}$ or $\mathbb{S}^{2} \tilde{\times}\mathbb{S}^{1}$. 

[^1]: [[Topological manifolds#^a8b826]] defines regular neighborhoods for *submanifolds*. Schultens is probably invoking the definition form PL topology, where regular neighborhoods are defined for arbitrary polyhedra. 

[^2]: Schulten's particular choice of words are "Any $2$-sphere in $\mathbb{R}^{3}$ bounds a $3$-ball". I mean... I guess I really jumped the gun with this book, huh?
