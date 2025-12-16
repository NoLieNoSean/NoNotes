---
id: "31"
---


# Products and Coproducts

$\textsf{Gp}$ has products, and the product of two groups $G, H$ is supported on the product $G\times H$ of the underlying sets. Componentwise multiplication defines a group structure on $G\times H$, and it is easy to verify that this group is actually a product in $\textsf{Gp}$ ( @aluffiAlgebraChapter02009 II.3.4). 

$\textsf{Gp}$ also has coproducts, to be dealt with later.

The nice thing about $\textsf{Ab}$ is that coproducts in $\textsf{Ab}$ coincide with products.

> [!Proposition]
> If $G$ and $H$ are abelian groups, then the product $G\times H$ satisfies the [[Intro to Category Theory#Coproducts|universal property for coproducts]] in $\textsf{Ab}$.
> 
> > [!Proof]-
> > We need to show that $(G\times H, i_{G}, i_{H})$ is initial in $\textsf{C}^{G, H}$. Let $(A, \varphi_{G}, \varphi_{H})\in \textsf{C}^{G, H}$. We need a unique homomorphism $\varphi$ which makes the following diagram commute:
> > 
> > ```latex
> > 
> > % latex-id: 4c6a-06a5-9234-4652-8f84
> > \begin{tikzcd}
> > G\ar[rd, "i_G"]\ar[rrd, bend left, "\varphi_{G}"]&&\\
> > &G\times H\ar[r, "\varphi"]&A\\
> > H\ar[ru, "i_H"']\ar[rru, bend right, "\varphi_{H}"']&&&
> > \end{tikzcd}
> > 
> > ```
> > We are forced to define $\varphi(g, e_{H})\equiv\varphi_{G}(g)$ and $\varphi(e_{G}, h)\equiv\varphi_{H}(h)$ for all $g\in G$ and $h\in H$. Since we require $\varphi(g, h)=\varphi(g, e_{H})\varphi(e_{G}, h)$, our definitions determine $\varphi$ over its entire domain. So, we have exactly one candidate for $\varphi$. It it a homomorphism?
> > $$
> > \begin{align}
> > \varphi(a, b)\varphi(c, d) & =\varphi_{G}(a)\varphi_{H}(b)\varphi_{G}(c)\varphi_{H}(d) \\
> >  & \overset{!}{=}\varphi_{G}(a)\varphi_{G}(c)\varphi_{H}(b)\varphi_{H}(d) \\
> >  & =\varphi_{G}(ac)\varphi_{H}(bd) \\
> >  & =\varphi(ac, bd) \\
> >  & =\varphi((a, b)(c, d)).
> > \end{align}
> > $$
> > The marked equality is true since $A$ is abelian.
> > 
> 

^8e8d67

When working as a coproduct, the product $G\times H$ of two abelian groups is often called their **direct sum** and is denoted $G\oplus H$. 

# Homomorphisms

> [!proposition] @aluffiAlgebraChapter02009 II.6.6
> Let $\varphi:G\to G'$ be a homomorphism. Then the inclusion $i:\ker\varphi\to G$ is final in the category of group homomorphisms $\alpha:K\to G$ such that $\varphi \circ\alpha$ is the trivial map.
> 
> ```latex
> 
> % latex-id: 3ab4-f37f-0263-4304-b3d7
> \begin{tikzcd}
> K\ar[rd, "\exists!\overline{\alpha}"']\ar[rr, bend left, "0"]\ar[r, "\alpha"']&G\ar[r, "\varphi"']&G'\\
> & \ker\varphi \ar[u, hook, ""]
> \end{tikzcd}
> 
> ```
> 

In other words, every group homomorphism $\alpha:K\to G$ such that $\varphi \circ\alpha$ is the trivial homomorphism factors uniquely though $\ker\varphi$. Note that $\overline{\alpha}:K\to \ker\varphi$ is just $\alpha$ with restricted target.
## Monomorphisms and epimorphisms

> [!Proposition] @aluffiAlgebraChapter02009 II.6.12
> The following are equivalent:
> 1. $\varphi$ is a [[Intro to Category Theory#^8cec61|monomorphism]];
> 2. $\ker\varphi=\{ e_{G} \}$
> 3. $\varphi:G\to G'$ is injective (as a set-function);
> 
> > [!Proof]-
> > $(1)\implies(2)$: Consider the parallel compositions
> > $$
> > \ker\varphi \underset{e}{\overset{i}{\rightrightarrows}}G\overset{\varphi}{\to}G',
> > $$
> > where $i$ is in the inclusion and $e$ is the trivial map. Both $\varphi \circ i$ and $\varphi \circ e$ are the trivial map; since $\varphi$ is a monomorphism, this implies $i=e$, which implies $(2)$.
> 

^79d9ee

The analog of the above statement holds true for epimorphisms: *a homomorphism $\varphi:G\to H$ is an epimorphism iff it is surjective*. However, Aluffi claims proving epimorphism $\implies$ surjective in $\textsf{Gp}$ is cumbersome, and only provides a proof in $\textsf{Ab}$. He does so by defining cokernels in $\textsf{Ab}$, the universal property for which is obtained by reversing the arrows in the universal property of kernels:

[!Definition]
Let $\varphi:G\to G'$ be a group homomorphism. $\text{coker}\,\varphi$ is the group equipped with a homomorphism $\pi:G'\to \text{coker}\,\varphi$ which is initial with respect to all morphisms $\alpha$ such that $\alpha \circ\varphi=0$.
```latex

% latex-id: 118b-3721-d5e5-43d5-976a
\begin{tikzcd}
G\ar[rr, bend left, "0"]\ar[r, "\varphi"']&G'\ar[r, "\alpha"']\ar[d, two heads, "\pi"]&L\\
&\text{coker}\,\varphi \ar[ur, "\exists!\overline{\alpha}"']&
\end{tikzcd}

```
Cokernels exist in $\textsf{Ab}$ because $\mathrm{Im}~\varphi \triangleleft G'$. The condition that $\alpha \circ\varphi'$ is trivial says that $\mathrm{Im}~\varphi \subseteq \ker\alpha$, and hence
$$
\frac{G'}{\mathrm{Im}~\varphi}\cong \text{coker}\,\varphi
$$
satisfies the universal property ($\overline{\alpha}$ is unique because of [[LEC ALG2 4#^43c508|the mapping property of quotient groups]]). 

We can now state the analog of [[#^79d9ee]]:

> [!Proposition] @aluffiAlgebraChapter02009 II.8.18
> Let $\varphi:G\to G'$ be a homomorphism of abelian groups. The following are equivalent:
> 1. $\varphi$ is an epimorphism;
> 2. $\text{coker}\,\varphi$ is trivial;
> 3. $\varphi:G\to G'$ is surjective (as a set function).
> 
> > [!Proof]-
> > $(1)\implies(2)$: Consider the parallel compositions
> > $$
> > G\overset{\varphi}{\to}G' \underset{\pi}{\overset{e}{\rightrightarrows}}\text{coker}\,\varphi,
> > $$
> > where $\pi$ is the canonical projection. Both $\pi \circ\varphi$ and $e\circ\varphi$ are trivial, which implies $\pi=e$, which implies $(2)$.

^1e7b58

The problem in $\textsf{Gp}$ is that $\mathrm{Im}~\varphi$ is not guaranteed to be normal in $G'$. However, cokernels may still be defined in $\textsf{Gp}$: the universal property is satisfied by $G'/N$, where $N$ is the smallest normal subgroup of $G'$ containing $\mathrm{Im}~\varphi$. But [[#^1e7b58]] fails, because the implication $(2)\implies(3)$ fails.