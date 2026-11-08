---
id: "584"
date: 2026-10-12
time: 18:31
tags:
  - Lecture
  - GANA1
desc: the Han-Banach Theorem
---
Let $X$ and $Y$ be NLS. We have seen that $B(X, Y)$ is a Banach space if $Y$ is Banach. 

In particular, $X^{\star}=B(X, \mathbb{C})$ is a Banach space, called the dual of $X$. 

> [!Question] Does $X^{\star}$ separate points of $X$?

> [!Example] Bounded functionals
> - In $\mathbb{C}^{n}$, for $\tilde{x}\in \mathbb{C}^{n}$, define $\phi_{\tilde{y}}(\tilde{x}) = \sum x_{i}y_{i}$.
> - For $\ell_{1} = \left\{  \{ x_{n} \} : \sum \lvert x_{n} \rvert < \infty  \right\}$, take a sequence $\{ y_{n} \}\in \ell_{\infty}$. We can define $\phi_{\{ y_{n} \}}: \ell_{1}\to \mathbb{C}$ as $\phi_{\{ y_{n} \}}(\{ x_{n} \}) = \sum_{n=1}^{\infty}x_{n}\overline{y_{n}}$. It satisfies $\|\phi_{\{ y_{n} \}}(\{ x_{n} \})\|= \sum \lvert x_{n}\overline{y_{n}} \rvert\leq \|\{ x_{n} \}\|_{1}\| \{ y_{n} \} \|_{\infty }$.
> 

> [!Example] Unbounded operators
> - $D: C^{1}[0, 1]\to C[0, 1]$, $Df=f'$. Consider the sequence $f_{n}=X^{n}/n$. $f_{n}$ converges uniformly to $0$, But $x^{n-1}$ does not. 
> - Let $\{ y_{n} \}$ be an unbounded sequence. Define $\varphi_{\{ y_{n} \}}(\{ x_{n} \})=\sum x_{n}\overline{y}_{n}$ on the subspace $X_{0}=\left\{  \{ x_{n} \}\in \ell_{1}:\sum |x_{n}\overline{y}_{n}|< \infty  \right\}\subseteq \ell_{1}$, and consider the sequence $e_{n} = (0, \dots, 1, \dots, 0, \dots) \in X_{0}$. $\|e_{n}\| = 1$ is bounded, and $\|\phi_{\{ y_{n} \}}(e_{n})\|=\|y_{n}\|$ is unbounded. 
> - Consider $f_{M}=1_{(0, M)}/M\in L^{1}(\mathbb{R}, \lambda)$. Note that $\lVert f_{M} \rVert_{1}=1$. Define $T(f)(x)=xf(x)$. Then $\|Tf_{M}\|= \int \frac{1}{M}xd \lambda = \frac{M^{2}}{2M}= \frac{M}{2}$. Therefore $\|Tf_{M}\|\to \infty$ as $M\to \infty$ where $\|f_{M}\|=1$.

---

> [!Question]
> Is $X^{\star}\ne \{  0 \}$ when $X\ne \{  0 \}$?

> [!Lemma]
> Let $X$ be a real normed linear space. Let $p:X\to[0, \infty)$ be such that $p(x+y)\leqslant p(x)+p(y)$, and $p(tx)=tp(x)$ for all $t\geqslant 0$. Let $X_{0}\subseteq X$ be a linear subspace, and let $\varphi_{0}:X_{0}\to \mathbb{R}$ be a linear function such that $|\varphi(x)|\leqslant p(x)$ for all $x\in X_{0}$. Then there exists $\varphi:X\to \mathbb{R}$ linear satisfying $|\varphi(x)|\leqslant p(x)$ and $\varphi|_{X_{0}}=\varphi_{0}$. 
> 
> > [!Proof]-
> > Define
> > $$
> > S=\{ (Y, \chi):X_{0}\subseteq Y\subseteq X, \chi:Y\to \mathbb{R} \text{ satisfying ...}\}.
> > $$
> > Endow $S$ with the obvious PO, construct maximal element $(Y, \varphi)$ in the usual way. 
> > 
> > We claim that $Y=X$. 
> > If not, take $x_{0}\in X\setminus Y$, and define $Y'=\{ y+tx_{0}:y\in Y, t\in \mathbb{R} \}$. Need to find $t_{0}\in \mathbb{R}$ such that
> > $$
> > \begin{align}
> > |\varphi'(y+tx_{0})|:=|\varphi(y)+tt_{0}|\leqslant p(y+tx_{0})
> > \end{align}
> > $$
> > for all $t\in \mathbb{R}$. 
> > 
> > Then, $(Y', \varphi')\geqslant (Y, \varphi)$, a contradiction. 
> > 
> > For all $x, y\in Y$, we have
> > $$
> > \varphi(y)-p(y-x_{0})\leqslant  p(x+x_{0})-\varphi(x).
> > $$
> > Take supremum on the left, infimum on the right. Choose $t_{0}$ to be something that lies between the two sides of the inequality. 
> > 
> > Define $\varphi'(x+tx_{0})=\varphi(x)+tt_{0}$. 
> > 
> > For $t> 0$, we have
> > $$
> > \begin{align}
> > \varphi'(x+tx_{0}) & =\varphi(x)+tt_{0} \\
> >  & =t\left( \varphi\left( \frac{x}{t} \right)+t_{0} \right) \\
> >  & \leqslant  t p\left( \frac{x}{t}+x_{0} \right)  \\
> >  & =p(x+tx_{0}).
> > \end{align}
> > $$
> > For $t< 0$, we have
> > $$
> > \begin{align}
> > \varphi'(x+tx_{0}) & =\varphi(x)+(-t)(-t_{0}) \\
> >  & =-t\left( \varphi\left( \frac{x}{-t} \right)-t_{0} \right) \\
> >  & \leqslant -tp\left( \frac{x}{-t}-x_{0} \right) \\
> >  & =p(x+tx_{0}).
> > \end{align}
> > $$

