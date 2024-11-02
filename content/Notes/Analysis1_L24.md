---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-18, Friday
time: 10:30
---
## Mean value theorems

### Derivative is zero at local extrema

Rudin, 5.7

>[!Definition]
>Let $f$ be a real function defined on a metric space $X$. We say that $f$ has a *local maximum* at a point $p\in X$ if there exists a $\delta>0$ such that for all $x\in B_{\delta}(p)$ we have$f(x)\leq f(p)$.
>Local minima are defined similarly.

Rudin, 5.8

>[!Theorem]
>Let $f:[a, b]\to \mathbb{R}$, $p\in(a, b)$. If $f$ has a local maximum at $p$ and $f'(p)$ exists, then $f'(p)=0$.

> **Proof**
> Consider $\delta$ such that $B_{\delta}(p)\subset(a, b)$. 
> $t\in(p-\delta, p)$ $\implies$ ${\Large \frac{{f(t)-f(p)}}{t-p}}\geq 0$ $\implies$ $f'(p)\geq 0$.
> $t\in(p, p+\delta)$ $\implies$ ${\Large \frac{{f(t)-f(p)}}{t-p}}\leq 0$ $\implies$ $f'(p)\leq 0$.
> Thus, $f'(p)=0$. ❏

### Rolle's theorem

>[!Theorem]
>Suppose $f:[a, b]\to \mathbb{R}$ is continuous, $f$ is differentiable on $(a, b)$, and $f(a)=f(b)$. Then, there exists $p\in(a, b)$ such that $f'(p)=0$.
>

