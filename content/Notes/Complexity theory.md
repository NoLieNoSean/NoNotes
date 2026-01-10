---
id: "378"
date: 2026-01-09
time: 10:53
tags:
---
> [!Definition] Turing machine
> A deterministic Turing machine $M$ is defined as $(\Sigma, Q, \delta)$ where
> 1. $\Sigma$ is the tape alphabet
> 2. $Q$ is a finite set of states with $q_{\text{start}}, q_{\text{accept}}, q_{\text{reject}}$. 
> 3. transition function $\delta:\Sigma^{k+1}\times Q\to\Sigma^{k}\times Q\times \{ L, R \}^{k+1}$. 
> Note that the TM a read-only input tape. 


We define **time** to be the number of transitions a TM goes through from start to halt.
We say $M(x)=1$ iff $M$ halts on $x$ in $q_{\text{accept}}$. 

> [!Definition] Time complexity
> For a TM $M$, 
> $$
> \begin{align}
> T_{M}(n):=\max_{x\in \{ 0, 1 \}^{*}, |x|=n}T_{M}(x),
> \end{align}
> $$
> where $T_{M}(x)$ is the time taken for $M$ to halt on $x$. 

Alphabet reduction: For a TM $M$ with alphabet $\Sigma$, there is an equivalent TM $\hat{M}$ with alphabet $\{ 0, 1, \triangleright, \_ \}$ (where the last two are 'start' and 'blank' symbols respectively) such that $\hat{M}$ runs in $O(\lceil \log_{2}|\Sigma| \rceil T_{M}(n))=O(T_{M}(n))$. 

Tape reduction: For a $k$-tape TM $M$, there is a 2-tape TM $\tilde{M}$ such that $\tilde{M}$ decides the same language and takes time $O(T_{M}(n)\log T_{M}(n))$. 


[!Theorem] Universal Turing Machine
There is a TM $U$ and an encoding scheme for TMs such that $U$ takes $\langle \langle M \rangle, x, 1^{t} \rangle$ as input, simulates $M$ on $x$ for $t$ steps, and produces $M(x)$ in time $O(t\log t)$ iff $M$ decides $x$ in $t$ time. 


A nondeterministic halting TM is one which halts on each computation path for each input. Time complexity is defined as
$$
\begin{align} \\
 & T_{M}(n)=\max_{|x|=n}T_{M}(x)\\
 & T_{M}(x):=\max_{\text{all comp paths p}}\text{time taken on }x\text{ along }p 
\end{align}
$$
We will assume that all TMs are of this variety. 

[!Definition] Complexity classes
$\text{DTIME}(T(n))=\{ L\subseteq \{ 0, 1 \}^{*}: \exists \text{DTM }M\text{ that decides }L \text{ in } O(T(n))\text{ time} \}$. 
$\text{NTIME}(T(n))=\{ L\subseteq \{ 0, 1 \}^{*}: \exists \text{NDTM }M\text{ that decides }L\text{ in }O(T(n))\text{ time} \}$. 
$x\in L$ iff there exists some path in the execution tree of $M$ which accepts.  

$$
\begin{align}
 & P=\bigcup_{c\geqslant  1}\text{DTIME}(n^{c}) \\
 & NP=\bigcup_{c\geqslant  1}\text{NTIME}(n^{c}) 
\end{align}
$$
If $L\in P$, then $\overline{L}\in P$. If $L\in NP$, then $\overline{L}\in\text{co-NP}$. We do not know whether $\text{NP}=\text{co-NP}$. 

Observe that a NDTM with time complexity $O(n^{c})$ can be simulated by a DTM with time complexity $O(2^{n^{c}})$, since it has to check every path of a computation tree of height $O(n^{c})$. 

NPSACE and PSPACE definitions
