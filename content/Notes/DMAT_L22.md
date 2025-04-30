---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-04-09
time: 11:56
---
# M-alternating paths

$M$-alternating path proof for Hall's. [[Introduction to Graph Theory (Douglas B. West).pdf#page=131|ref]]

> [!Theorem] Lemma
> Every component of the symmetric difference of two matchings is a path or an even cycle.

> **Proof**
> Let $M$ and $M'$ be matchings, and let $F=M\triangle M'$. Since $M$ and $M'$ are matchings, each vertex has at most one incident edge from them. Thus $F$ has at most two edges at each vertex. It follows that every component of $F$ is a path or a cycle. Furthermore, every path or cycle in $F$ alternates between paths in $M\setminus M'$ and $M'\setminus M$. If an odd cycle were to exist in $F$, it would mean that the same matching has two edges incident at a vertex, which is not possible.

> [!Theorem]
> A [[DMAT_L21#Matchings|matching]] $M$ in a graph $G$ is a maximum matching in $G$ iff $G$ has no $M$-augmenting path.

> **Proof**
> If $G$ has an $M$-augmenting path, a larger matching can be easily constructed. Thus, if $M$ is a maximum matching, $G$ does not contain an $M$-augmenting path.
> 
> For the converse, assume $M$ is not a maximum matching, with $|M'|> |M|$. We will prove that $G$ has an $M$-augmenting path. From the previous lemma, the components of $M\triangle M'$ are paths and even cycles. One of these components will have to contain more edges of $M'$ than of $M$. Such a component can only be a path that starts and ends with an edge of $M'$; thus it is an $M$-augmenting path.

We will now give an alternate proof for [[DMAT_L21#Perfect matchings in bipartite graphs|Hall's theorem]].

> **Proof**
> To prove the sufficiency of Hall's condition, we will prove the contrapositive, that is, if there does not exist a matching saturating $L$, then there exists a set $S\subseteq L$ such that $|S|> |N(S)|$. Consider any maximum matching $M$ in $G$. By hypothesis, $M$ does not saturate $L$. Let $l\in L$ not be saturated by $M$. Among all the vertices reachable from $u$ by $M$-augmenting paths in $G$, let $S$ consist of those in $X$, and let $T$ consist of those in $Y$. Note that $l\in S$. It is easy to see that $M$ matches $T$ with $S\setminus \{ u \}$, so $|T|+1=|S|$. Next, observe that $N(S)=T$, since if $r\not\in T$ were in $N(S)$, it would be possible to construct an $M$-augmenting path, contradicting the maximality of $M$. Thus, $|N(S)|=|T|=|S|-1< |S|$, and we are done.
