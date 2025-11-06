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
1+\min\{ DP[i][ j-1]+DP[i-1][ j]  \} & \text{otherwise}.
\end{cases}
\end{align}
$$
> [!Proof]-
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
 & \quad \quad \quad \text{else } DP[i][j]\gets 1+\max\{ DP[i][ j-1]+DP[i-1][ j]  \} \\
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
 & \textsf{LOS}(X[1..n]):  \\
 & \quad i\gets 1 \\
 & \quad ans\gets 0\\
 &  \quad \text{do}: \\
 &  \quad \quad \text{while }i< n\text{ and }X[i+1]< X[i] : i\gets i+1 \\
 &  \quad \quad ans\gets ans+1 \\
 &  \quad \quad \text{while }i< n\text{ and }X[i+1]> X[i] : i\gets i+1\\
 &  \quad \quad ans\gets ans+1 \\
 & \quad \text{return }ans
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

Let $\lambda(n)$ denote the length of the shortest sequence of increments and doublings which achieves  from $1$. It is evident that the algorithm follows a sequence of increments and doubles, and that $num=n$ after the conclusion of the for loop. Thus, $\textsf{OptSeq}(n)$ is an upper bound for $\lambda(n)$. Suppose the sequence $S_{1}$ discovered by $\textsf{OptSeq}$ uses $d_{1}$ doublings and $i_{1}$ increments. Then, $n\geqslant 2^{d_{1}}+i_{1}$. Suppose $S_{2}$ is a sequence of shorter length, achieving $n$ with $d_{2}$ doublings and $i_{2}$ increments. Either one of $d_{2}< d_{1}$ or $i_{2}< i_{1}$ must be true. If $d_{2}< d_{1}$, we have $n\leqslant i_{2}$





  

The correctness of the algorithm follows since at the start of each iteration, the first $k-1$ bits (from the right) of $num$ and the first $k-1$ bits of $n$ are the same. This is easily seen using induction. Moreover this algorithm produces the minimum number of steps since we can view the ``$\times 2$" operation as bitshift to the left and the ``$+1$" operation as incrementing the first bit.

  

Observe that the length of the binary expansion of $n$ is $\log n$. For each digit in the binary expansion of $n$, we are doing atmost 2 operations. Hence the time complexity is $\boldsymbol{\Theta}(\log n)$.