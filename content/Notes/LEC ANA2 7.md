---
tags:
  - ANA2
  - Lecture
date: 2025-09-17
time: 15:36
---
> [!Remark]
> Recall that a set is compact iff it is complete and totally bounded. Compactness is a topological property, but completeness and totally boundedness are not; they depend on the metric. Let $d_{1}$ and $d_{2}$ be metrics on $\mathbb{N}$, as defined [[LEC ANA2 3#Completeness|here]]. We have seen that while $(\mathbb{N}, d_{1})$ and $(\mathbb{N} ,d_{2})$ are the same topological space (they have the same open sets), the former is complete and the latter is not. Also, $(\mathbb{N}, d_{1})$ is not totally bounded, but $(\mathbb{N}, d_{2})$ is!

We now have the tools to prove [[LEC ANA1 20#^95867f]] more succinctly:

> [!Theorem]
> Let $X$ be compact, $f:X\to Y$ be continuous. Then, $f$ is uniformly continuous.
> 
> > [!Proof]-
> > Let $\epsilon> 0$. For $x\in X$, let $V_{x}=f^{-1}(B_{\epsilon/2}(f(x)))$. $V_{x}$ is open since $f$ is continuous. $\{ V_{x} \}_{x\in X}$ is an open cover of $X$. By the [[LEC CAL1 8#^1e576d|Lebesgue covering lemma]], there exists $\delta> 0$ such that for any $y\in X$, there exists $V_{x}$ such that $B_{\delta}(y)\subseteq V_{x}$. This $\delta$ works: If $z\in B_{\delta}(y)$, then $y, z\in V_{x}$, so $d(f(y), f(z))<\epsilon$.
> 
 
> [!Example]
> Open balls in $\mathscr{l}_{1}, \mathscr{l}_{2}, \dots, \mathscr{l}_{\infty}$ are not compact ([[LEC ANA2 6#^c45e7a|we have shown]] that any ball centered at the origin in these spaces is not totally bounded; any ball in an NLS can be obtained by scaling and translating the unit ball). 
> 
> We will now show that balls in $C[0, 1]$ are not compact. Consider the sequence $\{ t^{n} \}_{n=1}^{\infty}\subseteq B_{2}(0)$. $\{ t^{n} \}$ clearly does not have a converging subsequence: if it did, the subsequence would have to converge pointwise to the limit, and the pointwise limit of any subsequence is the pointwise limit of $\{ t^{n} \}$, which is not continuous.  
> 
> In fact, unit balls at not compact in any infinite dimensional NLS. Proving this requires some functional analysis.

---

# Equicontinuity

The motivating question for this section: When is a subset of $C(X)$ compact? 

Equicontinuity is the natural generalization of [[LEC ANA1 20#^5d7328|uniform continuity]] to families of functions:

> [!Definition]
> Let $X$ be a compact metric space. $\mathcal{F}\subseteq C(X)$ is a family of **equicontinuous** functions if for every $\epsilon> 0$ there exists $\delta> 0$ such that $d(x, y)<\delta \implies |f(x)-f(y)|<\epsilon$ for all $x, y\in X$ and for all $f\in \mathcal{F}$. 

[!Proposition]
Let $(X, d)$, $(Y, \rho)$ be metric spaces. Let $\{ f_{n} \}\subseteq C(X, Y)$ then there exists an equivalent metric such that each $f_{n}$ is Lipschitz continuous. 

[!Proof]-


  
[!Proof]-
Define
$$
d'(x, y)=d(x, y)+\sum_{n=1}^{\infty} 1/2^{n}\frac{\rho(f_{n}(x), f_{n}(y))}{1+\rho(f_{n}(x), f_{n}(y))}.
$$
Then, $\rho(f_{n}(x), f_{n}(y))\leq 2^{n}d'(x, y)$.

[!Example]
$X$, $Y$ both compact. $F:X\times Y\to \mathbb{C}$ is continuous. Fix $y\in Y$. $f_{y}(x)=F(x, y)$. Then $\{ f_{y}:y\in Y \}$ is equicontinuous. 

[!Example]
$\{ f\in C_{1}[0, 1]\ | \ |f'|\leq M \}$ is equicontinuous.




