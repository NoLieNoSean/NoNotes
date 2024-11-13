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
> *Method 2: (~~used only by the utterly deranged~~)*
> Consider the linear map $T: V \to W$ where $u \mapsto \langle u, v \rangle$ for a fixed $v \in V$. We know that $T(0) = 0$. Hence $\langle 0, u\rangle = 0$. As $v$ was arbitrary, the proposition holds for any $v \in V$.
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
> \lVert v \rVert  = \sqrt{ \langle v, v\rangle }
> $$
- We can infer from the definition of the norm that $\lVert \lambda v \rVert = |\lambda| \, \lVert v \rVert$

## The Cauchy-Schwarz Inequality

>[!Theorem] The Inequality
> For any two $u, v \in V$, we have
> $$
> \lvert\langle u,v\rangle\rvert \leq \lVert u \rVert \,\lVert v \rVert 
> $$ 

>**Proof:**
> *Case 1:* $u = 0$ 
> $$ 
> 0 = |\langle u, v\rangle| \le \lVert u \rVert \, \lVert v \rVert  = 0
> $$
> *Case 2*: $u \neq 0$ and $\langle u, v\rangle \in \mathbb{R}$
> 
> For any $\lambda \in \mathbb{R}$, we have
> $$
> \begin{align}
> \langle \lambda u + v, \lambda u + v \rangle &\geq 0 \\
> \lambda^2 \langle u, u \rangle + 2\lambda\langle u , v\rangle + \langle v, v\rangle  & \geq 0 
> \end{align}
> $$
> As this hold for all $\lambda$, we have
> $$
> \begin{align}
> 4\langle u, v\rangle^2 & \leq 4\langle u, u\rangle \langle v, v\rangle \\
\langle u, v\rangle  & \leq \lVert u \rVert \,\lVert v \rVert 
> \end{align}
> $$
> *Case 3:* $u \neq 0$ and $\langle u, v\rangle \not\in \mathbb{R}$
> 
> We have $\langle u, v\rangle \neq 0$ as as $\langle u, v\rangle \not\in \mathbb{R}$.
> Take $\alpha = \langle u, v\rangle$. Observe that
> $$
> \left\langle  \frac{u}{\alpha}, v \right\rangle = \frac{1}{\alpha}\langle u, v\rangle =1 \in R
> $$
> We can apply *Case 2*.
> $$
> \begin{align}
> \left\lvert  \left\langle  \frac{u}{\alpha}, v \right\rangle   \right\rvert &\leq \left\lVert  \frac{u}{\alpha}  \right\rVert \, \lVert v \rVert  \\
> \cancel{\frac{1}{\lvert \alpha \rvert }} \lvert \langle u, v\rangle  \rvert &\leq \cancel{\frac{1}{\lvert a \rvert }}\lVert u \rVert \, \lVert v \rVert  \\
> \lvert\langle u,v\rangle\rvert &\leq \lVert u \rVert \,\lVert v \rVert 
> \end{align}
> $$

>[!important] Corollary
>$$
>{\left\lvert  \int_{0}^1 f(t)g(t) \, dt \right\rvert}^2 \leq \left( \int_{0}^{1} \lvert f^2(t) \rvert  \, dt  \right)\left( \int_{0}^{1} \lvert g^2(t) \rvert  \, dt  \right)
>$$

## Orthogonal Vectors

>[!theorem] Definition
>If $u, v \in V$ then $u$ is orthogonal to $v$ if $\langle u, v\rangle = 0$.

>[!theorem] Definition
> If $W \subset V$ is a subspace then the Orthogonal complement of $W$ is defined as
> $$
> W^{\perp} = \{ x \in V \mid \langle x, w\rangle = 0\,, \ \forall \ w \in W \}
> $$

- If $u$ is orthogonal to $v$ then $v$ is orthogonal to $u$ as $\langle v, u\rangle = \overline{\langle u, v\rangle} = 0$

>[!theorem] Lemma
> $W^\perp$ is a subspace of $V$.

> **Proof:**
> 1) $0 \in W^\perp$ as $\langle 0, w\rangle = 0\ \forall \ w \in W$.
> 2) For any $u, v \in W^\perp$, we have
> $$
> \langle \alpha u + \beta v, w\rangle = \alpha \langle u, w\rangle +\beta\langle v, w\rangle = 0
> $$
> That is $W^\perp$ is closed under addition and scalar multiplication.

