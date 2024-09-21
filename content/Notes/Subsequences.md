---
tags:
  - ANA1
---

## Definition

>[!Definition]
>Let $(a_{n})$ be a [[Sequences and convergence#Sequences|sequence]] of real numbers, and let $n_{1}<n_{2}<n_{3}<\dots$ be an increasing sequence of natural numbers. Then the sequence $(a_{n_{1}}, a_{n_{2}}, \dots)$ is called a *subsequence* of $(a_{n})$ and is denoted by $(a_{n_{k}})$, where $k\in \mathbb{N}$ indexes the subsequence. If $(a_{n_{k}})$ converges, its limit is called a *subsequential limit* of $(a_{n})$.

>[!Info] A really useful fact about subsequences
>Let $(a_{n_{k}})$ be a subsequence of $(a_{n})$. Then, $n_{k}\ge k$ for all $k$.


--- 
## Subsequences of a convergent sequence

>[!Theorem]
>$(p_{n})$ [[Sequences and convergence#Definition of convergence in $ mathbb{R}$ and $X$|converges]] to $p$ if and only if every subsequence of $(p_{n})$ converges to $p$.

>**Proof** of $\Rightarrow$
>Assume $(a_{n})\to a$, and let $(a_{n_{k}})$ be a subsequence. Given $\epsilon>0$, there exists $N$ such that $|a_{n}-a|<\epsilon$ whenever $n\ge N$. Because $n_{k}\geq k$ for all $k$, the same $N$ will suffice for the subsequence, i.e, $|a_{n_{k}}-a|<\epsilon$ whenever $k\geq N$. ❏

>**Proof** of $\Leftarrow$
>Let $\epsilon>0$ be arbitrary. Since every subsequence of $(a_{n})$ converges to $a$, we can find one $N$ such that for all $k\ge N$, $|a_{n_{k}}-p|<\epsilon$ for every subsequence. Now, for every $k$, there exists a subsequence of $(a_{n})$ such that $n_{k} = k$. Thus, the result follows. ❏

Same argument can be made for metric spaces.

---
## Bolzano-Weierstrass Theorem

>[!Theorem]
>Every [[Sequences and convergence#Boundedness|bounded]] sequence in $\mathbb{R}^{k}$ contains a convergent subsequence.

A more precise statement would be "Every sequence in $[a,b]$ in $\mathbb{R}$ has a convergent subsequence converging to an element in $[a, b]$".
### First, we prove for $\mathbb{R}$.

One way to prove this is like so:
1. Show that every sequence in $\mathbb{R}$ has a monotone subsequence, done [[Cauchy sequences#Step 2 Pervasive monotonicity|here]]. 
2. Since the given sequence is bounded, its subsequence must be bounded too. The theorem follows from the [[Sequences and convergence#Monotone convergence theorem|monotone convergence theorem]]. 

Here's an alternate proof featured in Abbot, that uses the [[The real field#Nested interval property|nested interval property]] of the real field.

![[Pasted image 20240901213114.png]]

---
### Now, for $\mathbb{R}^{k}$.

We know that the [[Algebraic Limit Theorem in Vector Spaces#Slot-wise convergence|convergence of vectors in R^k]] is tested slot-wise. If a sequence is bounded in $\mathbb{R}^{k}$, it doesn't take much to show that every slot must be bounded too. Thus, the sequence is bounded in the region $[a_{1},b_{1}]\times[a_{2},b_{2}]\times\dots \times[a_{k},b_{k}]$, called a closed box. (I know, we defined being bounded as being within a ball, but you can draw a ball around a box). Since each slot is bounded, we should be able to extract a convergent subsequence for every slot. However, this does not work right away since the indices for the convergent subsequences obtained in slot 1 and slot 2 may have nothing to do with each other. Fortunately, this is easily remedied. First, extract a convergent subsequence in slot 1. Now, throw away all the vectors whose first slot does not appear in this subsequence. Repeat the same process for slot 2. Since subsequences of convergent sequences also converge, this ensures that we end up with a subsequence of vectors where every slot converges.

---
## Sequential compactness

>[!Definition]
>A [[Metric spaces|metric space]] $X$ is called *sequentially compact* if every sequence in $X$ has a convergent subsequence (with limit in $X$). 

>[!Info]
>If something is put in parenthesis, it means that that something need not be stated explicitly, and is implied by whatever precedes.

Note that we are basically taking the BWT in $\mathbb{R}$ and turning it around to a definition for any metric space $X$.  

Examples:
- $\mathbb{R}$ is not sequentially compact.
- Any closed interval in $\mathbb{R}$ is sequentially compact.
- Any open interval in $\mathbb{R}$ is not sequentially compact.
- Any interval in $\mathbb{Q}$ is not sequentially compact.
- $[a_{1},b_{1}]\times[a_{2},b_{2}]\times\dots \times[a_{k},b_{k}]$(called a closed box) is sequentially compact, as shown above.

### [[Cauchy sequences#Relation with Subsequences Sequential compactness sequential compactness|Relation with Completeness (in metric spaces)]]

>[!Theorem]
>If $X$ is a sequentially compact metric space, and if $(p_{n})$ is a [[Cauchy sequences#Cauchy sequences|Cauchy sequence]] in $X$, then $(p_{n})$ converges to some point of $X$. 

>**Proof**
>Sequential compactness $\implies$ completeness $\implies$ all Cauchy sequences converge. ❏

