---
id: "538"
date: 2026-08-21
time: 10:30
tags:
  - Lecture
  - DGEO
P1: true
desc: intrinsic distance is a metric, and is preserved by Riemannian isometries
---

> [!Remark]
> Let $p\in M\subseteq \mathbb{R}^{n}$, $U\subseteq M$ be a coordinate neighborhood of $p$. We've seen that $\phi_{1}(q), \dots, \phi_n(q)$ is a basis of $T_{q}M$. By applying the [[LEC ALG1 21#^f789a3|Gram-Schmidt]] process to $\phi_{1}(q), \dots, \phi_{n}(q)$, we can obtain smooth vector fields $X_{1}, \dots, X_{n}$ on $U$ such that for all $q\in U$, $X_{1}(q), \dots, X_{n}(q)$ form on orthonormal basis of $T_{q}(M)$. 

Recall the definition of [[LEC DGT 5#^0c7a72|intrinsic distance]] from the previous lecture. 

> [!Lemma]
> Let $\varphi:M\to N$ be a [[LEC DGT 5#^88035c|Riemannian isometry]]. Then $d_{N}(\varphi(p), \varphi(q))=d_{M}(p, q)$, i.e., $\varphi$ is also a metric space isometry. 

> [!Lemma]
> $d_{\mathbb{R}^{n}}(p, q)=|p-q|$ for all $p, q\in \mathbb{R}^{n}$.

> [!Lemma]
> Let $\Omega \subseteq \mathbb{R}^{n}$ and $\phi:\Omega\to V$ be a local parameterization of $M$. Let $K\subseteq \Omega$ be compact. Then there exist $c_{1}, c_{2}> 0$ such that
> $$
> c_{1}|v|\leqslant |D\phi_{a}(v)|\leqslant  c_{2}|v| \quad \forall v\in \mathbb{R}^{n}, a\in K.
> $$
> 

> [!Lemma]
> Let $\phi:B_{2}^{n}(0)\to V$ be a local parameterization with $\phi(0)=p$, $U=\phi(B_{1}^{n}(0))$. Then there exist $C ,D> 0$ such that the following hold:
> 1. $d_{M}(p, q)\leqslant C|\varphi ^{-1}(q)|=Cd_{\mathbb{R}^{n}}(\varphi ^{-1}(p), \varphi ^{-1}(q))$ for all $q\in U$. 
> 2. $d_{M}(p, q)\geqslant D$ for all $q\not\in U$. 

> [!Proposition]
> $(M, d_{M})$ is a metric space. The topology induced by $d_{M}$ agrees with the original topology of $M$. 

> [!Remark]
> Does there always exist piecewise smooth $\gamma:p\to q$ that realizes the distance $d_{M}(p, q)$? 
> 
> No. 

> [!Remark]
> Let $M^{m}, N^{n}$ be smooth manifolds. If $\varphi:M\to N$ is a Riemannian isometry, then $\varphi$ is a metric space space isometry. Conversely, if $\varphi:M\to N$ is a homeomorphism which is a metric space isometry, then $\varphi$ is a diffeomorphism and a Riemannian isometry. 

> [!Theorem]
> Suppose $M\subseteq \mathbb{R}$. TFAE:
> 1. For all $p, q\in M$, there exists a length minimizing piecewise smooth curve $p\rightsquigarrow q$
> 2. For all $p, q\in M$, there exists a length minimizing smooth curve $p\rightsquigarrow q$. 
> 
> Moreover, if $M$ is a closed subset of $\mathbb{R}^{k}$, $(1)\iff(2)$ holds. 
> 
> Such length minimizing curves are called **geodesics**. 


