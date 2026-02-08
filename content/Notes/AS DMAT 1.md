---
id: "17"
date: January 2025
---
# 1

FTSOC, assume $\mathbb{R}$ is a finite dimensional vector space over $\mathbb{Q}$. By definition, this implies that $\mathbb{R}$ has a finite spanning set $(r_{1}, r_{2}, \dots, r_{n})$, i.e, for all $r\in \mathbb{R}$, $r=\sum q_{i}r_{i}, q_{i}\in \mathbb{Q}$. Now, $|\left\{  \sum q_{i}r_{i}\ | \ q_{i}\in \mathbb{Q}  \right\}|\leq |\mathbb{Q}^{n}|=\aleph_{0}$. But, $|\mathbb{R}|>\aleph_{0}$, due to Cantor's theorem. Thus, $\mathbb{R}$ is not a finite dimensional vector space over $\mathbb{Q}$. 

# 2

For each Y, draw line segments connecting the outward tips to form a triangle. Note that the Y divides the triangle into 3 triangles. Pick a point, $q_{i}=(p_{i}, r_{i})$, $q_{1}, q_{2}\in \mathbb{Q}$ in each triangle (this is possible since $\mathbb{Q}^{2}$ is dense in $\mathbb{R}^{2}$). Associate the Y with the set $\{ q_{1}, q_{2}, q_{3} \}$. If any two Ys have are associated with the same set of rational points, they must intersect. Thus, no two Ys are associated with the same set of rational  points. Thus, if $S$ is the set of all Ys on the plane, then $|S|\leq \mathbb{Q}^{3}=\aleph_{0}$, i.e, we can only place countably many Ys on the plane.

# 3
Consider the set $S\equiv\{ a-b\ | \ a, b\in A \}$. Note that $|S|\leq |A|^{2}=|A|$. Thus, $\mathbb{R}\setminus S\ne \emptyset$. Pick $r\in \mathbb{R}\setminus S$. Now, $(r+S)\cap S=\emptyset$, because otherwise we would have $r+a=b\implies r=b-a$ for $a, b\in S$. 

# 4

Assume there exists such a set $A$. consider two points $p$ and $q$ of $A$. For each $d\in D$, draw a circle of radius $d$ centered at $p$, and another centered at $q$. Let $C$ be the set of all intersection points between the two circles. The cardinality of $C$ is $|D\times D|=|D|=\aleph_{0}$. Note that any other point of $A$ must be in $C$.

# 5

Zorn's Lemma: In a partial order, if every chain has an upper bound, then there exists a maximal element. 

Axiom of Choice: For any set _X_ of nonempty sets, there exists a choice function _f_ that is defined on _X_ and maps each set of _X_ to an element of that set. 

Set $X$ be a collection of non empty sets. Let $S$ be the set of all functions $f$ defined on a subset of $X$ such that $f(x)\in x$. We know that $S$ is non empty, since we can always define $f$ on a finite subset of $X$. Define a partial order $\leq$ on $S$ by $f_{1}\leq f_{2}$ if $f_{1}\subseteq f_{2}$. Consider a chain $C$ in $(S, \leq)$. Let $f=\bigcup_{f_{i}\in C}f_{i}$. The domain of $f$ is a union of subsets of $X$, and hence is a subset of $X$. $f$ is well defined, since for each $x$ in the domain of $f$, $x\in f_{i}$ for some $f_{i}\in C$, and $C$ being a chain forces $f_{j}(x)=f_{i}(x)$ for all $j$ whenever $f_{j}(x)$ is defined. Additionally, $f(x)=f_{i}(x)\in x$. Thus, $f\in S$, and every chain has an upper bound. From Zorn's lemma, there must exist a maximal element $f'$ in $S$. If the domain of $f'$ is not $X$, it can be trivially extended to contradict the maximality of $f'$. Thus, the domain of $f'$ is $X$. Since $f\in S$, it satisfies the properties of a choice function.


# 6

Let $G=(V, E)$ be an infinite graph. Partition $G$ as $G=V_{f}\sqcup V_{\infty}$ where $V_{f}$ is the set of all points with finite neighborhoods and $V_{\infty}$ is the set of all points with infinite neighborhoods. 

