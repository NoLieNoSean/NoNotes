Every regular set has a minimal DFA that is unique up to isomorphism, and there is an algorithm for constructing it from any given DFA for $A$. The minimization process consists of two steps: getting rid of inaccessible states, and collapsing equivalent states. We will be focusing on the second one.

# The quotient construction

By 'collapsing' two states $p$ and $q$, we mean we can identify the two states as being the same, and one larger state.
1. We cannot collapse a final state $p$ and a non-final state $q$, since if $x, y\in\Sigma^{*}$ were such that $\hat{\delta}(s, x)=p$ and $\hat{\delta}(x, y)=q$, it is impossible to ensure that $x$ is rejected and $y$ is accepted after collapsing. 
2. If we merge $p$ and $q$, we are forced to also merge $\delta(p, a)$ and $\delta(q, a)$, to preserve determinism.

These two observations imply inductively that we cannot collapse $p$ and $q$ if $\hat{\delta}(p, x)\in F$ and $\hat{\delta}(q, x)\not\in F$ for some string $x$. It turns out that this is a sufficient condition, too.

> [!Proposition]
>  States $p$ an $q$ of a DFA can be safely collapsed iff there does not exist a string $x$ such that $\hat{\delta}(p, x)\in F$ and $\hat{\delta}(q, x)\not\in F$.
> 
> > [!Proof]-
> > Define an equivalence relation $\sim$ on $Q$ by
> > $$
> > p\sim q \iff \forall x\in\Sigma^{*}(\hat{\delta}(p, x)\in F\iff\hat{\delta}(q, x)\in F).
> > $$
> > We will now define the quotient automaton $M/\sim$:
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
> > We need to show that $\delta'$ is well defined: if $p\sim q$, 
> > $$
> > \begin{align}
> > \hat{\delta}(\delta(p, a), x)\in F & \iff \hat{\delta}(p, ax)\in F \\
> >  & \iff\hat{\delta}(q, ax)\in F \\
> >  & \iff \hat{\delta}(\delta(q, a), x)\in F.
> > \end{align}
> > $$
> > It is also clear that $p\in F\iff[p]\in F'$. Thus, we have $L(M/\sim)=L(M)$. It is also clear that no further collapsing is possible.

# The minimization algorithm

1. Write down a table of all pairs $\{ p, q \}$, initially unmarked.
2. Mark $\{ p, q \}$ if $p\in F$ and $q \not\in F$ or vice versa.
3. Repeat the following until no more changes occur: if there exists an unmarked pair $\{ p, q \}$ such that $\{ \delta(p, a), \delta(q, a) \}$ is marked for some $a\in\Sigma$, then mark $\{ p, q \}$. 
4. When done, $p\sim q$ iff $\{ p, q \}$ is not marked.

This is easily proved by induction on the length of distinguishing suffixes.



$$
\Huge \equiv=\equiv_{M_{\equiv}}
$$





