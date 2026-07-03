---
id: "481"
date: 2026-06-25
time: 00:11
tags:
---
See @schultensIntroduction3manifolds2014 Appendix A; #td Add stuff from @guilleminDifferentialTopology1974 when you find the time 

Transversality is to $\textsf{Diff}$ what general position is to $\textsf{Top}$. 

#td Look at how the tangent bundle is an instance of a [[Fiber bundles#^a3d022|fiber bundle]]. 

> [!Theorem] Sard
> The set of critical values of a differentiable map from one manifold to another has Lebesgue measure $0$. 

> [!Definition] Transversality for submanifolds
> Two submanifolds $Y, Z$  of the manifold $X$ are **transverse** at the point $p\in Y\cap Z$ if $T_{p}(Y)$ and $T_{p}(Z)$ together span $T_{p}(X)$. Two submanifolds of $X$ are **transverse** if they are transverse at each point of intersection. We write $Y\pitchfork Z$. 

> [!Definition] Transversality in general
> Let $f:Z\to X$ be a differentiable map and let $Y$ be a submanifold of $X$. Let $y\in Y$ and let $z\in Z$ be such that $f(z)=y$. Then $f$ is **transverse** to $Y$ at $z$ if the image of $df_{z}$ and $T_{y}(Y)$ together span $T_{y}(X)$. The map $f$ is **transverse** to $Y$ if for every point $z\in Z$ such that $f(z)\in Y$, $f$ is transverse to $Y$ at $z$. 

This condition is sometimes expressed as 
$$
\mathrm{im}\,(df_{z})+T_{y}(Y)=T_{y}(X),
$$

^d8fe66

with equality interpreted appropriately. 

> [!Remark]
> Let $X$ be a manifold of dimension $n_{x}$ with submanifolds $Y$, $Z$ of dimensions $n_{y}$, $n_{z}$. If $Y\pitchfork Z$, then it is a consequence of [[Transversality#^d8fe66]] that the dimension of $Y\cap Z$ is $n_{y}+n_{z}-n_{x}$. 

^47e8ef

The following theorem tells us that transversality is attainable via small [[Classification of compact surfaces#^d2add7|isotopies]] called **perturbations**. #q But the theorem only mentions homotopies, not isotopies?

> [!Theorem] The Transversality Homotopy Theorem, @schultensIntroduction3manifolds2014 A.0.19
> For any smooth map $f:Z\to X$ and any submanifold $Y$ of $X$ there exists a smooth map $g:Z\to X$ homotopic to $f$ that is transverse to $Y$. Moreover, suppose that $H:Z\times I\to X$ is a homotopy between $f$ and $g$. Then for all $\epsilon> 0$, there map $g_{\epsilon}:Z\to X$ defined by $g_{\epsilon}(z)=H(z, \epsilon)$ is also transverse to $Y$. 

^c993d4

