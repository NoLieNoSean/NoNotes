---
tags:
  - ALG2
  - Lecture
date: 2025-01-28
time: 9:10
---
## The Correspondence Theorem

Let $\phi:G\to \mathcal{G}$ be a homomorphism, and let $H<G$. Consider the restriction $\phi|_{H}:H\to \mathcal{G}$. Note that 
- $\ker(\phi|_{H})=(\ker\phi)\cap H$
- [[ALG2_L4|We know that]] the image of $\phi|_{H}$ divides both $|H|$ and $|\mathcal{G}|$. If $|H|$ and $|\mathcal{G}|$ have no common factors, then $\phi(H)=\{ 1_{\mathcal{G}} \}$, and $H$ is contained in the kernel. 

> [!Theorem] Proposition
> Let $\phi:G\to \mathcal{G}$ be a homomorphism with kernel $K$ and let $\mathcal{H}$ be a subgroup of $\mathcal{G}$. Denote the inverse image $\phi ^{-1}(\mathcal{H})$ by $H$. Then
> 1. $H<G$, $H\supset K$.
> 2. If $\mathcal{H}\triangleleft \mathcal{G}$, then $H\triangleleft G$. 
> 3. If $H\triangleleft G$ and $\phi$ is surjective, $\mathcal{H}\triangleleft \mathcal{G}$

> **Proof of 2**
> If $\mathcal{H}\triangleleft \mathcal{G}$, let $x\in H$ and $g\in G$. Then, $\phi(gxg^{-1})=\phi(g)\phi(x)\phi(g^{-1})\in \mathcal{H}$, i.e, $gxg^{-1}\in H$.
> 
> **Proof of 3**
> Let $a\in \mathcal{H}$, $b\in \mathcal{G}$. Since $\phi$ is surjective, there exist $x\in H$, $g\in G$ such that $\phi(x)=a$ and $\phi(g)=b$. Since $H$ is normal, $gxg^{-1}\in H$, so $\phi(gxg^{-1})=bab^{-1}\in \mathcal{H}$. 

> [!Theorem] The correspondence theorem
> Let $\phi:G\to \mathcal{G}$ be a surjective group homomorphism with kernel $K$. There is a bijective correspondence between subgroups of $\mathcal{G}$ and subgroups of $G$ that contain $K$:
> 
> A subgroup $H<G$ that contains $K$ $~~\leftrightarrow~~$ its image $\phi(H)$ in $\mathcal{G}$
> A subgroup $\mathcal{H}<\mathcal{G}$ $~~\leftrightarrow~~$ its inverse image $\phi ^{-1}(\mathcal{H})$ in $G$. 
> 
> If $H$ and $\mathcal{H}$ are corresponding subgroups, then $H\triangleleft G\iff \mathcal{H}\triangleleft \mathcal{G}$. Also, $|H|=|\mathcal{H}||K|$.

**Proof**
Note that if $H<G$ containing $K$ (and for any subgroup in general), $\phi(H)<\mathcal{G}$, and for any $\mathcal{H}<\mathcal{G}$, $\phi ^{-1}(\mathcal{H})<G$ and contains $K$, from the previous proposition. We now have to show the bijectivity of the correspondence. $\phi(\phi ^{-1}(\mathcal{H}))=\mathcal{H}$ is true for any surjective map, so is $H\subset \phi ^{-1}(\phi(H))$. It remains to be shown that $H\supset \phi ^{-1}(\phi(H))$.  


