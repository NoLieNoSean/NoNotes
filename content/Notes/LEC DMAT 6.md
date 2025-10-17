---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-01-27
time: 11:58
id: "204"
---
## Picking objects

Say you have to pick $k$ objects from $n$ objects.

$$
\begin{array}{l|ll}

	 & \text{Order matters} & \text{Order doesn't matter} \\
 \hline
	\text{With replacement}  & n^{k} & \binom {n+k-1}{k-1} \\  
	\text{Without replacement} & n(n-1)\dots(n-k+1) & \binom{n}{k}

\end{array}
$$

---
## Counting functions

Let $f:A\to B$, $|A|=m$, $|B|=n$.

**Total number of functions** $f$ is $n^{m}$. 
**Total number of injections** is $n(n-1)(n-2)\dots(n-m+1)$. 

One way to calculate the **total number of surjections** is to first consider the sizes of the preimage sets of every $b\in B$. Define $|f^{-1}(b_{i})|=\beta_{i}$, $1\leq i\leq n$. We know that $\beta_{i}>0$ for all $i$, and $\sum\beta_{i}=m$. Let $(\beta_{1}, \beta_{2}, \dots, \beta_{n})$ be a solution to $\sum\beta_{i}=m$. Then, the number of functions satisfying $|f^{-1}(b_{i})|=\beta_{i}$ is $\frac{m!}{\beta_{1}!\beta_{2}!\dots\beta_{n}!}$. Thus, the total number of surjections is
$$
\begin{align}
 & \sum_{\beta_{i}>0, ~\sum\beta_{i}=m} \frac{m!} {\beta_{1}!\beta_{2}!\dots\beta_{n}!}.   &  (1)
\end{align}
$$
Notice that if we remove the $\beta_{i}>0$ restriction, the formula basically gives the total number of functions from $A$ to $B$, courtesy the multinomial theorem:

$$
\sum_{\sum\beta_{i}=m} \frac{m!}{\beta_{1}!\beta_{2}!\dots\beta_{n}!}=(n)^{m}.
$$
Evaluating $(1)$ directly is not easy. We could instead use the inclusion-exclusion principle to isolate all the cases when $\beta_{i}=0$ for some $i$ (functions that are not surjective), and subtract it away from $n^{m}$. The number of non-surjective functions is
$$
\begin{align}
 & \binom n 1 (n-1)^{m}-\binom n 2(n-2)^{m}+\binom n 3(n-3)^{m}-\dots+ (-1)^{n}\binom n {n-1}(1)^{m} \\
= & \sum_{i=1}^{n-1} (-1)^{i+1}\binom n i (n-i)^{m}
\end{align}
$$
Subtracting it away from $n^{m}$, we get (Note that setting the upper limit to $n$ or $n-1$ is the same)
$$
\begin{align}
 \text{Total number of surjections}& =n^{m}-\sum_{i=1}^{n-1} (-1)^{i+1}\binom n i (n-i)^{m} \\
 & =n^{m}+\sum_{i=1}^{n-1} (-1)^{i}\binom n i (n-i)^{m} \\
 & =\sum_{i=0}^{n} (-1)^{i}\binom n i (n-i)^{m}
\end{align}
$$
Incidentally, the Sterling number of the second kind, which counts the number of ways to partition a set of size $m$ into $n$ non-empty subsets, is given by
$$
S(m, n)=\frac{1}{n!} \sum_{i=0}^{n} (-1)^{i}\binom n i (n-i)^{m}
$$
---

## Basic properties of the binomial coefficient

$$
\binom nr+ \binom{n}{r+1}=\binom{n+1}{r+1}
$$
$$
\sum_{r=o}^{n} \binom{n}{r}=2^{n}
$$
$$
\binom{k}{k}+\binom{k+1}k+\binom{k+2}{k}+\dots+\binom{k+n}{k}=\binom{k+n+1}{k+1}
$$
$$
\binom{n}{r}=\frac{n}{r}\binom{n-1}{r-1}
$$
$$
\binom{n_{1}}{r}\binom{n_{2}}{0}+\binom{n_{1}}{r-1}\binom{n_{2}}{1}+\dots+\binom{n_{1}}{0}\binom{n_{2}}{r}=\binom{n_{1}+n_{2}}{r}
$$
$$
\binom{n}{k}-\binom{n}{k-1}+\dots\mp \binom{n}{1}\pm 1=\binom{n-1}{k}
$$
^ easy proof by induction
