---
tags:
  - ALG3
date: 2025-09-09
time: 09:23
---
# Euclidean domains


> [!Definition]
> A **size function** on an integral domain $R$ can be any function $\sigma$ whose domain is the set of nonzero elements of $R$, and whose range is the set of nonnegative integers. An integral domain $R$ is a **Euclidean domain** if there is a size function $\sigma$ on $R$ such that division with remainder is possible, in the following sense: Let $a, b\in R$, and suppose $a\ne 0$. There are elements $q$ and $r$ in $R$ such that $b=aq+r$, and either $r=0$ or $\sigma(r)<\sigma(a)$.

^3db377

Clare assumes monotonicity of the size function in the definition. See @conradREMARKSEUCLIDEANDOMAINS for subtleties.

Examples
- $\mathbb{Z}$, $k[x]$ where $k$ is a field
- A quadratic ring is of the form $\mathbb{Z}[\alpha]$, where $\alpha$ is a root of a irreducible polynomial of the form $p(x)=x^{2}+ax+b$ where $a, b\in \mathbb{Z}$. $\mathbb{Z}[\alpha]\cong \mathbb{Z}[x]/(x^{2}+ax+b)$.

[!Definition]
Let $\alpha\in \mathbb{C}$ not be an integer. Let $\alpha$ satisfy a monic irreducible polynomial $f(x)=x^{n}+a_{n-1}x^{n-1}+\dots+a_{0}$, where $a_{i}\in \mathbb{Z}$. We define the norm and trace of $\alpha$ as $\text{Norm}(\alpha)=(-1)^{n}a_{0}$, $\text{Tr}(\alpha)=-a_{n-1}$.

For example, every element in $\mathbb{Z}[i]$ is of the form $\alpha=a+bi$; $\text{Tr}(\alpha)=2a$, $\text{Norm}(\alpha)=a^{2}+b^{2}$. 

Clare distinguishes between 'Euclidean ring'(ED but not ID) and 'Euclidean domain'. For example, If $R$ is an ED, and $I$ is a nonprime ideal in $R,$ then $R/I$ is a ER which is not an ED.

[!Lemma]
Every ER is a PIR.

[!Proof]-
Let $I\ne(0)$ be a proper ideal of $R$. Let $b$ be an element of minimum norm in $I$. We will show that $I=(b)$. The rest of the proof is exactly what you'd expect.


---

