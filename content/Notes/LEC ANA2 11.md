---
date: 2025-10-17
time: 15:03
tags:
id: "315"
---
# Stone Weierstrass Theorem

> [!Theorem] 
> Let $X$ be a compact metric space. $f_{n}, f\in C(X)$. Suppose the sequence $\{ f_{n} \}$ is monotone ($f_{n}(x)$ is a monotone sequence for every $x\in X$) and converges pointwise to $f$. Then, $\{ f_{n} \}$ converges to $f$ uniformly.
> 
> > [!proof]-
> > We may assume $f_{n}$ converges to $0$, and is monotone decreasing. Given $\epsilon> 0$, define
> > $$
> > U_{n}:=\{ x\in X : |f_{n}(x)|<\epsilon\text{ for every }m\geq n\}=\{ x\in X:|f_{n}(x)|<\epsilon \}.
> > $$
> > These open sets $\{ U_{n} \}$ increase to $X$. Therefore by compactness of $X$, there exists $N$ such that $U_{N}=X$. 
> 


> [!Definition]
> A subset $\mathcal{A}\subseteq C(X, \mathbb{R})$ is a (unital) **subalgebra** if
> 1. $1\in \mathcal{A}$
> 2. for every $f, g\in \mathcal{A}$, $fg\in \mathcal{A}$
> 3. $\forall f, g\in \mathcal{A}$ and $\forall\alpha, \beta\in \mathbb{R}$, $\alpha f+\beta g\in \mathcal{A}$.
> 
> $\mathcal{A}$ **separates points** if for every distinct $x, y\in X$, there exists $f\in \mathcal{A}$ such that $f(x)\ne f(y)$.


> [!Lemma]
> There is a sequence $\{ p_{n} \}$ of real valued polynomials which converge uniformly to $f(x)=\sqrt{ x }$ on $[0, 1]$.
> 
> > [!Proof]-
> > Recursively define
> > $$
> > \begin{align}
> >  & p_{1}=0 \\
> >  & p_{n+1}(t)=p_{n}(t)+1/2(t-p_{n}^{2}(t)) & n\geq 1.
> > \end{align}
> > $$
> > To use Dini, we want to show $0\leq p_{n}(t)\leq \sqrt{ t }$. True for $n=1$. Assume for $n$.
> > $$
> > \begin{align}
> > 0\leq p_{n-1}(t) & =p_{n}(t)+1/2(t-p_{n}^{2}(t)) \\
> >  & \leq p_{n}(t)+1/2(\sqrt{ t }+p_{n}(t))(\sqrt{ t }-p_{n}(t)) \\
> >  & \leq p_{n}(t)+\sqrt{ t }-p_{n}(t)=\sqrt{ t }.
> > \end{align}
> > $$
> > Use this to prove that $\{ p_{n} \}$ is monotone increasing. Take the limit on both sides of the definition of $p_{n}$ to show that $\{ p_{n} \}$ converges pointwise to $\sqrt{ t }$.  We are done by Dini.
> 
> 


> [!Definition]
> A subset $S\subseteq C(X)$ is a **lattice** if for every $f, g\in S$, $\text{min}(f, g)$ and $\text{max}(f, g)$ are in $S$.

> [!Lemma]
> A closed subalgebra $\mathcal{A}$ of $C(X)$ which contains constants is a lattice.
> 
> > [!proof]-
> > Let $f\in \mathcal{A}$, $M=\lVert f \rVert_{\infty}$. Note that $f^{2}/M^{2}\in \mathcal{A}$. Let $\{ p_{n} \}$ be a sequence of polynomials uniformly converging to $\sqrt{ t }$ on $[0, 1]$. $p_{n}\circ f^{2}/M^{2}$ is a polynomial in $f^{2}/M^{2}$, so $p_{n}\circ f^{2}/M^{2}\in \mathcal{A}$ for every $n$. So, $p_{n}\circ f^{2}/M^{2}$ converges uniformly to $|f|/M$. Since $\mathcal{A}$ is closed, $|f|/M\in \mathcal{A}$, so $|f|\in \mathcal{A}$. 
> > $$
> > \begin{align}
> > \text{min}(f, g) & =\frac{1}{2}(f+g-|f-g|), \\
> > \text{max}(f, g) & =\frac{1}{2}(f+g+|f-g|). \\
> > \end{align}
> > $$


