---
id: "623"
date: 2026-11-18
time: 16:28
tags:
  - GGT
---



# Model spaces

> [!Definition] Model spaces
> Given a real number $\kappa$, we denote by $M^{n}_{\kappa}$ the following metric spaces:
> 1. If $\kappa=0$, then $M^{n}_{0}$ is the Euclidean space $\mathbb{E}^{n}$; 
> 2. If $\kappa> 0$, then $M^{n}_{\kappa}$ is obtained from $\mathbb{S}^{n}$ by scaling the metric by $1/\sqrt{ \kappa }$. 
> 3. If $\kappa< 0$, then $M^{n}_{\kappa}$ is obtained from $\mathbb{H}^{n}$ by scaling the metric by $1/\sqrt{ -\kappa }$.

> [!Theorem] @bridsonMetricSpacesNonpositive1999 I.2.24
> 4. $\text{Isom}(\mathbb{E}^{n})\cong \mathbb{R}^{n}\rtimes O(n)$. 
> 5. $\text{Isom}(\mathbb{S}^{n})\cong O(n+1)$.
> 6. $\text{Isom}(\mathbb{H}^{n})\cong O(n, 1)_{+}$.

^d85d84

---
# CAT(k) spaces

> [!Definition] Comparison triangles and points
> 
> A triangle $\overline{\Delta}=\Delta(\overline{p}, \overline{q}, \overline{r})$ in $M^{2}_{\kappa}$ is called a **comparison triangle** for $\Delta=\Delta([p, q], [q, r], [r, p])$ if $d(\overline{p}, \overline{q})=d(p, q)$, $d(\overline{q}, \overline{r})=d(q, r)$, $d(\overline{r}, \overline{p})=d(r, p)$. 
> 
> Such a triangle always exists as long as $\Delta$ is small enough, and is unique up to isometry. 
> 
> A point $\overline{x}\in[\overline{q}, \overline{r}]$ is called a **comparison point** for $x\in[q, r]$ if $d(q, x)=d(\overline{q}, \overline{x})$; ditto for points $[r, p]$ and $[p, q]$. 

> [!Definition] CAT(k) space
> Let $X$ be a metric space and let $\kappa$ be a real number. Let $\Delta$ be a geodesic triangle in $X$ with perimeter less than $2D_{\kappa}$. Let $\overline{\Delta}\subseteq M_{\kappa}^{2}$ be a comparison triangle for $\overline{\Delta}$. Then, $\Delta$ is said to satisfy the $\text{CAT}(\kappa)$ inequality if for all $x, y\in\Delta$ and all comparison points $\overline{x}, \overline{y}\in \overline{\Delta}$, 
> $$
> d(x, y)\leqslant d(\overline{x}, \overline{y}).
> $$
> If $\kappa\leqslant 0$, then $X$ is called a **$\text{CAT}(\kappa)$ space** if $X$ is a *geodesic space all of whose geodesic triangles satisfy the $\text{CAT}(\kappa)$ inequality*. 
> 
> If $\kappa> 0$, then $X$ is called a $\text{CAT}(\kappa)$ space if $X$ is *$D_{\kappa}$-geodesic and all geodesic triangles in $X$ of perimeter less than $2D_{\kappa}$ satisfy the $\text{CAT}(\kappa)$ inequality*. 

> [!Definition]
> A metric space $X$ is said to be of **curvature $\leqslant \kappa$** if it is locally a $\text{CAT}(\kappa)$ space. i.e., for every $x\in X$ there exists $r_{x}> 0$ such that the ball $B(x, r_{x})$, endowed with the induced metric, is a $\text{CAT}(\kappa)$ space. 

This provides a good notion of an upper bound on curvature in an arbitrary metric space. 

A smooth Riemannian manifold has curvature $\leqslant \kappa$ in the above sense iff all of its sectional curvatures are $\leqslant \kappa$. 

## Basic properties

