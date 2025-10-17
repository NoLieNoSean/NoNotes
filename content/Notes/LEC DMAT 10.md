---
tags:
  - DMAT
  - Lecture
date: 2025-02-17
time: 11:52
id: "208"
---
## Pigeon hole principle

- in any selection of $n+1$ numbers from $[2n]$, there exist two which are coprime
- in any selection of $n+1$ numbers from $[2n]$, there exist two such that one divides the other.

More general formulation of PHP: $r$ colors, $m$ pigeons. The minimum value of $m$ such that there exist $c$ monochromatic pigeons is $r(c-1)+1$.

> [!Example]
> Given two disks, one smaller than the other. Each disk is divided into 200 congruent sectors. In the larger disk 100 sectors are chosen arbitrarily and painted red; the other 100 sectors are painted blue. In the smaller disk each sector is painted either red or blue with no stipulation on the number of red and blue sectors. The smaller disk is placed on the larger disk so that the centers and sectors coincide. Show that it is possible to align the two disks so that the number of sectors of the smaller disk whose color matches the corresponding sector of the larger disk is at least 100.
> 
> Let a single match between a sector on the smaller disk and a sector on the larger disk for a given alignment be a pigeon. If the smaller disk has $r$ red sectors and $b$ blue sectors, then the total number of pigeons will be $100r+100b=20,000$. There are a total of 200 alignments, which correspond to holes. Thus, there is at least one alignment with at least $20000/200=100$ matches.

---
## Erdos Szekeres problem

Given any list of $mn+1$ real numbers $a_{1}, a_{2}, \dots, a_{mn+1}$, there exists an increasing subsequence of length $m+1$ or a decreasing subsequence of length $n+1$. 

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

Choose any one vertex; call it _P_. There are five edges leaving _P_. They are each coloured red or blue. The [pigeonhole principle](https://en.wikipedia.org/wiki/Pigeonhole_principle "Pigeonhole principle") says that at least three of them must be of the same colour; for if there are less than three of one colour, say red, then there are at least three that are blue.

Let _A_, _B_, _C_ be the other ends of these three edges, all of the same colour, say blue. If any one of _AB_, _BC_, _CA_ is blue, then that edge together with the two edges from P to the edge's endpoints forms a blue triangle. If none of _AB_, _BC_, _CA_ is blue, then all three edges are red and we have a red triangle, namely, _ABC_.

Example: Consider a 9 vertex graph and 2-color all edges. Either there exists a red complete graph on 3 vertices or a blue complete graph on 4 vertices.

Geometric application: for all $n$ there exists $f(n)$ such that given $f(n)$ points on the plane (no 3 collinear) there exists a convex $n$ gon.