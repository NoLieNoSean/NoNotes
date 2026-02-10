---
id: "404"
date: 2026-02-10
time: 13:28
tags:
  - TOP
---
> [!Exercise] @munkresTopology2000 Exr 17.13
> Show that $X$ is Hausdorff iff the diagonal $\Delta=\{ x \times x:x\in X \}$ is closed in $X \times X$. 

Suppose $X$ is Hausdorff. Let $x_{1}\times x_{2}\in X\times X\setminus\Delta$. Then, $x_{1}\ne x_{2}$, so there exist open $U_{1}, U_{2}\subseteq X$ such that $U_{1}\ni x_{1}$, $U_{2}\ni x_{2}$, and $U_{1}\cap U_{2}=\emptyset$. Now, $U_{1}\times U_{2}$ is an open neighborhood of $x_{1}\times x_{2}$ in $X\times X$, and is disjoint from $\Delta$ since $U_{1}$ and $U_{2}$ are disjoint. Thus, $\Delta$ is closed in $X\times X$. 

Conversely, suppose $\Delta$ is closed in $X\times X$. Let $x_{1}, x_{2}\in X$ be distinct. There exists a basis element $U_{1}\times U_{2}$ containing $x_{1}\times x_{2}$ disjoint from $\Delta$. It follows that, $U_{1}\ni x_{1}$, $U_{2}\ni x_{2}$, and $U_{1}\cap U_{2}=\emptyset$. Thus, $X$ is Hausdorff. 

---

> [!Exercise] @munkresTopology2000 Exr 17.19
> If $A\subseteq X$, we define the boundary of $A$ by $\partial A=\overline{A}\cap \overline{(X\setminus A)}$. 
> 1. Show that $A^{\circ}\cap \partial A=\emptyset$ and $\overline{A}=A^{\circ}\cup \partial A$. 
> 2. Show that $\partial A=\emptyset \iff A$ is clopen. 
> 3. Show that $U$ is open $\iff$ $\partial U=\overline{U}\setminus U$.
> 4. If $U$ is open, is it true that $U=(\overline{U})^{\circ}$?

**Part 1** Suppose $x\in A^{\circ}$. There exists open $U\subseteq A$ such that $x\in U$. Since $U$ does not intersect $X\setminus A$, $x\not\in \overline{X\setminus A}$, and hence $x\not\in \partial A$. Next, suppose $x\in \overline{A}\setminus A^{\circ}$. Then every open neighborhood of $x$ intersects $X\setminus A$, so $x\in \overline{X\setminus A}$ by definition. Thus, $x\in \overline{A}\cap \overline{(X\setminus A)}=\partial A$. 

**Part 2** Using part 1, $\partial A=\emptyset  \iff \overline{A}=A^{\circ}$. Since $A^{\circ}\subseteq A\subseteq \overline{A}$, we have $A=A^{\circ}=\overline{A}$. Since $A^{\circ}$ is open and $\overline{A}$ is closed, $A$ must be clopen. 

**Part 3** If $U$ is open, $\overline{X\setminus U}=X\setminus U$. Thus, $\partial U=\overline{U}\cap(X\setminus U)=\overline{U}\setminus U$. 

**Part 4** No. Consider the set $\{ a, b \}$ with the topology $\{ \{ a \}, \{ a, b \} \}$. The closure of $\{ a \}$ is $\{ a ,b \}$, the interior of which is $\{ a, b \}$. 


---

> [!Exercise] @munkresTopology2000 Exr 18.8
> Let $Y$ be an ordered set in the order topology. Let $f, g:X\to Y$ be continuous. 
> 1. Show that the set $\{ x:f(x)\leqslant g(x) \}$ is closed in $X$. 
> 2. Let $h:X\to Y$ be the function $h(x)=\min\{ f(x), g(x) \}$. Show that $h$ is continuous. 

$Y$ is Hausdorff under the order topology. Indeed, let $a, b\in Y$ such that $a< b$. If there exists $x$ such that $a< x< b$, then the open sets $\{ y:y< x \}$ and $\{ y:y> x \}$ work. Otherwise, the open sets $\{ y:y< b \}$ and $\{ y:y> a \}$ are disjoint and hence can be used instead. 

**Part 1** Consider $x\in \{ x:g(x)< f(x) \}=:S$. Let $U_{1}, U_{2}\subseteq Y$ be disjoint open sets containing $g(x)$ and $f(x)$; as above, we can pick these such that $U_{1}< U_{2}$. We can find open neighborhoods $V_{1}, V_{2}\subseteq X$ of $x$ such that $g(V_{1})\subseteq U_{1}$ and $f(V_{2})\subseteq U_{2}$. Thus, $g(V_{1}\cap V_{2})\subseteq U_{1}$ and $f(V_{1}\cap V_{2})\subseteq U_{2}$, so $V_{1}\cap V_{2}\subseteq S$. It follows that $S$ is open. 

**Part 2** Let $A, B\subseteq X$ be the closed sets $\{ x:f(x)\leqslant g(x) \}$ and $\{ x:g(x)\leqslant f(x) \}$. On $A$, $h=f$, and on $B$, $h=g$. Thus, $h$ is continuous on $A$ and $B$. Clearly, $A\cup B=X$ and $f=g$ on $A\cap B$, so $h$ is well defined on $X$. By the pasting lemma, $h$ is continuous. 

---

> [!Exercise] @munkresTopology2000 Exr 19.7
> Let $\mathbb{R}^{\infty}$ be the subset of $\mathbb{R}^{\omega}$ consisting of all sequences that are eventually zero. What is the closure of $\mathbb{R}^{\infty}$ in $\mathbb{R}^{\omega}$ in the box and product topologies?

