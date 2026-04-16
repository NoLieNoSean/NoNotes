---
id: "439"
date: 2026-03-27
time: 14:44
tags:
draft: true
---



> [!Definition] Fiber bundle, @weissteinFiberBundle
> A **fiber bundle** with fiber $F$ is a map $p:E\to B$, where $E$ is called the total space of the fiber bundle and $B$ the base space of the fiber bundle, satisfying the following condition: each $b\in B$ has a neighborhood $U$ with $p^{-1}(U)$ homeomorphic to $U\times F$ via $h:p ^{-1}(U)\to U\times F$ such that 
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
> The homeomorphisms $h$ are called **local trivializations** for the fiber bundle $p$. In other words, $E$ looks like the product $B\times F$ (at least locally), except that the fibers $p^{-1}(x)$ for $x\in B$ may be "twisted".

^a3d022

A simple nontrivial example is the Möbius strip, which is a fiber bundle over the circle with fiber given by the unit interval $[0, 1]$. 

