---
id: "347"
date: 2025-11-08
time: 10:59
tags:
  - ANA2
  - TOP
---
See @munkresTopology2000 §17, §30, §31, §32.
# Separation axioms

> [!Definition]
> A topological space is called
> 1. **Fréchet ($T_{1}$)** if singleton subsets are closed. 
> 2. **Hausdorff ($T_{2}$)** if distinct points have disjoint open neighborhoods.
> 3. **Regular ($T_{3}+T_{1}$)** if every closed set $C$ and point $p\not\in C$ have have disjoint open neighborhoods, and singletons are closed. 
> 4. **Normal ($T_{4}+T_{1}$)** if any two disjoint closed sets have disjoint open neighborhoods, and singletons are closed. 
> 5. **Completely normal ($T_{5}$)** if all subspaces are normal. 
> 6. **Perfectly normal ($T_{6}$)** if all closed subsets are $G_{\delta}$. 

^e86df7

Clearly, $T_{4}$+$T_{1}$ $\implies$ $T_{3}$+$T_{1}$ $\implies$ $T_{2}$ $\implies$ $T_{1}$.

> [!Example]
> 1. The cofinite topology on an infinite set is $T_{1}$ but not $T_{2}$. 
> 2. $\mathbb{R}_{K}$ is $T_{2}$ but not $T_{3}$. 
> 3. $\mathbb{R}_{\ell}$ is $T_{4}$. $\mathbb{R}_{\ell}^{2}$ is not $T_{4}$ (but $T_{3}$, since $\mathbb{R}_{\ell}$ is). 
> 4. If $J$ is uncountable, the product space $\mathbb{R}^{J}$ is not normal (and hence not metrizable, by the next example!)
> 5. Metric spaces are $T_{6}$.

## Fréchet spaces

> [!Proposition]
> $X$ is $T_{1}$ $\iff$ for every pair of distinct points, each has a neighborhood not containing the other point.
> 
> > [!Proof]-
> > 
> > $(\implies)$ for $x, y\in X$, $\{ x \}^{c}$ and $\{ y \}^{c}$ work. 
> > 
> > $(\impliedby)$ Let $x\in X$. For every $y\ne x$, let $U_{y}$ be an open neighborhood of $y$ not containing $x$. Then, $U:=\bigcup_{y\in X, y\ne x}U_{y}$ is open, and $U^{c}=\{ x \}$. 
> 