If $|V_{f}|=\infty$, we can construct an infinite independent set: Pick $v_{1}\in V_{f}$, $v_{2}\in V_{f}\setminus N_{v_{1}}$, $v_{3}\in V_{f}\setminus N_{v_{1}}\setminus N_{v_{2}}$, and so on. If we run out of elements at any point, it would mean $V_{f}$ is a finite union of finite sets, which is not possible.

If $|V_{f}|$ is finite, $|V_{\infty}|$ must be infinite. Pick $v_{1}\in V_{\infty}$, and consider $G_{1}\equiv N_{v_{1}}$ as an infinite subgraph of $G$. We can again partition $G_{1}=V_{f, 1}\sqcup V_{\infty, 1}$. If $V_{f, 1}$ is infinite, we can construct an infinite independent set in $G_{1}$, which will also be an infinite independent set of $G$. If $V_{f, 1}$ is finite and $V_{\infty, 1}$ is infinite, we pick $v_{2}\in V_{\infty, 1}$ and consider $G_{2}\equiv N_{v_{2}}\cap N_{v_{1}}$ as an infinite subgraph of $G_{1}$. In this process, if we for some $n$ have $V_{f, n}$ to be finite, we can construct an independent set. If $V_{f, n}$ is never finite for all $n$, we get a sequence of points $v_{1}, v_{2}, v_{3}, \dots$, which form an infinite connected graph since $v_{2}, v_{3}, v_{4}\dots\in N_{v_{1}}$ and $v_{3}, v_{4}, \dots\in N_{v_{2}}$ and so on.

# 7

