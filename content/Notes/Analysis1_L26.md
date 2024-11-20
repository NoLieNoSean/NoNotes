---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-23
time: 15:30
---
![[1729684704658.jpg]]

leftovers:
- [ ] Chain rule
- [ ] Corollary, $\epsilon-\delta$ chase
- [ ] Multivariable version of mean value theorem for vector valued versions

---

## Definition of the integral

### Partitions

> [!Definition]
> A *partition* $P$ of $[a, b]$ is a finite (multi)set of points $x_{0}, x_{1}, \dots, x_{n}$ where
> $$
> a=x_{0}\leq x_{1}\leq \dots\leq x_{n}\leq b.
> $$
> We write $\Delta x_{i}\equiv x_{i}-x_{i-1}$. 

Note that a partition has finitely many points.
### Riemann integrals

> [!Definition] Rudin, 6.1
> Suppose $f:[a, b]\to \mathbb{R}$ is bounded. Corresponding to each partition $P$ of $[a, b]$, define
> $$
> \begin{array}{cc}
> M_{i}\equiv\sup f(x)  & x\in[x_{i-1}, x_{i}], \\
> m_{i}\equiv\inf f(x) & x\in[x_{i-1}, x_{i}],  \\
> 
> 
> \end{array}
> 
> $$
> $$
> U(P, f)\equiv \sum_{i=1}^{n} M_{i}\Delta x_{i},
> $$
> $$
> L(P, f)\equiv \sum_{i=1}^{n} m_{i}\Delta x_{i}.
> $$
> $U(P, f)$ is called the upper Riemann sum, and $L(P, f)$ is called the lower Riemann sum. Finally, define
> $$
> \text{the upper Riemann integral, }\overline{\int_{a}^{b}} f \, dx \equiv\inf U(P, f),\text{ and }
> $$
> $$
> \text{the lower Riemann integral, }\underline{\int_{a}^{b}} f \, dx \equiv\sup  L(P, f),
> $$
> where the $\inf$ and $\sup$ are taken over all partitions $P$ of $[a, b]$. 

Observe that $L(P, f)\leq U(P, f)$ for a given partition $P$, since $m_{i}\leq M_{i}$. Further, if $M=\sup f(x)$ and $m=\inf f(x)$, $x\in[a, b]$, then
$$
m(b-a)\leq L(P, f)\leq U(P, f)\leq M(b-a).
$$
Since $L(P, f)$ is bounded above and $U(P, f)$ is bounded below, we can be sure that their supremum and infimum exists respectively, i.e, the upper and lower integrals are defined for *every* bounded function $f$. Note the use of the [[LUB property]] of $\mathbb{R}$. 

> [!Definition]
> $f$ is *Riemann integrable* if the upper and lower integrals coincide. We denote this by $f\in\mathscr R$. If $f$ is Riemann integrable, we define
> $$
> \int_{a}^{b} f \, dx \equiv \overline{\int_{a}^{b}} f \, dx =\underline{\int_{a}^{b}} f \, dx .
> $$

> [!Important]
> Since the definition of the Riemann integral requires $f$ to be bounded, the statement $f\in\mathscr R$ comes loaded with the presumption that $f$ is bounded. Ditto for the R-S integral.

### Riemann-Stieltjes integrals

Rudin, 6.2

Suppose $f:[a, b]\to \mathbb{R}$ is bounded. Let $\alpha$ be a monotone increasing function on $[a, b]$. For a partition $P$ of $[a, b]$, define $\Delta\alpha_{i}\equiv\alpha(x_{i})-\alpha(x_{i-1})$. Define

$$
 U(P, f, \alpha)\equiv \sum_{i=1}^{n} M_{i}\Delta \alpha_{i},
$$
$$
 L(P, f, \alpha)\equiv \sum_{i=1}^{n} m_{i}\Delta \alpha_{i}.
$$
The definitions of $M_{i}$ and $m_{i}$ are unchanged, and thus are not impacted by $\alpha$. Observe that
$$
m(\alpha(b)-\alpha(a))\leq L(P, f, \alpha)\leq U(P, f, \alpha)\leq M(\alpha(b)-\alpha(a)).
$$
Now define
$$
\overline{\int_{a}^{b}} f \, d\alpha \equiv\inf U(P, f, \alpha),
$$
$$
\underline{\int_{a}^{b}} f \, d\alpha \equiv\sup  L(P, f, \alpha).
$$
The $\inf$ and $\sup$ are taken over all partitions, with $\alpha$ being fixed. If the lower and upper Stieltjes integrals are equal, their common value is denoted by
$$
\int_{a}^{b} f \, d\alpha,
$$
called the Stieltjes integral of $f$ with respect to $\alpha$, and we say $f$ is R-S or S integrable with respect to $\alpha$, denoted as $f\in\mathscr{R}(\alpha)$. Remember that $d\alpha$ here is just notation.

