---
id: "625"
date: 2026-11-21
time: 19:11
tags:
---
> [!Definition]
> Given any collection $\{ x_{\alpha} \}_{\alpha\in A}$ of numbers $x_{\alpha}\in[0, \infty]$ indexed by an arbitrary set $A$, we define the sum $\sum_{\alpha\in A}x_{\alpha}$ by the formula
> $$
> \sum_{\alpha\in A}x_{\alpha}:=\sup _{F\subseteq A,\,F\text{ finite}}\sum_{\alpha\in F}x_{\alpha}.
> $$
> 

> [!Proposition] @taoIntroductionMeasureTheory2011 Exr. 0.0.1
> If $\{ x_{\alpha} \}_{\alpha\in A}$ is a collection of numbers $x_{\alpha}\in[0, \infty]$ such that $\sum_{\alpha\in A}x_{\alpha}< \infty$, then $x_{\alpha}=0$ for all but at most countably many $\alpha\in A$, even if $A$ itself is uncountable. 
> 
> > [!Proof]-
> > 
> > Let $X=\{ x_{\alpha}:\alpha\in A, x_{\alpha}> 0 \}$. For $q\in \mathbb{Q}_{+}$, define $X_{q}=\{ x_{\alpha}: \alpha\in A, x_{\alpha}> q\}$. We have
> > $$
> > X=\bigcup_{q\in \mathbb{Q}_{+}}X_{q}.
> > $$
> > If $X$ is uncountable, there exists $q$ such that $X_{q}$ is uncountable, forcing $\sum_{\alpha\in A}x_{\alpha}=\infty$. 