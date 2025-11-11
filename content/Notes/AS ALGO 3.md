---
id: "336"
date: 2025-10-29
time: 11:24
tags:
  - ALGO
---
# Problem 1

## Part a

For $0\leqslant i\leqslant m$ and $0\leqslant j\leqslant n$, define 
$$
\begin{align}
DP[i][j]=\text{shortest common supersequence of }A[1..i]\text{ and }B[1..j],
\end{align}
$$
where substrings defined by invalid ranges are considered to be the empty string.

The natural recurrence is
$$
\begin{align}
 & DP[i][ j]=\begin{cases} 
i & j=0 \\
j & i=0\\
DP[i-1][ j-1]+1 & A[i]=B[j], i\ne0, j\ne0 \\
1+\min\{ DP[i][ j-1],DP[i-1][ j]  \} & \text{otherwise}.
\end{cases}
\end{align}
$$
> [!Proof]
> The cases for $i=0$ and $j=0$ are clear. Suppose $S$ is the SCS of $A[1..i]$ and $B[1..j]$. Suppose $S$ has length $l$. If $A[i]=B[j]=:c$, then $S[l]$ must be $c$. $S[1..l-1]$ must be the SCS of $A[1..i-1]$ and $B[1..j-1]$; if it weren't, we would be able to construct a shorter common subsequence of $A[1..i]$ and $B[1..j]$ by the usual cut-and-paste argument. Thus, $DP[i][ j]=DP[i-1][ j-1]+1$. If $A[i]\ne B[j]$, then $S[l]$ must be either $A[i]$ or $B[j]$, and the same argument yields either $S[1..l-1]$ is the SCS of $A[1..i-1]$ and $B[1..j]$ or the SCS of $A[1..i]$ and $B[1..j-1]$ respectively.

$$
\begin{align}
 & \textsf{SCS}(A[1..m], B[1..n]):  \\
 & \quad DP\gets \text{newArray}(m, n)\\
 &  \quad \text{for }i\in[0..m]: \\
 & \quad \quad \text{for }j\in[0..n]: \\
 & \quad \quad \quad \text{if }i=0: DP[i][j]\gets j \\
 & \quad \quad \quad \text{else if }j=0: DP[i][j]\gets i \\
  & \quad \quad \quad \text{else if }A[i]==B[j]: DP[i][j]\gets DP[i-1][j-1]+1 \\
 & \quad \quad \quad \text{else } DP[i][j]\gets 1+\min\{ DP[i][ j-1],DP[i-1][ j]  \} \\
 & \quad \text{return }DP[m, n]
\end{align}
$$

The algorithm runs in $O(mn)$ time. 

## Part b

The problem of finding the longest bitonic subsequence $(\textsf{LBS})$ can be reduced to the problem of finding the longest increasing subsequence $(\textsf{LIS})$:

$$
\textsf{LBS}(X[1..n])=\max_{2\leqslant i\leqslant n-2}\{\textsf{LIS}(X[1..i])+\textsf{LIS}(\textsf{reverse}(X[i+1..n]))\}.
$$
Below, we implement an algorithm for $\textsf{LIS}$ which runs in $O(n\log n)$ time.

$\textsf{pos}(B, a)$ returns the largest index $i$ of $B$ such that $B[i]< a$. 
$$
\begin{align}
 & \textsf{LIS}(A[1..m]): \\
 & \quad B\gets [] \\
 & \quad \text{for }a\in A[1..m]: \\
 & \quad \quad p\gets \textsf{pos}(B, a) \\
 & \quad \quad \text{if }p==B.\text{length}: B.\text{append}(a) \\
 & \quad \quad \text{else } : B[p+1]\gets a \\
 & \quad \text{return }B.\text{length}
\end{align}
$$
> [!Claim]
> In the course of its execution, if the algorithm places $A[i]$ in position $b$ of $B$, there exists an increasing subsequence of $A[1..i]$ of length $b$ ending in $A[i]$. 
> 
> > [!Proof]
> > This is clear for $b=1$. Suppose the claim is true for $b> 1$. Suppose the algorithm places $A[i]$ in position $b+1$. There exists $k< i$ such that $A[k]< A[i]$ and the algorithm placed $A[k]$ in position $b$. By the induction hypothesis, there exists an increasing subsequence of length $b$ ending in $A[k]$; appending $A[i]$ gives one of length $b+1$. 
> 

