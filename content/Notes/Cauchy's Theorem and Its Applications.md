---
id: "377"
date: 2026-01-08
time: 15:31
tags:
  - CANA
  - Processed
---

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

# Local existence of primitives and Cauchy's theorem in a disc

> [!Lemma] @steinComplexAnalysis2003 2.2.1
> A holomorphic function in an open disc has a primitive in that disc. 
> 
> 
> > [!Proof]-
> > 
> > Define $F(z)$ as the integral over a unique rectangular path from the origin to $z$. 
> > 
> > To show that $F$ is holomorphic in $D$ and $F'(z)=f(z)$, use [[#^38174f]] to write
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

The proof of [[#^870ca5]] also works when $f$ is given to be continuous in an open disk and its integral on any triangle contained in that disk is zero; we use this observation in the proof of [[#^d13e0e]]. 

> [!Theorem] Cauchy's theorem for a disc
> If $f$ is holomorphic in a disc, then
> $$
> \int_{\gamma}f(z)dz=0
> $$
> for any closed curve $\gamma$ in that disc. 
> 
> > [!Proof]-
> > 
> > Follows from [[#^870ca5]] and [[Preliminaries to Complex Analysis#^5b02bc]]. 

^6ba5d4



# Toy contours

We call a **toy contour** any closed curve where the notion of interior is "obvious", and a construction similar to that in [[#^870ca5]] is possible in a neighborhood of the curve and its interior. These are useful in evaluating integrals. 

To be precise (ish), let if $\Gamma$ be a toy contour and $f$ be holomorphic in a neighborhood of $\Gamma$ and its interior. Then, $f$ is holomorphic inside of a slightly larger version of $\Gamma$ whose interior contains $\Gamma$ and $\Gamma^{\circ}$. We fix a point $z_{0}\in\Gamma^{\circ}$. For $z\in\Gamma^{\circ}$, let $\gamma_{z}$ denote any curve contained inside $\Gamma^{\circ}$ connecting $z_{0}$ to $z$ which consists of finitely many horizontal and vertical segments; the choice doesn't matter since the integral of $f$ over any two such curves would be equal, courtesy [[#^38174f]]. We may thus define $F$ unambiguously in $\Gamma^{\circ}$. 

Thus, for a toy contour $\Gamma$, we have
$$
\int_{\Gamma}f(z)dz=0
$$
whenever $f$ is holomorphic in an open set that contains the contour $\gamma$ and its interior. 

# Cauchy's integral formulas

> [!Theorem] @steinComplexAnalysis2003 2.4.1
> Suppose $f$ is holomorphic in an open set that contains the closure of a disc $D$. If $C$ denotes the boundary circle of this disc with the positive orientation, then for any $z\in D$, 
> $$
> f(z)=\frac{1}{2\pi i}\int_{C}\frac{f(\zeta)}{\zeta-z}d\zeta.
> $$

^d3c867

Integrate over the keyhole contour. 

The **regularity** of holomorphic functions arises as a corollary. 

> [!Corollary]
> Let $f$ be holomorphic in an open set $\Omega$. If $C\subseteq \Omega$ is a circle whose interior is also contained in $\Omega$, then for all $z$ in the interior of $C$,
> $$
> f^{(n)}(z)=\frac{n!}{2\pi i}\int_{C}\frac{f(\zeta)}{(\zeta-z)^{n+1}}d\zeta.
> $$
> Thus, *if $f$ is holomorphic in an open set $\Omega$, then $f$ has infinitely many complex derivatives in $\Omega$*. 

^58d2c9

Proof by induction.

The formulas of [[#^d3c867]] and [[#^58d2c9]] are called the **Cauchy integral formulas**. 

> [!Corollary] Cauchy inequalities
> If $f$ is holomorphic in an open set that contains the closure of a disc $D$ centered at $z_{0}$ and of radius $R$, then 
> $$
> |f^{(n)}(z_{0})|\leqslant \frac{n!\lVert f \rVert_{C}}{R^{n}},
> $$
> where $\lVert f \rVert_{C}=\sup_{z\in C}|f(z)|$. 
> 
> > [!Proof]-
> > 
> > An easy application of [[#^58d2c9]]. 
> 

We have seen ([[Preliminaries to Complex Analysis#^0db182]]) that a power series defines a holomorphic function in its disc of convergence. The converse arises as another corollary of the Cauchy integral formulas. 

> [!Theorem]
> Suppose $f$ is holomorphic in an open set $\Omega$. If $D$ is a disc centered at $z_{0}$ and whose closure is contained in $\Omega$, then $f$ has a power series expansion at $z_{0}$
> $$
> f(z)=\sum_{n=0}^{\infty} a_{n}(z-z_{0})^{n}
> $$
> for all $z\in D$, and the coefficients are given by
> $$
> a_{n}=\frac{f^{(n)}(z_{0})}{n!}= \frac{1}{2\pi i} \int_{C} \frac{f(\zeta)}{(\zeta-z_{0})^{n+1}}d\zeta
> $$
> for all $n\geqslant 0$. 
> 
> > [!Proof]-
> > 
> > Use [[#^d3c867]], and write
> > $$
> > \frac{1}{\zeta-z}=\frac{1}{\zeta-z_{0}-(z-z_{0})}=\frac{1}{(\zeta-z_{0})}\frac{1}{1-\frac{z-z_{0}}{\zeta-z_{0}}}.
> > $$
> > 
> 

^f3eea8

[[Preliminaries to Complex Analysis#^0db182|Since]] power series define infinitely differentiable functions, [[#^f3eea8]] gives another proof that a holomorphic function function is infinitely differentiable. 


> [!Corollary]
> If $f$ is holomorphic on all of $\mathbb{C}$, [[#^f3eea8]] implies that $f$ has a power series expansion around $0$ that converges in all of $\mathbb{C}$. 

> [!Corollary] Liouville
> If $f$ is entire and bounded, then $f$ is constant. 
> 
> > [!Proof]-
> > 
> > It suffices to show that $f'=0$ by [[Preliminaries to Complex Analysis#^f36590]]. For each $z_{0}\in \mathbb{C}$ and all $R> 0$, the Cauchy inequalities yield 
> > $$
> > |f'(z_{0})|\leqslant  B/R
> > $$
> > where $B$ is a bound for $f$. Letting $R\to \infty$ gives the desired result. 
> 

^a603fe

> [!Example] The fundamental theorem of algebra
> Every non-constant polynomial $P(z)=a_{n}z^{n}+\dots+a_{0}$ with complex coefficients has a root in $\mathbb{C}$. 
> 
> > [!Proof]-
> > If $P$ has no roots, then $1/P(z)$ is a bounded holomorphic function. To see this, assume $a_{n}\ne 0$ and write
> > $$
> > P(z)/z^{n}=a_{n}+\left( \frac{a_{n-1}}{z}+\dots+\frac{a_{0}}{z^{n}}\right)
> > $$
> > for $z\ne 0$. Since each term in the parenthesis goes to $0$ as $|z|\to \infty$ we conclude that there exists $R> 0$ such that 
> > $$
> > |P(z)|\geqslant  \frac{|a_{n}|}{2}|z^{n}|
> > $$
> > whenever $|z|> R$. Thus, $P$ is bounded from below when $|z|> R$. Since $P$ is continuous and has no roots in the compact disc $|z|\leqslant R$, it is bounded from below in that disc by [[LEC ANA1 16#^df345d]]. This proves the claim. 
> 

^7800a0

# Analytic continuation

> [!Theorem]
> Suppose $f$ is a holomorphic in a connected region $\Omega$ that vanishes on a sequence of distinct points with a limit point in $\Omega$. Then $f$ is identically zero. 

^172dec

> [!Corollary]
> Suppose $f$ and $g$ are holomorphic in a region $\Omega$ and $f(z)=g(z)$ for all $z$ in some non-empty open subset of $\Omega$ (or more generally for $z$ in some sequence of distinct points with limit point in $\Omega$). Then $f(z)=g(z)$ throughout $\Omega$. 


# Morera's theorem

The converse of [[#^6ba5d4|Cauchy's theorem]]. 

> [!Theorem] Morera
> Suppose $f$ is a continuous function in the open disc $D$ such that for any triangle $T$ contained in $D$
> $$
> \int_{T}f(z)dz=0,
> $$
> then $f$ is holomorphic.  
> 
> > [!Proof]-
> > 
> > By the proof of [[#^870ca5]], $f$ has a primitive $F$ in $D$ that satisfies $F'=f$. By [[#^58d2c9|the regularity theorem]], we know that $F$ is indefinitely (and hence twice) complex differentiable, and therefore $f$ is holomorphic. 
> 

^d13e0e

# Sequences of holomorphic functions

> [!Theorem] @steinComplexAnalysis2003 2.5.2-3
> If $\{ f_{n} \}_{n=1}^{\infty}$ is a sequence of holomorphic functions that converges uniformly to a function $f$ in every compact subset of $\Omega$, then 
> 1. $f$ is holomorphic in $\Omega$. 
> 2. the sequence of derivatives $\{ f'_{n} \}_{n=1}^{\infty}$ converges uniformly to $f'$ on every compact subset of $\Omega$. 

^4e9e39

Compare with [[LEC ANA1 33#^94a1f8|the real analytic version]] of the same theorem; [[#^4e9e39]].2 goes from being a conclusion to being a hypothesis.

# Holomorphic functions defined in terms of integrals

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

^adaf14

# Schwarz reflection principle

> [!Lemma] The symmetry principle
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

