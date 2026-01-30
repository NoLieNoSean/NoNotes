---
id: "20"
date: January 2025
---


# 1

## 1 a

We know that $A\subseteq B\implies P(A)\leq P(B)$. Thus, $P(A\cap B\cap C)\leq P(A)$, $P(A\cap B\cap C)\leq P(B)$, $P(A\cap B\cap C)\leq P(C)$. It follows that $P(A\cap B\cap C)\leq P(A)\land P(B)\land P(C)$.

## 1 b

Similarly to part a, we have $P(A\cup B\cup C)\geq P(A)$, $P(A\cup B\cup C)\geq P(B)$, $P(A\cup B\cup C)\geq P(C)$. It follows that $P(A\cup B\cup C)\geq P(A)\lor P(B)\lor P(C)$.

## 1 c

Let $C=(A\cup B)^{c}$. Then,
$$
\begin{align}
P(A\cup B\cup C)=1 & =P(A)+P(B)+P(C)-P(A\cap B) \\
 & \geq P(A)+P(B)-P(A\cap B) 
\end{align}
$$
Therefore, $P(A\cap B)\geq P(A)+P(B)-1$. 

---
# 2

## 2 a
For each draw of $r$ balls, let $X$ denote the maximum number drawn. Then, $P(X\leq m)=\left( \frac{m}{n} \right)^{r}$. Therefore, $P(X=m)=P(X\leq m)-P(X\leq m-1)= \left( \frac{m}{n} \right)^{r}-\left( \frac{m-1}{n} \right)^{r}$. 

## 2 b
For each draw of $r$ balls, let $X$ denote the maximum number drawn. Then, $P(X\leq m)=\binom{m}{r}\binom{n}{r}^{-1}$. Therefore, $P(X=m)=P(X\leq m)-P(X\leq m-1)=$
$$
\begin{align}
\frac{\binom{m}{r}-\binom{m-1}{r}}{\binom{n}{r}}=\frac{\binom{m-1}{r-1}}{\binom{n}{r}}.
\end{align}
$$

---
# 3

$$
\begin{align}
P(\text{A wins}) & = \sum_{i=1}^{\infty}P(\text{A wins in round }i)  \\
 & =\sum_{i=1}^{\infty} \frac{5}{36}\left( \frac{31}{36} \frac{5}{6} \right)^{i-1} \\
 & = \frac{30}{61}
\end{align}
$$

---
# 4

Let $WB$ represent the event that a write ball is picked in the first draw, and a black ball is picked in the second draw. $WW, BB, BW$ are also events, and these four and disjoint and exhaustive. Let $A$ be the event that a white ball was picked in the third draw. Then, 
$$
\begin{align}
P(A)  = & P(A\ | \  WW)P(WW)+P(A\ | \  WB)P(WB)+ \\
 & P(A\ | \  BW)P(BW)+P(A\ | \  BB)P(BB) \\
  =  & \frac{1}{w_{1}+b_{1}} \frac{1}{w_{1}+w_{2}+1} \frac{1}{w_{1}+b_{1}}  \\
 & \left( w_{1}(w_{1}+1)w_{1} +(w_{1}-1)w_{2}w_{1}+ (w_{1}+1)w_{1}b_{1}+ w_{1}(w_{2}+1)b_{1}\right)  \\ \\
= & \frac{w_{1}\left( (w_{1}+1)w_{1} +(w_{1}-1)w_{2}+ (w_{1}+1)b_{1}+ (w_{2}+1)b_{1}\right)}{(w_{1}+b_{1})^{2}(w_{1}+w_{2}+1)}.
\end{align}
$$

---

# 5

