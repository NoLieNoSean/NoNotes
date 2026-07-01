---
id: "465"
date: 2026-06-12
time: 11:38
tags:
---
> [!Abstract]
> The Seifert-Van Kampen theorem gives a formula for the fundamental group of a space that can be decomposed as the union of two open, path-connected subsets whose intersection is also path-connected. 


Let $X$ be a topological space, let $U, V\subseteq X$ be open subsets whose union is $X$ and whose intersection is nonempty, and choose any base point $p\in U\cap V$. The four inclusion maps

```latex
% latex-id: aace-6d36-9c62-4a30-8e2a
\begin{document}
% https://q.uiver.app/#q=WzAsNCxbMCwxLCJVXFxjYXAgViJdLFsxLDAsIlUiXSxbMSwyLCJWIl0sWzIsMSwiWCJdLFswLDEsImkiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFswLDIsImoiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsxLDMsImsiLDAseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsyLDMsImwiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dXQ== 
\[\begin{tikzcd} & U & \\ {U\cap V} && X \\ & V \arrow["k", hook, from=1-2, to=2-3] \arrow["i", hook, from=2-1, to=1-2] \arrow["j"', hook, from=2-1, to=3-2] \arrow["l"', hook, from=3-2, to=2-3] \end{tikzcd}\]
\end{document}
```

