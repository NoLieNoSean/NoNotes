[[probsheet1.pdf|Problem sheet 1]].

## 1

The binary sequences in $\{ 0, 1 \}^{\mathbb{N}}$ can be represented as subsets of $\mathbb{N}$, with the nth bit deciding on whether $n$ is in the subset. 
### 1 a

$\{ \{ 1 \}, \{ 1, 2 \}, \{ 1, 2, 3 \}, \dots \}$

### 1 b

$\{ \{ 1 \}, \{ 2 \}, \{ 3 \} , \dots\}$

### 1 c

Find an uncountable antichain in $\{ 0, 1 \}^{\mathbb{N}}$

Let $a$ represent $01$, and $b$ represent $10$. Let $A$ be the set of all sequences of $a$s and $b$s. Note that a bijection between $A$ and $\{ 0, 1 \}^{\mathbb{N}}$ exists, so $A$ is uncountable. Also, no two elements in $A$ are comparable.

### 1 d

**Solution using Dedekind cuts**

We know that $\mathbb{Q}$ is countable. Let $\phi:\mathbb{Q}\to \mathbb{N}$ be a bijection. We know that every real number is uniquely determined by a Dedekind cut in $\mathbb{Q}$. So, for $r\in \mathbb{R}$, define 
$$
\psi(r)=\{ \phi(q)\ |\ q<r \}.
$$
$\mathbb{R}$ is uncountable, and $\psi$ associates each $r\in \mathbb{R}$ with a unique subset of $\mathbb{N}$ such that $\psi(r)\subset \psi(r')$ whenever $r<r'$.

**Alternate solution due to Negi**

Associate each $r\in(0.1, 1)$ with a subset of $\mathbb{N}$ like exemplified:

$$
\begin{align}
\phi(0.7184\dots)= &\{  \\ 
 &  1, 2, 3, 4, 5, 6, 7, \\
 & 10, 11, 12,  \dots, 71, \\
 & 100, 101, 102, \dots, 718, \\
 & \vdots \\

  & \}
\end{align}
$$
### 1 e

**Solution using a tree structure**

Construct a binary tree and associate each point with a natural number like so:
![[Pasted image 20250203224351.png]]
(The tree is infinite)

Now, with each node of the tree, associate a subset of $\mathbb{N}$ which consists of all the numbers of the nodes in the path between the node and the root of the tree. For example, the subset associated with 26 would be $\{ 1, 3, 6, 13, 26 \}$. Consider the set of all sets associated with every node in the tree. The intersection of any two elements of this set must necessarily have a finite intersection, since the paths to the two nodes corresponding to the elements must diverge at some point.

**Alternate solution due to Negi**

Associate each $r\in(0.1, 1)$ with a subset of $\mathbb{N}$ as exemplified:
$$
\begin{align}
\phi(0.13514\dots)= & \{ 1, 13, 135, 1351, \dots\}
\end{align}
$$
---
## 2

### 2 a

Consider all the functions which have $f(0)=k$. Then, the function can decrease its value by 1 at most $k$ times. Thus, we can associate the function with a k-tuple which records when the function performs the k-th drop. If the function settles at a constant value $v>0$, then we can fill the unused $v$ spots with zeroes. For example, the function
$$
f(x)=\begin{cases}
5 & 0\leq x <6 \\
4 & 6\leq x < 11 \\
2 & 11\leq x < 100 \\
1 & 100 \leq x
\end{cases}
$$
would be associated with the tuple $(6, 11, 11, 100, 0 )$. Note that $\bigcup_{n\in \mathbb{N}}\mathbb{N}^{n}$ is countable. We have an injection from the set of all non increasing functions from $\mathbb{N}$ to $\mathbb{N}$ to $\bigcup_{n\in \mathbb{N}}\mathbb{N}^{n}$. Thus, the set in question is countable.

### 2 b

A non decreasing function from $\mathbb{N}$ to $\mathbb{N}$ can be bijected to $\mathbb{N}^{\mathbb{N}}$. Associate each such function $f$ with the infinite tuple $(f(0), f(1)-f(0), f(2)-f(1), \dots)$. Thus, the set is uncountable.

### 2 c

Let $S$ be the set of all injective functions form $\mathbb{N}$ to $\mathbb{N}$. We can construct an injection from $\mathbb{N}^{\mathbb{N}}$ to $S$ like so: with $(a_{1}, a_{2}, a_{3}, \dots)\in \mathbb{N}^{\mathbb{N}}$, associate the function
$$
\begin{align}
 & f(0)=a_{1}  \\
 & f(1)=f(0)+a_{2}+1 \\
 & f(2)=f(1)+a_{2}+1 \\
 & \vdots
\end{align}
$$
$f$ is clearly injective, and unique to $(a_{1}, a_{2}, a_{3}, \dots)$. Thus, $|S|\geq |\mathbb{N}^{\mathbb{N}}|$, i.e, $S$ is uncountable.

### 2 d

Let $S$ be the set of all surjective functions from $\mathbb{N}$ to $\mathbb{N}$. We can construct an injection from $\mathbb{N}^{\mathbb{N}}$ to $S$ like so: with $(a_{1}, a_{2}, a_{3}, \dots)\in \mathbb{N}^{\mathbb{N}}$ associate a function like so:

$$
\begin{align}
f(x)= \begin{cases}
1 & 1\leq x < 1+a_{1} \\
2 & 1+a_{1}\leq x < 1+a_{1}+a_{2} \\
\vdots
\end{cases}
\end{align}
$$
Thus, $|S|\geq |\mathbb{N}^{\mathbb{N}}|$, i.e, $S$ is uncountable.

### 2 e

A Cantor diagonalization argument is a simple way to show that the set of all bijections from $\mathbb{N}$ to $\mathbb{N}$ is uncountable. 

**Alternate solution using the Riemann rearrangement theorem**

The Riemann rearrangement theorem states that for any conditionally convergent series $\sum_{n=1}^{\infty}a_{n}$ (e.g., the alternating harmonic series $∑_{n=1}^{∞} \frac{(−1)^{n+1}}{n}$), the terms can be rearranged (via a permutation of $\mathbb{N}$) to converge to **any** real number, or even diverge to $\pm \infty$. 

By the above theorem, for every real number $r$, there must exist at least one permutation $\sigma_{r}:\mathbb{N}\to \mathbb{N}$ such that
$$
\sum_{n=1}^{\infty} a_{\sigma_{r}(n)}=r.
$$
Thus, the set of all bijections from $\mathbb{N}$ to $\mathbb{N}$ is uncountable.

---

## 3

Consider the set of all binary sequences, $\{ 0, 1 \}^{\mathbb{N}}$. Replace $0$ with $00$ and $1$ with $01$. 

---

## 4

The Hausdorff maximal principle: Let $S$ be a partially ordered set. Then $S$ contains a maximal chain (i.e. a chain which is not contained in a bigger chain). 

Let $\mathbf{C}$ be the set of all chains in $S$. Define a partial order $\leq$ on $\mathbf{C}$ such that $C_{1}\leq C_{2}$ iff $C_{1}\subset C_{2}$. Let $\mathcal{C}$ be a chain in $(\mathbf{C}, \leq)$. Let $C'\equiv\bigcup_{C\in \mathcal{C}}C$. Any two elements in $C'$ are in some $C\in \mathcal{C}$, and are hence comparable, making $C'$ a chain in $S$, i.e. $C'\in \mathbf{C}$. It is evident that $C'$ is an upper bound for $\mathcal{C}$. Thus, every chain in $S$ has an upper bound. From [[DMAT_L3|Zorn's Lemma]], $S$ has a maximal element, i.e, a chain $\overline{C}$ which is not contained in any other chain.