The corrected version of the question defines $\sim$ by $X\sim Y$ if $P(X=n)=P(Y=n)\quad \forall n\in \mathbb{Z}$, $i$.$e$, $X$ and $Y$ have the same PMF. $d([X], [Y])$ is defined by
$$
d([X], [Y])= \sum_{n\in \mathbb{Z}}\left| P(X=n)-P(Y=n) \right|.
$$
Clearly, $d([X], [Y])\geq 0$. If $d([X], [Y])=0$, $P(X=n)=P(Y=n)\quad \forall n\in \mathbb{Z}$, so $[X]=[Y]$. On the other hand, if $[X]=[Y]$, $d([X], [Y])=0$. Thus, $d$ is positive definite. Clearly, $d$ is symmetric and reflexive. If $[X], [Y],[Z]\in \tilde{Ł}$, then
$$
\begin{align}
d([X], [Y]) & =\sum_{n\in \mathbb{Z}}|P(X=n)-P(Y=n)| \\
 & \leq\sum_{n\in \mathbb{Z}}|P(X=n)-P(Z=n)|+\sum_{n\in \mathbb{Z}}|P(Z=n)-P(Y=n)| \\
 & =d([X], [Z])+d([Z], [Y]).
\end{align}
$$
The triangle inequality holds. Therefore, $d$ is a metric on $\tilde{Ł}$. 

Fix $[X]$, $[Y]$, and their respective representatives $X$ and $Y$. Let $\boldsymbol{\alpha}\subset \mathbb{Z}$ be the set of all integers $a$ for which $P(X=a)\geq P(Y=a)$. Then,
$$
\begin{align}
0  & =P(X\in \mathbb{Z})-P(Y\in \mathbb{Z}) \\
& =\sum_{n\in \mathbb{Z}}P(X=n)-P(Y=n) \\
 & =\sum_{n\in \boldsymbol{\alpha}}P(X=n)-P(Y=n)+\sum_{n\in \boldsymbol{\alpha}^{c}}P(X=n)-P(Y=n).
\end{align}
$$
Next,
$$
\begin{align}
d([X], [Y]) & =\sum_{n\in \mathbb{Z}}\left| P(X=n) -P(Y=n)\right|  \\
 & =\sum_{n\in \boldsymbol{\alpha}}P(X=n)-P(Y=n)-\sum_{n\in \boldsymbol{\alpha}^{c}}P(X=n)-P(Y=n) \\
 & =2\sum_{n\in \boldsymbol{\alpha}}P(X=n)-P(Y=n).
\end{align}
$$
Now, for some $A\subset \mathbb{Z}$, 
$$
\begin{align}
 & |P(X\in A)-P(Y\in A)| \\
 & =\left| \sum_{n\in A\cap\boldsymbol{\alpha}}P(X=n)-P(Y=n) + \sum_{n\in A\cap\boldsymbol{\alpha}^{c}}P(X=n)-P(Y=n)\right|  \\
 & \leq \frac{d([X], [Y])}{2}.
\end{align}
$$
Thus, $d([X], [Y])/2$ is an upper bound for $|P(X\in A)-P(Y\in A)|$. Next, we will show that no real number less than $d([X], [Y])/2$ is an upper bound. Let $\epsilon> 0$. Let $\boldsymbol{\alpha}^{c}_{1}, \boldsymbol{\alpha}^{c}_{2}, \dots$ be an enumeration of the elements in $\boldsymbol{\alpha}^{c}$. 
$$
\sum_{n=1}^{\infty}P(X=\boldsymbol{\alpha}^{c}_{n})-P(Y=\boldsymbol{\alpha}^{c}_{n})=-\frac{d([X], [Y])}{2}.
$$
Each term in the above series is negative. Further, the limit as $n\to \infty$ of individual terms of a convergent series must be zero. Thus, there exists $n$ such that $|P(X=\boldsymbol{\alpha}^{c}_{n})-P(Y=\mathcal{\alpha}^{c}_{n})|<\epsilon$. Now, let $A$ be $\boldsymbol{\alpha}\cup \{ n \}$. Then,
$$
\begin{align}
|P(X\in A)-P(Y\in A)|> \left| \frac{d([X], [Y])}{2}  - \epsilon\right| 
\end{align}
$$
Thus, $d([X], [Y])/2$ is the supremum of $|P(X\in A)-P(Y\in A)|$, $A\subseteq \mathbb{Z}$. 

---

# 6

