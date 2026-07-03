---
id: "480"
date: 2026-06-25
time: 00:06
tags:
---
> [!Abstract]
> [[Classification of compact surfaces#^d2add7|Isotopies]] are always homotopies. The converse is not true in general. However, for surfaces, we see that homotopy classes of simple closed curves correspond to isotopy classes of simple closed curves. 

# Oriented intersections

> [!Definition] Simple closed curve
> A **simple closed curve** in a surface $S$ is a compact connected $1$-dimensional submanifold of $S$ without boundary. A **simple arc** in a surface $S$ is a compact connected $1$-dimensional submanifold of $S$ with non-empty boundary. 

> [!Definition] Transverse intersection
> Let $a, b$ be simple closed curves in a surface $S$. We say that $a, b$ intersect **transversely** and write $a\pitchfork b$ if for all $x\in a \cap b$, there is a chart $(U_{\gamma}, \phi_{\gamma})$ with $\phi_{\gamma}(U_{\gamma})=\mathbb{R}^{2}$ such that $\phi_{\gamma}$ maps $x$ to $(0, 0)$, $a$ to the $x$-axis, and $b$ to the $y$-axis. 

Note:
1. For an [[Differentiable manifolds#^dbdef9|oriented]] surface $S$, the chart $(U_{\gamma}, \phi_{\gamma})$ can always be chosen to be in the orientation of $S$. 
2. For any pair $(a, b)$ of simple closed curves in a surface $S$, $a$ can be isotoped to a simple closed curve $a'$ so that $a'\pitchfork b$ (see [[Transversality#^c993d4]]). 
3. If $a$ and $b$ are simple closed curves such that $a\pitchfork b$, then $a\cap b$ is a discrete compact space, and hence finite. 

> [!Definition] Oriented intersections
> Let $a, b$ be oriented simple closed curves in the oriented surface $S$ such that $a\pitchfork b$. An **orientation** for a point $x\in a\cap b$ is the assignment of $\pm 1$ obtained as follows: Let $(U_{\gamma}, \phi_{\gamma})$ be a chart in the orientation of $S$ with $\phi_{\gamma}(U_{\gamma})=\mathbb{R}^{2}$ such that $\phi_{\gamma}$ maps $x$ to $(0, 0)$, $a$ to the $x$-axis, $b$ to the $y$-axis. If $\phi_{\gamma\ | \ a}$ and $\phi_{\gamma\ | \ b}$ are both [[Differentiable manifolds#^51ad4d|orientation-preserving]] or both orientation-reversing, then the orientation on $x$ is $+1$. Otherwise, it is $-1$. 

> [!Definition] Oriented Intersection Number
> Let $a, b$ be oriented simple closed curves in the oriented surface $S$ such that $a\pitchfork b$. The sum of the orientations on points in $a\cap b$ is called the **oriented intersection number** of $a$ and $b$. 

> [!Theorem]
> Suppose that $a$, $b$, $a'$, $b'$ are oriented simple closed curves in an oriented surface $S$. Suppose further that $a$ is homotopic to $a'$, $b$ is homotopic to $b'$, $a\pitchfork b$, and $a'\pitchfork b'$. Then the oriented intersection number of $a$ and $b$ is equal to the oriented intersection number of $a'$ and $b'$. 

> [!Definition] Oriented intersection number for homotopy classes
> For homotopy classes $[a]$, $[b]$, the **oriented intersection number**, $[a]\cdot[b]$, is the oriented intersection number of transverse representatives of the classes. 

---

# Homotopy Classes on Surfaces are Isotopy Classes


> [!Definition] Filling curves
> Let $F$ be a surface and let $\mathcal{C}=\{ c_{1}, \dots, c_{n} \}$ be a collection of simple closed curves in $F$ that have been isotoped to intersect in a minimal number of points. We say that $\mathcal{C}$ is **filling** if $F\setminus(c_{1}\cup\dots \cup c_{n})$ is a union of disks. 

> [!Example]
> The pair of curves (usually denoted by $\{ l, m \}$) on $\mathbb{T}^{2}$ pictured below is filling. 
> ![[-20260702175058733.jpg|400]]

^d60470

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

^3cebcd

> [!Lemma] Isotopy extension theorem for topological manifolds, @edwardsDeformationsSpacesImbeddings1971 1.4
> Let $h_{t}:N\to M$, $t\in I$, be an isotopy of a compact manifold $N$ into a manifold $M$. Then $h_{t}$ can be extended to an ambient isotopy of $M$, that is, there is an isotopy $H_{t}:M\to M$, $t\in I$, such that $H_{0}=1_{M}$ and $h_{t}=H_{t}h_{0}$ for all $t$. 

^397fe5

> [!Theorem] @schultensIntroduction3manifolds2014 2.5.4
> Suppose that $F$ is a closed orientable surface and $h:F\to F$ is a homeomorphism. If $h$ is homotopic to the identity, then $h$ is isotopic to the identity. 
> 
> > [!Proof]-
> > 
> > Schultens provides a proof for $\mathbb{T}^{2}$; she starts by considering an arbitrary homeomorphism $h:F\to F$ that is homotopic to the identity. For any simple closed curve $c$, we may replace $c$ with an isotopic curve $c'$[^1] such that $c'\pitchfork h(c)$ by [[Transversality#^c993d4]]. We then show that $c'$ is in fact isotopic to $h(c)$ (from which it follows that $c$ is isotopic to $h(c)$). We next apply this to the curve $m$ from [[Homotopy and Isotopy on Surfaces#^d60470]] to obtain an isotopy between $m$ and $h(m)$. 
> > 
> > Schultens now surreptitiously invokes [[#^397fe5|the isotopy extension theorem]] to extend the isotopy of $h(m)$ with $m$ to an isotopy of $h$ with a homeomorphism which restricts to the identity on $m$. We then show that this homeomorphism can further be isotoped to a homeomorphism $\varphi$ which fixes $l$. We now lift $\varphi$ up the quotient, apply the [[#^3cebcd|Alexander trick]][^2] to obtain an isotopy to $\mathrm{id}_{I^{2}}$, and note that the isotopy descends down to one between $\varphi$ and $\mathrm{id}_{\mathbb{T}^{2}}$. 
> 


[^1]: Schultens just replaces the symbol $c$ with $c'$ when she goes "We may assume that $c\pitchfork h(c)$", which threw me off on my first read (I thought we were replacing the map $h$, not the curves). 

[^2]: I wonder why it's called a *trick*? 
