---
id: "333"
date: 2025-10-27
time: 09:24
tags:
  - ALG3
  - Tutorial
---
# Problem 5

> [!Exercise]
> Let $R=\mathbb{Z}[x_{1}, x_{2}, x_{3}, x_{4}]$. Determine which of the following polynomials are irreducible:
> 1. $f=x_{1}^{p+1}-x_{2}^{p}$
> 2. $g=x_{1}x_{4}-x_{2}x_{3}$
> 3. $h=x_{1}^{p}x_{2}-x_{3}^{p}$
> 4. $fg+g^{p}$


---
# Problem 6

> [!Exercise]
> Determine which of the following polynomials in $\mathbb{C}[x, y, z]$ are irreducible:
>  1. $p_{1}=y^{5}-z^{4}$
>  2. $p_{2}=z^{8}+2xy^{3}-x^{2}yz-z^{3}$
>  3. $p_{3}=2y^{2}z^{6}+xz^{7}-x^{3}y-2y^{2}z+3xz^{2}$
>  4. $p_{4}=y^{4}z^{5}-y^{4}+2xy^{2}z-x^{2}z^{2}$
>  5. $p_{5}=2xy^{4}z^{4}+yz^{7}+2x^{2}y^{2}-2x^{3}z-yz^{2}$
>  6. $p_{6}=x^{2}y^{4}z^{3}+3y^{3}z^{5}+2xyz^{6}-x^{4}-3y^{3}+4xyz$

**Polynomial 1**

Consider $p_{1}$ as a polynomial in $y$ with coefficients in $\mathbb{C}[z]$; Let $k$ denote the algebraic closure of $\mathbb{C}[z]$. Denote by $z^{4/5}$ a root of $p_{1}$ in $k$. It is easy to see that $e^{2\pi ij/5}z^{4/5}$ is a root of $p_{1}$ for $i=0, 1, \dots, 4$. By [[LEC ALG3 9#^497a71]], these are all the roots of $p_{1}$ in $k$. Since no proper subset of the factors $\{ (y-e^{2\pi ij/5}z^{4/5}):j=0, 1, \dots, 4 \}$ yields an element of $\mathbb{C}[z, y]$, it follows that $p_{1}$ is irreducible. 

**Polynomial 4**

Consider $p_{4}$ as a polynomial in $x$ with coefficients in $\mathbb{C}[y, z]$.
$$
p_{4}=(-z^{2})x^{2}+(2y^{2}z)x+(y^{4}z^{5}-y^{4}).
$$
Suppose $p_{4}=fg$. If $\text{deg}_{x}(f)=2$, $g$ must be a unit, since the gcd of the coefficients $-z^{2}, 2y^{2}z, y^{4}z^{5}-y^{4}$ is $1$. The case $\text{deg}_{x}(f)=\text{deg}_{x}(g)=1$ is possible iff the discriminant $4y^{4}z^{2}+4z^{2}y^{4}(z^{5}-1)=4z^{2}y^{4}z^{5}$ is a prefect square; it is clearly not. 

**Polynomial 2**

Consider $p_{2}$ as a polynomial in $x$ with coefficients in $\mathbb{C}[y, z]$.
$$
p_{2}=(-yz)x^{2}+(2y^{3})x+(z^{8}-z^{3}).
$$
The discriminant is $4y^{6}+4yz^{4}(z^{5}-1)$ is not a prefect square.

**Polynomial 3**

Consider $p_{3}$ as a polynomial in $x$ with coefficients in $\mathbb{C}[y, z]$.
$$
p_{3}=(-y)x^{3}+(z^{7}+3z^{2})x+(2y^{2}z^{6}-2y^{2}z).
$$
Use [[LEC ALG3 13#^62ad0c]] with $p=z$.

**Polynomial 5**

Consider $p_{5}$ as a polynomial in $x$ with coefficients in $\mathbb{C}[y, z]$.
$$
p_{5}=(-2z)x^{3}+(2y^{2})x^{2}+(2y^{4}z^{4})x+(yz^{7}-yz^{2}).
$$
Use [[LEC ALG3 13#^62ad0c]] with $p=y$.


**Polynomial 6**

Let $\lambda$ denote an arbitrary unit. 

Consider the map $\varphi:\mathbb{C}[x, y, z]\to \mathbb{C}[t]$ defined by $\varphi(x)=t^{3}$, $\varphi(y)=t^{4}$, and $\varphi(z)=t^{5}$ (this is the same map we encountered in [[TUT ALG3 3#^dd5746]]!). Observe that $\varphi(p_{6})=6t^{37}$; neat. Now, suppose $f, g\in \mathbb{C}[x, y, z]$ such that $p_{6}=fg$. Then, $6t^{37}=\varphi(f)\varphi(g)$. This forces $\varphi(f)=\lambda t^{a}$, $\varphi(g)=\lambda t^{b}$ for some $a, b\geqslant 0$. It follows that $f$ must be a sum of monomials $m_{1}+\dots+m_{n}$ such that $\varphi(m_{i})=\lambda t^{a}$ for each $i$; ditto for $g$.

Denote the set of monomials of $f$ by $\text{Mon}(f)$. Denote "$\alpha\in\text{Mon}(f)$ and $\beta\in\text{Mon}(g)$" by $(\alpha, \beta)$. 

Since $y^{3}\in\text{Mon}(fg)$, WLOG we must have either $(y, y^{2})$ or $(1, y^{3})$. 
Since $x^{4}\in\text{Mon}(fg)$, one of $(1, x^{4})$, $(x, x^{3})$, $(x^{2}, x^{2})$, $(x^{3}, x)$, $(x^{4}, 1)$ must be true.

If $(y, y^{2})$, none of $1, x, x^{2}, x^{3}, x^{4}$ can be in $\text{Mon}(f)$, since none of them have image $\lambda t^{4}$ under $\varphi$. 
If $(1, y^{3})$, then $(1, x^{4})$ is forced, and $f$ must be a unit. 

Thus, $p_{6}$ is irreducible. 

---

# Problem 7

> [!Exercise]
> Show that $f:=x^{p}-x-c$ is irreducible in $\mathbb{Z}/p\mathbb{Z}[x]$ iff it has no root in $\mathbb{Z}/p\mathbb{Z}$.

It is clear that $f$ is reducible if it has a root. Suppose