Let $X\sim\text{Pois}(\lambda)$. Then, $f_{X}(x)$ is given by $\frac{\lambda^{x}}{x!}e^{-\lambda}$ for $x=0, 1, 2, \dots$. Consider the ratio $\frac{f_{X}(x)}{f_{X}(x-1)}=\frac{\lambda}{x}$. This ratio decreases with $x$, and $f_{X}(x)> f_{X}(x-1)$ only if the ratio is greater than 1. We can therefore conclude that
$$
\dots<f_{X}(\lfloor \lambda \rfloor -1)< f_{X}(\lfloor \lambda \rfloor )> f_{X}(\lfloor \lambda \rfloor +1)>\dots,
$$
that is, the most probable value is $\lfloor \lambda \rfloor$. 


---

# 7

## Part a

The number of ways to obtain a sum of $k$ with $n$ throws is given by
$$
\sum_{i=0}^{n}(-1)^{i}\binom{n}{i}\binom{k-6i-1}{n-1} 
$$
The total number of ways of obtaining sum $k$ is given by
$$
\sum_{n=1}^{k}\sum_{i=0}^{n}(-1)^{i}\binom{n}{i}\binom{k-6i-1}{n-1} 
$$
The total probability of obtaining sum $k$ is given by
$$
\sum_{n=1}^{k}\left( \frac{1}{12} \right)^{n}\sum_{i=0}^{n}(-1)^{i}\binom{n}{i}\binom{k-6i-1}{n-1} 
$$
Thus, 
$$
\begin{align}
P(N=2\ | \ S=4) & = \frac{\displaystyle\left( \frac{1}{12} \right)^{2}\sum_{i=0}^{2}(-1)^{i}\binom{2}{i}\binom{4-6i-1}{2-1} }{\displaystyle\sum_{n=1}^{4}\left( \frac{1}{12} \right)^{n}\sum_{i=0}^{n}(-1)^{i}\binom{n}{i}\binom{4-6i-1}{n-1} } \\
 & =0.196631770596268 \\
\end{align}
$$

## Part b

Clearly, $P(N\text{ is even})=\frac{1}{2}$. Also, 

$$
\begin{align}
P(\{S=4\}\cap \{ N\text{ is even } \}) & = \sum_{n\in \{ 2, 4 \}}\left( \frac{1}{12} \right) ^{n}\sum_{i=0}^{n}(-1)^{i}\binom{n}{i}\binom{4-6i-1}{n-1}  \\
 & =0.0208815586419753
\end{align}
$$
Thus, $P(S=4\ | \ N\text{ is even})=0.0417631172839506$.

## Part c

At this point I'll just ditch the formula. If $A$ is the given event, 

$$
\begin{align}
P(A) & =\frac{P(1, 3)}{P(1, 3)+P(1, 1, 1)+P(1, 2, 1)+P(1, 1, 1, 1)} \\
 & = \frac{\left( \frac{1}{12} \right)^{2}}{\left( \frac{1}{12} \right)^{2}+2\left( \frac{1}{12} \right)^{3}+\left( \frac{1}{12} \right)^{4}} \\
 & =0.852071005917
\end{align}
$$

## Part d

Let $X$ denote the largest number shown by a die. Then, 
$$
p(X\leq r)=\sum_{n=1}^{\infty}\left( \frac{r}{12} \right)^{n}=\frac{r}{12-r}
$$
It follows that
$$
P(X=r)=P(X\leq r)-P(X\leq r-1)=\frac{12}{(12-r)(13-r)}.
$$


---
# 8

## Part i

$f_{X}(k)=f_{Y}(k)=p(1-p)^{k-1}$.
$$
\begin{align}
P(Y> X) & =\sum_{x=1}^{\infty}P(Y> x\ | \  X=x) P(X=x)\\
 & =\sum_{x=1}^{\infty}(1-p)^{x}p(1-p)^{x-1} \\
 & =\frac{p}{1-p}\sum_{x=1}^{\infty} (1-p)^{2x} \\
 & =\frac{{1-p}}{2-p}
\end{align}
$$

## Part ii

$$
\begin{align}
P(X=Y) & =\sum_{x=1}^{\infty} P(Y=x\ | \  X=x)P(X=x) \\
 & =p^{2}\sum_{x=1}^{\infty} (1-p)^{2x-2} \\
 & = \frac{p}{2-p}
\end{align}
$$

## Part iii