It is also clear that if $A[i_{1}], A[i_{2}], \dots, A[i_{k}]$ is any increasing subsequence of $A$, the length of $B$ at the end of execution will be greater than or equal to $k$. Thus, it follows that $B.\text{length}$ is the length of the longest common subsequence.

This allows $\textsf{LBS}$ to run in $O(n^{2}\log n)$ time. 

$$
\begin{align}
 & \textsf{LBS}(X[1..n]):  \\
 & \quad A, B\gets []\\
 & \quad \text{for } i\in[2..n-2] \\
 & \quad \quad A[i]\gets \textsf{LIS}(X[1..i]) \\
 & \quad \quad B[i]\gets \textsf{LIS}([n-i+1..n]) \\
 & \quad ans\gets 0 \\
 & \quad \text{for }i\in[2, n-2]: ans\gets \textsf{max}(ans, A[i], B[n-i]) \\
 & \quad \text{return }ans
\end{align}
$$

## Part c
$$
\begin{align}
 & \textsf{LOS}(X[1..n]): \\ 
 & \quad up, down\gets 1\\
 & \quad \text{for }i\in[2..n]: \\
 & \quad \quad \text{if }X[i]> X[i-1]:up\gets down+1 \\
 & \quad \quad \text{if }X[i]< X[i-1]:down\gets up+1 \\ \\
 & \quad \text{return }\max(up, down)
\end{align}
$$

It is clear that there exists an alternating subsequence of $X[1..n]$ of length $\textsf{LOS}(X[1..n])$. Since $\textsf{LOS}$ counts the number of oscillations, a longer oscillating subsequence cannot exist. The algorithm runs in $O(n)$ time.

## Part d

A sequence $(X_{i_1},X_{i_2},\dots,X_{i_k})$ is convex iff its consecutive differences are strictly increasing:  
$$
\Delta_t := X_{i_{t+1}}-X_{i_t}\quad\text{and}\quad \Delta_1<\Delta_2<\cdots<\Delta_{k-1}.
$$
So we must find the longest subsequence of indices whose consecutive differences are strictly increasing.

Define $D[a][b]=X[b]-X[a]$ for $(a<b)$ and $D[a][a]=-\infty$. Let  
$$
\text{DP}[a][b] = \text{length of the longest convex subsequence whose last two indices are }a<b.
$$
Then the natural recurrence is
$$
\begin{align}
 & \text{DP}[a][a] = 1  & \text{(base)} \\\\

 & \text{DP}[a][b] = 1+\max_{k\leqslant a,\ D[k][a]<D[a][b]}\text{DP}[k][a] & (a< b)
\end{align}
$$

^ec29af

**The algorithm** 

$\textsf{zip}$ accepts two arrays $A$ and $B$ of size $n$ and returns an array $C$ of size $n$ such that $C[i]=(A[i], B[i])$. $\textsf{SortBySlot2}$ accepts the output of $\textsf{zip}$ and sorts it such that the values in the second slot are increasing. $\textsf{pos}(F, c)$ returns the maximum index $i$ in $F$ such that $F[i][1]< c$ using binary search. 

$$
\begin{align}
 & \textsf{ConvSubseq}(X[1..n]): \\
 & \quad D\gets\textsf{newArray}(n, n) \\\\
 & \quad \text{for }i\in[1..n-1]: \\
 & \quad \quad \text{for }j\in[i+1..n]: \\
 & \quad \quad \quad D[i, j]\gets X[j]-X[i] \\
 \\
 & \quad \text{for }i\in[1..n]: D[i, i]\gets-\infty \\
 \\
 & \quad DP\gets \textsf{newArray}(n, n) \\
 & \quad \text{for }i\in[1..n]: DP[i, i]\gets 1  \\
 & \quad \text{for }i\in[1..n-1]: \\
 & \quad \quad F\gets \textsf{SortBySlot2}(\textsf{zip}(DP[1..i,i ], D[1..i, i])) \\
 & \quad \quad \text{for }j\in[2..i]: F[j][0]\gets \textsf{max} (F[j][0], F[j-1][0])\\ 
 & \quad \quad \text{for }j\in[i+1, n]: DP[i][j]\gets F[\textsf{pos}(F, D[i][j])][0]+1 \\\\
 & \quad \text{return }\textsf{max}(DP)
