---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-10-09
time: 14:02
---
## Direct Sums

### External direct sums

>[!Definition]
>Let $V$ and $W$ be two vector spaces. Define the *external direct sum* like so:
>$$
>V \oplus W \equiv \{ (v,\ w) \ \mid \ v\in V, \ w \in W\} = V \times W.
>$$
>We define the following operations, which make $V\oplus W$ a vector space.
>$$
>\begin{align}
>\text{Addition} & &(v_{1},\  w_{1}) \ + \ (v_{2}, \ w_{2})  & = (v_{1} + v_{2}, w_{1} + w_{2}) \\ \text{Scalar Multiplication} & &
>c(v,\ w) & =(cv,\ cw)
>\end{align}
>$$

Notice that $V \oplus W$ contains a *copy* of $V$ and $W$, i.e. there exists an injection from $V$ and $W$ into $V \oplus W$. $V$ and $W$ are NOT subspaces of $V\oplus W$. 

>[!Theorem] Lemma
> $\dim (V \oplus W) = \dim V + \dim W$.
 
> **Proof**:
> Let a basis for $V$ be $\{ \mathbf{v}_{i} \}_{i=1}^n$ and a basis for $W$ be $\{ \mathbf{w}_{j} \}_{j=1}^m$.
> Then $\{ (\mathbf{v}_{i},\ 0) \}_{i=1}^{n} \cup \{ (0,\ \mathbf{w}_{j}) \}_{j=1}^m$ is a basis for $V \oplus W$. ❏

### Internal Direct Sum

>[!Definition]
> Suppose $W_{1}, W_{2}, \dots W_{k}$ are subspaces of $W$. Define the *internal direct sum* of these subspaces like so:
> $$
>\begin{align}
>W_{1} + W_{2} + \dots + W_{k}  & \equiv \text{Span} \left( W_{1} \ \cup \ W_{2} \ \cup \ \dots \ \cup W_{k}\right)\\
>& = \{ w_{1} + w_{2} + \dots + w_k \mid w_{i} \in W_{i}\}
>\end{align}.
>$$

The internal direct sum of $W_{1}, \ W_{2},\  \dots \ W_{k}$ is the smallest subspace of $W$ containing every $W_{i}$.

>[!Definition]
>Call $W_{1}, \ W_{2},\  \dots \ W_{k}$ *linearly independent* if
>$$
>\mathbf{w}_{1} + \mathbf{w}_{2}+\dots +\mathbf{w}_{k} = \mathbf{0} \ \implies \mathbf{w}_{i} = \mathbf{0} \tag{$\mathbf{w}_i \in W_{i}$}.
>$$
### Relation between external and internal direct sums
For $W_{1}, W_{2} \subseteq V$, define
$$
\begin{align}
S : W_{1} \oplus W_{2} \to V \\
(\mathbf{w}_{1}, \mathbf{w}_{2}) \mapsto \mathbf{w}_{1} + \mathbf{w}_{2} \tag{$\mathbf{w}_{1} \in W_{1} , \ \mathbf{w}_{2} \in W_{2}$}
\end{align}
$$
Notice that $S$ is linear and that $\mathrm{Im} \ S = W_{1} + W_{2}$.

$\ker S$ is the set $\{ (\mathbf{w}_{1}, \mathbf{w}_{2}) \ \mid \ \mathbf{w}_{1} \in W_{1} \, , \ \mathbf{w}_{2} \in W_{2} \, , \ \mathbf{w}_{1} + \mathbf{w}_{2} = 0 \}$. So, $(\mathbf{w}_{1}, \mathbf{w}_{2})\in\ker S$ implies $\mathbf{w}_{1}=-\mathbf{w}_{2}=\mathbf{w}$ (say). As subspaces are closed under scalar multiplication, $\mathbf{w} \in W_{1} \cap W_{2}$. Thus,
$$
\ker S = \{ (\mathbf{w}, -\mathbf{w}) \ \mid \ \mathbf{w} \in W_{1} \cap W_{2} \}.
$$
We may define $T : \ker S \to W_{1} \cap W_{2}$ such that $(-\mathbf{w}, \mathbf{w}) \mapsto \mathbf{w}$. We can see that $T$ is a linear map. In fact, since $T$ is also bijective, $T$ is an isomorphism!
$$
\ker S \cong W_{1} \cap W_{2}.
$$
>[!Theorem]
>$\dim \ (W_{1} + W_{2}) = \dim W_{1} + \dim W_2 - \dim (W_{1} \cap W_{2})$.

