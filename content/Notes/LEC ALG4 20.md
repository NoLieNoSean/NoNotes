---
id: "436"
date: 2026-03-25
time: 11:56
tags:
  - ALG4
  - Lecture
---
Rewrite @isaacsAlgebraGraduateCourse2009 18.3(c) as follows:

> [!Proposition]
> Let $E$ be a splitting filed of a polynomial in $F[x]$. Let $\alpha, \beta\in E$ be conjugates over $F$. Then there exists $\sigma\in \text{Aut}_{F}(E)$ such that $\sigma(\alpha)=\beta$. 

^39bf58


proof later. 

[!Definition]
Let $F$ be a field. $F$-conjugates are elements of $\overline{F}$ which have the same minimal polynomial in $F[x]$. 

---

Recall: Let $\alpha, \beta\in \overline{F}$ be $F$ conjugates. Write $f(x)$ for their minimal polynomial. Then, 
$$
F(\alpha)\cong F[x]/f(x)\cong F(\beta).
$$

[!Notation]
For a map $\varphi:F_{1}\to F_{2}$ of fields, we write $\hat{\varphi}:F_{1}[x]\to F_{2}[x]$ for the map $\sum_{i=1}^{n}a_{i}x^{i}\mapsto \sum_{i=1}^{n}\varphi(a_{i})x^{i}$. 

> [!Proposition]
> Let $\varphi_{1}:F_{1}\to F_{2}$ be a field isomorphism. Let $f_{1}\in F_{1}[x]$ be irreducible. Write $f_{2}:=\hat{\varphi f_{1}}$. Let $\alpha_{i}\in \overline{F}_{i}$ be a root of $f_{i}$ for $i=1, 2$. Then there exists an isomorphism $\theta: F_{1}(\alpha_{1})\to F_{2}(\alpha_{2})$ extending $\varphi$ such that $\theta(\alpha_{1})=\alpha_{2}$. 
> 
> > [!Proof]-
> > 
> > $\hat{\varphi}:F_{1}[x]\to F_{2}[x]$ is an isomorphism. Clearly, 
> > $$
> > \frac{F_{1}[x]}{f_{1}(x)}\to\frac{F_{2}[x]}{\hat{\varphi}f_{1}(x)}
> > $$
> > is an isomorphism. 
> 

^955372

> [!Proposition]
> Let $\varphi:F_{1}\to F_{2}$ be an isomorphism of fields. Let $f_{1}\in F_{1}[x]$, $f_{2}=\hat{\varphi}f_{1}$. Let $E_{i}$ be a splitting field of $f_{i}$ over $F_{i}$. Then $\varphi$ extends to an isomorphism $E_{1}\to E_{2}$. 
> 
> > [!Proof]-
> > 
> > Induct on $[E_{1}:F_{1}]$.
> > 
> > $[E_{1}:F_{1}]=1$ $\iff$ $f_{1}(x)$ splits into linear factors over $F_{1}$ $\iff$ $f_{2}(x)$ splits into linear factors over $F_{2}$ $\iff$ $E_{2}=F_{2}$; thus $E_{1}\cong E_{2}$. 
> > 
> > Next, suppose $[E_{1}:F_{1}]> 1$. Let $\alpha_{1}\in E_{1}\setminus F_{1}$ be a root of $f_{1}$. Let $g_{1}\in F_{1}[x]$ be the minimal polynomial of $\alpha_{1}$. Let $g_{2}=\hat{\varphi}g_{1}$. $g_{2}$ is an irreducible factor of $f_{2}$. Let $\alpha_{2}\in E_{2}$ be a root of $g_{2}$. 
> > 
> > By [[LEC ALG4 20#^955372]], there exists $\theta:F_{1}(\alpha)\to F_{2}(\alpha)$ such that this diagram commutes, since $[E_{1}:F_{1}(\alpha)]<[E_{1}:F_{1}]$. 
> > 
> > ```latex
> > % latex-id: 8062-ad2a-d22b-4bfb-a6c4
> > \begin{document}
> > % https://q.uiver.app/#q=WzAsNixbMCwyLCJGXzEiXSxbMSwyLCJGXzIiXSxbMCwxLCJGXzEoXFxhbHBoYSkiXSxbMSwxLCJGXzIoXFxhbHBoYSkiXSxbMCwwLCJFXzEiXSxbMSwwLCJFXzIiXSxbNCw1LCJcXHRhdSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRvdHRlZCJ9fX1dLFsyLDMsIlxcZXhpc3RzXFx0aGV0YSIsMCx7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dLFswLDEsIlxcdmFycGhpIl0sWzAsMiwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XSxbMSwzLCIiLDEseyJzdHlsZSI6eyJ0YWlsIjp7Im5hbWUiOiJob29rIiwic2lkZSI6ImJvdHRvbSJ9fX1dLFsyLDQsIiIsMSx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6Imhvb2siLCJzaWRlIjoiYm90dG9tIn19fV0sWzMsNSwiIiwxLHsic3R5bGUiOnsidGFpbCI6eyJuYW1lIjoiaG9vayIsInNpZGUiOiJib3R0b20ifX19XV0= 
> > \[\begin{tikzcd} {E_1} & {E_2} \\ {F_1(\alpha)} & {F_2(\alpha)} \\ {F_1} & {F_2} \arrow["\tau", dotted, from=1-1, to=1-2] \arrow[hook', from=2-1, to=1-1] \arrow["{\exists\theta}", dashed, from=2-1, to=2-2] \arrow[hook', from=2-2, to=1-2] \arrow[hook', from=3-1, to=2-1] \arrow["\varphi", from=3-1, to=3-2] \arrow[hook', from=3-2, to=2-2] \end{tikzcd}\]
> > \end{document}
> > ```
> > 
> > By induction, there exists an isomorphism $\tau:E_{1}\to E_{2}$ extending $\theta$. Thus, $\tau$ extends $\varphi$. 

Proof of [[LEC ALG4 20#^39bf58]]:

> [!Proof]-
> 
> $E$ be a splitting field of $g(x)$ over $F(\alpha)$ and over $F(\beta)$. Thus, there exists an automorphism $\sigma:E\to E$ extending $\varphi$ such that $\sigma\ | \ _F=\mathrm{id}_{F}$ and $\sigma(\alpha)=\beta$. 


---

Back to [[LEC ALG4 19#^1f27bb]], $(3)\implies (1)$. 

[!Proof]-

$(3)\implies (1)$ Induct on $[E:F]$. WLOG, $[E:F]> 1$. Let $\alpha\in E\setminus F$ be a root of $g$. 

(see pics)

---

[!Corollary]
Let $E/K/F$. $E/F$ Galois $\implies$ $E/K$ Galois. 

[!Proof]-

Clear. 

Note that $K/F$ need not be Galois. 

[!Corollary]
Let $E/F$ be a finite separable extension. Then there exists an extension field $\tilde{E}$ of $E$ such that $\tilde{E}/F$ is Galois. 

[!Proof]-

By the primitive element theorem, write $E=F(\alpha)$ for some $\alpha\in E$. Let $f(x)$ be the minpoly of $\alpha$ over $F$. Then $f(x)$ is separable. Take $\tilde{E}$ to be a splitting field of $f(x)$ over $E$. Then, $\tilde{E}/F$ is Galois. 


