---
id: "322"
date: 2025-10-21
time: 09:54
tags:
  - ALG3
  - Lecture
---
> [!Definition] Algebraic extension
> A [[LEC ALG3 15#^cb5039|field extension]] $K/F$ is called an **algebraic extension** if every $\alpha\in K$ is [[LEC ALG3 15#^b33844|algebraic]] over $F$.

> [!Proposition]
> Let $K/F$ be a field extension. Assume that $\alpha\in K$ is algebraic over $F$. Then $F(\alpha)/F$ is an algebraic extension. 
> 
> > [!Proof]-
> > 
> > Let $n=\text{deg}(\text{Irr}(\alpha; F))$. Let $\beta\in F(\alpha)$. Then $\{ 1, \beta, \dots, \beta^{n} \}\subseteq F(\alpha)$ is linearly dependent over $F$ by [[LEC ALG3 15#^5c70c9]]. Thus, there exist coefficients $a_{0}, \dots, a_{n}\in F$ not all zero such that $\sum_{i=o}^{n}a_{i}\beta^{i}=0$. Thus, $\beta$ is algebraic over $F$.
> > 
> 

> [!Proposition]
> Let $K/F$ be a field extension and $\alpha\in K$ be algebraic over $F$. Suppose $\text{deg}(\text{irr}(\alpha; F))=n$. If $\beta\in F(\alpha)$, then $\text{deg}(\text{irr}(\beta; F))\leq n$. 
> 
> > [!Proof]-
> > Since $\beta\in F(\alpha)$ and since $F(\beta)$ is the smallest subfield of $F(\alpha)$ containing $\beta$ and $F$, we have $F(\beta)\subseteq F(\alpha)$. Since $\text{dim}_{F}(F(\alpha))=n$, we get $\text{dim}_{F}(F(\beta))\leq n$. We know that $\text{deg}(\text{irr}(\beta; F))=\text{dim}_{F}(F(\beta))\leq n$. 
> 

> [!Proposition]
> Let $F\subseteq K$ be a field extension. Suppose $\alpha, \beta\in K$ be algebraic over $F$. If $\text{irr}(\alpha; F)=\text{irr}(\beta; F)$ then there is an isomorphism $\psi:F(\alpha)\to F(\beta)$ fixing elements of $F$ such that $\psi(\alpha)=\beta$. 
> 
> > [!proof]-
> > Consider $\psi$ as in the statement. We want to show that $\psi$ is an isomorphism of rings. Note that by definition, $\psi$ is a ring homomorphism (this actually requires the irreducible polynomials to be equal!). Since $\ker \psi\ne (1)$, and $F[\alpha]$ is a field, we must have $\ker(\psi)=(0)$, that is, $\psi$ is injective. Note that the $F$-basis $\{ 1, \alpha, \dots, \alpha^{n-1} \}$ of $F[\alpha]$ maps to the $F$-basis $\{ 1, \beta, \dots, \beta^{n-1} \}$ of $F[\beta]$. Since $\psi$ is a $F$-linear map, we get $\psi$ is surjective.  
> 

The converse is not true if we do not assume $\psi(\alpha)=\beta$. Consider $F=\mathbb{R}$, $K=\mathbb{C}$, $\alpha=i$, $\beta=2i$.

"Replace field by a ring, then need monic for finite extension."

[Proposition]
Let $K, K'$ be field extensions of $F$ and $\psi:K\to K'$ be a ring homomorphism ==fixing $F$==($\psi$ can be extended to a map $\overline{\psi}:K[X]\to K'[X]$). Let $\alpha\in K$ be a root of $f(x)\in F[X]$. Then $\psi(\alpha)$ is a root of $\psi(f)$.

[!Proof]-
Let $f(x)=\sum_{i=0}^{n}a_{i}x^{i}$. We have $f(\alpha)=0$. Then, 
$$
\begin{align}
  \psi(f)(\psi(\alpha)) & =f(\psi(\alpha)) \\
 & =\sum_{i=0}^{n} a_{i}(\psi(\alpha)^{i}) \\
 & =\psi(f(\alpha)) \\
 & =\psi(0)=0.
\end{align}
$$


For example, this shows that if $\alpha$ is a root of $f(x)\in \mathbb{R}[x]$, then $\overline{\alpha}$ is also a root of $f(x)$. 

> [!Definition]
> We say $\text{dim}_{F}(K)$ is the **degree** of the field extension $K/F$ and denote it by $[K:F]$. 
> If $[K:F]$ is finite, we say $K/F$ is a finite (field) extension. 

By [[LEC ALG3 15#^5c70c9]], If $K/F$ and $\alpha\in K$ is algebraic, then $[F(\alpha):F]< \infty$. 

> [!Lemma]
> If $[K:F]$ is finite, then $K$ is algebraic over $F$.
> 
> > [!Proof]-
> > 
> > Suppose $[K:F]=n$. Choose $\alpha\in K$. Then the elements $1, \alpha, \dots, \alpha^{n}$ are linearly dependent over $F$. A relation of linear dependence now gives the desired polynomial in $F[x]$ that $\alpha$ must satisfy. 

