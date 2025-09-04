---
tags:
  - CAL1
  - Lecture
  - Processed
date: 2025-01-31
time: 11:50
---
# Cantor intersection theorem

For a non empty subset $E$ of a metric space $(X, d)$, we say $E$ is bounded provided it has finite [[Metric spaces#Diameter|diameter]]. A descending sequence $(E_{n})$ of non empty subsets of $X$ is called a *contracting sequence* if $\lim_{ n \to \infty }\text{diam}(E_{n})=0$. 

> [!Definition]
> A metric space $X$ is said to have the *Cantor intersection property* if whenever $(F_{n})$ is a contracting sequence of non empty closed subsets of $X$, $\bigcap_{n=1}^{\infty}F_{n}=\{ x \}$, $x\in X$.

Note the similarity between the Cantor intersection property (of a metric space) and the [[The real field#Nested interval property|nested interval property]] (of $\mathbb{R}$).

> [!Theorem] Cantor Intersection Theorem
> A metric space $X$ has the Cantor intersection property if and only if it is [[Cauchy sequences#Complete metric space|complete]]. 
> 
> > [!Proof]-
> > $(\implies)$ Let $(s_{n})$ be a Cauchy sequence. For each index $n$ define $F_{n}$ to be $\{ s_{i}\ | \ i\geq n \}$. For all $\epsilon> 0$, there exists $N$ such that for all $n, m> N$, $|s_{n}-s_{m}|<\epsilon$. Thus, $\text{diam}(F_{N})\leq \epsilon$, from which it follows that $\text{diam}(\overline{F_{N}})\leq\epsilon$ (for all $N'> N$ too, since the diameters are decreasing). Thus, $\lim_{ n \to \infty }\text{diam}(\overline{F_{n}})=0$, and $(\overline{F_{n}})$ is a contracting sequence. Thus, $\bigcap_{n=1}^{\infty}\overline{F_{n}}=\{ s \}$, $s\in X$. For all $F_{n}$, $s\in F_{n}$ or $s$ is a limit point of $F_{n}$ (or both). In any case, $B_{\frac{1}{k}}(s)\cap F_{n}\ne \emptyset$ for all $k, n$.  This allows us to select a subsequence of $(s_{n})$ which converges to $s$. If a subsequence of a Cauchy sequence converges to a point, the entire sequence [[Cauchy sequences#Step 3 Persuasive subsequence|converges]] to said point. Thus, $(s_{n})\to s$, every Cauchy sequence converges, and $X$ is complete.
> > 
> > $(\impliedby)$ Let $(F_{n})$ be a contracting sequence of nonempty closed subsets of $X$. Pick $s_{n}\in F_{n}$ for each $n\in \mathbb{N}$. For any $\epsilon> 0$, there exists $F_{N}$ such that $\text{diam}(F_{N})<\epsilon$, $i$.$e$, $d(s_{n}, s_{m})<\epsilon$ for all $n, m > N$. This makes $(s_{n})$ a Cauchy sequence. Since $X$ is complete, it must converge, say to a point $s$. Then, $s$ is a limit point of each $F_{n}$. Since $F_{n}$ is closed for all $n$, $s\in F_{n}$ for all $n$. Thus, $s\in \bigcap_{n=1}^{\infty}F_{n}$. The intersection does not contain more than one point, since if it did, then $\lim_{ n \to \infty }\text{diam}(F_{n})\ne 0$.

---
# Completion of a metric space

> [!Definition]
> Let $(X, d)$ be a metric space. Then there is a complete metric space $(\tilde{X}, \tilde{d})$ called the **completion** of $(X, d)$ for which $X$ is a dense subset of $\tilde{X}$ and $d(u, v)=\tilde{d}(u, v)$ for all $u, v\in X$.

^407939


## Constructing the completion of a metric space

Let $(X, d)$ be a metric space. We will assume that $\mathbb{R}$ is a complete metric space, so remember that what follows hinges on a separate proof of the completeness of $\mathbb{R}$.

Suppose $(x_{n})$ and $(y_{n})$ are two Cauchy sequences in $X$. Then, $(d(x_{n}, y_{n}))$ is a Cauchy sequence in $\mathbb{R}$, and hence must converge. Let $S$ be the space of all Cauchy sequences in $X$. Define $\rho((x_{n}), (y_{n}))\equiv\lim_{ n \to \infty }d(x_{n}, y_{n})$. It is easy to see that
- $\rho\geq 0$, and $(x_{n})=(y_{n})$ implies $\rho((x_{n}), (y_{n}))=0$. 
- $\rho$ is symmetric
- triangle inequality holds

However, $\rho((x_{n}), (y_{n}))=0$ may not imply $(x_{n})=(y_{n})$. $\rho$ is what is called a *pseudometric*, and $(S, \rho)$ is called a *pseudometric space*. On such a space, one can define the relation $(x_{n})\sim (y_{n})$ if $\rho((x_{n}), (y_{n}))=0$. This is an equivalence relation, and partitions $S$ into equivalence classes $S/\sim \ =:\tilde{X}$. Define $\tilde{d}([(x_{n})], [(y_{n})])=\rho((x_{n}), (y_{n}))$. This is well defined[^1]. That makes $(\tilde{X}, \tilde{d})$ a metric space.

[^1]: Let $(x_{n})\sim(a_{n})$ and $(y_{n})\sim(b_{n})$. Write $d(x_{n}, y_{n})\leq d(x_{n}, a_{n})+d(a_{n}, b_{n})+d(b_{n}, y_{n})$ and its dual equation bounding $d(a_{n}, b_{n})$. Combine them to get $|d(x_{n}, y_{n})-d(a_{n}, b_{n})|\leq d(x_{n}, a_{n})+d(y_{n}, b_{n})$. It follows that $\lim_{ n \to \infty }d(x_{n}, y_{n})=\lim_{ n \to \infty }d(a_{n}, b_{n})$, or $\tilde{d}([(x_{n})], [(y_{n})])=\tilde{d}([(a_{n})], [(b_{n})])$.

### $(\tilde{X}, \tilde{d})$ is complete

Consider a Cauchy sequence in $\tilde{X}$: $([(x_{n, 1})], [(x_{n, 2})], \dots)$. By passing to subsequences if necessary, we can assume that given $m$, $\tilde{d}([(x_{n, k})], [(x_{n, l})])< 2^{-m}$ for all $l, k\geq m$. Similarly, by passing to subsequences if necessary, we can assume that for all $k$, given $c$, $d(x_{a, k}, x_{b, k})< 2^{-c}$ for all $a, b\geq c$.

Let $(z_{n})\equiv(x_{n, n})$. We will first show that $(z_{n})$ is a Cauchy sequence in $X$, and then that $([(x_{*, n})])\to[(z_{n})]$. 

Let $\epsilon> 0$. Choose $N$ such that $2^{-N}<\epsilon/3$. Now, for all $n, m\geq N$, $d(z_{n}, z_{m})  =d(x_{n, n}, x_{m, m})$. Since $\tilde{d}([(x_{*, n})], [(x_{*, m})])< {2}^{-N}$, $\lim_{ k \to \infty }d(x_{k, n}, x_{k, m})< 2^{-N}$, so there exists $M$ such that $d(x_{k, n}, x_{k, m})< 2^{-N}$ when $k\geq M$. Take $M'=\max\{ M, n, m \}$. Now, 
$$
\begin{align}
d(x_{n, n}, x_{m, m}) & =d(x_{n, n}, x_{M', n})+d(x_{M', n}, x_{M', m})+d(x_{M', m}, x_{m, m}) \\
 & < 2^{-n}+2^{-N}+2^{-m} \\
 & < 3\cdot 2^{-N} \\
 & <\epsilon.
\end{align}
$$
Thus, $d(z_{n}, z_{m})<\epsilon$ for all $n, m\geq N$, and $(z_{n})$ is a Cauchy sequence in $X$.

Let $\epsilon> 0$. Choose $N$ such that $2^{-N}<\epsilon/3$. Let $k> N$. $\tilde{d}([(x_{n, k})], [(z_{n})])  =\lim_{ n \to \infty } d(x_{n, k}, x_{n, n})$. For $n> k$, we can always find $M\geq n$ such that $d(x_{M, k}, x_{M, n})< 2^{-N}$. So, we have $d(x_{n, k}, x_{n, n})\leq d(x_{n, k}, x_{M, k})+d(x_{M, k}, x_{M, n})+d(x_{M, n}, x_{n, n})$ $< 2^{-k}+2^{-N}+2^{-k}< 3\cdot 2^{-N}<\epsilon$. Thus,  
$$
\begin{align}
\tilde{d}([(x_{n, k})], [(z_{n})]) & =\lim_{ n \to \infty } d(x_{n, k}, x_{n, n}) \\
 & <\epsilon.
\end{align}
$$
Thus, $([(x_{*, n})])\to[(z_{n})]$ and $(\tilde{X}, \tilde{d})$ is complete.

### $(\tilde{X}, \tilde{d})$ is the completion of $(X, d)$

For each $p\in X$, there is a Cauchy sequence all of whose terms are $p$. Let $P_{p}$ be the element of $\tilde{X}$ which contains this sequence. Define the map $\phi:X\to \tilde{X}$ by $\phi(p)=P_{p}$. It is easy to see that $\phi$ is an *isometry*, $i$.$e$, $\tilde{d}(P_{p}, P_{q})=d(p, q)$ for all $p, q\in X$. 

We will now show that $\phi(X)$ is dense in $\tilde{X}$. Let $[(x_{n})]\in \tilde{X}$ such that $[(x_{n})]\not\in \phi(X)$. Consider the sequence $(P_{x_{1}}, P_{x_{2}}, \dots)$ in $\tilde{X}$. Since $(x_{n})$ is a Cauchy sequence in $X$ and $\tilde{d}(P_{x_{k}}, P_{x_{m}})=d(x_{k}, x_{m})$, $(P_{x_{n}})$ is also a Cauchy sequence. Let $\epsilon> 0$. There exists $N$ such that for all $k, m> N$, $d(x_{k}, x_{m})<\epsilon$. Thus, for $k> N$, $\tilde{d}(P_{x_{k}}, [(x_{n})])=\lim_{ m \to \infty }d(x_{k}, x_{m})<\epsilon$. Therefore, $(P_{x_{n}})\to[(x_{n})]$, proving that $\phi(X)$ is dense in $\tilde{X}$.
