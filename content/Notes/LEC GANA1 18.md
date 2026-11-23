---
id: "619"
date: 2026-11-06
time: 15:30
tags:
  - Lecture
  - GANA1
desc: Lp dual = Lq
---
# Total variation of a complex measure is a finite measure.
> [!Definition]
> Given a measure space $(X, \mathcal{F}, \mu)$, $A \in \mathcal{F}$ is called an atom if $\mu(A)> 0$ and for every measurable $B \subseteq A$, $\mu (B)=0$ or $\mu(A \setminus B)=0$.

Let $(X, \mathcal{F}, \mu)$ be a signed real measure space and let $\lvert \mu \rvert$ be the total variation of $\mu$.

> [!Claim]
> Atoms in $(X, \mathcal{F}, \lvert \mu  \rvert)$ have finite total variation.
> > [!Proof]-
> > Let $F$ be an atom and suppose $\bigsqcup_{n}F_{n}=F$ be a measurable partition.
> > If $\lvert \mu \rvert(F_{n_{0}})> 0$ then since $F$ is an atom $\lvert \mu  \rvert(F \setminus F_{n_{0}})= \sum_{n \ne n_{0}}\lvert \mu \rvert(F_{n})=0$.
> > This forces that for every $n \ne n_{0},  \lvert \mu \rvert(F_{n})=0$ and hence $\mu(F_{n})=0$ for every $n \ne n_{0}$ .
> > And since $\lvert \mu \rvert(F)> 0$, there is exactly one $n_{0}$ such that $\lvert \mu \rvert(F_{n_{0}})> 0$.
> > Therefore,
> > $$
> > \sum \lvert \mu(F_{n}) \rvert = \lvert \mu(F_{n_{0}}) \rvert = \left\lvert  \sum \mu(F_{n})  \right\rvert = \lvert \mu(F) \rvert.
> > $$
> > Therefore for every partition $\{ F_{n} \}$, $\sum \lvert \mu(F_{n}) \rvert=\lvert \mu(F) \rvert$, taking supremum over every partition on the LHS gives us $\lvert \mu \rvert(F)= \lvert \mu(F) \rvert< \infty$.