> [!Proposition] @bridsonMetricSpacesNonpositive1999 Prop. II.1.4
> Let $X$ be a $\text{CAT}(\kappa)$ space. 
> 1. There is a *unique* geodesic segment joining each pair of points $x, y\in X$ (provided $d(x, y)< D_{\kappa}$ if $\kappa> 0$), and this [[LEC GGT 9#^c423bf|geodesic segment varies continuously with its endpoints]]. 
> 2. Every local geodesic in $X$ of length at most $D_{\kappa}$ is a geodesic. 
> 3. The balls in $X$ of radius smaller than $D_{\kappa}/2$ are convex. 
> 4. The balls in $X$ of radius less than $D_{\kappa}$ are contractible. 
> 5. *Approximate midpoints are close to midpoints*. 

> [!Corollary]
> For $\kappa\leqslant 0$, any $\text{CAT}(\kappa)$ space is contractible. 

> [!Theorem] @bridsonMetricSpacesNonpositive1999 Thm. I.1.12
> 1. If $X$ is a $\text{CAT}(\kappa)$ space, then it is a $\text{CAT}(\kappa')$ space of every $\kappa'\geqslant \kappa$. 
> 2. If $X$ is a $\text{CAT}(\kappa')$ space for every $\kappa'>\kappa$, then it is a $\text{CAT}(\kappa)$ space. 

# Characterizations of CAT(k) spaces

> [!Proposition]
> Fix $\kappa\in \mathbb{R}$. Let $X$ be a metric space that is $D_{\kappa}$-geodesic. The following conditions are equivalent (when $\kappa> 0$ we assume that the perimeter of each geodesic triangle considered is smaller than $2D_{\kappa}$):
> 1. $X$ is a $\text{CAT}(\kappa)$ space. 
> 2. For every geodesic triangle $\Delta([p, q], [q, r], [r, p])$ in $X$ and every point $x\in[q, r]$, the following inequality is satisfied by the comparison point $\overline{x}\in[\overline{q}, \overline{r}]\subseteq \overline{\Delta}(p, q, r)\subseteq M_{\kappa}^{2}$:
> 	$$
> 	d(p, x)\leqslant d(\overline{p}, \overline{x}).
> 	$$
> 3. The Alexandrov angle between the sides of any geodesic triangle in $X$ with distinct vertices is no greater than the angle between the corresponding sides of its comparison triangle in $M^{2}_{\kappa}$. 
> 4. For every geodesic triangle $\Delta([p, q], [p, r], [q, r])$ in $X$ with $p\ne q$ and $p\ne r$, if $\gamma$ denotes the Alexandrov angle between $[p, q]$ and $[p, r]$ at $p$ and if $\Delta(\hat{p}, \hat{q}, \hat{r})\subseteq M^{2}_{\kappa}$ is a geodesic triangle with $d(\hat{p}, \hat{q})=d(p, q)$, $d(\hat{p}, \hat{r})=d(p, r)$ and $\angle_{\hat{p}}(\hat{q}, \hat{r})=\gamma$, then $d(q, r)\geqslant d(\hat{q}, \hat{r})$. 

> [!Example]
> $\mathbb{R}$-trees are $\text{CAT}(\kappa)$ for all $\kappa$. 

## CAT(0) spaces have a convex metric

> [!Definition] Convex metric
> A function $X\to \mathbb{R}$ defined on a geodesic metric space is **convex** if, for any geodesic path $c:I\to X$ parameterized proportional to arc length, the function $t\mapsto f(c(t))$ defined on the interval $I$ is convex. Equivalently, for each geodesic path $c:[0, 1]\to X$ parameterized proportional to arc length, we have
> $$
> f(c(s))\leqslant (s-1)f(c(0))+sf(c(1))
> $$
> for all $s\in[0, 1]$. 

> [!Proposition] @bridsonMetricSpacesNonpositive1999 Prop. II.2.2
> If $X$ is a $\text{CAT}(0)$ space, then the distance function $d:X\times X\to \mathbb{R}$ is convex, i.e. given any pair of geodesics $c, c':[0, 1]\to X$ parameterized proportional to arc length, the following inequality holds for all $t\in[0, 1]$:
> $$
> d(c(t), c'(t))\leqslant (1-t)d(c(0), c'(0))+td(c(1), c(1)).
> $$
> 
## Orthogonal projection onto complete, convex subsets

> [!Proposition]
> Let $X$ be a $\text{CAT}(0)$ space, and let $C$ be a convex subset which is complete in the induced metric. Then, 
> 1. for every $x\in X$, there exists a unique point $\pi(x)\in X$ such that $d(x, \pi(x))=d(x,C)$. 
> 2. if $x'$ belongs to he geodesic segment $[x, \pi(x)]$, then $\pi(x')=\pi(x)$. 
> 3. given $x\not\in C$ and $y\in C$, if $y\ne \pi(x)$, then $\angle_{\pi(x)}(x, y)\geqslant \pi/2$. 
> 4. the map $x \mapsto \pi(x)$ is a retraction of $X$ onto $C$ which does not increase distances; the map $H:X\times[0, 1]\to X$ associating to $(x, t)$ the point a distance $td(x, \pi(x))$ form $x$ on the geodesic segment $[x, \pi(x)]$ is a continuous homotopy from the identity map of $X$ to $\pi$. 

## The center of a bounded set

> [!Proposition] @bridsonMetricSpacesNonpositive1999 Prop. II.2.7
> Let $X$ be a complete $\text{CAT}(\kappa)$ space. If $Y\subseteq X$ is a bounded set of radius $r_{Y}< D_{\kappa}/2$, then there exists a unique point $c_{Y}\in X$, called the **center** of $Y$, such that $Y\subseteq \overline{B}(c_{Y}, r_{Y})$. 

^c2819d

> [!Corollary]
> 1. If $X$ is a complete $\text{CAT}(0)$ space and $\Gamma$ is a finite group of isometries of $X$ or, more generally, a group of isometries with a bounded orbit, then the fixed point set of $\Gamma$ is a nonempty convex subset of $X$. 
> 2. If a group $\Gamma$ acts properly and cocompactly by isometries on a $\text{CAT}(0)$ space, then $\Gamma$ contains only finitely many conjugacy classes of finite subgroups. 
> 
> > [!Proof]-
> > 
> > (2) follows from (1), [[LEC GGT 16#^17bebf]].5, and the fact that the isotropy groups of a proper action are finite. 