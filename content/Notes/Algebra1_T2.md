---
tags:
  - ALG1
  - Tutorial
---

## Properties

Let $V_{1}$ and $V_{2}$ be subspaces of $V$.
- Intersection of subspaces is a subspace.
- Union os subspaces is not a subspace.
- Lemma: $V_{1}\cup V_{2}\text{ is a subspace }\iff v_{1}\subset V_{2}\text{ or }V_{2}\subset V_{1}$.
- $V_{1}+V_{2}:=\{ \mathbf{v}_{1}+\mathbf{v}_{2}\ | \ \mathbf{v}_{1}\in V_{1}, \mathbf{v}_{2}\in V_{2} \}$
- If $V_{1}\cap V_{2}=\{ \mathbf{0} \}$, and let  $V'=V_{1}+V_{2}$, (this is called a direct sum, when the intersection of $V_{1}$ and $V_{2}$ is $\{ \mathbf{0} \}$) then $\mathbf{v}_{1}(\ne 0)\in V_{1}$ and $\mathbf{v}_{2}(\ne 0)\in V_{2}$ are a basis of $V'$.
- Let $T:V_{1}\times V_{2}\to V'$ be a linear map, with addition and multiplication by a scalar on the space $V_{1}\times V_{2}$ being defined slot-wise. $T$ maps $(\mathbf{v}_{1}, \mathbf{v}_{2})$ to $\mathbf{v}_{1}+\mathbf{v}_{2}$. Show that $T$ is an isomorphism.
- Let $P$ be a linear map from $V$ to $V$. Let $P^{2}=P$. Every map of this form is a "projection".  Show that $V=\text{Ker }P\ +\ \mathrm{Im} P$.
  Show that (or is it given? idk) $P(\mathbf{v}_{1}+\mathbf{v}_{2})=\mathbf{v}_{2}$, where $\mathbf{v}_{1}$ is in the kernel of $P$ and $\mathbf{v}_{2}$ is in the Image of $P$. 
  Show that $\mathbf{v}-P\mathbf{v}\in\text{Ker }P$.