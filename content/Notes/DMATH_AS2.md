---
tags:
  - DMAT
  - "#draft"
date: 2025-02-26
time: 18:00
---

[[assignment2.pdf]]

# Problem 1

Let $\mathcal{F}$ be a forest. Define a relation by $a\sim b$ if a path exists between $a$ and $b$. $\sim$ is an equivalence relation:
- $a\sim a$ for all $a\in \mathcal{F}$
- $a\sim b\implies b\sim a$
- $a\sim b$ and $b\sim c$ $\implies$$a\sim c$, where the path from $a$ to $c$ is the concatenation of the paths form $a$ to $b$ and from $b$ to $c$.

Let $\mathcal{F}_{\sim}$ be the partition of $\mathcal{F}$ induced by $\sim$. Let $[a]\in \mathcal{F}_{\sim}$. Clearly, $[a]$ is connected. $[a]$ inherits the property of having no cycles from $\mathcal{F}$. Thus, $[a]$ is a tree. Thus, we can conclude that a forest is a disjoint union of trees. 

Now, to the question at hand. Fix $a\in[n]$. Let $T_{a}$ denote the tree containing $a$. Note that the cases $|T_{a}|=1, 2, \dots, n$ are disjoint and exhaustive. If $F'_{k}$  is the number of forests in which $|T_{a}|=k$, we can write
$$
F(n)=\sum_{k=1}^{n} F'_{k}.
$$
Now,
$$
\begin{align}
F'_{k}= & (\text{ways to pick remaining }k-1\text{ vertices for the tree})\times \\
 & (\text{number of labeled trees on }k\text{ vertices} )\times \\
 & (\text{number of labeled forests on }n-k\text{ vertices}). \\
 =&\binom{n-1}{k-1}k^{k-2}F(n-k). 
\end{align}
$$
Thus, we have
$$
F(n)=\sum_{k=1}^{n} \binom{n-1}{k-1}k^{k-2}F(n-k).
$$

---

# Problem 2

To prove:
$$
\begin{align}
n^{n} & = \sum_{k=0}^{n-1} \binom{n}{k}k^{k}(n-k)^{n-k-1}.
\end{align}
$$
We know that $n^{n}$ counts the number of labeled $n$ vertebrates. Let $S_{t}$ denote the number of $n$ vertebrates with a rooted tree of size $t$ at their head. Clearly, every $n$ vertebrate belongs to exactly one such class, so summing over all possible values of $t$ should yield the total count, $n^{n}$.

To calculate $S_{t}$, we have to first pick $t$ vertices and create a rooted tree $T$ on $t$ vertices. The number of ways to do this is $\binom{n}{t}t^{t-1}$. To get a $n$ vertebrate which has $T$ rooted at its head, we first get a $n-k$ vertebrate $V$ with head $h$ and tail $l$, and attach the root $r$ of $T$ to the head of $V$. This gives us an $n$ vertebrate with head $r$ and tail $l$.
$$
S_{t}=\binom{n}{t}t^{t-1}(n-t)^{n-t}.
$$
Thus, the total number of $n$ vertebrates will be
$$
\begin{align}
n^{n} & =\sum_{t=1}^{n} S_{t}\\
 & =\sum_{t=1}^{n} \binom{n}{t}t^{t-1}(n-t)^{n-t} \\
 & =\sum_{t=1}^{n} \binom{n}{n-t}t^{t-1}(n-t)^{n-t}  \\
 & =\sum_{k=0}^{n-1} \binom{n}{k}(n-k)^{n-k-1}k^{k} & \text{let }n-t=k
\end{align}
$$


---
# Problem 3

### Part a

Let $X=\begin{bmatrix}1&1\\1&0\end{bmatrix}$. Then,
$$
\begin{pmatrix}
F_{n + 1}   \\
F_n
\end{pmatrix}
=
X^n
\begin{pmatrix}
1   \\
0
\end{pmatrix}.
$$
It follows that
$$
\begin{bmatrix}
F_{n} & F_{n+1} \\
F_{n-1} & F_{n} 
\end{bmatrix}= X^{n-1}\begin{bmatrix}
1 & 1  \\
0 & 1
\end{bmatrix}
$$
Taking the determinant of both sides, we get
$$
\begin{align}
F_{n}^{2}-F_{n+1}F_{n-1}=|X|^{n-1}=(-1)^{n-1}. 
\end{align}
$$

### Part b

Let $W_{n}$ denote the number of interest. It is easy to see that $W_{1}=1$ and $W_{2}=3$. Assuming we know $W_{1}, \dots, W_{n-1}$, let us calculate $W_{n}$. Consider the subsets of $[n]$ which do not include $n$. Such a subset can either
- not include $n-1$, not include $1$
- not include $n-1$, include $1$
- include $n-1$, not include $1$
- include $n-1$, include $1$.

All but the last case is counted by $W_{n-1}$. If a subset includes $n-1$ and $1$, then it must necessarily not include $n-2$ and $2$. Again, all the cases but the inclusion of $n-3$ and $3$ is counted by $W_{n-5}$. Thus, the total number of subsets which do not include $n$ is given by $W_{n-1}+W_{n-5}+W_{n-9}+\dots$. 

