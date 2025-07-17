---
tags:
  - DMAT
  - Lecture
  - Processed
date: 2025-01-20
time: 11:48
---
## Disjoint coverings

> [!Definition]
> Let $A$ be an infinite set. Let $\mathbf{D}=\{ D_{i}: i\in I \}$, where $|D_{i}|=\aleph_{0}$, and $D_{i}\cap D_{j}=\emptyset$ for all $i\ne j\in I$, and $\bigcup_{i\in I}D_{i}=A$. Then, $\mathbf{D}$ is called a *disjoint covering* of $A$. 

To prove the theorem stated in the previous lecture, we need the following theorem:

> [!Theorem]
> Every infinite set has a disjoint covering.

> **Proof**
> Let $A$ be an infinite set. 
> Define $P\equiv\{ (B, \mathbf{D}):B\subset A, \mathbf{D} \text{ is a disjoint covereing of }B \}$. We know that $P$ is non empty, since countable subsets of $A$ have the trivial covering.
> Define a partial order by $(B_{1}, \mathbf{D}_{1})\leq(B_{2}, \mathbf{D}_{2})$ if $B_{1}\subset B_{2}$ and $\mathbf{D}_{1}\subset \mathbf{D}_{2}$. 
> 
> Let $C$ be any chain in $(P, \leq)$. 
> $C=\{ (B_{i}, \mathbf{D}_{i}) : i\in I\}$. 
> For all $i, j\in I$, either $(B_{i}, \mathbf{D}_{i})\leq(B_{j}, \mathbf{D}_{j})$, or vice versa.
> Let $B=\bigcup_{i\in I}B_{i}$ and $\mathbf{D}=\bigcup_{i\in I}\mathbf{D}_{i}$. It is easy to see that $\mathbf{D}$ is a disjoint covering for $B$. $(B, \mathbf{D})\in P$, so [[LEC DMAT 3#Zorn's lemma|Zorn's lemma]] is applicable. Let $(\hat{B}, \mathbf{\hat{D}})$ be the maximal element. 
> 
> If $\hat{B}=A$, we are done.
> If $\hat{B}$ is a proper subset of $A$, two cases:
> - $A\setminus \hat{B}$ is finite: Change the covering by appending the finite elements to some $\hat{\mathbf{D}}_{i}$. Does not create a contradiction.
> - If it is infinite, you can take a countable subset of it and add it to $\mathbf{\hat{D}}$, contradicting the maximality of $(\hat{B}, \mathbf{\hat{D}})$.

---
## More properties of infinite cardinals

Now we're equipped to have a crack at these.

> [!Theorem]
> Let $A$ and $B$ be any infinite sets.
> 1. $|A|+|A|=|A|$
> 2. $|A|\leq |B|$ $\implies$ $|A|+|B|=|B|$.
> 3. $|A||A|=|A|$
> 

> **Proof of 1**
> 
> We have to construct a bijection from $(A\times \{ 1 \})\cup(A\times \{ 2 \})\to A$. Define $A_{1}\equiv A\times \{ 1 \}$, $A_{2}\equiv A\times \{ 2 \}$. Let $A$ have a disjoint covering $A=\bigcup D_{i}$. This gives us disjoint coverings for $A_{1}$ and $A_{2}$: $A_{1}=\bigcup (D_{i}\times \{ 1 \})$, $A_{2}=\bigcup (D_{i}\times \{ 2 \})$.
> 
> Define $\phi:\{ D_{i}\times \{ 1 \} \}\cup \{ D_{i}\cup \{ 2 \} \}\to \{ D_{i} \}$ such that it maps the elements of $(D_{k}\times \{ 1 \})\cup(D_{k}\times\{ 2 \})$ to $D_{k}$ alternatively, i.e, if the elements of $D_{k}$ were $d_{1}, d_{2}, \dots$, $\phi$ would map $(d_{1}, 1)\mapsto d_{1}$, $(d_{1}, 2)\mapsto d_{2}$, $(d_{2}, 1)\mapsto d_{3}$, and so on. Note that $\phi$ is a bijection. Thus, $|A\times \{ 1 \}\cup A\times \{ 2 \}|=|A|$, i.e, $|A|+|A|=|A|$.
> 
> **Proof of 2**
> 
> Let If $|A|\leq |B|$, we have $|B|\leq |A\cup B|\leq |B\cup B|$, since trivial injections exist from sets on the left of the inequalities to sets on the right. It follows that $|B|\leq |A|+|B|\leq |B|+|B|=|B|$. From the [[LEC DMAT 2#Schröder–Bernstein theorem|Schröder–Bernstein theorem]], it follows that $|A|+ |B|=|B|$. 
> 
> **Proof of 3**
> 
> To obtain an bijection from $A\times A\to A$, define
> $P\equiv\{ (B, f)\ |\ f:B\times B\to B, f \text{ is bijective}, B\subset A \}$. Define a partial order on $P$ by $(B_{1}, f_{1})\leq(B_{2}, f_{2})$ if $B_{1}\subset B_{2}$ and $f_{1}\subset f_{2}$. Let $C$ be any chain in $(P, \leq)$. $C=\{ (B_{i}, f_{i})\ |\ i\in I \}$. Let $B=\bigcup B_{i}$ and $f=\bigcup f_{i}$. It is evident that $f:B\times B\to B$ is bijective. Thus, $(B, f)\in P$, and every chain in $(P, \leq)$ has an upper bound. From Zorn's lemma, $(P, \leq)$ must have a maximal element $(\hat{B}, \hat{f})$. 
> 
> If $|\hat{B}|=|A|$, i.e, there exists a bijection between $\hat{B}$ and $A$, we are done. So, assume $|\hat{B}|\ne|A|$. Note that $|A\setminus \hat{B}|\geq |\hat{B}|$, since otherwise $|A|=|(A\setminus \hat{B})\cup |\hat{B}||=|A\setminus \hat{B}|+|\hat{B}|=|\hat{B}|$. So there must exist $\overline{B}\subset A\setminus \hat{B}$ such that $|\overline{B}|=|\hat{B}|$. Let $\tilde{B}=\hat{B}\cup \overline{B}$. Now, $\tilde{B}\times \tilde{B}=\hat{B}\times \hat{B}\cup\overline{B}\times \hat{B}\cup\hat{B}\times \overline{B}\cup\overline{B}\times \overline{B}$. Note that since $|\hat{B}||\hat{B}|=|\hat{B}|$,
> $$
> \begin{align}
>  & |\overline{B}\times \hat{B}\cup\hat{B}\times \overline{B}\cup\overline{B}\times \overline{B}| \\
> =  & |\overline{B}||\hat{B}|+|\hat{B}||\overline{B}|+|\overline{B}||\overline{B}| \\
> = & |\hat{B}|
> \end{align}
> $$
> So, there must exist a bijection $\overline{f}:\overline{B}\times \hat{B}\cup\hat{B}\times \overline{B}\cup\overline{B}\times \overline{B}\to \overline{B}$. Define $\tilde{f}:\tilde{B}\times \tilde{B}\to \tilde{B}$ like so:
> $$
> \begin{align}
> \tilde{f}(x, y)=\begin{cases}
> \hat{f}(x, y) & (x, y)\in \hat{B}\times \hat{B} \\
> \overline{f}(x, y) & \text{otherwise}
> \end{cases}
> \end{align}
> $$
> and notice $(\tilde{B}, \tilde{f})\in P$ and $(\tilde{B}, \tilde{f})\geq(\hat{B}, \hat{f})$, which contradicts the maximality of $(\hat{B}, \hat{f})$. 