>[!theorem] Lemma
>$$
>W \, \cap \, W^\perp = \emptyset
>$$

> **Proof:**
> If $w \in W \, \cap \, W^\perp$ then $\langle w, w\rangle = 0 \implies w = 0$

>[!theorem] Definition
> A set of vectors $\{ v_{i} \}$ in $V$ is an orthonormal set if
> $$
> \langle v_{i}, v_{j}\rangle = 
> \begin{cases}
> 1 & i = j \\
> 0 & i \neq j
> \end{cases}
> $$

>[!theorem] Lemma
> If $\{ v_{i} \} \subset V$ is an orthonormal set then $\{ v_{i} \}$ are linearly independent.

> **Proof:**
> Assume that for some $\beta_{i}$,
> $$
> \begin{align}
> \sum_{i=1}^{n} \beta_{i}v_{i} & =0 \\
> \left\langle  \sum_{i=1}^{n} \beta_{i}v_{i}, v_{k} \right\rangle &= \langle 0, v_{k}\rangle  \\
> \sum_{i=1}^{n} \beta_{i}\langle v_{i}, v_{k}\rangle &=0 \\
> \beta_{k}&=0
> \end{align}
> $$
> As $1 \leq k \leq n$, this gives that all $\beta_{i}= 0$. Hence $\{ v_{i} \}$ is linearly independent.

 >[!important] Corollary
 > For an orthonormal set $\{ v_{i} \}$, if there is some $w$ such that $w = \alpha_{1}v_{1} + \alpha_{2}v_{2} +\dots + \alpha_{n}v_{n}$ then $\alpha_{k} = \langle w, v_{k}\rangle$.

>[!Important] Corollary
> For an orthonormal set $\{ v_{i} \}$ in $V$ and a $w \in V$, we have
> $$
> u = w - \langle w, v_{1} \rangle v_{1} - \langle w, v_{2}\rangle v_{2} - \dots - \langle w, v_{n}\rangle v_{n} 
> $$
> Here, $u$ is orthogonal to each $v_{1}, v_{2}, \dots,v_{n}$.

## Gram-Schmidt Orthogonalization Process

>[!Theorem] Theorem
>Every finite dimensional vector space has an orthogonal basis.

Let $V$ be any finite dimensional vector space. Take a basis of $V$, say $\{ v_{1}, v_{2},\dots,v_{n} \}$. From this, we will construct an orthonormal set of $n$ vectors.

Define 
$$
w_{1} = \frac{v_{1}}{\lVert v_{1} \rVert}
$$
as we want $\langle w_{1}, w_{1}\rangle = 1$.
Using out corollary, we see that $u_{2}$ defined as
$$
u_{2} = v_{2} - \langle v_{2}, w_{1}\rangle w_{1}
$$

is orthogonal to $w_{1}$. Note that $u_{2}\neq 0$ as $v_{2}$ and $w_{1}$ are linearly independent. Now we can define
$w_{2}$ as
$$
w_{2} = \frac{u_{2}}{\lVert u_{2} \rVert }
$$Continuing this process, we get
$$
\begin{align}
u_{1} &= v_{1}  & w_{1} = \hat{u}_{1}\\
u_{2} &= v_{2} - \langle v_{2}, w_{1} \rangle v_{2}  & w_{2} = \hat{u}_{2}\\
u_{3} &= v_{3} - \langle v_{3}, w_{1} \rangle v_{3} - \langle v_{3}, w_{2}\rangle w_{2}  & w_{3} = \hat{u}_{3}\\
 & \ \ \vdots  & \vdots \quad \ \ \\
u_{k} &= v_{k}-\langle v_{k}, w_{1}\rangle w_{1} - \langle v_{k}, w_{2}\rangle w_{2} - \dots - \langle v_{k} , w_{k-1}\rangle v_{k} & w_{k} = \hat{u}_{k} 
\end{align}
$$
where $\hat{v}$ represents the normalized vector $v$.
The set of $\{ w_{i} \}$ will be an orthonormal basis as they are linearly independent and have degree $n$.