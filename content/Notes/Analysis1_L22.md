---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-9
time: 10:30
---
![[1728577113504.jpg]]

## Connected sets

### Definition

>[!Definition]
>For a metric space $X$, a *separation* of $X$ is a partition of $X=A\sqcup B$ into two proper subsets $A$ and $B=X\setminus A$ such that $A$ and $B$ are both open in $X$. 

Note that if $A$ and $B$ are both open in $X$, it follows that $A$ and $B$ are both closed in $X$. A set which is both open and closed in called a *clopen* set. So, $A$ and $B$ are clopen in $X$. 

>[!Definition]
>If $X$ has a separation, $X$ is called *disconnected*. If $X$ is not disconnected, $X$ is *connected*.

For example, $X=\mathbb{R}\setminus \{ p \}$ is disconnected because $X=(-\infty, p)\sqcup(p, \infty)$. 
### Characterization of connected sets in R

>[!Theorem]
>A nonempty subset $X\subset \mathbb{R}$ is connected $\iff$ (($p, q\in X$ and $p<x<q$ )$\implies$ $x\in X$), i.e, a connected set in $\mathbb{R}$ is either a singleton, an interval, a ray, or $\mathbb{R}$.

>**Proof of $\implies$**
>We will prove the contrapositive. Let $p<x<q$ with $x \not\in X$, $p, q\in X$. Let $A=X\cap(-\infty, x)$ and $B=X\cap(x, \infty)$. $X=A\sqcup B$. ❏
>
>**Proof of $\Longleftarrow$**
>Suppose $X=A\sqcup B$, with $A$ and $B$ nonempty, disjoint and open in $X$. Let $a\in A$, $b\in B$, and WLOG $a<b$. We know $[a, b]\subset X$. Let $c\equiv \inf \ [a, b]\cap B$. Clearly, $c\not\in A$, since then every neighborhood of $c$ must contain a point of $B$, making it impossible to find a neighborhood of $c$ in $A$ (Alternatively, $B$ being a closed set forces $c\in B$). $c\in B$ also leads to a contradiction, since B must contain a neighborhood of $c$, which in turn would contain an element smaller than $c$. $\Rightarrow\Leftarrow$ ❏

### Images of connected sets under continuous functions are connected

