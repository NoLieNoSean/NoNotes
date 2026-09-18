---
id: "560"
date: 2026-09-12
time: 13:50
tags:
  - LIALG
  - Lecture
---
[!Definition]
Let $V$ be a finite dimensional vector space over $F$. Define $K:L\times L\to F$, the **killing form** of $L$,  by $K(x, y)=\mathrm{Tr}(\text{ad}(x)\text{ad}(y))$ for all $x, y\in L$. 

[!Proposition]
1. $K$ is a symmetric bilinear form. 
2. $K$ is associative, i.e., $K([xy], z)=K(x, [yz])$.

[!Definition]
Let $L$ be a Lie algebra over $F$. Let $K$ be the Killing form of $L$. Then, $\text{rad}(K):=\{ x\in L : K(x, y)=0 \forall y\in L\}$. 

[!Lemma]
$\text{rad}(K)$ is an ideal of$L$. Since $K$ is bilinear, $\text{rad}(K)$ is a vector subspace of $L$. 

[!Lemma]
Let $L$ be a Lie algebra over $F$. Let $I$ be an ideal of $L$. Then the restriction of the killing form $K$ of $L$ to $I$ is the killing form $K_{I}$ of $I$. 

[!Proof]-

Step 1: Let $V$ be a finite dimensional vector space over $F$. Let $W$ be a vector subspace of $V$. Let $T\in \text{End}(V)$ be such that $T(V)\subseteq W$. Then we have $\mathrm{Tr}(T)=\mathrm{Tr}(T|_{W})$. 

Proof: one easy way to see this is to use the fact that the trace of a map is the sum of all of its eigenvalues. Kannan's proof (essentially the same idea): if $W=0$, we are done. So, assume that $W\ne 0$. Let $n=\dim(V)$ and $r=\dim(W)$. Choose a basis $\{ v_{1}, \dots, v_{n} \}$ of $V$ such that $\{ v_{1}, \dots, v_{r} \}$ is a basis of $W$. Since $T(V)\subseteq W$, we have $T(v_{j})=\sum_{i=1}^{r}a_{ij}v_{i}$ for $1\leqslant j\leqslant n$. Thus, $a_{jj}=0$ for all $j> r$. Hence, we have $\mathrm{Tr}(T)=\sum_{i=1}^{r}a_{ii}=\mathrm{Tr}(T|_{W})$. 

--

Let $x, y\in I$ be arbitrary. Take $V=L$, $W=I$, $T=\text{ad}(x)\text{ad}(y)$. Then we have $T(V)\subseteq W$. By step 1, ...

---

[!Theorem]
Let $F$ be an algebraically closed field of characteristic zero. Let $L$ be a Lie algebra over $F$. Then $L$ is semisimple iff the killing form of $K$ is nondegenerate. 

[!Proof]-

Let $S:=\text{rad}(K)$. Assume that $L$ is semisimple. 

Claim: $S\subseteq\text{rad}(L)$. By definition of $S$, $K(x, y)=0$ for all $x\in S$ and for all $y\in L$. In particular, $K(x, y)=0$ for all $x\in S$ and for all $y\in[SS]$. On the other hand, since $S$ is an ideal of $L$, by the previous lemma, we have for all $x\in S$ for all $y\in[SS]$,
$$
K_{S}(x, y)=K(x, y).
$$
Thus, $\mathrm{Tr}(\text{ad}_{S}(x)\text{ad}_{S}(y))=0$ for all $x\in S$ and $y\in[\mathbb{S}]$. Hence, by a corollary to Cartan's Criterion, $S$ is solvable. Thus, $S \subseteq \mathrm{Rad}(L)=0$. This shows that if $L$ is semisimple, $K$ is nondegenerate. 

COnversely, suppose $K$ is nondegenerate. It suffices to show that there is no nonzero abelian ideal of $L$, since if there is a nonzero solvable ideal $I\subseteq L$, there exists $n$ such that $D^{n-1}(I)$ is abelian. Thus, let $I$ be an abelian ideal of $L$. Let $x\in I$, $y\in L$ be arbitrary. 

...

---

[!Theorem]
Let $F$ be an algebraically closed field of characteristic zero. Let $L$ be a semisimple Lie algebra over $F$. Then we have the following:
1. $L$ is the direct sum $\bigoplus_{j=1}^{k}I_{j}$ (as Lie algebras) of finitely many nonabelian simple ideals $I_{1}, \dots, I_{k}$. 
2. Any ideal $I\subseteq L$ is of the form $I=\bigoplus_{j\in A}I_{j}$ for some $A\subseteq[k]$. 
3. Any simple ideal of $L$ is equal to $I_{j}$ for some $1\leqslant j\leqslant k$. 
4. The decomposition in (1) is unique. 
5. The restriction of the killing form of $L$ to $I_{j}$ is $K_{I_{j}}$ for every $1\leqslant j\leqslant k$. 


[!Proof]-
$(1)$ Let $I$ be an ideal of $L$. Define $I^{\perp}=\{ x\in L :K(x, y)=0 \forall y\in I\}$. Since $K$ is bilinear and $I$ is a a vector subspace of $L$, $I^{\perp}$ is a vector subspace of $L$. Further, by associativity of $K$, $I^{\perp}$ is an ideal of $L$. By definition of $I^{\perp}$, $K(x, y)=0$ for all $x, y\in I\cap I^{\perp}$. Let $S=I\cap I^{\perp}$. Then $S$ is an deal of$L$. Further, $K(x, y)=0$ for all $x\in S$ and $y\in[SS]$. Also, since $S$ is an ideal of $L$, $K_{S}(x, y)=K(x, y)$ for all $x\in S$ and $y\in S$. In particular, $K_{S}(x, y)=K(x, y)=0$ for all $x\in S$ and $y\in[SS]$. Thus, $\mathrm{Tr}(\text{ad}_{S}(x)\text{ad}_{S}(y))=0$ for all $x\in S$ and $y\in[ SS]$. By a corollary of Cartan's criterion, $S$ is solvable. Since $L$ is semisimple, $S=0$.