$$
\begin{align}
P(X\geq kY) & =\sum_{y=1}^{\infty} P(X\geq ky\ | \  Y=y)P(Y=y) \\
 & = \sum_{y=1}^{\infty} (1-p)^{ky-1}p(1-p)^{y-1} \\
 & = p\sum_{y=1}^{\infty} (1-p)^{ky+y-2} \\
 & = \frac{p(1-p)^{k-1}}{1-(1-p)^{k+1}}
\end{align}
$$
## Part iv

$$
\begin{align}
P(X\text{ divides }Y) &  =\sum_{x=1}^{\infty}P(x\text{ divides }Y\ | \  X=x)P(X=x) \\
 & = \sum_{x=1}^{\infty} P(Y=kx, k\in \mathbb{N})p(1-p)^{x-1} \\
 & =p^{2}\sum_{x=1}^{\infty} \left( \sum_{k\geq 1} (1-p)^{kx-1} \right)(1-p)^{x-1} \\
 & =p^{2}\sum_{x=1}^{\infty} \frac{(1-p)^{2x-2}}{1-(1-p)^{x}}
\end{align}
$$

## Part v

Let $m$ be the smallest integer such that $rm$ is an integer. Then,
$$
\begin{align}
P(X=rY) & =\sum_{y=1}^{\infty}P(X=ry\ | \  Y=y)P(Y=y) \\
 & =\sum_{y=1}^{\infty} P(X=mry\ | \  Y=my)P(Y=my) \\
 & =\frac{p^{2}}{(1-p)^{2}}\sum_{y=1}^{\infty} (1-p)^{my(r+1)} \\
 & =\frac{p^{2}(1-p)^{mr+m-2}}{1-(1-p)^{mr+m}}.
\end{align}
$$

---
# 9

The probability that the elevator does not stop any any level less than or equal to $k$ is given by $\left( \frac{{f-k}}{k}\right)^{N}$. Thus, the probability that the elevator will stop for the first time at level $k$ is given by
$$
f_{X}(k)= \left( \frac{f-k+1}{f} \right)^{N}-\left( \frac{f-k}{f} \right)^{N}.
$$
The expected value of $X$ will be
$$
\begin{align}
E(X) & =\sum_{k=1}^{f} k~f_{X}(k) \\
 & = \left( \frac{f}{f} \right)^{N}+\left( \frac{f-1}{f} \right)^{N}+\dots+\left( \frac{1}{f} \right)^{N} \\
 & =\sum_{k=1}^{f} \left( \frac{k}{f} \right)^{N}.
\end{align}
$$


---
# 10

Find the marginal mass functions of the multinomial distribution.

The multinomial distribution is given by

$$
f(x_{1}, x_{2}, \dots, x_{r})=\begin{dcases}
\frac{n!}{(x_{1}!)(x_{2}!)\dots(x_{r}!)}p_{1}^{x_{1}}p_{2}^{x_{2}}\dots p_{r}^{x_{r}}  & x_{i}\in \mathbb{Z}_{\geq 0}, \sum x_{i}=n \\
0 & \text{otherwise.}
\end{dcases}
$$
The marginal mass functions $f_{i}(x_{i})$ are given by
$$
\begin{align}
f_{i}(x_{i}) & = \frac{p_{i}^{x_{i}}n!}{x_{i}!(n-x_{i})!}\left( \sum_{\sum x_{j}=n-x_{i},~ j\ne i} \frac{(n-x_{i})!}{\prod_{j\ne i} x_{j}!}\prod_{j\ne i} p_{j}^{x_{j}}\right) \\
 & = p_{i}^{x_{i}}\binom{n}{x_{i}}\left( \sum_{j=1}^{r} p_{j}-p_{i} \right)^{n-x_{i}} \\
 & =\binom{n}{x_{i}}p_{i}^{x_{i}}(1-p_{i})^{n-x_{i}}.
\end{align}
$$


---
# 11

