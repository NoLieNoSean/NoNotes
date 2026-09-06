---
id: "505"
date: 2026-08-05
time: 14:07
tags:
  - Processed
  - Lecture
  - DGEO
---
[[LEC CAL1 16#^83fea1|Recall]] that if $F$ is differentiable, its directional derivatives exist and are equal to the total derivate evaluated at $v$. More generally suppose $F$ is differentiable at $a$, and $\gamma:(-\epsilon, \epsilon)\to U$ is differentiable with $\gamma(0)=a$ and $\gamma'(0)=v$. Then
$$
DF_{a}(v)=\frac{d}{dt} \ | \  _{t=0}~F(\gamma(t))
$$
follows form the [[LEC CAL1 17#^67af50|chain rule]]. 


---

# Local structure theorems for immersions and submersions


> [!Definition] Immersions and submersions
> Let $U\subseteq \mathbb{R}^{n}$ be open and $f:U\to \mathbb{R}^{n}$ be smooth. $f$ is said to be an **immersion** if $Df_{a}\mathbb{R}^{n}\to \mathbb{R}^{m}$ is injective for all $a\in U$. We say that $f$ is a **submersion** if $Df_{a}:\mathbb{R}^{n}\to \mathbb{R}^{m}$ is surjective for all $a\in U$. 

^3d6ea4

> [!Theorem] Normal form of an injective linear map
> Let $T:\mathbb{R}^{n}\to \mathbb{R}^{k}$, $n\leq k$, be an injective linear map. Then, after a linear change of coordinates in the ==codomain==, $T$ is given by $(x^{1}, \dots, x^{n})\mapsto(x^{1} , \dots, x^{n}, 0, \dots, 0)$. More formally, there exists an invertible linear map $A:\mathbb{R}^{k}\to \mathbb{R}^{k}$ such that $A(T(x^{1}, \dots, x^{n}))=(x^{1}, \dots, x^{n}, 0, \dots, 0)$. 
> 
> > [!Proof]-
> > 
> > Let $e_{1}, \dots, e_{n}$ be the standard basis of $\mathbb{R}^{n}$. Let $v_{1}, \dots, v_{n}$ denote their images under $T$ in $\mathbb{R}^{k}$. These are linearly independent. Extend them to a basis $v_{1}, \dots, v_{k}$ of $\mathbb{R}^{k}$. Let $e_{1}', \dots, e_{k}'$ be the standard basis of $\mathbb{R}^{k}$. Let $A:\mathbb{R}^{k}\to \mathbb{R}^{k}$ be such that $Av_{i}=e'_{i}$ for $1\leqslant i\leqslant k$. 
> 

The following theorem is a nonlinear analogue of the preceding theorem. 

> [!Theorem] Local structure theorem for immersions
> Let $U\subseteq \mathbb{R}^{n}$ be open, $f:U\to \mathbb{R}^{k}$, $n\leqslant k$, be smooth, and $a\in U$. If $Df_{a}:\mathbb{R}^{n}\to \mathbb{R}^{k}$ is injective, then there are an open neighborhood $U'\subseteq U$ of $a$, an open neighborhood $W\subseteq \mathbb{R}^{k}$ of $f(a)$, and diffeomorphism $\Phi:W\to \Phi(W)\subseteq \mathbb{R}^{k}$ such that $f(U')\subseteq W$ and $\Phi(f(x^{1}, \dots, x^{n}))=(x^{1}, \dots, x^{n}, 0, \dots, 0)$ for eery $x\in U'$. Moreover, $\Phi(W)=U'\times B$ where $B\subseteq \mathbb{R}^{k-n}$ is an open neighborhood of $0\in \mathbb{R}^{k-n}$ and
> $$
> \Phi(f(U'))=U'\times \{ \mathbf{0} \}=\Phi(W)\cap(\mathbb{R}^{n}\times \{ \mathbf{0} \}),
> $$
> where $\mathbf{0}\in \mathbb{R}^{k-n}$. 
> 
> > [!Proof]-
> > 
> > Set $v_{i}=Df_{a}(e_{i})$. Then $v_{1}, \dots, v_{n}$ are linearly independent. Extend them to a basis $v_{1}, \dots, v_{k}$ of $\mathbb{R}^{k}$. Define $\Psi:U\times \mathbb{R}^{n-k}\to \mathbb{R}^{k}$ by $\Psi(x, y)=f(x)+\sum_{j=1}^{k-n}y^{j}v_{n+j}$. The derivative of $\Psi$ at $(x, y)$ is $D\Psi_{(x, y)}(h, l)=Df_{x}(h)+\sum_{j=1}^{k-n}l^{j}v_{n+j}$. In particular, $D\Psi_{(a, 0)}(h, l)=\sum_{i=1}^{n}h^{i}v_{i}+\sum_{j=1}^{k-n}l^{j}v_{n+j}$. Thus, $D\Psi_{(a, 0)}$ is invertible. By the [[LEC CAL1 21#^e75cec|inverse function theorem]], there exist neighborhoods $U'\times B$ of $(a, 0)$ and $W$ of $f(a)$ such that $\Psi:U'\times B\to W$ is a diffeomorphism. Let $\Phi=\Psi^{-1}$. Since $\Psi(x, 0)=f(x)$, we have $f(U')\subseteq W$ and $\Phi(f(x))=(x, 0)$ for all $x\in U'$. 
> 

^77789d

> [!Theorem] Normal form of a surjective linear map
> Let $T:\mathbb{R}^{k}\to \mathbb{R}^{n}$ , $k\geqslant n$, be a surjective linear map. Then, after a linear change of coordinates in the ==domain==, $T$ is given by $(x^{1}, \dots, x^{k})\mapsto(x^{1}, \dots, x^{n})$. More formally, there exists an invertible linear map $A:\mathbb{R}^{k}\to \mathbb{R}^{k}$ such that $T(A^{-1}(x^{1}, \dots, x^{k}))=(x^{1}, \dots, x^{n})$. 
> 
> > [!Proof]-
> > 
> > Let $e_{1}, \dots, e_{n}$ be the standard basis of $\mathbb{R}^{n}$. Since $T$ is surjective, one can choose $v_{1}, \dots, v_{n}\in \mathbb{R}^{k}$ such that $v_{i}=e_{i}$ for $1\leqslant i\leqslant n$. Note that $v_{1}, \dots, v_{n}$ are linearly independent. By rank-nullity theorem, $\dim\ker T=k-n$; choose a basis $v_{n+1}, \dots, v_{k}$ of $\ker T$. The vectors $v_{1}, \dots, v_{n}$ form a basis of $\mathbb{R}^{k}$. There holds
> > $$
> > T(y^{1}v_{1}+\dots+y^{k}v_{k})=y^{1}e_{1}+\dots+y^{n}e_{n}.
> > $$
> > Let $e'_{1}, \dots, e'_{k}$ be the standard basis of $\mathbb{R}^{k}$. Let $A:\mathbb{R}^{k}\to \mathbb{R}^{k}$ be such that $Av_{i}=e'_{i}$ for $1\leqslant i\leqslant k$. Then $T(A^{-1}(x^{1}, \dots, x^{k}))=(x^{1}, \dots, x^{n})$. 
> 

> [!Theorem] Local structure theorem for submersions
> Let $U\subseteq \mathbb{R}^{k}$ be open, $f:U\to \mathbb{R}^{n}$, where $n\leqslant k$, be smooth, and $a\in U$. If $Df_{a}:\mathbb{R}^{k}\to \mathbb{R}^{n}$ is surjective, then there are an open neighborhood $U'\subseteq U$ of $a$ and a diffeomorphism $\Phi:U'\to \Phi(U')\subseteq \mathbb{R}^{k}$ such that $f(\Phi ^{-1}(x^{1}, \dots, x^{k}))=(x^{1}, \dots, x^{n})$. 
> 
> > [!Proof]-
> > 
> > Choose a basis $v_{1}, \dots, v_{k}$ of $\mathbb{R}^{k}$ such that $Df_{a}(v_{i})=e_{i}$ for $1\leqslant i\leqslant n$ and $v_{n+1}, \dots, v_{k}$ form a basis of $\ker Df_{a}$. Let $\lambda_{1}, \dots,\lambda_{k}$ be the dual basis of $v_{1}, \dots, v_{k}$. Define $\Phi:U\to \mathbb{R}^{k}$ by
> > $$
> > \Phi(b)=(f(b), \lambda_{n+1}(b), \dots, \lambda_{k}(b)).
> > $$
> > In our chosen basis $D\Phi=\begin{bmatrix}Df &  \\  & I_{k-n} \end{bmatrix}$ and $Df_{a}=I_{n}$. Thus, $D\Phi_{a}=I_{k}$. By the [[LEC CAL1 21#^e75cec|inverse function theorem]], $\Phi$ is a diffeomorphism after its domain is restricted to a sufficiently small neighborhood $U'$ of $a$. The first $n$ components of $\Phi$ are the components of $f$, and therefore $f\circ \Phi ^{-1}(x^{1}, \dots, x^{k})=(x^{1}, \dots, x^{n})$. 
> 
> 

^549235
