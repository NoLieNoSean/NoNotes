---
tags:
  - ALG1
  - Lecture
  - Processed
date: 2024-09-17
time: 13:57
---
## Recall

>[!Recall]
>1. An $r\times c$ matrix $A$. $f_{A}:\mathbb{R}^{c}\to \mathbb{R}^{r}$. $f_{A}(\mathbf{x})=A\mathbf{x}$. kernel of $f_{A}$ $\subset \mathbb{R}^{c}$, image of $f_{A}\subset \mathbb{R}^{r}$. 
>2. Dim(Ker $f_{A}$) = # non pivot columns in RREF(A).
>3. Dim(Im$f_{A}$) = # of pivot columns in RREF(A). 
>4. Rank nullity theorem

---
## Linear maps

>[!Definition]
>A map $T:V\to W$ is called *linear* if it satisfies 
>1. $T(\mathbf{v}_{1}+\mathbf{v}_{2})=T(\mathbf{v}_{1})+T(\mathbf{v}_{2})$.
>2. $T(c\mathbf{v})=cT(\mathbf{v})$ for all $c\in \mathbb{R}$, $\mathbf{v}\in V$

Linear map and linear transformation are synonyms.

The goal: to show "Dim(Ker $T$)+ Dim(Im $T$)=Dim $V$" for any linear map $T:V\to W$.

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

1. The set of functions $f_{A}$ associated with $r\times c$ matrices
2. $V$= set of all differentiable functions $f:\mathbb{R}\to\mathbb{R}$.
   $W$= set of all functions $g:\mathbb{R}\to \mathbb{R}$.
   Consider $D:V\to W$, $D(f)=f'$.
   $(f+g)'=f'+g'$, $(cf)'=cf'$.
   The kernel of $D$ is the set of all constant functions.
   
   Consider the same map on the subspace $P_{n}$ of polynomial of degree $\le n$.
   $P_{n}\overset{ \text{D} }\to P_{n-1}$ .
   $P_{n}$ has dimension $n$, and $P_{n-1}$ has dimension $n-1$. Also, Dim(Ker $D$) = 1. 
   So, Dim(Ker D)+Dim(Im D)=Dim(Domain D).
3. $V$= set of $n\times n$ matrices. 
   $W=\mathbb{R}$
   $T: V\to W$, $T(A)=\text{Tr }(A)$.
   Check the dimension formula holds, find a basis for the kernel.

---
## Rank nullity theorem for general linear maps over fdvsps

>[!Theorem]
>For a linear map $T:V\to W$, where $V$ is a fdvsp, dim(ker T) + dim(im T)= dim V.

>**Proof**
>We will show that (Basis of ker $T$) $\cup$ (some disjoint set of size dim Im T)=(a basis of $V$). Take a basis $\mathbf{k}_{1}, \mathbf{k}_{2}, \dots, \mathbf{k}_{t}$ of ker T. Extend it to get a basis $\mathbf{k}_{1}, \dots, \mathbf{k}_{t}, \mathbf{v}_{1}, \dots, \mathbf{v}_{r}$ of $V$. Dim Ker $T$ = $r$, dim $V$ = $t+r$. We have to show that Dim Im $T$ = $r$. We guess that $T(\mathbf{v}_{1}), T(\mathbf{v}_{2}), \dots, T(\mathbf{v}_{r})$ is a basis of $\mathrm{Im}(T)$, i.e, they span $\mathrm{Im}(T)$ and are linearly independent.
>
>
>**These vectors span Im T**
>Since $\{\mathbf{k}_{1}, \dots, \mathbf{k}_{t}, \mathbf{v}_{1}, \dots, \mathbf{v}_{r}\}$ is a basis of (in particular, spans) $V$, $\{T(\mathbf{k}_{1}), \dots, T(\mathbf{k}_{t}), T(\mathbf{v}_{1}), \dots, T(\mathbf{v}_{r})\}$ span $T(V)=\mathrm{Im} (T)$. Since $\{T(\mathbf{k}_{1}), \dots, T(\mathbf{k}_{t})\}$ has span $\{ \mathbf{0} \}$, $\{T(\mathbf{v}_{1}), \dots, T(\mathbf{v}_{r})\}$ must span $\mathrm{Im}(T)$. 
>
>
>**These vectors are linearly independent**
>Consider a linear combination of  the vectors thats equals 0.
>
>$\sum_{i=1}^{r}c_{i}T(\mathbf{v}_{i})=\mathbf{0}$.
>
>Then, $T\left( \sum_{i=1}^{r}c_{i}\mathbf{v}_{i} \right)=\mathbf{0}$. 
>
>Therefore, $\sum_{i=1}^{r}c_{i}\mathbf{v}_{i}\in\text{Ker }(T)$.
>
>So, $\sum_{i=1}^{r}c_{i}\mathbf{v}_{i}=\sum_{j=1}^{t}a_{j}\mathbf{k}_{j}$.
>
>So, $\sum_{i=1}^{r}c_{i}\mathbf{v}_{i}-\sum_{j=1}^{t}a_{j}\mathbf{k}_{j}=0$.
>
>Since $\mathbf{k}_{1}, \dots, \mathbf{k}_{t}, \mathbf{v}_{1}, \dots, \mathbf{v}_{r}$  forms a basis of $V$, all $c_{i}$ and $a_{i}$ must be $0$. In particular, all $c_{i}$ must be $0$. Thus, $T(\mathbf{v}_{1}), T(\mathbf{v}_{2}), \dots, T(\mathbf{v}_{r})$ are linearly independent. ❏