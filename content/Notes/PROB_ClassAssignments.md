`Vasudeva S N`
## Polya Urn Scheme

> [!Question]
> An urn contains $r$ red balls and $b$ blue balls. One ball is selected at random and $c$ balls of the same colour are added into the urn. Prove that the chance of picking a red ball at any draw remains the same.

Let $P(R_{n})$ denote the probability of picking a red ball in the $n$th draw.
Let $S_{n}$ be the statement: For $r, g\geq 1$, if there were initially $r$ red and $g$ green balls, $P(R_{n})=\frac{r}{r+g}$. 

$S_{1}$ is easily seen to be true. Next, for $n> 1$, assume $S_{k}$ is true for all $k\leq n$. Then, 
$$
\begin{align}
P(R_{n})=P(R_{n}\ | \  R_{1})P(R_{1})+P(R_{n}\ | \  B_{1})P(B_{1})
\end{align}
$$
Now, $P(R_{n}\ | \ R_{1})$ is equal to the probability of picking a red ball in the $n-1$th draw if there were initially $r+c$ and $b$ red balls and blue balls respectively. Since $S_{n-1}$ is true, $P(R_{n}\ | \ R_{1})=\frac{r+c}{r+b+c}$. Similarly, $P(R_{n}\ | \ B_{1})= \frac{r}{r+b+c}$. So,
$$
\begin{align}
P(R_{n}) & =\frac{r+c}{r+b+c} \frac{r}{r+b}+ \frac{r}{r+b+c} \frac{b}{r+b} \\
	 & = \frac{r}{r+b}

\end{align}
$$
Hence proved.

## Proof of Inclusion exclusion in probability 


>[!Theorem] The inclusion-exclusion principle
> Let $A_{1}, A_{2}, \dots, A_{n}\in \mathcal{F}$ for some $(\Omega, \mathcal{F}, P)$. Define
> $$
> S_{1}=\sum_{i=1}^{n} P(A_{i})
> $$
> $$
> S_{2}=\sum_{1\leq i< j\leq n} P(A_{i}\cap A_{j}) 
> $$
> $$
> S_{3}=\sum_{1\leq i<j<k\leq n}P(A_{i}\cap A_{j}\cap A_{k})
> $$
> $$
> \vdots
> $$
> Then,
> $$
> P\left( \bigcup_{i=1}^{n} A_{i} \right)=S_{1}-S_{2}+S_{3}-\dots+(-1)^{n+1}S_{n}
> $$

Easy to verify for $n=2, 3$. For general $n$, assume the principle is proved for all $k< n$. Let $B_{i}=A_{i}$ for all $1\leq i\leq n-2$, and $B_{n-1}=A_{n-1}\cup A_{n}$Then, 
$$
\begin{align}
 & P\left( \bigcup_{i=1}^{n} A_{i} \right)=P\left( \bigcup_{i=1}^{n-1} B_{i} \right) \\
 & =\sum_{i} P(A_{i})-P(A_{n}\cap A_{n-1}) \\
 & \quad\quad -\sum_{i\ne j\atop \{ i, j \}\ne \{ n, n-1 \}}P(A_{i}\cap A_{j})+\sum_{i} P(A_{i}\cap A_{n}\cap A_{n-1}) \\
 & \quad\quad\quad\quad\quad\quad\quad\quad\quad\quad\vdots \\
 & \quad\quad \pm \left( P\left( A_{n-1}\cap\bigcap_{i=1}^{n-2} A_{i} \right)+P\left( A_{n}\cap\bigcap_{i=1}^{n-2} A_{i} \right) \right)\mp P\left( \bigcap_{i=1}^{n} A_{n} \right) \\
 & =S_{1}-S_{2}+S_{3}-\dots+(-1)^{n+1}S_{n}
\end{align}
$$

## Bonferroni’s Inequalities