The closure of $\mathbb{R}^{\infty}$ in the box topology is $\mathbb{R}^{\infty}$. Indeed, let $\mathbf{a}\in \mathbb{R}^{\omega}$ have infinitely many nonzero terms $\{ a_{i}:i\in S\subseteq \mathbb{N} \}$. Let
$$
U_{i}=\begin{cases}
(0, 2a_{i}) & i\in S \\
\mathbb{R} & i\not\in S.
\end{cases}
$$
Then, $\prod_{i\in \mathbb{N}}U_{i}$ is an open neighborhood of $\mathbf{a}$ which does not intersect $\mathbb{R}^{\infty}$. 

The closure of $\mathbb{R}^{\infty}$ in the product topology is $\mathbb{R}^{\omega}$. Let $\mathbf{a}\in \mathbb{R}^{\omega}$, and let $U=\prod_{i\in \mathbb{N}}U_{i}$ be a basis element containing $\mathbf{a}$ (where $U_{i}=\mathbb{R}$ for all $i\not\in S'$, $|S'|< \infty$). Then, 
$$
\mathbf{b}=\begin{cases}
\text{some member of }U_{i} & i\in S' \\
0 & i\not\in S'
\end{cases}
$$
is a member of $\mathbb{R}^{\infty}$ contained in $U$. 

---

> [!Exercise] @munkresTopology2000 Exr 20.5
> What is the closure of $\mathbb{R}^{\infty}$ in $\mathbb{R}^{\omega}$ in the uniform topology?

If $\mathbf{a}\in \mathbb{R}^{\omega}$ is in the closure of $\mathbb{R}^{\infty}$, then every $\epsilon$-ball centered at $\mathbf{a}$ must contain a sequence that is eventually zero. This is exactly the same as saying $\mathbf{a}$, seen as a sequence, converges to $0$. Thus, The closure of $\mathbb{R}^{\infty}$ in $\mathbb{R}^{\omega}$ in the uniform topology is the set of all sequences that converge to $0$. 

---

> [!Exercise] @munkresTopology2000 Exr 20.6
> Let $\overline{\rho}$ be the uniform metric on $\mathbb{R}^{\omega}$. Given $\mathbf{x}=(x_{1}, x_{2}, \dots)\in \mathbb{R}^{\omega}$ and given $0<\epsilon< 1$, let
> $$
> U(\mathbf{x}, \epsilon)=(x_{1}-\epsilon, x_{1}+\epsilon)\times \dots \times(x_{n}-\epsilon, x_{n}+\epsilon)\times\dots.
> $$
> 1. Show that $U(\mathbf{x}, \epsilon)$ is not equal to the $\epsilon$-ball $B_{\overline{\rho}}(\mathbf{x}, \epsilon)$. 
> 2. Show that $U(\mathbf{x}, \epsilon)$ is not open in the uniform topology.
> 3. Show that
> $$
> B_{\overline{\rho}}(\mathbf{x}, \epsilon)=\bigcup_{\delta<\epsilon}U(\mathbf{x}, \delta).
> $$

**Part 1** Consider the sequence $\mathbf{x}'=\{ x_{n}+\epsilon-1/n \}_{n=1}^{\infty}\in U(\mathbf{x}, \epsilon)$. Since $\sup_{n\in \mathbb{N}}(\epsilon-1/n)=\epsilon$, $\mathbf{x}'\not\in B_{\overline{\rho}}(\mathbf{x}, \epsilon)$. 

**Part 2** $\mathbf{x}'$ is an element of $U(\mathbf{x}, \epsilon)$ which does not have an open neighborhood in $U(\mathbf{x}, \epsilon)$. For $\epsilon'> 0$, let $N$ be such that $1/N<\epsilon'$. Then, the sequence 
$$
\left\{ \quad \begin{cases}
x_{n}+\epsilon-1/n &n< N \\
x_{n}+\epsilon & n\geqslant  N
\end{cases} \quad \right\}_{n=1}^{\infty}
$$
is in $B_{\overline{\rho}}(\mathbf{x}', \epsilon')$ but not in $U(\mathbf{x}, \epsilon)$. 

**Part 3** Let $\mathbf{y}\in B_{\overline{\rho}}(\mathbf{x}, \epsilon)$. Let $\delta$ be such that $\overline{\rho}(\mathbf{x}, \mathbf{y})<\delta<\epsilon$. Clearly, $\mathbf{y}\in U(\mathbf{x}, \delta)$. The stated equality follows. 

---

> [!Exercise] @munkresTopology2000 Exr 21.8
> Let $X$ be a topological space and let $Y$ be a metric space. Let $f_{n}:X\to Y$ be a sequence of continuous functions. Let $x_{n}$ be a sequence of points of $X$ converging to $x$. Show that if $\{ f_{n} \}\rightrightarrows f$, then $\{ f_{n}(x_{n}) \}\to f(x)$. 

Write
$$
\begin{align}
d(f_{n}(x_{n}),f(x)) & \leqslant d(f_{n}(x_{n}),f(x_{n}))+d(f(x_{n}),f(x)).
\end{align}
$$
Let $\epsilon> 0$. Let $N_{1}$ be such that $d(f(x), f_{n}(x))<\epsilon$ for all $n\geqslant N_{1}$ and for all $x\in X$. By @munkresTopology2000 Thm 21.6, $f$ is continuous. It follows that $\{ f(x_{n}) \}\to f(x)$. Let $N_{2}$ be such that $d(f(x_{n}), f(x))<\epsilon$ for all $n\geqslant N_{2}$. Let $N=\max(N_{1}, N_{2})$. Then, 
$$
\begin{align}
d(f_{n}(x_{n}), f(x))\leqslant 2\epsilon. 
\end{align}
$$

