---
id: "506"
date: 2026-08-06
time: 14:03
tags:
  - LIALG
  - Lecture
---
# Lie algebras of derivations

> [!Definition] Derivation
> Let $\mathfrak{A}$ be a nonassociative $F$-algebra. We denote the space of all *linear maps* (crucially, not algebra homomorphisms!) $\mathfrak{A}\to \mathfrak{A}$ by $\text{End}(\mathfrak{A})$. We say that $\delta\in \text{End}(\mathfrak{A})$ is a **derivation** of $\mathfrak{A}$ if $\delta(ab)=a\delta(b)+\delta(a)b$ for all $a, b\in \mathfrak{A}$. Denote the collection of all derivations of $\mathfrak{A}$ by $\mathrm{Der}(\mathfrak{A})$. 

^09387d

It is easily checked that $\mathrm{Der}(\mathfrak{A})$ is a vector subspace of $\text{End}(\mathfrak{A})$. Moreover, the commutator $[\delta, \delta']$ of two derivations is again a derivation, so $\mathrm{Der}(\mathfrak{A})$ is a subalgebra of $\mathfrak{gl}(\mathfrak{A})$. 

Since a Lie algebra $L$ is an $F$-algebra in the above sense, $\mathrm{Der}(L)$ is defined. Note that derivations are *not* Lie algebra homomorphisms - both of them lie in $\text{End}(L)$, but satisfy different identities. If $\varphi$ is a Lie algebra endomorphism and $\psi$ is a derivation of $L$, there holds
$$
\begin{align}
\varphi([a, b]) & =[\varphi(a), \varphi(b)] \\
\psi([a, b]) & =[a, \psi(b)]+[\psi(a), b].
\end{align}
$$

We now define a particular derivation on $L$. 

> [!Definition] $\text{ad}(x)$
> Let $L$ be an $F$-Lie algebra. If $x\in L$, $y\mapsto[x, y]$ is a *linear* endomorphism of $L$, which we denote $\text{ad}(x)$. By rearranging the Jacobi identity, we see that $\text{ad}(x)$ is in fact a [[#^09387d|derivation]]:
> $$
> [x, [y, z]]=[y, [x, z]]+[[x, y], z].
> $$
> Derivations of this form are called **inner**, all others **outer**. 

^b3afb1

---
# Ideals

> [!Definition] Ideal
> A subspace $I$ of a Lie algebra $L$ is called an **ideal** of $L$ if $x\in L$, $y\in I$ together imply $[xy]\in I$. 


For example, check that $\mathfrak{n}(n, F)$ is an ideal of $\mathfrak{t}(n, F)$. Clearly, all ideals are subalgebras. 

Ideals play the role in Lie algebra theory which is played by normal subgroups in group theory and by two sided ideals in ring theory: they arise as kernels of homomorphisms. 

> [!Definition]
> 1. Define the **center** of a Lie algebra by $Z(L):=\{ z\in L:[xz]=0\forall x\in L \}$; $Z(L)$ is clearly an ideal of $L$. 
> 2. We call a Lie algebra $L$ **abelian** if $Z(L)=L$[^1].


For example, $L=\{ (a_{ij})\in \mathfrak{gl}(n, F):a_{ij}=0\text{ if either }i\ne 1 \text{ or }j=1\}$ is abelian. For $L=\mathfrak{gl}(n, F)$, $Z(L)$ is the set of all $n\times n$ scalar matrices with entries in $F$. 

> [!Definition]
> If $I, J$ are two ideals of a Lie algebra $L$, then the following are also ideals:
> 1.  $I+J:=\{ x+y :x\in I, y\in J\}$.
> 2. $[IJ]=\left\{  \sum[x_{i}, y_{i}]:x_{i}\in I, y_{i}\in J  \right\}$. 
> 
> $[LL]$ is known as the **derived algebra**. 

Clearly, $L$ is abelian iff $[LL]=0$. At the other extreme, $L=[LL]$ for $L=\mathfrak{sl}(n, F)$. 

> [!Definition] Simple Lie algebra
> If $L$ has no ideals except itself and $0$, and if $[LL]\ne 0$[^2], we call $L$ **simple**.

Clearly, $L$ simple implies $Z(L)=0$ and $[LL]=L$. 

> [!Definition] Normalizer and Centralizer
> The **normalizer** of a subalgebra (or just subspace $K$) of $L$ is defined by
> $$
> N_{L}(K)=\{ x\in L :[xK]\subseteq K\}.
> $$
> If $K$ is a subalgebra of $L$, $N_{L}(K)$ is a subalgebra of $L$ by the Jacobi identity. If $K=N_{L}(K)$, we call $K$ **self-normalizing**. 
> 
> The **centralizer** of a subset $X$ of $L$ is
> $$
> C_{L}(X):=\{ x\in L:[xX]=0 \}.
> $$
> Again by the Jacobi identity, $C_{L}(X)$ is a subalgebra of $L$. 

---

# Homomorphisms

> [!Definition] Quotient algebra
> Let $L$ be a Lie algebra and $I\subseteq L$ be an ideal. The **quotient algebra** $L/I$ is just the quotient space as a vector space, with its Lie multiplication defined by
> $$
> [x+I, y+I]:=[xy]+I. 
> $$
> $I$ being an ideal makes this unambiguous. 

Here come the homomorphism theorems of yore:

> [!Proposition]
> 1. If $\phi:L\to L'$ is a homomorphism of Lie algebras, then $L/\ker \phi\cong \mathrm{im}\,\phi$. The universal property of quotient maps holds. 
> 2. If $I, J$ are ideals of $L$, there is a natural isomorphism between $(I+J)/J$ and $I/(I\cap J)$. 
> 3. If $I$ and $J$ are ideals of $L$ such that $I\subseteq J$, then $J/I$ is an ideal of $L/I$ and $(L/I)/(J/I)$ is naturally isomorphic to $L/J$. 

> [!Definition] Representation
> A **representation** of a $F$-Lie algebra $L$ is a homomorphism $\phi :L\to \mathfrak{gl}(V)$, where $V$ is any vector space over $F$. 

> [!Example]
> 
> We've seen the [[#^b3afb1|adjoint]] $\text{ad}(x)$ as a member of $\mathfrak{gl}(L)$ for $x\in L$. We now consider the map $\text{ad}:L\to \mathfrak{gl}(L)$: It is clear that $\text{ad}$ is a linear transformation, and it is easily seen that $\text{ad}$ preserves the Lie bracket, making it a Lie algebra homomorphism. It is called the **adjoint representation** of $L$. 
> 
> Incidentally, note that $\ker \text{ad}=Z(L)$. Thus, if $L$ is simple, then $Z(L)=0$, so $\text{ad}:L\to \mathfrak{gl}(L)$ is a monomorphism: any simple Lie algebra is isomorphic to a linear Lie algebra.  










[^1]: Because in the linear case $[x, y]=0$ means that $x$ and $y$ commute. 

[^2]: This condition is imposed to avoid giving undue prominence to the one dimensional algebra. 