---

## 5

Let $\mathcal{F}$ be a filter on $X$. We have to show that it is contained in an ultrafilter. Let $K_{\mathcal{F}}$ be the set of all filters on $X$ which contain (are supersets of) $\mathcal{F}$. Define a partial order $\leq$ on $K_{\mathcal{F}}$ by $\mathcal{F}_{1}\leq \mathcal{F}_{2}$ iff $\mathcal{F}_{1}\subset \mathcal{F}_{2}$. Consider a chain $C$ in $K_{\mathcal{F}}$. Let $\mathcal{\hat{F}}=\bigcup_{\mathcal{F}'\in C}\mathcal{F}'$. It is easily verified that $\mathcal{\hat{F}}$ is a filter on $X$ and $\mathcal{\hat{F}}$ contains $\mathcal{F}$, i.e. $\mathcal{\hat{F}}\in K_{\mathcal{F}}$. Thus, every chain in $(K_{\mathcal{F}}, \leq)$ has an upper bound. From Zorn's lemma, $(K_{\mathcal{F}}, \leq)$ must have a maximal element $\mathcal{\overline{F}}$. 

We will now show that $\mathcal{\overline{F}}$ is an ultrafilter. Suppose not. Let $C\in X$ such that $C\not\in \mathcal{\overline{F}}$ and $X\setminus C\not\in \overline{\mathcal{F}}$. Note that for all $A\in \mathcal{\overline{F}}$, $A\cap C\ne \emptyset$. Define $\mathcal{\tilde{F}}\equiv \{ Y\subset X\ | \ \exists A\in F, A\cap C\subset Y \}$. Clearly, $\mathcal{\overline{F}}\subset \mathcal{\tilde{F}}$. It is easy to verify that $\mathcal{\tilde{F}}$ is a filter. Thus, $\mathcal{\tilde{F}}\in K_{\mathcal{F}}$ and $\mathcal{\overline{F}}\leq \mathcal{\tilde{F}}$, which contradicts the maximality of $\mathcal{F}$. 

---

