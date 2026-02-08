---
tags:
  - PROB
id: "294"
date: March 2025
---
## Problem 2

For a fixed $k$, the probability of each elementary event with $k$ red draws is equal. 

---
## Problem 3

### Part a

The support of $\mathcal{B}^{25}_{20}$ is $\{ 20, 21, 22, 23, 24, 25 \}$. The support of $\mathcal{M}^{25}_{20}$ is $\{ 10, 11, 12, 13, 14 , 15\}$. Thus, $P(\mathcal{B}^{25}_{20}=\mathcal{M}^{25}_{20})=0$. 

### Part b

The support for $\mathcal{M}^{5}_{3}$ is $\{ 2, 3, 4 \}$ and the support for $\mathcal{A}^{5}_{3}$ is $\{ 1, 2, 3 \}$. 

| $\omega\in \Omega$ | $\mathcal{M}^{5}_{3}$ | $\mathcal{A}^{5}_{3}$ | $\mathcal{B}^{5}_{3}$ | $\mathcal{\mu}^{5}_{3}$ |
| ------------------ | --------------------- | --------------------- | --------------------- | ----------------------- |
| $\{ 1, 2, 3 \}$    | 2                     | 1                     | 3                     | 2                       |
| $\{ 1, 2, 4 \}$    | 2                     | 1                     | 4                     | 7/3                     |
| $\{ 1, 2, 5 \}$    | 2                     | 1                     | 5                     | 8/3                     |
| $\{ 1, 3, 4 \}$    | 3                     | 1                     | 4                     | 8/3                     |
| $\{ 1, 4, 5 \}$    | 4                     | 1                     | 5                     | 10/3                    |
| $\{ 1, 3, 5 \}$    | 3                     | 1                     | 5                     | 3                       |
| $\{ 2, 3, 4 \}$    | 3                     | 2                     | 4                     | 3                       |
| $\{ 2, 3, 5 \}$    | 3                     | 2                     | 5                     | 10/3                    |
| $\{ 2, 4, 5 \}$    | 4                     | 2                     | 5                     | 11/3                    |
| $\{ 3, 4, 5 \}$    | 4                     | 3                     | 5                     | 4                       |
$P(\mathcal{A}=1\ | \ \mathcal{M}=2)=1$
$P(\mathcal{A}=1\ | \ \mathcal{M}=3)=\frac{1}{2}$
$P(\mathcal{A}=1\ | \ \mathcal{M}=4)=\frac{1}{3}$

$P(\mathcal{A}=2\ | \ \mathcal{M}=2)=0$
$P(\mathcal{A}=2\ | \ \mathcal{M}=3)=\frac{1}{2}$
$P(\mathcal{A}=2\ | \ \mathcal{M}=4)=\frac{1}{3}$

$P(\mathcal{A}=3\ | \ \mathcal{M}=2)=0$
$P(\mathcal{A}=3\ | \ \mathcal{M}=3)=0$
$P(\mathcal{A}=3\ | \ \mathcal{M}=4)=\frac{1}{3}$

$\mathcal{M}$ and $\mathcal{B}$ are clearly not independent, since $P(\{ \mathcal{M}=2 \} \cap \{ \mathcal{B}=3 \})=\frac{1}{10}\ne P(\mathcal{M}=2)P(\mathcal{B}=3)=\frac{3}{100}$. 


### Part c

$\mu^{n}_{3}$ takes it minimum value on $\{ 1, 2, 3 \}$, which is $2$. It takes its maximum value on $\{ n-2, n-1, n \}$, which is $n-1$. Thus, the smallest interval containing the support of $\mu^{n}_{3}$ is $[2, n-1]$.

### Part d

From the table, $P(\mu=\mathcal{M})=\frac{4}{10}$.

### Part e

$E(\mathcal{A})=1\left( \frac{6}{10} \right)+2\left( \frac{3}{10} \right)+3\left( \frac{1}{10} \right)=1.5$
$E(\mathcal{B})=3\left( \frac{1}{10} \right)+4\left( \frac{3}{10} \right)+5\left( \frac{6}{10} \right)=4.5$
$E(\mathcal{M})=2\left( \frac{3}{10} \right)+3\left( \frac{4}{10} \right)+4\left( \frac{3}{10} \right)=3$. 

### Part f

We have
$$
\mu^{5}_{3}=\frac{{\mathcal{A}^{5}_{3}+\mathcal{B}^{5}_{3}+\mathcal{M}^{5}_{3}}}{3}.
$$
So,
$$
\begin{align}
E(\mu^{5}_{3}) & =\frac{1}{3}(E(\mathcal{A}^{5}_{3})+E(B^{5}_{3})+E(M^{5}_{3})) \\
 & =3.
\end{align}
$$

