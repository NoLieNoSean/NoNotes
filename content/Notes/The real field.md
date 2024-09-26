---
tags:
  - ANA1
---

There exists an [[Ordered fields|ordered field]] $\mathbb{R}$ which has the [[LUB property]]. Also, $\mathbb{R}$ contains $\mathbb{Q}$ as a subfield.

The fact that $\mathbb{R}$ has the LUB property is also referred to as the axiom of completeness.

The following theorems follow as consequences of the axiom of completeness.

>[!Info]
>Remember the axiomatic stack on which $\mathbb{R}$ rests:
>Field -> Ordered Field -> Complete ordered field with $\mathbb{Q}$ as subfield

## Consequences of completeness

### Nested interval property

>[!Theorem]
>For each $n\in \mathbb{N}$, consider the closed interval, $I_{n} = [a_{n}, b_{n}]=\{ x\in \mathbb{R}\ |\ a_{n} \le x\le b_{n}\}$. Assume that each $I_{n}$ contains $I_{n+1}$. Then, the resulting nested sequence of closed intervals $I_{1}\supseteq I_{2} \supseteq \dots$ has a nonempty intersection.
>

>**Proof** 
>Consider the set $A = \{ a_{n}\ | \ n \in \mathbb{N} \}$. $A$ is clearly non empty, and bounded above (by every $b_{n}$). Thus, $x = \sup A$ exists. 
>Now consider a particular interval $I_{n} =[a_{n}, b_{n}]$. Because $x$ is an upper bound for $A$, be have $a_{n}\le x$. The fact that each $b_{n}$ is an upper bound for $A$ and that $x$ is the supremum of $A$ implies that $x\le b_{n}$. 
>So, we have $a_{n}\leq x\leq b_{n}$ for every $n$. Hence, $x\in \bigcup_{n=1}^{\infty}I_{n}$ , and the intersection is nonempty.

This property fails for open intervals. Consider the sequence of nested open intervals $I_{n}=\left( 0, \frac{1}{n} \right)$ as a counter example. 

>[!Theorem]
>In the above theorem, the intersection is a singleton set if and only if $\lim_{ n \to \infty }(a_{n}-b_{n})=0$.

[[Analysis1_HW3.pdf#page=2|Refer]] 2(b) for proof.
### The Archimedean property

>[!Theorem]
>Given any $x\in \mathbb{R}$, there exists an $n\in \mathbb{N}$ satisfying $n>x$. 

>[!Quote]- Why do we need to prove this?
>What we have said so far is that R is an
extension of Q that maintains the algebraic and order properties of the rationals
but also possesses the least upper bound property articulated in the Axiom of
Completeness. In the absence of any other information about R, we have to
consider the possibility that in extending Q we unwittingly acquired some new
numbers that are upper bounds for N. In fact, as disorienting as it may sound,
there are ordered field extensions of Q that include “numbers” bigger than every
natural number. This theorem asserts that the real numbers do not contain
such exotic creatures. The Axiom of Completeness, which we adopted to patch
up the holes in Q, carries with it the implication that N is an unbounded subset
of R.

>**Proof**
>Assume, for contradiction, that $\mathbb{N}$ is bounded above. By AoC, $\mathbb{N}$ should have a supremum. Set $\alpha=\sup \mathbb{N}$. 
>Now, consider $\alpha-1$. This should not be an upper bound. Thus, $n>\alpha-1$, $n\in \mathbb{N}$ must exist. But that is the same as saying $\alpha <n+1$. Since $\mathbb{N}$ is closed under addition, $n+1\in \mathbb{N}$. Thus, we have reached a contradiction. ❏
### Density of $\mathbb{Q}$ in $\mathbb{R}$

>[!Theorem]
>If $a\in \mathbb{R}$, $b\in \mathbb{R}$, and $a<b$, then there exists a $r\in \mathbb{Q}$ such that $a<r<b$.

>**Proof**
>We have $b-a>0$. Pick an integer $n$ such that $n(b-a)>1$, existence of which is guaranteed by the Archimedean property. Thus, we have $na+1<nb$. Now, consider $m$ such that 
>$$
>m-1\leq na<m
>$$
>The existence of which is also ensured by the Archimedean property. So, we have
>$$
>m\le na+1<nb \implies na<m<nb
>$$
>Therefore, $a< \frac{m}{n} < b$. ❏

>[!Corollary]
>Given any two real numbers $a<b$, there exists an irrational number $t$ satisfying $a<t<b$.

>**Proof**
>In the previous proof, replace the 1's with $\sqrt{ 2 }$s. Redefine $m$ to be an integer multiple of $\sqrt{ 2 }$. What this does ends up proving is that between $a$ and $b$ there exists a rational multiple of $\sqrt{ 2 }$, which is irrational.

## Cut property

>[!Theorem]
>If $A$ and $B$ are nonempty, disjoint sets with $A\cup B=\mathbb{R}$ and $a<b$ for all $a\in A$ and $b\in B$, then there exists $c\in \mathbb{R}$ such that $x\leq c$ whenever $x\in A$ and $x\ge c$ whenever $x\in B$. 

>**Proof**
>$A$ is nonempty and bounded above (by every $b\in B$). Thus, $\alpha = \sup A$ must exist. 
>Similarly, $\beta = \inf B$ must exist.
>Now consider the possibilities:
>- If $\alpha<\beta$,
  There must exist $\gamma \in \mathbb{R}$ such that $\alpha<\gamma<\beta$. Clearly, $\gamma \not\in A$ and $\gamma \not\in B$, i.e, $\gamma \not\in \mathbb{R}$. Cont.
>- If $\alpha > \beta$,
  there must exist $\gamma \in \mathbb{R}$ such that $\beta<\gamma<\alpha$. 
  Since $\alpha$ is the supremum of $A$, there must exist $a\in A$ such that $\gamma<a<\alpha$. 
  Similarly, since $\beta$ is the supremum of $A$, there must exist $b\in B$ such that $\beta<b<\gamma$.
  Thus, we have $b<a$, $b\in B$, $a\in A$. Cont.
>
>Thus, it must be the case that $\alpha = \beta$.
>Now, since $\alpha$ is also a real number, $\alpha\in A$ or $\alpha \in B$. 
>If $\alpha\in A$, we have $x\le\alpha$ for all $x\in A$ and $x>\alpha$ for all $x\in B$. 
>If $\alpha \in B$, we have $x<\alpha$ for all $x\in A$ and $x\ge \alpha$ for all $x\in B$. 
>
>Thus, $\alpha$ satisfies the properties for $c$ described in the theorem. ❏

Note that the cut property could be used in place of the Axiom of completeness as the fundamental axiom that distinguishes $\mathbb{R}$ from $\mathbb{Q}$. 


---
## Existence of nth roots of real numbers

>[!Theorem]
>For every real $x>0$, and every integer $n>0$, there is one and only one positive real $y$ such that $y^n=x$.

Refer Rudin, p9 for proof.
Refer Abbot, p23 for proof of existence of square roots, which can be extended to a proof of this theorem.

