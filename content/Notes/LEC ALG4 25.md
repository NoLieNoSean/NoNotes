---
id: "448"
date: 2026-04-15
time: 11:57
tags:
---
Let $F$ be a field of characteristic zero. Let $f\in F[x]$ be irreducible. 
1. $\text{deg}\,f=2$: roots of $f$ are in $F[\sqrt{ a^{2}-4b }]$ 
2. $\text{deg}\,f=3$: Cardano's formula
3. $\text{deg}\,f=4$: A more complicated method exists

[!Definition]
Say that $f$ is **solvable by radicals** if it has a root in a finite field extension $E$ with the following property: There exists a tower
$$
F=F_{0}\subseteq F_{1}\subseteq\dots \subseteq F_{r}= E
$$
such that for all $1\leqslant i\leqslant r$, $F_{i}=F_{i-1}(\beta_{i})$ where there exists $n_{i}$ such that $\beta_{i}^{n_{i}}\in F_{i-1}$. 

[!Proposition]
Let $E/F$ be a finite field extension. TFAE:
1. There exists a tower $F=F_{0}\subseteq F_{1}\subseteq\dots \subseteq F_{r}\subseteq E$ such that for all $1\leqslant i\leqslant r$, $F_{i}=F_{i-1}(\beta_{i})$, with $\beta_{i}^{n_{i}}\in F_{i-1}$. 
2. There exists a tower $F=E_{0}\subsetneq E_{1}\subsetneq\dots \subsetneq E_{s}=E$ such that for all $1\leqslant i\leqslant s$, $E_{i}/E_{i-1}$ is Galois with $[E_{i}:E_{i-1}]$ is a prime number. 

[!Theorem]
Let $\text{char}\,F=0$. Let $f\in F[x]$ be irreducible. Then $f$ is solvable by radicals iff $\text{Gal}(f)$ is [[LEC ALG2 5#^9d125f|solvable]]. 

[!Corollary]
If $f\in \mathbb{Q}[x]$ is such that $\text{Gal}(f)$ is $A_{5}$ or $S_{5}$, then $f$ is not solvable by radicals, since $A_{5}$ is [[LEC ALG2 12#^53cc00|simple]] and hence not solvable. 

---

[!Theorem] Krummer
Let $F\subseteq \mathbb{C}$ be a field containing a $p$th root of unity. Let $E/F$ be a finite extension. TFAE:
1. $E/F$ is Galois with $[E:F]=p$. 
2. $E=F(\alpha)$, where $\alpha\in E\setminus F$ and $\alpha^{p}\in F$. 

[!Proof]-

$(2\implies 1)$ Write $a=\alpha^{p}$. Let $f(x)=x^{p}-a$. The roots of $f(x)$ are $\{ \alpha, \zeta_{p}\alpha , \zeta_{p}^{2}\alpha, \dots\}\subseteq F(\alpha)$. Thus, $E$ is the splitting field of $x^{p}-a$. Show that $x^{p}-a$ is irreducible. Thus, $E$ is Galois and $[E:F]=p$. 

$(1\implies 2)$ 


[!Theorem] Artin-Sch?
Let $F$ be a field of characteristic $p> 0$. Let $a\in F$ and $f(x)=x^{p}-x-a$. Then exactly one of the following happens:
1. $f$ has a root in $F$, in which case all the roots of $f$ are in $F$. 
2. $f$ is irreducible, in which case $\text{Gal}(f)\cong \mathbb{Z}/p\mathbb{Z}$. 

[!Proof]-

If $\alpha\in \overline{F}$ is a root, then the roots of $f$ are $\{ \alpha+i:0\leqslant i\leqslant p-1 \}$. 