## Free abelian groups

The commutator subgroup of a group $G$, denoted by $[G, G]$, is defined to be $\langle aba^{-1}b ^{-1}\ | \ a, b\in G \rangle$.

> [!Theorem] Lemma
> For any group $G$, $[G, G]$ is a normal subgroup.

> **Proof**
> A subgroup is normal if $g h g^{-1} \in [G, G]$ for all $g \in G$, $h \in [G, G]$. Since $h$ is a product of commutators $c_i = a_i b_i a_i^{-1} b_i^{-1}$:
> - Conjugate $c = aba^{-1}b^{-1}$: $g c g^{-1} =$ $(g a g^{-1})(g b g^{-1})(g a^{-1} g^{-1})(g b^{-1} g^{-1}) =$ $a' b' a'^{-1} b'^{-1}$, a commutator with $a' = g a g^{-1}$, $b' = g b g^{-1}$.
> - For $h = c_1 \cdots c_n$, $g h g^{-1} = (g c_1 g^{-1}) \cdots (g c_n g^{-1})$, a product of commutators, so $g h g^{-1} \in [G, G]$.
> - Inverses follow similarly, as $(g c g^{-1})^{-1}$ is a commutator.
> Hence, $[G, G]\triangleleft G$.

> [!Theorem] Lemma
> If $\mathcal{F}$ is a [[ALG2_L13#The free group|free group]], then $\mathcal{F}/[\mathcal{F}, \mathcal{F}]$ is abelian. 

> **Proof**
> Let $a[\mathcal{F}, \mathcal{F}]$ and $b[\mathcal{F}, \mathcal{F}]$ be any two elements in $\mathcal{F}$. Since $a^{-1} b ^{-1}ab\in[\mathcal{F}, \mathcal{F}]$, we have $ab[\mathcal{F}, \mathcal{F}]=ba[\mathcal{F}, \mathcal{F}]$. 





> [!Definition]
> Let $\mathcal{F}$ be the free abelian group of rank $r$. Then, $\mathcal{F}/[\mathcal{F}, \mathcal{F}]$ is called the *free abelian group* of rank $r$.

Lemma:
Let $F$ be a finitely generated free group. Then $F/[F, F]$ is a finitely generated free abelian group. Also, $F/[F, F]\cong \mathbb{Z}^{r}$ for some $r$.


Induct on the length of the word to show the second part.



Corollary:Every finitely generated free abelian group is isomorphic to $\mathbb{Z}^{r}$ for some $r$.


- aiist
- Titan's notes
- Farleigh
- Ojas' notes