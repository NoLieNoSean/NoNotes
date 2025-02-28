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
> Let $x\in X$. We will construct a bijection between $G/G_{x}$ and $\theta_{x}$, where the former is the set of all left cosets of $G_{x}$ in $G$ (may not be a group, since $G_{x}$ is not necessarily normal). Define the map $\phi:G/G_{x}\to\theta_{x}$ by $aG_{x}\mapsto ax$.  $\phi$ is well defined, because $aG_{x}=bG_{x}$ implies $ax=bgx=bx$ for some $g\in G_{x}$. $\phi$ is injective, since $\phi(aG_{x})=\phi(bG_{x})$ implies $b ^{-1}ax=x$, which implies $b ^{-1}a\in G_{x}$, which implies $aG_{x}=bG_{x}$. $\phi$ is surjective since $y\in\theta_{x}$ implies $y=ax$ for some $a\in G$, so $aG_{x}\mapsto y$.  

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

---

## Semidirect product

> [!Definition]
> Given any two groups $H$ and $K$ and a group homomorphism $\phi:K\to\text{Aut}(H)$, we can construct a new group $H\rtimes_{\phi}K$, called the *semidirect product* of $H$ and $K$ with respect to $\phi$, defined as follows:
> 1. As a set, $H\rtimes_{\phi}K$ is the same as $H\times K$. 
> 2. $(h_{1}, k_{1})\circ(h_{2}, k_{2})\equiv(h_{1}\phi_{k_{1}}(h_{2}), k_{1}k_{2})$.

