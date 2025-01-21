---
tags:
  - ALG2
  - Lecture
date: 2025-01-09
time: 9:10
---

## Symmetric groups

The set of all permutations of $(1, 2, \dots, n)$ form a group, denoted by $S_{n}$. A *cycle* is a special type of permutation. For example, $(1 ~2)$ is what is called a 2-cycle, and represents swapping $1$ and $2$. $(1~2~3)$ is a 3-cycle, and maps 1 to 2, 2 to 3, and 3 to 1. The group operation is composition. Starting from $S_{3}$, they are not abelian.

> [!Theorem] Lemma
> Every $\tau\in S_{n}$ can be expressed as a product of cycles.

> **Proof**
> Let $i$ be the first element in $\{ 1, 2, \dots, n \}$ which is not fixed by $\tau$ (i.e, is not mapped to itself. Fixed elements form cycles of length 1). Consider the cycle $\sigma_{1}=(1~ \tau(1)~ \tau^{2}(1)~\dots)$. Repeat until you have exhausted all elements, at which point $\tau$ can be expressed as a product of disjoint cycles, $\tau=\sigma_{1}\sigma_{2}\dots\sigma _k$. Note that the cycles being disjoint makes their product commutative, i.e, we can write the product in any order. 

Now, let the sign of a permutation be defined as the number of "disorders" in the permutation, as done [[Algebra1_L16#Another formula for determinants|here]]. Note with this definition, the sign of a permutation is a well defined quantity. It can easily be verified that if a cycle $\sigma$ has length $k$,  $\text{sgn}(\sigma)=(-1)^{k-1}$. Thus, if $\tau = \sigma_{1}\sigma_{2}\dots\sigma _k$, $\text{sgn}(\tau)=\text{sgn}(\sigma_{1})\text{sgn}(\sigma_{2})\dots\text{sgn}(\sigma_{k})$. 

> [!Question]- Why is the sign of a permutation well defined, and why is the sign of a product equal to the product of the signs?
> First, notice that the number of disorders of a permutation is a well defined number. Also notice that the number of disorders of the identity permutation is 0. Also notice that swapping two adjacent elements changes the number of disorders by $\pm1$. Also notice that swapping any two elements using adjacent swaps takes an odd number of adjacent swaps, and thus changes the number of disorders by an odd number. Let the number of disorders of a permutation $\tau$ be $k$. If we start from the identity permutation and work our way towards $\tau$ by swapping any two elements at a time, notice that regardless of the path we take, the number of swaps we make MUST equal the parity of $k$. For example, if $k$ is odd, it is impossible to reach $\tau$ from the identity permutation by making an even number of swaps. Thus, we can safely say that the sign of a permutation is the number of swaps it takes us to get to it from the identity permutation. 
> 
> Now, composing permutations. Let $\tau_{1}$ and $\tau_{2}$ be permutations with number of disorders $k_{1}$ and $k_{2}$ respectively. Composing them like $\tau_{1}\circ\tau_{2}$ entails applying $\tau_{1}$ first, then $\tau_{2}$ (using the convention that function composition is evaluated from the left, to stay consistent with Visual Group Theory). Now, the parity of the number of swaps to get to $\tau_{1}\circ\tau_{2}$ from $e$ is the product of (the parity of number of swaps to get to $\tau_{1}$ from $e$)$\times$ (the parity of the number of swaps to get to $\tau_{1}\circ\tau_{2}$ from $\tau_{1}$), with the latter being the same as the parity of the number of swaps to get to $\tau_{2}$ from $e$. 

---
## Homomorphisms

> [!Definition]
> Let $G=(G, \star)$ and $H=(H, *)$ be groups. A map $\phi:G\to H$ is called an *homomorphism* if 
> $$
> \phi(g_{1}\star g_{2})=\phi(g_{1})*\phi(g_{2})\ \ \forall g_{1}, g_{2}\in G.
> $$

A homomorphism is basically a structure preserving map. 

The kernel of $\phi$ is the set of all elements in $G$ that it maps to the identity in $H$. The image of $\phi$ is the set of all elements in $H$ that have a preimage in $G$. 

> [!Theorem] Properties of homomorphisms
> Let $\phi$ be as defined above. For brevity, we will drop the $\star$ and $*$ symbols.
> 1. $\phi$ will always map $1_{G}$ to $1_{H}$.
> 2. $\ker\phi<G$.
> 3. $\mathrm{Im}~ \phi<H$.

> **Proof of 1**
> $\phi(1_{G})=\phi(1_{G}1_{G})=\phi(1_{G})\phi(1_{G})$. It follows that $\phi(1_{G})=1_{H}$.
> 
> **Proof of 2**
> Let $g_{1}, g_{2}\in \ker\phi$. Then, $\phi(g_{1} g_{2})=\phi(g_{1})\phi(g_{2})=1_{H}1_{H}=1_{H}$. Thus, $g_{1} g_{2}\in G$. $\phi(1_{G})=1_{H}$, so $1_{G}\in \ker \phi$. Also, $1_{H}=\phi(1_{G})=\phi (g_{1}g_{1}^{-1})=\phi(g_{1})\phi(g_{1}^{-1})=\phi(g_{1}^{-1})$, i.e, $g_{1}^{-1}\in\ker\phi$. Thus, $\ker\phi<G$. 
> 
> **Proof of 3**
> Let $h_{1}, h_{2}\in \mathrm{Im}~\phi$. There must exist $g_{1}, g_{2}\in G$ such that $\phi(g_{1})=h_{1}$ and $\phi(g_{2})=h_{2}$. Then, $\phi(g_{1}g_{2})=\phi(g_{1})\phi(g_{2})=h_{1}h_{2}$. Thus, $h_{1}h_{2}\in \mathrm{Im}~\phi$. Obviously, $1_{H}\in \mathrm{Im}~\phi$. Also, it can be seen from the proof of statement 2 that $h^{-1}=\phi(g_{1})^{-1}=\phi(g_{1}^{-1})\in \mathrm{Im}~\phi$. Thus, $\mathrm{Im}~\phi<H$. 

---

## Cosets

> [!Definition]
> Let $H<G$. For $g, g'\in G$, we say $g\equiv g'\mod H$ if $gg'^{-1}\in H$. 

> [!Theorem] Proposition
> The congruence relation defined above is an equivalence relation.

> **Proof**
> Reflexivity:
> $g\equiv g\mod H$, since $e\in H$.
> 
> Symmetry:
> $$
> \begin{align}
>  & g\equiv g'\mod H \\
> \implies  & gg'^{-1}\in H \\
> \implies & (gg'^{-1})^{-1}\in H \\
> \implies  & g'g^{-1}\in H   \\
> \implies  & g'\equiv g\mod H
> \end{align}
> $$
> Transitivity:
> Let $g\equiv g'\mod H$ and $g'\equiv g''\mod H$. Then, $gg'^{-1}\in H$ and $g'g''^{-1}\in H$. It follows that $gg'^{-1}g'g''^{-1}=gg''^{-1}\in H$, so $g\equiv g''\mod H$. 

As we know, an equivalence relation on a set partitions the set into equivalence classes. 

> [!Definition]
> The right coset of $H$ is defined by $Hg\equiv \{ hg:h\in H \}$, where $g\in G$. 

> [!Theorem] Lemma
> $Hg$ is the equivalence class of $g$ modulo $H$, i.e, $Hg=\{ g':g\equiv g'\mod H \}=[g]$. 

> **Proof**
> $[g]\subset Hg$:
> Let $g'\in[g]$. Then, $gg'^{-1}=h$ for some $h\in H$. So, $h^{-1}g=g'$. 
> 
> $Hg\subset[g]$:
> Let $hg\in Hg$. Obviously, $hgg^{-1}=h\in H$. Thus, $hg\in[g]$.

> [!warning] Important note
> In a way, the algebraic representation and manipulation of group elements is detached from the objects whose symmetries the group may be modeling. For example, we can define the dihedral group $S_{3}$ algebraically like so: $\langle r, f:r^{3}=f^{2}=1, frf=r^{-1} \rangle$. This definition tells us all we need to know about the group algebraically. However, when we try to associate the group elements generated by such an algebraic definition with configurations of the object whose symmetries the group describes, there are two way to do it, and they result in different Cayley diagrams. This is because (once we have associated a configuration to $r$ and $f$), we have to make sense of expressions like $rf$ as a configuration, and we can think of that as meaning either "first apply $r$, then $f$" or "first apply $f$, then $r$". For non abelian groups, this will result in different configurations of the object being associated with $rf$. For example, if $f=(13)$ and $r=(132)$, $rf$ could be either $r(f(e))=r((13))=(12)$ or $f(r(e))=f((132))=(32)$, as illustrated below:
> ![[Pasted image 20250121140508.png]]
> The usual convention to read $rf$ seems to be "first $r$, then $f$". Regardless, this choice is pertinent only when we wish to associate the algebraic group elements with their configurational counterparts, and does not impact the algebra in any manner.

---
## Quotient groups

> [!Definition]
> Let $H<G$. Then, $G/H$ is the set of equivalence classes of $G$ modulo $H$, i.e, $G/H=\{ Hg:g\in G \}$. It can also be used to denote the set of all left cosets, $\{ gH:g\in G \}$. 

### Normal subgroups

> [!Definition]
> A subgroup $N<G$ is called a *normal subgroup* if $gNg^{-1}=N$ for all $g\in G$. In other words, the left coset and right coset of $N$ for any given $g$ coincide. Denoted by $N\triangleleft G$.

> [!Theorem] Lemma
> $N\triangleleft G$ $\iff$ the group operation $(g_{1}N)(g_{2}N)=g_{1}g_{2}N$ can be defined on $G/N$ where $g_{1}, g_{2}\in G$ . 

**Proof of $\implies$**
Let $N$ be a normal subgroup of $G$. It must be that $g_{1}g_{2}N$ does not depend on the choice of representatives $g_{1}$ and $g_{2}$ of each left coset, $g_{1}N$ and $g_{2}N$. To prove this, suppose $xN=g_{1}N$ and $yN=g_{2}N$ for some $x, y\in G$. Then, 
$$
\begin{align}
(xN)(yN)=xyN=x(g_{2}N)=x(Ng_{2})=(xN)g_{2}=(g_{1}N)g_{2}=g_{1}(Ng_{2})=g_{1}g_{2}N
\end{align}
$$

**Proof of $\Longleftarrow$**
Let it be given that the operation $(g_{1}N)(g_{2}N)=g_{1}g_{2}N$ is well defined on $G/N$, i.e, for all $x, y, a, b\in G$ such that $xN=aN$ and $yN=bN$, we have $(ab)N=(xy)N$. Now,
$$
\begin{align}

\end{align}
$$

> [!Theorem]
> The kernel of a homomorphism is a normal subgroup.

> **Proof**
> Let $\phi$ be a homomorphism between two groups $G$ and $H$. Let $n\in \ker \phi$. Then, $\phi(gng^{-1})=\phi(g)\phi(n)\phi(g^{-1})=\phi(g)1_{H}\phi(g^{-1})=\phi(1_{G})=1_{H}$. Thus, $gng^{-1}\in\ker \phi$. Also, $gn_{1}g^{-1}=gn_{2}g^{-1}\implies n_{1}=n_{2}$. Thus, $gNg^{-1}=N$.

An immediate corollary of the above lemma is that the alternating group of $n$ elements $A_{n}$ is a normal subgroup of $S_{n}$, since $A_{n}$ is the kernel of the homomorphism $\phi:S_{n}\to \mathbb{Z}_{2}$, $\phi(\tau)=\text{sgn }\tau$.