2024-10-08
1409

---

## Recall:
$T:V\to W$ is a linear map, with $B_{V}$ and $B_{W}$ being bases of $V$ and $W$ resp.
The matrix of $T$ in a given basis is the matrix whose columns are coordinate vectors of $T(B_{V})$ with respect ti the basis $B_{W}$.

Example: $V=\mathbb{P}_{3}$, $W=\mathbb{P}_{2}$
$T$ is the derivative map.
$B_{V}=\{ 1, x, x^{2}, x^{3} \}$
$B_{W}=\{ 1, x, x^{2} \}$
$T(1)=0$
$T(x)=1$
$T(x^{2})=2x$
$T(x^{3})=3x^{2}$

Thus, 
$$
M_{B_{V}, B_{W}}(T)=\begin{bmatrix}
0 & 1 & 0 & 0 \\
0 & 0 & 2 & 0  \\
0 & 0 & 0 & 3
\end{bmatrix}
$$
$M_{B_{V}, B_{W}}(T)$ is the matrix of $T$ in the bases $B_{V}$ and $B_{W}$.

So, if the dimension of $V$ is $p$ and of $W$ is $q$, then $M_{B_{V}, B_{W}}(T)$ is a $q\times p$ matrix.

We know that every $T$ has a unique matrix for a fixed set of bases. Thus, $M_{B_{V}, B_{W}}(T)$ is a function.

Let $\text{Hom}(V, W)=\{ \text{All linear maps }T:V\to W \}$ 
Then, $M_{B_{V}, B_{W}}(T):\text{Hom}(V, W)\to \{ q\times p \text{ matrices} \}$

Exercise: this is an isomorphism of vector spaces.

So, there are many ways in which $\text{Hom}(V, W)\cong \{ q\times p\text{ matrices} \}$.
Thus, the dimension of $\text{Hom}(V, W)$ is $pq$. 

## Change of basis (2.4 in Hoffman)

Let $V$ be a vector space of dimension $n$
old basis $B_{V}=(\mathbf{v}_{2}, \mathbf{v}_{2}, \dots, \mathbf{v}_{n})$
new basis $B_{V}'=(\mathbf{w}_{2}, \mathbf{w}_{2}, \dots, \mathbf{w}_{n})$

Each $\mathbf{w}_{j}$ permits representation as a linear combination of $B_{V}$.
$$
\mathbf{w}_{j}=A\begin{bmatrix}p_{1, j} \\
p_{2, j} \\
\dots \\
p_{n, j}\end{bmatrix}
$$
where $A$ has the vectors of $B_{V}$ as its column vectors.
Thus, if $B$ is the matrix with $B_{V}'$ as its column vectors, we have
$$
B=A\begin{bmatrix}
p_{1, 1} & \dots & p_{1, n} \\
p_{2, 1} & \dots & p_{2, n} \\
\vdots & \vdots & \vdots \\
p_{n, 1} & \dots & p_{n, n}
\end{bmatrix}
$$

$\mathbf{u}=A\mathbf{c}=B\mathbf{c}'$
Thus, $\mathbf{u}=AP\mathbf{c}'$
So, $\mathbf{c}=P\mathbf{c}'$


Old coordinates = (change of basis matrix) New coordinates


---

$T:V\to W$
Old basis: $B_{V}, B_{W}$.
New basis: $B_{V}', B_{W}'$.
Let $A$ be the matrix of $T$ in the old basis.
Let $P$ and $Q$ be the change of basis matrices in $V$ and $W$.

$\mathbf{v}(\in V)\to_{B_{W}}\text{ Old coordinates of }\mathbf{v}.\text{ Say }\mathbf{x}\to_{A}\text{Old coordinate of }T(\mathbf{v})\to_{B_{W}}T\mathbf{v}$

Then, the matrix of $T$ in the new basis is $Q^{-1}AP$, i.e
$M_{B_{V}',B_{W}'}(T)=Q^{-1}M_{B_{V},B_{W}}(T)P$


## Composition of linear maps in terms of the matrices

       $V\to_{T}W\to_{S}U$
Dim    $p$.           $q$          $r$.
basis  $B_{V}$        $B_{W}$      $B_{U}$

$M_{B_{V}, B_{U}}(S\circ T)=M_{B_{W}, B_{U}}(S)M_{B_{V}, B_{W}}(T)$



stuff


---
## "Good basis" for a linear map

$T:V\to W$
dim $V=p$
dim $W=q$
