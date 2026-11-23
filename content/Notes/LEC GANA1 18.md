---
id: "619"
date: 2026-11-06
time: 15:30
tags:
  - Lecture
  - GANA1
desc: Lp dual = Lq
---
# Total variation of a complex measure is a finite measure

> [!Definition]
> Given a measure space $(X, \mathcal{F}, \mu)$, $A \in \mathcal{F}$ is called an atom if $\mu(A)> 0$ and for every measurable $B \subseteq A$, $\mu (B)=0$ or $\mu(A \setminus B)=0$.

Let $(X, \mathcal{F}, \mu)$ be a signed real measure space and let $\lvert \mu \rvert$ be the [[LEC GANA1 17#^b24e1f|total variation measure]] of $\mu$.

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

^7682e5
> [!Remark] 
> 1. If $\mu = \mu_{1}-\mu_{2}$ is jordan decomposition of signed real measure $\mu$, then $\mu_{i}\ll  \lvert \mu \rvert$ by the definition of $\mu_{i}$.
> 2. If $\mu = (\mu_{1}-\mu_{2}) +i (\mu_{3}-\mu_{4})$ is jordan decomposition of complex measure $\mu$, then $\mu_{i}\ll \lvert \mu \rvert$. It follows from the fact that $\lvert Re (\mu)\rvert, \lvert Im(\mu) \rvert\le \lvert \mu \rvert$.

^9eb56e

---
# $(L^{p})^{*}\cong L^{q}$

> [!Theorem]
> Let $(X, \mathcal{A}, \mu)$ be a finite measure space(Holds for $\sigma$-finite also) and $\frac{1}{p}+\frac{1}{q}=1$.
> 1. If $g \in L^{q}$, then define $\phi_{g}(f)= \int fg$ for $f \in L_{p}$. Then
>    $$
>    \lVert \phi_{g} \rVert_{(L^{p})^{*}} = \lVert g \rVert _{L^{q}}.
>    $$
> 2. Given any $\phi \in (L^{p})^{*}$, $\exists g \in L^{q}$ such that $\phi = \phi_{g}$.
> 
> > [!Proof]-
> > 1. By Hölder's, $\lvert \phi_{g}(f) \rvert\leq \int \lvert fg \rvert\leq \lVert f \rVert_{p}\cdot \lVert g \rVert_{q}$. So $\phi_{g}$ is a well defined linear functional with $\lVert \phi_{g} \rVert\leq \lVert g \rVert_{q}$.
> >    Assume $p> 1$.
> >    For $g \in L^{q}$, define $f= \frac{{\overline{g}\cdot \lvert g \rvert}^{1/(p-1)}}{\lvert g \rvert}$ then $\lvert f \rvert^{p}= (\lvert g \rvert^{1/(p-1)})^{p}=\lvert g \rvert^{q}$ so $f \in L^{p}$ with $\lVert f \rVert_{p}= \lVert g \rVert_{q}^{q/p} = \lVert g \rVert_{q}^{q-1}$.
> >    This gives $\lvert \phi_{g}(f) \rvert= \left\lvert  \int \frac{{\overline{g} \cdot \lvert g \rvert^{1/(p-1)}}}{\lvert g \rvert}.g   \right\rvert  = \left\lvert  \int \lvert g \rvert^{1/(p-1)}\cdot \lvert g \rvert  \right\rvert = \int \lvert g \rvert^{q} = \lVert g \rVert^{q}_{q}= \lVert f \rVert_{p}\lVert g \rVert_{q}$.
> >    Hence, $\lVert \phi_{g} \rVert= \lVert g \rVert_{q}$.
> >    For $p=1$, let $E_{\epsilon}= \{ x \in X : \lvert g(x) \rvert> \lVert g \rVert_{\infty}- \epsilon\}$, and let $f_{\epsilon}=\frac{\overline{g}}{\lvert g \rvert}1_{E_{\epsilon}}$. Then $f_{\epsilon}\in L^{1}$ with $\lVert f_{\epsilon} \rVert_{1}=\mu(E_{\epsilon})$. This gives 
> >    $$
> >    \lvert \phi_{g}(f_{\epsilon}) \rvert = \int_{E_{\epsilon}}\lvert g \rvert d \mu\geq (\lVert g \rVert_{\infty} - \epsilon)\mu(E_{\epsilon})=(\lVert g \rVert _{\infty}-\epsilon)\lVert f_{\epsilon } \rVert _{1}.
> >    $$
> >    Therefore, $\lVert \phi_{g} \rVert\geq \lVert g \rVert_{\infty}-\epsilon$ for every $\epsilon> 0 \implies \lVert \phi_{g} \rVert=\lVert g \rVert$.
> > 2. Let $\phi \in (L_{p})^{*}$ be given. Since $\mu$ is finite, $1_{E} \in L^{p}$. Let $\nu(E):= \phi(1_{E})$.
> >    We would show that $\nu$ is a complex measure. Note that $\nu$ is finitely additive since $\phi$ is linear.
> >    Suppose $E_{n} \uparrow E$, then 
> >    $$
> >    \lvert \nu(E)-\nu(E_{n}) \rvert= \lvert \phi(1_{E}-1_{E_{n}}) \rvert \leq \lVert \phi \rVert \cdot \lVert 1_{E}-1_{E_{n}} \rVert _{p}= \lVert \phi \rVert \mu(E \setminus E_{n})^{1/p}\to 0
> >    $$
> >    Thus $\nu$ is a complex measure.
> >    
> >    Next we would show that $\lvert \nu \rvert\ll  \mu$. For that, suppose $\mu(E)=0$, then $\lVert 1_{E} \rVert_{L^{p}}=0 \implies \lvert \phi(1_{E}) \rvert\leq \lVert \phi \rVert \cdot \lVert 1_{E} \rVert_{L^{p}}=0 \implies \nu(E)=0$.
> >    Now, $\bigsqcup E_{n}=E \implies \mu(E_{n})=0$ for every $E_{n} \implies \nu(E_{n})=0$ for every $E_{n}$, and hence
> >    $$
> >    \sum \lvert \nu(E_{n}) \rvert =0
> >    $$
> >    Taking supremum over every partition $\{ E_{n} \}$, we get that $\lvert \nu \rvert (E)=0$, and therefore $\lvert \nu \rvert\ll \mu$.
> >    
> >    Let $\nu = \nu_{1}-\nu_{2} + i(\nu_{3}-\nu_{4})$ by the Jordan decomposition of $\nu$([[LEC GANA1 18#^7682e5]]).
> >    By [[LEC GANA1 18#^9eb56e]].2, $\nu_{i}\ll \lvert \nu \rvert\implies \nu_{i}\ll \mu$.
> >    Now by [[LEC GANA1 17#^0a786f| Radon-Nikodym]], obtain derivatives of $\frac{d\nu_{i}}{d \mu }$, and define $g := \left( \frac{{d \nu_{1}}}{d \mu}- \frac{{d \nu_{2}}}{d \mu} \right) +i \left(  \frac{{d \nu_{3}}}{d \mu} - \frac{{d \nu_{4}}}{d \mu } \right)$.
> >    Then, $g$ is measurable and $\forall E \in \mathcal{A}$ satisfies $$ \nu(E)= \int_{E}g d\mu \implies \phi(1_{E})= \int_{X}g \cdot  1_{E}d\mu= \phi_{g}(1_{E}). $$
> >    So, $\forall$ simple $f \in L^{p}$, $\phi(f)=\int_{X}fg d \mu$.
> >    Also since each $\nu_{i}$ are finite measures, each $\frac{d\nu_{i}}{d\mu}\in L^{1}(\mu )$, hence $g \in L^{1}(\mu )$.
> >    Note that $\phi_{g}$ is defined if $g \in L_{q}$ which would be proven later.
> >    
> >    Now note that $L^{\infty}(\mu) \subseteq L^{p}(\mu)$ by [[LEC GANA1 16#^16bd3b]].
> >    We would next show that $\phi (f)=\phi_{g}(f)$ for every $f \in L^{\infty}(\mu)$ and since $L^{\infty}$ is dense in $L^{p}$ by [[LEC GANA1 17#^74bbd8]], it would follow that $\phi_{g}=\phi$.
> >    For $f \in L^{\infty}(\mu)\subseteq L^{p}(\mu )$, we can choose a sequence of simple functions $f_{n}$ such that $\lvert f_{n} \rvert \leq \lvert f \rvert$ and $\lVert f_{n}-f \rVert_{\infty}\to 0$.  Then since $\lVert f_{n}-f \rVert_{p}\leq \lVert f_{n}-f \rVert_{\infty}\cdot \mu(X)^{1/p}$ and $\mu$ is a finite measure, we get that $f_{n}\to f$ in $L^{p}$. By the continuity of $\phi$, we get that $\phi(f_{n})\to \phi(f)$.
> >    And $f_{n}g \to fg$ pointwise and $\lvert f_{n}g \rvert\leq \lVert f \rVert_{\infty} \lvert g \rvert$, therefore, by LDCT, we get that $\int_{X}f_{n}gd\mu\to \int_{X}fgd\mu$. Therefore, $\phi(f)=\phi_{g}(f)$ for every $f \in L^{\infty}$.
> >    
> >    Next we show that $g \in L^{q}$.
> >    Assume $p> 1$.
> >    Choose a sequence of simple functions $\{ g_{n} \}$ such that $g_{n}\uparrow \lvert g \rvert$ pointwise with $g_{n}\geq 0$. Define 
> >    $$ h_{n}:=\frac{\overline{g}}{\lvert g \rvert } \cdot g_{n}^{1/(p-1)}. $$
> >    Then $\lvert \phi(h_{n}) \rvert=\left\lvert  \int \lvert g \rvert g_{n}^{1/(p-1)}  \right\rvert\geq \left\lvert  \int g_{n}^{q}  \right\rvert=\lVert g_{n} \rVert_{q}^{q}$. And since $\lVert h_{n} \rVert_{p}=\lVert g_{n} \rVert_{q}^{q/p}$, we get that $\lVert \phi \rVert\cdot \lVert h_{n} \rVert_{p}\geq \lVert g_{n} \rVert_{q}^{q}\implies \lVert \phi \rVert\geq \lVert g_{n} \rVert_{q}$ , and by MCT $\lVert \phi \rVert\geq \lVert g \rVert_{q}\implies g \in L^{q}$.
> >    For $p=1$, let $E_{\epsilon}= \{ x \in X: \lvert g(x) \rvert\geq \lVert \phi \rVert+\epsilon \}$, and set $h = \frac{\overline{g}}{\lvert g \rvert}1_{E}$. Then $h$ is bounded, hence
> >    $$
> >    (\lVert \phi \rVert +\epsilon)\mu(E)\leq \int_{E}\lvert g \rvert d \mu= \int_{X} hg d \mu=\phi(h)\leq \lVert \phi \rVert \cdot \lVert h \rVert _{1}= \lVert \phi \rVert \mu(E).
> >    $$
> >    and since $\mu$ is a finite measure, this forces $\mu(E)=0$. Taking union over $\epsilon=\frac{1}{n}$, we get that $\lvert g \rvert\leq \lVert \phi \rVert$ a.e., so $g \in L^{\infty}$.