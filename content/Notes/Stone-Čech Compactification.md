---
id: "454"
date: 2026-04-26
time: 18:22
tags:
  - TOP
---
Recall what a [[Compactness#^c3fe5a|compactification]] is.

> [!Lemma] @munkresTopology2000 38.1
> Let $X$ be a space; suppose that $h:X\to Z$ is an imbedding of $X$ in the compact Hausdorff space $Z$. Then there exists a corresponding compactification $Y$ of $X$; it has the property that there is an imbedding $H:Y\to Z$ that equals $h$ on $X$. The compactification $Y$ is uniquely determined up to equivalence. 
> 
> We call $Y$ the **compactification induced by the imbedding $h$**. 
> 
> > [!Proof]-
> > 
> > Given $h$, let $X_{0}$ denote the subspace $h(X)$ of $Z$, and let $Y_{0}$ denote its closure in $Z$. Then $Y_{0}$ is a [[Compactness#^935571|compact]] Hausdorff space and $\overline{X_{0}}=Y_{0}$; therefore, $Y_{0}$ is a compactification of $X_{0}$. We con construct $Y\supseteq X$ such that $h$ can be extended to a homeomorphism $H$ of $Y$ onto $Y_{0}$. 
> > 
> > Now suppose $Y_{i}$ is a compactification of $X$ and that $H_{i}:Y_{i}\to Z$ is an imbedding that is an extension of $h$ for $i=1, 2$. [[Preliminaries to Topology#^1b4b44|Since]] $H_{i}$ is continuous, we have $H_{i}(Y_{i})=H_{i}(\overline{X})\subseteq\overline{H_{i}(X)}=Y_{0}$. Thus, $H_{2}^{-1}\circ H_{1}$ defines a homeomorphism of $Y_{1}$ with $Y_{2}$ that equals the identity on $X$. 
> 

^ff3c2e

There are several ways to compactify a space. For example, $S^{1}$, $[0, 1]$, and the topologist's sine curve are all compactifications of $(0, 1)$ by [[Stone-Čech Compactification#^ff3c2e]]. We want to answer the following question:

> [!Question]
> Given a compactification $Y$ of $X$, under what conditions can a continuous function defined on $X$ be extended continuously to $Y$?

We will see that the hypotheses of [[Urysohn Lemma and applications#^994616|complete regularity]] of $X$ and the codomain being compact Hausdorff guarantees the existence of a *unique* $Y$ which admits *unique* extensions. 

To begin, observe that it follows from [[Urysohn Lemma and applications#^72b42d]] and [[Stone-Čech Compactification#^ff3c2e]] that a space is completely regular iff it has a compactification. We can prove something much stronger, making progress toward answering our question:

> [!Theorem] @munkresTopology2000 38.2
> Let $X$ be a completely regular space. There exists a compactification $Y$ of $X$ having the property that every bounded continuous map $f:X\to \mathbb{R}$ extends *uniquely* to a continuous map of $Y$ into $\mathbb{R}$. 
> 
> > [!Proof]-
> > 
> > Let $\{ f_{\alpha} \}_{\alpha\in J}$ be the collection of all bounded continuous real-valued functions on $X$, indexed by some index set $J$. For each $\alpha\in J$, choose a closed interval $I_{\alpha}$ in $\mathbb{R}$ containing $f_{\alpha}(X)$. To be definite, choose $I_{\alpha}=[\inf f_{\alpha}(X), \sup f_{\alpha}(X)]$. Then define $h:X\to \prod_{\alpha\in J}I_{\alpha}$ by the rule
> > $$
> > h(x)=(f_{\alpha}(x))_{\alpha\in J}.
> > $$
> > By the Tychonoff theorem, $\prod I_{\alpha}$ is compact. Because $X$ is completely regular, the collection $\{ f_{\alpha} \}$ separates points from closed sets in $X$. By [[Urysohn Lemma and applications#^3206b8]], $h$ is an imbedding. 
> > 
> > Let $Y$ be the compactification of $X$ induced by $h$, per [[Stone-Čech Compactification#^ff3c2e]]. Then there is an imbedding $H:Y\to \prod I_{\alpha}$ that equals $h$ when restricted to the subspace $X$ of $Y$. Given a bounded continuous real valued function $f_{\beta}$ on $X$, the continuous map $\pi_{\beta}\circ H:Y\to I_{\beta}$ is the desired extension of $f$. Uniqueness of the extension follows from the following lemma.
> 

^230c2f

> [!Lemma] @munkresTopology2000 38.3
> Let $A\subseteq X$; let $f:A\to Z$ be a continuous map of $A$ into the Hausdorff space $Z$. There is at most one extension of $f$ to a continuous function $g:\overline{A}\to Z$. 

> [!Theorem] @munkresTopology2000 38.4
> Let $X$ be a completely regular space; Let $Y$ be a compactification of $X$ from [[Stone-Čech Compactification#^230c2f]]. Given any continuous map $f:X\to C$ of $X$ into a compact Hausdorff space $C$, the map $f$ extends uniquely to a continuous map $g:Y\to C$. 
> 
> > [!Proof]-
> > 
> > $C$ is [[Countability and Separation axioms#^ae93c1|normal]], hence completely regular, hence can be [[Urysohn Lemma and applications#^72b42d|imbedded]] in $[0, 1]^{J}$ for some $J$. So we may as well assume $C\subseteq[0, 1]^{J}$. Then each component function $f_{\alpha}$ of the map $f$ is a bounded continuous real-valued function on $X$. By hypothesis, $f_{\alpha}$ can be extended to a continuous map $g_{\alpha}:Y\to \mathbb{R}$. Define $g:Y\to \mathbb{R}^{J}$ by setting $g(y)=(g_{\alpha}(y))_{\alpha\in J}$; then $g$ is continuous because $\mathbb{R}^{J}$ has the product topology. Continuity of $g$ implies
> > $$
> > g(Y)=g(\overline{X})\subseteq \overline{g(X)}=\overline{f(X)}\subseteq \overline{C}=C.
> > $$
> > Thus $g$ is the desired extension. 
> 

> [!Theorem] @munkresTopology2000 38.5
> Let $X$ be a completely regular space. If $Y_{1}$ and $Y_{2}$ are two compactifications of $X$ satisfying [[Stone-Čech Compactification#^230c2f]], then $Y_{1}$ and $Y_{2}$ are [[Compactness#^c3fe5a|equivalent]].  

> [!Definition] Stone-Čech Compactification
> For each completely regular space $X$, denote its unique compactification satisfying [[Stone-Čech Compactification#^230c2f]] (up to equivalence) by $\beta(X)$ and call it the **Stone-Čech Compactification**. It is characterized by the fact that any continuous map $f:X\to C$ of $X$ into any compact Hausdorff space $C$ extends uniquely to a continuous map $g:\beta(X)\to C$. 

