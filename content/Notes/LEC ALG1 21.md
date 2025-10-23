---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-11-07
time: 14:00
id: "87"
---
# Inner Product Spaces

The motivation behind this is to define a notion of length and perpendicularity (angle) for vectors.

>[!Definition]
> A vector space $V$ over $\mathbb{F} = \mathbb{R}, \mathbb{C}$ is an *inner product space* if for any two $\mathbf{v}, \mathbf{w} \in V$, there is defined an element $\langle \mathbf{v},\mathbf{w} \rangle \in \mathbb{F}$ such that it satisfies the following properties:
>  - $\langle \mathbf{v},\mathbf{w} \rangle$ = $\overline{\langle \mathbf{w},\mathbf{v} \rangle}$;
>  - $\langle \mathbf{v},\mathbf{v} \rangle \geq 0$;
>  - $\langle \mathbf{v},\mathbf{v} \rangle = 0 \iff \mathbf{v} = 0$;
>  - $\langle \alpha \mathbf{u} + \beta \mathbf{v},\mathbf{w} \rangle$ = $\alpha\langle \mathbf{u},\mathbf{w} \rangle + \beta\langle \mathbf{v},\mathbf{w} \rangle$.

^dd5bbe

> [!Proposition] 
> The inner product is anti-linear in the second slot.
> 
> > [!Proof]-
> > $$
> > \begin{align}
> > \langle \mathbf{u}, \alpha \mathbf{v}+\beta \mathbf{w}\rangle &= \overline{\langle\alpha \mathbf{v}+\beta \mathbf{w}, \mathbf{u}\rangle} \\
> > & = \overline{\alpha\langle \mathbf{v},\mathbf{u}\rangle + \beta\langle \mathbf{w},\mathbf{u}\rangle}\\
> > & = \overline\alpha\ \overline{\langle \mathbf{v},\mathbf{u}\rangle} + \overline\beta \ \overline{\langle \mathbf{w},\mathbf{u}\rangle}\\
> > & = \overline\alpha\langle \mathbf{u},\mathbf{v}\rangle + \overline\beta \langle \mathbf{u},\mathbf{w}\rangle.
> > \end{align}
> > $$
> 

>[!Proposition] 
>$\langle \alpha \mathbf{u} + \beta \mathbf{v}, \alpha \mathbf{u} + \beta \mathbf{v}\rangle = \alpha\bar{\alpha}\langle \mathbf{u},\mathbf{u}\rangle + \alpha\bar{\beta}\langle \mathbf{u},\mathbf{v}\rangle + \bar{\alpha}\beta\langle \mathbf{v},\mathbf{u}\rangle + \beta\bar{\beta}\langle \mathbf{v},\mathbf{v}\rangle$.

^ef218e

> [!Proposition] 
> If $\mathbf{u} = 0$, then $\langle \mathbf{u}, \mathbf{v} \rangle = 0$.
> 
> > [!Proof]-
> > _Method 1:_
> > $$
> > \langle 0, \mathbf{v}\rangle = \langle 0 + 0, \mathbf{v}\rangle = \langle 0, \mathbf{v}\rangle + \langle 0, \mathbf{v}\rangle \implies \langle 0, \mathbf{v}\rangle = 0
> > $$
> > 
> > *Method 2: (~~used only by the utterly deranged~~)*
> > Consider the linear map $T: V \to \mathbb{F}$ where $\mathbf{u} \mapsto \langle \mathbf{u}, \mathbf{v} \rangle$ for a fixed $\mathbf{v} \in V$. We know that $T(0) = 0$. Hence $\langle 0, \mathbf{u}\rangle = 0$. As $\mathbf{v}$ was arbitrary, the proposition holds for any $\mathbf{v} \in V$. ❏
> 

