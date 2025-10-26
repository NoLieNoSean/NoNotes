---
id: "325"
date: 2025-10-23
time: 09:47
tags:
  - ALG3
  - Lecture
---
> [!Claim]
> Let $F, K$ be fields. Let $\{ F_{i} \}_{i\in \mathbb{N}}$ be fields such that $F_{i}\subseteq F_{i+1}$ and $F\subseteq F_{i}\subseteq K$ for every $i$. Then $\bigcup_{i\in \mathbb{N}}F_{i}$ is a subfield of $K$. 

^9d1148

If $K/F$ is an algebraic extension, is $[K:F]$ always finite? No. Consider
$$
\mathbb{Q}\subseteq \mathbb{Q}[\sqrt[2]{ 2 }]\subseteq \mathbb{Q}[\sqrt[4]{ 2 }]\subseteq \mathbb{Q}[\sqrt[8]{ 2 }]\subseteq\dots\subseteq \mathbb{Q}[\sqrt[2^{n}]{ 2 }]\subseteq\dots \subseteq \mathbb{C}.
$$
 $[ \mathbb{Q}[\sqrt[2^{i}]{ 2 }]:\mathbb{Q}]=2^{i}$. $\bigcup_{i\in \mathbb{N}} \mathbb{Q}[\sqrt[2^{i}]{ 2 }]$ is a field by [[#^9d1148]], and is clearly an algebraic extension of $\mathbb{Q}$. However, $\left[ \bigcup_{i\in \mathbb{N}} \mathbb{Q}[\sqrt[2^{i}]{ 2 }]:\mathbb{Q} \right]$ cannot be finite; easy contradiction if it were. 

---

If $\psi:F[x]\to K$ is a ring homomorphism, then $\ker(\psi)$ contains only one irreducible element up to association ($F[x]$ is a PID!).

---

[!Definition]
Let $\alpha_{1}, \dots, \alpha_r\in K$ be algebraic. Then $F(\alpha_{1}, \dots, \alpha_{n})$ is the smallest subfield of $K$ containing $\alpha_{1}, \dots, \alpha_{r}$ and $F$.

[!Proposition]
$F\subseteq L\subseteq K$. Let $n=[L:F]< \infty$ and $m=[K:L]< \infty$. Then $[K:F]< \infty$. 

[!Proof]-
Let $\{ x_{1}, \dots, x_{n} \}$ be a $F$-basis for $L$. Let $\{ y_{1}, \dots, y_{m} \}$ be an $L$-basis of $K$. 
Claim: $\{ x_{i}y_{j}:1\leq i\leq n, 1\leq j\leq m \}$ is a spanning set. This is clear, so the lemma follows. However, the set above also happens to be a basis. This is also clear.  


[!Lemma]
$\alpha_{1}, \dots, \alpha_{r}\in K\supseteq F$ are algebraic over $F$. Then $F(\alpha_{1}, \dots, \alpha_{n})$ is a finite extension of $F$, and hence an algebraic extension of $F$. 

[!Proof]-
By induction on $n$. $F\subseteq F(\alpha_{1})$ is finite, so $[F(\alpha_{1}):F]< \infty$ By induction hypothesis, $[F(\alpha_{1}, \dots, \alpha_{n-1}):F]< \infty$. $[F_{n-1}:F]< \infty$. Want $[F_{n}:F]< \infty$. 

Note that $F_{n}=F_{n-1}(\alpha_{n})$, because $F_{n-1}$ is the smallest subfield of $K$ containing $\alpha, \dots, \alpha_{n-1}$ and $\alpha_{n}$ is algebraic over $F_{n-1}$. The rest follows from the previous proposition. 


---

