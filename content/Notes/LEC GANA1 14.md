---
id: "597"
date: 2026-10-20
time: 19:17
tags:
  - Lecture
  - GANA1
desc: The Riesz lemma
P1: true
P2: true
---



# Inner product spaces preliminaries

See [[LEC ALG1 21#Inner Product Spaces]]. 

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

> [!Remark]
> 1. Polarization identity
> 	$$
> 	  \sum_{k=0}^{3} \langle x + i^{k}y, x + i^{k}y\rangle = 4 \langle x,y\rangle
> 	$$
> 	Holds true for any *sesquilinear form*. For real inner product spaces,
> 	$$
> 	  4 \langle x,y \rangle = \lVert x + y \rVert ^{2} - \lVert x-y \rVert ^{2}
> 	$$
>   2. Parallelogram identity
> 	$$
> 	\lVert x+y \rVert ^{2} + \lVert x-y \rVert ^{2} = 2(\lVert x \rVert ^{2} + \lVert y \rVert ^{2})
> 	$$
> 
>   3. Pythagoras
> 	$$
> 	\langle x, y \rangle = 0 \implies \lVert x \rVert^{2} + \lVert y \rVert^{2}= \lVert x+y \rVert^{2}
> 	$$
> 

^24334e

> [!Exercise] Assignment
> Prove that if [[#^24334e]].2 is true then [[#^24334e]].1 can be used as a definition for an inner product.

# The Riesz lemma

> [!Proposition]
> Let $K$ be a closed convex subset of a Hilbert space $H$. Then for $y\in H$, there exists $x_{0} \in K$ such that $d(y, x_{0})= \inf_{x \in K}d(x,y)= d(y, K)$.
> 
> > [!Proof]-
> > 
> > WLOG, $y = 0$.
> > 
> > Let $r = d(y, K)$ and let $\{ x_{n} \} \subset K$ such that $d(x_{n},y)\downarrow r$ (i.e. $\lVert x_{n} \rVert \downarrow  r$).
> > Enough to show that $\{ x_{n} \}_{n=1}^{\infty}$ is a Cauchy sequence.
> > 
> > Since $K$ is convex, $\frac{{x_{n}+x_{m}}}{2} \in K$, so $\lVert x_{n}+x_{m} \rVert^{2}\geqslant 4r^{2}$. 
> > $$
> > \begin{align}
> > &\lVert x_{n}+x_{m} \rVert ^{2} + \lVert x_{n}-x_{m} \rVert ^{2} = 2(\lVert x_{n} \rVert^{2} + \lVert x_{m} \rVert ^{2} ) \\
> > \implies &4r^{2} + \lVert x_{n}- x_{m} \rVert ^{2} \leq 2(\lVert x_{n} \rVert ^{2} + \lVert x_{m} \rVert ^{2}) \\
> > \implies & \lVert x_{n}- x_{m} \rVert ^{2} \leq 2(\lVert x_{n} \rVert ^{2} + \lVert x_{m} \rVert ^{2}) - 4r^{2}
> > \end{align}
> > $$
> > Therefore, $\lVert x_{n}-x_{m} \rVert \to 0$ as $n, m \to \infty$.
> 

^0df249

> [!Proposition] 
> Let $H_{0} \subseteq H$ be a closed subspace of a Hilbert space. Let 
> $$
> H_0^\perp:= \{y : \langle x, y\rangle = 0 \,\, \forall x \in H_0 \}.
> $$
> Then $H=H_{0}\oplus H_{0}^{\perp}$ and $(H_{0}^{\perp})^{\perp}=H_{0}$. 
> 
> > [!Proof]-
> > 
> > Let $y \in H$. We have to show that there exist unique $x_{0}\in H_{0}$ and $x_{0}^{\perp}\in H_{0}^{\perp}$ such that $y=x_{0}+x_{0}^{\perp}$. 
> > 
> > Using [[#^0df249]], choose $x_0 \in H_0$ to be the closest element of $H_0$ to $y$. Let $x_0^\perp=y - x_0$.
> > $$
> > \begin{align}
> > \lVert x_0^\perp\rVert^{2} &\leq \lVert x_{0}^{\perp} - \epsilon x\rVert^2 &  \forall x \in H_0 , \, \forall \epsilon >0\\
> > &=\lVert x_0^{\perp}\rVert^2 - 2\epsilon \mathrm{Re}(\langle x_0^\perp, x\rangle)+\epsilon^2 \lVert x\rVert^2
> > \end{align}
> > $$
> > 
> > $$
> > \begin{align}
> > &\implies \mathrm{Re}(\langle x_0^\perp , x \rangle)\leq \frac{\epsilon \lVert x \rVert}{2}  &  \forall x \in H_0,   \, \forall \epsilon >0\\
> > &\implies \mathrm{Re}(\langle x_0^\perp, x \rangle) = 0 & \forall x\in H_{0}
> > \end{align}
> > $$
> > Because $H_0$ is a $\mathbb{C}$-vector space and $\langle x_{0}^{\perp}, \_{} \rangle\in H_{0}^{*}$, [[LEC GANA1 12#^93c742]] gives us $\text{Im}(\langle x_{0}^{\perp}, x \rangle)=-\mathrm{Re}(\langle x_{0}^{\perp}, ix \rangle)=0$ for all $x\in H_{0}$. Therefore, we have $\langle x_{0}^{\perp}, x \rangle=0$ for all $x\in H_{0}$, whence $x_{0}^{\perp}\in H_{0}^{\perp}$. 
> > 
> > Now suppose $y = x_{0} + x_{0}^{\perp} = x'_{0}+ x_{0}'^{\perp}$. Then, $x_{0}-x'_{0}=x_{0}'^{\perp} - x_{0}^{\perp}$. By Pythagoras, $\lVert x_{0}- x'_{0} \rVert^{2} + \lVert x_{0}^{\perp}-(x')_{0}^{\perp} \rVert=0$. Therefore, $H = H_{0}\oplus H_{0}^{\perp}$.
> > 
> > To prove $(H_{0}^{\perp})^{\perp}=H_{0}$, start with observing that $H_{0}\subseteq (H_{0}^{\perp})^{\perp }$. So, let $y \in (H_{0}^{\perp})^{\perp }$. Write $y=x_{0}+x_{0}^{\perp}$ for $x_{0}\in H_{0}$ and $x_{0}^{\perp}\in H_{0}^{\perp}$. We have
> > $$
> > \begin{align}
> >  \langle x_{0}^{\perp}, y \rangle  & =0 & \because y\in(H_{0}^{\perp})^{\perp} \\
> >   \langle x_{0}^{\perp}, x_{0} \rangle +\langle x_{0}^{\perp}, x_{0}^{\perp} \rangle  & =0 \\
> >   \langle x_{0}^{\perp}, x_{0}^{\perp} \rangle  & =0,
> > \end{align}
> > $$
> > so $x_{0}^{\perp}=0$ and $y=x_{0}\in H_{0}$. 
> 

^55aad1


> [!Corollary]
> Let $S\subseteq H$ be a subset of a Hilbert space. Define $S^{\perp}:= \{y \in H: \forall s \in S, \langle y, s \rangle = 0\}$. Then $S^{\perp }$ is a closed vector subspace. Furthermore, $(S^{\perp})^{\perp}= \overline{\text{span}(S)}$.
> 
> > [!Proof]-
> > 
> > $S^{\perp}$ is clearly a vector space. Suppose $\{ x_{n} \}\subseteq S^{\perp}$, $x_{n}\to x$. By the [[LEC ANA2 16#^181916|continuity of the inner product]], $\langle x_{n}, s \rangle\to \langle x, s \rangle=0$ for all $s\in S$, so $x\in S^{\perp}$. A similar argument shows that $S^{\perp}=(\overline{\text{span}(S)})^{\perp}$, so the last assertion follows form [[#^55aad1]]. 
> > 
> > %%Hint: $S_{1} \subset S_{2} \implies S_{2}^{\perp} \subset S_{1}^{\perp}$. /> ??? I do not see how one can use this here%%
> 

> [!Proposition] Riesz Lemma
> Let $H$ be a Hilbert space.
> 1. For $y \in H$, define $\phi_{y}(x)= \langle x, y \rangle$. Then $\phi_{y} \in H^{*}$ and $\lVert \phi_{y} \rVert= \lVert  y \rVert$.
> 2. For all $\phi \in H^{*}$, there exists unique $y\in H$ such that $\phi = \phi_{y}$.
> 
> > [!Proof]-
> > 
> > $\lvert \phi_{y}(x) \rvert= \lvert \langle x, y \rangle \rvert\leq \lVert x \rVert \lVert y \rVert$, so $\lVert \phi_{y} \rVert\leq \lVert y \rVert$ and $\phi_{y} \in H^{*}$. We also have $\phi_{y}(y/\lVert y \rVert)= \lVert y \rVert$, so $\lVert \phi_{y} \rVert=\lVert y \rVert$. 
> > 
> > Let $\phi \in H^{*}$ be non-zero. Let $y \in (\ker \phi)^{\perp}$ be such that $\phi(y)=1$. For $x\in H$, $x-\phi(x)y \in \ker(\phi)$.
> > $$
> > \begin{align}
> > \langle x-\phi(x)y, y \rangle  & =0 \\
> > \langle x, y \rangle  & =\phi(x)\lVert y \rVert ^{2} \\
> >   \phi(x) & = \langle x, y/\lVert y \rVert ^{2} \rangle ,
> > \end{align}
> > $$
> > so $\phi=\phi_{y/\lVert y \rVert^{2}}$. Lastly, observe that $\lVert\phi_{y_{1}}- \phi_{y_{2}}\rVert=\lVert \phi_{y_{1}-y_{2}} \rVert= \lVert y_{1}-y_{2} \rVert$; uniqueness follows. 
> 

> [!Exercise] 
> Let $X$ be a Banach space. For nonzero $\phi \in X^{*}$ prove that $X / \ker(\phi) \cong \mathbb{C}$.
> 
> > [!Proof]-
> > 
> > $\ker \phi$ is closed by the continuity of $\phi$. Consider $T: {X}/{\ker \phi }\to \mathbb{C}$,  $T(x + \ker \phi)= \phi(x)$. Clearly, $T$ is a vector space isomorphism. Since $\mathbb{C}$ is a finite dimensional $\mathbb{C}$-vector space, $T$ is immediately an isomorphism of topological vector spaces, too. 
> 