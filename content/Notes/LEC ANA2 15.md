---
id: "339"
date: 2025-10-31
time: 15:22
tags:
---
We've seen an example: $E\subseteq F\subseteq \overline{E}$, $E$ is path connected, $F$ is connected but not path connected, $\overline{E}$ is path connected.

[!Example]
Let $E=\{ (x, \sin(1/x)):x\in(0, 1] \}$. $\overline{E}=E\cup \{ 0\}\times[-1, 1]$. $E$ is path connected. $E$, $\overline{E}$ are connected. 

Claim: $\overline{E}$ is not path connected. Suppose there is a path $\gamma$ connecting $(0, 0)$ and $(1, \sin(1))$. Let $K=\gamma ^{-1}(\{ 0 \}\times[-1, 1])\subseteq[0, 1]$. $K$ is compact. Let $t_{0}=\sup K$. $t_{0}\in K$. For all $t> t_{0}$, $\gamma(t)\in E$. Thus, $P_{x}(\gamma(t_{0}))=0$, whereas $P_{x}(\gamma(t_{0}+1/k))> 0$ for all $k> 0$. 

For $k> 0$. there exists $n_{k}$ such that $t_{0}<\frac{1}{2\pi n_{k}+\theta}< t_{0}+1/k$. By the intermediate value theorem, there exists $t_{k}$ such that $P_{x}(\gamma(t_{k}))=\frac{1}{2\pi n_{k}+\theta}$. Let $t_{k}\to t_{0}$. $P_{y}(\gamma(t_{k}))\to \sin\theta$. Take $\theta$ such that $\sin\theta\ne P_{y}(\gamma(t_{0}))$. 


[!Example]
We've seen that $GL_{n}(\mathbb{R})$ is not connected. 

Claim: $GL_{n}(\mathbb{C})$ is connected. 

[!Lemma]
Let $p$ be a complex polynomial in $n$ complex variables. Let $Z(p)$ be the zero set of $p$. $\mathbb{C}^{n}\setminus Z(p)$ is path connected. 

[!proof]-

---

# Cantor set

to show $C$ is uncountable, show it is perfect. 

