---
tags:
  - TOC
date: 2025-10-05
time: 11:39
---
`Vasudeva S Nanjangud`
# Problem 1

## Part a

Let $n$ be given by the pumping lemma for CFLs. Choose $w$ of length $> n$ such that $w=aba^{2}b^{2}a^{3}b^{3}\dots$. Note that $w\#w\# \in  L$. By the pumping lemma, we can write $w\#w\#=uvxyz$ such that $|vxy|\leq n$ and $uv^{i}xy^{i}z\in L$ for all $i\geq 0$. 
1. If $vxy$ is a substring of $w$, taking $i=0$ yields a word that is not in $L$. 
2. If $\#\in x$, $\#\not\in v, y$ since $|vxy|\leq n$. If $y=\epsilon$, take $i=0$. Otherwise, taking $i=0$ yields a word of the form $w'\#w''\#$, where $w'\ne w''$ is forced by our choice of $w$ and the fact that $vy\ne\epsilon$. 

Thus, $L$ is not context free.
## Part b

Unlabelled arrows are of type $\epsilon, \epsilon\to\epsilon$. $\overline{\Sigma}$ represents $\{ a, b \}$. The transition $z, y\to\epsilon$ represents every transition of its type where $z\in \overline{\Sigma}$, $y\in \overline{\Sigma}$, and $z\ne y$.

![[AS TOC 3 2025-10-06 01.08.18.excalidraw|900]]



---
# Problem 2

## Part a

