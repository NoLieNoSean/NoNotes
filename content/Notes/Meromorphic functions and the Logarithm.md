---
id: "410"
date: 2026-02-15
time: 19:57
tags:
  - CANA
---
# Zeroes and poles

> [!Theorem] @steinComplexAnalysis2003 3.1.1
> Suppose that $f$ is holomorphic in a connected open set $\Omega$, has a zero at a point $z_{0}\in \Omega$, and does not vanish identically in $\Omega$. Then there exists a neighborhood $U\subseteq \Omega$ of $z_{0}$, a non-vanishing holomorphic function $g$ on $U$, and a unique positive integer $m$ such that
> $$
> f(z)=(z-z_{0})^{m}g(z)
> $$
> for all $z\in U$. We say $f$ has a **zero of order $n$** at $z_{0}$. A zero of order $1$ is called **simple**. 
> 
> > [!Proof]-
> > 
> > By [[Cauchy's Theorem and Its Applications#^172dec]], we can assume that $f$ does not vanish on any neighborhood of $z_{0}$. Let $V\subseteq \Omega$ be an open disc centered at $z_{0}$. By [[Cauchy's Theorem and Its Applications#^f3eea8]], $f$ has a power series expansion $f(z)=\sum_{n=0}^{\infty}a_{n}(z-z_{0})^{n}$ at $z_{0}$ which converges on $V$. Let $a_{m}$ be the first non-zero coefficient. Then, we can write
> > $$
> > \begin{align}
> > f(z) & =(z-z_{0})^{m}(a_{m}+a_{m+1}(z-z_{0})+\dots) \\
> >  & =(z-z_{0})^{m}g(z).
> > \end{align}
> > $$
> > By [[Preliminaries to Complex Analysis#^0db182]], $g$ is holomorphic on $V$ since it is defined by a power series having the same radius of convergence as that of $f$. Since $g(z_{0})=a_{m}\ne 0$ and holomorphic functions are continuous, there exists a neighborhood $U$ of $z_{0}$ on which $g$ is nonzero. 
> > 
> > It remains to prove the uniqueness of $m$. Suppose there exists $k\ne m$ and non-vanishing holomorphic $h$ on $U$ such that $(z-z_{0})^{k}h(z)=(z-z_{0})^{m}g(z)$. WLOG, $k> m$. Then, we have
> > $$
> > g(z)=(z-z_{0})^{k-m}h(z)
> > $$
> > away from $z_{0}$. Letting $z\to z_{0}$ gives $g(z_{0})=0$, a contradiction. 
> 

^f5947d

> [!Definition]
> We say that a function $f$ defined in a deleted neighborhood of $z_{0}$ has a **pole** at $z_{0}$ if the function $1/f$, defined to be zero at $z_{0}$, is holomorphic in a (full) neighborhood of $z_{0}$. 

> [!Theorem] @steinComplexAnalysis2003 3.1.2
> If $f$ has a pole at $z_{0}\in \Omega$, then there exists a neighborhood $U$ of $z_{0}$, a non-vanishing function $h$ holomorphic on $U$ and a unique positive integer $n$ such that 
> $$
> f(z)=(z-z_{0})^{-n}h(z)
> $$
> for all $z\in U\setminus \{ z_{0} \}$. We say $z_{0}$ is a pole of **order** $n$. 
> 
> > [!Proof]-
> > 
> > By [[#^f5947d]], $1/f(z)=(z-z_{0})^{n}g(n)$, where $g$ is holomorphic an non-vanishing in a neighborhood of $z_{0}$. The result follows with $h(z)=1/g(z)$. 
> 

> [!Corollary] @steinComplexAnalysis2003 3.1.3
> If $f$ has a pole of order $n$ at $z_{0}$, then
> $$
> \begin{align}
> f(z)=\underbrace{ \frac{a_{-n}}{(z-z_{0})^{n}}+\frac{a_{-n+1}}{(z-z_{0})^{n-1}}+\dots+\frac{\overbrace{a_{-1}}^{\text{residue of }f\text{ at }z_{0}}}{(z-z_{0})} }_{ \text{principal part of }f\text{ at }z_{0} }+G(z), \\
> \end{align}
> $$
> where $G$ is a holomorphic function in a neighborhood of $z_{0}$. We write $\text{res}_{z_{0}}f=a_{-1}$. 

> [!Corollary] @steinComplexAnalysis2003 3.1.4
> If $f$ has a pole of order $n$ at $z_{0}$, then
> $$
> \text{res}_{z_{0}}f=\lim_{ z \to z_{0} } \frac{1}{(n-1)!}\left( \frac{d}{dz} \right)^{n-1}(z-z_{0})^{n}f(z).
> $$
> 


# The residue formula

[!Theorem]
Suppose that $f$ is holomorphic in an open set containing a circle $C$ and its interior, expect for a pole at $z_{0}$ inside $C$. Then
$$
\int_{C}f(z)dz=2\pi i \,\text{res}_{z_{0}}f.
$$

# Singularities and meromorphic functions

# The argument principle and applications

# Homotopies and simply connected domains

# The complex logarithm

# Fourier series and harmonic functions