[[Homotopy, Covering Spaces and the Fundamental Group#^3d339c|induce]] fundamental group homomorphisms

```latex
% latex-id: b5bc-3696-c284-4c06-8b2d
\begin{document}
% https://q.uiver.app/#q=WzAsNCxbMCwxLCJcXHBpXzEoVVxcY2FwIFYsIHApIl0sWzEsMCwiXFxwaV8xKFUsIHApIl0sWzEsMiwiXFxwaV8xKFYsIHApIl0sWzIsMSwiXFxwaV8xKFgsIHApIl0sWzAsMSwiaV8qIl0sWzAsMiwial8qIiwyXSxbMSwzLCJrXyoiXSxbMiwzLCJsXyoiLDJdXQ==
\[\begin{tikzcd} & {\pi_1(U, p)} & \\ {\pi_1(U\cap V, p)} && {\pi_1(X, p)} \\ & {\pi_1(V, p)} \arrow["{k_*}", from=1-2, to=2-3] \arrow["{i_*}", from=2-1, to=1-2] \arrow["{j_*}"', from=2-1, to=3-2] \arrow["{l_*}"', from=3-2, to=2-3] \end{tikzcd}\] 

\end{document}
```

Insert the free product group $\pi_{1}(U, p)*\pi_{1}(V, p)$ in the middle. By the universal property of coproducts, $k_{*}$ and $l_{*}$ induce a homomorphism $\Phi:\pi_{1}(U, p)*\pi_{1}(V, p)\to \pi_{1}(X, p)$ such that the following diagram commutes:

```latex
% latex-id: 93c8-a04b-b0e7-4bff-9048
\begin{document}
% https://q.uiver.app/#q=WzAsNSxbMCwxLCJcXHBpXzEoVVxcY2FwIFYsIHApIl0sWzEsMCwiXFxwaV8xKFUsIHApIl0sWzEsMiwiXFxwaV8xKFYsIHApIl0sWzMsMSwiXFxwaV8xKFgsIHApIl0sWzEsMSwiXFxwaV8xKFUsIHApKlxccGlfMShWLCBwKSJdLFswLDEsImlfKiJdLFswLDIsImpfKiIsMl0sWzEsMywia18qIl0sWzIsMywibF8qIiwyXSxbMSw0LCIiLDIseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6InRvcCJ9fX1dLFsyLDQsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzQsMywiXFxQaGkiLDEseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0=
\[\begin{tikzcd} & {\pi_1(U, p)} && \\ {\pi_1(U\cap V, p)} & {\pi_1(U, p)*\pi_1(V, p)} && {\pi_1(X, p)} \\ & {\pi_1(V, p)} \arrow[hook, from=1-2, to=2-2] \arrow["{k_*}", from=1-2, to=2-4] \arrow["{i_*}", from=2-1, to=1-2] \arrow["{j_*}"', from=2-1, to=3-2] \arrow["\Phi"{description}, dashed, from=2-2, to=2-4] \arrow[hook, from=3-2, to=2-2] \arrow["{l_*}"', from=3-2, to=2-4] \end{tikzcd}\] 

\end{document}
```


> [!Definition] Amalgamated free product
> Suppose $H$, $G_{1}$, and $G_{2}$ are groups, and $f_{1}:H\to G_{1}$ and $f_{2}:H\to G_{2}$ are homomorphisms. The **amalgamated free product of $G_{1}$ and $G_{2}$ along $H$**, denoted by $G_{1}*_{H}G_{2}$ is the quotient group $(G_{1}*G_{2})/\overline{C}$, where $C$ is the set $\{ f_{1}(g)f_{2}(g)^{-1}:g\in H \}\subseteq G_{1}*G_{2}$ and $\overline{C}$ is the [[LEC ALG2 13#^82859e|normal closure]] of $C$ in $G_{1}*G_{2}$.

^a3e029

> [!Theorem] Seifert-Van Kampen, @leeIntroductionTopologicalManifolds2011 10.2
> Let $X$ be a topological space. Suppose that $U, V\subseteq X$ are open subsets whose union is $X$, with $U, V$, and $U\cap V$ path-connected; let $p\in U\cap V$. 
> 
> Then the homomorphism $\Phi:\pi_{1}(U, p)*\pi_{1}(V, p)\to \pi_{1}(X, p)$ induced by the universal property of coproducts descends to an isomorphism from the [[The Seifert-Van Kampen Theorem#^a3e029|amalgamated free product]] $\pi_{1}(U, p)*_{\pi_{1}(U\cap V, p)}\pi_{1}(V, p)$ to $\pi_{1}(X, p)$. 

^faa3c4

## Special cases

Most of our applications of the Seifert-Van Kampen theorem are in special cases in which one of the sets $U$, $V$, or $U\cap V$ is simply connected. 

The first case is that in which $U\cap V$ is simply connected. In this case, $\pi_{1}(U\cap V)$ becomes trivial, so the amalgamated free product is equal to the free product:

> [!Corollary]
> Assume the hypothesis of [[The Seifert-Van Kampen Theorem#^faa3c4]], and suppose in addition that $U\cap V$ is simply connected. Then $\Phi$ is an isomorphism between $\pi_{1}(U, p)*\pi_{1}(V, p)$ and $\pi_{1}(X, p)$. 

The other special case is that in which one of the open subsets, say $U$, is simply connected. In this case, $\pi_{1}(U, p)$ is trivial, so the diagram collapses to

```latex
% latex-id: 01f3-e6dd-f7d0-4e1e-82a8
\begin{document}
% https://q.uiver.app/#q=WzAsMyxbMCwwLCJcXHBpXzEoVVxcY2FwIFYsIHApIl0sWzEsMCwiXFxwaV8xKFYsIHApIl0sWzIsMCwiXFxwaV8xKFgsIHApIl0sWzEsMiwibF8qIl0sWzAsMSwial8qIl1d
\[\begin{tikzcd} {\pi_1(U\cap V, p)} & {\pi_1(V, p)} & {\pi_1(X, p)} \arrow["{j_*}", from=1-1, to=1-2] \arrow["{l_*}", from=1-2, to=1-3] \end{tikzcd}\] 

\end{document}
```


> [!Corollary]
> Assume the hypothesis of [[The Seifert-Van Kampen Theorem#^faa3c4]], and suppose in addition that $U$ is simply connected. Then the inclusion $l:V\hookrightarrow X$ induces an isomorphism
> $$
> \pi_{1}(X, p)\cong \pi_{1}(V, p)/\overline{j_{*}\pi_{1}(U\cap V, p)},
> $$
> where $\overline{j_{*}\pi_{1}(U\cap V, p)}$ is the normal closure of $j_{*}\pi_{1}(U\cap V, p)$. 

---


# An Application: Wedge Sums

> [!Definition] Wedge sum, @leeIntroductionTopologicalManifolds2011 p. 255
> 
> A point $p$ in a topological space $X$ is said to be a **nondegenerate base point** if $p$ has a neighborhood that admits a [[Deformation Retracts and Homotopy Type#^136a06|strong deformation retraction]] onto $p$ [^1]. 
> 
> Let $(X_{1}, p_{1}), \dots, (X_{n}, p_{n})$ be pointed topological spaces with nondegenerate base points. Their **wedge sum**, denoted by $(X_{1}, p_{1})\vee\dots \vee(X_{n}, p_{n})$ or $X_{1}\vee\dots \vee X_{n}$, is defined as the [[Notes/The Quotient Topology#^a08554|quotient]] of $\coprod_{j}X_{j}$ by the equivalence relation $p_{1}\sim\dots\sim p_{n}$. 
> 
> Observe that the inclusion of $X_{j}$ into $\coprod_{j}X_{j}$ followed by projection onto the quotient induces injective maps $i_{j}:X_{j}\to X_{1}\vee\dots \vee X_{n}$; each of these maps is an embedding. Thus, we can consider $X_{j}$ as a subspace of the wedge sum. We let $*$ denote the point in the wedge sum that is the equivalence class of the base points; it is a nondegenerate base point of the wedge sum. 

[^1]: For example, the point $(0, 0)$ of the [Hawaiian Earring](https://en.wikipedia.org/wiki/Hawaiian_earring) is not a nondegenerate base point. 


> [!Theorem] @leeIntroductionTopologicalManifolds2011
> Let $X_{1}, .., X_{n}$ be spaces with nondegenerate base points $p_{j}\in X_{j}$. The map
> $$
> \Phi:\pi_{1}(X_{1}, p_{1})*\dots*\pi_{1}(X_{n}, p_{n})\to \pi_{1}(X_{1}\vee\dots \vee X_{n}, *)
> $$
> induced by $i_{j_{*}}:\pi_{1}(X_{j}, p_{j})\to \pi_{1}(X_{1}\vee\dots \vee X_{n}, *)$ is an isomorphism. 

For example, the fundamental group of the figure eight space, which is $S_{1}\vee S_{1}$, is $F(\{ x, y \})$, the free group on two elements. 



