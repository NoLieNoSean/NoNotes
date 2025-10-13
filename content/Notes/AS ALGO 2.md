---
tags:
  - ALGO
date: 2025-10-02
time: 19:23
---
# Problem 1

$$
\begin{align}
 & \text{SortPoints}(A[1..n]): \\
 & \quad buckets\gets \text{repeat }n ~[~] \\
 & \quad \text{for }a\in A: \\
 & \quad \quad buckets[\lfloor a^{2}n \rfloor ]\gets a \\
 & \quad \text{for }bucket \in buckets \\
 & \quad \quad \text{InsertionSort}(bucket) \\
 & \quad \text{return }\text{concat}(buckets)
\end{align}
$$

The concentric circles of radii $0,\sqrt{ 1/n }, \sqrt{ 2/n }, \dots, \sqrt{ 1 }$ are such that $\pi r_{i+1}^{2}-\pi r_{i}^{2}=1/n$ for all $0\leq i\leq n-1$, and thus may delimit the buckets. Since the expected size of each bucket is $1$ due the uniform distribution hypothesis, each call to $\text{InsertionSort}$ takes constant time on average, and it follows that $\text{SortPoints}$ runs in $O(n)$ time.

---

# Problem 2

Let the hash values of the $n$ keys be independent and uniform in $\{1,\dots,m\}$. The probability that all $n$ are distinct is  

$$p(n,m)=\frac{m(m-1)\cdots(m-n+1)}{m^n}=\prod_{i=0}^{n-1}\left(1-\frac{i}{m}\right).$$  
Using the bound $1-x\le e^{-x}$ gives
$$
\begin{align}
p(n,m)=\prod_{i=0}^{n-1}\Big(1-\frac{i}{m}\Big)\le\prod_{i=0}^{n-1}\exp\Big(-\frac{i}{m}\Big)  
=\exp\Big(-\sum_{i=0}^{n-1}\frac{i}{m}\Big)
=\exp\Big(-\frac{n(n-1)}{2m}\Big),
\end{align}
$$
as required.

The exponent is approximately $(-n^2/(2m))$. If $n=\omega(\sqrt m)$ then $\frac{n^2}{2m}\to\infty$ and $p(n,m)\to0$ rapidly. Thus once $n$ passes order $\sqrt{ m }$ the probability of avoiding any collision drops quickly to zero.

---
# Problem 3

Edges have three properties: $e.1$ and $e.2$ are the vertices that $e$ connects, and $e.w$ is the weight of $e$. The edge connecting $x$ and $y$ (that is, $e$ such that $e.1=x$ and $e.2=y$ or vice versa) may be denoted by $e_{x, y}$. Suppose $T$ is a minimum spanning tree of $G$ and we decrease the weight of an edge not in $T$. $\text{FindMST}$ takes as input $T$ and the modified edge $e$.

$$
\begin{align}
 & \text{FindMST}(T, e): \\
 & \quad P\gets\text{concatenate}([e], \text{FindPath}(T, e.1, e.2)) \\
  \\
 & \quad maxWeightEdge\gets e\\ \\
 & \quad \text{for }p\in P:  \\
 & \quad \quad \text{if }p.w> maxWeightEdge.w: maxWeightEdge\gets p\\ \\
 & \quad \text{return }P+e-maxWeightEdge \\\\\\\\
 & \text{FindPath}(T, x, y): \\
 & \quad E\gets \text{Stack}()\\
 & \quad E.\text{push}(x)\\
 & \quad \text{for }v\in V(T):v.\text{path}\gets [~] , v.\text{visited}\gets \textsf{False} \\
 & \quad x.\text{visited}\gets \textsf{True}\\
 & \quad \text{While }E: \\
 & \quad \quad v\gets E.\text{pop}()  \\
 & \quad \quad \quad \text{for }w\in N(v)\text{ such that }w.\text{visited}=\textsf{False}: \\
 & \quad \quad \quad \quad w.\text{path}\gets v.\text{path}.\text{append}(e_{v, w})  \\
 &\quad \quad \quad \quad  \text{if }w=y: \text{return }w.\text{path}\\
 & \quad \quad \quad \quad E.\text{push}(w) \\
 & \quad \quad \quad \quad w.\text{visited}\gets \textsf{True}
 & \quad \quad  
\end{align}
$$

