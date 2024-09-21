---
tags:
  - ANA1
---
## Motivation
If a [[Sequences and convergence#Sequences|sequence]] in $\mathbb{R}$ fails to [[Sequences and convergence#Definition of convergence in $ mathbb{R}$ and $X$|converge]], we would like to be able to measure the extent of the failure. To do so, we will define *LimSup* and *LimInf*  in the [[The extended real number system|extended real numbers]] (allowing them to possibly be infinity) for every sequence of real numbers. These will always exist. 

---
## Preliminaries

To allow limits to be potentially infinite, we must define what it means to converge to $±\infty$. 

>[!Definition]
>We write $P_{n}\to +\infty$ if $\forall M\in \mathbb{R}$ there exists an integer $N$ such that $\forall n\geq N, p_{n}>M$. 

Ditto with a swap for $-\infty$.

It should be noted that we now use the symbol $\to$ for certain types of divergent sequences, as well as for convergent sequences, but that the definitions of convergence and of limit, given [[Sequences and convergence#Definition of convergence in $ mathbb{R}$ and $X$|here]], are unchanged.

---
## Definition 

### À la Kulkarni

>[!Definition]
>Given a sequence $(p_{n})$ in $\mathbb{R}$, define
>$$
>\limsup_{ n \to \infty } p_{n} := \lim_{ n \to \infty } (\sup\underbrace{ \{{p_{n}, p_{n+1}, \dots} \}}_{ \text{tail of a given sequence} }),
>$$
>$$
>\liminf_{ n \to \infty } p_{n} := \lim_{ n \to \infty } (\inf\underbrace{ \{{p_{n}, p_{n+1}, \dots} \}}_{ \text{tail of a given sequence} }).
>$$
>Both values may be infinite.

### À la Rudin

>[!Definition]
>Let $(s_{n})$ be a sequence of real numbers. Let $E$ be the set of numbers $x$ (in the extended real number system) such that $s_{n_{k}}\to x$ for some subsequence $(s_{n_{k}})$. This set $E$ contains all [[Subsequences#Definition|subsequential limits]] of $(s_{n})$, plus possibly $+\infty$ and $-\infty$. Define 
>$$
>\begin{align*}
>s^{*}&:=\sup E, \\
>s_{*}&:=\inf E.
>\end{align*} 
>$$
>The numbers $s^{*}$ and $s_{*}$ are called the *upper* and *lower* limits of $(s_{n})$. We use the notation
>$$
>\begin{align*}
>\limsup _{ n \to \infty } s_{n}:=s^{*}, \\
>\liminf _{ n \to \infty } s_{n}:=s_{*}.
>\end{align*}
>$$

### Reconciling the two

We have to show that, for a sequence $(p_{n})$,
$$
\lim_{ n \to \infty } (\sup \{ p_{n}, p_{n+1}, \dots \}) = \sup \{ x\ |\ p_{n_{k}}\to x \}
$$

---

## Theorems

>[!Theorem]
>Let $(s_{n})$ be a sequence of real numbers. Let $E$ and $s^{*}$ have the same meaning as in Rudin's definition above. Then $s^{*}$ has the following properties:
>- $s^{*}\in E$
>- If $x>s^{*}$, there is an integer $N$ such that $n\ge N$ implies $s_{n}<x$. 
>
>Moreover, $s^{*}$ is the only number with these two properties.

Of course, an analogous result is true for $s_{*}$. 

>[!Theorem]
>If $s_{n}\le t_{n}$ for $n\ge N$, where $N$ is fixed, then
>$$
>\begin{align*}
>\liminf_{ n \to \infty } s_{n} & \le \liminf_{ n \to \infty } t_{n}, \\
>\limsup _{ n \to \infty } s_{n} & \le \limsup _{ n \to \infty } t_{n}.
>\end{align*}
>$$


## Examples


Now, 
$$
\lim_{ n \to \infty } P_{n} = p \iff (\limsup_{ n \to \infty } P_{n} = p) \text{ and } (\liminf_{ n \to \infty }P_{n} = p )
$$
