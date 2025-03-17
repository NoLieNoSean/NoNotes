---
tags:
  - PROB
  - Lecture
  - Processed
date: 2025-01-27
time: 15:30
---
## More examples of probability mass functions

### Random walks

$\Omega=\{ 1, -1 \}^{n}$. Let the probability of getting a 1 in a single trial be $p$.
$\overline{\omega}=(\omega_{1}, \omega_{2}, \dots, \omega_{n})\in \Omega$. 
$X(\overline{\omega})=\sum \omega_{i}$. 

Now, $X(\overline{\omega})=m$ iff the number of ones in $\overline{\omega}$ is $\frac{{n+m}}{2}$. So, 
$$
f(m)=P(X=m)=\begin{cases}
\binom{n}{\frac{{n+m}}{2}}p^{k}(1-p)^{n-k} & -n\leq m\leq n, \frac{{m+n}}{2} \text{ is even} \\
0 & \text{otherwise.} 
\end{cases}
$$

### Hypergeometric distribution

You have a collection $N$ objects, $n$ of which are of type 1, and $N-n$ of which are of type 2. You randomly pick $k$ objects from the collection (these are the elementary events). Let the random variable $X$ map $\omega$ to the number of objects of type 1 that were picked in $\omega$. The probability mass function of $X$ is called a hypergeometric distribution:
$$
f(r)=P(X=r)=\begin{dcases}
\frac{{\binom{n}{r}\binom{N-n}{k-r}}}{\binom{N}{k}} & x=0, 1, \dots, n \\
0 & \text{otherwise.}
\end{dcases}
$$
### Geometric distribution

Consider the space $\Omega=\{ 0, 1 \}^{\mathbb{N}}\setminus \{ 0 \}^{\mathbb{N}}$. Let $X$ be a random variable which denotes the iteration where the first 1 is obtained, with the iterations indexed starting from 0. Then, 
$$
f(x)=P(X=x)=\begin{cases}
p(1-p)^{x} & x=0, 1, 2, \dots \\
0 & \text{otherwise.}
\end{cases}
$$
You can also see that $P(X\leq n)=\sum_{i=0}^{n}f(i)=1-(1-p)^{n+1}$ and $P(X>n)=1-P(X\leq n)=(1-p)^{n+1}$.  
Additionally, $P(X>m+n/X>n)=P(X>m)$. 

### Negative binomial distribution

Imagine a sequence of independent Bernoulli trials: each trial has two potential outcomes called "success" and "failure." In each trial the probability of success is $p$ and of failure is $1-p$. We observe this sequence until $r$ successes occur. Then the number of observed failures, $X$, follows the negative binomial (or Pascal) distribution with parameters $r$ and $p$:
$$
f(x)=\begin{dcases}
\binom{x+r-1}{x}(1-p)^{x}p^{r} & x= 0, 1, 2, \dots\\
0& \text{otherwise.}\\
\end{dcases}

$$
Can also be written as
$$
f(x)=(-1)^{x}\binom{-r}{x}(1-p)^{x}p^{r}.
$$
We know from Taylor's theorem that ($-1<t<1$)
$$
\begin{align}
(1-t)^{-\alpha} & =\sum_{i=0}^{\infty}\binom{\alpha+i-1}{i}t^{i}  \\
	 & =\sum_{i=0}^{\infty} (-1)^{i}\binom{-\alpha}{i}t^{i}
\end{align}
$$
If we plug in $t=1-p$ and $\alpha=r$ we get
$$
\begin{align}
(p)^{-r  } & =\sum_{i=0}^{\infty} (-1)^{i}\binom{-r}{i}(1-p)^{i} \\
 &=p^{r}\sum_{i=o}^{\infty} f(i). 
\end{align}
$$
Thus, $\sum_{i=0}^{\infty}f(i)=1$. The other property being easily verified, we can conclude that $f$ is a legitimate probability mass function. 

Observe that the geometric density with parameter $p$ is a negative binomial density with parameters $r=1$ and $p$.

$f$ is a probability mass distribution even when $r$ is any positive real number.

### Poisson distribution

Let $\lambda>0$. 
$$
f(x)=\begin{dcases}
\frac{\lambda^{x}}{x!}e^{ -\lambda } & x=0, 1, 2, \dots \\
0 & \text{otherwise.}
\end{dcases}
$$
Note that
$$
\begin{align}
\sum_{i=0}^{\infty} f(i)=e^{-\lambda}\sum_{i=0}^{\infty} \frac{\lambda^{i}}{i!}=1 .
\end{align}
$$
