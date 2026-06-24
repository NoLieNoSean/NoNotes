---
id: "463"
date: 2026-06-05
time: 16:18
tags:
---
> [!Abstract]
> We see that every compact surface can be 'built' up from $\mathbb{S}^{2}$, $\mathbb{T}^{2}$, and $\mathbb{P}^{2}$. 

[[The Quotient Topology|Recall]] how the torus, sphere, and projective plane can be represented as a quotient of the square by identifying edges. Now we define a general method for building surfaces by identifying edges of geometric figures. 

> [!Definition] Polygonal region
> Say that a subset $P\subseteq \mathbb{R}^{2}$ is a **polygonal region** if it is a compact subset whose boundary is a ==finite== $1$-dimensional [[Triangulable manifolds#^bc164d|Euclidean simplicial complex]], satisfying the following conditions:
> 1. Each point $q$ of an edge other than a vertex has a neighborhood $U$ in $\mathbb{R}^{2}$ such that $P\cap U$ is equal to the intersection with $U$ of some closed half-plane.
> 2. Each vertex $v$ has a neighborhood $V$ in $\mathbb{R}^{2}$ such that $P\cap V$ is equal to the intersection of $V$ with two closed half-planes whose boundaries intersect only at $v$. 

^2b04d4

Examining [[#^2b04d4]].2 reveals that connected components of polygonal regions must be convex polygons. 

It is a general fact that quotients of polygonal regions obtained by identifying edges in pairs are always surfaces. 

> [!Lemma] @leeIntroductionTopologicalManifolds2000 Prop 6.4
> Let $P$ be a polygonal region in the plane with an even number of edges, and suppose we are given an equivalence relation on $P$ that identifies each edge with exactly one other edge by means of a [[Triangulable manifolds#^5a9dc6|simplicial]] homeomorphism. The resulting quotient space is a compact $2$-manifold.
> 
> > [!Proof]-
> > 
> > Let $M$ be the quotient space and let $\pi:P\to M$ denote the quotient map. Let $M_{1}=\pi(\partial P)$, and $M_{2}=\pi(P^{\circ})$. Note that $\pi$ restricted to $P^{\circ}$ is a homeomorphism, so if $x\in M_{2}$, $\pi(B_{\epsilon}(\pi ^{-1}(x)))$ for small enough $\epsilon$ is a Euclidean neighborhood of $x$. 
> > 
> > It's easier to deal with the points which lie in $M_{2}$ if we triangulate $P$. Then we can build the required neighborhood homeomorphisms from simplicial homeomorphisms (which are easy to define), and don't have to deal with the awkwardness of lee's wedges. 
> > 
> > ![[Classification of compact surfaces 2026-06-11 20.05.35.excalidraw.dark.png]]
> > %%[[Classification of compact surfaces 2026-06-11 20.05.35.excalidraw.md|🖋 Edit in Excalidraw]], and the [[Classification of compact surfaces 2026-06-11 20.05.35.excalidraw.light.png|light exported image]]%%
> > 
> > ![[Classification of compact surfaces 2026-06-11 20.21.32.excalidraw.dark.png]]
> > %%[[Classification of compact surfaces 2026-06-11 20.21.32.excalidraw.md|🖋 Edit in Excalidraw]], and the [[Classification of compact surfaces 2026-06-11 20.21.32.excalidraw.light.png|light exported image]]%%
> 

^b1c5a6

# Connected sums

Connected sums allow us to construct new manifolds by gluing together simpler ones. 

> [!Definition] Connected sum
> Let $M_{1}$ and $M_{2}$ be connected $n$-manifolds. Let $B_{i}\subseteq M_{i}$ be [[3-Manifolds#^49ffed|regular Euclidean balls]]. Choose a homeomorphism $\sigma:\partial B_{1}\to \partial B_{2}$ (such a homeomorphism exists because both boundaries are homeomorphic to $\mathbb{S}^{n-1}$). Let $M_{i}'=M_{i}\setminus B_{i}$. Define a quotient space of $M_{1}'\coprod M_{2}'$ by identifying each $q\in \partial B_{1}$ with $\sigma(q)\in \partial B_{2}$. The resulting quotient space is called a **connected sum** of $M_{1}$ and $M_{2}$ and is denoted by $M_{1}\#M_{2}$. In the case that $M_{1}$ and $M_{2}$ are [[Differentiable manifolds#^dbdef9|oriented]], we further require that the identification of the boundaries of $B_{1}$ and $B_{2}$ be via an [[Topological manifolds#^5125c8|orientation-reversing]] homeomorphism (with respect to the induced boundary orientations on $\partial B_{1}$ and $\partial B_{2}$). 

^9cb3a2

> [!Proposition] @leeIntroductionTopologicalManifolds2000 Prop 6.6
> If $M_{1}$ and $M_{2}$ are connected $n$-manifolds, any connected sum $M_{1}\#M_{2}$ is a connected $n$-manifold. 
> 
> > [!Proof]-
> > 
> > We first show that $M_{1}\#M_{2}$ is locally Euclidean. Let $\pi:M_{1}'\coprod M_{2}'\to M_{1}\#M_{2}$ denote the quotient map, and let $S=\pi(\partial B_{1}\cup \partial B_{2})$. Since $\pi$ is injective away from $S$, it is a homeomorphism away from $S$. Since open subsets of manifolds are manifolds, it follows that $M_{1}\#M_{2}\setminus S$ is a manifold and therefore locally Euclidean. Thus we need only consider points in $S$. 
> > 
> > The set $X=(U_{1}\setminus B_{1})\cup(U_{2}\setminus B_{2})\subseteq M_{1}'\coprod M_{2}'$ is a saturated open set, so $\pi(X)$ is an open neighborhood of $S$. Our aim is to establish a homeomorphism between $\pi(X)$ and an open subset of $\mathbb{R}^{2}$. 
> > 
> > The regular balls $B_{i}$ for $i=1, 2$ come with neighborhoods $U_{i}$ containing $\overline{B}_{i}$ and homeomorphisms $\varphi_{i}:U_{i}\to B_{2}(0)$ taking $U_{i}\setminus B_{i}$ onto the annulus $A_{[1, 2)}$. Note that $\varphi_{i}$ sends $\partial B_{i}$ to the unit sphere. 
> > 
> > We will construct a homeomorphism between $\pi(X)$ and the open annulus $A_{(1/2, 2)}$. To do so, we first have to define a map $X\to A_{(1/2, 2)}$ which makes the same identifications as $\sigma$ (we can then use [[The Quotient Topology#^461a5c]] to obtain a map $\pi(X)\to A_{(1/2, 2)}$). 
> > 
> > We first need to compensate for the fact that $\varphi_{2}^{-1}\circ\varphi_{1}$ does not make the same identifications between $\partial B_{1}$ and $\partial B_{2}$ as $\sigma$ does. We extend the homeomorphism $\beta: \varphi_{2}\circ\sigma \circ\varphi_{1}^{-1}:\mathbb{S}^{n-1}\to \mathbb{S}^{n-1}$ to a homeomorphism $\tilde{\beta}: B_{2}(0)\to B_{2}(0)$[^1] and define $\tilde{\varphi}_{1}=\tilde{\beta}\circ\varphi_{1}$. We can now define $\Phi:X\to A_{(1/2, 2)}$ by
> > $$
> > \begin{align}
> > \Phi(q)=\begin{cases}
> > I\circ  \tilde{\varphi}_{1} & q\in U_{1}\setminus B_{1},  \\
> > \varphi_{2}(q) & q\in U_{2}\setminus B_{2},
> > \end{cases}
> > \end{align}
> > $$
> > where $I$ is the inversion map $x \mapsto x/|x|$. Clearly, $\Phi$ respects the identifications made by $\pi$, so $\Phi$ passes to the quotient and defines a map $\pi(X)\to A_{(1/2, 2)}$. It is easy to show that this map is indeed a homeomorphism by explicitly constructing an inverse. 
> 


[^1]: This is not any homeomorphism; the geometric particulars matter. Specifically, this homeomorphism must not alter the radial component. In particular, it must map $A_{(1, 2)}$ onto $A_{(1, 2)}$. 

We will need the following two theorems[^2] to discuss the impact of the choices of $B_{i}$ and the homeomorphism $\sigma$ on the connected sum $M_{1}\#M_{2}$:

> [!Definition] Isotopy
> Two embeddings $f_{0}, f_{1}:M\to N$ are **isotopic** if there is a [[Covering Spaces and the Fundamental Group#^ccf037|homotopy]] $H:M\times I\to N$ such that for all $t\in[0, 1]$, the map $f_{t}$ defined by $H(\_{, t})$ is an embedding. The map $H$ is called an **isotopy** between $f_{0}$ and $f_{1}$. Two submanifolds $S_{0}$, $S_{1}$ of $M$ are **isotopic** if their inclusion maps are isotopic. 

> [!Theorem] 
> Every orientation-preserving homeomorphism of an $n$-ball or $n$-sphere is isotopic to the identity. 

^3cb419

> [!Theorem] @schultensIntroduction3manifolds2014 1.6.4
> If $B_{1}$, $B_{2}$ are ( #q regular?) $n$-balls in the interior of a connected $n$-manifold $M$, then there is an isotopy $f:M\times I\to M$ such that $f(\_{, 0}) | _{B_{1}}$ is the identity and $f(\_{, 1})|_{B_{2}}$ is a homeomorphism onto $B_{2}$. 
> 

^2ac7d4

#td Prove all claims made in the following text. 

[[#^2ac7d4]] ensures that the choice of $B_{1}$ and $B_{2}$ is inconsequential. If $M_{1}$ and $M_{2}$ are oriented, then [[#^3cb419]] tells us that any two choices of identification of $\partial B_{1}$ and $-\partial B_{2}$ are isotopic and it follows that the manifolds obtained via this identification are homeomorphic. Thus for oriented manifolds $M_{1}, M_{2}$, there is a unique connected sum. 

For orientable (but not oriented) manifolds it is possible to have two non-homeomorphic connected sums of $M_{1}$ and $M_{2}$. Specifically, endow $M_{1}$, $M_{2}$ with orientations and consider $M_{1}\#M_{2}$ and $M_{1}\#(-M_{2})$. 

If at least one of $M_{1}, M_{2}$, is non-orientable, then there is a unique connected sum $M_{1}\#M_{2}$: since every non-orientable $n$-manifold $M$ contains an orientation-reversing closed $1$-dimensional submanifold (by [[Differentiable manifolds#^ccbd4e]]), 

In the special case of surfaces, it turns out that the two possible connected sums that can be formed form a pair of manifolds are in fact homeomorphic to each other:

> [!Proposition] @leeIntroductionTopologicalManifolds2011 Exr 10-8
> If $M$ and $N$ are nonempty, compact, connected $2$-manifolds, then any two connected sums of $M$ and $N$ are homeomorphic. 

Thus, given any two compact connected surfaces, we can talk about *the* connected sum $M_{1}\#M_{2}$. 
# Polygonal presentations

> [!Definition] Polygonal presentations
> 1. A **polygonal presentation**, written as $\mathcal{P}=\langle S\ | \ W_{1}, .., W_{k} \rangle$, is a finite set $S$ together with finitely many words $W_{1}, \dots, W_{k}$ in $S$ of length $3$ or more, such that every symbol in $S$ appears in at least one word. We also allow as a special case any presentation in which $S$ has one element and there is a single word of length $2$. There are only four such: $\langle a\ | \ aa \rangle$, $\langle a\ | \ a^{-1}a^{-1} \rangle$, $\langle a\ | \ aa^{-1} \rangle$, and $\langle a\ | \ a^{-1}a \rangle$. 
> 2. Any polygonal presentation $\mathcal{P}$ determines a topological space $|\mathcal{P}|$, called the **geometric realization** of $\mathcal{P}$, by identifying edges of polygonal regions as prescribed by the words by simplicial homeomorphisms; see [@leeIntroductionTopologicalManifolds2000 p. 131] for details. If $\mathcal{P}$ is one of the special presentations with a word of length $2$, we define $|\mathcal{P}|$ to be the sphere if the word is $aa^{-1}$ or $a^{-1}a$, and the projective plane if it is $aa$ or $a^{-1}a^{-1}$. 
> 3. A polygonal presentation is called a **surface presentation** if each symbol $a\in S$ occurs exactly twice in $W_{1}, \dots, W_{k}$. By [[#^b1c5a6]], the geometric realization of a surface presentation is a compact surface. 
> 4. If two presentations $\mathcal{P}_{1}$ and $\mathcal{P}_{2}$ have homeomorphic geometric realizations, we will say that they are **topologically equivalent** and write $\mathcal{P}_{1}\approx P_{2}$. 

> [!Example]
> The following surfaces are determined by these polygonal presentations, which we call their **standard presentations**. 
> 1. The sphere: $\langle a\ | \ aa^{-1} \rangle$ or $\langle a, b\ | \ abb ^{-1}a^{-1} \rangle$.
> 2. The torus: $\langle a, b \ | \ aba^{-1}b ^{-1}\rangle$.
> 3. The projective plane: $\langle a\ | \ aa \rangle$ or $\langle a, b\ | \ abab \rangle$. 
> 4. The Klein bottle: $\langle a, b\ | \ abab ^{-1} \rangle$. 

> [!Definition] Elementary transformations
> Relabeling, subdividing, consolidation, reflecting, rotating, cutting, pasting, folding, and unfolding. See [@leeIntroductionTopologicalManifolds2000 p.134]. 

> [!Proposition]
> Each elementary transformation of a polygonal presentation produces a topologically equivalent presentation. 

We will now find standard presentations for connected sums. 

> [!Proposition] @leeIntroductionTopologicalManifolds2011
> Let $M_{1}$ and $M_{2}$ be surfaces determined by presentations $\langle S_{1}\ | \ W_{1} \rangle$ and $\langle S_{2}\ | \ W_{2} \rangle$, respectively, in which $S_{1}$ and $S_{2}$ are disjoint sets and each presentation has a single face. Then $\langle S_{1}, S_{2}\ | \ W_{1}W_{2} \rangle$ is a presentation of a connected sum $M_{1}\#M_{2}$. 
> 
> > [!Proof]-
> > 
> > It's easier to think of it this way: let $v$ be as in the text, triangulate $P_{1}'$ such that $Q'$ is contained in a $2$-simplex, and use the technique from the proof of [[#^b1c5a6]] to show that the open vertex star $V$ at $v$ is homeomorphic to an open ball in $\mathbb{R}^{2}$. This proves the claim, since $V$ is a neighborhood of $Q'$. I have no clue why Lee makes it so clunky. 
> 

Thus, we have standard presentations for
1. Connected sum of $n$ tori: $\langle a_{1}, b_{1}, \dots, a_{n}, b_{n}\ | \ a_{1}b_{1}a_{1}^{-1}b_{1}^{-1}\dots a_{n}b_{n}a_{n}^{-1}b_{n}^{-1} \rangle$. 
2. Connected sum of $n$ projective planes: $\langle a_{1}, \dots, a_{n}\ | \ a_{1}a_{1}\dots a_{n}a_{n} \rangle$. 

# Classification of surfaces

> [!Lemma]
> If a simplicial complex has a compact geometric realization, then it must be finite. 
> 
> > [!Proof]-
> > 
> > Suppose $|\mathcal{K}|$ is compact for some complex $\mathcal{K}$. Cover $\mathcal{K}$ by vertex stars (the vertex star of a vertex $v$ is the union of interiors of all simplices which contain $v$). Since $|\mathcal{K}|$ is compact, we can choose a finite subcover. Since each vertex star contains only one vertex, it follows that $\mathcal{K}$ has finitely many vertices. 

^309fd2

> [!Proposition] @leeIntroductionTopologicalManifolds2011 6.14
> Every compact surface admits a polygonal presentation.
> 
> > [!Proof]-
> > 
> > Let $M$ be a compact surface. It follows from [[Triangulable manifolds#^9d61f9]] and [[#^309fd2]] that $M$ is homeomorphic to the polyhedron of a finite $2$-dimensional simplicial complex $K$, in which each $1$-simplex is a face of exactly two $2$-simplices. 
> > 
> > From this complex, we can construct a surface presentation $\mathcal{P}$ with one word of length $3$ for each $2$-simplex. We with to show that the geometric realization of $\mathcal{P}$ is homeomorphic to that of $K$. 
> > 
> > If $P=P_{1}\coprod\dots \coprod P_{k}$ denotes the disjoint union of the $2$-simplices of $K$, then we have two quotient maps $\pi_{K}:P\to |K|$ and $\pi_{\mathcal{P}}:P\to |\mathcal{P}|$, so it suffices to show that they make the same identifications. 
> > 
> > Both quotient maps are injective in the interiors of the $2$-simplices, both make the same identification of edges, and both identify vertices only with other vertices. But it may happen that $\pi_{K}$ identifies vertices that $\pi_{\mathcal{P}}$ does not (note that $\pi_{\mathcal{P}}$ identifies vertices only when forced by an edge identification):
> > 
> > ![[Classification of compact surfaces 2026-06-11 22.58.01.excalidraw.dark.png]]
> > %%[[Classification of compact surfaces 2026-06-11 22.58.01.excalidraw.md|🖋 Edit in Excalidraw]], and the [[Classification of compact surfaces 2026-06-11 22.58.01.excalidraw.light.png|light exported image]]%%
> > 
> > This is easily resolved, however: If $\pi_{K}$ identifies $v$ and $v'$ without an edge identification requiring it, it can be shown that any neighborhood of $v$ is disconnected by removing $v$, disqualifying $|K|$ as a manifold. 
> 

> [!Lemma]
> The Klein bottle is homeomorphic to $\mathbb{P}^{2}\#\mathbb{P}^{2}$. 

> [!Proposition] Attaching a Disk
> Let $X$ be a path-connected topological space, and let $\tilde{X}$ be the space obtained by attaching a closed $2-$cell $D$ to $X$ along an attaching map $\varphi:\partial D\to X$. Let $v\in \partial D$, $\tilde{v}=\varphi(v)\in X$, and $\gamma=\varphi_{*}(\alpha)\in \pi_{1}(X, \tilde{v})$, where $\alpha$ is a generator of the infinite cyclic group $\pi_{1}(\partial D, v)$. Then the homomorphism $\pi_{1}(X, \tilde{v})\to \pi_{1}(\tilde{X}, \tilde{v})$ induced by the inclusion $X\hookrightarrow \tilde{X}$ is surjective, and its kernel is the smallest normal subgroup containing $\gamma$. 

> [!Theorem]
> Let $M$ be a topological space with a polygonal presentation $\langle a_{1}, \dots, a_{n}\ | \ W \rangle$ with one face, in which all vertices are identified to a single point. Then $\pi_{1}(M)$ has the presentation $\langle a_{1}, \dots, a_{n}\ | \ W \rangle$. 

> [!Theorem] Classification of compact surfaces, @leeIntroductionTopologicalManifolds2000 Thm 6.14
> Every nonempty, compact, connected 2-manifold is homeomorphic to exactly one of these surfaces:
> 1. the sphere $\mathbb{S}^{2}$; 
> 2. a connected sum $\mathbb{T}^{2}\#\dots\# \mathbb{T}^{2}$; or
> 3. a connected sum $\mathbb{P}^{2}\#\dots\#\mathbb{P}^{2}$.
> 


This immediately leads to a classification of compact $2$-manifolds with boundary. 

> [!Theorem]
> Every compact $2$-manifold with boundary is homeomorphic to a compact $2$-manifold with finitely many open cells removed. 

[^2]: These are stated in and are true for all dimensions in $\textsf{Triang}$. 
