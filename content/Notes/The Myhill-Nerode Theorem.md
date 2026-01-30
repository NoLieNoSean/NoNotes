---
tags:
  - TOC
id: "283"
date: 2025-09-01
---
See @kozenAutomataComputability1997 lectures 13-16.
# DFA minimization

Every regular language has a minimal DFA that is unique up to isomorphism, and there is an algorithm for constructing it from any given DFA for $A$. Proving uniqueness requires the Myhill-Nerode theorem, but constructing a minimal DFA can be achieved using a simple algorithm.

Given a DFA, the minimization process consists of two steps: getting rid of inaccessible states, and collapsing equivalent states.
## The quotient construction

By 'collapsing' two states $p$ and $q$, we mean we can identify the two states as being the same, and one larger state.
1. We cannot collapse a final state $p$ and a non-final state $q$, since if $x, y\in\Sigma^{*}$ were such that $\hat{\delta}(s, x)=p$ and $\hat{\delta}(x, y)=q$, it is impossible to ensure that $x$ is rejected and $y$ is accepted after collapsing. 
2. If we merge $p$ and $q$, we are forced to also merge $\delta(p, a)$ and $\delta(q, a)$ for all $a\in\Sigma$, to preserve determinism.

These two observations imply inductively that we cannot collapse $p$ and $q$ if $\hat{\delta}(p, x)\in F$ and $\hat{\delta}(q, x)\not\in F$ for some string $x$. It turns out that this is also a sufficient condition.

> [!Proposition]
>  States $p$ an $q$ of a DFA can be safely collapsed iff there does not exist a string $x$ such that $\hat{\delta}(p, x)\in F$ and $\hat{\delta}(q, x)\not\in F$.
> 
> > [!Proof]
> > Define an equivalence relation $\sim$ on $Q$ by
> > $$
> > p\sim q \iff \forall x\in\Sigma^{*}(\hat{\delta}(p, x)\in F\iff\hat{\delta}(q, x)\in F).
> > $$
> > We now define the **quotient automaton** $M/\sim$:
> > $$
> > M/\sim :=(Q/\sim, \Sigma, \delta', s', F'),
> > $$
> > where 
> > $$
> > \begin{align}
> >  & \delta'([p], a):=[\delta(p, a)] ,\\
> >  & s':=[s], \\
> >  & F':=\{ [p] \ | \  p\in F \}.
> > \end{align}
> > $$
> > We need to show that $\delta'$ is well defined: if $p\sim q$, then $\delta(p, a)\sim\delta(q, a)$:
> > $$
> > \begin{align}
> > \hat{\delta}(\delta(p, a), x)\in F & \iff \hat{\delta}(p, ax)\in F \\
> >  & \iff\hat{\delta}(q, ax)\in F \\
> >  & \iff \hat{\delta}(\delta(q, a), x)\in F.
> > \end{align}
> > $$
> > It is also clear that $p\in F\iff[p]\in F'$. After showing that for all $x\in\Sigma^{*}$, $\hat{\delta}'([p], x)=[\hat{\delta}(p, x)]$, we can show that $L(M/\sim)=L(M)$. Thus, we have shown that $\forall x\in\Sigma^{*}(\hat{\delta}(p, x)\in F\iff\hat{\delta}(q, x)\in F)$ is a sufficient condition for collapsing $p$ and $q$. 
> > 
> > It is also clear that no further collapsing is possible.
> 
> 

## The minimization algorithm

1. Write down a table of all pairs $\{ p, q \}$, initially unmarked.
2. Mark $\{ p, q \}$ if $p\in F$ and $q \not\in F$ or vice versa.
3. Repeat the following until no more changes occur: if there exists an unmarked pair $\{ p, q \}$ such that $\{ \delta(p, a), \delta(q, a) \}$ is marked for some $a\in\Sigma$, then mark $\{ p, q \}$. 
4. When done, $p\sim q$ iff $\{ p, q \}$ is not marked.

This is easily proved by induction on the length of distinguishing suffixes.

---

# The Myhill-Nerode Relations

## Correspondence between MH relations and DFAs

Let $M$ be a DFA for a regular language $R\subseteq\Sigma^{*}$ with no inaccessible states. $M$ induces an equivalence relation $\equiv_{M}$ on $\Sigma^{*}$ defined by $x\equiv_{M}y\iff\hat{\delta}(s, x)=\hat{\delta}(s, y)$. Some properties of $\equiv_{M}$:
1. it is a right congruence: $x\equiv_{M}y\implies xa\equiv_{M}ya$. 
2. It refines $R$: $x\equiv_{M}y\implies(x\in R\iff y\in R)$ for all $x, y\in\Sigma^{*}$. 
3. It is of finite index, since $M$ has finitely many states.

Call any equivalence relation $\equiv$ on $\Sigma^{*}$ a **Myhill-Nerode relation** for $R$ if it satisfies the three properties above, that is, if it is a right congruence of finite index refining $R$.

Given any Myhill-Nerode relation $\equiv$ on $\Sigma^{*}$ for $R$, we can produce ar DFA $M_{\equiv}=(Q, \Sigma, \delta, s, F)$ accepting $R$:
$$
\begin{align}
Q & :=\{ [x]\ | \  x\in\Sigma^{*} \}  \\
s & :=[\epsilon] \\
\delta([x], a) & :=[xa] \\
F & := \{ [x]\ | \  x\in R \}.
\end{align}
$$

These two constructions are inverses up to isomorphism, that is, $M\cong M_{\equiv_{M}}$, and $\equiv= \equiv_{M_{\equiv}}$. Thus, Myhill-Nerode relations for $R$ are in a bijective correspondence with DFAs for $R$ with no inaccessible states.

## The Myhill-Nerode Theorem

There exists a *coarsest* Myhill-Nerode relation for any given regular set $R$.

> [!Definition]
> Let $R\subseteq\Sigma^{*}$, regular or not. We define an equivalence relation $\equiv_{R}$ on $\Sigma^{*}$ in terms of $R$ as follows:
> $$
> x\equiv_{R}y\iff \forall z\in\Sigma^{*}(xz\in R\iff yz\in R).
> $$

For any set $R$, regular or not, $\equiv_{R}$ satisfies properties 1 and 2 of Myhill-Nerode relations and is the coarsest such relation on $\Sigma^{*}$. If $R$ is regular, this is also of finite index, and therefore a Myhill-Nerode relation on $R$ (the coarsest possible one, and corresponds to the unique minimal finite automaton for $R$).
j
> [!Theorem]
> Let $R\subseteq\Sigma^{*}$. The following statements are equivalent:
> 1. $R$ is regular;
> 2. there exists a Myhill-Nerode relation for $R$;
> 3. the relation $\equiv_{R}$ is of finite index.














