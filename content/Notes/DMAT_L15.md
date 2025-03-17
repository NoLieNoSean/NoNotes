---
tags:
  - DMAT
  - Lecture
date: 2025-03-12
time: 11:51
---
## The cycle index polynomial

Let $G\leqslant\text{Sym}(X)$ act on $X$, $|X|=n$. [[DMAT_L14#An example 2-colouring of a cube|Recall]] that the number of $r$-colourings of $X$ fixed by $g\in G$ is given by $r^{c(g)}$, where $c(g)$ is the number of cycles in the cycle representation of $g$. Now, let $c_{i}(g)$ denote the number of cycles of length $i$ in the cycle representation of $g$. Note that $\sum_{i=1}^{n}ic_{i}(g)=n$. 

Associate which each $g\in G$ the monomial $z(g; s_{1}, s_{2}, \dots, s_{n})\equiv s_{1}^{c_{1}(g)}s_{2}^{c_{2}(g)}\dots s_{n}^{c_{n}(g)}$ in indeterminates $s_{1},\dots, s_{n}$. The *cycle index polynomial* of $G$ is defined to be
$$
Z(G;s_{1}, s_{2}, s_{3}, \dots, s_{n})\equiv \frac{1}{|G|}\sum_{g\in G}z(g; s_{1},s_{2},\dots ,s_{n})=\frac{1}{|G|}\sum_{g\in G}s_{1}^{c_{1}(g)}s_{2}^{c_{2}(g)}\dots s_{n}^{c_{n}(g)}.
$$
For the cube 2-colouring example from the previous lecture, the cycle index polynomial is
$$
\frac{1}{24}(s_{1}^{6}+3s_{1}^{2}s_{2}^{2}+6s_{1}^{2}s_{4}+6s_{2}^{3}+8s_{3}^{2}).
$$
If we wanted to count the number of non-equivalent r-colourings of the cube, that would be
$$
\frac{1}{24}(r^{6}+3r^{4}+6r^{3}+6r^{3}+8r^{2}).
$$
### An example: Orbits of k-subsets

Let $G\leq\text{Sym}(X)$, act on $X$, $|X|=n$. $G$ has an induced action on the set of all k-subsets of $X$. Let the number of orbits in this action be $f_{k}$. By convention, $f_{0}=1$. $f_{1}$ is the number of orbits in action of $G$ on $X$. We will show that the ordinary generating function for $f_{k}$ can be obtained from the cycle index polynomial.

> [!Theorem] Proposition
> $$
> \sum_{k=0}^{n} f_{k}t^{k}=Z(G;1+t, 1+t^{2}, \dots, 1+t^{n}).
> $$

> **Proof**
> From [[DMAT_L14#Burnside's Lemma|Burnside's Lemma]], 
> $$
> f_{k}=\frac{1}{|G|}\sum_{g\in G}\text{fix}_{k}(g).,
> $$
> where $\text{fix}_{k}(g)$ is the number of elements in $\binom{X}{k}$ that $g$ fixes. Let the generating function of $f_{k}$ be $f$. 
> $$
> \begin{align}
> f(t) & =\frac{1}{|G|}\sum_{k=0}^{n} \sum_{g\in G}\text{fix}_{k}(g)t^{k} \\
>  & =\frac{1}{|G|}\sum_{g\in G}\sum_{k=0}^{n} \text{fix}_{k}(g)t^{k}
> \end{align}
> $$
> Note that $A\subseteq X$, $|A|=k$ is fixed by $g$ iff $A$ is a union of cycles of $g$. So, the generating function of $\text{fix}_{k}(g)$ is given by
> $$
> \begin{align}
> \sum_{k=0}^{n} \text{fix}_{k}(g) & =\prod_{i=1}^{n}  \left( \sum_{a_{i}=0}^{c_{i}(g)}\binom{c_{i}(g)}{a_{i}}t^{ia_{i}}  \right)  \\
>  & =\prod_{i=1}^{n} (1+t^{i})^{c_{i}(g)} \\
>  & =z(g;1+t, 1+t^{2}, \dots, 1+t^{n})
> \end{align}
> $$
> Thus, $f(t)=Z(G; 1+t, 1+t^{2}, \dots, 1+t^{n})$.

## Cycle index theorem

Generalising the previous example, consider a collection of figures $\phi_{1}, \phi_{2}, \dots$, each of which has a non-negative integral weight $w(\phi_{i})$. Let $a_{n}$ be the number of figures $\phi_{i}$ of weight $n$. Let $a(t)\equiv\sum_{n\geq 0} a_{n}t^{n}$. This is called the *figure generating series*.

Let $G\leq\text{Sym}(X)$, and let $G$ act on $X$. $X$ is finite. $X$ is analogous to the $X$ from the previous lecture. Consider functions $f:X\to\Phi$. Define the weight of $f$ by 
$$
w(f)\equiv\sum_{x\in X}w(f(x)).
$$
For $\pi\in G$, define $f^{\pi}(x)\equiv f(x^{\pi ^{-1}})$. Note that $w(f^{\pi})=w(f)$, so the action of $G$ does not change the weights of functions. Let $b_{n}$ be the number of orbits in the action of $G$ on functions of weight $n$. Define $b(t)\equiv\sum_{n\geq 0}b_{n}t^{n}$. This is called *the function generating series*.

> [!Theorem] Cycle index theorem
> $$
> b(t)=Z(G;a(t), a(t^{2}), \dots, a(t^{n})).
> $$

Consider the previous example. We want the generating function for $f_{k}$. The cycle index theorem gives us the generating function for $b_{k}$. Let $\Phi=\{ 0, 1 \}$, $w(0)=0$, $w(1)=1$. $a(t)=1+t$. Now, a function $f:X\to\Phi$ is nothing but a characteristic function of a subset $Y$ of $X$. Also, note that $f^{\pi}$ is the characteristic function of $Y^{\pi}$ for any $\pi\in G$. So, $f_{k}=b_{k}$, and the result follows. 

**Proof**

!

Let $\Phi, \Phi'$ be two sets of figures, with $a(t)$ and $a'(t)$ being the respective figure generating series. 

$\Phi \times\Phi'=\{ (\phi, \phi')\ | \ \phi\in\Phi, \phi'\in\Phi' \}$
$w(\phi, \phi')$=$w(\phi)+w(\phi')$

figure generating series for the pairs $\Phi \times\Phi'$ is $a(t)a'(t)$.

!

All functions from $X\to\Phi$ as figures. What is the figure generating series? $a(t)^{|X|}$. 

!

The figure generating series for functions fixed by an element $g\in G$: $a(t)^{c_{1}(g)}a(t^{2})^{c_{2}(g)}\dots a(t^{n})^{c_{n}(g)}$. 