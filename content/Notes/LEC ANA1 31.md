---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-30
time: 14:08
id: "153"
---
![[1730581827131.jpg]]

## Prologue

> [!Definition]
> We say $\sum a_{k}$ *converges absolutely* if $\sum |a_{k}|$ converges.

For example, $\sum a_{k}=1-\frac{1}{2}+\frac{1}{3}-\frac{1}{4}+\dots$ converges (by 3.43), but not absolutely. For a first principle proof, consider even and odd groupings of 2 consecutive terms, and see that they individually converge (recall the [[LEC ANA1 30#Comparison test|comparison test]]):
$$
\begin{align}
s_{2n}= \sum_{k=1}^{2n} a_{k}  & =\left( 1-\frac{1}{2} \right)+\left( \frac{1}{3}-\frac{1}{4} \right)+\dots+\left( \frac{1}{2n-1}-\frac{1}{2n} \right) \\ 
 & \leq \frac{1}{1^{2}} +\frac{1}{3^{2}}+\dots+\frac{1}{(2n-1)^{2}} \leftarrow \text{this converges} \\ \\

s_{2n+1}= \sum_{k=1}^{2n+1} a_{k} & =1 -\left( \frac{1}{2}-\frac{1}{3} \right)-\dots-\left( \frac{1}{2n}-\frac{1}{2n+1} \right) \\
 & \leq 1-\left( \frac{1}{3^{2}}+\frac{1}{5^{2}}+\dots+\frac{1}{(2n+1)^{2}} \right)\leftarrow \text{this converges} 
\end{align}
$$
Let $(s_{2n})\to l_{1}$ and $(s_{2n+1})\to l_{2}$. Now, triangle inequality to the rescue:
$$
\begin{align}
|l_{1}-l_{2}| & =|l_{1}-s_{2n}|+|s_{2n}-s_{2n+1}|+|s_{2n+1}-l_{2}| \\
& =|l_{1}-s_{2n}|+ \frac{1}{2n+1}+|s_{2n+1}-l_{2}|

\end{align}
$$
The RHS can be made less than $\epsilon$ for any $\epsilon$. Thus, $l_{1}=l_{2}\equiv l$. So, the sequence $s_{1}, s_{2}, s_{3}, \dots$ must also converge to $l$ (which is $\ln 2$, btw).

---
## More convergence tests

### Root test

Rudin, 3.33

> [!Theorem]
> Given $\sum a_{n}$, define
> $$
> \alpha\equiv \limsup _{n\to \infty}\sqrt[n]{ |a_{n}| }.
> $$
> Then, 
> 1. if $\alpha<1$, $\sum a_{n}$ converges (in fact, it converges absolutely);
> 2. if $\alpha>1$, $\sum a_{n}$ diverges;
> 3. if $\alpha=1$, the test is inconclusive.

> **Proof**
> If $\alpha<1$, pick $\alpha<\beta<1$. [[LimSup and LimInf#^033332|We know]] that there exists $N$ such that $n\geq N$ implies $\sqrt[n]{ |a_{n}| }<\beta$.
> $$
> \begin{align}
> |a_{n}| & <\beta^{n} \\
> |a_{n+1}| & <\beta^{n+1}  \\
>  & \vdots
> \end{align}
> $$
> So, for $n>N$, $|a_{n}|<\beta^{n}$. We know $\sum \beta^{n}$ converges. Hence, from the comparison test, $\sum |a_{n}|$ converges. This implies $\sum a_{n}$ converges. 
> 
> If $\alpha>1$, we know that for all $N$, there exists $n>N$ such that $\sqrt[n]{ |a_{n }| }>1$, i.e, $|a_{n}|>1$. So, $\lim_{ n \to \infty }|a_{n}|\ne 0$. 
> 
> To prove (3), consider series $\sum \frac{1}{n}$ and $\sum \frac{1}{n^{2}}$. Both have $\alpha=1$ (Rudin, 3.20), but the first diverges, while the second converges. ❏

### Ratio test

Rudin, 3.34

> [!Theorem]
> The series $\sum a_{n}$
> 1. converges if $\limsup| \frac{a_{n+1}}{a_{n}}|<1$,
> 2. diverges if $| \frac{a_{n+1}}{a_{n}}|\geq 1$ for all $n\geq N_{0}$, where $N_{0}$ is some fixed integer.

> **Proof**
> If (1) holds, in the same manner as in the previous proof, we can pick $\limsup| \frac{a_{n+1}}{a_{n}}|<\beta<1$ such that there exists $N$ such that for all $n> N$, $| \frac{a_{n+1}}{a_{n}}|<\beta$. In particular, 
> $$
> \begin{align}
> |a_{N+1}| & <\beta |a_{N}| \\
> |a_{N+2}| & <\beta |a_{N+1}|<\beta^{2} |a_{N}| \\
>  & \vdots \\
> |a_{N+p}| & <\beta^{p}|a_{N}|
> \end{align}
> $$
> So, $|a_{n}|<(|a_{N}|\beta^{-N})\beta^{n}$ for all $n\geq N$. The result follows from the comparison test.
> 
> (2) prevents the limit of individual terms of the sequence from being 0. ❏ 

> [!Warning] 
> Note that $\limsup| \frac{a_{n+1}}{a_{n}}|\geq 1$ for all $n\geq N_{0}$ for some fixed $N_{0}$ does not guarantee divergence. A counter example can be easily constructed by interlacing two appropriate convergent series.

Read examples at 3.35.

---
## Power series

> [!Definition] Definition (Rudin, 3.38)
> The *power series* of a sequence $(c_{n})$ of complex numbers is the series
> $$
> \sum_{n=0}^{\infty}c_{n}z^{n}.
> $$

> [!Theorem] Theorem (Rudin, 3.39)
> Given the power series $\sum c_{n}z^{n}$, define
> $$
> \alpha\equiv\limsup_{ n \to \infty } \sqrt[n]{  |c_{n}|}, \ \ \ \ R\equiv \frac{1}{\alpha}
> $$
> If $\alpha=0$, $R=\infty$ and if $\alpha=\infty$, $R=0$. Then, $\sum c_{n}z^{n}$ converges if $|z|<R$ and diverges if $|z|>R$.

> **Proof**
> Use the root test:
> $$
> \begin{align}
> \limsup_{ n \to \infty } \sqrt[n]{|c_{n}z^{n}| }=|z|\limsup_{ n \to \infty } \sqrt[n]{  |c_{n}|}= \frac{|z|}{R}
> \end{align}
> $$

$R$ is called the *convergence radius* of $\sum c_{n}z^{n}$.

> [!Example]
> 1. The series $\sum n^{n}z^{n}$ has $R=0$, i.e, it converges only when $z=0$.
> 2. The series $\sum \frac{z^{n}}{n^{n}}$ has $R=\infty$, i.e, it converges for every $z$. 
> 3. The above theorem is not easily applicable on the series $\sum \frac{z^{n}}{n!}$, since showing $\lim\sup \sqrt[n]{ 1/n! } = 0$ takes some work. It is much easier to use the ratio test: $\lim\sup |z|/(n+1) =0$, for all $z$. Thus, $R=\infty$. 
> 4. The series $\sum z^{n}$ has $R=1$. If $|z|=1$, the series diverges, since $z^{n}$ does not tend to $0$ as $n\to \infty$.
> 5. Thanks to the limits we proved [[LEC ANA1 12|here]], it follows that $\sum z^{n}/n$ and $\sum z^{n}/n^{2}$ have $R=1$. The former converges for all $z$ with magnitude 1 except $z=1$ (TBP). The latter converges for all $z$ with magnitude 1 by the comparison test, since $|z^{n}/n^{2}|=1/n^{2}$ ($1/n^{2}$ converges since it is a [[LEC ANA1 30#The p-series|p-series]] with $p>1$).
