---
id: "612"
date: 2026-10-30
time: 18:22
tags:
---
# Outline

1. Relevant surface theory
	1. Definitions of surface and handlebody
	2. Defn of oriented intersection number
	3. homotopic curves are isotopic
	4. definition of the mapping class group
	5. alexander trick
	6. MCG of the torus is $SL(2, \mathbb{Z})$. 
2. Definition of lens spaces as quotient of solid torii, examples
	1. W. Dyck's talk to the British Association for the Advancement of Science held in Montreal 1884

---


# The torus

1. Throughout this seminar, $T$ denotes a torus $(S_{1}\times S_{1})$. 
2. Recall that $\pi_{1}(T)\cong \mathbb{Z}^{2}$. Since $\pi_{1}(T)$ is abelian, $H_{1}(T)\cong \pi_{1}(T)$. 
3. If you are not familiar with homology, you can think of $H_{1}(T)$ as composed of equivalence classes of loops in $T$ up to free homotopy, with composition defined by taking the class of the composition of representatives in $\pi_{1}(T)$. 

After choosing a basis $\{ [l], [m] \}$ for $H_{1}(T)$, we can express elements of $H_{1}(T)$ as linear combinations $\alpha [l]+\beta [m]$ for $\alpha, \beta\in \mathbb{Z}$. You can think of $m$ and $l$ as being these loops for now:

![[Screenshot 2026-07-09 at 23.50.46.png]]

However, bear in mind that any other basis  
$$
([l'],[m'])=(a[l]+b[m], c[l]+d[m])  
$$
with
$$
\begin{pmatrix}  
a&b\\  
c&d  
\end{pmatrix}\in GL(2,\mathbb Z)  
$$
is just as valid; there is nothing 'special' about these specific loops (for now). On an abstract torus, **all primitive bases are equivalent** under homeomorphisms.

# Oriented intersections

A $C^{\infty}$-manifold $M$ with boundary is **orientable** if it has an atlas such that the Jacobians of all transition maps have *positive* determinant.

A **surface** is a compact, connected, orientable $2$-manifold without boundary. 

A **simple closed curve** in a surface $S$ is a compact connected $1$-dimensional submanifold of $S$. 

Let $a, b:[0, 1]\to S$ be simple closed curves on an orientable surface $S$. We say that $a, b$ **intersect transversely** and write **$a\pitchfork b$** if for all $x\in a\cap b$, there exists a neighborhood $U$ of $x$ in $S$ and a local chart $\phi:U\to \Omega$ in the orientation of $S$ such that $a\cap b\cap U=\{ x \}$ and $D\phi(a'| _{x})\ne \lambda D\phi(b'|_{x})$. 

For any pair $(a, b)$ of simple closed curves in a surface $S$, $a$ can be isotoped to a simple closed curve $a'$ so that $a'\pitchfork b$ (via the transversality homotopy theorem). 

An **orientation** for a point $x\in a\cap b$ is the assignment of $\pm 1$ as the sign of the determinant $\det[D\phi(a'|_{x})\ \  D\phi(b'|_{x})]$. 

The sum of the orientations on points in $a\cap b$ is called the **oriented intersection number** of $a$ and $b$. 

> [!Theorem]
> Suppose that $a$, $b$, $a'$, $b'$ are oriented simple closed curves in an oriented surface $S$. Suppose further that $a$ is homotopic to $a'$, $b$ is homotopic to $b'$, $a\pitchfork b$, and $a'\pitchfork b'$. Then the oriented intersection number of $a$ and $b$ is equal to the oriented intersection number of $a'$ and $b'$. 


For homotopy classes $[a]$, $[b]$, the **oriented intersection number**, $[a]\cdot[b]$, is the oriented intersection number of transverse representatives of the classes. 

# Back to the torus

Orient the torus with normals facing outward. 

For our choice of $l, m$, we have $[l]\cdot[m]=1$, $[m]\cdot[l]=-1$. 

The $([l], [m])$-coordinates of a class $[c]\in H_{1}(T)$ can be obtained like so:
$$
[c]= ([c]\cdot[m])[l]+([c]\cdot[-l])[m]
$$

# The mapping class group

> [!Definition] Compact-open Topology
> Let $X$ and $Y$ be topological space, and let $C(X, Y)$ denote the set of all continuous maps between $X$ and $Y$. Given a compact subset $K\subseteq X$, and an open subset $U\subseteq Y$, let $V(K, U)$ denote the set of all functions $f\in C(X, Y)$ such that $f(K)\subseteq U$. Then the collection of all such $V(K, U)$ is a subbasis for the **compact-open topology** on $C(X, Y)$. 

