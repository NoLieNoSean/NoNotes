---
id: "534"
date: 2026-08-21
time: 15:34
tags:
  - GANA1
  - Lecture
desc: completeness, the Lebesgue measure, regularity
P1: true
---

> [!Recall]
> Recall the setup from [[LEC GANA1 3#The Borel measure]]:
> 1. $\lambda$ is a measure on the algebra $\mathcal{A}$. 
> 2. $\sigma(\mathcal{A})=\mathcal{B}(\mathbb{R})$, and $\lambda$ extends uniquely to a measure on $\mathcal{B}(\mathbb{R})$. 
> 
> Considering $\lambda$ as a measure on $\mathcal{A}$, define the outer measure $\lambda^{\star}$ as in [[LEC GANA1 3#^8560c6]] and the $\sigma$-algebra $\mathcal{M}_{\lambda}$ as in [[LEC GANA1 3#^3f00a0]]. 

^25b2a0

Before defining the Lebesgue measure, we will show that $\mathcal{M}_{\lambda}\subsetneq P(\mathbb{R})$, i.e., not all subsets of $\mathbb{R}$ are measurable. 
# Non measurable subsets of $\mathbb{R}$

For $A\in P(\mathbb{R})$, denote $\{ a+x:a\in A \}$ by $A+x$. 
Fix $x \in \mathbb{R}$. Define $$ \mathcal{C} = \{A \subseteq{\mathbb{R}} : A+x \in \mathcal{B}(\mathbb{R})\} $$Since $A + x \in \mathcal{A} \quad \forall A \in \mathcal{A} ,\, \mathcal{A} \subseteq \mathcal{C}$.
Now, $A \in \mathcal{C} \implies A^c +x = (A + x)^c \in \mathcal{B}\mathbb(R) \implies A^c \in \mathcal{C}$.
Also, $\{A_n\}_{n=1}^\infty \subseteq \mathcal{C} \implies \left( \bigcup_{n=1}^\infty A_{n} \right) + x = \bigcup_{n=1}^\infty (A_{n} + x) \in \mathcal{B}(\mathbb{R}) \implies (\bigcup_{n=1}^\infty A_{n})\in \mathcal{C}$.
Therefore $\mathcal{C}$ is a $\sigma$-algebra $\implies \mathcal{B}(\mathbb{R}) \subseteq \mathcal{C}$.
Hence $A \in \mathcal{B}(\mathbb{R}) \implies (A+x) \in  \mathcal{B}(\mathbb{R})$.

> [!Proposition]
> $\lambda^{\star}(A+x)=\lambda^{\star}(A)$ for all $A\in P(\mathbb{R})$.
> > [!Proof]-
> > $$
> > \begin{align*}
> > & A \subseteq \bigcup_{i=1}^{\infty}A_{i} \quad A_i \in \mathcal{A} \\
> > \implies & A + x \subseteq \bigcup_{i=1}^{\infty}(A_{i}+x)
> > \end{align*}
> > $$
> > Now, by definition of $\lambda$, $\lambda(A_i) = \lambda(A_i) + x \quad \forall i$.
> > $$\implies \lambda^*(A) = \lambda^*(A + x).$$

Define $\lambda_x(A) = \lambda(A + x) \quad \forall A \in \mathcal{A}$.

> [!Corollary]
> If $A\in \mathcal{M}_{\lambda}$ then $A+x\in \mathcal{M}_{\lambda}$ for all $x\in \mathbb{R}$. 
> > [!Proof]-
> > $$\mu^*(E) = \mu^*(E \cap A) + \mu^*(E \cap A^c)$$
> > $$
> > \begin{align*}
> > \implies \mu^*(E+x) & = \mu^*((E \cap A) + x) + \mu^*((E \cap A^c) + x)\\
> > & = \mu^*((E + x) \cap (A+x)) +  \mu^*((E + x) \cap (A^c+x))\\
> > & = \mu^*((E + x) \cap (A+x)) +  \mu^*((E + x) \cap (A+x)^c)
> > \end{align*}
> > $$

In particular, $\lambda^{\star}(A+x)=\lambda^{\star}(A)$ for all $A\in \mathcal{B}(\mathbb{R})$. 

> [!Proposition]
> $\mathcal{M}_{\lambda}\subsetneq P(\mathbb{R})$. 
> 
> 
> > [!Proof]-
> > We would give a proof by constructing a non-measurable subset of $\mathbb{R}$.
> > $\Omega := [0,1)$.
> > Define relation $\sim$ on $\Omega$ by $x \sim y \iff x - y \in \mathbb{Q}$. Note that $\sim$ is an equivalence relation.
> > Let $[x]$ denote the $\sim$ equivalence class of $x$, then $\Omega = \bigsqcup_{x \in \Omega}[x]$.
> > By Axiom of Choice, let $P \subseteq \Omega$ be such that $P \cap [x]$ is a singleton $\forall x \in \Omega$.
> > We will show that $P$ is not measurable.
> > We also define binary operation $\oplus$ on $\Omega$ given by $x \oplus y := x + y - \lfloor x + y \rfloor$ (i.e. $x \oplus y$ denotes the positive fractional part of $x + y$).
> > Let $\mathbb{Q} \cap \Omega = \{r_n : n \in \mathbb{N}\}$ and let $P_n = P \oplus r_n$.
> > 
> > 
> > 
> > > [!Claim]
> > > 
> > > 
> > > 
> > > 
> > > $$
> > > \Omega = \bigsqcup_{n \in \mathbb{N}} P_{n}
> > > $$
> > > 
> > > > [!Proof]-
> > > > $$
> > > > \begin{align*}
> > > > x \in P_n \cap  P_m & \implies \exists p, q \in P \text{ such that } x = p \oplus r_{n} = q \oplus r_{m}\\
> > > > & \implies p \sim q \\
> > > > & \implies p = q \\
> > > > & \implies r_{n} = r_{m} \implies m = n.
> > > > \end{align*}
> > > > $$
> > > > Therefore, $P_n$'s are pairwise disjoint.
> > > > Now, $x \in \Omega \implies \exists p \in P \text{ and } r \in \mathbb{Q} \text{ such that } x = p + r$.
> > > > $r = x - p - \lfloor x - p \rfloor \in \mathbb{Q} \cap \Omega \implies x = p \oplus r_{n}$ for some $n$.
> > > 
> > 
> > Now suppose $P \in \mathcal{M}_\lambda$. Since $\mathcal{M}_\lambda$ is closed under translations, $P_n \in \mathcal{M}_\lambda$ , and $\lambda^*(P_n) = \lambda^*(P)$.
> > Therefore $$1 = \lambda^*(\Omega) = \sum_{n=1}^{\infty}\lambda^*(P_{n}) = \sum_{n=1}^\infty \lambda^*(P)$$
> > Thus, if $\lambda^*(P) = 0$ then the RHS is $0$, contradiction; and if $\lambda^*(P) > 0$ then the RHS is $\infty$, which is also a contradiction.
> > 
> 


^61d065

# The Lebesgue measure

> [!Definition] Complete $\sigma$-algebra
> A $\sigma$-algebra $\mathcal{F}$ is **complete** with respect to a measure $\mu$ if $A\in \mathcal{F}$ and $\mu(A)=0$ implies $B\in \mathcal{F}$ for all $B\subseteq A$. 

> [!Example]
> $\mathcal{B}(\mathbb{R})$ is not complete with respect to the measure $\lambda^{\star}$. 

> [!Proposition] Completion of a measure
> Let $\mu$ be a measure on a $\sigma$-algebra $\mathcal{F}\subseteq P(\Omega)$. Define
> $$
> \begin{align}
> \tilde{\mathcal{F}}=\{ A\subseteq P(\Omega) : \exists B_{1}\subseteq A\subseteq B_{2}, \mu(B_{2}\setminus B_{1})=0\}.
> \end{align}
> $$
> $\tilde{\mathcal{F}}$ is a $\sigma$-algebra. Define $\tilde{\mu}$ on $\tilde{\mathcal{F}}$ by $\tilde{\mu}(A)=\mu(B_{2})=\mu(B_{1})$. Then, $\tilde{\mu}$ is a measure on $\tilde{\mathcal{F}}$, $\tilde{\mu}|_{\mathcal{F}}=\mu$, and $\tilde{\mathcal{F}}$ is complete. We call $(\tilde{\mathcal{F}}, \tilde{\mu})$ the **completion** of $(\mathcal{F}, \mu)$. 

> [!Proposition]
> For any algebra $\mathcal{A}$ with $\sigma$-finite measure $\mu$, $(\mathcal{M}_{\mu}, \mu^{\star})$ is the completion of $(\sigma(\mathcal{A}), \mu^{\star})$. 

> [!Definition] Lebesgue measure
> Let $\mathcal{M}_{\lambda}\subseteq P(\mathbb{R})$ and $\lambda^{\star}$ be defined [[#^25b2a0|here]]. The measure $\lambda^{\star}$ restricted to $\mathcal{M}_{\lambda}$ is called the **Lebesgue measure** on $\mathbb{R}$. The Lebesgue measure can be restricted to a finite measure on any interval $[a, b]\subseteq \mathbb{R}$. 


> [!Corollary]
> $|\mathcal{M}_{\lambda}|=2^{c}$.

^ba1099

> [!Corollary]
> [[#^61d065]] and [[#^ba1099]] combined with the fact that $|\mathcal{B}(\mathbb{R})|=c$ gives us
> $$
> \mathcal{A}\subsetneq\mathcal{B}(\mathbb{R})\subsetneq \mathcal{M}_{\lambda}\subsetneq P(\mathbb{R}).
> $$
> 


> [!Remark]
> Let $\mu$ be the Lebesgue measure on $\mathbb{R}$. 
> 1. Given $\epsilon> 0$ and $A\in \mathcal{B}([a, b])$, there exists $U\in \mathcal{A}([a, b])$ such that $\mu(A\triangle U)<\epsilon$. 
> 2. For $A\in \mathcal{M}_{\lambda}$, there exists $B\in \mathcal{B}(\mathbb{R})$ such that $\mu(A\triangle B)=0$. 


---

# Regularity

> [!Proposition]
> Let $X$ be a metric space and $\mu$ be a finite measure on $\mathcal{B}_{X}$. Then for all $A\in \mathcal{B}_{X}$, 
> $$
> \begin{align}
> \mu(A) & =\inf \{ \mu(U):U\text{ is open}, A\subseteq U \}\\
>  & =\sup \{ \mu(F):F\text{ is closed}, F\subseteq A \}.
> \end{align}
> $$
> 

> [!Corollary]
> Let $X$ be a metric space. Let $\mu, \nu$ be measures on $\mathcal{B}(X)$. If $\mu(F)=\nu(F)$ for all closed $F\subseteq X$, then $\mu=\nu$. 

> [!Definition] Radon measure
> Let $X$ be a metric space. A measure $\mu$ on $\mathcal{B}(X)$ is **Radon** if $\mu(K)< \infty$ for all compact $K\subseteq X$.  

> [!Proposition]
> Let $\mu$ be a Radon measure on $\mathcal{B}(\mathbb{R}^{N})$. Then, 
> $$
> \begin{align}
> \mu(A) & =\inf \{ \mu(U):U \text{ is open}, A\subseteq U\} \\
>  & =\sup\{ \mu(K):K\text{ is compact}, K\subseteq A \}.
> \end{align}
> $$
> 