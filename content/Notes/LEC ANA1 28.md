---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-25
time: 14:00
id: "150"
---

![[7.jpeg]] 

We can sample the value of the function in an interval instead of using the supremum/infimum:

> [!Theorem] Rudin 6.7
> Let $f:[a, b]\to \mathbb{R}$. If $U(P, f, \alpha)-L(P, f, \alpha)<\epsilon$ holds for some $P$, and if $s_{i}$ and $t_{i}$ are arbitrary points in $[x_{i-1}, x_{i}]$, then
> $$
> \sum_{i=1}^{n} |f(s_{i})-f(t_{i})|\Delta\alpha_{i}<\epsilon.
> $$
> If $f\in\mathscr R(\alpha)$, then
> $$
> \left|\sum_{i=1}^{n} f(t_{i})\,\Delta\alpha_{i}-\int_{a}^{b} f\,d\alpha  \right|<\epsilon.
> $$
> 
> > [!Proof]-
> > The first part's trivial. The inequalities
> > $$
> > L(P, f, \alpha)\leq \sum f(t_{i})\,\Delta \alpha_{i}\leq U(P, f, \alpha)
> > $$
> > and
> > $$
> > L(P, f, \alpha)\leq \int_{a}^{b} f \, d\alpha \leq U(P, f, \alpha)
> > $$
> > prove the second part.
> 

---

> [!Recall]
> [[LEC ANA1 27#Which functions are integrable?|Integrability]] of bounded $f$ on $[a, b]$:
> 
> $f$ continuous $\implies$ $f\in\mathscr R(\alpha)$.
> $f$ monotonic and $\alpha$ continuous $\implies$ $f\in\mathscr R(\alpha)$.
> $f$ has finitely many discontinuities at which $\alpha$ is continuous $\implies$ $f\in\mathscr R(\alpha)$.
> Compositions of integrable functions with continuous functions are continuous.

---
# Integration and differentiation

> [!Theorem] Rudin 6.20
> Let $f\in\mathscr R$ on $[a, b]$. For $a\leq x \leq b$, define
> $$
> F(x)\equiv\int_{a}^{x} f(t) \, dt .
> $$
> Then $F$ is continuous on $[a, b]$. Furthermore, if $f$ is continuous at a point $x_{0}$ of $[a, b]$, then $F$ is differentiable at $x_{0}$, and
> $$
> F'(x_{0})=f(x_{0}).
> $$
> 
> > [!Proof]-
> > For $f\in\mathscr R$ to be true, $f$ must be bounded. Suppose $|f(t)|\leq M$ in $[a, b]$. We will prove that $F$ is [[LEC ANA1 20#Uniform continuity|uniformly continuous]] (uniform continuity implies continuity). Let $a\leq x<y\leq b$. Let $\epsilon>0$. Then, if $y-x < \frac{\epsilon}{M}$, we have
> > $$
> > |F(y)-F(x)|=\left|\int_{x}^{y} f(t) \, dt \right|<M(y-x)=\epsilon.
> > $$
> > Now, suppose $f$ is continuous as $x_{0}$. Let $\epsilon>0$. Choose $\delta>0$ such that $|t-x_{0}|<\delta$ $\implies$ $|f(t)-f(x_{0})|<\epsilon$. Let $|t-x_{0}|<\delta$.
> > $$
> > \begin{align}
> > \left| \frac{1}{t-x_{0}}{\int_{x_{0}}^{t} f(u) \, du} -f(x_{0})\right| &\ =\left| \frac{1}{t-x_{0}}\right|\left|\int_{x_{0}}^{t} [f(u)  -f(x_{0})]\, du\right| \\
> >  & \ \leq \epsilon.
> > \end{align}
> > $$
> > Thus, $F'(x_{0})=f(x_{0})$.
> 

Rudin drags his feet in the last part of the proof, since he wants to avoid integrals where the limits of integration are not in the right order, since technically those aren't defined. 
## The fun theorem

> [!Theorem] Rudin 6.21, Fundamental theorem of calculus
> If $f\in\mathscr R$ on $[a, b]$ and if there is a differentiable function $F$ on $[a, b]$ such that $F'=f$, then
> $$
> \int_{a}^{b} f(x) \, dx =F(b)-F(a).
> $$
> 
> > [!Proof]-
> > Let $\epsilon>0$. Since $f\in\mathscr{R}$ on $[a, b]$, we can choose a partition $P$ of $[a, b]$ such that $U(P, f)-L(P, f)<\epsilon$. Because of the [[LEC ANA1 24#Mean value theorem|mean value theorem]], we can choose $t_{i}\in[x_{i-1}, x_{i}]$ such that
> > $$
> > \frac{{F(x_{i})-F(x_{i-1})}}{\Delta x_{i}}=F'(t_{i})=f(t_{i})
> > $$
> > $$
> > \implies F(b)-F(a)=\sum_{i=1}^{n} f(t_{i})\,\Delta x_{i}
> > $$
> > We know from [[#Using Sample points instead of M and m|Rudin, 6.7]] that
> > $$
> > \left|\sum_{i=1}^{n} f(t_{i})\, \Delta x_{i}-\int_{a}^{b} f\, dx \right|<\epsilon
> > $$
> > Thus, 
> > $$
> > \left|F(b)-F(a)-\int_{a}^{b} f \, dx \right|<\epsilon.
> > $$
> 

^88e00c


---
# Integration by parts

> [!Theorem] Rudin 6.22
> Suppose $F$ and $G$ are differentiable functions on $[a, b]$, $F'=f\in\mathscr R$ and $G'=g\in\mathscr R$. Then, 
> $$
> \int_{a}^{b} F(x)g(x) \, dx=F(b)G(b)-F(a)G(a)-\int_{a}^{b} f(x)G(x) \, dx.  
> $$
> 
> > [!Proof]-
> > Let $H(x)=F(x)G(x)$. Then, $h\equiv H'=fG+Fg$. Note that [[LEC ANA1 27#^d99859|since]] $f, g\in\mathscr{R}$ and $F, G\in\mathscr{R}$(since [[LEC ANA1 23#Differentiability implies continuity|differentiability implies continuity]] and [[LEC ANA1 27#Continuous functions|continuous functions are integrable]]), $h\in\mathscr{R}$. From the fundamental theorem, we have
> > $$
> > \int_{a}^{b} f(x)G(x) \, dx+\int_{a}^{b} F(x)g(x) \, dx =F(b)G(b)-F(a)G(a). 
> > $$
> > 
> 

---
# Misc

> [!Theorem] Rudin 6.13b
> If $f\in\mathscr{R}(\alpha)$, then
> $$
> |f|\in\mathscr{R}(\alpha)\text{ and } \left|\int_{a}^{b} f \, d\alpha\right|\leq \int_{a}^{b} |f| \, d\alpha  .
> $$
> 
> > [!Proof]-
> > Composing $f$ with $|x|$ yields $|f|\in\mathscr{R}(\alpha)$. 
> > Let $c=\pm 1$, such that $c\int f\,d\alpha\geq 0$. Then,
> > $$
> > \left|\int f\, d\alpha\right|=c\int f\,d\alpha=\int cf\,d\alpha\leq \int |f|\,d\alpha
> > $$
> > since $cf\leq |f|$.