> [!Proposition] 
> Let $S$ be a surface. Path components of $\text{Homeo}(S)$ correspond to isotopy classes of $\text{Homeo}(S)$, where $\text{Homeo}(S)$ has the [[#^a39cc2|compact-open topology]]. 


> [!Definition] Mapping Class Group
> Let $\text{Homeo}^{+}(S)$ be the group of *orientation-preserving* homeomorphisms $S\to S$ equipped with the compact-open topology. Let $\text{Homeo}_{0}(S)$ denote the path-component of $\text{Homeo}^{+}(S)$ that contains the identity. That is, $\text{Homeo}_{0}(S)$ is the set of elements that are isotopic to the identity. $\text{Homeo}_{0}(S)$ is a normal subgroup of $\text{Homeo}^{+}(S)$. The **mapping class group** of $S$ is defined to be the quotient
> $$
> \begin{align}
> \text{Mod}(S):=\text{Homeo}^{+}(S)/\text{Homeo}_{0}(S). 
> \end{align}
> $$
> 


> [!Lemma] Alexander Trick
> Suppose that $f:\mathbb{D}^{n}\to \mathbb{D}^{n}$ is a homeomorphism such that $f|_{\partial \mathbb{D}^{n}}$ is the identity. Then $f$ is isotopic to the identity. Specifically, the isotopy $H:\mathbb{D}^{n}\times I\to \mathbb{D}^{n}$ is given by
> $$
> \begin{align}
> H(\mathbf{x}, t)=\begin{cases}
> tf(\mathbf{x}/t) & 0\leqslant \lVert \mathbf{x} \rVert < t, \\
> \mathbf{x} & t\leqslant \lVert \mathbf{x} \rVert \leqslant  1.
> \end{cases}
> \end{align}
> $$
> 

![[-20261030154606385.jpg|247]]

> [!Lemma] Isotopy extension theorem for topological manifolds, @edwardsDeformationsSpacesImbeddings1971 1.4
> Let $h_{t}:N\to M$, $t\in I$, be an isotopy of a compact manifold $N$ into a manifold $M$. Then $h_{t}$ can be extended to an ambient isotopy of $M$, that is, there is an isotopy $H_{t}:M\to M$, $t\in I$, such that $H_{0}=1_{M}$ and $h_{t}=H_{t}h_{0}$ for all $t$. 


> [!Proposition] @schultensIntroduction3manifolds2014 2.6.2
> The mapping class group of the torus is isomorphic to $SL(2, \mathbb{Z})$. 


Given a homeomorphism $f\in \text{Homeo}(T)$, we define the matrix $A_{f}$, whose columns are the $([l], [m])$-coordinates of $[f(l)]$ and $[f(m)]$:
$$
A_{f}=\begin{bmatrix}
[f(l)]\cdot[m] & [f(m)]\cdot[m] \\
[f(l)]\cdot[-l] & [f(m)]\cdot[-l]
\end{bmatrix}
$$

Claims:
1. Since a homeomorphism $f:T\to T$ induces an automorphism $f_{*}$ of the homology group $H_{1}(T)$, we must have $A_{f}\in\text{Aut}(H_{1}(T))\cong GL(2, \mathbb{Z})$.
2. The map $\eta:f\mapsto A_{f}$ is a group homomorphism from $\text{Homeo}(T)$ to $GL(2, \mathbb{Z})$.
3. The matrix $A_{f}$ completely determines the isotopy class of $f$. 
	1. It suffices to show that if $A_{f}=I$, then $f$ is isotopic to $\mathrm{id}_{T}$ (if $A_{f_{1}}=A_{f_{2}}$, then $f_{1}f_{2}^{-1}\sim \mathrm{id}_{T}$, whence $f_{1}\sim f_{2}$). 
	2. Suppose $A_{f}=I$. Then, $f(m)$ is homotopic to $m$, and $f(l)$ is homotopic to $l$. 
	3. Lemma: for surfaces, homotopy classes of simple closed curves correspond to isotopy classes of simple closed curves. 
	4. So, we have $f(m)\sim m$, $f(l)\sim l$. 
	5. Using the isotopy extension theorem, we can extend the isotopy $f(m)\sim m$ to an isotopy of $f$ with a homeomorphism $f'$ that is the identity on $m$. 
	6. We now have $f'(l)\sim l$. We use the isotopy extension theorem again to produce an ambient isotopy between $f'$ and $f''$ that restricts to the identity on $m$ and to the isotopy $f'(l)\sim l$ on $f'(l)$. 
	7. Thus, we obtain an isotopy $f\sim f''$, where $f''$ restricts to the identity on $m$ and $l$. 
	8. Now consider the polygonal representation of $T$ with four sides that identify to $m\cup l$. Then $f''$ defines a map on this square $Q$ and $f''|_{\partial Q}=\mathrm{id}|_{\partial Q}$. By the Alexander trick, $f''\sim \mathrm{id}_{Q}$. 
4. It follows that $\eta$ descends to a monomorphism $H: \text{Mod}(\mathbb{T}^{2})\to GL(2, \mathbb{Z})$.
5. $H$ is an isomorphism onto $SL(2, \mathbb{Z})$ (which makes sense from a distance, since $f$ is orientation preserving). 
	1. Since $f$ is orientation preserving, we must have $1=[l]\cdot[m]=[f(l)]\cdot [f(m)]$. Expanding this out gives us the expression for $\det A_{f}$. Thus, $\mathrm{im}\,H\subseteq SL(2, \mathbb{Z})$. 
	2. We must also show that every $A\in SL(2, \mathbb{Z})$ is realized as $A_{f}$ for some $f$. 
		1. Let $q:\mathbb{R}^{2}\to \mathbb{R}^{2}/\mathbb{Z}^{2}$. Take $A\in SL(2, \mathbb{Z})$. Define $f_{A}:T\to T$ by $q(x)\mapsto q(Ax)$. Since $\det A=1$, $f_{A^{-1}}$ is well defined too, and $f_{A^{-1}}\circ f_{A}=f_{A}\circ f_{A^{-1}}=\mathrm{id}_{T}$. Hence $f_{A}$ is a homeomorphism. 


---
# A torus as the boundary of a solid torus

This is where "meridian" and "longitude" become meaningful.

Suppose  
$$
T=\partial(\mathbb{B}^2\times \mathbb{S}^1).
$$
The **meridian** of $T$ is now distinguished by the topology of the filling: it is the *unique primitive homology class that becomes trivial in the solid torus*.

Having fixed the meridian $[m]$, we say $[l]$ is a longitude if $[l]\cdot[m]=1$. Unlike the meridian, $[l]$ is **not unique**. If $[l]$ is a longitude, then so is  
$$
[l]+k[m],\quad k\in\mathbb Z. 
$$

---
# Lens Spaces

> [!Definition] Lens space
> Let $\mathbf{T}$ be a solid torus with $T=\partial \mathbf{T}$. Let $l, m$ be a choice of longitude and meridian for $T$. Let $[h]\in\text{Mod}(T)$ correspond to the singular matrix
> $$
> A_{h}=\begin{bmatrix}
> r & p \\
> s & q
> \end{bmatrix}=
> \begin{bmatrix}
> [f(l)]\cdot[m] & [f(m)]\cdot[m] \\
> [f(l)]\cdot[-l] & [f(m)]\cdot[-l]
> \end{bmatrix}
> $$
> Let $\mathbf{T}'$ be a copy of $\mathbf{T}$. We define the **lens space** $L(p, q)$ to be
> $$
> (\mathbf{T}\sqcup \mathbf{T}')/(a\sim f(a)').
> $$
> 

---
# Dehn twists

> [!Definition] Dehn twist
> Let $c$ be an orientation-preserving simple closed curve in a compact surface $S$ and let $N(c)$ be a regular neighborhood of $c$ that is oriented via the parameterization $i:\mathbb{S}^{1}\times[0, 1]\to \eta(c)$. A map $f:S\to S$ is called a **left Dehn twist** around $c$ if
> 1. $f|_{S\setminus N(c)}$ is the identity map; and
> 2. $f|_{N(c)}$ is the map of the annulus given by $f(e^{ 2i\pi\theta }, t)=(e^{ 2i\pi(\theta+t) }, t)$ for all $(e^{ 2i\pi\theta }, t)\in \mathbb{S}^{1}\times[0, 1]$. 
> 
> An analogous definition holds for **right Dehn twist**. 

A $k$-Dehn twist about the meridian has the matrix representation
$$
\begin{bmatrix}
1 & 0 \\
k & 1
\end{bmatrix}.
$$
Dehn twists about the meridian can be extended to homeomorphisms of the solid torus $\mathbf{T}$. *Dehn twists about the longitudinal curve do not*! For example, if the Dehn twist $m\mapsto m+l$ extended to a homeomorphism $h$ of $\mathbb{B}^{2}\times \mathbb{S}^{1}$, then $e=h_{*}(m)=m+l\ne e$!

So, given $\begin{bmatrix}r & p \\ s & q\end{bmatrix}\in\text{Mod}(T)$, we can precompose and postcompose by Dehn twists without altering the lens space. 
$$
\begin{align}
 & \begin{bmatrix}
r & p \\
s & q
\end{bmatrix}\begin{bmatrix}
1 & 0 \\
k & 1 
\end{bmatrix}=\begin{bmatrix}
r+kp & p \\
s+kq & q
\end{bmatrix} \\
 & \begin{bmatrix}
1 & 0 \\
k & 1 
\end{bmatrix}\begin{bmatrix}
r & p \\
s & q
\end{bmatrix}=\begin{bmatrix}
r & p \\
s+kr & q+kp
\end{bmatrix}
\end{align}
$$

These manifest as the following matrix operations:
- Adding a multiple of the second column to the first column
- Adding a multiple of the first row to the second row

This justifies our notation $L(p, q)$. 

---

# The fundamental group

To familiarize ourselves with Lens spaces, let us compute their fundamental groups. 

Recall the Seifert-Van Kampen Theorem:

```latex
% latex-id: 93c8-a04b-b0e7-4bff-9048
\begin{document}
% https://q.uiver.app/#q=WzAsNSxbMCwxLCJcXHBpXzEoVVxcY2FwIFYsIHApIl0sWzEsMCwiXFxwaV8xKFUsIHApIl0sWzEsMiwiXFxwaV8xKFYsIHApIl0sWzMsMSwiXFxwaV8xKFgsIHApIl0sWzEsMSwiXFxwaV8xKFUsIHApKlxccGlfMShWLCBwKSJdLFswLDEsImlfKiJdLFswLDIsImpfKiIsMl0sWzEsMywia18qIl0sWzIsMywibF8qIiwyXSxbMSw0LCIiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsyLDQsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzQsMywiXFxQaGkiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=
\[\begin{tikzcd} & {\pi_1(U, p)} && \\ {\pi_1(U\cap V, p)} & {\pi_1(U, p)*\pi_1(V, p)} && {\pi_1(X, p)} \\ & {\pi_1(V, p)} \arrow[hook, from=1-2, to=2-2] \arrow["{k_*}", from=1-2, to=2-4] \arrow["{i_*}", from=2-1, to=1-2] \arrow["{j_*}"', from=2-1, to=3-2] \arrow["\Phi"{description}, dashed, from=2-2, to=2-4] \arrow[hook, from=3-2, to=2-2] \arrow["{l_*}"', from=3-2, to=2-4] \end{tikzcd}\] 

\end{document}
```



> [!Theorem] Seifert-Van Kampen, @leeIntroductionTopologicalManifolds2011 10.2
> Let $X$ be a topological space. Suppose that $U, V\subseteq X$ are open subsets whose union is $X$, with $U, V$, and $U\cap V$ path-connected; let $p\in U\cap V$. 
> 
> Then the homomorphism $\Phi:\pi_{1}(U, p)*\pi_{1}(V, p)\to \pi_{1}(X, p)$ induced by the universal property of coproducts descends to an isomorphism from the [[The Seifert-Van Kampen Theorem#^a3e029|amalgamated free product]] $\pi_{1}(U, p)*_{\pi_{1}(U\cap V, p)}\pi_{1}(V, p)$ to $\pi_{1}(X, p)$. 

Consider the lens space determined by $\begin{bmatrix}r & p \\ s & q\end{bmatrix}\in\text{Mod}(T)$. By The $\epsilon$-neighborhood theorem, we can consider a regular neighborhood $N$ of $T$ in the total space. Let
$$
\begin{align}
U & = N\cup \mathbf{T}, \\
V  & = N\cup \mathbf{T}',  \\
U\cap V & =N.
\end{align}
$$
$N\cong T\times I$ has fundamental group isomorphic to $\mathbb{Z}^{2}$. Denote the generators of $N$ by $\{ l, m \}$. Let $l_{1}, m_{1}$ be the longitude and meridian for $T=\partial \mathbf{T}$, and let $l_{2}, m_{2}$ be the longitude and meridian for $T=\partial \mathbf{T}'$. Both $U$ and $V$ have fundamental groups isomorphic to $\mathbb{Z}$, generated by $l_{1}$ and $l_{2}$ respectively ($m_{1}$ and $m_{2}$ are nullhomotopic in $U$ and $V$). 

WLOG, we can assume $i_{*}(m)=m_{1}$ and $i_{*}(l)=l_{1}$.

We can now compute the relations in the amalgamated free product:
$$
\begin{align}
e=m_{1}  & = l_{2}^{p}m_{2}^{q}=l_{2}^{p}, \\
l_{1} & =l_{2}^{r}m_{2}^{s}=l_{2}^{r}.
\end{align}
$$
Thus, 
$$
\pi_{1}(L(p, q))=\langle l_{1}, l_{2}\ | \  l_{2}^{p}=e, l_{1}=l_{2}^{r} \rangle =\mathbb{Z}/p\mathbb{Z}.
$$


---

# Finally... examples

The first mathematician who mentioned lens spaces - this name wasn't introduced until 1931 (cf. below) - was W. Dyck. He did this in a talk delivered to the British Association for the Advancement of Science held in Montreal 1884 ([[Dyck1885](http://www.map.mpim-bonn.mpg.de/Lens_spaces:_a_history#Dyck1885)]). After describing the construction of 3-manifolds by identifying homeomorphic surfaces of handle bodies - today known as Heegard diagrams - in a rather general way, Dyck gave two examples. Take two solid tori and define the identifications of their surfaces by fixing the images of the meridians and the latitudinal curves of the first torus on the other. Two possibilities occur:

## L(0, 1)


Consider $\begin{bmatrix}1 & 0 \\ 0 & 1\end{bmatrix}\in\text{Mod}(T)$. 



## L(1, 0)



Consider $\begin{bmatrix}0 & 1 \\ -1 & 0\end{bmatrix}\in\text{Mod}(T)$. 


The torus in $S_{3}$ visualization. 


---

# The beachball model

Let $B=\partial B_{3}$. Let $\rho:\mathbb{R}^{3}\to \mathbb{R}^{3}$ denote reflection about the x-y plane, and $\gamma:\mathbb{R}^{3}\to \mathbb{R}^{3}$ denote rotation about the z axis by $2\pi q/p$. For $w\in B$, define the relation $w\sim \rho \circ\gamma(w)$. Then, 
$$
L(p, q)=B_{3}/\sim.
$$


---


# L(2, 1)

---

The three-dimensional lens spaces L ( p ; q ) ![{\displaystyle L(p;q)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/68df60e3037d25770e296892baaa2deb0fdd6e21) were introduced by [Heinrich Tietze](https://en.wikipedia.org/wiki/Heinrich_Tietze "Heinrich Tietze") in 1908. They were the first known examples of 3-manifolds which were not determined by their [homology](https://en.wikipedia.org/wiki/Homology_\(mathematics\) "Homology (mathematics)") and [fundamental group](https://en.wikipedia.org/wiki/Fundamental_group "Fundamental group") alone, and the simplest examples of closed manifolds whose homeomorphism type is not determined by their homotopy type. [J. W. Alexander](https://en.wikipedia.org/wiki/James_Waddell_Alexander_II "James Waddell Alexander II") in 1919 showed that the lens spaces L ( 5 ; 1 ) ![{\displaystyle L(5;1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cfd9ce0e942ad6e572d29bd9957dfd940fdbd090) and L ( 5 ; 2 ) ![{\displaystyle L(5;2)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d6f6f08598db6399c4e3e902ba6451cbf02ee30c) were not homeomorphic even though they have isomorphic fundamental groups and the same homology, though they do not have the same homotopy type. Other lens spaces (such as L ( 7 ; 1 ) ![{\displaystyle L(7;1)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/0ab9bbffd5a711455ab23795a83161b96bf01f88) and L ( 7 ; 2 ) ![{\displaystyle L(7;2)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/ab195d06b8e89498396f0ccf099f93c2c3bd3cd1) ) have even the same homotopy type (and thus isomorphic fundamental groups and homology), but not the same homeomorphism type; they can thus be seen as the birth of [geometric topology](https://en.wikipedia.org/wiki/Geometric_topology "Geometric topology") of manifolds as distinct from [algebraic topology](https://en.wikipedia.org/wiki/Algebraic_topology "Algebraic topology").

Reidemeister torsion was the first invariant in [algebraic topology](https://en.wikipedia.org/wiki/Algebraic_topology "Algebraic topology") that could distinguish between closed manifolds which are [homotopy equivalent](https://en.wikipedia.org/wiki/Homotopy_equivalent "Homotopy equivalent") but not [homeomorphic](https://en.wikipedia.org/wiki/Homeomorphic "Homeomorphic"), and can thus be seen as the birth of [geometric topology](https://en.wikipedia.org/wiki/Geometric_topology "Geometric topology") as a distinct field. It can be used to classify [lens spaces](https://en.wikipedia.org/wiki/Lens_space "Lens space").