>[!Example] Hermitian Dot Product / Standard Hermitian form
> For vectors $\mathbf{v}, \mathbf{w} \in \mathbb{C}^n$, let $\mathbf{v} = (v_{1}, v_{2}, \dots, v_{n})$ and $\mathbf{w} =(w_{1}, w_{2}, \dots, w_{n})$. The inner product of $\mathbf{v}$ and $\mathbf{w}$ is defined as
> $$
> \langle \mathbf{v}, \mathbf{w} \rangle = v_{1}\overline{w}_{1} + v_{2}\overline{w}_{2} + \dots + v_{n}\overline{w}_{n},
> $$
> where $\overline z$ denotes the complex conjugate.
> >[!info]- Motivation
> >
> >If we used the naïve definition of the inner product, that is
> > $$
> > \langle \mathbf{v}, \mathbf{w} \rangle = v_{1}w_{1} + v_{2}w_{2}+\dots+v_{n}w_{n}
> > $$
> > Then for the example of $(1, i) \in \mathbb{C}^2$, we have $\langle (1, i),(1, i)\rangle = 1\cdot 1 + i \cdot i = 0$. This is somewhat of a problem as we expect this to be positive. If we use the Hermitian dot product, we get a nicer answer: $\langle (1, i),(1, i)\rangle = 1\cdot \bar{1} + i \cdot \bar{i} = 2$. The Hermitian dot product in fact guarantees $\langle\mathbf{v}, \mathbf{v}\rangle\geq 0$ and $\langle\mathbf{v}, \mathbf{v}\rangle= 0 \iff \mathbf{v}=0$ along with the other two properties, as you can easily verify.  

>[!example] Inner Product of Functions (Hilbert Space)
>
>Let $V$ be the set of all continuous real/complex functions on $[0,1]$.
>For $f(t), g(t) \in V$ we define their inner product as
>$$
> \langle f(t), g(t) \rangle = \int_{0}^{1} f(t)\overline{g(t)} \ dt
>$$
>It is easy to see that this satisfies all the requirements of the inner product.
## Norm

>[!Definition]
> Given an inner product space, one defines a *norm* on it by 
> $$
> \lVert \mathbf{v} \rVert  = \sqrt{ \langle \mathbf{v}, \mathbf{v}\rangle }.
> $$

^2ffc13

