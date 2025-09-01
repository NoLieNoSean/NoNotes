---
tags: 
date: "2025-08-27"
time: "22:11"
---
# Problem 1

$(a)$ $n!\leq n^{n}$ for all $n\in \mathbb{Z}$, so $n!=O(n^{n})$. There does not exist $c> 0$ such that $cn^{n}\leq n!$ for all $n$ greater than some $n_{0}$, since $n!/n^{n}\to 0$ as $n\to \infty$, so $n!\not\in\Theta(n^{n})$.

$(b)$ 
$$
\begin{align}
\log n! = \sum_{i=1}^{n} \log i\geq \sum_{i=\lceil n/2 \rceil}^{n} \log n/2=\frac{n}{2}(\log n-1)
\end{align}
$$
For $n\geq 4$, $\log n\geq 2$, so $\log n-1\geq \frac{1}{2}\log n$. Thus, for $n\geq 4$, 
$$
\log n! \geq \frac{1}{4}\log n.
$$
Since $(1/4)\log n\leq \log n!\leq \log n$, we have $\log n!  =\Theta(\log n)$.

$(c)$ 
$$
\begin{align}
 & \int_{1}^{n} \frac{1}{x} \, dx \leq \sum_{i=1}^{n} \frac{1}{i}\leq 1+\int_{1}^{n} \frac{1}{x} \, dx  \\
 & \log n\leq \sum_{i=1}^{n} \frac{1}{i}\leq 1+\log n .\\
\end{align}
$$
For $n\geq 2$, $1+\log n\leq 2\log n$. Thus, $\sum_{i=1}^{n}1/i=\Theta(\log n)$.

---
# Problem 2

$(a)$
$$
\begin{align}
 & \textsf{QMedian}(A[1..n], B[1..n]): \\
 & \quad m_{A}\gets \textsf{Median}(A[1..n])\\
 & \quad m_{B}\gets \textsf{Median}(B[1..n])  \\
 & \quad \text{if }n=1: \\
 & \quad \quad \text{return }\min(m_{A}, m_{B})\\
 & \quad l_{r}\gets \lceil (n+1)/2 \rceil  \\
 & \quad l_{l}\gets \lceil n/2 \rceil \\

&\quad \text{if }m_{A}< m_{B}: \\
	 & \quad \quad \text{return }\textsf{QMedian}(A[l_{r} ..n], B[1..l_{l}]) \\
	 & \quad \text{if }m_{A}> m_{B}: \\
	 & \quad \quad \text{return }\textsf{QMedian}(B[l_{r} ..n], A[1..l_{l}])\\ 
  & \quad \text{else} :\\
 & \quad \quad \text{return }m_{A}
\end{align}
$$

$\textsf{QMedian}$ compares the medians $m_{A}$ and $m_{B}$ of $A$ and $B$. Denote the result of merging $A$ and $B$ by $A\cup B$. If $m_{A}=m_{B}$, it is clear that $m_{A}$ will be the median of $A\cup B$. Consider the case when $m_{A}< m_{B}$. Every element in $A[1..l_{r}-1]$ has at least $n+1$ elements in $A\cup B$ that are greater than it, and thus cannot be the median of $A\cup B$. Symmetrically, no element of $B[l_{l}+1..n]$ can be the median of $A\cup B$. Since the two chunks are of equal size, the median of $A\cup B$ is equal to the median of $A[l_{r}..n]\cup B[1..l_l]$. 

The recurrence relation for $\textsf{QMedian}$ is given by
$$
T(n)=T(n/2)+O(1).
$$
Since we are halving the array size at each step, the algorithm will terminate after $\log n$ recursive calls. At each step of the recursion, we only perform $O(1)$ operations. Therefore, $T(n)=O(\log n)$.

$(b)$

The median of an even length array is considered to be its left median. All elements are distinct. We use sentinels $A[0]=-\infty$ and $A[n+1]=\infty$ for all lists $A[1..n]$. Lists constructed with indices out of order (like $A[3..1]$) are empty lists. $\textsf{KSmallest}$ is the function from part $(c)$; it runs in log time.

$$
\begin{align}
 & \textsf{QMedian3}(A[1..a], B[1..b], C[1..c]): \\\\
 & \quad m_{A}\gets \textsf{Median}(A[1..a])\\
 & \quad m_{B}\gets \textsf{Median}(B[1..b]) \\
 & \quad m_{C}\gets \textsf{Median}(C[1..c])  \\\\
 & \quad \text{if any of }A, B, \text{or }C\text{ are empty } :\\\\
 & \quad \quad (A', B', C')\gets\text{a permutation of }(A, B, C) \text{ such that }C'\text{ is empty} \\
 & \quad \quad \text{return }\textsf{KSmallest}(A'[1..a'], B'[1..b'], \lceil (a'+b')/2 \rceil )\\\\
 & \quad \text{else }:\\\\
 & \quad\quad  (L, K, G)\gets \text{the permutation of }(A, B, C) \text{ such that }m_{L}< m_{K}< m_{G} \\ \\

 & \quad\quad  \alpha\gets \min(\lceil l/2 \rceil, \lfloor g/2 \rfloor)  \\\\
 & \quad \quad \text{if }\alpha=0: \quad \texttt{\# g=1}\\ 
 & \quad \quad  \quad \text{if }k, l\text{ are even and }m_{G}< K[ k/2  +1]\text{ and }m_{G}< L[ l/2  +1] \text{ return }m_{G} \\
 & \quad \quad  \quad \text{else }\alpha\gets 1 \\\\
 & \quad\quad  \text{return }\textsf{QMedian3}(L[\alpha+1..l], K, G[1..g-\alpha])
\end{align}
$$

Consider lists $L, K, G$ such that $m_{L}< m_{K}< m_{G}$. I claim that
1. No element in $L[1..\lceil l/2 \rceil]$ can be the median of $A\cup B\cup C$. Indeed, every element in $L[1..\lceil l/2 \rceil]$ is less than $\lfloor l/2 \rfloor+\lceil (k+1)/2 \rceil+\lceil (g+1)/2 \rceil$ elements in $A\cup B\cup C$, and it is easily verified that $\lfloor l/2 \rfloor+\lceil (k+1)/2 \rceil+\lceil (g+1)/2 \rceil\geq \lceil (l+k+g)/2 \rceil$ for all positive $l, k, g$.  
2. No element in $G[g-\lfloor g/2 \rfloor+1..g]$ can be the median of $A\cup B\cup C$; every element is greater than $\lceil g/2 \rceil+\lceil k/2 \rceil+\lceil l/2 \rceil$ elements in $A\cup B\cup C$. Again, we have $\lceil g/2 \rceil+\lceil k/2 \rceil+\lceil l/2 \rceil\geq\lceil (l+k+g)/2 \rceil$ for all positive $l, k, g$.

Thus, we can safely prune the first $\alpha\equiv\min(\lceil l/2 \rceil, \lfloor g/2 \rfloor)$ elements from $L$ and the last $\alpha$ elements from $G$. If $\alpha=0$, it must be because $g=1$. In this case, it is easy to see that $m_{G}$ can be the median only if $k$ and $l$ are even and $m_{G}< K[ k/2  +1]\text{ and }m_{G}< L[ l/2  +1]$. If that is not the case, we can discard $G$ (note that $\lceil l/2 \rceil$ is always nonzero), and reduce the problem to the one solved in $(c)$. 

It is evident that the algorithm must reach its base case in $\log a+\log b+\log c\leq 3\log(a+b+c)$ time, which is then solved in $\log(a+b+c)$ time. Thus, it runs in $O(\log(a+b+c))$ time.


$(c)$

The algorithm assumes $A[0]=-\infty$, $B[0]=-\infty$, $A[m+1]=+\infty$, $B[n+1]=+\infty$. All elements of $A$ and $B$ are distinct.

$$
\begin{align}
 & \textsf{KSmallest}(A[1..m], B[1..n], k): \\
 & \quad l\gets \left\lceil  \frac{\min(m, k)-\max(0, k-n)+1}{2}  \right\rceil  \\
 & \quad p_{A}\gets \max(0, k-n)-1+l \\
 & \quad \text{do } : \\
 & \quad \quad p_{B}\gets k-p_{A}   \\
 & \quad \quad l\gets \lceil l/2 \rceil \\
 & \quad \quad \text{if }A[p_{A}]> B[p_{B}]: \\
 & \quad \quad \quad \text{if }A[p_{A}]< B[p_{B}+1]: \\
 & \quad \quad \quad \quad \text{return }A[p_{A}] \\
 & \quad \quad \quad p_{A}\gets p_{A}-l \\
 & \quad \quad \text{else if }A[p_{A}]< B[p_{B}] :\\
 & \quad \quad \quad \text{if }A[p_{A}+1]> B[p_{B}]: \\
 & \quad \quad \quad \quad \text{return }B[p_{B}] \\
 & \quad \quad \quad p_{A}\gets p_{A}+l
 %%& \quad \text{while }l\ne 1\\  %%
\end{align}
$$

Let $e_{A}$ denote the number of elements of $A$ that occur at or before index $k$ in the merged array $A\cup B$. The possible values of $e_{A}$ is restricted by $\max(0, k-n)\leq e_{A}\leq \min(m, k)$. The algorithm performs binary search for $e_{A}$ on the subarray $A[\max(0, k-n), \min(m, k)]$. 

In each iteration, $p_{B}$ is selected such that $p_{A}+p_{B}=k$. 
1. If $A[p_{A}]> B[p_{B}]$ and 
	1. $A[p_{A}]< B[p_{B}+1]$, then $A[1..p_{A}]\cup B[1..p_{B}]=A\cup B[1..k]$, and since $A[p_{A}]$ is the greatest element in $A[1..p_{A}]\cup B[1..p_{B}]$, it follows that $e_{A}=p_{A}$ and $A[p_{A}]=A\cup B[k]$. 
	2. $A[p_{A}]> B[p_{B}+1]$, then the index of $A[p_{A}]$ in $A\cup B$ is strictly greater than $k$. This implies $e_{A}$ must be strictly lesser than $p_{A}$. We proceed with the binary search by discarding the right half.
2. Similar analysis for $A[p_{A}]< B[p_{B}]$.

The algorithm must terminate since we know a solution exists and our search space shrinks geometrically with every iteration. When we have narrowed down the list of possible $e_{A}$'s to a singleton, the algorithm guarantees that that value ($p_{A}$) must be equal to $e_{A}$. For $p_{A}=e_{A}$, the checks specified above pass, and $e_{A}$ is returned.

The algorithm runs in $O(\log k)\leq O(\log m+n)\leq O(\log m+\log n)$ time.

---

# Problem 3

$$
\begin{align}
 & \textsf{FindFlip}_{1}(A[1..N]):   \\
 & \quad \text{if }N=1 : \\
 & \quad \quad \text{if }A[1]< 0 :\\
 & \quad \quad \quad \text{return }0 \\
 & \quad \quad \text{if }A[1]> 0 :\\
 & \quad \quad \quad \text{return }2\\
 & \quad m\gets\lceil N/2 \rceil \\
 & \quad \text{if }A[m]> 0: \\
 & \quad \quad \text{return }m+\textsf{FindFlip}_{1}(A[m+1..N]) \\
 & \quad \text{if }A[m]< 0 :\\
 & \quad \quad \text{return }\textsf{FindFlip}_{1}(A[1..m]) \\
 \\\\
 & \textsf{FindFlip}_{2}(A[1..N]):  \\
 & \quad \text{if }A[1]< 0 :\\
 & \quad \quad \text{return }0\\
 & \quad m\gets 1 \\
 & \quad \text{while }2m< N\text{ and }A[2m]> 0: \\
 & \quad \quad m\gets 2m \\
 & \quad \text{return }m+\textsf{FindFlip}_{1}(A[m+1..\min(2m, N)])
\end{align}
$$

$\textsf{FindFlip}_{1}$ performs a binary search on $A[1..N]$: If $A[m]$ is positive, either $A[m]$ is the last positive element in $A$ (in which case $\textsf{FindFlip}_{1}(A[m+1..N])$ is $0$), or the last positive element in $A$ lies in $A[m+1..N]$; In either case, its position is given by $m+\textsf{FindFlip}_{1}(A[m+1..N])$. If $A[m]$ is negative, the last positive element must lie in $A[1..m]$, and hence its position is given by $\textsf{FindFlip}_{1}(A[1..m])$. $\textsf{FindFLip}_{1}$ follows the recurrence
$$
T(N)=T(N/2)+O(1),
$$
so $T(N)=O(\log N)$.

$\textsf{FindFLip}_{2}$ bounds the position of the last positive element in a range $A[m+1..\min(2m, N)]$ of length $\leq n$, and then uses $\textsf{FindFlip}_{1}$, which now runs in $O(\log m)\leq O(\log n)$ time. Finding the range takes $O(\log n)$ time, thus $\textsf{FindFlip}_{2}$ runs in $O(\log n)$ time.


---
# Problem 4

If the elements have a total order, one can sort them and check for duplicates with a linear scan in $O(n\log n)$ time. 
$$
\begin{align}
 & \textsf{AreDistinct}(A[1..n]): \\
 & \quad \textsf{QuickSort}(A) \\
 & \quad \text{for }i=1 \text{ to }n-1: \\
 & \quad \quad \text{if }A[i]\equiv A[i+1]\text{ return false} \\
 & \quad \text{return true}
\end{align}
$$
If we also know bounds $l, m$ on the elements of $A$, and space is not a constraint, this can be achieved in $O(n)$ time, discounting the time taken to initialize $B[l..r]$ (once done, it can be used to run the algorithm several times on different inputs until $c$ overflows, so the linear time claim isn't all that unreasonable):

$$
\begin{align}
 & \text{Initialize } B[l..r] \text{ with zeros}\\ 
 & c\gets 0 \\\\
 & \textsf{AreDistinct}_{2}(A[1..n]): \\
 & \quad c\gets c+1 \\
 & \quad \text{for }i=1\text{ to }n: \\
 & \quad \quad \text{if }B[A[i]]\equiv c \text{ return false} \\
 & \quad \quad B[A[i]]\gets c
\end{align}
$$


---
# Problem 5

## Part a

Using the master theorem, we have
$$
\begin{align}
T(n) & =2T(n/3)+1 \\
 & =\sum_{i=0}^{\log_{3}n} 2^{i} \\
 & =\Theta(n^{\log_{3}2})
\end{align}
$$

## Part b

$$
\begin{align}
T(n) & =5T(n/4)+n \\
 & =\sum_{i=0}^{\log_{4}n} 5^{i}n/4^{i} \\
 & =\Theta(n^{\log_{4}5}).
\end{align}
$$
## Part c

Use substitution.
$$
\begin{align}
T(n) & =T(n-1)+2 \\
 & \leq 2n \\
 & =\Theta(n)
\end{align}
$$

## Part d

Substitution, again.
$$
\begin{align}
  T(n) & =2^{n}+c(2^{n}-1) \\
  &=\Theta(2^{n}).
\end{align}
$$

## Part e

$$
\begin{align}
T(n) & =T(\sqrt{ n })+1
\end{align}
$$
Assume $n=2^{k}$ and $T(2)=1$. Then, 
$$
T(2^{k})=T(2^{k/2})+1=\log_{2}k.
$$
Thus, $T(n)=\Theta(\log \log n)$.

---
# Problem 6

The recurrences for the three algorithms are given by
$$
\begin{align}
 & T_{A}(n)=5T_{A}(n/2)+f(n), \\
 & T_{B}(n)=2T_{B}(n-1)+c, \\
 & T_{C}(n)=9T_{C}(n/3)+g(n),
\end{align}
$$
where $f(n)=\Theta(n)$ and $g(n)=\Theta(n^{2})$.

$$
\begin{align}
T_{A}(n) & =\sum_{i=0}^{\log_{2}n}5^{i}f(n/2^{i}).
\end{align}
$$
Let $f(n)\leq Cn$ for all $n\geq n_{0}$. Let $k$ be the largest integer such that $n/2^{k}\geq n_{0}$. Let $M$ be the maximum value of $f(n)$ for $n< n_{0}$.
$$
\begin{align}
T_{A}(n) & \leq\sum_{i=0}^{k} 5^{i}f(n/2^{i})+M\sum_{i=k+1}^{\log_{2}n }5^{i} \\
 & \leq C\sum_{i=0}^{k} 5^{i}n/2^{i}+(M(5^{\log_{2}n_{0}+1}-1)/4)5^{\log_{2}(n/n_{0})+1} \\
 & = O((5/2)^{\log_{2}(n/n_{0})}n)+O(5^{\log n}) \\
 & =O(n^{\log 5})+O(5^{\log n}) \\
 & =O(n^{\log 5}).
\end{align}
$$
$T_{A}(n)\geq n^{\log_{2}5}$, so $T_{A}(n)=\Theta(n^{\log5})$. 

It has been shown that algorithm $B$ is $\Theta(2^{n})$.
$$
\begin{align}
T_{C}(n) & =\sum_{i=0}^{\log_{3}n} 9^{i}g(n/3^{i}) \\
 & =\Theta\left( \sum_{i=0}^{\log_{3}n}  n^{2}\right) \\
 & =\Theta(n^{2}\log n).
\end{align}
$$
Algorithm $C$ has the best time complexity, since $n^{\log_{2}5/4}\geq \log_{10} n$ for all $n$.

---
# Problem 7

$$
\begin{align}
 & \textsf{SumIsX}(S_{1}[1..a], S_{2}[1..b], x): \\
 & \quad \textsf{QuickSort}(S_{1}) \\
 & \quad \textsf{QuickSort}(S_{2}) \\
 & \quad i\gets 1 \\
 & \quad j\gets b \\
 & \quad \text{while }i\leq a\text{ and }j\geq 1 \\
 & \quad \quad \text{if }S_{1}[i]+S_{2}[j]< x \\
 & \quad \quad \quad i\gets i+1 \\
 & \quad \quad \text{if }S_{1}[i]+S_{2}[j]> x \\
 & \quad \quad \quad j\gets j-1 \\
 & \quad \quad \text{else} \\
 & \quad \quad \quad \text{return }(i, j) \\
 & \quad \text{return }(\text{NaN}, \text{NaN})
\end{align}
$$

$\textsf{SumIsX}$ first sorts $S_{1}$ and $S_{2}$. Assume a solution exists, say $S_{1}[c]+S_{2}[d]=x$. At every iteration, either $i$ is incremented, or $j$ is decremented. Since the algorithm only terminates if either $i$ or $j$ exceeds bounds, we can conclude that one of these two states must be achieved on some iteration:
1. $i=c$ and $j> d$, or
2. $j=d$ and $i< c$.

In the first case, $S_{1}[i]+S_{2}[j]$ will be greater than $x$, resulting in $j$ being decremented repeatedly until $j=d$ and the algorithm terminates positively. In the second case, $S_{1}[i]+S_{2}[j]$ will be lesser than $x$, resulting in $i$ being incremented repeatedly until $i=c$ and the algorithm terminates positively.

If a solution does not exist, the loop will terminate in no more than $a+b$ iterations.

Sorting $S_{1}$ and $S_{2}$ takes $O(a\log a+b\log b)\leq O((a+b)\log(a+b))$ time, and searching for a solution takes $O(a+b)$ time. Thus, the algorithm runs in $O((a+b)\log(a+b))$ time.