\end{align}
$$

**Correctness**

> [!Claim]
> After the outer loop has processed all indices $(a'\le a)$, for every $(k\le a)$ the table entry $(DP[k,a])$ equals the length of the longest convex subsequence whose last two indices are $(k<a)$ (Also $(DP[a,a]=1)$). 

  
We initialize $(DP[1,1]=1)$. The inner loop for $a=1$ constructs $DP[1,j]$ for $j>1$. The list $F$ contains only the sentinel pair $(1,-\infty)$, so `pos(F, D[1,j])` picks that sentinel and sets $DP[1,j]=1+1=2$, which is correct.

**Inductive step.** Suppose the invariant holds for all $a'<a$. Consider fixed $a$. We form the list $F$ of pairs $(DP[k,a],D[k,a])$ for $k=1,\dots,a$ (including the sentinel $k=a$ with $DP(a, a)=1$ and $DP[a,a]=- \infty$). We sort $F$ in increasing order of the second slot, and take prefix maxima over the first slot, that is, we set $F[i][0]$ to be $\max_{1\leqslant j\leqslant i}F[j][0]$. Thus `pos(F, D[a,b])` finds the maximal $DP[k,a]$ among indices $k<a$ with $D[k,a] < D[a,b]$. The assignment
$$
DP[a][b]= F[\textsf{pos}(F, D[a][b])][0]+1
$$
for each $b> a$ exactly implements the recurrence in [[#^ec29af]]. Therefore after processing index $a$, the invariant holds for all pairs ending at $a$. 

**Complexity**

- Precomputing differences: $O(n^2)$. 
- For each $a\in[1..n]$ we sort $a$ pairs in $O(a\log a)$, totaling $O(n^{2}\log n)$.
- For each $a$ we then answer $n-a$ queries `pos` by binary search on $F$, with an overall complexity of $O(n^{2}\log n)$.

Thus, the algorithm runs in $O(n^{2}\log n)$.

---
# Problem 2

Let P be a set of n points evenly distributed on the unit circle, and let S be a set of m line segments with endpoints in P. The endpoints of the m segments are not necessarily distinct; n could be significantly smaller than 2m. (a) Describe an algorithm to find the size of the largest subset of segments in S such that every pair is disjoint. Two segments are disjoint if they do not intersect even at their endpoints. (b) Describe an algorithm to find the size of the largest subset of segments in S such that every pair is interior-disjoint. Two segments are interior-disjoint if their intersection is either empty or an endpoint of both segments. (c) Describe an algorithm to find the size of the largest subset of segments in S such that every pair intersects. (d) Describe an algorithm to find the size of the largest subset of segments in S such that every pair crosses. Two segments cross if they intersect but not at their endpoints. 

Let $P=[1..n]$ be the list of points and $S[1..m]$ be the list of edges. Represent edges by objects with properties $\text{left}$, $\text{right}$, and $\text{id}$, where $e.\text{left}, e.\text{right}\in P$, $e.\text{left}< e.\text{right}$, and $e.\text{id}\in[1..m]$ for all edges $e\in S$. 
## Part a

Define
$$
\begin{align}
DP[i][j]=\text{largest independent set of edges in }S\text{ with both end points in }[i..j]
\end{align}
$$
for $1\leqslant i< j\leqslant n$, with $DP[i][i]=0$. 

The recurrence is (any out of bounds access returns 0)
$$
\begin{align} \\
DP[i][j] & =0 \quad  (j\leqslant i)\\
DP[i][j] & =\max\left\{ DP[i][j-1], 1+\max_{e\in S, e.\text{right}=j,i\leqslant e.\text{left}\leqslant j-1} DP[i, e.\text{left}-1]+DP[e.\text{left}+1, j-1]\right\} .
\end{align}
$$

The edges are preprocessed to obtain a list $E$, where $E[j]$ is a list of all edges with $e.\text{right}=j$. This can be done in $O(m)$ time.

$$
\begin{align}
 & \textsf{MaxIndSet}(P, S, E): \\
 & \quad DP\gets \text{newArray}(n, n) \\
 & \quad DP[i][j]\gets 0\text{ for }j\leqslant  i  \\
 & \quad \text{for } l\in[1..n-1]: \\
 & \quad \quad \text{for }i\in[1..n-l]: \\
 & \quad \quad \quad j\gets i+l \\
 & \quad \quad \quad ans\gets DP[i][j-1] \\
 & \quad \quad \quad \text{for }e\in E[j]: \text{if }i\leqslant e.\text{left}\leqslant j-1:  & (*)\\
 & \quad \quad \quad \quad  ans\gets \textsf{max}(ans, 1+DP[i, e.\text{left}-1]+DP[e.\text{left}+1, j-1]) \\ 
 & \quad \quad \quad DP[i][j]\gets ans\\\\
 & \quad \text{return }DP[1][n]
\end{align}
$$
Edge $e$ is accessed for the computation of $DP[i][j]$ with $e.\text{right}=j$. Thus, the for loop $(*)$ takes $O(mn)$ time overall. Filling in the DP array takes $O(n^{2})$ time, so the total running time is $O(n^{2})+O(mn)=O(mn)$.

## Part b

We only need to slightly modify the definitions from part a. Let $E[i][j]$ be $1$ if there exists an edge with $e.\text{left}=i$ and $e.\text{right}=j$, and $0$ otherwise.
$$
\begin{align} \\
DP[i][j] & =0 \quad  (j\leqslant i)\\
DP[i][j] & =E[i][j]+\max\left\{ DP[i][j-1], \max_{e\in S, e.\text{right}=j,i+1\leqslant e.\text{left}\leqslant j-1} DP[i, e.\text{left}]+DP[e.\text{left}, j]\right\} .
\end{align}
$$
The algorithm is essentially the same as in part a, and runs in $O(mn)$ time. 
## Part d

Let $E[1..n-1]$ be a 2d array such that $E[i]$ is an array containing all edges $e$ such that $e.\text{left}=i$ sorted in *decreasing* order of the property $\text{right}$. Assign $e.\text{id}$ to be the index of $e$ in $\text{flatten}(E)$ for all $e\in S$. 

Let $N[1..n-1]$ be an array such that $N[i]$ is the number of edges $e$ satisfying $e.\text{left}\leqslant i$.   

Let $F[2..n]$ be a 2d array such that $F[i]$ is an array containing all edges $e$ such that $e.\text{right}=i$ sorted in *decreasing* order of the property $\text{left}$. 

$$
\begin{align}
 & \textsf{MaximumClique}(N, F): \\
 &\quad  ans\gets 0\\
 &  \quad \text{for }i\text{ in }[1..n-1]: \\
 & \quad \quad ans=\text{max}(ans, \textsf{LIS}(\textsf{map}(e\to e.\text{id}, \textsf{filter}(e\to e.\text{id}\leqslant N[i], \textsf{flatten}(F[i+1..n])))) )\\
 & \quad \text{return }ans
\end{align}
$$

The preprocessing requires $O(m\log m)$ time. $\text{MaximumClique}(N, F)$ runs in $O(mn\log m)$ time.

**Correctness**

We wish to encode the information provided about the circle as an enumeration $e_{1}, \dots, e_{m}$ of the edges and a string $s$ over the alphabet $\{ \vdash_{i}, \dashv_{i}:i\in[1..m] \}$ such that
1. Each symbol in the alphabet appears exactly once, and $\vdash_{i}$ appears before $\dashv_{i}$. 
2. $e_{i}$ and $e_{j}$ with $e_{i}.\text{left}\leqslant e_{j}.\text{left}$ intersect(interiors intersect, no shared endpoints) iff $\vdash_{i}\vdash_{j}\dashv_{i}\dashv_{j}$ is a subsequence of $s$
3. $e_{i}.\text{left}<e_{j}.\text{left}$ iff $\vdash_{i}$ appears before $\vdash_{j}$ in $s$
4. $e_{i}.\text{right}< e_{j}.\text{right}$ iff $\dashv_{i}$ appears before $\dashv_{j}$ in $s$.

Let the enumeration be given by the $\text{id}$ property of the edges assigned above. Construct $s$ like so:
$$
\begin{align}
 & T\gets [] \\
 & \text{for }i\in[1..n]: \\
 & \quad temp \gets \textsf{""} \\
 & \quad \text{for }e\in F[i]: temp.\text{append}(\textsf{'}\dashv_{e.\text{id}}\textsf{'}) \\
 & \quad \text{for }e\in E[i]: temp.\text{append}(\textsf{'}\vdash_{e.\text{id}}\textsf{'}) \\
 & \quad T.\text{append}(temp) \\
 \\
 & s\gets \text{flatten}(T[1..n])
\end{align}
$$
Suppose $e_{i}, e_{j}\in S$, $e_{i}.\text{id}=i$, $e_{j}.\text{id}=j$  $e_{i}.\text{left}\leqslant e_{j}.\text{left}$. 
1. Suppose $e_{i}$ and $e_{j}$ intersect in the interior of the circle. We must have $e_{i}.\text{left}< e_{j}.\text{left}$. By the manner in which we assigned the $\text{id}$ property, $i< j$. Also, $e_{i}.\text{right}< e_{j}.\text{right}$. Therefore, $\vdash_{i}\vdash_{j}\dashv_{i}\dashv_{j}$ is a subsequence of $s$. 
2. Suppose $e_{i}$ and $e_{j}$ do not intersect, even at their endpoints. Then, we have $e_{i}.\text{left}< e_{j}.\text{left}$ and $e_{i}.\text{right}> e_{j}.\text{right}$. It follows that $\vdash_{i}\vdash_{j}\dashv_{j}\dashv_{i}$, is a subsequence of $s$, and since each symbol appears only once, $\vdash_{i}\vdash_{j}\dashv_{i}\dashv_{j}$ cannot be a subsequence of $s$.
3. Suppose $e_{i}.\text{left}=e_{j}.\text{left}$ and $e_{i}.\text{right}> e_{j}.\text{right}$. Since every slot of $E$ is sorted in decreasing order of the property $\text{right}$, $j> i$. It follows that $\vdash_{i}\vdash_{j}\dashv_{j}\dashv_{i}$ is a subsequence of $s$, and thus $\vdash_{i}\vdash_{j}\dashv_{i}\dashv_{j}$ cannot be a subsequence of $s$. 
4. Suppose $e_{i}.\text{right}=e_{j}.\text{right}$ and $e_{i}.\text{left}< e_{j}.\text{left}$. Again, $i< j$. Since each slot of $F$ is sorted in decreasing order of the property $\text{left}$, it follows that $\vdash_{i}\vdash_{j}\dashv_{j}\dashv_{i}$ is a subsequence of $s$, and thus $\vdash_{i}\vdash_{j}\dashv_{i}\dashv_{j}$ cannot be a subsequence of $s$. 

We have shown that $\vdash_{i}\vdash_{j}\dashv_{i}\dashv_{j}$ is a subsequence of $s$ $\iff$ $e_{i}$ and $e_{j}$ intersect in the interior of the circle. Since $s$ is constructed in such a way that the $\vdash_{k}$'s appear in increasing order of the edge $\text{id}$s, it. suffices to find the longest increasing subsequence of $\dashv_{k}$'s in tails $\text{flatten}(S[i..n])$ such that $e_{k}.\text{left}< i$. This is exactly what $\textsf{MaximumClique}$ does. 
## Part c

We need only make a few changes to the solution of part d. 

Let $E[1..n-1]$ be a 2d array such that $E[i]$ is an array containing all edges $e$ such that $e.\text{left}=i$ sorted in *increasing* order of the property $\text{right}$. Assign $e.\text{id}$ to be the index of $e$ in $\text{flatten}(E)$ for all $e\in S$. 

Let $N[1..n-1]$ be an array such that $N[i]$ is the number of edges $e$ satisfying $e.\text{left}\leqslant i$.   

Let $F[2..n]$ be a 2d array such that $F[i]$ is an array containing all edges $e$ such that $e.\text{right}=i$ sorted in *increasing* order of the property $\text{left}$. 

This makes $\textsf{MaximumClique}$ recognize edges which share an endpoint as intersecting vertices.

Now, $\textsf{MaximumClique}(N, F)$ returns the required result in $O(mn\log m)$ time. 

---

# Problem 3

We can assume all sequences start with $\text{DBL}$. Note that no shortest sequence will have two consecutive increments, since $\text{DBL}\to\text{INC}\to\text{INC}$ can be replaced by $\text{INC}\to\text{DBL}$. Thus, if a shortest sequence has $d$ doublings, it can have at most $d$ increments. Such sequences of $\text{DBL}$ and $\text{INC}$ can be interpreted as binary numbers, which the following algorithm exploits:

$$
\begin{align}
 & \textsf{OptSeq}(n): \\
 & \quad B\gets \text{binary representation of }n, \text{with }B[1] \text{ being the MSB} \\ 
 & \quad steps\gets 0, num \gets 1\\
 & \quad \text{for }i\in[2..B.\text{length}]: \\
 & \quad \quad \text{if }B[i]==1: num\gets 2*num+1; steps\gets steps+2 \\
 & \quad \quad \text{if }B[i]==0: num\gets 2*num; steps\gets steps+1\\ 
 & \quad \text{return }steps 
\end{align}
$$

Let $\lambda(n)$ denote the length of the shortest sequence of increments and doublings which achieves  from $1$. It is evident that the algorithm follows a sequence of increments and doubles, and that $num=n$ after the conclusion of the for loop. Thus, $\textsf{OptSeq}(n)$ is an upper bound for $\lambda(n)$. Suppose the sequence $S_{1}$ discovered by $\textsf{OptSeq}$ uses $d_{1}$ doublings and $i_{1}$ increments. Then, $n\geqslant 2^{d_{1}}+i_{1}$. Suppose $S_{2}$ is the shortest possible sequence, achieving $n$ with $d_{2}$ doublings and $i_{2}$ increments. Suppose $d_{2}< d_{1}$. Since $i_{2}\leq d_{2}$ and no two increments can appear consecutively, we have $n\leqslant 2^{d_{2}+1}-1< 2^{d_{1}}$, a contradiction. If $i_{2}< i_{1}$, we would have and equality of the form
$$
2^{\alpha_{1}}+2^{\alpha_{2}}+\dots+2^{\alpha_{i_{2}}}= 2^{\beta_{1}}+2^{\beta_{2}}+\dots+2^{\beta_{i_{1}}},
$$
with $\alpha_{1}<\alpha_{1}<\dots<\alpha_{i_{2}}$, $\beta_{1}<\beta_{2}<\dots <\beta_{i_{1}}$, and $i_{2}< i_{1}$, which is impossible. This, $\textsf{OptSeq}(n)$ is optimal.

---

# Problem 4

## Part a

Let $S = \{v_1, \dots, v_n\}$ be the columns of $T$. Let $M$ denote the tuple $(S, \mathcal{I})$. Clearly $\emptyset \in \mathcal{I}$. If $A \in \mathcal{I}$ and $B \subset A$ then any linear combination of vectors in $B$ may be viewed as if it were in $A$, hence $B$ is linearly independent, i.e. $B \in \mathcal{I}$. Further, if $A, B \in \mathcal{I}$ with $|A| > |B|$ then $A\not\subseteq\text{span }B$, since if that were the case, $\text{span }A$ would be spanned by fewer than or equal to $|B|$ vectors, contradicting the independence of $A$. Let $x\in A\setminus\text{span }B$. Indeed $B \cup \{x\} \in \mathcal{I}$ since $x \not\in \text{span } B$ and $B$ is linearly independent. Hence $M$ is a matroid.

## Part b

Let $M = (S, \mathcal{I})$ and let $M' = (S, \mathcal{I}')$. Clearly $\emptyset \in \mathcal{I}'$ since $\emptyset^c = S$ must contain some maximal independent set of $M$. If $A \in \mathcal{I}'$ and $B \subset A$ then $A^c \subset B^c$ and since $A^c$ contains a maximal independent set of $M$, so does $B^c$ and hence $B \in \mathcal{I}'$. 

Suppose $A, B\in \mathcal{I}'$, and $|A|> |B|$. For all $a\in A$, suppose $B\cup \{ a \}\not\in \mathcal{I}'$, that is, $(B\cup \{ a \})^{c}$ does not contain a maximal independent set of $M$. It follows that every maximal independent set of $M$ in $B^{c}$ contains $A$. Since $A\in \mathcal{I}'$, $A^{c}$ must contain a maximal independent set $C$ of $M$. Since $C$ does not contain $A$, $C$ cannot lie in $B^{c}$, so $C$ must intersect $B$. However, by using the exchange property of $M$, every element $b\in B\cap C$ can be replaced with an element $a\in D$, where $D$ is an independent set in $B^{c}$. Let $E$ be the set obtained from $C$ after all elements of $C\cap B$ have been replaced with elements of $D$. Since all maximal independent sets have the same cardinality, $E$ is a maximal independent set of $M$. Since we made at most $|B|$ exchanges, $|B|< |A|$, and $C\cap A=\emptyset$, $E$ does not contain $A$. This is a contradiction, since we have previously determined that all independent sets of $M$ in $B^{c}$ must contain $A$.  

## Part c

Let $M = (S, \mathcal{I})$ and let $P = \{S_1, \dots, S_k\}$ be the given partition of $S$. Clearly $\emptyset \in \mathcal{I}$ since $|\emptyset \cap S_i| = 0$ for all $i$. If $A \in \mathcal{I}$ and $B \subset A$ then $|B \cap S_i| \leqslant |A \cap S_i| \leqslant 1$ for all $i$, hence $B \in \mathcal{I}$. If $A, B \in \mathcal{I}$ with $|A| > |B|$ then there is an $i$ for which $|S_i \cap A| = 1$ and $|S_i \cap B| = 0$. Let $x \in A \cap S_i$ then $B \cup \{x\} \in \mathcal{I}$. Hence $M$ is a matroid.

---

# Problem 5

$$
\begin{align}
 & \textsf{BoundedDijkstra}(G(V, E), W, s\in V): \\
 & \quad \text{Initialize list }B[0..W(V-1)]\text{ with }\emptyset \\
 & \quad \text{Initialize list }dist[1..V]\text{ with }\infty \\
 & \quad B[0]\gets s \\
 & \quad dist[s]\gets 0 \\\\
 & \quad \text{for } i\in[0..W(V-1)]: \\
 & \quad \quad \text{for }v\in B[i] :\\
 & \quad \quad \quad \text{for each neighbor }u\text{ of }v: \\
 & \quad \quad \quad \quad dist'\gets i+w(v, u) \quad \texttt{\#i=dist[v]}\\
 & \quad \quad \quad \quad \text{if }dist[u]> dist': \\
 & \quad \quad \quad \quad \quad \text{remove }u\text{ from }B[dist[u]] \\
 & \quad \quad \quad \quad \quad \text{append }u\text{ to }B[dist'] \\
 & \quad \quad \quad \quad \quad dist[u]\gets dist' \\\\
 & \quad \text{return }dist
\end{align}
$$

The mechanism to pick the vertex with the shortest distance has been modified to use buckets in pace of the priority queue used in the vanilla algorithm. Bounding the weights by $W$ allows us to bound maximum weight of a path in the graph by $W(V-1)$. Every vertex is processed, since a vertex can only be inserted into a later bucket or at the end of the current bucket. 

Each edge is processed once, and we pass through $W(V-1)$ buckets. Thus, the algorithm runs in $O(W|V|+|E|)$ time. 

---

# Problem 6

Suppose $T$ is a binary tree that is not full. Then there is a node $v$ which has only one child $u$. We split the solution into two cases:

1. If $v$ is the root node then delete $v$ and use $u$ are the root node instead.
2. If $v$ is not the root node then it has a parent, say $w$. Here, delete $v$ and attach $u$ to $w$.

In both cases, we have shown that there is a new tree which uses less bits to encode the data (since we are deleting an edge). Hence $T$ cannot correspond to an optimal code.