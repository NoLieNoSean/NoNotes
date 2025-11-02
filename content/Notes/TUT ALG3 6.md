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