If we plug $\beta=0$ in [[#^ef218e]], we get $\lVert \lambda \mathbf{v} \rVert = |\lambda| \, \lVert \mathbf{v} \rVert$.
### The Cauchy-Schwarz Inequality

We will need this to show that the norm defined above satisfies the triangle inequality.

> [!Theorem] Cauchy-Schwarz
> Let $V$ be an inner product space. For any two $\mathbf{u}, \mathbf{v} \in V$, we have
> $$
> \lvert\langle \mathbf{u},\mathbf{v}\rangle\rvert \leq \lVert \mathbf{u} \rVert \,\lVert \mathbf{v} \rVert .
> $$ 
> 
> > [!Proof]-
> > *Case 1*: $\langle \mathbf{u}, \mathbf{v}\rangle \in \mathbb{R}$
> > 
> > For any $\lambda \in \mathbb{R}$, we have
> > $$
> > \begin{align}
> > \langle \lambda \mathbf{u} + \mathbf{v}, \lambda \mathbf{u} + \mathbf{v} \rangle &\geq 0 \\
> > \lambda^2 \langle \mathbf{u}, \mathbf{u} \rangle + 2\lambda\langle \mathbf{u} , \mathbf{v}\rangle + \langle \mathbf{v}, \mathbf{v}\rangle  & \geq 0 .
> > \end{align}
> > $$
> > As this holds for all $\lambda$, we have
> > $$
> > \begin{align}
> > 4\langle u, v\rangle^2 & \leq 4\langle u, u\rangle \langle v, v\rangle \\
> > |\langle u, v\rangle|  & \leq \lVert u \rVert \,\lVert v \rVert .
> > \end{align}
> > $$
> > *Case 2:* $\langle \mathbf{u}, \mathbf{v}\rangle \not\in \mathbb{R}$
> > 
> > Note that $\langle \mathbf{u}, \mathbf{v}\rangle \neq 0$ as $\langle \mathbf{u}, \mathbf{v}\rangle \not\in \mathbb{R}$.
> > Let $\alpha = \langle \mathbf{u}, \mathbf{v}\rangle$. Observe that
> > $$
> > \left\langle  \frac{\mathbf{u}}{\alpha}, \mathbf{v} \right\rangle = \frac{1}{\alpha}\langle \mathbf{u}, \mathbf{v}\rangle =1 \in \mathbb{R}
> > $$
> > We can apply Case 1.
> > $$
> > \begin{align}
> > \left\lvert  \left\langle  \frac{\mathbf{u}}{\alpha}, \mathbf{v} \right\rangle   \right\rvert &\leq \left\lVert  \frac{\mathbf{u}}{\alpha}  \right\rVert \, \lVert \mathbf{v} \rVert  \\
> > \cancel{\frac{1}{\lvert \alpha \rvert }} \lvert \langle \mathbf{u}, \mathbf{v}\rangle  \rvert &\leq \cancel{\frac{1}{\lvert \alpha \rvert }}\lVert \mathbf{u} \rVert \, \lVert \mathbf{v} \rVert  \\
> > \lvert\langle \mathbf{u},\mathbf{v}\rangle\rvert &\leq \lVert \mathbf{u} \rVert \,\lVert \mathbf{v} \rVert 
> > \end{align}
> > $$
> > 
> 

^c0606c

>[!Corollary] 
>$$
>{\left\lvert  \int_{0}^1 f(t)g(t) \, dt \right\rvert}^2 \leq \left( \int_{0}^{1} \lvert f^2(t) \rvert  \, dt  \right)\left( \int_{0}^{1} \lvert g^2(t) \rvert  \, dt  \right)
>$$
>Average velocity over time has to be less than or equal to average velocity over distance, with equality only for constant velocity.

### The Triangle Inequality

> [!Proposition]
> For any vectors $\mathbf{x}$ and $\mathbf{y}$ in an inner product space, we have
> $$
> \lVert \mathbf{x}+\mathbf{y} \rVert \leq \lVert \mathbf{x} \rVert +\lVert \mathbf{y} \rVert .
> $$
> 
> > [!Proof]-
> > Using [[#^c0606c]],
> > $$
> > \begin{align}
> > \lVert \mathbf{x}+\mathbf{y} \rVert ^{2} & =\langle \mathbf{x}+\mathbf{y}, \mathbf{x}+\mathbf{y} \rangle  \\
> >  & =\lVert \mathbf{x} \rVert^{2} +\lVert \mathbf{y} \rVert^{2} +\langle \mathbf{x}, \mathbf{y} \rangle +\langle \mathbf{y}, \mathbf{x} \rangle  \\
> >  & = \lVert \mathbf{x} \rVert^{2} +\lVert \mathbf{y} \rVert^{2} + 2\mathrm{Re}\langle \mathbf{x}, \mathbf{y} \rangle  \\
> >  & \leq \lVert \mathbf{x} \rVert ^{2}+\lVert \mathbf{y} \rVert ^{2}+2\lvert \langle \mathbf{x}, \mathbf{y} \rangle  \rvert  \\
> >  & \leq \lVert \mathbf{x} \rVert ^{2}+\lVert \mathbf{y} \rVert ^{2}+2\lVert \mathbf{x} \rVert \lVert \mathbf{y} \rVert  \\
> >  & =(\lVert \mathbf{x} \rVert +\lVert \mathbf{y} \rVert )^{2}.
> > \end{align}
> > $$
> 

---
# Normed spaces

We have shown that the norm $\lVert \mathbf{v} \rVert$ [[#^2ffc13|derived from the inner product]] satisfies the following properties:
1. Homogeneity: $\lVert \alpha \mathbf{v} \rVert=\lvert \alpha \rvert\lVert \mathbf{v} \rVert$ for all $\mathbf{v}\in V$ and $\alpha\in \mathbb{F}$.
2. Triangle inequality: $\lVert \mathbf{x}+\mathbf{y} \rVert \leq \lVert \mathbf{x} \rVert +\lVert \mathbf{y} \rVert$. 
3. Non-negativity: $\lVert \mathbf{v} \rVert\geq 0$ for all $\mathbf{v}\in V$.
4. Non-degeneracy: $\lVert \mathbf{v} \rVert=0 \iff \mathbf{v}=\mathbf{0}$. 

Now, suppose in a vector space $V$ we assigned to each vector $\mathbf{v}$ a number $\lVert \mathbf{v} \rVert$ such that the above four properties are satisfied. Then, we say that the function $\mathbf{v}\mapsto \lVert \mathbf{v} \rVert$ is a **norm**. A vector space equipped with a norm is called a **normed space**.

*Any inner product space is a normed space*, as $\lVert \mathbf{v} \rVert=\sqrt{ \langle \mathbf{v}, \mathbf{v} \rangle }$ satisfies the above properties. However, *not all normed spaces are inner product spaces*.

## Orthogonality

If $\mathbf{u}, \mathbf{v} \in V$ then  is said to be **orthogonal** to  if $\langle \mathbf{u}, \mathbf{v}\rangle = 0$. If $\mathbf{u}$ is orthogonal to  then $\mathbf{v}$ is orthogonal to $\mathbf{u}$ as $\langle \mathbf{v}, \mathbf{u}\rangle = \overline{\langle \mathbf{u}, \mathbf{v}\rangle} = 0$.

>[!Definition]
> If $W \subset V$ is a subspace then the **orthogonal complement** of $W$ is defined as
> $$
> W^{\perp} \equiv \{ \mathbf{x} \in V \mid \langle \mathbf{x}, \mathbf{w}\rangle = 0\, \ \forall \, \mathbf{w} \in W \}.
> $$

> [!Proposition]
> If $W$ is a subspace of $V$, then $W^\perp$ is a subspace of $V$.
> 
> > [!Proof]-
> > 1) $\mathbf{0} \in W^\perp$ as $\langle \mathbf{0}, \mathbf{w}\rangle = 0\ \forall \ \mathbf{w} \in W$.
> > 2) For any $\mathbf{u}, \mathbf{v} \in W^\perp$ and $\mathbf{w}\in W$, we have
> > $$
> > \langle \alpha \mathbf{u} + \beta \mathbf{v}, \mathbf{w}\rangle = \alpha \langle \mathbf{u}, \mathbf{w}\rangle +\beta\langle \mathbf{v}, \mathbf{w}\rangle = 0.
> > $$
> > So, $W^\perp$ is closed under addition and scalar multiplication. 
> 

Clearly, $W \, \cap \, W^\perp = \{ \mathbf{0} \}$, since if $\mathbf{w} \in W \, \cap \, W^\perp$ then $\langle \mathbf{w}, \mathbf{w}\rangle = 0 \implies \mathbf{w} = 0$.

>[!Definition]
> A set of vectors $\{ \mathbf{v}_{i} \}\subseteq V$ is an ***orthonormal set*** if
> $$
> \langle \mathbf{v}_{i}, \mathbf{v}_{j}\rangle = 
> \begin{cases}
> 1 & i = j \\
> 0 & i \neq j.
> \end{cases}
> $$

> [!Proposition]
> If $\{ \mathbf{v}_{i} \} \subset V$ is an orthonormal set then $\{ \mathbf{v}_{i} \}$ are linearly independent.
> 
> > [!Proof]-
> > Assume that for some $\beta_{i}$, $\sum_{i=1}^{n} \beta_{i}\mathbf{v}_{i}  =0$. Then,
> > $$
> > \begin{align}
> > 0=\langle \mathbf{0}, \mathbf{v}_{k}\rangle =\left\langle  \sum_{i=1}^{n} \beta_{i}\mathbf{v}_{i}, \mathbf{v}_{k} \right\rangle=\sum_{i=1}^{n} \beta_{i}\langle \mathbf{v}_{i}, \mathbf{v}_{k}\rangle =\beta_{k}.
> > \end{align}
> > $$
> > As $1 \leq k \leq n$, we have all $\beta_{k}= 0$. Hence $\{ \mathbf{v}_{i} \}$ is linearly independent.
> 

For an orthonormal set $\{ \mathbf{v}_{i} \}$, if there is some $\mathbf{w}$ such that $\mathbf{w} = \alpha_{1}\mathbf{v}_{1} + \alpha_{2}\mathbf{v}_{2} +\dots + \alpha_{n}\mathbf{v}_{n}$, then $\alpha_{k} = \langle \mathbf{w}, \mathbf{v}_{k}\rangle$.

For an orthonormal set $\{ \mathbf{v}_{i} \}$ in $V$ and any $\mathbf{w} \in V$,
$$
\mathbf{u} \equiv \mathbf{w} - \langle \mathbf{w}, \mathbf{v}_{1} \rangle \mathbf{v}_{1} - \langle \mathbf{w}, \mathbf{v}_{2}\rangle \mathbf{v}_{2} - \dots - \langle \mathbf{w}, \mathbf{v}_{n}\rangle \mathbf{v}_{n} 
$$
is orthogonal to each of $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots,\mathbf{v}_{n}$.

> [!Definition]
> A real $n\times n$ matrix $A$ is **orthogonal** if $A^{T}A=I$, which is to say $A$ is invertible and $A^{-1}=A^{T}$. 

^d11820

> [!Proposition]
> An $n\times n$ matrix $A$ is orthogonal if and only if its columns form an orthonormal basis of $\mathbb{R}^{n}$.
> 
> > [!Proof]-
> > Let $\mathbf{v}_{1}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n}$ be the column vectors of $A$. Then, the $i,j$-entry of $A^{T}A$ is given by $\mathbf{v}_{i}^{T}\mathbf{v}_{j}$, which is $\langle \mathbf{v}_{i}, \mathbf{v}_{j} \rangle$. Thus, if $A^{T}A=I$, the column vectors must be orthonormal, and if the column vectors are orthonormal, $A^{T}A=I$. 
> 

> [!Theorem] Gram-Schmidt
> Every finite dimensional inner product space has an orthonormal basis.
> 
> > [!Proof]-
> > Let $V$ be any finite dimensional inner product space. Take a basis of $V$, say $\{ \mathbf{v}_{1}, \mathbf{v}_{2},\dots,\mathbf{v}_{n} \}$. From this, we will construct an orthonormal set of $n$ vectors.
> > 
> > Let $\mathbf{u}_{1}\equiv \mathbf{v}_{1}$. Define
> > $$
> > \mathbf{w}_{1} \equiv \frac{\mathbf{u}_{1}}{\lVert \mathbf{u}_{1} \rVert},
> > $$
> > which gives us $\langle \mathbf{w}_{1}, \mathbf{w}_{1}\rangle = 1$. Now, $\mathbf{u}_{2}$ defined as
> > $$
> > \mathbf{u}_{2} \equiv \mathbf{v}_{2} - \langle \mathbf{v}_{2}, \mathbf{w}_{1}\rangle \mathbf{w}_{1}
> > $$
> > is orthogonal to $\mathbf{w}_{1}$. Note that $\mathbf{u}_{2}\neq \mathbf{0}$ as $\mathbf{v}_{2}$ and $\mathbf{w}_{1}$ are linearly independent. Now we can define $\mathbf{w}_{2}$ as
> > $$
> > \mathbf{w}_{2} = \frac{\mathbf{u}_{2}}{\lVert \mathbf{u}_{2} \rVert }.
> > $$
> > Continuing this process, we get
> > $$
> > \begin{align}
> > \mathbf{u}_{1} &= \mathbf{v}_{1}  & \mathbf{w}_{1} = \hat{\mathbf{u}}_{1}\\
> > \mathbf{u}_{2} &= \mathbf{v}_{2} - \langle \mathbf{v}_{2}, \mathbf{w}_{1} \rangle \mathbf{w}_{1}  & \mathbf{w}_{2} = \hat{\mathbf{u}}_{2}\\
> > \mathbf{u}_{3} &= \mathbf{v}_{3} - \langle \mathbf{v}_{3}, \mathbf{w}_{1} \rangle \mathbf{w}_{1} - \langle \mathbf{v}_{3}, \mathbf{w}_{2}\rangle \mathbf{w}_{2}  & \mathbf{w}_{3} = \hat{\mathbf{u}}_{3}\\
> >  & \ \ \vdots  & \vdots \quad \ \ \\
> > \mathbf{u}_{k} &= \mathbf{v}_{k}-\langle \mathbf{v}_{k}, \mathbf{w}_{1}\rangle \mathbf{w}_{1} - \langle \mathbf{v}_{k}, \mathbf{w}_{2}\rangle \mathbf{w}_{2} - \dots - \langle \mathbf{v}_{k} , \mathbf{w}_{k-1}\rangle \mathbf{w}_{k-1} & \mathbf{w}_{k} = \hat{\mathbf{u}}_{k} 
> > \end{align}
> > $$
> > where $\hat{\mathbf{u}}$ represents the normalized vector $\mathbf{u}/\lVert \mathbf{u} \rVert$. Thus, $\{ \mathbf{w}_{i} \}$ is an orthonormal set, and hence a linearly independent set. Since a linearly independent set of size $n=\dim V$ is a basis, $\{ \mathbf{w}_{i} \}$ is a basis of $V$.
> > 

^f789a3
