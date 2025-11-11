---
tags:
  - ANA2
date: 2025-09-22
time: 18:22
id: "16"

---
# Problem 1

Suppose for every $x\in S$, there exists a neighborhood $U_{s}$ such that $U_{s}\cap S$ is countable. $\{ U_{s} \}_{s\in S}$ is an open cover of $S$. Since every subset of a separable metric space is separable, $S$ is separable. By Lindelöf's covering theorem, there exists a countable subcover $\{ U_{s} \}_{s\in\alpha \subset S}$. This implies
$$
|S|=\left| \bigcup_{s\in\alpha}U_{s}\cap S \right| =\aleph_{0},
$$
a contradiction.

---
# Problem 2

Denote the graph of $f$ by $G$. Suppose $f$ is continuous. Define $g:X\to X\times Y$ by $x\mapsto(x, f(x))$. Since its components are continuous, $g$ is continuous. The image of a compact set under a continuous map is compact, so $G$ is compact. In particular, $G$ is closed. 

Conversely, suppose $G$ is closed. Let $p$ be a limit point of $X$. Let $\{ p_{n} \}\subseteq X$ be a sequence converging to $p$. Consider the sequence $\{ g(p_{n}) \}\subseteq X\times Y$. Since $X\times Y$ is compact, it is limit point compact, so $\{ g(p_{n}) \}$ has a limit point $(a, b)$, which must then be in $G$ because $G$ is closed. Let $\{ q_{n} \}\subseteq \{ g(p_{n}) \}$ be a sequence converging to $(a, b)$. The component sequences of $\{ q_{n} \}$ in $X$ and $Y$ must converge to $a$ and $b$. Since $p$ is the only limit point of $\{ p_{n} \}$, it follows that $a=p$. Since $f$ is a function, this forces $b=f(p)$. Thus, $\{ g(p_{n}) \}$ has exactly one limit point, and it is $(p, f(p))$. It follows that $\{ g(p_{n}) \}\to(p, f(p))$. Therefore, $\{ f(p_{n}) \}\to f(p)$ and $f$ is continuous at $p$.

---
# Problem 3

If $X$ is compact and $f:X\to \mathbb{R}$ is any continuous function, $f(X)$ is compact, and in particular bounded.

Assume every real valued function on $X$ is bounded. Suppose $X$ is not compact. Then $X$ is not sequentially compact. Let $S=\{ x_{n} \}_{n=1}^{\infty}\subseteq X$ not have a limit point. For each $x_{n}$, there exists $r_{n}$ such that $B_{r_{n}}(x_{n})\cap S$ is the singleton $\{ x_{n} \}$ and all of $\{ B_{r_{n}}(x_{n}) \}$ are disjoint from each other. 

For each natural number $n$, define $f_{n}$ by
$$
f_{n}=\begin{cases}
1 -2d(x, x_{n})/r_{n} & d(x, x_{n})\leq r_{n}/2 \\
0 & \text{otherwise}.
\end{cases}
$$
Define the function $f:X\to \mathbb{R}$ by 
$$
f(x)= \sum_{n=1}^{\infty} nf_{n}(x) \text{ for all }x\in X.
$$
Since each $f_{n}$ is continuous and vanishes outside $B_{r_{n}/2}(x_{n})$ and the collection $\{ B_{r_{n}}(x_{n}) \}$ is disjoint, $f$ is well-defined and continuous. But for each natural number $n$, $f(x_{n})=n$, and hence $f$ is unbounded above. This is a contradiction.

---
# Problem 4

> [!Exercise]
> Let $f:X\to Y$ be a continuous map onto $Y$ and $X$ compact. Also $g:Y\to Z$ is such that $g\circ f$ is continuous. Show $g$ is continuous.

Let $S\subseteq Z$ be closed. It suffices to prove that $g^{-1}(S)$ is closed in $Y$. Since $g\circ f$ is continuous, we know that $f^{-1}(g^{-1}(S))$ is closed in $X$. Since $X$ is compact, $f^{-1}(g^{-1}(S))$ is compact. Since $f$ is onto, $f(f^{-1}(g^{-1}(S)))=g^{-1}(S)$, which must be compact since $f$ is continuous. Since $Y$ is a metric space, this implies $g^{-1}(S)$ is closed.

---
# Problem 5

It is clear that
$$
f\left( \bigcap_{n=1}^{\infty} K_{n} \right)\subseteq \bigcap_{n=1}^{\infty} f(K_{n}).
$$
To prove the reverse inclusion, consider $l\in \bigcap_{n=1}^{\infty}f(K_{n})$. For every $n$, there exists $x_{n}\in K_{n}$ such that $f(x_{n})=l$. Consider set $\{ x_{n} \}$ in $K_{1}$. Since $K_{1}$ is compact, it must have a convergent subsequence $\{ y_{n} \}_{n=1}^{\infty}\to p\in K_{1}$. For every $k$, $\{ y_{n} \}_{n=k}^{\infty}\subseteq K_{k}$, so $p$ is a limit point of and hence must be contained in $K_{k}$. Thus, $p\in \bigcap_{n=1}^{\infty}K_{n}$. Since $f$ is continuous, $f(p)=\lim_{ n \to \infty }f(x_{n})=l$. Thus, $l\in f\left( \bigcap_{n=1}^{\infty}K_{n} \right)$.