---
id: "443"
date: 2026-03-30
time: 14:28
tags:
  - CANA
---



> [!Definition] Conformal map
> Let $U, V\subseteq \mathbb{C}$ be open. A bijective holomorphic function $f:U\to V$ is called a **conformal map** or **biholomorphism**. Given such $f$, we say that $U$ and $V$ are **conformally equivalent**. 

> [!Proposition] @steinComplexAnalysis2003 Prp 8.1.1
> If $f:U\to V$ is holomorphic and injective, then $f'(z)\ne 0$ for all $z\in U$. In particular, the inverse of $f$ defined on its range is holomorphic, and this the inverse of a conformal map is also holomorphic. 
> 
> > [!Proof]-
> > 
> > We argue by contradiction. Suppose that $f'(z_{0})=0$ for some $z_{0}\in U$. Then, by [[Cauchy's Theorem and Its Applications#^f3eea8]], there is a neighborhood $W$ of $z_{0}$ such that for all $z\in W$, 
> > $$
> > f(z)-f(z_{0})=a(z-z_{0})^{k}+G(z)
> > $$
> > with $a\ne 0$, $k\geqslant 2$, and $G$ vanishing to order $k+1$ at $z_{0}$. For sufficiently small $w$, we write
> > $$
> > f(z)-f(z_{0})-w=F(z)+G(z),
> > $$
> > where $F(z)=a(z-z_{0})^{k}-w$. Note that $|G(z)|< |F(z)|$ on a small circle centered at $z_{0}$, and $F$ has at least two zeroes inside that circle. By [[Meromorphic functions and the Logarithm#^d304b2|Rouché's theorem]], $f(z)-f(z_{0})-w$ has at least two zeroes there. Since $f'(z)\ne 0$ for all $z\ne z_{0}$ sufficiently close to $z_{0}$ it follows that the roots of $f(z)-f(z_{0})-w$ are distinct, hence $f$ is not injective, a contradiction. 
> 

> [!Remark]
> There is another notion of 'conformal map', which requires a holomorphic map $f:U\to V$ to satisfy $f'(z)\ne 0$ for all $z\in U$. A holomorphic map that satisfies this condition preserves angles. 


> [!Theorem]
> Let
> $$
> F(z)=\frac{i-z}{i+z}, \quad \text{and}\quad G(w)=i\frac{1-w}{1+w}.
> $$
> $F:\mathbb{H}\to \mathbb{D}$ is a conformal map with inverse $G$. 

^c5b41a

<iframe src="https://www.desmos.com/calculator/5t8ightdgh" width="100%" height= "500px"></iframe>

Algorithm to show a pair of maps $F, G$ are conformal:
1. Show that they are holomorphic in their respective domains. 
2. show that their ranges are correct.
3. show that they are inverses of each other.

> [!Examples]
> 1. Translations and dilations of $\mathbb{C}$.
> 2. $z\mapsto z^{n}$ maps the appropriate sector to $\mathbb{H}$ 
> 3. $f(z)=(1+z)/(1-z)$ takes the upper half disc to the first quadrant.
> 4. $z\mapsto \log z$ takes $\mathbb{H}$ to a strip of width $\pi$.
> 5. $f(z)=-\frac{1}{2}(z+1/z)$ maps the half disc to $\mathbb{H}$. 
> 6. $f(z)=e^{iz}$ takes half strip to half disc
> 7. $f(z)=\sin z$ 

---

# Automorphisms of the disc

> [!Lemma] Schwarz, @steinComplexAnalysis2003 Lem 8.2.1
> Let $F:\mathbb{D}\to \mathbb{D}$ be holomorphic with $f(0)=0$. Then ^5e27dc
> 1. $|f(z)|\leqslant |z|$ for all $z\in \mathbb{D}$. 
> 2. If for some $z_{0} \ne 0$ we have $|f(z_{0})|=|z_{0}|$, then $f$ is a rotation. 
> 3. $|f'(0)|\leqslant 1$, and if equality holds, then $f$ is a rotation. 

Proof uses [[Meromorphic functions and the Logarithm#^cd86f1]]. 

Define
$$
\psi_{\alpha}=\frac{\alpha-z}{1-\overline{\alpha}z}, \quad  \text{where }\alpha\in \mathbb{C}\text{ and }|\alpha|< 1.
$$
$\psi_{\alpha}$ is an automorphism of $\mathbb{D}$ with these properties:
1. $\psi$ is of order $2$, i.e., $\psi_{\alpha}^{-1}=\psi_{\alpha}$. 
2. $\psi_{\alpha}(0)=\alpha$ and $\psi_{\alpha}(\alpha)=0$. 

Using the [[#^5e27dc|Schwarz lemma]], we can show that

> [!Theorem] @steinComplexAnalysis2003 Thm 8.2.2
> If $f$ is an automorphism of $\mathbb{D}$, then there exist $\theta\in \mathbb{R}$ and $\alpha\in \mathbb{D}$ such that
> $$
> f(z)=e^{ i\theta }\frac{\alpha-z}{1-\overline{\alpha}z}.
> $$
> 

^bb3254

I feel these automorphisms are easier to visualize in the form
$$
f(z)=\frac{\alpha+ze^{ i\theta }}{1+\overline{\alpha}ze^{ i\theta }},
$$
which can be obtained from the version in [[#^bb3254]] by substituting $\alpha e^{ -i\theta }$ in place of $\alpha$ and $ze^{ i\pi }=-z$ in place of $z$. Now, $(\alpha, \theta)=(0, 0)$ corresponds to the identity, varying $\alpha$ has the effect of 'translating' the disk, and varying $\theta$ has the effect of 'rotating' the disk about $\alpha$ - similar to affine transformations of the plane. 

<iframe src="https://www.desmos.com/calculator/ckrbb2zxgi" width="100%" height= "500px"></iframe>

Setting $\alpha=0$ yields the following corollary:

> [!Corollary]
> The only automorphisms of the unit disc that fix the origin are the rotations. 

---

# Automorphisms of the Upper Half Plane

Let $F:\mathbb{H}\to \mathbb{D}$ be as defined in [[#^c5b41a]]. Let $\Gamma:\text{Aut}(\mathbb{D})\to \text{Aut}(\mathbb{H})$ be the map given by conjugating by $F$:
$$
\Gamma(\varphi)=F^{-1}\circ\varphi \circ F.
$$
Clearly, $\Gamma$ is a (group) *isomorphism*, so the groups $\text{Aut}(\mathbb{H})$ and $\text{Aut}(\mathbb{D})$ are the same.

We are still left with the task of describing the elements of $\text{Aut}(\mathbb{H})$ and understanding how they act on $\mathbb{H}$. We can achieve this by pulling back the automorphisms of the disk to the upper half plane via $F$. 

> [!Theorem] @steinComplexAnalysis2003 8.2.4
> Given $M\in PSL_{2}(\mathbb{R})$, define $f_{M}$ by
> $$
> f_{M}(z)=\frac{az+b}{cz+d}.
> $$
> Every $\varphi\in \text{Aut}(\mathbb{H})$ takes the form $f_{M}$ for exactly one $M\in PSL_{2}(\mathbb{R})$. Conversely, every map of this form is an automorphism of $\mathbb{H}$. We therefore have $\text{Aut}(\mathbb{H})\cong PSL_{2}(\mathbb{R})$. 

^eefdde

<iframe src="https://www.desmos.com/calculator/symr77cqs6" width="100%" height= "500px"></iframe>

> [!Note]
> Here's another way to see [[#^eefdde]]. The group of automorphisms of the Riemann sphere, $\hat{\mathbb{C}}$, is $PGL_{2}(\mathbb{C})$ (see, for instance, @AutomorphismsRiemannSphere). You can view $\mathbb{H}$ as an open subset of $\hat{\mathbb{C}}\cong \mathbb{C}\mathbb{P}^{1}$ with boundary $\mathbb{R}\mathbb{P}^{1}$, and try to restrict $PGL_{2}(\mathbb{C})$ to a subgroup which preserves $\mathbb{H}$. Now, to preserve $\mathbb{R}\mathbb{P}^{1}$, a matrix in $PGL_{2}(\mathbb{C})$ must have real coefficients, and to not swap $\mathbb{H}$ with $\mathbb{C}\mathbb{P}^{1}\setminus \overline{\mathbb{H}}$, must have positive determinant. We thus arrive at $PSL_{2}(\mathbb{R})$. 

---

# The Riemann Mapping Theorem

The problem is to determine conditions on an open set $\Omega$ that guarantee the existence of a conformal map $F:\Omega\to \mathbb{D}$. 

There are some clear necessary conditions: 
1. If $\Omega=\mathbb{C}$, there can be no conformal map $F:\Omega\to \mathbb{D}$, since by Lioville's theorem $F$ would have to be constant. Therefore, $\Omega\ne \mathbb{C}$ is a necessary condition. 
2. Since $\mathbb{D}$ is simply connected, we much also impose the requirement that $\Omega$ is simply connected. 

Remarkably, these conditions on $\Omega$ are also sufficient to guarantee the existence of a biholomorphism from $\Omega$ to $\mathbb{D}$. 



> [!Theorem] Riemann
> Suppose $\Omega$ is proper and simply connected. If $z_{0}\in \Omega$, then there exists a unique conformal map $F:\Omega\to \mathbb{D}$ such that
> $$
> F(z_{0})=0 \quad \text{and}\quad F'(z_{0})> 0.
> $$

> [!Definition]
> A family $\mathcal{F}$ of holomorphic functions on $\Omega$ is said to be **normal** if every sequence in $\mathcal{F}$ has a subsequence that converges uniformly on every compact subset of $\Omega$ (the limit need not be in $\mathcal{F}$). 

> [!Theorem]
> Suppose $\mathcal{F}$ is a family of holomorphic functions on $\Omega$ that is uniformly bounded on compact subsets of $\Omega$. Then, 
> 1. $\mathcal{F}$ is uniformly continuous on every compact subset of $\Omega$. 
> 2. $\mathcal{F}$ is a normal family. 

Proving $(1)$ requires the [[Cauchy's Theorem and Its Applications#^d3c867|Cauchy's integral formula]]. 

> [!Proposition]
> If $\Omega$ is a connected open subset of $\mathbb{C}$ and $\{ f_{n} \}$ a sequence of injective holomorphic functions on $\Omega$ that converges uniformly on every compact subset of $\Omega$ to a (holomorphic) function $f$, then $f$ is either injective or constant.

Uses the [[Meromorphic functions and the Logarithm#^86a327|Argument principle]]. 
