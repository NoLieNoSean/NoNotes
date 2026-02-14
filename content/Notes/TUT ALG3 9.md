---
id: "357"
date: 2025-11-17
time: 13:55
tags:
  - ALG3
  - Tutorial
---
# Problem 1

> [!Exercise]
> Let $F=\mathbb{F}_{8}$. Determine all the elements of $F$. Find the irreducible polynomial of each of the elements. 

$\mathbb{F}_{8}$ has order $3$ over $\mathbb{F}_{2}$. Its elements are the eight roots of the polynomial $x^{8}-x$. The factorization of this polynomial in $\mathbb{F}_{2}$ is
$$
x^{8}-x=x(x-1)(x^{3}+x+1)(x^{3}+x^{2}+1).
$$

^91d6f6

By [[LEC ALG3 21#^977ed1]].2, $x^{3}+x+1$ and $x^{3}+x^{2}+1$ are the irreducible polynomials of degree $3$ in $\mathbb{F}_{2}[x]$. By [[LEC ALG3 21#^91a225]], we can go modulo any one of these to get $\mathbb{F}_{8}$. Let's pick $x^{3}+x+1$. Then, 
$$
\mathbb{F}_{8}\cong\frac{\mathbb{F}_{2}[x]}{(x^{3}+x+1)}.
$$
If $\beta$ is the image of $x$, then $\beta$ is a root of $x^{3}+x+1$, and $\{ 1, \beta, \beta^{2} \}$ is an $\mathbb{F}_{2}$-basis for $\mathbb{F}_{8}$. Thus, the elements of $\mathbb{F}_{8}$ are
$$
\mathbb{F}_{8}=\{ 0, 1, \beta, \beta^{2}, 1+\beta, \beta+\beta^{2}, 1+\beta^{2}, 1+\beta+\beta^{2} \}.
$$
Now, each of these elements is a root of $x^{8}-x$, hence the irreducible polynomial for each of them is going to one of the four that appear in [[#^91d6f6]]. We can just evaluate to find which one.
1. The irreducible polynomial of $0$ is $x$.
2. The irreducible polynomial of $1$ is $x-1$.
3. The irreducible polynomial of $\beta, \beta^{2}, \beta+\beta^{2}$ is $x^{3}+x+1$.
4. The irreducible polynomial of $1+\beta, 1+\beta^{2}, 1+\beta+\beta^{2}$ is $x^{3}+x^{2}+1$. 

---
# Problem 2

> [!Exercise]
> Find the $13$-th root of $2$ in the field $\mathbb{F}_{8}$.

$2=0$, so its just $0$, right?

---
# Problem 3

> [!Exercise]
> Factor $x^{9}-x$ and $x^{27}-x$ in $\mathbb{F}_{3}$. 

By [[LEC ALG3 21#^977ed1]].2, the irreducible factors of $x^{3^{2}}-x$ in $\mathbb{F}_{3}[x]$ are the irreducible polynomials in $\mathbb{F}_{3}[x]$ whose degrees divide $2$. 
1. Degree $1$: $0, 1, 2$ are roots of $x^{9}-x$, so we have $x$, $x-1$, $x-2$.
2. Degree $2$: We must have $(9-3)/2=3$ quadratic factors. Using the generic form $x^{2}+bx+c$, you could easily go through the $9$ possibilities, since a quadratic is reducible iff it has a root. Alternatively, use that fact that the discriminant $b^{2}-c$ must be $2$, the only element of $\mathbb{F}_{3}$ which is not a perfect square. You'll find that the $(b, c)$ pairs are $(0, 1), (2, 2), (1, 2)$. Thus, the factors are $x^{2}+1$, $x^{2}+2x+2$, and $x^{2}+x+2$. 

Thus, $x^{9}-x$ factors in $\mathbb{F}_{3}[x]$ as
$$
x^{9}-x=x(x-1)(x-2)(x^{2}+1)(x^{2}+2x+2)(x^{2}+x+2).
$$

You'll have obtain the irreducible cubics for $x^{27}-x$ by brute force.

---
# Problem 4

> [!Exercise]
> Factor the polynomial $x^{16}-x$ over $\mathbb{F}_{4}$ and $\mathbb{F}_{8}$.

First, factor over $\mathbb{F}_{2}$:
$$
x^{2^{4}}-x=(x)(x+1)(x^{2}+x+1)(x^{4}+x^{3}+1)(x^{4}+x+1)(x^{4}+x^{3}+x^{2}+x+1)
$$
First, over $\mathbb{F}_{4}$. The elements of $\mathbb{F}_{4}$ are $0, 1, \alpha, 1+\alpha$, with $\alpha^{2}+\alpha+1=0$. Clearly, $x^{2}+x+1=(x-\alpha)(x-(\alpha+1))$. 



Consider $x^{4}+x^{3}+1\in \mathbb{F}_{2}[x]$. Let $F$ be the algebraic closure of $\mathbb{F}_{2}$. Since
$$
x^{2^{4}}-x=(x)(x+1)(x^{2}+x+1)(x^{4}+x^{3}+1)(x^{4}+x+1)(x^{4}+x^{3}+x^{2}+x+1),
$$
we know that $x^{4}+x^{3}+1$ splits completely in $\mathbb{F}_{16}[x]$. We also know that $x^{4}+x^{3}+1$ does not split in $\mathbb{F}_{8}[x]$. Does this imply that the splitting field of $x^{4}+x^{3}+1\in \mathbb{F}_{8}[x]$ is $\mathbb{F}_{2^{\text{lcm(3, 4)}}}=\mathbb{F}_{4096}$? (Yes!)


---

# Problem 5

> [!Exercise]
> Let $K$ be a finite field. Prove that the product of the nonzero elements of $K$ is $-1$. 

simple.

---

# Problem 6

> [!Exercise]
> The polynomials  $f(x)=x^{3}+x+1$ and $g(x)=x^{3}+x^{2}+1$ are irreducible over $\mathbb{F}_{2}$. Let $K$ be the field extension obtained by adjoining a root of $f$, and let $L$ be the extension obtained by adjoining a root of $g$. Describe explicitly an isomorphism from $K$ to $L$, and determine the number of such isomorphisms.

$$
K=\frac{\mathbb{F}_{2}[x]}{(x^{3}+x+1)}, \quad L=\frac{\mathbb{F}_{2}[x]}{(x^{3}+x^{2}+1)}.
$$



---
# Problem 11

> [!Exercise]
> Prove that a finite subgroup of the multiplicative group  of any field $F$ is a cyclic group.

^a7389b

Let $G\subseteq F^{\times}$ be of order $n$. Let $A_{d}$ denote the set of elements of $G$ of order $d$. Let $B_{d}$ denote the set of elements of $G$ whose order divides $d$, that is, $\{ x\in G:x^{d}=1 \}$. 

Fix $d\ | \ n$. Since $x^{d}-1=0$ can have at most $d$ solutions in $F$, $|B_{d}|\leqslant d$. Suppose $A_{d}\ne \emptyset$, and $y\in A_{d}$. Clearly, $\langle y \rangle\subseteq B_{d}$. Since $|\langle y \rangle|=d$, $x^{d}-1$ splits completely in $F$, and $\langle y \rangle= B_{d}=\{ x\in F :x^{d}=1\}$. It follows that the elements of $A_{d}$ are just the elements of $\langle y \rangle$ of order $d$, so $|A_{d}|=\varphi(d)$. We have established that $|A_{d}|\leqslant\varphi(d)$. Now, 
$$
\begin{align}
n=|G|=\sum_{d\ | \  n}|A_{d}|\leqslant \sum_{d\ | \  n} \varphi(d)=n.
\end{align}
$$
This forces $|A_{d}|=\varphi(d)$ for all $d\ | \ n$. In particular, $|A_{n}|=\varphi(n)\ne 0$. Therefore, $G$ has an element of order $n$, and is cyclic.





