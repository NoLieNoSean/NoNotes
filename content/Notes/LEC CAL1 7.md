---
tags:
  - CAL1
  - Lecture
  - Processed
date: 2025-02-04
time: 11:50
id: "176"
---
# Finite intersection property

> [!Definition]
> A collection $F$ of sets in $X$ is said to have the **finite intersection property** if any finite subcollection of $F$ has a nonempty intersection.

If $T$ is a collection of open subsets of a metric space $X$, then the collection $F$ of complements of sets in $T$ is a collection of closed sets. Moreover, $T$ is a cover of $X$ if and only if $F$ has empty intersection. Now, $X$ is compact if $T$ being an open cover implies a finite subcover of $T$ exists. Taking the contrapositive, we get that $X$ is compact if the nonexistence of a finite subcover of $T$ implies $T$ is not an open cover. 

> [!Theorem]
> A metric space $X$ is compact if and only if every collection $F$ of closed subsets of $X$ with the finite intersection property has nonempty intersection.

---
# Characterization of compact sets

Recall definitions of [[LEC ANA1 17#Absolute and relative definitions of open cover compactness|open cover compactness]] (referred to as just compactness), [[LEC ANA1 16#Sequential compactness|sequential compactness]], and [[LEC ANA1 16#Limit point compactness|limit point compactness]]. In Analysis 1, we [[LEC ANA1 16#Equivalence of sequential and limit point compactness|showed]] that sequential and limit point compactness are equivalent. We stated but didn't show that this equivalence extends to open cover compactness. We will prove this. Also recall that we [[LEC ANA1 16#Characterization of compact sets|showed]] all compact sets are closed and bounded (with the [[LEC ANA1 16#Heine Borel Theorem|converse]] being true for $\mathbb{R}^{n}$). We will introduce a stronger characterization, which says that a set is compact if and only if it is complete and totally bounded.

> [!Definition]
> A metric space $X$ is said to be *totally bounded* if for each $\epsilon> 0$, $X$ can be covered by a finite number of open balls of radius $\epsilon$. A subset $E$ of $X$ is said to be totally bounded if $E$ is bounded as a metric space. 

A totally bounded metric space is always bounded. However, being bounded does not imply being totally bounded. For example, consider $\mathbb{R}$ with the discrete metric. $\mathbb{R}$ is bounded under the discrete metric, but is not totally bounded since a finite covering of $\epsilon$-balls does not exist for $\epsilon< 1$. But, under any metric induced by a norm, a subset of $\mathbb{R}^{n}$ is bounded iff it is totally bounded.

> [!Proposition]
> A subset of $\mathbb{R}^{n}$ is bounded iff it is totally bounded under any metric induced by a norm.
> 
> > [!Proof]-
> > Since we have [[LEC CAL1 3#Equivalence of norms|shown]] that all norms on $\mathbb{R}^{n}$ are equivalent, it will suffice to prove the theorem for the metric induced by the euclidean norm. 
> > Let $E$ be a bounded subset of $\mathbb{R}^{n}$. Since $E$ is bounded, we may take $a$ large enough such that $E\subset[-a, a]^{n}$. Choose $k$ such that $\sqrt{ n }a/k<\epsilon$. Let $P_{k}$ be a partition of $[-a, a]$ for which each partition has length less than $\frac{1}{k}$. Then $P_{k}^{n}$ induces a partition of $[-a, a]^{n}$ into $n$-cuboids of diameter less than $\sqrt{ n }a/k$. Consider the finite collection of balls of radius $\epsilon$ with centers $(x, y)$ where $x$ and $y$ are the partition points of $P_{k}$. Then this finite collection of balls of radius $\epsilon$ covers $[-a, a]^{n}$, and hence covers $E$.
> 

> [!Theorem] Characterization of compactness for a metric space
> For a metric space $X$, the following assertions are equivalent:
> - $X$ is [[Cauchy sequences#Complete metric space|complete]] and totally bounded
> - $X$ is [[LEC ANA1 17#Absolute and relative definitions of open cover compactness|compact]]
> - $X$ is [[LEC ANA1 16#Sequential compactness|sequentially compact]].
> 
> > [!Proof]-
> > 
> > **Complete and totally bounded $\implies$ compact**
> > 
> > We argue by contradiction. Let $\mathcal{O}=\{ \mathcal{O}_{\lambda} \}_{\lambda\in\Lambda}$ be an open cover of $X$ with no finite subcover. Since $X$ is totally bounded, there exists a cover of $X$ which consists of open balls of radius $\epsilon=\frac{1}{2}$. At least one of these open balls must not have an open subcover in $\mathcal{O}$. Select one such ball and label its closure $F_{1}$. Now take a cover of $F_{1}$ consisting of open balls of radius $\epsilon=\frac{1}{4}$. The intersection of at least one such ball with $F_{1}$ must not have an open subcover in $\mathcal{O}$. Select one such ball and label the closure of its intersection with $F_{1}$ as $F_{2}$. Then $F_{1}$ and $F_{2}$ are closed, $F_{2}\subseteq F_{1}$, and $\text{diam}(F_{1})< 1$, $\text{diam}(F_{2})< \frac{1}{2}$. Continuing in this way we obtain a contracting sequence of nonempty closed sets $(F_{n})$ with the property that each $F_{n}$ does not have a finite subcover in $\mathcal{O}$. Since $X$ is complete, it has the [[LEC CAL1 6#Cantor intersection theorem|Cantor intersection property]], which implies $\bigcap_{n=1}^{\infty}F_{n}=\{ x \}$, where $x\in X$. 
> > 
> > Now, $x\in \mathcal{O}_{\lambda}$ for some $\lambda\in\Lambda$. Since $(F_{n})$ is a contracting sequence and $\mathcal{O}_{\lambda}$ is open, $F_{n}\subseteq \mathcal{O}_{\lambda}$ for some $n$. This contradicts the choice of $F_{n}$ as being a set that does not have a finite subcover in $\mathcal{O}$.
> > 
> > **Compact $\implies$ sequentially compact**
> > 
> > Let $(x_{n})$ be a sequence in $X$. For each index $n$, let $F_{n}$ be the closure of $\{ x_{k}\ | \ k\geq n  \}$. Note that the collection $\{ F_{n} \}_{n=1}^{\infty}$ has the finite intersection property. Since $X$ is compact, it follows that $\bigcap_{n=1}^{\infty}F_{n}\ne \emptyset$. Let $p\in \bigcap_{n=1}^{\infty}F_{n}$. Now, either $p$ is a limit point of $( x_{n} )$, or $p\in F_{n}$ for all $n$. In both cases, we can extract a subsequence of $(x_{n})$ which converges to $p$. Therefore, $X$ is sequentially compact.
> > 
> > **Sequentially compact $\implies$ complete and totally bounded**
> > 
> > Sequentially compact $\implies$ complete is obvious. 
> > Assume $X$ is not totally bounded. Then for some $\epsilon> 0$, we cannot cover $X$ with a finite number of $\epsilon$-balls. Pick $x_{1}\in X$, $x_{2}\in X\setminus B_{\epsilon}(x_{1})$, $x_{3}\in X\setminus B_{\epsilon}(x_{1})\setminus B_{\epsilon}(x_{2})$, and so on. The sequence $(x_{n})$ does not have a convergent subsequence since the distance between any two of its points is $\epsilon$ or greater.

^0b0337

