---
id: "465"
date: 2026-06-12
time: 11:38
tags:
---
> [!Definition] Amalgamated free product
> Suppose $H$, $G_{1}$, and $G_{2}$ are groups, and $f_{1}:H\to G_{1}$ and $f_{2}:H\to G_{2}$ are homomorphisms. The **amalgamated free product of $G_{1}$ and $G_{2}$ along $H$**, denoted by $G_{1}*_{H}G_{2}$ is the quotient group $(G_{1}*G_{2})/\overline{C}$, where $C$ is the set $\{ f_{1}(g)f_{2}(g)^{-1}:g\in H \}$. 

> [!Theorem] Van-Kampen
> Let $X$ be a topological space. Suppose that $U, V\subseteq X$ are open subsets whose union is $X$, with $U, V$, and $U\cap V$ path-connected. Let $p\in U\cap V$, and define a subset $C\subseteq \pi_{1}(U, p)*\pi_{1}(V, p)$ by
> $$
> C=\{ (i_{*}\gamma)(j_{*}\gamma)^{-1}:\gamma\in \pi_{1}(U\cap V, p) \}.
> $$
> Then the homomorphism $\Phi:\pi_{1}(U, p)*\pi_{1}(V, p)\to \pi_{1}(X, p)$ induced by the universal property of coproducts descends to an isomorphism of the amalgamated free product $\pi_{1}(U, p)*_{\pi_{1}(U\cap V, p)}\pi_{1}(V, p)$ to $\pi_{1}(X, p)$. 

^faa3c4

## Special cases

[!Corollary]
Assume the hypothesis of [[The Van-Kampen Theorem#^faa3c4]], and suppose in addition that $U$ is simply connected. Then the inclusion $l:V\hookrightarrow X$ induces an isomorphism
$$
\pi_{1}(X, p)\cong \pi_{1}(V, p)/\overline{j_{*}\pi_{1}(U\cap V, p)},
$$
where $\overline{j_{*}\pi_{1}(U\cap V, p)}$ is the normal closure of $j_{*}\pi_{1}(U\cap V, p)$ 