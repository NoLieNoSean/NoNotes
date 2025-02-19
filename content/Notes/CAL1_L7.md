---
tags:
  - CAL1
  - Lecture
date: 2025-01-31
time: 11:50
---
## Cantor intersection theorem

For a non empty subset $E$ of a metric space $(X, d)$, we say $E$ is bounded provided it has finite [[Metric spaces#Diameter|diameter]]. A descending sequence $(E_{n})$ of non empty subsets of $X$ is called a *contracting sequence* if $\lim_{ n \to \infty }\text{diam}(E_{n})=0$. 

> [!Definition]
> A metric space $X$ is said to have the *Cantor intersection property* if whenever $(F_{n})$ is a contracting sequence of non empty closed subsets of $X$, $\bigcap_{n=1}^{\infty}F_{n}=\{ x \}$, $x\in X$.

Note the similarity between the Cantor intersection property (of a metric space) and the [[The real field#Nested interval property|nested interval property]] (of $\mathbb{R}$).

> [!Theorem]
> A metric space $X$ has the Cantor intersection property if and only if it is [[Cauchy sequences#Complete metric space|complete]]. 

> **Proof of $\implies$**
> Let $(s_{n})$ be a Cauchy sequence. For each index $n$ define $F_{n}$ to be $\{ s_{i}\ | \ i\geq n \}$. For all $\epsilon> 0$, there exists $N$ such that for all $n, m> N$, $|s_{n}-s_{m}|<\epsilon$. Thus, $\text{diam}(F_{N})\leq \epsilon$, from which it follows that $\text{diam}(\overline{F_{N}})\leq\epsilon$ (for all $N'> N$ too, since the diameters are decreasing). Thus, $\lim_{ n \to \infty }\text{diam}(\overline{F_{n}})=0$, and $(\overline{F_{n}})$ is a contracting sequence. Thus, $\bigcap_{n=1}^{\infty}\overline{F_{n}}=\{ s \}$, $s\in X$. For all $F_{n}$, $s\in F_{n}$ or $s$ is a limit point of $F_{n}$ (or both). In any case, $B_{\frac{1}{k}}(s)\cap F_{n}\ne \emptyset$ for all $k, n$.  This allows us to select a subsequence of $(s_{n})$ which converges to $s$. If a subsequence of a Cauchy sequence converges to a point, the entire sequence [[Cauchy sequences#Step 3 Persuasive subsequence|converges]] to said point. Thus, $(s_{n})\to s$, every Cauchy sequence converges, and $X$ is complete.
> 
> **Proof of $\impliedby$**
> Let $(F_{n})$ be a contracting sequence of nonempty closed subsets of $X$. Pick $s_{n}\in F_{n}$ for each $n\in \mathbb{N}$. For any $\epsilon> 0$, there exists $F_{N}$ such that $\text{diam}(F_{N})<\epsilon$, $i$.$e$, $d(s_{n}, s_{m})<\epsilon$ for all $n, m > N$. This makes $(s_{n})$ a Cauchy sequence. Since $X$ is complete, it must converge, say to a point $s$. Then, $s$ is a limit point of each $F_{n}$. Since $F_{n}$ is closed for all $n$, $s\in F_{n}$ for all $n$. Thus, $s\in \bigcap_{n=1}^{\infty}F_{n}$. The intersection does not contain more than one point, since if it did, then $\lim_{ n \to \infty }\text{diam}(F_{n})\ne 0$.

---
## Completion of a metric space

> [!Definition]
> Let $(X, d)$ be a metric space. Then there is a complete metric space $(\tilde{X}, \tilde{d})$ called the *completion* of $(X, d)$ for which $X$ is a dense subset of $\tilde{X}$ and $d(u, v)=\tilde{d}(u, v)$ for all $u, v\in X$.

### Constructing the completion of a metric space

Let $(X, d)$ be a metric space.

Suppose $(x_{n})$ and $(y_{n})$ are two Cauchy sequences in $X$. Then, $(d(x_{n}, y_{n}))$ is a Cauchy sequence in $\mathbb{R}$. Let $S$ be the space of all Cauchy sequences in $X$. Define $\rho((x_{n}), (y_{n}))\equiv\lim_{ n \to \infty }d(x_{n}, y_{n})$. It is easy to see that
- $\rho\geq 0$, and $(x_{n})=(y_{n})$ implies $\rho((x_{n}), (y_{n}))=0$. 
- $\rho$ is symmetric
- triangle inequality holds

However, $\rho((x_{n}), (y_{n}))=0$ may not imply $(x_{n})=(y_{n})$. $\rho$ is what is called a *pseudometric*, and $(S, \rho)$ is called a *pseudometric space*. On such a space, one can define the relation $(x)_{n}\sim (y)_{n}$ if $\rho((x_{n}), (y_{n}))=0$. This is an equivalence relation, and partitions $S$ into equivalence classes $S/\sim \ =:\tilde{X}$. Define $\tilde{d}([(x_{n})], [(y_{n})])=\rho((x_{n}), (y_{n}))$. Note that $\tilde{d}$ is well defined, and that $(\tilde{X}, \tilde{d})$ is a metric space.

We will now show that $(\tilde{X}, \tilde{d})$ is complete. Consider a Cauchy sequence in $\tilde{X}$: $([(x_{*, 1})], [(x_{*, 2})], \dots)$. By passing to subsequences if necessary, we can assume that given $n$, $\tilde{d}([(x_{*, k})], [(x_{*, l})])< 2^{-n}$ for all $l, k\geq n$. Similarly, by passing to subsequences if necessary, we can assume that for all $n$, given $a$, $d(x_{b, n}, x_{c, n})< 2^{-a}$ for all $b, c\geq a$.

Let $(z_{k})\equiv(x_{k, k})$. We will first show that $(z_{k})$ is a Cauchy sequence in $X$, and then that $([(x_{*, k})])\to[(z_{k})]$. 

Let $\epsilon> 0$. Choose $N$ such that $2^{-N}<\epsilon/3$. Now, for all $n, m\geq N$, $d(z_{n}, z_{m})  =d(x_{n, n}, x_{m, m})$. Since $\tilde{d}([(x_{*, n})], [(x_{*, m})])< {2}^{-N}$, $\lim_{ k \to \infty }d(x_{k, n}, x_{k, m})< 2^{-N}$, so there exists $M$ such that $d(x_{k, n}, x_{k, m})< 2^{-N}$ when $k\geq M$. Take $M'=\max\{ M, n, m \}$. Now, 
$$
\begin{align}
d(x_{n, n}, x_{m, m}) & =d(x_{n, n}, x_{M, n})+d(x_{M, n}, x_{M, m})+d(x_{M, m}, x_{m, m}) \\
 & < 2^{-n}+2^{-N}
\end{align}
$$
