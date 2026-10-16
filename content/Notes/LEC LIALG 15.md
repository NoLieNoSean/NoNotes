---
id: "579"
date: 2026-10-08
time: 13:58
tags:
  - LIALG
  - Lecture
---
[!Recall]
Let $L$ be a Lie algebra over $F$. Let $V$ and $W$ be two $L$-modules. Then $\text{Hom}(V, W)$ is an $L$-module. The action of $L$ on $\text{Hom}(V, W)$ is given by $(xf)(v)=xf(v)-f(xv)$. 

Let $F$ be an algebraically closed field of characteristic zero. Let $L$ be a semisimple Lie algebra over $F$. Let $\varphi:L\to \mathfrak{gl}(V)$ be a faithful representation. Define $\beta:L\times L\to F$ by 
$$
\beta(x, y)=\text{tr}(\varphi(x)\varphi(y))\quad \forall x, y\in L.
$$
We have seen that $\beta$ is a symmetric, associative nondegenerate bilinear form. Let $\{ x_{i}:1\leqslant i\leqslant n \}$ be a basis of $L$ and $\{ y_{i}:1\leqslant j\leqslant n \}\subseteq L$ be the dual basis of $\{ x_{i} \}$ relative to $\beta$. That is, 
$$
\beta(x_{i}, y_{i})=\begin{cases}
1  & i=j \\
0 & \text{otherwise}.
\end{cases}
$$
Then we have the Casimir element
$$
c_{\varphi}:=\sum_{i=1}^{n} \varphi(x_{i})\varphi(y_{i})\in \mathfrak{gl}(V) .
$$
Note that $\text{tr}(c_{\varphi})=n\ne 0$ ($\text{char}\,F\ne 0$). 

---

[!Theorem] H Weyl
Let $F$ be an algebraically closed field of characteristic zero. Let $L$ be a finite dimensional Lie algebra over $F$. Then every nonzero $L$-module $V$ is completely reducible. 

[!Proof]-

WLOG, we may assume that $V$ is non-trivial. By an exercise (see [[LEC LIAlG 14]]) it suffices to show that every $L$-submodule $W$ of $V$ is a direct summand of $V$. 

**Step 1:** We prove this when $W$ is of codimension $1$. Since $V/W$ is one dimensional, and $L=[LL]$, $V/W$ is the trivial one dimensional $L$-module. So, we denote $V/W$ by $F$. So, we have a short exact sequence $0\to W\to V\to F\to 0$ of $L$-modules. 

Claim: We may assume that $W$ is irreducible. 

If not, there is a nonzero proper $L$-submodule $W'$ of $W$. Then we have the short exact sequence $0\to W/W'\to V/W'\to F\to 0$ of $L$-modules. Since $\dim(V/W')< \dim(V)$, by induction on $\dim(V)$, there is a one dimensional $L$-submodule $W''$ of $V/W'$ such that $V/W'=W/W'\oplus W''$. But $W''=\tilde{W}/W'$ for some $L$-submodule $\tilde{W}$ of $V$ containing $W'$ and $\dim(\tilde{W})=\dim(W')+1$. Further, $W\cap \tilde{W}=W'$. So, we consider the short exact sequence $0\to W'\to \tilde{W}\to F\to  0$ of $L$-modules. Since $\dim(\tilde{W})< \dim(V)$, by induction, there is a one dimensional $L$-submodule $X$ of $\tilde{W}$ such that $\tilde{W}=W'\oplus X$. Since $X\cap W=(X\cap \tilde{W})\cap W=X\cap(\tilde{W}\cap W)=X\cap W'=0$, we have $V=W\oplus X$ as $L$-modules. So, $W$ is an irreducible $L$-submodule of codimension one. 

