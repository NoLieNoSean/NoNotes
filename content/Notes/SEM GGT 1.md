---
id: "457"
date: 2026-05-25
time: 16:36
tags:
---
[!Definition] Quasi isometry
$f:(X, d)\to(X', d')$ is called a **quasi isometric embedding** if there exists $M> 1$ such that for all $x, y\in X$, 
$$
\frac{1}{M}d(x, y)-M\leqslant d'(f(x), f(y))\leqslant Md(x, y)+M.
$$
If in addition for each $x'\in X'$, there exists $x\in X$ such that $d'(f(x), x')< c$ for $c> 0$, $f$ is a quasi isometry. 

[!Examples]
1. Isometries are quasi-isometries. 
2. $f:\mathbb{R}\to \mathbb{R}$, $f(x)=ax+b$ is a quasi isometry. 
3. If $X$ and $X'$ are both of finite diameter, then they are QI. 
4. $\mathbb{R}$ is QI to $\mathbb{Z}$. 
5. $t\mapsto t^{2}$ and $t\mapsto \sqrt{ t }$ are not QI; they violate the first and second requirements in the definition respectively. 

[!Definition]
Let $f, g:X\to X$ be QI. We write $f\sim g$ if there exists $\lambda> 0$ such that $d(f(x), g(x))<\lambda$ for all $x\in X$. This is an equivalence relation. 

$QI(X)=\{ [f]:[f]\circ[g]=[f\circ g]:f\text{ is a QI } \}$. 

If there is a QI between two spaces $X$ and $X'$, then $QI(X)\cong QI(X')$. Thus, $QI(\mathbb{R})\cong QI(\mathbb{Z})$. 

Proved in 2005 that free group of rank $c$ embeds in $QI(\mathbb{R})$!

