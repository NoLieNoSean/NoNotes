---
id: "433"
date: 2026-03-18
time: 11:38
tags:
  - ALG4
  - Lecture
  - Processed
---
# Order of Galois groups

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

> [!Lemma] @isaacsAlgebraGraduateCourse2009 18.14
> Let $G\subseteq \text{Aut}(E)$ and write $F=E^{G}$. Let $\alpha\in E$ and assume the $G$-orbit $\Lambda$ of $\alpha$ is finite; suppose $\Lambda=\{ \alpha_{1}, \dots, \alpha_{r} \}$.  Then $\alpha$ is algebraic over $F$, with 
> $$
> \text{min}_{F, \alpha}(x)=\prod_{i=1}^{r} (x-\alpha_{i}).
> $$
> Thus, if $G$ is *finite*, the extension $E/F$ is [[LEC ALG4 16#^ba7e62|separable]]. 
> 
> > [!Proof]-
> > 
> > Let $f(x):=\prod_{i=1}^{r}(x-\alpha_{i})$. Since each $\sigma\in G$ permutes $\Lambda$, it follows that the corresponding automorphism $\hat{\sigma}$ of $E$ permutes the factors of $f$, and thus $\hat{\sigma }f=f$. Thus, $f$ has coefficients in $E^{G}$, and thus $f\in F[x]$. Since $f(\alpha)=0$, $\alpha$ is algebraic over $F$. Let $p=\text{min}_{F, \alpha}$. We immediately have $p\ | \ f$. 
> > 
> > By [[LEC ALG4 17#^c54c9e]].1, $\text{Gal}(E/F)$ permutes the roots of $p$. In particular, $G\subseteq \text{Gal}(E/F)$ (equality may not hold, since we did not assume $G$ to be finite!) permutes the roots of $p$. Thus, every element of $\Lambda$ is a root of $p$ and $\text{deg}\,p\geqslant |\Lambda|=\text{deg}\, f$ and we conclude that $f=p$. 
> > 
> 

^dbed4e

> [!Remark]
> One can prove [[#^89ae5e]] using [[#^dbed4e]] and the [[LEC ALG4 16#^0d8ecf|primitive element theorem]]. [[#^dbed4e]] implies that the degree of each $\alpha\in E$ over $E^{G}$ is $\leqslant |G|$. Let $\alpha\in E$ be of maximum degree. We claim that $F(\alpha)=E$. Suppose otherwise. Then there exists $\beta\in E$ such that $F(\alpha)\subsetneq F(\alpha, \beta)\subseteq E$. However, by the primitive element theorem, $F(\alpha, \beta)=F(\gamma)$ for some $\gamma\in E$. However, the degree $[F(\gamma):F]=[F(\alpha, \beta):F(\alpha)][F(\alpha):F]$ is strictly greater than $[F(\alpha):F]$, a contradiction.

> [!Theorem]
> Let $G\subseteq \text{Aut}(E)$ be finite. Then,
> $$
> [E:E^{G}]=|G|.
> $$
> 
> > [!Proof]-
> > 
> > Write $F=E^{G}$. By [[#^89ae5e]] and [[#^dbed4e]], $E/F$ is a finite separable extension. By [[LEC ALG4 16#^0d8ecf]], there exists a primitive element $\alpha\in E$ such that $E=F(\alpha)$. Let $f(x)\in F[x]$ be the minpoly of $\alpha$ so that $[E:F]=\text{deg}\,f(x)$. By [[#^dbed4e]], the $G$-orbit of $\alpha$ has $[E:F]$ elements. Suppose that $\sigma\in G$ is in the stabilizer of $\alpha$. 
> > $$
> > \begin{align}
> > \forall g(x)\in F[x],\sigma(g(\alpha))=g(\alpha).
> > \end{align}
> > $$
> > Since all elements of $E$ can be expressed as a polynomial of $\alpha$ with coefficients in $F$, it follows that $\sigma$ is the identity on $E$. We are done by [[LEC ALG2 9#^7af674]]. 
> 

^bc535a

[[#^89ae5e]] states if $G$ is finite, $E/E^{G}$ is finite. The converse is true, too. 

> [!Lemma] @isaacsAlgebraGraduateCourse2009 18.16
> Let $E/F$ be a finite extension. Then $|\text{Gal}(E/F)|< \infty$. 

^fb187e

> [!Theorem]
> Let $E/F$ be a finite extension. Then $|\text{Gal}(E/F)|\ | \ [E:F]$. Furthermore, $|\text{Gal}(E/F)|=[E:F]$ iff $E$ is Galois over $F$. 
> 
> > [!Proof]-
> > 
> > Follows from [[LEC ALG4 17#^17b999]].1, [[#^fb187e]], and [[#^bc535a]]: $[E:F]=\underbrace{ [E:E^{G}] }_{ = |G| }[E^{G}:F]$. 
> 

