---
tags:
  - Tutorial
  - ALG3
date: 2025-08-13
time: 14:55
---
# Problem 2

> [!Question]
> Let $n\geq 1$ be an integer. Determine $U((\mathbb{Z}/n\mathbb{Z})[x])$.

Let $\psi(n)$ be the squarefree part of $n\in \mathbb{N}$. Call $a\in \mathbb{Z}/n\mathbb{Z}$ *nilpotent* if $\psi(n)\ | \ a$. Call $g(x)\in \mathbb{Z}/n\mathbb{Z}[x]$ nilpotent if $g(x)^{k}=0$ for some $k\in \mathbb{N}$, called the order of $g$.

> [!Lemma]
> The sum of two nilpotent polynomials is nilpotent.
> 
> > [!Proof]-
> > 
> > Let $g(x)$ and $h(x)$ be nilpotent polynomials of orders $\alpha$ and $\beta$. Then, $(g(x)+h(x))^{\alpha+\beta}=0$, since every term in its expansion is of the form $cg(x)^{i}h(x)^{j}$, where $i\geq\alpha$ or $j\geq \beta$. 
> 

^8a30c9

> [!Lemma]
> $g(x)=\sum_{i\geq 0} g_{i}x^{i}$ is nilpotent iff every $g_{i}$ is nilpotent for $i\geq 0$.
> 
> > [!Proof]-
> > 
> > $(\impliedby)$ Let $s$ be the highest power of a prime factor in the prime factorization of $n$. It is clear that any product of $s$ or more nilpotent elements in $\mathbb{Z}/n\mathbb{Z}$ is $0$. Thus, $g(x)^{s}=0$, since every coefficient in $g(x)^{s}$ is a product of $s$ nilpotent elements.
> > 
> > $(\implies)$ If $h(x)$ is a nilpotent polynomial of degree $d$, it is clear that $h_{0}$ and $h_{d}$ must be nilpotent. Thus, any nilpotent polynomial of degree $1$ has nilpotent coefficients!
> > 
> > Now, we will proceed to prove the claim by induction. The claim is trivially true for $d=0$, is true for $d=1$ by the preceding observation. Next, assume that the claim is true for nilpotent polynomials of degree $d$. Let $h(x)=h_{0}+\dots h_{d+1}x^{d+1}$ be a nilpotent polynomial of degree $d+1$. Again, we know that $h_{0}$ and $h_{d+1}$ are nilpotent. Now, notice that
> > $$
> > h_{0}+h_{1}x+\dots+h_{d}x^{d}=h(x)+(-h_{d+1}x^{d+1}).
> > $$
> > Since both $h(x)$ and $-h_{d+1}x^{d+1}$ are nilpotent, it follows from [[#^8a30c9]] that $h_{0}+h_{1}x+\dots+h_{d}x^{d}$ is nilpotent. It follows from the induction hypothesis that $h_{0}, \dots, h_{d}$ are nilpotent.
> 

^e42aa7

Now, I claim the following: $f(x)=\sum f_{i}x^{i}$ is a unit in $\mathbb{Z}/n\mathbb{Z}[x]$ $\iff$ $f_{0}\in U_{n}$ and $f_{i}$ is nilpotent for $i> 0$. 

> [!Proof]-
> $(\impliedby)$ If $f_{0}\in U_{n}$ and $f_{i}$ is nilpotent for $i> 0$, $f$ can be expressed as
> $$
> f_{0}(1+f_{0}^{-1}\overbrace{ (f_{1}x+f_{2}x^{2}+\dots f_{k}x^{k}) }^{g(x)\equiv}).
> $$
> 
> ^ed1d3b
> 
> Note that by [[#^e42aa7]], $g(x)$ is nilpotent. 
> 
> If we attempt to construct an inverse $h(x)$ of $1+f_{0}^{-1}g(x)$, we will observe $h(x)$ is forced to be
> $$
> 1-f_{0}^{-1}g(x)+(f_{0}^{-1})^{2}g(x)^{2}+\dots=\sum(-f_{0}^{-1})^{i}g(x)^{i}.
> $$
> 
> ^ec78c6
> 
> It is clear that $h(x)\in \mathbb{Z}/n\mathbb{Z}[x]$ only if $g(x)^{i}=0$ for all $i> l$ for some integer $l$. Since $g(x)$ is nilpotent, this condition is satisfied. Thus, $f(x)$ is a unit, with inverse 
> $$
> f_{0}^{-1}\sum_{i=0}^{l} (-f_{0}^{-1})^{i}g(x)^{i}.
> $$
> $(\implies)$ $f_{0}\in U_{n}$ is immediate. We again express $f(x)$ as in [[#^ed1d3b]]. Since $f_{0}$ is invertible and $f(x)$ in invertible, so is $1+f_{0}^{-1}g(x)$, the inverse of must then be given by [[#^ec78c6]], because any inverse would need to satisfy the recursive relation from multiplying out, which formally yields the series. Since the inverse is a (finite-degree) polynomial, the series must terminate, implying $g(x)$ must be nilpotent, which in turn implies $f_{i}$ is nilpotent for $i> 0$ by [[#^e42aa7]]. 