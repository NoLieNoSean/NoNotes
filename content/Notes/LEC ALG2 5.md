---
tags:
  - ALG2
  - Lecture
date: 2025-01-28
time: 9:10
id: "94"
---
## The Correspondence Theorem

Let $\phi:G\to \mathcal{G}$ be a homomorphism, and let $H<G$. Consider the restriction $\phi|_{H}:H\to \mathcal{G}$. Note that 
- $\ker(\phi|_{H})=(\ker\phi)\cap H$
- [[LEC ALG2 4|We know that]] the image of $\phi|_{H}$ divides both $|H|$ and $|\mathcal{G}|$. If $|H|$ and $|\mathcal{G}|$ have no common factors, then $\phi(H)=\{ 1_{\mathcal{G}} \}$, and $H$ is contained in the kernel. 

> [!Proposition]
> Let $\phi:G\to \mathcal{G}$ be a homomorphism with kernel $K$ and let $\mathcal{H}$ be a subgroup of $\mathcal{G}$. Denote the inverse image $\phi ^{-1}(\mathcal{H})$ by $H$. Then
> 1. $H<G$, $H\supset K$.
> 2. If $\mathcal{H}\triangleleft \mathcal{G}$, then $H\triangleleft G$. 
> 3. If $H\triangleleft G$ and $\phi$ is surjective, $\mathcal{H}\triangleleft \mathcal{G}$
> 
> > [!Proof]-
> > 2. If $\mathcal{H}\triangleleft \mathcal{G}$, let $x\in H$ and $g\in G$. Then, $\phi(gxg^{-1})=\phi(g)\phi(x)\phi(g^{-1})\in \mathcal{H}$, i.e, $gxg^{-1}\in H$.
> > 3. Let $a\in \mathcal{H}$, $b\in \mathcal{G}$. Since $\phi$ is surjective, there exist $x\in H$, $g\in G$ such that $\phi(x)=a$ and $\phi(g)=b$. Since $H$ is normal, $gxg^{-1}\in H$, so $\phi(gxg^{-1})=bab^{-1}\in \mathcal{H}$. 
> 

^82cf21

> [!Theorem] The correspondence theorem
> Let $\phi:G\to \mathcal{G}$ be a surjective group homomorphism with kernel $K$. There is a bijective correspondence between subgroups of $\mathcal{G}$ and subgroups of $G$ that contain $K$:
> 
> A subgroup $H<G$ that contains $K$ $~~\leftrightarrow~~$ its image $\phi(H)$ in $\mathcal{G}$
> A subgroup $\mathcal{H}<\mathcal{G}$ $~~\leftrightarrow~~$ its inverse image $\phi ^{-1}(\mathcal{H})$ in $G$. 
> 
> If $H$ and $\mathcal{H}$ are corresponding subgroups, then $H\triangleleft G\iff \mathcal{H}\triangleleft \mathcal{G}$. Also, $|H|=|\mathcal{H}||K|$.
> 
> > [!Proof]-
> > Note that if $H<G$ containing $K$ (and for any subgroup in general), $\phi(H)<\mathcal{G}$, and for any $\mathcal{H}<\mathcal{G}$, $\phi ^{-1}(\mathcal{H})<G$ and contains $K$, from the previous proposition. We now have to show the bijectivity of the correspondence. $\phi(\phi ^{-1}(\mathcal{H}))=\mathcal{H}$ is true for any surjective map, so is $H\subset \phi ^{-1}(\phi(H))$. It remains to be shown that $H\supset \phi ^{-1}(\phi(H))$. Let $x$ be an element of $\phi ^{-1}(\phi(H))$. By definition of the inverse image, $\phi(x)\in \phi(H)$, say $\phi(x)=\phi(a)$. Then, $a^{-1}x$ is in the kernel $K$, and since $H$ contains $K$, $a^{-1}x$ is in $H$. Since both $a$ and $a^{-1}x$ are in $H$, $x$ is in $H$ too.
> > 
> > The remaining assertion follows from the previous proposition.

^90ba83

---

## Composition series and solvable groups

> [!Definition]
> A (finite or infinite) group $G$ is called *simple* if $|G|> 1$ and the only normal subgroups of $G$ are $1$ and $G$.

> [!Definition]
> In a group $G$, a sequence of subgroups 
> $$
> 1=N_{0}\triangleleft  N_{1}\triangleleft \dots \triangleleft  N_{k-1}\triangleleft  N_{k}=G
> $$
> is called a *composition series* if $N_{i+1}/N_{i}$ is a simple group, $0\leq i\leq k-1$. If the above sequence is a composition series, the quotient groups $N_{i+1}/N_{i}$ are called *composition factors* of $G$.

> [!Theorem]
> If $G$ is a finite group with order greater than 1, then there exists a composition series of $G$, and the composition factors of $G$ are unique up to permutation and isomorphism. 

> [!Theorem]
> If $G$ is a simple group of odd order, then $G\cong Z_{p}$ for some prime $p$.

> [!Definition]
> A group $G$ is *solvable* if there is a chain of subgroups
> $$
> 1\triangleleft G_{0}\triangleleft G_{1}\triangleleft \dots \triangleleft G_{s}=G
> $$
> such that $G_{i+1}/G_{i}$ is abelian for $0\leq i\leq s-1$. 

^9d125f

The following generalization of [[LEC ALG2 11#Sylow's theorems|Sylow's theorem]] characterizes finite solvable groups:

> [!Theorem]
> The finite group $G$ is solvable iff for every divisor $n$ of $|G|$ such that $\left( n, \frac{|G|}{n} \right)=1$, $G$ has a subgroup of order $n$.

> [!Theorem]
> For $N\triangleleft G$, if $N$ and $G/N$ are solvable, then $G/N$ is solvable.

