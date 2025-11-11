---
tags:
  - ANA2
date: 2025-09-13
time: 21:55
id: "291"
---
# The Cantor Bendixson Theorem

> [!Definition]
> A point $p$ in a metric space $X$ is said to be a **condensation point** of a set $E\subseteq X$ if every open neighborhood of $p$ contains uncountably many points of $E$. Note that condensation points are limit points.

Let $X$ be a second countable metric space with countable basis $\mathcal{B}=\{ B_{n} \}_{n=1}^{\infty}$ and $E\subseteq X$. 

> [!Exercise]
> Let $W$ be the union of those $B_{n}$ for which $E\cap B_{n}$ is at most countable and let $P=W^{c}$ ($P$ may be empty). Prove that $P$ is the set of all condensation points of $E$, with at most countably many points of $E$ not in $P$.
> 
> > [!Proof]-
> > Suppose $p$ is a condensation point of $E$. If $p\in B_{n}$ for some $n$, then $B_{n}\cap E$ is uncountable by definition. Thus, $p\not\in W$, so $p\in W^{c}=P$. Conversely, if $p\in P$, then every $B_{n}\in \mathcal{B}$ containing $p$ contained uncountably many points of $E$. It follows that any open set containing $p$ contains uncountably many points of $E$, and $p$ is a condensation point of $E$. It is clear that $W$ can only contain countably many points of $E$, which are the ones not in $P$.
> 

Intersecting $P$ with $E$ and taking $X=\mathbb{R}^{n}$, one obtains as a corollary that an uncountable subset of $\mathbb{R}^{n}$ contains uncountably many condensation points.

> [!Exercise]
> Show that $P$ is closed in $X$ and therefore perfect (i.e. $P$ is closed and every point of $P$ is a limit point of $P$). As a result, if $E$ is closed, show that $P\subseteq E$, hence every closed subset of a second countable metric space is expressible as a disjoint union of a perfect set and a set which is at most countable.
> 
> > [!Proof]-
> > 
> > If $p$ is a limit point of $P$, every neighborhood of $p$ contains a point of $P$, and hence has uncountably many points of $E$, making $p$ a condensation point of $E$. Thus, $P$ is closed.
> > 
> > Next, if $p\in P$, every neighborhood of $p$ contains uncountably many points of $E$. Since only countably many points of $E$ are not in $P$, this implies every neighborhood of $p$ contains points of $P$ - $p$ is a limit point of $P$. Thus, $P$ is perfect.
> > 
> > If $E$ is closed, it is obvious that $P\subseteq E$. 
> 

> [!Exercise]
> Assume that $X$ is complete and let $E$ be a closed subset of $X$. Let $C$ and $Q$ be disjoint sets that are at most countable and perfect respectively, such that $E=C\cup Q$. Prove that every point of $Q$ is a condensation point of $E$.
> 
> > [!Proof]-
> > FTSOC, assume that some $x\in Q$ is not a condensation point of $E$. Then there exists an open neighborhood $U$ of $x$ containing only countably many points $\{ x_{n} \}_{n=1}^{\infty}$ of $E$. WLOG, assume $\{ x_{n} \}_{n=1}^{\infty}\subseteq Q$ ($Q$ is perfect!). WLOG, let $x_{1}=x$. Take a small enough open ball $U_{2}$ around $x_{2}$ whose closure lies entirely inside $U$ and does not contain $x$, and pick the smallest index $n$ such that $x_{n}$ lies in $U_{2}$ (since $x_{2}\in Q$, it is also a limit point of $Q$). Repeat this procedure ensuring that the radii of the balls go to $0$. By the [[LEC CAL1 6#Cantor intersection theorem|Cantor intersection theorem]], the subsequence of $\{ x_{n} \}_{n=1}^{\infty}$ thus obtained must converge to some point in $E$. But, we've knocked off every point in $\{ x_{n} \}_{n=1}^{\infty}$ when constructing the contracting sequence ($x_{i}\not\in U_{i+1}$), so this is impossible!
> 

^5a0ea7

> [!Exercise] Cantor Bendixson Theorem
> Finally, show that every condensation point of $E$ is contained in $Q$, hence $Q$ is the set of condensation points of $E$. This shows that a closed subset of a complete, second countable metric space is uniquely expressible as a disjoint union of a perfect set and a set that is at most countable.
> 
> > [!Proof]-
> > If $p$ is a condensation point of $E$, every neighborhood of $p$ contains uncountably many points of $E$, hence must contain points of $Q$. Thus, $p$ is a limit point of $Q$, and $p\in Q$.
> 


[!Exercise]
Find a counterexample to unique expressibility if $X$ is not assumed to be complete.