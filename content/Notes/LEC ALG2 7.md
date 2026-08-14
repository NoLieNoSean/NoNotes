---
tags:
  - ALG2
  - Lecture
  - Processed
date: 2025-02-04
time: 9:10
id: "96"
---
# Double cosets

> [!Definition]
> Let $H$ and $K$ be subgroups of $G$. Define
> $$
> HgK=\{ hgk\ | \  h\in H, k\in K \}.
> $$

The double cosets of $H$ and $K$ partition $G$. To see this, define an equivalence relation on $G$ by
$g\sim g'$ if $g'=hgk$ for some $h\in H$ and $k\in K$. It is easy to see that $\sim$ is reflexive and symmetric. If $g\sim g'$ and $g'\sim g''$, then $g=h'g'k'$ and $g'=h''g''k''$, which gives $g=h'h''g''k''k'$. Thus, $\sim$ is transitive. It follows that $\sim$ is an equivalence relation and therefore partitions $G$. 

Remarks:
- If $K$ is normal, then $KgK=gKK=gK$. 
- If $K$ is not normal, then $KgK$ contains a left coset and a right coset, namely $gK$ and $Kg$. 

---
# Group actions

> [!Definition] Group action
> Let $G$ be a group and let $X$ be a set. We say that $G$ acts on $X$ (and call $X$ a **$G$-set**) if we have a map $\phi:G\times X\to X$ ($\phi(g, x)$ is denoted by $gx$), called a **group action**, satisfying
> 1. $1_{G}x=x$ $\forall x\in X$, and
> 2. $g_{1}(g_{2}x)=(g_{1}g_{2})x$ $\forall g_{1}, g_{2}\in G$ and $\forall x\in X$.
> 
> It can be notationally convenient to [[Functions#Currying|curry]] $\phi$, so that it instead maps from $G$ to the set of maps $\{ f:X\to X \}$, with each $g\in G$ being associated with a map $\phi_{g}:X\to X$ satisfying 
> 1. $\phi_{1_{G}}$ is the identity on $X$, and
> 2. $\phi_{g_{1}}\phi_{g_{2}}=\phi_{g_{1}g_{2}}$. 
> 
> 

It is easy to see that $\phi_{g}$ is a bijection for all $g\in G$:
- $gx_{1}=gx_{2}$ $\implies$ $\phi_{g}(x_{1})=\phi_{g}(x_{2})$ $\implies$ $\phi_{g^{-1}}(\phi_{g}(x_{1}))=\phi_{g^{-1}}(\phi_{g}(x_{2}))$ $\implies$ $\phi_{g^{-1}g}(x_{1})=\phi_{g^{-1}g}(x_{2})$ $\implies$ $x_{1}=x_{2}$.
- for all $x\in X$, $g(g^{-1}x)=x$, $i$.$e$, $\phi_{g}(g^{-1}x)=x$.

Thus, the codomain of $\phi$ can be reduced to the symmetric group $\text{Sym}(X)$, the group of all bijections from $X$ to $X$. This along with the defining properties of a group action makes $\phi$ a group homomorphism.

> [!Remark]
> More generally, an **action** of a group $G$ on an object $A$ of a category $\textsf{C}$ is simply a homomorphism 
> $$
> \sigma:G\to \text{Aut}_{\textsf{C}}(A). 
> $$
> We will be exclusively dealing with the case $\textsf{C}=\textsf{Set}$, so $\text{Aut}_{\textsf{C}}(A)=\text{Sym}(A)$.

> [!Remark] @aluffiAlgebraChapter02009 Exercise III.9.3
> What we've defined above is a **left group action**. A **right action** would associate to each pair $(g, x)$ with  and $x\in A$ an element $xg\in A$, such that $(xg_{1})g_{2}=x(g_{1}g_{2})$ for all $x\in X$, and $g_{1}, g_{2}\in G$. This is a different requirement than the one given above. Multiplication on the right in a group gives a prototypical example of a right action. 
> 
> Every right action may be turned into a left action, as follows. If $G=(G, \cdot)$ is a group, define the 'opposite group' $G^{\circ}=(G, \bullet)$ supported on the same set $G$, by prescribing
> $$
> (\forall g, h\in G): g\bullet h:=h\cdot g.
> $$
> It is easy to verify that $G^{\circ}$ is indeed a group. The identity map $G\to G^{\circ}$ is an isomorphism iff $G$ is commutative. However, even if $G$ is not commutative, the map $G\to G^{\circ}$ given by $x\mapsto x ^{-1}$ is an isomorphism, so $G\cong G^{\circ}$. Now, a right action of $G$ on a set $X$ is a map $\varphi:G\to S_{X}$ such that $\varphi_{a}\circ\varphi_{b}=\varphi_{b\cdot a}$. However, since $\varphi_{b\cdot a}=\varphi_{a\bullet b}$, $\varphi$ is a homomorphism $G^{\circ}\to S_{X}$. ==Thus, giving a right action of $G$ on a set $X$ is the same as giving a left action of $G^{\circ}$ on $X$==. We therefore do not lose anything by restricting our study to left actions[^1]. 

^bee0cf



> [!Example]
> Let $G=S_{4}$ and $X=\{ \Pi_{1}, \Pi_{2}, \Pi_{3} \}$, the latter as defined in [[LEC ALG2 3#^6cf5fb]]. Let $\phi:G\times X\to X$ be defined by
> $$
> \left(\tau, \underset{=\{ a, b \}\cup \{ c, d \}}{\Pi_{i}}\right)\mapsto \tau\Pi_{i}\equiv \{ \tau(a), \tau(b) \}\cup \{ \tau(c), \tau(d) \}.
> $$
> $\phi$ satisfies the properties of a group action. Note that the curried version of $\phi$ is not injective here, as $|\ker \phi|=4$.

^ec904d

> [!Theorem] Cayley's theorem
> Any group $G$ of order $n$ is isomorphic to a subgroup of $S_{n}$.
> 
> > [!Proof]-
> > Let $G$ act on itself by left multiplication. That is, define $\phi:G\to(G\to G)$ by $\phi(g)=\phi_{g}$, $\phi_{g}(g')=gg'$. Note that $\phi_{1_{G}}$ is the identity on $G$, and $\phi_{g_{1}}\phi_{g_{2}}(g)=g_{1}g_{2}g=\phi_{g_{1}g_{2}}(g)$. Thus, $\phi$ is a group action. If $\phi_{g_{1}}=\phi_{g_{2}}$, then $g_{1}g=g_{2}g$ for all $g\in G$, which implies $g_{1}=g_{2}$, making $\phi$ injective. Note $\phi$ being a homomorphism makes $\mathrm{Im}~\phi$ is a subgroup of $\text{Sym}(G)$. So, $\phi':G\to \mathrm{Im}~\phi$ defined by $\phi'(g)=\phi(g)$ is a bijective homomorphism, or an isomorphism. Thus, $G\cong \mathrm{Im}~\phi<\text{Sym(G)}\cong S_{n}$. 
> 

^3ca8d2

[^1]: the defining map $G\to S_{X}$ is a homomorphism for left group actions, unlike for right group actions, as seen here. The only reason for this is the manner in which we define function composition: $f\circ g$ is 'first $g$ then $f$'. 


> [!Definition] Equivariant maps
> Suppose $S_{1}$ and $S_{2}$ are right $G$-sets. A map $\varphi:S_{1}\to S_{2}$ is said to be **$G$-equivariant** if for each $g\in G$, the operations of applying $\varphi$ and action of the right by $g$ commute: that is, 
> $$
> \begin{align}
> \varphi(s\cdot g)=\varphi(s)\cdot g &  & \forall s\in S_{1}, \forall g\in G .
> \end{align}
> $$
> A $G$-equivariant bijection $\varphi:S_{1}\to S_{2}$ is called a **$G$-isomorphism**. 

^846bb7
