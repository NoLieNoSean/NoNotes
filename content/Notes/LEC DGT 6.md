---
id: "538"
date: 2026-08-21
time: 10:30
tags:
  - Lecture
  - DGEO
---
[!Remark]
Let $p\in M\subseteq \mathbb{R}^{n}$, $U\subseteq M$ be a coordinate neighborhood of $p$. We've seen that $\phi_{1}(q), \dots, \phi_n(q)$ is a basis of $T_{q}M$. By applying the [[LEC ALG1 21#^f789a3|Gram-Schmidt]] process to $\phi_{1}(q), \dots, \phi_{n}(q)$, we can obtain smooth vector fields $X_{1}, \dots, X_{n}$ on $U$ such that for all $q\in U$, $X_{1}(q), \dots, X_{n}(q)$ form on orthonormal basis of $T_{q}(M)$. 

Recall the definition of [[LEC DGT 5#^0c7a72|intrinsic distance]] from the previous lecture. 

[!Lemma]
Let $\varphi:M\to N$ be a [[LEC DGT 5#^88035c|Riemannian isometry]]. Then $d_{N}(\varphi(p), \varphi(q))=d_{M}(p, q)$, i.e., $\varphi$ is also a metric space isometry. 

[!Lemma]
$d_{\mathbb{R}^{n}}(p, q)=|p-q|$ for all $p, q\in \mathbb{R}^{n}$.

[!Lemma]
Let $\Omega \subseteq \mathbb{R}^{n}$ and $\phi:\Omega\to V$ be a local parameterization of $M$. Let $K\subseteq \Omega$ be compact. Then there exist $c_{1}, c_{2}> 0$ such that
$$
c_{1}|v|\leqslant |D\phi_{a}(v)|\leqslant  c_{2}|v| \quad \forall v\in \mathbb{R}^{n}, a\in K.
$$

[!Lemma]
Let $\phi:B_{2}^{n}(0)\to V$ be a local parameterization with $\phi(0)=p$, $U=\phi(B_{1}^{n}(0))$. Then there exist $c, $