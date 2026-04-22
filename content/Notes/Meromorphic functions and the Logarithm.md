---
id: "410"
date: 2026-02-15
time: 19:57
tags:
  - CANA
---
# Zeroes and poles

> [!Definition] Singularity
> A **point singularity** of a function $f$ is a complex number $z_{0}$ such that $f$ is defined in a neighborhood of $z_{0}$ but not at the point $z_{0}$ itself. These are also called **isolated singularities**. We call $z_{0}\in \mathbb{C}$ a **zero** for the holomorphic function $f$ if $f(z_{0})=0$. 

> [!Theorem] @steinComplexAnalysis2003 3.1.1
> Suppose that $f$ is holomorphic in a connected open set $\Omega$, has a *zero* at a point $z_{0}\in \Omega$, and does not vanish identically in $\Omega$. Then there exists a neighborhood $U\subseteq \Omega$ of $z_{0}$, a ==non-vanishing== holomorphic function $g$ on $U$, and a unique positive integer $m$ such that
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

> [!Definition] Pole
> We say that a function $f$ defined  and holomorphic in a deleted neighborhood of $z_{0}$ has a **pole** at $z_{0}$ if the function $1/f$, defined to be zero at $z_{0}$, is holomorphic in a (full) neighborhood of $z_{0}$. 

^2a8b64

