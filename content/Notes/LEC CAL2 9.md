---
id: "323"
date: 2025-10-21
time: 10:21
tags:
  - CAL2
---

A multilinear function $T:V^{k}\to \mathbb{R}$ is called a $k$-tensor on $V$ and the set of all $k$-tensors, denoted $\mathcal{T}^{k}(V)$, is a vector space over $\mathbb{R}$. If $S\in \mathcal{T}^{k}(V)$ and $T\in \mathcal{T}^{l}(V)$, $S\otimes T\in \mathcal{T}^{k+k}(V)$ is defined as expected.

> [!Theorem]
> Let $v_{1}, \dots, v_{n}$ be a basis for $V$, and let $\varphi_{1}, \dots, \varphi_{n}$ be the dual basis, $\varphi_{i}(v_{j})=\delta_{ij}$. Then the set of all $k$-fold tensor products
> $$
> \begin{align}
>  \varphi_{i_{1}}\otimes\dots \otimes\varphi_{i_{k}} &  & 1\leqslant i_{1}, \dots, i_{k}\leqslant n
> \end{align}
> $$
> is a basis for $\mathcal{T}^{k}(V)$, which therefore has dimension $n^{k}$.

^011782

If $T\in \mathcal{T}^{k}(V)$ is a $k$-tensor such that 
$$
T=\ell_{1}\otimes\dots \otimes \ell_{k},
$$
$T$ is called a decomposable $k$-tensor. Note in particular that all the basis elements described in [[#^011782]] are decomposable. Thus, any $k$-tensor can be written as a linear combination of decomposable $k$-tensors. 

> [!Definition] Pullback
> Let $V$ and $W$ be finite dimensional vector spaces and let $A:V\to W$ be a linear mapping. Define the **pullback operation** $A^{*}:\mathcal{T}^{k}(W)\to \mathcal{T}^{k}(V)$ by $T\mapsto A^{*}T$, where $A^{*}T:V^{k}\to \mathbb{R}$ is the function
> $$
> (A^{*}T)(v_{1}, \dots, v_{k}):=T(Av_{1}, \dots, Av_{k}).
> $$

Note that $A^{*}(S\otimes T)=A^{*}S\otimes A^{*}T$. 

> [!Definition] 
> Let $V$ be an $n$-dimensional vector space and $T\in \mathcal{T}^{k}(V)$ a $k$-tensor. For $\sigma\in \mathfrak{S}_{k}$, define $T^{\sigma}\in \mathcal{T}^{k}(V)$ to be
> $$
> T^{\sigma}(v_{1}, \dots, v_{k}):=T(v_{\sigma ^{-1}(1)}, \dots, v_{\sigma ^{-1}(k)}).
> $$
> 

> [!Proposition] @guilleminDifferentialForms 1.4.12
> 1. If $T=\ell_{1}\otimes\dots \otimes \ell_{k}$, $\ell_{i}\in V^{*}$, then $T^{\sigma}=\ell_{\sigma(1)}\otimes\dots \otimes \ell_{\sigma(k)}$.
> 2. The assignment $T\mapsto T^{\sigma}$ is a linear map $\mathcal{T}^{k}(V)\to \mathcal{T}^{k}(V)$.
> 3. If $\sigma, \tau\in \mathfrak{S}_{k}$, then $T^{\sigma \tau}=(T^{\sigma})^{\tau}$.
> 
> > [!Proof]-
> > 
> > $(1)$ 
> > $$
> > \begin{align}
> > T^{\sigma}(v_{1}, \dots, v_{n}) & =\ell_{1}(v_{\sigma ^{-1}(1)})\cdot\dots \cdot \ell_{k}(v_{\sigma ^{-1}(k)}) \\
> >  & =\ell_{\sigma(\sigma ^{-1}(1))}(v_{\sigma ^{-1}(1)}) \cdot\dots \cdot \ell_{\sigma(\sigma ^{-1}(k))}(v_{\sigma ^{-1}(k)}) \\
> >  & =\ell_{\sigma(1)}(v_{1})\cdot\dots \cdot \ell_{\sigma(k)}(v_{k}).
> > \end{align}
> > $$
> > $(3)$
> > 
> > $$
> > \begin{align}
> > (T^{\sigma})^{\tau}(v_{1}, \dots, v_{k}) & =(T^{\sigma})(v_{\tau ^{-1}(1)}, \dots, v_{\tau ^{-1}(k)}) \\
> >  & =(T^{\sigma})(u_{1}, \dots, u_{k}) & u_{i}:=v_{\tau ^{-1}(i)} \\
> >  & =T(u_{\sigma ^{-1}(1)}, \dots, u_{\sigma ^{-1}(k)}) \\
> >  & =T(v_{\tau ^{-1}(\sigma ^{-1}(1))}, \dots, v_{\tau ^{-1}(\sigma ^{-1}(k))}) \\
> >  & =T(v_{(\sigma \tau)^{-1}(1)}, \dots, v_{(\sigma \tau)^{-1}(k)}) \\
> >  & =T^{\sigma\tau}(v_{1}, \dots, v_{k}).
> > \end{align}
> > $$
> > 
> 

Call a $k$-tensor $T\in \mathcal{T}^{k}(V)$ **alternating** if $T^{\sigma}=(-1)^{\sigma}T$ for all $\sigma\in \mathfrak{S}_{k}$. Denote by $\Lambda^{k}(V)$ the space of all alternating $k$-tensors. 

> [!Definition]
> If $T\in \mathcal{T}^{k}(V)$, define $\text{Alt}(T)$ by
> $$
> \text{Alt}(T):=\frac{1}{k!}\sum_{\sigma\in \mathfrak{S}_{k}}(-1)^{\tau}T^{\tau}.
> $$

> [!Proposition] Properties of $\text{Alt}$
> For $T\in \mathcal{T}^{k}(V)$ and $\sigma\in \mathfrak{S}_{k}$, 
> 1. $(\text{Alt}(T))^{\sigma}=(-1)^{\sigma}\text{Alt}(T)$.
> 2. If $T\in\Lambda^{k}(V)$, then $\text{Alt}(T)=T$.
> 3. $(\text{Alt}(T))^{\sigma}=\text{Alt}(T^{\sigma})$
> 4. The map $\text{Alt}:\mathcal{T}^{k}(V)\to \mathcal{T}^{k}(V)$, $T\mapsto\text{Alt}(T)$ is linear. 

If $\omega\in\Lambda^{k}(V)$ and $\eta\in\Lambda^{l}(V)$, then $\omega \otimes \eta$ is not usually in $\Lambda^{k+l}(V)$. Define $\omega \wedge \eta\in\Lambda^{k+l}(V)$ by
$$
\omega \wedge \eta:=\frac{(k+l)!}{k!l!}\text{Alt}(\omega \otimes \eta).
$$
The wedge product has the following properties:
1. $(\omega_{1}+\omega_{2})\wedge \eta=\omega_{1}\wedge \eta+\omega_{2}\wedge \eta$.
2. $\omega \wedge(\eta_{1}+\eta_{2})=\omega \wedge \eta_{1}+\omega \wedge \eta_{2}$
3. $\alpha \omega \wedge \eta=\omega \wedge\alpha \eta=\alpha(\omega \wedge \eta)$
4. $\omega \wedge \eta=(-1)^{kl}\eta \wedge \omega$
5. $A^{*}(\omega \wedge \eta)=A^{*}(\omega)\wedge A^{*}(\eta)$.

$$
\begin{align}
A^{*}(\omega \wedge \eta)(v_{1}, \dots, v_{k+l}) & =(\omega \wedge \eta)(Av_{1}, \dots, Av_{k+l}) \\
 & = \frac{(k+l)!}{k!l!}\text{Alt}(\omega \otimes \eta)(Av_{1}, \dots, Av_{k+l}) \\
 & = \frac{1}{k!l!}\sum_{\sigma\in \mathfrak{S}_{k+l}}(-1)^{\sigma}(\omega \otimes \eta)(Av_{\sigma ^{-1}(1)}, \dots, Av_{\sigma ^{-1}(k+l)}) \\
 & =\frac{1}{k!l!}\sum_{\sigma\in \mathfrak{S}_{k+l}}(-1)^{\sigma}\omega  (Av_{\sigma ^{-1}(1)}, \dots, Av_{\sigma ^{-1}(k)})\cdot\eta(Av_{\sigma ^{-1}(k+1)}, \dots, Av_{\sigma ^{-1}(k+l)}) \\
 & =\frac{1}{k!l!}\sum_{\sigma\in \mathfrak{S}_{k+l}}(-1)^{\sigma}A^{*}\omega  (v_{\sigma ^{-1}(1)}, \dots, v_{\sigma ^{-1}(k)})\cdot A^{*}\eta(v_{\sigma ^{-1}(k+1)}, \dots, v_{\sigma ^{-1}(k+l)})  \\
 & =\frac{1}{k!l!}\sum_{\sigma\in \mathfrak{S}_{k+l}}(-1)^{\sigma}(A^{*}\omega \otimes A^{*}\eta)  (v_{\sigma ^{-1}(1)}, \dots, v_{\sigma ^{-1}(k)},v_{\sigma ^{-1}(k+1)}, \dots, v_{\sigma ^{-1}(k+l)})  \\
 & =\frac{(k+l)!}{k!l!}\text{Alt}(A^{*}\omega \otimes A^{*}\eta) \\
 & =A^{*}\omega \wedge A^{*}\eta .
\end{align}
$$

> [!Theorem]
> 1. If $S\in \mathcal{T}^{k}(V)$ and $T\in \mathcal{T}^{l}(V)$ and $\text{Alt}(S)=0$, then $\text{Alt}(S\otimes T)=\text{Alt}(T\otimes S)=0$.
> 2. $\text{Alt}(\text{Alt}(\omega \otimes \eta)\otimes\theta)=\text{Alt}(\omega \otimes \eta \otimes\theta)=\text{Alt}(\omega \otimes\text{Alt}(\eta \otimes\theta))$.
> 3. If $\omega\in\Lambda^{k}(V)$, $\eta\in\Lambda^{l}(V)$, and $\theta\in\Lambda^{m}(V)$, then 
> $$
> \begin{align}
> (\omega \wedge \eta)\wedge\theta =\omega \wedge(\eta \wedge\theta)=\frac{(k+l+m)!}{k!l!m!}\text{Alt}(\omega \otimes \eta \otimes\theta).
> \end{align}
> $$

$(1)$ is proved by breaking the sum over cosets of $\mathfrak{S}_{k}\subseteq \mathfrak{S}_{k+l}$. 

> [!Theorem]
> Let $v_{1}, \dots, v_{n}$ be a basis for $V$ and $\varphi_{1}, \dots, \varphi_{n}$ be the dual basis of $V^{*}$. The set of all 
> $$
> \begin{align}
> \varphi_{i_{1}}\wedge\dots \wedge\varphi_{i_{k}}
>  &  & 1\leqslant i_{1}< i_{2}<\dots< i_{k}\leqslant n
> \end{align}
> $$
> is a basis for $\Lambda^{k}(V)$, which therefore has dimension $\begin{pmatrix}n \\ k\end{pmatrix}$. 

---


A "map" $\omega$ with $\omega(p)\in\Lambda^{k}(\mathbb{R}^{n}_{p})$ is called a $k$-form.

If $f:\mathbb{R}^{n}\to \mathbb{R}$ is differentiable, then $Df(p)\in\Lambda^{1}(\mathbb{R}^{n})$. We define the $1$-form $df$ by
$$
df(p)(v_{p})=Df(p)(v).
$$
Every $k$-form $\omega$ can be written as
$$
\omega=\sum_{i_{1}<\dots< i_{k}}\omega _{i_{1}, \dots, i_{k}}dx_{i_{1}}\wedge\dots \wedge dx_{i_{k}}.
$$
> [!Theorem]
> If $f:\mathbb{R}^{n}\to \mathbb{R}$ is differentiable, then
> $$
> df=D_{1}f \cdot dx_{1}+\dots+D_{n}f\cdot dx_{n}.
> $$

> [!Definition] Pullback
> 
> Let $f:\mathbb{R}^{n}\to \mathbb{R}^{m}$. We have a linear transformation $f_{*}:\mathbb{R}^{n}_{p}\to \mathbb{R}^{m}_{f(p)}$ defined by
> $$
> f_{*}(v_{p}):=(Df(p)(v))_{f(p)}.
> $$
> This induces a linear transformation $f^{*}:\Lambda^{k}\left( \mathbb{R}^{m}_{f(p)} \right)\to\Lambda^{k}\left( \mathbb{R}^{n}_{p} \right)$ as
> $$
> (f^{*}A)(v_{1, p}, \dots, v_{k, p})=A(f_{*}(v_{1, p}), \dots, f_{*}(v_{k, p})).
> $$
> If $\omega$ is a $k$-form on $\mathbb{R}^{m}$, we can therefore define a $k$-form $f^{*}\omega$ on $\mathbb{R}^{n}$ by
> $$
> (f^{*}\omega)(p)=f^{*}(\omega(f(p))).
> $$

[!Theorem]
If $f:\mathbb{R}^{n}\to \mathbb{R}^{m}$ is differentiable, then
$$
\begin{align}
(1)  \quad  & f^{*}(dx_{i})=\sum_{j=1}^{n} D_{j}f_{i}\cdot dx_{j} \\
(2)\quad  & f^{*}(\omega_{1}+\omega_{2} )=f^{*}(\omega_{1})+f^{*}(\omega_{2}) \\
(3)\quad  & f^{*}(g\cdot \omega)=(g\circ f)\cdot f^{*}(\omega) \\
 (4)\quad  & f^{*}(\omega \wedge \eta)=f^{*}\omega \wedge f^{*}\eta.\\  \\
(5) \quad   &  (g\circ f)^{*}\omega=f^{*}g^{*}\omega.
\end{align}
$$

[!Proof]-

$(1)$
$$
\begin{align}
{ f^{*}(dx_{i}) }(p)(v_{p}) & =f^{*}(dx_{i}(f(p)))(v_{p}) \\
 & = dx_{i}(f(p))(f_{*}(v_{p})) \\
 & =dx_{i}(f(p))(Df(p)(v))_{f(p)} \\
 & =\sum_{j=1}^{n} D_{j}f_{i}\cdot v_{j} \\
 & =\sum_{j=1}^{n} D_{j}f_{i}\cdot dx_{j}(p)(v_{p}) .\\
\end{align}
$$

$(2)$
$$
\begin{align}
f^{*}(\omega_{1}+\omega_{2})(p) & =f^{*}((\omega_{1}+\omega_{2})(f(p))) \\
 & =f^{*}(\omega_{1}(f(p))+\omega_{2}(f(p))) \\
 & =f^{*}(\omega_{1}(f(p)))+f^{*}(\omega_{2}(f(p)))  \\
 & =f^{*}(\omega_{1})(p)+f^{*}(\omega_{2})(p)
\end{align}
$$
$(3)$
$$
\begin{align}
f^{*}(g\cdot \omega)(p) & =f^{*}((g\cdot \omega)(f(p))) \\
 & =f^{*}(g(f(p))\cdot \omega(f(p))) \\
	 & =g(f(p))f^{*}(\omega(f(p))) \\
	 & =[(g\circ f)\cdot f^{*}(\omega)](p)
\end{align}
$$
$(4)$
$$
\begin{align}
f^{*}(\omega \wedge \eta)(p) & =f^{*}((\omega \wedge \eta)(f(p))) \\
 & =f^{*}(\omega(f(p))\wedge \eta(f(p))) \\
 & =f^{*}(\omega(f(p)))\wedge f^{*}(\eta(f(p))) \\
 & =f^{*}(\omega)(p)\wedge f^{*}(\eta)(p)
\end{align}
$$

> [!Theorem]
> 1. $d(\omega+\eta)=d\omega+d \eta$. 
> 2. If $\omega$ is a $k$-form and $\eta$ is an $l$-form, then $d(\omega \wedge \eta)=d\omega \wedge \eta+(-1)^{k}\omega \wedge d \eta$. 
> 3. $d(d\omega)=0$. w
> 4. If $\omega$ is a $k$ form on $\mathbb{R}^{m}$ and $f:\mathbb{R}^{n}\to \mathbb{R}^{m}$ is differentiable, then $f^{*}(d\omega)=d(f^{*}\omega)$. 

> [!Definition]
> A form $\omega$ is called **closed** if $d\omega=0$ and **exact** if $\omega=d \eta$ for some $\eta$. exact $\implies$ closed.


![[image-5.jpeg]]


![[image-4.jpeg]]


