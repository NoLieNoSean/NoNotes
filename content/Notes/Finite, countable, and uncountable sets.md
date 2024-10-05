---
tags:
  - ANA1
---

If there exists a 1-1 mapping of $A$ onto $B$, we say that $A$ and $B$ can be put in 1-1 *correspondence*, or that $A$ and $B$ have the same *cardinal number*, or that $A$ and $B$ are *equivalent*, and denote it by $A\sim B$. 

For any positive integer $n$, let $\mathbb{N}_{n}$ be the set whose elements are the integers $1,2,\dots,n$; Let $\mathbb{N}$ be the set consisting of all positive integers. For any $A$, we say:
- $A$ is *finite* if $A\sim \mathbb{N}_{n}$ for some $n$.
- $A$ is *infinite* if $A$ is not finite.
- $A$ is *countable* if $A\sim \mathbb{N}$.
- $A$ is *uncountable* if $A$ is neither finite nor countable.
- $A$ is *at most countable* if $A$ is finite or countable.

>[!Info]
>A finite set cannot be equivalent to one of its subsets. This is, however, possible for infinite sets.

---

## Countable sets

### Stripping down a countable set

>[!Theorem]
>If $A\subseteq B$ and $B$ is countable, then $A$ is either countable or finite.

If a set can be arranged into a single list, then deleting some elements from this list results in another (shorter, and potentially terminating) list. This means that countable sets are the smallest type of infinite set. Anything smaller is either still countable or finite.
### Combining countable sets

>[!Theorem]
>Let $\{ E_{n} \}, n = 1,2,3,\dots$, be a countable collection of sets. Then 
>$$ 
>S = \bigcup_{n=1}^{\infty}E_{n}
>$$
>is countable.
>[[A Note about Abbot T1.5.8|A lil note]]

>[!Theorem]
>Let $A$ be a countable set, and let $B_{n}$ be the set of all $n$-tuples $(a_{1}, a_{2}, \dots a_{n})$ where $a_{k}\in A, 1\le k\le n$, and the elements $a_{1}, \dots, a_{n}$ need not be distinct. Then, $B_{n}$ is countable.

>[!Theorem] Colollary
>The set $\mathbb{Q}$ is countable.

---
## Uncountable sets

>[!Theorem]
>Let $A$ be the set of all sequences whose elements are the digits 0 and 1. This set $A$ is uncountable.

>**Proof**
>Let $E$ be a countable subset of $A$, and let $E$ consist of the sequences $s_{1}, s_{2}, s_{3}, \dots$ . Construct a sequence $s$ as follows: If the $n$th digit in $s_{n}$ is 1, we let the $n$th digit ok $s$ be 0, and vice versa. Then, the sequence differs from every member of $E$ in at least one place, hence $s\not\in E$. But clearly $s\in A$, so $E$ is a proper subset of $A$. 
>We have shown that every countable subset of $A$ is a proper subset of $A$. It follows that $A$ is uncountable. ❏


>[!question]- Why does't this work for $\mathbb{Q}$?
>The number we construct from the diagonalization procedure has an infinite number of decimals, i.e, it is irrational.

This theorem also implies that the set of all real numbers is uncountable, since all real numbers have a binary representation. However, do also note the proof that follows.

>[!Theorem]
>The set $\mathbb{R}$ is uncountable.

>**Proof**
>Assume there does exist a 1-1 correspondence $f:\mathbb{N}\to \mathbb{R}$. This means that we should be able to write $\mathbb{R} = \{ x_{1},x_{2},\dots \}$.
>Now, consider a closed interval $I_{1}$ that does not contain $x_{1}$. Next, let $I_2$ be a closed interval, contained in $I_{1}$, which does not contain $x_{2}$. In general, given an interval $I_{n}$, construct an interval $I_{n+1}$ to satisfy
>- $I_{n+1}\subseteq I_{n}$ and
>- $x_{n+1} \not\in I_{n+1}$
>
>Now consider the intersection $\bigcap_{n=1}^{\infty}I_{n}$. For every real number $x_{k}$, $x_{k}\not\in I_{k}$, and it follows that 
>$$
>x_{k}\not\in \bigcap_{n=1}^{\infty}I_{n}
>$$
>Now, we assumed every real number eventually appears in the list $x_{1}, x_{2}, \dots$, which leads to the conclusion that $\bigcup_{n=1}^{\infty}I_{n} = \emptyset$. However, the [[The real field#Nested interval property|nested interval property]] asserts that $\bigcup_{n=1}^{\infty}I_{n} \ne \emptyset$. This contradiction means that such an enumeration of $\mathbb{R}$ is impossible. ❏

>[!Question]- Why doesn't this work for $\mathbb{Q}$?
>The nested interval property does not hold for $\mathbb{Q}$. Consider $I_{n}$ to be rational bounds for $\sqrt{ 2 }$, for example (like what Rudin does on p2). Then, $\bigcap_{n=1}^{\infty}I_{n}=\emptyset$ since $\sqrt{ 2 }\not\in \mathbb{Q}$.

This combined with our proof that the union of two countable sets is countable, and that $\mathbb{Q}$ is countable, implies that $\mathbb{I}$, the set of all irrational numbers, is not countable since $\mathbb{R}=\mathbb{Q}\cup \mathbb{I}$.

