---
id: "48"
date: January 2025
---


$|S_{4}|=24$. So, the possible orders of subgroups of $S_{4}$ are 12, 8, 6, 4, 3, 2, 1.

$S_{4}$ is composed of the following elements:
$$
\begin{align}
S_{4} = & \{  \\ 
 & e, (01)(23), (02)(13), (03)(12),\\
 & (01), (12), (23), (30), (02), (13), \\
 & (012), (123), (230), (301), (021), (132), (203), (310), \\
 & (0123), (0132), (0231), (0213), (0321), (0312), \\
  & \}
\end{align}
$$

---

**Subgroups of order 12**

We know that the alternating group $A_{4}$ is the kernel of the sign homomorphism $\sigma:S_{n}\to \mathbb{Z}_{2}$, and [[LEC ALG2 2#Homomorphisms|hence]] is a subgroup of $S_{n}$. The members of $A_{4}$ are the members of $S_{4}$ with a positive sign:
$$

\begin{align}
A_{4} = & \{  \\ 
 & e, (01)(23), (02)(13), (03)(12),\\
 & (012), (123), (230), (301), (021), (132), (203), (310), \\
  & \}
\end{align}

$$
Notice that $A_{4}$ contains all 3-cycles of $S_{4}$. 

Let $H$ be a subgroup of $G$ with order 12 such that it does not contain some 3-cycle $(abc)$. Note that $(bac)\not\in H$, since $(bac)\in H\implies(bac)^{2}=(abc)\in H$. Now, consider the cosets $(abc)H$ and $(bac)H$. Since $(abc), (bac) \not\in H$ and $[G:H]=2$, It must be that $(abc)H=(bac)H$. But, $(bac)^{-1}(abc)=(abc)(abc)=(bac)\not\in H$, which is a contradiction. Thus, any subgroup of $G$ of order 12 must have all 3-cycles.

Now, let $H$ be a subgroup of $G$ with order 12 containing some 2-cycle $(ab)$. By composing $(ab)$ with the four 3-cycles that do not contain $a$ or $b$, we get four 4-cycles $(ab)(bcd)=(bcda)$, $(ab)(bdc)=(bdca)$, $(ab)(cda)=(cdab)$, $(ab)(cad)=(cbad)$. $H$ does not have the space to have these elements. Thus, any subgroup of $G$ of order 12 must not have any 2-cycles.

If these is a subgroup of $G$ of order 12 that contains some 4-cycle, we can compose that four cycle with some 3-cycle to obtain a 2-cycle, which we know cannot be in $H$: $(abcd)(adc)=(bc)$. Thus, any subgroup of $G$ of order 12 must not have any 4-cycles.

Thus, $A_{4}$ is the only subgroup of $S_{4}$ of order 12.

A shorter way to prove the above statement is to notice that any subgroup of index 2 must be normal, and so must be [[Normalizers and Conjugacy#Conjugacy|made of whole conjugacy classes]]. The only way to do this is $A_{4}$.

---

**Subgroups of order 8**

Let $H$ be a subgroup of order 8. The elements of $H$ can have order 2 or 4. Say all the elements of $H$ have order 2, i.e, a 2-cycle, or a double 2-cycle. $H$ must have some 2-cycle $(a, b)$. Notice that if $H$ has any other 2-cycle where $a$ or $b$ is not fixed, like $(b, c)$, then the two 2-cycles can be composed to get a three cycle. Thus, $H$ must have at least one element of order 4. 

If $H$ has two elements of order 4 such their cycles are different, they will end up generating more than 8 elements. Thus, $H$ can have only one element of order 4. There are 3 different 4-cycles in $S_{4}$, and for each 4-cycle can be extended in only one way to form a subgroup of order 8 (I'm too lazy to write down everything, this needs some verification, but its mostly bashing numbers).

{ (), (0 1), (0 3 1 2), (0 3)(1 2), (0 2 1 3), (0 2)(1 3), (0 1)(2 3), (2 3) }

{ (), (0 1 3 2), (0 3), (0 3)(1 2), (0 2 3 1), (0 2)(1 3), (0 1)(2 3), (1 2) }

{ (), (0 1 2 3), (0 3 2 1), (0 3)(1 2), (0 2), (0 2)(1 3), (0 1)(2 3), (1 3) }


Note that all of these are isomorphic to $D_{4}$. 

---

**Subgroups of order 6**

No element of order 6. So must to isomorphic to $S_{3}$. Simple work from here. You will find 4 subgroups.

