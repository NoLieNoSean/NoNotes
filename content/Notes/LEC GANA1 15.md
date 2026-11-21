---
id: "613"
date: 2026-10-26
time: 13:02
tags:
  - Lecture
  - GANA1
desc: Corollaries of Riesz, the adjoint operator, unitary maps
P1: true
P2: true
---
# Consequences of the Riesz lemma

> [!Remark]
> Let $H$ be a Hilbert space, and $H^{*}$ be its dual. The [[LEC GANA1 14#^f0b16e|Riesz lemma]] establishes a bijection $y\leftrightarrow\phi_{y}$; it is not linear, but conjugate-linear: $\phi_{\alpha y}=\overline{\alpha}\phi_{y}$. The Banach space $H^{*}$ is actually a Hilbert space if we define
> $$
> \langle \phi_{y}, \phi_{z} \rangle :=\langle z, y \rangle ;
> $$
> that this satisfies the [[LEC ALG1 21#^dd5bbe|requirements]] of an inner product are an easy consequence of the Reisz lemma and the the conjugate linearity of the mapping $y\mapsto \phi_{y}$:
> $$
> \begin{align}
> \langle \alpha \phi_{y_{1}}+\phi_{y_{2}}, \phi_{z} \rangle  & =\langle \phi_{\overline{\alpha}y_{1}+y_{2}}, \phi_{z} \rangle  \\
>  & =\langle z, \overline{\alpha}y_{1}+y_{2} \rangle  \\
>  &  =\alpha \langle z, y_{1} \rangle  +\langle z, y_{2} \rangle  \\
>  &  =\alpha \langle \phi_{y_{1}}, \phi_{z} \rangle +\langle \phi_{y_{2}}, \phi_{z} \rangle .
> \end{align}
> $$
> That this inner product actually gives rise to the norm on $H^{*}$ is a consequence of the fact that $\lVert y \rVert=\lVert \phi_{y} \rVert$. 

> [!Corollary]
> Let $H$ and $K$ be Hilbert spaces. For $T \in B(H,K)$,
> $$
> \lVert T \rVert = \sup_{x \in B_{1}^{H}} \lVert Tx \rVert = \sup_{x \in B_{1}^{H}\\ y \in B_{1}^{K}} \lvert \langle Tx, y\rangle \rvert
> $$
> > [!Proof]-
> > By Riesz's lemma, for any $z \in K$,
> > $$
> > \lVert z \rVert = \lVert \phi_{z} \rVert = \sup_{\lVert y \rVert \leq 1}\lvert \langle z, y\rangle \rvert.
> > $$
> > Take $z = Tx$; as $x$ varies over $B_{1}^{H}$, we see that the two suprema are taken over the same set. 
> 

^29bfb0

> [!Corollary]
> Let $H, K$ be Hilbert spaces, $T\in B(H, K)$. If $\langle Tx, y \rangle = \langle Sx,y \rangle$ for all $x\in H$ and $y\in K$, then $T = S$.
> 
> > [!Proof]-
> > 
> > $\langle Tx, y \rangle= \langle Sx,y \rangle \implies \langle (T-S)x, y \rangle=0$. Apply [[#^29bfb0]]. 
> 

^64a79e

> [!Corollary]
> Let $H$ be a Hilbert space. If $T, S \in B(H)$ and $\langle Tx, x \rangle= \langle Sx, x \rangle$ for all $x\in H$ then $T = S$.
> 
> > [!Proof]-
> > 
> > Define a sesquilinear form on $H$ by $B(x, y)=\langle Tx, y \rangle$. Using the polarization identity from [[LEC GANA1 14#^af3e1a]],
> > $$
> > \langle Tx,y \rangle = \frac{1}{4}\sum_{k=0}^{3}\langle T(x+i^{k}y), x+i^{k}y \rangle = \frac{1}{4}\sum_{k=0}^{3}\langle S(x+i^{k}y), x+i^{k}y \rangle = \langle Sx,y \rangle ;
> > $$
> > we are done by [[#^64a79e]]. 
> 
> This is not true for $\mathbb{R}$-Hilbert spaces. Under the standard inner product,
> $$
> \left\langle 
> \begin{pmatrix}
> 0 &1 \\
> -1 &0
> \end{pmatrix}
> \begin{pmatrix}
> x\\y
> \end{pmatrix},
> \begin{pmatrix}
> x\\y
> \end{pmatrix}
> \right\rangle =0
> \qquad
> \forall
> \begin{pmatrix}
> x \\
> y
> \end{pmatrix}\in \mathbb{R}^{2},
> $$
> but $\begin{pmatrix}0 &1 \\ -1 &0\end{pmatrix}\ne 0$. 

^424bda

# The adjoint operator

> [!Lemma] 
> Let $H$ and $K$ be Hilbert spaces. Let $B: H \times K \to \mathbb{C}$ be a bounded sesquilinear form, i.e., there exists $k< \infty$ such that $\lvert B(x,y)  \rvert \leq k \lVert x \rVert \lVert y \rVert$. Then, there exists *unique* $T \in B(H,K)$ such that $B(x,y)= \langle Tx, y \rangle$. 
> 
> > [!Proof]-
> > 
> > By hypothesis, for fixed $x \in  H$, the map $\alpha_{x}=(y \mapsto \overline{B(x,y)}) \in K^{*}$ is bounded with norm at most $k\lVert x \rVert$. 
> > 
> > Using the [[LEC GANA1 14#^f0b16e|Riesz lemma]], we get unique $T_{x} \in Y$ such that
> > $$
> > (y \mapsto \langle y, T_{x} \rangle ) = \alpha_{x}.
> > $$
> > This gives us a map $T:H\to K$, $x \mapsto T_{x}$. Since $B$ is sesquilinear, $H$ is linear. $\lVert T_{x} \rVert=\lVert \alpha_{x} \rVert\leqslant k\lVert x \rVert$, so $T$ is bounded. 
> 

^df127d

> [!Proposition] Existence of adjoint
> Let $H, K$ be Hilbert spaces. For $T\in B(H, K)$, there exists unique $T^{*}\in B(K, H)$ such that
> $$
> \begin{align}
> \langle Tx,y \rangle = \langle x,T^{*}y \rangle  &  &  \forall x \in H, \forall y \in K
> \end{align}
> $$
> We call $T^{*}$ the **adjoint** of $T$. 
> 
> > [!Proof]-
> > 
> > Consider $B:K \times H \to \mathbb{C}$ defined by $B(y,x)= \langle y, Tx \rangle$ and apply [[#^df127d]]; there exists unique $T^{*}\in B(K, H)$ such that
> > $$
> > \begin{align}
> >   &  \langle y, Tx \rangle =\langle T^{*}y, x \rangle \\
> >   \implies  & \langle Tx, y \rangle =\langle x, T^{*}y \rangle .
> > \end{align}
> > $$
> > 
> 

> [!Proposition] Properties of the adjoint
> 1. $(\alpha T + S)^{*}= \overline{\alpha}T^{*}+S^{*}$.
> 2. $(ST)^{*}= T^{*}S^{*}$.
> 3. $\lVert T^{*} \rVert=\lVert T \rVert$.
> 4. $\lVert T^{*}T \rVert= \lVert T \rVert^{2}$. This is called the $C^{*}$-identity. 
> 5. $(T^{*})^{*}=T$.
> 6. $\ker(T^{*})=\text{Ran}(T)^{\perp}$. 
> 7. $\ker(T^{*})^{\perp}=\overline{\text{Ran}(T)}$, $\ker(T)=\text{Ran}(T^{*})^{\perp}$, $\ker(T)^{\perp}=\overline{\text{Ran}(T^{*})}$. 
> 
> > [!Proof]-
> > 
> > (1) 
> > $$
> > \begin{align}\langle (\alpha T + S) x, y \rangle &= \alpha \langle Tx, y \rangle + \langle Sx, y \rangle \\&= \alpha \langle x,T^{*}y \rangle + \langle x ,S^{*}y \rangle \\&= \langle x, \overline{\alpha }T^{*}x \rangle+\langle x, S^{*}y \rangle \\&= \langle x, (\overline{\alpha}T^{*}+S^{*})y \rangle.\end{align}
> > $$
> > By the uniqueness of the adjoint, $(\alpha T + S)^{*}= \overline{\alpha}T^{*}+S^{*}$. 
> > 
> > (2) $\langle STx, y \rangle = \langle Tx,S^{*}y \rangle = \langle x, T^{*}S^{*}y \rangle$.
> > 
> > (3) Using [[#^29bfb0]], $\lVert T \rVert= \sup_{\lVert x \rVert, \lVert y \rVert\leq 1}\lvert \langle Tx,y \rangle \rvert=\sup_{\lVert x \rVert,\lVert y \rVert\leq 1}\lvert \langle x,T^{*}y \rangle \rvert= \lVert T^{*} \rVert$. 
> > 
> > (4) $\lVert T^{*}T \rVert\leq \lVert T^{*} \rVert\lVert T \rVert=\lVert T \rVert^{2}$. On the other hand, $\lVert Tx \rVert^{2}=\langle Tx, Tx \rangle= \langle T^{*}Tx, x \rangle\leq \lVert T^{*}Tx \rVert\lVert x \rVert\leq \lVert T^{*}T \rVert\lVert x \rVert^{2}$, so $\lVert T \rVert\leqslant \sqrt{\lVert T^{*}T \rVert}$. 
> > 
> > (5) 
> > $$
> > \begin{align}\langle Tx,y \rangle &= \langle x, T^{*}y \rangle \\&= \overline{\langle T^{*}y,x \rangle } \\&= \overline{\langle y, (T^{*})^{*}x \rangle } \\&= \langle (T^{*})^{*}x, y \rangle. \end{align}
> > $$
> > By [[#^64a79e]], $T=(T^{*})^{*}$. 
> > 
> > (6) $y\in \ker T^{*}$ iff $\langle Tx, y \rangle=\langle x, T^{*}y \rangle=\langle x, 0 \rangle=0$ for all $x\in H$. 
> > 
> > (7) follows form (6) by taking orthogonal complements ([[LEC GANA1 14#^89a352]]) and plugging $T^{*}$ in place of $T$. 
> 

^b25edd

> [!Definition] Self-adjoint
> $T\in B(H, K)$ is called **self-adjoint** if $T = T^{*}$.

> [!Proposition]
> 1. For a Hilbert space $H$ and $T\in B(H)$, $T$ is self-adjoint iff $\langle Tx, x \rangle= \langle x, T^{*}x \rangle \in \mathbb{R}$ for all $x\in H$. 
> 2. For all $T\in B(H)$, there exist unique self-adjoint $T_{1}, T_{2}\in B(H)$ such that $T=T_{1}+iT_{2}$. 
> 
> > [!Proof]-
> > 
> > (1) $\langle Tx, x \rangle \in \mathbb{R}\iff \langle Tx,x \rangle= \overline{\langle Tx,x \rangle}=\langle x, Tx \rangle= \langle T^{*}x, x \rangle \iff T = T^{*}$.
> > 
> > (2) Define $\text{Re}(T):=\frac{T+T^{*}}{2}$, $\text{Im}(T)=\frac{T-T^{*}}{2i}$. The desired decomposition is $T=\text{Re}(T)+i\text{Im}(T)$. If $T=T_{1}+iT_{2}$ were another such decomposition, we have $T^{*}=T_{1}^{*}-iT_{2}^{*}=T_{1}-iT_{2}$. On adding the two equations, we obtain $T_{1}=\text{Re}(T)$. 
> 

> [!Definition] 
> 1. A self adjoint operator $T\in B(H)$ is said to be positive if $\langle Tx, x \rangle\geq 0$ for all $x\in H$.
> 2. For self adjoint operators $S$ and $T$, we say $S\leq T$ if $T-S$ is positive.

> [!Proposition]
> Suppose $S, T\in B(H)$ are self-adjoint. 
> 1. If $S\leqslant T$, then $ASA^{*}\leqslant ATA^{*}$ for all $A\in B(H)$. 
> 2. If $0\leqslant S\leqslant T$, then $\lVert S \rVert\leqslant \lVert T \rVert$. 
> 
> > [!Proof]-
> > 
> > (1) $ATA^{*}-ASA^{*}= A(T-S)A^{*}$; $\langle A(T-S)A^{*}x, x \rangle=\langle (T-S)A^{*}x, A^{*}x \rangle\geqslant 0$ as $T-S\geqslant 0$.
> > 
> > (2) For all $z\in H$, 
> > $$
> > 0\leq \langle Sz, z \rangle \leq \langle Tz, z \rangle \leq \lVert Tz \rVert \lVert z \rVert \leq \lVert T \rVert \lVert z \rVert ^{2}.
> > $$
> > Let $x,y \in H$ be such that $\lVert x \rVert,\lVert y \rVert\leq 1$. Choose $\alpha \in \mathbb{C}$ such that $\lvert \alpha  \rvert=1$ and $\langle Sx, \alpha y \rangle\geq 0$.
> > 
> > Using the [[LEC GANA1 14#^af3e1a|polarization identity]] on the sesquilinear form $B(x, y)=\langle Sx, y \rangle$, we get
> > $$
> > 4\langle Sx, \alpha y \rangle = \sum_{k=0}^{3}i^{k}\langle S(x + i^{k}\alpha y), x + i^{k}\alpha y \rangle .
> > $$
> > The terms corresponding to $k=0, 2$ on the RHS are real, and those corresponding to $k=1,3$ are imaginary. Because the LHS is real, the latter must be zero. 
> > $$
> > \begin{align} 
> >  \implies 4\langle Sx, \alpha y \rangle&=\langle S(x + \alpha y), x + \alpha y \rangle- \langle S(x-\alpha y), x - \alpha y \rangle \\& \leq \langle S(x + \alpha y), x + \alpha y \rangle \\& \leq \langle T(x+\alpha y), x + \alpha y \rangle  \\& \leq \lVert T \rVert \lVert x+\alpha y \rVert ^{2} \\& \leq 4 \lVert T \rVert .
> > \end{align}
> > $$
> > Note that $\lvert \langle Sx, \alpha y \rangle \rvert= \lvert \alpha \rvert \lvert \langle Sx, y \rangle \rvert=\lvert \langle Sx, y \rangle \rvert$. We therefore have $\lvert \langle Sx,y \rangle \rvert\leq \lVert T \rVert$ for all $x, y\in H$ with $\lVert x \rVert,\lVert y \rVert\leq 1$. By [[#^29bfb0]],  $\lVert S \rVert\leq \lVert T \rVert$.
> 

> [!Proposition]
> Suppose $T \in B(H, K)$. TFAE:
> 1. $T$ is invertible.
> 2. $T^{*}$ is invertible.
> 3. $T$ and $T^{*}$ are both bounded below.
> 4. $T$ and $T^{*}$ are both injective and $\text{Ran}(T)$ is closed.
> 5. $T$ is one-one and onto.
> 
> > [!Proof]-
> > 
> > 1 ⇔ 5 is just [[LEC GANA1 13#^da1f10]]. 
> > 
> > 1 ⇔ 2: Suppose $TT^{-1}=\mathrm{id}_{K}$, $T^{-1}T=\mathrm{id}_{H}$, $T^{-1}\in B(K, H)$. Then $(T T^{-1})^{*}=(\mathrm{id}_{K})^{*}=\mathrm{id}_{K}=(T^{-1})^{*}T^{*}$. A similar computation starting from $T^{-1}T$ shows that $(T^{*})^{-1}=(T^{-1})^{*}$. 
> > 
> > 1, 2 ⇒ 3 follows from 1 ⇒ 5 and [[LEC GANA1 13#^3c11e9]].1⇒2. 
> > 
> > 3 ⇒ 4: Suppose $Tx_{1}=Tx_{2}$. Then $0=\lVert T(x_{1}-x_{2}) \rVert\geqslant m\lVert x_{1}-x_{2} \rVert\geqslant 0$, so $x_{1}=x_{2}$ and $T$ is injective. Ditto for $T^{*}$. That $T(H)$ is closed follows from [[LEC GANA1 13#^3c11e9]].2⇒1. 
> > 
> > 4 ⇒ 5: By [[#^b25edd]], $(\text{Ran}(T))^{\perp}=\ker T^{*}=\{ 0 \}$, which implies $\text{Ran}(T)$ is dense in $K$. Since $\text{Ran}(T)$ is closed in $K$, $\text{Ran}(T)=K$.
> 

> [!Proposition]
> Let $H_{0}\subseteq H$ be a closed subspace. 
> 1. There exists unique $P_{H_{0}}\in B(H)$ such that $\text{Ran}(P_{H_{0}})=H_{0}$ and $P_{H_{0}}^{2}=P_{H_{0}}=P_{H_{0}}^{*}$. 
> 2. If $P\in B(H)$ such that $P=P^{*}=P^{2}$, then there exists $H_{0}$ such that $P=P_{H_{0}}$. 
> 
> > [!Proof]-
> > 
> > (1) By [[LEC GANA1 14#^55aad1]], we can write $H=H_{0}\oplus H_{0}^{\perp}$. Define $P$ by $(x_{0}+x_{0}^{\perp})\mapsto x_{0}$. Clearly, $P^{2}=P$. Because $\lVert x \rVert^{2}=\lVert x_{0} \rVert^{2}+\lVert x_{0}^{\perp} \rVert^{2}$, we have $\lVert P(x) \rVert^{2}\leqslant \lVert x \rVert^{2}$, so $P$ is bounded. For all $x, y\in H$,
> > $$
> > \begin{align}
> > \langle P^{*}x, y \rangle  & =\langle x, Py \rangle =\langle x_{0}+x_{0}^{\perp}, y_{0} \rangle =\langle x_{0}, y_{0} \rangle =\langle x_{0}, y_{0}+y_{0}^{\perp} \rangle =\langle Px_{0}, y \rangle .
> > \end{align}
> > $$
> > Thus, $P=P^{*}$. 
> > 
> > (2) Let $H_{0}=\text{Ran}(P)$; we need to show that $H_{0}$ is closed. We have 
> > $$
> > \text{Ran}(P)=\ker(I-P).
> > $$
> > Indeed, if $x\in\text{Ran}(P)$, then $x=Py$ for some $y\in H$, so $(I-P)x=Py-P^{2}y=0$. Conversely, if $x\in \ker(I-P)$, then $Px=x$, so $x\in\text{Ran}(P)$. Since $P$ is bounded, $I-P$ is bounded and therefore continuous. Thus, $H_{0}$ is closed, and we have $H=H_{0}\oplus H_{0}^{\perp}$.
> > 
> > If $x\in H_{0}$, $x=Py$ and $Px=PPy=Py=x$. Because $H_{0}^{\perp}=\text{Ran}(P)^{\perp}=\ker(P^{*})=\ker(P)$, $P(H_{0}^{\perp})=0$. Thus, $P=P_{H_{0}}$. 
> 

> [!Exercise]
> Show that if $\lVert P_{H_{0}} x\rVert=\lVert x \rVert$, then $x\in H_{0}$. 


---

# Isometries and Unitaries

If the arbitrary cardinality sets $I$ bother you, just assume $H$ is separable throughout. 

> [!Proposition] Isometries, @sunderFunctionalAnalysisSpectral1997 Prop. 2.4.11
> Let $H, K$ be Hilbert spaces. Let $U\in L(H, K)$. TFAE:
> 1. If $\{ e_{i}:i\in I \}$ is any orthonormal set in $H$, then $\{ Ue_{i}:i\in I \}$ is an orthonormal set in $K$. 
> 2. There exists an orthonormal basis $\{ e_{i}:i\in I \}$ for $H$ such that $\{ Ue_{i}:i\in I \}$ is an orthonormal set in $K$. 
> 3. $\langle Ux, Uy \rangle=\langle x, y \rangle$ for all $x, y\in H$.
> 4. $\lVert Ux \rVert=\lVert x \rVert$ for all $x\in H$. 
> 5. $U^{*}U=\mathrm{id}_{H}$. 
> 
> $U$ is called an **isometry** if it satisfies any of the above. 
> 
> > [!Proof]-
> > 
> > (1) ⇒ (2): [[LEC GANA1 14B#^36efa1|There exists]] an orthonormal basis for $H$. 
> > 
> > (2) ⇒ (3): If $x, y\in H$ and $\{ e_{i}:i\in I \}$ is as in (2), then[^1]
> > $$
> > \begin{align}
> > \langle Ux, Uy \rangle  & =\left< U\left( \sum_{i\in I} \langle x, e_{i} \rangle e_{i}\right), U\left( \sum_{j\in I}\langle y, e_{j} \rangle e_{j} \right) \right>  \\
> >  & = \sum_{i, j}\langle x, e_{i} \rangle \langle y, e_{j} \rangle \langle Ue_{i}, Ue_{j} \rangle  \\
> >  & =\sum_{i\in I}\langle x, e_{i} \rangle \langle y, e_{i} \rangle  \\
> >  & =\langle x, y \rangle .
> > \end{align}
> > $$
> > 
> > (3) ⇒ (4): Put $y=x$. 
> > 
> > (4) ⇒ (5): For $x\in H$, 
> > $$
> > \langle U^{*}Ux, x \rangle =\langle Ux, Ux \rangle =\langle \mathrm{id}_{H}x, x \rangle .
> > $$
> > By [[#^424bda]], $U^{*}U=\mathrm{id}_{H}$. 
> > 
> > (5) ⇒ (1): If $\{ e_{i}:i\in I \}$ is any orthonormal set in $H$, then
> > $$
> > \langle Ue_{i}, Ue_{j} \rangle =\langle U^{*}Ue_{i}, e_{j} \rangle =\langle e_{i}, e_{j} \rangle =\delta_{ij}.
> > $$
> > 
> 

^823011

[^1]: We're using the continuity of the inner product ([[LEC ANA2 16#^181916]]) here. #td You have to see how this works when $I$ is not countable. 

> [!Proposition] Unitary maps, @sunderFunctionalAnalysisSpectral1997 Prop. 2.4.12
> Let $H, K$ be Hilbert spaces. Let $U\in L(H, K)$ be an [[#^823011|isometry]]. TFAE:
> 1. If $\{ e_{i}:i\in I \}\subseteq H$ is an orthonormal basis for $H$, then $\{ Ue_{i} :i\in I\}$ is an orthonormal basis for $K$. 
> 2. There exists an orthonormal set $\{ e_{i}:i\in I \} \subseteq H$ such that $\{ Ue_{i}:i\in I \}$ is an orthonormal basis for $K$. 
> 3. $UU^{*}=\mathrm{id}_{K}$. 
> 4. $U$ is invertible. 
> 5. $U$ in onto. 
> 
> $U$ is called **unitary** if it satisfies any of the above. 
> 
> > [!Proof]-
> > 
> > (1) ⇒ (2) is clear. 
> > 
> > (2) ⇒ (3): If $\{ e_{i}:i\in I \}$ is as in (2), and if $x\in K$, then
> > $$
> > \begin{align}
> > UU^{*}x & =UU^{*}\left( \sum _{i\in I}\langle x, Ue_{i} \rangle Ue_{i} \right) \\
> >  & = \sum_{i\in I}\langle x, Ue_{i} \rangle UU^{*}Ue_{i} \\
> >  & =\sum_{i\in I}\langle x, Ue_{i} \rangle Ue_{i} \\
> >  & = x.
> > \end{align}
> > $$
> > 
> > (3) ⇒ (4): The hypothesis from (3) and [[#^823011]].5 imply $U^{-1}=U^{*}$. 
> > 
> > (4) ⇒ (5) is clear. 
> > 
> > (5) ⇒ (1) Let $z\in K$. Let $x\in H$ be such that $Ux=z$. Let $\{ e_{i}:i\in I \}$ be an orthonormal basis for $H$. Then, 
> > $$
> > \begin{align}  
> > x & =\sum_{i\in I}\langle x, e_{i} \rangle e_{i} \\
> > \implies z & =\sum_{i\in I}\langle x, e_{i} \rangle Ue_{i},
> > \end{align}
> > $$
> > so $z\in \overline{\text{span}\{ Ue_{i} \}_{i\in I}}$. Thus, $\{ Ue_{i} \}_{i\in I}$ is an orthonormal basis for $K$. 