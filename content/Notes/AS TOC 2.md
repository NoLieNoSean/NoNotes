# Problem 1

I will refer to the first and second languages by $L_{1}$ and $L_{2}$ respectively.

> [!Claim]
> $L_{1}=\{ a, b \}^{*}$.
> 
> > [!Proof]
> > We will induct on the length of words in $L_{1}$. $|\epsilon|_{a}=|\epsilon|_{b}$, so $\epsilon\epsilon=\epsilon\in L_{1}$. Assume all words in $\{ a, b \}^{*}$ of length $l$ are in $L_{1}$. Let $w\in \{ a, b \}^{*}$ be of length $l+1$. We can write $w$ as $\overline{z}z$, where $\overline{z}\in \{ a, b \}$, and $|z|=l$. By the induction hypothesis, we know $z\in L_{1}$, so there exist $x$ and $y$ such that $z=xy$ and $|x|_{a}=|y|_{b}$. If $\overline{z}=b$, we have $|bx|_{a}=|y|_{b}$ and $w=(\overline{z}x)y$, so $w\in L_{1}$. If $\overline{z}=a$, let $x=v\overline{v}$, where $\overline{v}\in \{ a, b \}$. Note that $|\overline{z}v|_{a}=|\overline{v}y|_{b}$ holds for both values of $\overline{v}$. Since $w=(\overline{z}v)(\overline{v}y)$, $w\in L_{1}$. 
> 

$L_{1}$ is regular, and hence recognizable.

> [!Claim]
> $L_{2}$ is not recognizable.
> 
> > [!Proof]
> > $\{ a^{n}\$\ | \ n\geq 0 \}$ is a fooling set. The distinguishing suffix between $a^{i}\$$ and $a^{j}\$$ is $b^{i}$: $a^{i}\$b^{i}\in L_{2}$, but $a^{j}\$b^{i}\notin L_{2}$.
> 

---

# Problem 2

Consider the following $n$ state DFA, where a $\Sigma$-transition denotes a transition for every letter of the alphabet:

![[Pasted image 20250907014314.png]]

This accepts all words of length between $n$ and $2n$; in fact, it accepts all words of length $\geq n-1$. However, $L(A)\ne\Sigma^{*}$, since it does not accept any words of length less than $n-1$. 

---

# Problem 3

I will use the abbreviation `a`=`ict`. The production rule for $G$ becomes
$$
\begin{align}
 & S\to aS\ | \ aSeS\ | \ s .
\end{align}
$$
$(a)$ Consider the word `aases`. This has two distinct parse trees in $P$:

![[AS TOC 2 2025-09-06 23.32.22.excalidraw.dark.png]]
%%[[AS TOC 2 2025-09-06 23.32.22.excalidraw.md|🖋 Edit in Excalidraw]], and the [[AS TOC 2 2025-09-06 23.32.22.excalidraw.light.png|light exported image]]%%

Thus, $G$ is ambiguous.

$(b)$ Let $G'$ be the language $(\{ R, M, U \}, \{ i, t, e, s, c \}, P', R)$, with the productions given by

$$
\begin{align}
 & R\to U\ | \  M \\
 & M\to s\ | \  aMeM \\
 & U\to aR\ | \  aMeU.
\end{align}
$$

Every `else` must pair with the most recent unmatched `if`. The grammar enforces that only matched statements $M$ can appear between the `if` and `else` of an `if-then-else` clause. Any unmatched sub-statements $U$ are forced to appear after the `else` (for example, this makes the second parse tree above invalid in $P'$). As a result, for any string in $L(G')$, there is only one valid parse tree, eliminating ambiguity. Since every word in $L(G)$ can be derived using the productions in $G'$ and vice versa, we have $L(G)=L(G')$.





