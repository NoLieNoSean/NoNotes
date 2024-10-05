 Let $f_{A}:\mathbb{R}^{c}\to \mathbb{R}^{r}$. Let $W$ be a subspace of $\mathbb{R}^{c}$ with basis vectors $\mathbf{w}_{1}, \mathbf{w}_{2}, \dots, \mathbf{w}_{n}$, where $n\le c$. If $W$ is the kernel of $A$, find all possible matrices $A$.

## Method 1
The column space must be $c-n$ dimensional. If we assume $A$ is in RREF, then $A$ must have $c-n$ pivots. Try to solve for the non pivot cells in every possible arrange of the pivots. One should work. Can get very tedious very quick.

### Example 1.1
Basis of $W$ is $(3, 1, 1)^{T}$ and $(2, 3, 2)^{T}$, $c=r=3$. 

$A$ must have 1 pivot. So, $A$ is of the form
$$
\begin{bmatrix}
1 & \alpha & \beta \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix},
\begin{bmatrix}
0 & 1 & \alpha \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix} \text{ or }
\begin{bmatrix}
0 & 0 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}.
$$
Try to solve for the unknowns in each possibility. For example, for the first one we get
$$
\begin{align}
 & A\begin{bmatrix}
3 \\
1 \\
1
\end{bmatrix}=\mathbf{0}\implies3+\alpha+\beta=0,  \\
 & A\begin{bmatrix}
2 \\
3 \\
2
\end{bmatrix}=\mathbf{0}\implies 2+3\alpha+2\beta=0.  \\
\end{align}
$$
$\alpha=4$ and $\beta=-7$ satisfy the equations. It can be verified that the other two possible forms of $A$ do not work. Thus, 
$$
\begin{bmatrix}
1 & 4 & -7 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
is one possible solution for $A$. Since performing row operations does not change the kernel of a matrix, any matrix obtained by performing row operations on the above matrix is also a solution.

