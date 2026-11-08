---
id: "613"
date: 2026-10-26
time: 13:02
tags:
  - Lecture
  - GANA1
desc: adjoint and unitary operators yada yada
---
# Corolllaries to Riesz lemma
> [!Remark]
> $H$ and $H^{*}$ are anti-isomorphic, i.e , $\langle \phi_{x}, \phi_{y}\rangle_{H^{*}} = \langle y, x\rangle_{H}$ defines an inner product on $H^{*}$.

> [!Definition] Sesquilinear form
> Let $X,Y$ be $\mathbb{C}$ vector spaces. Then $B:X \times Y \to \mathbb{C}$ is said to be sesquilinear form on $X \times Y$ if it satisfies
> 1. $B(x + y, z + w) = B(x,z) + B(x, w)+B(y, z)+B(y,w)$.
> 2. $B(ax, by)= a \overline{b}B(x,y)$.

> [!Result] Polarization identity
> $x,y \in H$ and $B:H \times H \to \mathbb{C}$ is a sesquilinear form, then 
> $$
> 4B(x,y)= \sum_{i=0}^{3}i^{k}B(x+i^{k}y, x+i^{k}y)
> $$

> [!Corollary]
> For $T \in B(H,K)$,
> $$
> \lVert T \rVert = \sup_{\lVert x \rVert =1\\x \in H} \lVert Tx \rVert = \sup_{x \in B_{1}^{H}\\ y \in B_{1}^{K}} \lvert \langle Tx, y\rangle \rvert
> $$
> > [!Proof]-
> > By Riesz representation theorem, for any $z \in K$,
> > $$
> > \lVert z \rVert = \lVert \phi_{z} \rVert = \sup_{\lVert y\leq 1 \rVert }\lvert \langle z, x\rangle \rvert 
> > $$
> > Take $z = Tx$.
> 

^29bfb0

> [!Corollary]
> If $\langle Tx, y \rangle = \langle Sx,y \rangle, \forall x \in  H, \forall y \in  K$ then $T = S$.
> > [!Proof]-
> > $\langle Tx, y \rangle= \langle Sx,y \rangle \implies \langle (T-S)x, y \rangle=0$.
> > Now apply the previous corollary.

> [!Corollary]
> If $T, S \in L(H)$ and $\langle Tx, x \rangle= \langle Sx, x \rangle \, \forall x$ then $T = S$.
> > [!Proof]-
> > By polarization identity,
> > $$
> > \langle Tx,y \rangle = \frac{1}{4}\sum_{k=0}^{3}\langle T(x+i^{k}y), x+i^{k}y \rangle = \frac{1}{4}\sum_{k=0}^{3}\langle S(x+i^{k}y), x+i^{k}y \rangle = \langle Sx,y \rangle 
> > $$
> > Now apply the previous corollary.
> 
> 
> > [!caution]
> > Note that this is not true for $\mathbb{R}$-vector spaces in general. Under the standard inner product,
> > $$
> > \left\langle 
> > \begin{pmatrix}
> > 0 &1 \\
> > -1 &0
> > \end{pmatrix}
> > \begin{pmatrix}
> > x\\y
> > \end{pmatrix},
> > \begin{pmatrix}
> > x\\y
> > \end{pmatrix}
> > \right\rangle =0
> > \qquad
> > \forall
> > \begin{pmatrix}
> > x \\
> > y
> > \end{pmatrix}\in \mathbb{R}^{2}
> > $$
> > But $\begin{pmatrix}0 &1 \\ -1 &0\end{pmatrix}$ is not the zero matrix.

