---
id: "556"
date: 2026-09-09
time: 11:52
tags:
  - GGT
  - Lecture
---
Ref: Bridson-Haefligh, Part 1 ch 3

Recall: $(X, d)$ is called a length space if $d(x, y)=\inf l(c)$, $c:I\to X$, $c(0)=x$, $c(1)=y$. 

Given $(X, d)$, let $\overline{d}$ be the length metric (infimum over lengths of rectifiable curves, allowed to be infinity for some pairs of points). 

Note that the topologies induced by $d$ and $\overline{d}$ may be different. For ex the graph $\subseteq I\times I$ of a nonrectifiable curve, or $\mathbb{Q}$ with the standard metric (not path connected; $d(x, y)=\infty$ for $x\ne y$). 

[!Theorem]
Let $X$ be a length metric space. Suppose that $X$ is complete (as a metric space) and locally compact. Then
1. Every closed bounded subset in $X$ is compact. 
2. $X$ is a geodesic space. 

For example, $\mathbb{R}^{2}\setminus \{ 0 \}$ with $\lVert \cdot \rVert$ is not complete; it is also not a geodesic metric space. $\mathbb{R}^{2}\setminus \{ 0 \}\cong S^{1}\times \mathbb{R}$, however, satisfies the hypotheses. 

[!Corollary]
If $X$ is a compact metric space and if $\{ \sigma_{n}:I\to X \}$ is a sequence of linear reparameterizaed geodesics then there exists a linear repameterized geodesic $\sigma:I\to X$ and a subsequence $\{ \sigma_{n_{k}} \}$ such that $\{ \sigma_{n_{k}} \}$ converges uniformly to $\sigma$. 

---



[!Theorem]
Suppose $X$ is a compact geodesic metric space which is semi locally simply connected (there exists basis $\{ U \}$ of $X$ st fungphomos are trivial). Then every loop $S\to X$ is either null-homotopic or homotopic to a closed local geodesic. 

[!Proof]-
Suppose $\sigma$ is not nullhomotopic. Let $L=\inf \{ l(\sigma'):\sigma'\sim \sigma \}> 0$ (use a simply conn neighborhood and the fact that for small enough $\epsilon$ the entire loop must lie in there. finite since every (possibly non-rectifiable) curve in such a space is homotopic to a rectifiable curve (obtained by taking local homotopies to geodesics)). 

Let $\sigma_{n}:S^{1}\to X$ be such that $\sigma_{n}\sim \sigma$, $l(\sigma_{n})\to l$. Then there exists a subsequence $\sigma_{n_{k}}$ such that $\sigma_{n_{k}}\to\sigma'$. 

---

[!Definition]
Let $X$ be a uniquely geodesic metric space. Let $\sigma_{x, y}:I\to X$ be the linearly reparameterized geodesic joining $x$ to $y$. We say that "geodesics in $X$ vary continuously wrt endpoints" if $\{ x_{n} \}\to x$ and $\{ y_{n} \}\to y$ in $X$, then $\sigma_{x_{n}, y_{n}}\to\sigma_{x, y}$ uniformly. 

[!Corollary]
If a proper metric space $X$ is uniquely geodesic, then its geodesics vary continuously wrt end points. 

---

$\tilde{X}\to X$ is a local homeomorphism, $\tilde{X}$ is $T_{2}$. Then we obtain a length metric $\tilde{d}$ on $\tilde{X}$ by defining by $l(\tilde{\sigma})=l(p\circ \tilde{\sigma})$ for $\tilde{\sigma}:I\to \tilde{X}$ and using the usual definition for $\tilde{d}$. 