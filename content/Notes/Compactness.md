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
> 4. Let $f:X\to Y$ be a bijective continuous function. If $X$ is compact and $Y$ is Hausdorff, then $f$ is a homeomorphism. 
> 
> > [!Proof]-
> > 
> > $(2)$ Proof proceed in the same way as that of [[Countability and Separation axioms#^ae93c1]].3; show that every point not in the subspace has a neighborhood in the complement. 
> > 
> > $(4)$ If $A\subseteq X$ is closed in $X$, then $A$ is compact. Therefore, $f(A)$ is compact. Since $Y$ is Hausdorff, $f(A)$ is closed in $Y$. 
> 


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

> [!Definition] Local compactness
> A space $X$ is called **locally compact** at $x$ if there is a compact subspace $C$ of $X$ that contains a neighborhood $V$ of $x$: that is, $x\in V\subseteq C\subseteq X$. A space is locally compact if it is locally compact at $x$ for all $x\in X$. 

> [!Theorem]
> Let $X$ be a space. Then $X$ is locally compact Hausdorff iff there exists a space $Y$ satisfying the following conditions:
> 1. $X$ is a subspace of $Y$. 
> 2. The set $Y\setminus X$ consists of a single point. 
> 3. $Y$ is a compact Hausdorff space. 
> 
> If $Y$ and $Y'$ are two spaces satisfying these conditions, then there is a homeomorphism of $Y$ with $Y'$ that equals the identity map on $X$. 

^6514af

> [!Definition]
> If $Y$ is a compact Hausdorff space and $X$ is a proper subspace of $Y$ whose closure equals $Y$, then $Y$ is said to be a **compactification** of $X$. If $Y\setminus X$ equals a single point, then $Y$ is called the **one-point compactification** of $X$; the use of 'the' is justified by [[#^6514af]]. 

If we assume $X$ is Hausdorff, local compactness admits the kind of formulation we'd expect for a 'local' property:

> [!Proposition]
> Let $X$ be a Hausdorff space. Then $X$ is locally compact iff for each $x\in X$ and each neighborhood $U\ni x$, there is a neighborhood $V\ni x$ such that $\overline{V}$ is compact and is contained in $U$: that is, $x\in V\subseteq \overline{V}\subseteq U$. 

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
> > X is locally compact Hausdorff, so by [[#^6514af]] it has a one point compactification which is compact Hausdorff hence normal by [[Countability and Separation axioms#^ae93c1]].3. Then $X$ is a subspace of a normal space and hence regular by [[Countability and Separation axioms#^f0873d]].3. In fact, this shows that $X$ is completely regular since [[Urysohn Lemma and applications#^da93d4]]. 

> [!Proposition]
> The one-point compactification of a locally compact Hausdorff space $X$ is metrizable iff $X$ is second countable. 

