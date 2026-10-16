---
id: "591"
date: 2026-10-16
time: 15:31
tags:
  - GANA1
  - Lecture
desc: Open mapping theorem
---
[!Remark] Remarks on H-B
1. If $X_{0}\subseteq X$ is a NLS, there exists an embedding $X_{0}^{\star}\hookrightarrow X^{\star}$, $\varphi_{0}\xmapsto{\text{H-B}}\varphi$, $\lVert \varphi_{0} \rVert=\lVert \varphi \rVert$. Of course, this is not unique (remember the choice of $t_{0}$ in the proof of H-B). 
2. Let $X$ be an NLS, $x_{0}\in X$. Then there exists $\varphi\in X^{\star}$ such that $\varphi(x_{0})=\lVert x_{0} \rVert$ and $\lVert \varphi \rVert=1$ (take $X_{0}=\mathbb{C}x_{0}$, $\varphi_{0}(zx_{0})=z\lVert x_{0} \rVert$, extend by HB). This allows us to separate points: if $x\ne y$ for $x, y\in X$, then there exists $\varphi\in X^{\star}$ with $\lVert \varphi \rVert=1$ and $\varphi(x)\ne \varphi(y)$. 
3. For $x\in X$, define $\hat{x}\in(X^{\star})^{\star}=X^{\star \star}$ by $\hat{x}(\varphi)=\varphi(x)$. Since $|\hat{x}(\varphi)|=|\varphi(x)|\leqslant \lVert \varphi \rVert\lVert x \rVert$, $\lVert \hat{x} \rVert\leqslant \lVert x \rVert$. Also there exists $\varphi$ such that $\varphi(x)=\lVert x \rVert$, so $\lVert \hat{x} \rVert=\lVert x \rVert$. 


[!Exercise] Assignments
1. Let $X_{0}\subseteq X$ be closed, $x\not\in  X_{0}$. Then there exists $\varphi\in X^{\star}$ with $\lVert \varphi \rVert=1$ such that $\varphi|_{X_{0}}\equiv 0$ and $\varphi(x)=\lVert x \rVert$. 
2. $(X/X_{0})^{\star}\cong \mathcal{A}(X_{0})\subseteq X^{\star}$, where $\mathcal{A}(X_{0})$ is the annihilator of $X_{0}$. 



---

# Open mapping theorem

See Sunder

[!Theorem]
Let $X$, $Y$ be Banach spaces. Let $T\in B(X, Y)$ be such that $T(X)=Y$. Then $T$ is an open map. 

[!Proof]-
ETP $T$ maps open balls to open balls. Note that $B(x, r)=x+rB(0, 1)$, $r> 0$. So, 
$$
T(B(x, r))=Tx+rT(B(0, 1)).
$$
Define $B_{r}^{Z}$ to be the ball of radius $r$ centered at $0$ in space $Z$ ($=X, Y$). 

ETP $T(B_{1}^{X})$ is open for $y\in T(B^{X}_{1})$, i.e., for all $y\in T(B_{1}^{X})$, we need $r> 0$ such that $B(y, r)\subseteq T(B_{1}^{X})$. 

Claim: ETP $B^{Y}_{r}\subseteq T(B_{1}^{X})$ for some $r> 0$. 
	If $y\in T(B^{X}_{1})$. Let $x\in B_{1}^{X}$ be such that $Tx=y$. Choose $\epsilon_{0}< 1-\lVert x \rVert$. Then, $y+B^{Y}_{r\epsilon_{0}}\subseteq T(B^{X}_{\lVert x \rVert+\epsilon_{0}})$. 

Now $Y=\bigcup_{n=1}^{\infty}T(B_{n}^{X})$ is complete. By Baire category theorem, there exists $n\in \mathbb{N}$ such that $\overline{T(B^{X}_{n})}=n \overline{T(B^{X}_{1})}$ contains an open ball. 

So there exists $s> 0$ such that $B(y, s)\subseteq \overline{T(B^{X}_{1})}$. It follows that $B^{Y}_{s}\subseteq \overline{T(B^{X}_{2})}$, or $B^{Y}_{s/2}\subseteq \overline{T(B^{X}_{1})}$. Let $r:=s/2$. 

For all $\epsilon> 0$, we have $B^{Y}_{r\epsilon}\subseteq T(B^{X}_{\epsilon})$. 

%%... see pics%%

---

[!Corollary]
1. Let $T:X\to Y$, $X$ and $Y$ both be Banach. If $T$ is bounded, injective, and surjective, that $T^{-1}\in B(Y, X)$. 

[!Corollary]
Let $X, Y$ be Banach spaces. Let $T\in B(X, Y)$ be injective. TFAE:
1. $T(X)$ is closed. 
2. There exists $m> 0$ such that $\lVert Tx \rVert> m\lVert x \rVert$ (i.e., $T$ is bounded below).

^ Exercise

---

# Closed graph theorem

For NLS $X, Y$, define the norm on $X\oplus Y$ by $\lVert x\oplus y \rVert=\lVert x \rVert+\lVert y \rVert$.

Let $T:X\to Y$ be linear.
$G(T):=\{ (x, Tx):x\in X \}\subseteq X\oplus Y$ is a subspace. 
$T$ is said to have closed-graph if $G(T)$ is a closed subspace. 

[!Proposition]
Let $X, Y$ be Banach spaces, and $T:X\to Y$ be linear. Then, $T$ is bounded iff $T$ has closed graph. 

[!Proof]-


