---
tags:
  - Lecture
  - ANA1
  - Processed
---
2024-09-20, Friday
1400

---
![[1726947785622.jpg]]

---

## Open cover compactness

### Open covers and subcovers

>[!Definition]
>Let $E\subset X$. An *open cover* of $E$ is a collection $\{ V_{\alpha} \}_{\alpha \in I}$ of open sets in $X$ such that 
>$$
>\bigcup_{\alpha \in I}V_{\alpha}\supset E.
>$$
>A *subcover* of $\{ V_{\alpha} \}_{\alpha \in I}$ is a subset $\{ V_{\beta} \}_{\beta \in J\subset I}$ with
>$$
>\bigcup_{\beta \in J}V_{\beta}\supset E.
>$$

### Absolute and relative definitions of open cover compactness

#### Absolute definition for a metric space $E$

>[!Definition] Definition 1
>$E$ is *open cover compact* if every open cover of $E$ has a finite subcover.

#### Relative defintion for $E\subset X$

>[!Definition] Definition 2
>$E$ is *open cover compact* in $X$ is every open cover of $E$ in $X$ has a finite subcover.

#### Equivalence 

$E$ is open cover compact as per definition 1 as a metric space in its own right $\iff$ $E$ is an open cover compact subset of $X$ as per 2.

