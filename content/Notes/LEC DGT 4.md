---
id: "523"
date: 2026-08-14
time: 11:59
tags:
  - DGEO
  - Lecture
---
# Vector fields

> [!Definition] Vector field
> A **vector field** $X$ on an open set $U\subseteq \mathbb{R}^{m}$ is a map $X:U\to \mathbb{R}^{m}$. For $p\in U$, we will often write $X_{p}$ in place of $X(p)$. The space of all smooth vector fields on $U$ is denoted $\mathfrak{X}(U)$. 

> [!Definition] Vector field on a manifold
> A **vector field on $M$** is a map $X:M\to \mathbb{R}^{k}$ such that $X_{p}:=X(p)\in T_{p}M$ for every $p\in M$. It is called **smooth** if it is [[LEC DGT 2#^2da0d5|smooth]] as a map from $M$ to $\mathbb{R}^{k}$. The space of all smooth vector fields on $M$ is denoted by $\mathfrak{X}(M)$. 

> [!Definition] Coordinate vector fields
> Let $\phi:\Omega\to V$ be a local parameterization of $M\subseteq \mathbb{R}^{k}$, where $\Omega \subseteq \mathbb{R}^{n}$. For $i=1, \dots, n$, define the **$i$-th coordinate vector field** $\phi_{i}:V\to \mathbb{R}^{k}$ by 
> $$
> \phi_{i}(p)=\partial_{i}\phi(\phi ^{-1}(p)).
> $$
> If $p=\phi(a)$, then $\phi_{i}(p)=D\phi_{a}(e_{i})$.[^1] Since $T_{p}M=\mathrm{im}\,D\phi_{a}$ and $D\phi_{a}$ is injective by definition, the vectors $\phi_{1}(p), \dots, \phi_{n}(p)$ form a basis of $T_{p}M$. 

Further, each $\phi_{i}$ is smooth in the sense of [[LEC DGT 2#^2da0d5]], because $\phi_{i}=(\phi_{i}\circ \phi)\circ \phi ^{-1}$ - $\phi_{i}\circ \phi:\Omega \to \mathbb{R}^{n}$, being equal to $\partial_{i}\phi$, is smooth in the usual sense, and $\phi ^{-1}$ is [[LEC DGT 2#^2da0d5]]-smooth ([[LEC DGT 2#^0b32a6]]). 

> [!Proposition]
> Let $X$ be a vector field on $M$, and let $\phi:\Omega\to V$ be a local parameterization. Then $X|_{V}$ is smooth iff there exist smooth functions $X^{1}, \dots, X^{n}:V\to \mathbb{R}^{n}$ such that
> $$
> X=\sum_{i=1}^{n} X^{i}\phi_{i}
> $$
> on $V$. These functions are uniquely determined by $X$ and $\phi$. Consequently, $X$ is smooth on $M$ iff it has such an expression around every point of $M$. 

> [!Definition] Coordinate representations of vector fields
> Let $X$ be a vector field on $M$, and let $\phi:\Omega\to V$ be a local parameterization. The vector field $\overline{X}\in \mathfrak{X}(\Omega)$ defined by
> $$
> \overline{X}=(X^{1}\circ \phi, \dots, X^{n}\circ \phi)
> $$
> is called a **coordinate representation of $X$**. Since
> $$
> X_{p}=D\phi_{a}(\overline{X}_{a})
> $$
> for $p=\phi(a)$, we have $\overline{X}_{a}=(D\phi_{a})^{-1}(X_{\phi(a)})$. 

^5ef441


[^1]: Note that $D\phi$ here is the usual derivative of maps between euclidian space - the kind you learnt about in calculus.

## Action of vector fields by derivations

### Vector fields on Euclidean space

Let $U\subseteq \mathbb{R}^{m}$ be open. We define a $\mathfrak{X}(U)$-action on $C^{\infty}(U, \mathbb{R}^{l})$ by 
$$
\begin{align}
(D_{X}F)(p)=DF_{p}(X_{p}).
\end{align}
$$
^514d18

To verify that $D_{X}F$ is smooth, we note that if $X=(X^{1}, \dots, X^{m})$ and $F=(F^{1}, \dots, F^{l})$, then the $j$-th component of $D_{X}F$ 
$$
(D_{X}F)^{j}=\sum_{i}^{} X^{i}\partial_{i}F^{j},
$$
which also shows that $D_{X}$ *acts component-wise*, i.e. $D_{X}F=(D_{X}F^{1}, \dots, D_{X}F^{l})$. Further, we note that if $\{ E_{i} \}_{i=1}^{m}$ denote the standard coordinate vector fields on $\mathbb{R}^{m}$, $D_{E_{i}}F$ is just the $i$-th partial derivative $\partial_{i}F$. 

The [[LEC CAL1 19#^b3496c|equality of mixed partial derivatives]] implies the differential operators $D_{E_{i}}$ and $D_{E_{j}}$ commute, i.e. $D_{E_{j}}D_{E_{i}}f=D_{E_{i}}D_{E_{j}}f$. This does not hold for arbitrary vector fields. Indeed, if $X=\sum_{i}X^{i}e_{i}$ and $Y=\sum_{j}Y^{j}e_{j}$, there holds
$$
\begin{align}
 & D_{X}f=\sum_{i}X^{i}\partial_{i}f, \quad D_{Y}f=\sum_{j}Y^{j}\partial_{j}f \\
 & D_{X}D_{Y}f=\sum_{i, j}X^{i}Y^{j}\partial_{ij}f+X^{i}(\partial_{i}Y^{j})\partial_{j}f \\
 & D_{Y}D_{X}f=\sum_{i, j}Y^{j}X^{i}\partial_{ji}f+Y^{j}(\partial_{j}X^{i})\partial_{i}f.
\end{align}
$$
Therefore, 
$$
D_{X}D_{Y}f-D_{Y}D_{X}f=D_{Z}f, \text{ where }Z=D_{X}Y-D_{Y}X.
$$
^306cdb

This motivates the following:

> [!Proposition]
> Let $U\subseteq \mathbb{R}^{n}$ be open. Endow $\mathfrak{X}(U)$ with the bracket
> $$
> [X, Y]:=D_{X}Y-D_{Y}X.
> $$
> This makes $\mathfrak{X}(U)$ a [[LEC LIALG 1#^128a59|Lie algebra]].[^2] Recall that $C^{\infty}(U)$ is an $\mathbb{R}$-algebra. Let $\mathrm{Der}(C^{\infty}(U))$ be as in [[LEC LIALG 2#^09387d]]; it is a Lie subalgebra of $\mathfrak{gl}(C^{\infty}(U))$ with the bracket $[\delta, \delta']=\delta\delta'-\delta'\delta$. 
> 
> The map $\mathfrak{X}(U)\to \mathrm{Der}(C^{\infty}(U))$ given by $X\mapsto D_{X}$ is a Lie algebra homomorphism. 
> 
> > [!Proof]-
> > 
> > We will prove the following assertions in order:
> > 1. $D_{X}:C^{\infty}(U)\to C^{\infty}(U)$ is a $\mathbb{R}$-linear map;
> > 2. $D_{X}$ is a derivation, i.e., $D_{X}(fg)=fD_{X}g+gD_{X}f$;
> > 3. The map $X\mapsto D_{X}$ respects the bracket: $D_{[X, Y]}=[D_{X}, D_{Y}]=D_{X}D_{Y}-D_{Y}D_{X}$. 
> > 
> > 
> 



[^2]: The Jacobi identity follows from [[#^306cdb]]. 

### Vector fields on manifolds

If $X\in \mathfrak{X}(M)$ and $f\in C^{\infty}(M)$, define $D_{X}f:M\to \mathbb{R}$ by $(D_{X}f)(p):=Df_{p}(X_{p})$ (recall [[LEC DGT 3#^233791]]). Using a local parameterization $\phi$, let us verify that $D_{X}f$ is smooth. If $X=\sum_{i}X^{i}\phi_{i}$, 
$$
D_{X}f(p)=\sum_{i}X^{i}(p)Df_{p}(\phi_{i}|_{p}),
$$
which implies
$$
(D_{X}f)(\phi(a))=\sum_{i}(X^{i}\circ \phi)(a)Df_{\phi(a)}(\phi_{i}|_{\phi(a)}).
$$

^7c93bf

Since $\phi_{i}|_{\phi(a)}=D\phi_{a}(e_{i})$, by the chain rule
$$
Df_{\phi(a)}(\phi_{i}|_{\phi(a)})=Df_{\phi(a)}(D\phi_{a}(e_{i}))=D(f\circ \phi)_{a}(e_{i})=\partial_{i}(f\circ \phi)(a).
$$
Therefore, the RHS of [[#^7c93bf]] smoothly depends on $a$. Clearly, $D_{X}$ continues to be an $\mathbb{R}$-linear derivation. 

We now attempt to define a Lie bracket on $\mathfrak{X}(M)$ for a manifold $M$. [^3] One can use two approaches. 

By the definition of smoothness, the smooth vector fields $X, Y:M\to \mathbb{R}^{k}$ have ambient smooth extensions $\tilde{X}, \tilde{Y}:W\to \mathbb{R}^{k}$ near each point of $M$. On $M\cap W$, $[X, Y]$ is defined by restricting $[\tilde{X}, \tilde{Y}]$ to $M\cap W$. 

On the other hand, if $\phi:\Omega\to V$ is a local parameterization, and $\overline{X}, \overline{Y}$ are [[#^5ef441|coordinate representations]] of $X$ and $Y$, we can define $[X, Y]$ on $V$ to be the unique vector field whose coordinate representation is $[\overline{X}, \overline{Y}]$. Explicitly, if $p=\phi(a)$, then
$$
[X, Y](p)=D\phi_{a}([\overline{X}, \overline{Y}](a)). 
$$

These two definitions are equivalent, and are independent of the chosen extensions or the parameterization. 

> [!Proposition]
> Let $X, Y\in \mathfrak{X}(M)$, $\phi:\Omega\to V$ be a local parameterization, $\overline{X}, \overline{Y}\in \mathfrak{X}(\Omega)$ be the coordinate representations of $X, Y$ as above, $\tilde{X}, \tilde{Y}$ be arbitrary ambient smooth extensions of $X, Y$ near a point $p\in V$ and let $p=\phi(a)$. Then
> $$
> [\tilde{X}, \tilde{Y}](p)=D\phi_{a}([\overline{X}, \overline{Y}](a)).
> $$
> Consequently, the locally defined vector fields obtained by restricting $[\tilde{X}, \tilde{Y}]$ to $M$ are tangent to $M$, independent of the chosen extensions and agree on overlaps. They therefore determine a unique smooth vector field on $M$, denoted by $[X, Y]$. For every local parameterization $\phi:\Omega\to V$, 
> $$
> [X, Y](\phi(a))=D\phi_{a}([\overline{X}, \overline{Y}](a)).
> $$
> In particular, the expression on the right-hand side is independent of the chosen local parameterization. Lastly, for every $f\in C^{\infty}(M)$, 
> $$
> D_{X}D_{Y}f-D_{Y}D_{X}f=D_{[X, Y]f}.
> $$
> 

^5180d1

[^3]: Note that we cannot just replace $DF_{p}$ in [[#^514d18]] with the derivative form [[LEC DGT 3#^233791]], since a vector field does not have to be a map between manifolds!


> [!Theorem]
> Let $M$ be an $n$-dimensional manifold, $p\in M$, and let $X_{1}, \dots, X_{m}$ be smooth vector fields defined on a neighborhood $U\subseteq M$ of $p$. Suppose that $X_{1}(p), \dots, X_{m}(p)$ are linearly independent and that $[X_{i}, X_{j}]\equiv 0$ on $U$ for all $i, j=1, \dots, m$. Then $m\leqslant n$, and there exists a local parameterization $\phi:\Omega\to V$ of $M$ around $p$ such that $X_{i}=\phi_{i}$ on $V$ for every $i=1, \dots, m$, where $\phi_{i}$ denotes the $i$-th coordinate vector field associated with $\phi$. 

Note that the hypotheses concerning linear independence and the Lie brackets are necessary because the coordinate vector fields are linearly independent at every point, and by [[#^5180d1]], the Lie bracket of two coordinate vector fields is zero. 