> [!Proposition]
> Let $X$ be a $T_{1}$ space, and $A\subseteq X$. Then the point $x$ is a [[Preliminaries to Topology#^12841c|limit point]] of $A$ iff every neighborhood of $x$ contains infinitely many points of $A$.
> 
> > [!Proof]-
> > 
> > Let $U_{1}$ be an open neighborhood of $x$. Since $U_{1}$ must intersect $A$, we can pick $a_{1}\in A\cap U_{1}$. Since $X$ is $T_{1}$, there exists an open neighborhood $U'$ of $x$ which does not contain $a_{1}$. Let $U_{2}:=U_{1}\cap U'$. Again, being an open neighborhood of $x$, $U_{2}$ must contain an element of $A$, say $a_{2}$. Proceeding in this manner, we see that $U_{1}$ must contain infinitely many points of $A$. 
> 

## Hausdorff, regular and normal spaces

There are several niceties of metric spaces that we take for granted:
1. all singletons are closed;
2. a sequence cannot converge to more than one point.

These are not true for arbitrary topological spaces. As we ascend the ladder from $T_{1}$ to $T_{4}$, topological spaces become more well-behaved. As we have seen, merely assuming $T_{1}$ gives us closed singletons; the uniqueness of limits is attained at $T_{2}$.

> [!Proposition]
> A sequence of points in a $T_{2}$ space converges to at most one point.
> 
> > [!Proof]-
> > 
> > Say a sequence $\{ x_{n} \}$ converges to two points, $a$ and $b$. Let $A\ni a$ and $B\ni b$ be disjoint open sets. By definition, there exists $N$ such that for all $n\geqslant N$, $x_{n}\in A$ - but this implies $\{ x_{n} \}$ cannot converge to $b$! 
> 

[[#^e86df7]] can be reformulated in the following useful way:

> [!Proposition]
> Let $X$ be a $T_{1}$ space. 
> 1. $X$ is regular $\iff$ given $x\in X$ and a neighborhood $N\ni x$, there exists a neighborhood $V\ni x$ such that $\overline{V}\subseteq U$. 
> 2. $X$ is normal $\iff$ given a closed set $A\subseteq X$ and an open set $U\supseteq A$, there exists an open set $V\supseteq A$ such that $\overline{V}\subseteq U$. 
> 
> > [!Proof]-
> > 
> > $(1)$ Suppose $X$ is regular, and suppose the point $x$ and the neighborhood $U$ of $x$ are given. Let $B=X\setminus U$; then $B$ is a closed set. By hypothesis, there exist disjoint open sets $V$ and $W$ containing $x$ and $B$ respectively. The set $\overline{V}$ is disjoint form $W$, since if $y\in W$, there is an open neighborhood of $y$ contained in $W$. Thus, $\overline{V}$ is disjoint from $B$, and $\overline{V}\subseteq U$. 
> > 
> > To prove the converse, suppose the point $x$ and the closed set $B$ not containing $x$ are given. Let $U=X\setminus B$. By hypothesis, there is a neighborhood $V$ of $x$ such that $\overline{V}\subseteq U$. The open sets $V$ and $X\setminus \overline{V}$ are disjoint open sets containing $x$ and $B$, respectively. Thus, $X$ is regular. 
> > 
> > $(2)$ is proved similarly. 
> 

^6d74b4

> [!Proposition]
> 1. A subspace of a $T_{2}$ space is $T_{2}$. 
> 2. A product of $T_{2}$ spaces is $T_{2}$. 
> 3. A subspace of a $T_{3}$ space is $T_{3}$. 
> 4. A product of $T_{3}$ spaces is $T_{3}$. 
> 
> > [!Proof]-
> > 
> > $(1)$ and $(3)$ are clear. 
> > 
> > $(2)$ Let $\{ X_{\alpha} \}$ be a family of Hausdorff spaces. Let $\mathbf{x}=(x_{\alpha})$ and $\mathbf{y}=(y_{\alpha})$ be distinct points of the product space $\prod X_{\alpha}$. Because $\mathbf{x}\ne \mathbf{y}$, there is some index $\beta$ such that $x_{\beta}\ne y_{\beta}$. Choose disjoint open sets $U$ and $V$ in $X_{\beta}$ containing $X_{\beta}$ containing $x_{\beta}$ and $y_{\beta}$ respectively. Then the sets $\pi_{\beta}^{-1}(U)$ and $\pi_{\beta}^{-1}(V)$ are disjoint open sets in $\prod X_{\alpha}$ containing $\mathbf{x}$ and $\mathbf{y}$ respectively. 
> > 
> > $(4)$ Let $\{ X_{\alpha} \}$ be a family of regular spaces; let $X=\prod X_{\alpha}$. By $(2)$, $X$ is $T_{2}$, so $X$ is $T_{1}$. We use [[#^6d74b4]]. Let $\mathbf{x}\in X$, $U$ be a neighborhood of $\mathbf{x}$ in $X$. Choose a basis element $\prod U_{\alpha}$ about $\mathbf{x}$ contained in $U$. Choose, for each $\alpha$, a neighborhood $V_{\alpha}$ of $x_{\alpha}$ in $X_{\alpha}$ such that $\overline{V}_{\alpha}\subseteq U_{\alpha}$; if it happens that $U_{\alpha}=X_{\alpha}$, chose $V_{\alpha}=X_{\alpha}$. Then $V=\prod V_{\alpha}$ is a neighborhood of $x$ in $X$. Since $\overline{V}=\prod \overline{V}_{\alpha}$ by [[Preliminaries to Topology#^0adb41]], it follows that $\overline{V}\subseteq \prod U_{\alpha}\subseteq U$. 
> 

^f0873d

There is no analogue of [[#^f0873d]] for normal spaces. 


[[#^ae93c1]] provides three sufficient conditions for a space to be normal:

> [!Proposition]
> 1. Every regular second countable space is normal.
> 
> > [!Proof]-
> > 
> > Let $X$ be a regular space with a countable basis $\mathcal{B}$. Let $A$ and $B$ be disjoint closed subsets of $X$. Each point $x\in A$ has a neighborhood $U$ not intersecting $B$. Using regularity, choose a neighborhood $V$ of $x$ whose closure lies in $U$; finally, choose an element of $\mathcal{B}$ containing $x$ and contained in $V$. By choosing such a basis element for each $x\in A$, we construct a countable covering $\{ U_{n} \}$ of $A$ by open sets whose closures do not intersect $B$. Let $\{ V_{n} \}$ be a similar countable covering for $B$. The sets $\bigcup U_{n}$ and $\bigcup V_{n}$ are open sets containing $A$ and $B$ respectively, but these may not be disjoint. However, that can be arranged. Let
> > $$
> > \begin{align}
> > U_{n}'=U_{n}\setminus \bigcup_{i=1}^{n} \overline{V}_{i} \quad \text{and}\quad V_{n}'=V_{n}\setminus \bigcup_{i=1}^{n} \overline{U}_{i}.
> > \end{align}
> > $$
> > Clearly, $U':=\bigcup U_{n}'\supseteq A$, $V':=\bigcup V_{n}'\supseteq B$, and $U'\cap V'=\emptyset$. 
> 
> 2. Every metrizable space is normal.
> 
> > [!Proof]-
> > 
> > Let $X$ be metrizable with metric $d$. Suppose $A$ and $B$ are two closed disjoint subsets of $X$. For each $a\in A$, choose $\epsilon_{a}$ so that the ball $B(\alpha, \epsilon_{a})$ does not intersect $B$. Similarly, for each $b\in B$, choose $\epsilon_{b}$ so that the ball $B(b, \epsilon_{b})$ does not intersect $A$. Define
> > $$
> > U:=\bigcup_{a\in A}B(a, \epsilon_{a}/2)\quad \text{and}\quad V=\bigcup_{b\in B}B(b, \epsilon_{b}/2).
> > $$
> > The sets $U$ and $V$ are open sets containing $A$ and $B$ respectively, and are disjoint, as can be shown by a routine application of the triangle inequality. 
> 
> 3. Every compact Hausdorff space is normal.
> 
> > [!Proof]-
> > 
> > First, we show that a compact Hausdorff space is regular. Let $A$ be closed and $x\not\in A$. For each $p\in A$, let $U_{p}$ and $V_{p}$ be disjoint open neighborhoods of $p$ and $x$ respectively. Since $A$ is compact, there exist $p_{1}, \dots, p_{n}\in A$ such that $U_{p_{1}}\cup\dots \cup U_{p_{n}}\supseteq A$. Clearly, $V_{p_{1}}\cap\dots \cap V_{p_{n}}\ni x$ and is disjoint from $U_{p_{1}}\cup\dots \cup U_{p_{n}}$. Repeat the same argument with two closed sets to show that the space is normal. 
> > 
> 


^ae93c1

> [!Corollary]
> Compact subsets of a Hausdorff space can be separated by disjoint open sets. 

> [!Proposition]
> Every well-ordered set $X$ is normal in the order topology. 


---

# Countability axioms

> [!Definition]
> A topological space $X$ is said to be
> 1. **First countable** if for each $x\in X$ there is a countable collection $\{ U_{n} \}_{n\in \mathbb{Z}}$ of neighborhoods of $x$ such that any neighborhood $U$ of $x$ contains at least one of the sets $U_{n}$.
> 2. **Second countable** if $X$ has a countable basis.

^25afed

> [!Remark]
> 1. Clearly, second countability implies first countability. 
> 2. A metrizable space always satisfies the first countability axiom, but the converse is not true.
> 3. If $X$ is second countable, then any discrete subspace $A$ of $X$ must be countable.

Both countability axioms are well behaved with respect to the operations of taking subspaces and countable products:

> [!Proposition]
> 1. A subspace of a (first/second) countable space is (first/second) countable. 
> 2. A countable product of (first/second) countable spaces is (first/second) countable.

In a first countable space, convergent sequence are adequate to detect limit points of sets and to check continuity of functions; see [[Preliminaries to Topology#^0d769b]]. 

Two important consequences of the second countability axiom relate to notions we have encountered before in the context of metric spaces. 

> [!Proposition] @munkresTopology2000 30.3
> Let $X$ be a second countable space. Then, 
> 1. Every open covering of $X$ contains a countable subcover. ([[LEC CAL1 9#^0bd0b5]])
> 2. $X$ is [[LEC CAL1 9#^9c3671|separable]]. ([[LEC CAL1 9#^b788c7]], $\impliedby$)

1. A space for which every open cover contains a countable subcover is called a **Lindelöf space**. 
2. The Lindelöf property and separability are weaker in general than the second countability axiom. 
3. separability and first countability together do not imply second countable either; the proof of ([[LEC CAL1 9#^b788c7]], $\implies$) does not go through when the metric space hypothesis is replaced by first countability.
4. However, both properties are equivalent to second countability for metrizable spaces. Given a Lindelöf metric space, the countable union $\bigcup_{r\in \mathbb{Q}_{> 0}}B_{r}$ where $B_{r}$ is a countable subcover of the collection of all balls of radius $r$ is a countable basis. 

> [!Example] @munkresTopology2000 [p. 192]
> 1. The space $\mathbb{R}_{\ell}$ is first countable, separable, Lindelöf, but not second countable. 
> 2. The product of two Lindelöf spaces need not be Lindelöf: $\mathbb{R}_{\ell}^{2}$ is not. 
> 3. A subspace of a Lindelöf space need not be Lindelöf. The ordered square (being compact) is Lindelöf, but the subspace $[0, 1]\times(0, 1)$ is not. 
> 4. A subspace of a separable space need not be separable - consider the "off-diagonal" of the $\mathbb{R}_{\ell}^{2}$. 

