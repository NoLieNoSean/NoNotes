---
tags:
  - LOG
  - Lecture
date: 2025-09-02
time: 11:57
---
# definability of a class of structures

The set of all graphs with a vertex cover of size $k$: 

$$
\exists x_{1}\exists x_{2}\dots \exists x_{k} \left( \bigwedge_{i, j\in \{ i, \dots, k \}}x_{i}\ne x_{j} \right)\quad \wedge\quad \forall x\forall y(E(x, y)\implies \vee_{i\in \{ 1, \dots, k \}}(x=x_{i}\vee y=x_{i}) ).
$$
Tried to FO-define connected graphs and failed; could not avoid recursive structures. Saw that it is "extended definable", though. 

---

# homomorphisms

Let $\mathcal{A}$ and $\mathcal{B}$ be models over the same language $L$. A homomorphism from $\mathcal{A}$ to $\mathcal{B}$ is a map $h:|\mathcal{A}|\to |\mathcal{B}|$, where $|\mathcal{A}|$ is the underlying set or universe of discourse of $\mathcal{A}$, satisfying the following properties:
1. For all constant symbols $c$, $h(c^{\mathcal{A}})=h(c^{\mathcal{B}})$. 
2. For all relational symbols $r$, $(a_{1}, \dots, a_{n})\in r^{\mathcal{A}}\iff(h(a_{1}), \dots, h(a_{n}))\in r^{\mathcal{B}}$. 