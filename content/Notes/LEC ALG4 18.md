---
id: "433"
date: 2026-03-18
time: 11:38
tags:
  - ALG4
  - Lecture
---
> [!Example]
>  Here's another degree $3$ extension whose automorphism group is nontrivial. 
>  Consider $K=F(x_{1}, x_{2}, x_{3})$. From [[LEC ALG4 17#^a173be]], we know that $K^{\mathfrak{S}_{n}}=F(e_{1}, e_{2}, e_{3})$. Suppose (we will prove this later) that $[K:K^{\mathfrak{S}_{n}}]=|S_{3}|=6$. Consider the element
> $$
> \Delta=(x-y)(y-z)(z-x)\in K^{\mathfrak{A}_{3}}\setminus K^{\mathfrak{S}_{3}}.
> $$
> Clearly, $\Delta^{2}\in K^{\mathfrak{S}_{3}}$. Thus, the extension $F(e_{1}, e_{2}, e_{3}, \Delta)/K^{\mathfrak{S}_{3}}$ is of degree $2$. This forces the extension $K^{\mathfrak{A}_{3}}/K^{\mathfrak{S}_{3}}$ to be of degree $2$, which in turn forces the extension $K/K^{\mathfrak{A}_{3}}$ to be of degree $3$. 
> 
> ```latex
> % latex-id: 96dd-989f-7d40-4254-9768
> \begin{document}
> % https://q.uiver.app/#q=WzAsNCxbMCwzLCJLXntcXG1hdGhmcmFre1N9X3szfX0iXSxbMCwxLCJLXntcXG1hdGhmcmFre0F9X3szfX0iXSxbMCwwLCJLIl0sWzEsMiwiRihlXzEsIGVfMiwgZV8zLCBcXERlbHRhKSJdLFswLDIsIjYiLDAseyJvZmZzZXQiOi0yLCJjdXJ2ZSI6LTMsInN0eWxlIjp7ImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMSwyLCIzIiwyLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZG90dGVkIn0sImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMCwxLCIyIiwyLHsic3R5bGUiOnsiYm9keSI6eyJuYW1lIjoiZGFzaGVkIn0sImhlYWQiOnsibmFtZSI6Im5vbmUifX19XSxbMCwzLCIyIiwyLHsic3R5bGUiOnsiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dLFszLDEsIjEiLDIseyJzdHlsZSI6eyJib2R5Ijp7Im5hbWUiOiJkYXNoZWQifSwiaGVhZCI6eyJuYW1lIjoibm9uZSJ9fX1dXQ== 
> \[\begin{tikzcd} K & \\ {K^{\mathfrak{A}_{3}}} \\ & {F(e_1, e_2, e_3, \Delta)} \\ {K^{\mathfrak{S}_{3}}} \arrow["3"', dotted, no head, from=2-1, to=1-1] \arrow["1"', dashed, no head, from=3-2, to=2-1] \arrow["6", shift left=2, curve={height=-18pt}, no head, from=4-1, to=1-1] \arrow["2"', dashed, no head, from=4-1, to=2-1] \arrow["2"', no head, from=4-1, to=3-2] \end{tikzcd}\]
> \end{document}
> ```
> Thus, $K/K^{\mathfrak{A}_{3}}$ is a degree $3$ extension with $\text{Aut}_{K^{\mathfrak{A}_{3}}}K\ne \{ 1 \}$. 

> [!Lemma] E Artin
> Let $E$ be a field and $G$ be a finite group of automorphisms of $E$. Then $[E:E^{G}]\leqslant |G|$. 
> 
> > [!Proof]-
> > 
> > Write $G=\{ \sigma_{1}, \sigma_{2}, \dots, \sigma_{n} \}$ and $F=E^{G}$. FTSOC, let $\alpha_{1}, \dots, \alpha_{m}\in E$ be linearly independent over $F$, for $m> n$. Consider the system of $n$ linear equations in $m$ variables $x_{1}, \dots, x_{m}$ 
> > $$
> > \sum_{j=1}^{m} \sigma_{i}(\alpha_{j})x_{j}=0\quad 1\leqslant  i\leqslant  n
> > $$
> > over $E$. Since $m> n$, the system has a nontrivial solution. Among all the nontrivial solutions, pick one with the least number of nonzero components. We can write it as $\mathbf{x}=(x_{1}, \dots, x_{r}, 1, 0, \dots, 0)\in E^{m}$ with $x_{i}\ne 0$ for $1\leqslant i\leqslant r$ after suitable rearranging and scaling. 
> > 
> > If $x_{i}\in F$ for all $1\leqslant i\leqslant r$, then for $\sigma_{1}=\mathrm{id}_{E}$, we get 
> > $$
> > \sum_{j=1}^{r} \alpha_{j}x_{j}+\alpha_{r+1}=0,
> > $$
> > contradicting the linear independence of $\alpha_{1}, \dots, \alpha_{m}$ over $F$. Thus, WLOG assume $x_{1}\not\in F$. Let $k$ be such that $\sigma_{k}(x_{1})\ne x_{1}$. Apply $\sigma_{k}$ to the system of equations to obtain
> > $$
> > \sum_{j=1}^{m} (\sigma_{k}\sigma_{i})(\alpha_{j})(\sigma_{k}(x_{j}))=0.
> > $$
> > Since $\sigma_{i}\mapsto\sigma_{k}\sigma_{i}$ is a permutation of $G$, this is the same system. Thus, $\sigma(\mathbf{x})=(\sigma_{k}(x_{1}), \sigma_{k}(x_{2}), \dots, \sigma_{k}(x_{r}), \sigma_{k}(1), 0, \dots, 0)\in E^{n}$ is a solution of the system. Since $\sigma_{k}(1)=1$ and $\sigma_{k}(x_{1})\ne x_{1}$, $\mathbf{x}-\sigma(\mathbf{x})$ is a solution of the system with fewer nonzero components than $\mathbf{x}$, contradicting the minimality of $\mathbf{x}$. 
> 

^89ae5e

> [!Lemma]
> Let $G$ be a finite group of automorphisms of $E$. Let $\alpha\in E$. Let $\{ \alpha_{1}, \dots, \alpha_{r} \}$ be the $G$-orbit of $\alpha$. Then the minpoly of $\alpha$ over $E^{G}$ is
> $$
> \prod_{i=1}^{r} (x-\alpha_{i}).
> $$
> Thus, the extension $E/E^{G}$ is separable. 
> 
> > [!Proof]-
> > 
> > Let $f(x):=\prod_{i=1}^{r}(x-\alpha_{i})$. Firstly, note that $f(x)$ has coefficients in $E^{G}$, so the lemma makes sense. Write $F=E^{G}$. Let $g(x)$ be the minpoly of $\alpha$ over $F$. Since $f(\alpha)=0$, $g(x)$ must divide $f(x)$ in $F[x]$. 
> > 
> > Next, $(x-\alpha)\ | \ g(x)$ in $E[x]$. For all $\sigma\in G$, $\sigma(g(x))=g(x)$. Therefore, for all $1\leqslant i\leqslant r$, 
> > $$
> > (x-\alpha_{i})\ | \  g(x)
> > $$
> > in $E[x]$. Thus, $f(x)\ | \ g(x)$ in $E[x]$. It follows that $f(x)\ | \ g(x)$ in $F[x]$ [^1]. 
> 

^dbed4e

Note that one can prove [[#^89ae5e]] using [[#^dbed4e]] and the [[LEC ALG4 16#^0d8ecf|primitive element theorem]]. [[#^dbed4e]] implies that the order of each $\alpha\in E$ over $F$ is $\leqslant |G|$. Let $\alpha\in E$ be of maximum order. We claim that $F(\alpha)=E$. Suppose otherwise. Then there exists $\beta\in E$ such that $F(\alpha)\subsetneq F(\alpha, \beta)\subseteq E$. However, by the primitive element theorem, $F(\alpha, \beta)=F(\gamma)$ for some $\gamma\in E$. The degree $[F(\gamma):F]$ is strictly greater than $[F(\alpha):F]$, a contradiction. 

> [!Theorem]
> Let $G$ be finite. Then
> $$
> [E:E^{G}]=|G|.
> $$
> 
> > [!Proof]-
> > 
> > Let $F=E^{G}$. $E/F$ is a finite separable extension by [[#^89ae5e]] and [[#^dbed4e]]. By [[LEC ALG4 16#^0d8ecf]], there exists a primitive element $\alpha\in E$ such that $E=F(\alpha)$. Let $f(x)\in F[x]$ be the minpoly of $\alpha$. So, $[E:F]=\text{deg}\,f(x)$. By [[#^dbed4e]], the $G$-orbit of $\alpha$ has $[E:F]$ elements. Suppose that $\sigma\in G$ is in the stabilizer of $\alpha$. 
> > $$
> > \begin{align}
> > \forall g(x)\in F[x],\sigma(g(\alpha))=g(\alpha).
> > \end{align}
> > $$
> > Since all elements of $E$ can be expressed as a polynomial of $\alpha$, it follows that $\alpha$ is the identity on $E$. Thus, the $G$-orbit of $\alpha$ is of size $|G|$. 
> 

^bc535a

> [!Theorem]
> Let $E/F$ be a finite extension. Let $G=\text{Aut}_{F}(E)$. Then $|G|\ | \ [E:F]$. 
> 
> > [!Proof]-
> > 
> > $G$ is finite %%proof later %%. Use [[#^bc535a]]. 
> 

[^1]: This is easy to prove. Consider $g(x)=f(x)p(x)$ with $p(x)\in E[x]$, and show that each coefficient of $p$ lies in $F$, starting with the leading coefficient. 
