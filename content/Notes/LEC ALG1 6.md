---
tags:
  - ALG1
  - Lecture
---


$A$ is an $r\times c$ matrix.
If $b_{1},b_{2} \in \mathrm{Im}(A)$, $b_{1} =Ax_{1}, b_{2}=Ax_{2}, x_{1},x_{2} \in \mathbb{R}^c$
	$b_{1}+b_{2}=Ax_{1}+Ax_{2} = A(x_{1}+x_{2}) \in \mathrm{Im}(A)$.
similar argument for multiplication by scalars.

---
## Linear combinations, span
Defined linear combinations.

>[!Definition] Span
>Span of a set of vectors $S = \{ v_{1}, v_{2}, \dots, v_{n} \}, v_{i} \in V$ is the set of all linear combinations of the vectors in the set. 

Observe:
- span(S) is a subspace of $V$.
	- $\mathbf{0} \in \text{span}(S)$
	- $\text{span}(S)$ is closed under addition and multiplication by a scalar.
- Claim: $\text{span}(S)$ is the smallest subspace of $V$ that contains $S$, i.e, if a subspace $W \subset V$, contains $S$, then $W$ contains $S$. 
  Realize: $\text{span}(S)$ could have been defined as the smallest subspace of $V$ that contains $S$. 
- For a matrix $A$, $\text{range}(f_{A}) =\text{Im}(A) =\text{span}(\text{column vectors of A})$.
- $f_{A}$ is surjective $\iff$ Span of column vectors of $A$ = $\mathbb{R}^r$
- $f_{A}$ is injective $\iff$ only the trivial linear combination of the column vectors of $A$ results in $\mathbf{0}$.




---
## Linear independence
Defined [[bases|linear independence]].


_Claim_:  $v_{1}, v_{2}, \dots v_{n} \in V$ are linearly dependent $\iff$ one of them can be expressed as a linear combination of the others. 
_Proof_:
	 2 $\implies$ 1
		 let $v_{k}$ be expressible as a linear combination of the remaining vectors. Then, by pushing it to the other side of the equation, a non-trivial linear combination which equals $\mathbf{0}$ can be produced.
	1 $\implies$ 2
		A nontrivial linear combination exists which equals $\mathbf{0}$. Pick any $v_{k}$ with non zero coefficient $c_{1}$. Divide the equation by $c_{1}$ and it is easy to see that $v_{1}$ can be expressed as a linear combination of the other vectors.


---
Examples of vector spaces: $\mathbb{R}^n, \mathbb{P}_{n}$, homogeneous polynomials of degree $d$ in $k$ variables. 
