---
tags:
  - Lecture
  - CAL2
  - Processed
date: 2025-08-12
time: 10:31
---

> [!Recall]
> Let $R\subseteq \mathbb{R}^{n}$ be a rectangle. Let $f:R\to \mathbb{R}$ be bounded. Partitions of $R$ are products of partitions. $U(P, f)$ and $L(P, f)$ are defined analogously to the one variable case. As expected, $f$ is said to be Riemann integrable on $R$ if
> $$
> \inf_{P}U(P, f)=\sup_{P}L(P, f)\equiv \int_{R}f.
> $$
> 

> [!Example]
> Let $f:R\to \mathbb{R}$ be the constant function, $f(x)=c$ for all $x\in R$. Then, 
> $$
> \int_{R}f=c \text{Vol}(R).
> $$
> 

> [!Example]
> Let $f:[0, 1]\times[0, 1]\to R$, be defined by 
> $$
> f(x, y)=\begin{cases}
> 0 & x\in \mathbb{Q} \\
> 1 & x\not\in \mathbb{Q}.
> \end{cases}
> $$
> Clearly, $L(P, f)=0$ and $U(P, f)=1$ for every partition $P$. It follows that $f$ is not integrable on $[0, 1]\times[0, 1]$.

---

# Characterizing integrable functions on closed rectangles

## Measure zero and content zero

> [!Definition]
> Let $A\subseteq \mathbb{R}^{n}$. We say that $A$ has **measure zero** if for all $\epsilon> 0$ there is a countable cover $\{ U_{1}, U_{2}, \dots \}$ of $A$ by closed rectangles $U_{i}$ such that
> $$
> \begin{align}
> \sum_{i=1}^{\infty} \text{Vol}(U_{i})<\epsilon.
> \end{align}
> $$

^aeb6a3

Remarks:
1. If $A$ is finite, then $A$ has measure zero.
2. If $A$ is countable, then $A$ has measure zero (it is easy to construct a countable cover consisting of shrinking rectangles such that the sum of their areas is less than $\epsilon$).
3. If $A$ has measure $0$ and $B\subseteq A$, $B$ has measure $0$.
4. Open rectangles can be used in place of closed rectangles in the definition of measure zero (we will be using this fact often).
5. A countable union of measure zero sets is measure zero (the proof is exactly what you would expect).

> [!Definition]
> A subset $A\subseteq \mathbb{R}^{n}$ has **content zero** if for all $\epsilon> 0$, there is a finite cover $\{ U_{1}, \dots, U_{k} \}$ of $A$ by closed rectangles such that 
> $$
> \sum_{i=1}^{k} \text{Vol}(U_{i})<\epsilon.
> $$
> 

Clearly, $A$ has content zero $\implies$ $A$ has measure zero. The converse is true if $A$ is compact:

> [!Lemma]
> If $A$ is compact and has measure zero, $A$ has content zero.
> 
> > [!Proof]-
> > Let $\epsilon> 0$. Since $A$ has measure $0$, there exists a cover of $A$ by open rectangles such that their cumulative volume is less than $\epsilon$. Since $A$ is compact, a finite number $U_{1}, \dots, U_{n}$ of the $U_{i}$ also cover $A$.

^322cf9

