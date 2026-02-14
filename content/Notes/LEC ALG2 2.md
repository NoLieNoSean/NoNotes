---
tags:
  - ALG2
  - Lecture
  - Processed
date: 2025-01-09
time: 9:10
id: "91"
---
## Symmetric groups

The set of all permutations of $(1, 2, \dots, n)$ form a group, denoted by $S_{n}$. A *cycle* is a special type of permutation. For example, $(1 ~2)$ is what is called a 2-cycle, and represents swapping $1$ and $2$. $(1~2~3)$ is a 3-cycle, and maps 1 to 2, 2 to 3, and 3 to 1. The group operation is composition. Starting from $S_{3}$, they are not abelian.

> [!Lemma]
> Every $\tau\in S_{n}$ can be expressed as a product of cycles.
> 
> > [!Proof]-
> > 
> > Let $i$ be the first element in $\{ 1, 2, \dots, n \}$ which is not fixed by $\tau$ (i.e, is not mapped to itself. Fixed elements form cycles of length 1). Consider the cycle $\sigma_{1}=(1~ \tau(1)~ \tau^{2}(1)~\dots)$. Repeat until you have exhausted all elements, at which point $\tau$ can be expressed as a product of disjoint cycles, $\tau=\sigma_{1}\sigma_{2}\dots\sigma _k$. Note that the cycles being disjoint makes their product commutative, i.e, we can write the product in any order. 
> 

Now, let the sign of a permutation be defined as the number of "disorders" in the permutation, as done [[LEC ALG1 16#Another formula for determinants|here]]. Note with this definition, the sign of a permutation is a well defined quantity. It can easily be verified that if a cycle $\sigma$ has length $k$,  $\text{sgn}(\sigma)=(-1)^{k-1}$. Thus, if $\tau = \sigma_{1}\sigma_{2}\dots\sigma _k$, $\text{sgn}(\tau)=\text{sgn}(\sigma_{1})\text{sgn}(\sigma_{2})\dots\text{sgn}(\sigma_{k})$. 

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
> 
> > [!Proof]-
> > 
> > $\phi(1_{G})=\phi(1_{G}1_{G})=\phi(1_{G})\phi(1_{G})$. It follows that $\phi(1_{G})=1_{H}$.
> > 
> > Let $g_{1}, g_{2}\in \ker\phi$. Then, $\phi(g_{1} g_{2})=\phi(g_{1})\phi(g_{2})=1_{H}1_{H}=1_{H}$. Thus, $g_{1} g_{2}\in \ker \phi$. $\phi(1_{G})=1_{H}$, so $1_{G}\in \ker \phi$. Also, $1_{H}=\phi(1_{G})=\phi (g_{1}g_{1}^{-1})=\phi(g_{1})\phi(g_{1}^{-1})=\phi(g_{1}^{-1})$, i.e, $g_{1}^{-1}\in\ker\phi$. Thus, $\ker\phi<G$. 
> > 
> > Let $h_{1}, h_{2}\in \mathrm{Im}~\phi$. There must exist $g_{1}, g_{2}\in G$ such that $\phi(g_{1})=h_{1}$ and $\phi(g_{2})=h_{2}$. Then, $\phi(g_{1}g_{2})=\phi(g_{1})\phi(g_{2})=h_{1}h_{2}$. Thus, $h_{1}h_{2}\in \mathrm{Im}~\phi$. Obviously, $1_{H}\in \mathrm{Im}~\phi$. Also, it can be seen from the proof of statement 2 that $h_{1}^{-1}=\phi(g_{1})^{-1}=\phi(g_{1}^{-1})\in \mathrm{Im}~\phi$. Thus, $\mathrm{Im}~\phi<H$. 
> 

^76946c


Note: Actually, $\ker \phi\triangleleft G$, as seen in the next lecture.

> [!Theorem]
> Let $\psi:G\to G'$ be a homomorphism of groups, and let $a$ and $b$ be elements of $G$. Let $K$ be the kernel of $\psi$. Then, the following are equivalent:
> - $\psi(a)=\psi(b)$
> - $a^{-1}b$ is in $K$
> - $b$ is in the coset $aK$
> - The cosets $bK$ and $aK$ are equal.

The last point can be proved by showing that $aK$ and $bK$ are subsets of each other.

> [!Theorem]
> Let $K$ be the kernel of a homomorphism $\phi:G\to G$. The fibre of $\phi$ that contains an element $a$ of $G$ is the coset $aK$ of $K$. These cosets partition $G$, and they correspond to elements of the image of $\phi$. 
> 
> ![[Pasted image 20250130164743.jpeg]]