Let $\varphi:L\to \mathfrak{gl}(V)$ be the representation corresponding to the $L$-module $V$. WLOG, we may assume $\varphi:L\to \mathfrak{gl}(V)$ is faithful. 
	By the structure theorem of semisimple Lie algebras, $L=\bigoplus_{j=1}^{r}I_{j}$ for some non abelian simple ideals. Further, $\ker\varphi$ is an ideal of $L$. Again, by structure theorem (part ii), we have $\ker\varphi=\bigoplus_{j\in A}I_{j}$ for some subset $A\subseteq \{ 1, \dots, r \}$. Set $B=\{ 1, 2, \dots, r \}\setminus A$. Let $L':=\bigoplus_{j\in B}I_{j}$. Then $\varphi|_{L}:L'\to \mathfrak{gl}(V)$ is faithful and $L'$ is semisimple. 

Since $W$ is of codimension $1$, $V/W$ is the trivial $L$-module. Therefore, $\varphi(x)(V)\subseteq W$ for all $x\in L$ ($\varphi(x)(v)=xv\in W$ for all $x\in L$ and $v\in V$). It follows that $c_{\varphi}(V)\subseteq W$, so $n=\text{tr}(c_{\varphi})=\text{tr}(c_{\varphi}|_{W})$. Further, since $[c_{\varphi} ,\varphi(x)]=0$ for all $x\in L$, $c_{\varphi}:V\to W$ is a homomorphism of $L$-modules. Further, since $\text{tr}(c_{\varphi}|_{W})\ne 0$, $c_{\varphi}|_{W}:W\to W$ is a nonzero homomorphism of $L$-modules. Since $W$ is an irreducible $L$-module, $c_{\varphi}|_{W}$ is an automorphism of $W$. In particular, we have $c_{\varphi}(V)=W$ and $\ker(c_{\varphi})\cap W=0$. Therefore, $\ker (c_{\varphi})$ is a one dimensional $L$-submodule of $V$ and $V=\ker(c_{\varphi})\oplus W$. 

(assume not algebraically closed; $c_{\varphi}|_{W}$ is not a nonzero scalar; alternative proof?)

---

**Step 2:** We now consider the general case. Consider the $L$-module $\text{Hom}(V, W)$. Let $\mathcal{V}\subseteq \text{Hom}(V, W)$ be the vector subspace of all maps $f:V\to W$ such that $f|_{W}$ is a scalar endomorphism, i.e., $f|_{W}=a1_{W}$ for some $a\in F$. Let $\mathcal{W}\subseteq \text{Hom}(V, W)$ be the vector subspace of all $F$-linear maps $f:V\to W$ such that $f|_{W}=0$, i.e., $\ker f\supseteq W$. Clearly, $\mathcal{W}$ is a vector subspace of $\mathcal{V}$. Further, for any $x\in L$, $f\in \mathcal{V}$, $v\in W$, 
$$
\begin{align}
(xf)(v) &=xf(v)-f(xv) \\
 & =x(av)-a(xv)  & a\in F\\
 & =0.
\end{align}
$$
Thus, $xf\in \mathcal{W}$. Therefore, we have $x\mathcal{V}\subseteq \mathcal{W}$ for all $x\in L$. Hence $\mathcal{V}$ and $\mathcal{W}$ are $L$-submodules of $\text{Hom}(V, W)$ and the $L$-module $\mathcal{V}/\mathcal{W}$ is trivial. By step 1, there is a one dimensional $L$-submodule $X$ of $\mathcal{V}$ such that $\mathcal{V}=\mathcal{W}\oplus X$. 

Let $f\in X\setminus \{ 0 \}$. Since $f\in \mathcal{V}\setminus \mathcal{W}$, we have $f|_{W}=a 1_{W}$ for some $a\in F\setminus \{ 0 \}$. Thus, $f|_{W}:W\to W$ is an $F$-linear automorphism of $W$. Therefore, $f(V)=W$, and $\ker f\cap W=\{ 0 \}$. Therefore we have $V=\ker f\oplus W$. Since $L=[LL]$, and $X$ is a one dimensional $L$-module, $X$ is the trivial $L$-module. Since $f\in X$, $xf=0$ for all $x \in L$. It follows that $f$ is a homomorphism of $L$-modules. Therefore, $\ker f$ is an $L$-submodule of $V$. 
