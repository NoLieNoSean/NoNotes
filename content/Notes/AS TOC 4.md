---
id: "340"
date: 2025-11-02
time: 14:15
tags:
  - TOC
---
# Problem 1

Let the language $\{ \langle M \rangle:L(M)\text{ is regular} \}$ be denoted by $\textsf{REG}$. I will show that $\textsf{FIN}\leqslant \textsf{REG}$. Since $\textsf{FIN}\not\in\text{RE}$ and $\textsf{FIN}\not\in\text{co-RE}$, it will follow that $\textsf{REG}\not\in\text{RE}$ and $\textsf{REG}\not\in\text{co-RE}$. 

Suppose $\langle M \rangle\in \textsf{FIN}$. Let $\varphi(\langle M \rangle)$ be as described:
$$
\begin{align}
 & \text{read }x \\
 & \text{For }w\in\Sigma^{*}: \\
 & \quad \text{if }2^{|w|}> |x|: \text{reject} \\
 & \quad \text{if }2^{|w|}=|x|\text{ and }w\in L(M):\text{accept}
\end{align}
$$
Note that $\Sigma^{*}$ is enumerated above in lex order. The language of $\varphi(\langle M \rangle)$ is given by
$$
\bigcup_{s\in S}\Sigma^{2^{s}},
$$
where $S$ is a fixed subset of $\mathbb{N}$. If $L(M)$ is finite, $S$ is a finite subset, in which case the above language is finite, and hence regular. If $L(M)$ is infinite, $S$ is an infinite subset of $\mathbb{N}$. It is easily seen that this is not regular - the pumping lemma for regular languages tells us that the lengths of the words in the language must have an arithmetic subsequence, which contradicts the fact that the lengths of the words in the language must be a subsequence of the exponential sequence $\{ 2^{n}:n\in \mathbb{N} \}$. 

---

# Problem 2

## Part a

A deterministic linearly bounded automaton is a 9-tuple
$$
M=(Q, \Sigma, \Gamma, \vdash, \dashv, \delta, s, t, r),
$$
where $Q$ is a finite set of states, $\Sigma$ is the input alphabet, $\Gamma \supseteq\Sigma$ is the tape alphabet, $\vdash\in\Gamma$ is the left endmarker, $\dashv\in\Gamma$ is the right endmarker, $s\in Q$ is the start state, $t\in Q$ is the accept state, and $r\in Q$ is the reject state. 

Initially, $M$ receives its input $w=w_{1}w_{2}\dots w_{n}\in\Sigma^{*}$ delimited by endmarkers on the tape as $\vdash w\dashv$. The head starts on the leftmost square of the tape, that is, on $\vdash$. Note that $\Sigma$ does not contain the endmarker symbols. Once $M$ has started, the computation proceeds according to the transition function $\delta$.

$\delta:Q\times\Gamma\to Q\times\Gamma \times \{ L, R \}$ is constrained as follows: for all $q\in Q$, 
$$
\begin{align}
\delta(q, \vdash)=(p_{1}, \vdash, R), \\
\delta(q, \dashv)=(p_{2}, \dashv, L),
\end{align}
$$
for some $p_{1}, p_{2}\in Q$. $M$ cannot write $\vdash$ or $\dashv$ to the tape in any other circumstance. 

The computation continues until $M$ enters either the accept or reject states. If neither occurs, $M$ foes on forever. 

A configuration of $M$ is represented by $\vdash uqv\dashv$: $\vdash uv\dashv$ is the tape content, $q$ is the current state, and the head location is the first symbol of $v\dashv$. 

## Part b

The number of possible configurations is given by $\alpha(n):=(m-2)^{n}\cdot (n+2)\cdot k$. There are $(m-2)^{n}$ strings of length $n$ over an alphabet of size $m-2$, after discounting the endmarkers. For each such string, the head can be in any of $n+2$ locations, inclusive of the endmarkers, and the machine could be in any of its $k$ states. 

## Part c

If the LBA doesn't halt within $\alpha(n)$ steps given an input of size $n$, there must be a configuration $\mathbf{c}$ which the machine occupies twice by the pigeonhole principle. Moreover, if $\mathbf{c}, \mathbf{c}_{1}, \mathbf{c}_{2}, \dots, \mathbf{c}$ is the sequence of configurations the machine occupies between occupying $\mathbf{c}$ for the first and second time, it follows that the machine is not in a accept state in any of these configurations, since it would have halted if that were the case. Since the current configuration completely determines the sequence of future configurations the machine will attain, it follows that the machine will loop forever through the configurations $\mathbf{c}, \mathbf{c}_{1}, \mathbf{c}_{2}, \dots, \mathbf{c}, \mathbf{c}_{1},\mathbf{c}_{2}, \dots$. Thus, we only need to simulate an LBA for $\alpha(n)$ steps for an input of size $n$ to determine if it halts. 

## Part d

Let $\Sigma$ be any alphabet. Fix an enumeration $\{ w_{i} \}_{i=1}^{\infty}$ of $\Sigma^{*}$ and $\{ M_{i} \}_{i=1}^{\infty}$ of LBAs with input alphabet $\Sigma$. Let $\overline{\textsf{DIAG-LBA}}=\{ w_{i}:w_{i}\not\in L(M_{i}) \}$. 

$\overline{\textsf{DIAG-LBA}}$ is recursive. Here's a total Turing machine which accepts $\overline{\textsf{DIAG-LBA}}$:
$$
\begin{align}
 & \text{read }w \\
 & \text{compute } i \text{ such that }w=w_{i},~~ M_{i} \\
 & \text{if }M_{i}\text{ halts on } w_{i}: \\
 & \quad \text{if }M_{i}\text{ accepts }w_{i}: \\
 & \quad \quad \text{reject}  \\
 & \quad \text{else} \\
 & \quad \quad \text{accept}\\
 & \text{else} \\
 & \quad \text{accept}
\end{align}
$$
Suppose an LBA $M$ recognizes $\overline{\textsf{DIAG-LBA}}$. Let $M=M_{k}\in \{ M_{i} \}_{i=1}^{\infty}$. If $w_{k}\not\in L(M_{k})$, $w_{k}\in\overline{\textsf{DIAG-LBA}}$, so $M$ must accept $w_{k}$. However, that implies $w_{k}\in L(M)=L(M_{k})$, a contradiction. On the other hand, if $w_{k}\in L(M_{k})$, we have $w_{k}\in L(M)$, so $w_{k}\in\overline{\textsf{DIAG-LBA}}$ and $w_{k}\not\in L(M_{k})$, also a contradiction. Thus, we conclude that $\overline{\textsf{DIAG-LBA}}$ is not accepted by any LBA.