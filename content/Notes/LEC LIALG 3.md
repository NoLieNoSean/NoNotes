---
id: "536"
date: 2026-08-11
time: 14:00
tags:
  - Lecture
  - LIALG
---
> [!Proposition]
> If $L\subseteq \mathfrak{gl}(V)$ is an arbitrary linear Lie algebra ($\text{char}(F)=0$), and $x\in L$ is nilpotent, then 
> $$
> (\exp x)y(\exp x)^{-1}=\exp \text{ad}\,x\,(y)\quad \forall y\in L.
> $$
> 
> ```latex
> % latex-id: 4576-4bf3-7584-424b-b8d4
> \begin{document}
> \begin{tikzcd}[column sep=huge,row sep=large] x\in L \arrow[r,mapsto,"\operatorname{ad}"] \arrow[d,mapsto,"\exp"'] & \operatorname{ad}_x\in\operatorname{Der}(L) \arrow[d,mapsto,"\exp"] \\ \exp x\in SL(2,F) \arrow[r,mapsto,"\operatorname{Ad}"] & \exp(\operatorname{ad}_x)\in\operatorname{Aut}(L). \end{tikzcd}
> 
> \end{document}
> ```
> 
> 
> Here, $\text{Ad}$ is a Lie group homomorphism, $\text{ad}$ is a Lie algebra homomorphism, and the two exponential maps are smooth maps. 


