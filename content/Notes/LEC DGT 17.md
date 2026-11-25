---
id: "588"
date: 2026-10-16
time: 10:30
tags:
  - Lecture
  - DGEO
pics: true
desc: symmetries of the curvature tensor, commutator of covariant derivatives, curvature and parallel transport
---
# Symmetries of the curvature tensor


[!Proposition]
The $(0, 4)$-[[LEC DGT 16#^e854a7|curvature tensor]] $\text{Rm}$ has the following symmetries:
1. Antisymmetry in the first two arguments:
   $\text{Rm}(X, Y, Z, W)=-\text{Rm}(Y, X, Z, W)$
2. Antisymmetry in the last two arguments:
   $\text{Rm}(X, Y, Z, W)=-\text{Rm}(X, Y, W, Z)$
3. Pair symmetry:
   $\text{Rm}(X, Y, Z, W)=\text{Rm}(Z, W, X, Y)$.

[!Proof]-

(1) This follows immediately from the definition of $R$. 

Indeed, 
$$
 \begin{aligned} R(Y,X)Z &=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ -\nabla_{[Y,X]}Z\\ &=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ +\nabla_{[X,Y]}Z\\ &=-R(X,Y)Z. \end{aligned}
$$
---






[!Proposition]
The $(1, 3)$-curvature tensor $R$ satisfies
$$
R(W, X)Y+R(X, Y)W+R(Y, W)X=0.
$$


---

[!Proposition]
Recall [[LEC DGT 11#^92ef37]]. Let $\Gamma:J\times I\to M$ be smooth, $S=\partial _s\Gamma$, $T=\partial_{t}\Gamma$. Let $V$ be a vector field along $\Gamma$. Then, 
$$
D_{s}D_{t}V-D_{t}D_{s}V=R(S, T)V.
$$

---

> [!Proposition]
> Let $p\in M$, $u, v\in T_{p}M$. Let $\Gamma:I\times I\to M$ be smooth with $\Gamma(0, 0)=p$, $u=\partial_{s}\Gamma(0, 0)$, $v=\partial_{t}\Gamma(0, 0)$. 
> 
> Let $P(\delta, \epsilon):T_{p}M\to T_{p}M$ denote parallel transport along the loop $\Gamma(0, 0)\to \Gamma(0, \epsilon)\to \Gamma(\delta, \epsilon)\to \Gamma(\delta, 0)\to \Gamma(0, 0)$ in $M$. 
> 
> Then, for $w\in T_{p}M$, we have
> $$
> \lim_{ \delta, \epsilon \to 0 } \frac{P(\delta, \epsilon)w-w}{\delta\epsilon}=R(u, v)w.
> $$
> 