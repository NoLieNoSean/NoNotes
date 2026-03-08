---
id: "386"
date: 2026-01-14
time: 11:38
tags:
  - ALG4
  - Lecture
  - Processed
---
# Projective modules

> [!Proposition]
> Let $\alpha:M\to N$ be a surjective $R$-module homomorphism, and let $\varphi:F\to N$ be a $R$-module homomorphism with $F$ [[LEC ALG4 2#^552c68|free]]. Then, there exists an $R$-module homomorphism $\tilde{\varphi}:F\to M$ such that the following diagram commutes. 
> ```latex
> 
> % latex-id: c16c-5573-b828-44a5-ae94
> 
> 
> \[\begin{tikzcd} & F \\ M & N \arrow["{\exists \tilde \varphi}"', dashed, from=1-2, to=2-1] \arrow["\varphi", from=1-2, to=2-2] \arrow["\alpha"', two heads, from=2-1, to=2-2] \end{tikzcd}\]
> 
> ```
> 
> > [!Proof]-
> > 
> > Let $\{ e_{i}:i\in I \}\subseteq F$ be a basis of $F$. For all $i\in I$, let $x_{i}\in M$ be such that $\alpha(x_{i})=\varphi(e_{i})$ (possible since $\alpha$ is surjective). Extend the map $e_{i}\mapsto x_{i}$ to an $R$-module homomorphism $\tilde{\varphi}:F\to M$. It is now clear that $\alpha \circ    \tilde{\varphi}=\varphi$. 
> > 
> 

^eba5ed

Modules with the property described in [[#^eba5ed]] are called projective modules. 

> [!Definition] Projective modules
> A $R$-module $P$ is said to be **projective** if for all surjective $\alpha:M\twoheadrightarrow N$ and $R$-module homomorphisms $\varphi:P\to N$ there exists an $R$-module homomorphism $\tilde{\varphi}:P\to M$ such that the following diagram commutes:
> 
> ```latex
> % latex-id: 7b87-0621-9d7f-4880-b2da
> \begin{tikzcd}
> & P \ar[dl, dashed, "\exists\tilde{\varphi}"']\ar[d, "\varphi"]\\
> M\ar[r, two heads, "\alpha"']&N
> \end{tikzcd}
> ```

^544d97

Clearly, free modules are projective. 

> [!Warning]
> [[#^eba5ed]] and [[#^544d97]] are not describing universal properties! As is evident by the proof of [[#^eba5ed]], $\tilde{\varphi}$ does not have to be unique. 


> [!Corollary]
> Let $\alpha:M\twoheadrightarrow P$ be a surjective $R$-module homomorphism with $P$ projective. Then there exists an $R$-module homomorphism $\beta:P\to M$ such that $\alpha \circ \beta=\text{id}_{P}$. 

^d32b0c


> [!Proposition]
> Let $P$ be a projective module. Let $\alpha:M\twoheadrightarrow P$ be a $R$-module homomorphism, and $\beta$ be supplied by [[#^544d97]] such that $\alpha \circ\beta=\text{id}_{P}$. Then,
> 1. $\alpha$ is surjective and $\beta$ is injective. 
> 2. $M=\ker\alpha\oplus\text{im}\,\beta$. 
> 
> > [!Proof]-
> > 
> > $(1)$ is just set theory. 
> > 
> > $(2)$ Let $x\in M$. Write $y=\beta\alpha(x)$. Since $\alpha(x-y)=0$, we have $x-y\in \ker\alpha$. So, $x$ can be expressed as $x=(x-y)+y$. Next, let $x\in\ker\alpha \cap\text{im}\,\beta$ and let $y\in P$ be such that $x=\beta(y)$. Then, $0=\alpha(x)=\alpha\beta(y)=y$. Thus, $x=0$. We are done by [[LEC ALG2 10#^3ff374]]. 
> 

^c05711

> [!Proposition]
> 1. If $P$ is projective, there exists $Q$ such that $P\oplus Q\cong F$ for free $F$. 
> 2. If $P\oplus P'$ is projective, then $P$ and $P'$ are projective. 
> 
> Thus, $P$ is projective iff it is a direct summand of a free module. 
> 
> > [!Proof]-
> > 
> > $(1)$ follows from [[LEC ALG4 2#^85f1ce]] and [[#^c05711]]. 
> > 
> > For $(2)$, Let $\varphi:P\to N$ and $\alpha:M\twoheadrightarrow N$ be given as in [[#^544d97]]. The trivial map from $P'$ to $N$ together with $\varphi$ determines a map $\varphi':P\oplus P'\to N$ such that $\varphi=\varphi'\circ i_{P}$. Since $P\oplus P'$ is projective, there exists $\tilde{ \varphi}:P\oplus P'\to M$ such that $\varphi'=\alpha \circ  \tilde{\varphi}$. Thus, $\alpha \circ(\tilde{\varphi}\circ i_{P})=(\alpha \circ  \tilde{\varphi})\circ i_{P}=\varphi'\circ i_{P}=\varphi$. Thus, $P$ is projective. 
> > ```latex
> > % latex-id: cdcb-e1c0-e19d-4e4e-90f4
> > \[\begin{tikzcd} && P \\ & {P\oplus P'} \\ M & N \arrow["{i_P}"', from=1-3, to=2-2] \arrow["\varphi", curve={height=-18pt}, from=1-3, to=3-2] \arrow["{\tilde \varphi}"', dotted, from=2-2, to=3-1] \arrow["{\varphi'}"', dashed, from=2-2, to=3-2] \arrow["\alpha"', two heads, from=3-1, to=3-2] \end{tikzcd}\]
> > ```
> > A symmetric argument shows that $P'$ is projective. 
> 

---
# Rank of a free module, à la Kummini

Here's how Kummini proved [[LEC ALG4 2#^428c11]]⇒. 

We first prove the invariance of basis cardinality for vector spaces. 

> [!Proposition]
> Let $V$ be a $k$-vector space with bases $X$ and $Y$. Then $|X|=|Y|$. 
> 
> > [!Proof]-
> > 
> > We have seen the case when $|X|$ and $|Y|$ are finite in [[LEC ALG1 8#^d11967]]. The case of one being finite and the other being infinite is ruled out by [[LEC ALG1 8#^6a3bec]]. So, assume $|X|$ and $|Y|$ are infinite. 
> > 
> > For all $x\in X$, there exists a finite subset $Y_{x}$ of $Y$ such that $x\in \langle Y_{x} \rangle$. Therefore, $\bigcup_{x\in X}Y_{x}$ generates $V$. Since no proper subset of $Y$ can generate $V$, we have
> > $$
> > Y=\bigcup_{x\in X}Y_{x}.
> > $$
> > Since each $Y_{x}$ is finite, basic set theory says $|Y|\leqslant |X|$. Reverse the argument to obtain $|X|=|Y|$. 
> 

^1fd2eb

> [!Proposition]
> Let $F$ be a free $R$-module with [[LEC ALG4 2#^59c172|bases]] $X$ and $Y$. Then $|X|=|Y|$. 
> 
> > [!Proof]-
> > 
> > Let $I$ be an ideal of $R$. Define $IF$ to be the submodule of $F$ generated by $\{ rm:r\in I, m\in F \}$:
> > $$
> > \begin{align}
> > IF:=\left\{  \sum_{i=1}^{n} r_{i}m_{i}:n\in \mathbb{N}  , r_{i}\in I, m_{i}\in F\right\}.
> > \end{align}
> > $$
> > Observe that $F/IF$ is an $R/I$-module (this is not true in general; see [[#^b14fe9]]): If $r_{1}+I=r_{2}+I$, 
> > $$
> > \begin{align}
> > (r_{1}+I)(m+IF)=(r_{1}m+IF)=(r_{2}m+IF)\overset{!}{=}(r_{2}+I)(m+IF). 
> > \end{align}
> > $$
> > For $r\in R$ and $m\in F$, we may denote $r+I$ by $\overline{r}$ and $m+IF$ by $\overline{m}$. 
> > 
> > 
> > ---
> > 
> > We now claim that $\overline{X}:=\{ \overline{x}:x\in X \}$ is a basis of $F/IF$ as an $R/I$-module. 
> > 
> > Firstly, if $Z\subseteq F$ generates $F$ as an $R$-module, then $\{ \overline{z}:z\in Z \}$ generates $F/IF$ as an $R$-module, and hence as an $R/I$-module: For $m+IF\in F/IF$, with a little abuse of notation we can write
> > $$
> > \begin{align}
> > m & =\sum_{i=1}^{n} r_{i}z_{i} & z_{i}\in Z \\
> > \implies m+IF & =\sum_{i=1}^{n} r_{i}(z_{i}+IF) \\
> >  \implies m+IF & =\sum_{i=1}^{n} (r_{i}+I)(z_{i}+IF).
> > \end{align}
> > $$
> > Thus, $\overline{X}$ generates $F/IF$ as an $R/I$-module. 
> > 
> > It remains to show that $\overline{X}$ is linearly independent. Fix $n\in \mathbb{N}$. Let $r_{i}\in R$ for $1\leqslant i\leqslant n$, $x_{i}\in X$ for $1\leqslant i\leqslant n$, such that
> > $$
> > \sum_{i=1}^{n} \overline{r}_{i}\overline{x}_{i}=0.
> > $$
> > Equivalently, $\sum_{i=1}^{n} r_{i}x_{i}\in IF$. Thus, $\sum_{i=1}^{n}r_{i}x_{i}$ can be expressed in the form $\sum_{i=1}^{k'}s'_{i}m_{i}$ with $s'_{i}\in I$ and $m_{i}\in F$. Replacing each $m_{i}$ with its expression in the basis $X$, we get
> > $$
> > \begin{align}
> > \sum_{i=1}^{n} r_{i}x_{i}=\sum_{i=1}^{k} s_{i}\tilde{x}_{i}. &  & \tilde{x}_{i}\in X
> > \end{align}
> > $$
> > Since $X$ is a basis, we have $n=k$, and (WLOG) $\tilde{x}_{i}=x_{i}$ and $s_{i}=r_{i}$. Thus, $r_{i}\in I$, and hence $\overline{r}_{i}=0$ for all $i$[^2]. 
> > 
> > ---
> > 
> > Using [[LEC ALG3 6#^5e9db5]], let $I$ be a [[LEC ALG3 4#^a53c12|maximal ideal]] of $R$. This makes $R/I$ a field and $F/IF$ an $R/I$-vector space. We have shown $\overline{X}$ and (similarly defined) $\overline{Y}$ are bases of $F/IF$ over $R/I$. The final result follows from [[#^1fd2eb]]. 
> 

^f64b92

[^2]: Notice the claim this is implicitly proving: no element of $X$ lies in $IF$. If this were true, say $x'=im\in X$ for some $i\in I$ and $m\in F$, then $x'=im=i\left( \sum_{i=1}^{n}r_{i}x_{i} \right)$ for some $x_{1}, \dots, x_{n}\in X$. On the RHS, $i$ divides every coefficient. Thus, moving $x'$ to the RHS yields a trivial linear combination. 


> [!Remark]
> 
> Every $R/I$ module is naturally an $R$-module: $(a, x)\mapsto \overline{a}x$. In general, if $\varphi :R\to S$ is a ring map and $M$ is an $S$-module, we can give $M$ an $R$-module structure by $(a, x)\mapsto \varphi(a)x$. This is the unique module structure for $M$ as an $R$ module which is compatible with $\varphi$. 
> 
> The converse is generally false. For example, $R$ considered an an $R$-module cannot have a compatible $R/I$-module structure for any nonzero ideal $I$. If $y\in I$ is nonzero, then $(y, 1_{R})$ evaluates to $y$ under the $R$-module structure, while the action of $y+I=0_{R/I}\in R/I$, forced to be the trivial action in any $R/I$-module structure on $R$, yields $(y+I, 1_{R})=0_{R}$. 
> 
> However, if $M$ is an $R$-module such that for all $x\in M$ and for all $a\in I$, $ax=0$[^1], then the prescription
> $$
> \begin{align}
>  & R/I\times M\to M \\
>  & (\overline{a}, x)\mapsto ax
> \end{align}
> $$
> makes $M$ a compatible $R/I$-module.

^b14fe9

[^1]: i.e, $I\subseteq\text{Ann}_{R}(M)$ - as is the case in the proof of [[#^f64b92]]


Let $M_{1}$ and $M_{2}$ be $S$-modules. Let $\varphi:R\to S$. When can we say $M_{1}\otimes_{R}M_{2}=M_{1}\otimes_{S}M_{2}$?

