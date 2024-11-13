---
tags: 
date: 2024-11-10
time: 17:58
---
>[!info] Recall
>- [[Algebra1_L20#Inner Product Spaces|Inner Product Space]]

## Inner Product Spaces

>[!theorem] Lemma
>
>The inner product is linear in the first slot and anti-linear in the second slot

> **Proof:**
> $$
> \begin{align}
> \langle u, \alpha v+\beta w\rangle &= \overline{\langle\alpha v+\beta w, u\rangle} \\
> & = \overline{\alpha\langle v,u\rangle + \beta\langle w,u\rangle}\\
> & = \overline\alpha\overline{\langle v,u\rangle} + \overline\beta \overline{\langle w,u\rangle}\\
> & = \overline\alpha\langle u,v\rangle + \overline\beta \langle u,w\rangle
> \end{align}
> $$

>[!important] Corollary
>$\langle \alpha u + \beta v, \alpha u + \beta v\rangle = \alpha\bar{\alpha}\langle u,u\rangle + \alpha\bar{\beta}\langle u,v\rangle + \bar{\alpha}\beta\langle v,u\rangle + \beta\bar{\beta}\langle v,v\rangle$

>[!theorem] Lemma
> If $u = 0$, then $\langle u, v \rangle = 0$.

> **Proof:**
> _Method 1:_
> $$
> \langle 0, v\rangle = \langle 0 + 0, v\rangle = \langle 0, v\rangle + \langle 0, v\rangle \implies \langle 0, v\rangle = 0
> $$
> *Method 2:*
> 

>[!example] Inner Product in $\mathbb{F}^n$
> For $V = \mathbb{F}^n$, take
> $$
> \begin{align}
> u &= (u_{1}, u_{2}, \dots, u_{n})\\
> v &= (v_{1}, v_{2}, \dots, v_{n})
> \end{align}
> $$
> Then the inner product of $u$ and $v$ is
> $$
> \langle u, v\rangle = \sum_{i=1}^n u_{i}\bar{v}_{i}
> $$

>[!example] Inner Product of Functions (Hilbert Space)
>
>Let $V$ be the set of all continuous real/complex functions on $[0,1]$.
>For $f(t), g(t) \in V$ we define their inner product as
>$$
> \langle f(t), g(t) \rangle = \int_{0}^{1} f(t)\overline{g(t)} \ dt
>$$
>It is easy to see that this satisfies all the rules of the inner product.

### Length of vectors

>[!theorem] Definition
> We define the length of a $v \in V$ as 
> $$
> ||v|| = \sqrt{ \langle v, v\rangle }
> $$
- We can infer from the definition of the norm that $||\lambda v|| = |\lambda| \, ||v||$

## The Cauchy-Schwarz Inequality

>[!Theorem] The Inequality
> For any two $u, v \in V$, we have
> $$
> |\langle u,v\rangle| \leq ||u|| \, ||v||
> $$ 

>**Proof:**
>