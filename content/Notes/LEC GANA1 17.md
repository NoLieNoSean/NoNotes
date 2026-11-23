---
id: "617"
date: 2026-11-05
time: 15:34
tags:
  - Lecture
  - GANA1
desc: build up to Lp dual = lq
P1: true
---
> [!Lemma]
> Let $(X, \mathcal{F}, \mu)$ be a measure space. Simple functions are dense in $L^{p}(X, \mathcal{F}, \mu)$ for $1\leqslant p\leqslant \infty$. 
> 
> > [!Proof]-
> > 
> > Suppose $p< \infty$. 
> > 
> > First, suppose $f\in L^{p}\geqslant 0$, a fix a representative of $f$ in $\mathcal{L}^{p}$. Since $f$ is measurable, we obtained a sequence of simple functions $s_{n}$ such that $s_{n}\uparrow f$ by [[LEC GANA1 5#^87b42b]]. Now consider $|f-s_{n}|^{p}$. We have
> > $$
> > \begin{align}
> > 0\leqslant |f-s_{n}|^{p}\leqslant |f|^{p}, \quad \quad |f-s_{n}|^{p}\to 0 \text{ a.e.}
> > \end{align}
> > $$
> > By the [[LEC GANA1 7#^1cb1b8|dominated convergence theorem]], 
> > $$
> > \lim_{ n \to \infty } \int_{X}|f-s_{n}|^{p}\,d\mu=0.
> > $$
> > For real valued $f$, write $f=f^{+}-f^{-}$. Both $f^{+}$ and $f^{-}$ belong to $L^{p}$, so by the preceding argument there are sequences of simple functions $s_{n}^{+}\to f^{+}$ and $s_{n}^{-}\to f^{-}$ in $L^{p}$. 
> > 
> > Consequently,
> > $$
> > s_n=s_n^+-s_n^-\to f
> > $$
> > in $L^p$, since
> > $$
> > \|f-s_n\|_p \leq \|f^+-s_n^+\|_p+\|f^--s_n^-\|_p.
> > $$
> > For complex-valued $f$, apply the same argument to its real and imaginary parts.
> > 
> > Hence simple functions are dense in $L^p(X)$.
> > 
> > ---
> > 
> > Suppose $p=\infty$. 
> > 
> > Given $f\in L^\infty$ and $\varepsilon>0$, modify $f$ on a null set so that it is bounded everywhere. Partition its bounded range into finitely many sets of diameter at most $\varepsilon$, and replace its values on each preimage by a representative value. This gives a simple function $s$ satisfying
> > $$
> > \|f-s\|_\infty\leq\varepsilon.
> > $$
> > 
> 

^74bbd8

> [!Proposition]
> Let $X$ be a compact metric space, $\mu$ finite measure on $\mathcal{B}_{X}$. Then, $C(X) \hookrightarrow L^{p}(X, \mathcal{B}_{X}, \mu)$ is dense for all $1\leqslant p< \infty$. 
> 
> > [!Proof]-
> > 
> > In light of [[#^74bbd8]], it suffices to show that simple functions on $(X, \mu)$ can be approximated arbitrarily well in the $p$-norm by continuous functions. 
> > 
> > Fix $E\in \mathcal{B}_{X}$, and let $\epsilon> 0$. By [[LEC GANA1 4#^b68379|regularity]], there exists open $U$ and closed (hence compact) $K$ such that $K\subseteq E\subseteq U$ and $\mu(U\setminus E)<\epsilon$, $\mu(E\setminus K)<\epsilon$. By [[Urysohn Lemma and applications#^d977b6|Urysohn's lemma]], there exists $f\in C(X)$ with $0\leqslant f\leqslant 1$, $f|_{K}=1$, and $f|_{U^{c}}=0$. 
> > 
> > $$
> > \int_{X}\lvert 1_{E}-f \rvert^{p}\, d \mu \leq \int_{U \setminus E} \lvert f \rvert^{p}\, d \mu + \int_{E \setminus K} \lvert 1-f \rvert^{p}\, d \mu < 2 \epsilon .
> > $$
> > 
> 


---

> [!Proposition]
> Consider $C_{0}=\{ \{ x_{n} \}_{n=1}^{\infty}:x_{n}\in \mathbb{C}, x_{n}\to 0 \}\subseteq \ell^{\infty}$.
> 1. For any $\{ y_{n} \}\in \ell^{1}$, define $\phi_{\{ y_{n} \}}(\{ x_{n} \})=\sum_{n=1}^{\infty}x_{n}y_{n}$. Then, $\phi_{\{ y_{n} \}}\in C_{0}^{*}$, and $\lVert \phi_{\{ y_{n} \}} \rVert=\lVert \{ y_{n} \} \rVert_{\ell^{1}}$. 
> 2. Given any $\phi\in C_{0}^{*}$, there exists $\{ y_{n} \}\in \ell^{1}$ such that $\phi=\phi_{\{ y_{n} \}}$. 
> 
> In other words, $(C_{0})^{*} \cong \ell_{1}$.
> 
> > [!Proof]-
> > 
> > For $\{ x_{n} \}\in C_{0}$,
> > $$
> > \lvert \phi_{\{ y_{n} \}}(\{ x_{n} \}) \rvert = \left\lvert  \sum x_{n}y_{n}  \right\rvert\leq \lVert \{ x_{n} \} \rVert_{\infty}    \sum |y_{n} | \leq  \lVert \{ x_{n} \} \rVert_{\infty} \lVert \{ y_{n} \} \rVert_{1}.
> > $$
> > Therefore, $\lVert \phi_{\{ y_{ n} \}} \rVert \leq \lVert \{ y_{n} \} \rVert_{1}$.
> > 
> > Let $\tilde{y}^{(k)}=\{ \tilde{y}^{(k)}_{n} \} \in  C_{0}$ given by
> > $$
> > \left( \frac{\lvert y_{1} \rvert }{ y_{1}  }, \frac{{\lvert y_{2} \rvert }}{y_{2}} , \underset{\substack{\uparrow\\\text{set } i \text{-th entry to }0 \text{ if }y_{i}=0}}{\cdots} , \frac{{\lvert y_{k} \rvert }}{y_{k}} , 0, 0, \cdots \right).
> > $$
> > $\lVert \tilde{y}^{(k)}  \rVert_{\infty}\leq 1$ and $\phi_{\{ y_{n} \}}(\tilde{y}^{(k)})=\sum_{i=1}^{k}\lvert y_{k} \rvert \to \lVert \{ y_{n} \} \rVert_{1}$. Thus, $\lVert \phi_{\{ y_{n} \}} \rVert=\lVert \{ y_{n} \} \rVert_{1}$, and $\phi$ is an isometry. 
> > 
> > ---
> > 
> > Conversely, suppose $\alpha \in (C_{0})^{*}$, and define $\alpha_{i}= \alpha(e_{i})$. 
> > 
> > Define $\tilde{\alpha}^{(k)}=\{ \tilde{\alpha}^{(k)}_{n} \} \in C_{0}$ by
> > $$
> > \left( \frac{\lvert \alpha _{1} \rvert }{ \alpha _{1}  }, \frac{{\lvert \alpha _{2} \rvert }}{\alpha_{2}} , \underset{\substack{\uparrow\\\text{set } i \text{-th entry to }0 \text{ if }\alpha _{i}=0}}{\cdots} , \frac{{\lvert \alpha _{k} \rvert }}{\alpha_{k}} , 0, 0, \cdots \right).
> > $$
> > $\lVert \tilde{\alpha}^{(k)} \rVert_{\infty}\leqslant 1$. So, $|\alpha(\tilde{\alpha}^{(k)})|\leqslant \lVert \alpha \rVert$ for all $k$. Since $\alpha(\tilde{\alpha}^{(k)})=\sum_{i=1}^{k}|\alpha_{i}|$, we have $\sum_{i=1}^{\infty}|\alpha_{i}|< \infty$, and $\{ \alpha_{n} \}\in \ell^{1}$. 
> > 
> > Note that we haven't yet used the fact that we're working with the subspace $C_{0}\subseteq \ell^{\infty}$ and not $\ell^{\infty}$ itself. We do now. 
> > 
> > Let $\{ x_{n} \}\in C_{0}$ and let $\tilde{x}^{(k)} \in C_{0}$ be given by
> > $$
> > \left( x_{1}, x_{2}, \cdots ,x_{k}, 0, 0, \cdots \right).
> > $$
> > Notice that $d_{\ell_{\infty }}(\{ x_{n} \} ,  \tilde{x}^{(k)} ) = \sup_{j> k}\lvert x_{j} \rvert\to 0$, so $\tilde{x}^{(k)}\to \{ x_{n} \}$ in $\ell^{\infty}$. 
> > 
> > We have
> > $$
> > \alpha(\{ x_{n} \})= \lim_{ k \to \infty }\alpha( \tilde{x}_{n}^{(k)} )= \lim_{ k \to \infty }\sum_{i=1}^{k}x_{i}\alpha(e_{i})= \sum x_{i}\alpha_{i}.
> > $$
> > Therefore, $\phi(\{ \alpha_{n} \})=\alpha$, and $\phi$ is an isomorphism of Banach spaces. 
> 

> [!Exercise]
> Show that $\ell^{p*}=\ell^{q}$ for $1< p< \infty$ and $\frac{1}{p}+\frac{1}{q}=1$.

---
# Radon-Nikodym Theorem

> [!Definition]
> Let $\mu$, $\nu$ be two $\sigma$-finite measures on $(X, \mathcal{F})$. We say that **$\nu$ is absolutely continuous wrt $\mu$** (and write $\nu\ll \mu$) if for all $E\in \mathcal{F}$, $\mu(E)=0\implies \nu(E)=0$.  

> [!Proposition]
> Let $\mu$ be a $\sigma$-finite measure on $(X, \mathcal{F})$. Let $f$ be a positive measurable function taking finite values a.e.. Then $\nu(E):=\int_{E}fd\mu$ is a $\sigma$-finite measure and $\nu\ll \mu$. 
> 
> > [!Proof]-
> > 
> > That $\nu$ is a measure follows from the monotone convergence theorem (see [[LEC GANA1 7#^1b4222]]). It is also clear that $\nu\ll \mu$. 
> > 
> > Since $\mu$ is $\sigma$-finite, there exist $X_{i} \uparrow X$  such that $\mu(X_{i})< \infty$. Let
> > $$
> > Y_{n,m}:= \{ x \in X_{n}: \lvert f(x) \rvert\leq m \}.
> > $$
> > Then set of points where $f$ takes finite values is $\bigcup Y_{n, m}$. Since $f$ takes finite values a.e., $\mu\left( X\setminus \bigcup Y_{n, m} \right)=0$. By the definition of $\nu$, $\nu\left( X\setminus \bigcup Y_{n, m} \right)=0$. 
> > 
> > Moreover, 
> > $$
> > \nu(Y_{n,m})= \int_{Y_{n,m}}f(x)d\mu\leq m \mu(X_{n})< \infty.
> > $$
> > It follows that $\nu$ is $\sigma$-finite:
> > $$
> > X = \left( \bigcup Y_{n,m} \right) \cup \left( X \setminus \bigcup Y_{n,m} \right).
> > $$
> > 
> 

> [!Theorem] Radon–Nikodym theorem
> 
> Let $\mu, \nu$ be $\sigma$-finite measures on $(X, \mathcal{F})$ such that $\nu\ll \mu$. 
> 
> Then, there exists measurable $h:X\to [0, \infty]$, uniquely determined $\mu$-almost everywhere, such that
> $$
> \begin{align}
> \nu(E) = \int_{E}h \,d\mu  &  &  \forall E \in \mathcal{F}.
> \end{align}
> $$
> Moreover,
> $$
> \int_{X}g \,d \nu = \int_{X} hg \,d \mu 
> $$
> for every nonnegative measurable $g$. 
> 
> > [!Proof]-
> > 
> > **Assume $\mu, \nu$ are finite measures.**
> > 
> > Let $\rho= \mu + \nu$. Note that $\rho$ and $\mu$ are mutually absolutely continuous, i.e., $\mu\ll \rho$ and $\rho\ll \mu$. 
> > 
> > Consider the linear map $\phi:L^{2}(X, \mathcal{F}, \rho;\mathbb{R})\to \mathbb{R}$ defined by 
> > $$
> > \phi(f):= \int_{X}f d \nu.
> > $$
> > The integral on the RHS is well defined because $\nu$ is a finite measure.
> > 
> > Using [[LEC GANA1 16#^cd6771|Hölder's inequality]],
> > $$
> > \begin{align}
> > \lvert \phi(f) \rvert  \leq  \int_{X}\lvert f \rvert d \nu = \int_{X} \lvert f \rvert  1_{X} d \nu    & \overset{\text{Hölder}}{\displaystyle \leq } \lVert f \rVert _{L^{2}(\nu)}  \lVert 1_{X} \rVert _{L^{2}(\nu )} \\
> >  & \,\,\,\,\,\,= \lVert f \rVert _{L^{2}(\nu)}  \sqrt{\nu(X)}\leq \lVert f \rVert _{L^{2}(\rho)}  \sqrt{\nu(X)}.
> > \end{align}
> > $$
> > Hence, $\phi$ is a bounded operator.
> > 
> > By [[LEC GANA1 14#^f0b16e|Riesz's lemma]], there exists $p \in L^{2}(\rho)$ such that 
> > $$
> > \boxed{\int_{X}f \,d \nu= \int_{X}fp\,d \rho \quad \forall f \in L^{2}(\rho).}
> > $$
> > We will show that $p \in [0, 1)$ $\rho$-almost everywhere. For all $E\in \mathcal{F}$, $\int_{E}p\,d\rho=\nu(E)\geqslant 0$, so $p\geqslant 0$ $\rho$-a.e. by [[LEC GANA1 6#^5b9fe5]].3. 
> > 
> > Also, 
> > $$
> > \begin{align}
> >  & \int_{E}p \,d \rho = \nu(E) = \rho(E) - \mu(E)  \\
> > \implies &  \boxed{\mu(E) = \int_{E}(1-p)\,d \rho.}
> > \end{align}
> > $$
> > Since $\mu(E)\geqslant 0$ for every $E\in \mathcal{F}$, $1-p\geqslant 0$ $\rho$-a.e. by [[LEC GANA1 6#^5b9fe5]].3. If $1-p=0$ on a set $E$ with $\rho(E)> 0$, then $\mu(E)=0$, contradicting $\mu\gg \rho$. Thus, $1-p> 0$ $\rho$-a.e..
> > 
> > ---
> > 
> > Observe that for every nonnegative measurable function $g$, 
> > $$
> > \boxed{\int_{X}g\,d\mu=\int_{X}g(1-p)\,d\rho.}
> > $$
> > Indeed, this holds for indicator functions by the identity $\mu(E)=\int_{E}(1-p)\,d\rho$, hence for nonnegative simple functions by linearity. For arbitrary nonnegative $g$, there exists a sequence of simple functions $\{ s_{n} \}$ such that $0\leqslant s_{n}\uparrow g$. Since $1-p\geqslant 0$ $\rho$-a.e., we have
> > $$
> > \begin{align}
> > s_{n}\cdot(1-p)\uparrow g\cdot(1-p) &  & \rho\text{-a.e.}
> > \end{align}
> > $$
> > Applying the [[LEC GANA1 6#^de9d0c|monotone convergence theorem]] twice gives
> > $$
> > \begin{align}
> > \int_{X}g\,d\mu & =\sup _{n}\int_{X}s_{n}\,d\mu \\
> >  & =\sup _{n}\int_{X}s_{n}(1-p)\,d\rho \\
> >  &  =\int_{X}g(1-p)\,d\rho.
> > \end{align}
> > $$
> > 
> > ---
> > 
> > Define
> > $$
> > h := \frac{p}{1-p}.
> > $$
> > $h$ is well defined, [[LEC GANA1 5#^b33d70|measurable]], and non-negative $\rho$-almost everywhere. 
> > 
> > For $E\in \mathcal{F}$ and nonnegative measurable $g$,
> > $$
> > \int_{X}g\,d\nu=\int_{X}gp\,d\rho=\int_{X}gh(1-p)\,d\rho=\int_{X}gh\,d\mu.
> > $$
> > On plugging $g=1_{E}$, 
> > 
> > $$
> > \begin{align}
> > \nu(E)=\int_{X}1_{E}\,d\nu =\int_{X}1_{E}h\,d\mu=\int_{E}h\,d\mu.
> > \end{align}
> > $$
> > 
> > ---
> > 
> > **Now suppose $\mu, \nu$ are $\sigma$-finite.** 
> > 
> > Let $X = \coprod A_{n} = \coprod B_{n}$, $\mu(A_{n}), \nu(B_{n})< \infty$.
> > 
> > Let $X_{n}$ be an enumeration of $A_{i} \cap B_{j}$. For each $X_{n}$ we get corresponding $h_{n}:X_{n}\to[0, \infty]$ by the previous steps. Let $h = \sum 1_{X_{n}}h_{n}$. By the [[LEC GANA1 6#^de9d0c|monotone convergence theorem]], for nonnegative measurable $g$, 
> > $$
> > \begin{align}
> > \int_{X}g\,d\nu & =\sup _{n}\int_{X}1_{X_{n}}g\,d\nu \\
> >  & =\sup _{n}\int_{X}1_{X_{n}}h_{n}g\,d\mu \\
> >  & =\int_{X}hg\,d\mu.
> > \end{align}
> > $$
> > 
> > Suppose $h$ and $h'$ both satisfy $\nu(E)= \int_{E}h d \mu = \int_{E} h' d \mu$ for all $E \in \mathcal{F}$. Then $\int_{E}(h-h')d \mu = 0$ for all $E\in \mathcal{F}$, so $h$ is $\mu$-a.e. unique by [[LEC GANA1 6#^5b9fe5]].4.
> 

^0a786f


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
> Let $\mu:\mathcal{F}\to \mathbb{R}$ be a signed real measure, then for disjoint collection $\{ E_{n} \}\subseteq \mathcal{F}$, $\sum {\lvert  \mu(E_{n}) \rvert}< \infty$.
> > [!Proof]-
> > $$
> > \sum \lvert \mu(E_{n}) \rvert = \sum_{\mu(E_{n})>  0} \lvert \mu(E_{n}) \rvert + \sum_{\mu(E_{n})< 0}\lvert \mu(E_{n}) \rvert = \mu\left(\bigsqcup_{\mu(E_{n})> 0} E_{n}\right) - \mu\left(\bigsqcup_{\mu(E_{n})< 0}E_{n}\right) \in \mathbb{R}.
> > $$

^1b03da

> [!Corollary] 
> Let $\mu:\mathcal{F}\to \mathbb{C}$ be a complex measure, then for disjoint collection $\{ E_{n} \}\subseteq \mathcal{F}$, $\sum {\lvert  \mu(E_{n}) \rvert}< \infty$.
> > [!Proof]-
> > $$
> > \sum \lvert \mu(E_{n}) \rvert \leq \sum \lvert Re(\mu (E_{n})) \rvert  + \sum \lvert Im(\mu(E_{n})) \rvert 
> > $$
> > Now since $Re(\mu)$ and $Im(\mu)$ are signed real measures, both the terms on the RHS are finite.

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