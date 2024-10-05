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
>$(a_{n})$ [[Sequences and convergence#Definition of convergence in real numbers and metric spaces|converges]] to $a$ if and only if every subsequence of $(a_{n})$ converges to $a$.

>**Proof of $\Rightarrow$**
>Assume $(a_{n})\to a$, and let $(a_{n_{k}})$ be a subsequence. Given $\epsilon>0$, there exists $N$ such that $|a_{n}-a|<\epsilon$ whenever $n\ge N$. Because $n_{k}\geq k$ for all $k$, the same $N$ will suffice for the subsequence, i.e, $|a_{n_{k}}-a|<\epsilon$ whenever $k\geq N$. ❏
>
>**Proof of $\Leftarrow$**
>$(a_{n})$ is a subsequence of itself.  ❏
>
>>[!Question]- What if we only know that every proper subsequence of $(a_{n})$ converges? 
>>
>>Let $\epsilon>0$. Every subsequence $(a_{k_{i}({n})})$, $k_{i}:\mathbb{N}\to \mathbb{N}$, should have a $N_{i}$ such that for all $n>N_{i}$, $|a-a_{k_{i}(n)}|<\epsilon$. If we show that  $\{ N_{i} \}$ is bounded above, then it must have a supremum $N$, and we have for all $i$, for all $n>N$, $|a-a_{k_{i}(n)}|<\epsilon$. Since for every given $n$ there exists a subsequence satisfying $k_{i}(n)=n$ (basically, a subsequence that has the same first $n$ elements as $(a_{n})$), we get for all $n>N$, $|a-a_{n}|<\epsilon$. Done!
>>
>>To show that $\{ N_{i} \}$ is bounded above, assume otherwise. If we assume each $N_{i}$ is the smallest such number for its subsequence, $a_{k_{i}(N_{i})}$ should not satisfy $|a-a_{k_{i}(N_{i})}|<\epsilon$. Now, pick a subsequence $(a_{k_{\alpha_{1}}(n)})$. We know that $a_{k_{\alpha_{1}}(N_{\alpha_{1}})}$ lies outside the $\epsilon$ ball at $a$. Thanks to our assumption that $\{ N_{i} \}$ is unbounded, there should exist another subsequence $(a_{k_{\alpha_{2}}(n)})$ with $N_{\alpha_{2}}>k_{\alpha_{1}}(N_{\alpha_{1}})$. Note that $k_{\alpha_{2}}(N_{\alpha_{2}})\geq N_{\alpha_{2}}$, and  $a_{k_{\alpha_{2}}(N_{\alpha_{2}})}$ also lies outside the $\epsilon$ ball at $a$. We can keep going, and form a subsequence $(a_{k_{\alpha_{n}}(N_{\alpha_{n}})})$ which does not converge to $a$. Contradiction!
>

Same argument can be made for metric spaces.

---
## Bolzano-Weierstrass Theorem

>[!Theorem]
>Every [[Sequences and convergence#Boundedness|bounded]] sequence in $\mathbb{R}^{k}$ contains a convergent subsequence.

A more precise statement in $\mathbb{R}$ would be "Every sequence in $[a,b]$ in $\mathbb{R}$ has a convergent subsequence converging to an element in $[a, b]$".
### First, we prove for R

One way to prove this is like so:
1. Show that every sequence in $\mathbb{R}$ has a monotone subsequence, done [[Cauchy sequences#Step 2 Pervasive monotonicity|here]]. 
2. Since the given sequence is bounded, its subsequence must be bounded too. The theorem follows from the [[Sequences and convergence#Monotone convergence theorem|monotone convergence theorem]]. 

Here's an alternate proof featured in Abbot, that uses the [[The real field#Nested interval property|nested interval property]] of the real field.

![[Pasted image 20240901213114.png]]

---
### Now, for $\mathbb{R}^{k}$.

We know that the [[Algebraic Limit Theorem in Vector Spaces#Slot-wise convergence|convergence of vectors in R^k]] is tested slot-wise. If a sequence is bounded in $\mathbb{R}^{k}$, it doesn't take much to show that every slot must be bounded too. Thus, the sequence is bounded in the region $[a_{1},b_{1}]\times[a_{2},b_{2}]\times\dots \times[a_{k},b_{k}]$, called a closed box. (I know, we defined being bounded as being within a ball, but you can draw a ball around a box). Since each slot is bounded, we should be able to extract a convergent subsequence for every slot. However, this does not work right away since the indices for the convergent subsequences obtained in slot 1 and slot 2 may have nothing to do with each other. Fortunately, this is easily remedied. First, extract a convergent subsequence in slot 1. Now, throw away all the vectors whose indices do not appear in this subsequence. Repeat the same process for slot 2. Since subsequences of convergent sequences also converge, this ensures that we end up with a subsequence of vectors where every slot converges.

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

