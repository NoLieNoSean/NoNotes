---
id: "391"
date: 2026-01-21
time: 12:46
tags:
  - ALG4
  - Lecture
  - Processed
---
# A classification of modules over Euclidean domains

Let $R$ be a Noetherian ring, and $M$ be a finitely generated $R$-module with generating set $\{ x_{1}, \dots, x_{n} \}$. The kernel of the map $\epsilon:R^{n}\to M$ given by [[LEC ALG4 2#^e839ad]] is exactly all the $R$-linear relations among $\{ x_{1}, \dots, x_{n} \}$. Since $R^{n}$ is Noetherian by [[LEC ALG4 4#^e419d5]], $\ker\epsilon$ is finitely generated, say by $m$ elements. So, there exists a surjective map $\epsilon_{1}:R^{m}\twoheadrightarrow \ker\epsilon$. Let $\varphi$ be the composite $\iota \circ\epsilon_{1}$. 

```latex
% latex-id: af57-3f3f-963d-4f83-9521
\begin{document}
\begin{tikzcd} 
\ker\epsilon \ar[r, hook, "\iota"] & R^{n}\ar[r, two heads, "\epsilon"] & M \\
R^{m}\ar[u, two heads, "\epsilon_{1}"]\ar[ru, "\varphi"'] &  & 
\end{tikzcd}
\end{document}
```
Observe that 
$$
\frac{R^{n}}{\mathrm{im}\,\varphi}\cong\frac{R^{n}}{\ker\epsilon}\cong\text{im}\,\epsilon\cong M.
$$
Thus, for Noetherian $R$ and a finitely generated $R$-module $M$, there exists a $R$-module homomorphism $\varphi:R^{m}\to R^{n}$ such that $M\cong \text{coker}\,\varphi$. Assuming the standard basis for $R^{m}$ and $R^{n}$, $\varphi$ can be represented by a $n\times m$ matrix with entries in $R$, which we call a *presentation matrix* for $M$. 

> [!Definition]
> An $R$-module $M$ is **finitely presented** if for some positive integers $m, n$ there is an exact sequence
> $$
> R^{n}\xrightarrow{\varphi}R^{m}\to M\to 0.
> $$
> Such a sequence is called a **presentation** of $M$, and the matrix of $\varphi$ is called a **presentation matrix** for $M$. 

We have just shown that finitely generated modules over Noetherian rings are finitely presented. 

For example, the $\mathbb{Z}$-module $\mathbb{Z}/5\mathbb{Z}$ is presented by the map $\mathbb{Z}\to \mathbb{Z}$ given by $1\mapsto 5$, or equivalently by the matrix $\begin{bmatrix}5 \end{bmatrix}$. 

With the basis of $R^{n}$ being $\{ x_{1}, \dots, x_{n} \}$, the columns of the presentation matrix of $M$ form a complete set of relations among the generators of $M$ (a set $S$ of relations is said to be **complete** if every relation is a linear combination of $S$ with coefficients in $R$). 

Let $A$ be the matrix of $\varphi$. We can edit $\varphi:R^{m}\to R^{n}$ in several ways while keeping $\text{coker}\,\varphi$ unchanged. We can change the bases for $R^{m}$ or $R^{n}$:

```latex
% latex-id: 7bf1-99b9-e37e-4224-ae6f
\begin{document}
% https://q.uiver.app/#q=WzAsNCxbMCwxLCJSXm0iXSxbMSwwLCJSXm0iXSxbMiwwLCJSXm4iXSxbMywxLCJSXm4iXSxbMSwyLCJcXHZhcnBoaSJdLFswLDEsIlxcdGF1Il0sWzIsMywiXFxzaWdtYSIsMCx7InN0eWxlIjp7InRhaWwiOnsibmFtZSI6ImFycm93aGVhZCJ9LCJoZWFkIjp7Im5hbWUiOiJub25lIn19fV0sWzAsMywiXFxzaWdtYV57LTF9XFx2YXJwaGlcXHRhdSIsMix7InN0eWxlIjp7ImJvZHkiOnsibmFtZSI6ImRhc2hlZCJ9fX1dXQ== 
\[\begin{tikzcd} & {R^m} & {R^n} \\ {R^m} &&& {R^n} \arrow["\varphi", from=1-2, to=1-3] \arrow["\sigma", tail reversed, no head, from=1-3, to=2-4] \arrow["\tau", from=2-1, to=1-2] \arrow["{\sigma^{-1}\varphi\tau}"', dashed, from=2-1, to=2-4] \end{tikzcd}\]
\end{document}
```
$$
\frac{R^{n}}{\text{im}\,\varphi}\cong\frac{R^{n}}{\sigma ^{-1}(\text{im}\,\varphi)}.
$$
Thus, if $R$ happens to be a *euclidean domain*, we can use [[Smith normal form#^5393e0]] to assume WLOG that $A$ is in Smith normal form. But this is not the whole story. Two different homomorphisms $\varphi_{1}$, $\varphi_{2}$ may have isomorphic cokernels, even if they act between different modules. Case in point: if $A$ has a column of zeroes, we can remove the column - the corresponding homomorphism $\varphi':R^{m-1}\to R^{n}$ clearly has the same cokernel as $\varphi$. Thus, we can assume WLOG that $A$ is of the form
$$
\begin{bmatrix}
d_{1} &  &  \\
 & \ddots &  \\
 &  & d_{r} \\
 & \mathbf{0}_{k\times r}
\end{bmatrix},
$$
where $k\geqslant 0$ and $d_{1}\ | \ \dots\ | \ d_{r}$. Finally, if $d_{1}$ is a unit, we have
$$
\frac{R^{n}}{\text{im}\,\varphi}=\frac{R^{n-1}\oplus R}{\text{im}\,\varphi'\oplus R}\cong\frac{R^{n-1}}{\text{im}\,\varphi'},
$$
where $\varphi':R^{m-1}\to R^{n-1}$ corresponds to the matrix obtained from $A$ by dropping column $1$ and row $1$. We can therefore assume that $d_{1}$ (and hence all $d_{i}$ for $1\leqslant i\leqslant r$) are nonunits. $\text{coker}\,\varphi$ now takes the form
$$
\text{coker}\,\varphi\cong \frac{R^{n}}{d_{1}R\oplus \dots \oplus d_{r}R}\cong \frac{R}{d_{1}R}\oplus\dots \oplus\frac{R}{d_{r}R}\oplus R^{k}.
$$
And that's it! We've shown that when $R$ is a euclidean domain, any finitely generated $R$-module $M$ can be expressed as a direct sum of cyclic modules. In fact, this result is true over any PID, as we will prove in the coming lectures.

[[#^2296e1]] summarizes our observations on cokernel preserving matrix manipulations. 

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

^2296e1

---

# Decomposition of finitely generated modules into torsion and free components

Our first step toward a classification theorem for modules over PIDs[^1] ([[LEC ALG4 11#^1be818]]) is showing that a finitely generated module over a PID is a direct sum of a free module and a 'torsion' module. 

We've [[LEC ALG4 2#^facc1b|already classified]] finitely generated free modules over integral domains, so it makes sense to begin by examining how a module can fail to be free. There are several ways this can happen, with having *torsion* being one of them. 

> [!Definition]
> Let $R$ be an integral domain, and $M$ an $R$-module.
> 
> 1. A nonzero element $x\in M$ is called a **torsion element** if $\{ x \}$ is linearly dependent, i.e, there exists nonzero $a\in R$ such that $ax=0$. 
> 2. We say $M$ is **torsion-free** if $M$ does not contain any torsion elements. 
> 3. We say $M$ is a **torsion module** if all elements of $M$ are torsion elements. 
> 4. $\text{tor}(M):=\{ x\in M:x \text{ is a torsion element} \}\cup \{  0 \}$. Note that $\text{tor}(M)$ is a submodule of $M$. 

^73f393

Note that free modules are torsion-free. 

> [!Lemma]
> Submodules and direct sums of torsion-free modules are torsion-free. Free modules over an integral domain are torsion-free. 

Here's another mechanism in which a module may fail to be free. 

> [!Example]
> Let $R=\mathbb{Z}[x]$, and let $I=(2, x)$. Then $I$ is not a free $R$-module. More generally, any nonprincipal ideal of an integral domain $R$ is a torsion-free module which is not free. Indeed, if $I$ were free, its rank would have to be $1$ at most, by [[LEC ALG4 2#^e70c6c]]; thus one element would suffice to generate $I$, and $I$ would be principal. 


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
> > Some general observations:
> > - By [[LEC ALG3 9#^97c00a]], $R$ is a UFD. Therefore, we can talk of prime factorizations of elements of $R$. 
> > - By [[LEC ALG4 4#^cc0b17]], $M$ is Noetherian.
> > 
> > We work by induction on the number $n$ of generators for $M$. If $n=0$, then $M=0$ and the result is trivially true. Assume $n> 0$ and fix a generator $x$ of $M$. We consider singly generated submodules of the form $Ry$ for elements $y\in M$, and we write $\Lambda=\{ yR:x\in yR \}$. By [[LEC ALG4 4#^368c71]].2, $\Lambda$ has a maximal element, say $N=Ry$. Note that $M/N$ is generated by $n-1$ elements. 
> > 
> > We claim that $M/N$ is torsion free. In other words, we must show that if $z\in M$ is such that $za\in N$ for some $a\in R$, then $z\in N$. Let $z$ be such an element, with $za=yb\in N$ for some $a, b\in R$. If $a$ and $b$ have any common prime factor $\pi$, we can write $a=a_{0}\pi$, $b=b_{0}\pi$, and $(za_{0}-yb_{0})\pi=0$. Since $M$ is torsion free, we must have $za_{0}=yb_{0}$. Therefore, we can assume WLOG that $a$ and $b$ are coprime. By [[LEC ALG3 9#^9467ec]], we can write $au+bv=1$ with $u, v\in R$. 
> > 
> > Write $y=1\cdot y=(au+bv)y=auy+avz=a(yu+zv)$. Thus, we have $yR\subseteq(yu+zv)R$. Since $(yu+zv)R$ is clearly a member of $\Lambda$, we deduce $yR=(yu+zv)R$ by the maximality of $N$. It follows that $yu+zv\in N$. Since $y\in N$, this yields $zv\in N$. So, $z=1\cdot z=auz+bvz=buy+bvz\in N$, and $M/N$ is torsion free. 
> > 
> > We have the short exact sequence
> > $$
> > 0\to N\hookrightarrow M\twoheadrightarrow M/N\to 0.
> > $$
> > By the induction hypothesis, $M/N$ is free, and hence [[LEC ALG4 3#^544d97|projective]]. By [[LEC ALG4 3#^d32b0c]] and @conradSPLITTINGSHORTEXACT 2.1, the sequence splits, and we have $M=N\oplus M/N$. Since $M$ is torsion free, $N$ is isomorphic to the free rank 1 $R$-module $R^{1}$. It follows that $M$ is free. 
> 
> > [!Proof]-
> > 
> > From @langAlgebra2002 3.7.3; Uses [[#^84b3e5]].
> > 
> > Let $Y=\{ y_{1}, \dots, y_{m} \}$ be a generating set for $M$. Let $V=\{ v_{1}, \dots, v_{n} \}$ be a maximal linearly independent subset of $Y$. For $y\in Y$, there exist elements $a, b_{1}, \dots, b_{n}\in R$, not all $0$, such that
> > $$
> > ay+\sum_{i=1}^{n} b_{i}v_{i}=0.
> > $$
> > Then $a\ne 0$, lest we contradict the linear independence of $V$. Hence $ay$ lies in the free submodule $R^{\oplus V}$ of $M$ generated by $V$. For each $j=1, \dots, m$, we can find $a_{j}\in R$, $a_{j}\ne 0$, such that $a_{j}y_{j}\in R^{\oplus V}$. Let $a=a_{1}\dots a_{m}$ be the product. Then $aM\subseteq R^{\oplus V}$ and $a\ne 0$. Since $M$ is torsion free, the map $a\mapsto ax$ is an injective homomorphism, and $M$ is isomorphic to its image under this map. We conclude form [[#^84b3e5]] that $M$ is free. 
> 

^fdca90

For example, $\mathbb{Q}$ is a non-free torsion free $\mathbb{Z}$ module. $\mathbb{Q}$ is not a finitely generated $\mathbb{Z}$ module. 

> [!Theorem]
> Let $R$ be a PID, and $M$ a finitely generated $R$-module. Then $M\cong\text{tor}(M)\oplus \frac{M}{\text{tor}(M)}$. 
> 
> > [!Proof]-
> > 
> > We have the short exact sequence
> > $$
> > 0\to\text{tor}(M)\hookrightarrow M\twoheadrightarrow M/\text{tor}(M)\to 0.
> > $$
> > Again, by [[#^4998de]] and [[#^fdca90]], $M/\text{tor}(M)$ is free, and hence [[LEC ALG4 3#^544d97|projective]]. By [[LEC ALG4 3#^d32b0c]] and @conradSPLITTINGSHORTEXACT 2.1, the sequence splits. 
> 

^1a540b

Thus, ==every finitely generated module is a direct sum of a finitely generated torsion module and a finitely generated free module==. Free modules have a simple structure that we understand. It remains to study finitely generated torsion modules ($\text{tor}(M)$ must be finitely generated since it is a submodule of $M$, which is Noetherian).

[^1]: Aluffi does a brilliant job of motivating why we're interested in PIDs here using free resolutions - see @aluffiAlgebraChapter02009 [p. 342 - 344], in particular VI.4.11. 
