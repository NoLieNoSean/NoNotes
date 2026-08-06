---
id: "503"
date: 2026-08-04
time: 09:40
tags:
---
> [!Proposition]
> Let $M$ be a finitely generated $A$-module. Let $\mathfrak{a}$ be an ideal of $A$. Let $\varphi:M\to M$ be such that $\varphi(M)\subseteq \mathfrak{a}M$. Then $\varphi$ satisfies an equation
> $$
> \varphi^{n}+a_{1}\varphi^{n-1}+\dots+a_{n}=0,
> $$
> where $a_{i}\in \mathfrak{a}$. 
> 
> > [!Proof]-
> > 
> > Let $x_{1}, \dots, x_{n}$ be a set of generators of $M$. Then
> > $$
> > \varphi(x_{i})\in \mathfrak{a}M\quad \forall i.
> > $$
> > Therefore, we can write
> > $$
> > \varphi(x_{i})=\sum_{j=1}^{n} a_{ij}x_{j}\quad a_{ij}\in \mathfrak{a}.
> > $$
> > It follows that
> > $$
> > \sum_{j=1}^{n} (\delta_{ij}\varphi-a_{ij})x_{j}=0.
> > $$
> > Let $B$ be the matrix $(\delta_{ij}\varphi-a_{ij})$; so $B\mathbf{x}=\mathbf{0}$. Recall the identity $B^{*}B=(\det B)I_{n}$ (yes, this works over commutative rings. look it up). Left multiply the equation $B\mathbf{x}=\mathbf{0}$ by $B^{*}$ to get $(\det B)I_{n}\mathbf{x}=\mathbf{0}$. It follows that $\det B=0$; $\det B$ is a monic degree $n$ polynomial in $\varphi$. 
> 

^821811

# Nakayama's Lemma


> [!Definition] Jacobson radical
> Let $A$ be a ring. The **Jacobson radical** of $A$ is defined as the intersection of all the maximal ideals of $A$. 


> [!Proposition]
> Let $J(A)$ be the Jacobson radical of $A$. Then
> $$
> x\in J(A)\iff 1-xy\text{ is a unit in }A\,\forall y\in A.
> $$
> 
> > [!Proof]-
> > 
> > Suppose $1-xy$ is not a unit for some $y\in A$. Then $1-xy\in \mathfrak{m}$ for some maximal ideal of $A$. But $x\in J(A)$, so $x\in \mathfrak{m}$, so $xy\in \mathfrak{m}$, so $1\in \mathfrak{m}$, a contradiction. 
> > 
> > Conversely, suppose $x\not\in \mathfrak{m}$ for some maximal ideal $\mathfrak{m}$. Then $\langle \mathfrak{m}, x \rangle=A$. Therefore, $1=u+xy$ for some $u\in \mathfrak{m}$ and $y\in A$. Thus, $1=xy\in \mathfrak{m}$, and $1=xy$ is not a unit. 
> 

^ce0d26

> [!Theorem] Nakayama's Lemma
> Let $M$ be a finitely generated $A$-module. Let $\mathfrak{a}$ be an ideal of $A$ such that $\mathfrak{a}M=M$. Then there exists $x\equiv 1\mod \mathfrak{a}$ such that $xM=0$. Moreover, if $\mathfrak{a}$ is in the Jacobson radical of $A$, then $M=0$. 
> 
> > [!Proof]-
> > 
> > Take $\varphi=\mathrm{id}$. Using [[#^821811]], for some $a_{i}\in \mathfrak{a}$, we have
> > $$
> > \begin{align}
> > \mathrm{id}^{n}+a_{1}\mathrm{id}^{n-1}+\dots+a_{n}\mathrm{id} & =0 \\
> > (1+a_{1}+\dots+a_{n})\mathrm{id} & =0
> > \end{align}
> > $$
> > Take $x$ to be $1+a_{1}+\dots+a_{n}$. 
> > 
> > Moreover, suppose $\mathfrak{a}\subseteq J(A)$. This implies that $x-1\in J(A)$. Thus, by [[#^ce0d26]], $x$ is a unit. Also, since $xM=0$, $M$ must be the trivial module. 

## Applications

We say that $A$ is a local ring if it has a unique maximal ideal. Denoted by $(A, \mathfrak{m})$. 

> [!Proposition]
> Let $(A, \mathfrak{m})$ be a local ring. Let $M$ be a finitely generated $A$-module. Let $\{ x_{1}, \dots, x_{n} \}$ be the elements of$M$ whose images in $M/\mathfrak{m}M$ forms a basis for this vector space. Then $\{ x_{1}, \dots, x_{n} \}$ generates $M$. 
> 
> > [!Proof]-
> > 
> > Define $N=\langle x_{1}, \dots, x_{n} \rangle\subseteq M$. Thus, $N\hookrightarrow M\to M/\mathfrak{m}M$ is surjective, and $N+\mathfrak{m}M=M$. 
> > 
> > Since $M$ is finitely generated, $M/N$ is also finitely generated. Apply nakayama on $M/N$ to get $N=M$. 