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
>**Proof**
>
>FTSOC, assume not. Let $(a_{n}):=(\sup \{ p_{n}, p_{n+1}, \dots \})$ and let $(a_{n})\to A$. Let $\sup \{ x\ |\ p_{n_{k}}\to x \}$ be $B$. We have two cases:
>
>**Case 1:** $\lim_{ n \to \infty } (\sup \{ p_{n}, p_{n+1}, \dots \}) < \sup \{ x\ |\ p_{n_{k}}\to x \}$.
>
>Let $\epsilon=\frac{{B-A}}{2}$. There exists $N$ such that for all $n\ge N$, $|a_{n}-A|<\epsilon$. Thus, for all $n\ge N$, $p_{n}\le A+\epsilon$. However, this implies no subsequence of $(p_{n})$ can converge to any point greater than $A+\epsilon$. Thus, $A+\epsilon$ is an upper bound for $\{ x\ |\ p_{n_{k}}\to x \}$. This contradicts our hypothesis that $B$ is the supremum of all subsequential limits.
>
>**Case 2:** $\lim_{ n \to \infty } (\sup \{ p_{n}, p_{n+1}, \dots \}) > \sup \{ x\ |\ p_{n_{k}}\to x \}$.
>
>Let $\epsilon>0$. Note that $(a_{n})$ is a monotone decreasing sequence. Since $(a_{n})\to A$, there exists $a_{k}$ such that $A<a_{k}<A+\epsilon$, and since $a_{k}$ is the supremum of the tail $\{ p_{n}, p_{n+1}, \dots \}$, there exists $p_{i}$, $i\geq k$ such that $A<p_{i}<a_{k}<A+\epsilon$. Thus, we can construct a subsequence $(p_{n_{k}})$ of $(p_{n})$ which converges to $A$. However, this contradicts our hypothesis that $B$ is an upper bound of all subsequential limits. ❏

---
## Some observations and theorems

These will be using Kulkarni's definitions.

- $\lim\sup_{ n \to \infty }p_{n} = \infty \iff (p_{n})\text{ is not bounded above.}$
- Note that $s_{n}=\sup \{ p_{n},p_{n+1}, \dots  \}$ form a monotone decreasing sequence. Thus, $\limsup_{ n \to \infty }p_{n}=\lim_{ n \to \infty } s_{n}=\inf \{s_{n}\ |\ n\in \mathbb{N}  \}$. 
- Similarly, $i_{n}=\inf \{ p_{n}, p_{n+1}, \dots \}$ form a monotone increasing sequence. Thus, $\liminf_{ n \to \infty }p_{n}=\lim_{ n \to \infty } i_{n}=\sup \{i_{n}\ |\ n\in \mathbb{N}  \}$. 
- Quick exercise: show that $i_{k}\le s_{k'}$ for all $k, k'\in \mathbb{N}$. 
- Thus, we have  $i_{1}\le i_{2}\le i_{3}\le \dots\le s_{3}\le s_{2}\le s_{1}$. 
- Note that $\lim\sup_{ n \to \infty }p_{n}=\infty$ means that every $s_{i}$ is $\infty$. 

>[!Theorem]
>Let $(p_{n})$ be a sequence. Then, $\liminf_{ n \to \infty } (p_{n})\le \limsup_{ n \to \infty } (p_{n})$.

>**Proof**
>Pick any $s_{k}$. $i_{m}\le s_{k}$ for all $m$. Thus, $s_{k}$ is an upper bound for the set of all infima. Thus, $\lim\inf_{ n \to \infty }p_{n}=\sup \{ i_{m} \}\le s_{k}$. Since $s_{k}$ was arbitrary, the preceding statement is valid for all $k$. Thus, $\lim\inf_{ n \to \infty }p_{n}$ is a lower bound for the set of all suprema. Thus, $\lim\inf_{ n \to \infty }\le \inf \{ s_{k} \}=\lim\sup_{ n \to \infty }p_{n}$. ❏

>[!Theorem]
>If $s_{n}\le t_{n}$ for $n\ge N$, where $N$ is fixed, then
>$$
>\begin{align*}
>\liminf_{ n \to \infty } s_{n} & \le \liminf_{ n \to \infty } t_{n}, \\
>\limsup _{ n \to \infty } s_{n} & \le \limsup _{ n \to \infty } t_{n}.
>\end{align*}
>$$


### Limsup = Liminf iff the sequence converges

>[!Theorem]
>$$
>\lim_{ n \to \infty } p_{n} = p \iff (\limsup_{ n \to \infty } p_{n} = p) \text{ and } (\liminf_{ n \to \infty }p_{n} = p )
>$$

>**Proof of $\implies$**
>Suppose $(p_{n})\to p \in \mathbb{R}$. Let $\epsilon>0$. There exists an $N$ such that for all $n>N$, $|p_{n}-p|<\epsilon$, i.e, $\{ p_{n}, p_{n+1}, \dots \}\subset(p-\epsilon, p+\epsilon)$. Thus, $s_{n}$ and and $i_{n}$ must lie in $[p-\epsilon, p+\epsilon]$ which implies $\inf s_{n}$ and $\sup i_{n}$ must also lie in $[p-\epsilon, p+\epsilon]$. If we consider a sequence of $\epsilon$'s $(\epsilon_{n})\to 0$, it follows from the [[The real field#Nested interval property|nested interval property]] that $\inf s_{n}=\sup i_{n}=p$. ❏
>
>Proof of $\Longleftarrow$
>$\lim\sup$ = $\lim\inf$ = $p$, i.e, $(s_{n})\to p$ (monotonically from above), and $(i_{n})\to p$ (monotonically from below). Let $\epsilon>0$. Find $N$ such that for all $n>N$, we have $0\le s_{n}-p<\epsilon$ and $0\le p-i_{n}<\epsilon$. Now, 
>$$
>\begin{align*}
>0\le s_{n}-p<\epsilon  & \implies p_{n}-p <\epsilon \\
>0\le p-i_{n}<\epsilon  & \implies p-p_{n}<\epsilon  \\
>\implies |p-p_{n}|<\epsilon.
>\end{align*}
>$$
>❏




%% 
>[!Theorem]
>Let $(s_{n})$ be a sequence of real numbers. Let $E$ and $s^{*}$ have the same meaning as in Rudin's definition above. Then $s^{*}$ has the following properties:
>- $s^{*}\in E$
>- If $x>s^{*}$, there is an integer $N$ such that $n\ge N$ implies $s_{n}<x$. 
>
>Moreover, $s^{*}$ is the only number with these two properties.

Of course, an analogous result is true for $s_{*}$.
 %%


