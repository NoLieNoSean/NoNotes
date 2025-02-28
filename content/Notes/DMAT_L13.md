---
tags:
  - DMAT
  - Lecture
date: 2025-02-26
time: 11:51
---
## Edge Reconstruction Conjecture
### Statement:
Let $G$,$H$ be two graphs on $n$ vertices with $m$ edges
say $E(G) = \{e_1,...,e_m\}$
and $E(H) = \{f_1,...,f_m\}$
suppose $G\backslash e_i \cong H\backslash f_i\quad\forall i=1,2,...,m$
then  $G\cong H$ $\quad\forall m\geq 4$

note the bound $m\geq 4$. this is because the conjecture does not hold true when, say $m=3$. Indeed, the graph $G = (V,E)$ where $V=\{1,2,3\}$ and  $E= \{\{1,2\}, \{2,3\}\}$ stands as a counterexample

> [!Theorem] Theorem(Lovasz)
> If $m > \frac{1}{2}\binom{n}{2}$ then the conjecture holds.

>**Proof**
>
>original paper by Lovasz can be found here: https://www.sciencedirect.com/science/article/pii/0095895672900688
>
>Let $X$ be the set of all bijections $V(G)\rightarrow V(H)$
> If $G$ and $H$ are two graphs, denote by $G\rightarrow H$ the set $\{f | f:V(G)\rightarrow V(H) \text{ is a bijection such that } f(e_i)\in V(H)\quad\forall i = 1,2,...,m\}$.
> 
> We want to show that this set is nonempty.
> for any $S\subseteq E(G)$, define $G_{S} = (V(G), S)$
> now we will apply the principe of inclusion and exclusion.
> 
> Define $A_{i} = \{\phi | \phi : V(G) \rightarrow V(H) \text{ is a bijection such that }\phi(e_i) \in E(H^{c})\}$
> 
> (note that $\phi$ is a function on vertices.  $\phi(e_i)$ is the image of the set $e_{i} \subseteq V(G)$)
> 
> by the principle of inclusion and exclusion, we have
> $$\left|X\backslash \left(\bigcup_{i=1}^{m}A_{i}\right)\right| = \sum_{I\subseteq [m]}(-1)^{|I|}|A_{I}|$$
> the left hand side counts all bijections that dont map any edge $e_i$ of $G$ into $H^c$. So it is equal to $|G\rightarrow H|$. in the right hand side, $A_{I}$ is the set of all bijections that map $e_{i}$ into $H^{c}\quad\forall i\in I$  
> that is, $|A_{I}| = |G_{I}\rightarrow H^{c}|$
> substituting into our equation, we have
> $$|G\rightarrow H| = \sum_{I\subseteq [m]}(-1)^{|I|}|G_{I}\rightarrow H^{c}|\quad\quad\quad\cdots(1)$$
>similarly considering $H\rightarrow H$ we get the equation
>$$|H\rightarrow H| = \sum_{I\subseteq [m]}(-1)^{|I|}|H_{I}\rightarrow H^c|\quad\quad\quad\cdots(2)$$
>since every proper subgraph of $G$ is isomorphic to one and only one proper subgraph of $H$ (obtained from the hypothesis), the sum of terms in (1) and (2) with $I\neq [m]$ are equal. Since $m > \frac{1}{2}\binom{n}{2}$, $|G_{[m]}\rightarrow H^{c}| =|H_{[m]}\rightarrow H^{c}|= 0$ hence we get $|G\rightarrow H| = |H\rightarrow H|$ and the latter term is certainly greater than 0, proving that $|G\rightarrow H|$ is nonempty, our desired conclusion.
##  Posets

In order to further generalise the principle of inclusion and exclusion, we will develop some more theory on posets

### Posets as Algebras: Incidence Algebra

suppose that $X = (P, \leq)$ is a poset and $|P|=n$.
Define the Incidence algebra of $P$ by 
$I(P) := \{f:P\times P\rightarrow \mathbb{R}$ such that $f(x,y) = 0$ unless $x \leq y\}$

for $f,g\in I(P)$, define $(f+g)(x,y) = f(x,y) + g(x,y)$ so that $f + g\in I(P)$

for $\alpha\in\mathbb{R}\text{ and }f\in I(P)$, define $(\alpha\cdot f)(x,y) = \alpha f(x,y)$ so that $\alpha f\in I(P)$

for $f,g\in I(P)$, define $$(f\cdot g)(x,y) = \sum_{x \leq z \leq y}f(x,z)g(z,y)$$so that $f\cdot g\in I(P)$

with these definitions, the incidence algebra is indeed verified to be an algebra (a vector space with a bilinear product operation between vectors)

### Matrix Representation for the Algebra

Let $X' = \{x_1 \leq x_2\leq \cdots \leq x_n\}$ be a $\textit{linear extension}$ of the poset $X$. 