The algorithm works by finding the unique cycle $C$ in $T+e$, and deleting the maximum weighted edge $m$ to obtain a new tree $T'$.

Suppose $T'$ is not a minimum spanning tree in the new graph. There must exist another minimum spanning tree $T''$ with $w(T'')< w(T')=w(T)+e.w-m.w$. $T''$ must contain $e$, since if it didn't, it would contradict the minimality of $T$ with the original weights. 

Consider $T''-e$. It has two connected components. There must exist edges in $C$ which are not in $T''$, since $T''$ is a tree. Further, there must exist an edge $k$ in $C\setminus E(T'')$ which connects the two connected components of $T''$: If all the edges of $C$ connected vertices in the same connected component, it would imply $e.1$ and $e.2$ lie in the same connected component - a contradiction. Thus, $T''-e+k$ is a spanning tree. Now, 
$$
w(T''-e+k)= w(T'')-e.w+k.w\leqslant w(T'')-e.w+m.w< w(T).
$$
Since $T''-e+k$ does not contain $e$, this contradicts the minimality of $T$.

$\text{FindPath}$ runs in $O(V+E)$ time. Since $T$ is a tree, this reduces to $O(n+n-1)=O(n)$ for a tree with $n$ nodes. The maximum length of the cycle $P$ in $\text{FindMST}$ is $n$ for a graph $G$ with $n$ nodes. Thus, $\text{FindMST}$ runs in $O(n)$ time.


---

# Problem 4

Suppose for every cut $(A, B)$ of the graph $G$, there exists a unique minimum weight crossing edge $e$. Suppose $T$ is a minimum weight spanning tree which does not contain $e$. Consider the graph $T+e$. Since $T$ is a tree, $T+e$ must have exactly one cycle $C$ containing $e$. Clearly, $C$ must also have an $A, B$ crossing edge which is not $e$. Call this edge $e'$. Let $T'=T+e-e'$. $T'$ does not contain any cycles, since $C$ contained $e'$. If $e'$ connected the vertices $x$ and $y$, $C$ provides a path between $x$ and $y$ through $e$. Thus, $T'$ is connected. Since $e$ is the minimum weight $A, B$ crossing edge, $T'$ has lower weight than $T$, a contradiction. Thus, for every cut $A, B$, a minimum weight spanning tree must contain the minimum weight $A, B$ crossing edge. 

Suppose $G$ has $n$ vertices. Pick a point $x_{1}\in V(G)$ and consider the cut $\{ x_{1} \}, V(G)\setminus \{ x_{1}\}$. Let $e_{1}=(x_{1}, x_{2})$ be the minimum weight crossing edge. Any minimum weight spanning tree must contain $e_{1}$. Next, consider the cut $\{ x_{1}, x_{2} \}, V(G)\setminus \{ x_{1}, x_{2} \}$. Let $e_{2}$ be the minimum weight crossing edge, which again must be contained in any minimum weight spanning tree. Proceeding in this manner, we obtain $n-1$ edges $e_{1}, \dots, e_{n-1}$ which must be in every minimum weight spanning tree. Since any spanning tree of $G$ has exactly $n-1$ edges, this shows that the minimum weight spanning tree of $G$ is uniquely determined.

The converse is not true. Consider the following graph:

![[AS ALGO 2 2025-10-13 18.53.56.excalidraw.svg]]
%%[[AS ALGO 2 2025-10-13 18.53.56.excalidraw.md|🖋 Edit in Excalidraw]]%%

It has a unique minimum spanning tree, namely, the entire graph, but the cut displayed does not permit a unique minimum weight crossing edge.

---

# Problem 5

$$
\begin{align}
 & \text{FastMultiply}(x, y, n): \\
 & \quad \text{if }n=1: \text{return }x\cdot y \\
 & \quad m\gets \lfloor n/2 \rfloor  \\
 & \quad a\gets \lfloor x/2^{m} \rfloor  \\
 & \quad b\gets x\mod 2^{m}  \\
 & \quad c\gets \lfloor y/2^{m} \rfloor  \\
 & \quad d\gets y\mod 2^{m} \\
 & \quad e\gets\text{FastMultiply}(a, c, m) \\
 & \quad f\gets\text{FastMultiply}(b, d, m) \\
 & \quad g\gets\text{FastMultiply}(a-b, c-d, m) \\
 & \quad \text{return }2^{2m}e+2^{m}(e+f-g)+f
