---
id: "444"
date: 2026-04-01
time: 12:04
tags:
  - ALG4
  - Lecture
---
# Purely inseparable extensions

> [!Proposition]
> Let $f\in F[x]$ irreducible and not separable. Let $p=\text{char }F$ ($> 0$, by [[LEC ALG4 16#^f107d6]]). 
> 1. Then $f(x)=g(x^{p})$ where $g\in F[x]$ is irreducible. 
> 2. By applying $(1)$ repeatedly, there exists irreducible and separable $\tilde{g}\in F[x]$ such that $f(x)=\tilde{g}(x^{p^{n}})$.

> [!Definition]
> Say that $E/F$ is **purely inseparable** if for all $\alpha\in E\setminus F$, $\alpha$ is not [[LEC ALG4 16#^ba7e62|separable]] over $F$. 

> [!Proposition] @isaacsAlgebraGraduateCourse2009 19.10
> Let $E/F$ be algebraic with $\text{char}(F)=p> 0$. TFAE:
> 1. $E/F$ is purely inseparable. 
> 2. For all $\alpha\in E$, there exists $n\in \mathbb{N}$ such that $\alpha^{p^{n}}\in F$. 
> 3. Each element of $E$ has minimal polynomial over $F$ of the form $x^{p^{n}}-a$ for some integer $n\geqslant 0$ and some element $a\in F$. 

> [!Proposition] @isaacsAlgebraGraduateCourse2009 19.14
> Let $E/F$ be an algebraic extension and let $S=\{ \alpha\in E:\alpha \text{ is separable over }F \}$. Then $S$ is a field. It is the unique intermediate field that is separable over $F$ and over which $E$ is purely inseparable. We may denote $S$ by $E_{\text{sep}}$.

> [!Lemma] @isaacsAlgebraGraduateCourse2009 19.15
> Let $F$ be a field and let $\alpha, \beta\in \overline{F}$ be separable over $F$. Then $E[\alpha, \beta]/F$ is a separable extension. 


> [!Theorem]
> Let $E/F$ be a finite extension. Then $\text{Gal}(E/F)=\text{Gal}(E_{\text{sep}}/F)$. 


---