Let $M=(Q, \Sigma, \delta, q_{0}, F)$ be a DFA recognizing $R$. For $q\in Q_{0}$, let $M_{q}=(Q\times \{ 0, 1 \}, \Sigma, \delta', (q, 0), (q, 1))$, where
$$
\begin{align}
\delta'((p, 0), a) & = (\delta(p, a), 0)  &  a\in\Sigma\\
\delta'((p, 1), a) & = (\delta(p, a), 1)  &  a\in\Sigma \\
\delta'((f, 0), \epsilon) & =(q_{0}, 1) & f\in F. 
\end{align}
$$
Let
$$
R'=\bigcup_{q\in Q}L(M_{q}),
$$
where $L(M_{q})$ is the language of $M_{q}$. Since regular languages are closed under union, $R'$ is regular. Suppose $w\in\text{cyclic}(R)$ such that $w=xy$ and $yx\in R$. If $\hat{\delta}(q_{0}, y)=q$, it follows that $w\in L(M_{q})$, hence $w\in R'$. Conversely, if $w\in L(M_{q})$, $w$ can be expressed as $xy$ such that $\hat{\delta}(q, x)\in F$ and $\hat{\delta}(q_{0}, y)=q$, so $yx\in R$ and hence $xy\in\text{cyclic}(R)$. Thus, $\text{cyclic}(R)=R'$ is regular (and hence also context free).
## Part b

For context free $G$, $\text{cyclic}(G)$ is context free.

Let $\mathbf{G}=(\pmb{\textsf{V}}, \Sigma, \pmb{\textsf{P}}, S)$ be a context free grammar for a language $G$ in CNF (I assume $\epsilon \not\in G$).

Let $\pmb{\textsf{V}}':=\{ A^{\mathcal{R}}, A^{\mathcal{L}}\ | \ A\in \pmb{\textsf{V}} \}\cup \{ S_{0} \}$ be a collection of new non-terminals. For each pair of productions $A\to BC$ and $D\to AE$ in $\pmb{\textsf{P}}$, define productions
$$
\begin{align}
  A^{\mathcal{R}} & \to D^{\mathcal{L}}B, \\
 A^{\mathcal{L}} & \to CD^{\mathcal{L}}.
\end{align}
$$
For each pair of productions $A\to BC$ and $D\to EA$ in $\pmb{\textsf{P}}$, define productions
$$
\begin{align}
  A^{\mathcal{R}} & \to D^{\mathcal{R}}B, \\
 A^{\mathcal{L}} & \to CD^{\mathcal{R}}.
\end{align}
$$
For each production $S\to AB$ in $\pmb{\textsf{P}}$, define productions
$$
\begin{align}
S^{\mathcal{R}} & \to A,\\
S^{\mathcal{L}} & \to B.
\end{align}
$$
For each pair of productions $A\to BC$ and $C\to u$ in $\pmb{\textsf{P}}$ for some $u\in\Sigma$, define the production
$$
\begin{align}
S_{0}\to uA^{\mathcal{R}}.
\end{align}
$$
For each pair of productions $A\to BC$ and $B\to u$ in $\pmb{\textsf{P}}$ for some $u\in\Sigma$, define the production
$$
\begin{align}
S_{0}\to uA^{\mathcal{L}}.
\end{align}
$$
For each production $S\to u$ in $\pmb{\textsf{P}}$ for some $u\in\Sigma$, define the production $S_{0}\to u$.

Let $\pmb{\textsf{P}}'$ be the set of newly defined productions. Let $\mathbf{G}'=(\pmb{\textsf{V}}\cup \pmb{\textsf{V}}', \Sigma, \pmb{\textsf{P}}', S_{0})$. 

> [!Claim]
> $L(\mathbf{G}')=\text{cyclic}(G)$.
> 
> > [!Proof]
> > 
> > $(\subseteq)$ Suppose $w\in L(\mathbf{G}')$, and $u$ be the first letter of $w$. It is clear from the definition of $\pmb{\textsf{P}}'$ that the derivation tree of $w$ must have a chain of non-terminals $S_{0}, \tilde{A}_{1}, \tilde{A}_{2}, \dots, \tilde{A}_{n}$, where each $\tilde{A}_{i}\in \pmb{\textsf{V}}'$, $\tilde{A}_{i}=A_{i}^{\mathcal{R}}$ or $\tilde{A}_{i}=A_{i}^{\mathcal{L}}$ for some $A_{i}\in \pmb{\textsf{V}}$, and $A_{n}=S$. Denote the child of $\tilde{A}_{i}$ not in $\pmb{\textsf{V}}'$ by $B_{i}$. Here's an example:
> > 
> > ![[AS TOC 3 2025-10-05 19.34.21.excalidraw|300]]
> >
> > 
> > For $2\leq i\leq n$, depending on weather $\tilde{A}_{i}$ is $A^{\mathcal{R}}_{i}$ or $A_{i}^{\mathcal{L}}$, we have $A_{i}\to B_{i}A_{i-1}$ or $A_{i}\to A_{i-1}B_{i}$ in $\pmb{\textsf{P}}$ respectively. If $\tilde{A}_{1}=A_{1}^{\mathcal{R}}$, then $A_{1}\to B_{1}U\in \pmb{\textsf{P}}$, else if $\tilde{A}_{1}=A_{1}^{\mathcal{L}}$, then $A_{1}\to UB_{1}\in \pmb{\textsf{P}}$, where $U$ is such that $U\to u\in \pmb{\textsf{P}}$. Let $\alpha_{1}<\alpha_{2}<\dots<\alpha_{p}$ be such that $\tilde{A}_{\alpha_{i}}=A^{\mathcal{R}}_{\alpha_{i}}$. Similarly, let $\beta_{1}<\beta_{2}<\dots<\beta_{q}$ be such that $\tilde{A}_{\beta_{i}}=A^{\mathcal{L}}_{\beta_{i}}$. Then, we have the derivation
> > $$
> > S=A_{n}\Rightarrow B_{\alpha_{p}}B_{\alpha_{p-1}}\dots B_{\alpha_{1}}uB_{\beta_{1}}B_{\beta_{2}}\dots B_{\beta_{q}}
> > $$
> > in $\mathbf{G}$. It is clear from the derivation tree of $w$ that 
> > $$
> > S_{0}\Rightarrow uB_{\beta_{1}}B_{\beta_{2}}\dots B_{\beta_{q}}B_{\alpha_{p}}B_{\alpha_{p-1}}\dots B_{\alpha_{1}}
> > $$
> > is a derivation in $\mathbf{G}'$. Thus, we conclude that $w$ is a cyclic shift of a word in $L(\mathbf{G})$.
> > 
> > $(\supseteq)$ Suppose $w\in\text{cyclic}(G)$. Let $\overline{w}$ be the cyclic shift of $w$ such that $\overline{w}\in L(G)$. Suppose $w=xy$ and $\overline{w}=yx$. Let $u$ be the first letter of $x$, so $x=uz$. 
> > 
> > Let $A_{n}, A_{n-1}, \dots, A_{1}, A_{0}$ be the chain of nonterminals in the derivation tree of $\overline{w}$ such that $A_{n}=S$ and $A_{0}=U\to u$ is a production in $\pmb{\textsf{P}}$. Let the child of $A_{i}$ which is not $A_{i-1}$ be $B_{i}$. Set $\tilde{A}_{i}=A_{i}^{\mathcal{R}}$ if $A_{i}\to BA_{i-1}$ and $\tilde{A}_{i}=A^{\mathcal{L}}_{i}$ if $A_{i}\to A_{i-1}B$ for $i\geq 1$. Let $\alpha_{1}<\alpha_{2}<\dots<\alpha_{p}$ and $\beta_{1}<\beta_{2}<\dots<\beta_{q}$ be as defined previously. Then, it again holds that
> > $$
> > A_{n}\Rightarrow B_{\alpha_{p}}B_{\alpha_{p-1}}\dots B_{\alpha_{1}}uB_{\beta_{1}}B_{\beta_{2}}\dots B_{\beta_{q}}.
> > $$
> > Further, it is evident that $B_{\alpha_{p}}B_{\alpha_{p-1}}\dots B_{\alpha_{1}}\Rightarrow y$ and $B_{\beta_{1}}B_{\beta_{2}}\dots B_{\beta_{q}}\Rightarrow z$. However, we also have the valid derivation
> > $$
> > S_{0}\to u\tilde{A}_{1}\Rightarrow uB_{\beta_{1}}B_{\beta_{2}}\dots B_{\beta_{q}}B_{\alpha_{p}}B_{\alpha_{p-1}}\dots B_{\alpha_{1}}\Rightarrow uzy
> > $$
> > in $\mathbf{G}'$. Therefore, $w\in L(\mathbf{G}')$.

## Part c

Let $R=(abc)^{*}$. 
$$
R':=\text{permutation}(R)=\{ w:|w|_{a}=|w|_{b}=|w|_{c} \}.
$$
If $R'$ were context free, then $R'\cap(a^{*}b^{*}c^{*})=\{ a^{n}b^{n}c^{n}:n\geq 0 \}$ would be context free, a contradiction. Thus, $\text{permutation}(R)$ for regular $R$ is not context free in general.

## Part d

Every regular language is context free. Thus, by the previous problem, $\text{permutation}(G)$ is not context free. 