> [!Claim]
> Let $\lvert \mu \rvert(F)=\infty$ and define
> $$
> \mathcal{G}_{F}=\{ E \subseteq F \text{ is measurable}: \lvert \mu \rvert ( F \setminus E ) = \infty  \}.
> $$
> Then $\sup_{E \in \mathcal{G}_{F}}\lvert \mu \rvert(E)=\infty$.
> > [!Proof]-
> > FTSOC, $\sup_{E \in \mathcal{G}_{F}}\lvert \mu \rvert(E)=\alpha < \infty$.
> > 
> > Notice that $\emptyset \in \mathcal{G_{F}}$. 
> > Also notice that $\mathcal{G}_{F}$ is closed under finite unions as $A, B \in \mathcal{G}_{F}$ implies that  $\lvert \mu \rvert(A \cup B)\leq \mu(A)+\mu(B)\leq 2 \alpha$ which implies $\lvert \mu \rvert(F \setminus (A \cup B))= \infty$.
> > 
> > Now choose $E_{n} \in \mathcal{G}_{F}$ such that $\lvert \mu \rvert(E_{n}) \in (\alpha -\frac{1}{n}, \alpha]$. Since $\mathcal{G}_{F}$ is closed under finite unions we can replace $E_{n}$ with $\bigcup_{i\leq n}E_{i}$ and get  $\lvert \mu \rvert(E_{i}) \uparrow \alpha$, this implies $\lvert \mu \rvert\left( E \right) = \alpha$ by taking $E = \bigcup E_{i}$.
> > 
> > With $E$ having finite $\lvert \mu \rvert$ measure, we get that $\lvert \mu \rvert(F \setminus E)=\infty$. Hence by previous claim, there exists measurable $F_{1} \bigsqcup F_{2}= F$ such that $\lvert \mu \rvert(F_{1}), \lvert \mu \rvert(F_{2})> 0$. And since $\lvert \mu \rvert(F_{1}) + \lvert \mu \rvert(F_{2})= \lvert \mu \rvert(F)=\infty$, WLOG, $\lvert \mu \rvert(F_{2})=\infty$.
> > Taking $E'= E \bigsqcup F_{1}$, we get $\lvert \mu \rvert(F \setminus E') = \lvert \mu \rvert(F_{2})=\infty$, hence $E' \in \mathcal{G}_{F}$.
> > But $\lvert \mu \rvert(E')= \lvert \mu \rvert(E)+\lvert \mu \rvert(F_{1})> \alpha$,  contradicting $\alpha$ being the supremum.

> [!Claim]
> $\lvert \mu \rvert(F)=\infty \implies F= A \bigsqcup B$  for some measurable $A, B$ such that $\lvert \mu (A)\rvert> 1$ and $\lvert \mu  \rvert(B)= \infty$.
> > [!Proof]-
> > Choose measurable partition $F = F_{1} \bigsqcup F_{2}$ by previous claim such that $\lvert \mu \rvert(F_{1})> 2$ and $\lvert \mu \rvert(F_{2})=\infty$.
> > Let $\bigsqcup_{n}A_{n}=F_{1}$ be such that $\sum \lvert \mu(A_{n}) \rvert> {2}$. WLOG, $\mu(A_{i}) \ne 0 \, \forall i$.
> > Let $\{ P_{n} \}$ be enumeration of $A_{n}$'s with positive $\mu$ measure and let $\{ N_{n} \}$ be the enumeration of the negative ones.
> > Then $\left\lvert  \mu\left( \bigcup P_{n} \right)  \right\rvert+\left\lvert  \mu\left( \bigcup N_{n} \right)  \right\rvert = \sum \lvert \mu(P_{n}) \rvert+\sum \lvert \mu(N_{n}) \rvert =\sum \lvert \mu(A_{n}) \rvert > 2$.
> > Take $A$ to be one of $\bigcup P_{n}$ or $\bigcup N_{n}$ such that it satisfies $\lvert \mu(A) \rvert > 1$, then $B = F \setminus A \supseteq F_{2} \implies \lvert \mu \rvert(B)=\infty$.

> [!Proposition] 
> $\lvert \mu \rvert$ is a finite measure.
> > [!Proof]-
> > Suppose not, the $\lvert \mu \rvert(X)=\infty$, then by applying previous claim on $X$, we can pick $X_{1} \subseteq X$ with $\lvert \mu (X_{1})\rvert> 1$ satisfying $\lvert \mu \rvert(X \setminus X_{1})=\infty$. Then again we can apply the previous claim on $X\setminus X_{1}$ and obtain $X_{2}$ and we can get a sequence of pairwise disjoint $X_{i}$ satisfying $\lvert \mu (X_{i})\rvert> 1$. This contradicts [[LEC GANA1 17#^1b03da]].

> [!Corollary]
> If $\mu$ is a complex measure, then $\lvert \mu \rvert\leq \lvert Re(\mu) \rvert + \lvert Im(\mu) \rvert< \infty$. So $\lvert \mu \rvert$ is a finite positive measure.

> [!Corollary] Jordan decomposition theorem
> If $\mu$ is a complex measure, then it can be expressed as $\mu = (\mu_{1}-\mu_{2}) + i(\mu_{3}-\mu_{4})$ where each $\mu_{i}$'s are finite positive measures.
> > [!Proof]-
> > Clearly it is enough to show for signed real measures, and for that case, take
> > $$
> > \mu_{1}= \frac{\lvert \mu \rvert +\mu}{2}, \mu_{2}=\frac{{\lvert \mu \rvert -\mu}}{2}.
> > $$

---
# $(L^{p})^{*}\cong L^{q}$

[!Theorem]
Let $(X, \mathcal{A}, \mu)$ be a finite measure space(Holds for $\sigma$-finite also) and $\frac{1}{p}+\frac{1}{q}=1$.
1. If $g \in L^{q}$, then define $\phi_{g}(f)= \int fg$ for $f \in L_{p}$. Then
   $$
   \lVert \phi_{g} \rVert_{(L^{p})^{*}} = \lVert g \rVert _{L^{q}}.
   $$
2. Given any $\phi \in (L^{p})^{*}$, $\exists g \in L^{q}$ such that $\phi = \phi_{g}$.

[!Proof]-
1. By Hölder's, $\lvert \phi_{g}(f) \rvert\leq \int \lvert fg \rvert\leq \lVert f \rVert_{p}\cdot \lVert g \rVert_{q}$. So $\phi_{g}$ is a well defined linear functional with $\lVert \phi_{g} \rVert\leq \lVert g \rVert_{q}$.
   For $g \in L^{q}$, define $f= \frac{\overline{g}\cdot g^{1/(p-1)}}{\lvert g \rvert}$ then $\lvert f \rvert^{p}=\lvert g \rvert^{q}$ so $f \in L^{p}$ with $\lVert f \rVert_{p}= \lVert g \rVert_{q}^{q/p}$.
   This gives $\phi _{g}(f)=  \int \frac{{\overline{g} \cdot g^{1/(p-1)}}}{\lvert g \rvert}.g = \lVert g \rVert^{q}_{q}= \lVert f \rVert_{p}\lVert g \rVert_{q}$.
   Hence, $\lVert \phi_{g} \rVert= \lVert g \rVert_{q}$.
2. Let $\phi \in (L_{p})^{*}$ be given. Since $\mu$ is finite, $1_{E} \in L^{p}$. Let $\nu(E):= \phi(1_{E})$.
   We would show that $\nu$ is a complex measure. Note that $\nu$ is finitely additive since $\phi$ is linear.
   Suppose $E_{n} \uparrow E$, then 
   $$
   \lvert \nu(E)-\nu(E_{n}) \rvert= \lvert \phi(1_{E}-1_{E_{n}}) \rvert \leq \lVert \phi \rVert \cdot \lVert 1_{E}-1_{E_{n}} \rVert _{p}= \lvert \phi \rvert \mu(E \setminus E_{n})^{1/p}\to 0
   $$
   Thus $\nu$ is a complex measure.
