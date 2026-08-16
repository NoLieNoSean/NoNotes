---
id: "323"
date: 2026-08-05
time: 19:00
tags:
  - CAL2
---
Let $V$ denote an $n$-dimensional $\mathbb{R}$-vector space. Denote its [[LEC ALG1 20#^c12cc3|dual space]] by $V^{*}$. Let $v_{1}, \dots, v_{n}$ be a basis for $V$, and let $\varphi_{1}, \dots, \varphi_{n}$ be the corresponding dual basis. Denote homogeneous components of the [[LEC ALG4 13#^e1cc97|tensor algebra]] $T(V^{*})$ by $V^{*\otimes k}$ for $k\geqslant 1$, elements of which we call **$k$-tensors**. Recall that the set of all $k$-fold tensors
$$
\varphi_{i_{1}}\otimes \dots \otimes \varphi_{i_{k}}\quad 1\leqslant i_{1}, \dots, i_{k}\leqslant m
$$
is a basis for $V^{*\otimes k}$, which therefore is an $n^{k}$-dimensional vector space. 

We say that a $k$-tensor $\omega\in V^{*\otimes k}$ is **alternating** if 
$$
\omega(v_{1}, \dots, v_{i},\dots, v_{j}, \dots, v_{k})=-\omega(v_{1}, \dots, v_{j}, \dots, v_{i}, \dots, v_{k}) \quad \forall v_{1}, \dots, v_{k}\in V.
$$
The set of all alternating $k$-tensors is clearly a vector subspace of $V^{*\otimes k}$. Define the **alternation operator** $\text{Alt}:V^{*\otimes k}\to V^{*\otimes k}$ by
$$
\text{Alt}(\omega)=\frac{1}{k!}\sum_{\sigma\in \mathfrak{S}_{k}}(-1)^{\sigma}\sigma \cdot \omega.
$$
Its image is precisely the space of alternating tensors. Moreover, the defining quotient 
$$
V^{*\otimes k}\twoheadrightarrow\Lambda^{k}V^{*}
$$
onto the [[LEC ALG4 15#^8a60a8|exterior algebra]] restricts to an isomorphism
$$
\text{Alt}(V^{*\otimes k})\cong \Lambda^{k}V^{*}.
$$
Hence we obtain a canonical inverse 
$$
i_{k}:\Lambda^{k}V^{*}\hookrightarrow V^{*\otimes k}.
$$
Explicitly,
$$
i_{k}(\varphi_{i_{1}}\wedge\dots \wedge\varphi_{i_{k}})=\text{Alt}(\varphi_{i_{1}}\otimes \dots \otimes \varphi_{i_{k}}).
$$

^fab235

> [!Recall]
> [[LEC ALG4 15#^28f88b|Recall]] that the set of all
> $$
> \varphi_{i_{1}}\wedge\dots \wedge\varphi_{i_{k}}\quad 1\leqslant i_{1}< i_{2}<\dots< i_{k}\leqslant  n
> $$
> is a basis for $\Lambda^{k}(V)$, where therefore has dimension $\binom{n}{k}$. 


Two things to note here. First, observe that [[#^fab235]] provides a canonical embedding of graded vector spaces:
$$
i:\bigoplus_{m}\Lambda^{m}V^{*}\hookrightarrow\bigoplus_{m}V^{*\otimes m}=T(V).
$$
But this embedding is not an algebra homomorphism - the product of two alternating tensors in $T(V)$ does not have to be alternating! 

To get the product on $\bigoplus_{m}\Lambda^{m}V^{*}$ to agree with the product on $i(\bigoplus_{m}\Lambda^{m}V^{*})$, we must therefore redefine the product on $i(\bigoplus_{m}\Lambda^{m}V^{*})$. The following definition (extended linearly)
$$
\begin{align}  
i_{k}(\varphi_{i_{1}}\wedge \dots \wedge \varphi_{i_{k}}) & =\text{Alt}(i_{p}(\varphi_{i_{1}}\wedge \dots \wedge \varphi_{i_{p}})\otimes i_{q}(\varphi_{i_{p+1}}\wedge \dots \wedge \varphi_{i_{k}}))

\end{align}
$$
works, since $\text{Alt}(\varphi_{i_{1}}\otimes \dots \otimes \varphi_{i_{k}})  =\text{Alt}(\text{Alt}(\varphi_{i_{1}}\otimes \dots \otimes \varphi_{i_{p}})\otimes \text{Alt}(\varphi_{i_{p+1}}\otimes \dots \otimes \varphi_{i_{k}}))$ (this is easily verified by a computation).

We are not done yet, however, since there is a small price to pay if we choose to proceed with the identification [[Differential Forms I#^fab235]]: the familiar coordinate formulas acquire factorials. For example, 
$$
dx^i\wedge dx^j =\frac12\left(dx^i\otimes dx^j-dx^j\otimes dx^i\right) , 

$$
so
$$
(dx^i\wedge dx^j)(e_i,e_j)=\frac12,  
$$
rather than $1$. This isn't ideal, because it makes every determinant formula come with compensating factorials. So we rescale the identification in each degree by $k!$, obtaining the convention used by @spivakCalculusManifoldsModern1965:
$$
i_{k}(\varphi_{i_{1}}\wedge\dots \wedge\varphi_{i_{k}}):=k!\text{Alt}(\varphi_{i_{1}}\otimes \dots \otimes \varphi_{i_{k}}).
$$
The product formula becomes the slightly less harmonious
$$
\begin{align}  
i_{k}(\varphi_{i_{1}}\wedge \dots \wedge \varphi_{i_{k}}) & = \frac{k!}{p!q!}\text{Alt}(i_{p}(\varphi_{i_{1}}\wedge \dots \wedge \varphi_{i_{p}})\otimes i_{q}(\varphi_{i_{p+1}}\wedge \dots \wedge \varphi_{i_{k}})).
\end{align}
$$
We will identify $\omega\in\Lambda^{k}V^{*}$ with its image $i_{k}(\omega)\in V^{*\otimes k}$ from now on, and think of $\Lambda V^{*}$ as a vector subspace of $T(V^{*})$ with this identification (again, not a subalgebra!). For instance, the above formula will be written as
$$
\omega \wedge \eta=\frac{k!}{p!q!}\text{Alt}(\omega \otimes \eta).
$$
Thus, *the alternating tensors are not naturally a subalgebra of the tensor algebra, but they are canonically isomorphic to the exterior algebra as a graded algebra once we equip them with the transported wedge product*.

With that out of the way, we can state a few properties of $\text{Alt}$:

> [!Proposition] @spivakCalculusManifoldsModern1965 Thm 4-3
> 1. If $\omega\in V^{*\otimes k}$, then $\text{Alt}(\omega)\in\Lambda^{k}V^{*}$.
> 2. If $\omega\in\Lambda^{k}V^{*}$, then $\text{Alt}(\omega)=\omega$. 
> 3. If $\omega\in V^{*\otimes k}$, then $\text{Alt}(\text{Alt}(\omega))=\text{Alt}(\omega)$. 
