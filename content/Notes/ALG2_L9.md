---
tags:
  - ALG2
  - Lecture
date: 2025-02-11
time: 9:10
---
## More on group actions

> [!Theorem]
> Let $G$ be a group. Let $\phi:G\times X\to X$ be a group action. The orbits of $x\in X$ partition $X$.

This was expected, since we saw in the previous lecture that the orbits of elements of $G$ under the conjugation action were conjugacy classes, and we know that the conjugacy classes of $G$ partition $G$.

> [!Theorem] Lemma
> Let $\phi:G\times X\to X$ and $|G|<\infty$. Then, $|G_{x}||\theta_{x}|=|G|$ for all $x\in X$. 

> **Proof**
> We will construct a bijection between $G/G_{x}$ and $\theta_{x}$, where the former is the set of all left cosets of $G_{x}$ in $G$ (may not be a group, since $G_{x}$ is not necessarily normal). Define the map $\phi:G/G_{x}\to\theta_{x}$ by $aG_{x}\mapsto ax$.  $\phi$ is well defined, because $aG_{x}=bG_{x}$ implies $ax=bgx=bx$ for some $g\in G_{x}$. $\phi$ is injective, since $\phi(aG_{x})=\phi(bG_{x})$ implies $b ^{-1}ax=x$, which implies $b ^{-1}a\in G_{x}$, which implies $aG_{x}=bG_{x}$. $\phi$ is surjective since $y\in\theta_{x}$ implies $y=ax$ for some $a\in G$, so $aG_{x}\mapsto y$.  

---

## Semidirect product

> [!Definition]
> Given any two groups $H$ and $K$ and a group homomorphism $\phi:K\to\text{Aut}(H)$, we can construct a new group $H\rtimes_{\phi}K$, called the *semidirect product* of $H$ and $K$ with respect to $\phi$, defined as follows:
> 1. As a set, $H\rtimes_{\phi}K$ is the same as $H\times K$. 
> 2. $(h_{1}, k_{1})\circ(h_{2}, k_{2})\equiv(h_{1}\phi_{k_{1}}(h_{2}), k_{1}k_{2})$.

