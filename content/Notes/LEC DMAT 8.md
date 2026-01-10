---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-02-03
time: 11:53
id: "206"
---
# The twelve fold way

> [!Question]
> How many ways to place $m$ balls in $n$ boxes?

## Unrestricted

| Balls     | Boxes     | \#                                                                                                                   |
| --------- | --------- | -------------------------------------------------------------------------------------------------------------------- |
| Labeled   | Labeled   | $n^{m}$                                                                                                              |
| Unlabeled | Labeled   | $\displaystyle{\binom{n+m-1}{n-1}}$[^1]                                                                              |
| Labeled   | Unlabeled | $\displaystyle\sum_{i=1}^{n}{S}(m, i)$. See [[LEC DMAT 6#^a3db8a]].                                                  |
| Unlabeled | Unlabeled | $\displaystyle \sum_{i=1}^{n}P(m, i)$, where $P(m, i)$ = number of partitions of $m$ into $i$ parts. No closed form. |

Let $P_{m}:=\sum_{i=1}^{m}P(m, i)$. Then, the generating function for $P_{m}$ is
$$
\begin{align}
\sum_{m\geq{0}}P_{m}x^{m} & =\prod_{j=1}^{\infty}\left( \frac{1}{1-x^{j}} \right) \\
 & = \underbrace{ (1+x+x^{2}+\dots) }_{  \text{\# of 1's} }~\underbrace{ (1+(x^{2})+(x^{2})^{2}+\dots) }_{ \text{\# of 2's} }~\underbrace{ (1+(x^{3})+(x^{3})^{2}) }_{ \text{\# of 3's} }\dots.
\end{align}
$$
Let $Q_{m}$ be the number of ways to place $m$ unlabelled balls in $n$ labelled boxes. Then, the generating function of $Q_{m}$ is
$$
\sum_{m\geq{0}}Q_{m}x^{m} =(1+x+x^{2}+\dots)^{n}=\frac{1}{(1-x)^{n}}=(1-x)^{-n}.
$$

## Injective

| Balls     | Boxes     | \#                         |
| --------- | --------- | -------------------------- |
| Labeled   | Labeled   | $(n)_{m}$                  |
| Unlabeled | Labeled   | $\displaystyle{\binom nm}$ |
| Labeled   | Unlabeled | $0$ or $1$                 |
| Unlabeled | Unlabeled | $0$ or $1$                 |

## Surjective

| Balls     | Boxes     | \#                                |
| --------- | --------- | --------------------------------- |
| Labeled   | Labeled   | $S(m, n)n!$                       |
| Unlabeled | Labeled   | $\displaystyle{\binom{m-1}{n-1}}$ |
| Labeled   | Unlabeled | $S(m, n)$                         |
| Unlabeled | Unlabeled | $P(m, n)$                         |


---
# Solving Linear Recurrence relations

> [!Remark]
> For linear recurrence relations, if we can find any solutions, we can take linear combinations of them to generate new solutions. For example, If $F$ and $G$ satisfy a recurrence relation, $H_{n}=aF_{n}+bG_{n}$ also satisfies it.
## Number of subsets

Let $F(n)=$ number of subsets of $[n]$.

$F(n)=2F(n-1)$ for all $n\geq 1$.
$F(0)=1$.

Let $\phi(x)\equiv \sum_{n\geq 0}F(n)x^{n}$. This is called a **generating function**.

$$
2x\phi(x)=\sum_{n\geq 1} F(n)x^{n}=\phi(x)-1
$$
so, $\phi(x)=\frac{1}{1-2x}=1+2x+(2x)^{2}+(2x)^{3}+\dots$

Observe that $\phi$ has a [[LEC ANA1 31#^2bd39d|radius of convergence]] of $\frac{1}{2}$, so our manipulations are justified by analysis. This does not always need to be the case.

## The Fibonacci sequence

Let $F(n)$ be the Fibonacci sequence. There are several methods to solve for the explicit formula.
### Method 1: Exponential ansatz

*Try* a solution of the form $F_{n}=\alpha^{n}$. This gives us the characteristic equation $\alpha^{2}-\alpha-1$, the roots of which are $\alpha=\frac{1}{2}(1\pm \sqrt{ 5 })$. Thus, a general solution would be of the form
$$
F_{n}=a\left( \frac{{1+\sqrt{ 5 }}}{2} \right)^{n}+b\left( \frac{{1-\sqrt{ 5 }}}{2} \right)^{n}.
$$
Use the initial conditions of $F_{0}=0$ and $F_{1}=1$ to solve for $a$ and $b$.

> [!Note] Solving general linear recurrence relations with constant coefficients using exponential ansatz
> 
> Consider the recurrence
> $$
> F(n)=a_{1}F(n-1)+a_{2}F(n-2)+\dots+a_{k}F(n-k).
> $$
> We try a solution of the form $F(n)=\alpha^{n}$; we find that $\alpha$ must be a root of the polynomial
> $$
> x^{k}=a_{1}x^{k-1}+a_{2}x^{k_{2}}+\dots+a_{k}.
> $$
> If this *characteristic equation* has all its roots distinct, then we obtain $k$ independent solutions of the recurrence relation. Taking a linear combination of these, and fitting the $k$ initial values of $F$, we get $k$ linear equations in $k$ unknowns; these equations have a unique solution. However, if the characteristic polynomial has repeated roots, then we don't obtain enough solutions. In this case, suppose that $\alpha$ is a root of the characteristic equation with multiplicity $d$. Then it can be verified that the $d$ functions $\alpha^{n}, n\alpha^{n}, \dots, n^{d-1}\alpha^{n}$ are all solutions of the recurrence relation. Doing this for every root, we again find enough independent solutions that $k$ initial values can be fitted. 
> 
> The justification of this is the fact that the solutions claimed can be substituted in the recurrence relation and its truth verified. 

### Method 2: Matrix diagonalization [^2]

Express the recurrence as a matrix product:
$$
\begin{pmatrix}
F_{n + 1}   \\
F_n
\end{pmatrix}
=
\begin{pmatrix}
1   & 1 \\
1   & 0
\end{pmatrix}
\begin{pmatrix}
F_n \\
F_{n - 1}
\end{pmatrix}.
$$
Let $X$ be the coefficient matrix of the recurrence. Then, 
$$
\begin{pmatrix}
F_{n + 1}   \\
F_n
\end{pmatrix}
=
X^n
\begin{pmatrix}
1   \\
0
\end{pmatrix}.
$$
It would be beneficial to [[LEC ALG1 19#Diagonalization|diagonalize]] $X$, since powers of a diagonal matrix are easy to compute. The characteristic polynomial of $X$ is the same as the characteristic equation we obtained in the previous method, so $\phi, \psi=\frac{1}{2}(1\pm \sqrt{ 5 })$ are the eigenvalues of $X$. We can find and normalize the eigenvectors corresponding to these eigenvalues to obtain the change of basis matrix
$$
P =
\begin{pmatrix}
\vec{v}_\varphi & \vec{v}_\psi
\end{pmatrix}
=
\frac{1}{\sqrt[4]{5}}
\begin{pmatrix}
\sqrt{\varphi}  & -\sqrt{-\psi} \\
\sqrt{-\psi}    & \sqrt{\varphi}
\end{pmatrix},
$$
and since $P$ is an [[LEC ALG2 15|orthogonal matrix]], $P^{-1}=P^{T}$. This gives us
$$
\begin{align*}
F_n
    & =
        \begin{pmatrix}
            0   & 1
        \end{pmatrix}
        X^n
        \begin{pmatrix}
        1   \\
        0
        \end{pmatrix}   \\
    & =
        \begin{pmatrix}
            0   & 1
        \end{pmatrix}
        P D^n P^{-1}
        \begin{pmatrix}
        1   \\
        0
        \end{pmatrix}   \\
    & =
        \frac{1}{\sqrt{5}}
        \begin{pmatrix}
            0   & 1
        \end{pmatrix}
        \begin{pmatrix}
        \sqrt{\varphi}  & -\sqrt{-\psi} \\
        \sqrt{-\psi}    & \sqrt{\varphi}
        \end{pmatrix}
        \begin{pmatrix}
        \varphi^n   & 0 \\
        0           & \psi^n
        \end{pmatrix}
        \begin{pmatrix}
        \sqrt{\varphi}  & \sqrt{-\psi} \\
        -\sqrt{-\psi}    & \sqrt{\varphi}
        \end{pmatrix}
        \begin{pmatrix}
        1   \\
        0
        \end{pmatrix}   \\
    & =
        \frac{1}{\sqrt{5}}
        \begin{pmatrix}
        \sqrt{-\psi}    & \sqrt{\varphi}
        \end{pmatrix}
        \begin{pmatrix}
        \varphi^n   & 0 \\
        0           & \psi^n
        \end{pmatrix}
        \begin{pmatrix}
        \sqrt{\varphi}  \\
        -\sqrt{-\psi}
        \end{pmatrix}   \\
    & = 
        \frac{1}{\sqrt{5}}
        \begin{pmatrix}
        \sqrt{-\psi}    & \sqrt{\varphi}
        \end{pmatrix}
        \begin{pmatrix}
        \sqrt{\varphi}\ \varphi^n    \\
        -\sqrt{-\psi}\ \psi^n
        \end{pmatrix}   \\
    & = 
        \frac{1}{\sqrt{5}}
        \left(\sqrt{-\psi \varphi} \varphi^n - \sqrt{-\varphi \psi} \psi^n\right)   \\
    & = \frac{1}{\sqrt{5}}
        \left(\phi^n - \psi^n\right).
\end{align*}
$$
### Method 3: Generating function

Let $\psi(x)=\sum_{n\geq 0}F(n)x^{n}$.
$$
x\psi(x)=\sum_{n\geq 0} F(n)x^{n+1}
$$
$$
x^{2}\psi(x)=\sum_{n\geq 0}F(n)x^{n+2}
$$
$$
\psi(x)-x\psi(x)-x^{2}\psi(s)=1
$$
So, $\psi(x)=\frac{1}{1-x-x^{2}}$.

Let
$$
\frac{1}{1-x-x^{2}}=\frac{1}{(1-\alpha x)(1-\beta x)}=\frac{a}{1-\alpha x}+\frac{b}{1-\beta x}
$$
where $\alpha=\frac{{1+\sqrt{ 5 }}}{2}$ and $\beta=\frac{{1-\sqrt{ 5 }}}{2}$. 

We know $a+b=1$ and $a\beta+b\alpha=0$. 
We can solve for $a$ and $b$: $a=\frac{1}{\sqrt{ 5 }}$, $b=-\frac{1}{\sqrt{ 5 }}$.
Thus, we have $F(n)=a\alpha^{n}+ b\beta^{n}$.

> [!Remark]
> Once we have found the power series above, we can use the theory of power series to show that $\psi$ converges for $|x|< \frac{1}{\alpha}$, so our manipulations are justified analytically. However, there exists a theory of *formal power series*, according to which it is legitimate to do such manipulations without any regard to questions of convergence. If the sequence specified by a recurrence relation grows no faster than exponentially, its generating function will have non-zero radius of convergence, and analytical techniques can be used on it. However, if the growth is faster than exponential, the series must be treated formally. See @cameronCombinatoricsTopicsTechniques2001 [p.54].

## Derangements

$D_{n}$ is the number of derangements of size $n$.

$D_{0}=1$, $D_{1}=0$, $D_{2}=1$, $D_{n}=(n-1)(D_{n-1}+D_{n-2})$.

Note that $D_{n}-nD_{n-1}=(-1)(D_{n-1}-(n-1)D_{n-2})=(-1)^{n}$.

Thus, $\frac{D_{n_{}}}{n!}-\frac{D_{n-1}}{(n-1)!}=\frac{(-1)^{n}}{n!}$, $n\geq 1$. 

Thus, 
$$
\frac{D_{n}}{n!}=\sum_{i= 0}^{n} \frac{(-1)^{i}}{i!}
$$





> [!Note]
> In general, a linear recurrence relation
> $f(n)=a_{1}F(n-1)+\dots+a_{k}f(n-k)$ given $f(0)$, $f(1)$, ..., $f(k-1)$ has a unique solution. $a_{i}$ could be functions of $n$. 



show me why $\alpha^{n}$, $n\alpha^{n}$, ..., $n^{d-1}\alpha^{n}$ are solutions of the recurrence relation if $\alpha$ is a root of the characteristic equation with multiplicity $d$.  

[^1]: Here's how you can think about this: split the pool you are choosing from into two pools of size $m+1$ and $n-2$. Say you choose $k$ from pool $1$ and $n-1-k$ from pool $2$. Think of the choices from pool 1 determining the placement of $k$ dividers on a "tape" of $m$ balls. We have $(n-2)-(n-1-k)=k-1$ undrawn positions form pool $2$: think of these $k-1$ blank positions as dividers, distributing the $n-1-k$ dividers among the $k$ dividers on the tape of $m$ balls. 

[^2]: @rochfordMatrixDiagonalizationFibonacci2014
