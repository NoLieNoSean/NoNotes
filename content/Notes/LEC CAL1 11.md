---
id: "180"
---


In the following lectures, we will describe properties of functions defined on $\mathbb{R}^{n}$.
## An order on higher dimensional euclidean spaces

There is a natural total order on $\mathbb{R}$. We have perviously seen that this natural order has the [[LUB property]] (we haven't constructed the reals yet, so we're still treating this as an axiom).

In $\mathbb{R}^{n}$, it is possible to define a total order, known as the lexicographic order, which is compatible with the algebraic operations of addition and scalar multiplication, but it satisfies neither the Archimedean property nor the LUB property. However, there is a more natural partial order on $\mathbb{R}^{n}$, which is compatible with the above operations and also satisfies the least upper bound property.

> [!Info] Some definitions for posets
> Let $S$ be a poset, and $D\subseteq S$. 
> - $D$ is said to be *bounded above* if there is $\alpha\in S$ such that $x\leq \alpha$ for all $x\in D$. Any such $\alpha$ is called an upper bound of $D$. Ditto for bounded below. If $D$ is bounded above and below, it is said to be bounded.
> - If $D\subseteq S$ is bounded below, then $m\in S$ is called a *greatest lower bound* or an infimum of $D$ if $m$ is a lower bound of $D$ and $\beta\leq m$ for every lower bound $\beta$ of $D$. Clearly, the infimum of $D$ is unique. Denote it by $\inf D$. 
> - $S$ is said to have the *LUB property* if every nonempty subset of $S$ that is bounded above has a supremum in $S$.

> [!Definition]
> Given any $\mathbf{x}=(x_{1}, x_{2}, \dots, x_{n})$ and $\mathbf{y}=(y_{1}, y_{2}, \dots, y_{n})$, in $\mathbb{R}^{n}$, define
> $$
> x\leq y\iff x_{i}\leq y_{i} \forall i=1, \dots, n.
> $$
> This is called the *product order* or the *component wise* order on $\mathbb{R}^{n}$.

Clearly, this is a partial order on $\mathbb{R}^{n}$. 

> [!Theorem] Properties of $(\mathbb{R}^{n}, \leq)$
> - Given any $\mathbf{x}, \mathbf{y}\in \mathbb{R}^{n}$ with $\mathbf{x}\leq \mathbf{y}$, we have $\mathbf{x}+\mathbf{z}\leq \mathbf{y}+\mathbf{z}$ for all $\mathbf{z}\in \mathbb{R}^{n}$. Also, for any $c\in \mathbb{R}$, $c\mathbf{x}\leq c\mathbf{y}$ if $c\geq 0$ and $c\mathbf{x}\geq c\mathbf{y}$ if $c\leq 0$. 
> - For any $\mathbf{x}, \mathbf{y}\in \mathbb{R}^{n}$ such that $x_{i}\geq 0$ and $x_{i}\ne 0$ for each $1\leq i\leq n$, there exists $c\in \mathbb{R}$ such that $c\mathbf{x}\geq \mathbf{y}$. 
> - $(\mathbb{R}^{n}, \leq)$ has the LUB property.


---
## Intervals, disks, and bounded sets

Quick recall of definitions in $\mathbb{R}$: given any $a, b\in \mathbb{R}$, $I_{a, b}\equiv[\text{min}(a, b), \text{max}(a, b)]$. A subset $I$ of $\mathbb{R}$ is said to be an *interval* if $I_{a, b}\subseteq I$ for all $a, b\in I$. 
We have [[LEC ANA1 22#Characterization of connected sets in R|seen]] that a subset of $\mathbb{R}$ is an interval iff it is an open interval or a closed interval or a semi-open interval or semi-infinite interval or the doubly infinite interval $\mathbb{R}$. 

We will now define analogous definitions for $\mathbb{R}^{n}$.

> [!Definition]
> Given any $\mathbf{a}, \mathbf{b}\in \mathbb{R}^{n}$, define
> $$
> I_{\mathbf{a}, \mathbf{b}}\equiv I_{a_{1}, b_{1}}\times\dots \times I_{a_{n}, b_{n}}.
> $$

> [!Definition]
> A subset $I$ of $\mathbb{R}^{n}$ is said to be an *n-interval* if $I_{\mathbf{a}, \mathbf{b}}\subseteq I$ for every $\mathbf{a}, \mathbf{b}\in I$. 

> [!Theorem] Proposition
> Let $I\subseteq \mathbb{R}^{n}$ be an n-interval. Then $I=I_{1}\times \dots \times I_{n}$ for some intervals $I_{1}, \dots, I_{n}$ in $\mathbb{R}$.
> 

> **Proof**
> For $1\leq j\leq n$, let $I_{j}$ denote the set of all possible $j$th coordinates of the elements of $I$, that is, 
> $$
> I_{j}\equiv \{ a\in \mathbb{R}\ | \  a_{j}=a\text{ for some }\mathbf{a}\in I \}.
> $$
> $I_{j}$ is an interval, for all $j$: Let $a, b\in I_{j}$. There are $\mathbf{a}, \mathbf{b}\in I$ such that $a_{j}=a$ and $b_{j}=b$. If $c\in I_{a, b}$, then there exists $\mathbf{x}\in I_{\mathbf{a}, \mathbf{b}}$ such that $x_{j}=c$, so $c\in I_{j}$.
> 
> It is clear that $I\subseteq I_{1}\times\dots \times I_{n}$. To prove the reverse inclusion, let $\mathbf{x}\in I_{1}\times\dots \times I_{n}$. Then there are $\mathbf{a}_{j}\in I$ such that $\mathbf{a}_{j, j}=x_{j}$ for $j=1, \dots, n$. Let $\mathbf{u}_{j}=(x_{1},\dots, x_{j}, a_{j, j+1}, \dots, a_{j, n})$. Note that $\mathbf{u}_{1}=\mathbf{a}_{1}\in I$. Now, $\mathbf{u}_{2}\in I_{\mathbf{u}_{1}\times \mathbf{a}_{2}}\subseteq I$. Continuing in this manner, we see that $\mathbf{u}_{j}\in I_{\mathbf{u}_{j-1}\times \mathbf{a}_{j}}\subseteq I$. Thus, $\mathbf{u}_{n}=\mathbf{x}\in I$. 
> 
> Thus, $I=I_{1}\times\dots \times I_{n}$.

The open square and open ball in $\mathbb{R}^{n}$ is defined as follows:

> [!Definition]
> Given any $\mathbf{c}\in \mathbb{R}^{n}$, and any $r> 0$, define
> $$
> S_{r}(\mathbf{c})=\{ \mathbf{x}\in \mathbb{R}^{n}\ | \  |x_{i}-c_{i}|< r \text{ for }i=1, \dots, n \},
> $$
> $$
> B_{r}(\mathbf{c})=\{ \mathbf{x}\in \mathbb{R}^{n}\ | \  |\mathbf{x}-\mathbf{c}|< r \}.
> $$

It follows that $D\subseteq \mathbb{R}^{n}$ is bounded iff there exists $r> 0$ such that $D\subseteq S_{r}(\mathbf{0})$. The diameter of $D\subseteq \mathbb{R}^{n}$ is defined just as it is for metric spaces.

