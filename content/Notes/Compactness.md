---
id: "422"
date: 2026-02-21
time: 17:01
tags:
  - TOP
---

> [!Proposition]
> 1. Every closed subspace of a compact space is compact. 
> 2. Every compact subspace of a Hausdorff space is closed. 
> 3. The image of a compact space under a continuous map is compact. 
> 4. A continuous map from a compact space to a Hausdorff space is a closed map. 
> 
> > [!Proof]-
> > 
> > $(2)$ Proof proceed in the same way as that of [[Countability and Separation Axioms#^ae93c1]].3; show that every point not in the subspace has a neighborhood in the complement. 
> > 
> > $(4)$ Let $f:X\to Y$ be such a map. If $A\subseteq X$ is closed in $X$, then $A$ is compact. Therefore, $f(A)$ is compact. Since $Y$ is Hausdorff, $f(A)$ is closed in $Y$. 
> 

^c93857


> [!Lemma] Tube lemma
> Consider the product space $X\times Y$, where $Y$ is compact. If $N$ is an open set of $X\times Y$ containing the slice $x_{0}\times Y$ of $X\times Y$, then $N$ contains some tube $W\times Y$ about $x_{0}\times Y$, where $W$ is a neighborhood of $x_{0}$ in $X$. 

^4df77e

[[#^4df77e]] is used in proving that a finite product of compact spaces is compact. 

Compactness generalizes the Cantor intersection property; see [[LEC CAL1 7#Finite intersection property|Finite intersection property]]. Also, the [[LEC ANA1 20#^95867f|uniform continuity theorem]]. 

The order topology provides us with examples of compact spaces analogous to the metric case.

> [!Proposition]
> Let $X$ be a simply ordered set having the least upper bound property. In the order topology, each closed interval in $X$ is compact. 

We also have the following generalization of the extreme value theorem:

> [!Proposition] Extreme value theorem
> Let $f:X\to Y$ be continuous, where $Y$ is an ordered set in the order topology. If $X$ is compact, then there exist points $c$ and $d$ in $X$ such that $f(c)\leqslant f(x)\leqslant f(d)$ for every $x\in X$. 

For metric spaces, we get a refinement of compactness: the [[LEC CAL1 8#Lebesgue covering Lemma|Lebesgue number lemma]]. 

> [!Remark]
> If a metric space $(X, d)$ satisfies the conclusion of the Lebesgue number lemma, then
> any continuous map from $X$ to a metric space is uniformly continuous.

> [!Theorem]
> Let $X$ be a nonempty compact Hausdorff space. If $X$ has no isolated points, then $X$ is uncountable. 
> 
> > [!Proof]-
> > 
> > First, show that given any nonempty open set $U$ of $X$ and any point $x$ of $X$, there exists a nonempty open set $V$ contained in $U$ such that $x\not\in \overline{V}$; this used the Hausdorff hypothesis. Then, show that given $f:\mathbb{Z}_{+}\to X$, $f$ is not surjective by constructing a descending chain of closed intervals $\overline{V}_{1}\supseteq \overline{V}_{2}\supseteq\dots$ such that $\overline{V}_{n}$ does not contain $x_{n}$. Using the finite intersection property, $\bigcap \overline{V}_{n}$ is nonempty, and the element contained in this intersection cannot be in the image of $f$. 
> 

> [!Proposition] @leeIntroductionTopologicalManifolds2000, 4.26
> Let $K$ be a compact convex subset of $\mathbb{R}^{n}$ with nonempty interior. Then $K$ is homeomorphic to the closed unit ball $\overline{\mathbb{B}^{n}}$, by a homeomorphism that sends $\mathbb{S}^{n-1}$ to $\partial K$. 

Proof follows standard convex geometric arguments.

---

# Limit point compactness

> [!Proposition]
> Compactness implies limit point compactness, but not conversely. 
> 
> > [!Proof]-
> > 
> > Prove the contrapositive - if $A$ has no limit point, then $A$ must be finite. If $A$ has no limit point, it is closed and all points are isolated. 
> 

> [!Example]
> Let $Y$ consist of tow points and have the indiscrete topology. Then the space $X=\mathbb{Z}_{+}\times Y$ is limit point compact, but not compact. 

For metric spaces, compactness, limit point compactness, and sequential compactness are equivalent. 

> [!Remark]
> For a Hausdorff space, we have
> compact ⇒ countably compact ⇔ limit point compact
> sequentially compact ⇒ countably compact ⇔ limit point compact  

---

# Local compactness

A generalization of the notion of compactness. 

> [!Definition] Local compactness
> 1. A subset $A$ of a topological space $X$ is said to be **precompact** in $X$ if $\overline{A}$ is compact. 
> 2. A space $X$ is called **locally compact at $x$** if $x$ has a precompact neighborhood. 
> 3. A space is **locally compact** if it is locally compact at $x$ for all $x\in X$. 

^f8dbab


Clearly, a compact space is locally compact. 

> [!Theorem]
> Let $X$ be a space. Then $X$ is locally compact Hausdorff iff there exists a space $Y$ satisfying the following conditions:
> 1. $X$ is a subspace of $Y$. 
> 2. The set $Y\setminus X$ consists of a single point. 
> 3. $Y$ is a compact Hausdorff space. 
> 
> If $Y$ and $Y'$ are two spaces satisfying these conditions, then there is a homeomorphism of $Y$ with $Y'$ that equals the identity map on $X$. 

^6514af

> [!Definition] 
> 1. If $Y$ is a compact Hausdorff space and $X$ is a proper subspace of $Y$ whose closure equals $Y$, then $Y$ is said to be a **compactification** of $X$. 
> 2. If $Y\setminus X$ equals a single point, then $Y$ is called the **one-point compactification** of $X$; the use of 'the' is justified by [[#^6514af]]. 
> 3. Two compactifications $Y_{1}$ and $Y_{2}$ of $X$ are said to be **equivalent** if there is a homeomorphism $h:Y_{1}\to Y_{2}$ such that $h|_{X}=\mathrm{id}_{X}$. 

^c3fe5a

If we assume $X$ is Hausdorff, local compactness admits the kind of formulation we'd expect for a 'local' property:

> [!Proposition] @munkresTopology2000 29.2
> Let $X$ be a Hausdorff space. Then $X$ is locally compact iff for each $x\in X$ and each neighborhood $U\ni x$, there is a neighborhood $V\ni x$ such that $\overline{V}$ is compact and is contained in $U$, i.e., $x\in V\subseteq \overline{V}\subseteq U$. 
> 
> > [!Proof]-
> > 
> > $(\implies)$ Let $x\in X$ have neighborhood $U$. Let $Y$ be the one-point compactification $X$, and let $C$ be the set $Y\setminus U$. Then $C$ is closed in $Y$, so that $C$ is a compact subspace of $Y$. Apply [[Countability and Separation Axioms#^5ad38e]] to choose disjoint open sets $V$ and $W$ containing $x$ and $C$ respectively. Then the closure $\overline{V}$ of $V$ in $Y$ is compact, and $\overline{V}$ is disjoint from $C$, so that $\overline{V}\subseteq U$. 
> > 
> > $(\impliedby)$ is clear. 
> > 
> 

> [!Proposition]
> Let $X$ be locally compact Hausdorff. Let $A\subseteq X$. If $A$ is closed in $X$ or open in $X$, then $A$ is locally compact. 

^01fa69


> [!Corollary]
> A space $X$ is homeomorphic to an open subspace of a compact Hausdorff space iff $X$ is locally compact Hausdorff; follows from [[#^6514af]] and [[#^01fa69]]. 


> [!Proposition] @munkresTopology2000 §32 Exr 3
> Every locally compact Hausdorff space is regular. 
> 
> > [!Proof]-
> > 
> > X is locally compact Hausdorff, so by [[#^6514af]] it has a one point compactification which is compact Hausdorff hence normal by [[Countability and Separation Axioms#^ae93c1]].3. Then $X$ is a subspace of a normal space and hence regular by [[Countability and Separation Axioms#^f0873d]].3. In fact, this shows that $X$ is completely regular since [[Urysohn Lemma and Applications#^da93d4]]. 

> [!Proposition]
> The one-point compactification of a locally compact Hausdorff space $X$ is metrizable iff $X$ is second countable. 

---

# Paracompactness

Another generalization of compactness; becomes important in the study of manifolds. 

> [!Definition] Local finiteness
> 1. Let $X$ be a topological space. A collection $\mathcal{A}$ of subsets of $X$ is said to be **locally finite** if each point of $X$ has a neighborhood that intersects at most finitely many of the sets in $\mathcal{A}$. 
> 2. Given a cover $\mathcal{A}$ of $X$, another cover $\mathcal{B}$ is called a **refinement of $\mathcal{A}$** if for each $B\in \mathcal{B}$ there exists some $A\in \mathcal{A}$ such that $B\subseteq A$; it is an **open refinement** if each $B\in \mathcal{B}$ is an open subset of $X$. 

> [!Definition] Paracompactness
> A space $X$ is said to be **paracompact** if every open cover of $X$ admits a locally finite open refinement. 
> 

We will use the following lemma to prove that manifolds are paracompact.

> [!Lemma] @leeIntroductionTopologicalManifolds2011 4.76
> A second countable, locally compact Hausdorff space admits an exhaustion by compact sets (a sequence $(K_{i})_{i=1}^{\infty}$ of compact subsets of $X$ such that $X=\bigcup_{i}K_{i}$ and $K_{i}\subseteq K_{i+1}^{\circ}$ for each $i$). 
> 
> > [!Proof]-
> > 
> > If $X$ is a locally compact Hausdorff space, it has a basis of precompact open subsets; if in addition $X$ is second countable, it is covered by countably many such sets. Let $\{ U_{i} \}_{i=1}^{\infty}$ be such a countable cover. 
> > 
> > To prove the theorem, it suffices to construct a sequence $\{ K_{j} \}_{j=1}^{\infty}$ of compact sets satisfying $U_{j}\subseteq K_{j}$ and $K_{j}\subseteq K_{j+1}^{\circ}$ for each $j$. 
> > 
> > Begin by setting $K_{1}=\overline{U}_{1}$. For $k\geqslant 1$, suppose we have defined $K_{1}, \dots, K_{k}$ satisfying $U_{j}\subseteq K_{j}$ for $1\leqslant j\leqslant k$ and $K_{j}\subseteq K_{j+1}^{\circ}$ for $1\leqslant j\leqslant k-1$. Extract a finite subcover $\{ U_{\alpha} \}_{\alpha\in A}$ of $K_{k}$ from $\{ U_{i} \}_{i=1}^{\infty}$, and define $K_{k+1}$ to be $\overline{U}_{k+1}\cup\bigcup_{\alpha\in A}\overline{U}_{\alpha}$. 
> 

> [!Theorem] @leeIntroductionTopologicalManifolds2011 4.77
> Every second countable, locally compact Hausdorff space (and in particular, every topological manifold with or without boundary) is paracompact. 
> 
> > [!Proof]-
> > 
> > ![[-20260614185108001.jpg|400]]
> > 
> > Suppose $X$ is second countable, locally compact Hausdorff. Suppose $\mathcal{U}$ is an open cover for $X$. Let $\{ K_{j} \}_{j=1}^{\infty}$ be an exhaustion of $X$ by compact sets. For each $j$, let $A_{j}=K_{j+1}\setminus K_{j}^{\circ}$ and $W_{j}=K_{j+2}^{\circ}\setminus K_{j-1}$. Then $A_{j}$ is a compact subset contained in the open subset $W_{j}$. For each $x\in A_{j}$, choose $U_{x}\in \mathcal{U}$ containing $x$, and let $V_{x}=U_{x}\cap W_{j}$ The collection of all such sets $V_{x}$ as $x$ ranges over $A_{j}$ is an open cover of $A_{j}$, and thus has a finite subcover. The union of all such finite subcovers as $j$ ranges over $\mathbb{N}$ forms an open cover of $M$ that refines $\mathcal{U}$. Because $W_{j}$ intersects $W_{j'}$ only for $j-2\leqslant j'\leqslant j+2$, the resulting cover is locally finite. 
> 

^6e5ca5

We have seen that [[Countability and Separation Axioms#^ae93c1|compact Hausdorff spaces are normal]]; we now show that we can relax the compactness requirement to paracompactness. 

> [!Theorem] @leeIntroductionTopologicalManifolds2011 4.81
> Every paracompact Hausdorff space is normal. 

> [!Example]
> 1. Clearly, every compact space is paracompact, since a finite subcover is a locally finite open refinement. 
> 2. $\mathbb{R}^{n}$ is paracompact, by [[#^6e5ca5]]. 
> 3. The Sorgenfrey line is paracompact, even though it is neither compact, locally compact, second countable, nor metrizable.

---
# The Tychonoff Theorem

> [!Theorem] Tychonoff, @munkresTopology2000 37.3
> An arbitrary product of compact spaces is compact in the product topology. 

