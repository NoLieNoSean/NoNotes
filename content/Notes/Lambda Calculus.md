Ref: [[Barendregt and Barendsen - 2000 - Introduction to Lambda Calculus.pdf]]
# Preliminaries

$\lambda$ Calculus is a **formal system** for expressing computation in terms of function **application** and **abstraction**.

> [!Info]
> Vanilla $\lambda$ calculus is *untyped* (or *type-free*), that is, any function can be applied to any term. It is Turing complete (being allowed to consider expressions like $F F$ allows us to simulate recursion), but you can easily write meaningless or non-terminating terms, like $(\lambda x.xx)(\lambda x.xx)$. 

**Application** and **abstraction** are the two basic operations of the $\lambda$ Calculus.

The expression $FA$ denotes $F$ being considered as an operator being applied to $A$ being considered as data.

The other basic operation is abstraction: If $M\equiv M[x]$ is an expression containing $x$, then $\lambda x.M[x]$ denotes the function $x\mapsto M[x]$. 

> [!Notation]
> $M[x]$ denotes an expression $M$ containing variable $x$.

Abstraction *binds* the variables of the local scope. 
- It is a notational convention that the bound variables that occur in an expression are always different form the free ones.
- Expressions that differ only in the names of bound variables are identical.

Iterated application uses association to the left
$$
FM_{1}\dots M_{n}\text{ denotes } (\dots(FM_{1})\dots M_{n}).
$$
Dually, iterated abstraction used association to the right:
$$
\lambda x_{1}\dots x_{n}.f(x_{1}, \dots, x_{n})\text{ denotes } \lambda x_{1}.(\lambda x_{2}.(\dots(\lambda{x_{n}}.f(x_{1}, \dots, x_{n}))\dots)).
$$
For $n$ arguments, we have (recall [[Functions#Currying|currying]]):
$$
(\lambda x_{1}\dots x_{n}.f(x_{1}, \dots, x_{n}))x_{1}\dots x_{n}=f(x_{1}, \dots, x_{n}).
$$
Using vector notation,  we have
$$
(\lambda \mathbf{x}.f(\mathbf{x}))\mathbf{x}=f(\mathbf{x}).
$$
However, considering our notational convention from above, it would be more appropriate to write
$$
(\lambda \mathbf{x}.f(\mathbf{x}))\mathbf{N}=f(\mathbf{N}).
$$

---
# The formal definitions

> [!Definition] $\lambda$ terms
> The set of **$\lambda$-terms**, denoted by $\Lambda$, is built up from an infinite set of **variables** $V=\{ v, v', v'', \dots \}$ using application and abstraction:
> $$
> \begin{align}
> x\in V & \implies x\in\Lambda ,\\
> M,N\in\Lambda  & \implies(MN)\in\Lambda , \\
> M\in \Lambda, x\in V & \implies\lambda x.M\in\Lambda.
> \end{align}
> $$

It is a convention that lower case letters denote variables and upper case letters denote $\lambda$-terms. $M\equiv N$ denotes that $M$ and $N$ are the same term or can be obtained from each other by renaming bound variables. We also associate iterated application to the left and iterated abstraction to the right.

> [!Definition] free variables
> 
> The set of **free variables** of $M$, denoted by $FV(M)$, is defined inductively as follows:
> $$
> \begin{align}
> FV(x) & \equiv \{ x \}, \\
> FV(MN) & \equiv FV(M)\cup FV(N), \\
> FV(\lambda x.M) & \equiv FV(M)\setminus \{ x \}.
> \end{align}
> $$
> A variable in $M$ is said to be **bound** if it is not free. 

> [!Definition] Combinator
> 
> $M$ is a **closed $\lambda$-term** (or **combinator**) if $FV(M)=\emptyset$. The set of closed $\lambda$-terms is denoted by $\Lambda^{\circ}$.

Variable convention: If $M_{1}, \dots, M_{n}$ occur in a certain mathematical context, then in these terms all bound variables are chosen to be different from the free variables.

> [!Definition]
> 
> The result of **substituting** $N$ for the *free occurrences* of $x$ in $M$, denoted by $M[x:=N]$, is defined as follows:
> $$
> \begin{align}
> x[x:=N] & \equiv N; \\
> y[x:=N] & \equiv y, \quad \text{if } x\not\equiv y; \\
> (M_{1}M_{2})[x:=N] & \equiv(M_{1}[x:=N])(M_{2}[x:=N])  \\
> (\lambda y.M) [x:=N] & \equiv \begin{cases}
> \lambda y.(M[x:=N])  & y\not\equiv x, \\
> (\lambda y.M) & y\equiv x.
> \end{cases}
> \end{align}
> $$
> 

Note that in the fourth clause of the above definition, it is not needed to say "Provided that $y\not\in FV(N)$". By the variable convention, this is the case: $y$ is a bound variable in $(\lambda y.M)$, and hence cannot be a free variable in $N$. 

Now, we can introduce the $\lambda$ calculus as a formal theory:

> [!Definition]
> 
> The principal axiom of the $\lambda$-calculus is
> $$
> (\lambda x.M)N\equiv M[x:=N]
> $$
> for all $M, N\in \Lambda$.
> 
> There are also the logical axioms:
> $$
> \begin{align}
> M & =M; \\
> M=N & \implies N=M ;\\
> M=N, N=L & \implies M=L;\\
> \end{align}
> $$
> and compatibility rules:
> $$
> \begin{align}
> M=M' & \implies MZ=M'Z; \\
> M=M' & \implies ZM=Z\mathcal{M} \\
> M=M'  & \implies \lambda x.M=\lambda x.M'.
> \end{align}
> $$


If $M=N$ is provable in the $\lambda$-calculus, then we write $\boldsymbol{\lambda}\vdash M=N$.

Thanks to the compatibility rules, one can replace subterms by equal terms in any term context. For example, $(\lambda y.yy)x=xx$, so $\boldsymbol{\lambda}\vdash\lambda x.x((\lambda y.yy)x)x=\lambda x.x(xx)x$.

The following lemma is clear from the principal axiom:

> [!Lemma] 
> 
> $$
> \boldsymbol{\lambda}\vdash (\lambda x_{1}\dots x_{n}M)X_{1}\dots X_{n}=M[x_{1}:=X_{1}]\dots[x_{n}:=X_{n}].
> $$

---
# Fixed point theorem

> [!Definition] Standard combinators
> Define **standard combinators**
> $$
> \begin{align}
> \mathbf{I} & \equiv\lambda x.x; \\
> \mathbf{K} & \equiv\lambda xy.x; \\
> \mathbf{K}_{*} & \equiv\lambda xy.y; \\
> \mathbf{S} & \equiv\lambda xyz.xz(yz).
> \end{align}
> $$
> 

^9c0469

> [!Theorem] Fixed point theorem
> For all $F\in\Lambda$, there exists $X\in\Lambda$ such that $FX=X$. More precisely, for all $F\in\Lambda$, there exists a fixed point combinator 
> $$
> \mathbf{Y}\equiv\lambda f.(\lambda x.f(xx))(\lambda x.f(xx))
> $$
> such that $F(\mathbf{Y}F)=\mathbf{Y}F$. 

^d18faf

`\begin{proof}` Define $W\equiv\lambda x.F(xx)$ and $X\equiv WW$. Then, $X\equiv WW=(\lambda x.F(xx))W=F(WW)=FX.$`\end{proof}`

> [!Example]
> Show that there exists $G$ such that for all $X$, $GX=\mathbf{S}GX$.
> 
> Let $G\equiv \mathbf{Y}(\lambda gx.\mathbf{S}gx)$. Then, $G$ is a fixed point of $\lambda gx.\mathbf{S}gx$, and 
> $$
> \begin{align}
>  & G  =(\lambda gx.\mathbf{S}gx)G \\
> \implies & G=\lambda x.\mathbf{S}Gx \\
> \implies & Gx=\mathbf{S}Gx \\
> \implies & GX=\mathbf{S}GX \quad\forall X\in\Lambda. 
> \end{align}
> $$
> Note that taking $G\equiv \mathbf{Y}\mathbf{S}$ also works.

> [!Example]
> Show that there exists $G$ such that for all $X$, $GX=GG$.
> 
> Let $G\equiv\mathbf{Y}(\lambda gx.gg)$. Then, 
> $$
> \begin{align}
> G & =(\lambda gx.gg)G \\
>  & =(\lambda x.GG),
> \end{align}
> $$
> so $GX=GG$ for all $X$.
> 
> Alternatively, for a solution that does not use the fixed point combinator, let $F\equiv\lambda f x.ff$ and $G\equiv FF$:
> $$
> \begin{align}
> G & =FF=\lambda x.FF =\lambda x.G \\
> GG & =(\lambda x.G)G=G=(\lambda x.G)X=GX.
> \end{align}
> $$
> More alternative solutions can be obtained by taking the $f$s in $F$ in powers of $2$:
> 
> $F\equiv\lambda fx.ffff$ 
> $G\equiv FF$
> $G=\lambda x.FFFF=\lambda x.GG$
> $GX=(\lambda x.GG)X=GG$
> 
> $F\equiv\lambda fx.ffffffff$
> $G\equiv FF$
> $G=\lambda x.F F F F F F F F=\lambda x.GGGG$
> $GG=GGGG$
> $G=\lambda x.GG$
> 
> Note that all the proofs converge when we obtain $G=\lambda x.GG$. In general, we have:
> 
> $F\equiv\lambda fx.f^{2^{k}}$
> $G\equiv FF$
> $G=\lambda x.F^{2^{k}}=\lambda x.G^{2^{k-1}}$
> $GG=G^{2^{k-1}}$
> $G=\lambda x.GG$


---
# Church numerals

> [!Definition] Notation for repeated application
> $F^{n}(M)$ with $F\in\Lambda$ and $n\in \mathbb{N}$ is defined inductively as follows:
> $$
> \begin{align}
> F^{0}(M) & =M; \\
> F^{n+1}(M) & =F(F^{n}(M)).
> \end{align}
> $$

> [!Definition] Church numerals
> The **Church numerals** $c_{0}, c_{1}, \dots,$ are defined by $c_{n}\equiv\lambda fx.f^{n}(x)$.

> [!Theorem] Arithmetic on Church numerals
> Define
> $$
> \begin{align}
> 
> \mathbf{A}_{+} & \equiv\lambda c_{a}c_{b}fx.c_{a}f(c_{b}fx); \\
> \mathbf{A}_{*} & \equiv\lambda c_{a}c_{b}f.c_{a}(c_{b}f); \\
> \mathbf{A}_{\exp} & \equiv\lambda c_{a}c_{b}.c_{b}c_{a}.
> \end{align}
> $$
> Then, 
> $$
> \begin{align}
> \mathbf{A}_{+}c_{a}c_{b} & =c_{a+b}; \\
> \mathbf{A}_{*}c_{a}c_{b} & =c_{ab}; \\
> \mathbf{A}_{\exp}c_{a}c_{b} & =c_{a^{b}}, \quad m\ne 0.
> \end{align}
> $$
> 

^a682eb

> [!Lemma]
> 1. $(c_{n}f)^{m}x=f^{nm}x$
> 2. $(c_{n})^{m}f=c_{n^{m}}f$, for $m> 0$.

^ec2774

`\begin{proof}`
Proof by induction. Note that for $m=0$, $x=x$, and for $m=1$, $(c_{n}f)x=f^{n}x$. Assume that $(1)$ holds for $m=k$, that is, $(c_{n}f)^{k}x=f^{nk}x$. Then, we have
$$
\begin{align}
(c_{n}f)^{k+1}x & =c_{n}f(f^{nk}x) \\
 & =f^{n}(f^{nk}x) \\
 & =f^{n(k+1)}x.
\end{align}
$$
Similarly, note that $(2)$ holds for $m=1$. Assume that it holds for $m=k$. Then, 
$$
\begin{align}
(c_{n})^{k+1}f & =c_{n}(c_{n^{k}}f) \\
 & =\lambda x.(c_{n^{k}}f)^{n}x \\
 & = \lambda x.f^{n^{k+1}}x \\
 & =c_{n^{k+1}}f.
\end{align}
$$
.`\end{proof}`

`\begin{proof}` [[#^a682eb]]
$$
\begin{align}
\mathbf{A}_{+}c_{a}c_{b} & =\lambda fx.c_{a}f(c_{b}fx) \\
 & =\lambda fx.(\lambda x.f^{a}(x))(f^{b}(x))  \\
 & =\lambda fx.f^{a}(f^{b}(x)) \\     
 & =\lambda fx.f^{a+b}(x) \\
 & =c_{a+b}
\end{align}
$$
Using [[#^ec2774]] $(1)$, 
$$
\begin{align}
\mathbf{A}_{*}c_{a}c_{b} & =\lambda f.c_{a}(c_{b}f) \\
 & = \lambda fx.(c_{b}f)^{a}x \\
 & =\lambda fx.f^{ab}x \\
 & =c_{ab}.
\end{align}
$$
Using [[#^ec2774]] $(2)$, 
$$
\begin{align}
\mathbf{A}_{\exp}c_{a}c_{b} & =c_{b}c_{a} \\
 & =\lambda x.c_{a}^{b}x \\
 & =\lambda x.c_{a^{b}}x \\
 & =\lambda x.(\lambda fy.f^{a^{b}}y)x \\
 & =\lambda xy.x^{a^{b}}y \\
 & =c_{a^{b}}.
\end{align}
$$
Note that in general, $M=\lambda x.Mx$ if $M=\lambda y.M'[y]$ and $x\not\in FV(M')$.`\end{proof}`

---
# Booleans and conditionals

> [!Definition]
> $\textsf{true}\equiv \mathbf{K}$, $\textsf{false}\equiv \mathbf{K}_{*}$, where $\mathbf{K}$ and $\mathbf{K}_{*}$ are the combinators defined [[#^9c0469|here]]. 

Note that if $B$ is a boolean, then 
$$
\text{if }B\text{ then }P\text{ else }Q
$$
is equivalent to the $\lambda$-term
$$
BPQ.
$$
> [!Definition]
> For $M, N\in\Lambda$, define
> $$
> [M, N]\equiv\lambda z.zMN.
> $$
> Then, $[M, N]\textsf{true}=M$, and $[M, N]\textsf{false}=N$. $[M, N]$ can serve as an ordered pair.

We can use the pairing construction for an alternative representation of natural numbers.

> [!Definition] Barendregt Numerals
> For each $n\in \mathbb{N}$, the numeral $\lceil n \rceil$ is defined inductively as follows:
> $$
> \begin{align}
> \lceil 0 \rceil  & \equiv \mathbf{I}, \\
> \lceil n+1 \rceil  & \equiv[\textsf{false}, \lceil n \rceil ].
> \end{align}
> $$
> 

> [!Lemma] 
> The exist combinators $\mathbf{S}^{+}, \mathbf{P}^{-}$, and $\mathbf{Z}$ such that
> $$
> \begin{align}
> \mathbf{S}^{+}\lceil n \rceil  & =\lceil n+1 \rceil , \\
> \mathbf{P}^{-}\lceil n+1 \rceil  & =\lceil n \rceil , \\
> \mathbf{Z}\lceil 0 \rceil  & =\textsf{true} \\
> \mathbf{Z}[n+1] & =\textsf{false}.
> \end{align}
> $$

`\begin{proof}`
Take
$$
\begin{align}
\mathbf{S}^{+} & \equiv\lambda x.[\textsf{false}, x] \\
\mathbf{P}^{-} & \equiv\lambda x.x~\textsf{false} \\
\mathbf{Z} & \equiv\lambda x.x~\textsf{true}.
\end{align}
$$
.`\end{proof}`

> [!Definition] Lambda definability
> A **numeric function** is a map $\varphi:\mathbb{N}^{p}\to \mathbb{N}$ for some $p$. In this case, $\varphi$ is called $p$-ary.
> A numeric $p$-ary function $\varphi$ is called **$\lambda$-definable** if for some combinator $F$, 
> $$
> F\lceil n_{1} \rceil \lceil n_{2} \rceil \dots \lceil n_{p} \rceil =\lceil \varphi(n_{1}, n_{2}, \dots, n_{p}) \rceil 
> $$
> for all $n_{1}, \dots, n_{p}\in \mathbb{N}$, in which case, $\varphi$ is said to be **$\lambda$-defined** by $F$.

[!Definition] Initial functions

