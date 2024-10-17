---
tags:
  - ALG1
  - Lecture
date: 2024-10-15
time: 14:00
---
## Determinants
### Another Formula
Let $M$ be an $n\times n$ matrix.
Let $M_1,M_2,...,M_n$ be the rows of the matrix.
We have $M_{i}^{t}= \begin{bmatrix} M_{i1}\\ M_{i2} \\ \cdots \\ M_{in} \end{bmatrix} = \sum\limits_{j = 1}^{n}M_{ij}e_{j}$ where $e_j$ is the $jth$ vector of the standard basis in canonical order
$$\mathrm{det}(M_{1}^{t},M_{2}^{t},\cdots,M_{n}^{t})= \mathrm{det}\left(\sum\limits_{j = 1}^{n}M_{1j}e_{j},\sum\limits_{j = 1}^{n}M_{2j}e_{j},\cdots,\sum\limits_{j = 1}^{n}M_{nj}e_{j}\right)$$



By multilinearity of the determinant,
$$
\mathrm{det}\left(\sum\limits_{j = 1}^{n}M_{1j}e_{j},\sum\limits_{j = 1}^{n}M_{2j}e_{j},\cdots,\sum\limits_{j = 1}^{n}M_{nj}e_{j}\right) = \sum\limits_{i_1,i_2,...,i_n}M_{1i_{1}}M_{2i_{2}}...M_{ni_{n}}\det(e_{i_1},e_{i_2},...,e_{i_n})
$$
where $i_{k}\in \{1,..,n\}$
The antisymmetry property implies that $\det(e_{i_{1}},...,e_{i_{n}}) = 0$ if $i_{k}= i_l$ for $k\neq l$
Therefore we only need to consider the case when all the $i_k$ are pairwise distinct. I.e, a permutation of $\{1,..,n\}$

### Permutations
We now begin a brief study of permutations in order to simplify the determinant

>[!definition]
>A bijection of $\{1,..,n\}$ with itself is defined to be a permutation of $\{1,..,n\}$. $S_n$ is denoted as the set of permutations of $\{1,..,n\}$

>[!notation]
>Remember the elements of $S_n$ are functions. Suppose $\sigma\in S_n$. We write $\sigma(i) = \sigma_i$

>[!definition]
>Define the length of a permutation $\sigma$ denoted by $l(\sigma) := \# \{(i,j) | i < j \text{ and } \sigma_{i}>\sigma_{j}\}$ where $\# X$ is the number of elements in a set $X$

>[!exercise]
> Show that a permutation $\sigma$ can be reordered using $l(\sigma)$ steps

### Back to determinants
From our study above, we see that 
$$\det(e_{\sigma_1},e_{\sigma_2},...,e_{\sigma_{n})}= (-1)^{l(\sigma)}$$
Define the quantity
$$(-1)^{l(\sigma)} := \mathrm{sgn}(\sigma)$$

Keeping the discussion till now in mind, we see that the determinant must be uniquely determined, meaning that there is only one determinantal map from $\mathbb{R}^{n\times n}$ to $\mathbb{R}$. The upshot of this is that all formulas covered in the previous lectures for the determinant give the same answer.

### Properties of The Determinant

>[!lemma]
>$\det(A) = 0 \iff A$ is not invertible

>**Proof**
>A is invertible 
>$\implies$ $\mathrm{RREF}(A) = id$
>$\implies \det(A) \neq 0$
>
>A is not invertible
>$\implies$ $\mathrm{RREF(A)}$ has a zero row
>$\implies$ $\det(\mathrm{RREF}(A)) = 0$
>$\implies \det(A) = 0$

>[!Corollary]
>If $A$ is an $n\times n$ matrix and the rows of $A$ are linearly dependent, then $\det(A) = 0$

>[!Lemma(Multiplicativity)]
>$\det(AB) = \det(BA)$

>**Proof**
>Case 1: $A$ is not invertible
>In this case, the product $AB$ will not be invertible. Thus we have
>$$\det(AB) = 0 = 0\det(B) = \det(A)\det(B)$$
>Case 2: A is invertible
>Define the function $\mathrm{d}(B) = \frac{\det(AB)}{\det(A)}$ 
>This is well defined, since $\det(A) \neq 0$.
>Observe that $\mathrm{d}$ is a determinantal map. Therefore, $\mathrm{d}(B) = \det(B)$ and we are done.

>[!Corollary]
>$\det(A^{n})= \det(A)^n$
>$\prod_{i=1}^{n}A_i$ is invertble $\iff$ each $A_i$ is inveritble

>[!Proposition]
>$\det(A) = \det(A^t)$


>**Proof**
>consider the function $f(A) = det(A^t)$
> Exercise: prove that $f$ is a determinantal map and therefore $f(A) = \det(A)$
> 

>[!Corollary]
>All statements about row operations etc,. can be made about column operations

## Invariant Subspaces

>[!Definition]
>Let $W\subseteq V$  be a subspace of $V$. $W$ is said to be invariant under a linear map $T$, or $T-$invariant, if $T(W)\subseteq W$

i.e, $W$ is $T$ invariant whenever $T(w)\in W \impliedby w\in W$

This is useful, since we can now define a linear map from $W$
 to $W$ called the restriction of $T$ to $W$
>[!Definition]
>If $W$ is a $T-$invariant subspace, we define the restriction of $T$ to $W$ denoted by $T|_{W} : W \mapsto W$ given by $T|_{W}(w) = T(w)$
>


Let $T:V\mapsto V$ be a linear map. If $W$ is a $T-$invariant subspace, we can take a basis $(w_1,w_2,...,w_k)$ of $W$ and extend it to a basis $\beta_{v} = (w_1,w_2,...,w_k,v_1,v_2,...,v_{n-k})$ of $V$ where $n = \dim V$.

#### What will the matrix of $T$ with respect to $\beta_v$ look like?

1. The first $k$ columns of $T$ will be the image of the $w_is$ , but since all of them map into $W$, they are expressible as linear combinations of only the vectors in $W$. 
2. This is nice, since the coordinates of $(v_1,v_2,...,v_{n-k})$ in the vectors $T(w_1),T(w_2),..,T(w_k)$ will be zero. Thus the matrix of $T$ with respect to the basis $\beta_v$ will look like:
$$
\mathcal{M}_{\beta_{v}}{(T)}= \left[\begin{array}{c|c}
A &B\\
\hline
0 & C
\end{array}\right]
$$


3. Another upshot is that 
$$A = \mathcal{M}_{\beta_w}(T|_{W})$$
where $\beta_{w} = (w_1,w_2,..,w_k)$

##### If the vector space is the direct sum of two invariant subspaces
4. If it happens that $V = W_{1} \oplus W_{2}$ and also  $W_1$ , $W_2$ are $T-$ invariant with bases $\beta_{w_{1}}= (w_1,w_2,...,w_k)$ and $\beta_{w_{2}}= (w_1',w_2',...,w_{n-k}')$ then the matrix of $T$ in the basis $\beta_{V} = (w_1,w_2,...,w_k,w_1',w_2',...,w_{n-k}')$ will look like $$
\mathcal{M}_{\beta_{v}}(T)= \left[\begin{array}{c|c}
A& 0\\
\hline
0&B
\end{array}\right]$$
where $A = \mathcal{M}_{\beta_{w_{1}}}(T), B = \mathcal{M}_{\beta_{w_2}}(T)$
