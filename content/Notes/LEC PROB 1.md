---
id: "229"
---

## Probability spaces

The *sample space* ($\Omega$) is the set of all possible outcomes of an experiment. An *event* is a subset of $\Omega$. 

A probability space consists of three elements:

1. The sample space, $\Omega$.
2. An *event space*, which is a set of events $\mathcal{F}$ we would like to consider.
3. A probability function $P$ which assigns to each event in $\mathcal{F}$ a probability in $[0, 1]$.

The event space and probability function must satisfy some requirements, as we will see.
### Finite probability space

When $|\Omega|\leq\aleph_{0}$, we can take $\mathcal{F}$ to be the power set of $\Omega$. This will not be possible for continuous probability spaces; more on that in a bit.

Let $\Omega$ be a finite set.
Let $P(\Omega)$ denote the power set of $\Omega$.
Let $\mathbf{P}:P(\Omega)\to[0, 1]$ be a function satisfying $P(\emptyset)=0$, $P(\Omega)=1$, and $P(A_{1}\sqcup A_{2})=P(A_{1})+P(A_{2})$ for disjoint subsets $A_{1}$ and $A_{2}$ of $\Omega$ (This property can be validated by our intuitive understanding of probability, and is called the *additivity* of the probability function).

$(\Omega, P(\Omega), \mathbf{P})$ is called a *finite probability space*. Note that in finite probability spaces, it is possible to assign a probability to the elementary events (the elements of $\Omega$, or singleton events). $\mathbf{P}$ could have been alternatively defined from $\Omega$ to $[0, 1]$ such that $\sum_{\omega\in \Omega}\mathbf{P}(\omega)=1$, and the probability of any event $E$ in $P(\Omega)$ calculated like so: $\sum_{\omega\in E}\mathbf{P}(\omega)$.

Using induction, we can show that $\mathbf{P}\left( \bigsqcup_{i=1}^{n}A_{i} \right)=\sum_{i=1}^{n} \mathbf{P}(A_{i})$ if $A_{i}\cap A_{j}=\emptyset$ if $i\ne j$. 

### Discrete probability space

Let $|\Omega|=\aleph_{0}$.
$\mathbf{P}$ is defined much the same way as in a finite probability space, with the additional restriction that it is *countably additive* (aka $\sigma$-additive): if $\{ A_{n} \}_{n=1}^{\infty}$ is a countable subset of $P(\Omega)$ such that $A_{i}\cap A_{j}=\emptyset$ if $i\ne j$, then $\mathbf{P}\left( \bigsqcup_{i=1}^{\infty}A_{i} \right)=\sum_{i=1}^{\infty}\mathbf{P}(A_{i})$.

$(\Omega, P(\Omega), \mathbf{P})$ is called a *discrete probability space*. It is again possible to assign probabilities to elementary events here, since it is possible for a countably infinite set of real numbers to have a finite sum. For example, if $\Omega=\mathbb{N}$, we can define the probability function from $\Omega$ to $[0, 1]$ by $P(n)=\frac{1}{2^{n}}$.

### Continuous probability space

Let $|\Omega|> \aleph_{0}$.

An example: Let $N_{0}$ be the initial number of atoms in a radioactive sample. The number of atoms that have not decayed at time $t$ is given by $N=N_{0}e^{ -\lambda t }$. So, the probability of an atom decaying in the time interval $t_{1}$ to $t_{2}$ is $e^{ -\lambda t_{1} }-e^{{-\lambda t_{2}} }$. Notice that the probability of an atom decaying at an instant $t$ is $0$, but is non-zero over an interval. 

This tells us that probability is not uncountably additive. In a continuous probability space, we cannot assign a probability to the elementary events and hope to the calculate the probability of all other events by adding up the probabilities of their constituent elementary events. Also, when $\Omega$ is uncountable (in this case, $\Omega$ is the set of all real numbers $[0, \infty)$, representing the time of decay), we cannot assign a probability to every set in the power set of $\Omega$ (this is a result you'll have to just believe for now). 

So what do we take the event space to be?

> [!Definition]
> $A\subset P(\Omega)$ is said to be a *$\sigma$-algebra* if
> - $\Omega\in A$ and $\emptyset\in A$;
> - Whenever a *countable* collection of sets $\{ A_{n} \}_{n=1}^{\infty}$ is in $A$, their union $\bigcup_{n=1}^{\infty}A_{n}$ and intersection $\bigcap_{n=1}^{\infty}A_{n}$ is also in $A$, i.e. $A$ is closed under countable unions and countable intersections;
> - for all $S\in A$, $S^{c}\in A$.

In a *continuous probability space* $(\Omega, \mathcal{F}, \mathbf{P})$, the event space $\mathcal{F}$ is a $\sigma$-algebra, and $\mathbf{P}:\mathcal{F}\to[0, 1]$ is countably additive.

We will mostly be working with finite and discrete probability spaces in this course.

> [!Info]
> When working with finite and discrete probability spaces, the event space is almost always the power set of $\Omega$, since we are able to assign probabilities to the elementary events and all events can be expressed as at most countable unions of elementary events. So, the probability space presentation is usually shortened from $(\Omega, P(\Omega), \mathbf{P})$ to $(\Omega, \mathbf{P})$.

---
## Properties of the probability function

> [!Theorem] The monotone property
> If $A\subseteq B$, then $P(A)\leq P(B)$.

> **Proof**
> $B=(B\cap A)\cup(B\cap A^{c})$. So, $P(B)=P(B\cap A)+P(B\cap A^{c})=P(A)+P(B\cap A^{c})$.

> [!Theorem] Property
> Let $(\Omega, \mathcal{F}, \mathbf{P})$ be a probability space. Let $\{ A_{n} \}_{n=1}^{\infty}$ be a countable collection in $\mathcal{F}$ such that $A_{n}\subseteq A_{m}$ if $n\leq m$. Let $A=\bigcup_{n=1}^{\infty}A_{n}$. Then, $\mathbf{P}(A)=\lim_{ n \to \infty }\mathbf{P}(A_{n})=\sup \mathbf{P}(A_{n})$. 

> **Proof**
> From the previous property, $(P(A_{n}))$ is a monotone increasing sequence. Since it is also bounded, it [[Sequences and convergence#Monotone convergence theorem|must]] converge to its supremum, i.e, $\lim_{ n \to \infty }\mathbf{P}(A_{n})=\sup \mathbf{P}(A_{n})$. 
> Now, define $B_{1}=A_{1}$,  $B_{n}=A_{n}\setminus A_{n-1}=A_{n}\cap A_{n-1}^{c}$ for $n>1$. Note that the collection of all $B_{n}$s is mutually disjoint. Also note that $A_{n}=\bigsqcup_{i=1}^{n}B_{i}$. So, 
> $$
> P(A)=P\left( \bigsqcup_{n=1}^{\infty}B_{n} \right)=\sum_{n=1}^{\infty} P(B_{n})=\lim_{ n \to \infty } P(A_{n}).
> $$

Use complements to obtain the dual property: Let $\{ B_{n} \}_{n=1}^{\infty}$ be a countable collection in $\mathcal{F}$ such that $B_{n}\supseteq B_{m}$ if $n\leq m$. Let $B=\bigcap_{n=1}^{\infty}B_{n}$. Then, $\mathbf{P}(B)=\lim_{ n \to \infty }\mathbf{P}(B_{n})=\inf \mathbf{P}(B_{n})$. 