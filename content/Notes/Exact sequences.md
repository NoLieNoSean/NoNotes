In [[LEC ALG2 4#^7dbb5e|this lemma]], we have the following chain of homomorphisms, where $i_{1}$ and $i_{2}$ are inclusion maps:
$$
1_{G}\overset{ i_{1} }{ \to } N\overset{ i_{2} }{ \to } G\overset{ \phi }{ \to } G/N\overset{}{ \to } 1_{G/N}
$$
Note that the image of one map is the kernel of the following map in the chain. Such a sequence if called a **short exact sequence**. More generally, a short exact sequence is a sequence of group homomorphisms:
$$
1\to A\overset{f}{\to} G \overset{ g }{ \to }H \to 1
$$
that satisfies the following:
- $f$ is injective
- $g$ is surjective
- $\mathrm{Im}~f=\ker g$.
So, we have $H\cong G/A$. 

We say that a short exact sequence **splits** if one of the following (equivalent) conditions hold:
1. There exists a right inverse of $g$, that is, a homomorphism $s:H\to G$ such that $gs=\mathrm{id}_{H}$. $s$ is called a **section** of $g$.
2. There exists  a left inverse of $f$, that is, a homomorphism $r:G\to A$ such that $rf=\mathrm{id}_{A}$.

When a short exact sequence splits, the group $G$ is isomorphic to a semidirect product:
$$
G\cong A\rtimes H.
$$
