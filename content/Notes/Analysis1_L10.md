---
tags:
  - Lecture
  - ANA1
  - Processed
---
2024-09-06, Friday
1030

---
## What does $\lim_{ x \to p }f(x) = p$ mean?

### First stab at a definition

>[!Definition]
>Let $f: \mathbb{R}\to \mathbb{R}$.
>$\lim_{ x \to p }f(x) = q$ means for any $\epsilon>0$, there exists a $\delta>0$, such that  $0<|x-p|<\delta$ implies $|f(x)-q|<\epsilon$. 

Note that if we edited the definition to say $\delta\ge 0$ such that $|x-p|<\delta$, $f(p)$ would (always) be a limit, as we can have $\delta=0$. Not a good idea. Besides, we do not want to make any assertion about $f(p)$.

Also note that we do NOT want to say $0<|f(x)-q|<\epsilon$, since $f(x)$ may be a constant function around $x=p$. 

> [!Note] What's wrong with this?
> We would like to take the limit of a function as $x$ approaches a point $p$ which is not in its domain. Thus, we would like to allow the domain of the function to be something that does not contain $p$, i.e, some subset $E\subset\mathbb{R}$. However, we cannot just replace the domain $\mathbb{R}$ with $E$ in the definition, as this might result in the "such that" clause being vacuously true for some $p$ (when $E$ is a singleton set $\{ p \}$, for example, $\lim_{ x \to p }=q$ is true for all $q\in \mathbb{R}$), making the definition useless. Thus, we need to be more discerning about the types of subsets $E$ we allow in the definition.

### Second stab at a definition

>[!Definition]
>Let $f: E(\subset \mathbb{R})\to \mathbb{R}$, such that $E$ contains a deleted neighborhood of $p$. 
>Then, $\lim_{ x \to p }f(x) = q$ means for any $\epsilon>0$, there exists a $\delta>0$, such that  $0<|x-p|<\delta$ implies $|f(x)-q|<\epsilon$. 

Note that we have only modified the prerequisites. We have replaced $\mathbb{R}$ with a subset of $E\subset\mathbb{R}$, and required $E$ to contain a deleted neighborhood of $p$. We say deleted neighborhood since we do not want the membership of $p$ in $E$ to play any role in the definition.

This definition attempts to ensure that the "such that" clause is never vacuously true. If $E$ contains a (deleted) neighborhood of $p$, $E$ contains an open ball (an open interval in $\mathbb{R}$) centered at $p$ of some finite radius (minus $p$, won't say it again). Thus, for any $\delta>0$, we will have $x$ satisfying $0<|x-p|<\delta$, so the "such that" clause will never be vacuously true. 

>[!Note] What's wrong (or rather inconvenient) about this?
>Consider a function $f:\mathbb{Q}(\subset \mathbb{R})\to \mathbb{R}$ defined as $f(x)=0$. While $\mathbb{Q}$ does not contain a deleted neighborhood of, say, $p=1$, we would still like to be able to say $\lim_{ x \to 1 }f(x)=0$. What we would actually like to mandate is regardless of how small $\delta$ becomes, we will always have *some* $x$ satisfying $0<|x-p|<\delta$. 

### Brutus's stab at a definition

We formalize the requirements we have distilled so far by defining *limit points*.
#### Limit points
Rudin, 2.18
>[!Definition]
>Given $E\subset \mathbb{R}$, a point $p\in \mathbb{R}$ is a *limit point* of $E$, if for all $\delta>0$,  $(p-\delta, p+\delta)\cap E$ contains a point other than $p$.  
>We denote the set of limit points of $E$ by $E'$. 

>[!Definition]
>If $p\in E$ and $p\not\in E'$, $p$ is called an *isolated point* of $E$. 

Note that the membership of $p$ in $E'$ has got nothing to do with the membership of $p$ in $E$. 
- $p \in E$, $p\in E'$: For example, $1\in(0, 2)$
- $p \in E$, $p\not\in E'$: $p$ is an isolated point of $E$. For example, $1\in \{ 1, 2 \}$
- $p\not\in E$, $p\in E'$: For example, $0\not\in(0, 1)$
- $p\not\in E$, $p\not\in E'$: For example, $2\not\in(0, 1)$

Observe that if $E$ has a limit point, it cannot be of finite cardinality.

For $f:E(\subset \mathbb{R})\to \mathbb{R}$, it makes sense to define $\lim_{ x \to p }f(x)$ only if $p$ is a limit point of the domain of $f$. 

#### Definition of limit of a function in $\mathbb{R}$
>[!Definition]
>Let $f: E(\subset \mathbb{R})\to \mathbb{R}$, and let $p$ be a limit point of $E$.
>Then, $\lim_{ x \to p }f(x) = q$ means for any $\epsilon>0$, there exists a $\delta>0$, such that  $0<|x-p|<\delta$ implies $|f(x)-q|<\epsilon$. 

---
## Theorems about limit points

Rudin, 2.20
>[!Theorem]
>If $p$ is a limit point of a set $E$, then every neighborhood of $p$ contains infinitely many points of $E$.

Fairly easy to see.

Rudin, 3.2 d
>[!Theorem]
>If $X$ is a metric space, $E\subset X$ and if $p$ is a limit point of $E$, then there is a sequence $(p_{n})$ in $E$ such that $p=\lim_{ n \to \infty }p_{n}$. 

Ditto.

---
## Analogs for metric spaces

### Definition of limit point in metric spaces

>[!Definition]
>Given $E\subset X$, a point $p\in X$ is a *limit point* of $E$, if for all $\delta>0$, $B_{\delta}(p)\cap E$ contains a point other than $p$. 

### Definition of limit of a function in metric spaces

Rudin, 4.1
>[!Definition]
>Let $X$ and $Y$ be metric spaces, $E\subset X$, $f:E\to Y$, $p$ is a limit point of $E$.
>We write *$\lim_{ x \to p }f(x)= q$* , $q\in Y$ if for any $\epsilon>0$ there exists a $\delta>0$ such that $0<d_{X}(x, p)<\delta$ implies $d_{Y}(f(x), q)<\epsilon$, i.e, $f(B_{\delta}(p, E)\setminus \{ p \})\subset B_{\epsilon}(q, Y)$.

---

## Epilogue

We stated Rudin, 4.2, the sequence criterion.
