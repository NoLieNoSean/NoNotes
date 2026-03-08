---
id: "419"
date: 2026-02-20
time: 11:50
tags:
  - Lecture
  - ALG4
---
# The tensor algebra

Recall what [[Category Theory Preliminaries II#^a625a6|adjoint]] functors are; we've seen that tensor and $\text{Hom}$ are adjoint.

> [!Example]
> Here's another example: Let $\textsf{D}=R\textsf{-Mod}$, $\textsf{C}=\textsf{Set}$. Let $\mathscr{G}: \textsf{D}\to \textsf{C}$ be the forgetful functor. Then, $\mathscr{G}$ has a left adjoint, namely the free functor $\mathscr{F}: \textsf{C}\to \textsf{D}$ defined by $S\mapsto F(S)$, where $F^{R}(S)$ is the [[LEC ALG4 2#^552c68|free module]] on $S$. 
> $$
> \text{Hom}_{R\textsf{-Mod}}(F^{R}(S), M)\cong \text{Hom}_{\textsf{Set}}(S, M).  
> $$

Now, consider, $R\textsf{-AAlg}$, the category of associative $R$-algebras. It is a subcategory of $R\textsf{-Mod}$. Suppose that $A\in R\textsf{-AAlg}$, $M\in R\textsf{-Mod}$. Does there exist a left adjoint $T:R\textsf{-Mod}\to R\textsf{-AAlg}$ to the forgetful functor $R\textsf{-AAlg}\to R\textsf{-Mod}$, so that
$$
\text{Hom}_{R\textsf{-AAlg}}(T(M), A)\cong \text{Hom}_{R\textsf{-Mod}}(M, A)?
$$

> [!Definition] Tensor algebra
> Define
> $$
> T^{n}(M):=\begin{cases}
> R  & n=0\\
> M  & n=1\\
> \underbrace{ M\otimes\dots \otimes M }_{ n\text{ fold} } &  n\geqslant  2
> \end{cases}
> $$
> $$
> T(M)=\bigoplus_{n\geqslant  0} T^{n}(M).
> $$

> [!Proposition]
> With addition inherited from the $R$-module structure of $T^{n}(M)$ for $n\geqslant 0$ and multiplication defined by
> $$
> \underbrace{ (x_{1}\otimes \dots \otimes x_{n}) }_{ \in T^{n}(M) }\cdot\underbrace{ (x_{n+1}\otimes \dots \otimes x_{n+m}) }_{ \in T^{m}(M) }=\underbrace{ x_{1}\otimes \dots \otimes x_{n+m} }_{ \in T^{n+m}(M) }
> $$
> and extended $R$-linearly, $T(M)$ is an associative $R$-algebra with structure map $R=T^{0}(M)\subseteq T(M)$. 

> [!Proposition] Universal property of tensor algebras
> Let $A\in R\textsf{-AAlg}$, $M\in R\textsf{-Mod}$, $\varphi\in \text{Hom}_{R\textsf{-Mod}}(M, A)$. Then there exists unique $\Phi\in \text{Hom}_{R\textsf{-AAlg}}(T(M), A)$ such that the following diagram commutes:
> 
> ```latex
> % latex-id: d936-7c2f-e059-41d8-a8b9
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwxLCJNIl0sWzEsMCwiQSJdLFswLDAsIlQoTSkiXSxbMCwxLCJcXHZhcnBoaSIsMl0sWzAsMiwiIiwwLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMiwxLCJcXGV4aXN0cyFcXFBoaSJdXQ== 
> \[\begin{tikzcd} {T(M)} & A \\ M \arrow["{\exists!\Phi}", from=1-1, to=1-2] \arrow[hook', from=2-1, to=1-1] \arrow["\varphi"', from=2-1, to=1-2] \end{tikzcd}\]
> \end{document}
> ```
> 
> 