>**Proof**
>Using the [[Algebra1_L10#Rank-nullity theorem|rank nullity theorem]], we have
>$$
>\begin{align}
>\dim \text{Domain of S} &= \dim \ker S \ + \ \dim \mathrm{Im} \ S \\
>\dim \ (W_{1} \oplus  W_{2})  & = \dim \ker S \ + \ \dim\  (W_{1} + W_{2})\\ 
>\dim \ (W_{1} + W_{2})  & = \dim W_{1} + \dim W_2 - \dim (W_{1} \cap W_{2}).\\ 
>\end{align}
>$$
>❏

>**Alternate Proof (Artin)**
>Let a basis of $W_{1} \cap W_{2}$ be $A=\{ \boldsymbol{\alpha}_{1}, \boldsymbol{\alpha}_{2},\dots,\boldsymbol{\alpha}_{k} \}$.
>We may extend this to a basis of $W_{1}$ by appending $B=\{ \boldsymbol{\beta}_{1}, \boldsymbol{\beta}_{2}, \dots, \boldsymbol{\beta}_{l} \}$.
>We may also extend it to a basis of $W_{2}$ by appending $C=\{ \boldsymbol{\gamma}_{1}, \boldsymbol{\gamma}_{2}, \dots, \boldsymbol{\gamma}_{m} \}$.
>Then, the claimed formula is
>$$
>\dim(W_{1}+W_{2})=(k+l)+(k+m)-k=k+l+m
>$$
>So, we have to show that $A\cup B\cup C$ is a basis of $W_{1}+W_{2}$. Clearly, $A\cup B\cup C$ spans $W_{1}+W_{2}$ since $A\cup B$ spans $W_{1}$ and $A\cup C$ spans $W_{2}$. Also, $A\cup B$ and $A\cup C$ are linearly independent sets, since they are bases. So, it only remains to show that $B\cup C$ is linearly independent. To this end, consider a linear combination of vectors in $B\cup C$ which is $\mathbf{0}$.
>$$
>\begin{align}
> & \sum_{i=1}^{l} b_{i}\boldsymbol{\beta}_{i}+\sum_{i=1}^{m} c_{i}\boldsymbol{\gamma}_{i}=\mathbf{0} \\
> \implies & \sum_{i=1}^{l} b_{i}\boldsymbol{\beta}_{i}=-\sum_{i=1}^{m} c_{i}\boldsymbol{\gamma}_{i}\equiv \mathbf{w}
>\end{align}
>$$
>Clearly, $\mathbf{w}\in W_{1}$ and $\mathbf{w}\in W_{2}$ $\implies$ $\mathbf{w}\in W_{1}\cap W_{2}$. Thus, 
>$$
>\begin{align}
> & \mathbf{w}=\sum_{i=1}^{k} a_{i}\boldsymbol{\alpha}_{i} \\
>\implies &  \sum_{i=1}^{k} a_{i}\boldsymbol{\alpha}_{i}-\sum_{i=1}^{l} b_{i}\boldsymbol{\beta}_{i}=\mathbf{0} \\
>\implies & b_{i}=0\ \forall\ i, \text{ since } A\cup B\text{ is linearly independent.}
>\end{align}
>$$
>Similarly, $c_{i}=0$ for all $i$. Thus, $B\cup C$ is linearly independent. ❏

>[!Theorem] Corollary
> $$
> \dim \left( \sum_{i=1}^n W_{i} \right) = \sum_{i=1}^{n} (-1)^{n+1} \left(\sum_{1 \leq i_{1}<\dots<i_{k} \leq n} \dim(W_{i_{1}} \cap \dots \cap W_{i_{k}})\right)
> $$

A more general statement is:
$$
\begin{align}
S:\ \ W_{1} \oplus W_{2}\oplus \dots \oplus W_{k}\ \ &\to\ \ W_{1}+W_{2}+\dots+W_{k} \subset V\\
(w_{1}, w_{2}, \dots, w_{k})\ \ &\mapsto\ \ w_{1} + w_{2}+ \dots+w_{k}
\end{align}
$$
We can see that
$$
\begin{align}
S\text{ is surjective} &\iff \text{span} \ (W_{1}, W_{2}, \dots, W_{k}) = V\\
S\text{ is injective} &\iff W_{1}, W_{2}, \dots, W_{k} \text{ are linearly independent}
\end{align}
$$

>[!Remark]
> For $k=2$,
> $$
> W_{1}, W_{2} \text{ linearly independent} \iff W_{1} \cap W_{2} = \{0\}.
> $$
> For $k = 3$,
> $$
> W_{1}, W_{2}, W_{3} \text{ linearly independent} \implies W_{1} \cap W_{2} = W_{2} \cap W_{3} = W_{3} \cap W_{1} = \{0\}.
> $$
> Note that the backwards implication is not true for $k \geq 3$. 

---
## Determinants

A determinant is a function $\det : M_{n \times n}(\mathbb{R}) \to \mathbb{R}$ which satisfies the following properties:
1) A row operation ($R_{i} \to R_{i} + \lambda R_{j}$) on the matrix does not change the determinant
2) Scaling a row scales the determinant
3) Swapping rows negates the determinant
4) $\det I_{n} = 1$