---
tags: 
date: "2025-09-23"
time: "09:18"
id: "116"
---
[!Remark]
Let $R$ be a Noetherian ring, and let $\mathfrak{m}_{1}, \dots, \mathfrak{m}_{k}$ be maximal ideals. Then $\mathfrak{m}_{1}^{a_{1}}\dots \mathfrak{m}_{k}^{a_{k}}=\mathfrak{m}_{1}^{a_{1}}\cap\dots \cap \mathfrak{m}_{k}^{a_{k}}$.

If $I$ is any ideal and $I=\bigcap_{i=1}^{k}\mathfrak{m}_{i}^{a_{i}}$ where $\mathfrak{m}_{i}$ are maximal. Let $S=R/I$. Then the prime ideals in $S$ are $\{ (\mathfrak{m}_{i}+I)/I\ | \ i \}$. In fact, all of these are maximal. These are called Artinian rings.

---

# Gauss primes

see @butlerCLASSIFICATIONGAUSSIANPRIMES

> [!Example]
> Let $\alpha$ be the $p$th root of unity, where $p$ is a prime. Then, 
> $$
> \mathbb{Z}[\alpha]\cong \frac{\mathbb{Z}[x]}{1+x+\dots x^{p-1}}.
> $$
> Let $f(x)=1+x+\dots+x^{p-1}$. Clearly, $f(\alpha)=0$. Use https://en.wikipedia.org/wiki/Eisenstein%27s_criterion to prove $f$ is irreducible.

> [!Example]
> To show that $3$ is prime in $\mathbb{Z}[i]$, it is sufficient to show that 
> $$
> \frac{\mathbb{Z}[i]}{(3)}\cong \frac{\mathbb{F}_{3}[x]}{x^{2}+1}
> $$
> is an integral domain. $x^{2}+1\in \mathbb{F}_{3}[x]$ is prime iff it is irreducible, and it is reducible iff it can be factored into monic factors, in which case it must have a root. It can be easily checked that $\overline{0}, \overline{1}, \overline{2}$ are not roots of $x^{2}+1$. 
> 
> On the other hand, $x^{2}+1$ IS reducible in $\mathbb{F}_{5}[x]$, so $5$ is not prime in $\mathbb{Z}[i]$.

If $I$ is an ideal in a ring $R$, then $\frac{R}{I}[x]\cong \frac{R[x]}{IR[x]}$.


---


[!Exercise]
Let $p$ be a prime number and $n=p+1$. Let $f(x)=x^{2p}+nx+n\in Q[\sqrt[n]{p  }][x]$. Is $f(x)$ irreducible? 

[!Lemma]
$d\ | \ a+bi$ iff $d\ | \ a$ and $d\ | \ b$. 

[!Lemma]
Let $\pi$ be a Gauss prime. Then $\pi \overline{\pi}$ is either a prime integer or the square of a prime integer.

[!Proof]-
$\pi \overline{\pi}\in \mathbb{Z}$. 