Suppose $X=(V, E)$ is an infinite graph that is not properly $k$-colorable for any positive integer $k$. It follows from the [[LEC DMAT 5#De Bruijn–Erdős theorem another application of Zorn's lemma|De Bruijn–Erdős theorem]] that for every positive integer $k$, $X$ has a finite subgraph $H_{k}$ which is not $k$ colorable. $H=\bigcup_{k\in \mathbb{N}}H_{k}$ is a countable subgraph of $X$ which is not $k$ colorable for any positive integer $k$.

# 8

Let α ≤ β be two infinite cardinals and let |B| = β. An α-covering of
B is a collection of pairwise disjoint sets {Ai | i ∈ I} such that |Ai| = α
for each i ∈ I and B = ⋃
i∈I Ai. Does B have an α-covering? Justify
answer with proof.

Define $P\equiv\{ (C, \mathbf{D}):C\subset B, \mathbf{D} \text{ is a alpha covereing of }C \}$. We know that $P$ is non empty, since subsets of $B$ of cardinality $\alpha$ have the trivial covering.
Define a partial order by $(C_{1}, \mathbf{D}_{1})\leq(C_{2}, \mathbf{D}_{2})$ if $C_{1}\subset C_{2}$ and $\mathbf{D}_{1}\subset \mathbf{D}_{2}$. 

Let $S$ be any chain in $(P, \leq)$.
$S=\{ (C_{i}, \mathbf{D}_{i}) : i\in I\}$.
For all $i, j\in I$, either $(C_{i}, \mathbf{D}_{i})\leq(C_{j}, \mathbf{D}_{j})$, or vice versa.
Let $C=\bigcup_{i\in I}C_{i}$ and $\mathbf{D}=\bigcup_{i\in I}\mathbf{D}_{i}$. It is easy to see that $\mathbf{D}$ is a  $\alpha$-covering for $C$. $(C, \mathbf{D})\in P$, so [[LEC DMAT 3#Zorn's lemma|Zorn's lemma]] is applicable. Let $(\hat{C}, \mathbf{\hat{D}})$ be the maximal element. 

If $\hat{C}=B$, we are done.
If $\hat{C}$ is a proper subset of $B$, two cases:
- $|B\setminus \hat{C}| <\alpha$: Change the covering by appending the elements in $B\setminus \hat{C}$ to some $\hat{\mathbf{D}}_{i}$. Does not create a contradiction.
- $|B\setminus \hat{C}| \geq\alpha$: you can take a subset of cardinality $\alpha$ of $B\setminus \hat{C}$ and add it to $\mathbf{\hat{D}}$, contradicting the maximality of $(\hat{C}, \mathbf{\hat{D}})$.

# 9
Bijective proof: We have to choose $k$ things from $n+k+1$ things, labeled $t_{1}, t_{2}, \dots, t_{n+k+1}$. We can choose to either pick $t_{n+k+1}$, or choose not to. In the latter case, we would have to pick $k$ things from $t_{1}, t_{2}, \dots, t_{n+k}$, which can be done in $\binom{n+k}{k}$ ways. If we chose to include $t_{n+k+1}$, we are next faced with the question of whether to include $t_{n+k}$. If we do not include $t_{n+k}$, we will have to choose the remaining $k-1$ things from $t_{1}, t_{2}, \dots, t_{n+k-1}$, the number of ways to do that being $\binom{n+k-1}{k-1}$. If we include $t_{n+k}$, we then have to look at the cases of $t_{n+k-1}$ being included and not being included. Continuing with this iterative process, we get
$$
\binom{n+k+1}{k}=\binom{n+k}{k}+\binom{n+k-1}{k-1}+\dots+\binom{n+1}{1}+\binom{n}{0}.
$$

Computational proof:
We know that 
$$
\binom nr+ \binom{n}{r+1}=\binom{n+1}{r+1}.
$$
If we rewrite $\binom{n}{0}$ as $\binom{n+1}{0}$, we see that $\binom{n+1}{0}+\binom{n+1}{1}=\binom{n+2}{1}$, and $\binom{n+2}{1}+\binom{n+2}{2}=\binom{n+3}{3}$, and so on.

# 10

$n=6k$
Let the number of subsets of size congruent to 0, 1, and 2 mod 3 be $S_{0}$, $S_{1}$, and $S_{3}$ respectively. Then, we have $S_{0}+S_{1}+S_{2}=2^{n}$. Also, 
$$
\begin{align}
1=(1+\omega)^{n}  = & \left(\binom{n}{0}+\binom{n}{3}+\dots+\binom{n}{n}\right)+ \\
	 & \left(\binom{n}{1}+\binom{n}{4}+\dots+\binom{n}{n-2}\right)\omega+ \\
	 & \left(\binom{n}{2}+\binom{n}{5}+\dots+\binom{n}{n-1}\right)\omega^{2}
\end{align}
$$
So, $S_{0}+\omega S_{1}+\omega^{2} S_{2}=1$. Additionally, $S_{1}=S_{2}$. Thus, we have
$$
\begin{align}
S_{0} +S_{1}(\omega+\omega^{2})= S_{0}-S_{1}=1
\end{align}
$$
Combining with $S_{0}+2S_{1}=2^{n}$, we have
$$
S_{0}= \frac{{2^{n}+2}}{3}, S_{1}=\frac{2^{n}-1}{3}, S_{2}=\frac{2^{n}-1}{3}.
$$

$n=6k+1$
Again, $S_{0}+S_{1}+S_{2}=2^{n}$. Here, $S_{0}=S_{1}$. Hence, $2S_{0}+S_{2}=2^{n}$. Also, 
$$
\begin{align}
(1+\omega)^{6k+1}=1+\omega & =S_{0}+S_{1}\omega+S_{2}\omega^{2} \\
 & =S_{0}(1+\omega)+S_{2}\omega^{2} \\
 & =(S_{0}-S_{2})(1+\omega) \\
\implies S_{0}=1+S_{2}
\end{align}
$$
So, 
$$
S_{0}= \frac{2^{n}+1}{3}, S_{1}=\frac{2^{n}+1}{3}, S_{2}=\frac{2^{n}-2}{3}
$$

$n=6k+2$
Here, $S_{0}=S_{2}$. $2S_{0}+S_{1}=2^{n}$. 
$$
\begin{align}
(1+\omega)^{6k+2} =\omega & =S_{0}+S_{1}\omega+S_{2}\omega^{2} \\
 & =S_{0}(1+\omega^{2})+S_{1}\omega \\
\implies S_{1}=1+S_{0}
\end{align}
$$
So
$$
S_{0}=\frac{2^{n}-1}{3}, S_{1}=\frac{2^{n}+2}{3}, S_{2}=\frac{2^{n}-1}{3}
$$

$n=6k+3$
Again, $S_{1}=S_{2}$. But, $S_{1}=S_{0}+1$.
$$
S_{0}=\frac{2^{n}-2}{3}, S_{1}=\frac{2^{n}+1}{3}, S_{2}=\frac{2^{n}+2}{3}.
$$
