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

---

[!Exercise]
Show that $\ell^{p\star}=\ell^{q}$

---

[!Definition]
Let $\mu$, $\nu$ be two $\sigma$-finite measures. We say $\nu \preccurlyeq \mu$ if $\nu$ is absolutely continuous wrt $\mu$. 

[!Proposition]
Let $\mu$ be a $\sigma$-finite measure. Let $f$ be a positive measurable function taking finite values a.e.. Then $\nu(E):=\int_{E}fd\mu$ is a $\sigma$-finite measure and $\nu\preccurlyeq\mu$. 

MCT!

---

[!Proposition]
Let $\mu, \nu$ be $\sigma$-finite measures on $X$. Let $\nu\preccurlyeq\mu$. Then there exists non-negative measurable function $f$ (unique up to a measure zero set) with finite values a.e. such that $\nu(E)=\int_{E}fd\mu$. Also, $\int_{X}gd\mu=\int_{X}gfd\mu$ for all positive measurable functions $g$. 

---

[!Definition]
RN-derivative

---

[!Definition] Complex measures

