---
tags:
  - ALG2
  - Lecture
  - Processed
date: 2025-01-23
time: 9:10
---
# Isomorphisms

> [!Definition]
> Let $G=(G, \star)$ and $H=(H, *)$ be groups. A bijection $\phi:G\to H$ is called an *isomorphism* if 
> $$
> \phi(g_{1}\star g_{2})=\phi(g_{1})*\phi(g_{2})\ \ \forall g_{1}, g_{2}\in G.
> $$
> If there exists an isomorphism from $G$ to $H$, we say $G$ and $H$ are isomorphic and write $G\cong H$. 

> [!Lemma] 
> If $\phi:G\to G'$ is an isomorphism, so is $\phi ^{-1}:G'\to G$. 

Note that $\phi ^{-1}$ is well defined because $\phi$ is a bijection.

This lemma shows that when $\phi$ is an isomorphism, we can make a computation in either group,  then use $\phi$ or $\phi ^{-1}$ to carry it over to the other. So, for computation with the group law, the two groups have identical properties. For example, if $g\in G$ has order $k$, then $\phi(g)\in H$ also has order $k$. Similarly, if $G'$ is a subgroup of $G$, then $\phi(G')$ is a subgroup of $H$ (this is also true for vanilla homomorphisms, but $\phi$ being an isomorphism also guarantees $|G'|=|\phi(G')|$).
## Automorphisms

Recall that, if $\phi:G_{1}\to G_{2}$ is a [[LEC ALG2 2#Homomorphisms|homomorphism]],
- $\ker \phi\triangleleft G_{1}$, $\mathrm{Im}\phi<G_{2}$.
- $\phi$ is an isomorphism if $\ker\phi=\{ 1_{G_{1}} \}$ and $\mathrm{Im}\phi=G_{2}$. 

$\phi$ is called an *automorphism* if $G_{1}=G_{2}$. The set of all automorphisms is denoted by $\text{Aut }G\equiv \{ \phi:G\to G\ | \ \phi \text{ is an isomorphism}\}$.

> [!Lemma] 
> Let $G$ be a group. Then, $\text{Aut } G$ is a group under composition.

^27ea43

> **Proof**
> The identity isomorphism is the identity element. Let $\phi_{1}, \phi_{2}\in\text{Aut }G$. Consider the map $\phi_{1}\phi_{2}$. Since $\phi_{1}$ and $\phi_{2}$ are bijective, $\phi_{1}\phi_{2}$ is too. It remains to show that $\phi_{1}\phi_{2}$ is a homeomorphism: $(\phi_{1}\circ\phi_{2})(g_{1}g_{2})=\phi_{1}(\phi_{2}(g_{1})\phi_{2}(g_{2}))=\phi_{1}(\phi_{2}(g_{1}))\phi_{1}(\phi_{2}(g_{2}))=(\phi_{1}\circ\phi_{2})(g_{1})(\phi_{1}\circ\phi_{2})(g_{2})$. Thus, $\text{Aut }G$ is closed under composition. For any $\phi\in\text{Aut }G$, $\phi ^{-1}$ is well defined and bijective, is a homomorphism (easy to check), and hence is an isomorphism: $\phi ^{-1}\in\text{Aut }G$. 

### Conjugation

The most important type of automorphism is *conjugation*: let $g$ be a fixed element of a group $G$. Conjugation by $g$ is the map $\phi:G\to G$ defined by $x\mapsto gxg^{-1}$. This is an automorphism because, first of all, it is a homomorphism, and second, it is bijective because it have an inverse function: conjugation by $g^{-1}$.

Two elements $x, x'\in G$ are called conjugates if $x=gx'g^{-1}$ for some $g\in G$. Conjugates have similar algebraic behavior, since they are the images of each other under an isomorphism.  

> [!Theorem] Lemma
> If $H<G$, $g\in G$, then $gHg^{-1}<G$, and $gHg^{-1}\cong H$. 

> **Proof**
> $gHg^{-1}$ is the image of a group under an homomorphism. 

> [!Theorem] Corollary
> If a group $G$ has just one subgroup $H$ of order $r$, then that subgroup is normal.

---
# First isomorphism theorem

> [!Lemma]
> Let $G$ be a group and $N\triangleleft G$. Then the map $\phi:G\to G/N$ given by $g\mapsto gN$ is a surjective homomorphism.
> 
> > [!Proof]-
> > $\phi$ is clearly well-defined (each $g\in G$ maps to only coset in $G/N$). $\phi$ is a homomorphism: $\phi(g_{1}g_{2})=g_{1}g_{2}N=(g_{1}N)(g_{2}N)=\phi(g_{1})\phi(g_{2})$. It is clearly surjective.
> 

^7dbb5e
$\phi$ is known as a **projection map**. Note that $\ker \phi=N$. 

> [!Theorem] First isomorphism theorem
> Let $\phi:G\to G'$ be a homomorphism, and let $\psi:G\to G/\ker\phi$ be a projection map. Then, there exists a unique injective homomorphism $\overline{\phi}:G/\ker\phi\to G'$ such that $\phi=\psi\circ \overline{\phi}$. In other words, $G/\ker \phi\cong\mathrm{Im}~G$.
> 
>  ![[Pasted image 20250130111100.png]]
> 
> > [!Proof]-
> > Define $\overline{\phi}(g\ker\phi)=\phi(g)$. Note that $\overline{\phi}$ is a unique, well defined, injective homomorphism. 

---

# Mapping property of quotient groups

> [!Theorem]
> Let $\varphi:G'\to G$ be a homomorphism, and let $N\trianglelefteq  G'$ such that $N\subseteq \ker\varphi$. Let $\overline{G}'=G'/N$, and let $\pi:G'\to \overline{G}'$ be the canonical projection map $a\mapsto \overline{a}$. The rule $\overline{\varphi}(\overline{a})=\varphi(a)$ defines a homomorphism $\overline{\varphi}:\overline{G}'\to G$, and $\overline{\varphi}\circ \pi=\varphi$. 
>![[Pasted image 20250330164452.png|200]]

This mapping property generalizes the first isomorphism theorem. The hypothesis that $N$ be contained in $\ker\varphi$ is essential, of course.