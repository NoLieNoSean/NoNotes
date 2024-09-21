---
tags:
  - ANA1
---

Statement can be found [[Sequences and convergence#Algebraic limit theorem|here]].
## 1. $\lim_{ n \to \infty }(ca_{n})=ca$

Assume $c$ is not 0 (constant sequences converge). We know that $\lim_{ n \to \infty }a_{n} = a$. Thus, we can choose $N\in \mathbb{N}$ such that for all $n\ge N$, $|a_{n}-a|< \frac{\epsilon}{|c|}$, for some arbitrary positive number $\epsilon$. Then we have
$$
\begin{align*}
&|c||a_{n}-a|<\epsilon \\
\implies& |ca_{n}-ca|<\epsilon \ \forall n\ge N
\end{align*}
$$
❏

## 2. $\lim_{ n \to \infty }(a_{n} + b_{n}) = a+b$

Let $\epsilon>0$ be arbitrary. Since $(a_{n})\to a$ and $(b_{n})\to b$, we can choose $N_{1}\in \mathbb{N}$ and $N_{2}\in \mathbb{N}$ such that 
$$
\begin{align*}
|a_{n}-a|< \frac{\epsilon}{2} \ \  &\forall n\geq N_{1}, \text{ and } \\
|b_{n}-b|< \frac{\epsilon}{2}\ \ &\forall n\geq N_{2}
\end{align*}
$$
Let $N=\max\{ N_{1}, N_{2} \}$. From the triangle inequality, we have
$$
\begin{align*}
|(a_{n}+b_{n})-(a+b)| &=  
|(a_{n}-a)+(b_{n}-b)| \\
&\le|a_{n}-a|+|b_{n}-b| \\
&< \frac{\epsilon}{2}+ \frac{\epsilon}{2}=\epsilon
\end{align*}
$$
for all $n\ge N$. ❏

>[!Corollary]
>$\lim_{ n \to \infty }a_{n} = a$ is the same as $\lim_{ n \to \infty }(a_{n}-a)=0$.

## 3. $\lim_{ n \to \infty }(a_{n}b_{n}) = ab$

We have to show that $\lim_{ n \to \infty }(a_{n}b_{n}-ab)=0$. 
$$
a_{n}b_{n}-ab = (a_{n}-a)(b_{n}-b)+b(a_{n}-a)+a(b_{n}-b)
$$
Using parts (1) and (2) and the above equality, we have
$$
\begin{align*}
&\lim_{ n \to \infty } (a_{n}b_{n}-ab) \\
=&\lim_{ n \to \infty } (a_{n}-a)(b_{n}-b)
\end{align*}
$$
Let $\epsilon>0$ be arbitrary. Since $(a_{n})\to a$ and $(b_{n})\to b$, we can choose $N_{1}\in \mathbb{N}$ and $N_{2}\in \mathbb{N}$ such that 
$$
\begin{align*}
|a_{n}-a|<  \sqrt{ \epsilon }\ \  &\forall n\geq N_{1}, \text{ and } \\
|b_{n}-b|< \sqrt{ \epsilon }\ \ &\forall n\geq N_{2}
\end{align*}
$$
Let $N=\max\{ N_{1},N_{2} \}$. Multiplying the two inequalities gives us
$$
\begin{align*}
 & |(a_{n}-a)(b_{n}-b)-0|<\epsilon \ \ \forall n\ge N \\
 & \therefore \lim_{ n \to \infty } (a_{n}-a)(b_{n}-b) = 0
\end{align*}
$$
❏

## 4. $\lim_{ n \to \infty }\left( \frac{a_{n}}{b_{n}} \right) = \frac{a}{b}$, provided $b\ne 0$.
This will follow from (3) if we can prove that 
$$
(b_{n})\to b \implies \left( \frac{1}{b_{n}} \right)\to \frac{1}{b}
$$
whenever $b\ne 0$.
Observe that 
$$
\left| \frac{1}{b_{n}}- \frac{1}{b}\right|=\frac{{|b-b_{n}|}}{|b||b_{n}|}.
$$
Because $(b_{n})\to b$, we can make the numerator arbitrarily small. Now, it would be great if we could come up with a number $M$ such that 
$$
\frac{1}{|b||b_{n}|}<M
$$
for all $n>N_{1}$, for some $N_{1}$. In this vein, let $N_{1}$ be such that for all $n\ge N_{1}$, 
$$
|b_{n}-b|< \frac{|b|}{2}.
$$
From the triangle inequality, 
$$
\begin{align*}
|b|&\le |b-b_{n}|+|b_{n}| \\
&< \frac{|b|}{2}+|b_{n}| \\ \\

\implies &|b_{n}| > \frac{|b|}{2}.
\end{align*}
$$
Thus, we have
$$
\frac{1}{|b||b_{n}|}< \frac{2}{|b|^{2}}
$$
for all $n\ge N_{1}$. 
Now, let $\epsilon>0$ be arbitrary. Let $N_{2}$ be such that for all $n\ge N_{2}$, 
$$
|b-b_{n}|< \frac{\epsilon|b|^{2}}{2}.
$$
Let $N = \max\{ N_{1}, N_{2} \}$. Multiplying the preceding inequalities, we get
$$
\frac{{|b-b_{n}|}}{|b||b_{n}|} < \epsilon
$$
for all $n\ge N$. ❏