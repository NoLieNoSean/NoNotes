---
tags:
  - ALG2
  - Lecture
date: 2025-02-11
time: 9:10
---
## Orbit-stabilizer theorem

> [!Theorem]
> Let $G$ be a group. Let $\phi:G\times X\to X$ be a group action. The orbits of $x\in X$ partition $X$.

This was expected, since we saw in the previous lecture that the orbits of elements of $G$ under the conjugation action were conjugacy classes, and we know that the conjugacy classes of $G$ partition $G$.

> [!Theorem] Orbit-stabilizer theorem
> Let $\phi:G\times X\to X$ and $|G|<\infty$. Then, $|G_{x}||\theta_{x}|=|G|$ for all $x\in X$. 

> **Proof**
> Let $x\in X$. We will construct a bijection between $G/G_{x}$ and $\theta_{x}$, where the former is the set of all left cosets of $G_{x}$ in $G$ (may not be a group, since $G_{x}$ is not necessarily normal). Define the map $\phi:G/G_{x}\to\theta_{x}$ by $aG_{x}\mapsto ax$.  $\phi$ is well defined, because $aG_{x}=bG_{x}$ implies $a=bg$ for some $g\in G_{x}$, so $ax=bgx=bx$. $\phi$ is injective, since $\phi(aG_{x})=\phi(bG_{x})$ implies $b ^{-1}ax=x$, which implies $b ^{-1}a\in G_{x}$, which implies $aG_{x}=bG_{x}$. $\phi$ is surjective since $y\in\theta_{x}$ implies $y=ax$ for some $a\in G$, so $aG_{x}\mapsto y$.  

The action of $G$ on $A$ is called *transitive* if there is only one orbit.

---
## The class equation

