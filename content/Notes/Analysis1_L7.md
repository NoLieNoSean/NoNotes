---
tags:
  - Lecture
  - ANA1
  - Processed
---


Saw in $\mathbb{R}$:
- A monotonic increasing sequence bounded above converges to its supremum.
- ditto for monotonically decreasing sequences.

For a monotonic sequence $S$, 
$S$ converges $\iff$ $S$ is bounded.
The $\Leftarrow$ proof is clear. 
Proof for the $\Rightarrow$ direction:
	Assume $S$ is monotonically increasing (same proof works for monotonically decreasing $S$).
	Then, $S_{1}$ is a lower bound.
	$S_{n}\to s$ then $s$ is upper bound
		this is easy to check. Use definition of convergence.

## Rudin, 3.2

defined open ball, neighborhood

$S\subset(X,d)$ is bounded if there exists $M$ such that $d(p,q) <M \forall p,q\in S$ $\iff$ $S$ is a subset of a ball.


---

Cauchy sequenecs
Every cauchy sequence converges
Proof plan
- show cauchy imples bounded
- find monotonic subseq in cuchy subseq
Every infinite bounded seq has a cnovergent subsequence.