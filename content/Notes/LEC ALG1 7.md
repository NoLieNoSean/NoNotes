---
tags:
  - ALG1
  - Lecture
---

- Vector space of polynomials of degree $\le n$ = span of $\{ 1,x,x^{2},x^3,\dots, x^n \}$. 
- Any set of vectors containing $\mathbf{0}$ is linearly dependent.
- Any single non zero vector is linearly independent.

Observe:
- If $V=\text{span}(S)$ then any set $S'$ which is a superset of $S$ also spans $V$.
- If $S$ is linearly independent, so is any subset of $S$.


## Lemma 1

**Any set $S \subset \mathbb{R}^n$ whose span equals $\mathbb{R}^n$ must be of size at least $n$**.

Proof:
Let $S = \{ v_{i} \}$ be of cardinality of $k$. Consider the matrix $A$ whose columns consist of the vectors $v_{i}$. We know that the transformation represented by $A$ is surjective by hypothesis. So, every row in RREF(A) must have a pivot. Thus, $A$ must have at least $n$ columns.

## Lemma 2

**Any linearly independent set in $\mathbb{R}^n$ must be of size $\le n$.**

Proof:
use same matrix $A$ from Lemma 1. We know $A$ is injective by hypothesis. Thus, every column must have a pivot. Therefore, the number of rows must be less than or equal to $n$. 

---
Defined [[Bases|basis]]

From the above, it is clear that any basis of $\mathbb{R}^n$ contains exactly $n$ elements.

>[!Note]
>The cardinality of the basis of a set $V$ is called the dimension of $V$.


---
>[!Question]
>Does every vector space have a basis?

### Strategy A
Start with an empty set, and keep appending vectors till it spans the entire set. Here, you need to prove two things
- Given a set of linearly independent set of vectors, appending a vector which is not in the span of set should maintain the linear independence of the set.
- This process should terminate after a finite amount of steps.

The first is true and can be proved. The second, however, is harder to tackle.

### Strategy B
Start with a spanning set, and keep deleting vectors while the resulting set is linearly independent. This requires that you to prove that you can remove a vector from a linearly dependent set of vectors without reducing the span, and that the process actually terminates. The first can be proved, but face the same problem with the termination requirement.

>[!Definition]
>$V$ is called a finite dimensional vector space if $V$ has a finite spanning set. 