>[!info] What is a linear extension?
>A linear extension $X'$ of a partial order $X=(P,\leq)$ is a total order on $P$ that respects the poset structure. That is, if $x,y\in X$ such that $x\leq y$ , then in $X'$ , we have $x\leq y$ (abuse of notation).


Note that  $\varphi: I(P) \rightarrow M_{n}(\mathbb{R})$  given by $f \mapsto M_{f}$ where $M_{f} = [a_{ij}]_{n\times n} = [f(x_{i},x_{j})]_{n\times n}$
is an injective homomorphism of algebras. The trivial properties are easily verified.
We will only check that  $M_{fg} = \varphi(f\cdot g) = \varphi(f)\varphi(g) = M_{f}M_{g}$ 
before we verify said property, if $T$ is a matrix, let $T(i,j)$ denote the $ij$-th entry of $T$.
now indeed, $$M_{fg}(i,j) = \varphi(f\cdot g)(i,j) = \sum_{x_{i}\leq x_{k}\leq x_{j}}f(x_i,x_k)g(x_k,x_j) = \sum_{k=0}^{n}f(x_i,x_k)g(x_{k},x_{j})=\sum_{k=1}^{n}M_{f}(i,k)M(k,j)=(\varphi(f)\varphi(g))(i,j)$$
as desired. Thus the incidence algebra may be viewed as a subalgebra of the algebra of $n\times n$ matrices. Due to the isomorphism, we will be identifying the functions with their corresponding matrices without comment whenever necessary.

now we will investigate some important functions in $I(P)$

#### Identity Element
$\textit{The}$ identity element of $I(P)$ is $e(x,y) = \begin{cases}1, & x=y\\0 & \text{else}\end{cases}$

indeed, one may verify that for any $f\in I(P)$, we have $f\cdot e = e\cdot f = f$
note that this identity is unique, since the identity matrix is unique in $\varphi(I(P))$.
having defined the identity, we can talk about invertible elements
#### Invertible Elements
**Condition for invertibility**
note that $f$ is invertible $\iff$ $M_{f} = \varphi(f)$ is invertible $\iff$ All diagonal entries are nonzero $\iff$ $f(x,x) \neq 0\quad \forall x\in P$

**Finding the inverse**
From linear algebra, if $f$ is diagonal and integral then $f^{-1}$ is diagonal and integral.
we have $M_{f} = I - N$ for some strictly upper triangular matrix (thus nilpotent)
note that the inverse is therefore $M_{f}^{-1}  = I + N +N^2 + \cdots + N^{k}$ for some $k\in \mathbb{N}$
note that inverses are also unique

#### The Incidence Function

define the incidence function $i$ of $I(P)$ to be $i(x,y) = \begin{cases}1 & \text{if } x\leq y \text{ (}\leq\text{ taken in the partial order})\\ 0 & \text{otherwise}\end{cases}$

#### The Möbius function of $P$

The Möbius function is defined to be the inverse of the incidence function $i$.
by solving the equation $$\mu\cdot i = e$$ we get an inductive definition of the Möbius function $\mu$:
$$\mu(x,y) = \begin{cases}1 & \text{if } x=y\\-\sum_{x\leq z<y}\mu(x,z) & \text{if } x\neq y\end{cases}$$

suppose $P$ is a total order $a_1 < a_2 < \cdots < a_r$
then it is easily verified that
	 $\mu(x,x) = 1 \quad\forall x\in P$
	 $\mu(a_i,a_{i+1}) = -1 \quad\forall 1 \leq i \leq r-1$ and that
	 $\mu(a_i,a_j) = 0\quad\forall j > i+1$

>[!Lemma]
>The power set $\mathcal{P}([n])$ is order isomorphic to the cartesian product $\prod_{i=1}^{n}P_{i}$ where $P_{i} = \{a_i,b_i\}$ such that $a_i < b_i$

>**Proof**
>Indeed, $A\mapsto (\alpha_1,\alpha_2,...,\alpha_n)$ where $\alpha_i = a_i$ if $i \not\in A$ and $\alpha_i = b_{i}$ if $i\in A$ is an order preserving bijection

>[!Lemma]
>Let $P_1,P_2,...,P_n$ be posets with Möbius functions $\mu_i$. if $P = \prod_{i=1}^{n}P_{i}$, then its Möbius function $\mu$ is defined by $$\mu((\alpha_{1},\alpha_{2},...,\alpha_{n}) , (\beta_{1},\beta_{2},...,\beta_{n})) = \prod_{i=1}^{n}\mu_{i}(\alpha_{i},\beta_{i})$$

>**Proof** 
>call the product function on the right hand side $r$. Let $i$ be the incidence function of $P$. it is easily verified that $r\cdot i = i\cdot r = e$ and since inverses are unique, we have that the two functions are identical







