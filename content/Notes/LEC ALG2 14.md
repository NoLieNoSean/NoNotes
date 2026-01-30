---
id: "103"
date: March 2025
---
# Free abelian groups

Free abelian groups are obtained by stating the [[LEC ALG2 13#^1e47e5|universal property for free groups]] in the category $\textsf{Ab}$. 

> [!Definition]
> Given a non-empty set $S$ and a map $\theta:S\to F^{ab}$ into an abelian group $F^{ab}$, the pair $(F^{ab}, \theta)$ is said to be a **free abelian group** on the set $S$ if, for any function $\varphi:S\to G$ to any abelian group $G$, there is a ==unique== homomorphism $\overline{\varphi}:F^{ab}\to G$ such that $\varphi=\overline{\varphi}\circ\theta$. When $\theta$ is an inclusion, we call $\overline{\varphi}$ the unique extension of $\varphi$ to $F^{ab}$. 
> 
> ```latex
> 
> % latex-id: c2f1-083a-ccf0-4697-9edc
> \begin{document}
> \begin{tikzcd}
> S\ar[r, "\varphi"]\ar[d, "\theta"']&G\\
> F^{ab}\ar[ru, dotted, "\overline{\varphi}"']&\\
> \end{tikzcd}
> \end{document}
> ```
> 

^7b7f4a

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
> For every set $S$, $\mathbb{Z}^{\oplus S}$ is free abelian on $S$. 
> 
> > [!Proof]-
> > 
> > Same as that of [[#^ae5ef6]]; just use the universal property of coproducts.
> 

^4898a7

> [!Proposition]
> 1. If $|X_{1}|=|X_{2}|$, then $F^{ab}(X_{1})\cong F^{ab}(X_{2})$. 
> 2. If $F^{ab}(X_{1})\cong F^{ab}(X_{2})$, then $|X_{1}|=|X_{2}|$. 
> 
> Thus, $G$ is free abelian of rank $n$ iff it is isomorphic to $\mathbb{Z}^{\oplus n}$. We can now call $\mathbb{Z}^{\oplus n}$ as *the* free abelian group of rank $n$. 
> 
> > [!Proof]-
> > 
> > I'm pretty sure that the proofs of [[LEC ALG2 13#^0409cd]] and [[LEC ALG2 13#^cb59c5]] work verbatim here. 
> 

^b623d8

---

%%
# Classification of Finite abelian groups

 We will now classify all finite abelian groups. 

> [!Lemma]
> Every finite abelian group is the direct sum of its nontrivial [[LEC ALG2 11#^2553c3|Sylow subgroups]]. 
> 
> > [!Proof]-
> > 
> > Let $G$ be a finite abelian group, with $|G|=p_{1}^{a_{1}}\dots p_{n}^{a_{n}}$. Since every subgroup of $G$ is normal, $G$ as a unique Sylow $p_{i}$ subgroup $P_{i}$ for $1\leqslant i\leqslant n$ with $p_{i}^{a_{i}}$ elements. Note that $P_{1}\cap P_{2}=\{ e \}$. Thus, by [[LEC ALG2 6#^c43d3d]], $P_{1}+P_{2}=P_{1}\oplus P_{2}$. By [[LEC ALG2 6#^2f858f]], $|P_{1}+P_{2}|=p_{1}^{a_{1}}p_{2}^{a_{2}}$, so we have $(P_{1}+P_{2})\cap P_{3}=\{ e \}$. Proceeding in this manner, we get $P_{1}+P_{2}+\dots+P_{n}=P_{1}\oplus P_{2}\oplus\dots \oplus P_{n}$. Since $|P_{1}+P_{2}+\dots+P_{n}|=p_{1}^{a_{1}}p_{2}^{a_{2}}\dots p_{n}^{a_{n}}$, we have $P_{1}+P_{2}+\dots+P_{n}=G$. 
> 

Thus, our main task amounts to classifying abelian $p$-groups.  

%%

# The Invariant Factor Theorem

The key theorem is that a ==subgroup of a free abelian group is free abelian of rank not exceeding that of the bigger group==. 

> [!Theorem] Invariant factor theorem, @suryFreeGroupsBasics2010 [p. 14]
> If $H$ is a subgroup of a free abelian group $G$ of rank $n$, then $H$ is free abelian of rank $r\leqslant n$. Further, there exist bases $\{ e_{1}, \dots, e_{n} \}$ of $G$ and $\{ d_{1}e_{1}, \dots, d_{r}e_{r} \}$ of $H$ respectively where $d_{i}$ divides $d_{i+1}$ for $i< r$. The integers $d_{i}$ are uniquely determined up to sign and are called the **invariant factors** of $H$. 
> 
> > [!Proof]-
> > 
> > The proof is carried out by induction on $n$ using the division algorithm as follows. It is clear for $n=1$. Assume $n> 1$ and that the theorem holds for $m< n$. Corresponding to any basis for $G$, there is a positive integer with the property that it is the smallest positive integer that occurs as a coefficient in the expression of elements of $H$ in terms of this basis. Let $l_{1}$ be the smallest such integer with respect to all bases of $G$. Let $v_{1}, \dots, v_{n}$ be a corresponding basis for $G$ and $v\in H$ be the element such that
> > $$
> > v=l_{1}v_{1}+\sum_{i=2}^{n}a_{i}v_{i}\in H.
> > $$
> > Writing $a_{i}=q_{i}l_{1}+r_{i}$ with $0\leqslant r_{i}< l_{1}$, we get
> > $$
> > v=l_{1}\left( v_{1}+\sum_{i=2}^{n} q_{i}v_{i} \right)+\sum_{i=2}^{n} r_{i}v_{i}. 
> > $$
> > Let $w_{1}:= v_{1}+\sum_{i=2}^{n}q_{i}v_{i}$. Observe that $w_{1}, v_{2}, v_{3}, \dots, v_{n}$ is a basis of $G$. By the minimality of $l_{1}$, we must have $r_{i}=0$ for all $2\leqslant i\leqslant n$, and we have $v=l_{1}w_{1}$. 
> > 
> > Consider the subset $H_{0}$ of $H$ whose elements have coefficient of $w_{1}$ to be zero when written in terms of the basis $w_{1}, v_{2}, v_{3}, \dots, v_{n}$. Clearly, $H_{0}$ is a subgroup of $H$ and $H_{0}\cap \mathbb{Z}v=\{ 0 \}$. Also, if $h\in H$, we can write $h=b_{1}w_{1}+\sum_{i=2}^{n} b_{i}v_{i}$. If $b_{1}=m_{1}l_{1}+s_{1}$ with $0\leqslant s_{1}< l_{1}$, we have
> > $$
> > \begin{align}
> > h  - m_{1}v= s_{1}w_{1} +\sum_{i=2}^{n} b_{i}v_{i}. 
> > \end{align}
> > $$
> > Since $h-m_{1}v\in H$, $s_{1}=0$ by the minimality of $l_{1}$. Thus, every $h\in H$ can be expressed in the from
> > $$
> > h=\underbrace{ m_{1}v }_{ \in \mathbb{Z}v }+\underbrace{ \sum_{i=2}^{n} b_{i}v_{i} }_{ \in H_{0} }.
> > $$
> > [[LEC ALG2 10#^3ff374|It follows]] that $H= \mathbb{Z}v\oplus H_{0}$. 
> > 
> > Now, $H_{0}$ is contained in the subgroup $G_{0}=\bigoplus_{i=2}^{n}\mathbb{Z}v_{i}$. By the induction hypothesis, $G_{0}$ has a basis $w_{2}, \dots, w_{n}$ and there exists $r\leqslant n$ such that $H_{0}$ has a basis of the form $d_{2}w_{2}, \dots, d_{r}w_{r}$ with $d_{2}\ | \ d_{3}\ | \ \dots\ | \ d_{r}$. Clearly, therefore, $H$ itself has rank $r$ and $l_{1}w_{1}, d_{2}w_{2}, \dots, d_{r}w_{r}$ is a basis for $H$. We only have to show that $l_{1}\ | \ d_{2}$. 
> > 
> > Once again, write $d_{2}=cl_{1}+d$ with $0\leqslant d< l_{1}$ and notice that $l_{1}w_{1}+d_{2}w_{2}=l_{1}(w_{1}+cw_{2})+dw_{2}\in H$. Since $w_{1}+cw_{2}, w_{2}, w_{3}, \dots, w_{n}$ is a basis for $G$, $d$ is forced to be zero by the minimality of $l_{1}$, i.e, $l_{1}\ | \ d_{2}$. 
> 

^4973de

> [!Corollary] Structure theorem for finitely generated abelian groups
> A finitely generated abelian group is isomorphic to $\mathbb{Z}^{m}\times \mathbb{Z}_{d_{1}}\times\dots \times \mathbb{Z}_{d_{r}}$ for some $m\geqslant 0$ and $d_{i}$ dividing $d_{i+1}$. The integer $m$ as well as all the $d_{i}$'s (up to sign) are uniquely determined.  
> 
> > [!Proof]-
> > 
> > Let $G$ be a finitely generated abelian group with generating set $X$ with $|X|=n$. Let $F$ be the free abelian group on $X$. By [[#^7b7f4a]], we have a map $\psi:F\twoheadrightarrow G$ (which is surjective since $X$ generates $G$). Thus, we can write $G\cong F/\ker\psi$. Changing bases to the one prescribed by [[#^4973de]] and using [[LEC ALG2 6#^4c9a93]], we have
> > $$
> > \begin{align}
> > G\cong \frac{\mathbb{Z}^{\oplus n}}{d_{1}\mathbb{Z}\oplus d_{2}\mathbb{Z}\oplus\dots \oplus d_{r}\mathbb{Z}}\cong  \frac{\mathbb{Z}}{d_{1}\mathbb{Z}}\oplus\dots \oplus\frac{\mathbb{Z}}{d_{r}\mathbb{Z}}\oplus \mathbb{Z}^{\oplus (n-r)}.
> > \end{align}
> > $$

