---
id: "324"
date: 2025-10-22
time: 15:03
tags:
  - ANA2
  - Lecture
---
> [!Definition]
> $X$ is said to be locally compact if for all $x\in X$, there exists open $U\ni x$ such that $\overline{U}$ is compact. $\overline{U}$ may be called a **compact neighborhood**.

A normed linear space is locally compact iff it is finite dimensional. Open subsets of compact metric spaces are locally compact.

# One point compactification

Let $X$ be locally compact (metric space). Let $\overline{X}=X\cup \{ \infty \}$. $U\subseteq \overline{X}$ is defined to be open if
1. $\infty \not\in U$ and $U$ is open in $X$, or
2. $\infty\in U$ and $U^{c}$ is compact in $X$. 
Let $\tilde{\tau}$ denote the aforedefined topology on $\overline{X}$. Easy to verify that $(\overline{X}, \tilde{\tau})$. 

[!Proposition]
$(\overline{X}, \tilde{\tau})$ is compact.

[!Proof]-
Let $\{ U_{\alpha} \}_{\alpha\in I}$ cover $\overline{X}$. One of them must contain $\infty$, and hence their complement is compact, which then has a finite subcover.


[!Remark]
In an NLS, locally compact $\iff$ all closed balls are compact.

> [!Fact]
> If $X$ is locally compact and separable then $(\overline{X}, \tilde{\tau})$ is metrizable.

[!Definition]
Let $X$ be locally compact. Define
$$
C_{0}(X):=\{ f\in C(X):\text{for }\epsilon> 0~\exists K\subseteq X \text{ such that }|f(t)|<\epsilon \forall t\in K^{c}\}
$$
$K$ is compact in the above definition.

[!Exercise]
$C_{0}(X)$ is a complete NLS wrt $\lVert  \rVert_{\infty}$.


[!Theorem] Stone-Weierstrass, stronger version
Suppose $\mathcal{A}\subseteq C_{0}(X)$ is a subalgebra which separates points and does not vanish on $X$. Then $\mathcal{A}$ is dense in $C_{0}(X)$. 

[!Proof]-


[!Theorem]
$X$ is compact. $\mathcal{A}\subseteq C(X)$ separates points. Then either $\mathcal{\overline{A}}=C(X)$ or $\mathcal{\overline{A}}=\mathcal{A}_{x_{0}}$ for some $x_{0}$, where $\mathcal{A}_{x_{0}}$ is the set of all $f\in C(X)$ which vanish at $x_{0}$.

[!Proof]-
If $1\in \mathcal{\overline{A}}$, then $\mathcal{\overline{A}}=C(X)$. So assume $1\not\in \mathcal{\overline{A}}$. There exists $x_{0}\in X$ such that $f(x_{0})=0$ for all $f\in \mathcal{\overline{A}}$. 

Claim: $\mathcal{\overline{A}}=\{ f\in C(X):f(x_{0})=0 \}$. 


[!Proposition]
Let $X$ be locally compact. There exists $\varphi:C_{0}(X)\to \{ f\in C(\overline{X}):f(\infty)=0 \}$ isometric isomorphism (linear bijective norm preserving ring homomorphism). 