Let $A_{1}, \dots, A_{n}$ be events in a probability space. Denote $\bigcup_{i=1}^{n}A_{i}$ by $A$. We want to prove that
$$
\begin{align}
 & P\left( A\right)\leq S_{1}-S_{2}+\dots+S_{i}, \text{where } i\text{ is odd, and}\\
 & P\left( A \right)\geq S_{1}-S_{2}+\dots-S_{i}, \text{where } i\text{ is even.}

\end{align}
$$
Let $\omega\in \Omega$. Fix $i$. If $\omega\notin A$, then $\omega$ is counted $0$ times in the LHS and the RHS. Let $\omega$ be a member of $r$ sets from $A_{1}, \dots, A_{r}$. $\omega$ is counted exactly once in the LHS. In the RHS, $\omega$ is counted
$$
\binom{r}{1}-\binom{r}{2}+\dots=\sum_{j=1}^{i} (-1)^{j+1}\binom{r}{j}
$$
times. Now, if $i=r$, the sum is just $1-(1-1)^{r}=1$. If $i< r$, we know that
$$
\sum_{j=1}^{i} (-1)^{j+1}\binom{r}{j}=1+(-1)^{i+1}\binom{r-1}{i}
$$
This quantity is greater than 1 when $i$ is odd, and less than 1 when $i$ is even. Hence, $\omega$ gets counted less than 1 times if $i$ is odd, and more than 1 times if $i$ is even. This completes the proof. 
## Properties of conditional expectation

### $E(aY+Z\ | \ X)=aE(Y\ | \ X)+E(Z\ | \ X)$
$$
\begin{align}
 & E(aY+Z\ | \  X) \\
 & =\sum_{y, z}(ay+z)P(Y=y, Z=z\ | \  X=x) \\
 & =a\sum_{y}yP(Y=y\ | \  X=x)+\sum_{z}zP(Z=z\ | \  X=x) \\
 & =aE(Y\ | \  X)+E(Z\ | \  X)
\end{align}
$$

### $Y\geq 0, E(Y\ | \ X)\geq 0$
$$
\begin{align}
E(Y\ | \  X=x)=\sum_{y}yP(Y=y\ | \  X=x)
\end{align}
$$
Since each term in the sum is positive, $E(Y\ | \ X=x)$ and hence $E(Y\ | \ X)$ is positive.

### $E(g(X)Y\ | \ X)=g(X)E(Y\ | \ X)$

$$
\begin{align}
 & E(g(X)Y\ | \  X=x) \\
 & = \sum_{y}g(x)yP(Y=y\ | \  X=x) \\
 & =g(x)\sum_{y}yP(Y=y\ | \  Z=x) \\
 & =g(x)E(Y\ | \  X=x)
\end{align}
$$

### $E(c\ | \ X)=c$
$$
\begin{align}
E(c\ | \  X=x)=cP(c=c\ | \ X=x )=c
\end{align}
$$

### $E(E(Y\ | \ X, Z)\ | \ X)=E(Y\ | \ X)=E(E(Y\ | \ X)\ | \ X, Z)$

$$
\begin{align} \\
 & E(E(Y\ | \  X, Z)\ | \  X=x)\\
 & =\sum_{z}E(Y\ | \  X=x, Z=z)P(Z=z\ | \  X=x) \\
 & =\frac{1}{P(X=x)}\sum_{z}\sum_{y}yP(Y=y\ | \  X=x, Z=z) P(Z=z, X=x) \\
 & =\frac{1}{P(X=x)}\sum_{y}y\sum_{z}P(Y=y, X=x, Z=z) \\
 & =\sum_{y}y \frac{P(Y=y, X=x)}{P(X=x)} \\
 & =\sum_{y}yP(Y=y\ | \  X=x) \\
 & =E(Y\ | \  X=x)
\end{align}
$$

$$
\begin{align}
 & E(E(Y\ | \  X)\ | \  X=x, Z=z) \\
 & =E(Y\ | \  X)E(1\ | \  X=x, Z=z)  & E(Y\ | \  X) \text{ is a function of }X\\
 & =E(Y\ | \  X)
\end{align}
$$