Observe that 
- taking $\alpha(x)=x$ gives us the vanilla Riemann integral.
- $f$ begin Riemann-Stieltjes integrable for some $\alpha$ does not mean $f$ is Riemann-Stieltjes integrable for all $\alpha$. 

---
## Lower integrals, upper integrals and integrability

> [!Definition] Definition Rudin, 6.3
> A partition $P^{*}$ is called a *refinement* of $P$ if $P^{*}\supset P$. Given two partitions $P_{1}$ and $P_{2}$, we say $P^{*}$ is their *common refinement* if $P^{*}=P_{1}\cup P_{2}$.

### Effect of refinement on upper and lower sums

> [!Theorem] Theorem Rudin, 6.4
> $P^{*}$ is a refinement of $P$ $\implies$ $L(P, f, \alpha)\leq L(P^{*}, f, \alpha)$ and $U(P, f, \alpha)\geq U(P^{*}, f, \alpha)$. 

> **Proof**
> It is enough to consider the case where $P^{*}$ contains a single extra point $x^{*}$ with say $x_{i-1}<x^{*}<x_{i}$. Let
> $$
> \begin{array}{cc}
> w_{1}\equiv \inf f(x) & x\in[x_{i-1}, x^{*}], \\
> w_{2}\equiv \inf f(x) & x\in[x^{*}, x_{i}].
> \end{array}
> $$
> Note that $w_{1}, w_{2}\geq m_{i}$. Now, 
> $$
> \begin{align}
> L(P^{*}, f, \alpha)-L(P, f, \alpha)  = & \ w_{1}[\alpha(x^{*})-\alpha(x_{i-1})]+w_{2}[\alpha(x_{i})-\alpha(x^{*})] \\
>   & -m_{i}[\alpha(x_{i})-\alpha(x_{i-1})] \\
> = & \ (w_{1}-m_{i})[-\alpha(x_{i-1})]+(w_{2}-m_{i})[\alpha(x_{i})] \\
>  & -m_{i}x^{*}+m_{i}x^{*} \\
> = & \ (w_{1}-m_{i})[x^{*}-\alpha(x_{i-1})]+(w_{2}-m_{i})[\alpha(x_{i})-x^{*}] \\
> \geq  & \ 0
> \end{align}
> $$
> ❏

### Relation between upper and lower integrals

> [!Theorem] Theorem Rudin, 6.5
> $$
> \underline{\int_{a}^{b}} f \, d\alpha \leq \overline{\int_{a}^{b}} f \, d\alpha .
> $$

> **Proof**
> Consider arbitrary partitions $P_{1}$ and $P_{2}$ of $[a, b]$. We will show that $L(P_{1}, f, \alpha)\leq U(P_{2}, f, \alpha)$. Let $P^{*}$ be the common refinement $P_{1}\cup P_{2}$. Then, from the previous theorem, we have
> $$
> L(P_{1}, f, \alpha)\leq L(P^{*}, f, \alpha)\leq U(P^{*}, f, \alpha)\leq U(P_{2}, f, \alpha).
> $$
> Now, fix $P_{2}$. We get $L(P, f, \alpha)\leq U(P_{2}, f, \alpha)$ for all $P$. Thus, $\sup L(P, f, \alpha)\leq U(P_{2}, f, \alpha)$. However, this is true for all $P_{2}$. Thus, $\sup L(P, f, \alpha)\leq \inf U(P, f, \alpha)$. ❏

### A criterion for integrability

> [!Theorem] Theorem Rudin, 6.6
> $f:[a, b]\to \mathbb{R}\in\mathscr{R}(\alpha)$ $\iff$ $\forall\epsilon>0$ $\exists$ partition $P$ of $[a, b]$ such that $U(P, f, \alpha)-L(P, f, \alpha)<\epsilon$. 

> **Proof of $\Longleftarrow$**
> If $U(P, f, \alpha)-L(P, f, \alpha)<\epsilon$ for some $P$, then $\inf U(P, f, \alpha)-\sup L(P, f, \alpha)<\epsilon$. Combined with 6.5, this gives us
> $$
> 0\leq \overline{\int_{a}^{b}} f \, d\alpha-\underline{\int_{a}^{b}} f \, d\alpha \leq \epsilon
> $$
> for all $\epsilon$. Thus, we must have equality.
> 
> **Proof of $\Longrightarrow$**
> Given $\epsilon$, find $P_{1}$ such that $\int f\,d\alpha-L(P_{1}, f, \alpha)< \frac{\epsilon}{2}$ and $P_{2}$ such that $U(P_{2}, f, \alpha)-\int f\,d\alpha< \frac{\epsilon}{2}$. Now, consider the common refinement $P^{*}$ of $P_{1}$ and $P_{2}$. From 6.4, we get $U(P^{*}, f, \alpha)-L(P^{*}, f, \alpha)< \epsilon$. ❏