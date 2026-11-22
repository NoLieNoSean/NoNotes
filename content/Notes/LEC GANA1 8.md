---
id: "561"
date: 2026-09-11
time: 15:30
tags:
  - Lecture
  - GANA1
desc: Product measure, Tonelli's and Fubini's theorems, Integral of a complex valued function
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
> Suppose $F:(X\times Y, \mathcal{F}\otimes \mathcal{G})\to[0, \infty]$ is measurable, where $(X, \mathcal{F}, \mu)$ and $(Y, \mathcal{G}, \nu)$ are $\sigma$-finite measure spaces. Then, 
> 1. the section $y\mapsto F(x, y)$ is measurable on $Y$ for all $x\in X$, and the map $x \mapsto\int_{Y} F(x, y)\,d\nu$ is measurable on $X$, 
> 2. the section $x\mapsto F(x, y)$ is measurable on $X$ for all $y\in Y$, and the map $y \mapsto\int_{X} F(x, y)\,d\mu$ is measurable on $Y$,
> 
> and
> $$
> \int_{X\times Y}F(x, y)\,d(\mu \otimes \nu)=\int_{X}\left( \int_{Y}F(x, y)\,d\nu \right)d\mu=\int_{Y}\left( \int_{X}F(x, y)\,d\mu \right)\,d\nu.
> $$
> 

^bb4d7f

trivial for simple $F$, use MCT for general $F$. 

> [!Corollary]
> Let $(X, \mathcal{F}, \mu)$ and $(Y, \mathcal{G}, \nu)$ be $\sigma$-finite measure spaces.
> Suppose $F:(X, \mathcal{F})\to[0, \infty]$ is measurable. Then, $F:(X\times Y, \mathcal{F}\otimes \mathcal{G})\to [0, \infty]$, $(x, y)\mapsto F(x)$ is measurable, and
> $$
> \int_{X\times Y}F(x)\,d(\mu \otimes \nu)= \nu(Y)\int_{X}F(x)\,d\mu.
> $$
> 
> 

^665d25

> [!Corollary]
> Let $(X, \mathcal{F}, \mu)$ and $(Y, \mathcal{G}, \nu)$ be $\sigma$-finite measure spaces. Let $1\leqslant p< \infty$. 
> Let $f\in L^{p}(X, \mathcal{F}, \mu; \mathbb{R})$, $g\in L^{p}(Y, \mathcal{G}, \nu; \mathbb{R})$, and define $h(x, y)=f(x)g(y)$. Then, 
> $$
> \begin{aligned} \int_{X\times Y}|h(x,y)|^p\,d(\mu \otimes \nu) &=\int_{X\times Y}|f(x)|^p|g(y)|^p\,d(\mu \otimes \nu)\\ &=\int_X |f(x)|^p \left(\int_Y|g(y)|^p\,d\nu\right)d\mu\\ &=\left(\int_X|f|^p\,d\mu\right) \left(\int_Y|g|^p\,d\nu\right)\\&=\lVert f \rVert _{p}^{p}\lVert g \rVert _{p}^{p}\\ &<\infty, \end{aligned}
> $$
> so $h\in L^{p}(X\times Y)$, $\lVert h \rVert_{p}=\lVert f \rVert_{p}\lVert g \rVert_{p}$. 

^541a16


