---
date: 2025-10-17
time: 15:03
tags:
  - ANA2
  - Lecture
  - Processed
id: "315"
---

# Stone Weierstrass Theorem

> [!Note]
> A list of all versions of S-W we've seen:
> 1. [[#^b2e532]]: S-W for $\mathbb{R}$-subalgebras
> 2. [[#^61ec7e]]: S-W for $\mathbb{R}$-subalgebras as seen in @rudinPrinciplesMathematicalAnalysis1976 7.32. 
> 3. [[#^c03f69]]: S-W for $\mathbb{C}$-subalgebras
> 4. [[LEC ANA2 12#^04f340]]: characterization of $\mathbb{R}$-subalgebras which separate points
> 5. [[LEC ANA2 12#^8f3e36]]: S-W for $\mathbb{R}$-subalgebras and locally compact spaces


> [!Proposition] Dini
> Let $X$ be a compact metric space. Suppose $\{ f_{n} \}\subseteq C(X)$ is monotone[^1] and converges pointwise to $f\in C(X)$. Then, $\{ f_{n} \}$ converges to $f$ uniformly.
> 
> > [!proof]-
> > 
> > We may assume $f_{n}$ converges to $0$, and is monotone decreasing. Given $\epsilon> 0$, define
> > $$
> > U_{n}:=\{ x\in X : |f_{n}(x)|<\epsilon\text{ for every }m\geq n\}=\{ x\in X:|f_{n}(x)|<\epsilon \}.
> > $$
> > These open sets $\{ U_{n} \}$ increase to $X$. By compactness of $X$, there exists $N$ such that $U_{N}=X$. 
> 

^132392

Note that $C(X, \mathbb{R})$, with its vector space ($\mathbb{R}$-module) and ring structure, is an $\mathbb{R}$-algebra ([[LEC ALG3 3#^419c68]]). 

> [!Definition]
> Let $X$ be compact. A subset $\mathcal{A}\subseteq C(X, \mathbb{R})$ is a **subalgebra** if
> 1. for every $f, g\in \mathcal{A}$, $fg\in \mathcal{A}$
> 2. $\forall f, g\in \mathcal{A}$ and $\forall\alpha, \beta\in \mathbb{R}$, $\alpha f+\beta g\in \mathcal{A}$.
> 
> $\mathcal{A}$ **separates points** if for every distinct $x, y\in X$, there exists $f\in \mathcal{A}$ such that $f(x)\ne f(y)$. $\mathcal{A}$ is said to **contain constants**/be **unital** if $1\in \mathcal{A}$.

> [!Lemma]
> There is a sequence $\{ p_{n} \}$ of real valued polynomials with *zero constant coefficient* which converge uniformly to $f(x)=\sqrt{ x }$ on $[0, 1]$.
> 
> > [!Proof]-
> > Recursively define
> > $$
> > \begin{align}
> >  & p_{1}=0 \\
> >  & p_{n+1}(t)=p_{n}(t)+1/2(t-p_{n}^{2}(t)) & n\geq 1.
> > \end{align}
> > $$
> > We will first show $0\leq p_{n}(t)\leq \sqrt{ t }$ for all $n$. This is true for $n=1$; assume it is for $n=k$.
> > $$
> > \begin{align}
> > 0\leq p_{k+1}(t) & =p_{k}(t)+1/2(t-p_{k}^{2}(t)) \\
> >  & \leq p_{k}(t)+1/2(\sqrt{ t }+p_{k}(t))(\sqrt{ t }-p_{k}(t)) \\
> >  & \leq p_{k}(t)+\sqrt{ t }-p_{k}(t)=\sqrt{ t }.
> > \end{align}
> > $$
> > It follows that $p_{n+1}(t)\geq p_{n}(t)$ for all $n$ and for each $t$, so $\{ p_{n} \}$ is monotone increasing. Now, letting $n\to \infty$ on both sides of the definition of $p_{n+1}(t)$ (which we can do since monotone bounded sequences converge), we obtain $\lim_{ n \to \infty }p_{n}(t)=\sqrt{ t }$, for each $t\in[0, 1]$. We are done by [[#^132392]]. 
> 

^968bc3

> [!Definition]
> A subset $S\subseteq C(X, \mathbb{R})$ is a **lattice** if for every $f, g\in S$, $\text{min}(f, g)$ and $\text{max}(f, g)$ are in $S$.

> [!Lemma]
> Let $X$ be compact. A closed subalgebra $\mathcal{A}$ of $C(X, \mathbb{R})$ is a lattice.
> 
> > [!proof]-
> > Let $f\in \mathcal{A}$, $M=\lVert f \rVert_{\infty}$. Note that $f^{2}/M^{2}\in \mathcal{A}$. Let $\{ p_{n} \}$ be as in [[#^968bc3]]. $p_{n}\circ f^{2}/M^{2}$ is a polynomial in $f^{2}/M^{2}$, so $p_{n}\circ f^{2}/M^{2}\in \mathcal{A}$[^3] for every $n$. $p_{n}\circ f^{2}/M^{2}$ converges uniformly to $|f|/M$. Since $\mathcal{A}$ is closed, $|f|/M\in \mathcal{A}$, so $|f|\in \mathcal{A}$. 
> > $$
> > \begin{align}
> > \text{min}(f, g) & =\frac{1}{2}(f+g-|f-g|), \\
> > \text{max}(f, g) & =\frac{1}{2}(f+g+|f-g|). \\
> > \end{align}
> > $$
> > 
> 

^2d581a

> [!Theorem] Stone-Weierstrass for $\mathbb{R}$, v1
> Let $X$ be a compact metric space. Let $\mathcal{A}\subseteq C(X, \mathbb{R})$ be a unital subalgebra which separates points. Then, $\mathcal{A}$ is dense in $C(X, \mathbb{R})$. 
> 
> > [!Proof]-
> > 
> > Let $f\in C(X)$. For distinct $x, y$, let $s_{xy}\in \mathcal{A}$ be such that $s_{xy}(x)\ne s_{xy}(y)$. For distinct $x, y$, define
> > $$
> > h_{xy}(z):=f(x)+(f(y)-f(x))\left( \frac{s_{xy}(z)-s_{xy}(x)}{s_{xy}(y)-s_{xy}(x)} \right).
> > $$
> > Clearly, $h_{xy}\in C(X)$. Note that $h_{xy}(x)=f(x)$ and $h_{xy}(y)=f(y)$. 
> > 
> > Let $\epsilon> 0$. Fix $x\in X$. For $y\in X$, define
> > $$
> > U_{y}:=\{ z\in X:h_{xy}(z)< f(z)+\epsilon \}.
> > $$
> > Note that each $U_{y}$ is open[^2] and that $y\in U_{y}$ for all $y\in X$. Since $X$ is compact, $X=\bigcup_{y\in X}U_{y}=\bigcup_{i=1}^{n}U_{y_{i}}$. By [[#^2d581a]], $\overline{\mathcal{A}}$ is a lattice, so
> > $$
> > h_{x}:=\text{min}\{ h_{xy_{1}}, \dots, h_{xy_{n}} \}\in \mathcal{\overline{A}}.
> > $$
> > So, for each $x\in X$, we have $h_{x}\in \overline{\mathcal{A}}$ such that $h_{x}< f+\epsilon$ and $h_{x}(x)=f(x)$.
> > 
> > Now vary $x$: for $x\in X$, define
> > $$
> > V_{x}:=\{ z\in X:h_{x}(z)> f(z)-\epsilon \}.
> > $$
> > Again, these are open sets, and $X=\bigcup_{x\in X}V_{x}=\bigcup_{i=1}^{m}V_{x_{i}}$. 
> > $$
> > h=\text{max}\{ h_{x_{1}}, \dots, h_{x_{m}} \}\in \mathcal{\overline{A}}.
> > $$
> > 
> > Finally, for all $z\in X$,
> > $$
> > f(z)-\epsilon< h(z)< f(z)+\epsilon,
> > $$
> > so $\lVert f-h \rVert_{\infty}<\epsilon$. It follows that $\mathcal{\overline{A}}$ is dense in $C(X, \mathbb{R})$. But, $\mathcal{\overline{A}}$ is closed, so $\mathcal{\overline{A}}=C(X, \mathbb{R})$, so $\mathcal{A}$ is dense in $C(X)$. 
> 

^b2e532


> [!Corollary]
> Let $K\subseteq \mathbb{R}^{n}$ be compact. Then polynomials in coordinates $x_{1}, \dots, x_{n}$ are dense in $C(K, \mathbb{R})$. 

^b3f0b7


> [!Exercise]
> Suppose $f\in C([0, 1])$ such that
> $$
> \int_{0}^{1} f(t)t^{i} \, dt=0
> $$
> for all $i\geqslant 0$. Show that $f=0$.
> 
> > [!Proof]-
> > 
> > By [[#^b3f0b7]], we have a sequence of polynomials $\{ p_{n} \}$ converging uniformly to $f$. It follows that the sequence $\{ p_{n}\cdot f \}$ converges uniformly to $f^{2}$. Let the degree of $p_{n}$ be $d_{n}$. By [[LEC ANA1 33#^9132bb]], 
> > $$
> > \begin{align}
> > \int_{0}^{1} f^{2}(t) \, dt  & = \lim_{ n \to \infty } \int_{0}^{1} p_{n}(t)f(t) \, dt  \\
> >  & =\lim_{ n \to \infty } \left[ \sum_{i=0}^{d_{n}} \int_{0}^{1} p_{n, i}t^{i}f(t) \, dt  \right]  \\
> >  & =0. 
> > \end{align}
> > $$
> > Since $f^{2}\geqslant 0$, it follows that $f^{2}=0$, so $f=0$.
> 



> [!Lemma]
> Let $X$ be a compact metric space. If $\mathcal{A}$ is a subalgebra of $C(X, \mathbb{R})$ which vanishes at no point of $X$, then $\overline{\mathcal{A}}$ is unital.
> 
> > [!Proof]-
> > 
> > We need to prove $1\in \overline{\mathcal{A}}$. Since $\mathcal{A}$ vanishes at no point of $X$, for each $x\in X$ there exists $f_{x}\in \mathcal{A}$ such that $f_{x}(x)=1$. Let $1>m> 0$.  As before, define
> > $$
> > U_{x}:=\{ y\in X:f_{x}(y)> m\}. 
> > $$
> > These are non-empty, since $x\in U_{x}$. Since $X$ is compact, 
> > $$
> > X=\bigcup_{x\in X}U_{x}=\bigcup_{i=1}^{n} U_{x_{i}}.
> > $$
> > By [[#^2d581a]], $f=\max\{ f_{x_{1}}, \dots, f_{x_{n}} \}\in \overline{\mathcal{A}}$. Note that $f(t)> m$ for all $t\in X$. Define $g:[0, \lVert f \rVert_{\infty}]\to \mathbb{R}$ such that $g(0)=0$, $g|_{[m, \lVert f \rVert_{\infty}]}=1$, and $g$ is continuous. Then, $g\in C([0, \lVert f \rVert_{\infty}])$. By [[#^b3f0b7]], there exist polynomials $\{ p_{n} \}$ defined on $[0, \lVert f \rVert_{\infty}]$ which converge uniformly to $g$. Let $\{ c_{n} \}$ be the sequence of constant coefficients of $\{ p_{n} \}$. Then, $\{ c_{n} \}\to 0$, and $\{ q_{n} \}:=\{ p_{n}-c_{n} \}$ is a sequence of polynomials with constant zero coefficient also converging uniformly to $g$. Each $q_{n}(f)\in \mathcal{A}$, and $\{ q_{n}(f) \}\to g(f)=1$, so $1\in \mathcal{\overline{A}}$. 
> 

^54eba1

We have the following corollary of [[#^b2e532]] and [[#^54eba1]]. 

> [!Corollary] Stone-Weierstrass over $\mathbb{R}$, v2
> Let $X$ be a compact metric space. Let $A\subseteq C(X, \mathbb{R})$ be a subalgebra which separates points and vanishes at no point of $X$. Then, $\mathcal{A}$ is dense in $C(X, \mathbb{R})$.
> 
> > [!Proof]-
> > 
> > By [[#^54eba1]], $\mathcal{\overline{A}}$ is unital. By [[#^b2e532]], $\mathcal{\overline{A}}$ is dense in $C(X, \mathbb{R})$. This implies $\mathcal{\overline{A}}=C(X, \mathbb{R})$, which implies $\mathcal{A}$ is dense in $C(X, \mathbb{R})$. 
> 

^61ec7e



The [[#^b2e532]] analog for complex algebras requires additional hypotheses. A complex algebra $\mathcal{A}$ is called **self-adjoint** if $f\in \mathcal{A}$ implies $\overline{f}\in \mathcal{A}$.

> [!Theorem] Stone-Weierstrass for $\mathbb{C}$, v3
> Let $X$ be a compact metric space. Let $\mathcal{A}\subseteq C(X, \mathbb{C})$ be a unital self-adjoint subalgebra which separates points. Then $\mathcal{A}$ is dense in $C(X, \mathbb{C})$.
> 
> > [!Proof]-
> > 
> > Let $f\in \mathcal{A}$. $\text{Re}(f)=(f+\overline{f})/2\in \mathcal{A}$ and $\text{Im}(f)=(f-\overline{f})/2i\in \mathcal{A}$. Let $\mathcal{A}_{\mathbb{R}}\subseteq \mathcal{A}$ be the subalgebra of real valued functions. Since $\mathcal{A}$ separates points, $\mathcal{A}_{\mathbb{R}}$ separates points: if $x\ne y$, there exists $h\in \mathcal{A}$ such that $h(x)\ne h(y)$, so either $\text{Re}(h(x))\ne\text{Re}(h(y))$ or $\text{Im}(h(x))\ne\text{Im}(h(y))$. By [[#^b2e532]], $\mathcal{A}_{\mathbb{R}}$ is dense in $C(X, \mathbb{R})$.
> > 
> > Note that $C(X, \mathbb{C})\cong C(X, \mathbb{R})+\sqrt{ -1 }C(X, \mathbb{R})$. So $\mathcal{A}\cong \mathcal{A}_{\mathbb{R}}+\sqrt{ -1 }\mathcal{A}_{\mathbb{R}}$. Given $f\in C(X, \mathbb{C})$, $\text{Re}(f)$ and $\text{Im}(f)$ can be uniformly approximated by functions in $\mathcal{A}_{\mathbb{R}}$: $\varphi_{n}\to\text{Re}(f)$ and $\psi_{n}\to\text{Im}(f)$. Therefore, $\varphi_{n}+\sqrt{ -1 }\psi_{n}\to\text{Re}(f)+\sqrt{ -1 }\text{Im}(f)=f$. It follows that $\mathcal{\overline{A}}=C(X, \mathbb{C})$ and $\mathcal{A}$ is dense.
> 

^c03f69



[^1]: $f_{n}(x)$ is a monotone sequence for every $x\in X$

[^2]: $U_{y}=(h_{xy}-f)^{-1}(-\infty, \epsilon)$. 

[^3]: We can say this because the polynomials $p_{n}$ have zero constant coefficient. If that were not the case, we would have had to require $\mathcal{A}$ to contain constants.