Now we will count the subsets which do include $n$. Such subsets must necessarily not include $n-1$ and $1$. All the possibilities except the inclusion of both $n-2$ and $2$ is counted by $W_{n-3}$. Following a process similar to the previous case, we get the number of subsets which include $n$ to be $W_{n-3}+W_{n-7}+W_{n-11}+\dots$

Adding the two cases, we get
$$
\begin{align}
W_{n} & =W_{n-1}+W_{n-3}+W_{n-5}+\dots \\
 & =W_{n-1}+W_{n-2}
\end{align}
$$
Thus, $W_{n}$ satisfies the recurrence relation $W_{n}=W_{n-1}+W_{n-2}$ for $n\geq 3$, and $W_{1}=1$ and $W_{2}=3$. On solving this recurrence relation,  we get

$$
W_{n}=\left( \frac{{1+\sqrt{ 5 }}}{2} \right)^{n}+\left( \frac{{1-\sqrt{ 5 }}}{2} \right)^{n}.
$$


---

# Problem 4

Let $S_{n}$ be the set of all bijections from $[n]$ to $[n]$. For each $f\in S_{n}$, let $L_{f}$ be the least $k$ such that $f([k])=[k]$. Let $F_{n, k}=\{ f\in S_{n} \ | \ L_{f}=k\}$. Clearly, 
$$
|S_{n}|=\sum_{k=1}^{n} F_{n, k}.
$$
Now, for all $f\in F_{n, k}$, $f|_{[k]}$ is connected, and $f|_{[n]\setminus[k]}\in S_{n-k}$. Thus, 
$$
F_{n, k}=c_{k}(n-k)!.
$$
So, we have
$$
n! = |S_{n}|=\sum_{k=1}^{n} c_{k}(n-k)!.
$$

---
# Problem 5

Let $F$ be the infinite product $\prod_{n\geq 1}(1+x^{n})$. Note that the only terms which contribute to the coefficient $a_{n}$ of $x^{n}$ in $F$ are $(1+x^{k})$ for $k\leq n$. Thus, $F$ is indeed a formal infinite product, since each coefficient can be computed using finite field operations. Now, the value of $a_{k}$ is precisely equal to the number of ways it can be written as a sum of distinct positive integers, since for each such decomposition there exists a corresponding unique subset of $\{ (1+x^{k})\ | \ 1\leq k\leq n \}$ whose product contributes 1 to $a_{n}$.

---
# Problem 6

Let $P_{n}\subset S_{n}$ denote the set of compliant permutations. Then, for $\pi\in P_{n}$, either $\pi(n)=n$, or $\pi(n)\ne n$. The former case gives us $s(n-1)$ permutations. In the latter case, $\pi(n)$ has $n-1$ possible values, and the remaining $n-2$ numbers can be permuted in $s(n-2)$ ways. Thus, $s(n)=s(n-1)+(n-1)s(n-2)$.

Let
$$
g(x)=\sum_{n\geq 0} \frac{s(n)}{n!}x^{n}.
$$
Then,
$$
\begin{align}
g'(x) & =\sum_{n\geq 0} \frac{s(n+1)}{n!}x^{n}, \\
xg(x) & =\sum_{n\geq 0} \frac{n~s(n-1)}{n!}x^{n} \\
\implies g(x)+xg(x) & =\sum_{n\geq 0} \frac{{s(n)+n~s(n-1)}}{n!}x^{n}=g'(x).
\end{align}
$$
On integration, we get
$$
g(x)=e^{x+x^{2}/2}.
$$



---
# Problem 7

$\pi$ is a stack-sortable permutation of $[n]$ iff for every $i< j$ such that $\pi(i)> \pi(j)$, $\pi(j)$ is popped first. This is true iff there does not exist $k$ such that $i< k< j$, $\pi(k)> \pi(i)$, since if such a $k$ existed, $\pi(i)$ would be popped before $\pi(j)$. In other words, for every $i$, all the elements in $[n]$ which are less than $\pi(i)$ and have not appeared in the permutation so far (that is, all $e$ such that $\pi(m)\ne e$, $1\leq m< i$) must appear before any element larger than $\pi(i)$ can appear.

**Bijection to binary trees**

Notation: The permutation $\pi:I\to I$, where $I=\{ i_{1}, i_{2}, \dots, i_{n} \}$ is any ordered index set, is represented by $(\pi(i_{1}), \pi(i_{2}), \dots, \pi(i_{n}))$. 

Let $\phi_{n}$ be a map from the set of stack-sortable permutations of a set $I$ of cardinality $n$ to the set of binary trees on $n$ vertices. Define $\phi_{0}(())$ to be the empty tree and $\phi_{1}((i_{1}))$ to be the binary tree with one vertex. 