> [!Theorem] Fubini
> Suppose $F\in L^{1}(X\times Y, \mathcal{F}\otimes \mathcal{G}, \mu \otimes \nu)$ (so $F$ is [[LEC GANA1 7#^f29946|integrable]] on the product space), where $(X, \mathcal{F}, \mu)$ and $(Y, \mathcal{G}, \nu)$ are $\sigma$-finite measure spaces. Then, 
> 1. the section $y\mapsto F(x, y)$ is measurable on $Y$ for all $x\in X$, integrable on $Y$ for almost all $x\in X$, and $x \mapsto \int_{Y}F(x, y)d\nu$ [^1] is integrable on $X$,
> 2. the section $x\mapsto F(x, y)$ is measurable on $X$ for all $y\in Y$, integrable on $X$ for almost all $y\in Y$, and $y \mapsto \int_{X}F(x, y)d\mu$ [^1] is integrable on $Y$,
> 
> and
> $$
> \int_{X\times Y}F(x, y)\,d(\mu \otimes \nu)=\int_{X}\left( \int_{Y}F(x, y)\,d\nu \right)d\mu=\int_{Y}\left( \int_{X}F(x, y)\,d\mu \right)\,d\nu.
> $$
> 

^18d8a9


[^1]: defined arbitrarily at values for which the section is not integrable.

---

# Integral of a complex valued function

> [!Definition] Integral of a complex valued function
> Let $(X, \mathcal{F}, \mu)$ be a measure space, and let $f:X\to \mathbb{C}$ be measurable. Write
> $$
> f=u+iv, \quad u=\text{Re}\,f, v=\text{Im}\,f.
> $$
> Since the real and imaginary part maps are continuous, $u$ and $v$ are measurable real-valued functions. 
> 
> We call $f$ **integrable** if
> $$
> \int_{X}|f|d\mu< \infty. 
> $$
> Since $|u|, |v|\leqslant |f|$, integrability of $f$ implies integrability of both $u$ and $v$. Conversely, since $|f|=\sqrt{ u^{2}+v^{2} }\leqslant |u|+|v|$, integrability of $u$ and $v$ implies integrability of $f$. Thus, 
> $$
>  f\in L^1(\Omega;\mathbb C) \iff \operatorname{Re}f,\operatorname{Im}f\in L^1(\Omega;\mathbb R).
> $$
> We can therefore define the integral of $f$ by
> $$
> \int_\Omega f\,d\mu := \int_\Omega \operatorname{Re}f\,d\mu +i\int_\Omega \operatorname{Im}f\,d\mu,
> $$
> where the integrals on the right are from [[LEC GANA1 7#^f29946]]. 

^91b3af

Clearly, [[#^91b3af]] coincides with [[LEC GANA1 7#^f29946]] for real valued functions. 

> [!Proposition]
> Let $f, g:(X, \mathcal{F}, \mu)\to \mathbb{C}$ be integrable functions. 
> 1. $\int(\alpha f+g)=\alpha \int f+\int g$. 
> 2. $|\int f|\leqslant \int |f|$.
> 
> > [!Proof]-
> > 
> > (2) Let $I=\int f$. If $I=0$, we are done. Suppose $I\ne 0$. Let $\alpha=\overline{I}/|I|$. 
> > $$
> > \begin{align}
> >  & \text{Re}(\alpha f)\leqslant |\alpha f|=|f|. \\
> > \implies & \int\text{Re}(\alpha f)\leqslant \int |f|.
> > \end{align}
> > $$
> > But, 
> > $$
> > \begin{align}
> > \int\text{Re}(\alpha f) & =\text{Re}\left( \int\alpha f \right) \\
> >  & = \text{Re}\left( \alpha \int f \right) \\
> >  &  =|I|.
> > \end{align}
> > $$
> > 
> 

> [!Corollary] Tonelli
> 
> Let $(X,\mathcal F,\mu)$ and $(Y,\mathcal G,\nu)$ be $\sigma$-finite measure spaces, and let $f:(X\times Y, \mathcal{F}\otimes \mathcal{G})\to \mathbb{C}$ be measurable.
> 
> Since $|f|$ is nonnegative and measurable, [[#^bb4d7f|Tonelli]] gives
> $$
> \int_{X\times Y}|f|\,d(\mu \otimes \nu) = \int_X\left(\int_Y|f(x,y)|\,d\nu\right)d\mu= \int_Y\left(\int_X|f(x,y)|\,d\mu\right)d\nu.
> $$
> 

> [!Corollary] Fubini
> Let $(X,\mathcal F,\mu)$ and $(Y,\mathcal G,\nu)$ be $\sigma$-finite measure spaces, and let $f:(X\times Y, \mathcal{F}\otimes \mathcal{G})\to \mathbb{C}$ be [[#^91b3af|integrable]]. Then, its sections are integrable almost everywhere, and
> $$
>  \int_{X\times Y}f\,d(\mu \otimes \nu) = \int_X\left(\int_Y f(x,y)\,d\nu\right)d\mu =\int_Y\left(\int_X f(x,y)\,d\mu\right)d\nu.
> $$
> 
> > [!Proof]-
> > 
> > Since $|u|, |v|\leqslant |f|$, both $u$ and $v$ are integrable on $X\times Y$. Apply the [[#^18d8a9|ordinary real valued Fubini theorem]] to $u$ and $v$, and combine them:
> > $$
> > \begin{aligned} \int_{X\times Y}f &=\int_{X\times Y}u+i\int_{X\times Y}v\\ &=\int_X\left(\int_Y u(x,y)\,d\nu(y) +i\int_Y v(x,y)\,d\nu\right)d\mu\\ &=\int_X\left(\int_Y f(x,y)\,d\nu\right)d\mu. \end{aligned} 
> > $$
> > 

^ec7a42
