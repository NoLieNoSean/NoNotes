---
tags:
  - LOG
  - Lecture
date: 2025-08-28
time: 11:59
---
# First order logic

Denote by $S$ the underlying set which is the universe of discourse. Let $L=(R, F, C)$ be a context free language (look this up), where $R$ is the set of relational *symbols* defined on $S$, $F$ is the set of functional *symbols* (not functions, mind you) defined on $S$, and $C$ is the set of constant symbols. We also have access to variables (we do not include them in the definition of $L$ because we can use the same variables for all $L$).

**Terms** evaluate to elements in $S$. 
$$
\text{term}:=c\ | \  x\ | \  f(t_{1}, \dots, t_{n}),
$$
where $c\in C$, $x$ is a variable, and $f\in F$, and $t_{1}, \dots, t_{n}\in T$.

**Formulas** are defined by the BNF
$$
\text{formula}:=r(t_{1}, \dots, t_{n})\ | \  t_{1}\equiv t_{2}\ | \  ⌐\varphi\ | \  \varphi ∨\psi\ | \  \exists x\varphi.
$$
$∧$, $\implies$, and $\forall$ can defined in terms of $∨$ and $⌐$.

---

An $L$-structure $\mathcal{M}$ consists of 
1. $S^{\mathcal{M}}$: the universe of discourse
2. $r^{\mathcal{M}}$, $f^{\mathcal{M}}$, $c^{\mathcal{M}}$. These actually assign concrete relations, functions and elements of $S$ to symbols in $R$, $F$, and $C$.

Variable valuations $\sigma:\text{Var}\to S^{\mathcal{M}}$ (not part of the model itself)

$I=(\mathcal{M}, \sigma)$, $x^{I}=\sigma(x)$, $c^{I}=c^{\mathcal{M}}$, $f(t_{1}, \dots, t_{n})^{I}=f^{\mathcal{M}}(t_{1}^{I}, t_{2}^{I}, \dots, t_{n}^{I})$.

$$
\begin{align}
 & I ⊫r(t_{1}, \dots, t_{n})\text{ if }r^{\mathcal{M}}(t_{1}^{\mathcal{M}}, \dots, t_{n}^{\mathcal{M}}). \\
 & I⊫t_{1}\underbrace{ \equiv }_{ \text{syntactic, just a symbol } } t_{2}\text{ if }t_{1}^{I}\underbrace{ = }_{ \text{semantic, means what = usually means} }t_{2}^{I} \\
 & I⊫¬\varphi\text{ if }I ⊯\varphi \\
 & I⊫\varphi_{1}∨\varphi_{2}\text{ if }I⊫\varphi_{1}\text{ or }I⊫\varphi_{2} \\
 & I⊫\exists x\varphi\text{ if there exists }x\in S\text{ such that }(\mathcal{M}, \sigma[x\mapsto s])⊫\varphi.
\end{align}
$$

Free variables are defined analogously to [[Intro to Lambda Calculus#^8db839]]. 

> [!Definition]
> 1. $\text{free}(c)=\emptyset$.
> 2. $\text{free}(x)=\{ x \}$.
> 3. $\text{free}(f(t_{1}, \dots, t_{n}))=\bigcup_{i=1}^{n}\text{free}(t_{i})$.
> 4. $\text{free}(r(t_{1}, \dots, t_{n}))=\bigcup_{i=1}^{n}\text{free}(t_{i})$.
> 5. $\text{free}(⌐\varphi)=\text{free}(\varphi)$.
> 6. $\text{free}(\varphi_{1}∨\varphi_{2})=\text{free}(\varphi_{1})\cup\text{free}(\varphi_{2})$.
> 7. $\text{free}(\exists x\varphi)=\text{free}(\varphi)\setminus \{ x \}$.
> 

> [!Lemma]
> If two valuations $\sigma, \sigma'$ agree on $\text{free}(\varphi)$, then $(\mathcal{M}, \sigma)⊫\varphi \iff(\mathcal{M}, \sigma')⊫\varphi$.
> 


If $\varphi$ doesn't have any free variables, it is called a sentence. If $\varphi$ is a sentence, then $[\varphi]$ denotes the partition of the collection of all models into the ones which satisfy $\varphi$ and the ones that don't (the valuation doesn't matter here, since $\varphi$ doesn't have any free variables). 

If $\varphi$ has one free variable $x$ (denoted by $\varphi(x)$), then for a given model $\mathcal{M}$, $[\varphi(x)]$ defines a partition of $S$ into elements which satisfy $\varphi(x)$ and ones that do not. For example, $\varphi(x)=\exists yE(x, y)$ defines the set of non-isolated vertices on a graph (thus, this set is said to be **FO-definable**). As an other example, star graphs are FO-definable: