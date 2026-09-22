---
id: "534"
date: 2026-08-21
time: 15:34
tags:
  - GANA1
  - Lecture
desc: completeness, the Lebesgue measure, regularity
P1: true
P2: true
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

> [!Fact]
> $$|\mathcal{B}(\mathbb{R})| = c$$

> [!Example]
> $\mathcal{B}(\mathbb{R})$ is not complete with respect to the measure $\lambda^{\star}$. 
> > [!Proof]-
> > Cantor set is a Borel set with measure 0 and cardinality $c$. 
> > So if $\mathcal{B}(\mathbb{R})$ were complete then the power set of Cantor set would be a subset of $\mathcal{B}(\mathbb{R})$, which would imply $|\mathcal{B}(\mathbb{R})| \geq 2^{c}$, contradiction!
> 


> [!Proposition] Completion of a measure
> Let $\mu$ be a measure on a $\sigma$-algebra $\mathcal{F}\subseteq P(\Omega)$. Define
> $$
> \begin{align}
> \tilde{\mathcal{F}}=\{ A\subseteq P(\Omega) : \exists B_{1}\subseteq A\subseteq B_{2}, \mu(B_{2}\setminus B_{1})=0\}.
> \end{align}
> $$
> $\tilde{\mathcal{F}}$ is a $\sigma$-algebra. Define $\tilde{\mu}$ on $\tilde{\mathcal{F}}$ by $\tilde{\mu}(A)=\mu(B_{2})=\mu(B_{1})$. Then, $\tilde{\mu}$ is a measure on $\tilde{\mathcal{F}}$, $\tilde{\mu}|_{\mathcal{F}}=\mu$, and $\tilde{\mathcal{F}}$ is complete. We call $(\tilde{\mathcal{F}}, \tilde{\mu})$ the **completion** of $(\mathcal{F}, \mu)$. 
> > [!Proof]-
> > We would at first show that $\tilde{\mathcal{F}}$ is a $\sigma$-algebra.
> > Clearly $\mathcal{F}\subseteq  \tilde{\mathcal{F}}$.
> > $A \in \tilde{\mathcal{F}} \implies \exists B_{1}, B_{2} \in \mathcal{F}$ such that $B_{1} \subseteq A \subseteq B_{2}$ and $\mu(B_{2} \setminus B_{1})= 0$.
> > This implies, $B_{2}^{c} \subseteq A^{c} \subseteq B_{1}^{c}$.
> > And $B_{1}^{c} \setminus B_{2}^{c}= B_{2} \setminus B_{1} \implies \mu(B_{1}^{c} \setminus B_{2}^{c}) = 0 \implies A^{c} \in \tilde{\mathcal{F}}$.
> > 
> > Now let $\{A_{n}\}_{n=1}^{\infty} \subseteq  \tilde{\mathcal{F}}$, let $\{B_{n}\}_{n=1}^{\infty}, \{C_{n}\}_{n=1}^{\infty} \subseteq  {\mathcal{F}}$ be such that $\mu(C_{n} \setminus B_{n})= 0,\, B_{n} \subseteq A_{n} \subseteq C_{n}, \, \forall n$.
> > Then 
> > $$
> > \bigcup_{n=1}^{\infty} B_{n} \subseteq \bigcup_{n=1}^{\infty} A_{n} \subseteq \bigcup_{n=1}^{\infty}C_{n}
> > $$
> > and 
> > $$
> > \left(\bigcup_{n=1}^{\infty}C_{n}\right) \setminus \left(\bigcup_{n=1}^{\infty} B_{n}\right) \subseteq \bigcup_{n=1}^{\infty} (C_{n} \setminus B_{n})
> > $$
> > $\mu\left( \bigcup_{n=1}^{\infty} (C_{n} \setminus B_{n}) \right) \leq \sum_{n=1}^{\infty} \mu(C_{n}\setminus B_{n}) = 0$.
> > Therefore $\bigcup_{n=1}^{\infty} A_n \in \tilde{\mathcal{F}}$.
> > Hence, $\tilde{\mathcal{F}}$ is a $\sigma$-algebra.
> > 
> > Next we would prove countable additivity of $\tilde{\mu}$,
> > Now let $\{A_{n}\}_{n=1}^{\infty} \subseteq  \tilde{\mathcal{F}}$, let $\{B_{n}\}_{n=1}^{\infty}, \{C_{n}\}_{n=1}^{\infty} \subseteq  {\mathcal{F}}$ be such that $\mu(C_{n} \setminus B_{n})= 0,\, B_{n} \subseteq A_{n} \subseteq C_{n}, \, \forall n$, also suppose $A_{n}$'s are pairwise disjoint.
> > Then
> > $$
> > \tilde{\mu}\left( \bigcup_{n=1}^{\infty}A_{n} \right) = \mu\left( \bigcup_{n=1}^{\infty}B_{n} \right)= \sum_{n=1}^{\infty}\mu(B_{n})= \sum_{n=1}^{\infty}\tilde{\mu}(A_{n})
> > $$
> > Hence $\tilde{\mu}$ is a measure.

> [!Proposition] 
> For any $\mu$, $\mathcal{M}_{\mu}$ is complete.
> > [!Proof]-
> > Let $A \in \mathcal{M}_{\mu}$ be such that $\mu(A) = 0$.
> > Let $B \subseteq A$.
> > For every subset $E$ of the measure space, $\mu^*(E) \leq \mu^*(E \cap B) + \mu^*(E \cap B^c)$ by subadditivity.
> > $\mu^* (E \cap B) \leq \mu^*(B) = 0 \implies \mu^{*}(E) \geq \mu^{*}(E \cap B^{c}) = \mu^{*}(E \cap B^{c}) + \mu^{*}(E \cap B)$.
> > Therefore, $B \in \mathcal{M}_{\mu }$.


> [!Proposition]
> For any algebra $\mathcal{A}$ with $\sigma$-finite measure $\mu$, $(\mathcal{M}_{\mu}, \mu^{\star})$ is the completion of $(\sigma(\mathcal{A}), \mu^{\star})$. 

> [!Definition] Lebesgue measure
> Let $\mathcal{M}_{\lambda}\subseteq P(\mathbb{R})$ and $\lambda^{\star}$ be defined [[#^25b2a0|here]]. The measure $\lambda^{\star}$ restricted to $\mathcal{M}_{\lambda}$ is called the **Lebesgue measure** on $\mathbb{R}$. The Lebesgue measure can be restricted to a finite measure on any interval $[a, b]\subseteq \mathbb{R}$. 


> [!Corollary]
> $|\mathcal{M}_{\lambda}|=2^{c}$.
> > [!Proof]- 
> > Cantor set is a set with measure $0$, hence its powerset is a subset of $\mathcal{M}_{\lambda}$. And $\mathcal{M}_{\lambda} \subseteq P(\mathbb{R})$.
> > Hence, $$2^{c} \leq |\mathcal{M}_{\lambda}| \leq 2^{c}$$

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
> \left.
> \begin{aligned}
> \mu(A) & =\inf \{ \mu(U):U\text{ is open}, A\subseteq U \} & \\
>  & =\sup \{ \mu(F):F\text{ is closed}, F\subseteq A \} & 
> \end{aligned}
> \right  \} \quad (*)
> $$
> > [!Proof]-
> > $\mathcal{F}=\{A \in \mathcal{B}_{X} : A \text{ satisfies } (*)\}$.
> > Enough to show that open sets are in $\mathcal{F}$ and $\mathcal{F}$ is a $\sigma$-algebra.
> > Let $U$ be an open set. $\mu(U) = \inf \{ \mu(U):U\text{ is open}, A\subseteq U \}$ is clear.
> > Let $F_{n} = \{x \in X \mid d_{U^{c}}(x) \geq \frac{1}{n}\}, \, F_{n}$ is closed by continuity of $d_{U^c}$.
> > $$\bigcup_{n=1}^{\infty}F_{n}= \{x \in X : d_{U^{c}}(x)> 0\} = U$$
> > Hence, $F_n \uparrow U\implies \mu(F_{n})\uparrow \mu(U)$.
> > Therefore open sets are in $\mathcal{F}$.
> > 
> > To prove $\mathcal{F}$ is a $\sigma$-algebra, we have to show that it is closed under complementation and countable union. The proof for closure under complementation is very similar to the previous proof. Next we prove the closure under countable union.
> > 
> > Let $\{A_{n}\}_{n=1}^\infty \subseteq  \mathcal{F}$, we need to show that $A = \bigcup_{n=1}^{\infty}A_{n} \in \mathcal{F}$.
> > For $A_{n}$, choose $F_{n}\subseteq A_{n}\subseteq U_{n}$ such that $$\mu(U_{n} \setminus F_{n}) < \frac{\epsilon}{2^{n+1}}$$
> > Take $U = \bigcup_{n=1}^{\infty}U_{n},\, F = \bigcup_{n=1}^{\infty}F_{n}$, note that $F \subseteq A \subseteq U$.
> > $$
> > \begin{align}
> > 
> > U \setminus F & = \left( \bigcup_{n=1}^{\infty}U_{n}\right) \setminus \left(\bigcup_{n=1}^{\infty}F_{n}\right)\\ \\
> > & \subseteq \bigcup_{n=1}^{\infty} \left( U_{n} \setminus F_{n}\right)
> > \end{align}
> > $$
> > $$
> > \begin{align}
> > \therefore \mu(U \setminus F) \leq \sum_{n=1}^{\infty} \mu(U_{n} \setminus F_{n}) < \frac{\epsilon}{2} 
> > \end{align}
> > $$
> > Let $\bar{F}_{m} = \bigcup_{n=1}^{m}F_{n}, \bar{F}_{n} \uparrow F \implies \mu(\bar{F_{n}}) \uparrow \mu(F)$.
> > Then, we can choose an $N$ such that $\mu(F \setminus \bar{F}_{n}) < \frac{\epsilon}{2} \implies \mu(U \setminus \bar{F}_{N}) < \epsilon$. 
> > 

^ace8e4
 

> [!Corollary]
> Let $X$ be a metric space. Let $\mu, \nu$ be measures on $\mathcal{B}(X)$. If $\mu(F)=\nu(F)$ for all closed $F\subseteq X$, then $\mu=\nu$. 

> [!Definition] Radon measure
> Let $X$ be a metric space. A measure $\mu$ on $\mathcal{B}(X)$ is **Radon** if $\mu(K)< \infty$ for all compact $K\subseteq X$.  

> [!Proposition]
> Let $\mu$ be a Radon measure on $\mathcal{B}(\mathbb{R}^{N})$. Then, 
> $$
> \begin{align}
> \mu(A) & =\inf \{ \mu(U):U \text{ is open}, A\subseteq U\} \tag{i}\\
>  & =\sup\{ \mu(K):K\text{ is compact}, K\subseteq A \} \tag{ii}
> \end{align}
> $$
> 
> > [!Proof]-
> > Let $A \subseteq \mathcal{B}(\mathbb{R}^{N})$. Notice that $\mu$ is $\sigma$-finite.
> > If $\mu(A) = \infty$ then $\text{(i)}$ is automatically satisfied. So assume $\mu(A) < \infty$.
> > Let $K_{n}=[-n,n]^{N}$, $\mu_{n}(A)=\mu(A \cap K_{n}^{o})$, where $K_{n}^{o}$ denotes the interior of $K_{n}$.
> > Note that $\mu_{n}$ are finite measures.
> > So, by [[#^ace8e4]], $\exists \text{ open } U_{n} \subseteq \mathbb{R}^{N} \text{ such that } U_{n} \supseteq A$ and $\mu_{n}(U_{n}\setminus A)< \frac{\epsilon}{2^{n}}$.
> > Let $U = \bigcup_{n=1}^{\infty}(U_{n} \cap K_{n}^{o})$, $U \supseteq A$.
> > $$
> > \begin{align}
> > \mu(U \setminus A) &= \mu\left( \bigcup_{n=1}^{\infty}\left( U_{n} \cap K_{n}^{o} \cap A^{c}\right) \right) \\
> > &\leq  \sum_{n=1}^{\infty}\mu_{n}(U_{n} \cap A^{c}) <\epsilon.
> > \end{align}
> > $$
> > Now we only need to prove $\text{(ii)}$.
> > $\bar{\mu_{n}}(A) := \mu(A \cap K_{n})$ are finite measures.
> > Suppose $\mu(A)< \infty$.
> > Again by [[#^ace8e4]], $\exists \text{ closed } C_{n_{1}}\subseteq A$ such that $\bar{\mu_{n}}(A \setminus C_{n_{1}}) < \frac{\epsilon}{2}$.
> > Also, $(A \cap K_{n}) \uparrow K_{n} \implies \exists n_{2} \in \mathbb{N} \text{ such that } \mu(A \cap K_{n_{2}})> \mu(A) - \frac{\epsilon}{2}$.
> > Let $K = C_{n_{1}} \cap K_{n_{1}}$.
> > $$
> > \begin{align}
> > \mu(A \setminus K) &= \mu(A) - \mu(K) \\
> > & < \mu(A \cap K) - \mu(K) + \frac{\epsilon}{2} \\
> > & = \mu_{n_{1}}(A \setminus C_{n_{1}}) < \epsilon
> > \end{align}
> > $$
> > Suppose $\mu(A)=\infty$.
> > Note that $A \cap K_{n} \uparrow A$. $\mu(A \cap K_{n}) < \infty \implies \exists \text{ compact }F_{n}\subseteq A \cap K_{n}$ such that $\mu(F_{n}) > \mu(A \cap K_{n})-1 \implies \mu(F_{n}) \to \infty$.
> > 

