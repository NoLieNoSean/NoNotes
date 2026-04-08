---
id: "430"
date: 2026-03-04
time: 11:51
tags:
  - ALG4
  - Lecture
  - Processed
---
Let $F$ be a field. Fix an [[LEC ALG3 19#^4fa8fa|algebraic closure]] $\overline{F}$ of $F$. This is [[LEC ALG3 19#^5c5fed|unique]] up to an isomorphism over $F$. 

If $E/F$ and $\alpha\in E$ is algebraic over $F$, we will denote the [[LEC ALG3 15#^be91eb|minimal polynomial]] of $\alpha$ over $F$ in the variable $x$ by $m_{F, \alpha}(x)$. 

> [!Definition] Separable extensions
> 1. We say a polynomial $p(x)\in F[x]$ is **separable** if its roots are distinct in $\overline{F}$. 
> 2. Let $\alpha\in \overline{F}$. We say that $\alpha$ is **separable over $F$** if $m_{F, \alpha}$ is separable. 
> 3. An *algebraic* extension $E/F$ is **separable** if $\alpha$ is separable over $F$ for all $\alpha\in E$. 

^ba7e62

> [!Example] Inseparable element
> Let $F:=\mathbb{F}_{p}(t^{p})\subseteq \mathbb{F}_{p}(t)=:E$. Observe that $t\in E$ satisfies $x^{p}-t^{p}\in F[x]$. Thus, $m_{F, t}(x)$ divides $x^{p}-t^{p}$ in $F[x]$. The same statement holds in $\overline{F}[x]$ too, where $x^{p}-t^{p}=(x-t)^{p}$. Thus, $m_{F, t}(x)=(x-t)^{e}$ for some $e> 1$. Thus, $t$ is not separable over $F$. 

> [!Lemma]
> Let $f\in F[x]$ be nonzero. Then, $f$ is separable iff $\text{gcd}(f, f')=1$ [^1], where $f'$ is the formal derivative of $f$. 
> 
> > [!Proof]-
> > 
> > $f$ is not separable $\iff$ $f$ has a repeated root $\iff$ $f$ and $f'$ have a common root $\iff$ $\text{gcd}(f, f')\ne 1$. 
> 

^72c2c8

> [!Corollary]
> Let $F$ be a field of characteristic zero. Then, all algebraic extensions of $F$ are separable. 
> 
> > [!Proof]-
> > 
> > Let $E/F$ be an algebraic extension. Let $\alpha\in E$ and $m_{F, \alpha}(x)\in F[x]$ be the minimal polynomial of $\alpha$. Since $\text{char}(F)=0$, the derivative of a nonconstant polynomial is nonzero. Thus, $m_{F, \alpha}'$ is nonzero. Since $m_{F, \alpha}$ is irreducible, it cannot share any roots with $m'_{F, \alpha}$ in $F$. It follows from [[LEC ALG3 20#^4f80d1]] that $\text{gcd}(m_{F;\alpha}, m_{F, \alpha}')=1$. By [[#^72c2c8]], $\alpha$ is separable. 
> 

> [!Theorem] Primitive element theorem
> Let $E/F$ be a [[LEC ALG3 16#^62eddf|finite]] separable extension. Then there exists $\gamma\in E$ such that $E=F(\gamma)$. 
> 
> > [!Proof]-
> > 
> > A finite extension is finitely generated, as we can write $E=F(\alpha_{1}, \dots, \alpha_{n})$. Induct on $n$. If $n=1$, we are done. Suppose the claim is true for $n=k$ and $E=F(\alpha_{1}, \dots, \alpha_{k+1})$. By the inductive hypothesis, we can write this as $E=F(\gamma_{1}, \alpha_{k+1})$. Thus, to prove the general case, it suffices to prove the claim for $n=2$. 
> > 
> > Suppose $E= F(\alpha, \beta)$. Suppose $F$ is a finite field. Since [[LEC ALG3 16#^167dcc|finitely generated algebraic extensions are finite]] and $F$ is finite, $E$ must be finite. By [[LEC ALG3 21#^977ed1]].4, $E^{\times}$ is cyclic. Let $\gamma$ generate $E^{\times}$. Clearly, $E=F(\gamma)$. 
> > 
> > Now suppose $F$ is infinite. Let $f, g\in F[x]$ be the minimal polynomials of $\alpha$ and $\beta$. Let $\alpha_{1}(:= \alpha), \alpha_{2}, \dots, \alpha_{m}$ be the roots of $f(x)$ in $\overline{F}$. Let $\beta_{1}(:=\beta), \beta_{2}, \dots, \beta_{n}$ be the roots of $g(x)$ in $\overline{F}$. Since $\alpha$ and $\beta$ are separable, $f$ and $g$ are separable, so we have $\alpha_{i}\ne \alpha_{j}$ and $\beta_{i}\ne \beta_{j}$ for $i\ne j$. Define
> > $$
> > \gamma_{ij}:=\beta_{j}+c\alpha_{i}\quad 1\leqslant i\leqslant m, 1\leqslant  j\leqslant n, c\in F.
> > $$
> > Since $F$ is infinite, we can choose $c$ such that all the $\gamma_{ij}$'s are distinct. Write $\gamma$ for $\gamma_{11}=\beta_{1}+c\alpha_{1}\in E$. Let $K=F(\gamma)\subseteq E$. We will show that $K=E$. Observe that it suffices to show $\alpha\in K$, since that would imply $\beta\in K$ and $E=F(\alpha, \beta)\subseteq K$. 
> > 
> > Consider the polynomial $h(x)=g(\gamma-cx)\in K[x]$ and note that $h(\alpha)=g(\beta)=0$. Let
> > $$
> > d(x)=\text{gcd}(f(x), h(x))\in K[x].
> > $$
> > Again, by [[LEC ALG3 20#^4f80d1]], the gcd in $K[x]$ and $\overline{F}[x]$ are equal. Thus, we know that $x-\alpha\ | \ \text{gcd}(f(x), h(x))$. If we show that $\text{gcd}(f, h)=x-\alpha$ in $\overline{F}[x]$, we will have $x-\alpha\in K[x]$, and hence $\alpha\in K$. Observe that $\text{gcd}(f, h)$ in $\overline{F}[x]$ will be of the form
> > $$
> > \prod_{i\in S\subseteq[n]}(x-\alpha_{i}).
> > $$
> > Hence to show $\text{gcd}(f, h)=x-\alpha$, it suffices to show $h(\alpha_{i})\ne 0$ for all $2\leqslant i\leqslant n$. This is easy:
> > $$
> > \begin{align}
> > 0=h(\alpha_{i}) & \iff g(\gamma-c\alpha_{i})=0 \\
> >  & \iff \gamma-c\alpha_{i}=\beta_{j} \text{ for some }j \\
> >  & \iff \gamma_{11}=\gamma_{ij} \\
> >  & \iff (1, 1)=(i, j).
> > \end{align}
> > $$
> > 
> 

^0d8ecf

> [!Question]
> Where does Artin use characteristic zero?

[^1]: It does not matter weather you take the gcd in $F[x]$ or $K[x]$; see [[LEC ALG3 20#^4f80d1]]. 