> **Proof**
> We know from the [[Analysis1_L16#Extreme value theorem|extreme value theorem]] that $f$ must attain a maximum and a minimum value. If $f$ is constant, any $p\in(a, b)$ works. Otherwise, there exists $x\in(a, b)$ such that $f(x)\ne f(a)=f(b)$. If $f(x)>f(a)$ then take $p\in(a, b)$ such that $f(p)$ is the global maximum, else take $p\in(a, b)$ such that $f(p)$ is the global minimum. From 5.8, $f'(p)=0$. ❏

### Mean value theorem

Rudin, 5.10

>[!Theorem]
>Suppose $f:[a, b]\to \mathbb{R}$ is continuous on $[a, b]$ and differentiable on $(a, b)$. 
>Then, there exists $p\in(a, b)$ such that
>$$
>f(b)-f(a)=(b-a)f'(p).
>$$

> **Proof**
> Rolle's theorem can be made applicable here by subtracting the line joining $(a, f(a))$ and $(b, f(b))$ from $f(x)$, which makes the value at $a$ and $b$ equal.
> $$
> \begin{align}
> h(x) &  \equiv f(x)-\left[f(a)+\left( \frac{{f(b)-f(a)}}{b-a} \right)(x-a)\right] \\
>  & = \frac{1}{b-a}\left[(b-a)(f(x)-f(a))-(f(b)-f(a))(x-a)\right]
> \end{align}
> 
> $$
> Note that $h(a)=h(b)=0$. From Rolle's theorem, there exists $p\in(a, b)$ such that $h'(p)=0$. 
> $$
> \begin{align}
>  & h'(x)=\frac{1}{b-a}\left[(b-a)f'(x)-(f(b)-f(a))\right] \\ \\
> 
>  & h'(p)=0\implies f(b)-f(a)=(b-a)f'(p)
> \end{align}
> $$
> ❏

### Generalized mean value theorem

Rudin, 5.9

> [!Theorem]
> If $f, g:[a, b]\to \mathbb{R}$ are continuous on $[a, b]$ and differentiable on $(a, b)$, then there is a point $p\in(a, b)$ such that
> $$
> [f(b)-f(a)]g'(p)=[g(b)-g(a)]f'(p).
> $$

Notice that plugging $g(x)=x$ gives us the mean value theorem.

> **Proof**
> If $f(a)=f(b)$, the proof follows trivially from Rolle's theorem. Ditto if $g(a)=g(b)$. Thus, assume $f(a)\ne f(b)$ and $g(a)\ne g(b)$. The strategy is similar to that of the previous proof:
> $$
> \begin{align}
> h(x) &  \equiv f(x)-\left[f(a)+\left( \frac{{f(b)-f(a)}}{g(b)-g(a)} \right)(g(x)-g(a))\right] \\
>  & = \frac{1}{g(b)-g(a)}\left[(g(b)-g(a))(f(x)-f(a))-(f(b)-f(a))(g(x)-g(a))\right]
> \end{align}
> $$
> Note that $h(a)=h(b)=0$. From Rolle's theorem, there exists $p\in(a, b)$ such that $h'(p)=0$.
> $$
> \begin{align}
>  & h'(x)=\frac{1}{g(b)-g(a)}\left[(g(b)-g(a))f'(x)-(f(b)-f(a))g'(x)\right] \\
>  & h'(p)=0 \implies (g(b)-g(a))f'(p)=(f(b)-f(a))g'(p).
> \end{align}
> $$
> ❏

>[!Info]
>A simpler version of $h(x)$ that can be used instead:
>$$
>h(x)\equiv(f(b)-f(a))g(x)-(g(b)-g(a))f(x)
>$$

### Rudin, 5.11

Rudin, 5.11

> [!Theorem]
> Suppose $f$ is differentiable in $(a, b)$. Then, 
> 1. If $f'(x)\geq 0$ for all $x\in(a, b)$, then $f$ is monotone increasing.
> 2. If $f'(x)=0$ for all $x\in(a, b)$ then $f$ is constant.
> 3. If $f'(x)\leq 0$ for all $x\in(a, b)$, then $f$ is monotone decreasing.

> **Proof**
> For (1), Let $x_{2}, x_{1}\in(a, b)$, $x_{1}<x_{2}$. Then, $f(x_{2})-f(x_{1})=(x_{2}-x_{1})f'(x)$ for some $x\in(x_{1}, x_{2})$. Thus, $f(x_{2})-f(x_{1})\geq 0$. Similar proofs for (2) and (3). ❏

---
## Properties of derivatives

Not all functions can be derivatives. While every derivative certainly need not be continuous (for example, $x^{2}\sin\left( \frac{1}{x} \right)$ is differentiable at every point in $\mathbb{R}$, but its derivative is not continuous at $0$), every derivative satisfies a property of continuous functions, namely, the conclusion of the [[Analysis1_L22#Intermediate value theorem|intermediate value theorem]].

Rudin, 5.12

> [!Theorem]
> Suppose $f$ is a real differentiable function on $[a, b]$ and suppose $f'(a)<\lambda<f'(b)$. Then there is a point $x\in(a, b)$ such that $f'(x)=\lambda$. 

> **Proof**
> Define $g(x)\equiv f(x)-\lambda t$. Notice that $g'(a)<0$ and $g'(b)>0$. This implies that there exist $t_{1}, t_{2}\in(a, b)$ such that $g(t_{1})<g(a)$ and $g(t_{2})<g(b)$. Thus, $g$ attains its minimum value at some $t\in(a, b)$. Since the derivative is zero at local maxima, we have $g'(t)=0$, which gives us $f'(t)=\lambda$. ❏

> [!Info]
> How does $g'(a)<0$ imply the existence of $t_{1}\in(a, b)$ such that $g(t_{1})<g(a)$? Recall the definition of [[Analysis1_L10#Definition of limit of a function in R|limit of a function]]. We know that $\lim_{ x \to a }  \frac{{g(x)-g(a)}}{x-a}<0$. Choose $\epsilon$ to be $|g'(a)|$, and obtain the corresponding $\delta$. So, for all $x\in(a, a+\delta)$, $\frac{{g(x)-g(a)}}{x-a}\in(-2g'(a), 0)$, i.e, $g(x)<g(a)$. Note that we arrived at stronger statement than we required: $g'(a)<0$ not only implies the existence of $t_{1}\in(a, b)$, but also the existence of an entire interval $(a, a+\delta)$ satisfying the same condition.

> [!Theorem] Corollary
> If $f$ is differentiable on $[a, b]$, then $f'$ cannot have any [[Analysis1_L19#Discontinuous functions|discontinuities]] of the first kind on $[a, b]$.

$f'$ may have discontinuities of the second kind, though.