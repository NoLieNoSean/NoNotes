---
id: "439"
date: 2026-03-27
time: 14:44
tags:
draft: false
---

> [!Definition] Fiber Bundle, @weissteinFiberBundle
> A **fiber bundle**, or just **bundle**, is a quartet $(E, F, B, p)$ where $E$ (the **total space**), $F$ (the **fiber**), and $B$ (the **base space**) are topological spaces and $p:E\to B$ is a continuous map satisfying the following condition: each $b\in B$ has a neighborhood $U$ with $p^{-1}(U)$ homeomorphic to $U\times F$ via $h:p ^{-1}(U)\to U\times F$ such that 
> 
> ```latex
> 
> % latex-id: 3f26-4fce-3738-42b4-ba27
> \begin{document}
> % https://q.uiver.app/#q=WzAsMyxbMCwwLCJwXnstMX0oVSkiXSxbMSwwLCJVXFx0aW1lcyBGIl0sWzEsMSwiVSJdLFswLDIsInAiLDJdLFsxLDIsIlxccGlfVSJdLFswLDEsImgiXV0= 
> \[\begin{tikzcd} {p^{-1}(U)} & {U\times F} \\ & U \arrow["h", from=1-1, to=1-2] \arrow["p"', from=1-1, to=2-2] \arrow["{\pi_U}", from=1-2, to=2-2] \end{tikzcd}\]
> \end{document}
> ```
> commutes. 
> 
> The homeomorphisms $h$ are called **local trivializations** for the fiber bundle $p$. Bundles with fiber $F$ are called **$F$-bundles**. 

^a3d022

In other words, $E$ looks like the product $B\times F$ (at least locally), except that the fibers $p^{-1}(x)$ for $x\in B$ may be "twisted".

A simple nontrivial example is the Möbius strip, which is a nontrivial fiber bundle over the circle with fiber $I$ (note that you can't think of the Möbius strip as an $\mathbb{S}^{1}$ bundle over $I$!). 

> [!Definition] Isomorphism of bundles
> Suppose that $(E, F, B, p)$ and $(E', F, B', p')$ are $F$-bundles. An **isomorphism** between the bundles is a pair of homeomorphisms $h:E\to E'$ and $f:B\to B'$ such that the following diagram commutes:
> 
> ```latex
> % latex-id: 5f5d-7d6e-7c90-49f7-bce4
> \begin{document}
> % https://q.uiver.app/#q=WzAsNCxbMCwwLCJFIl0sWzEsMCwiRSciXSxbMCwxLCJCIl0sWzEsMSwiQiciXSxbMCwxLCJoIl0sWzIsMywiZiJdLFswLDIsInAiLDJdLFsxLDMsInAnIl1d
> \[\begin{tikzcd} E & {E'} \\ B & {B'} \arrow["h", from=1-1, to=1-2] \arrow["p"', from=1-1, to=2-1] \arrow["{p'}", from=1-2, to=2-2] \arrow["f", from=2-1, to=2-2] \end{tikzcd}\] 
> 
> \end{document}
> ```
> 


