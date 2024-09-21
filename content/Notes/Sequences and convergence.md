---
tags:
  - ANA1
---


## Sequences

>[!Definition]
>A *sequence* is a function whose domain is $\mathbb{N}$.

Given a function $f:\mathbb{N}\to \mathbb{R}$, $f(n)$ is just the $n$th term of the sequence. 

It is evident that sequences must be *infinitely* long.

---
## Definition of convergence in $\mathbb{R}$ and $X$

>[!Definition]
>A [[Sequences and convergence#Sequences|sequence]] $(a_{n})$ in $\mathbb{R}$ *converges* to $a\in \mathbb{R}$ if, for every positive number $\epsilon$, there exists an $N\in \mathbb{N}$ such that whenever $n\ge N$ it follows that $|a_{n}-a|<\epsilon$.
>
>A sequence $(a_{n})$ in a [[Metric spaces|metric space]] $(X,d)$ *converges* to $a\in X$ if, for every positive number $\epsilon$, there exists an $N\in \mathbb{N}$ such that whenever $n\ge N$ it follows that $d(a_{n}, a)<\epsilon$.
>

Alternatively, $(a_{n})$ converges to $a\in X$ if and only if every neighborhood of $a$ contains $a_{n}$ for all but finitely many $n$.

All these
- $\lim a_{n} = a$
- $\lim_{ n \to \infty } a_{n} = a$
- $a_{n}\to a$

indicate that $(a_{n})$ converges to $a$. 

>[!Definition]
>A sequence that does not converge is said to *diverge*.

>[!Info] Template for a proof that $(x_{n}) \to x$
>- Let $\epsilon>0$ be arbitrary.
>- Demonstrate a choice for $N\in \mathbb{N}$. This is usually done in terms of $\epsilon$. 
>- Show that $N$ works, i.e, for all $n\ge N$, $|x_{n}-x|<\epsilon$.

---

## Uniqueness of a limit

>[!Theorem]
>The limit of a sequence, when it exists, is unique.

>**Proof**
>let $(a_{n})\to a$ and $(a_{n})\to b$. FSTOC, assume $a\ne b$. WLOG, $a<b$. Let $\epsilon< \frac{{b-a}}{2}$. 
>Now, there must exist an $N$ such that for all $n\ge N$, $|a_{n}-a|<\epsilon$. From the triangle inequality, we have
>$$
>\begin{align*}
>|b-a|&\leq|a_{n}-b|+|a_{n}-a| \\
>2\epsilon&<|a_{n}-b|+\epsilon \\
>|a_{n}-b|&>\epsilon, \ \forall n\ge N
>\end{align*}
>$$
>Thus, if $(a_{n})$ converges to $a$, $(a_{n})$ cannot converge to $b$. ❏

Another way to prove this would be to use the fact that there exist $N_{1}, N_{2}\in \mathbb{N}$ such that for any arbitrary $\epsilon>0$ 
$$
\begin{align*}
|a_{n}-a|&< \frac{\epsilon}{2} \ \ \forall n\geq N_{1} \text{ and}\\
|a_{n}-b|&< \frac{\epsilon}{2}\ \ \forall n\ge N_{2}
\end{align*}
$$
Let $N=\max\{ N_{1},N_{2} \}$. From the triangle inequality, we have
$$
\begin{align*}
|a-b| & \le |a-a_{n}|+|a_{n}-b| \\
 & < \frac{\epsilon}{2}+\frac{\epsilon}{2} = \epsilon.
\end{align*}
$$
$|a-b|<\epsilon$ for any positive $\epsilon$. This can only happen if $a=b$. 

This proof can be modified to work for a general metric space when we use [[Metric spaces#Open/Closed ball|open balls]] of diameter $\epsilon$ centered at $a$ and $b$ in place of open intervals of size $\epsilon$. 

---

## Boundedness

>[!Definition]
>A sequence $(x_{n})$ in $\mathbb{R}$ is *bounded* if there exists a number $M>0$ such that $|x_{n}|\le M$ for all $n\in \mathbb{N}$. 
>
>A sequence $(x_{n})$ in a metric space $(X,d)$ is *bounded* if it is contained in a ball.

>[!Theorem]
>Every convergent sequence is bounded.

>**Proof**
>Assume $(x_{n})\to l$. This means that given a particular value of $\epsilon$, we know that there must exist an integer $N\in \mathbb{N}$ such that if $n\ge N$, $x_{n}\in(l-\epsilon, l+\epsilon)$. Thus, the sequence is bounded for $n\ge N$ by $|l|+\epsilon$. We still need to worry (slightly) about the terms in the sequence that come before the $N$th term. Because there are only a finite number of these, we let
>$$
>M=\max\{|x_1|,|x_2|,|x_3|,\ldots,|x_{N-1}|,|l|+\epsilon\}.
>$$
>It follows that $|x_{n}| \le M$ for all $n\in \mathbb{N}$. ❏

This proof can be easily rephrased in terms of open balls to prove the theorem for metric spaces.

---

## Limit theorems
### Algebraic limit theorem

>[!Theorem]
>Let $\lim_{ n \to \infty }a_{n} = a$, and $\lim_{ n \to \infty }b_{n} = b$. Then, 
>1. $\lim_{ n \to \infty }(ca_{n}) = ca$, for all $c\in \mathbb{R}$;
>2. $\lim_{ n \to \infty }(a_{n} + b_{n}) = a+b$;
>3. $\lim_{ n \to \infty }(a_{n}b_{n}) = ab$;
>4. $\lim_{ n \to \infty }\left( \frac{a_{n}}{b_{n}} \right) = \frac{a}{b}$, provided $b\ne 0$.

[[Proof of the Algebraic Limit Theorem|Proof]]
[[Algebraic Limit Theorem in Vector Spaces]]
### Order limit theorem

>[!Theorem]
>Let $\lim_{ n \to \infty }a_{n} = a$, and $\lim_{ n \to \infty }b_{n} = b$. Then, 
>1. If $a_{n}\ge 0$ for all $n\in \mathbb{N}$, then $a\ge 0$.
>2. If $a_{n}\leq b_{n}$ for all $n\in \mathbb{N}$, then $a\le b$. 
>3. If there exists $c\in \mathbb{R}$ for which $c\le b_{n}$ for all $n\in \mathbb{N}$, then $c\le b$. Similarly, if $a_{n}\le c$ for all $n\in \mathbb{N}$, then $a\le c$. 

[[Proof of the Order Limit Theorem|Proof]]

---

## Monotone convergence theorem

>[!Definition]
>A sequence $(a_{n})$ is *increasing* if $a_{n}\le a_{n+1}$ for all $n\in \mathbb{N}$ and *decreasing* if $a_{n}\ge a_{n+1}$ for all $n\in \mathbb{N}$. A sequence is *monotone* if it is either increasing or decreasing.

>[!Info]
>Note that this only applies to spaces in which an [[Ordered sets|order]] is defined. Does not make sense in vanilla metric spaces. We will stick with $\mathbb{R}$. 

>[!Theorem]
>If a sequence is monotone and bounded, it converges.
>
>More formally, if $(p_{n})$ is a monotone bounded sequence with $p=\sup \{ p_{1}, p_{2}, \dots \}$ if $(p_{n})$ is increasing and $p=\inf \{ p_{1}, p_{2}, \dots \}$ if $(p_{n})$ is decreasing, then $(p_{n})\to p$.

>**Proof**
>Assume $(p_{n})$ is increasing. We have to prove that $(p_{n})\to p$. Let $S=\{ p_{1}, p_{2}, \dots \}$. Consider the number $p-\epsilon$ for arbitrary $\epsilon>0$. Since $p$ is $\sup S$, there must exist $p_{N}\in S$ such that
>$$
>\begin{align*}
>&p-\epsilon<p_{N} \\
>\implies&|p-p_{N}|<\epsilon.
>\end{align*}
>$$
>Since $(p_{n})$ is a monotone increasing sequence, the above inequality is also true for all $n\ge N$. A similar argument works for decreasing $(p_{n})$. ❏

>[!Theorem]
>If a sequence is monotone and convergent, it is bounded.

>**Proof**
>Assume $(p_{n})\to p$ is increasing (the decreasing case is handled similarly). Clearly, $p_{1}$ is a lower bound for $S = \{ p_{1}, p_{2}, \dots \}$. 
>Next, FTSOC, assume $p_{k}>p$ for some $k$. It follows that $p < p_{k} \leq p_{n}$ for all $n\ge k$. Now, if we set $\epsilon = p_{k}-p$, we get $p_{n}-p\ge \epsilon$ for all $n\ge k$, i.e, the sequence does not converge, which is a contradiction. Thus, $p_{k}\le p$ for all $k$, i.e, $p$ is an upper bound. ❏ 

So, just to recap:
- *convergent* $\implies$ *bounded*.
- *bounded* $\not\implies$ *convergent*. Ex 1, -1, 1, -1, ...
- *monotone* $\not\implies$ *convergent*. Ex 1, 2, 3, 4, ...
- If a sequence is *monotone*, *bounded* $\iff$ *convergent*.

---
## Squeeze theorem

>[!Theorem] 
>If $(x_{n})\to a$, $(z_{n})\to a$ and $x_{n}<y_{n}<z_{n}$ for all sufficiently large $n$, then $(y_{n})\to a$. 

>**Proof**
>Let $\epsilon>0$ be arbitrary. Then, where must exist an $N_{1}$ such that for all $n\ge N_{1}$, $|x_{n}-a|<\epsilon$, which implies $x_{n}>a-\epsilon$. Similarly, there must exist an $N_{2}$ such that for all $n\ge N_{2}$,  $|z_{n}-a|<\epsilon$, which implies $z_{n}<a+\epsilon$. Thus, $a-\epsilon<y_{n}<a+\epsilon$, i.e, $|y_{n}-a|<\epsilon$. ❏

---
## Limits of some special sequences

>[!Theorem]
>1. If $p>0$, then $\lim_{ n \to \infty } \frac{1}{n^{p}} = 0$.
>2. If $p>0$, then $\lim_{ n \to \infty } \sqrt[n]{ p }=1$.
>3. $\lim_{ n \to \infty }\sqrt[n]{ n }=1$.
>4. If $p>0$ and $\alpha$ is real, then $\lim_{ n \to \infty } \frac{n^{\alpha}}{(1+p)^{n}}=0$.
>5. If $|x|<1$, then $\lim_{ n \to \infty }x^{n}=0$.

Check Rudin, 3.20 for proof.

>[!Note]
>In (b), Rudin says
>$$
> p= (1+x_n)^n\ge 1+nx_n.
>$$
>In (c), Rudin says
>$$
>n=(1+x_{n})^{n}\ge \frac{n(n-1)}{2}x_{n}^{2}.
>$$
>Notice that the upper bound used in (b) is also valid as an upper bound in (c):
>$$
>n=(1+x_{n})^{n}\ge 1+nx_{n}.
>$$
>But, this is a useless bound, since it gives
>$$
>0\leq x_{n}\leq \frac{{n-1}}{n},
>$$
>where the upper bound does not converge to $0$. Thus, we need to use a stronger upper bound, like the one Rudin uses.