$f_{X}(x)=p_{1}(1-p_{1})^{x}$ and $f_{Y}(x)=p_{2}(1-p_{2})^{x}$, for $x\in \mathbb{Z}_{\geq 0}$. The probability generating functions for $X$ and $Y$ are $\Phi_{X}(t)=\frac{p_{1}}{1-(1-p_{1})t}$ and $\Phi_{Y}(t)=\frac{p_{2}}{1-(1-p_{2})t}$. Since $X$ and $Y$ are independent, $\Phi_{X+Y}=\Phi_{X}\Phi_{Y}$. 
$$
\begin{align}
\Phi_{X}\Phi_{Y}(t) & =  \frac{p_{1}p_{2}}{(1-(1-p_{1})t)(1-(1-p_{2})t)}  \\
 & =p_{1}p_{2}\sum_{k=0}^{\infty}\left( \sum_{i=0}^{k} (1-p_{1})^{i}(1-p_{2})^{k-i} \right) t^{k} \\
 & = p_{1}p_{2}\sum_{k=0}^{\infty} \left( (1-p_{2})^{k}\left( \frac{{1-\left( \frac{1-p_{1}}{1-p_{2}} \right)^{k+1}}}{1-\left( \frac{1-p_{1}}{1-p_{2}} \right)} \right) \right) t^{k} \\
 & =\sum_{k=0}^{\infty} \left( \frac{p_{1}p_{2}}{p_{1}-p_{2}} \right)[(1-p_{2})^{k+1}-(1-p_{1})^{k+1}]t^{k}.
\end{align}
$$
Thus,
$$
f_{X+Y}(k)= \left( \frac{p_{1}p_{2}}{p_{1}-p_{2}} \right)[(1-p_{2})^{k+1}-(1-p_{1})^{k+1}].
$$


---
# 12

Let $f$ be the PMF of $N$. The support of $Ng(N)$ is $\{ k~g(k) \}_{k=0}^{\infty}$, and the PMF $\tilde{f}$ of $Ng(N)$ satisfies $\tilde{f}(k~g(k))=f(k)$. Thus,
$$
\begin{align}
E(Ng(N)) & =\sum_{k=0}^{\infty}k~g(k) f(k) \\
 & =\sum_{k=0}^{\infty} k~g(k) \frac{\lambda^{k}}{k!}e^{-\lambda} \\
 & =\lambda\sum_{k=1}^{\infty}  g(k) \frac{\lambda^{k-1}}{(k-1)!}e^{-\lambda} \\
 & =\lambda \sum_{k=0}^{\infty} g(k+1) \frac{\lambda^{k}}{k!}e^{-\lambda} \\
 & =\lambda E(g(N+1)).
\end{align}
$$

---
# 13

$$
\begin{align}
\Phi_{X}(t) & =\sum_{k=1}^{\infty} \frac{1}{k(k+1)}t^{k} \\ \\
 & =\sum_{k=1}^{\infty} \frac{1}{k}t^{k}-\sum_{k=1}^{\infty} \frac{1}{k+1}t^{k}\\ \\
 & =-\ln(1-t)+\frac{1}{t}\left( -\sum_{k=2}^{\infty} \frac{1}{k}t^{k} \right)   \\
 & =-\ln(1-t)+\frac{1}{t}(\ln(1-t)+t) \\
 & =\ln(1-t)\left( \frac{1}{t}-1 \right) +1
\end{align}
$$

---
# 14

The generating function of $f$ is
$$
\begin{align}
\phi(t) & =\left( \frac{1-p}{1+p} \right)\left( \sum_{m\geq 0}(pt)^{m}+\sum_{m\leq 0}\left( \frac{t}{p} \right)^{m} -1\right) \\
 & =\left( \frac{1-p}{1+p} \right)\left( \frac{1}{1-pt}+\frac{t}{t-p}-1\right) 
\end{align} 
$$
$$
\begin{align}
\phi'(t) & = \left( \frac{1-p}{1+p} \right)\left(\frac{p}{\left(1 - pt\right)^{2}} + \frac{1}{t - p} - \frac{t}{\left(t - p\right)^{2}}\right) \\
\phi''(t) & =-\frac{2 \left(p - 1\right)^{2} p \left(pt^{3} - 3pt + p^{2} + 1\right)}{\left(t - p\right)^{3} \left(pt - 1\right)^{3}}
\end{align}
$$
Now, $EX=\phi'(1)=0$. $\text{Var}(X)=\phi''(1)+\phi'(1)-\phi'(1)^{2}=\phi''(1)=\frac{2p}{(p-1)^{2}}$. 