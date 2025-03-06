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
Let $I\subseteq[n]$ be an index set.
$A_{I}\equiv \bigcap_{x\in I}A_{i}$, $A_{\emptyset}\equiv X$.

> [!Theorem]
> $$
> \left| X\setminus \bigcup_{i=1}^{n} A_{i} \right| =\sum_{I\subseteq[n]}(-1)^{|I|}|A_{I}|.
> $$

> **Proof**
> Let $x\in X$. 
> Contribution of $x$ to the LHS:
> - $x\in \bigcup A_{i}$ $\implies$ $x$ contributes 0
> - $x\not\in \bigcup A_{i}$ $\implies$ $x$ contributes 1.
> 
> 
> Let $J$ be the largest index set such that that $x\in A_{J}$ (observe that such a set is unique). Let $|J|=j$. Then, contribution of $x$ to the RHS is equal to
> $$
> \sum_{I\subseteq J}(-1)^{|I|}=\sum_{i=0}^{j} (-1)^{i}\binom{j}{i}=\begin{cases}
> (1-1)^{j}=0 & j> 0 ~\left(\iff x\in \bigcup A_{i}\right)\\
> 1 & j=0 ~\left(\iff x\not\in \bigcup A_{i}\right).
> \end{cases}
> $$

### Number of surjections

Let $X=[k]^{[n]}$ be the set of all functions from $[n]\to[k]$. 
Let $A_{i}$ be the set of all functions from $[n]$ to $[k]$ such that $i\in[k]$ is not covered. 
Then, the [[DMAT_L6#Counting functions|number of surjections]] is equal to
$$
\begin{align}
\left|X\setminus \bigcup_{i=1}^{k}  A_{i}\right| & =\sum_{I\subseteq [k]}(-1)^{|I|}|A_{I}| \\
 & = \sum_{i=0}^{k} (-1)^{i}\binom{k}{i}(k-i)^{n} \\
 & = n!~S(m, n).
\end{align}
$$
### Derangements

Let $X$ be the set of all permutations on $[n]$. Let $A_{i}\subset X$ be the set of all permutations which map $i$ to $i$. Then, the number of [[DMAT_L8#Derangements|derangements]] is equal to
$$
\begin{align} \\
\left| X\setminus \bigcup_{i=1}^{n} A_{i} \right|  & =\sum_{I\subseteq[n]}(-1)^{|I|}|A_{I}| \\
 & = \sum_{i=0}^{n} (-1)^{n}\binom{n}{i}(n-i)! \\
 & = n!\sum_{i=0}^{n}  \frac{(-1)^{n}}{i!}.
\end{align}
$$

### The Euler $\phi$ function

Let $X=[n]$. Let $p_{1}, p_{2}, \dots, p_{k}$ be distinct prime factors of $n$. The "bad elements" are the multiples of the $p_{i}$s. Let $A_{i}=\{ x\in X\ : \ p_{i}\text{ divides }x\}$. 
$$
\begin{align}
|A_{i}| & =\frac{n}{p_{i}}. \\
|A_{I}| & =\frac{n}{\prod_{i\in I}p_{i}}\text{ when } I\ne \emptyset. \\
|A_{\emptyset}| & \equiv n.
\end{align}
$$
$$
\begin{align}
\phi(n) & =\left| X\setminus \bigcup_{i=1}^{k} A_{i} \right|  \\
 & =n\sum_{I\subseteq[k]}(-1)^{|I|} \frac{1}{\prod_{i\in I}p_{i}} \\
 & =n \prod_{i=1}^{n} \left( 1-\frac{1}{p_{i}} \right).
\end{align}
$$

### Linear algebraic formulation

Let $X=[n]$. Consider all functions $V=\{f:\mathcal{P}(X)\to \mathbb{R}\}$. This forms a $2^{n}$ dimensional vector space over $\mathbb{R}$.  Then, for $f, g\in V$, the following two statements are equivalent.
$$
\begin{align}
 & 1.~g(I)=\sum_{J\supseteq I} f(J) &  \forall I\subseteq \mathcal{P}(X), \\
 & 2.~f(I)=\sum_{J\supseteq I} (-1)^{|J\setminus I|}g(J) &  \forall I\subseteq \mathcal{P}(X). 
\end{align}
$$
Think of it this way: Let the elements of $X$ be different "properties" of elements of another set $G$. An element of $G$ can have any number of properties $x\in X$. For $I\subset X$, Let $A_{I}$ be the set of all $g\in G$ which have each property $i\in I$ (Note that all the properties of $g\in A_{I}$ may be a super set of $I$). Then, $g(I)= |A_{I}|$, the number of elements in $G$ which have properties $I$, and $f(I)=|A_{I}\setminus \bigcup_{i\in \overline{I}}A_{i}|$, the number of elements in $G$ which have exactly the properties $I$ satisfy the above equalities. 

> Proof of $1\implies2$:
> $$
> \begin{align}
> \sum_{J\supseteq I}(-1)^{|J\setminus I|}g(J) & =\sum_{J\supseteq I}(-1)^{|J\setminus I|}\left( \sum_{K\supseteq J }f(K) \right) \\
> 	 & =\sum_{K\supseteq I}f(K)\sum_{K\supseteq J\supseteq I}(-1)^{|J\setminus I|} \\
> 	 & =f(I)+ \sum_{K\supset I}f(K) \underbrace{ \sum_{K\supseteq J\supseteq I}(-1)^{|J\setminus I|} }_{ =~0 }  & (*) \\
>  & =f(I).
> \end{align}
> $$
> 
> $(*)$ is true since for any finite set, the number of subsets of off cardinality is equal to the number of subsets of even cardinality.
> 
> Proof of $2\implies 1$:
> 
> $$
> \begin{align}
> \sum_{J \supseteq I} f(J) & =\sum_{J\supseteq I}\sum_{K\supseteq J}(-1)^{|K\setminus J|}g(K) \\
>  & = \sum_{K\supseteq I}g(K)\sum_{K\supseteq J\supseteq I}(-1)^{|K\setminus J|} \\
>  & =g(I)+ \sum_{K\supset I}g(K)\underbrace{ \sum_{K\supseteq J\supseteq I}(-1)^{|K\setminus J|} }_{ =~0 } \\
>  & =g(I)
> \end{align}
> $$



Let $\phi$ be a map from $V$ to $V$ which maps $f$ to $g$. 


It can be represented by a $2^{n}\times 2^{n}$ matrix. Let Let $X' = \{x_1 \leq x_2\leq \cdots \leq x_n\}$ be a *linear extension* of the poset $\mathcal{P}(X)$.  