> [!Definition]
> Two elements $a$ and $b$ of $G$ are said to be *conjugate* in $G$ if there is some $g\in G$ such that $b=gag^{-1}$ (i.e, iff there are in the same orbit of $G$ [[ALG2_L8#Groups acting on themselves|acting on itself by conjugation]]). The orbits of $G$ acting on itself by conjugation are called the *conjugacy classes* of $G$.

Notes:
- If $|G|> 1$ then, unlike the action by left multiplication, $G$ does not act transitively on itself by conjugation because $\{ e \}$ is always a conjugacy class. 
- $\{ a \}$ is a conjugacy class iff $a\in Z(G)$. 

$G$ acting on itself by conjugation can be generalized to $G$ acting on its power set by conjugation: $\phi_{g}(S)=gSg^{-1}$, $S\in \mathcal{P}(G)$, $g\in G$. Note that the action of $G$ acting on itself by conjugation is embedded in this action, since $\phi_{g}(\{ s \})=\{ gsg^{-1} \}$, $s, g\in G$. As expected, we call two subsets $S$ and $T$ of $G$ to be conjugates if they are in the same orbit.

Given $S\in \mathcal{P}(G)$, the orbit stabilizer theorem allows us to compute the size of its conjugacy class to be the index $[G:G_{S}]$ of the stabilizer of $S$. Now, $G_{S}=\{ g\in G \ | \ gSg^{-1}=S\}=N_{G}(S)$. Thus, the size of the conjugacy class of $S$ is $[G:N_{G}(S)]$. 

> [!Theorem] Proposition
> The size of the conjugacy class of a subset $S$ of a group $G$ is the index of the normalizer of $S$ in $G$. In particular, the size of the conjugacy class of $s\in G$ is the index of the centralizer of $s$ in $G$. 

The second statement follows from the fact that $N_{G}(\{ s \})=C_{G}(s)$. 

The fact that the orbits partition the set being acted upon yields the following equation:

> [!Theorem] The class equation
> Let $G$ be a finite group and let $g_{1}, g_{2}, \dots, g_{r}$ be representatives of the distinct conjugacy classes of $G$ not contained in the center $Z(G)$. Then, 
> $$
> |G|=|Z(G)|+\sum_{i=1}^{r} [G:C_{G}(g_{i})].
> $$

Note that all summands on the RHS of the class equation are divisors of $|G|$.

### p-groups

Groups of order $p^{\alpha}$, $\alpha\geq 1$, where $p$ is prime, are called p-groups. 

> [!Theorem]
> If $P$ is a p-group, $Z(P)$ is non-trivial.

> [!Theorem]
> If $|P|=p^{n}$, then $|Z(P)|\ne p^{n-1}$.

> [!Theorem]
> If $|P|=p^{2}$ for some prime $p$, then $P$ is abelian. More precisely, either $P\cong \mathbb{Z}_{p^{2}}$ or $P\cong \mathbb{Z}_{p}\times \mathbb{Z}_{p}$.

---

## Conjugacy in Sn


Let $\sigma, \tau$ be elements of $S_{n}$, and suppose $\sigma$ has cycle decomposition
$$
(a_{1} ~a_{2}~\dots~a_{n})(b_{1} ~b_{2}~\dots~b_{n})\dots.
$$
Then, $\tau\sigma\tau ^{-1}$ has cycle decomposition
$$
(\tau(a_{1}) ~\tau(a_{2})~\dots~\tau(a_{n}))(\tau(b_{1}) ~\tau(b_{2})~\dots~\tau(b_{n}))\dots.
$$

Two elements of $S_{n}$ are conjugate in $S_{n}$ iff they have the same cycle type.


---

## More on Automorphisms

> [!Theorem]
> Let $H\triangleleft G$. Then, $G$ acts by conjugation on $H$ as automorphisms of $H$. The permutation representation of this action is a homomorphism of $G$ into $\text{Aut}(H)$ with kernel $C_{G}(H)$. In particular, $G/C_{G}(H)$ is isomorphic to a subgroup of $\text{Aut}(H)$.

It follows that for any subgroup $H$ of $G$, the quotient group $N_{G}(H)/C_{G}(H)$ is isomorphic to a subgroup of $\text{Aut}(H)$ (take $G=N_{G}(H)$ in the above theorem).
Thus, any information we have about $\text{Aut}(H)$ for $H\leq G$ translates to information about ${N_{G}(H)}/{C_{G}(H)}$. 


> [!Definition]
> Let $G$ be a group and let $g\in G$. Conjugation by $g$ is called an *inner automorphism* of $G$ and the subgroup of $\text{Aut}(G)$ consisting of all inner automorphisms is denoted by $\text{Inn}(G)$.

Note that if $H=G$ in the above theorem, we get that $G/C_{G}(G)=G/Z(G)$ is isomorphic to $\text{Inn}(G)$. 

> [!Theorem] Corollary
> $G/Z(G)\cong\text{Inn}(G)$.

So, a group $G$ is abelian iff every inner automorphism is trivial. 

> [!Theorem] Corollary
> If $H$ is an abelian normal subgroup of $G$ and $H$ is not contained in $Z(G)$, then there is some $g\in G$ such that conjugation by $g$ restricted to $H$ is not an inner automorphism of $H$. 

### Characteristic groups

> [!Definition]
> A subgroup $H$ of a group $G$ is called *characteristic* in $G$, denoted $H\blacktriangleleft B$, if every automorphism of $G$ maps $H$ to itself. 

Note that this definition is stronger than that of a normal subgroup, which only requires every inner automorphism of $G$ to map $H$ to itself.

It should be obvious that characteristic subgroups are normal. Also, if $H$ is the unique subgroup of $G$ of a given order, then $H\blacktriangleleft G$, since every $\sigma\in \text{Aut}(G)$ must map $H$ to another subgroup of $G$ that is isomorphic to $H$, and only one such group exists, namely $H$ itself.

> [!Theorem]
> If $K\blacktriangleleft H$ and $H\triangleleft G$, then $K\triangleleft G$. 

> **Proof**
> Let $g\in G$. Let $\phi_{g}\in \text{Aut}(H)$ be the conjugation $x\mapsto gxg^{-1}$ restricted to $H$. Note that this may not be an inner automorphism of $H$; this is why $K\triangleleft H$ does not suffice. Since $K\blacktriangleleft H$, $\phi_{g}(K)=K$. Thus, $gKg^{-1}=K$ for all $g\in G$, and $K\triangleleft G$. 


---
## Semidirect product

> [!Definition]
> Given any two groups $H$ and $K$ and a group homomorphism $\phi:K\to\text{Aut}(H)$, we can construct a new group $H\rtimes_{\phi}K$, called the *semidirect product* of $H$ and $K$ with respect to $\phi$, defined as follows:
> 1. As a set, $H\rtimes_{\phi}K$ is the same as $H\times K$. 
> 2. $(h_{1}, k_{1})\circ(h_{2}, k_{2})\equiv(h_{1}\phi_{k_{1}}(h_{2}), k_{1}k_{2})$.

