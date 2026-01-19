---
id: "389"
date: 2026-01-16
time: 11:17
tags:
---
# Noetherian modules

[!Proposition]
Let $M$ be an $R$-module. TFAE:
1. The ascending chain condition holds for submodules of $M$. 
2. Every nonempty collection of submodules of $M$ contains a maximal element.
3. Every submodule of $M$ is finitely generated. 

An $R$-module satisfying any of these conditions is called a noetherian $R$-module. 

[!Proof]-

$(1 \implies 2)$ Let $\Lambda$ be a nonempty collection of submodules of $M$. FTSOC, assume $\Lambda$ does not have a maximal element. Let $N_{1}\in\Lambda$. Since $N_{1}$ is not maximal, there exists $N_{2}\in\Lambda$ such that $N_{1}\subsetneq N_{2}$. Repeat indefinitely to get an infinite ascending chain. 

$(2\implies 3)$ Let $N$ be a submodule of $M$. Let $\Lambda$ be the collection of finitely generated submodules of $M$. $0\in\Lambda$, so $\Lambda$ is nonempty. Let $N'$ be a maximum element of $\Lambda$. $N'$ is finitely generated. Suppose $N\ne N'$. Then, there exists $x\in N$ such that $x\not\in N'$. Consider submodule $N'+Rx$ of $N$. $N'+Rx\supsetneq N'$ and is finitely generated, contradicting the maximality of $N'$. 

$(3\implies 1)$ Let $N_{1}\subseteq N_{2}\subseteq\dots$ be a chain of submodules of $M$. Then, $N=\bigcup_{i\geqslant 1}N_{i}$ is a submodule of $M$, and hence is finitely generated. Let $\{ x_{1}, \dots, x_{n} \}$ be a finite generating set of $N$. There exist $i_{1}, \dots i_{n}$ such that $x_{j}\in N_{i_{j}}$ with $1\leqslant j\leqslant n$. Let $k\geqslant \max \{ i_{1}, \dots, i_{n} \}$, so that $\{ x_{1}, \dots, x_{n} \}\subseteq N_{k}$. Thus, $N=\sum_{i=1}^{n}Rx_{i}\subseteq N_{k}\subseteq N$. Thus, $N=N_{k}$, and $N_{m}=N_{k}$ for all $m\geqslant k$. 

Note that $R$ is a [[Noetherian rings|Noetherian ring]] if it is a noetherian $R$-module. 


[!Exercise]
Let $M$ be a module with submodule $N$. 
1. If $M$ is Noetherian, $N$ and $M/N$ are Noetherian. 
2. If $N$ and $M/N$ are Noetherian, then $M$ is Noetherian.

[!Proposition]
Let $R$ be a Noetherian ring and $M$ be an $R$ module. Then $M$ is Noetherian iff it is finitely generated. 

[!Proof]-

$(\implies)$ by definition. 

$(\impliedby)$ Suppose $M$ has a generating set $\{ x_{1}, \dots, x_{n} \}$. Then from a previous proposition we have the surjection $R^{n}\to M$ which maps $e_{i}\mapsto x_{i}$. By the previous proposition, it suffices to show that $R^{n}$ is a noetherian $R$-module. Proof by induction on $n$. $n=1$ by hypothesis. Assume it shows for $n-1$. Now, 
$$
\begin{align}
 & R^{n-1}=\sum_{i=1}^{n-1} Re_{i}\subseteq R^{n} \\
\implies & \frac{R^{n}}{R^{n-1}}=Re_{n}, 
\end{align}
$$
which is a rank 1 free module. We are done by the above proposition. (Note that not all rank n-1 free submodules of $R^{n}$ give this nice quotient!)

[!Example]
Consider $M=(\mathbb{Z}e_{1}\oplus \mathbb{Z}e_{2})/\langle e_{1}+e_{2} \rangle$, with $R=\mathbb{Z}$. $\{ \overline{e_{1}}, \overline{e_{2}} \}$ generate $M$ with a $R$-linear relation $\overline{e_{1}}+\overline{e_{2}}=0$. 

Let $R$ be a Noetherian ring, and $M$ be a finitely generated $R$-module with generating set $\{ x_{1}, \dots, x_{n} \}$. The kernel of the map $\epsilon:R^{n}\to M$ given by (prp) is exactly all the $R$-linear relations among $\{ x_{1}, \dots, x_{n} \}$. Since $R$ is Noetherian, $\ker\epsilon$ is finitely generated, say by $m$ elements. Thus, there exists a surjective map $\epsilon_{1}:R^{m}\to \ker\epsilon$. Let $\varphi$ be the composite $\iota \circ\epsilon_{1}$. 

```latex
% latex-id: af57-3f3f-963d-4f83-9521
\begin{tikzcd}
\ker\epsilon \ar[r, hook, "\iota"] & R^{n}\ar[r, "\epsilon"] & M \\
R^{m}\ar[u, "\epsilon_{1}"]\ar[ru, "\varphi"'] &  & 
\end{tikzcd}
```
Observe that 
$$
\frac{R^{n}}{\mathrm{im}\,\varphi}\cong\frac{R^{n}}{\ker\epsilon}\cong\text{im}\,\epsilon\cong M.
$$
Thus, for Noetherian $R$ and finitely generated $R$-module $M$, there exists a $R$-module homomorphism $\varphi:R^{m}\to R^{n}$ such that $M\cong \text{coker}\,\varphi$. After choosing a basis of $R^{m}$ and $R^{n}$, $\varphi$ can be represented by a $n\times m$ matrix with entries in $R$. 

[!Theorem] Hilbert's basis theorem
If $R$ is Noetherian, then $R[x]$ is Noetherian (over $R[x]$!). 

[!Proof]-

FTSOC, assume that $R[x]$ has an ideal $I$ that is not finitely generated. $I\ne 0$. Let $f_{1}(x)\in I\setminus 0$ be of the smallest possible degree. For all $k\geqslant 2$, choose $f_{k}(x)\in I\setminus \langle f_{1}, \dots, f_{k-1} \rangle$ of smallest possible degree. Write $d_{i}$ for the degree of $f_{i}$. We have $d_{1}\leqslant d_{2}\leqslant \dots$. For $f=a_{d}x^{d}+\dots+a_{0}$, $a_{d}\ne 0$, call $a_{d}$ the leading coefficient. For $i\geqslant 1$, let $b_{i}$ be the leading coefficient of $f_{i}$. Let $J=\langle b_{1}, b_{2}, \dots \rangle$ be an ideal of $R$. $J$ is finitely generated, so[^1] there exists $k$ such that $J=\langle b_{1}, \dots, b_{k} \rangle$. 

Now, there exist $r_{1}, \dots, r_{k}\in R$ such that $b_{k+1}=\sum_{i=1}^{k}r_{i}b_{i}$. Consider
$$
\begin{align}
g:=\sum_{i=1}^{k} r_{i}X^{d_{k+1}-d_{i}}f_{i}.
\end{align}
$$
Then $\text{deg}\,g=d_{k+1}$ and its leading coefficient is $b_{k+1}$. We have $g\in \langle f_{1}, \dots, f_{k} \rangle$. $\text{deg}\,f_{k+1}-g\leqslant d_{k+1}$. and $f_{k+1}-g\not\in \langle f_{1}, \dots, f_{k} \rangle$. This contradicts the choice of $f_{k+1}$. Thus, $R[x]$ is Noetherian. 




[^1]: requires a small argument
