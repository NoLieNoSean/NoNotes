---
tags:
  - PROB
  - Lecture
  - Processed
date: 2025-01-21
time: 17:00
---
## Independent events

We say two events are independent if $P(A\cap B)=P(A)P(B)$.
Events $A_{1}, \dots, A_{n}$ are said to be independent if $P(A_{1}\cap A_{2}\cap\dots \cap A_{n})=P(A_{1})P(A_{2})\dots P(A_{n})$ and any subcollection of $\{ A_{i} \}$ containing at least two but fewer than $n$ events to be mutually independent. 

Note that if $A_{1}, \dots, A_{n}$ are pairwise independent, they need not be independent as a collection. For example, let $\Omega=\{ a, b, c, d \}$ and let the probability function assign a probability of $\frac{1}{4}$ for each element in $\Omega$. Consider the events $A_{1}=\{ b, c \}$, $A_{2}=\{ b, d \}$, and $A_{3}=\{ c, d \}$. $P(A_{i})=\frac{1}{2}$, $P(A_{i}\cap A_{j})=\frac{1}{4}$. Thus, the $A_{i}$s are pairwise independent. But, $P(A\cap B\cap C)=0$. 

The notion of independence is frequently used to construct probability spaces corresponding to repetitions of the same experiment, where the outcome of each iteration of the experiment is not influenced by the results of the other iterations. Let $S_{i}=(\Omega_{i}, P_{i})$ be a discrete or finite probability space modeling the $i$th iteration of the experiment. The probability space for $n$ iterations of the experiment can be constructed like so: $S=(\Omega_{1}\times \Omega_{2}\times\dots \times \Omega_{n}, P)$, where $P$ is defined on the elementary events like so: $P(\{ (\omega_{1}, \omega_{2}, \dots, \omega_{n}) \})=\prod_{i=1}^{n}P_{i}(\omega_{i})$ (it is easy to verify that this definition satisfies the [[PROB_L1#Discrete probability space|properties]] of a probability measure). Note that the event $C_{i}\subset \Omega_{i}$ occurring in the $i$th iteration would correspond to the event $\Omega_{1}\times \dots \times C_{i}\times\dots \times \Omega_{n}$ in the new probability space. As we would expect, this construction makes events that belong entirely to different iterations independent. For example, an event occurring in the 1st iteration would be independent of another event occurring in the second iteration. 

For example, let the experiment we wish to repeat be a coin toss. The probability space modeling a single coin toss is $\left( \{ 0, 1 \}, \left\{  (\{  \}, 0),\left( \{ 0 \}, 1-p \right), \left( \{ 1 \}, p \right) , (\{ 0, 1 \}, 1) \right\} \right)$. The probability space modeling $n$ iterations of the experiment would have a sample space of $n$-tuples consisting of $0$s and $1$s. The probability of an elementary event would be computed like so:
$$
P( (0, 1, 1, 0, 1))=(1-p)(p)(p)(1-p)(p).
$$
Going a little further, It is evident that all elementary events which produce the same total number of $1$'s have the same probability. Let's associate with every elementary event in $S$ a number $X$ which counts the number of $1$s that appear in the event. $X$ is what is called a *discrete random variable*. One can say that the probability of getting $k$ $1$s is
$$
P(X=k)=\binom{n}{k}p^{k}(1-p)^{n-k}.
$$

---

## Discrete random variables

> [!Definition]
> A *discrete real valued random variable* $X$ on a probability space $(\Omega, \mathcal{F}, P)$ is a function $X:\Omega\to S\subset \mathbb{R}$, $|S|\leq\aleph_{0}$ such that $\{ \omega\ | \ X(\omega)=x_{i} \}\in \mathcal{F}$ for all $i\in \mathbb{R}$.

> [!Important]
> All random variables/vectors we will deal with before the midterm are going to be **discrete** ones.

$\{ \omega\ | \ X(\omega)=x_{i} \}$ is usually shortened to $(X=x_{i})$. In the previous example, $(X=3)$ would be the event corresponding to getting $3$ ones.

> [!Definition]
> The real valued function $f:\mathbb{R}\to[0, 1]$ defined by $f(x)=P(X=x)$ is called the *discrete density function* or *discrete mass function* of $X$. A number $x$ is called a possible value of $X$ if $f(x)>0$.

Properties of the probability mass function that should be obvious:
- $f(x)\geq 0$ for all $x\in \mathbb{R}$, and $f(x)>0$ for at most countably many $x\in \mathbb{R}$.
- $\sum_{x\in \mathbb{R}}f(x)=1$. 

Also, for any function $f:\mathbb{R}\to[0, 1]$ satisfying the above properties, there exists a probability space and a random variable $X$ with mass function $f$ (take the trivial example to show its existence).

### Binomial distribution

Consider $n$ independent repetitions of a simple success-failure experiment, like the coin tossing one discussed above. Let $S_{n}$ denote the number of successes in $n$ trials. Then, $S_{n}$ is a random variable that can only assume the values $0, 1, \dots, n$. The probability density for such an experiment is called the binomial density.
$$
f(x)=\begin{cases}
\binom{n}{x}p^{x}(1-p)^{x} & x\in \{ 0, 1, \dots, n \} \\
0 & \text{otherwise.} 
\end{cases}
$$