If $a< b$, then $[a, b]\subset \mathbb{R}$ does not have content zero by @spivakCalculusManifoldsModern1965 3-5. It then follows from [[#^322cf9]] that $[a, b]$ does not have measure zero either. 

## Oscillations

> [!Definition]
> Let $f:A\to \mathbb{R}$ be a bounded function, $A\subseteq \mathbb{R}^{n}$. Let $x\in A$, $\delta> 0$.
> $$
> \begin{align}
>  & M(x, f, \delta)\equiv \sup \{ f(a)\ : \  a\in A, |x-a|<\delta \} \\
>  & m(x, f, \delta)\equiv \inf \{ f(a)\ : \  a\in A, |x-a|<\delta \} \\\\
>  & o(f, x)\equiv \lim_{ \delta \to 0 } (M(x, f, \delta)-m(x, f, \delta)).
> \end{align}
> $$
> $o(f, x)$ is called the **oscillation** of $f$ at $x$.

> [!Theorem] @spivakCalculusManifoldsModern1965 1-10
> The bounded function $f$ is continuous at $a$ iff $o(f, a)=0$.
> 
> > [!Proof]-
> > 
> > $(\implies)$ Let $\epsilon> 0$. Choose $\delta> 0$ such that $|f(x)-f(a)|<\epsilon$ for all $x\in B_{\delta}(a)$; thus $M(a, f, \delta)-m(a, f, \delta)< 2\epsilon$. $o(f, a)=0$ follows. 
> > 
> > $(\impliedby)$ Let $\epsilon> 0$. Choose $\delta> 0$ such that for all $M(a, f, \delta)-m(a, f, \delta)<\epsilon$. It follows that for $x\in B_{\delta}(a)$, $|f(x)-f(a)|<\epsilon$.

> [!Theorem] @spivakCalculusManifoldsModern1965 1-11
> Let $A\subseteq \mathbb{R}^{n}$ be closed. If $f:A\to \mathbb{R}$ is any bounded function, and $\epsilon> 0$, then $\{ x\in A:o(f, x)\geq \epsilon \}$ is closed.
> 
> > [!Proof]-
> > Let $B=\{ x\in A:o(f, x)\geq \epsilon \}$. We will show that $\mathbb{R}^{n}-B$ is open. If $x\in \mathbb{R}^{n}-B$, either $x\not\in A$ or $x\in A$ and $o(f, x)<\epsilon$. In the first case, since $A$ is open, there is a neighborhood $N$ of $x$ such that $N\subseteq \mathbb{R}^{n}-A\subseteq \mathbb{R}^{n}-B$. In the second case, there is a $\delta> 0$ such that $M(x, f, \delta)-m(x, f, \delta)<\epsilon$. For any $y\in B_{\delta}(x)$, there exists $\delta_{1}> 0$ such that $B_{\delta_{1}}(y)\subset B_{\delta}(x)$; thus $M(y, f, \delta_{1})-m(y, f, \delta_{1})<\epsilon$, and consequently $o(f, y)<\epsilon$. Therefore, $B_{\delta}(x)\subseteq \mathbb{R}^{n}-B$.

^425f3e
## Necessary and sufficient condition for integrability

> [!Lemma]
> Let $R\subseteq \mathbb{R}^{n}$ be a closed rectangle, $f:R\to \mathbb{R}$ bounded function such that $o(f, x)\leq \epsilon$ for all $x\in R$. Then, there exists a partition $P$ such that $U(P, f)-L(P, f)<\epsilon \text{Vol}(R)$.
> 
> > [!Proof]-
> > For all $x\in R$, there is a closed rectangle $U_{x}$ such that $x\in U_{x}^{\circ}$ and $M_{U_{x}}(f)-m_{U_{x}}(f)<\epsilon$. Since $R$ is compact, a finite subcollection $\alpha=\{ U_{x_{1}}, \dots, U_{x_{r}} \}$ covers $R$. Choose a partition $P$ such that every rectangle is inside some $U_{x_{i}}\in\alpha$. So, if $S\in P$, then $M_{S}(f)-m_{S}(f)<\epsilon$. Thus, $U(P, f)-L(P, f)<\epsilon \text{Vol}(R)$. 
> > 
> 
> 

^06a6cd

> [!Theorem]
> Let $R\subseteq \mathbb{R}^{n}$ be a closed rectangle. Let $f:R\to \mathbb{R}$ be a bounded function. Then, $f$ is integrable on $R$ iff the set of discontinuities of $f$ has measure zero.
> 
> > [!Proof]-
> > Let $B$ be the set of discontinuities of $f$.
> > 
> > $(\impliedby)$ Assume $B$ has measure zero. Let $\epsilon> 0$. We will use the Cauchy criterion. 
> > $$
> > \begin{align}
> > B_{\epsilon}\equiv \{ x\in R \ | \  o(f, x)\geq\epsilon \}\subseteq B.
> > \end{align}
> > $$
> > Since $B$ has measure zero, $B_{\epsilon}$ has measure zero. Since $B_{\epsilon}$ is [[#^425f3e|closed]] an bounded, $B_{\epsilon}$ is compact, so $B_{\epsilon}$ has [[#^322cf9|content zero]]. Thus, there exist closed rectangles $U_{1}, \dots, U_{r}$ such that $B_{\epsilon}\subseteq \bigcup_{i=1}^{r}U_{i}^{\circ}$ (working with interiors requires some work) and $\sum_{i=1}^{r}\text{Vol}(U_{i})<\epsilon$.
> > 
> > Choose a partition $P$ of $R$ such that every subrectangle $S$ of $P$ is one of two types (Show that this can be done!):
> > 1. $S\subseteq U_{i}$ for some $i$, or
> > 2. $S\cap B_{\epsilon}=\emptyset$.
> >
> > 
> > Let $P=\mathscr{S}_{1}\sqcup\mathscr{S}_{2}$, where $\mathscr{S}_{1}$ and $\mathscr{S}_{2}$ represent rectangles of type $1$ and $2$ respectively.
> > 
> > Next, let $|f(x)|\leq M$ for all $x\in R$. Then, $M_{S}(f)-m_{S}(f)\leq 2M$ for all $S\in P$.
> > $$
> > \begin{align}
> > \sum _{S\in \mathscr{S}_{1}}(M_{S}(f)-m_{S}(f))\text{Vol}(S)< 2M\epsilon.
> > \end{align}
> > $$
> > Let $S\in \mathscr{S}_{2}$. Then, $o(f, x)<\epsilon$ for all $x\in S$. From [[#^06a6cd]], there exists a partition of $S$ such that $U-L<\epsilon \text{Vol}(S)$. Thus, there exists a refinement $P'$ of $P$ such that for all $S\in \mathscr{S}_{2}$, we have
> > $$
> > \begin{align}
> > \sum_{S'\subseteq S\in \mathscr{S}_{2}}(M_{S'}(f)-m_{S'}(f))\text{Vol}(S').<\epsilon \text{Vol}(S)
> > \end{align}
> > $$
> > Finally, 
> > $$
> > \begin{align}
> > U(P', f)-L(P', f) & =\sum_{S'\subseteq S\in \mathscr{S}_{1}}\left( *  \right) +\sum_{S'\subseteq S\in \mathscr{S}_{2}}(*) \\
> >  & < 2M\epsilon+\sum_{S\in \mathscr{S}_{2}}\epsilon \text{Vol}(S) \\
> >  & \leq 2M\epsilon+\epsilon \text{Vol}(R).
> > \end{align}
> > $$
> > ---
> > 
> > $(\implies)$ Let $B_{\epsilon}$ be as defined previously. Note that $B=B_{1}\cup B_{2}\cup\dots$. We will show that each $B_{\frac{1}{n}}$ has measure zero. Let $\epsilon> 0$. By the Cauchy criterion, there exists a partition $P$ of $R$ such that $U(f, P)-L(f, P)<\epsilon/n$. Let $\mathscr{S}\equiv \left\{  S\in P\ | \ S\cap B_{\frac{1}{n}}\ne \emptyset  \right\}$. $\mathscr{S}$ is a cover of $B_{\frac{1}{n}}$. $S\in\mathscr{S}\implies \exists x\in S\quad o(f, x)\geq \frac{1}{n}\implies M_{S}(f)-m_{S}(f)\geq \frac{1}{n}$. So, 
> > $$
> > \begin{align}
> > \frac{1}{n}\sum_{S\in \mathscr{S}}\text{Vol}(S)\leq \sum_{S\in \mathscr{S}}(M_{S}(f)-m_{S}(f))\text{Vol}(S)\leq U(P, f)-L(P, f)< \frac{\epsilon}{n}.
> > \end{align}
> > $$

^9809c8