> [!Theorem] @steinComplexAnalysis2003 3.1.2
> If $f$ has a *pole* at $z_{0}\in \Omega$, then there exists a neighborhood $U$ of $z_{0}$, a non-vanishing function $h$ holomorphic on $U$ and a unique positive integer $n$ such that 
> $$
> f(z)=(z-z_{0})^{-n}h(z)\quad\quad  (z\in U\setminus \{ z_{0} \}).
> $$
> We say $z_{0}$ is a pole of **order** (or **multiplicity**) $n$. Order 1 poles are called **simple**. 
> 
> > [!Proof]-
> > 
> > By [[#^f5947d]], $1/f(z)=(z-z_{0})^{n}g(n)$, where $g$ is holomorphic an non-vanishing in a neighborhood of $z_{0}$. The result follows with $h(z)=1/g(z)$. 
> 

^925d45

> [!Corollary] @steinComplexAnalysis2003 3.1.3
> If $f$ has a pole of order $n$ at $z_{0}$, then there exists a neighborhood $U$ of $z_{0}$ such that for $z\in U\setminus \{ z_{0} \}$, we have
> $$
> \begin{align}
> f(z)=\underbrace{ \frac{a_{-n}}{(z-z_{0})^{n}}+\frac{a_{-n+1}}{(z-z_{0})^{n-1}}+\dots+\frac{\overbrace{a_{-1}}^{\text{residue of }f\text{ at }z_{0}}}{(z-z_{0})} }_{ \text{principal part of }f\text{ at }z_{0} }+G(z), \\
> \end{align}
> $$
> where $G$ is a holomorphic function in all of $U$. We write $\text{res}_{z_{0}}f=a_{-1}$. 

^fc94af

> [!Corollary] @steinComplexAnalysis2003 3.1.4
> If $f$ has a pole of order $n$ at $z_{0}$, then
> $$
> \text{res}_{z_{0}}f=\lim_{ z \to z_{0} } \frac{1}{(n-1)!}\left( \frac{d}{dz} \right)^{n-1}(z-z_{0})^{n}f(z).
> $$
> 

^6f601e

# The residue formula

> [!Theorem]
> Suppose that $f$ is holomorphic in an open set containing a circle $C$ and its interior, except for a *pole* at $z_{0}$ inside $C$. Then
> $$
> \int_{C}f(z)dz=2\pi i \,\text{res}_{z_{0}}f.
> $$
> 
> > [!Proof]-
> > 
> > As in the proof of [[Cauchy's Theorem and Its Applications#^d3c867]], we may choose a keyhole contour that avoids the pole, and let the width of the corridor go to zero to see that
> > $$
> > \int_{C}f(z)\, dz=\int_{C_{\epsilon}}f(z)\,dz
> > $$
> > where $C_{\epsilon}$ is the small circle centered at the pole $z_{0}$ and of radius $\epsilon$. Using [[#^fc94af]] on $f$, [[Cauchy's Theorem and Its Applications#^58d2c9]] on the constant functions $a_{-i}$, and [[Cauchy's Theorem and Its Applications#^6ba5d4]],
> > $$
> > \begin{align}
> > \int_{C_{\epsilon}}f(z)\,dz & =\sum_{i=2}^{n} \underbrace{ \int_{C_{\epsilon}}\frac{a_{-i}}{(z-z_{0})^{i}}\, dz }_{ =0\,\forall i }+\underbrace{ \int_{C_{\epsilon}}\frac{a_{-1}}{(z-z_{0})}\, dz }_{ =2\pi ia_{-1} }+\underbrace{ \int_{C_{\epsilon}}G(z) \,dz }_{ =0 } \\
> >  & = 2\pi i\,\text{res}_{z_{0}}f.
> > \end{align}
> > $$
> > 
> 

This theorem can be generalized to the case of finitely many poles.

> [!Corollary] The residue formula, @steinComplexAnalysis2003 3.2.2
> Suppose that $f$ is holomorphic in an open set containing a circle $C$ and its interior, expect for *poles* at the points $z_{1}, \dots, z_{N}$ inside $C$. Then
> $$
> \int_{C}f(z)\,dz=2\pi i\sum_{k=1}^{N} \text{res}_{z_{k}}f.
> $$
> 

^1463f8

[[#^1463f8]] can also be stated for toy contours. 

# Singularities and meromorphic functions

> [!Definition] Removable singularity
> Let $f$ be holomorphic in an open set $\Omega$, expect possibly at one point $z_{0}\in \Omega$. If we can define $f$ at $z_{0}$ in such a way that $f$ becomes holomorphic in all of $\Omega$, we say that $z_{0}$ is a **removable** singularity. 

^f2dd51

> [!Theorem] Riemann, @steinComplexAnalysis2003 3.3.1
> Suppose that $f$ is holomorphic in an open set $\Omega$ except possibly at a point $z_{0}\in \Omega$. If $f$ is bounded on $\Omega \setminus \{ z_{0} \}$, then $z_{0}$ is a removable singularity. 
> 
> > [!Proof]-
> > 
> > We may consider a small disc $D$ centered at $z_{0}$ and whose closure is contained in $\Omega$. Let $C$ denote the boundary of $D$ with positive orientation. Define
> > $$
> > g(z)=\frac{1}{2\pi i}\int_{C}\frac{f(\zeta)}{\zeta-z}\,d\zeta\quad (z\in D)
> > $$
> > Use [[Preliminaries to Complex Analysis#^ee7cbc]]:
> > $$
> > \begin{align}
> > g(z)=\frac{1}{2\pi i}\int_{0}^{2\pi} \frac{f(z_{0}+\epsilon e^{ i\theta })}{z_{0}+\epsilon e^{ i\theta }-z}(\epsilon ie^{ i\theta }) \, d\theta.
> > \end{align}
> > $$
> > [[Cauchy's Theorem and Its Applications#^adaf14]] now shows that $g(z)$ is holomorphic on all of $D$. 
> > 
> > We shall prove that if $z\in D$ and $z\ne z_{0}$, then under the assumptions of the theorem we have
> > $$
> > f(z)=g(z)\quad (z\in D\setminus \{ z_{0} \})
> > $$
> > Defining $f(z_{0})=g(z_{0})$ makes $f$ holomorphic at $z_{0}$, so $z_{0}$ is a removable singularity. 
> > 
> > Fix $z\in D$ with $z\ne z_{0}$ and consider a keyhole contour with keyholes around $z_{0}$ and $z$. Letting the sides of the corridors get closer to each other and finally overlap, in the limit we get 
> > $$
> > \int_{C}\frac{f(\zeta)}{\zeta-z}\,d\zeta+\int_{\gamma_{\epsilon}}\frac{f(\zeta)}{\zeta-z}\,d\zeta+\int_{\gamma_{\epsilon}'}\frac{f(\zeta)}{\zeta-z}\,d\zeta=0,
> > $$
> > where $\gamma_{\epsilon}$ and $\gamma_{\epsilon}'$ are small circles of radius $\epsilon$ with negative orientation centered at $z$ and $z_{0}$ respectively. Using [[Cauchy's Theorem and Its Applications#^d3c867|Cauchy's theorem]], we have
> > $$
> > \int_{\gamma_{\epsilon}}\frac{f(\zeta)}{\zeta-z}\,d\zeta=-2\pi if(z).
> > $$
> > For the third integral, we use the assumption that $f$ is bounded and that since $\epsilon$ is small, $\zeta$ stays away from $z$, and therefore
> > $$
> > \left| \int_{\gamma'_{\epsilon}}\frac{f(\zeta)}{\zeta-z}\,d\zeta \right|\leqslant  C\epsilon.
> > $$
> > Letting $\epsilon\to 0$ proves our claim and concludes the proof. 
> 

^8bc7a2

> [!Corollary] @steinComplexAnalysis2003 3.3.2
> Suppose that $f$ has an isolated singularity at the point $z_{0}$. Then $z_{0}$ is a pole of $f$ iff $|f(z)|\to \infty$ as $z\to z_{0}$. 
> 
> > [!Proof]-
> > 
> > If $z_{0}$ is a pole, then by [[#^2a8b64|definition]] $1/f$ has a zero at $z_{0}$, and therefore $|f(z)|\to \infty$ as $z\to z_{0}$. Conversely, suppose that this condition holds. Then, $1/f$ is bounded near $z_{0}$, and in fact $1/|f(z)|\to 0$ as $z\to z_{0}$. By [[#^8bc7a2]], $1/f$ has a removable singularity at $z_{0}$ and must vanish there. Thus, $z_{0}$ is a pole. 
> 

^708c72

> [!Definition] Essential singularity
> Isolated singularities that are not removable and are not poles are called **essential singularities**.  

Thus, isolated singularities belong to one of these classes:
1. Removable singularities ($f$ bounded near $z_{0}$)
2. Pole singularities ($|f(z)|\to \infty$ as $z\to z_{0}$)
3. Essential singularities. 

> [!Definition] Singularities at infinity
> If a function is holomorphic of all large values of $z$, we can describe its behavior at infinity using the same tripartite distinction. If $f$ is holomorphic of all large values of $z$, we consider $F(z)=f(1/z)$, which is now holomorphic in a deleted neighborhood of the origin. We say that $f$ has a **`blank` singularity at infinity** if $F$ has a `blank` singularity at the origin. If $f$ has a removable singularity at $\infty$, we also say that $f$ is holomorphic at $\infty$.

^b10655

Contrary to the controlled behavior of a holomorphic function near a removable singularity or a pole, behavior near an essential singularity is typically more erratic. 

> [!Theorem] Casorati-Weierstrass, @steinComplexAnalysis2003 3.3.3
> Suppose $f$ is holomorphic in the punctured disc $D_{r}(z_{0})\setminus \{ z_{0} \}$ and has an essential singularity at $z_{0}$. Then, the image of $D_{r}(z_{0})\setminus \{ z_{0} \}$ under $f$ is dense in $\mathbb{C}$. 
> 
> > [!Proof]-
> > 
> > Assume that the range of $f$ is not dense, i.e, there exists $w\in \mathbb{C}$ and $\delta> 0$ such that $|f(z)-w|>\delta$ for all $z\in D_{r}(z_{0})\setminus \{ z_{0} \}$. Then, we can define a new function on $D_{r}(z_{0})\setminus \{ z_{0} \}$ by
> > $$
> > \begin{align}
> > g(z)=\frac{1}{f(z)-w}, 
> > \end{align}
> > $$
> > which is bounded by $1/\delta$ and is holomorphic on $D_{r}(z_{0})\setminus \{ z_{0} \}$. By [[#^8bc7a2]], $g$ has a removable singularity at $z_{0}$. If $g(z_{0})\ne 0$, then $f(z)$ must have a removable singularity at $z_{0}$, a contradiction. If $g(z_{0})=0$, then $f(z)-w$ has a pole at $z_{0}$, and $f$ has a pole at $z_{0}$ by [[#^708c72]], also a contradiction. 
> 

We now consider functions with only isolated singularities that are poles. 

> [!Definition] Meromorphic function
> A function $f$ on an open set $\Omega$ is **meromorphic** if there exists a sequence of points $Z=\{ z_{i} \}_{i=0}^{\infty}$ that has *no limit points* in $\Omega$, and such that
> 1. the function $f$ is holomorphic in $\Omega \setminus Z$, and
> 2. $f$ has poles at each point in $Z$. 
> 
> A meromorphic function in $\mathbb{C}$ that is either holomorphic [[#^b10655|at infinity]] or has a pole at infinity is said to be **meromorphic in the extended complex plane**. 

> [!Theorem] @steinComplexAnalysis2003 3.3.4
> The meromorphic functions in the extended complex plane are the rational functions. 
> 
> > [!Proof]-
> > 
> > Suppose $f$ is meromorphic in the extended complex plane. Then, $f(1/z)$ has a [[#^2a8b64|pole]] or a [[#^f2dd51|removable singularity]] at the origin. In either case, $f(1/z)$ is holomorphic in a neighborhood of the origin, which implies that all of the poles of $f$ (except infinity, of course) must lie in some closed disc of radius $r$ centered at the origin. Thus, by [[LEC CAL1 7#^0b0337|sequential compactness]], $f$ can have only finitely many poles in the plane, say $z_{1}, \dots, z_{n}$. 
> > 
> > For each pole $z_{k}\in \mathbb{C}$, using [[#^fc94af]], there exists an open neighborhood $U_{k}$ in which we can write
> > $$
> > f(z)=f_{k}(z)+g_{k}(z)
> > $$
> > where $f_{k}(z)$ is the principal part of $f$ at $z_{k}$ and $g_{k}(z)$ is holomorphic in $U_{k}$. Note that $f_{k}$ is a polynomial in $1/(z-z_{k})$. Similarly, we can write
> > $$
> > f(1/z)=\tilde{f}_{\infty}(z)+\tilde{g}_{\infty}(z),
> > $$
> > where $\tilde{g}_{\infty}$ is holomorphic in a neighborhood of the origin and $\tilde{f}_{\infty}$ is the principal part of $f(1/z)$ at the origin ($\tilde{f}_{\infty}=0$ if $f$ is holomorphic at infinity). Note that $\tilde{f}_{\infty}$ is a polynomial in $1/z$. Let $f_{\infty}(z)=\tilde{f}_{\infty}(1/z)$. Thus, for all $z$ with $|z|> R> r$ for some $R$, we have
> > $$
> > f(z)=f_{\infty}(z)+\tilde{g}_{\infty}(1/z).
> > $$
> > Clearly, $|\tilde{g}_{\infty}(1/z)|$ is bounded in a neighborhood of infinity. 
> > 
> > Define
> > $$
> > \begin{align}
> > H:=f-f_{\infty}-\sum_{k=1}^{n} f_{k}.
> > \end{align}
> > $$
> > We contend that $H$ is entire and bounded. Indeed, near the poles $z_{k}$ we subtracted the principal part of $f$ so that the function $H$ has a removable singularity there. The summands of $H$ are clearly holomorphic on $\mathbb{C}\setminus \{ z_{1}, \dots, z_{n} \}$, so $H$ is entire. For all $z$ with large modulus, $f(z)-f_{\infty}(z)$ is bounded, and each $f_{k}$ is bounded outside $U_{k}$. Thus, $H$ is bounded, and by [[Cauchy's Theorem and Its Applications#^a603fe|Liouville’s theorem]] we conclude that $H$ is constant. From the definition of $H$, we find that $f$ is the rational function $f_{\infty}+\sum_{k=1}^{n}f_{k}$. Since $\mathbb{C}$ is [[Cauchy's Theorem and Its Applications#^7800a0|algebraically closed]], every rational function is of this from, and is clearly meromorphic. 
> 

Note that as a consequence, a rational function is determined up to a multiplicative constant by prescribing the locations and multiplicities of its zeroes and poles. (??)

# The argument principle and applications

The argument principle provides a way to transform order data to residue data.

> [!Theorem] Argument principle, @steinComplexAnalysis2003 3.4.1
> Suppose $f$ is meromorphic in an open set containing a circle $C$ and its interior. If $f$ has no poles and never vanishes on $C$, then 
> $$
> \begin{align}
> \frac{1}{2\pi i}\int_{C}\frac{f'(z)}{f(z)}\,dz  & = \#(\text{zeroes of }f\text{ inside }C)-\#(\text{poles of }f\text{ inside }C),
> \end{align}
> $$
> where the zeroes and poles are counted with their multiplicities. 

The above theorem holds for toy contours. 

> [!Theorem] Rouchè, @steinComplexAnalysis2003 3.4.3
> Suppose that $f$ and $g$ are holomorphic in an open set containing a circle $C$ and its interior. If 
> $$
> |f(z)|> |g(z)|\quad \forall z\in C,
> $$
> then $f$ and $f+g$ have the same number of zeroes inside $C$. 

^d304b2


> [!Theorem] Open mapping theorem, @steinComplexAnalysis2003 3.4.4
> If $f$ is holomorphic and non-constant in a region $\Omega$, then $f$ is open. 

^7ea52e

See @OpenMappingTheorem2026 
Proof uses [[#^d304b2]]. 

> [!Theorem] Maximum modulus principle, @steinComplexAnalysis2003 3.4.5
> If $f$ is a non-constant holomorphic function in a region $\Omega$, then $|f|$ cannot attain a maximum in $\Omega$.

Proof uses [[#^7ea52e]]. 

> [!Corollary]
> Suppose that $\Omega$ is a region with compact closure $\overline{\Omega}$. If $f$ is holomorphic on $\Omega$ and continuous on $\overline{\Omega}$ then
> $$
> \begin{align}
> \sup_{z\in \Omega}|f(z)|\leqslant \sup_{z\in \overline{\Omega}\setminus \Omega} |f(z)|.
> \end{align}
> $$

^cd86f1

In fact, since $f(z)$ is continuous on the compact set $\overline{\Omega}$, $|f(z)|$ attains its maximum in $\overline{\Omega}$; but this cannot be in $\Omega$ if $f$ is non-constant. If $f$ is constant, the conclusion is trivial. 

# Homotopies and simply connected domains


> [!Proposition]
> If $f$ is holomorphic in $\Omega$, then
> $$
> \begin{align}
> \int_{\gamma_{0}}f(z)\,dz=\int_{\gamma_{1}}f(z)dz
> \end{align}
> $$
> whenever the two curves $\gamma_{0}$ and $\gamma_{1}$ are homotopic in $\Omega$. 

> [!Theorem]
> Any holomorphic function in a simply connected domain has a primitive. 

> [!Corollary]
> If $f$ is holomorphic in the simply connected region $\Omega,$ then
> $$
> \int_{\gamma}f(z)\,dz=0
> $$
> for any closed curve $\gamma$ in $\Omega$. 


# The complex logarithm

> [!Theorem]
> Suppose that $\Omega$ is simply connected with $1\in \Omega$ and $0\not\in \Omega$. Then in $\Omega$ there exists a holomorphic function $F(z)=\log_{\Omega}(z)$, called a branch of the logarithm, so that
> 1. $F$ is holomorphic in $\Omega$;
> 2. $e^{ F(z) }=z$ for all $z\in \Omega$;
> 3. $F(z)=\log r$ whenever $r$ is a real number near $1$. 
> 
> > [!Proof]-
> > 
> > We construct $F$ as a primitive of the function $1/z$. Since $0\not\in \Omega$, the function $f(z)=1/z$ is holomorphic in $\Omega$. We define
> > $$
> > \log_{\Omega}(z)=F(z)=\int_{\gamma}f(w)\,dw,
> > $$
> > where $\gamma$ is any curve in $\Omega$ connecting $1$ and $z$. Since $\Omega$ is simply connected, this definition does not depend on the path chosen. Arguing as before, we find that $F$ is holomorphic on $\Omega$ and $F'(z)=1/z$. 
> 

In the slit plane $\Omega=\mathbb{C}\setminus \{ (-\infty, 0] \}$, we have the **principal branch** of the logarithm
$$
\log z=\log r+i\theta
$$
where $z=r e^{ i\theta }$ with $|\theta|< \pi$. To prove this, integrate along the path that follows the $x$ axis till $x=r$ followed by an arc. 

For the principal branch of the logarithm the following Taylor expression holds:
$$
\log(1+z)=z-\frac{z^{2}}{2}+\frac{z^{3}}{3}-\dots\quad \quad (|z|< 1)
$$
Indeed, the derivative of both sides equals $1/(1+z)$, so they must differ by a constant; they are both equal to $0$ at $z=0$. 

Note that $\log(z_{1}z_{2})\ne \log z_{1}+\log z_{2}$ in general. 

> [!Theorem]
> If $f$ is a nowhere vanishing holomorphic function in a simply connected region $\Omega$, then there exists a holomorphic function $g$ on $\Omega$ such that
> $$
> f(z)=e^{ g(z) }.
> $$
> 
> > [!Proof]-
> > 
> > Fix a point $z_{0}\in \Omega$ and define a function
> > $$
> > g(z)=\int_{\gamma}\frac{f'(w)}{f(w)}\, dw+c_{0},
> > $$
> > where $\gamma$ is any path in $\Omega$ connecting $z_{0}$ to $z$ and $c_{0}$ is a complex number so that $e^{ c_{0} }=f(z_{0})$. Arguing as before, we find that $g$ is holomorphic with
> > $$
> > g'(z)=\frac{f'(z)}{f(z)},
> > $$
> > and a simple calculation gives
> > $$
> > \frac{d}{dz}(f(z)e^{ -g(z) })=0,
> > $$
> > so that $f(z)e^{ -g(z) }$ is a constant. Evaluating this expression at $z_{0}$, we find $f(z_{0})e^{ -c_{0} }=1$, so that $f(z)=e^{ g(z) }$ for all $z\in \Omega$. 
> 

# Fourier series and harmonic functions

Suppose that $f$ is holomorphic in a disc $D_{R}(z_{0})$, so that $f$ has a power series expansion
$$
f(z)=\sum_{n=0}^{\infty} a_{n}(z-z_{0})^{n}
$$
that converges in that disc. 

> [!Theorem]
> The coefficients of the power series expansion of $f$ are given by
> $$
> a_{n}=\frac{1}{2\pi r^{n}}\int_{0}^{2\pi} f(z_{0}+r e^{i\theta}) \, e^{ -in\theta }d\theta
> $$
> for all $n\geqslant 0$ and $0< r< R$. Moreover, 
> $$
> 0=\frac{1}{2\pi r^{n}}\int_{0}^{2\pi} f(z_{0}+r e^{i\theta}) \, e^{ -in\theta }d\theta
> $$
> whenever $n< 0$. 
> 
> > [!Proof]-
> > 
> > We know that $a_{n}=f^{(n)}(z_{0})/n!$ from [[Cauchy's Theorem and Its Applications#^f3eea8]]; Just plug the parameterization $\zeta=z_{0}+r e^{ i\theta }$ into [[Cauchy's Theorem and Its Applications#^58d2c9]]. 
> 

> [!Corollary]
> If $f$ is holomorphic in a disc $D_{R}(z_{0})$, then
> $$
> f(z_{0})=\frac{1}{2\pi}\int_{0}^{2\pi} f(z_{0}+r e^{ i\theta }) \, d\theta\quad \quad 0< r< R. 
> $$
> 

^ad7a7c

## Harmonic functions

> [!Definition] Harmonic function
> Let $u$ be a real-valued function defined on a disc $D$. We call $u$ **harmonic** if $u$ is twice continuously differentiable and $u_{xx}+u_{yy}=0$. 

> [!Proposition] @steinComplexAnalysis2003 Exr 2.12
> Let $u$ be harmonic on the unit disc $\mathbb{D}$. There exists a holomorphic function $f$ on the unit disc such that $\mathrm{Re}~f=u$. The imaginary part of $f$ is uniquely determined up to an additive (real) constant. 
> 
> > [!Proof]-
> > 
> > Motivated by [[Preliminaries to Complex Analysis#^ca85e1]], define $g(z)=2\frac{ \partial u }{ \partial z }$. Show that $g$ satisfies the Cauchy-Riemann equations. Let a primitive of $g$ be $F$. If the real part of $F$ is $U$, we have
> > $$
> > F'=2\frac{ \partial U }{ \partial z } \implies \frac{ \partial U }{ \partial z } =\frac{ \partial u }{ \partial z } \implies U=u+c,
> > $$
> > where $c\in \mathbb{R}$ is a constant. How define $f=F-c$, which works. 
> > 
> > If $g$ is another holomorphic function satisfying the condition of the problem, then $\mathrm{Re}~(f-g)=\mathrm{Re}~(f)-\mathrm{Re}~(g)=u-u=0$, which is constant, therefore $\text{Im}(f-g)$ is also constant. 

Taking the real parts of both sides in [[#^ad7a7c]], we have

> [!Corollary]
> If $u$ is harmonic in a disc $D_{R}(z_{0})$, then
> $$
> u(z_{0})=\frac{1}{2\pi}\int_{0}^{2\pi} u(z_{0}+r e^{ i\theta }) \, d\theta\quad \quad  0< r< R
> $$
> 

# Winding numbers

> [!Definition]
> For any closed path $\gamma$, we define its **winding number with respect to a point $\alpha$** to be
> $$
> W(\gamma, \alpha)=\frac{1}{2\pi i}\int_{\gamma}\frac{1}{z-\alpha}\,dz,
> $$
> provided the path does not pass through $\alpha$. 

> [!Lemma]
> If $\gamma$ is a closed path, then $W(\gamma, \alpha)$ is an integer. 

> [!Warning]
> Homologous to 0 is not equivalent to homotopic to 0!

> [!Theorem] Cauchy, @langAlgebra2002 4.2.2
> Let $\gamma$ be a closed chain in $U$, homologous to $0$ in $U$. Let $f$ be holomorphic in $U$. Then
> $$
> \int_{\gamma}f=0.
> $$

^b051f8

> [!Theorem] @langAlgebra2002 4.2.4
> Let $U$ be an open set and $\gamma$ a closed chain in $U$ such that $\gamma$ is homologous to $0$ in $U$. Let $z_{1}, \dots, z_{n}$ be a finite number of distinct points of $U$. Let $\gamma_{i}$ ($i=1, \dots, n$) be the boundary of a closed disc $\overline{D}_{i}$ contained in $U$, containing $z_{i}$, and oriented counterclockwise. We assume that $\overline{D}_{i}$ does not intersect $\overline{D}_{j}$ if $i\ne j$. Let $m_{i}=W(\gamma, z_{i})$. Let $U^{*}$ be the set obtained by deleting $z_{1}, \dots, z_{n}$ from $U$. Then $\gamma$ is homologous to $\sum m_{i}\gamma_{i}$ in $U^{*}$. 
> 
> It follows from [[#^b051f8]] that if $f$ is holomorphic on $U^{*}$, then
> $$
> \int_{\gamma}f=\sum_{i=1}^{n} m_{i}\int_{\gamma_{i}}f.
> $$

We can now state a generalization of [[Cauchy's Theorem and Its Applications#^d3c867]]. 

> [!Theorem] Cauchy's Formula, @langAlgebra2002 4.2.5
> Let $\gamma$ be a closed chain in $U$, homologous to $0$ in $U$. Let $f$ be holomorphic on $U$, let $z$ be in $U$ and not on $\gamma$. Then
> $$
> \frac{1}{2\pi i} \int_{\gamma}\frac{f(\zeta)}{\zeta-z}d\zeta=W(\gamma, z)f(z).
> $$

# Laurent expansions

[!Theorem] @langAlgebra2002 5.2.1


I want to calculate the integral of $\frac{1}{z(z-1)}$ over a centered at the origin of radius 2. I first split the fraction: $\frac{1}{z-1}-\frac{1}{z}$. I can then use Cauchy's theorem to integrate over the chain which consists of two tiny circles centered at $0$ and $1$. The terms alternatively vanish, and the one that remains contributes its residue. Since the residues are $1$ and $-1$, the integral must be $0$. 