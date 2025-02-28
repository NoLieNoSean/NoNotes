---
tags:
  - DMAT
  - Lecture
date: 2025-02-24
time: 11:59
---
## Principle of inclusion and exclusion

Let $X$ be a finite universe.
$A_{1}, A_{2}, \dots, A_{n}\subset X$.
Let $I\subset[n]$ be an index set.
$A_{I}\equiv \bigcap_{x\in I}A_{i}$, $A_{\emptyset}\equiv X$.

> [!Theorem]
> $$
> \left| X\setminus \bigcup_{i=1}^{n} A_{i} \right| =\sum_{I\subset[n]}(-1)^{|I|}|A_{I}|.
> $$

> **Proof**
> Let $x\in X$. 
> Contribution of $x$ to the LHS:
> - $x\in \bigcup A_{i}$ $\implies$ $x$ contributes 0
> - $x\not\in \bigcup A_{i}$ $\implies$ $x$ contributes 1.
> 
> 
> Let $J$ be the largest index set such that that $x\in A_{J}$. Let $|J|=j$. Then, contribution of $x$ to the RHS is equal to
> $$
> \sum_{I\subseteq J}(-1)^{|I|}=\sum_{i=0}^{j} (-1)^{i}\binom{j}{i}=\begin{cases}
> (1-1)^{j}=0 & j> 0 ~\left(\iff x\in \bigcup A_{i}\right)\\
> 1 & j=0 ~\left(\iff x\not\in \bigcup A_{i}\right)
> \end{cases}
> $$

### Number of surjections

Let $X=[k]^{[n]}$ be the set of all functions from $[n]\to[k]$. 
Let $A_{i}$ be the set of all functions from $[n]$ to $[k]$ such that $i\in[k]$ is not covered. 
We want to count 
$$
\begin{align}
|X\setminus \bigcup A_{i}|
\end{align}
$$

### Derangements

### The Euler $\phi$ function

Let $X=[n]$. Let $p_{1}, p_{2}, \dots, p_{k}$ be distinct prime factors of $n$. The "bad elements" are the multiples of the $P_{i}$'s. Let $A_{i}=\{ x\in X\ : \ p_{i}\text{ divides }x\text{ for some }i \}$. 
$$
\begin{align}
|A_{i}| & =\frac{n}{p_{i}} \\
|A_{I}| & =\frac{n}{\prod_{i\in I}p_{i}}, I\ne \emptyset \\
|A_{\emptyset}| & \equiv n
\end{align}
$$
$$
\begin{align}
\phi(n) & =\left| X\setminus \bigcup_{i=1}^{k} A_{i} \right|  \\
 & =n\sum_{I\subset[k]}(-1)^{|I|} \frac{1}{\prod_{i\in I}p_{i}} \\
 & =n \prod_{i=1}^{n} \left( 1-\frac{1}{p_{i}} \right)
\end{align}
$$

### Linear algebraic formulation

Let $X=[n]$.
Consider all functions $V=\{f:\mathcal{P}([n])\to \mathbb{R}\}$. This forms a $2^{n}$ dimensional vector space over $\mathbb{R}$. 
Then, for $f, g\in V$, the following two statements are equivalent.
$$
\begin{align}
 & 1.~g(I)=\sum_{J\supseteq I} f(J), \\
 & 2.~f(J)=\sum_{J\supseteq I} (-1)^{|J\setminus I|}g(J). 
\end{align}
$$
Think of it this way: Let $f(J)$ be the number of elements in $X$ that satisfy all properties $i$ in $J$, $|A_{J}|$. Let $g(I)$ be the number of elements that satisfy exactly the properties in $J$: $|A_{J}\setminus \bigcup_{i\in \overline{J}}A_{i}|$. 


$1\implies2$:
$$
\begin{align}
\sum_{J\supseteq I}(-1)^{|J\setminus I|}g(J) & =\sum_{J\supseteq I}(-1)^{|J\setminus I|}\left( \sum_{K\supseteq J }f(K) \right) \\
	 & =\sum_{K\supseteq I}f(K)\sum_{K\supseteq J\supseteq I}(-1)^{|J\setminus I|} \\
	 & =f(I)+ \sum_{K\supset I}f(K)\cancelto{ \huge{~0} }{ \sum_{K\supseteq J\supseteq I}(-1)^{|J\setminus I|} } \\
 & =f(I).
\end{align}
$$



