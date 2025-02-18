---
tags:
  - CAL1
  - Lecture
date: 2025-01-31
time: 11:50
---
## Cantor intersection theorem

For a non empty subset $E$ of a metric space $(X, d)$, we say $E$ is bounded provided it has finite [[Metric spaces#Diameter|diameter]]. A descending sequence $(E_{n})$ of non empty subsets of $X$ is called a *contracting sequence* if $\lim_{ n \to \infty }\text{diam}(E_{n})=0$. 

> [!Definition]
> A metric space $X$ is said to have the *Cantor intersection property* if whenever $(F_{n})$ is a contracting sequence of non empty closed subsets of $X$, $\bigcap_{n=1}^{\infty}F_{n}=\{ x \}$, $x\in X$.

> [!Theorem]
> A metric space has the Cantor intersection property if and only if it is [[Cauchy sequences#Complete metric space|complete]]. 

Proof of $\implies$

Proof of $\impliedby$

---
## Completion of a metric space

Constructing the completion of a metric space

suppose $(x_{n})$ and $(y_{n})$ are two Cauchy sequences in $X$. Then, $(d(x_{n}, y_{n}))$ is a Cauchy sequence (easy proof). 
Step 1: Let $(x_{n})$ and $(y_{n})$ be CS in $X$. Define $d'((x_{n}), (y_{n}))=\lim_{ n \to \infty }d(x_{n}, y_{n})$. It is easy to see that
- $d'\geq 0$, and $(x_{n})=(y_{n})$ implies ...
- $d'$ is symmetric
- triangle inequality holds

However, $f'((x_{n}), (y_{n}))=0$ may not imply $(x_{n})=(y_{n})$.

Step 2: We define an equivalence class of CS in $X$, and call it $\tilde{X}$. We say $(x_{n})\sim(y_{n})$ if $d'((x_{n}), (y_{n}))=0$. Let $\tilde{X}$ be the set of equivalence classes of CS. Define $\tilde{d}([(x_{n})], [(y_{n})])=d'((x_{n}), (y_{n}))$.

note that $\tilde{d}$ is well defined.


Step 3: $(\tilde{X}, \tilde{d})$ is complete.
Consider a CS in $\tilde{X}$: $([(x_{n, 1})], [(x_{n, 2})], \dots)$. By passing to a subsequence if necessary, we can assume that each $(x_{n, i})$ has the following property:
$$
d(x_{n, i}, d_{n+1, i})< \frac{1}{2^{n}}
$$
for all $n$. From this, you can prove that.


