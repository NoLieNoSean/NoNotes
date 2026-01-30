---
id: "391"
date: 2026-01-21
time: 12:46
tags:
  - ALG4
  - Lecture
---
# Generators and Relations

Let $R$ be a Noetherian ring, and $M$ be a finitely generated $R$-module with generating set $\{ x_{1}, \dots, x_{n} \}$. The kernel of the map $\epsilon:R^{n}\to M$ given by [[LEC ALG4 2#^e839ad]] is exactly all the $R$-linear relations among $\{ x_{1}, \dots, x_{n} \}$. Since $R^{n}$ is Noetherian by [[LEC ALG4 4#^e419d5]], $\ker\epsilon$ is finitely generated, say by $m$ elements. So, there exists a surjective map $\epsilon_{1}:R^{m}\to \ker\epsilon$. Let $\varphi$ be the composite $\iota \circ\epsilon_{1}$. 

```latex
% latex-id: af57-3f3f-963d-4f83-9521
\begin{document}
\begin{tikzcd} 
\ker\epsilon \ar[r, hook, "\iota"] & R^{n}\ar[r, "\epsilon"] & M \\
R^{m}\ar[u, "\epsilon_{1}"]\ar[ru, "\varphi"'] &  & 
\end{tikzcd}
\end{document}
```
Observe that 
$$
\frac{R^{n}}{\mathrm{im}\,\varphi}\cong\frac{R^{n}}{\ker\epsilon}\cong\text{im}\,\epsilon\cong M.
$$
Thus, for Noetherian $R$ and a finitely generated $R$-module $M$, there exists a $R$-module homomorphism $\varphi:R^{m}\to R^{n}$ such that $M\cong \text{coker}\,\varphi$. After choosing a basis for $R^{m}$ and $R^{n}$, $\varphi$ can be represented by a $n\times m$ matrix with entries in $R$. We say $M$ is **presented** by this matrix. 

For example, the $\mathbb{Z}$-module $\mathbb{Z}/5\mathbb{Z}$ is presented by the map $\mathbb{Z}\to \mathbb{Z}$ given by $1\mapsto 5$, or equivalently by the matrix $\begin{bmatrix}5 \end{bmatrix}$. 

With the basis of $R^{n}$ being $\{ x_{1}, \dots, x_{n} \}$, the columns of the presentation matrix of $M$ form a complete set of relations among the generators of $M$. (A set $S$ of relations is said to be complete if every relation is a linear combination of $S$ with coefficients in $R$). 

> [!Proposition] @artinAlgebra2011 14.5.7
> Let $A$ be an $n\times m$ presentation matrix for a finitely generated $R$-module $M$. The following matrices represent the same module $M$:
> 1. $Q^{-1}A$, with $Q\in GL_{n}(R)$;
> 2. $AP$, with $P\in GL_{m}(R)$;
> 3. A matrix obtained by deleting a column of zeroes from $A$; 
> 4. If the $j$th column of $A$ is $e_{i}$, the matrix obtained from $A$ by deleting row $i$ and column $j$. 
> 
> > [!Proof]-
> > 
> > Let $\varphi:R^{m}\to R^{n}$ be the map that $A$ describes, interpreted using standard bases. 
> > 
> > $(1)$ corresponds to changing the basis of $R^{n}$ to $Q$. Note that the map $\varphi$ remains unchanged. 
> > 
> > $(2)$ corresponds to changing the basis of $R^{m}$ to $P$. Again, $\varphi$ is not impacted. 
> > 
> > $(3)$ A column of zeros corresponds to a trivial relation, which can be omitted. More concretely, dropping a zero column gives us a map $\varphi':R^{m-1}\to R^{n}$ with $\text{im}\,\varphi=\text{im}\,\varphi'$, so $M=R^{n}/\text{im}\,\varphi=R^{n}/\text{im}\,\varphi'$. Thus, the matrix of $\varphi'$ presents $M$.
> > 
> > $(4)$ A column of $A$ equal to $e_{i}$ corresponds to the relation $v_{i}=0$. The zero element is useless as a generator, and its appearance in any other relation is irrelevant. So we may delete $v_{i}$ from the generating set and from the relations. 
> > 
> > 
> 


---

# Decomposition of finitely generated modules into torsion and free components

$R$ is a ==domain==, $M$ an $R$-module.

> [!Definition]
> 1. A nonzero element $x\in M$ is called a **torsion element** if and there exists nonzero $a\in R$ such that $ax=0$. 
> 2. We say $M$ is **torsion free** if $M$ does not contain any torsion elements. 
> 3. We say $M$ is a **torsion module** if all elements of $M$ are torsion elements. 
> 4. $\text{tor}(M):=\{ x\in M:x \text{ is a torsion element} \}\cup \{  0 \}$. Note that $\text{tor}(M)$ is a submodule of $M$. 


> [!Lemma]
> Let $M$ be a finitely generated $R$-module. Then, $M/\text{tor}(M)$ is torsion free (and finitely generated).
> 
> > [!Proof]-
> > 
> > If $x\in E$, let $\overline{x}$ denote its residue class mod $\text{tor}(M)$. Let $b\in R$, $b\ne 0$ be such that $b\overline{x}=0$. Then $bx\in \text{tor}(M)$, and hence there exists nonzero $c\in R$ such that $cbx=0$. Hence $x\in \text{tor}(M)$ and $\overline{x}=0$, thereby proving that $M/\text{tor}(M)$ is torsion free. 
> 

^4998de

Analogous to [[LEC ALG2 14#The Invariant Factor Theorem|the case for abelian groups]], submodules of free modules are free of rank less than or equal their parent.

> [!Lemma] @langAlgebra2002 3.7.1
> Let $F$ be a free module over a PID, and $M$ a submodule. Then $M$ is free, and its dimension is less than or equal to the dimension of $F$. 

^84b3e5


> [!Lemma] @isaacsAlgebraGraduateCourse2009 16.28
> Let $R$ be a PID, $M$ a finitely generated torsion free $R$-module. Then $M$ is free. 
> 
> > [!Proof]-
> > 
> > Let $Y=\{ y_{1}, \dots, y_{m} \}$ be a generating set for $M$. Let $V=\{ v_{1}, \dots, v_{n} \}$ be a maximal linearly independent subset of $Y$. For $y\in Y$, there exist elements $a, b_{1}, \dots, b_{n}\in R$, not all $0$, such that
> > $$
> > ay+\sum_{i=1}^{n} b_{i}v_{i}=0.
> > $$
> > Then $a\ne 0$, lest we contradict the linear independence of $V$. Hence $ay$ lies in the free submodule $R^{\oplus V}$ of $M$ generated by $V$. For each $j=1, \dots, m$, we can find $a_{j}\in R$, $a_{j}\ne 0$, such that $a_{j}y_{j}\in R^{\oplus V}$. Let $a=a_{1}\dots a_{m}$ be the product. Then $aM\subseteq R^{\oplus V}$ and $a\ne 0$. Since $M$ is torsion free, the map $a\mapsto ax$ is an injective homomorphism, and $M$ is isomorphic to its image under this map. We conclude form [[#^84b3e5]] that $M$ is free. 
> 

^fdca90


We will prove this: $\forall n\geqslant 0$, $\forall$ $R$ modules $M$ generated by $n$ elements, if $M$ is torsion free then $M$ is free. 

Write $\mu(M)$ for the smallest cardinality of a generating set of $M$. Assume the claim holds for $\mu(M)=n-1$. Let $x\in M$ be part of a generating set of cardinality $n$. Let $\Lambda:= \{ Ry: y\in M, x\in Ry \}$. $R$ PID $\implies$ $R$ Noetherian $\implies$ $M$ Noetherian. Thus, $\Lambda$ has a maximal element, say $N=Ry$. 

Observe that $M/N$ can be generated by $n-1$ elements. 

Claim: $M/N$ is torsion free. 

Assume the claim for now. $M/N$ is free by the induction hypothesis. We have a split surjection, N is isomrophic to R as a free module, yadayada


**Proof of claim**

$M/N$ tf $\iff$ for all $z\in M$ and for all $a\in R$ if $az\in N$ then $z\in N$. 

Let $(z, a)\in M\times R$, $az\in N$, and the number of prime factors of $a$ counting multiplicity is minimum. Then, there exists $b\in R$ such that $az=by$. Suppose $\text{gcd}(a, b)\ne 1$. Then, there exists $p\ | \ a$ and $p\ | \ b$, $p$ prime. Since $M$ is torsion free, we have $a'z=b'z\in N$, where $a'=a/p$ and $b'=b/p$. But $a'$ has fewer prime factors than $a$, which contradicts the choice of $a$, so $(a, b)=R$. 

Thus, there exist $\lambda, \mu\in R$ such that $\lambda a+\mu b=1$. Now, 
$$
\begin{align}
y & =(\lambda a+\mu)y=\lambda ay+\mu az=\underbrace{ (\lambda y+\mu z) }_{ \in M }a
\end{align}
$$
Thus $y\in R(\lambda y+\mu z)$, so $N\subseteq R(\lambda y+\mu z)$. By maximality of $N$, it follows that $N=R(\lambda y+\mu z)$. 

Also, $z=(\lambda a+\mu b)z=(\lambda by+b\mu z)\in Ry$. This proves the claim. 



> [!Theorem]
> Let $R$ be a PID, and $M$ a finitely generated $R$-module. Then $M\cong\text{tor}(M)\oplus \frac{M}{\text{tor}(M)}$. 
> 
> > [!Proof]-
> > 
> > We have the short exact sequence
> > $$
> > 0\to\text{tor}(M)\hookrightarrow M\twoheadrightarrow M/\text{tor}(M)\to 0.
> > $$
> > By [[#^4998de]] and [[#^fdca90]], $M/\text{tor}(M)$ is free, and hence [[LEC ALG4 3#^544d97|projective]]. By [[LEC ALG4 3#^d32b0c]] and @conradSPLITTINGSHORTEXACT 2.1, the sequence splits. 
> 

Thus, every finitely generated module is a direct sum of a torsion module and a free module. Free modules have a simple structure that we understand. It remains to study finitely generated torsion modules. 







[!Example]
1. $\mathbb{Q}$ is a torsion free abelian group
2. In an abelian group, the torsion free elements are precisely the elements of infinite order. 
3. Free modules are torsion free.
4. submodules of torsion free modules are torsion free. @langAlgebra2002 3.7.1


[!Example]
$\mathbb{Q}$ is a non-free torsion free $\mathbb{Z}$ module. $\mathbb{Q}$ is not a finitely generated $\mathbb{Z}$ module. 