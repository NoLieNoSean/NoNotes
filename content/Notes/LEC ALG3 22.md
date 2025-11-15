---
id: "350"
date: 2025-11-11
time: 09:13
tags:
  - ALG3
  - Lecture
---
# Properties of finite fields

[!Lemma]
For any $x, y\in F$, with char $F=p$, $(x+y)^{p^{r}}=x^{p^{r}}+y^{p^{r}}$.

[!Lemma]
Let $L$ be a field in which $f(x)=x^{q}-x$ splits, with char $L$ = $p$, $q=p^{r}$. Let $K$ be the set of all roots of $f(x)$ (in $L$). $K$ is a field.

[!Proof]-
We need to show that $if$ $\alpha, \beta\in K$, then $\alpha ^{-1}$, $\alpha\beta$, $\alpha+\beta\in K$. We know $\alpha^{q}=\alpha$, $\beta^{q}=\beta$. From the previous lemma, 
$$
\begin{align}
 & (\alpha+\beta)^{q}=\alpha^{q}+\beta^{q}= \alpha+\beta. \\
 & (\alpha\beta)^{q}=\alpha^{q}\beta^{q}=\alpha\beta \\
\end{align}
$$
To show: $(\alpha ^{-1})^{q}=\alpha ^{-1}$: 
$$
\begin{align}
 & 1^{q}=1 \\
 & (\alpha\alpha ^{-1})^{q}=1 \\
 & (\alpha)^{q}(\alpha ^{-1})^{q}=\alpha\alpha ^{-1}  \\
 & (\alpha ^{-1})^{q}=\alpha ^{-1} .
\end{align}
$$

[!Theorem]
A field of order $p^{r}$ contains a field of order $p^{k}$ iff $k\ | \ r$. 

[!Proof]-

We have $\mathbb{F}_{p}\subseteq \mathbb{F}_{q'}\subseteq \mathbb{F}_{q}$, where $q'=p^{k}$ and $q=p^{r}$. Since
$$
\underbrace{ [\mathbb{F}_{q}:\mathbb{F}_{p}] }_{ =r }=[\mathbb{F}_{q}:\mathbb{F}_{q'}]\underbrace{ [\mathbb{F}_{q'}:\mathbb{F}_{p}] }_{ =k },
$$
$k\ | \ r$. 

$k\ | \ r$ $\implies$ $p^{k}-1$ | $p^{r}-1$.

From some lemma, $\mathbb{F}_{q'}^{*}$ has an element of order $p^{k}-1$. All elements of order $p^{k}-1$ are roots of $x^{p^{k}}-x$. Note that these roots form a subfield of $K$. 


[!Corollary]
All irreducible factors of $x^{q}-x\in \mathbb{F}_{p}[x]$ are irreducible polynomials whose degree divides $r$. 

[!Proof]-

Let $g$ be an irreducible polynomial of degree $k$ such that $g\ | \ x^{q}-x$. Let $k$ be the splitting field of $x^{q}-x$. Let $\beta$ be a root of $g$ in $K$. Then, 
$$
\underbrace{ [K:\mathbb{F}_{p}] }_{ r }=[F:\mathbb{F}_{p}(\beta)]\underbrace{ [\mathbb{F}_{p}(\beta):\mathbb{F}_{p}] }_{ \text{deg}\,g }
$$
so, $\text{deg}\,g\ | \ r$. 

Conversely, suppose $k\ | \ r$. Then if $\beta$ is a root of $g$ in some extension field, $[\mathbb{F}_{p}(\beta):\mathbb{F}_{p}]=k$, $\mathbb{F}_{p}(\beta)$ will be isomorphic to a subfield of $K$, so $g$ has a root in $K$. Repeat till we obtain $g\ | \ x^{q}-x$. 






---

# Existence of algebraic closures

[!Proof]-

Define
$$
\begin{align}
S:=\{ f(x)\in F[x]:\text{deg }f\geqslant 1 \}.
\end{align}
$$
For all $f\in S$, assign a symbol $x_{f}$. Define
$$
F[S]:= F[x_{f}:f\in S].
$$
$I=(f(x_{f}):f\in S)\subseteq F[S]$. 


Want to show 