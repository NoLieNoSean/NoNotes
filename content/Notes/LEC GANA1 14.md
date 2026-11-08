---
id: "597"
date: 2026-10-20
time: 19:17
tags:
  - Lecture
  - GANA1
desc: Hilbert spaces, the Riesz lemma
P1: true
P2: true
---
# Inner Product spaces
[[LEC ALG1 21#^178340]]

> [!proposition] Cauchy-Schwarz inequality
> Let $H$ be an inner product space. Then for $x, y \in H$
> $$
> \lvert \langle x, y \rangle  \rvert \leq \lVert x \rVert \lVert y \rVert 
> $$
> Further if equality holds then $\{ x,y \}$ is linear dependent.
> > [!Proof]-
> > $$
> > \begin{align}
> > &\lVert x - \alpha y \rVert ^{2}\geq 0 \\
> > \implies & \lVert x \rVert ^{2} + \lvert \alpha \rvert ^{2}\lVert y \rVert ^{2} - 2 Re(\alpha \langle y, x \rangle) \geq 0
> > \end{align}
> > $$
> > Assume $y \ne 0$, then by substituting $\alpha$ by $\langle x,y \rangle$ and $y$ by $\frac{y}{\lVert y \rVert}$ we get
> > $$
> > \begin{align}
> > &\lVert x \rVert ^{2} + \frac{{\lvert \langle x, y \rangle \rvert^{2}}}{\lVert y \rVert^{2} } -  \frac{2 \lvert \langle x, y \rangle \rvert ^{2}}{\lVert y \rVert ^{2}} \geq 0 \\
> > \implies & \lVert x \rVert \lVert y \rVert \geq \lvert \langle x, y\rangle \rvert  \\
> > \end{align}
> > $$
> > If equality holds then $x = \frac{{\langle x, y \rangle}}{\lVert y \rVert}y$.

> [!Corollary] Triangle inequality
> $(\lVert x \rVert+ \lVert y \rVert)^{2}= \lVert x \rVert^{2} + \lVert y \rVert^{2} +2\lVert x \rVert\lVert y \rVert \geq \lVert x \rVert^{2}+\lVert y \rVert^{2} + 2Re(\langle x, y \rangle) = \lVert x+y \rVert^{2}$.


# Hilbert spaces
[[LEC ANA2 16#^c023a5]]
> [!Remarks]
> 1. Polarisation identity
>   $$
>   \sum_{k=0}^{3} \langle x + i^{k}y, x + i^{k}y\rangle = 4 \langle x,y\rangle
>   $$
>   holds true for any **sesquilinear form**.
> 2. In $\mathbb{R}$-Hilbert spaces
>   $$
>   4 \langle x,y \rangle = \lVert x + y \rVert ^{2} - \lVert x-y \rVert ^{2}
>   $$
>   3. $\lVert x+y \rVert ^{2} + \lVert x-y \rVert ^{2} = 2(\lVert x \rVert ^{2} + \lVert x \rVert ^{2})$.
>   4. Pythagoras theorem
>      $\langle x, y \rangle = 0 \implies \lVert x \rVert^{2} + \lVert y \rVert^{2}= \lVert x+y \rVert^{2}$.

^24334e

> [!Assignment] 
> Prove that if [[#^24334e]].3 is true then [[#^24334e]].2 can be used as a definition for an inner product.

> [!Proposition]
> Let $K$ be a closed convex subset of a Hilbert space $H$. Then for $y \in H, \exists x_{0} \in K$ such that $d(y, x_{0})= \inf_{x \in K}d(x,y)= d(y, K)$.
> > [!Proof]-
> > WLOG $y = 0$.
> > Let $r = d(y, K)$ and let $\{ x_{n} \} \subset K$ such that $d(x_{n},y)\downarrow r$ (i.e. $\lVert x_{n} \rVert \downarrow  r$).
> > Enough to show that $\{ x_{n} \}_{n=1}^{\infty}$ is a Cauchy sequence.
> > 
> > Since $K$ is convex, $\frac{{x_{n}+x_{m}}}{2} \in K$.  
> > $$
> > \begin{align}
> > &\lVert x_{n}+x_{m} \rVert ^{2} + \lVert x_{n}-x_{m} \rVert ^{2} = 2(\lVert x_{n} \rVert^{2} + \lVert x_{m} \rVert ^{2} ) \\
> > \implies &4r^{2} + \lVert x_{n}- x_{m} \rVert ^{2} \leq 2(\lVert x_{n} \rVert ^{2} + \lVert x_{m} \rVert ^{2}) \\
> > \implies & \lVert x_{n}- x_{m} \rVert ^{2} \leq 2(\lVert x_{n} \rVert ^{2} + \lVert x_{m} \rVert ^{2}) - 4r^{2}
> > \end{align}
> > $$
> > Therefore, $\lVert x_{n}-x_{m} \rVert \to 0$ as $n, m \to \infty$.

> [!Proposition] 
> Let $H_{0} \subseteq H$ be a closed subspace. Let 
> $$
> H_0^\perp:= \{y : \langle x, y\rangle = 0 \,\, \forall x \in H_0 \}
> $$
> Then $\forall y \in H, \exists !x_{0} \in H_{0} \,\&\, \exists !x_{0}^{\perp}\in H_{0}^{\perp}$ such that $y = x_0 + x_0^\perp$ (i.e. $H = H_0 \oplus H_0^\perp$) and $(H_0{^\perp})^\perp= H_0$.
> > [!Proof]-
> > Let $y \in H$.
> > Using the previous proposition, choose $x_0 \in H_0$ to be a closest element of $H_0$ to $y$.
> > Let $x_0^\perp=y - x_0$.
> > $$
> > \begin{align}
> > \lVert x_0^\perp\rVert = \lVert y - x_0\rVert^2 &\leq \lVert y - x_0 - \epsilon x\rVert^2\quad \forall x \in H_0\\
> > &=\lVert x_0\rVert^2 - 2\epsilon Re(\langle x_0^\perp, x\rangle)+\epsilon^2 \lVert x\rVert^2
> > \end{align}
> > $$
> > $$
> > \begin{align}
> > &\implies Re(\langle x_0^\perp , x \rangle)\leq \frac{\epsilon \lVert x \rVert}{2} \quad \forall x \in H_0 \, \& \, \forall \epsilon >0\\
> > &\implies Re(\langle x_0^\perp, x \rangle) = 0
> > \end{align}
> > $$
> > Since $H_0$ is a $\mathbb{C}$-vector space, we get that $\forall x \in H_{0},  Im(\langle x_{0}^{\perp}, x \rangle) = Re(\langle x_{0}^{\perp}, -ix \rangle) = 0$.
> > Therefore, $\forall x \in H_{0} \, \langle x_{0}^{\perp}, x \rangle = 0 \implies x_{0}^{\perp} \in H_{0}^{\perp}$.
> > 
> > Now suppose $y = x_{0} + x_{0}^{\perp} = x'_{0}+ (x')_{0}^{\perp}$.
> > Then, $x_{0}-x'_{0}=(x')_{0}^{\perp} - x_{0}^{\perp}$.
> > By Pythagoras theorem $\lVert x_{0}- x'_{0} \rVert^{2} + \lVert x_{0}^{\perp}-(x')_{0}^{\perp} \rVert=0$.
> > Therefore, $H = H_{0}\oplus H_{0}^{\perp}$.
> > 
> > Note that $H_{0}\subseteq (H_{0}^{\perp})^{\perp }$.
> > Let $y \in (H_{0}^{\perp})^{\perp }$.
> > $y = x_{0}+ x_{0}^{\perp}$ for $x_{0}\in H_{0} \, \& \, x_{0}^{\perp}\in H_{0}^{\perp}$.
> > Now,
> > $\langle x_{0}^{\perp}, y \rangle= \langle x_{0}^{\perp }, x_{0}\rangle + \langle x_{0}^{\perp}, X_{0}^{\perp}\rangle = 0$ as $y \in (H_{0}^{\perp})^{\perp }$.
> > $\implies \langle x_{0}^{\perp}, x_{0}^{\perp}\rangle = 0 \implies x_{0}^{\perp}=0$.

> [!Corollary]
> For $S \subseteq H$ is a subset, define $S^{\perp}= \{y \in H: \forall s \in S, \langle y, s \rangle = 0\}$. Then $S^{\perp }$ is a closed vector subspace. $(S^{\perp})^{\perp}= \overline{span(S)}$.
> > [!Proof]-
> > Exercise
> > Hint: $S_{1} \subset S_{2} \implies S_{2}^{\perp} \subset S_{1}^{\perp}$.

> [!Proposition] Riesz Lemma
> Let $H$ be a Hilbert space.
> 1. For $y \in H$, define $\phi_{y}(x)= \langle x, y \rangle$ Then $\phi_{y} \in H^{*}$ and $\lVert \phi_{y} \rVert= \lVert  y \rVert$.
> 2. Further $\forall \phi \in H^{*}, \exists !y\in H$ such that $\phi = \phi_{y}$.
> 
> > [!Proof]-
> > $\lvert \phi_{y}(x) \rvert= \lvert \langle x, y \rangle \rvert\leq \lVert x \rVert \lVert y \rVert \qquad \forall x \in H$.
> > Hence $\lVert \phi_{y} \rVert\leq \lVert y \rVert$. Also $\phi_{y}\left( \frac{y}{\lVert y \rVert} \right)= \lVert y \rVert$.
> > So, $\phi_{y} \in H^{*}$. 
> > 
> > Let $\phi \in H^{*}$ be non-zero.
> > Let $y \in (\ker \phi)^{\perp}$ be such that $\phi(y)=1$.
> > Let $x \in H$.
> > $x-\phi(x)y \in \ker(\phi)$.
> > So, $\langle x - \phi(x)y, y \rangle=0 \implies \langle x, y \rangle = \phi(x)\lVert y \rVert^{2}\implies \phi (x) = \langle x, \frac{y}{\lVert y \rVert^{2}}\rangle \implies \phi = \phi_{\left(\frac{y}{\lVert y \rVert^{2}}\right)}$.
> > Finally, $\lVert\phi_{y_{1}}- \phi_{y_{2}}\rVert=\lVert \phi_{y_{1}-y_{2}} \rVert= \lVert y_{1}-y_{2} \rVert$, uniqueness follows.

> [!Exercise] 
> Let $X$ be a Banach space. For nonzero $\phi \in X^{*}$ prove that $X / \ker(\phi) \cong \mathbb{C}$.
> > [!Proof]-
> > Consider $T: {X}/{\ker \phi }\to \mathbb{C}$ as $T(x + \ker \phi)= \phi(x)$.
> > $T$ is a vector space isomorphism because $\phi$ is nonzero hence surjective.
> > For all $m \in  \ker \phi , \lVert T(x+ \ker \phi ) \rVert = \lVert \phi(x-m)\rVert \leq \lVert \phi \rVert \lVert x-m \rVert$.
> > Taking infimum over all $m$ gives $T(x + \ker \phi ) \leq \lVert \phi \rVert \lVert x + \ker \phi  \rVert$.
> > Now since $T$ is a bounded linear operator which is bijective, $T^{-1}$ is also bounded. Hence $T$ is an isomorphism.
