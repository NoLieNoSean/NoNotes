---
tags:
  - Lecture
  - ANA1
  - Processed
---


2024-09-13, Friday
1031

---
![[1726481994456.jpg]]
![[1726481994452.jpg]]

To-do:
- [x] Open and closed sets

---

## Recall

>[!Recall]
>- [[Analysis1_L11#Continuity at a point|Definition]] of continuity at a point from L11
>	- How it [[Analysis1_L11#How it compares to limit of $f$ at a point|contrasts with the definition of limit]]
>	- How metric space setup [[Analysis1_L11#A further simplification of the definition|simplifies]] the language (Rudin, 4.12)
>	- [[Analysis1_L11#How does this definition interact with limit points?|Continuity of limit points and isolated points]]
>	- [[Analysis1_L11#Balls and neighborhoods|Continuity definition in terms of open balls]]
>- [[Analysis1_L11#Definition|Definition]] of continuity of a function from L11

---
## A digression

Had a rather lengthy discussion on why the definition of continuity as stated in L11 would remain unaltered if we edited  $d_{X}(x, p)<\delta$ to say $0<d_{X}(x, p)<\delta$  instead. 

The learning from the discussion was one pertaining to basic logic. Consider three logical statements $A$, $B$, and $C$. Define $P$ and $Q$ thus:
$$
\begin{align}
P: A \implies B \\
Q: C \implies B
\end{align}
$$
Now, if $C\implies A$, what can we say about $P$ and $Q$? if $P$ is true, then $C\implies A\implies B$, i.e $Q$ is true. Thus, hypothesis of $Q$ $\implies$ hypothesis $P$ implies $P\implies Q$ and vice versa.

---
## What does it mean for a function to be continuous? 

In L11, we defined $f$ to be continuous if $f$ was continuous at every point in its domain. Now, we want to define continuity of a function in terms of its codomain, to motivate the notion of open sets. But first, an observation.

### A ball is a neighborhood of each of its points

Rudin, 2.19
>[!Theorem]
>In a metric space $X$, any ball is a neighborhood of each point in it, i.e, 
>$$
>q\in B_{r}(p)\implies \exists s\text{ such that } B_{s}(q)\subset B_{r(p)}
>$$

>**Proof**
>Choose $s=r-d(p, q)$. Use triangle inequality. ❏

As defined later, this basically means every open ball is an open set.
### If $f$ is continuous, $f^{-1}$ of any ball is a neighborhood of each of its points

Now, we make the following claim: 

>[!Theorem] Claim
>Given $f:X\to Y$, $f$ is continuous $\implies$ $f^{-1}(B)$ is a neighborhood of any of the points of $f^{-1}(B)$, where $B$ is a ball in $Y$.

>**Proof**
>$f^{-1}(B)$ contains all the point $x\in X$ such that $f(x)\in B$. From the previous theorem, there exists an $\epsilon>0$ such that $B_{\epsilon}(f(x))\subset B$. Since $f$ is continuous, there exists a $\delta>0$ such that $f(B_{\delta}(x))\subset B_{\epsilon}(f(x))$, which implies $f(B_{\delta}(x))\subset B$, which implies $B_{\delta}(x)\subset f^{-1}(B)$. ❏

This property of "being a neighborhood of any of its points" is going to be the defining property of open sets. There exists another logically equivalent property: being a union of open balls.

### Equivalence of the two properties

>[!Theorem] Claim
>The following are equivalent for for any subset $S$ of a metric space $X$:
>1. $S$ is a neighborhood of any $p\in S$ for all $p\in S$, i.e, for any $p\in S$ there exists $r>0$ such that $B_{r}(p)\subset S$.
>2. $S$ is a union of open balls.

>**Proof of $1\implies 2$**
>For every point $p\in S$, consider an open ball $B_{r_{p}}(p)$. Consider the union of all these balls. Since every $p$ has a ball representing it, $S\subset \bigcup B_{r_{p}}(p)$. Also, since every $B_{r_{p}}(p)\subset S$, it must be that $\bigcup B_{r_{p}}(p)\subset S$. Thus, $S=\bigcup B_{r_{p}}(p)$. ❏
>
>**Proof of $2\implies 1$**
>We have already shown that every ball satisfies 1. It follows that a union of balls must also satisfy 1, since every point in the union will be a part of at least one ball. ❏

It follows from the first theorem that ($f$ is continuous $\implies$ $f^{-1}$ of any ball in $Y$ is a union of balls in $X$). Since $f^{-1}$ preserves unions ([[2015_Book_UnderstandingAnalysis.pdf#page=24|Abbot exercise 1.2.9]], if you're unsure), we can make the more general statement ($f$ is continuous $\implies$ $f^{-1}$ of union of balls in $Y$ is a union of balls in $X$). Having motivated it enough, we finally define an open set.
### Open sets

>[!Definition]
>Subset $U$ of a metric space $X$ is called *open* $\boxed{\text{ in }X}$ if $U$ is a union of balls (or, equivalently, $U$ contains a ball around each point in $U$).

>[!Example] (counter)Examples of open sets
>- Any open interval in $\mathbb{R}$ is an open set.
>- $\mathbb{R}$ is open in $\mathbb{R}$.
>- $\mathbb{R}$ is *not* open in $\mathbb{C}$.

>[!Important]
>1. A set $U$ is open or not open only in the context of a superset $X$, and when this context changes, the status of $U$ is liable to change too. Hence the emphasis of $X$ in the definition. Check examples above.
>2. Being open is NOT the negation of being closed or vice versa. The two properties exist independently of each other.
### Halfway through to a new definition of continuity

The definition of open sets distills our previously stated implication of $f$ being continuous to 
($f$ is continuous $\implies$ $f^{-1}$ of an open set in $Y$ is an open set in $X$).

Now, we put forth a stronger claim: $f$ is continuous $\iff$ $f^{-1}$(open set in $Y$) is an open set in $X$. Put more rigorously, this is Rudin, 4.8.

Rudin, 4.8
>[!Theorem] 
>A mapping $f:X\to Y$, where $X$ and $Y$ are metric spaces, is continuous on $X$ if and only if $f^{-1}(V)$ is open in $X$ for every open set $V$ in $Y$. 
>

Having already shown $\implies$, it only remains to show its converse. 

---
## Epilogue

Defined closed sets.

>[!Definition]
>A subset $C\subset X$ is called *closed* $\boxed{\text{ in }X}$ if $X\setminus C$ is open in $X$ (or, equivalently, $C$ contains all the limit points of $C$).

Stated properties of open and closed sets under set operations:
- Any union of open sets is open (it it understood that we are working in the context of a fixed metric space). This should be easy to see.
	- If $U_{1}$ and $U_{2}$ are open, so is $U_{1}\bigcap U_{2}$. Hence any finite intersection of open sets is open. Prove this. << supposed to be easy
- Any intersection of closed sets is closed. (let $C_{1}$, $C_{2}$ be closed sets. $\overline{C_{1}}$ and $\overline{C_{2}}$ are open sets, so $\overline{C_{1}}\bigcup \overline{C_{2}}$ is open. Its complement, $C_{1}\bigcup C_{2}$, is closed.)
	- If $C_{1}$ and $C_{2}$ are closed, so is $C_{1}\bigcup C_{2}$. Hence any finite union of closed sets is closed. Prove this. << ditto