---
draft: true
date: 2025-09-01
---
![[Pasted image 20250902225923.png]]

@karaMultiReesAlgebrasStrongly2022

Let $\mathbb{K}$ be a field and $S=\mathbb{K}[x_{1}, \dots, x_{n}]$ be a polynomial ring. Let $I\leq S$. The Rees Algebra over $I$, denoted $\mathcal{R}(I)$, as an abelian group is given by[^1]
$$
\mathcal{R}(I)=S[It]=S\oplus It\oplus I^{2}t^{2}\oplus \dots \subseteq S[t].
$$
Multiplication in $\mathcal{R}[t]$ comes from $S[t]$. It is easy to see that if $I=(a_{1}, \dots, a_{k})$, then $\mathcal{R}(I)=S[a_{1}t, \dots, a_{k}t]$. 

For example, If $I=(x_{1}^{2}, x_{2}^{2})$, then $\mathcal{R}(I)=S[x_{1}^{2}t, x_{2}^{2}t]$. Note that the 'variables' here are not independent; $x_{2}^{2}(x_{1}^{2}t)=x_{1}^{2}(x_{2}^{2}t)$. So, the kernel of the map $S[t_{1}, t_{2}]\to S[x_{1}^{2}t, x_{2}^{2}t]$ defined by $t_{1}\mapsto x_{1}^{2}t$ and $t_{2}\mapsto x_{2}^{2}t$ is non-trivial.




[^1]:Recall how a polynomial ring over some ring $R$, as an abelian group, can be seen as the infinite direct sum $R\oplus Rx\oplus Rx^{2}\oplus\dots$.