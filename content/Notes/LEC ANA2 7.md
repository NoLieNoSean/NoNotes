---
tags: 
date: "2025-09-17"
time: "15:36"
---
[!Remark]
Compactness is a topological property. Completeness and totally boundedness, however, are not. 

[[LEC CAL1 7#Finite intersection property]]

[!Proposition]
Continuous functions on compact spaces are uniformly continuous.

EVT

unit balls in $\mathscr{l}_{1}, \mathscr{l}_{2}, \dots, \mathscr{l}_{\infty}$ are not compact. 

In any infinite dimensional NLS, unit balls are not compact.

[!Proposition]
Unit balls in $C[0, 1]$ is not compact: $\{ t^{n} \}$ does not have a convergent subsequence.

---

[!Definition]
Let $X$ be a compact metric space. $\mathcal{F}\subseteq C(X)$ is a family of equicontinuous functions if given $\epsilon> 0$ if $\exists\delta> 0$ such that $d(x, y)<\delta \implies |f(x)-f(y)|<\epsilon \quad\forall f\in \mathcal{F}$. 


[!Proposition]
Let $(X, d)$, $(Y, \rho)$ be metric spaces. Let $\{ f_{n} \}\subseteq C(X, Y)$ then there exists an equivalent metric such that each $f_{n}$ is Lipschitz continuous.

[!Proof]-
Define
$$
d'(x, y)=d(x, y)+\sum_{n=1}^{\infty} 1/2^{n}\frac{\rho(f_{n}(x), f_{n}(y))}{1+\rho(f_{n}(x), f_{n}(y))}.
$$
Then, $\rho(f_{n}(x), f_{n}(y))\leq 2^{n}d'(x, y)$.

[!Example]
$X$, $Y$ both compact. $F:X\times Y\to \mathbb{C}$ is continuous. Fix $y\in Y$. $f_{y}(x)=F(x, y)$. Then $\{ f_{y}:y\in Y \}$ is equicontinuous. 

[!Example]
$\{ f\in C_{1}[0, 1]\ | \ |f'|\leq M \}$ is equicontinuous.



Arzel`a-Ascoli Theorem: See @kumaresanTopologyMetricSpaces2005


