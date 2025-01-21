---
tags:
  - DMAT
  - Lecture
date: 2025-01-20
time: 11:48
---

[!Definition]
Let $A$ be an infinite set. Let $D=\{ D_{i}: i\in I \}$, where $|D_{i}|=\aleph_{0}$, and $D_{i}\cap D_{j}=\emptyset$ for all $i\ne j\in I$, and $\bigcup_{i\in I}D_{i}=A$. Then, $D$ is called a disjoint covering of $A$. 

[!Theorem]
Every infinite set has a disjoint covering.

**Proof**
Let $A$ be an infinite set. 
$P=\{ (B, \mathbf{D}):B\subset A, \mathbf{D} \text{ is a disjoint covereing of }B \}$.
Define a partial order by $(B_{1}, D_{1})\leq(B_{2}, D_{2})$ if $B_{1}\subset B_{2}$ and $D_{1}\subset D_{2}$. 

Let $C$ be any chain in $(P, \leq)$. 
$C=\{ (B_{i}, \mathbf{D}_{i}) : i\in I\}$. 
For all $i, j\in I$, either $(B_{i}, \mathbf{D}_{i})\leq(B_{j}, \mathbf{D}_{j})$, or vice versa.
Let $B=\bigcup_{i\in I}B_{i}$ and $\mathbf{D}=\bigcup_{i\in I}\mathbf{D}_{i}$. It is easy to see that $\mathbf{D}$ is a disjoint covering for $B$. Thus, $(B, \mathbf{D})\in P$, so Zorn's lemma is applicable. Let $(\hat{B}, \mathbf{\hat{D}})$ be the maximal element. 

If $\hat{B}=A$, we are done.
If $\hat{B}$ is a proper subset of $A$, two cases:
- $A\setminus \hat{B}$ is finite: Change the covering by appending the finite elements to some $\hat{\mathbf{D}}_{i}$. Does not create a contradiction.
- If it is infinite, you can take an uncountable subset of it and add it to $\mathbf{\hat{D}}$, contradicting the maximality of $(\hat{B}, \mathbf{\hat{D}})$.

---

Now, we can prove that $\alpha+\alpha=\alpha$, where $\alpha$ is a cardinal number.

Construct bijection from $(A\times \{ 1 \})\cup(A\times \{ 2 \})\to A$. Use disjoint coverings.

$A_{1}=A\times \{ 1 \}$.
$A_{2}=A\times \{ 2 \}$.
$A=\bigcup D_{i}$
$A_{1}=\bigcup D_{i}\times \{ 1 \}$
$A_{1}=\bigcup D_{i}\times \{ 2 \}$

$\phi:\{ D_{i}\times \{ 1 \} \}\cup \{ D_{i}\cup \{ 2 \} \}\to \{ D_{i} \}$.
Just map alternatively.


---

If $\alpha\leq\beta$, we have
$\beta\leq\alpha+\beta\leq\beta+\beta=\beta$. Thus, from the schroder bernstein theorem, $\alpha + \beta=\beta$.

---

Now, to prove $\alpha \alpha=\alpha$. 
FOr any infinite set $A$, we have to get a bijection from $A\times A\to A$. 

To obtain an injection:
$P=\{ (B, f):f:B\times B\to B, \text{ injective}, B\subset A \}$. (For example, $B$ can be countable subsets of $A$).
Apply Zorn's lemma to $P$.

---


**Graph colorings**

A graph $G=(V, E)$ is $k-$colorable if $k$ colors suffice to properly color it.

[!Theorem]
Let $G=(V, E)$ be an infinite graph such that every finite subgraph is k-colorable. This implies $G$ is k-colorable.

**Proof**