> [!Theorem] Hahn-Banach for real normed linear spaces
> Let $X_{0}\subseteq X$ be a normed linear space over $\mathbb{R}$. If $\phi_{0}:X_{0}\to \mathbb{R}$ is bounded, then there is an extension $\phi:X\to \mathbb{R}$ of $\phi_{0}$ to $X$ such that $\lVert \phi \rVert= \lVert \phi_{0} \rVert$.
> > [!Proof]-
> > Take $p:X\to \mathbb{R}$ as $p(x)= \|\phi_{0}\| \|x\|$ to be the Minkowski function. Apply the previous lemma.
> > Let $\phi$ be the extension. Then $\forall x \in  X$, $\lVert \phi(x) \rVert\leq p(x) = \lVert \phi_{0} \rVert \lVert x \rVert$.
> > Therefore, $\lVert \phi \rVert\leq \lVert \phi_{0} \rVert$ and since $\phi$ extends $\phi_{0}$, $\lVert \phi_{0} \rVert\leq \lVert \phi \rVert$.

Let $Y$ be over $\mathbb{C}$. Let $\varphi:Y\to \mathbb{C}$ be a linear functional. Define $f_{1}(x):=\mathrm{Re}(\varphi(x))$, $f_{2}:=\mathrm{Im}(\varphi(x))$. Then
$$
f_{1}(ix) + i f_{2}(ix) = \phi(ix) = i \phi(x) = if_{1}(x)-f_{2}(x)
$$
Hence $f_{1}(ix)=-f_{2}(x)$. 
Conversely, given $\mathbb{R}$-linear $f_{1}, f_{2}:X\to \mathbb{R}$,(treating $X$ as a $\mathbb{R}$ vector space) $\varphi(x):=f_{1}(x)+if_{2}(x)$ is $\mathbb{C}$-linear if $f_{1}(ix)=-f_{2}(x)$. 

> [!Theorem] Hahn-Banach for complex normed linear spaces
> Let $X_{0}\subseteq X$ be a normed linear space over $\mathbb{C}$. If $\phi_{0} \in X_{0}^{*}$ is bounded, then there is an extension $\phi \in X^{*}$ of $\phi_{0}$ to $X$ such that $\lVert \phi \rVert= \lVert \phi_{0} \rVert$.
> 
> > [!Proof]-
> > Let $f_{1}:X_{0}\to \mathbb{R}$ be defined as $f_{1}(x)=Re(\phi_{0}(x))$. Then treating $X_0$ as $\mathbb{R}$-vector space, $f_1$ is a real linear functional. Also $\lvert f_{1}(x) \rvert \leq \lvert \phi_{0}(x) \rvert \leq \lVert \phi_{0} \rVert \lVert x \rVert \, \forall x \in  X_{0}$, hence $f_1$ is bounded.
> > Now, treating $X$ as $\mathbb{R}$-normed linear space, by previous theorem, $f_{1}$ extends to bounded $\tilde{f_{1}}\in X^{*}$.
> > Let $\phi:X\to \mathbb{C}$ be defined as $\phi(x)= \tilde{f_{1}}(x)- i \tilde{f_{1}}(ix)$.
> > Note that $\phi$ is a $\mathbb{C}$-linear functional extending $\phi_{0}$.
> > Now, $\phi(x)= e^{i \theta}\lvert \phi(x) \rvert$.
> > $$
> > \begin{align*}
> > \implies \lvert \phi(x) \rvert &= e^{-i \theta}\phi(x)\\
> > &= \phi(e^{-i \theta}x)\\
> > &= Re(\phi(e^{-i \theta}x))\\
> > &= \tilde{f_{1}}(e^{-i \theta}x)\\
> > &\leq \lVert \tilde{f_{1}} \rVert \lVert e^{-i \theta}x \rVert \\
> > &\leq \lVert \phi_{0} \rVert \lVert x \rVert 
> > \end{align*}
> > $$

> [!Corollary] 
> Let $X$ be an NLS and let $x \in  X$ be non-zero. Then $\exists \phi  \in X^{*}$ such that $\phi(x) = \lVert x \rVert$ and $\lVert \phi \rVert= 1$.
> > [!Proof]-
> > Let $X_{0}= \mathbb{C}x$ and define $\phi_{0}:X_{0}\to \mathbb{C}$ as $\phi_{0}(\lambda x) = \lambda \lVert x \rVert$. Extend $\phi_{0}$ using Hanh-Banach.

> [!Corollary]
> If $x,y \in X, x \ne y$ then $\exists \phi \in X^{*}$ such that $\phi(x) \ne \phi(y)$.

> [!Corollary]
> Let $X$ be an NLS and let $X_{0} \subsetneq X$ be a closed subspace. Then $\exists \phi \in X^{*}$ such that $\phi \not\equiv 0$ and $\phi\lvert_{X_{0}}= 0$.
> In particular, for $x_{0}\in X  \setminus X_{0}, \exists \phi$ such that $\phi(x_{0})\ne{0}$ and $\phi \lvert_{X_{0}}=0$.
> > [!Proof]-
> > $x_{0} \not\in  X_{0} \implies (x+X_{0}) \ne 0$ in the space $X/X_{0}$. Apply the first corollary and obtain $\psi:(X/X_{0})\to \mathbb{C}$ such that $\lVert \psi(x_{0} + X_{0}) \rVert \ne 0$. Now compose it with the quotient map from $X$ to $X/X_{0}$.