# The adjoint operator
> [!Proposition] 
> Let $H$ and $K$ be Hilbert spaces.
> Let $B: H \times K \to \mathbb{C}$ be a bounded sequilinear form, i.e. $\exists k< \infty$ such that $\lvert B(x,y)  \rvert \leq k \lVert x \rVert \lVert y \rVert$.
> Then $\exists ! T \in L(H,K)$ such that $B(x,y)= \langle Tx, y \rangle$ and $T$ is bounded.
> > [!Proof]-
> > By hypothesis, for fixed $x \in  H$, the map $(y \mapsto \overline{B(x,y)}) \in K^{*}$ with norm atmost $k\lVert x \rVert$. 
> > Using Riesz lemma, we get $!T_{x} \in Y$ such that
> > $$
> > (y \mapsto \langle y, T_{x} \rangle ) = (y \mapsto \overline{B(x,y)})
> > $$
> > This gives us a map $T:H\to K$ given by $x \mapsto T_{x}$ which happens to be linear since $B$ is sesquilinear.
> > And $T$ is unique by the uniqueness assertion in Riesz lemma and it is bounded since $B$ is bounded.

> [!Corollary] Existence of adjoint.
> For $T \in L(H,K), \exists ! T^{*} \in L(H, K)$ such that $T^{*}$ is bounded and
> $$
> \langle Tx,y \rangle = \langle x,T^{*}y \rangle \quad \forall x \in H, \forall y \in K
> $$
> > [!Proof]-
> > Consider $B:H \times K \to \mathbb{C}$ defined by $B(y,x)= \overline{\langle y, Tx \rangle}$ and apply the previous proposition.

> [!Proposition]
> 1. $(\alpha T + S)^{*}= \overline{\alpha}T^{*}+S^{*}$.
> 2. $(ST)^{*}= T^{*}S^{*}$.
> 3. $\lVert T^{*} \rVert=\lVert T \rVert$.
> 4. $\lVert T^{*}T \rVert= \lVert T \rVert^{2}\qquad (C^{*}$-identity).
> 5. $(T^{*})^{*}=T$.
> 
> > [!Proof]-
> > 1. $$
> >    \begin{align}\langle (\alpha T + S) x, y \rangle &= \alpha \langle Tx, y \rangle + \langle Sx, y \rangle \\&= \alpha \langle x,T^{*}y \rangle + \langle x, ,S^{*}y \rangle \\&= \langle x, \overline{\alpha }T^{*}x \rangle+\langle x, S^{*}y \rangle \\&= \langle x, (\overline{\alpha}T^{*}+S^{*})y \rangle\end{align}
> >    $$
> > 2. $$\langle STx, y \rangle = \langle Tx,S^{*}y \rangle = \langle x, T^{*}S^{*}y \rangle$$
> > 3. $\lVert T \rVert= \sup_{\lVert x \rVert, \lVert y \rVert\leq 1}\lvert Tx,y \rvert=\sup_{\lVert x \rVert,\lVert y \rVert\leq 1}\lvert x,T^{*}y \rvert= \lVert T^{*} \rVert$.
> > 4. $\lVert T^{*}T \rVert\leq \lVert T^{*} \rVert\lVert T \rVert=\lVert T \rVert^{2}$.
> >    $\lVert Tx \rVert^{2}=\langle Tx, Tx \rangle= \langle T^{*}Tx, x \rangle\leq \lVert T^{*}Tx \rVert\lVert x \rVert\leq \lVert T^{*}T \rVert\lVert x \rVert^{2} \implies \lVert T \rVert\leq \sqrt{\lVert T^{*}T \rVert}$.
> > 5. $$\begin{align}\langle Tx,y \rangle &= \langle x, T^{*}y \rangle \\&= \overline{\langle T^{*}y,x \rangle } \\&= \overline{\langle y, (T^{*})^{*}x \rangle } \\&= \langle (T^{*})^{*}x, y \rangle \end{align}
> >    $$
> 

> [!Definition]
> $T$ is called self-adjoint if $T = T^{*}$.

