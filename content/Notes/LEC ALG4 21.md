---
id: "437"
date: 2026-03-27
time: 11:53
tags:
  - ALG4
  - Lecture
---
Recall:

Let $E/F$ be finite. Let $G=\text{Aut}_{F}E$. It is always the case that $F\subseteq E^{G}$; $E/F$ is Galois if $F=E^{G}$. 

For all $K$ such that $E/K/F$, $E/K$ is Galois. Note that $K/F$ need not be Galois, since it need not be normal ($K/F$ is separable, though). 

---

[!Proposition]
Let $E/F$ be finite. TFAE:
1. $E/F$ is normal. 
2. $E$ is a splitting field of a polynomial. 
3. For all fields $L/E$ and for all $F$-embeddings $\sigma:E\to L$, $\sigma(E)=E$. 

[!Proof]-

Write $E=F(\alpha_{1}, \dots, \alpha_{n})$. Let $g=\prod\text{irr}(F, \alpha_{i})$. 

$(1 \implies 2)$ For all $i$, all the $F$-conjugates of $\alpha_{i}$ are in $E$. $E$ contains all the roots of $g$. Thus, 
$$
E=F(\alpha_{1}, \dots, \alpha_{n})\subseteq F(\text{all roots of }g)\subseteq E.
$$
So, $E$ is a splitting filed of $g$. 

$(2\implies 3)$ Let $\sigma:E\to L$ be an $F$-embedding. Let $E$ be the splitting field of some $h\in F[x]$. $\sigma(E)$ is a subfield of $L$. $\sigma(E)$ is a splitting field of $h$. $\sigma$ permutes the roots of $h$. Thus, $E=\sigma(E)$. Alternatively, use the uniqueness of splitting fields[^1].

$(3 \implies 1)$ Let $\alpha\in E$, and $f=\text{irr}(F, \alpha)$. Let $L\supseteq E$ be a splitting field of $fg$. Let $\Omega=\{ \beta\in L : f(\beta)=0\}$. Let $\sigma\in \text{Aut}_{F}(L)$. By @isaacsAlgebraGraduateCourse2009 18.3, $\text{Aut}_{F}L$ acts transitively on $\Omega$. Let $\beta\in \Omega$. There exists $\sigma\in \text{Aut}_{F}L$ such that $\sigma(\alpha)=\beta$. Since $\sigma\ | \ _E$ is an $F$-embedding of $E$ into $L$, $\sigma(E)=E$ by hypothesis. Thus, $\beta\in E$, and $\Omega \subseteq E$. But $\Omega$ contains all roots of $f$ in $L$. Thus every $F$-conjugate of $\alpha$ belongs to $E$. 

---

[!Proposition]
Let $E/F$ be Galois. Let $E/K/F$ and $G=\text{Aut}_{F}E$, $H=\text{Aut}_{K}E$. 
1. Let $\sigma\in G$. Then, $\text{Aut}_{\sigma(K)}E=\sigma H\sigma ^{-1}$. 
2. $K/F$ is Galois $\iff$ $H\triangleleft G$. In this case, $\text{Aut}_{F}K\cong G/H$. 

[!Proof]-


---

Recall: $f\in F[x]$ is irreducible. $f$ is separable $\iff$ $f$ and $f'$ do not have a common root in $\overline{F}$ $\iff$ $\langle f, f' \rangle \overline{F}[x]=\overline{F}[x]$  ($\iff \langle f, f' \rangle {F}[x]={F}[x]$). 

[!Proposition]
$f\in F[x]$ irreducible and not separable. Then $f(x)=g(x^{p})$ where $g$ is an irreducible polynomial and $p=\text{char }F> 0$. 

[!Corollary]

---

[!Definition]
Say that $E/F$ is **purely inseparable** if for all $\alpha\in E\setminus F$, $\alpha$ is not separable over $F$. 

[!Proposition]
Let $E/F$ be finite. 
1. $K=\{ \alpha\in E : \alpha\text{ separable over }E\}$ is a subfield of $E$ containing $F$. 
2. $K/F$ is separable. 
3. $E/K$ is purely inseparable. 

[!Proposition]
Let $E/F$ be finite. TFAE:
1. $E/F$ is purely inseparable. 
2. For all $\alpha\in E$, there exists $n\in \mathbb{N}$ such that $\alpha^{p^{n}}\in F$. 



[^1]: Let $L/F$, $f\in F[x]$. Suppose that $f$ splits over $L$. Then there exists unique $E\subseteq L$ such that $E$ is a splitting field of $f$. 
