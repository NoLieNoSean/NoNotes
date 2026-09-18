---
id: "323"
date: 2026-08-05
time: 19:00
tags:
  - CAL2
---
Let $V$ denote an $n$-dimensional $\mathbb{R}$-vector space. Denote its [[LEC ALG1 20#^c12cc3|dual space]] by $V^{*}$. Let $v_{1}, \dots, v_{n}$ be a basis for $V$, and let $\varphi_{1}, \dots, \varphi_{n}$ be the corresponding dual basis. Denote homogeneous components of the [[LEC ALG4 13#^e1cc97|tensor algebra]] $TV^{*}$ by $V^{*\otimes k}$ for $k\geqslant 1$, elements of which we call **$k$-tensors**. 

> [!Recall]
> Recall that the set of all $k$-fold tensors
> $$
> \varphi_{i_{1}}\otimes \dots \otimes \varphi_{i_{k}}\quad 1\leqslant i_{1}, \dots, i_{k}\leqslant m
> $$
> is a basis for $V^{*\otimes k}$, which therefore is an $n^{k}$-dimensional vector space. 

Let $\Lambda V^{*}$ denote the [[LEC ALG4 15#^8a60a8|exterior algebra]] of $V^{*}$ and $\Lambda^{k}V^{*}$ denote the $k$th graded component of $\Lambda V^{*}$. Recall that the defining quotient $TV^{*}\twoheadrightarrow\Lambda V^{*}$ of the exterior algebra restricts to vector space quotient maps $V^{*\otimes k}\twoheadrightarrow\Lambda^{k}V^{*}$ on graded components.

> [!Recall]
> [[LEC ALG4 15#^28f88b|Recall]] that the set of all
> $$
> \varphi_{i_{1}}\wedge\dots \wedge\varphi_{i_{k}}\quad 1\leqslant i_{1}< i_{2}<\dots< i_{k}\leqslant  n
> $$
> is a basis for $\Lambda^{k}(V^{*})$, where therefore has dimension $\binom{n}{k}$. 

> [!Lemma]
> Let $v_{1}, \dots, v_{n}$ be a basis for $V$, and let $\omega\in\Lambda^{n}(V)$. If $w_{i}=\sum_{j=1}^{n} a_{ij}v_{j}$ are $n$ vectors in $V$, then
> $$
> \omega(w_{1}, \dots, w_{n})=\det (a_{ij})\cdot\omega(v_{1}, \dots, v_{n}).
> $$
> 
> > [!Proof]-
> > 
> > Define $\eta\in (\mathbb{R}^{n*})^{\otimes n}$ by
> > $$
> > \eta((a_{11}, \dots, a_{1n}), \dots, (a_{n1}, \dots, a_{nn}))=\omega\left( \sum a_{1j}v_{j}, \dots, \sum a_{nj}v_{j} \right).
> > $$
> > Clearly, $\eta\in\Lambda^{n}(\mathbb{R}^{n*})$, so [[LEC ALG1 16#Uniqueness of the determinant|it follows]] that $\eta=\lambda\cdot \det$ for some $\lambda \in \mathbb{R}$ and $\lambda=\eta(e_{1}, \dots, e_{n})=\omega(v_{1}, \dots, v_{n})$. 
> 

# Alternating tensors

We say that a $k$-tensor $\omega\in V^{*\otimes k}$ is **alternating** if 
$$
\omega(v_{1}, \dots, v_{i},\dots, v_{j}, \dots, v_{k})=-\omega(v_{1}, \dots, v_{j}, \dots, v_{i}, \dots, v_{k}) \quad \forall v_{1}, \dots, v_{k}\in V.
$$
The set of all alternating $k$-tensors is clearly a vector subspace of $V^{*\otimes k}$. Define the **alternation operator** $\text{Alt}:V^{*\otimes k}\to V^{*\otimes k}$ by
$$
\text{Alt}(\omega)=\frac{1}{k!}\sum_{\sigma\in \mathfrak{S}_{k}}(-1)^{\sigma}\sigma \cdot \omega.
$$
Its image is precisely the subspace of alternating tensors; we will soon show that it is a projection onto this subspace. Moreover, the quotient $V^{*\otimes k}\twoheadrightarrow\Lambda^{k}V^{*}$ restricts to an isomorphism
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

With that out of the way, we can prove some properties of $\text{Alt}$:

> [!Proposition] @spivakCalculusManifoldsModern1965 Thm 4-3
> 1. If $\omega\in V^{*\otimes k}$, then $\text{Alt}(\omega)\in\Lambda^{k}V^{*}$.
> 2. If $\omega\in\Lambda^{k}V^{*}$, then $\text{Alt}(\omega)=\omega$. 
> 3. If $\omega\in V^{*\otimes k}$, then $\text{Alt}(\text{Alt}(\omega))=\text{Alt}(\omega)$. 
> 4. If $\omega\in V^{*\otimes k}$, $\eta\in V^{*\otimes l}$, and $\text{Alt}(\eta)=0$, then $\text{Alt}(\omega \otimes \eta)=\text{Alt}(\eta \otimes \omega)=0$. 
> 

---

# Fields and Forms

> [!Definition]
> 1. For $p\in \mathbb{R}^{n}$, the **tangent space** of $\mathbb{R}^{n}$ at $p$, denoted $\mathbb{R}^{n}_{p}$, is defined to be $\mathbb{R}^{n}$. Elements of $\mathbb{R}^{n}_{p}$ are denoted $v_{p}$ for $v\in \mathbb{R}^{n}$.
> 2. A **vector field** on $U\subseteq \mathbb{R}^{n}$ is a map $F:U\to \mathbb{R}^{n}$, with $F(p)$ understood to lie in $\mathbb{R}^{n}_{p}$.
> 3. Denote the space of all vector fields on $U$ by $\mathfrak{X}(U)$. For now, think of $U$ as a vector space. 

[!Definition] Differential form 
A differential $k$-form on $U\subseteq \mathbb{R}^{n}$ is a map $\omega:U\to\Lambda^{k}(\mathbb{R}^{n*})$, with $\omega(p)$ understood to lie in $\Lambda^{k}(\mathbb{R}^{n*}_{p})$. 







---


[!Definition]
If $f:V\to W$ is a linear map, a linear map $f^{*}:W^{*\otimes k}\to V^{*\otimes k}$ is defined by
$$
f^{*}T(v_{1}, \dots, v_{k})=T(f(v_{1}), \dots, f(v_{k}))
$$
for $T\in W^{*\otimes k}$ and $v_{1}, \dots, v_{k}\in V$. It is easy to verify that $f^{*}(S\otimes T)=f^{*}S\otimes f^{*}T$, making $f^{*}:T(W^{*})\to T(V^{*})$ an algebra homomorphism. 