[!Theorem] Stone-Weierstrass
Let $X$ be a compact metric space. Let $\mathcal{A}\subseteq C(X)$ be a subalgebra which contains constants and separates points. Then, $\mathcal{A}$ is dense in $C(X)$. 

[!Proof]-
Let $f\in C(X)$, distinct $x, y\in X$. There exists $h\in \mathcal{A}$ such that $h(x)\ne h(y)$. Define
$$
h_{xy}(z):=f(x)+(f(y)-f(x))\frac{h(z)-h(x)}{h(y)-h(x)}.
$$
Given $\epsilon> 0$, for $x\in X$, 
$$
U_{y}:=\{ z\in X :h_{xy}(z)< f(z)+\epsilon\}.
$$
These are open sets, and $X=\bigcup_{y\in X}U_{y}=\bigcup_{i=1}^{n}U_{y_{i}}$ ($X$ is compact).
$$
h_{x}=\text{min}\{ h_{xy_{1}}, \dots, h_{xy_{n}} \}\in \mathcal{\overline{A}},
$$
since $\mathcal{\overline{A}}$ is a lattice. Now vary $x\in X$:
$$
V_{x}=\{ y\in X:h_{x}(z)> f(z)-\epsilon \}.
$$
These are open sets, and $X=\bigcup_{x\in X}V_{x}=\bigcup_{i=1}^{m}V_{x_{i}}$ ($X$ is compact).
$$
h=\text{min}\{ h_{x_{1}}, \dots, h_{x_{m}} \}\in \mathcal{\overline{A}},
$$
since $\mathcal{\overline{A}}$ is a lattice. For all $z\in X$,
$$
f(z)-\epsilon< h(z)< f(z)+\epsilon.
$$
so $\lVert f-h \rVert_{\infty}<\epsilon$. So, $\mathcal{\overline{A}}$ is dense in $C(X, \mathbb{R})$. But, $\mathcal{\overline{A}}$ is closed, so $\mathcal{\overline{A}}=C(X, \mathbb{R})$, so $\mathcal{A}$ is dense in $C(X)$. 


[!Corollary]
Let $K\subseteq \mathbb{R}^{n}$ be compact. Then polynomials in coordinates $x_{1}, \dots, x_{n}$ are dense in $C(K, \mathbb{R})$. 


[!Theorem] Stone-Weierstrass over $\mathbb{C}$
Let $\mathcal{A}\subseteq C(X, \mathbb{C})$ be a subalgebra containing constants and complex conjugates (i.e $f\in \mathcal{A}$ $\implies$ $\overline{f}\in \mathcal{A}$). Assume $\mathcal{A}$ separates points. Then $\mathcal{A}$ is dense in $C(X, \mathbb{C})$.

[!Proof]-
Let $f\in \mathcal{A}$, then $\text{Re}(f)=(f+\overline{f})/2\in \mathcal{A}$ and $\text{Im}(f)=(f-\overline{f})/2i\in \mathcal{A}$. Let $\mathcal{A}_{\mathbb{R}}\subseteq \mathcal{A}$ be the subalgebra of real valued functions. Since $\mathcal{A}$ separates points, $\mathcal{A}_{\mathbb{R}}$ separates points. If $x\ne y$, there exists $h\in \mathcal{A}$ such that $h(x)\ne h(y)$. So, either $\text{Re}(h(x))\ne\text{Re}(h(y))$ or $\text{Im}(h(x))\ne\text{Im}(h(y))$. By the vanilla stone-weierstrass theorem, $\mathcal{A}_{\mathbb{R}}$ is dense in $C(X, \mathbb{R})$.

Note that $C(X, \mathbb{C})\cong C(X, \mathbb{R})+\sqrt{ -1 }C(X, \mathbb{R})$. So $\mathcal{A}\cong \mathcal{A}_{\mathbb{R}}+\sqrt{ -1 }\mathcal{A}_{\mathbb{R}}$. Given $f\in C(X, \mathbb{C})$, $\text{Re}(f)$ and $\text{Im}(f)$ can be uniformly approximated by functions in $\mathcal{A}_{\mathbb{R}}$. So, we have $\varphi_{n}\to\text{Re}(f)$ and $\psi_{n}\to\text{Im}(f)$. Therefore, $\varphi_{n}+\sqrt{ -1 }\psi_{n}\to\text{Re}(f)+\sqrt{ -1 }\text{Im}(f)=f$. Thus, $\mathcal{\overline{A}}=C(X, \mathbb{C})$, so $\mathcal{A}$ is dense.
