---
tags:
  - ALG1
  - Lecture
date: 2024-10-29, Tuesday
time: 14:00
---
## Recall
[[Algebra1_L18#Characteristic Polynomial|Characteristic Polynomial]]

>[!Theorem] Lemma
> The characteristic polynomial of a linear operator is independent of the basis

>**Proof**:
> $$
> \det(Ix-PAP^{-1})=\det(P(Ix-A)P^{-1})=\det(Ix-A)
> $$

>[!Theorem] Corollary
> Similar Matrices have the same eigenvalues.

**Exercise:** Let $K$ and $W$ be the kernel and the image of a linear operator $T:V\to V$. TFAE
- $V \cong K \oplus W$
- $K \cap W = \{ 0 \}$
- $V = K + W$
## General Vector Spaces

> [!Proposition]
> 
> Let $V$ be a nontrivial vector space over $\mathbb{C}$. Then any linear operator $T: V \to V$ will have at least one eigenvector 

> **Proof:**
> The characteristic polynomial of $T$ will be of degree $\geq 1$. By the Fundamental Theorem of Algebra, this will have at least one complex root. Hence proved.

> [!Proposition]
> Every complex $n \times n$ matrix is similar to an upper triangular matrix.

> **Proof:**
> We want to show that for every complex $n \times n$ matrix $A$ there exists a complex $n \times n$ invertible matrix $P$ such that $PAP^{-1}$ is upper triangular.
> 
> $A$ has at least one eigenvector, call it $v$ and its corresponding eigenvalue $\lambda$,
> Extend $\{ v \}$ to a basis of $V$. In this basis, observe that
> $$
> A' =
> \left[
> \begin{array}{c|ccc}
> \lambda  & 0 & \dots & 0 \\
> \hline 
> 0 \\
> \vdots  &  & D\\
> 0
> \end{array}
> \right]
> $$
> By induction hypothesis on $D$, there exists an $(n-1) \times (n-1)$ matrix $Q$ such that $QDQ^{-1}$ is upper triangular. Observe that the 
> $$
> P' =
> \left[
> \begin{array}{c|ccc}
> 1 & 0 & \dots & 0 \\
> \hline
> 0 \\
> \vdots &  & Q \\
> 0
> \end{array}
> \right]
> \qquad
> {P'}^{-1} =
> \left[
> \begin{array}{c|ccc}
> 1 & 0 & \dots & 0 \\
> \hline
> 0 \\
> \vdots &  & Q^{-1} \\
> 0
> \end{array}
> \right]
> $$
> Using block multiplication of matrices it is evident that ${P'}^{-1}$ has the above form and that $P'A'{P'}^{-1}$ will be upper triangular.