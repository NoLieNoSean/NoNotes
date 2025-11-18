---
id: "357"
date: 2025-11-17
time: 13:55
tags:
---
# Problem 11

Let $G\subseteq F^{\times}$ be of order $n$. Let $A_{d}$ denote the set of elements of $G$ of order $d$. Let $B_{d}$ denote the set of elements of $G$ whose order divides $d$, that is, $\{ x\in G:x^{d}=1 \}$. 

Fix $d\ | \ n$. Since $x^{d}-1=0$ can have at most $d$ solutions in $F$, $|B_{d}|\leqslant d$. Suppose $A_{d}\ne \emptyset$, and $y\in A_{d}$. Clearly, $\langle y \rangle\subseteq B_{d}$. Since $|\langle y \rangle|=d$, $x^{d}-1$ splits completely in $F$, and $\langle y \rangle= B_{d}=\{ x\in F :x^{d}=1\}$. It follows that the elements of $A_{d}$ are just the elements of $\langle y \rangle$ of order $d$, so $|A_{d}|=\varphi(d)$. We have established that $|A_{d}|\leqslant\varphi(d)$. Now, 
$$
\begin{align}
n=|G|=\sum_{d\ | \  n}|A_{d}|\leqslant \sum_{d\ | \  n} \varphi(d)=n.
\end{align}
$$
This forces $|A_{d}|=\varphi(d)$ for all $d\ | \ n$. In particular, $|A_{n}|=\varphi(n)\ne 0$. Therefore, $G$ has an element of order $n$, and is cyclic.



> [!Exercise]
> Prove that a finite subgroup of the multiplicative group  of any field $F$ is a cyclic group.



Since $\langle y \rangle\subseteq G$ and $|\langle y \rangle|=d$, we must have 