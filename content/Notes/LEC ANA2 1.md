---
tags:
  - ANA2
  - Lecture
  - Processed
date: 2025-08-18
time: 15:26
---
Reviewed metric spaces, vector spaces, [[LEC ALG1 21#Normed spaces|normed spaces]], and the [[LEC CAL1 3#Equivalence of norms|equivalence of norms in finite dimensional vector spaces]]. 

---
# Sequence spaces

> [!Definition] 
> Let $1\leq p\leq \infty$. Define
> $$
> \mathscr{l}_{p}:=\{ (a_{n})_{n=1}^{\infty} \}:a_{n}\in \mathbb{R}\text{ or }\mathbb{C}, \text{ and }\sum_{n=1}^{\infty} |a_{n}|^{p}< \infty \}.
> $$
> Let $\mathscr{l}_{\infty}$ denote $(B(\mathbb{N}), \lVert \cdot \rVert_{\infty})$ (this is the space defined [[LEC ANA1 33#Another perspective on uniform convergence|here]] with $X=\mathbb{N}$, which we have shown to be an NLS). 

@kumaresanTopologyMetricSpaces2005 1.1.38 proves $\mathscr{l}_{p}$ for $1\leq p< \infty$ is a NLS with norm defined by $\lVert (a_{n}) \rVert_{p}:=\left( \sum_{n=1}^{\infty}|a_{n}|^{p} \right)^{1/p}$. 