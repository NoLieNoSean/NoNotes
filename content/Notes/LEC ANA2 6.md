---
tags: 
date: "2025-09-12"
time: "15:31"
---
Reviewed [[LEC CAL1 9#Second-countable spaces|second countability]]. A metric space is separable iff it is second countable.

> [!Example]
> Bounded sets need not be totally bounded. In $\mathscr{l}_{1}$, let $\mathbf{e}_{n}=\{ e_{n}^{k} \}_{k=1}^{\infty}$ be the sequence defined by $e_{n}^{k}=\delta_{n,k}$. $\lVert \mathbf{e}_{n} -\mathbf{e}_{k}\rVert_{1}=2$ for all $n\ne m$. Now, the set $B=\{ \mathbf{x}\in \mathscr{l}_{1}\ | \ \lVert \mathbf{x} \rVert_{1}\leq 1 \}\supset \{ \mathbf{e}_{n} \}$. Any open ball of radius $1/2$ can contain at most one $\mathbf{e}_{n}$. Thus, $B$ is not totally bounded. 

---
# Compactness

*Compact $\implies$ totally bounded.*
Proof is trivial.

*Any closed and bounded set in $\mathbb{R}^{n}$ is sequentially compact* (Cf [[LEC ANA1 16#Heine Borel Theorem]])

[[LEC ANA1 16#Closed subsets of compact sets are compact|Closed subsets of compact sets are compact]].

*Compact $\implies$ sequentially compact* (Cf [[LEC CAL1 7#^0b0337]]). 
Vasanth's proof: Suppose $X$ is compact and not sequentially compact, that is, there exists a sequence $\{ x_{n} \}\subseteq X$ such that $\{ x_{n} \}$ does not have any convergent subsequence. We claim that $K=\{ x_{n} \}$ is closed; this should be easy to see. Since $X$ is compact, this implies that $K$ is compact too. Since $\{ x_{n} \}$ does not have any converging subsequence, there exist $\delta_{n}$ such that $B_{\delta_{n}}(x_{n})\cap K=\emptyset$ for each $n$. This yields an open cover $\{ B_{\delta_{n}}(x_{n}) \}_{n=1}^{\infty}$ of $K$ which does not have a finite subcover, contradicting our earlier conclusion that $K$ must be compact.

*If $X$ is sequentially compact, then for any open cover $X=\bigcup_{\alpha\in I}U_{\alpha}$ there exists $\delta> 0$ such that for any $x\in X$, there exists $\alpha\in I$ such that $B_{\delta}(x)\subseteq U_{\alpha}$.* 
This is the [[LEC CAL1 8#^1e576d|Lebesgue covering lemma]] with 'compact' replaced with 'sequentially compact' in the hypothesis (note that we haven't shown these to be equal yet).
Vasanth's proof: Suppose there does not exist such a $\delta$. Then for each $n\in \mathbb{N}$, there exists $x_{n}\in X$ such that $B_{1/n}(x_{n})\cap U_{\alpha}^{c}\ne \emptyset$ for all $\alpha\in I$.  WLOG, assume $\{ x_{n} \}\to x\in X$. $x$ must be contained in $B_{\epsilon}(x)\subseteq U_{\alpha}$ for some $\alpha\in I$ and $\epsilon> 0$. Choose $n$ large enough such that $x_{n}\in B_{\epsilon/2}(x)$ and $1/n<\epsilon/2$. Then, we have $B_{1/n}(x_{n})\subseteq B_{\epsilon}(x)\subseteq U_{\alpha}$, a contradiction. 

*Compact $\implies$ complete.*
Let $X$ be compact. We have shown that this implies $X$ is sequentially compact. If $\{ x_{n} \}$ is a Cauchy sequence in $X$, then it has a convergent subsequence, [[Cauchy sequences#^4bc448|and hence must itself converge]].

TFAE: 
1. $X$ is compact;
2. $X$ is complete and totally bounded.
3. $X$ is sequentially compact;


We have shown: $1 \implies 2$, $1 \implies 3$,

$2 \implies 3$: Let $\{ x_{n} \}\subseteq X$. If $\{ x_{n} \}$ has finitely many distinct elements, then we are done. Otherwise, $X$ is the union of finitely many $1$-balls, and at least one such ball must contain infinitely many elements of $\{ x_{n} \}$. Take the closure of this ball. It is totally bounded (since $X$ is totally bounded), so we can cover it with finitely many balls of radius $1/2$, once of which must again contain infinitely many points of $\{ x_{n} \}$. Keep going to obtain a contracting sequence of closed sets, whose intersection must be a singleton $\{ x \}$ since $X$ is complete. It is now easy to obtain a subsequence of $\{ x_{n} \}$ converging to $x$.

$3 \implies 1$: Let $\{ U_{\alpha} \}_{\alpha\in I}$ be an open cover of $X$. Since $X$ is sequentially compact, there exists $\delta> 0$ such that for every $x\in X$, there is $\alpha\in I$ such that $B_{\delta}(x)\subseteq U_{\alpha}$. We now claim that there exist $x_{1}, \dots, x_{n}$ such that $X=\bigcup_{i=1}^{n}B_{\delta}(x)$. Indeed, if this were not true, we would be able to construct a sequence $\{ y_{n} \}$ such that $d(y_{n}, y_{m})\geq\delta$ for any $n, m$, contradicting sequential compactness.