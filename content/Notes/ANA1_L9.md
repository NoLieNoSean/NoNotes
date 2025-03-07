---
tags:
  - Lecture
  - ANA1
  - Processed
---


- $\lim\sup_{ n \to \infty }p_{n} = \infty \iff (p_{n})\text{ is not bounded above.}$
- A is a subset of B. inf A >= inf B, sup A <= sup B. sequence of suprema form weakly decreasing sequence, and the sequence of infima form a weakly increasing sequence.
  Quick exercise: show that $i_{k}\le s_{k'}$ for all $k, k'\in \mathbb{N}$. 
  $i_{1}\le i_{2}\le i_{3}\le \dots\le s_{3}\le s_{2}\le s_{1}$. 
- Note that $\lim\sup_{ n \to \infty }p_{n}=\infty$ means that every $s_{i}$ is $\infty$. 
- proof: liminf <= limsup
  Pick any $s_{k}$. $i_{m}\le s_{k}$ for all $m$. Thus, $s_{k}$ is an upper bound for the set of all infima. Thus, $\lim\inf_{ n \to \infty }p_{n}=\sup \{ i_{m} \}\le s_{k}$. Since $s_{k}$ was arbitrary, the preceding statement is valid for all $k$. Thus, $\lim\inf_{ n \to \infty }p_{n}$ is a lower bound for the set of all suprema. Thus, $\lim\inf_{ n \to \infty }\le \inf \{ s_{k} \}=\lim\sup_{ n \to \infty }p_{n}$. 
- proof that liminf = limsup only when the sequence converges.

Claim: $(p_{n})$ converges $\iff$ limsup = liminf

Suppose $(p_{n})\to p$.
pf of => 
Cases:
- $p\in \mathbb{R}$
- $p\in \{ \infty, -\infty \}$

Case 1:
	Let $\epsilon>0$. 
	There exists a $N\in \mathbb{N}$ such that for all $n>N$, $|p_{n}-p|<\epsilon$.
	Thus, $s_{n}$ and and $i_{n}$ must lie in $(p-\epsilon, p+\epsilon)$.
	Thus, $\inf s_{n}$ and $\sup i_{n}$ must also lie in the same interval.
	Since $\epsilon$ was arbitrary, this proves that $\lim\sup_{ n \to \infty }p_{n} = p = \lim\inf_{ n \to \infty }p_{n}$.

pf of <=
same cases.

Case 1:
	limsup = liminf = p
	i.e, sequence of suprema of tails converges to p (from above monotonically)
	sequence of infima of tails converges to p (from below monotonically)
	We have to show that $(p_{n})\to p$.
	let $\epsilon>0$. 
	Find $N$ such that for all $n>N$ 
	$0\le s_{n}-p<\epsilon \implies p_{n}-p <\epsilon$
	$0\le p-i_{n}<\epsilon \implies p-p_{n}<\epsilon$.  
	$\implies |p-p_{n}|<\epsilon$.


Proof of theorem 3.19

[[LimSup and LimInf#Reconciling the two|Reconciling Rudin and Kulkarni]]
