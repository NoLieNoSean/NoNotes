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
> Let $\phi:G\times X\to X$ be a [[ALG2_L7#Group actions|group action]]. For $x\in X$, define the *orbit of $x$* by
> $$
> \theta_{x}\equiv \{ gx\ | \  g\in X \}.
> $$

Note that $\theta_{x}\subset X$, and does not necessarily have a group structure.

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

Note that $\ker \phi=\bigcap_{x\in X}G_{x}$. It follows that $\ker \phi< G$, which is equivalent to $\ker \phi \triangleleft G$ since $\phi$ is a homomorphism.

> [!Example]
> In [[ALG2_L7#Group actions|this]] example, $\theta_{\Pi_{1}}=\theta_{\Pi_{2}}=\theta_{\Pi_{3}}=X$, and $G_{\Pi_{1}}=\{  e, (12)(34), (13)(24), (14)(23),  (1324), (1423), (12), (34) \}$, which is just the union of the inverse images of $(\Pi_{1}, \Pi_{2}, \Pi_{3})$ and $(\Pi_{1}, \Pi_{3}, \Pi_{2})$. Ditto for $G_{\Pi_{2}}$ and $G_{\Pi_{3}}$. The kernel is $\{ e, (12)(34), (13)(24), (14)(23) \}$.

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
3. [[ALG2_L4#Conjugation|Conjugation]]: $\phi(g, x)=gx\equiv g\circ x\circ g^{-1}$. The stabilizer of $x$ under conjugation, also denoted by $Z(x)$, is called the *centralizer* of $x$. It is the set of all $g\in G$ which commute with $x$. Note that the orbit of $x$, $\{ \phi_{g}(x)\ | \ g\in G \}$, is the [[Normalizers and Conjugacy#Conjugacy|conjugacy class]] of $X$. The centralizer of any subset $A\subset G$ is similarly defined. 


$G$ can also act on $G/H$ for some $H<G$: $\phi(g, aH)=gaH$.

> [!Theorem]
> Let $G$ be a group, let $H< G$, let $G$ act by left multiplication on $G/H$. Let $\pi_{H}$ be the permutation representation. Then, 
> 1. $G$ acts transitively on $A$
> 2. the stabilizer of $aH\in G/H$ is $G_{aH}=aHa^{-1}$.
> 3. the kernel of the action is $\bigcap_{x\in G}xH^{-1}x$, and $\ker \pi_{H}$ is the largest normal subgroup of $G$ contained in $H$. 

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
> For (3), we already know that the kernel of a group action is the intersection of all stabilizers, so $\ker \pi_{H}=\bigcap_{x\in G}xHx ^{-1}$. We know that $\ker \pi_{H}\triangleleft G$. Further, if $g\not\in H$, then $g(1H)=gH\ne 1H$, so $g\not\in \ker \pi_{H}$. Thus, $\ker \pi_{H}\leq H$. If now $N$ is a normal subgroup of $G$ contained in $H$. For every $x\in G$, conjugation by $x$ is a automorphism, so $N\leq H$ implies $xNx ^{-1}\leq xHx ^{-1}$. But, $xNx ^{-1}=N$, so we have $N\leq xHx ^{-1}$ for all $x\in G$. This implies
> $$
> N\leq \bigcap_{g\in G}xHx ^{-1}=\ker \pi_{H}.
> $$
> Thus, $\ker \pi_{H}$ is the largest normal subgroup of $G$ contained in $H$.


---
## Centralizer and normalizer

> [!Definition]
> The *centralizer* of $A\subseteq G$ is the set of elements of $G$ which commute with every element of $A$. Denoted by $Z(A)$ or $C_{G}(A)$.

It can easily be shown that $C_{G}(A)< G$ for all $A\subseteq G$. 

> [!Definition]
> The *center* of a group $G$ is defined to be $C_{G}(G)$, the set of all elements in $G$ which commute with every element of $G$. Also denoted by $Z(G)$.

It follows that $Z(G)< G$.

> [!Definition]
> The *normalizer* of $A$ in $G$ is the set of all $g\in G$ that satisfy $gA=Ag$: $N_{G}(A)=\{ g\in G \ | \ gAg^{-1}=A\}$.

It can be shown that $N_{G}(A)< G$ for all $A\subseteq G$.
More details [[Normalizers and Conjugacy|here]].

Note the crucial difference between the centralizer and the normalizer:
$$
\begin{align}
 & C_{G}(A)=\{ g\in G\ | \  gag^{-1}=a~\forall a\in A \}, \\
 & N_{G}(A)=\{ g\in G\ | \  gAg^{-1}=A \}.
\end{align}
$$
It follows that $C_{G}(A)\subseteq N_{G}(A)$, and since $C_{G}(A)$ is a group, we have $C_{G}(A)\leq N_{G}(A)$.

To summarize:

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