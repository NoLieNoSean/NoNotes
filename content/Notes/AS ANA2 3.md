---
id: "349"
date: 2025-11-08
time: 15:41
tags:
  - ANA2
---
# Problem 1

Let $A=\{ z:z=e^{ i\sin t } , t\in \mathbb{R}\}$. $A$ is the image of the connected space $\mathbb{R}$ under the continuous map $t\mapsto e^{ i\sin t }$. By [[LEC ANA1 22#^26ad1a]], $A$ is connected. 

---

# Problem 2

Let $\varphi:X\to \{ \pm 1 \}$ be any continuous function. For each $y\in Y$, $f^{-1}(y)$ is connected, so $\varphi$ is constant on $f^{-1}(y)$ by [[LEC ANA2 13#^440651]]. This allows us to define $\psi:Y\to \{ \pm 1 \}$ by $\psi(y)=\varphi(f^{-1}(y))$. Since $f$ is surjective, $X$ is compact, and $\varphi=\psi \circ f$, $\psi$ is continuous by [[AS ANA2 2#^64d5ef|assignment 2, p4]] . Let $C\subseteq Y$ be connected. Then, $\psi$ is constant on $C$. For all $x\in f^{-1}(C)$, $\varphi(x)=\psi(f(x))=\psi(C)$. Thus, $\varphi$ is constant on $f^{-1}(C)$. Since $\varphi$ was chosen to be any arbitrary continuous map, it follows that $f^{-1}(C)$ is connected. 

```tikz
\usepackage{tikz-cd, amsmath, amssymb}
\begin{document}
\begin{tikzcd}
X\ar[r, "f"]\ar[dr, "\varphi"']&Y\ar[d, "\psi"]\\
&\{ \pm 1 \}
\end{tikzcd}
\end{document}
```



---

# Problem 3

Consider $\sin x\in C(\mathbb{R}, \mathbb{R})$. If $f(x)\in \mathcal{B}$, 
$$
\begin{align}
\lVert f-\sin \rVert _{\infty} & =\sup_{x\in \mathbb{R}} |f(x)-\sin x| \\
 & =\sup_{|x|> M}|f(x)-\sin x| \\
 & \geqslant  \frac{1}{2}.
\end{align}
$$
Thus, $\mathcal{B}$ is not dense in $C(\mathbb{R}, \mathbb{R})$. This does not contradict the Stone-Weierstrass Theorem ([[LEC ANA2 11#^b2e532]]), since $\mathbb{R}$ is not compact.

---

# Problem 4

Consider $\mathcal{B}=\{ f\cdot g:f, g\in C([0, 1]) \}\subseteq C([0, 1]^{2}, \mathbb{R})$. $\mathcal{B}$ is clearly unital. The map $((x, y)\mapsto x)\in \mathcal{B}$ separates $(x_{1}, y_{1}), (x_{2}, y_{2})\in[0, 1]^{2}$ if $x_{1}\ne x_{2}$, and $((x, y)\mapsto y)\in \mathcal{B}$ separates them if $x_{1}=x_{2}$. Thus, $\mathcal{B}$ is dense in $C([0, 1]^{2}, \mathbb{R})$. Thus, there exists a sequence $\{ f_{n}\cdot g_{n} \}_{n=1}^{\infty}\subseteq \mathcal{B}$ such that $f_{n}\cdot g_{n}\rightrightarrows F$. 
$$
\begin{align}
\int_{0}^{1} \int_{0}^{1} F^{2}(x, y) \, dx  \, dy  & =\int_{0}^{1} \int_{0}^{1} \lim_{ n \to \infty } (f_{n}\cdot g_{n})(x, y)F(x, y) \, dx  \, dy \\
  & = \lim_{ n \to \infty } \int_{0}^{1} \int_{0}^{1} f_{n}(x)g_{n}(y)F(x, y) \, dx  \, dy  \\
 & =0,
\end{align}
$$
by hypothesis.

---

# Class assignments


> [!Exercise]
> $C_{0}(X)$ with the norm $\lVert \cdot \rVert_{\infty}$ is a Banach space.
> 
> > [!Proof]-
> > It is clear that $C_{0}(X)\subseteq C_{b}(X)$, which we know to be a Banach space by [[LEC ANA2 3#^e12a1f]]. Let $\{ f_{n} \}$ be a sequence in $C_{0}(X)$ converging to $f\in C_{b}(X)$. Let $\epsilon> 0$. Let $N$ be such that $\lVert f_{N}-f \rVert<\epsilon/2$. Let $K$ be a compact subset of $X$ such that $|f_{N}|<\epsilon/2$ on $K^{c}$.  It follows that $|f|<\epsilon$ on $K^{c}$. 
> 

> [!Proposition]
> There exists continuous and surjective $f:\mathcal{C}\to[0, 1]$. 
> 
> > [!Proof]-
> > Define $f$ by
> > $$
> > \begin{align}
> > f\left( \sum_{i=1}^{\infty} \frac{a_{i}}{3^{i}} \right) =\sum_{i=1}^{\infty} \frac{a_{i}}{2^{i+1}}.
> > \end{align}
> > $$
> > Let $x\in \mathcal{C}$ and $f(x)=y$. Let $\epsilon> 0$. Choose $n$ such that $1/2^{n}<\epsilon$. Let $2\delta=1/3^{n}$. The ternary representations of all elements in $(x-\delta, x+\delta)\cap \mathcal{C}$ will have their first $n$ digits fixed. If $x'$ is such an element, then 
> > $$
> > |f(x)-f(x')|\leqslant \sum_{i=n+1}^{\infty} \frac{1}{2^{i}}=\frac{1}{2^{n}}<\epsilon.
> > $$
> > Thus, $f$ is continuous. 
> 

Note that $f$ is not injective, since $f(0.0\overline{2})=f(0.2)$. 

> [!Lemma]
> The inner product in continuous map from $H\times H$ to $\mathbb{C}$, that is, if $\{ \mathbf{x}_{n} \}\to \mathbf{x}$ and $\{ \mathbf{y}_{n} \}\to \mathbf{y}$, then $\langle \mathbf{x}_{n}, \mathbf{y}_{n} \rangle\to \langle \mathbf{x}, \mathbf{y} \rangle$. 
> 
> > [!Proof]-
> > $$
> > \begin{align}
> > \left| \langle \mathbf{x}_{n}, \mathbf{y}_{n} \rangle -\langle \mathbf{x}, \mathbf{y} \rangle  \right|  & \leqslant |\langle \mathbf{x}_{n}, \mathbf{y}_{n} \rangle -\langle \mathbf{x}_{n}, \mathbf{y} \rangle |+|\langle \mathbf{x}_{n}, \mathbf{y} \rangle -\langle \mathbf{x}, \mathbf{y} \rangle | \\
> >  & =|\langle \mathbf{x}_{n}, \mathbf{y}_{n}-\mathbf{y} \rangle |+|\langle \mathbf{x}_{n}-\mathbf{x}, \mathbf{y} \rangle | \\
> >  & \leqslant \lVert \mathbf{x}_{n} \rVert \lVert \mathbf{y}_{n}-\mathbf{y} \rVert +\lVert \mathbf{x}_{n}-\mathbf{x} \rVert \lVert \mathbf{y} \rVert  \\
> >  & \to 0 \text{ as }n\to \infty.
> > \end{align}
> > $$
> > 
> 

> [!Proposition]
> Let $X$ be locally compact. There exists an isomorphism $\varphi:C_{0}(X, \mathbb{R})\to \{ f\in C(\overline{X}, \mathbb{R}):f(\infty)=0 \}$ (bijective linear norm preserving ring homomorphism). 
> 
> > [!Proof]-
> > 
> > We have the obvious map $f\mapsto \varphi(f)$ where
> > $$
> > (\varphi (f))(t)=\begin{cases}
> > f(t) & t\in X \\
> > 0 & t=\infty .
> > \end{cases}
> > $$
> > First, we have to show that $\varphi(f)\in C(\overline{X})$. Let $O$ be an open subset of $\mathbb{R}$ not containing $0$. Then, $(\varphi(f))^{-1}(O)=f^{-1}(O)$, which is open in $\overline{X}$ since it is open in $X$ and doesn't contain $\infty$. Suppose $0\in O$. Let $\epsilon> 0$ be such that $(-\epsilon, \epsilon)\subseteq O$. There exists compact $K\subseteq X$ such that[^2] $f(K^{c})\subseteq(-\epsilon, \epsilon)$, or $f^{-1}((-\epsilon, \epsilon)^{c})\subseteq K$. Note that $f^{-1}(O)^{c}=f^{-1}(O^{c})\subseteq f^{-1}((-\epsilon, \epsilon)^{c})\subseteq K$. Since $O^{c}$ is closed and $f$ is continuous, $f^{-1}(O)^{c}$ is closed in $X$. Since it is a subset of a compact set, it follows that $f^{-1}(O)^{c}$ is compact. It follows that $(\varphi(f))^{-1}(O)$ is open in $\overline{X}$.
> > 
> > The map is clearly injective, linear, norm preserving, and a ring homomorphism. We have to show surjectivity. Take any $g\in C(\overline X,\mathbb R)$ with $g(\infty)=0$. Put $f:=g|_{X}$. We need to check $f\in C_{0}(X,\mathbb R)$, i.e. $f$ is continuous on $X$ (obvious) and $f$ vanishes at infinity: for every $\epsilon>0$ there is a compact $K\subset X$ with $|f(x)|<\varepsilon$ for all $x\notin K$. 
> > 
> > Since $g$ is continuous at $\infty$ and $g(\infty)=0$ there exists an open neighborhood $U\subset\overline X$ of $\infty$ with $|g(y)|<\varepsilon$ for all $y\in U$. By the definition of the one–point compactification, $K:=\overline X\setminus U$ is compact and $K\subset X$. For any $x\in X$ with $x\not\in K$ we have $x\in U\cap X$, hence $|f(x)|=|g(x)|<\varepsilon$. Finally, $\varphi(f)$ is exactly the extension of $f$ that equals $0$ at $\infty$, so $\varphi(f)=g$. Therefore $\varphi$ is surjective.
> 
