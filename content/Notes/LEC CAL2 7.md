---
tags:
  - CAL2
  - Lecture
date: 2025-09-25
time: 10:57
---
# Partitions of unity

The **support** $\text{supp}(f)$ of a function $f$ is defined to be the closure of the set of all points at which $f$ is nonzero.

> [!Lemma] @spivakCalculusManifoldsModern1965 Problem 1-22
> If $U$ is open and $C\subseteq U$ is compact, there exists a compact set $D$ such that $C\subseteq D^{\circ}$ and $D\subseteq U$.

^e725d8

> [!Lemma]
> If $\{ U_{1}, \dots, U_{n} \}$ is an open cover of a compact set $A$, then there exist compact sets $D_{i}\subseteq U_{i}$ such that $\{ D_{1}^{\circ}, \dots, D_{n}^{\circ} \}$ covers $A$.
> 
> > [!Proof]-
> > 
> > Let
> > $$
> > C_{1}:=A\setminus(U_{2}\cup U_{3}\cup\dots \cup U_{n}).
> > $$
> > $C_{1}\subseteq U_{1}$ is compact. By [[#^e725d8]], there exists compact $D_{1}\subseteq U_{1}$ such that $C_{1}\subseteq D_{1}^{\circ}$. 
> > 
> > Suppose compact $D_{1}, \dots, D_{k}$ have been chosen so that $\{ D_{1}^{\circ} , \dots, D_{k}^{\circ}, U_{k+1}, \dots, U_{n}\}$ covers $A$. Let
> > $$
> > C_{k+1}:= A\setminus(D_{1}^{\circ}\cup\dots \cup D_{k}^{\circ}\cup U_{k+2}\cup\dots \cup U_{n}).
> > $$
> > $C_{k+1}\subseteq U_{k+1}$ is compact, so there exists compact $D_{k+1}\subseteq U_{k+1}$ such that $C_{k+1}\subseteq D_{k+1}^{\circ}$.
> 

^0ebb23


> [!Lemma] @spivakCalculusManifoldsModern1965 Problem 2-26
> Suppose $A\subseteq \mathbb{R}^{n}$ is open, $C\subseteq A$ is compact. Then, there exists a $C^{\infty}$ function $f:A\to \mathbb{R}$ such that $f(x)=1$ for all $x\in C$ and $f$ is $0$ outside a closed set $B$ in $A$, that is, $C\subseteq\text{supp}(f)\subseteq A$.

^cb0f59

> [!Theorem] @spivakCalculusManifoldsModern1965 3-11
> Let $A\subseteq \mathbb{R}^{n}$ and let $\mathcal{O}$ be an open cover of $A$. Then there is a *countable* collection $\Phi$ of $C^{\infty}$ functions $\varphi$ defined in an open set containing $A$, with the following properties:
> 
> 1. For each $x\in A$ and $\varphi\in\Phi$, we have $0\leq\varphi(x)\leq 1$.
> 2. For each $x\in A$, there exists an open set $V\ni x$ such that all but finitely many $\varphi\in\Phi$ are $0$ on $V$.
> 3. For each $x\in A$, we have $\sum_{\varphi\in\Phi}\varphi(x)=1$ (this is a finite sum by (2))
> 4. For each $\varphi\in\Phi$, there exists $U\in \mathcal{O}$ such that $\text{supp}(\varphi)\subseteq U$. 
> 
> A collection $\Phi$ satisfying (1) to (3) is called a **$C^{\infty}$ partition of unity** for $A$. If $\Phi$ also satisfies (4), it is said to be **subordinate** to the cover $\mathcal{O}$. 
> 
> > [!Proof]-
> > 
> > **Case 1: $A$ is compact**
> > 
> > Let $\{ U_{1}, \dots, U_{n} \}\subseteq \mathcal{O}$ be a finite subcover of $A$. It clearly suffices to construct a partition of unity subordinate to this cover. Let $\{ D_{1}, \dots, D_{n} \}$ be given by [[#^0ebb23]]. By [[#^cb0f59]], we can choose non-negative $C^{\infty}$ functions $\psi_{i}$ with $D_{i}\subseteq\text{supp}(\psi_{i})\subseteq U_{i}$. 
> > 
> > Let $U=D_{1}^{\circ}\cup\dots \cup D_{n}^{\circ}$. It follows that $\psi_{1}(x)+\dots+\psi_{n}(x)> 0$ for all $x$ in $U$. On $U$ we can define
> > $$
> > \varphi_{i}(x):=\frac{\psi_{i}(x)}{\psi_{1}(x)+\dots+\psi_{n}(x)}.
> > $$
> > By [[#^cb0f59]], there exists a $C^{\infty}$ function $f:U\to[0, 1]$ which is $1$ on $A$ and $0$ outside of some closed set in $U$. $\Phi=\{ f\varphi_{1}, \dots, f\varphi_{n} \}$ is the desired partition of unity [^1].
> > 
> > **Case 2: $A=A_{1}\cup A_{2}\cup\dots$, where each $A_{i}$ is compact and $A_{i}\subseteq A_{i+1}^{\circ}$**
> > 
> > For each $i$ let $\mathcal{O}_{i}$ consist of all $U\cap(A_{i+1}^{\circ}\setminus A_{i-2})$ for $U\in \mathcal{O}$ [^2]. Then $\mathcal{O}_{i}$ is an open cover of the compact set $B_{i}=A_{i}\setminus A_{i-1}^{\circ}$. By case 1, there is a partition of unity $\Phi_{i}$ for $B_{i}$ subordinate to $\mathcal{O}_{i}$. For each $x\in A$ the sum
> > $$
> > \sigma(x)=\sum_{\varphi\in\Phi_{i}, ~i\in \mathbb{N}}\varphi(x)
> > $$
> > is a finite sum in some open set containing $x$, since if $x\in A_{i}$, then $x$ must have a neighborhood in $A_{i+1}$, so we have $\varphi(x)=0$ for $\varphi\in\Phi_{j}$ with $j\geq i+3$. For each $\varphi$ in each $\Phi_{i}$, define $\varphi'(x)=\varphi(x)/\sigma(x)$. The collection of all $\varphi '$ is the desired partition of unity.
> > 
> > **Case 3: $A$ is open**
> > 
> > Let 
> > $$
> > A_{i}=\{ x\in A:|x|\leq i\text{ and distance from }x\text{ to }\partial A\geq 1/i \}
> > $$
> > and note that $A=A_{1}\cup A_{2}\cup\dots$. Apply case 2.
> > 
> > **Case 4: $A$ is arbitrary**
> > 
> > Let $B$ be the union of all  in . By case 3 there is a partition of unity for $B$; this is also a partition of unity for $A$.
> 

^8f65c8

Note:
- The partitions of unity we constructed were countable in every case.
- Each $\varphi\in\Phi$ is compactly supported.

[^1]: Note that the $\psi_{i}$'s (and hence the $\varphi_{i}$'s) bleed out of $U$; we introduce $f$ only to ensure that the support of each function in $\Phi$ is contained in $U$. 
[^2]: Take $A_{0}, A_{-1}$ to be $\emptyset$. 

## Integration on arbitrary open sets

So far we have defined the integrability of bounded functions on [[LEC CAL2 3, 4#^72104f|closed rectangles]] in $\mathbb{R}^{n}$, and then [[LEC CAL2 5#Integrating over Jordan measurable sets|extended this notion to bounded functions on Jordan-measurable]] subsets of $\mathbb{R}^{n}$.

Not every open set is Jordan-measurable; this could be merely due to it being unbounded, but examples of bounded open sets which are not Jordan measurable exist [@ramadasMULTIDIMENSIONALINTEGRALCALCULUS p. 54]. We now define the class of absolutely integrable functions on an *arbitrary open set* $A\subseteq \mathbb{R}^{n}$. In case $A$ is bounded and Jordan measurable, this new definition will agree with the earlier one.

> [!Definition]
> 
> An open cover $\mathcal{O}$ of an open set $A\subseteq \mathbb{R}^{n}$ is said to be **admissible** if each $U\in \mathcal{O}$ is contained in $A$. 
> 
> Let $A\subseteq \mathbb{R}^{n}$ be open and $\mathcal{O}$ be an admissible open cover. By [[#^8f65c8]], there exists a countable family $\Phi$ subordinate to $\mathcal{O}$ of nonnegative continuous functions $\varphi$ with compact support such that locally finitely many are non-zero. Let $f:A\to \mathbb{R}$ be such that
> 1. $f$ is bounded in some open set around each point of $A$ (so $f$ is bounded on any closed rectangle in $A$), and
> 2. the set of discontinuities of $f$ has measure zero.
> 
> Then,  $\int_{A}\varphi |f|$ exists[^3] for each $\varphi\in\Phi$. We define $f$ to be **integrable** if
> $$
> \sum_{\varphi\in\Phi}\int_{A}\varphi |f|< \infty.
> $$
> Since the $\varphi$'s are nonnegative, this implies $\sum_{\varphi\in\Phi}\left|\int_{A}\varphi f\right|< \infty$, which implies the absolute convergence of $\sum_{\varphi\in \Phi}\int_{A}\varphi f$, which we define to be $\tilde{\int}_{A}f$ [^6]
> $$
> \tilde{\int}_{A}f:=\sum_{\varphi\in \Phi}\int_{A}\varphi \cdot f.
> $$

^1c2a4b

[^3]:As previously noted, we cannot rely on $A$ being Jordan measurable here. Recall that $\varphi$ has compact support $C$, which must be contained in $A$ since $\mathcal{O}$ is admissible. We can cover $C$ by a collection $\mathcal{R}$ of finitely many disjoint closed rectangles. Thus, the integral $\int_{A}\varphi |f|$ becomes $\int_{C}\varphi |f|=\sum_{R\in \mathcal{R}}\int_{R}\varphi |f|$, which exists thanks to our hypotheses regarding $f$. 
[^6]: Integrals using the new definition will be embellished with ~ in this article.


The following theorem proves soundness and backward compatibility of [[#^1c2a4b]]. 

> [!Theorem] @spivakCalculusManifoldsModern1965 3-12
> 
> 1. [[#^1c2a4b]] does not depend on $\mathcal{O}$ or $\Phi$. That is, if $\Psi$ is another partition of unity subordinate to an admissible open cover $\mathcal{U}$ of $A$, then $\sum_{\psi\in\Psi}\int_{A}\psi |f|$ also converges, and
> 	$$
> 	\sum_{\varphi\in \Phi}\int_{A}\varphi \cdot  f=\sum_{\psi\in \Psi}\int_{A}\psi \cdot f.
> 	$$
> > [!Proof]-
> > 
> > Since $\varphi f=0$ except on some compact set $C$, and there are only finitely many $\psi$ which are non-zero on $C$ [^4], we can write
> > $$
> > \sum_{\varphi\in \Phi}\int_{A}\varphi \cdot f=\sum_{\varphi\in \Phi}\int_{A}\sum_{\psi\in \Psi}\psi \cdot\varphi \cdot f=\sum_{\varphi\in \Phi}\sum_{\psi\in \Psi}\int_{A}\psi \cdot\varphi \cdot f.
> > $$
> > 
> > ^77a88a
> > 
> > This result, applied to $|f|$, show the convergence of $\sum_{\varphi\in\Psi}\sum_{\psi\in\Psi}\int_{A}\psi\varphi |f|$, and hence of $\sum_{\varphi\in\Psi}\sum_{\psi\in\Psi}\left| \int_{A}\psi\varphi f \right|$. This absolute convergence justifies interchanging the order of summation in [[#^77a88a]]; the resulting expression becomes [^5]
> > $$
> > \sum_{\psi\in\Psi}\int_{A}\psi \cdot f.
> > $$
> > This result applied to $|f|$ proves convergence of $\sum_{\psi\in\Psi}\int_{A}\psi \cdot |f|$.
> 
> 2. If $A$ and $f$ are bounded, then $\tilde{\int}_{A}f$ exists.
> > [!Proof]-
> > 
> > If $A$ is contained in the closed rectangle $B$ and $|f(x)|\leq M$ for $x\in A$, and $F\subseteq\Phi$ is finite, then
> > $$
> > \sum_{\varphi\in F}\int_{A}\varphi \cdot |f|\leq\sum_{\varphi\in F}M\int_{A}\varphi =M\int_{A}\sum_{\varphi\in F}\varphi \leq M\cdot\text{Vol}(B),
> > $$
> > since $\sum_{\varphi\in F}\varphi\leq 1$ on $A$.
> 
> 3. If $A$ is Jordan-measurable and $f$ is bounded, [[#^1c2a4b]] agrees with [[LEC CAL2 5#^97bced]], that is, $\tilde{\int}_{A}f=\int_{A}f$.
> > [!Proof]-
> > 
> > If $\epsilon> 0$, there is a compact Jordan-measurable $C\subseteq A$ such that $\int_{A}1-\int_{C}1<\epsilon$. Again, there are only finitely many $\varphi\in \Phi$ which are nonzero on $C$. If $F\subseteq\Phi$ is any finite collection which includes these, then
> > $$
> > \begin{align}
> > \left| \int_{A}f-\sum_{\varphi\in F}\int_{A}\varphi \cdot f \right| & \leq \int_{A}\left| f-\sum_{\varphi\in F}\varphi \cdot f \right|  \\
> >  & \leq M\int_{A}\left( 1-\sum_{\varphi\in F}\varphi \right)  \\
> >  & \leq M\left( \int_{A}1-\int_{C}\sum_{\varphi\in F}\varphi \right) \\
> >  & = M\left( \int_{A}1-\int_{C}1 \right) \\
> >  & < M\epsilon.
> > \end{align}
> > $$
> > 
> > 
> 


[^4]: For each $x\in C$, let $V_{x}$ be a neighborhood of $x$ such that only finitely many $\varphi$'s are nonzero on $V_{x}$. $\{ V_{x}:x\in C \}$ is an open cover of $C$, of which there exists a finite subcover. 
[^5]: For each fixed $\psi$, only finitely many of the $\varphi$'s are relevant, which allows us to swap the sum and integral.



