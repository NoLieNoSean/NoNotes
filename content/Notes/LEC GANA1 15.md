---
id: "613"
date: 2026-10-26
time: 13:02
tags:
  - Lecture
  - GANA1
desc: adjoint and unitary operators yada yada
---
# Corolllaries to Riesz lemma
> [!Remark]
> $H$ and $H^{*}$ are anti-isomorphic, i.e , $\langle \phi_{x}, \phi_{y}\rangle_{H^{*}} = \langle y, x\rangle_{H}$ defines an inner product on $H^{*}$.

> [!Corollary]
> For $T \in B(H,K)$,
> $$
> \lVert T \rVert = \sup_{\lVert x \rVert =1\\x \in H} \lVert Tx \rVert = \sup_{x \in B_{1}^{H}\\ y \in B_{1}^{K}} \lvert \langle Tx, y\rangle \rvert
> $$
> > [!Proof]-
> > By Riesz representation theorem, for any $z \in K$,
> > $$
> > \lVert z \rVert = \lVert \phi_{z} \rVert = \sup_{\lVert y\leq 1 \rVert }\lvert \langle z, x\rangle \rvert 
> > $$
> > Take $z = Tx$.
> 

[!Corollary]
If $\langle Tx, y \rangle = \langle Sx,y \rangle, \forall x \in  H, \forall y \in  K$ then $T = S$.
[!Proof]-
$\langle Tx, y \rangle= \langle Sx,y \rangle \implies \langle (T-S)x, y \rangle=0$.
Now apply the previous corollary.

[!Corollary]
If $T, S \in L(H)$ and $\langle Tx, x \rangle= \langle Sx, x \rangle$ then $T = S$.
[!Proof]-

