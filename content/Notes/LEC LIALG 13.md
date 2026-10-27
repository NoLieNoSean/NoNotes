---
id: "573"
date: 2026-10-01
time: 14:19
tags:
  - Lecture
  - LIALG
desc: L-modules
P1: true
---
# L-modules

> [!Definition] $L$-module
> Let $L$ be a Lie algebra over $F$. A finite dimensional vector space $V$ over $F$ is said to be an $L$-module if there is a map $L\times V\to V$ satisfying
> 1. $(ax+by)v=a(xv)+b(yv)$
> 2. $x(av+bw)=a(xv)+b(xw)$
> 3. $[xy]v=xyv-yxv$
> 
> for all $x, y\in L$, $a, b\in F$ and $v, w\in V$. 

^96489f

> [!Remark] modules and representations
> 
> Given an $L$-module $V$, we have a homomorphism of Lie algebras $\varphi:L\to \mathfrak{gl}(V)$, defined by $\varphi(x)(v)=xv$; the facts that $\varphi(x)\in \mathfrak{gl}(V)$ and that $\varphi$ is a Lie algebra homomorphism follow from [[#^96489f]]. 
> 
> Conversely, let $\varphi:L\to \mathfrak{gl}(V)$ be a homomorphism of Lie algebras. For $x\in L$, $v\in V$, define $xv=\varphi(x)(v)$. It can be shown easily that $\varphi$ makes $V$ into an $L$-module. 




Let $L$ be a Lie algebra and $V$ be an $L$-module. Let $V^{*}=\text{Hom}_{F}(V, F)$. $V^{*}$ becomes an $L$-module in a natural way: For $x\in L$, $f\in V^{*}$, $v\in V$, we have
$$
(xf)(v)=f((-x)v)=-f(xv).
$$
The requirements of [[#^96489f]] can be proved easily. 

Let $V$ and $W$ be two $L$-modules. Then $V\otimes W$ is an $L$-module in a natural way. For $x\in L$, $v\in V$, $w\in W$, define
$$
x(v\otimes w)=(xv)\otimes w+v\otimes (xw).
$$
The requirements of [[#^96489f]] can be proved easily. 

> [!Lemma]
> Let $V$ and $W$ be two finite dimensional vector spaces over $F$. Then there is a natural isomorphism $\varphi:V^{*}\otimes W\to \text{Hom}_{F}(V, W)$. 
> 
> > [!Proof]-
> > 
> > For $f\in V^{*}$, $w\in W$, define $\tilde{(f, w)}:V\to W$ by $\tilde{(f, w)}(v)=f(v)(w)$ for all $v\in V$. Since $f$ is $F$-linear, $\tilde{(f, w)}$ is $F$-linear. Show that the map $\varphi:V^{*}\times W\to \text{Hom}(V, W)$ defined by $(f, w) \mapsto \tilde{(f, w)}$ is bilinear. The universal property of tensor products gives us an $F$-linear map $\varphi:V^{*}\otimes W\to \text{Hom}_{F}(V, W)$. 
> > 
> > $\varphi$ is surjective: For $T\in \text{Hom}(V, W)$ have matrix $[a_{ij}]$ in bases $\{ v_{1}, \dots, v_{n} \}$ and $\{ w_{1}, \dots, w_{m} \}$. Let $\{ f_{1}, \dots, f_{n} \}$ be the dual basis of $\{ v_{1}, \dots, v_{n} \}$. Define
> > $$
> > S=\sum_{i=1}^{m}\sum_{k=1}^{n} a_{ij}f_{k}\otimes w_{i}. 
> > $$
> > Easy to see that $\varphi(S)=T$. 
> > 
> > Since $V^{*}\otimes W$ and $\text{Hom}(V, W)$ are finite dimensional vector spaces of the same dimension, it follows that $\varphi$ is an isomorphism. 
> 

So, if $V$ and $W$ are $L$-modules, $\text{Hom}(V, W)$ can be viewed as an $L$-module via the above isomorphism. This can de described directly:
$$
(xf)(v)=xf(v)-f(xv).
$$
Note that $f\in \text{Hom}(V, W)$ is a $L$-module homomorphism iff $xf=0$ for all $x\in L$. 


---
# Irreducible modules

> [!Definition]
> An $L$-module $V$ is called **irreducible** if it has precisely two $L$-submodules (itself and $0$). In particular, we do not regard a zero dimensional vector space as an irreducible $L$-module. 

^72fd39

$L$ is itself an $L$-module (for the adjoint representation). An $L$-submodule is just an ideal, so it follows that a simple algebra $L$ is an irreducible $L$-module. 

> [!Lemma] Schur
> Let $F$ be an algebraically closed field. Let $L$ be a Lie algebra over $F$. Let $\varphi:L\to \mathfrak{gl}(V)$ be irreducible. Then the only endomorphisms of $V$ commuting with all $\varphi(x)$ are the scalars. 
> 
> > [!Proof]-
> > 
> > Let $T\in \text{End}(V)$ be such that $T\varphi(x)=\varphi(x)T$ for all $x\in L$. Since $F$ is algebraically closed, $T$ has an eigenvalue, say $\lambda$. Let $V_{\lambda}\subseteq V$ be the $\lambda$-eigenspace of $T$. For $v\in V_{\lambda}$, 
> > $$
> > \begin{align}
> > T\varphi(x)(v) & =\varphi(x)(Tv) \\
> >  & =\varphi(x)(\lambda v) \\
> >  & =\lambda\varphi(x)(v).
> > \end{align}
> > $$
> > Thus, $\varphi(x)(v)\in V_{\lambda}$. So, $\varphi(x)(V_{\lambda})\subseteq V_{\lambda}$ for all $x\in L$. Thus, $V_{\lambda}$ is an $L$-submodule of $V$. Since $V$ is an irreducible module, it follows that $V_{\lambda}=V$. Thus, $T=\lambda I$. 
> 

^e5ed2b

> [!Definition]
> $V$ is called **completely irreducible** if $V$ is a direct sum of irreducible $L$-submodules.

Irreducibility implies complete reducibility. 

> [!Exercise]
> $V$ is completely reducible iff each $L$-submodule $W$ of $V$ has a complement $W'$ (an $L$-submodule such that $V=W\oplus W'$). 

^fb83d1
