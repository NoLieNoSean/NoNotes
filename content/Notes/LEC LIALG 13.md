---
id: "573"
date: 2026-10-01
time: 14:19
tags:
  - Lecture
  - LIALG
---


> [!Definition] $L$-module
> Let $L$ be a Lie algebra over $F$. A finite dimensional vector space $V$ over $F$ is said to be an $L$-module if there is a map $L\times V\to V$ satisfying
> 1. $(ax+by)v=a(xv)+b(yv)$
> 2. $x(av+bw)=a(xv)+b(xw)$
> 3. $[xy]v=xyv-yxv$
> 
> for all $x, y\in L$, $a, b\in F$ and $v, w\in V$. 

^96489f

Given an $L$-module $V$, we have a homomorphism of Lie algebras $\varphi:L\to \mathfrak{gl}(V)$, defined by $\varphi(x)(v)=xv$; the facts that $\varphi(x)\in \mathfrak{gl}(V)$ and that $\varphi$ is a Lie algebra homomorphism follow from [[#^96489f]]. 

Conversely, let $\varphi:L\to \mathfrak{gl}(V)$ be a homomorphism of Lie algebras. For $x\in L$, $v\in V$, define $xv=\varphi(x)(v)$. It can be shown easily that $\varphi$ makes $V$ into an $L$-module. 

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

[!Lemma]
Let $V$ and $W$ be two finite dimensional vector spaces over $F$. Then there is a natural isomorphism $\varphi:V^{*}\otimes W\to \text{Hom}_{F}(V, W)$. 

[!Proof]-

For $f\in V^{*}$, $w\in W$, define $\tilde{(f, w)}:V\to W$ by $\tilde{(f, w)}(v)=f(v)(w)$ for all $v\in V$. Since $f$ is $F$-linear, $\tilde{(f, w)}$ is $F$-linear. Show that the map $\varphi:V^{*}\times W\to \text{Hom}(V, W)$ defined by $(f, w) \mapsto \tilde{(f, w)}$ is bilinear. The universal property of tensor products gives us an $F$-linear map $\varphi:V^{*}\otimes W\to \text{Hom}_{F}(V, W)$. 

$\varphi$ is surjective: For $T\in \text{Hom}(V, W)$ have matrix $[a_{ij}]$ in bases $\{ v_{1}, \dots, v_{n} \}$ and $\{ w_{1}, \dots, w_{m} \}$. Let $\{ f_{1}, \dots, f_{n} \}$ be the dual basis of $\{ v_{1}, \dots, v_{n} \}$. Define
$$
S=\sum_{i=1}^{m}\sum_{k=1}^{n} a_{ij}f_{k}\otimes w_{i}. 
$$
Easy to see that $\varphi(S)=T$. 

Since $V^{*}\otimes W$ and $\text{Hom}(V, W)$ are finite dimensional vector spaces of the same dimension, it follows that $\varphi$ is an isomorphism. 


