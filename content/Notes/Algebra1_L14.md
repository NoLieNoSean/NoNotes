---
tags:
  - ALG1
  - Lecture
date: 2024-10-09
time: 14:02
---
## Direct Sums

>[!Definition]
> Let $V$ and $W$ be two vector spaces. Then
> $$
> V \oplus W = \{ (v,\ w) \ \mid \ v\in V, \ w \in W\} = V \times W
 >$$
 >We define the following operations
 >$$
 >\begin{align}
 > \text{Addition} & &(v_{1},\  w_{1}) \ + \ (v_{2}, \ w_{2})  & = (v_{1} + v_{2}, w_{1} + w_{2}) \\ \text{Scalar Multiplication} &  &
c(v,\ w) & =(cv,\ cw)
\end{align}
 >$$

Notice that $V \oplus W$ contains a *copy* of $V$ and $W$, i.e. there exists an injection from $V$ and $W$ into $V \oplus W$.

>[!Lemma]
> $\dim (V \oplus W) = \dim V + \dim W$
 
> **Proof**:
> Let a basis for V be $\{ v_{i} \}_{i=1}^n$ and a basis for $W$ be $\{ w_{j} \}_{j=1}^m$.
> Then $\{ (v_{i},\ 0) \}_{i=1}^{n} \cup \{ (0,\ w_{j}) \}_{j=1}^m$ is a basis for $V \oplus W$. 

### Internal Direct Sum

>[!Definition]
> Suppose $W_{1}, W_{2}, \dots W_{k}$ are subspaces of $W$. Define
>  $$
>  \begin{align}
> W_{1} + W_{2} + \dots + W_{k}  & = \text{Span} \left( W_{1} \ \cup \ W_{2} \ \cup \ \dots \ \cup W_{k}\right)\\
 & = \{ w_{1} + w_{2} + \dots + w_k \mid w_{i} \in W_{i}\}
\end{align}
>  $$
> 

**Linear Independence**
Call $w_{1}, \ w_{2},\  \dots \ w_{3}$ linearly independent if $$
w_{1} + w_{2}+\dots +w_{k} = 0 \ \implies w_{i} = 0 \tag{$w_i \in W_{i}$} $$
**Relation with External Direct Sum**
For $W_{1}, W_{2} \subseteq V$, define
$$
\begin{align}
S : W_{1} \oplus W_{2} \to V \\
(w_{1}, w_{2}) \mapsto w_{1} + w_{2} \tag{$w_{1} \in W_{1} , \ w_{2} \in W_{2}$}
\end{align}
$$
Notice that $S$ is linear and that $\mathrm{Im} \ S = W_{1} + W_{2}$.

We define $\ker S$ as $\{ (w_{1}, w_{2}) \ \mid \ w_{1} \in W_{1} \, , \ w_{2} \in W_{2} \, , \ w_{1} + w_{2} = 0 \}$. It is clear that $\ker S$ contains only those $w_{1} \in W_{1}$ and $w_{2} \in W_{2}$ such that $w_{1} = - w_{2} = w \text{ (say)}$. As subspaces are closed under scalar multiplication, $w \in W_{1} \cap W_{2}$. We may redefine $\ker S$ as follows,
$$
\ker S = \{ (w, -w) \ \mid \ w \in W_{1} \cap W_{2} \}
$$
We may even define $T : \ker S \to W_{1} \cap W_{2}$ such that $(-w, w) \mapsto w$. We can see that $T$ is a linear map. In fact, $T$ is an isomorphism!
$$
\ker S \cong W_{1} \cap W_{2}
$$
Using the [[Algebra1_L10#Rank-nullity theorem|Rank Nullity Theorem]], 
$$
\begin{align}
\dim \text{Domain of S} &= \dim \ker S \ + \ \dim \mathrm{Im} \ S \\
\dim \ (W_{1} \oplus  W_{2})  & = \dim \ker S \ + \ \dim\  (W_{1} + W_{2})\\ 
\dim \ (W_{1} + W_{2})  & = \dim W_{1} + \dim W_2 - \dim (W_{1} \cap W_{2})\\ 
\end{align}
$$
>[!Corollary]
> $$
> \dim \left( \sum_{i=1}^n W_{i} \right) = \sum_{i=1}^{n} (-1)^{k+1} \left(\sum_{1 \leq i_{1}<\dots<i_{k} \leq n} \dim(W_{i_{1}} \cap \dots \cap W_{i_{k}})\right)
> $$

>**Alternate Proof**
> Let a basis of $W_{1} \cap W_{2}$ be $\alpha_{1}, \alpha_{2},\dots,\alpha_{k}$ 
> We may extend this to a basis of $W_{1}$ by appending $\beta_{1}, \beta_{2}, \dots, \beta_{l}$
> We may extend this to a basis of $W_{2}$ by appending $\gamma_{1}, \gamma_{2}, \dots, \gamma_{m}$
> It is clear that
> $$
> \begin{align}
> \dim (W_{1} + W_{2}) &= k + l + m\\
>  &= (k + l) + (k+m) - k\\
>  &= \dim{W_{1}}+ \dim W_{2} - \dim(W_{1} \cap W_{2})\\
\end{align}
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
> W_{1}, W_{2} \text{ linearly independent} \iff W_{1} \cap W_{2} = \{0\}
> $$
> For $k = 3$,
> $$
> W_{1}, W_{2}, W_{3} \text{ linearly independent} \implies W_{1} \cap W_{2} = W_{2} \cap W_{3} = W_{3} \cap W_{1} = \{0\}
> $$
> Note that the backwards implication is not true for $k \geq 3$. 
## Determinants

A determinant is a function defined as follows
$$
\det : M_{n \times n} \to \mathbb{R}
$$
which satisfies the following properties
1) A row operation ($R_{i} \to R_{i} + \lambda R_{j}$) on the matrix does not change the determinant
2) Scaling a row scales the determinant
3) Swapping rows negates the determinant
4) $\det I_{n} = 1$

>[!Proposition]
> We may compute the determinant of a matrix $A$ by using row operations.
> 
> **Claim:** $\text{RREF} (A) =$ product of the diagonal entries of $\text{RREF}(A)$. [[Algebra1_L15|proof]]
> 
> Using the properties of the determinant, we get
> $$
> \det A = {(-1)^r}\, \frac{\text{ Product of diagonal entries of RREF}(A)}{\text{Product of Scaling Factors}}
> $$
> where $r$ is the number of rows swapped.
 