\end{align}
$$
$\text{FastMultiply}$ uses the identity
$$
(2^{m}a+b)(2^{m}+d)=2^{2m}ac+2^{m}(ac+bd-(a-b)(c-d))+bd.
$$
Multiplication by powers of $2$ can be accomplished by bitshifting in $O(n)$ time. Thus, we have the following recurrence:
$$
T(n)=3T(\lfloor n/2 \rfloor )+O(n).
$$
By the master theorem, $T(n)=O(n^{\log_{2}3})\approx O(n^{1.58})$. 

---
# Problem 6

Let $A$ be a fixed point on the circle. We will represent points on the circle by their clockwise angle from $A$, in the range $[0, 2\pi)$. A chord on the circle connecting points $p$ and $q$ is denoted by $(p, q)$. The chords are supplied as a list $L=[(a_{1}, b_{1}), (a_{2}, b_{2}), \dots, (a_{n}, b_{n})]$. The list is preprocessed such that $a_{i}< b_{i}$ for each $i$ and $a_{1}< a_{2}<\dots< a_{n}$, which can be done in $O(n\log n)$ time. For a chord $(p, q)$, we distinguish between its start point $p$ and its end point $q$.

$\text{FindIntersections}(L)$ accepts a preprocessed list of chords $L=[(a_{1}, b_{1}), (a_{2}, b_{2}), \dots, (a_{n}, b_{n})]$ and returns $(count, S)$, where $count$ is the number of intersections between the chords listed in $L$ and $S$ is $L$ sorted by its second coordinate. 

$$
\begin{align}
 & \text{FindIntersections}(L):  \\\\
 & \quad \text{if } |L|=1: \text{return }(0, \text{map}(\text{snd}, L))\\\\
 & \quad (L_{1}, L_{2})\gets \text{Split}(L, |L|/2) \\
 & \quad (n_{1}, S_{1})\gets \text{FindIntersections}(L_{1}) \\
 & \quad (n_{2}, S_{2}) \gets\text{FindIntersections}(L_{2}) \\
 & \quad  M\gets \text{Merge}(\text{map}(\text{fst},L_{2}), S_{1}, S_{2} )  \\\\
 & \quad count\gets 0, depth\gets0\\
 & \quad \text{for } m\in M: \\
 & \quad \quad \text{if }m\in \text{map}(\text{fst},L_{2}): depth=depth+1\\
 & \quad \quad \text{else if }m\in S_{2}: depth \gets depth -1 \\
 & \quad \quad \text{else if }m\in S_{1}: count \gets count+depth \\
 & \quad \text{return }(n_{1}+n_{2}+count, \text{Merge}(S_{1}, S_{2}))
\end{align}
$$

$\text{map}(\text{fst}(L_{2}))$ projects the tuples in $L_{2}$ to their start points: $\text{map}(\text{fst},[(a_{1}, b_{1}), (a_{2}, b_{2}), \dots, (a_{n}, b_{n})])=[a_{1}, a_{2}, \dots, a_{n}]$. 

**Analysis**

$\text{FindIntersections}(L)$ makes two recursive calls with inputs of size $|L|/2$, and spends $O(n)$ time doing non-recursive work: merging is $O(n)$, and the membership tests in the for loop can be achieved in $O(1)$ time by flagging the elements of $S_{1}$, $S_{2}$, and $\text{map}(\text{fst}(L_{2}))$ with markers prior to merging. Thus, the algorithm runs in $O(n\log n)$ time.

**Correctness**

The algorithm is trivially correct for $n=1$. For $k> 1$, suppose the algorithm is correct for all $n< k$. Then, the algorithm correctly computes $n_{1}$ and $n_{2}$, which are the number of pairs of intersecting chords such that both of them lie in $L_{1}$ and $L_{2}$ respectively. It remains to compute the number of intersecting pairs where one chord lies in $L_{1}$ and the other lies in $L_{2}$. Suppose $(a, b)\in L_{1}$ and $(c, d)\in L_{2}$ are two such chords. Given our preprocessing of $L$, this happens iff $a<c< b< d$. Thus, for each $(c, d)\in L_{2}$, it suffices to count the number of chords in $L_{1}$ which have their end point between $c$ and $d$. Equivalently, for each $(a, b)\in L_{1}$, we can count the number of $(c, d)\in L_{2}$ such that $c< b< d$. This is exactly what the for loop does. 

