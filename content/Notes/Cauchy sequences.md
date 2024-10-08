---
tags:
  - ANA1
---
## Cauchy sequences

>[!Definition]
>A [[Sequences and convergence#Sequences|sequence]] $(a_{n})$ in $\mathbb{R}$ is *Cauchy* if, for every $\epsilon>0$, there exists an $N\in \mathbb{N}$ such that whenever $m,n\ge N$ it follows that $|a_{n}-a_{m}|<\epsilon$.
>
>A sequence $(a_{n})$ in a [[Metric spaces|metric space]] $(X,d)$ is *Cauchy* if, for every $\epsilon>0$, there exists an $N\in \mathbb{N}$ such that whenever $m,n\ge N$ it follows that $d(a_{n}, a_{m})<\epsilon$.

Notice that this definition bears striking resemblance to the definition of [[Sequences and convergence|convergence for a sequence]]. The motivation for this definition is that to test for convergence, you need a candidate limit value. However, you can test whether a sequence is Cauchy without such an entity.

---
## Cauchy Criterion

Our interest in Cauchy sequences is motivated by the definition of Cauchy sequences having no mention of a limit, and thus possibly allowing us to test for convergence without a candidate limit. We will now prove that this is in fact possible in $\mathbb{R}$. 

>[!Theorem]
>A sequence in $\mathbb{R}$ converges if and only if it is a Cauchy sequence. 

### Proof of convergent $\implies$ Cauchy

>**Proof**
>Let $(a_{n})\to a$ . Let $\epsilon>0$ be arbitrary. Then, there must exist an $N\in \mathbb{N}$ such that $|a_{n}-a|< \frac{\epsilon}{2}$ for all $n\ge N$. Let $m\ge N$ too. Now, (surprise) triangle inequality:
>$$
>\begin{align}
>|a_{n}-a_{m}|&\le |a_{n}-a| + |a-a_{m}| \\
>&< \frac{\epsilon}{2}+\frac{\epsilon}{2}=\epsilon.
>\end{align}
>$$
>❏

Proof can be adapted to show the same for metric spaces. Thus, in any metric space $X$, every convergent sequence is a Cauchy sequence.

### Proof of Cauchy $\implies$ convergent

#### Proof in $\mathbb{R}$

Here's how we'll go about proving this:
1. We will show that being Cauchy implies being bounded.
2. We will show that given any sequence, a [[Sequences and convergence#Monotone convergence theorem|monotone]] [[Subsequences|subsequence]] can be extracted.
3. Thus, we should be able to extract a monotone subsequence from a Cauchy sequence, which will be bounded since Cauchy sequences are bounded. From the [[Sequences and convergence#Monotone convergence theorem|monotone convergence theorem]], the subsequence must converge. Then we will show that the limit of the subsequence must equal the limit of the Cauchy sequence.

##### Step 1: Cauchy $\implies$ bounded

>[!Lemma]
>Cauchy sequences are bounded. 
>

>**Proof**
>Given $\epsilon>0$, there exists an $N$ such that $|x_{m}-x_{n}|<\epsilon$ for all $m,n\geq N$. Thus, the sequence is bounded by $|x_{N}|+\epsilon$ for all $n\ge N$. It follows that 
>$$
>M=\max\{ |x_{1}|, |x_{2}|, \dots, |x_{N-1}|, |x_{N}|+\epsilon \}
>$$
>is a bound for the sequence $(x_{n})$. ❏

This can be proved any metric space.

##### Step 2: Pervasive monotonicity

>[!Lemma]
>Every sequence in $\mathbb{R}$ has a monotone subsequence.

>**Proof**
>Consider a sequence $(a_{n})$. We say $a_{k}$ is a *peak* if for all $n>k$, we have $a_{k}\geq a_{n}$. Now, we can either have infinitely many peaks, or finitely many peaks. 
>
>If we have infinitely many peaks, the subsequence of peaks forms a monotone decreasing subsequence.
>
>If we have finitely many peaks, let the last peak $a_{k}$. Consider $a_{k+1}$ (if there are no peaks, make this $a_{1}$), which is not a peak. It is guaranteed that $a_{m}$ exists such that $m>k+1$ and $a_{m}\ge a_{k+1}$.  The same is guaranteed for $a_{m}$. Thus, we can construct a monotone increasing subsequence. ❏

Recall that a monotone sequence has no meaning in a metric space. Thus, this sequence of proofs cannot to used to show that Cauchy sequences in metric spaces converge.
##### Step 3: Persuasive subsequence

>[!Lemma]
>If a subsequence of a Cauchy sequence converges to $l$, the Cauchy sequence also converges to $l$.

>**Proof**
>Let $a_{i_{k}}\to l$ be a subsequence of a Cauchy sequence $(a_{n})$. Let $\epsilon>0$ be arbitrary. We have $|a_{i_{k}}-l|< \frac{\epsilon}{2}$ for all $k\geq N_{1}$, for some $N_{1}$. Also, we have $|a_{i_{k}}-a_{n}|< \frac{\epsilon}{2}$, for all $n, k\ge N_{2}$ (since $i_{k}\ge k$). As usual, let $N=\max\{ N_{1}, N_{2} \}$. Triangle inequality gives us $|a_{n}-l|<\epsilon$ for all $n\ge N$. ❏

Again, this argument can be made for any metric space.

#### Proof in $\mathbb{R}^{k}$

It can be shown that if a sequence is Cauchy in $\mathbb{R}^{k}$, it must be Cauchy slot-wise too (very similar argument to how we proved [[Algebraic Limit Theorem in Vector Spaces#Slot-wise convergence|slot-wise convergence]]). Since Cauchy sequences in $\mathbb{R}$ converge, every slot converges, and thus the vector sequence converges. 

---
## Complete metric space

>[!Definition]
>A metric space $X$ is called a *complete metric space* if every Cauchy sequence in $X$ converges (in $X$).

Note the overload of the term "complete", which is also used in the context of [[Ordered sets|ordered sets]] to signify the presence of the [[LUB property]]. 

Examples: $\mathbb{R}$, $\mathbb{R}^{k}$, $[a,b]$, closed box in $\mathbb{R}^{k}$. 

### Relation with [[Subsequences#Sequential compactness|sequential compactness]]

It is clear that being complete does not imply being sequentially compact (example: $\mathbb{R}$). 

However, being sequentially compact does imply being complete (Since any sequence must have a convergent subsequence, [[#Step 3 Persuasive subsequence|due to the existence of which a Cauchy sequence must converge]]).
