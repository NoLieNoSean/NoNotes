---
tags:
  - ALG1
  - Lecture
date: 2024-10-15
time: 14:00
---
## Determinants
### Another Formula

Let $M$ be an $n\times n$ matrix. Let $M_1,M_2,...,M_n$ be the rows of the matrix. We have 
$$
M_{i}^{T}= \begin{bmatrix} M_{i1}\\ M_{i2} \\ \cdots \\ M_{in} \end{bmatrix} = \sum\limits_{j = 1}^{n}M_{ij}e_{j}
$$
where $e_j$ is the $j^{th}$ vector of the standard basis in canonical order. Now, the determinant can be thought of as a function of the row vectors of $M$, that is

$$
\mathrm{det}(M_{1}^{T},M_{2}^{T},\cdots,M_{n}^{T})= \mathrm{det}\left(\sum\limits_{j = 1}^{n}M_{1j}e_{j},\sum\limits_{j = 1}^{n}M_{2j}e_{j},\cdots,\sum\limits_{j = 1}^{n}M_{nj}e_{j}\right)
$$
By multilinearity of the determinant, we have
$$
\mathrm{det}\left(\sum\limits_{j = 1}^{n}M_{1j}e_{j},\sum\limits_{j = 1}^{n}M_{2j}e_{j},\cdots,\sum\limits_{j = 1}^{n}M_{nj}e_{j}\right) = \sum\limits_{i_1,i_2,...,i_n}M_{1i_{1}}M_{2i_{2}}...M_{ni_{n}}\det(e_{i_1},e_{i_2},...,e_{i_n})
$$
where $i_{k}\in \{1,..,n\}$.

>[!Info] Permutations
>A permutation is defined to be a bijection of the set $\mathcal{N}=\{ 1,2,\dots ,n \}$ to itself. We define $S_{n}$ to be the set of all permutations of $\mathcal{N}$. The elements of $S_{n}$ are functions. For some $\sigma \in S$, $\sigma(i)$ is denoted by $\sigma_{i}$.
>
>Define the length of a permutation $\sigma$ as
>$$
>l(\sigma) \overset{\text{def}}= \text{card}\, \{ (i,j) \mid i < j \text{ and } \sigma(i) > \sigma(j)\}
>$$
>We claim that a permutation $\sigma$ can be reordered using $l(\sigma)$ swaps.
>We define another quantity
>$$
>\text{sign}(\sigma) = {(-1)}^{l(\sigma)}
>$$ 


The anti-symmetry property implies that $\det(e_{i_{1}},...,e_{i_{n}}) = 0$ if $i_{m}= i_n$ for $m\neq n$. Therefore, we need only consider the case when all the $i_k$ are pairwise distinct, that is a permutation of $\{1,..,n\}$.

Using the fact that swapping rows of a determinant introduces a minus sign and that $\det I_{n} = 1$, 
we conclude
$$
\begin{align}
\det M&= \sum\limits_{i_1,i_2,...,i_n}M_{1i_{1}}M_{2i_{2}}...M_{ni_{n}}\det(e_{i_1},e_{i_2},...,e_{i_n}) \\
 & =\sum_{\sigma \in S_{n}} M_{1\sigma_{1}}M_{2\sigma_{2}}\dots M_{n\sigma_{n}}\det(e_{\sigma_{1}}, e_{\sigma_{2}}, \dots, e_{\sigma_{n}})\\
 & =\sum_{\sigma \in S_{n}} M_{1\sigma_{1}}M_{2\sigma_{2}}\dots M_{n\sigma_{n}}\text{sign}(\sigma)
\end{align}
$$

>[!error] Note
>During the course of this proof, we have used all the axioms from the definition of the determinant. Hence this resulting formula must be unique.

### Properties


#### 1) $\det A = 0 \iff A$ is not invertible

