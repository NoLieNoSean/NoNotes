---
id: "620"
date: 2026-11-12
time: 15:34
tags:
  - Lecture
  - GANA1
---



> [!Remark]
> $\ell^{p}$ is separable for $1\leqslant p< \infty$ - the $\mathbb{Q}+i\mathbb{Q}$ span of $\{ e_{n}:n\in \mathbb{N} \}$ is a countable dense subset, [[LEC ANA2 5#^74c8ab|as we've seen before]]. 
> 
> $L^{p}([0, 1])$ is separable for $1\leqslant p< \infty$. One way to see this is to observe that $C[0, 1]$ is [[LEC ANA2 5#^af6583|separable]] and that $C[0, 1]\subseteq L^{p}[0, 1]$ is [[LEC GANA1 17#^deb4a4|dense]]. Alternatively, observe that the countable set 
> $$
> \text{span}_{\mathbb{Q}+i\mathbb{Q}}\{ 1_{(s, t)}:s< t,~ s,t\in \mathbb{Q}\cap[0, 1] \}
> $$
> is dense in the set of all simple functions on $[0, 1]$, which in turn is [[LEC GANA1 17#^74bbd8|dense]] in $L^{p}[0, 1]$. 
> 
> $\ell^{\infty}$ is [[LEC ANA2 5#^592e25|not separable]]. $L^{\infty}[0, 1]$ is not separable either: $\{ 1_{(0, t)}:t\in[0, 1] \}$ is an uncountable collection of elements, any two of which are at distance $1$ apart. 
> 
> $L^{p}(\mathbb{R})$ is also separable, as $C_{c}(\mathbb{R})\subseteq L^{p}$ is dense, where $C_{c}(\mathbb{R})$ denotes the set of continuous functions on $\mathbb{R}$ with compact support. $C_{c}(\mathbb{R})$ itself is separable, since it can be expressed as the union $C_{c}(\mathbb{R})=\bigcup_{n\in \mathbb{N}}C[-n, n]$. 

---

# Dual relations and reflexive spaces


> [!Proposition]
> Consider $C_{0}=\{ \{ x_{n} \}_{n=1}^{\infty}:x_{n}\in \mathbb{C}, x_{n}\to 0 \}\subseteq \ell^{\infty}$.
> 1. For any $\{ y_{n} \}\in \ell^{1}$, define $\phi_{\{ y_{n} \}}(\{ x_{n} \})=\sum_{n=1}^{\infty}x_{n}y_{n}$. Then, $\phi_{\{ y_{n} \}}\in C_{0}^{*}$, and $\lVert \phi_{\{ y_{n} \}} \rVert=\lVert \{ y_{n} \} \rVert_{\ell^{1}}$. 
> 2. Given any $\phi\in C_{0}^{*}$, there exists $\{ y_{n} \}\in \ell^{1}$ such that $\phi=\phi_{\{ y_{n} \}}$. 
> 
> In other words, $(C_{0})^{*} \cong \ell^{1}$.
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
> > Therefore, $\phi_{\{ \alpha_{n} \}}=\alpha$, and $\phi$ is an isomorphism of Banach spaces. 
> 

^19e604

> [!Proposition]
> 1. For any $\{ y_{n} \}\in \ell^{\infty}$, define $\phi_{\{ y_{n} \}}(\{ x_{n} \})=\sum_{n=1}^{\infty}x_{n}y_{n}$. Then, $\phi_{\{ y_{n} \}}\in (\ell^{1})^{*}$, and $\lVert \phi_{\{ y_{n} \}} \rVert=\lVert \{ y_{n} \} \rVert_{\infty}$. 
> 2. Given any $\phi\in(\ell^{1})^{*}$, there exists $\{ y_{n} \}\in \ell^{\infty}$ such that $\phi=\phi_{\{ y_{n} \}}$. 
> 
> In other words, $(\ell^{1})^{*}\cong \ell^{\infty}$. 
> 
> > [!Proof]-
> > 
> > (1) For $\{ x_{n} \}\in \ell^{1}$, 
> > $$
> > |\phi_{\{ y_{n} \}}(\{ x_{n} \})|=\left| \sum_{n=1}^{\infty} x_{n}y_{n} \right| \leqslant \lVert \{ y_{n} \} \rVert _{\infty}\lVert \{ x_{n} \} \rVert _{\infty}< \infty,
> > $$
> > so $\phi_{\{ y_{n} \}}$ is a bounded operator with $\lVert \phi_{\{ y_{n} \}} \rVert\leqslant \lVert \{ y_{n} \} \rVert_{\infty}$. Since $\sup_{n}|\phi_{\{ y_{n} \}}(e_{i})|=\lVert \{ y_{n} \} \rVert_{\infty}$, we have $\lVert \phi_{\{ y_{n} \}} \rVert=\lVert \{ y_{n} \} \rVert_{\infty}$. 
> > 
> > ---
> > 
> > (2) Let $\alpha\in(\ell^{1})^{*}$. Define $y_{n}=\alpha(e_{n})$. Because $|y_{n}|=|\alpha(e_{n})|\leqslant \lVert \alpha \rVert$, we have $\{ y_{n} \}\in \ell^{\infty}$. 
> > 
> > We now proceed as we did in the proof of [[#^19e604]].2: fix $\{ x_{n} \}\in \ell^{1}$, define the truncated sequences $\tilde{x}^{(k)}$, note that $\tilde{x}^{(k)}\to \{ x_{n} \}$ in $\ell^{1}$, and repeat verbatim the computation to show $\alpha(\{ x_{n} \})=\phi_{\{ \alpha_{n} \}}(\{ x_{n} \})$, establishing $\alpha=\phi_{\{ \alpha_{n} \}}$. 
> 

^13a3da

> [!Lemma]
> Let $X$ be a NLS. If $X^{*}$ is separable, then $X$ is separable. 
> 
> > [!Proof]-
> > 
> > Let $\{ \varphi_{n}\}\subseteq X^{*}$ be dense. Choose $x_{n}\in X$ with $\lVert x_{n} \rVert=1$ such that $|\varphi_{n}(x_{n})|\geqslant \lVert \varphi_{n} \rVert/2$. We claim that $\text{span}_{\mathbb{Q}+i\mathbb{Q}}\{ x_{n}\}$ is dense in $X$. 
> > 
> > It suffices to show $X_{0}:=\overline{\text{span}_{\mathbb{C}}\{ x_{n} \}}=X$. By [[LEC GANA1 12#^20a08c]], it suffices to prove that if $\varphi\in X^{*}$ is such that $\varphi|_{X_{0}}\equiv 0$, then $\varphi\equiv 0$. Because $\{ \varphi_{n} \}$ is dense in $X^{*}$, we can extract a subsequence $\{ \varphi_{n_{k}} \}$ converging to $\varphi$ in $X^{*}$. We have
> > $$
> > \begin{align}
> > \lVert \varphi-\varphi_{n_{k}} \rVert \geqslant |\varphi(x_{n_{k}})-\varphi_{n_{k}}(x_{n_{k}})|=|\varphi_{n_{k}}(x_{n_{k}})|\geqslant  \lVert \varphi_{n_{k}} \rVert /2.
> > \end{align}
> > $$
> > It follows that $\lVert \varphi_{n_{k}} \rVert\to 0$, whence $\lVert \varphi \rVert=0$ and $\varphi\equiv 0$. 
> 

^741bc9

> [!Remark]
> It is easy to see that $\ell^{1}$ embeds into $(\ell^{\infty})^{*}$ via the pairing $\{ y_{n} \}\mapsto \phi_{\{ y_{n} \}}$, so $(\ell^{\infty})^{*}\supseteq \ell^{1}$. However, this containment is strict by [[LEC GANA1 19#^741bc9]]. Therefore, we have
> $$
> (C_{0})^{*}\cong \ell^{1}, \quad (\ell^{1})^{*}\cong \ell^{\infty}, \quad (\ell^{\infty})^{*}\supsetneq \ell^{1}.
> $$
> 

> [!Exercise]
> Show that $\ell^{p*}=\ell^{q}$ for $1< p< \infty$ and $\frac{1}{p}+\frac{1}{q}=1$.

^6104a0

> [!Definition] Reflexive Banach space
> Let $X$ be a normed space, with dual space $X^{*}$. Recall ([[LEC GANA1 12#^c83482]].3) that the map $\Lambda :X\to X^{**}$, defined by $x \mapsto \hat{x}$, is an isometric embedding. If $\Lambda$ is surjective (i.e. $X\cong X^{**}$), we called $X$ **reflexive**. Note that a reflexive space must be Banach, since $X^{*}$ is always Banach. 


> [!Remark]
> 1. $\ell^{p}$ is reflexive for $1< p< \infty$ ([[#^6104a0]]).
>    $(\ell^{1})^{*}\cong \ell^{\infty}$, $(\ell^{\infty})^{*}\supsetneq \ell^{1}$. 
> 2. $L^{p}$ is reflexive for $1< p< \infty$ ([[LEC GANA1 18]])
>    $(L^{1})^{*}\cong L^{\infty}$, $(L^{\infty})^{*}\supsetneq L^{1}$. 


---

%% start of fourier analysis %%

[!Definition] Convolution

[!Proposition] Minkowski for integrals

[!Proposition]
Let $f\in L^{1}$, $g\in L^{p}$. Then $f\star g\in L^{p}$. 


[!Remark]
If $f, g\in L^{\infty}$, then $fg\in L^{\infty}$. 
If $f, g\in L^{1}$, then $f\star g\in L^{1}$. 

[!Proposition]
1. $f\star g=g\star f$. 
2. $(f\star g)\star h=f\star(g\star h)$. 

[!Proposition]
1. If $f\in L^{p}$, $g\in L^{q}$, then $f\star g\in L^{\infty}$, $\lVert f\star g \rVert_{\infty}\leqslant \lVert f \rVert_{p}, \lVert f \rVert_{q}$. 
2. For $1< p< \infty$, $f\star g$ is uniformly continuous. 