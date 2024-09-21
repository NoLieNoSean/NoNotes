---
tags:
  - ANA1
---


Consider a [[Vector spaces|vector space]] $\mathbb{R}^{k}$. In addition to the operations and properties already defined for a vector space, we define the following:
- An operation called the *inner product* of $\mathbf{v}$ and $\mathbf{w}$ such that $\mathbf{v}\cdot \mathbf{w}=\sum_{i=1}^{k} v_{i}w_{i},$
- and the *norm* of $\mathbf{x}$ by $|\mathbf{x}| = (\mathbf{x}\cdot \mathbf{x})^{1/2}=\left( \sum_{i=1}^{k} x_{i}^{2} \right)^{1/2}$.

The structure now defined (the vector space $\mathbb{R}^{k}$ with the inner product and the norm) is called euclidean $k$-space.

>[!Info]
>A vector space with a norm is called a normed vector space. Thus, you could say a Euclidean space is a normed vector space with an inner product. Not all normed vector spaces are Euclidean spaces. A Euclidean space specifically refers to a vector space equipped with a Euclidean inner product (usually the standard dot product in $\mathbb{R}^n$). In contrast, there are normed vector spaces where the norm is not induced by an inner product (e.g., spaces with a non-Euclidean norm like the p-norm for p $\neq$ 2).

---
## Results

The following follow from the above definition. Suppose $\mathbf{x},\mathbf{y},\mathbf{z}\in \mathbb{R}^{k}$. Then,
- $|\mathbf{x}|\ge 0$
- $|\mathbf{x}|=0$ if and only if $x=0$.
- $|\alpha \mathbf{x}|= |\alpha||\mathbf{x}|$
- $|\mathbf{x}\cdot \mathbf{y}|\le|\mathbf{x}||\mathbf{y}|$  (The [[The complex field#The Cauchy-Schwarz inequality in complex numbers|CS inequality]])
- $|\mathbf{x}+\mathbf{y}|\le|\mathbf{x}|+|\mathbf{y}|$  (The triangle inequality)