---

## Edge reconstruction conjecture

Let $G$ and $H$ be two graphs on $n$ vertices with $m$ edges, $m\geq 4$ (trivial counter example for $m=3$).
$E(G)=\{ e_{1}, e_{2}, \dots, e_{m} \}$.
$E(H)=\{ f_{1}, f_{2}, \dots, f_{m} \}$.
Suppose $G\setminus e_{i}\cong H\setminus f_{i}$ for all $1\leq i\leq m$. Two graphs are said to be isomorphic if there exists a bijection $\phi$ between the vertex sets such that ...
Then, $G\cong H$.

> [!Theorem] Lovasz's theorem
> If $m> \frac{1}{2}\binom{n}{2}$, then the conjecture is true.

**Proof**
Let $\hat{G}\to \hat{H}$ (where $\hat{G}$ and $\hat{H}$ have the same number of vertices) represent the set of all bijections $\phi:V(G)\to V(H)$ such that every edge of $\hat{G}$ is mapped to an edge in $\hat{H}$. 

Now, let $A_{i}$ be the set of all bijections $\phi$ from $V(G)$ to $V(H)$ such that $\phi(e_{i})\in E(\overline{H})$ (note that the domain of $\phi$ has been overloaded here). 

We want $\left| X\setminus \bigcup_{i=1}^{m}A_{i} \right|$. From the PIE, 
$$
\begin{align}
\left| X\setminus \bigcup_{i=1}^{m} A_{i} \right| =\sum_{I\subseteq[m]}(-1)^{|I|}A_{I}.
\end{align}
$$
Recall that $A_{I}\equiv \bigcap_{x\in I}A_{i}$, $A_{\emptyset}\equiv X$, the set of all bijections that map $e_{i}$ to $\overline{H}$ for all $i\in I$. 



---
## Posets

We want to generalize [[DMAT_L12#Linear algebraic formulation|this]] to posets.

Let $(P, \leq)$ be a finite poset. $|P|=n$. Consider the set of all functions $I(P)$, called the incidence algebra of $P$, $f:P\times P\to \mathbb{R}$ such that $f(x, y)=0$ unless $x\leq y$. Define addition and scalar multiplication in the usual way, and observe that $I(P)$ is closed under these operations. Define multiplication like so:

$$
fg(x, y)\equiv\sum_{x\leq z\leq y}f(x, z)g(z, y).
$$
and note that $I(P)$ is closed under this operation. Thus, $I(P)$ is an algebra (A vector space equipped with vector multiplication).

### Matrix representation for the algebra $I(P)$

Let $x_{1}\leq x_{2}\leq \dots\leq x_{n}$ be a *linear extension*(a total order of $P$ which respects the partial order) of $P$. Let $M_{n}(\mathbb{R})$ be the algebra of $n\times n$ real matrices. Let $\phi:I(P)\to M_{n}(\mathbb{R})$ map $f$ to a matrix $M_{f}$ whose $i$, $j$ th entry is $f(x_{i}, x_{j})$. Note that $M_{f}$ is upper triangular for all $f\in I(P)$. $\phi$ is an injective homomorphism, because
$$
fg(x_{i}, x_{j})=\sum_{k=1}^{n} f(x_{i}, x_{k})g(x_{k}, x_{j}).
$$
Note that $\mathrm{Im}~\phi$ is NOT the set of all upper triangular matrices (it would be if $P$ was a total order). 

The *incidence function* of $P$ is defined to be 
$$
i(x, y)=\begin{cases}
1 & x\leq y (\text{in the partial order!})\\
0 &  \text{otherwise}
\end{cases}
$$
If $f\ne 0$ and $f$ is integral and the diagonal of $M_{f}$ is all ones, then $f^{-1}$ is integral.
The inverse of the incidence function is called the *Mobius function*. The mobius function is unique. For any $P$, its mobius function is uniquely defined by
- $\mu(x, x)=1$ for all $x$ and
- $\sum_{x\leq z\leq y}\mu(x, y)=0$ for all $x\ne y$.

- Mobius function for total order
- The mobius inversion formula
- power set poset is isomorphic to cartesian product poset
- Lemma: Mobius function of cartesian product of posets is the product of Mobius functions of posets
- mobius function for the power set poset, relation to what we covered in the prev lec
- 

---

## Chains and antichains in posets

> [!Theorem] 
> If $r$ is the maximum chain length in a poset $P$, then $P$ can be covered by $r$ antichains (and no fewer).

Since A chain and an antichain can intersect at most 1 point, the no fewer part should be clear.

> [!Theorem] Dilworth's theoem
> If $r$ is the maximum antichain length in $P$, then $P$ can be covered by $r$ antichains (and no fewer).

**Proof**
by induction.   


