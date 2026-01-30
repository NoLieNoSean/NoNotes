---
id: "313"
date: September 2025
tags:
  - TOC
---

# The pumping lemma

> [!Theorem] Pumping Lemma, @kozenAutomataComputability1997 11.2
> Let $A$ be a regular language. Then, there exists $k\geq 0$ such that for any strings $x, y, z$ with $xyz\in A$ and $|y|\geq k$, there exist strings $u, v, w$ such that $y=uvw$, $v\neq\epsilon$, and for all $i\geq 0$, the string $xuv^{i}wz\in A$.

The pumping lemma is often used to show that certain languages are nonregular. For this purpose, we usually use it in its contrapositive form: For all $k\geq 0$ there exist strings $x, y, z$ such that $xyz\in A$, $|y|\geq k$, and for all $u, v, w$ with $y=uvw$ and $v\ne \epsilon$, there exists an $i\geq 0$ such that $xuv^{i}wz\not\in A$. 

---
# Ultimate periodicity of regular languages

$U\subseteq \mathbb{N}$ is said to be **ultimately periodic** if there exist integers $n\geq 0$ and $p> 0$ such that for all $m\geq n$, $m\in U$ iff $m+p\in U$. $p$ is called the period of $U$,

> [!Theorem] @kozenAutomataComputability1997 12.3
> Let $A\subset=\{ a \}^{*}$. Then $A$ is regular iff the set $\{ m\ | \ a^{m}\in A \}$ is ultimately periodic.

^fffe51

> [!Corollary]
> Let $A$ be any regular set over any finite alphabet $\Sigma$, not necessarily consisting of a single letter. Then the set $\text{lengths }A=\{ |x|:x\in A \}$ of lengths of strings in $A$ is ultimately periodic.
> 
> > [!Proof]-
> > Define a homomorphism $\varphi:\Sigma\to \{ a \}$ by $b\mapsto a$ for all $b\in\Sigma$. Then, $\varphi(x)=a^{|x|}$. Since $\varphi$ preserves lengths, $\text{lengths }A=\text{lengths }\varphi(A)$. Also, [[Automata and regular languages#^6beea1|homomorphisms preserve regularity]], so $\varphi(A)$ is regular. From [[#^fffe51]], it follows that $\text{lengths }\varphi(A)$ is ultimately periodic.

---
# Fooling sets

> [!Definition]
> For words $x, y$ in a language $L\subseteq\Sigma^{*}$, $z\in\Sigma^{*}$ is said to be a **distinguishing suffix** if $xz\in L$ and $yz\not\in L$ or vice versa.

It should be clear that if $\hat{\delta}(s, x)=\hat{\delta}(s, y)$ for all $x, y\in\Sigma^{*}$, then $x$ and $y$ do not have a distinguishing suffix. Taking the contrapositive, we have if $x$ and $y$ have a distinguishing suffix, then $\hat{\delta}(s, x)\ne\hat{\delta}(s, y)$. 

> [!Definition]
> For a language $L$, a set of strings $x_{1}, \dots, x_{k}$ such that $x_{i}$ and $x_{j}$ have a distinguishing suffix for all $i\ne j$ is called a **Fooling set** of $L$.

If $\{ x_{1}, \dots, x_{k} \}$ is a fooling set of a language $L$, and $M$ is a DFA recognizing $L$, then we have $\hat{\delta}(s, x_{i})\ne\hat{\delta}(s, x_{j})$ for all $i\ne j$: $M$ must have at least $k$ states.

> [!Proposition]
> If $F$ is a fooling set of al language $L$, any automaton recognizing $L$ has at least $|F|$ states.

Thus, to prove that a language is nonregular, it is sufficient to provide an infinite fooling set.