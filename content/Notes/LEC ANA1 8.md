---
tags:
  - Lecture
  - ANA1
  - Processed
---


Bolzano-Wierstrass: Every sequence in $[a,b]$ in $\mathbb{R}$ has a convergent subsequence converging to an element in $[a.b]$.

A metric space $X$ is called *sequentially compact* if every sequence in $X$ has a convergent subsequence (with limit in $X$). 


Remark: in any $(X,d)$, if $a_{n}\to a \iff$ any subsequence in $a_{n}$ converges to $a$.
Thus, $[a_{1},b_{1}]\times[a_{2},b_{2}]\times\dots \times[a_{k},b_{k}]$(called a closed box) is also sequentially compact.
	this can be proved by extracting a set of indices such that the first slot converges, and then considering only those terms of the sequence for repeating the same step with the second slot.


will see that limit point compactness, compactness, and sequential compactness are equivalent for metric spaces.

## [[Cauchy sequences]] in metric spaces

Saw:
	cauchy $\implies$ bounded
	every cauchy seq in $\mathbb{R}$ and $\mathbb{R}^{k}$ converges.

convergent $\implies$ Cauchy in any metric space (by triangle inequality).


A metric space $(X,d)$ is called a *complete metric space* if every cauchy sequence in $X$ converges (in $X$).
Examples: $\mathbb{R}$, $\mathbb{R}^{k}$, $[a,b]$, closed box in $\mathbb{R}^{k}$.

it is clear that being complete does imply being sequentially compact.

---
seq compact $\implies$ complete ?
	To prove this, we must prove that if a subsequence of a cauchy sequence converges, the cauchy sequence itself converges.
	Doable by triangle inequality.
the implication is correct.

---

What does it mean to converge to $\infty$ or $-\infty$?
- $P_{n}\to \infty$ means $\forall M\in \mathbb{R}$ there exists an integer $N$ such that $\forall n>N, p_{n}>M$. 
- Similar defn for $-\infty$.


>[!Definition]
>**Limsup and Liminf**
>Given a sequence $\{ P_{n} \}$ in $\mathbb{R}$, 
>$$
>\limsup_{ n \to \infty } P_{n} := \lim_{ n \to \infty } (\sup\underbrace{ \{{p_{n}, p_{n+1}, \dots} \}}_{ \text{tail of a given sequence} })
>$$
>$$
>\liminf_{ n \to \infty } P_{n} := \lim_{ n \to \infty } (\inf\underbrace{ \{{p_{n}, p_{n+1}, \dots} \}}_{ \text{tail of a given sequence} })
>$$

Now, 
$$
\lim_{ n \to \infty } P_{n} = p \iff (\limsup_{ n \to \infty } P_{n} = p) \text{ and } (\liminf_{ n \to \infty }P_{n} = p )
$$
