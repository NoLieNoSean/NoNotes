---
id: "324"
date: 2025-10-22
time: 15:03
tags:
  - ANA2
  - Lecture
  - Processed
---
# More generalizations of S-W

> [!Theorem] Stone-Weierstrass, v4
> Let $X$ be a compact metric space, and let $\mathcal{A}\subseteq C(X, \mathbb{R})$ be a subalgebra which separates points. Then either $\mathcal{\overline{A}}=C(X, \mathbb{R})$ or $\mathcal{\overline{A}}=\mathcal{A}_{x_{0}}$ for some $x_{0}$, where $\mathcal{A}_{x_{0}}$ is the set of all $f\in C(X, \mathbb{R})$ which vanish at $x_{0}$.
> 
> > [!Proof]-
> > 
> > If $1\in \mathcal{\overline{A}}$, then $\mathcal{\overline{A}}=C(X)$ by [[LEC ANA2 11#^b2e532]].  So assume $1\not\in \mathcal{\overline{A}}$. By [[LEC ANA2 11#^54eba1]], there exists $x_{0}\in X$ such that $f(x_{0})=0$ for all $f\in \mathcal{\overline{A}}$. We will show that $\mathcal{\overline{A}}=\{ f\in C(X):f(x_{0})=0 \}$. 
> > 
> > Define $\tilde{\mathcal{A}}:=\{ f+c1:c\in \mathbb{R}, f\in \mathcal{A} \}$. Note that $\tilde{\mathcal{A}}$ is a unital subalgebra of $C(X, \mathbb{R})$. $\tilde{\mathcal{A}}$ separates points since $\mathcal{A}$ separates points. By [[LEC ANA2 11#^b2e532]], $\tilde{A}$ is dense in $C(X, \mathbb{R})$. Suppose $g\in C(X)$ such that $g(x_{0})=0$. There exists a sequence $\{ f_{n}+c_{n} \}\subseteq \tilde{A}$ converging uniformly to $g$. Since $f_{n}(0)=0$ for each $n$, we must have $\{ c_{n} \}\to 0$. It follows that $\{ f_{n} \}$ converges uniformly to $g$. 
> 

^04f340

## S-W for locally compact spaces

> [!Definition]
> $X$ is said to be **locally compact** if for all $x\in X$, there exists open $U\ni x$ such that $\overline{U}$ is compact. $\overline{U}$ may be called a **compact neighborhood**.

*A normed linear space is locally compact iff it is finite dimensional*. Open subsets of compact metric spaces are locally compact. 

In an NLS, locally compact $\iff$ all closed balls are compact.

> [!Definition]
> Let $(X, \tau)$ be a locally compact metric space[^1]. Let $\overline{X}=X\cup \{ \infty \}$. $U\subseteq \overline{X}$ is defined to be open if
> 1. $\infty \not\in U$ and $U$ is open in $X$, or
> 2. $\infty\in U$ and $U^{c}$ is compact.
> 
> Let $\overline{\tau}$ denote the collection of subsets declared open. 

> [!Claim]
> $(\overline{X}, \overline{\tau})$ is a topological space. 
> 
> > [!Proof]-
> > 
> > It is clear that $\overline{X}, \emptyset\in \overline{\tau}$. Let $\bigcup_{\alpha\in I}U_{\alpha}$ be an arbitrary union of open sets in $\overline{\tau}$. If none of them contain $\infty$, then their union is open in $X$, and hence open in $\overline{X}$. If one of the $U_{\alpha}$'s, say $U_{\alpha'}$, contains $\infty$, rewrite the union as $\left( \bigcap_{\alpha\in I}(U_{\alpha}^{c}\cap X) \right)^{c}$. Note that each $U_{\alpha}^{c}\cap X$ is closed in $X$, and $U_{\alpha'}^{c}\cap X=U_{\alpha'}^{c}$ is compact. It follows that the intersection is compact, so its complement is open in $\overline{X}$. Similar analysis shows that the open sets in $\overline{\tau}$ are closed under finite intersections.
> 
> 

> [!Claim]
> $(\overline{X}, \tilde{\tau})$ is compact.
> 
> > [!Proof]-
> > Let $\{ U_{\alpha} \}_{\alpha\in I}$ cover $\overline{X}$. One of them must contain $\infty$, and hence their complement is compact, which then has a finite subcover.
> 

^9f6702

Note the similarities to the two-point compactification performed in [[AS ANA2 1#^4391a5]]. 

We will not prove the following fact:

> [!Fact]
> If $X$ is a locally compact and separable metric space then $(\overline{X}, \overline{\tau})$ is metrizable.

^94c81e

> [!Definition]
> Let $X$ be a locally compact metric space. Define
> $$
> C_{0}(X):=\left\{ f\in C(X):\forall\epsilon> 0\enspace\exists K\underset{\text{cpt}}{\subseteq} X \enspace\text{s.t.}\enspace|f(t)|<\epsilon \enspace\forall t\in K^{c} \right\} 
> $$
> 
> 

> [!Exercise]
> $C_{0}(X)$ with the norm $\lVert \cdot \rVert_{\infty}$ is a Banach space.
> 
> > [!Proof]-
> > It is clear that $C_{0}(X)\subseteq C_{b}(X)$, which we know to be a Banach space by [[LEC ANA2 3#^e12a1f]]. Let $\{ f_{n} \}$ be a sequence in $C_{0}(X)$ converging to $f\in C_{b}(X)$. Let $\epsilon> 0$. Let $N$ be such that $\lVert f_{N}-f \rVert<\epsilon/2$. Let $K$ be a compact subset of $X$ such that $|f_{N}|<\epsilon/2$ on $K^{c}$.  It follows that $|f|<\epsilon$ on $K^{c}$. 
> 

It is now clear that $C_{0}(X)$ is an $\mathbb{R}$-algebra.

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

^a62cff


> [!Theorem] Stone-Weierstrass, v5
> Let $X$ be a locally compact metric space. Suppose $\mathcal{A}\subseteq C_{0}(X, \mathbb{R})$ is a subalgebra which separates points and does not vanish on $X$. Then $\mathcal{A}$ is dense in $C_{0}(X, \mathbb{R})$.
> 
> > [!Proof]-
> > Let $\varphi$ be as in [[#^a62cff]]. Then, $\varphi(\mathcal{A})\subseteq C(\overline{X}, \mathbb{R})$ is a subalgebra which separates points. From [[#^9f6702]], [[#^94c81e]] and [[#^04f340]], $\overline{\varphi(\mathcal{A})}=\{ f\in C(\overline{X}, \mathbb{R}):f(\infty)=0 \}$. Since $\varphi$ is an isometry between $C_{0}(X, \mathbb{R})$ and $\{ f\in C(\overline{X}, \mathbb{R}):f(\infty)=0 \}$, it follows that $\mathcal{\overline{A}}=C_{0}(X, \mathbb{R})$. 
> 

^8f3e36





[^1]: Much of what we do here can be generalized to $X$ being a topological space with some additional hypotheses.

[^2]: The complements here are taken in $X$!
