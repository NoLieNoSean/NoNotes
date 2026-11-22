---
id: "617"
date: 2026-11-05
time: 15:34
tags:
  - Lecture
  - GANA1
desc: build up to Lp dual = lq
---
> [!Proposition]
> Let $X$ be a compact metric space, $\mu$ finite measure on $X$. Then, $C(X) \hookrightarrow L^{p}(X)$ is dense for all $1\leqslant p< \infty$. 
> > [!Proof]-
> > We would show that any simple functions from $(X, \mu )$ can be uniformly approximated by continuous functions which would imply the result for every $L_{p}$, for which it is enough to show that $1_{E}$ can be uniformly approximated for measurable $E \subseteq X$.
> > By [[LEC GANA1 4#^b68379|Regularity]], $\exists$ open $U$  and compact $K$ such that $K \subseteq E \subseteq U$ such that $\mu(U \setminus E), \mu(E \setminus K) < \epsilon$.
> > Now, by Urysohn's lemma, $\exists f \in C(X)$ such that $f|_{K}=1, f|_{U^{c}}=0$ and $f(x) \in [0,1] \, \forall x \in X$.
> > Finally,
> > $$
> > \int_{X}\lvert 1_{E}-f \rvert d \mu \leq \int_{U \setminus E} \lvert f \rvert d \mu + \int_{E \setminus K} \lvert 1-f \rvert d \mu < 2 \epsilon .
> > $$

---

> [!Proposition]
> $C_{0}=\{ \{ x_{n} \}_{n=1}^{\infty}:x_{n}\in \mathbb{C}, x_{n}\to 0 \}\subseteq \ell^{\infty}$. 
> $(C_{0})^{*} \cong \ell_{1}$.
> > [!Proof]-
> > Define $\phi: \ell_{1}\to (C_{0})^{*}$ by $$ \phi:=\{ y_{n} \} \mapsto \left( \{ x_{n} \} \mapsto \sum x_{n}y_{n} \right).$$
> > Notice that $\lvert \phi(\{ y_{n} \})(\{ x_{n} \}) \rvert = \left\lvert  \sum x_{n}y_{n}  \right\rvert\leq \lVert x_{n} \rVert_{\infty} \cdot \left\lvert  \sum y_{n}  \right\rvert\leq  \lVert x_{n} \rVert_{\infty}\cdot \lVert y_{n} \rVert_{1}$.
> > Therefore, $\lVert \phi(\{ y_{n} \}) \rVert \leq \lVert y_{n} \rVert_{1}$.
> > Let $\overline{y}^{(k)} \in  \ell_{1}$ given by
> > $$
> > \overline{y}^{(k)} := \left( \frac{\lvert y_{1} \rvert }{ y_{1}  }, \frac{{\lvert y_{2} \rvert }}{y_{2}} , \underset{\substack{\uparrow\\\text{set } i \text{-th entry to }0 \text{ if }y_{i}=0}}{\cdots} , \frac{{\lvert y_{k} \rvert }}{y_{k}} , 0, 0, \cdots \right).
> > $$
> > This forces $\phi(\{ y_{n} \})(\overline{y}^{(k)})=\sum_{i=1}^{k}\lvert y_{k} \rvert \to \lVert y_{n} \rVert_{1}$, and since $\lVert \overline{y}^{(k)} \rVert_{\infty}\leq 1, \,\lVert \phi(\{ y_{n} \}) \rVert=\lVert \{ y_{n} \} \rVert_{1}$.
> > Therefore $\phi$ is isometry hence injection.
> > 
> > Conversely, suppose $\alpha \in (C_{0})^{*}$,  define $\alpha_{i}:= \alpha(e_{i})$. 
> > Again define $\tilde{\alpha}^{(k)} \in C_{0}$ be defined as
> > $$
> > \tilde{\alpha}^{(k)}= \left( \frac{\lvert \alpha _{1} \rvert }{ \alpha _{1}  }, \frac{{\lvert \alpha _{2} \rvert }}{\alpha_{2}} , \underset{\substack{\uparrow\\\text{set } i \text{-th entry to }0 \text{ if }\alpha _{i}=0}}{\cdots} , \frac{{\lvert \alpha _{k} \rvert }}{\alpha_{k}} , 0, 0, \cdots \right).
> > $$
> > Now notice that $\lVert \tilde{\alpha}^{(k)} \rVert_{\infty }\leq 1 \implies \alpha(\tilde{\alpha}^{(k)})\leq \lVert \alpha \rVert\implies \sum_{i=1}^{k}\lvert \alpha_{i} \rvert\leq \lVert \alpha \rVert\implies \lVert \{ \alpha_{n} \} \rVert_{1} \leq \lVert \alpha \rVert\implies \{ \alpha_{n} \}\in \ell_{1}$.
> > Now let $\{ x_{n} \}\in C_{0}$ and let $\tilde{x}^{(k)} \in C_{0}$ be given by
> > $$
> > \tilde{x}^{(k)}:= \left( x_{1}, x_{2}, \cdots ,x_{k}, 0, 0, \cdots \right).
> > $$
> > Notice that $d_{\ell_{\infty }}(\{ x_{n} \} ,  \tilde{x}^{(k)}_{n} ) = \sup_{j> k}\lvert x_{j} \rvert\to 0$.
> > Therefore, $$\alpha(\{ x_{n} \})= \lim_{ k \to \infty }\alpha( \tilde{x}_{n}^{(k)} )= \lim_{ k \to \infty }\sum_{i=1}^{k}x_{i}\alpha(e_{i})= \sum x_{i}\alpha_{i}.$$
> > Hence, $\phi(\{ \alpha_{n} \})=\alpha$. Therefore $\phi$ gives an isomorphism.

> [!Exercise]
> Show that $\ell^{p\star}=\ell^{q}$ for $\frac{1}{p}+\frac{1}{q}=1$.

---

# Radon-Nikodym Theorem

> [!Definition]
> Let $\mu$, $\nu$ be two $\sigma$-finite measures. We say $\nu \ll  \mu$ if $\nu$ (i.e. absolutely continuous wrt $\mu$) if $\mu(E) = 0 \implies \nu(E)= 0\; \forall E \in  \mathcal{F}$.

> [!Proposition]
> Let $\mu$ be a $\sigma$-finite measure. Let $f$ be a positive measurable function taking finite values a.e.. Then $\nu(E):=\int_{E}fd\mu$ is a $\sigma$-finite measure and $\nu\ll \mu$. 
> > [!Proof]-
> > $\nu$ is a measure by [[LEC GANA1 6#^de9d0c|MCT]].
> > Let $X_{i} \uparrow X$  be such that $\mu(X_{i})< \infty$.
> > Let $Y_{n,m}:= \{ x \in X_{n}: \lvert f(x) \rvert\leq m \}$.
> > Then set of points where $f$ takes finite values is $\bigcup Y_{n,m}\implies \mu\left( X \setminus \bigcup Y_{n,m} \right)=0\implies \nu\left( X \setminus \bigcup Y_{n,m} \right)=0$.
> > Morever, 
> > $$
> > \nu(Y_{n,m})= \int_{Y_{n,m}}f(x)d\mu\leq m \mu(X_{n})< \infty.
> > $$
> > Hence,
> > $$
> > X = \left( \bigcup Y_{n,m} \right) \cup \left( X \setminus \bigcup Y_{n,m} \right)
> > $$
> > all of which have finite $\nu$ measure.

> [!Theorem] Radon–Nikodym theorem
> Let $\mu, \nu$ be $\sigma$-finite measures on $(X, \mathcal{F})$ such that $\nu\ll \mu$. 
> Then $\exists$ $\mathcal{F}$-measurable $h:X\to [0, \infty]$ such that
> $$
> \nu(E) = \int_{E}h d\mu \; \forall E \in \mathcal{F}
> $$
> and value $h$ is uniquely determined $\mu$-almost everywhere.
> 	Furthermore,
> $$
> \int_{X}g d \nu = \int_{X} hg d \mu 
> $$
> for every nonnegative $\mathcal{F}$ measurable $g$.
> > [!Proof]-
> > Assume $\mu, \nu$ are finite measures.
> > Let $\rho= \mu + \nu$, note that $\mu \gg \rho \gg \mu, \nu$.
> > Consider the map $\phi:L^{2}(X, \mathcal{F}, \rho)\to \mathbb{R}$ defined by 
> > $$
> > \phi(f):= \int_{X}f d \nu.
> > $$
> > Now,
> > $$
> > \lvert \phi(f) \rvert  \leq  \int_{X}\lvert f \rvert d \nu = \int_{X} \lvert f \rvert  1_{X} d \nu \overset{\text{Hölder's}}{\displaystyle\leq } \lVert f \rVert _{L^{2}(\nu)} \cdot \lVert 1_{X} \rVert _{L^{2}(\nu )} = \lVert f \rVert _{L^{2}(\nu)} \cdot \sqrt{\nu(X)}\leq \lVert f \rVert _{L^{2}(\rho)} \cdot \sqrt{\nu(X)}.
> > $$
> > Hence, $\phi$ is a bounded operator.
> > By [[LEC GANA1 14#^f0b16e|Riesz's lemma]], $\exists p \in L^{2}(X, \mathcal{F}, \rho )$ such that 
> > $$
> > \int_{X}f d \nu= \int_{X}fpd \rho \quad \forall f \in L^{2}(\rho).
> > $$
> > Next we would show that $p \in [0, 1)$ $\rho-$almost everywhere.
> > For $E \in \mathcal{F}$, $\int_{E}p d \rho = \nu(E) \geq 0 \implies p \geq 0 \;\rho$-almost everywhere.
> > Also, $\int_{E}p d \rho = \nu(E) = \rho(E) - \mu(E) \implies \mu(E) = \int_{E}(1-p)d \rho$ and since $\mu \gg \rho$, $1> p \; \rho-$almost everywhere.
> > 
> > Define $h = \frac{p}{1-p}$, note that $h$ is well defined and non-negative $\rho$-almost everywhere. Notice that this $h$ satisfies the conditions stated in the hypothesis.
> > 
> > Now we generalize the result to the $\sigma$-finite case. Let $X = \bigsqcup A_{n} = \bigsqcup B_{n}$ be such that $\mu(A_{n}), \nu(B_{n})< \infty$.
> > Let $X_{n}$ be an enumeration of $A_{i} \cap B_{j}$.  For each $X_{n}$ we get corresponding $h_{n}$ by the previous steps. Now let $h = \sum 1_{X_{n}}h_{n}$. By MCT, $\int g d \nu = \int hg d \mu$ for every measurable $g$.
> > 
> > Suppose $h$ and $h'$ both satisfy $\nu(E)= \int_{E}h d \mu = \int_{E} h' d \mu$ for every $E \in \mathcal{F}$ then $\int_{E}(h-h')d \mu = 0$. This gives the uniqueness.

> [!Remarks]
> > [!Definition]
> > $h = \frac{{d \nu}}{d \mu}$ is called the Radon-Nikodym derivative of $\nu$ wrt $\mu$.
> 
> - $\nu_{1}\ll \nu_{2}\ll \nu_{3} \implies  \left(  \frac{{d \nu_{3}}}{d \nu_{2}}  \right) \cdot \left( \frac{{d \nu_{2}}}{d \nu_{1}} \right)$.
---

# Complex measure and total variation

> [!Definition] Complex measure
> For a measurable space $(X, \mathcal{F})$, $\mu: \mathcal{F}\to \mathbb{C}$ is called a complex measure if $\mu(\emptyset)=0$ and $\mu(\bigsqcup E_{i})= \sum \mu(E_{i})$.

> [!Proposition] 
> Let $\mu:\mathcal{F}\to \mathbb{R}$ be a complex measure, then for disjoint collection $\{ E_{n} \}\subseteq \mathcal{F}$, $\sum {\lvert  \mu(E_{n}) \rvert}< \infty$.
> > [!Proof]-
> > $$
> > \sum \lvert \mu(E_{n}) \rvert = \sum_{\mu(E_{n})>  0} \lvert \mu(E_{n}) \rvert + \sum_{\mu(E_{n})< 0}\lvert \mu(E_{n}) \rvert = \mu\left(\bigsqcup_{\mu(E_{n})> 0} E_{n}\right) - \mu\left(\bigsqcup_{\mu(E_{n})< 0}E_{n}\right) \in \mathbb{R}.
> > $$

^1b03da

> [!Definition] Total variation measure
> For a complex measure space $(X, \mathcal{F}, \mu)$, total variation measure $\lvert \mu \rvert: \mathcal{F}\to [0, \infty]$ is defined as 
> $$
> \lvert \mu \rvert(E):= \sup \left\{  \sum_{n=1}^{\infty}\lvert \mu(E_{n}) \rvert : \bigsqcup_{n=1}^{\infty}E_{n}=E  \right\}.
> $$

> [!Proposition] 
> $\lvert \mu \rvert$ is a positive(ie normal) measure.
> > [!Proof]-
> > Clearly $\lvert \mu \rvert(\phi)=0$ and $\lvert \mu \rvert$ takes only non-negative value, hence we only need to show $\sigma$-additivity.
> > 
> > Let $E = \bigsqcup_{n} E_{n} = \bigsqcup_{m} F_{m}$. Clearly, $F_{m}= \bigsqcup_{n}(E_{n}\cap F_{m})$, by additivity of $\mu$, $\mu(F_{m})=\sum_{n}\mu\left(E_{n}\cap F_{m}\right)\implies \lvert \mu(F_{m}) \rvert\leq \sum_{n}\lvert \mu(E_{n} \cap F_{m}) \rvert$.
> > Also since $E_{n} = \bigsqcup_{m}(E_{n} \cap F_{m})$, by definition of $\lvert \mu \rvert$, $\lvert \mu \rvert (E_{n}) \geq \sum_{m}\lvert \mu(E_{n} \cap F_{m}) \rvert$.
> > Therefore,
> > $$
> > \sum_{m}\lvert \mu  (F_{m})\rvert=\sum_{m}\sum_{n}\lvert \mu(E_{n} \cap F_{m}) \rvert = \sum_{n}\sum_{m}\lvert \mu(E_{n} \cap F_{m}) \rvert \leq \sum_{n}\lvert \mu \rvert (E_{n}).
> > $$
> > By taking supremum on the left side of $\sum_{m}\lvert \mu(F_{m}) \rvert\leq \sum_{n}\lvert \mu \rvert(E_{n})$, we get that $\lvert \mu \rvert(E) \leq \sum_{n}\lvert \mu \rvert(E_{n})$.
> > 
> > Now again suppose $E = \bigsqcup_{n} E_{n}$.
> > Assume $\lvert \mu \rvert(E_{n})< \infty$ for every $n$. Let $\epsilon> 0$.
> > For each $n$, choose a partition $\{ F^{n}_{m} \}_{m}$ of $E_{n}$ satisfying
> > $$
> > \sum_{m}\lvert \mu (F_{m}^{n})\rvert\geq \lvert \mu \rvert (E_{n})-\frac{\epsilon}{2^{n}} .
> > $$
> > Also since $E = \bigsqcup_{n,m}F^{n}_{m}$, by definition of $\lvert \mu \rvert$,
> > $$
> > \lvert \mu \rvert(E) \geq \sum_{n}\sum_{m}\lvert \mu(F^{n}_{m}) \rvert  \geq \sum_{n}\lvert \mu \rvert (E_{n}) - \epsilon.
> > $$
> > Now take $\epsilon\to 0$.
> > 
> > If $\lvert \mu \rvert(E_{n_{0}})=\infty$ for some $n_{0}$ then choose a partition $\{ G_{m} \}$ of $E_{n_{0}}$ such that $\sum_{m}\lvert \mu(G_{m}) \rvert> N$. Now $\mathcal{P}_{N} = \{ E_{n} \}_{n \ne n_{0}} \cup \{G_{m}\}$ gives a countable partition of $E$ such that $\sum_{P \in \mathcal{P}_{n}}\lvert \mu(P) \rvert> N$. Taking $N\to \infty$ gives $\lvert \mu \rvert(E)=\infty$ making $\mu(E)\geq \sum_{n}\lvert \mu(E_{n}) \rvert$.