## Method 2
Let $A$ be in RREF. Recall how we found the null space of a matrix [[Algebra1_L9#Example 3|here]]. We will reverse engineer it. Note that given the three basis vectors we derived there, it is possible to write the matrix we started with. Also note that those three vectors are in a specific form - if you combine them to form a matrix, and take its transpose, they seem to be in a kind of "reverse reduced row echelon form":
$$
\begin{bmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
0 & -p & 1 & 0 & 0 & 0 \\
0 & -p & 0 & -r & 1 & 0
\end{bmatrix}
$$
We will try to achieve this form using row operations. Remember, row operations do not change the span of the row vectors.


### Example 2.1
Example: basis of $W$ is $(3, 1, 1)^{T}$ and $(2, 3, 2)^{T}$, $c=r=3$.

If we package the basis of $W$ as row vectors in a matrix, we get
$$
\begin{bmatrix}
3 & 1 & 1 \\
2 & 3 & 2
\end{bmatrix}.
$$
We will now, using row operations, bring it to the form mentioned above.
$$
\begin{bmatrix}
3 & 1 & 1 \\
2 & 3 & 2
\end{bmatrix}\to
\begin{bmatrix}
3 & 1 & 1 \\
1 & \frac{3}{2} & 1
\end{bmatrix}\to
\begin{bmatrix}
2 & -\frac{1}{2} & 0 \\
1 & \frac{3}{2} & 1
\end{bmatrix}\to
$$
$$
\begin{bmatrix}
-4 & 1 & 0 \\
1 & \frac{3}{2} & 1
\end{bmatrix}\to
\begin{bmatrix}
-4 & 1 & 0 \\
7 & 0 & 1
\end{bmatrix}
$$
So, $(-4, 1, 0)^{T}$ and $(7, 0, 1)^{T}$ are a basis for $W$ in the form we required. We can now write express the elements of $W$ like so:
$$
W=\left\{\alpha 
\begin{bmatrix} 
-4 \\
1 \\
0
\end{bmatrix}+\beta
\begin{bmatrix} 
7 \\
0 \\
1
\end{bmatrix}
\right\}
$$
Let $\mathbf{x}=(x_{1}, x_{2}, x_{3})^{T}$. Then, all $\mathbf{x}$ of the form 
$$
\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}=\begin{bmatrix}
-4\alpha+7\beta \\
\alpha \\
\beta
\end{bmatrix}
$$
should satisfy $A\mathbf{x}=0$, i.e, 
$$
A\begin{bmatrix}
-4x_{2}+7x_{3} \\
x_{2} \\
x_{3}
\end{bmatrix}=\mathbf{0}
$$
Clearly, $x_{1}$ is a pivot variable, since it is determined by $x_{2}$ and $x_{3}$, which are free variables. It is easy to work out $A$ now. We get
$$
A=
\begin{bmatrix}
1 & 4 & -7 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}.
$$
Again, we are free to perform row operations on this to obtain solutions that are not in RREF form. 


### Example 2.2
Example: basis of $W$ is $(3, 1, 1)^{T}$, $c=r=3$.
Note that $\begin{bmatrix}3&1&1\end{bmatrix}$ is already in "reverse reduced row echelon form". Thus, we have
$$
A\begin{bmatrix}
3x_{3} \\
x_{3} \\
x_{3}
\end{bmatrix}=\mathbf{0}
$$
Note that $x_{3}$ is the only free variable, with $x_{2}$ and $x_{1}$ being pivot variables. Thus, we get 
$$
A=\begin{bmatrix}
1 & 0 & -3 \\
0 & 1 & -1 \\
0 & 0 & 0
\end{bmatrix}.
$$
## Method 3
Here, we will first find the set of all vectors that are perpendicular to $W$. This is a subspace (If in doubt, prove). We will find the basis $B$ of this subspace. Then, we will use the fact that any vector $\mathbf{v}$ in $\mathbb{R}^{c}$ is mapped to $\mathbf{0}$ by $A$ (i.e, is a member of $W$) iff the dot product of $\mathbf{v}$ with every member in the basis $B$ is zero.

### Example 3.1
Example: basis of $W$ is $(3, 1, 1)^{T}$ and $(2, 3, 2)^{T}$, $c=r=3$.

First, we find the subspace $W'$ perpendicular to $W$. Let $\mathbf{v}=(v_{1}, v_{2}, v_{3})^{T}$ be in $W'$. Then, we must have
$$
\begin{align}
\mathbf{v}\cdot \begin{bmatrix}
3 \\
1 \\
1 
\end{bmatrix}=\mathbf{0}
\ \ \text{ and }\ \ 
\mathbf{v}\cdot \begin{bmatrix}
2 \\
3 \\
2 
\end{bmatrix}=\mathbf{0}.
\end{align}
$$
Thus, we have
$$
\begin{align}
 & 3v_{1}+v_{2}+v_{3} =0 \\
 & 2v_{1}+3v_{2}+2v_{3} =0 \\
 \\
\iff  & \begin{bmatrix}
3 & 1 & 1 \\
2 & 3 & 2
\end{bmatrix}\mathbf{v}=\mathbf{0} \\
 \\
\iff & \begin{bmatrix}
1 & 0 & \frac{1}{7} \\
0 & 1 & \frac{4}{7}
\end{bmatrix}\mathbf{v}=\mathbf{0} \\
\end{align}
$$
Thus, $\{(1, 4, -7)^{T}\}$ is a basis of $W'$. Note that it will always be the case that the dimension of $W'$ will be equal to the rank or column span of the matrix. Thus, we can arbitrarily pick $n-c$ vectors form a basis of the codomain, and scale each by the dot product of the input vector with one of the basis vectors of $W'$. In this case, we have
$$
A\mathbf{x}=\left(\mathbf{x}\cdot \begin{bmatrix}
1 \\
4 \\
-7
\end{bmatrix}\right)\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}=\begin{bmatrix}
1 & 4 & -7  \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}
$$

### Example 3.2
Find one matrix $A\in M_{3\times4}(\mathbb{R})$ such that the basis for $\text{Ker }A$ is $\left( \begin{bmatrix}3\\1\\0\\0\end{bmatrix}, \begin{bmatrix}-2\\0\\-6\\0\end{bmatrix} \right)$, and then describe all matrices with this property.


Let $W$ be the kernel of $A$. Let $W'$ be the set of all vectors perpendicular to $W$. Let $\mathbf{v}\in W'$. 
Then, we have
$$
\begin{align}
 & \begin{bmatrix}
3 & 1 & 0 & 0 \\
-2 & 0 & -6 & 0
\end{bmatrix}\mathbf{v}=\mathbf{0} \\
 \\
\iff & \begin{bmatrix}
1 & 0 & 3 & 0 \\
0 & 1 & -9 & 0
\end{bmatrix}\mathbf{v}=0
\end{align}
$$
Thus, $\{ (-3, 9, 1, 0)^{T}, (0, 0, 0, 1)^{T} \}$ is a basis for $W'$. Thus, we have
$$
A\mathbf{x}=\left( \mathbf{x}\cdot\begin{bmatrix}
-3 \\
9 \\
1 \\
0
\end{bmatrix} \right)\begin{bmatrix}
1 \\
0 \\
0
\end{bmatrix}
+
\left( \mathbf{x}\cdot\begin{bmatrix}
0 \\
0 \\
0 \\
1
\end{bmatrix} \right)\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix}=
\begin{bmatrix}
-3 & 9 & 1 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
x_{1} \\
x_{2} \\
x_{3}
\end{bmatrix}.
$$
Any matrix obtained by performing row operations on this matrix will also have the same kernel. Thus, matrices whose rows are of the form $(-3a, 9a, a, b)$ will have $W$ as their kernel. 



