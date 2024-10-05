---
tags:
  - ANA1
---


>[!Definition]
>A set $X$, whose elements are called *points*, is said to be a *metric space* if with any two points $p$ and $q$ of $X$ there is associated a real number $d(p,q)$, called the distance between $p$ and $q$, such that 
>- $d(p,q)>0$ if $p\ne q$
>- $d(p,p) = 0$
>- $d(p,q) = d(q,p)$
>- $d(p,q) \le d(p,r) + d(r,q)$
>The function $d$ is called a *distance function*, or a *metric*.

Observe:
- A metric space requires $\mathbb{R}$ to exist.
- Every subset $Y$ of a metric space $X$ is also a metric space.
- The [[Euclidean spaces]] $\mathbb{R}^{k}$ are metric spaces, with the distance function defined by $d(\mathbf{x},\mathbf{y}) = |\mathbf{x}-\mathbf{y}|,\quad \mathbf{x},\mathbf{y} \in \mathbb{R}^{k}$.
---
## Definitions (à la Kulkarni)

### Open/Closed ball
>[!Definition]
>If $x \in X$ where $(X,d)$ is a metric space and $r\in \mathbb{R}, r>0$ , the *open* (or *closed*) *ball* $B$ with center at $x$ and radius $r$ is defined to be the set of all $y\in X$ such that $d(x,y)<r$(or $d(x,y)\leq r$). These are analogues of open (or closed) intervals in $\mathbb{R}$. 
### Neighborhood
>[!Definition]
>A *neighborhood* of $p\in X$ in a metric space $(X,d)$ is any set $S\subseteq X$ which contains an open ball centered at $p$ with radius $r>0$. Basically, elements of $X$ not in the neighborhood should not get arbitrarily close to $p$.

>[!Warning]
>Rudin's neighborhood is Kulkarni's open ball.

### Diameter
>[!Definition]
>In a metric space $(X,d)$, for $S\subseteq X$, $\text{diam}~S \equiv \sup \{ d(p,q)\ | \ p,q\in S \}$. The supremum is taken in the [[The extended real number system|extended real number system]], allowing the diameter to be $\infty$.

### Boundedness

>[!Definition]
>In a metric space $(X,d)$, $E\subseteq X$ is bounded if there is a real number $M$ and a point $q\in X$ such that $d(p,q)<M$ for all $p\in E$. 





%%
### Convex set
We call a set $E\subset \mathbb{R}^{k}$ *convex* if $\lambda \mathbf{x}+(1-\lambda)\mathbf{y}\in E$ whenever $\mathbf{x}\in E, \mathbf{y}\in E$, and $0<\lambda<1$.
For example, balls and k-cells are convex. 
%%

