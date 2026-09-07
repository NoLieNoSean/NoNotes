---
id: "532"
date: 2026-08-20
time: 15:33
tags:
  - Lecture
  - GANA1
desc: construction of the Caratheodory extension
---
[!Theorem]
Suppose $\mathcal{A}\subseteq P(\Omega)$ is an algebra. Let $\mu$ be a $\sigma$-additive function on $\mathcal{A}$. Then there exists a $\sigma$-algebra $\mathcal{M}\subseteq P(\Omega)$ such that $\mathcal{A}\subseteq \mathcal{M}$ and a measure $\tilde{\mu}$ on $\mathcal{M}$ that restricts to $\mu$ on $\mathcal{A}$. The extension is unique on $\sigma(\mathcal{A})$ if $\mu$ is $\sigma$-finite. 

[!Definition]
Define $\mu^{\star}:P(\Omega)\to[0, \infty]$ by
$$
\mu^{\star}(\mathcal{E})=\inf_{A_{n}\in \mathcal{A}, E\subseteq \bigcup_{n=1}^{\infty} A_{n}}\sum_{n=1}^{\infty}\mu(A_{n}),
$$
for $\mathcal{E}\subseteq \Omega$. 

[!Proposition]
1. $\mu^{\star}|_{\mathcal{A}}=\mu$. 
2. $\mu^{\star}$ is countably subadditive. 


[!Definition]
$\mathcal{M}:=\{ \mathcal{F}\in P(\Omega):\mu^{\star}(E)=\mu^{\star}(\mathcal{E}\cap \mathcal{F})+\mu^{\star }(\mathcal{E}\cap \mathcal{F}^{c}) \,\forall \mathcal{E}\in P(\Omega) \}$. 

[!Proposition]
$\mathcal{A}\subseteq \mathcal{M}$. 

[!Proof]-
By subadditivity, it suffices to prove
$$
\mu^{\star}(\mathcal{E}\cap \mathcal{A})+\mu^{\star}(\mathcal{E}\cap \mathcal{A}^{c})\leqslant \mu^{\star}(E)\quad \forall \mathcal{E}\in P(\Omega). 
$$

[!Proposition]
$\mathcal{M}$ is an algebra. 

[!Proposition]
$\mu^{\star}$ is finitely additive on $\mathcal{M}$. 

[!Proposition]
$\mathcal{M}$ is a $\sigma$-algebra. 

[!Proof]-
Let $\{ \mathcal{A}_{n} \}_{n=1}^{\infty}$ be from $\mathcal{M}$. Since $\mathcal{M}$ is an algebra, we can assume these are disjoint. 

