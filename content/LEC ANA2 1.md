---
tags:
  - ANA2
  - Lecture
  - Processed
date: 2025-08-18
time: 15:26
---
Reviewed [[LEC CAL1 6#Constructing the completion of a metric space|construction]] of $\mathbb{R}$ as the completion of $\mathbb{Q}$, metric spaces, vector spaces, [[LEC ALG1 21#Normed spaces|normed spaces]], and the [[LEC CAL1 3#Equivalence of norms|equivalence of norms in finite dimensional vector spaces]]. 

# Sequence spaces

> [!Definition] 
> Let $1\leq p\leq \infty$. Let $l_{p}$ be defined as follows:
> $$
> \mathscr{l}_{p}:=\{ (a_{n})_{n=1}^{\infty} \}:a_{n}\in \mathbb{R}\text{ or }\mathbb{C}, \text{ and }\sum_{n=1}^{\infty} |a_{n}|^{p}< \infty \}.
> $$
> Let $\mathscr{l}_{\infty}$ denote $(B(\mathbb{N}), \lVert \cdot \rVert_{\infty})$ (this is the space defined [[LEC ANA1 33#Another way to understand uniform convergence|here]] with $X=\mathbb{N}$, where we have shown that it is a NLS). 

@kumaresanTopologyMetricSpaces2005 1.1.38 proves that $\mathscr{l}_{p}$ for $1\leq p< \infty$ is a normed linear space with the norm defined by $\lVert (a_{n}) \rVert_{p}:=\left( \sum_{n=1}^{\infty}|a_{n}|^{p} \right)^{1/p}$. 