---
id: "103"
---
# Free abelian groups

Free abelian groups are obtained by stating the [[LEC ALG2 13#^1e47e5|universal property for free groups]] in the category $\textsf{Ab}$. 

> [!Definition]
> Given a non-empty set $S$ and a map $\theta:S\to F^{ab}$ into an abelian group $F^{ab}$, the pair $(F^{ab}, \theta)$ is said to be a **free abelian group** on the set $S$ if, for any function $\varphi:S\to G$ to any abelian group $G$, there is a ==unique== homomorphism $\overline{\varphi}:F^{ab}\to G$ such that $\varphi=\overline{\varphi}\circ\theta$. When $\theta$ is an inclusion, we call $\overline{\varphi}$ the unique extension of $\varphi$ to $F^{ab}$. 
> 
> ```latex
> % latex-id: a143-53a6-14a3-4ad1-90cd
> \begin{tikzcd}
> S\ar[r, "\varphi"]\ar[d, "\theta"']&G\\
> F^{ab}\ar[ru, dotted, "\overline{\varphi}"']&\\
> \end{tikzcd}
> ```
> 

Let's first tackle the finite case. Denote by $\mathbb{Z}^{\oplus n}$ the direct sum
$$
\underbrace{ \mathbb{Z}\oplus \dots \oplus \mathbb{Z} }_{ n\text{-times} }.
$$
[[Categorical notes on groups#^8e8d67|Recall]] that this group is the same as the product $\mathbb{Z}^{n}$ (however, it will be playing the role of a [[Category Theory Preliminaries (Presentation)#Coproducts|coproduct]] in what follows).

> [!Proposition]
> For $S=\{ 1, 2, \dots, n \}$, $(\mathbb{Z}^{\oplus n}, \theta)$ is a free abelian group on $S$, where $\theta(k)=(0, \dots, 0, 1, 0, \dots, 0)$ (the $1$ is in the $k$th coordinate). 
> 
> > [!Proof]-
> > 
> > Let $\varphi:S\to G$ be given. For $k\in S$, let $\varphi_{k}:\mathbb{Z}\to G$ be defined by $1\mapsto\varphi(k)$. Let $\iota_{i}:\mathbb{Z}\to \mathbb{Z}^{\oplus n}$ be the coproduct injections. Then, by the universal property of coproducts, there exists a unique map $\Phi:\mathbb{Z}^{\oplus n}\to G$ such that $\Phi \circ\iota_{k}=\varphi_{k}$ for all $1\leqslant k\leqslant n$. 
> > 
> > ```latex
> > % latex-id: bed3-e903-82a4-45d4-a1cc
> > \[\begin{tikzcd} && {\mathbb{Z}} \\ && {\mathbb{Z}} \\ S && \vdots && {\mathbb{Z}^{\oplus n}} && G \\ && {\mathbb{Z}} \\ && {\mathbb{Z}} \arrow["{\iota_1}"{description}, curve={height=-12pt}, from=1-3, to=3-5] \arrow["{\varphi_1}"{description}, curve={height=-12pt}, from=1-3, to=3-7] \arrow["{\iota_2}"{description}, curve={height=-6pt}, from=2-3, to=3-5] \arrow["{\varphi_2}"{description}, curve={height=-12pt}, from=2-3, to=3-7] \arrow[curve={height=-12pt}, from=3-1, to=1-3] \arrow[curve={height=-6pt}, from=3-1, to=2-3] \arrow[curve={height=-12pt}, from=3-1, to=3-5] \arrow[curve={height=6pt}, from=3-1, to=4-3] \arrow[curve={height=12pt}, from=3-1, to=5-3] \arrow["{\exists ! \Phi}"{description}, dashed, from=3-5, to=3-7] \arrow["{\iota_{n-1}}"{description}, curve={height=6pt}, from=4-3, to=3-5] \arrow["{\varphi_{n-1}}"{description}, curve={height=12pt}, from=4-3, to=3-7] \arrow["{\iota_n}"{description}, curve={height=12pt}, from=5-3, to=3-5] \arrow["{\varphi_{n}}"{description}, curve={height=12pt}, from=5-3, to=3-7] \end{tikzcd}\]   
> > ```
> > 
> > 

^ae5ef6

Now, let $S$ be any set. Recall that $H^{S}=\text{Hom}_{\textsf{Set}}(S, H)$ has a natural abelian group structure if $H$ is an abelian group; elements of $H^{S}$ are arbitrary set-functions $\alpha:S\to H$. [[Categorical notes on groups#^2cc108|Recall]] that in the general (non-finite) case, the coproduct is the subgroup of the product consisting of tuples with finite support. 

Thus, the coproduct $\bigoplus_{s\in S}H$, which we will denote by $H^{\oplus S}$, is given by
$$
H^{\oplus S}:=\{ \alpha:S\to H:\alpha(s)\ne e_{H}\text{ for only finitely many elements }s\in S \}.
$$
For $H=\mathbb{Z}$ the coproduct injections $\theta:S\to \mathbb{Z}^{\oplus S}$ are obtained by mapping $s\in S$ to the function $\theta_{s}:S\to \mathbb{Z}$ defined by
$$
\theta_{s}(x):=\begin{cases}
1 & x=s  \\
0 & x\ne s.
\end{cases}
$$

> [!Proposition]
> For every set $S$, $F^{ab}(S)\cong \mathbb{Z}^{\oplus S}$. 

^4898a7

The proof is the same as that of [[#^ae5ef6]]; just use the universal property of coproducts.