---
id: "397"
date: 2026-01-27
time: 12:27
tags:
  - TOP
  - Processed
---
> [!Definition] Quotient map
> 1. Let $X$ and $Y$ be topological spaces, let $p:X\to Y$ be a surjective map. The map $p$ is said to be a **quotient map** provided a subset $U$ of $Y$ is open in $Y$ iff $p ^{-1}(U)$ is open in $X$. 
> 2. We say that a subset $C$ of $X$ is **saturated** with respective to a surjective map $p:X\to Y$ if $C$ is a union of sets of the form $p ^{-1}(\{ y \})$ for $y\in Y$. Thus, $p$ is a quotient map iff it is *continuous* and *maps saturated open sets of $X$ to open sets of $Y$*. 

Clearly, surjective continuous open/closed maps are quotient maps. 

> [!Example] quotient map which is neither open nor closed
> Let $\pi_{1}:\mathbb{R}\times \mathbb{R}\to \mathbb{R}$ be projection on the first coordinate. Let $A$ be the subspace of $\mathbb{R}\times\mathbb{R}$ consisting of all points $x \times y$ for which either $x\geqslant 0$ or $y=0$ (or both). Let $q:A\to \mathbb{R}$ be obtained by restricting $\pi_{1}$. Then, $B(1, (0, 1))\cap A$ is an open set in $A$ which is mapped to $[0, 1)$ by $q$; Finding a closed set whose image is not closed is easy. 

^3b95fe

> [!Definition] Quotient topology
> If $X$ is a space and $A$ is a set and if $p:X\to A$ is a surjective map, then  there exists exactly one topology $\mathcal{T}$ on $A$ relative to which $p$ is a quotient map (==open sets are exactly the images of saturated open sets==); it is called the **quotient topology** induced by $p$. 

^4fa85d

> [!Definition] Quotient space
> Let $X$ be a topological space, and let $X^{*}$ be a partition of $X$ into disjoint subsets whose union is $X$. Let $p:X\to X^{*}$ be the surjective map that carries each point of $X$ to the element of $X^{*}$ containing it. In the quotient topology induced by $p$, the space $X^{*}$ is called a **quotient space** of $X$. 

[[#^3b95fe]] shows that a restriction a of quotient map to a subspace need not be a quotient map. 

> [!Proposition]
> Let $p:X\to Y$ be a quotient map; let $A$ be a subspace of $X$ that is saturated with respect to $p$. Let $q:A\to p(A)$ be the map obtained by restricting $p$. 
> 1. If $A$ is either open or closed in $X$, then $q$ is a quotient map. 
> 2. If $p$ is either an open map or a closed map, then $q$ is a quotient map. 

Note:
1. The composite of two quotient maps is a quotient map. 
2. The product of two quotient maps need *not* be a quotient map. 
3. Even if $X$ is Hausdorff, the quotient space $X^{*}$ need *not* be Hausdorff. 

> [!Theorem] Characterization of quotient maps, @leeIntroductionTopologicalManifolds2000 3.31
> Let $X$ and $Y$ be topological spaces, and let $\pi:X\to Y$ be any surjective map. Then $\pi$ is a quotient map iff the following property holds: For any topological space $B$, an map $f:Y\to B$ is continuous iff the composite map $f\circ \pi$ is continuous. 
> 
> ```latex
> % latex-id: b40b-e323-1d38-452c-a49d
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwwLCJYIl0sWzAsMSwiWSJdLFsxLDEsIkIiXSxbMCwxLCJcXHBpIiwyXSxbMCwyLCJmXFxjaXJjIFxccGkiXSxbMSwyLCJmIiwyXV0= 
> \[\begin{tikzcd} X & \\ Y & B \arrow["\pi"', from=1-1, to=2-1] \arrow["{f\circ \pi}", from=1-1, to=2-2] \arrow["f"', from=2-1, to=2-2] \end{tikzcd}\]
> \end{document}
> ```
> 

The following theorem shows that quotient spaces are uniquely determined up to homeomorphism by the identifications made by their quotient maps. 
 
> [!Theorem] Uniqueness of Quotient Spaces, @leeIntroductionTopologicalManifolds2000 3.32
> Suppose $\pi_{1}:X\to Y_{1}$ and $\pi_{2}:X\to Y_{2}$ are quotient maps that make the same identifications. Then there is a unique homeomorphism $\varphi:Y_{1}\to Y_{2}$ such that $\varphi \circ \pi_{1}=\pi_{2}$. 

> [!Theorem] Passing to the quotient
> Let $p:X\to Y$ be a quotient map. Let $Z$ be a space and let $g:X\to Z$ be a map which is constant on the fibers of $p$. Then $g$ induces a map $f:Y\to Z$ such that $f\circ p=g$. The induced map $f$ is continuous iff $g$ is continuous; $f$ is a quotient map iff $g$ is a quotient map. 
> 
> ```latex
> % latex-id: 5a65-67a6-1328-4795-8839
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwwLCJYIl0sWzAsMSwiWSJdLFsxLDEsIloiXSxbMCwxLCJwIiwyXSxbMSwyLCJmIiwyLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn19fV0sWzAsMiwiZyJdXQ== 
> \[\begin{tikzcd} X & \\ Y & Z \arrow["p"', from=1-1, to=2-1] \arrow["g", from=1-1, to=2-2] \arrow["f"', dashed, from=2-1, to=2-2] \end{tikzcd}\]
> \end{document}
> ```
> 
> > [!Proof]-
> > 
> > For each $y\in Y$, define $f(y):=g( p ^{-1}(\{ y \}))$. Clearly, $f\circ p=g$. If $f$ is continuous, $g$ is continuous. Conversely, suppose $g$ is continuous. Given an open set $V$ of $Z$, $g^{-1}(V)$ is open in $X$. But $g^{-1}(V)=p^{-1}(f^{-1}(V))$; because $p$ is a quotient map, it follows that $f^{-1}(V)$ is open in $Y$. Hence $f$ is continuous. 
> > 
> > If $f$ is a quotient map, $g$ is the composite of two quotient maps and is thus a quotient map. Conversely, suppose that $g$ is a quotient map. Since $g$ is surjective, so is $f$. Let $V\subseteq Z$. Suppose $f^{-1}(V)$ is open in $Y$. Now the set $p ^{-1}(f ^{-1}(V))$ is open in $X$ since $p$ is continuous. Since this set equals $g^{-1}(V)$, the latter is open in $X$. Because $g$ is a quotient map, $V$ is open in $Z$. 
> 

^461a5c

#q Is this even a universal property??


> [!Corollary]
> Let $g:X\to Z$ be a surjective continuous map. Let $X^{*}$ be the collection of fibers of $g$. Give $X^{*}$ the quotient topology. Then, the map $g$ induces a bijective continuous map $f:X^{*}\to Z$, which is a homeomorphism iff $g$ is a quotient map. If $Z$ is Hausdorff, so is $X^{*}$. 
> 
> ```latex
> % latex-id: ec84-3fdf-21a1-490a-8a99
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwwLCJYIl0sWzAsMSwiWF57Kn0iXSxbMSwxLCJaIl0sWzAsMSwicCIsMl0sWzEsMiwiZiIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFswLDIsImciXV0= 
> \[\begin{tikzcd} X & \\ {X^{*}} & Z \arrow["p"', from=1-1, to=2-1] \arrow["g", from=1-1, to=2-2] \arrow["f"', dashed, from=2-1, to=2-2] \end{tikzcd}\]
> \end{document}
> ```

