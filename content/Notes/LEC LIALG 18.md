---
id: "595"
date: 2026-10-20
time: 14:05
tags:
  - LIALG
  - Lecture
---
[!Recall]
Let $F$ be an algebraically closed field of characteristic zero. Let $L=\mathfrak{sl}(2, F)$. Let $m\in \mathbb{Z}_{m\geqslant 0}$. There is a unique (up to isomorphism) finite dimensional irreducible $L$-module of dimension $m+1$. 

Let $L$ be a semisimple Lie algebra over $F$. Since $L$ is not nilpotent, by Engel's theorem, there is an element $x\in L$ such that $\text{ad}_{L}(x)$ is not nilpotent. Fix such an $x\in L$. Let $x=x_{s}+x_{n}$ be the abstract J-C decomposition. Then $x_{s}\ne 0$. Denote $\text{ad}_{L}$ by $\text{ad}$. 

[!Definition]
An element $x\in L$ is said to be nilpotent (respectively, semisimple) if $\text{ad}(x)$ is nilpotent (respectively, semisimple). 

Thus, there is a nonzero semisimple element in $L$. So, there is a Lie subalgebra of $L$ consisting of semisimple elements (for example, $K=Fx_{s}$). 

[!Definition]
A Lie subalgebra $T$ of $L$ is said to be a toral subalgebra of $L$ if $T$ consists of semisimple elements. 

[!Lemma]
Every toral subalgebra $T\subseteq L$ is abelian. 

[!Proof]-
For every element $x\in T$, $\text{ad}(x)$ is semisimple. Since $\text{ad}(x)(T)\subseteq T$ for all $x\in T$, $\text{ad}_{T}(x)=\text{ad}(x)|_{T}$. So, for every $x\in T$, there is a basis $B$ of $T$ such that the matrix of $\text{ad}_{T}(x)$ relative to $B$ is diagonal. Hence to prove that $T$ is abelian, it suffices to prove that $0$ is the only eigenvalue of $\text{ad}_{T}(x)$ for all $x\in T$. 

Suppose on the contrary, there are nonzero elements $x, y\in T$ such that $\text{ad}_{T}(x)(y)=ay$ for some nonzero $a\in F$. 

Write:
$$
\begin{align}
\text{ad}_{T}(y)(x) & =[yx]=-[xy]=-\text{ad}_{T}(x)(y)=-ay.
\end{align}
$$
$$
\begin{align}
(\text{ad}_{T}(y))^{2}(x)=-a[yy]=0.
\end{align}
$$
On the other hand, since $y\in T$, $\text{ad}_{T}(y)$ is semisimple. So, write $x=\sum_{i=1}^{r}x_{i}$, with $\text{ad}_{T}(y)(x_{i})=\lambda_{i}x_{i}$ for some distinct elements $\lambda_{1}, \dots, \lambda_{r}\in F$. Then, $\text{ad}_{T}(y)(x)=\sum_{i=1}^{r}\lambda_{i}x_{i}$, and $(\text{ad}_{T}(y))^{2}(x)=\sum_{i=1}^{r}\lambda_{i}^{2}x_{i}$. Since $(\text{ad}_{T}(y))^{2}(x)=0$, we must have $r=1$ and $\lambda_{1}=0$. Thus, $a=0$, a contradiction. 

---

Let $H$ be a maximal toral subalgebra of $L$. By above discussion, $H\ne 0$. By previous lemma, $H$ is abelian. Therefore, $\text{ad}(H)$ is abelian. Further, since $H$ is toral subalgebra every element of $\text{ad}(H)$ is semisimple. 

For a linear form $\lambda\in H^{*}$, define
$$
L_{\lambda}:=\{ x\in L:[hx]=\lambda(h)x \,\forall h\in H \}.
$$
Clearly, $L_{\lambda}$ is a vector subspace of $L$. Now, let $\phi=\{ \alpha\in H^{*}\setminus \{ 0 \}:L_{\alpha}\ne 0 \}$. Since the vector subspaces $\{ L_{\alpha}:\alpha\in \phi \}\cup \{ L_{0} \}$ are linearly independent and $L$ is finite dimensional, $\phi$ is finite. Note that $0\ne H\subseteq L_{0}=C_{L}(H)$. We have
$$
L=L_{0}\oplus\bigoplus_{\alpha\in \phi}L_{\alpha}.
$$
This decomposition is called the Cartan decomposition. Elements of $\phi$ are called roots of $L$ relative to $H$. 

[!Lemma]
1. Let $\alpha, \beta\in \phi \cup \{ 0 \}$. Then we have $[L_{\alpha}, L_{\beta}]\subseteq L_{\alpha+\beta}$. Further, for any $\alpha\in \phi$, $\text{ad}(x)$ is nilpotent for every $x\in L_{\alpha}$. 
2. Let $\alpha, \beta\in \phi \cup \{ 0 \}$ be such that $(\alpha+\beta)\ne 0$. Let $K$ be the Killing form of $L$. Then $K(x, y)=0$ for all $x\in L_{\alpha}$ and for all $y\in L_{\beta}$. 

[!Proof]-

$(1)$ Let $x\in L_{\alpha}$, $y\in L_{\beta}$ $h\in H$. 
$$
[h[xy]]=[[hx]y]+[x[hy]]=[\alpha(h)x, y]+[x, \beta(h)y]=(\alpha+\beta)(h)[xy]
$$
Hence, $[L_{\alpha}L_{\beta}]\subseteq L_{\alpha+\beta}$. 

Now, let $\alpha\in \phi$, and let $\beta\in \phi \cup \{ 0 \}$. Now, the set $\mathbb{N}\alpha+\beta$ is an infinite subset of $H^{*}$. Since the nonzero weight spaces $L_{\lambda}$ 

%% see pics %%


[!Corollary]
Let $C=C_{L}(H)$. The restriction of the killing form $K$ to $L$ to $C$ is nondegenerate. 

[!Proof]-

let $x\in C$ be such that $K(x, z)=0$ for all $z\in C$. By part ii of the previous lemma, $K(x, Y)=0$ for all $y\in L_{\beta}$ and $\beta\in \phi$. 

%% see pics%%

---

Let $V$ be a finite dimensional vector space over a field $F$. Let $\langle , \rangle:V\times V\to F$ be a symmetric nondegenerate bilinear form. 