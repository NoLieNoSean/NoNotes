---
id: "591"
date: 2026-10-16
time: 15:31
tags:
  - GANA1
  - Lecture
desc: Open mapping theorem, Closed graph theorem
P1: true
P2: true
---
# Open mapping theorem

> [!Theorem] @sunderFunctionalAnalysisSpectral1997 Thm 1.5.11
> Let $X$, $Y$ be Banach spaces. Let $T\in B(X, Y)$ be such that $T(X)=Y$. Then $T$ is an open map. 
> 
> > [!Proof]-
> > 
> > For $Z=X, Y$, define $B_{r}^{Z}$ to be the ball of radius $r$ centered at $0$. For $x\in X$, $B(x, r)=x+rB^{X}_{1}$, and $T(B(x, r))=Tx+rT(B^{X}_{1})$. Therefore, it suffices to show that there exists $r> 0$ such that $B^{Y}_{r}\subseteq T(B_{1}^{X})$. 
> > 
> > 
> > We have $Y=\bigcup_{n=1}^{\infty}T(B_{n}^{X})$ by surjectivity. It follows from the [[LEC ANA2 8#^1a2743|Baire category theorem]] there exists $n\in \mathbb{N}$ such that $\overline{T(B^{X}_{n})}=n \overline{T(B^{X}_{1})}$ is not nowhere dense, so $\overline{T(B_{1}^{X})}$ has non-empty interior. Suppose $y+B^{Y}_{s}\subseteq \overline{T(B^{X}_{1})}$. Then, $B^{Y}_{s}\subseteq \overline{T(B_{1}^{X})}+\overline{T(B_{1}^{X})}=\overline{T(B_{2}^{X})}$, or $B^{Y}_{s/2}\subseteq \overline{T(B^{X}_{1})}$. Let $t=s/2$. For all $\epsilon> 0$, we have $B^{Y}_{\epsilon t}\subseteq \overline{T(B^{X}_{\epsilon})}$. In other words, for $y\in B^{Y}_{\epsilon t}$ and any $\delta> 0$, there exists $x\in B^{X}_{\epsilon}$ such that $\lVert y-Tx \rVert<\delta$. 
> > 
> > Suppose now that $y_{0}\in B_{t}^{Y}$. With $\epsilon=1$, $\delta=\frac{1}{2}t$, and $y=y_{0}$, find $x_{0}\in B^{X}_{1}$ with $y_{0}-Tx_{0}\in B^{Y}_{t/2}$. 
> > 
> > Next, with $\epsilon=\frac{1}{2}$, $\delta=\left( \frac{1}{2} \right)^{2}t$, and $y=y_{1}=y_{0}-Tx_{0}$, find $x_{1}\in B^{X}_{1/2}$ with $y_{1}-Tx_{1}\in B^{Y}_{t/4}$. 
> > 
> > Inductively, we find vectors $y_{n}\in B^{Y}_{t/2^{n}}$, $x_{n}\in B^{X}_{1/2^{n}}$ such that $y_{n+1}=y_{n}-Tx_{n}$. Observe that the series $\sum_{n=0}^{\infty}x_{n}$ is absolutely summable. By [[LEC ANA2 9#^9279fe]], it converges to a limit $x$ in $X$. On the other hand, 
> > $$
> > \begin{align}
> > y_{n+1}=y_{0}-T\left( \sum_{k=0}^{n}x_{k}  \right).
> > \end{align}
> > $$
> > Since $\lVert y_{n+1} \rVert\to 0$, we may conclude from the continuity of $T$ that $y_{0}=Tx$. Since $\lVert x \rVert< 2$, we have shown that $B_{t}^{Y}\subseteq T(B_{2}^{X})$, and hence $B^{Y}_{t/2}\subseteq T(B_{1}^{X})$. 
> 

^35707d

> [!Corollary]
> Let $T:X\to Y$, $X$ and $Y$ both be Banach. If $T$ is bounded, injective, and surjective, that $T^{-1}\in B(Y, X)$. 

> [!Corollary] @sunderFunctionalAnalysisSpectral1997 Cor 1.5.12
> Let $X, Y$ be Banach spaces. Let $T\in B(X, Y)$ be injective. TFAE:
> 1. $T(X)$ is closed. 
> 2. There exists $m> 0$ such that $\lVert Tx \rVert> m\lVert x \rVert$ (i.e., $T$ is bounded below).
> 
> > [!Proof]-
> > 
> > Suppose $T$ is bounded below and suppose $Tx_{n}\to y$. Then $\{ Tx_{n} \}$ is a Cauchy sequence, but the assumption that $T$ is bounded below then implies that $\{ x_{n} \}$ is also a Cauchy sequence which must converge to some point, whose image under $T$ must be $y$ in view of the continuity of $T$. 
> > 
> > Conversely suppose $Y_{0}=T(X)$ is closed; then also $Y_{0}$ is a Banach space in its own right. An application of the [[#^35707d|open mapping theorem]] to $T\in B(X, Y_{0})$ yields $\epsilon> 0$  such that $B^{Y_{0}}_{\epsilon}\subseteq T(B^{X}_{1})$. We claim that $\lVert Tx \rVert\geqslant \epsilon\lVert x \rVert$. It suffices to prove this for $\lVert x \rVert=1$. Suppose $\lVert Tx \rVert<\epsilon$. Let $\lambda> 1$ be such that $\lVert Tx \rVert<\lambda \lVert Tx \rVert<\epsilon$. Then, $T(\lambda x)\in B^{Y_{0}}_{\epsilon}$. Because $T$ is injective, this contradicts $B^{Y_{0}}_{\epsilon}\subseteq T(B^{X}_{1})$. 
> 

^3c11e9

> [!Corollary]
> Let $X, Y$ be Banach spaces. Let $T\in B(X, Y)$. TFAE:
> 1. $T$ is bijective. 
> 2. $T$ has a continuous inverse (in particular, $T$ is an open map). 

> [!Example] Testing the hypotheses of OMT
> Consider the [[LEC GANA1 11#^fe54b0|integral operator]] $T:C[0, 1]\to C[0, 1]$ defined by
> $$
> (Tf)(x)=\int_{0}^{x} f(t) \, dt. 
> $$
> $T$ is bounded, with $\lVert T \rVert\leqslant 1$. Observe that $T(C[0, 1])=\{ h\in C^{1}[0, 1]:h(0)=0 \}$. This image is *not closed* in $C[0, 1]$. For example, consider
> $$
> h_{n}(x)=\sqrt{ x+\frac{1}{n} }-\frac{1}{\sqrt{ n }}.
> $$
> $h_{n}\in T(C[0, 1])$ for each $n$. However, $\lVert h_{n}-h \rVert_{\infty}=1/\sqrt{ n }\to 0$ for $h(x)=\sqrt{ x }$, so $h_{n}\to h$ uniformly, and $h\not\in T(C[0, 1])$. 
> 
> Now regard $T$ as a map $C[0, 1]\to T(C[0, 1])$. This makes it a bounded linear bijection. It's inverse, however, is unbounded (the example from [[LEC GANA1 12#^6746b1]].1 works). It is easily seen that a bounded linear bijection is an open map iff its inverse is bounded. Thus, $T$ cannot be an open map. The issue is the codomain is not Banach. 


---

# Closed graph theorem

Recall that the graph of a function $f:X\to Y$ of metric spaces is the subset $G(f)\subseteq X\times Y$ defined by $G(f)=\{ (x, f(x)):x\in X \}$. If $f$ is continuous, $G(f)$ is closed. The converse is true for linear mappings between Banach spaces, making continuity and having a closed graph equivalent. 

> [!Remark]
> $G(f)$ is closed iff the following condition holds: If $x_{n}\to x$ and $Tx_{n}\to y$, then $y=Tx$. 

For NLS $X, Y$, the product $X\times Y$ can be metrized in such a way that a sequence in $X\times Y$ converges precisely when each of the coordinate sequences converges. One such metric is given by $\lVert (x, y)\rVert=\lVert x \rVert+\lVert y \rVert$, and the resulting (complete) NLS is denoted $X\oplus_{\ell_{1}}Y$. 

> [!Proposition] @sunderFunctionalAnalysisSpectral1997 Thm 1.5.14
> Let $X, Y$ be Banach spaces, and $T:X\to Y$ be linear. Then, $T$ is bounded iff $T$ has closed graph. 
> 
> > [!Proof]-
> > 
> > We only have to prove the converse. Observe that $G(T)$ is a subspace of $X\oplus_{\ell_{1}}Y$.  Since $G(T)$ is also closed, it is itself a Banach space. Define the linear map $S:G(T)\to X$ by $S(x, Tx)=x$. Clearly, $S$ is injective and bounded, with $\lVert S \rVert\leqslant 1$. By [[#^3c11e9]], $S$ is bounded below, i.e., there exists $c> 0$ such that $\lVert x \rVert\geqslant c(\lVert x \rVert+\lVert Tx \rVert)$. Therefore, $\lVert Tx \rVert\leqslant\frac{1-c}{c}\lVert x \rVert$, and $T$ is bounded. 



> [!Example] Testing the hypotheses of CGT
> Consider 
> $$
> D:(C^{1}[0, 1], \lVert \cdot \rVert_{\infty} )\to(C[0, 1], \lVert \cdot \rVert_{\infty} ), \quad f\mapsto f'.
> $$
> [[LEC GANA1 12#^6746b1|We have seen]] that $D$ is unbounded. However, $G(D)$ is closed by [[LEC ANA1 33#^94a1f8]]. This is because the domain, equipped with the supremum norm, is not complete. 

---

# Uniform Boundedness Principle

![[LEC ANA2 10#^90f996]]

See @sunderFunctionalAnalysisSpectral1997 Exr 1.5.17 for exercises. 