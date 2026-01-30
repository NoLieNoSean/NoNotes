---
tags:
  - PROB
id: "292"
date: October 2025
---
## Problem 3

> [!Question]
> Suppose it is given in a probability space that at least one, but no more than three, of the events $A_r$, $1 \leq r \leq n$, occur, where $n \geq 3$; the probability of at least two occurring is $1/2$. Further if $P(A_r) = p$, $P(A_r \cap A_s) = q$, $r \neq s$ and $P(A_r \cap A_s \cap A_t) = x$, $r < s < t$, then show that $p \geq \frac{3}{2n}$ and $q \leq \frac{4}{n}$.

We know that at least one of the $n$ events occur, so $P\left( \bigcup A_{i}  \right)=1$. Next, 
$$
\begin{align}
P\left( \bigcup_{i=1}^{n}  A_{i} \right) & =\sum_{i} P(A_{i})-\sum_{i\ne j}P(A_{i}\cap A_{j})+\sum_{i\ne j\ne k}P(A_{i}\cap A_{j}\cap A_{k}) \\
\implies 1 & =np-\binom{n}{2}q+\binom{n}{3}x \quad\quad (1)
\end{align}
$$
since no more than three events can occur concurrently. The probability of at least two occurring is given by
$$
\begin{align}
P\left( \bigcup_{i\ne j}(A_{i}\cap A_{j}) \right) & =\sum_{i\ne j} P(A_{i}\cap A_{j}) -3\sum_{i\ne j\ne k} P(A_{i}\cap A_{j}\cap A_{k})+\sum_{i\ne j\ne k} P(A_{i}\cap A_{j}\cap A_{k})\\
\implies \frac{1}{2} & =\binom{n}{2}q-2\binom{n}{3}x \quad\quad (2)
\end{align}
$$
Now, $(1)+(2)$ gives us
$$
\begin{align}
  &  \frac{3}{2}=np-\binom{n}{3}x \\
  & p=\frac{3}{2n}+\binom{n}{3} \frac{x}{n} \\
 & p\geq \frac{3}{2n}
\end{align}
$$
From $(2)$, we know that $q\binom{n}{2}=\frac{1}{2}+2\binom{n}{3}x$. Thus, we need a bound for $x$ in terms of $q$. Observe that $P(\text{exactly two events occur})=$ $P(\text{at least two events occur})-$ $P(\text{exactly three events occur})$. The probability that exactly three events occur is $\binom{n}{3}x$. Thus, 
$$
\begin{align}
P(\text{exactly two events occur}) & =\binom{n}{2}q-3\binom{n}{3}x\geq 0 \\
 & 2\binom{n}{3}x\leq \frac{2}{3}\binom{n}{2}q
\end{align}
$$
Thus, 
$$
\begin{align}
q\binom{n}{2} & \leq\frac{1}{2}+\frac{2}{3}\binom{n}{2}q \\
\binom{n}{2}q & \leq \frac{3}{2} \\
q & \leq \frac{3}{n(n-1)}\leq \frac{4}{n}
\end{align}
$$
## Problem 4

> [!Question]
> Let $X$ and $Y$ be discrete random variables with mean $0$, variance $1$ and covariance $c$. Prove that $E(\text{Max}(X^{2}, Y^{2}))\leq 1+\sqrt{ 1-c^{2} }$.

Note that since $EX=EY=0$ and $\text{Var}(X)=\text{Var}(Y)=1$, $E(X^{2})=E(Y^{2})=1$, and $E(XY)=c$.

$$
\begin{align}
E(\text{Max}(X^{2}, Y^{2})) & =E\left( \frac{{X^{2}+Y^{2}}}{2}+\left| \frac{X^{2}-Y^{2}}{2} \right|  \right) \\
 & =\frac{E(X^{2})}{2}+\frac{E(Y^{2})}{2}+\frac{E(|X-Y|(X+Y))}{2} \\
 & \leq 1 +\frac{1}{2}\sqrt{ E|X-Y|^{2}E(X+Y)^{2} } \\
	 & \leq 1+ \frac{1}{2}\sqrt{ (2-2E(XY))(2+2E(XY)) } \\
	 & \leq1+\sqrt{ 1-E(XY)^{2} } \\
	 & \leq1+\sqrt{ 1-c^{2} }
\end{align}
$$

## Problem 5

> [!Question]
> Define the conditional variance of $Y$ given $X$ by $\text{Var}(Y\ | \ X)=E((Y-E(Y\ | \ X))^{2}\ | \ X)$. Show that $\text{Var}(Y)=E(\text{Var}(Y\ | \ X))+\text{Var}(E(Y\ | \ X))$.

$$
\begin{align}
 & E(\text{Var}(Y\ | \ X))+\text{Var}(E(Y\ | \ X)) \\
 & =E(Y-E(Y\ | \  X))^{2}+E((E(Y\ | \  X))^{2})-(E(E(Y\ | \  X)))^{2} \\
 & =E(Y^{2}+(E(Y\ | \  X))^{2}-2YE(Y\ | \  X))+E((E(Y\ | \  X))^{2})-(EY)^{2} \\
 & = E(Y^{2})-(EY)^{2} +2E\big(E(Y\ | \  X)E(Y\ | \  X)\big)-2E(YE(Y\ | \  X))
\end{align}
$$
Now, note that $E(Y\ | \ X)$ is a function of $X$, so $E(Y\ | \ X)E(Y\ | \ X)=E(YE(Y\ | \ X)\ | \ X)$. Thus, $E(E(Y\ | \ X)E(Y\ | \ X))=E(YE(Y\ | \ X))$. Therefore, $E(\text{Var}(Y\ | \ X))+\text{Var}(E(Y\ | \ X))=E(Y^{2})-(EY)^{2}=\text{Var}(Y)$. 