We will inductively define $\phi_{n}$, having defined $\phi_{0}, \phi_{1}, \dots, \phi_{n-1}$. Let $\pi$ be a stack-sortable permutation of $[n]$. Let $k$ be the first index for which $\pi(k)> \pi(1)$. If such a $k$ does not exist, let $k=n+1$. Then, observe that $\pi_{l}=(\pi(2), \pi(3), \dots, \pi(k-1))$ and $\pi_{r}=(\pi(k), \pi(k+1), \dots, \pi(n))$ are both stack-sortable permutations of $I_{l}=\{ \pi(2), \pi(3), \dots, \pi(k-1) \}$ and $I_{r}=\{ \pi(k), \pi(k+1), \dots, \pi(n) \}$ respectively. Now, define $\phi_{n}(\pi)$ to be the binary tree whose left subtree is $\phi_{k-2}(\pi_{l})$ and whose right subtree is $\phi_{n-k+1}(\pi_{r})$. For example, $\phi_{6}(4, 3, 1, 2, 6, 5)$ would be evaluated like so:

![[Pasted image 20250227134805.png]]

**Surjectivity of $\phi_{n}$**
Let $I=[n]$. Consider a binary tree on $n$ vertices, $B$. Let $B_{l}$ and $B_{r}$ be its left and right subtrees. Define a permutation $\pi$ on $[n]$ by $\pi(1)\equiv|B_{l}|+1$, $(\pi(2), \dots, \pi(|B_{l}|+1))\equiv \phi_{_{|B_{l}|}}^{-1}(B_{l})$, $(\pi(|B_{l}|+2), \dots, \pi(n))\equiv \phi ^{-1}_{|B_{r}|}(B_{r})+(|B_{l}|+1)$ (abuse of notation: $|B_{l}|+1$ is added to each slot of $\phi ^{-1}_{|B_{r}|}(B_{r})$). Clearly, $\phi_{n}(\pi)=B$. Thus, $\phi ^{-1}_{n}(B)$ is non empty for all $B$. 

**Injectivity of $\phi_{n}$**
Let $\pi\in \phi_{n} ^{-1}(B)$. Then, $\pi (1)$ must have $|B_{l}|$ elements in $[n]$ that are less than it, and $|B_{r}|$ elements in $[n]$ that are greater than it. This fixes $\pi(1)$ to be $|B_{l}|+1$. The same principle applied to the subtrees fixes all $\pi(k)$, $1\leq k\leq n$. Thus, $\phi_{n}(\pi)$ is unique for all $\pi$.

Thus, the number of stack sortable permutations of $[n]$ is equal to $C_{n}$.


---
# Problem 8

### Part a

FTSOC, assume otherwise. Let $h\in G$ have an irreducible representation as a product of $N+1$ generators, $h\equiv g_{i_{1}}g_{i_{2}}\dots g_{i_{N+1}}$. It follows that $h_{1}\equiv g_{i_{1}}g_{i_{2}}\dots g_{i_{N}}$ cannot be written as a product of fewer than $N$ generators, since that would imply that $h$ can be written as a product of fewer than $N+1$ generators. Similarly, $h_{k}\equiv g_{i_{1}}\dots g_{i_{N+1-k}}$, $1\leq k\leq N$, cannot be written as a product of fewer than $N+1-k$ generators. It follows that $h\ne h_{1}\ne h_{2}\ne\dots\ne h_{N}$. But, a group of order $N$ cannot have $N+1$ distinct elements in it.

### Part b

Note that it is sufficient to solve the problem for the case of the $n$ distinct integers being prime. Let $\{ p_{1}, p_{2}, \dots, p_{n} \}$ be $n$ distinct primes. Then, $a_{1}, a_{2}, \dots, a_{N}$ is a sequence defined by $a_{i}=p_{s(i)}$, $1\leq s(i)\leq n$. For , $j< i$, let the tuple $(a_{j}, a_{j+1}, \dots, a_{i})$ be called an interval and denoted by $(j, i)$. The product of an interval can be expressed as
$$
\prod_{k=j}^{i} a_{k}=p_{1}^{\alpha_{1}}p_{2}^{\alpha_{2}}\dots p_{n}^{\alpha_{n}}.
$$
Observe that the product of an interval $(j, i)$ is a perfect square iff $\alpha_{k}\equiv {0}\mod 2$ for all $1\leq k\leq n$. Thus, it is beneficial to associate each interval $(i, j)$ with the vector $\phi(i, j)\equiv(\alpha_{1}\mod 2, \dots, \alpha_{n}\mod 2)$ in $\mathbb{F}_{2}^{n}$.  Define $S_{k}$ like so:
$$
\begin{align} \\
 & S_{0}\equiv \mathbf{0} \\
 & S_{1}\equiv \phi(1, 1) \\
 & S_{2}\equiv \phi(1, 2) \\
 & \vdots \\
 & S_{N}\equiv \phi(1, N).
\end{align}
$$
Now, $\phi(i, j)$ can be computed as $\phi(1, j)-\phi(1, i-1)=S_{j}-S_{i-1}$. So, the product of $(i, j)$ being a perfect square is equivalent to $S_{j}=S_{i-1}$. Since $|\mathbb{F}_{2}^{n}|=2^{n}$ and  $N\geq 2^{n}$ (which implies $N+1> 2^{n}$), we can conclude from the pigeonhole principle that at least two of the $S_{k}$s must be equal.