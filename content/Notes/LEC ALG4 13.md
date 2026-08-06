---
id: "419"
date: 2026-02-20
time: 11:50
tags:
  - Lecture
  - ALG4
---
# The Tensor Algebra

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

> [!Definition] The Tensor Algebra
> Define $R$-modules
> $$
> T^{n}(M):=\begin{cases}
> R  & n=0\\
> M  & n=1\\
> \underbrace{ M\otimes\dots \otimes M }_{ n\text{ fold} } &  n\geqslant  2
> \end{cases}
> $$
> $$
> T(M):=\bigoplus_{n\geqslant  0} T^{n}(M).
> $$
> With multiplication defined by
> $$
> \underbrace{ (x_{1}\otimes \dots \otimes x_{n}) }_{ \in T^{n}(M) }\cdot\underbrace{ (x_{n+1}\otimes \dots \otimes x_{n+m}) }_{ \in T^{m}(M) }=\underbrace{ x_{1}\otimes \dots \otimes x_{n+m} }_{ \in T^{n+m}(M) }
> $$
> and extended $R$-linearly ([[LEC ALG4 12#^3e8e97|recall]] that elementary tensors generate $T^{n}(M)$ for each $n$), $T(M)$ is an associative $R$-algebra with structure map $R=T^{0}(M)\subseteq T(M)$. 

^e1cc97

> [!Proposition] Universal property of tensor algebras
> Let $A\in R\textsf{-AAlg}$, $M\in R\textsf{-Mod}$, $\varphi\in \text{Hom}_{R\textsf{-Mod}}(M, A)$. Then there exists unique $\Phi\in \text{Hom}_{R\textsf{-AAlg}}(T(M), A)$ such that the following diagram commutes:
> 
> ```latex
> % latex-id: d936-7c2f-e059-41d8-a8b9
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwwLCJ7TX0iXSxbMCwxLCJUKCBNKSJdLFsxLDAsIkEiXSxbMCwyLCJcXHZhcnBoaSJdLFswLDEsIiIsMix7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoidG9wIn19fV0sWzEsMiwiXFxleGlzdHMhXFxQaGkiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifX19XV0= 
> \[\begin{tikzcd} {{M}} & A \\ {T( M)} \arrow["\varphi", from=1-1, to=1-2] \arrow[hook, from=1-1, to=2-1] \arrow["{\exists!\Phi}"', dashed, from=2-1, to=1-2] \end{tikzcd}\]  
> \end{document}
> ```
> 

More stuff here