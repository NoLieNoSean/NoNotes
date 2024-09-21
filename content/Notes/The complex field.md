---
tags:
  - ANA1
---

A *complex number* is an ordered pair $(a,b)$ of [[The real field|real numbers]]. Equality, addition, and multiplication are defined as follows:
- $(a,b)$ and $(c,d)$ are equal iff $a=c$ and $b=d$.
- $(a,b)+(c,d) = (a+c,b+d)$.
- $(a,b)(c,d) =(ac-bd, ad+bc)$.

These definitions turn the set of all complex numbers into a field.

If $z$ and $w$ are complex numbers, then
- $\overline{z+w} = \overline{z}+\overline{w}$
- $\overline{zw}=\overline{z}\cdot \overline{w}$
- $z+\overline{z}=2\mathrm{Re}(z)$
- $z-\overline{z}=2i\mathrm{Im}(z)$
- $z\overline{z}$ is real and positive except when $z=0$.

## The Cauchy-Schwarz inequality in complex numbers

Recall the CS inequality in $\mathbb{R}$:
$$
\left( \sum_{i=1}^{n}  a_{i}b_{i} \right)^{2}\le\sum_{i=1}^{n}  a_{i}^{2}\sum_{i=1}^{n}  b_{i}^{2}
$$
This can be interpreted as saying the dot product of two vectors in $\mathbb{R}^n$ is less than or equal to the product of their magnitudes:
$$
|\mathbf{v}\cdot \mathbf{w}|\le |\mathbf{v}||\mathbf{w}|
$$
If we apply the same definition to vectors over $\mathbb{C}$, we get the CS inequality in complex numbers.
$$
\left|\sum_{j=1}^na_j\overline{b}_j\right|^2\leq\sum_{j=1}^n\left|a_j\right|^2\sum_{j=1}^n\left|b_j\right|^2.
$$
Proof on Rudin, p14.

**Neat proof by Mohak:**
From the CS inequality for real numbers and the triangle inequality, we have
$$
\underbrace{ \left|\sum_{j=1}^na_jb_j\right|^2\le\left( \sum_{i=1}^{n} |a_{j}b_{j}| \right)^{2} }_{\text{triangle inequality} }=\underbrace{ \left( \sum_{i=1}^{n} |a_{j}||b_{j}| \right)^{2}\le\sum_{j=1}^n\left|a_j\right|^2\sum_{j=1}^n\left|b_j\right|^2 }_{\text{CS inequality for reals} }.
$$

>[!Question]
>Why is it $\overline{b}_{j}$ and not $b_{j}$?

>[!Question]
>Why is the CS inequality relevant here?


