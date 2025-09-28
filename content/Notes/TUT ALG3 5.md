---
tags:
  - ALG3
  - Tutorial
date: 2025-09-21
time: 20:45
---
# Problem 1

> [!Exercise]
> Let $R=\mathbb{C}[x, y]$. Show that $H:=(xy-3y^{2}, x^{2}+4y^{2}-1, 13y^{3}-y)=(y, x-1)\cap(13y^{2}-1, x-3y)\cap(y, x+1)$.

To show $H\subseteq I\cap J\cap K$, it suffices to show each generator of $H$ is in $I$, $J$, and $K$. $xy-3y^{2}$ and $13y^{2}-y$ are trivially in $I\cap J\cap K$. $x^{2}+4y^{2}-1=(x-1)(x+1)+y(4y)=(x-3y)(x+3y)+(13y^{2}-1)$, so $x^{2}+4y^{2}-1\in I\cap J\cap K$.

Observe that the ideals $I:=(y, x-1)$, $J:=(13y^{2}-1, x-3y)$, and $K:=(y, x+1)$ are pairwise comaximal:
$$
\begin{array}{lll}
I +J=R & : &  3y-(x-1) &     + &  x-3y\quad  & =1 \\
J+K=R & : &  x-3y & + & 3y-(x+1)  & =-1 \\
K+I=R & : & x+1 & + & 1-x & =2.
\end{array}
$$
By [[LEC ALG3 6#^1c5a62]], $I\cap J\cap K=IJK$. 

To show $H\supseteq IJK$, we now just have to crunch the numbers:
$$
\begin{array}{lll}
y(13y^{2}-1)y & = & (13y^{3}-y)y \\
y(13y^{2}-1)(x-1) & = & (13y^{3}-y)(x-1) \\
y(x-3y)y & = & (xy-3y^{2})y \\
y(x-3y)(x+1) & = & (xy-3y^{2})(x+1) \\
(x-1)(13y^{2}-1)y & = & (13y^{3}-y)(x-1) \\
(x-1)(13y^{2}-1)(x+1) & = & (x^{2}+4y^{2}-1)(13y^{2}-1)-(13y^{3}-y)(4y) \\
(x-1)(x-3y)y & = & (xy-3y^{2})(x-1) \\
(x-1)(x-3y)(x+1) & = & (x^{2}+4y^{2}-1)(x-3y)-(xy-3y^{2})(4y).
\end{array}
$$

> [!Exercise]
> Which of the ideals $(y, x-1)$, $(13y^{2}-1, x-3y)$, and $(y, x+1)$ are maximal in $R$?

$$
\begin{align}
\frac{\mathbb{C}[x, y]}{(y, x-1)}\cong\frac{\mathbb{C}[x]}{(x-1)}\cong \mathbb{C}\cong\frac{\mathbb{C}[x]}{(x+1)}\cong\frac{\mathbb{C}[x, y]}{(y, x+1)},
\end{align}
$$
so $(y, x-1)$ and $(y, x+1)$ are maximal in $R$. $(13y^{2}-1, x-3y)$ is maximal iff[^1]
$$
\begin{align}
\frac{\mathbb{C}[x, y]}{(13y^{2}-1, x-3y)} \cong\frac{\mathbb{C}[y]}{(13y^{2}-1)}
\end{align}
$$

^f7356d

is a field, which happens iff $(13y^{2}-1)$ is maximal in $\mathbb{C}[y]$, which happens iff $(13y^{2}-1)$ is prime in $\mathbb{C}[y]$, which happens iff $13y^{2}-1$ is irreducible in $\mathbb{C}[y]$, which is false. Thus, $(13y^{2}-1, x-3y)$ is not maximal in $R$. 

[^1]:To establish the isomorphism in [[#^f7356d]], consider the map $\varphi:\mathbb{C}[x, y]\to \mathbb{C}[y]$ defined by $c\mapsto 3y$. Show that the kernel of this map is $(x-3y)$. Use first isomorphism theorem to conclude $\mathbb{C}[x, y]/(x-3y)\cong \mathbb{C}[y]$. Note that $(13y^{2}-1, x-3y)$ contains $\ker\varphi$, and $\varphi((13y^{2}-1, x-3y))=(13y^{2}-1)$. Use (4) from the [[LEC ALG3 2#^629cc7|the correspondence theorem]] to get [[#^f7356d]]. 


---
# Problem 2

> [!Exercise]
> Let $F$ be a field. Prove that the ring $F[x, x^{-1}]$ of Laurent polynomials is a PID.

Let $R=F[x,  x ^{-1}]$. Note that $F[x]\subseteq R$ is a subring. Let $I$ be an ideal in $R$. $I\cap F[x]$ cannot be $\emptyset$: for every $h(x)\in I$, there exists $k\geq 0$ such that $x^{k}h(x)\in F[x]$. Let $f(x)$ be the minimum degree polynomial in $I\cap F[x]$. 

Let $g(x)\in I$ be arbitrary. Let $k\geq 0$ be the smallest integer such that $x^{k}g(x)\in F[x]$. Since $F[x]$ is a Euclidean domain, we can write:
$$
x^{k}g(x)=f(x)q(x)+r(x),
$$
where $q(x), r(x), \in F[x]$ and $\text{deg}(r(x))<\text{deg}(f(x))$. $r(x)=x^{k}g(x)-f(x)q(x)\in I\cap F[x]$, and since $f(x)$ is the minimum degree polynomial in $I\cap F[x]$, we must have $r(x)=0$. Thus, 
$$
g(x)=x^{-k}q(x)f(x),
$$
and $I=(f(x))$.

---

# Problem 3

> [!Exercise]
> Show that $x^{2}+x+1$ has a root in $\mathbb{F}_{p}$ $\iff$ $p\equiv 1\mod 3$, where $p> 3$.

^de56d5

Note that $(x^{2}+x+1)$ is not a square in $\mathbb{F}_{p}$: if
$$
(ax+b)^{2}=a^{2}x^{2}+2abx+b^{2}=x^{2}+x+1,
$$
we must have $a^{2}=1$, $b^{2}=1$, and $2ab=1$. $\pm 1$ are solutions for the first two equations, and these are the only ones (see [[LEC ALG3 9#^497a71]]; a quadratic polynomial may have at most 2 roots). It is now easily seen that these three equations have no solutions in $a, b$ for $p> 3$.

Since $x^{3}-1=(x-1)(x^{2}+x+1)$, $x^{2}+x+1$ has a root in iff $x^{3}-1$ has non trivial roots in $\mathbb{F}_{p}$ iff $x^{3}-1$ has three distinct roots. The roots of $x^{3}-1$ are solutions to $x^{3}\equiv 1\mod p$, which form a subgroup of order $3$ of $\mathbb{F}_{p}^{\times}$, which exists iff $\mathbb{F}_{p}^{\times}$ has an element of order $3$, which happens iff $3\ | \ p-1$ by [[LEC ALG2 3#^9f0c4c|Cauchy's theorem]], which is equivalent to $p\equiv 1 \mod 3$.


> [!Exercise]
> $(p)$ is maximal in $\mathbb{Z}[\omega]$ iff $p\equiv 2\mod 3$. 

$$
\begin{align}
 & (p)\text{ is maximal in }\mathbb{Z}[\omega] \\
\iff & \frac{\mathbb{Z}[\omega]}{(p)} \text{ is a field} \\
\iff & \frac{\mathbb{F}_{p}[x]}{x^{2}+x+1}\text{ is a field} \\
 \iff & (x^{2}+x+1)\text{ is maximal in }\mathbb{F}_{p}[x] \\
\iff & x^{2}+x+1\text{ is irreducible in }\mathbb{F}_{p}[x] \\
\iff & x^{2}+x+1=0\text{ has no roots in }\mathbb{F}_{p}[x] \\
  \iff & p\equiv 2\mod 3,
\end{align}
$$
where the last equivalence is obtained from [[#^de56d5]]. 


---

# Problem 4

> [!Exercise]
> Let $f, g$ be polynomials in $\mathbb{C}[x, y]$ with no common factor. Show that the ring $R=\mathbb{C}[x, y]/(f, g)$ is a finite dimensional vector space over $\mathbb{C}$.

Let $\mathbb{C}(x)$ be the [[LEC ALG3 8#^8031a7|field of fractions]] of $\mathbb{C}[x]$. Use results from [[LEC ALG3 10#Generalization to multivariable polynomial rings over fields|here]] to see that if $f$ and $g$ have no common factor in $\mathbb{C}[x, y]=\mathbb{C}[x][y]$, they have no common factor in $\mathbb{C}(x)[y]$. Thus, the gcd of $f$ and $g$ in $\mathbb{C}(x)[y]$ is $1$, and since $\mathbb{C}(x)[y]$ is a PID, there exist $p(x), q(x)\in \mathbb{C}(x)$ such that
$$
\begin{align}
f(x, y)p(x)+g(x, y)q(x)=1.
\end{align}
$$
Multiply out by the denominators of $p$ and $q$ to obtain
$$
f(x, y)p'(x)+g(x, y)q'(x)=h_{1}(x),
$$
where $p', q', h_{1}\in \mathbb{C}[x]$. Thus, $h_{1}(x)$ is contained in the ideal $(f, g)$ generated by $f$ and $g$ in $\mathbb{C}[x, y]$. Similar reasoning furnishes a polynomial $h_{2}[y]\in \mathbb{C}[y]$ such that $h_{2}[y]\in(f, g)$. 

Consider the ideal $(h_{1}(x), h_{2}(y))$ in $\mathbb{C}[x, y]$. Let the degree of $h_{1}(x)$ and $h_{2}(y)$ be $n$ and $m$ respectively. Note that the set $\{ x^{i}y^{j}\ | \ 1\leq i\leq n, 1\leq m\leq j \}$ is a finite basis for $\mathbb{C}[x, y]/(h_{1}, h_{2})$. Note that $(f, g)$ contains $(h_{1}, h_{2})$. By the correspondence theorem, $(f, g)/(h_{1}, h_{2})$ is an ideal of $\mathbb{C}[x, y]/(h_{1}, h_{2})$. It follows that 