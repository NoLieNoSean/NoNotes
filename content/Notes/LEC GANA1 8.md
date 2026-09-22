---
id: "561"
date: 2026-09-11
time: 15:30
tags:
  - Lecture
  - GANA1
desc: Product measure, Tonelli's and Fubini's theorems
P1: true
---
# The product measure

Fix measure spaces $(X, \mathcal{F}, \mu)$ and $(Y, \mathcal{G}, \nu)$ with *$\sigma$-finite* measures. We want to construct a product a product space $(X\times Y, \mathcal{F}\otimes \mathcal{G}, \mu \otimes \nu)$. 

Define 
$$
\mathcal{A}:=\left\{ \coprod_{i=1}^{n} A_{i}\times B_{i}:A_{i}\in \mathcal{F}, B_{i}\in \mathcal{G}  \right\} .
$$
> [!Proposition]
> $\mathcal{A}$ is an algebra.

> [!Definition] Product algebra
> 1. Define $\mathcal{F}\otimes \mathcal{G}:=\sigma(\mathcal{A})$. 
> 2. Let $E\in \mathcal{F}\otimes \mathcal{G}$. For $x\in X$, define $E_{x}\subseteq Y$ by $E_{x}=\{ y\in Y:(x, y)\in E \}$. For $y\in Y$, define $E^{y}\subseteq X$ by $E^{y}=\{ x\in X:(x, y)\in E \}$. 

> [!Proposition]
> If $E\in \mathcal{F}\otimes \mathcal{G}$, then
> 1. $E_{x}\in G$ for all $x\in X$, and $E^{y}\in \mathcal{F}$ for all $y\in Y$. 
> 2. The map $( x \mapsto \nu(E_{x})):(X, \mathcal{F}, \mu)\to \mathbb{R}$ is measurable; the map $(y\mapsto \mu(E^{y})):(Y, \mathcal{G}, \nu)\to \mathbb{R}$ is measurable. 
> 3. $\int_{X}\nu(E_{x})\,d\mu=\int_{Y}\mu(E^{y})\,d\nu$. 


> [!Definition] Product measure
> Let $E\in \mathcal{F}\otimes \mathcal{G}$. Define
> $$
> (\mu \otimes \nu)(E):=\int_{X}\nu(E_{x})d\mu=\int_{Y}\mu(E^{y})d\nu.
> $$
> 


> [!Theorem] Tonelli
> Suppose $F:(X\times Y, \mathcal{F}\otimes \mathcal{G})\to[0, \infty]$ is measurable. Then, 
> 1. the section $y\mapsto F(x, y)$ is measurable on $Y$ for all $x\in X$, and the map $x \mapsto\int_{Y} F(x, y)\,d\nu$ is measurable on $X$, 
> 2. the section $x\mapsto F(x, y)$ is measurable on $X$ for all $y\in Y$, and the map $y \mapsto\int_{X} F(x, y)\,d\mu$ is measurable on $Y$,
> 
> and
> $$
> \int_{X\times Y}F(x, y)\,d(\mu \otimes \nu)=\int_{X}\left( \int_{Y}F(x, y)\,d\nu \right)d\mu=\int_{Y}\left( \int_{X}F(x, y)\,d\mu \right)\,d\nu.
> $$
> 

> [!Theorem] Fubini
> Suppose $F\in L^{1}(X\times Y, \mathcal{F}\otimes \mathcal{G}, \mu \otimes \nu)$ (so $F$ is [[LEC GANA1 7#^f29946|integrable]] on the product space). Then, 
> 1. the section $y\mapsto F(x, y)$ is measurable on $Y$ for all $x\in X$, integrable on $Y$ for almost all $x\in X$, and $x \mapsto \int_{Y}F(x, y)d\nu$ [^1] is integrable on $X$,
> 2. the section $x\mapsto F(x, y)$ is measurable on $X$ for all $y\in Y$, integrable on $X$ for almost all $y\in Y$, and $y \mapsto \int_{X}F(x, y)d\mu$ [^1] is integrable on $Y$,
> 
> and
> $$
> \int_{X\times Y}F(x, y)\,d(\mu \otimes \nu)=\int_{X}\left( \int_{Y}F(x, y)\,d\nu \right)d\mu=\int_{Y}\left( \int_{X}F(x, y)\,d\mu \right)\,d\nu.
> $$
> 



[^1]: defined arbitrarily at values for which the section is not integrable.
