---
tags: 
date: "2025-08-28"
time: "09:23"
---
[!Lemma]
Let $\varphi:R\to R'$ be a homomorphism, and $\alpha\in R'$, then there exists a unique homomorphism $\Phi:R[x]\to R'$ extending $\varphi$ and mapping $x$ to $\alpha$. $R$ and $R'$ are commutative here.


[!Corollary]
Let $\varphi:R\to R'$ be a ring homomorphism. Then, there exists a unique $\Phi:R[x]\to R'[x]$ such that $\Phi$ agrees with $\varphi$ on $R$ and $\Phi$ maps $x$ to $x$.


[!Example]
Let $R$ be a ring and $I$ be an ideal in $R$. Then we have a natural homomorphism $\pi:R\to R/I$. By the previous result this extends to a unique homomorphism $\pi':R[x]\to (R/I)[x]$. It is easy to see that $\ker\varphi=IR[x]$. Thus, 
$$
\frac{R[x]}{IR[x]}\cong (R/I)[x].
$$

[!Proposition]
Let $R$ be a principal ideal ring. Let $(a_{1})\subseteq(a_{2})\subseteq\dots$ be a chain of ideals. Then there exists an integer $n$ such that for all $j\geq n$, $(a_{j})=(a_{n})$.


