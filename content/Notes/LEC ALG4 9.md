---
id: "402"
date: 2026-02-04
time: 11:16
tags:
  - ALG4
  - Lecture
---
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
V= \frac{k[x]}{\langle p_{1}^{e_{1}} \rangle }\oplus\dots \oplus\frac{k[x]}{\langle p_{s}^{e_{s}} \rangle },
$$

^2fda43

where the $p_{i}$'s are irreducible polynomials (and not necessarily distinct) and $e_{i}\geqslant 1$ for all $i$. 

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
Now assume $k$ is [[LEC ALG3 19#^4fa8fa|algebraically closed]], so all primes in $k[x]$ are of the from $x-\lambda$ for some $\lambda\in k$. The summands in [[#^2fda43]] now take the form
$$
W_{i}=\frac{k[x]}{\langle (x-\lambda)^{e_{i}} \rangle }.
$$
Recall that $\{ 1, \overline{x}, \dots, \overline{x}^{e_{i}-1} \}$ is a $k$-basis for $W_{i}$. 