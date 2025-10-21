---
id: "322"
date: 2025-10-21
time: 09:54
tags:
---
[!Proposition]
Let $F\subseteq K$ be a field extension. Assume that $\alpha\in K$ is algebraic over $F$. Then $F\subseteq F(\alpha)$ is an algebraic extension. 

[!Proof]-
Let $n=\text{deg}(\text{irr}(\alpha; F))$. Let $\beta\in F[\alpha]$. Then $\{ 1, \beta, \dots, \beta^{n} \}\subseteq F[\alpha]$ is linearly dependent over $F$. Thus, there exist coefficients $a_{0}, \dots, a_{n}\in F\setminus \{ 0 \}$ such that $\sum_{i=o}^{n}a_{i}\beta^{i}=0$. So, $\varphi$ satisfies the polynomial $g(x)=\sum_{i=0}^{n}a_{i}x^{i}$. Thus, $\beta$ is algebraic over $F$. Thus, $F[\alpha]$ is a field extension of $F$.

[!Proposition]
$F\subseteq K$ field extension. Let $\alpha\in K$ be algebraic over $F$, and $k=F[\alpha]$. Suppose $\text{deg}(\text{irr}(\alpha; F))=n$. If $\beta\in K$, then $\text{deg}(\text{irr}(\beta; F))\leq n$. 

[!Proof]-
Since $\beta\in F[\alpha]$ and since $F[\beta]$ is the smallest subfield of $F[\alpha]$ containing $\beta$ and $F$, we have $F[\beta]\subseteq F[\alpha]$. Since $\text{dim}_{F}(F[\alpha])=n$, we get $\text{dim}_{F}(F[\beta])\leq n$. We know that $\text{deg}(\text{irr}(\beta; F))=\text{dim}_{F}(F[\beta])\leq n$. 


[!Proposition]
Let $F\subseteq K$ be a field extension. Suppose $\alpha, \beta\in K$ be algebraic over $F$. If $\text{irr}(\alpha; F)=\text{irr}(\beta; F)$ then there is an isomorphism $\psi:F(\alpha)\to F(\beta)$ fixing elements of $F$ such that $\psi(\alpha)=\beta$. 

[!proof]-
Consider $\psi$ as in the statement. We want to show that $\psi$ is an isomorphism of rings. Note that by definition, $\psi$ is a ring homomorphism (this actually requires the irreducible polynomials to be equal!). Since $\ker \psi\ne (1)$, and $F[\alpha]$ is a field, we must have $\ker(\psi)=(0)$, that is, $\psi$ is injective. Note that the $F$-basis $\{ 1, \alpha, \dots, \alpha^{n-1} \}$ of $F[\alpha]$ maps to the $F$-basis $\{ 1, \beta, \dots, \beta^{n-1} \}$ of $F[\beta]$. Since $\psi$ is a $F$-linear map, we get $\psi$ is surjective.  

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

[!Definition]

Let $F\subseteq K$ be a field extension. We call $\text{dim}_{F}(K)$ to be the degree of the field extension $F\subseteq K$ and denote it by $[K:F]$.

If $[K:F]$ is finite, we call $F\subseteq K$ to be a finite (field) extension. 

[!Example]
If $F\subseteq K$ and $\alpha\in K$ is algebraic, then $[F(\alpha):F]< \infty$. 

[!Lemma]
If $[K:F]$ is finite, then $K$ is algebraic over $F$.