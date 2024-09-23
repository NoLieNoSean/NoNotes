---
tags:
  - ALG1
  - Lecture
---

2024-09-17, Tuesday
1357

---

## Recall

>[!Recall]
>1. An $r\times c$ matrix $A$. $f_{A}:\mathbb{R}^{c}\to \mathbb{R}^{r}$. $f_{A}(\mathbf{x})=A\mathbf{x}$. kernel of $f_{A}$ $\subset \mathbb{R}^{c}$, image of $f_{A}\subset \mathbb{R}^{r}$. 
>2. dim(ker $f_{A}$) = # non pivot columns in RREF(A).
>3. dim(Im$f_{A}$) = # of pivot columns in RREF(A). 
>4. Rank nullity theorem

## Linear maps

>[!Definition]
>A map $T:V\to W$ is called *linear* if it satisfies 
>1. $T(\mathbf{v}_{1}+\mathbf{v}_{2})=T(\mathbf{v}_{1})+T(\mathbf{v}_{2})$.
>2. $T(c\mathbf{v})=cT(\mathbf{v})$ for all $c\in \mathbb{R}$, $\mathbf{v}\in V$

linear map aka linear transformation

The goal: to show " dim(ker T)+ dim(Im T)=dim V" for any linear map $T$.

Remarks (prove as necessary)
1. A linear map $T$ is a map that preserves the vector space structure, i.e, first adding in V and then applying T is the same as applying T first and then adding in W.
2. Clearly, $T$ preserves linear combinations.
3. Kernel of $T$ is a subspace. 
	1. $T$ must always map $\mathbf{0}_{V}$ to $\mathbf{0}_{W}$ ($T(\mathbf{0})=T(0\cdot\mathbf{0})=0T(\mathbf{0})=\mathbf{0}$)
	2. $T(\mathbf{v}_{1})=0, T(\mathbf{v}_{2})=0$ implies $T(\mathbf{v}_{1}+\mathbf{v}_{2})=0$.
4. Image of $T$ is a subspace of $W$.
5. If $S\subset V$ spans $V$, then $T(S)$ spans $T(V)$, i.e, image of $T$.
6. if $S\subset V$ is linearly dependent, then $T(S)$ is linearly dependent.

### Examples

1. the set of functions $f_{A}$ associated with $r\times c$ matrices
2. $V$= set of all differentiable functions $f:\mathbb{R}\to\mathbb{R}$
   $W$= set of all functions $g:\mathbb{R}\to \mathbb{R}$.
   Consider $D:V\to W$, $D(f)=f'$.
   $(f+g)'=f'+g'$, $(cf)'=cf'$.
   The kernel of $D$ is the set of all constant functions.
   
   Consider the same map on the subspace $P_{n}$ of polynomial of degree $\le n$.
   $P_{n}\underbrace{ \to }_{ D }P_{n-1}$ 
   ^dim=n+1  ^dim=n
   Dim(ker D)=1
   So, dim(ker D)+dim(Im D)=dim(Domain D).
3. $V$= set of $n\times n$ matrices. 
   $W=\mathbb{R}$
   $T: V\to W$, $T(A)=\text{Tr }(A)$.
   Check the dimension formula holds, find a basis for the kernel.


>[!Theorem]
>For a linear map $T:V\to W$, where $V$ is a fdvsp, dim(ker T) + dim(im T)= dim V.

>**Proof**
>We will show: (Basis of ker $T$) $\bigcup$ (a disjoint set of size dim Im T)=(a basis of $V$).
>Take a basis $\mathbf{k}_{1}, \mathbf{k}_{2}, \dots, \mathbf{k}_{t}$ of ker T
>Extend to get a basis $\mathbf{k}_{1}, \dots, \mathbf{k}_{t}, \mathbf{v}_{1}, \dots, \mathbf{v}_{r}$ of $V$.
>Dim Ker T = t, dim V = t+r
>To show: dim Im T = r.
>Guess: $T(\mathbf{v}_{1}), T(\mathbf{v}_{2}), \dots, T(\mathbf{v}_{r})$ is a basis of $\mathrm{Im}(T)$. 
>
>1) these vectors span Im T:
>Since $\{\mathbf{k}_{1}, \dots, \mathbf{k}_{t}, \mathbf{v}_{1}, \dots, \mathbf{v}_{r}\}$ is a basis of $V$, $\{ T(\mathbf{k}_{i}) \}_{1}^{t}$ and $\{ T(\mathbf{v}_{j}) \}_{1}^{r}$ span $T(V)=\mathrm{Im} (T)$
>
>2) these vectors are linearly independent:
>Consider a linear combination of  the vectors thats equals 0.
>$\sum_{i=1}^{r}c_{i}T(\mathbf{v}_{i})=\mathbf{0}$.
>Then, $T\left( \sum_{i=1}^{r}c_{i}\mathbf{v}_{i} \right)=0$
>therefore, $\sum_{i=1}^{r}c_{i}\mathbf{v}_{i}\in\text{Ker }(T)$.
>so, $\sum_{i=1}^{r}c_{i}\mathbf{v}_{i}=\sum_{j=1}^{t}a_{j}\mathbf{k}_{j}$
>so, $\sum_{i=1}^{r}c_{i}\mathbf{v}_{i}-\sum_{j=1}^{t}a_{j}\mathbf{k}_{j}=0$
>since $\mathbf{k}_{1}, \dots, \mathbf{k}_{t}, \mathbf{v}_{1}, \dots, \mathbf{v}_{r}$  forms a basis of $V$, all $c_{i}$ and $a_{i}$ must be $0$. Thus, $T(\mathbf{v}_{1}), T(\mathbf{v}_{2}), \dots, T(\mathbf{v}_{r})$ are linearly independent. 