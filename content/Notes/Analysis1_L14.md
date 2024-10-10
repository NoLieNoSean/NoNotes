---
tags:
  - Lecture
  - ANA1
  - Processed
---
2024-09-13, Friday
1403

---
## Recall

>[!Recall]
>- $f:X\to Y$, then $f$ is continuous $\iff$ $f^{-1}$(open set in $Y$)  is open in $X$
>- Definition of open sets and closed sets.

---
## Proof of $\Longleftarrow$ from the [[Analysis1_L13#Halfway through to a new definition of continuity|last claim]] (Rudin, 4.8) in L13

>**Proof of $\Longleftarrow$**
>Given an arbitrary $\epsilon$ challenge, we want $\delta>0$ such that $d(x, p)<\delta$ $\implies d(f(x), f(p))<\epsilon$. This is the same as saying we want $\delta>0$ such that $x\in B_{\delta}(p)\implies f(x)\in B_{\epsilon}(f(p))$. 
>We know that $f^{-1}(B_{\epsilon}(f(p)))$ is open in $X$ and contains $p$. Importantly, it contains a ball with center $p$. Take $\delta$ to be the radius of this ball. ❏

Since $f^{-1}$ preserves complements, we also have $f^{-1}$(closed set in $Y$) is a closed set in $X$.  

---
## Examples and observations on open and closed sets

Recall: $C$ is closed in $X$ $\iff$ $X\setminus C$ is open in $X$.

>[!Example]
>For $X=\mathbb{R}$, 
>- $(0, 1)$ is open, not closed
>- $[0, 1]$ is not open, is closed
>- $(0, 1]$ is neither
>- $\mathbb{R}, \emptyset$ are both open and closed
>
>For $X=\mathbb{C}$, 
>- $(0, 1)$ is not open, not closed
>- $[0, 1]$ is not open, is closed
>- $\mathbb{R}$ is not open, is closed
>

In general,
- Any metric space is an open and closed subset of itself
- In any metric space $X$, a singleton set is closed in $X$. 
- In any metric space $X$, a singleton set is open in $X$ iff its element is an isolated point of $X$. 

>[!Example]
>Let $X\equiv \{ -1 \}\bigcup \{ x\ |\ x\ge 0 \}$ be a metric space. Then, the subset $\{ -1 \}\subset X$ is both open and closed.

>[!Example]
>It is quite easy to confuse closed sets with closed intervals in $\mathbb{R}$. Non-trivial examples of closed sets which are not closed intervals:
>- The cantor set; it is an arbitrary intersection of closed sets, and [[#Open and closed sets under intersections and unions|hence]] is closed.
>- Sets of the form $[x, \infty)$ and $(\infty, x]$.

---
## An aside

The above examples motivate the notion of distance of a point from a set (you'll see why).

Let $X$ be a metric space. Let $A\subset X$, and $p\in X$.
Define $d(p, A)\equiv \inf \{ d(p, a)\ |\ a\in A \}$. 

Now, $d(p, A)=0$ only when $p\in A$ or $p$ is a limit point of $A$. 
Observe that
$A$ is closed $\iff$ ($d(p, A)=0\iff p\in A$ ). (here's where you see why)

Now, fix $A$ and vary $p$. Then, is $d_{A}(p):X\to \mathbb{R}$ continuous? (Yes; prove it.)

---
## An equivalent property to being closed

>[!Theorem]
>$C$ is closed in $X$  $\iff$ $C$ contains all of its limit points.

>**Proof of $\implies$**
>Let $q\in X\setminus C$. Since $X\setminus C$ is open, there exists $r>0$ such that $B_{r}(q)\subset X\setminus C$. So,  $B_{r}(q)\cap C=\emptyset$, which implies $q$ is not a limit point of $C$. Therefore, any limit point must be in $C$. ❏
>
>**Proof of $\Longleftarrow$**
>If $C$ contains all of its limit points, no point outside $C$ is a limit point of $C$. Want to show $X\setminus C$ is open. Take $p\in X\setminus C$. We know $p$ is not a limit point of $C$, so there should exist $r>0$ such that $B_{r}(p)\subset X\setminus C$. ❏

---
## The remnants of 2.18

### Interior

>[!Definition]
>The *interior* of a set $S$, denoted $S$  is $\bigcup_{V\subset S}V$, where $V$ is an open set. It is the largest open set contained in $S$.

### Closure

>[!Definition]
>The *closure* of $S$, denoted by $\bar{S}$, is $\bigcap_{C\supset S}C$, where $C$ are closed sets. It is the smallest closed set containing $S$.

Rudin defines (2.26) closure of $E$ as $E\cup E'$, where $E'$ is the set of all limit points of $E$. These definitions are, of course, equivalent.

### Perfect sets

Defined perfect sets, and noted that they are not important for this course.

>[!Definition]
>$E$ is perfect if $E$ is closed and every point of $E$ is a limit point of $E$. 

---
## Open and closed sets under intersections and unions

Rudin, 2.24
>[!Theorem]
>1. For any collection $\{ U_{\alpha} \}$ of open sets, $\bigcup_{\alpha}U_{\alpha}$ is open.
>2. For any collection $\{ C_{\alpha} \}$ of closed sets, $\bigcap_{\alpha}C_{\alpha}$ is closed.
>3. For any finite collection of open sets $\{ U_{1}, U_{2}, \dots U_{n} \}$, $\bigcap_{i=1}^{n}U_{i}$ is open.
>4. For any finite collection of closed sets $\{ C_{1}, C_{2}, \dots C_{n} \}$, $\bigcup_{i=1}^{n}C_{i}$ is closed.

>**Proof of 1** 
>An open set by definition is a union of open balls. It follows that a union of open sets is also a union of balls. ❏
>
>**Proof of 2**
>Follows from 1 and De Morgan's laws.
>
>**Proof of 3**
>We will show that if $U_{1}$ and $U_{2}$ are open sets, $U_{1}\bigcap U_{2}$ is an open set. 3 follows by induction.
>Let $p\in U_{1}\bigcap U_{2}$. There exist $r_{1}, r_{2}>0$ such that $B_{r_{1}}(p)\subset U_{1}$ and $B_{r_{2}}\subset U_{2}$. WLOG, let $r_{1}\le r_{2}$. It follows that $B_{r_{1}}(p)\subset B_{r_{2}}(p)$. Thus, $B_{r_{1}}\subset U_{1}$ and $B_{r_{1}}\subset U_{2}$, i.e, $B_{r_{1}}(p)\subset U_{1}\bigcap U_{2}$. ❏
>
>**Proof of 4**
>Follows from 3 and De Morgan's laws.

Note that (3) is not true for the infinite case. Example: $\bigcap_{n=1}^{\infty}\left( -\frac{1}{n}, \frac{1}{n} \right)=\{ 0 \}$. 
Note that (4) is not true for the infinite case. Example: $\bigcup_{n\ge2} \left[ \frac{1}{n}, 1-\frac{1}{n} \right]=(0, 1)$.
^ Rudin 2.25

---
## Epilogue

Observed that 
$p$ is an interior point of $S$ $\iff$ $S$ is a neighborhood of $p$.

Assigned reading: 2.18 - 2.29
Exercise: prove 2.30.