---
id: "505"
date: 2026-08-05
time: 14:07
tags:
---
Recall that if $F$ is differentiable, its directional derivatives exist and are equal to the total derivate evaluated at $v$. More generally suppose $F$ is differentiable at $a$, and $\gamma:(-\epsilon, \epsilon)\to U$ is differentiable with $\gamma(0)=a$ and $\gamma'(0)=v$. Then
$$
DF_{a}(v)=\frac{d}{dt} \ | \  _{t=0}~F(\gamma(t)).
$$
(follows form the chain rule). 


---

# Local structure theorems for immersions and submersions


> [!Definition] Immersions and submersions
> Let $U\subseteq \mathbb{R}^{n}$ be open and $f:U\to \mathbb{R}^{n}$ be smooth. $f$ is said to be an **immersion** if $Df_{a}\mathbb{R}^{n}\to \mathbb{R}^{m}$ is injective for all $a\in U$. We say that $f$ is a **submersion** if $Df_{a}:\mathbb{R}^{n}\to \mathbb{R}^{m}$ is surjective for all $a\in U$. 

> [!Theorem] Normal form of an injective linear map
> Let $T:\mathbb{R}^{n}\to \mathbb{R}^{k}$, $n\leq k$, be an injective linear map. Then, after a linear change of coordinates in the codomain, $T$ is given by $(x^{1}, \dots, x^{n})\mapsto(x^{1} , \dots, x^{n}, 0, \dots, 0)$. More formally, there exists an invertible linear map $A:\mathbb{R}^{k}\to \mathbb{R}^{k}$ such that $A(T(x^{1}, \dots, x^{n}))=(x^{1}, \dots, x^{n}, 0, \dots, 0)$. 

The following theorem is a nonlinear analog of the preceding theorem. 

[!Theorem] Local structure theorem for immersions
Let $U\subseteq \mathbb{R}^{n}$ be open, $f:U\to \mathbb{R}^{k}$, $n\leqslant k$, be smooth, and $a\in U$. If $Df_{a}:\mathbb{R}^{n}\to \mathbb{R}^{k}$ is injective, then there are an open neighborhood $U'\subseteq U$ of $a$, an open neighborhood $U\subseteq \mathbb{R}^{k}$ of $f(a)$, and diffeomorphism $\Phi:W\to \Phi(W)\subseteq \mathbb{R}^{k}$ such that $f(U')\subseteq W$ and $\Phi(f(x^{1}, \dots, x^{n}))=(x^{1}, \dots, x^{n}, 0, \dots, 0)$ for eery $x\in U'$. Moreover, $\Phi(W)=U'\times B$ where $B\subseteq \mathbb{R}^{k-n}$ is an open neighborhood of $0\in \mathbb{R}^{k-n}$ and
$$
\Phi(f(U'))=U'\times \{ 0 \}=\Phi(W)\cap(\mathbb{R}^{n}\times \{ 0 \}),
$$
where $0\in \mathbb{R}^{k-n}$. 

[!Proof]-




> [!Theorem] Normal form of a surjective linear map
> Let $T:\mathbb{R}^{k}\to \mathbb{R}^{n}$ , $k\geqslant n$, be a surjective linear map. Then, after a linear change of coordinates in the domain, $T$ is given by $(x^{1}, \dots, x^{k})\mapsto(x^{1}, \dots, x^{n})$. More formally, there exists an invertible linear map $A:\mathbb{R}^{k}\to \mathbb{R}^{k}$ such that $T(A^{-1}(x^{1}, \dots, x^{k}))=(x^{1}, \dots, x^{n})$. 





[!Theorem] Local structure theorem for submersions
Let $U\subseteq \mathbb{R}^{k}$ be open, $f:U\to \mathbb{R}^{n}$, where $n\leqslant k$, be smooth, and $a\in U$. If $Df_{a}:\mathbb{R}^{k}\to \mathbb{R}^{n}$ is surjective, then there are an open neighborhood $U'\subseteq U$