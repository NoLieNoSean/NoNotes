---
id: "526"
date: 2026-08-17
time: 15:33
tags:
---
[!Definition] $\sigma$-algebra

[!Definition] algebra

[!Definition] Measure, @athreyaMeasureProbability2018 1.4.4
+ $\sigma$- finiteness


[!Proposition]
Suppose $\mu$ is finitely additive. Then, $\mu$ is $\sigma$-additive iff $\mu$ is monotone continuous (if $A_{n}\uparrow A\in \mathcal{A}$ then $\mu(A_{n})\uparrow \mu(A)$). 

[!Proposition]
Suppose $\mu$ is a measure on $\mathcal{A}$. Then $\mu$ is countably subadditive, that is, 
$$
\mu\left( \bigcup_{i=1}^{\infty} A_{i} \right)\leqslant \sum_{i=1}^{\infty} \mu(A_{n}).
$$
[!Proof]-


[!Proposition]
Let $\mu:\mathcal{A}\to[0, \infty]$. Suppose $\mu(\emptyset)=0$. Then, $\mu$ is a measure iff $\mu$ is finitely additive and countably subadditive. 

[!Proof]-

$(\implies)$ is clear. 

$(\impliedby)$ Suppose $\{ A_{n} \}\subseteq \mathcal{A}$ are pairwise disjoint. By subadditivity, we have
$$
\mu\left( \bigcup_{n=1}^{\infty} A_{n} \right)\leqslant \sum_{n=1}^{\infty} (A_{n}).
$$
Using finite additivity (and taking a limit), we have the opposite inequality. 


[!Proposition] @athreyaMeasureProbability2018 1.4.6 (2)
$\mu$ is a measure on a $\sigma$-algebra $\mathcal{F}$. Let $\{ A_{n} \}\subseteq \mathcal{F}$ and $A_{n}\downarrow A$ and $\mu(A_{1})< \infty$. Then $\mu(A_{n})\downarrow \mu(A)$.

[!Proof]-

a sequence that telescopes



[!Definition] limsup and liminf
Let $\mathcal{F}$ be a $\sigma$-algebra. Let $\mu$ be a measure on $\mathcal{F}$. Let $\{ A_{n} \}\subseteq \mathcal{F}$. Define
$$
\limsup A_{n}:=\bigcap_{n=1}^{\infty} \bigcup_{m=n}^{\infty} A_{m}
$$
$$
\liminf A_{n}:=\bigcup_{n=1}^{\infty} \bigcap_{m=n}^{\infty} A_{m}.
$$


Clearly, $\lim\inf A_{n}\subseteq \limsup A_{n}$.

[!Proposition]
$\mu$ is a finite measure on $\mathcal{F}$. Then
$$
\mu(\liminf A_{n})\leqslant \liminf\mu(A_{n})\leqslant \limsup\mu(A_{n})\leqslant \mu(\limsup(A_{n})).
$$


[!Proposition] Borel-Cantelli
Let $\mu$ be a finite measure on $\mathcal{F}$. Suppose $\{ A_{n} \}\subseteq \mathcal{F}$ such that $\sum_{n=1}^{\infty}\mu(A_{n})< \infty$. Then $\mu(\limsup(A_{n}))=0$. 

[!Proof]-

Let $B_{n}=\bigcup_{m=n}^{\infty}A_{m}$. 
$\mu(B_{n})\leqslant \sum_{m=n}^{\infty}\mu(A_{m})\to 0$ as $n\to \infty$ (use summability hypothesis). 
Thus, $\mu(\limsup A_{n})=\inf \mu(B_{n})=0$. 


---

[!Proposition] Caratheodory extension
$\mu$ is a measure on an algebra $\mathcal{A}$. Then there exists a $\sigma$-algebra $\mathcal{M}\supseteq \mathcal{A}$ and a measure $\tilde{\mu}$ on $\mathcal{M}$ such that $\tilde{\mu}\ | \ _\mathcal{A}=\mu$. 








