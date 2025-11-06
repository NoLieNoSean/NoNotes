---
tags:
  - ALG3
  - Tutorial
date: 2025-10-16
time: 14:54
id: "304"
---
# Problem 1

Let $R=\mathbb{Z}[\sqrt{ -5 }]$. Let $\alpha=\sqrt{ -5 }$. Let $\mathfrak{p}_{1}=(2, 1+\alpha)$, $\mathfrak{p}_{2}=(2, 1-\alpha)$, $\mathfrak{p}_{3}=(3, 1+\alpha)$, and $\mathfrak{p}_{4}=(3, 1-\alpha)$. 

> [!Exercise]
> Show that $\mathfrak{p}_{i}$ are prime ideals for $i=1, 2, 3, 4$. Are they maximal ideals?

We know by [[Quadratic integer rings#^ebe532]] that $\mathbb{Z}[\sqrt{ -5 }]\cong \mathbb{Z}[x]/(x^{2}+5)$. Using [[LEC ALG3 2#^5c702e]],
$$
\begin{align}
\frac{\mathbb{Z}[\sqrt{ -5 }]}{(2, 1+\alpha)}\cong \frac{\mathbb{Z}[x]}{(2, 1+x, x^{2}+5)}=\frac{\mathbb{Z}[x]}{(2, 1+x)}\cong \frac{\mathbb{F}_{2}[x]}{(1+x)}.
\end{align}
$$
Clearly, $1+x$ is irreducible in $\mathbb{F}_{2}[x]$. Since $\mathbb{F}_{2}[x]$ is a PID (and hence a UFD by [[LEC ALG3 9#^97c00a]]), the notions of prime, maximal, and irreducible coincide ([[LEC ALG3 9#^414a66]], [[LEC ALG3 4#^340b52]]). Thus, $\mathbb{F}_{2}[x]/(1+x)$ is a field, and $\mathfrak{p}_{1}$ is a maximal ideal. Similarly, $\mathfrak{p}_{2}$, $\mathfrak{p}_{3}$, and $\mathfrak{p}_{4}$ are maximal ideals. 

> [!Exercise]
> Show that $2, 3, 7, 11,  1+\sqrt{ -5 }, 1-\sqrt{ -5 }$ are irreducible in $R$. 

^2b7447

The field norm ([[TUT ALG3 4#^be0f77]]) $N(\alpha)=\alpha \overline{\alpha}$ defined on $\mathbb{Q}[\sqrt{ -5 }]$ is multiplicative and takes on positive integer values $N(a+\sqrt{ -5 }b)=a^{2}+5b^{2}$ when restricted to $\mathbb{Z}[\sqrt{ -5 }]$. If $2=\alpha\beta$, we must have $N(\alpha)N(\beta)=4$. This forces either $\alpha=1$ or $\beta=1$. The remaining elements are irreducible by the same argument. 

> [!Exercise]
> Show that $(6)=\mathfrak{p}_{1}\mathfrak{p}_{2}\mathfrak{p}_{3}\mathfrak{p}_{4}$. 

Compute:
$$
\begin{align}
\mathfrak{p}_{1}\mathfrak{p}_{2}\mathfrak{p}_{3}\mathfrak{p}_{4} & =(4, 2+2\alpha, 2-2\alpha, 6)(9, 3+3\alpha, 3-3\alpha, 6) \\
 & = (2+2\alpha, 2-2\alpha, 6)(9, 3+3\alpha, 3-3\alpha) \\
 & =(12(\alpha-2), 12(\alpha+2), 18(1+\alpha), 18(1-\alpha), 36, 54).
\end{align}
$$
By subtracting the first two generators, we get $48\in \mathfrak{p}_{1}\mathfrak{p}_{2}\mathfrak{p}_{3}\mathfrak{p}_{4}$. It follows that $54-48=6\in\mathfrak{p}_{1}\mathfrak{p}_{2}\mathfrak{p}_{3}\mathfrak{p}_{4}$. Since $6$ divides all the generators obtained above, we have $\mathfrak{p}_{1}\mathfrak{p}_{2}\mathfrak{p}_{3}\mathfrak{p}_{4}=(6)$.

> [!Exercise]
> Is $(6)=\mathfrak{p}_{1}^{2}\cap \mathfrak{p}_{3}\cap \mathfrak{p}_{4}$?

$\mathfrak{p}_{1}^{2}=(2)$. Note that $\mathfrak{p}_{1}^{2}$, $\mathfrak{p}_{3}$, and $\mathfrak{p}_{4}$ are pairwise comaximal. By [[LEC ALG3 6#^1c5a62]], 
$$
\begin{align}
\mathfrak{p}_{1}^{2}\cap \mathfrak{p}_{3}\cap \mathfrak{p}_{4} & =\mathfrak{p}_{1}^{2}\mathfrak{p}_{3}\mathfrak{p}_{4} \\
 & =(2)(9, 3+3\alpha, 3-3\alpha) \\
 & =(18, 6+6\alpha, 6-6\alpha) \\
 & =(6).
\end{align}
$$

> [!Exercise]
> Let $\mathfrak{q}_{1}=(3+5\alpha), \mathfrak{q}_{2}=(2+2\alpha), \mathfrak{q}_{3}=(4+\alpha, 1+2\alpha)$. Determine which of these are prime ideals.

$(3+5\alpha)$ is prime in $\mathbb{Z}[\sqrt{ -5 }]$ iff $(3+5x, x^{2}+5)$ is prime in $\mathbb{Z}[x]$. Note that $(2x-1)(5x+3)-10(x^{2}+5)=x-53$, so $(x-53)\in(3+5x, x^{2}+5)$. Now, 
$$
\begin{align}
\frac{\mathbb{Z}[x]}{(3+5x, x^{2}+5)} & = \frac{\mathbb{Z}[x]}{(x-53, 3+5x, x^{2}+5)} \\
 & \cong \frac{\mathbb{Z}}{(268, 2814)} \\
 & = \frac{\mathbb{Z}}{(134)}.
\end{align}
$$
Since $134$ is not prime in $\mathbb{Z}$, it follows that $(3+5\alpha)$ is not prime in $\mathbb{Z}[\sqrt{ -5 }]$.

> [!Warning]
> [[Quadratic integer rings#Quadratic integer rings|Recall]] that $\mathbb{Z}[\sqrt{ -5 }]$ is not a UFD, so showing $3+5\alpha$ is irreducible does not help!

$(2+2\alpha)=(2)(1+\alpha)$. By [[LEC ALG3 7#^662472]].3, $(2+2\alpha)$ is not prime. 

$(4+\alpha, 1+2\alpha)$ is dealt with similarly:
$$
\begin{align}
\frac{\mathbb{Z}[x]}{(4+x, 1+2x, x^{2}+5)} & =\frac{\mathbb{Z}}{(7, 21)}=\frac{\mathbb{Z}}{(7)}.
\end{align}
$$
Since $7$ is prime in $\mathbb{Z}$, $(4+\alpha, 1+2\alpha)$ is prime in $\mathbb{Z}[\sqrt{ -5 }]$.

> [!Exercise]
> Let $I=(3, 1+\alpha)$. Show that $I^{2}$ is a principal ideal. 

$I^{2}=(9, 3+3\alpha, 2\alpha-4)$. $\alpha-2\in I^{2}$, so $I^{2}=(9, 3+3\alpha, \alpha-2)$. $3+3\alpha=3(\alpha-2)+9$ and $9=(2-\alpha)(2+\alpha)$, so $I=(\alpha-2)$. 

---

# Problem 2

Let $\delta=(1+\sqrt{ -19 })/2$ and $R=\mathbb{Z}[\delta]$.

> [!Exercise]
> Show that $R\cong \mathbb{Z}[x]/(x^{2}-x+5)$.

$\delta\in \mathbb{Q}[\sqrt{ -19 }]$ and $\delta$ satisfies $x^{2}-x+5=0$. We are done by [[Quadratic integer rings#^ebe532]]. 

> [!Exercise]
> Determine whether $2$ and $3$ are prime in $R$.

By [[TUT ALG3 4#^b57acd]], $R$ is a PID, and hence a UFD. It therefore suffices to determine the irreducibility of $2$ and $3$. We have shown in [[TUT ALG3 4#^3cc8c6]] that $N(a+b\delta)=a^{2}+ab+5b^{2}$. The smallest values this norm takes are $1, 4$. It is immediate that $2$ and $3$ are irreducible. 

> [!Exercise]
> Determine whether the following ideals are prime or maximal in $R[x]$:
> 1. $\mathfrak{p}_{1}=(7, \delta^{3}x+x+1)$
> 2. $\mathfrak{p}_{2}=(2\delta^{2}+3)$
> 3. $\mathfrak{p}_{3}=(\delta x+1)$
> 4. $\mathfrak{p}_{4}=(\delta x+2)$
> 5. $\mathfrak{p}_{5}=(2x\delta+1)$
> 6. $\mathfrak{p}_{6}=(11, 2x\delta+1)$.

## $\mathfrak{p}_{1}$

Compute (using [[LEC ALG3 2#^5c702e]], [[LEC ALG3 6#^1c5a62]], [[LEC ALG3 4#^0c976e]]):
$$
\begin{align} \\
 & \quad \,\,\frac{R}{(7)R}  & a+b\delta+(7)R\\
& \cong\frac{\mathbb{Z}[y]}{(7, y^{2}-y+5)}  & a+by+(7, y^{2}-y+5)\\
 & \cong \frac{\mathbb{F}_{7}[y]}{(y^{2}-y+\overline{5})}  & \overline{a}+\overline{b}y+(y^{2}-y+\overline{5})\\
 & = \frac{\mathbb{F}_{7}[y]}{(y-\overline{2})(y-\overline{6})}  & \overline{a}+\overline{b}y+(y-\overline{2})(y-\overline{6})\\
 & \cong \frac{\mathbb{F}_{7}[y]}{(y-\overline{2})} \times\frac{\mathbb{F}_{7}[y]}{(y-\overline{6})}  & (\overline{a}+\overline{b}y+(y-\overline{2}), \overline{a}+\overline{b}y+(y-\overline{6}))  \\
 & \cong \mathbb{F}_{7}\times \mathbb{F}_{7}. & (\overline{a+2b}, \overline{a+6b}).
\end{align}
$$

Let $\varphi:R/(7)R\to \mathbb{F}_{7}\times \mathbb{F}_{7}$ be the canonical isomorphism. Note that $\varphi(a+b\delta+(7)R)=(\overline{a+2b}, \overline{a+6b})$.

Next, 
$$
\begin{align}
\frac{R[x]}{(7, 1+(\delta^{3}+1)x)} & = \frac{R[x]}{(7, 1+(-4\delta-4)x)} \\
 & \cong \frac{(R/(7)R)[x]}{((1+(7)R)+(-4\delta-4+(7)R)x) } \\
 & \cong \frac{(\mathbb{F}_{7}\times \mathbb{F}_{7})[x]}{(\varphi(1)+\varphi(-4\delta-4)x)} \\
 & = \frac{(\mathbb{F}_{7}\times \mathbb{F}_{7})[x]}{((\overline{1}, \overline{1})+(\overline{2}, \overline{0})x)}   \\
 & \cong\frac{\mathbb{F}_{7}[x]\times \mathbb{F}_{7}[x]}{((\overline{1}+\overline{2}x, \overline{1}))} \\
 & \cong \frac{\mathbb{F}_{7}[x]}{(\overline{1}+\overline{2}x)}\times\frac{\mathbb{F}_{7}[x]}{(\overline{1})} \\
 & \cong \frac{\mathbb{F}_{7}[x]}{(\overline{4}+x)} \\
 & \cong \mathbb{F}_{7}.
\end{align}
$$
Thus, $\mathfrak{p}_{1}$ is a maximal ideal. 
## $\mathfrak{p}_{2}$

$2\delta^{2}+3=2\delta-7$. $N(2\delta-7)=55=5\cdot 11$. There exist elements of norms $5$ and $11$ in $R$, and $2\delta-7$ in fact factorizes as $(-1+\delta)(2+\delta)$. Both factors have norm $5$ and $11$ respectively, and thus are not units by the proof of [[TUT ALG3 4#^3cc8c6]]. Thus, $2\delta-7$ is reducible in $R$, and since $R$ is a UFD, not prime. By [[LEC ALG3 10#^d96427]].1, $2\delta-7$ is not prime in $R[x]$. 

## $\mathfrak{p}_{3}$

Let $\mathcal{R}$ be the [[LEC ALG3 8#Ring of fractions|field of fractions]] of $R$. Consider the homomorphism $\varphi:R[x]\to \mathcal{R}$ given by $x\mapsto-1/\delta$.  Clearly, $\delta x+1\in \ker\varphi$. If $f(x)\in \ker\varphi$, we have $f(x)=\overline{q}(x)(\delta x+1)+\overline{r}$, where $\overline{q}(x)\in \mathcal{R}[x]$ and $\overline{r}\in \mathcal{R}$. $f(-1/\delta)=0$ forces $\overline{r}=0$, and $(\delta x+1)$ divides $f(x)$ in $R[x]$ by [[LEC ALG3 10#^d96427]].4. Thus, $\ker\varphi=(\delta x+1)$. Clearly, $\mathrm{im}\,\varphi=R\left[ \frac{1}{\delta} \right]$, so we have
$$
\begin{align}
\frac{R[x]}{(\delta x+1)}\cong R\left[ \frac{1}{\delta} \right].
\end{align}
$$
$R\left[ \frac{1}{\delta} \right]$ is a subring of the field $\mathcal{R}$, and hence is an integral domain. However, $R\left[ \frac{1}{\delta} \right]$ is not a field. Thus, $\mathfrak{p}_{3}$ is prime but not maximal. 

## $\mathfrak{p}_{4}$


---

# Problem 3

> [!Exercise]
> Let $R=\mathbb{Z}[\sqrt[3]{ 2 }]$. Is it possible to write $(5)$ as a product of prime ideals?

Use Dedekind's theorem to obtain $\mathfrak{p}_{1}=(5, \alpha-3)$ and $\mathfrak{p}_{2}=(5, \alpha^{2}+3\alpha+4)$. It is easy to show that $\mathfrak{p}_{1}$ and $\mathfrak{P}_{2}$ are maximal and that $(5)=\mathfrak{p}_{1}\mathfrak{p}_{2}$.

---

# Problem 4

Let $R=\mathbb{Z}[\sqrt{ -n }]$ where $n\geqslant 3$. 

> [!Exercise]
> Which of the following are irreducible or prime in $R$?
> 1. $2$
> 2. $\sqrt{ -n }$
> 3. $1+\sqrt{ -n }$


> [!Exercise]
> Show that $R$ is not a UFD.

$2$ is irreducible but not prime. 

---

# Problem 5

Let $R=\mathbb{Z}[\omega]$ where $\omega=e^{ 2\pi i/3 }$. Let $p\ne 3$ be a prime. 

> [!Exercise]
> Show that $x^{2}+x+1$ has a root in $\mathbb{Z}/p\mathbb{Z}$ iff $p\not\cong 1\mod 3$. 