>**Proof of $\Longleftarrow$**
>
>$E$ is an open cover compact subset of $X$. Let $W\equiv\{ W_{\alpha} \}_{\alpha \in I}$ be an open cover of $E$ by sets open in $E$. We need to show that a finite subset of $W$ covers $E$. We know from our study of [[Analysis1_L15#Subspace topology|subspace topology]] that for each $W_{\alpha}$ there must exist $V_{\alpha}\subset X$ open in $X$ such that $W_{\alpha}=E\cap V_{\alpha}$. Since $W_{\alpha}\subset V_{\alpha}$ for all $\alpha$, $V\equiv\{ V_{\alpha} \}_{\alpha\in I}$ covers $E$ in $X$. From the hypothesis, there exists a finite subcover $\{ V_{\beta} \}_{\beta \in J\subset I}$ of $V$ covering $E$. Thus, 
>$$
>\begin{align*}
>\bigcup_{\beta \in J}V_{\beta} & \supset E \\
>\left( \bigcup_{\beta \in J}V_{\beta} \right)\cap E & \supset E \\
>\bigcup_{\beta \in J}(V_{\beta}\cap E) & \supset E \\
>\bigcup_{\beta \in J}W_{\beta} & \supset E.
>\end{align*}
>$$
>**Proof of $\implies$**
>
>Start with an open cover $\{ V_{\alpha} \}_{\alpha \in I}$ of $E$ with sets which are open in $X$. We want to show that a finite subset of this open cover covers $E$. 
>$$
>\begin{align*}
>\bigcup_{\alpha \in I}V_{\alpha} & \supset E \\
>\left( \bigcup_{\alpha \in I}V_{\alpha} \right)\cap E & =E \\
>\bigcup_{\alpha \in I}(V_{\alpha}\cap E) & =E \\
\bigcup_{\alpha \in I}W_{\alpha}  & =E
>\end{align*}
>$$
>Where $W_{\alpha}=V_{\alpha}\cap E$. Note that each $W_{\alpha}$ is open in $E$. Thus, $\{ W_{\alpha} \}_{\alpha \in I}$ is an open cover of $E$, and from the hypothesis it must have a finite subcover $\{ W_{\beta} \}_{\beta \in J\subset I}$. It follows that $\{ V_{\beta} \}_{\beta \in J\subset I}$ also covers $V$, since $W_{\alpha}\subset V_{\alpha}$ for every $\alpha$. ❏

So, as we have seen with the previous forms of compactness, open cover compactness in intrinsic.

### Equivalence with limit point compactness

>[!Theorem] Claim
>$X$ is open cover compact $\implies$ $X$ is limit point compact.

>**Proof** 
>Consider an infinite subset $S\subset X$. Assume $S$ does not have a limit point. Thus, for every point $p \in X$ there exists $r_{p}>0$ such that $|B_{r_{p}}(p, S)|\le 1$. Consider the set $E=\{ B_{r_{p}}(p, X)\ |\ p \in X \}$. Clearly, $E$ is an open cover of $X$. However, the union of a finite subset of $E$ will contain only finitely many elements of $S$. So, $X$ cannot be open cover compact. (We have proved the contrapositive of the claim). ❏

This will allow us to import all the results we proved for limit point compact sets to open cover compact sets.

The converse is also true, but harder to prove.

### Examples

It follows form the previous claim that every set we showed to be not limit point compact in the [[Analysis1_L16#Open intervals in $ mathbb{R}$ (non example)|previous lecture]] is not open cover compact either. 

For $(0, 1)$, consider the open cover $\left\{  \left( \frac{1}{n}, 1 \right) \ |\ n\in \mathbb{N} \right\}$. 
For $\mathbb{R}$, consider the open cover $\{ (-n, n)\ |\ n\in \mathbb{N} \}$. 

#### $[a, b]\in \mathbb{R}$ is open cover compact

Note this is not implied by any of our previous work - it does need to be proved.

>**Proof**
>Let $E=\{ V_{\alpha} \}_{\alpha \in I}$ be an open cover of $[a, b]$. Suppose there does not exist a finite subcover of $E$ covering $[a, b]$. Starting with $[a, b]$, successively bisect the interval, at each step choosing the half which is not covered by a finite subcover of $E$ (at least one of the two is guaranteed to have this property). This should give us nested intervals of the form $[a_{0}, b_{0}], [a_{1}, b_{1}], \dots$ where the length of each interval is $(a_{0}-b_{0})/2^{n}$ and each $[a_{i}, b_{i}]$ is not covered by a finite subcover of $E$. We know from the [[The real field#Nested interval property|nested interval property]] that $\bigcap_{i\geq 0}[a_{i}, b_{i}]=\{ p \}$. Let $p\in V_{\beta}$ for some $\beta$. Since $V_{\beta}$ is open, there must exist an $\epsilon>0$ such that $(p-\epsilon, p+{\epsilon})\subset V_{\beta}$. Since the lengths of $[a_{i}, b_{i}]$ converge to $0$ and $p\in[a_{i}, b_{i}]$, we can find an $[a_{k}, b_{k}]$ such that $[a_{k}, b_{k}]\subset(p-\epsilon, p+\epsilon)$. But this implies the finite subcover $\{ V_{\beta} \}$ of $E$ covers $[a_{k}, b_{k}]$. $\Rightarrow\Leftarrow$ ❏

Do this dance in $\mathbb{R}^{k}$, and you get that all closed boxes in $\mathbb{R}^{k}$ are open cover compact.
### An exercise in working with open cover compactness

In the previous lecture, [[Analysis1_L16#Characterization of compact sets|we proved]] that every (limit point/sequentially) compact set $C$ in a metric space $X$ is closed in $X$ and bounded. We do not need to prove this separately for open cover compact sets, because of the equivalence with limit point compact sets we proved above. However, it is a good exercise.

>[!Theorem]
>Every open cover compact set $C$ is bounded.

>**Proof** 
>Consider a point $p \in C$. Consider the set $E=\{ B_{n}(p, C)\ |\ n\in \mathbb{N} \}$. Clearly, it is an open cover of $C$. Since $C$ is compact, $E$ must have a finite subcover. Thus, there exists $n\in \mathbb{N}$ such that $C=B_{n}(p, C)$. ❏

---
## Equivalence of the three versions of compactness

While we have proved a lot of the preceding results in general metric spaces, we will mostly be restricting ourselves to $\mathbb{R}^{k}$ in this course.

Let $C\subset \mathbb{R}^{k}$. Consider the following statements.
1. $C$ is open cover compact.
2. $C$ is limit point/sequentially compact.
3. $C$ is closed in $\mathbb{R}^{k}$ and bounded.

Here's everything we've proved so far:
- 1 [[#Equivalence with limit point compactness|implies]] 2 
- 2 [[Analysis1_L16#Characterization of compact sets|implies]] 3
- 3 [[Analysis1_L16#Heine Borel Theorem|implies]] 2 

If we show $2\implies 1$ or $3 \implies 1$, we will have shown that the three versions of compactness are equivalent. We will do the latter, since it is easier.

Our proof of $3 \implies 1$ will look very similar to our proof of $3 \implies 2$. We have already [[Analysis1_L16#Closed intervals in R|shown]] that closed boxes in $\mathbb{R}^{k}$ are open cover compact. If we prove that that closed subsets of open cover compact sets are open cover compact (we [[Analysis1_L16#Closed subsets of compact sets are compact|proved]] an analogue of this in the previous lecture for limit point compactness), $3 \implies 1$ should follow. 

### Closed subsets of compact sets are compact

>[!Theorem] Lemma
>If $X$ is open cover compact, $C$ is closed in $X$ $\implies$ $C$ is open cover compact.

>**Proof**
>Take an open cover $\{ V_{\alpha} \}_{\alpha \in I}$ of $C$, $V_{\alpha}$ open in $X$. Since $C$ is closed in $X$, $X\setminus C$ is open in $X$. Thus, $E=\{ V_{\alpha} \}_{\alpha \in I}\cup \{ X\setminus C \}$ is an open cover of $X$. Since $X$ is open cover compact, a finite subcover $E'$ of $E$ covering $X$ exists. In particular, $E'$ covers $C$. If $E'$ covers $C$, $E'\setminus(X\setminus C)$ also covers $C$ (basically, if $X\setminus C$ is in $E'$, we can throw it away while still having $E'$ cover $C$). Thus, $E'$ is a finite subcover of $\{ V_{\alpha} \}_{\alpha \in I}$. ❏

### The equivalence

Here's the proof of $3 \implies 1$. Notice its similarity with the proof of $3 \implies 2$ ($\Longleftarrow$ of Heine Borel).

>**Proof**
>Since $C$ is bounded, $C$ lies in some closed box. Because $C$ is closed in $\mathbb{R}^{k}$, $C$ is closed in that box ($C=(\text{Box})\cap C$). We know that closed boxes in $\mathbb{R}^{k}$ are open cover compact, so our box is too. It follows from the previous lemma that $C$ is compact. ❏

With this, we have shown that open cover, sequential, and limit point compactness are equivalent for $\mathbb{R}^{k}$. 

>[!Warning]
>The pathway we used to prove the equivalence of the three forms of compactness fails in general metric spaces. As noted in the previous lecture, 3 does not imply 1 in this case. Thus, we will be left with no choice but to prove 2 implies 1.

---
## Epilogue

Tasks:
- In the above section, try to prove $1 \implies 3$ (for general metric spaces) directly without using $2$ as an intermediary. To be precise, prove this statement: If $C$ is an open cover compact subset of $X$, then $C$ is closed in $X$ (We have already [[#An exercise in working with open cover compactness|proven]] the bounded part).

Briefly discussed uniform continuity.
### Another exercise in working with open cover compactness 

Prove [[Analysis1_L16#Image of a compact set under a continuous function|this]] theorem, for open cover compact sets sets without using the equivalence.

>**Proof**
>Consider an open cover $\{ V_{\alpha} \}_{\alpha \in I}$ of $f(X)$. 
>$$
>\begin{align*}
 f(X) & \subset \bigcup_{\alpha \in I}V_{\alpha} \\
>X & \subset f^{-1}\left( \bigcup_{\alpha \in I}V_{\alpha} \right) =\bigcup_{\alpha \in I}f^{-1}(V_{\alpha})
>\end{align*}
>$$
>Now, since $f$ is continuous, $f^{-1}(V_{a})$ is open in $X$ for all $\alpha$. Thus, $\{ f^{-1}(V_{\alpha}) \}_{\alpha \in I}$ is an open cover of $X$. Since $X$ is compact, there exists a finite subcover.
>$$
>\begin{align}
>X & \subset   \bigcup_{\beta \in J\subset I}f^{-1}(V_{\beta}) \\
>f(X) & \subset \bigcup_{\beta \in J\subset I}V_{\beta}
>\end{align}
>$$
>❏


