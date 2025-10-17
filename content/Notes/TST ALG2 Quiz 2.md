---
id: "289"
---

**Prove or disprove: Let $G=A_{4}$. There exist proper subgroups $H$ and $K$ such that $A_{4}\cong H\times K$.**

WLOG, the orders of $H$ and $G$ must be $2$ and $6$ or $4$ and $3$. Since $A_{4}$ does not have a subgroup of order $6$, it must be the latter case. Say $|H|=4$ and $|G|=3$. $A_{4}$ has exactly one subgroup of order $4$, which is isomorphic to $V_{4}$, which is abelian. Also, all groups of order 3 are cyclic, and hence also abelian. It follows that $H\times G$ is also abelian. But, $A_{4}$ is not abelian. 

An alternate argument is as follows: $H$ is forced to be $\{ e, (01)(23), (12)(13), (03)(12) \}$, and $G$ can be one of four cyclic order 3 subgroups of $A_{4}$. WLOG, say $G=\{ e, (132), (123) \}$. Note that $((01) (23), (132))\in H\times G$ is of order $6$. Since $A_{4}$ does not have an element of order 6, $H\times G$ cannot be isomorphic to $A_{4}$. 

A flawed argument: If $H$ and $G$ are subgroups of $A_{4}$, then for the map $(h, g)\mapsto hg$ to be an isomorphism it is necessary that $H$ and $G$ are normal subgroups of $A_{4}$. Since there are no normal subgroups of $A_{4}$ of order 3, there must not exist $H$ and $G$ such that $H\times G\cong A_{4}$! --- While it is true that there cannot exist maps of the form $(h, g)\mapsto hg$, there might exist other maps!