>**Proof**
>
> Case (1)
> $$
> \begin{align}
>  & A \text{ is invertable} \\
> \implies  & \text{RREF}(A) = I_{n} \\
> \implies  & \det(A) \neq 0 
> \end{align}
> $$
> Case (2)
> $$
> \begin{align}
>  & A \text{ is not invertable} \\
> \implies  & \text{RREF}(A) \text{ has a zero row} \\
> \implies  & \det(\text{RREF}(A)) = 0\\ 
> \implies  & \det(A) = 0 
> \end{align}
> $$

>[!Corollary]
>If $A$ is an $n\times n$ matrix and the rows of $A$ are linearly dependent, then $\det(A) = 0$


#### 2) $\det(AB) = \det(A)\det(B)$

>**Proof**
>
>_Case 1_: $A$ is not invertible
>In this case, the product $AB$ will not be invertible, for if $(AB)^{-1}$ did exist then $B(AB)^{-1}$ would be an inverse of $A$ which is a contradiction.
>Thus we have
>$$
>\det(AB) = 0 = 0\cdot\det(B) = \det(A)\det(B)
>$$
>_Case 2_: A is invertible
>Define the function $f(B) = \frac{\det(AB)}{\det(A)}$. This is well defined, since $\det(A) \neq 0$.
>Observe that $f$ satisfies all the determinant axioms, hence $f(B) = \det(B)$.

>[!Corollary]
>	- $\det(A^{n})= \det(A)^n$
>	- $\prod_{i=1}^{n}A_i$ is invertible $\iff$ each $A_i$ is invertible


#### 3) $\det A = \det A^T$

>**Proof**
>consider the function $f(A) = \det A^T$
>Prove that $f$ is a determinantal map and therefore $f(A) = \det(A)$
> 


## Invariant Subspaces

>[!Definition]
>A subspace $W$ of $V$ is said to be invariant under a linear map $T$, or $T-$invariant, if $T(W)\subseteq W$, that is $w \in W \implies T(w) \in W$.
>
>For such $T$-invariant subspaces, we can define a linear map $T|_{W}:W \to W$ called the restriction of $T$ to $W$.

Let $T:V \to V$ be a linear map. If $W$ is a $T-$invariant subspace, we can take a basis $(w_1,w_2,...,w_k)$ of $W$ and extend it to a basis $\beta_{V} = (w_1,w_2,...,w_k,v_1,v_2,...,v_{n-k})$ of $V$ where $n = \dim V$ and $k = \dim W$.

### Matrix of T with respect to $\beta_{V}$

The first $k$ columns of $T$ will be the image of the $w_is$.Since all $T(w_{i}) \in W$, they are expressible as linear combinations of only the vectors in $W$. Thus the matrix of $T$ with respect to the basis $\beta_V$ will look like:
$$
{M}_{\beta_{V}, \beta_{V}}{(T)}= \left[\begin{array}{c|c}
A &B\\
\hline
0 & C
\end{array}\right]
$$

Also notice that $A = M_{\beta_{W}, \beta_{W}}(T|_{{W}})$ where $\beta_{W} = (w_{1}, w_{2},\dots,w_{n})$

### Matrix of $T$ when $V = W_{1} \oplus W_{2}$

If it happens that $V = W_{1} \oplus W_{2}$ where  $W_1$ and $W_2$ are $T$-invariant with bases $\beta_{W_{1}}= (w_1,...,w_k)$ 
$\beta_{W_{2}}= (w_1',...,w_{n-k}')$
$\beta_{V}= (w_{1},\dots,w_{k}, w_{1}', \dots, w_{k}')$
then the matrix of $T$ will be $$
M_{\beta_{V}, \beta_{V}}(T)= \left[\begin{array}{c|c}
A& 0\\
\hline
0&B
\end{array}\right]$$
where $A = M_{\beta_{W_{1}},\beta_{W_{1}}}(T), B = {M}_{\beta_{W_2}, \beta_{W_{2}}}(T)$
