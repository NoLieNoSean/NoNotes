---
id: "402"
date: 2026-02-04
time: 11:16
tags:
  - ALG4
  - Lecture
  - Processed
---
# Jordan canonical form

Let $V$ be a $k$-vector space, and $T\in \text{End}_{k}(V)$. The goal is to find a basis for $V$ in which the matrix of $T$ has a 'nice' form. We assume that $k$ is [[LEC ALG3 19#^4fa8fa|algebraically closed]], ~~but we only really require that the characteristic poly~~

[[LEC ALG3 3#Modules|Recall]] that to make a $\mathbb{Z}$-module $M$ an $R$-module, we need to specify a ring map $R\to \text{End}_{\mathbb{Z}}(M)$. Note that any ring is a $\mathbb{Z}$-algebra. 

Now, let $V$ be a $\mathbb{Z}$-module. To make $V$ a $k$-vector space, we need to specify a ring map $\rho:k\to \text{End}_{\mathbb{Z}}(V)$. Since $k$ is a field, $\rho$ must be injective.

$\text{End}_{k}(V)$, the set of $k$-linear maps from $V$ to $V$, is clearly a subset of $\text{End}_{\mathbb{Z}}(V)$. Recall that $T\in \text{End}_{\mathbb{Z}}(V)$ is $k$-linear iff $T(av)=aT(v)$ for all $a\in k$ and for all $v\in V$. This can be written as $T\circ \rho(a)=\rho(a)\circ T$ for all $a\in k$. Therefore, $\text{End}_{k}(V)$ is the centralizer of $\rho(k)$ in $\text{End}_{\mathbb{Z}}(V)$. Since $k$ is commutative, $\rho(k)$ lies inside the centralizer of $\rho(k)$, so $\rho(k)\subseteq \text{End}_{k}(V)$. 

Next, let $k$ be a field, and $V$ a ==finite dimensional== $k$-vector space. Consider the $k$-[[LEC ALG3 3#^419c68|algebra]] $k[x]$. To make $V$ a $k[x]$ module, we need to specify a ring map $k[x]\to \text{End}_{k}(V)$. 

Let $T\in \text{End}_{k}(V)$. The mapping $x\mapsto T$ gives us a map $k[x]\to \text{End}_{k}(V)$, with the scalars being mapped using $\rho$.

```latex
% latex-id: 450c-95b5-f81e-4cd1-adac
\begin{document}
\[\begin{tikzcd} {k[x]} && {\text{End}_{k}(V)} \\ k \arrow["{x\mapsto T}", from=1-1, to=1-3] \arrow[hook', from=2-1, to=1-1] \arrow["\rho"', from=2-1, to=1-3] \end{tikzcd}\]
\end{document}
```

This makes $V$ into a $k[x]$-module, compatible with the $k$-vector space structure of $V$ when $k$ is considered to be a subring of $k[x]$. Thus, the basis that generates $V$ as a $k$-vector space will continue to generate $V$ as a $k[x]$-module, making $V$ a finitely generated $k[x]$-module. 

> [!Example]
> Suppose $V=k[x]/\langle x^{2} \rangle$; by [[LEC ALG3 3#^ec98bc]], $V$ has a natural $k[x]$-module structure. What should the $T\in \text{End}_{k}(V)$ that $x\in k[x]$ gets mapped to be to realize this module structure as a map $k[x]\to \text{End}_{k}(V)$?
> 
> Firstly, as a $k$-vector space, $V\cong k^{2}$ with basis $\{ \overline{1}, \overline{x} \}$. In the natural $k[x]$-module structure, $x$ acts on these elements like so:
> $$
> \begin{align}
> T(\overline{1}) & =\overline{x} \\
> T(\overline{x}) & =\overline{0}.
> \end{align}
> $$
> Thus, in the basis $\{ \overline{1}, \overline{x} \}$, $T$ is given by the matrix $\begin{bmatrix}0 & 0 \\ 1 & 0\end{bmatrix}$. 

> [!Remark]
> Suppose $V=V_{1}\oplus V_{2}$ as $k[x]$-modules, where $V_{1}$ and $V_{2}$ are $k[x]$-submodules of the $k[x]$-module $V$. Clearly, $V_{1}$ and $V_{2}$ are also $k$-submodules of the $k$-module $V$. [[Categorical notes on Modules#^af51f1|The conditions]] $V_{1}\cap V_{2}=0$ and $V_{1}+V_{2}=V$, being properties of $V$ as an abelian group, are not impacted by the module structure on $V$. Thus, the equation $V=V_{1}\oplus V_{2}$ continues to hold in $k\textsf{-Mod}$. 
> 
> The converse is not true. For example, $k[x]/\langle x^{2} \rangle$, as a $k[x]$-module, cannot be written as a direct sum of two proper submodules[^1]. But as a $k$-vector space, it is isomorphic to $k^{2}$.

^eddb40

[^1]: $x^{2}(k[x]/\langle x^{2} \rangle)=0$; use [[LEC ALG4 7#^d3994a]]. 

> [!Proposition]
> $V$ is a torsion $k[x]$-module. 
> 
> > [!proof]-
> > 
> > By [[LEC ALG4 5#^1a540b]], write $V=V_{f}\oplus V_{t}$ as $k[x]$-modules, where $V_{f}$ is a free $k[x]$-module and $V_{t}$ is a torsion $k[x]$-module. By [[#^eddb40]], $V=V_{f}\oplus V_{t}$ are $k$-vector spaces. Thus, we have $\dim_{k}V=\dim_{k}V_{f}+\dim_{k}V_{t}$. If $V_{f}\ne 0$, then $\dim_{k}V_{f}$ is countably infinite, so $\dim_{k}V$ is countably infinite, a contradiction. 
> 
> > [!Proof]-
> > 
> > This proof isn't 'canon', since we'd like to prove Caley-Hamilton using this development later. 
> > 
> > Let $p(x)$ be the characteristic polynomial of $T$. Then, by C-H, $p(T)=0\in \text{End}_{k}(V)$. Thus, $p(x)\in k[x]$ annihilates $V$ as a $k[x]$-module. 
> 

Using [[LEC ALG4 6#^428a07]] and [[LEC ALG4 7#^d3994a]], we can now write
$$
V\cong \frac{k[x]}{\langle p_{1}^{e_{1}} \rangle }\oplus\dots \oplus\frac{k[x]}{\langle p_{s}^{e_{s}} \rangle },
$$

^2fda43

as $k[x]$-modules, where the $p_{i}$'s are irreducible polynomials (and not necessarily distinct) and $e_{i}\geqslant 1$ for all $i$. Call the entity on the RHS $K$, and let $\varphi:V\to K$ be an isomorphism. Using $\varphi$, we can obtain subspaces $V_{1}, \dots, V_{s}\subseteq V$ such that
$$
V=V_{1}\oplus\dots \oplus V_{s}.
$$
Note that since $\varphi$ is a $k[x]$-module homomorphism, multiplying by $x$ in $K$ retains the meaning of 'applying $T$':

```latex
% latex-id: 8243-7864-463c-4f46-85bd
\begin{document}
\[\begin{tikzcd} \begin{array}{c} v\\ \in V \end{array} && \begin{array}{c} xv=T(v) \\ \in V \end{array} \\ \\ \begin{array}{c} \varphi(v) \\ \in K \end{array} && \begin{array}{c} x\varphi(v)=\varphi(xv)=\varphi(T(v))\\ \in K \end{array} \arrow[maps to, "{\times x}"{description}, from=1-1, to=1-3] \arrow[maps to, "\varphi"{description}, from=1-1, to=3-1] \arrow[maps to, "\varphi"{description}, from=1-3, to=3-3] \arrow[maps to, "{\times x}"{description}, from=3-1, to=3-3] \end{tikzcd}\]
\end{document}
```

We will implicitly identify elements of $K$ with their isomorphic counterparts in $V$.

> [!Proposition]
> Suppose $V=V_{1}\oplus V_{2}$ as $k[x]$-modules. Let $B_{i}\subseteq V_{i}$ be $k$-basis for $i=1, 2$. Then with respect to $B_{1}\sqcup B_{2}$, $T$ is given by a block diagonal matrix
> 
> ```latex
> % latex-id: 3481-8ee2-4a08-4048-bea6
> \usepackage{blkarray}
> \usepackage{amsmath}
> 
> \begin{document}
> 
> \[
> \begin{blockarray}{ccc}
> &B_{1}&B_{2} \\
> \begin{block}{c[cc]}
>   B_{1}&*_{1}&0 \\
>   B_{2}&0&*_{2}  \\
> \end{block}
> \end{blockarray}
>  \]
> 
> \end{document}
> ```
> 
> where $*_{1}=T|_{V_{1}}$ and $*_{2}=T|_{V_{2}}$. 
> 
> > [!Proof]-
> > 
> > Firstly, we have $V=V_{1}\oplus V_{2}$ as $k$-vector spaces, by [[#^eddb40]]. Next, since $V_{1}$ and $V_{2}$ are $k[x]$-submodules, we have $Tv=xv\in V_{i}$ when $v\in V_{i}$ for $i=1, 2$. In other words, $V_{1}$ and $V_{2}$ are $T$-invariant subspaces of $V$. It follows that the matrix of $T$ is block diagonal in the basis $B_{1}\sqcup B_{2}$. 
> 

Thus, if $B_{1}, \dots, B_{s}$ are $k$-bases for the summands $k[x]/\langle p^{e_{1}} \rangle, \dots, k[x]/\langle p^{e_{s}} \rangle$, $T$ is given by the matrix

```latex

% latex-id: b0c0-b851-2902-43fc-bd6f
\usepackage{blkarray}
\usepackage{amsmath}

\begin{document}

\[
\begin{blockarray}{ccccc}
&B_{1}&B_{2}&\dots&B_{s}\\
\begin{block}{c[cccc]}
  B_{1}&*_{1}&0&\dots&0 \\
  B_{2}&0&*_{2}&\dots&0  \\
  \vdots &\vdots&\vdots&\ddots&\vdots  \\
  B_{s}&0&0&\dots&*_{s}  \\
\end{block}
\end{blockarray}
 \]

\end{document}
```

Thus, by choosing our basis vectors from the invariant subspaces provided by [[#^2fda43]], it is possible to get the matrix of $T$ to be in block diagonal form. We now seek a specific choice of $B_{1}, \dots, B_{n}$ such that the blocks themselves have a 'nice' form. 

We now assume $k$ is algebraically closed, so all primes in $k[x]$ are of the from $x-\lambda$ for some $\lambda\in k$. The summands in [[#^2fda43]] now take the form
$$
W_{i}=\frac{k[x]}{\langle (x-\lambda)^{e_{i}} \rangle }.
$$
An immediate candidate for $B_{i}$ is $\{ \overline{1}, \overline{x}, \dots, \overline{x}^{e_{i}-1} \}$. However, this is not the basis we are looking for. 

> [!Example]
> Suppose one of the summands in [[#^2fda43]] is of the form
> $$
> W=\frac{k[x]}{\langle (x-\lambda)^{2} \rangle }.
> $$
> Consider the basis $B=\{ \overline{1}, \overline{x} \}$ [^2]. In this basis, the matrix of $T$ (the action of which, remember, corresponds to multiplication by $x$) is given by
> $$
> \begin{align}
> \begin{bmatrix}
> 0 & -\lambda^{2} \\
> 1 & 2\lambda
> \end{bmatrix}
> \end{align}.
> $$
> Although the difference isn't very stark in the $2\times 2$ case, we seem to get a seemingly nicer matrix using the bases $\{ \overline{1}, \overline{x}-\lambda \}$:
> $$
> \begin{bmatrix}
> \lambda & 0 \\
> 1 & \lambda
> \end{bmatrix}.
> $$
> 

[^2]: This is abuse of notation; when working in the wider context of $W$ being a subspace of $K$, $\overline{1}_{W}$ and $\overline{x}_{W}$ would be more accurate, albeit a bit clunky.

In general, the basis 
$$
\{ w_{1}=\overline{1}, w_{2}=\overline{(x-\lambda)}, w_{3}=\overline{(x-\lambda)^{2}}, \dots, w_{e}=\overline{(x-\lambda)^{e-1}} \}
$$

^c14976

for $W$ of the form $k[x]/\langle (x-\lambda)^{e} \rangle$ yields the matrix
$$
\begin{bmatrix}
\lambda &  &  &  &  \\
1 & \lambda &  &  &  \\
 & 1 & \lambda &  &  \\
 &  & \ddots & \ddots &  \\
 &  &  & 1 & \lambda
\end{bmatrix}
$$

^fb85f1

with $\lambda$'s on the diagonal and $1$'s below the diagonal:
$$
\begin{align}
Tw_{i} & =x\, \overline{(x-\lambda)^{i-1}}  \\
 & =\lambda \,\overline{(x-\lambda)^{i-1}} +(x-\lambda)\, \overline{(x-\lambda)^{i-1}} \\
 & =\begin{cases}
\lambda w_{i}+w_{i+1}  & i< e \\
\lambda w_{i} & i=e.
\end{cases}
\end{align}
$$
This is about as 'nice' as matrices get. Satisfied with our work, we make the definition

> [!Definition] Jordan block
> A **Jordan block** of size $n$ and eigenvalue $\lambda$ is an $n\times n$ matrix of type [[#^fb85f1]]. 

^d71679

> [!Definition] Jordan canonical form
> A matrix is said to be in **Jordan canonical form** if it is block diagonal with [[#^d71679|Jordan blocks]] on the diagonal. 
> $$
> \begin{bmatrix}
> J_{1} &  &  &  \\
>  & J_{2} &  &  \\
>  &  & \ddots &  \\
>  &  &  & J_{n}
> \end{bmatrix}
> $$
> 

^68d070

> [!Theorem]
> Let $k$ be an algebraically closed field. Let $V$ be a finite dimensional $k$-vector space. Let $T:V\to V$ be $k$-linear. Then there exists a basis of $V$ with respect to which $T$ is given by a matrix in [[#^68d070|Jordan canonical form]]. 
> 
> > [!Proof]-
> > 
> > The union of bases prescribed by [[#^c14976]] for each $T$-invariant subspace of $V$ obtained in [[#^2fda43]] works. 
> 

^261664
