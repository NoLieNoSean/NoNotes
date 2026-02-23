---
id: "418"
date: 2026-02-18
time: 11:25
tags:
  - ALG4
  - Lecture
---

[!Theorem]
Let $M, N$ be $R$-modules. Then there exists a pair $(T, \tau)$, $T$ $R$-module, $\tau:M\times N\to T$ $R$-bilinear such that for all bilinear $\varphi:M\times N\to P$, there exists unique $R$-linear $\overline{\varphi}:T\to P$ such that the following diagram commutes. 

```latex
% latex-id: 9c99-9bd5-c96e-44af-b3cd

\begin{document}
% https://q.uiver.app/#q=WzAsMyxbMCwwLCJNXFx0aW1lcyBOIl0sWzEsMCwiUCJdLFswLDEsIlQiXSxbMCwxLCJcXHZhcnBoaSJdLFswLDIsIlxcdGF1IiwyXSxbMiwxLCJcXG92ZXJsaW5le1xcdmFycGhpfSIsMl1d 
\[\begin{tikzcd} {M\times N} & P \\ T \arrow["\varphi", from=1-1, to=1-2] \arrow["\tau"', from=1-1, to=2-1] \arrow["{\overline{\varphi}}"', from=2-1, to=1-2] \end{tikzcd}\]
\end{document}

```

[!Definition]
The pair $(T, \tau)$ is called the **tensor product** of $M$ and $N$. We denote $\tau(x, y)$ by $x\otimes y$. Often, we will use the module $M\otimes N$ constructed in [[LEC ALG4 11]], along with the map $(x, y)\mapsto \overline{e_{(x, y)}}=x\otimes y$. 

## Basic properties

[!Proposition]
Let $\varphi:M_{1}\to M_{2}$ be $R$-linear. Then there exists an $R$-linear map
$$
\varphi \otimes\text{id}_{N}:M_{1}\otimes_{R}N\to M_{2}\otimes
$$