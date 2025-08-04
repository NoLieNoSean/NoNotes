---
tags:
  - ALG2
  - Lecture
  - Processed
date: 2025-02-06
time: 9:10
---
## Orbit, stabilizer and kernel

> [!Definition]
> Let $\phi:G\times X\to X$ be a [[LEC ALG2 7#Group actions|group action]]. For $x\in X$, define the *orbit of $x$* by
> $$
> \theta_{x}\equiv \{ gx\ | \  g\in X \}.
> $$

Note that $\theta_{x}\subset X$, and does not have any group structure.

> [!Definition]
> Let $\phi:G\times X\to X$ be a group action. For $x\in X$, define the *stabilizer of $x$* by
> $$
> G_{x}\equiv \{ g\in G\ | \  gx=x \}.
> $$

It is easy to verify that $G_{x}<G$ for all $x\in X$.

> [!Definition]
> The *kernel* of a group action $\phi$ is the set of all elements $g\in G$ for which $\phi_{g}$ is the identity on $S$:
> $$
> \ker \phi=\{ g\in G\ | \  \phi_{g}(s)=s~\forall s\in S \}.
> $$

Note that $\ker \phi=\bigcap_{x\in X}G_{x}\triangleleft G$.

> [!Example]
> In [[LEC ALG2 7#Group actions|this]] example, $\theta_{\Pi_{1}}=\theta_{\Pi_{2}}=\theta_{\Pi_{3}}=X$, and $G_{\Pi_{1}}=\{  e, (12)(34), (13)(24), (14)(23),  (1324), (1423), (12), (34) \}$, which is just the union of the inverse images of $(\Pi_{1}, \Pi_{2}, \Pi_{3})$ and $(\Pi_{1}, \Pi_{3}, \Pi_{2})$. Ditto for $G_{\Pi_{2}}$ and $G_{\Pi_{3}}$. The kernel is $\{ e, (12)(34), (13)(24), (14)(23) \}$.

> [!Example]
> Let $G=GL_{2}(\mathbb{R})$ and $X=\mathbb{R}^{2}$. Let $\phi:G\times X\to X$ be defined by $\phi(M, \mathbf{v})=M\mathbf{v}$, $i$.$e$, $G$ acts on $X$ by left multiplication (verify that this is a group action). 
> 
> For $\mathbf{x}=\begin{bmatrix}0\\0\end{bmatrix}$, $\theta_{\mathbf{x}}=\{ \mathbf{x} \}$, $G_{\mathbf{x}}=G$.
> For $\mathbf{x}=\begin{bmatrix}1\\0\end{bmatrix}$, $\theta_{\mathbf{x}}=\mathbb{R}^{2}-\{ \mathbf{0} \}$, $G_{\mathbf{x}}=\begin{bmatrix}1&*\\0&d\ne {0}\end{bmatrix}$. 

---

## Groups acting on themselves

Let $G$ be a group, and $X=G$. Standard group actions include
1. Left multiplication: $\phi(g, x)=gx\equiv g\circ x$.
2. Right multiplication: $\phi(g, x)=gx\equiv x\circ g^{-1}$.
3. [[LEC ALG2 4#Conjugation|Conjugation]]: $\phi(g, x)=gx\equiv g\circ x\circ g^{-1}$. The stabilizer of $x$ under conjugation, also denoted by $Z(x)$, is called the *centralizer* of $x$. It is the set of all $g\in G$ which commute with $x$. Note that the orbit of $x$, $\{ \phi_{g}(x)\ | \ g\in G \}$, is the [[Normalizers and Conjugacy#Conjugacy|conjugacy class]] of $X$. The centralizer of any subset $A\subset G$ is similarly defined. 


$G$ can also act on $G/H$ for some $H<G$: $\phi_{g}(aH)=(ga)H$.

> [!Theorem]
> Let $G$ be a group, let $H< G$, let $G$ act by left multiplication on $G/H$. Let $\pi_{H}$ be the permutation representation. Then, 
> 1. this action is transitive.
> 2. the stabilizer of $aH\in G/H$ is $G_{aH}=aHa^{-1}$.
> 3. the kernel of the action is $\bigcap_{x\in G}xHx ^{-1}$, and $\ker \pi_{H}$ is the largest normal subgroup of $G$ contained in $H$. 

> **Proof**
> To see (1), observe that for any two cosets $aH, bH\in G/H$, $(ba^{-1})aH=bH$. Thus, any two arbitrary elements of $G/H$ lie in the same orbit.
> 
> For (2), we have
> $$
> \begin{align}
> G_{aH} & =\{ g\in G\ | \ g(aH)=aH \} \\
> 	 & =\{ g\in G\ | \  (ga)H=aH \} \\
> 	 & =\{ g\in G\ | \  a^{-1}ga\in H \} \\
> 	 & =\{ g\in G\ | \  g\in aHa^{-1} \} \\
> 	 & =aHa^{-1} .
> 
> \end{align}
> $$
> 
> For (3), we already know that the kernel of a group action is the intersection of all stabilizers, so $\ker \pi_{H}=\bigcap_{x\in G}xHx ^{-1}$. We know that $\ker \pi_{H}\triangleleft G$. Further, if $g\not\in H$, then $g(1H)=gH\ne 1H$, so $g\not\in \ker \pi_{H}$. Thus, $\ker \pi_{H}\leq H$. Let $N$ be a normal subgroup of $G$ contained in $H$. For every $x\in G$, conjugation by $x$ is an automorphism, so $N\leq H$ implies $xNx ^{-1}\leq xHx ^{-1}$. But $xNx ^{-1}=N$, so we have $N\leq xHx ^{-1}$ for all $x\in G$. This implies
> $$
> N\leq \bigcap_{x\in G}xHx ^{-1}=\ker \pi_{H}.
> $$
> Thus, $\ker \pi_{H}$ is the largest normal subgroup of $G$ contained in $H$.

> [!Theorem] Corollary
> Let $p$ be the smallest prime dividing the order of a group $G$. Then, any subgroup of $G$ of index $p$ is a normal subgroup.

> **Proof**
> Suppose $H\leq G$ and $[G:H]=p$. Let $\pi_{H}$ be the permutation representation of $G$ acting on the set of all left cosets of $H$ in $G$ by left multiplication (just to be clear, $\pi_{H}:G\to S_{G/H}$). Let $K=\ker \pi_{H}$. Then, $K\leq H$ and $K\triangleleft G$. Let $[H:K]=k$. Then, $[G:K]=pk$. 
> 
> From the [[LEC ALG2 4#First isomorphism theorem|first isomorphism theorem]], $G/K\cong \mathrm{Im}~\pi_{H}$. Since $\mathrm{Im}~\pi_{H}\leq S_{G/H}\cong S_{p}$, $|\mathrm{Im}~\pi_{H}|$ divides $p!$. So, $|G/K|=pk$ divides $p!$. Thus $k\ | \ (p-1)!$. But, since $K$ is a subgroup of $G$, $k\ | \ |G|$, and so all prime divisors of $k$ are greater than or equal to $p$, forcing $k$ to be $1$. So, $H=K\triangleleft G$. 

---
## Centralizer and normalizer

> [!Definition]
> The **centralizer** of $A\subseteq G$ is the set of elements of $G$ which commute with every element of $A$. Denoted by $Z(A)$ or $C_{G}(A)$.

It can easily be shown that $C_{G}(A)< G$ for all $A\subseteq G$. 

> [!Definition]
> The **center** of a group $G$ is defined to be $C_{G}(G)$, the set of all elements in $G$ which commute with every element of $G$. Also denoted by $Z(G)$.

It follows that $Z(G)< G$.

> [!Definition]
> The **normalizer** of $A$ in $G$ is the set of all $g\in G$ that satisfy $gA=Ag$: $N_{G}(A)=\{ g\in G \ | \ gAg^{-1}=A\}$.

It can be shown that $N_{G}(A)< G$ for all $A\subseteq G$.

More details [[Normalizers and Conjugacy|here]]. Refer @dummitAbstractAlgebra2004 [p. 50] for examples.

Note the crucial difference between the centralizer and the normalizer:
$$
\begin{align}
 & C_{G}(A)=\{ g\in G\ | \  gag^{-1}=a~\forall a\in A \}, \\
 & N_{G}(A)=\{ g\in G\ | \  gAg^{-1}=A \}.
\end{align}
$$
It follows that $C_{G}(A)\subseteq N_{G}(A)$, and since $C_{G}(A)$ is a group, we have $C_{G}(A)\leq N_{G}(A)$.

In summary, we have:

> [!Important]
> $Z(G)\leq C_{G}(A)\leq N_{G}(A)\leq G$ for all $A\subseteq G$. 

### How these arise naturally from group actions

Let $G$ be a group. Let $\mathcal{P}(G)$ be the power set of $G$. Let $G$ act on $\mathcal{P}(G)$ by conjugation:
$$
A\xmapsto{\phi_{g}}  gAg^{-1}, A\in \mathcal{P}(G), g\in G.
$$
Let $A\subseteq G$. Under this action, the normalizer of $A$ in $G$ is the stabilizer of $A$: $N_{G}(A)=G_{A}$.

Next, let the group $N_{G}(A)$ act on $A$ by conjugation:
$$
a\xmapsto{\psi_{k}}kak^{-1}, a\in A, k\in N_{G}(A).
$$
Under this action, the centralizer of $A$ in $G$ is the kernel: $C_{G}(A)=\ker \psi$. 

Next, let the group $C_{G}(A)$ act on $G$ by conjugation:
$$
g\xmapsto{\chi_{h}}hgh^{-1}, g\in G, h\in C_{G}(A).
$$
Under this action, the center of $G$ is the kernel: $Z(G)=\ker \chi$. So, we have $Z(G)\leq C_{G}(A)\leq N_{G}(A)\leq G$. 

### Some theorems

> [!Theorem]
> If $G/Z(G)$ is cyclic, then $G$ is abelian.

> **Proof**
> Let $G/Z(G)=\langle aZ(G) \rangle$ for some $a\in G$. Then, any $g\in G$ can be expressed as $a^{k}z$ for some integer $k$ and $z\in Z(G)$. Let $g_{1}, g_{2}\in G$, $g_{1}=a^{k_{1}}z_{1}$, $g_{2}=a^{k_{2}}z_{2}$. Then, $g_{1}g_{2}=a^{k_{1}}z_{1}a^{k_{2}}z_{2}=a^{k_{1}+k_{2}}z_{1}z_{2}$, and $g_{2}g_{1}=a^{k_{2}+k_{1}}z_{2}z_{1}=a^{k_{1}+k_{2}}z_{1}z_{2}$. Therefore, $G$ is abelian.

---
## Second isomorphism theorem

> [!Theorem]
> Let $G$ be a group, let $A$ and $B$ be subgroups of $G$ and assume $A\leq N_{G}(B)$. Then,
> 1. $AB\leq G$,
> 2. $B\trianglelefteq AB$,
> 3. $A\cap B\trianglelefteq A$, and
> 4. $AB/B\cong A/A\cap B$.

^e98d1f

> **Proof**
> $(1)$ follows from [[LEC ALG2 6#Direct products|here]]. Since $A\leq N_{G}(B)$ and $B\leq N_{G}(B)$, $AB\leq N_{G}(B)$, so $B\trianglelefteq AB$. This allows us to define the homomorphism
> $$
> \phi:A\to AB/B, a\mapsto aB.
> $$
> It is easy to see that $\phi$ is a homomorphism: $\phi (ab)=abB=(aB)(bB)=\phi(a)\phi(b)$. Clearly, $\ker \phi=A\cap B$. Thus, $A\cap B\trianglelefteq A$. Additionally, since $\phi$ is surjective, the first isomorphism theorem gives $AB/B\cong A/A\cap B$. 


