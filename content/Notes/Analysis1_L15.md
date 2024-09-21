---
tags:
  - Lecture
  - ANA1
  - Processed
---
2024-09-18, Wednesday
1524

![[1726743654020.jpg]]
![[1726743654012.jpg]]
![[1726743654017.jpg]]

---
## Review

$V$ is [[Analysis1_L13#Open sets|open]] in $X$
$\iff$ $V$ is a union of open balls in $X$ 
$\iff$ $V$ is a neighborhood of each point in $V$ $\iff$ each point in $V$ is an interior point of $V$
$\iff$ $V$ is the interior of $V$.

$C$ is [[Analysis1_L13#Epilogue|closed]] in $X$
$\iff$ $X\setminus C$ is open in $X$
$\iff$ $X$ contains all of its [[Analysis1_L10#Limit points|limit points]]
$\iff$ $C$ is the closure of $C$. (Rudin, 2.27. Easy proof)

More stuff about open and closed sets:
- Every finite subset of a metric space $X$ is closed in $X$.
- Any metric space is an open and closed subset of itself
- In any metric space $X$, a singleton set is closed in $X$. 
- In any metric space $X$, a singleton set is open in $X$ iff its element is an isolated point of $X$. 

[[Analysis1_L14#Interior|Interior]] of $A$, denoted by $A\degree$, is the set of all interior points of $A$. It is defined as the union of all open sets contained within $A$. It is the largest open set contained within $A$. 
[[Analysis1_L14#Closure|Closure]] of $A$, denoted by $\overline{A}$, is the set $A$ along with all of its limit points. The set of all limit points of $A$ is denoted by $A'$. Thus, $\overline{A}=A \cup A'$. $\overline{A}$ is the intersection of all the closed sets containing $A$. $\overline{A}$ is the smallest closed set containing $A$.

Arbitrary unions of open sets are open. Finite intersections of open sets are open.
Arbitrary intersections of closed sets are closed. Finite unions of closed sets are closed.
[[Analysis1_L14#Open and closed sets under intersections and unions]] 

We have developed two ways to think about continuity - the epsilon-delta [[Analysis1_L11#Definition|definition]] and the [[Analysis1_L13#Halfway through to a new definition of continuity|theorem]] about inverse images under a continuous function of open sets being open sets. 

We observe a rather simple to see result that Rudin fails to mention:
### Continuous functions map convergent sequences to convergent sequences

>[!Theorem]
>Let $f:X\to Y$ be continuous on $X$. Let $(p_{n})$ be a sequence in $X$ which converges to $p\in X$. Then, $(f(p_{n}))$ must converge to $f(p)\in Y$.

>**Proof**
>If there is a sequence converging to $p$, then $p$ is a limit point of $X$. So, $f$ being continuous on $X$ [[Analysis1_L11#Case 1 $p$ is a limit point of $E$|implies]] $\lim_{ x \to p }f(x)$ must exist, and must equal $f(p)$. We know from the [[Analysis1_L11#Sequence criterion|sequence criterion]] that $\lim_{ x \to p }f(x)=f(p)$ means $\lim_{ n \to \infty }f(p_{n})=f(p)$. ❏

### Closed sets in $\mathbb{R}$ contain their suprema

A stray theorem form Rudin, which is fairly easy to see:

Rudin, 2.28

>[!Theorem]
>Let $E$ be a non-empty set of real numbers which is bounded above. Then, $\sup E\in \overline{E}$. Hence $\sup E\in E$ if $E$ is closed.

>**Proof**
>For any $\epsilon>0$, there must exist $e\in E$ such that $\sup E-\epsilon<e<\sup E$. Thus, $B_{\epsilon}(\sup E, E)\setminus \{ \sup E \}\ne \emptyset$, i.e, $\sup E$ is a limit point of $E$, and $\sup E\in \overline{E}$. ❏

---
## Algebra of continuous functions

Rudin, 4.9

>[!Theorem]
>Let $f, g:X\to \mathbb{C}$, where $X$ is a metric space. Then, $f+g$, $fg$, and $\frac{f}{g}$ (assuming $g(x)\ne 0$ for all $x$) are continuous on $X$. 

>**Proof**
>Every function defined on $X$ is continuous at isolated points of $X$. So we only need to consider the case when $p\in X$ is not an isolated point of $X$, i.e, a limit point of $X$. Since $f$ and $g$ are continuous, this gives us $\lim_{ x \to p }f(x)=f(p)$ and $\lim_{ x \to p }g(x)=g(p)$, which gives us $\lim_{ x \to p }(f(x)+g(x))=f(p)+g(p)$. ❏


---

## Vector valued functions whose components are continuous

Rudin, 4.10

>[!Theorem]
>Let $f_{1}, f_{2}, \dots, f_{k}:X\to \mathbb{R}$. Let $\mathbf{f}:X\to \mathbb{R}^{k}$ be defined by $\mathbf{f}(x)=(f_{1}(x), f_{2}(x), \dots, f_{k}(x))^{T}$. Then, $\mathbf{f}$ is continuous $\iff$ each $f_{i}$ is continuous.

>**Proof**
>Again, we only need to consider $p\in X$ which are limit points of $X$. We have $\lim_{ x \to p }\mathbf{f}(x)=\mathbf{f}(p)$, from the definition of continuity. Let $\epsilon>0$ be arbitrary. There must exist $\delta>0$ such that $d_{X}(x, p)<\delta$ implies $|\mathbf{f}(x)-\mathbf{f}(p)|<\epsilon \implies |f_{i}(x)-f_{i}(p)|<\epsilon$ for every $i$. Thus, $\lim_{ x \to p }f_{i}(x)=f_{i}(p)$ for every $i$. ❏

>[!Theorem]
>If $\mathbf{f}$ and $\mathbf{g}$ are continuous mappings of $X$ into $\mathbb{R}^{k}$, $\mathbf{f}+\mathbf{g}$ and $\mathbf{f}\cdot \mathbf{g}$ are continuous.

This follows from the two previous theorems.

---
## Examples of continuous functions

Rudin, 4.11

---
## Subspace topology

Rudin, 2.30

>[!Theorem]
>Suppose $Y\subset X$. A subset $E$ of $Y$ is open relative to $Y$ if  and only if $E=Y\cap G$ for some open subset $G$ in $X$.

>**Proof of $\implies$**
>Since $E$ is open relative to $Y$, each $p \in E$ should have an $r_{p}>0$ associated with it such that $B_{r_{p}}(p, Y)\subset E$. Consider the set
>$$
>\begin{align*}
>G=\bigcup_{p \in E} B_{r_{p}}(p, X).
>\end{align*}
>$$
>Clearly, $G$ is open in $X$ since it is a union of open balls in $X$. 
>Clearly, $E\subset G\cap Y$.
>$G\cap Y=\bigcup_{p\in E}(B_{r_{p}}(p, X)\cap Y)$ $=\bigcup_{p\in E}B_{r_{p}}(p, Y)\subset E$. 
>Thus, $E=G\cap Y$. ❏
>
>**Proof of $\Longleftarrow$**
>Let $E=Y\cap G$ for some open subset $G$ in $X$. For every $p \in E$, there exists $r_{p}>0$ such that $B_{r_{p}}(p, X)\subset G$ $\implies$ $B_{r_{p}}(p, X)\cap Y\subset G\cap Y$ $\implies$ $B_{r_{p}}(p, Y)\subset E$. ❏

>[!Theorem] Corollary
>Suppose $Y\subset X$. A subset $E$ of $Y$ is closed relative to $Y$ if  and only if $E=Y\cap C$ for some closed subset $C$ in $X$.

>**Proof**
>$E\subset Y$ is closed in $Y$ $\iff$ $Y\setminus E$ is open in $Y$ $\iff$ $Y\setminus E=Y\cap G$ for some $G$ open in $X$ $\iff$ $E=Y\setminus(Y\cap G)=Y\setminus G=Y\cap(X\setminus G)$, where $X\setminus G$ is closed in $X$. ❏

### Restrictions of continuous functions are continuous

>[!Theorem]
>Let $f:X\to Y$ be continuous. Then, the restriction of $f$ to every $A\subset X$ is also continuous.

>**Proof**
>We know that $f^{-1}$(open set in $Y$) is open in $X$. We need to show that $f^{-1}$(open set in $Y$)$\cap A$ is open in $A$. The result follows immediately from the previous theorem. ❏

---
## An introduction to compactness

Three versions of compactness are defined:
1. [[Subsequences#Sequential compactness|Sequential compactness]]
2. Limit point compactness
3. Open cover compactness

All three are equivalent for metric spaces. They are defined, and not equivalent for general topological spaces.

### Compactness is intrinsic 

Consider the following definitions for sequential compactness:
1. $X$ is called sequentially compact if every sequence in $X$ has a convergent subsequence (converging to a point in $X$, of course).
2. $X\subset D$ is called sequentially compact if every sequence in $X$ has a convergent subsequence converging to a point in $X$ (not something you would put in parenthesis here).

While (2) might seem more general at a cursory glance, notice that both definitions are equivalent, since considering $X$ in isolation in (1) and as a subset in (2) makes no difference. In other words, *context does not matter*. Contrast this with the properties of being open or closed, which depend on context. For example, $(0, 1)$ is open and closed in $(0, 1)$, open in $\mathbb{R}$, and neither in $\mathbb{R}^{2}$. This is true, as we will see, for the other two forms of compactness as well.

### Limit point compactness

>[!Definition]
>$X$ is called *limit point compact* if every infinite set in $X$ has a limit point (in $X$).

Notice that you can make an analogous definition to (2) in the previous section, and it would be equivalent to the one stated above.

Show that sequential compactness and limit point compactness are the same thing.