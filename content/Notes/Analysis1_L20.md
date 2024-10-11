---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-09-27
time: 14:02
---
![[1728577113539.jpg]]

To do:
- [x] uniform continuity
- [ ] connectedness

>[!Recall]
>Definition of [[Analysis1_L17#Absolute and relative definitions of open cover compactness|open cover compactness]].

---

## Uniform continuity

Recall the definition of a continuous function:

>[!Definition]
>Let $f:X\to Y$. $f$ is *continuous* if $\forall x \in X$, $\forall \epsilon>0$, $\exists\delta>0$ such that $f(B_{\delta}(x, X))\subset B_{\epsilon}(f(x), Y)$.

Compare with definition of uniform continuity:

>[!Definition]
>Let $f:X\to Y$. $f$ is *uniformly continuous* if $\forall\epsilon>0$, $\exists\delta>0$ such that $\forall x\in X$, $f(B_{\delta}(x, X))\subset B_{\epsilon}(f(x), Y)$.

Things to note:
- Uniform continuity implies continuity, but the converse is generally not true. Consider $f:(0, \infty)\to \mathbb{R}$, $f(x)=\frac{1}{x}$ as a counterexample.  The converse *is* true, if $X$ is *compact*, as we will prove.
- Continuity is a local phenomenon; you only need to look in a (potentially very tiny) neighborhood of $x$ and $f(x)$ to check if an $\epsilon$ challenge can be met. Uniform continuity requires you to analyze the function over its entire domain. 
- The definition for uniform continuity can be rephrased like so: $f:X\to Y$ is uniformly continuous if for every $\epsilon>0$, there exists a $\delta$ such that $d_{X}(p, q)<\delta$ implies $d_{Y}(f(p), f(q))<\epsilon$.  

### Continuous functions defined on compact sets are uniformly continuous

>[!Theorem]
>Let $X$ be compact, $f:X\to Y$ be continuous. Then, $f$ is uniformly continuous.

>**Proof**
>Let $\epsilon>0$ be arbitrary. To show that $f$ is uniformly continuous, we have to produce a $\delta$ such that $d_{X}(p, q)<\delta$ implies $d_{Y}(f(p), f(q))<\epsilon$. For every $x\in X$, we can find $\delta_{x}$ such that $f(B_{\delta_{x}}(x))\subset B_{\frac{\epsilon}{2}}(f(x))$. Note that the set
> $$
> S\equiv \left\{  B_{\frac{\delta_{x}}{2}}(x)\ |\ x \in X  \right\}
> $$ 
>is an open cover of $X$. Since $X$ is compact, $S$ must have a finite subcover 
> $$
> S'\equiv \left\{  B_{\frac{\delta_{x}}{2}}(x)\ |\ x \in K \subset X  \right\}.
> $$
>Let $\delta \equiv \frac{1}{2}\min S'$. Consider $p$, $q$ in $X$ with $d_{X}(p, q)<\delta$. Now, $p$ must be in $B_{\frac{\delta_{x}}{2}}(x)$ for some $x\in K$. Thus, $d_{X}(p, x)< \frac{\delta_{x}}{2}$. Triangle inequality gives us $d_{X}(q, x)<\delta_{x}$. Thus, $p, q\in B_{\delta_{x}}(x)$. This implies $f(p), f(q)\in B_{\frac{\epsilon}{2}}(f(x))$, i.e, $d_{Y}(f(p), f(q))<\epsilon$. ❏

---
## Counterexamples for when X is not compact

Let $f:X\to \mathbb{R}$ be a continuous function. Let $X$ be compact. The [[Analysis1_L16#Extreme value theorem|extreme value theorem]] tells us that $f(x)$ attains a maximum and minimum value, and the previous theorem tells us that $f$ is uniformly continuous.

We will now show that these theorems do not hold when $X$ is not compact. 

We know that compact sets are [[Analysis1_L16#Characterization of compact sets|closed and bounded]], i.e, compact $\implies$ closed and bounded. So, (not closed) or (not bounded) $\implies$ not compact.
Also, if $f$ does not attain a maximum or minimum, it is either unbounded, or is bounded and $f(X)$ does not contain its supremum and infimum. 

>[!Theorem]
>Let $E\subset \mathbb{R}$ be non compact.
>1. $\exists$ continuous unbounded $f:E\to \mathbb{R}$.
>2. $\exists$ continuous bounded $f:E\to \mathbb{R}$ with no maximum value.
>3. If $E$ is bounded, $\exists$ continuous $f:E\to \mathbb{R}$ that is not uniformly continuous

Note that the statement 3 with $E$ being unbounded is false. For example, take $E=\mathbb{Z}$. Any function defined on $E$ is continuous, and also uniformly continuous (take $\delta=1$). 

>**Proof of 1**
>Note that in all the following examples $f$ is continuous since [[Analysis1_L15#Restrictions of continuous functions are continuous|restrictions of continuous functions are continuous]].
>*$X$ is not closed, $f$ is not bounded:* $f(x)=\frac{1}{x-x_{0}}$, where $x_{0}\not\in X$ and $x_{0}$ is a limit point of $X$. 
>*$X$ is not bounded, $f$ is not bounded:* $f(x)=x$. ❏
>
>**Proof of 2**
>*$X$ is not closed, $f(X)$ does not contain its supremum/infimum:* $f(x)=\frac{1}{1+(x-x_{0})^{2}}$, where $x_{0}\not\in X$ and $x_{0}$ is a limit point of $X$.
>*$X$ is not bounded, $f(X)$ does not contain its supremum/infimum:* $f(x)=\frac{x^{2}}{1+x^{2}}$. ❏
>
>**Proof of 3**
>Since $E$ is not compact, we know $E$ has an infinite set $S$ with no limit point in $E$. But, since $E$ is bounded, it is contained in a closed interval $[-M, M]$, and so is $S$. Since closed intervals in $\mathbb{R}$ are compact, $S$ must have a limit point $x_{0}\in[-M, M]$. It follows that $x_{0}$ is also limit point of $E$. Now, define $f(x)=\frac{1}{x-x_{0}}$, and we are done. ❏