>[!Theorem]
>If $X$ is a connected metric space and $f:X\to Y$ is [[Analysis1_L13#Halfway through to a new definition of continuity|continuous]], $f(X)$ is connected.

>**Proof**
>Let $f(X)=A\sqcup B$, $A$, $B$ open in $f(X)$. This implies $X=f^{-1}(A)\sqcup f^{-1}(B)$. $\Rightarrow\Leftarrow$ ❏

### Intermediate value theorem

>[!Theorem]
>Let $f:[a, b]\to \mathbb{R}$ be continuous, WLOG $f(a)<c<f(b)$. Then, $\exists x\in(a, b)$ such that $f(x)=c$. 

>**Proof**
>From the previous theorem, we know $f([a, b])$ is connected. From the characterization of connected sets in $\mathbb{R}$, we know that $c\in f([a, b])$. ❏

>[!Important]
>If $f$ satisfies the conclusion of the intermediate value theorem ($\forall c$ such that $f(a)<c<f(b)$, $\exists x\in(a, b)$ such that $f(x)=c$), $f$ need not be continuous. For example, consider $f:[-\pi, \pi]\to \mathbb{R}$ defined by
>$$
>f(x)=
>\begin{cases}
>\sin\left( \frac{1}{x} \right) & x\in[-\pi, \pi]\setminus \{ 0 \} \\
>0 & x=0
>\end{cases}.
>$$

---
## Separated sets

>[!Definition]
>Subsets $P$ and $Q$ of $X$ are called *separated* if $\overline{P}\cap Q=\emptyset$ and $P\cap \overline{Q}=\emptyset$, where the closures are taken in $X$.

Note that $\overline{P}\cap \overline{Q}$ need not be empty.

>[!Theorem]
>$P$ and $Q$ are separated in $X$ $\iff$ $P\sqcup Q$ is a separation of $P\cup Q$.

>**Proof of $\implies$**
>Closure of $P$ in $P\cup Q$ = (Closure of $P$ in $X$) $\cap$ ($P\cup Q$), which is equal to $P$, since (Closure of $P$ in $X$) $\cap$ $Q$ = $\emptyset$. Thus, $P$ is closed in $P\cup Q$. Similarly, $Q$ is closed in $P\cup Q$. ❏
>
>**Proof of $\Longleftarrow$**
>We have to show that no limit point of $P$ in $X$ is contained in $Q$ (and vice versa). FTSOC, let $x\in X$ be a limit point of $P$, and $x\in Q$. This implies $x\in P\cup Q$, which implies $x\in P$, since $P$ is closed in $P\cup Q$. But, $P$ and $Q$ are disjoint. $\Rightarrow\Leftarrow$ 
>Similarly, no limit point of $Q$ in $X$ is contained in $P$. ❏

>[!Theorem] Corollary
>$P$ and $Q$ are separated in $X$ $\iff$ $P$ and $Q$ are separated in $Z\supset X$.

### Rudin's definition of connectedness

>[!Definition]
>$X\subset Z$ is *disconnected* if $X$ is a union of two nonempty separated sets.
>If $X$ is not disconnected, $X$ is *connected*.

From the previous theorem, this is equivalent to our definition in the beginning.

### Some theorems

>[!Theorem] Theorem 1
>If $A$ and $B$ form a separation of $X$ then any connected subset of $X$ is contained in $A$ or in $B$.

>**Proof**
>Let $C\subset X$ be connected. Let $A\sqcup B=X$ be a separation of $X$. FTSOC, assume $C\cap A\ne \emptyset$ and $C\cap B\ne \emptyset$. [[Analysis1_L15#Subspace topology|Since]] $A$ and $B$ are open in $X$, $C\cap A$ and $C\cap B$ are open in $C$. We can write $C=(C\cap A)\sqcup(C\cap B)$, i.e, $C$ is the disjoint union of two nonempty sets open in $C$. But this means $C$ is disconnected! $\Rightarrow\Leftarrow$ ❏

>[!Theorem] Theorem 2
>If a family of connected subsets of $X$ have a point in common, then their union is connected.

>**Proof**
>Let $\{ C_{\alpha} \}$ be a family of connected subsets of $X$, and let $p\in \bigcap_{\alpha}C_{\alpha}$. FTSOC, assume $C\equiv \bigcup_{\alpha}C_{\alpha}$ is disconnected, i.e, there exist non empty, disjoint $A$ and $B$ such that $A\sqcup B=C$ and $A$ and $B$ are open in $C$. WLOG, $p\in A$. Consider $q\in B$. There must exist $C_{\alpha}$ such that $p, q\in C_{\alpha}$. [[Analysis1_L15#Subspace topology|Since]] $A$ and $B$ are open in $C$, it follows that $A\cap C_{\alpha}$ and $B\cap C_{\alpha}$ are open in $C_{\alpha}$. We can write $C_{\alpha}=(A\cap C_{\alpha})\sqcup (B\cap C_{\alpha})$, i.e, $C_{\alpha}$ is the the disjoint union of two nonempty sets open in $C_{\alpha}$. But this means $C_{\alpha}$ is disconnected! $\Rightarrow\Leftarrow$ ❏

>[!Theorem] Theorem 3
>Let $E\subset X$. $E$ is connected $\iff$ $\overline{E}$ is connected.

>**Proof**
>FTSOC, suppose $\overline{E} = A \sqcup B$, where $A$ and $B$ are disjoint nonempty open subsets of $\overline{E}$. Then $E = (A \cap E) \sqcup (B \cap E)$. Note that $(A \cap E)$ and $(B \cap E)$ are open in $E$ as $A$ and $B$ are open in $\overline{E}$. Since $E$ is connected, one of $(A \cap E)$ or $(B \cap E)$ must be empty. WLOG, suppose $(B \cap E) = \emptyset$, which implies $A\supset E$.
>This means $B$ contains only points from $\overline{E} \setminus E$, and since $B$ is nonempty, it must contain at least one point from $\overline{E} \setminus E$. However, this implies $A$ does not contain all its limit points (as points in $B$ are limit points of $A$), contradicting the assumption that $A$ is closed. $\Rightarrow\Leftarrow$ ❏

### Connected components

Define $x\sim y$ if points $x$ and $y$ belong to a connected subset of $X$. This is an equivalence relation on $X$:
- $\sim$ is reflexive, since every singleton set is connected.
- $\sim$ is symmetric.
- $\sim$ is transitive, because of theorem 2.

>[!Theorem] Theorem 4
>The equivalence classes of $\sim$ are connected.

>**Proof**
>Pick any $x\in X$ and consider its equivalence class $C_{x}$. $x\sim y$ for all $y\in C_{x}$, i.e, $x, y\in S_{y}$ for some connected $S_{y}\subset X$ for all $y\in C_{x}$. Note that $S_{y}\subset C_{x}$ for all $y$. Thus, $C_{x}=\bigcup_{y\in C_{x}}S_{y}$. Also note that $x\in \bigcap_{y\in C_{x}}S_{y}$. So, from theorem 2, $C_{x}$ is connected. ❏

The equivalence classes of $\sim$ are hence called *connected components* of $X$.

>[!Theorem] Theorem 5
>Any connected subset of $X$ is contained in one of its connected components.

>**Proof**
>Let $E\subset X$ be connected, with $x, y\in E$ and $x\in C_{1}$ and $y\in C_{2}$, where $C_{1}$ and $C_{2}$ are connected components of $X$. Then, $x\not\sim y$, implying $E$ is not connected. $\Rightarrow\Leftarrow$ ❏

>[!Theorem] Theorem 6
>Connected components of $X$ are closed in $X$. 

>**Proof**
>Let $C$ be a connected component of $X$. From theorem 3, $\overline{C}$ must be connected. From theorem 5, $\overline{C}$ must then be contained in a connected component of $X$. This forces $C=\overline{C}$. ❏

The components are also open in $X$ if their number is finite, [[Analysis1_L14#Open and closed sets under intersections and unions|since finite unions of closed sets are closed]].

The connected components of $\mathbb{Q}$ are singletons, since for any interval $I=\mathbb{Q}\cap[a, b]$ one can find $c\not\in \mathbb{Q}$ such that $I=(I\cap(a-1, c))\sqcup (I\cap(c, b+1))$. Such a space is called *totally disconnected*.
