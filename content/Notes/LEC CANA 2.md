---
id: "377"
date: 2026-01-08
time: 15:31
tags:
  - CANA
---
# Cauchy's theorem

> [!Theorem] Goursat
> If $\Omega$ is an open set in $\mathbb{C}$, and $T\subseteq \Omega$ a triangle whose interior is also contained in $\Omega$, then
> $$
> \int_{T}f(z)dz=0
> $$
> whenever $f$ is holomorphic in $\Omega$. 
> 
> 
> > [!Proof]-
> > 
> > Let $T\subseteq \Omega$. Subdivide $T$ into 4 congruent triangles. Since integrating the same curve in opposite directions yields zero, we can express the integral of $f$ over $T$ as the sum of the integral of $f$ over the four triangles. Continue the process to obtain a point $z_{0}$ in the intersection. Use the holomorphicity of $f$ at $z_{0}$ and bound the error term by $\epsilon_{n}d^{(n)}p^{(n)}$. 
> 

^38174f


> [!Corollary]
> If $f$ is holomorphic in an open set $\Omega$ that contains a rectangle $R$ and its interior, then
> $$
> \int_{R}f(z)dz=0.
> $$

## Local existence of primitives  and Cauchy's theorem in a disc

> [!Lemma] @steinComplexAnalysis2003 2.2.1
> A holomorphic function in an open disc has a primitive in that disc. 
> 
> 
> > [!Proof]-
> > 
> > Define $F(z)$ as the integral over a unique rectangular path from the origin to $z$. 
> > 
> > The proof of [[#^870ca5]] also works when $f$ is given to be continuous in an open disk and its integral on any triangle contained in that disk is zero. To show that $F$ is holomorphic in $D$ and $F'(z)=f(z)$, use [[#^38174f]] to write
> > $$
> > F(z+h)-F(z)=\int_{\eta}f(w)dw,
> > $$
> > where $\eta$ is the straight line segment from $z$ to $z+h$. Now use the continuity of $f$ to write $f(w)=f(z)+\psi(w)$, and obtain
> > $$
> > \lim_{ h \to 0 } \frac{F(z+h)-F(z)}{h}=f(z).
> > $$
> > 
> 

^870ca5

> [!Theorem] Cauchy's theorem for a disc
> If $f$ is holomorphic in a disc, then
> $$
> \int_{\gamma}f(z)dz=0
> $$
> for any closed curve $\gamma$ in that disc. 
> 
> > [!Proof]-
> > 
> > Follows from [[#^870ca5]] and [[LEC CANA 1#^5b02bc]]. 

## Cauchy's integral formulas

> [!Theorem]
> Suppose $f$ is holomorphic in an open set that contains the closure of a disc $D$. If $C$ denotes the boundary circle of this disc with the positive orientation, then for any $z\in D$, 
> $$
> f(z)=\frac{1}{2\pi i}\int_{C}\frac{f(\zeta)}{\zeta-z}d\zeta.
> $$

Integrate over the keyhole contour. 

> [!Corollary]
> If $f$ is holomorphic in an open set $\Omega$, then $f$ has infinitely many complex derivatives in $\Omega$. Moreover, if $C\subseteq \Omega$ is a circle whose interior is also contained in $\Omega$, then for all $z$ in the interior of $C$,
> $$
> f^{(n)}(z)=\frac{n!}{2\pi i}\int_{C}\frac{f(\zeta)}{(\zeta-z)^{n+1}}d\zeta.
> $$

^58d2c9

Proof by induction.

> [!Corollary] Cauchy inequalities
> If $f$ is holomorphic in an open set that contains the closure of a disc $D$ centered at $z_{0}$ and of radius $R$, then 
> $$
> |f^{(n)}(z_{0})|\leqslant \frac{n!\lVert f \rVert_{C}}{R^{n}},
> $$
> where $\lVert f \rVert_{C}=\sup_{z\in C}|f(z)|$. 


> [!Theorem]
> Suppose $f$ is holomorphic in an open set $\Omega$. If $D$ is a disc centered at $z_{0}$ and whose closure is contained in $\Omega$, then $f$ has a power series expansion at $z_{0}$
> $$
> f(z)=\sum_{n=0}^{\infty} a_{n}(z-z_{0})^{n}
> $$
> for all $z\in D$, and the coefficients are given by
> $$
> a_{n}=\frac{f^{(n)}(z_{0})}{n!}
> $$
> for all $n\geqslant 0$. 

^f3eea8

> [!Corollary]
> If $f$ is holomorphic on all of $\mathbb{C}$, [[#^f3eea8]] implies that $f$ has a power series expansion around $0$ that converges in all of $\mathbb{C}$. 

> [!Corollary] Liouville
> If $f$ is entire and bounded, then $f$ is constant. 

> [!Example]
> Fundamental theorem of algebra

> [!Theorem]
> Suppose $f$ is a holomorphic in a connected region $\Omega$ that vanishes on a sequence of distinct points with a limit point in $\Omega$. Then $f$ is identically zero. 

> [!Corollary]
> Suppose $f$ and $g$ are holomorphic in a region $\Omega$ and $f(z)=g(z)$ for all $z$ in some non-empty open subset of $\Omega$ (or more generally for $z$ in some sequence of distinct points with limit point in $\Omega$). Then $f(z)=g(z)$ throughout $\Omega$. 

## Sequences of holomorphic functions

> [!Theorem]
> If $\{ f_{n} \}_{n=1}^{\infty}$ is a sequence of holomorphic functions that converges uniformly to a function $f$ in every compact subset of $\Omega$, then 
> 1. $f$ is holomorphic in $\Omega$. 
> 2. the sequence of derivatives $\{ f'_{n} \}_{n=1}^{\infty}$ converges uniformly to $f'$ on every compact subset of $\Omega$. 

## Holomorphic functions defined in terms of integrals

> [!Theorem]
> Let $F(z, s)$ be defined for $(z, s)\in \Omega \times[0, 1]$ where $\Omega$ is an open set in $\mathbb{C}$. Suppose $F$ satisfies the following properties:
> 1. $F(z, s)$ is holomorphic in $z$ for each $s$. 
> 2. $F$ is continuous on $\Omega \times[0, 1]$. 
> 
> Then the function $f$ defined on $\Omega$ by 
> $$
> f(z):=\int_{0}^{1} F(z, s) \, ds
> $$
> is holomorphic. 

## Schwarz reflection principle

> [!Lemma] Symmetry principle
> If $f^{+}$ and $f^{-}$ are holomorphic functions in $\Omega^{+}$ and $\Omega^{-}$ respectively, that extend continuously to $I$ and $f^{+}(x)=f^{-}(x)$ for all $x\in I$, then $f$ defined on $\Omega$ by
> $$
> f(z)=\begin{cases}
> f^{+}(z) & z\in \Omega^{+} \\
> f^{+}=f^{-}(z) & z\in I \\
> f^{-}(z) & z\in \Omega^{-}
> \end{cases}
> $$
> is holomorphic on all of $\Omega$. 

> [!Theorem] Schwarz
> Suppose $f$ is a holomorphic function in $\Omega^{+}$ that extends continuously to $I$ such that $f$ is real-valued on $I$. Then there exists a function $F$ holomorphic in all of $\Omega$ such that $F=f$ on $\Omega^{+}$. 

