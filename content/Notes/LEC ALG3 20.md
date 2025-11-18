---
id: "342"
date: 2025-11-04
time: 09:31
tags:
  - ALG3
  - Lecture
---
> [!Proposition]
> Let $\alpha\in F$. Then, $x-\alpha$ is a root of $f(x)$ and $f'(x)$ $\iff$ $\alpha$ is a multiple root of $f(x)$. 
> 
> This result can be extended to $\alpha\in K/F$. 



> [!Lemma]
> Let $f, g\in F[x]$ and $K/F$. Then the gcd of $f$ and $g$ in $F[x]$ is equal to their gcd in $K[x]$. 
> 
> > [!Proof]-
> > Let $d$ and $d'$ be the gcd of $f$ and $g$ in $F[x]$ and $K[x]$ respectively. We have to show that $d\ | \ d'$ and $d'\ | \ d$. The former is clear. 
> > 
> > Since $F[x]$ is a PID, we can write $d=af+bg$ for some $a, b\in F[x]$. This equation holds true in $K[x]$. Since $d'\ | \ f$ and $d'\ | \ g$ in $K[x]$, $d\in(d')$, which implies $d'\ | \ d$. 
> 

^4f80d1

[!Lemma]
If $f, g\in F[x]$ have a common root in $K$, where $K/F$, then they are not relatively prime in $F[x]$. Conversely, if $f$ and $g$ are not relatively prime in $F[x]$, then there exists an extension field where $f$ and $g$ have a common root. 

[!Proof]-

If $\alpha$ is a common root of $f$ and $g$ in $K[x]$, the gcd of $f$ and $g$ in $K[x]$ is not a unit. By [[#^4f80d1]], it follows that the gcd of $f$ and $g$ in $F[x]$ is not a unit. 

Conversely, suppose $f$ and $g$ are not relatively prime. Since $F[x]$ is a PID, $(f, g)=(d)$, where $d$ is the gcd of $f$ and $g$ in $F[x]$. Split $d$ into irreducible factors. Let $h$ be an irreducible factor of $g$. There exists an extension field where $h$ has a root, say $\alpha$. Let $K'=F(\alpha)$. Then $f$ and $g$ have a root in $K'$. 


[!Proposition]
Let $f(x)\in F[x]$. Then there exists $K/F$ where $f$ has a multiple root $\iff$ $f$ and $f'$ are not relatively prime in $K$. 


---

# Finite fields

We have 

[!Theorem]
Let $p$ be a prime and $q=p^{r}$, $r\geqslant 1$. Let $k$ be a field of order $q$. Then the elements of $k$ are roots of $x^{q}-x$. 



[!Proposition]
No finite field is algebraically closed.

[!Proof]-
Let's suppose that $ K $ is finite and write $ K=\{\alpha_{1}, \ldots , \alpha_{n}\}$. Now take the polynomial $ p (x)=(x-\alpha_{1})\ldots (x-\alpha_{n}) +1\in K[x]$. It's easy to see that $ p (x) $ doesn't have any roots in $ K $. Hence, $ K $ is not algebraically closed.