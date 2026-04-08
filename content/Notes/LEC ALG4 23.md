---
id: "445"
date: 2026-04-06
time: 11:56
tags:
  - ALG4
  - Lecture
---
# Discriminant

Let $f=x^{n}-a_{1}x^{n-1}+a_{2}x^{n-2}+\dots\pm a_{n}\in F[x]$. 

[!Definition]
$$
\text{Disc}(f)=\prod_{1\leqslant i< j\leqslant  n}(\alpha_{i}-\alpha_{j})^{2}
$$
where $\alpha_{i}, \alpha_{j}\in \overline{F}$ are the roots of $F$. 

[!Proposition]
$\text{Disc}(f)\in F$. 

[!Proof]-
1. $\text{Disc}(f)$ is a symmetric function of $\alpha_{1}, \dots, \alpha_{n}$. 
2. Every symmetric function of $\alpha, \dots, \alpha_{n}$ can be written as a polynomial (with $\mathbb{Z}$-coefficients (?))
3. ...

---

[!Definition]
$$
\delta:=\prod_{1\leqslant i< j\leqslant n}(\alpha_{i}-\alpha_{j}).
$$
$\delta\in E$, the splitting field of $F$. 

Observe that for all $\sigma\in S_{n}$, $\sigma\delta=(-1)^{\sigma}\delta$. 

[!Proposition]
Let $f\in F[x]$ be of degree $n$, $\text{char}(F)\ne 2$. Then, $\text{Gal}(f)\subseteq A$ $\iff$ $\text{Disc}(f)$ is a square in $F$ (i.e., $\delta\in F$).

[!Proof]-

$(\impliedby)$ $\delta^{2}=\text{Disc}(f)$. If $\text{Disc}(f)=\alpha^{2}$ for some $\alpha\in F$, then $\alpha=\pm \delta$. Thus, $\delta\in F$. By the observation if $\sigma$ is an odd permutation, then $\sigma\delta\ne \delta$ (since $\text{char}(f)\ne 2$). Thus, for all $\sigma\in\text{Gal}(f)$, $\sigma$ is an even permutation. 

$(\implies)$ for all $\sigma\in \text{Aut}(E)$, $\sigma\delta=\delta$. Thus, m$\delta\in F=E=E^{\text{Aut}_{F}(E)}$. Thus, $\text{Disc}(f)$ is a square in $F$. 

---

[!Recall]
If $f$ is a separable irreducible separable polynomial of degree $n$ with splitting field $E$, then
$$
\text{Aut}_{F}(E)\subseteq S_{n}=\text{Sym}(\{ \alpha_{1}, \dots, \alpha_{n} \}).
$$
Moreover, it is a transitive subgroup, i.e. $\{ \alpha_{1}, \dots, \alpha_{n} \}$ is a single orbit in $\text{Aut}_{F}(E)$. 

[!Remark]

---

[!Proposition]
Let $f$ be a cubic irrreducible separable polynomial. Suppose $\text{char}(F)\ne 2$. Then
1. $\text{Gal}(f)=A_{3}$ iff $\text{Disc}(f)$ is a square. 
2. Otherwise, $\text{Gal}(f)=S_{3}$. 

[!Proof]-
The only transitive subgroups of $S_{3}$ are $A_{3}$ and $S_{3}$. Use the previous proposition. 

---

