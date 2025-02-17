---
tags:
  - DMAT
  - Lecture
date: 2025-02-17
time: 11:52
---
## Pigeon hole principle

- in any selection of $n+1$ numbers from $[2n]$, there exist two which are coprime
- in any selection of $n+1$ numbers from $[2n]$, there exist two such that one divides the other.

More general formulation of PHP: $r$ colors, $m$ pigeons. The minimum value of $m$ such that there exist $c$ monochromatic pigeons is $r(c-1)+1$.

disk coloring

---
## Erdos Szekeres problem

Given any list of $mn+1$ real numbers $a_{1}, a_{2}, \dots, a_{mn+1}$, either there exists an increasing subsequence of length $m+1$ or a decreasing subsequence of length $n+1$. 

**Proof 1**
For each $i$ let $t_{i}$ be the length of the longest increasing subsequence ending at $a_{i}$.
Suppose $1\leq t_{i}\leq m$ for all $i\in[mn+1]$. Then, there must exist 
$i_{1}<i_{2}<\dots i_{n+1}$ such that $t_{i_{1}}=t_{i_{2}}=\dots=t_{i_{n+1}}=t$. (the $t_{i}$'s represent colors here). These must form a decreasing sequence.

**Proof 2**
Assume that the longest upseq $\leq m$, and length of longest downseq $\leq n$. For all $a_{i}$ we get a pair $(t_{i}, s_{i})$. $m\times n$ matrix, vanilla PHP, easy contradiction.

**Proof 3**
Algorithmic proof, also using matrices.

**Proof 4**
Using dilworth's theorem. Construct poset such that upsequences correspond to chains, and downsequences correspond to antichains.
Poset: $A=\{ (a_{i}, i)\ | \ 1\leq i\leq mn+1 \}$.
$(a_{i}, i)<(a_{j}, j)$ if $a_{i}<a_{j}$ and $i<j$.

---

## Dilworth's theorem

Size of the largest antichain(may not be unique) = number of chains required to cover the poset. 

---
## Ramsey theory


Example, in any set of 6 people, there are either 3 people who mutually know each other or 3 people who don't mutually know each other.
6 vertex complete graph. edge is red if know, blue if not not know. Total of 15 edges. For any arbitrary coloring of these edges, we have to show that either there is a red triangle or a blue triangle.

Example: Consider a 9 vertex graph and 2-color all edges. Either there exists a red complete graph on 3 vertices or a blue complete graph on 4 vertices.

Geometric application: for all $n$ there exists $f(n)$ such that given $f(n)$ points on the plane (no 3 collinear) there exists a convex $n$ gon.

