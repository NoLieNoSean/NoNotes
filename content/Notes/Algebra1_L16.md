---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-10-15
time: 14:00
---
## Another formula for determinants

Let $M$ be an $n\times n$ matrix. Let $M_1,M_2,...,M_n$ be the rows of $M$.

We have $M_{i}^{t}= \begin{bmatrix} m_{i1}\\ m_{i2} \\ \cdots \\ m_{in} \end{bmatrix} = \sum\limits_{j = 1}^{n}m_{ij}e_{j}$ where $e_j$ is the $j$th vector of the standard basis in canonical order. 

Now, the determinant can be thought of as a function of the row vectors of $M$:

$$
\mathrm{det}(M_{1}^{t},M_{2}^{t},\cdots,M_{n}^{t})= \mathrm{det}\left(\sum\limits_{j = 1}^{n}m_{1j}e_{j},\sum\limits_{j = 1}^{n}m_{2j}e_{j},\cdots,\sum\limits_{j = 1}^{n}m_{nj}e_{j}\right).
$$

By [[Algebra1_L15#Multilinearity|multilinearity]] of the determinant, we have
$$
\mathrm{det}\left(\sum\limits_{j = 1}^{n}m_{1j}e_{j},\sum\limits_{j = 1}^{n}m_{2j}e_{j},\cdots,\sum\limits_{j = 1}^{n}m_{nj}e_{j}\right) = \sum\limits_{i_1,i_2,...,i_n}m_{1i_{1}}m_{2i_{2}}...m_{ni_{n}}\det(e_{i_1},e_{i_2},...,e_{i_n})
$$
where $i_{k}\in \{1,..,n\}$.

The antisymmetry property implies that $\det(e_{i_{1}},...,e_{i_{n}}) = 0$ if $i_{k}= i_l$ for $k\neq l$
Therefore we only need to consider the case when all the $i_k$ are pairwise distinct, i.e, a permutation of $\{1,..,n\}$. 
### Permutation groups

>[!definition]
>A bijection of $\{1,..,n\}$ with itself is defined to be a *permutation* of $\{1,..,n\}$. $S_n$ is denoted as the set of permutations of $\{1,..,n\}$.

The elements of $S_n$ are functions. If $\sigma\in S_n$, we write $\sigma(i) = \sigma_i$.

>[!definition]
>The *length* of a permutation $\sigma$ is defined as $l(\sigma) \equiv  \left|\left\{(i,j) \ | \  i < j \text{ and } \sigma_{i}>\sigma_{j}\right\}\right|$. 

**Exercise:** Show that a permutation $\sigma$ can be reordered to $1, 2, \dots, n$ using $l(\sigma)$ swaps.

### Back to determinants

From our study above, we see that 
$$
\det(e_{\sigma_1},e_{\sigma_2},...,e_{\sigma_{n}})= (-1)^{l(\sigma)}.
$$
Define the quantity
$$
(-1)^{l(\sigma)} \equiv \mathrm{sgn}(\sigma).
$$
Thus, 
$$
\det M=\sum_{\sigma\in S_{n}}^{} \mathrm{sgn}(\sigma)\ m_{1\sigma_{1}}m_{2\sigma_{2}}\dots m_{n\sigma_{n}}.
$$
Note that we have arrived at this formula by using every single one of the [[Algebra1_L15#New defining properties|defining properties of the determinant]] (contrast with what we have done previously, which is to present a formula and show that it satisfies the defining properties). This tells us that the determinant must indeed be uniquely determined, meaning that there is only one map from $\mathbb{R}^{n\times n}$ to $\mathbb{R}$ which satisfies the defining properties. The upshot of this is that all formulas covered in previous lectures for the determinant are equivalent.

---
## Properties of the determinant

### Only singular matrices  have zero determinant 

>[!Theorem]
>$\det A = 0 \iff A$ is not invertible.

>**Proof**
>$A$ is invertible 
>$\implies$ $\mathrm{RREF}(A) = id$
>$\implies \det(A) \neq 0$
>
>$A$ is not invertible
>$\implies$ $\mathrm{RREF(A)}$ has a zero row
>$\implies$ $\det(\mathrm{RREF}(A)) = 0$
>$\implies \det(A) = 0$
>❏

>[!Theorem] Corollary
>If $A$ is an $n\times n$ matrix and the rows of $A$ are linearly dependent, then $\det(A) = 0$

### Multiplicativity

>[!Theorem]
>$\det AB = \det A\det B$.

>**Proof**
>*Case 1:* $A$ is not invertible.
>In this case, the product $AB$ will not be invertible. Thus we have
>$$\det AB = 0 = 0\cdot\det B = \det A\det B.$$
>
>*Case 2:* A is invertible.
>Define the function $\mathrm{d}(B) = \frac{\det AB}{\det A}$.
>This is well defined, since $\det A \neq 0$.
>Observe that $\mathrm{d}$ satisfies the defining properties of the determinant. Therefore, $\mathrm{d}(B) = \det B$. ❏

>[!Theorem] Corollary
>$\det A^{n} = (\det A)^n$.

>[!Theorem] Corollary
>$\prod_{i=1}^{n}A_i$ is invertible $\iff$ each $A_i$ is invertible.

### Determinant of transpose

>[!Theorem]
>$\det(A) = \det(A^T)$

>**Proof**
>Consider the function $f(A) \equiv \det A^T$. It is clear that $f$ satisfies the defining properties of the determinant. Thus, $f=\det$. ❏

Thus, all statements about row operations etc. can be made about column operations.

---
## Invariant Subspaces

>[!Definition]
>Let $W\subseteq V$  be a subspace of $V$. $W$ is said to be *invariant* under a linear map $T$, or $T-$invariant, if $T(W)\subseteq W$.

In other words, $W$ is $T$ invariant whenever $T(w)\in W \impliedby w\in W$.

We can now define a linear map from $W$ to $W$ called the restriction of $T$ to $W$:

>[!Definition]
>If $W$ is a $T-$invariant subspace, we define the *restriction* of $T$ to $W$ denoted by $T|_{W} : W \mapsto W$ given by $T|_{W}(w) = T(w)$.

Let $T:V\mapsto V$ be a linear map. If $W$ is a $T-$invariant subspace, we can take a basis $\beta_{W}=(w_1,w_2,...,w_k)$ of $W$ and extend it to a basis $\beta_{V} = (w_1,w_2,...,w_k,v_1,v_2,...,v_{n-k})$ of $V$ where $n = \dim V$.
### What will the matrix of $T$ with respect to $\beta_v$ look like?

The first $k$ columns of a $\mathcal{M}_{\beta_{V}, \beta_{V}}(T)$ will be the image of $w_i$'s , but since all of them map into $W$, they are expressible as linear combinations of $w_{i}$'s.

This is nice, since the coordinates corresponding to $v_1,v_2,...,v_{n-k}$ in the vectors $T(w_1),T(w_2),..,T(w_k)$ will be zero. The matrix will look like
$$
\mathcal {M}_{\beta_{V}, \beta_{V}}(T)= \left[\begin{array}{c|c}
A &B\\
\hline
0 & C
\end{array}\right].
$$
Another upshot is that $A = \mathcal{M}_{\beta_W, \beta_{W}}(T|_{W})$.

If it happens that $V = W_{1} \oplus W_{2}$ (i.e, $W_{1}$ and $W_{2}$ are linearly independent and span $V$) and $W_1$ , $W_2$ are $T-$ invariant with bases $\beta_{W_{1}}= (w_1,w_2,...,w_k)$ and $\beta_{W_{2}}= (w_1',w_2',...,w_{n-k}')$ then the matrix of $T$ in the basis $\beta_{V} = (w_1,w_2,...,w_k,w_1',w_2',...,w_{n-k}')$ will look like
$$
\mathcal{M}_{\beta_{V}, \beta_{V}}(T)= \left[\begin{array}{c|c}
A& 0\\
\hline
0&B
\end{array}\right]
$$
where $A = \mathcal{M}_{\beta_{W_{1}}, \beta_{W_{1}}}(T), B = \mathcal{M}_{\beta_{W_2}, \beta_{W_{2}}}(T)$. 