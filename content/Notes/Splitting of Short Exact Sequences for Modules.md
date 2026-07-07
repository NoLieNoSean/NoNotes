---
id: "495"
date: 2026-07-06
time: 20:38
tags:
---
> [!Definition] Exact and Short Exact sequence
> Let $R$ be a commutative ring. A sequence of $R$-modules and $R$-linear maps
> $$
> N\xrightarrow{f}M\xrightarrow{g}P
> $$
> is called **exact** at $M$ if $\mathrm{im}\,f=\ker g$. 
> 
> A **short exact sequence** of $R$-modules is a sequence of $R$-modules and $R$-linear maps
> $$
> \begin{align}
> 0\xrightarrow{}N\xrightarrow{f}M\xrightarrow{g}P\xrightarrow{}0
> \end{align}
> $$
> which is exact at $N$, $M$, and $P$. 

^f76140

> [!Definition] Split Sequence
> A [[#^f76140|short exact sequence]]
> $$
> \begin{align}
> 0\xrightarrow{}N\xrightarrow{f}M\xrightarrow{g}P\xrightarrow{}0
> \end{align}
> $$
> is called **split** when there is an $R$-module isomorphism $\theta:M\to N\oplus P$ such that the diagram
> ```latex
> % latex-id: 9184-a295-e367-4573-9696
> \begin{document}
> % https://q.uiver.app/#q=WzAsMTAsWzAsMCwiMCJdLFsxLDAsIk4iXSxbMiwwLCJNIl0sWzMsMCwiUCJdLFs0LDAsIjAiXSxbMCwxLCIwIl0sWzEsMSwiTiJdLFsyLDEsIk5cXG9wbHVzIFAiXSxbMywxLCJQIl0sWzQsMSwiMCJdLFswLDFdLFs1LDZdLFsxLDIsImYiXSxbNiw3XSxbMSw2LCJcXG1hdGhybXtpZH0iLDJdLFsyLDMsImciXSxbMiw3LCJcXHRoZXRhIiwyXSxbMyw4LCJcXG1hdGhybXtpZH0iXSxbMyw0XSxbOCw5XSxbNyw4XV0=
> \[\begin{tikzcd} 0 & N & M & P & 0 \\ 0 & N & {N\oplus P} & P & 0 \arrow[from=1-1, to=1-2] \arrow["f", from=1-2, to=1-3] \arrow["{\mathrm{id}}"', from=1-2, to=2-2] \arrow["g", from=1-3, to=1-4] \arrow["\theta"', from=1-3, to=2-3] \arrow[from=1-4, to=1-5] \arrow["{\mathrm{id}}", from=1-4, to=2-4] \arrow[from=2-1, to=2-2] \arrow[from=2-2, to=2-3] \arrow[from=2-3, to=2-4] \arrow[from=2-4, to=2-5] \end{tikzcd}\] 
> 
> \end{document}
> ```
> 
> commutes, where the bottom maps to and from the direct sum are the standard embedding and projection. 

^ac830c

> [!Warning]
> Being split is not just saying there is an isomorphism $M\to N\oplus P$ of $R$-modules, but *how* the isomorphism works with the maps $f$ and $g$ in the exact sequence: commutativity of the diagram in [[#^ac830c]] says $f:N\to M$ behaves like the standard embedding $N\to N\oplus P$ and $g:M\to P$ behaves like the standard projection $N\oplus P\to P$. See @conradSPLITTINGSHORTEXACT 1.4 for an example of a nonsplit sequence where $M=N\oplus P$. 

> [!Theorem] @conradSPLITTINGSHORTEXACT 2.1
> Let $0\xrightarrow{}N\xrightarrow{f}M\xrightarrow{g}P\xrightarrow{}0$ be a short exact sequence of $R$-modules. Then following are equivalent:
> 1. There is an $R$-linear map $f':M\to N$ such that $f'(f(n))=n$ for all $n\in N$. 
> 2. There is an $R$-linear map $g':P\to M$ such that $g(g'(p))=p$ for all $p\in P$.  
> 3. The short exact sequence splits: there is an isomorphism $\theta:M\to N\oplus P$ such that the diagram in [[#^ac830c]] commutes. 

^0ea915

> [!Remark]
> If we replace $R$-modules with groups and $R$-linear maps with group homomorphisms, conditions (1) and (2) of [[#^0ea915]] are not equivalent: for a short exact sequence $1\xrightarrow{}H\xrightarrow{f}G\xrightarrow{g}K\xrightarrow{}1$, (1) corresponds to $G$ being a direct product of $H$ and $K$ while (2) corresponds to $G$ being a semidirect product of $H$ and $K$. The reason (1) and (2) are no longer equivalent for groups is related to noncommutativity. For an exact sequence of abelian groups, (1) and (2) are equivalent (this is the special case $R=\mathbb{Z}$, since abelian groups are $\mathbb{Z}$-modules).
