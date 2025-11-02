---
id: "338"
date: 2025-10-30
time: 09:04
tags:
---
[!Theorem]
Let $F$ be any field. Then any $f(x)\in F[x]$ of positive degree has a splitting field. 

[!Proof]-

Induct on $\text{deg}\,(f)$. For $\text{deg}\,(f)=1$, $f(x)=x-a$, where $a\in F$, and $f(x)=0$ when $x=a$. If $\text{deg}\,f\geqslant 2$, suppose $f$ is irreducible. 

Put $k_{1}=F[x]/(f(x))$. Let the image $x+(f(x))$ of $x$ be denote by $\alpha_{1}$. Note that $\alpha_{1}$ is a root of $f(x)$ in $k_{1}$. Write $f(x)=(x-\alpha_{1})f_{1}(x)$ where $f_{1}(x)\in k_{1}[x]$. Write $f_{1}(x)=(x-\alpha)g_{1}(x)^{m_{1}}\dots g_{s}(x)^{m_{s}}$, where each $g$ is irreducible. Use induction hypothesis to find splitting fields $k_{1}[\beta_{i, j}, \dots, \beta_{i, j'}]$ for each $g_{i}$. Take their composition. 


[!Example]
$f(x)=x^{3}-2\in \mathbb{Q}[x]$. Cosntruct a splitting field.