---
tags:
  - Lecture
  - ANA1
---
2024-09-20, Friday
1031

---

![[1726814241809.jpg]]

![[1726814241813.jpg]]

![[1726814241805.jpg]]

![[1726814241801.jpg]]

![[1726814241798.jpg]]

To-do
- [ ] Study sequential and limit point compactness. Show that their absolute and relative definitions are equivalent, essentially showing that they are intrinsic properties. Prove equivalence of the two notions for metric spaces.
- [ ] Examples of compact metric spaces
- [ ] Applications of compactness in $\mathbb{R}$
- [ ] The extreme value theorem
- [ ] Heine-Borel characterization of compact sets in $\mathbb{R}^{k}$ 

"Compact sets work extremely well will continuous functions: Image of a compact set is compact."

>[!Recall]
>[[Analysis1_L15#An introduction to compactness]]

---

## Absolute and relative definitions

### Sequential compactness

#### Absolute definition for metric space $X$

>[!Definition] Definition 1
>Every sequence in $X$ has a convergent subsequence.

#### Relative definition for $E\subset$ metric space $X$

>[!Definition] Definition 2
>Every sequence in $E$ has a convergent subsequence with limit in $E$.

#### Equivalence

$E$ is sequentially compact as per definition 1 as a metric space in its own right $\iff$ $E$ is a sequentially compact subset of $X$ as per 2.

Thus, sequential compactness is intrinsic, i.e, if $E\subset Y\subset X$, 
$E$ is sequentially compact in $X$ $\iff$ $E$ is sequentially compact in $Y$ $\iff$ $E$ is sequentially compact.

### Limit point compactness

#### Absolute definition for metric space $X$

>[!Definition] Definition 1
>Every infinite $S\subset X$ has a limit point.

#### Relative definition for $E\subset$ metric space $X$

>[!Definition] Definition 2
>Every infinite $S\subset E$ has a limit point in $E$. 

#### Equivalence

Same argument as in sequential compactness.

---
## Examples of compact sets

### Finite sets

Any set $S$ of finite cardinality is compact. Any sequence in $S$ must have at least one element of $S$ repeating infinitely many times - take the subsequence required by sequential compactness to be a constant sequence of just this element. The condition for limit point compactness is vacuously true, since no infinite subset of $S$ exists.

### Open intervals in $\mathbb{R}$ (non example)

$(a, b)$, $[a, b)$, $(a, b]$, and $\mathbb{R}$ are *not* compact. It is easy to find sequences in these sets which violate the definition of sequential compactness. Take the set of terms of these sequences to violate the definition of limit point compactness.

### Closed intervals in $\mathbb{R}$

$[a, b]$ is compact. 

**Sequential compactness:** Consider a sequence in $[a, b]$. We know it has a convergent subsequence, courtesy the [[Subsequences#Bolzano-Weierstrass Theorem|Bolzano-Weierstrass Theorem]]. The point to which this subsequence converges is a limit point of $[a, b]$, and must be contained in $[a, b]$ since $[a, b]$ is a closed set. 

**Limit point compactness:** Showing this follows a very similar strategy to Abbot's proof of the Bolzano-Weierstrass Theorem (bisection search). Given an infinite $S$, successively bisect the intervals, continuing with the half having infinite elements of $S$ at each step. This should give us nested intervals of the form $[a_{0}, b_{0}], [a_{1}, b_{1}], [a_{2}, b_{2}], \dots$, where the length of $[a_{n}, b_{n}]$ is $(a_{0}-b_{0})/2^{n}$ ($\to 0$), and $|[a_{n}, b_{n}]\cap S|=\infty$. From the [[The real field#Nested interval property|Nested interval property]], we know that $\bigcap_{i\geq 0}[a_{i}, b_{i}]$ is non-empty (in fact, we know it is a singleton, but we just need it to be non-empty for this to work). Let $p$ be an element in this intersection. Let $\epsilon>0$. We can find $k$ such that the length $[a_{k}, b_{k}]<\epsilon$. Thus, $[a_{k}, b_{k}]\subset(p-\epsilon, p+\epsilon)$. So, any $\epsilon$ ball around $p$ contains elements of $S$, i.e, $p\in[a, b]$ is a limit point of $S$. 

It follows that "closed boxes" in $\mathbb{R}^{k}$ are limit point compact. This can be shown using an analogue of bijection search in $\mathbb{R}^{k}$, where you divide the set into $2^{k}$ sections in each step. We will skip showing these are sequentially compact (follows trivially from BWT), since the two notions are actually equivalent, as we will now show.

---

## Equivalence of sequential and limit point compactness

>[!Theorem]
>Let $X$ be a metric space. Then, $X$ is sequentially compact $\iff$ $X$ is limit point compact.

>**Proof of $\implies$**
>Let $S\subset X$, $|S|=\infty$. We want to show that $S$ has a limit point in $X$. Take $T=\{ x_{1}, x_{2}, \dots \}\subset S$. Since $X$ is sequentially compact, we can extract a sequence $x_{k_{1}}, x_{k_{2}}, \dots$ from $T$ such that $(x_{k_{n}})\to p\in X$. Observe that $p$ is a limit point of $T$, and hence of $S$. ❏
>
>**Proof of $\Longleftarrow$**
>Let $(p_{n})$ be a sequence in $X$. We want to show that some subsequence of $(p_{n})$ converges to a point in $X$. 
>
>Let $S=\{ p_{n}\ |\ n\in \mathbb{N} \}$. If $S$ is finite, i.e, $(p_{n})$ has a finite number of distinct terms, a single element must repeat infinite times in the sequence. Let the constant sequence of this element be the subsequence required, and we are done.
>
>If $S$ is infinite, since $X$ is limit point compact, $S$ must have a limit point in $X$. Call it $p$. Define a sequence of $\epsilon$'s: $(\epsilon_{n})=\left( \frac{1}{2^{n}} \right)$. Construct a subsequence $(p_{k_{n}})$ of $(p_{n})$ like so: Let $p_{k_{1}}$ be any point in $B_{\epsilon_{1}}(p, S)\setminus \{ p \}$, and let $p_{k_{n+1}}$ be any point such that $k_{n+1}>k_{n}$ and $p_{k_{n+1}}\in B_{\epsilon_{n+1}}(p, S)\setminus \{ p \}$ (such a $k_{n+1}$ must exist since every deleted neighborhood of $p$ contains infinitely many elements of $S$). Then, $(p_{n})\to p$ since $(\epsilon_{n})\to 0$. ❏

---

## Image of a compact set under a continuous function

>[!Theorem]
>if $f:X\to Y$ is continuous, and $X$ is compact, $f(X)$ is compact.





Special case: $Y=\mathbb{R}$.
from the next theorem, $f(x)$ must have a max and min value (extreme value theorem).

---

>[!Theorem]
>Every compact set $C$ in any metric space $X$ is closed in $X$ and bounded.

---

>[!Theorem]
>If $X$ is compact, $C$ is closed in $X$ $\implies$ $C$ is compact.

---
## Heine Borel Theorem

>[!Theorem]
>$C$ is compact $\iff$ $C$ is closed in $\mathbb{R}$ and bounded.


Caution: In general, $X$ is closed and bounded $\not\implies$ $X$ is compact. (The converse is true.)