> [!Remark]
> 1. $T \in B(H)$, $H$ is over $\mathbb{C}$, then
>    $T$ is self-adjoint iff $\langle Tx, x \rangle= \langle x, T^{*}x \rangle \in \mathbb{R} \,  \forall x$.
> 2. $\forall T \in B(H) \quad \exists ! T_{1},T_{2}$ such that $T_{1}$  and $T_{2}$ are self adjoint and $T= T_{1}+iT_{2}$.
> 
> > [!Proof]-
> > 1. $\langle Tx, x \rangle \in \mathbb{R}\iff \langle Tx,x \rangle= \overline{\langle Tx,x \rangle}=\langle x, Tx \rangle= \langle T^{*}x, x \rangle \iff T = T^{*}$.
> > 2. Take $T_{1}=Re(T)=\frac{{T+T^{*}}}{2}, T_{2}=Im(T)=\frac{{T-T^{*}}}{2i}$.
> >    If $T=T_{1}+iT_{2}$ is another such decomposition, then $T^{*} = T_{1}^{*}-iT_{2}^{*}= T_{1}-iT_{2}$ forces $T_{1}=Re(T)$.

> [!Definition] 
> A self adjoint operator $T$ is said to be positive if $\langle Tx, x \rangle\geq 0 \, \forall x$.
> For self adjoint operators $S$ and $T$, we say $S\leq T$ if $T-S$ is positive.

> [!Proposition]
> 1. $S\leq T\implies ASA^{*}\leq ATA^{*} \quad \forall A \in B(H)$ .
> 2. If $0\leq S\leq T$ then $\lVert S \rVert\leq \lVert T \rVert$.
> 
> > [!Proof]-
> > 1. $ATA^{*}-ASA^{*}= A(T-S)A^{*}$.
> >    Now, if $B\geq 0$ then $\langle ABA^{*}x, x \rangle= \langle BA^{*}x, A^{*}x \rangle\geq 0$ as $B\geq 0$.
> > 2. $\forall z$,  $$0\leq \langle Sz, z \rangle \leq \langle Tz, z \rangle \leq \lVert Tz \rVert \lVert z \rVert \leq \lVert T \rVert \lVert z \rVert ^{2}$$
> >    Let $x,y \in H$ be such that $\lVert x \rVert,\lVert y \rVert\leq 1$. Choose $\alpha \in \mathbb{C}$ such that $\lvert \alpha  \rvert=1$ and $\langle Sx, \alpha y \rangle\geq 0$.
> >    By polarization identity,
> >    $$
> >    4\langle Sx, \alpha y \rangle = \sum_{k=0}^{3}i^{k}\langle S(x + i^{k}\alpha y), x + i^{k}\alpha y \rangle 
> >    $$
> >    Now, for $k=0,2$ the term on the summation is real and for $k=1,3$ they are imaginary. And since the LHS is real, only terms for $k=0,2$ be nonzero. $$\begin{align}\implies 4\langle Sx, \alpha y \rangle&=\langle S(x + \alpha y), x + \alpha y \rangle- \langle S(x-\alpha y, x - \alpha y) \rangle \\& \leq \langle S(x + \alpha y), x + \alpha y \rangle \\& \leq \langle T(x+\alpha y), x + \alpha y \rangle  \\& \leq \lVert T \rVert \lVert x+y \rVert ^{2} \\& \leq 4 \lVert T \rVert 
> >    \end{align}$$
> >    Note that $\lvert \langle Sx, \alpha y \rangle \rvert= \lvert \alpha \rvert \lvert \langle Sx, y \rangle \rvert=\lvert \langle Sx, y \rangle \rvert$.
> >    Hence, $\lvert \langle Sx,y \rangle \rvert\leq \lVert T \rVert \, \forall x, y$ with $\lvert x \rvert, \lvert y \rvert\leq 1$.
> >    Therefore by [[#^29bfb0]],  $\lVert S \rVert\leq \lVert T \rVert$.

[!Proposition]
$T \in B(H, K)$ Then TFAE
1. $T$ is invertible.
2. $T^{*}$ is invertible.
3. $T$ and $T^{*}$ are both bounded below.
4. $T$ and $T^{*}$ are both injective and $T(H)$ is closed.
5. $T$ is one-one and onto.
[!Proof]
$5 \iff 1$ is obvious.
$1 \iff 2$ follows from the fact that $(T T^{-1})^{*}=(T^{-1})^{*}T^{*}$ and $\mathrm{id}^{*}=\mathrm{id}$.
$1 \& 2 \implies 3$ 