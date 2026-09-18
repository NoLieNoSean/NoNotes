---
id: "554"
date: 2026-09-08
time: 14:11
tags:
  - Lecture
  - LIALG
---
Let $F$ be a field. Let $\overline{F}$ be the algebraic closure of $F$. Let $V$ be a fintie dimensional vector space over $F$. Let $x\in \text{End}(V)$. Then, $x$ is said to be semisimple if the roots of the minimal polynomial of $c$ over $F$ in $\overline{F}$ are distinct. 

> [!Exercise]
> Let $F$ be an algebraically closed field. Let $V$ be a finite dimensional vector space over $F$. Show that an element $x\in \text{End}(V)$ is semisimple iff $x$ is diagonalizable. 

^3efc10

[!Proposition] Jordan Chevalley
Let $F$ be an algebraically closed field. Let $V$ be a finite dimensional vector space over $F$. Let $x\in \text{End}(V)$. Then we have
1. There is a unique pair $x_{s}, x_{n}$ of commuting endomorphisms of $V$ such that $x_{s}$ is semisimple and $x_{n}$ is nilpotent and $x=x_{s}+x_{n}$. 
2. There are polynomials $p(T), q(T)\in F[T]$ without constant terms such that $p(x)=x_{s}$ and $q(x)=x_{n}$. In particular, both $x_{s}$ and $x_{n}$ commute with each endomorphism of $V$ commuting with $x$. 
3. Let $A\subseteq B$ be two vector subspaces of $V$ such that $x(B)\subseteq A$. THen we have $x_{s}(B)\subseteq A$ and $x_{n}(B)\subseteq A$. 

[!Proof]-

Let $c(T)\in F[T]$ be the characteristic polynomial of $x$ over $F$. Since $F$ is algebraically closed, $c(T)=\prod_{j=1}^{r}(T-a_{j})^{m_{j}}$. 

Now, for each $1\leqslant j\leqslant r$, let $V_{j}=\{ v\in V:(x-a_{j}\cdot1)^{m_{j}}(v)=0 \}$, that is, $V_{j}=\ker(x-a_{j}\cdot 1)^{m_{j}}$. Then we have
$$
\begin{align}
V=\bigoplus_{j=1}^{r}V_{j}.
\end{align}
$$
For each $1\leqslant j\leqslant r$, let $I_{j}=F[T](T-a_{j})^{m_{j}}$. 

Claim: There is a polynomial $p(T)\in F[T]T$ such that $p(T)-a_{j}\in I_{j}$ for every $1\leqslant j\leqslant r$. 

Case 1: $0$ is an eigenvalue of $x$. That is, $a_{i}=0$ for some $1\leqslant i\leqslant r$. Note that $\{ I_{j}:1\leqslant j\leqslant r \}$ is a finite collection of pairwise comaximal ideals of $F[T]$. Therefore, by CRT, there is a natural surjective homomorphism
$$
\begin{align}
\varphi:F[T]\to\bigoplus_{j=1}^{r} F[T]/I_{j} 
\end{align}
$$
defined by $\varphi(f)=(f+I_{1}, \dots, f+I_{r})$.

Hence, there is a polynomial $p(T)\in F[T]$ such that $\varphi(p(T))=(a_{1}+I_{1}, \dots, a_{r}+I_{r})$, that is, $p(T)-a_{j}\in I_{j}$. Since $a_{i}=0$, $p(T)\in F[T]T$. 

Case 2: $a_{j}\ne 0$ for all $1\leqslant j\leqslant r$. Take $I_{r+1}:=F[T]T$. Then $\{ I_{j}:1\leqslant j\leqslant r+1 \}$ is a finite collection of pairwise comaximal ideals of $F[T]$. By CRT again, there exists a natural surjective homomorphism
$$
\begin{align}
\varphi:F[T]\to\bigoplus_{j=1}^{r+1}F[T]/I_{j}.
\end{align}
$$
defined as usual. Therefore, there is a polynomial $p(T)\in F[T]$ such that $\varphi(p(T))=(a_{1}+I_{1}, \dots, 0+I_{r+1})$. Therefore, $p(T)-a_{j}\in I_{j}$ for all $1\leqslant j\leqslant r+1$, and $p(T)\in F[T]T$. 

Since $p(T)-a_{j}\in I_{j}$, there is a $f_{j}(T)\in F[T]$ such that $p(T)-a_{j}=f_{j}(T-a_{j})^{m_{j}}$. Now, let $x_{s}=p(x)$. Fix $1\leqslant j\leqslant r$. Let $v\in V_{j}$. Then,
$$
\begin{align}
(x_{s}-a_{j}\cdot 1)(v)=(p(x)-a_{j}\cdot 1)(v)= f_{j}(x)(x-a_{j}\cdot 1)^{m_{j}}(v)=0.
\end{align}
$$
Thus, $x_{s}$ is diagonalizable. It follows from [[LEC LIALG 9#^3efc10]] that $x$ is semisimple. 

Let $q(T)=T-p(T)\in F[T]T$. Now, let $x_{n}=q(x)$. Fix $1\leqslant j\leqslant r$. Let $v\in V_{j}$. 
$$
\begin{align}
x_{n}^{m_{j}}(v) & =(x-p(x))^{m_{j}}(v) \\
 & =(x-x_{s})^{m_{j}}(v) \\
 & =(x-a_{j})^{m_{j}}(v) \\
 & =0.
\end{align}
$$
Let $m=\max\{ m_{j}:1\leqslant j\leqslant r \}$. $x_{n}^{m}=0$. Further, we have $x=x_{n}+x_{s}$. It remains to show the uniqueness of this decomposition. Let $x=s+n$ be another decomposition. Then $s$ and $n$ commute with each other and $s$ is semisimple and $n$ is nilpotent. Since $s$ commutes with $n$, $s$ commutes with $x$. Hence $s$ commutes with $x_{s}=p(x)$. Hence $x_{s}$ and $s$ are commuting diagonalizable endomorphisms of $V$. Hence, the difference $x_{s}-s$ is diagonalizable. 

Since $n$ commutes with $s$, $n$ commutes with $x$. Hence $n$ commutes with $x_{n}=q(x)$. Hence $x_{n}$ and $n$ are commuting nilpotent endomrophisms of $V$. Therefore, the difference $n-x_{n}$ is nilpotent. Since $x=x_{s}+x_{n}=s+n$, $x_{s}-s=n-x_{n}$ is both diagonalizable and nilpotent. Hence $x_{s}-s=n-x_{n}=0$. So, $x_{s}=s$ and $x_{n}=n$. 


---


[!Corollary]
Let $F$ be an algebraically closed field. Let $V$ be a finite dimensional vector space over $F$. Let $x\in \text{End}(V)$. Let $x=x_{s}+x_{n}$ be the Jordan-Chevalley decomposition of $x$. Then 
$$
\begin{align}
\text{ad}_{\mathfrak{gl}(V) }(x)=\text{ad}_{\mathfrak{gl}(V) }(x_{s})+\text{ad}_{\mathfrak{gl}(V) }(x_{n})
\end{align}
$$
is the J-C decomposition of $\text{ad}_{\mathfrak{gl}(V)}\in \text{End}(\text{End}(V))$. 

[!Proof]-

Since $x_{s}$ is semisimple, $x_{s}$ is diagonalizable. Hence there is a basis $\{ v_{1}, \dots, v_{n} \}$ of $V$ relative to which the matrix of $x_{s}$ is diagonal, say $\text{diag}(a_{1}, \dots, a_{n})$. For each pair $(i, j)\in \mathbb{N}^{2}$ such that $1\leqslant i, j\leqslant n$, let $s_{ij}\in \text{End}(V)$ be such that the matrix of $s_{ij}$ relative to $\{ v_{1}, \dots, v_{n} \}$ is $e_{ij}$. 
$$
\text{ad}_{\mathfrak{gl}(V) }(s_{ij})=(a_{i}-a_{j})s_{ij}.
$$
Thus, $\text{ad}_{\mathfrak{gl}(V)}(x_{s})$ is diagonalizable. Hence $\text{ad}_{\mathfrak{gl}(V)}(x_{s})$ is semisimple. 

Further, $\text{ad}_{\mathfrak{gl}(V)}(x_{n})=\lambda_{x_{n}}-\rho_{x_{n}}$ is nilpotent. 
$$
\text{ad}_{\mathfrak{gl}(V) }=\text{ad}_{\mathfrak{gl}(V) }(x_{s})+\text{ad}_{\mathfrak{gl}(V) }(x_{n}).
$$
$$
\begin{align}
[\text{ad}_{\mathfrak{gl}(V) }(x_{s}), \text{ad}_{\mathfrak{gl}(V) }(x_{n})]=\text{ad}_{\mathfrak{gl}(V) }([x_{s}, x_{n}])=\text{ad}_{\mathfrak{gl}(V) }(0) =0.
\end{align}
$$


---

Recall:

[!Lemma]
Let $A$ be an $F$-algebra. Then $\mathrm{Der}(A)$ is a Lie subalgebra pf $\mathfrak{gl}(A)$. 

[!Lemma]
Let $a$ be an $F$-algebra. Let $\delta\in \mathrm{Der}(A)\subseteq \mathfrak{gl}(A)=\text{End}(A)$. Let $\delta=\delta_{s}+\delta_{n}$ be the J-C decomposition of $\delta$ in $\text{End}(V)$. Then we have $\delta_{s}, \delta_{n}\in \mathrm{Der}(A)$. 

> [!Lemma]
> Let $F$ be a field, and $K$ be a subfield of $F$. Treat $F$ as a vector space over $K$. Let $f:F\to F$ be a $K$-linear map. Let $\{ a_{1}, \dots, a_{r} \}$ be a fintie sequence of elements of $F$. Let $b_{i}:=f(a_{i})$ for $1\leqslant i\ \leqslant r$. Then there is a polynomial $p(T)\in F[T]T$ such that $p(a_{i})=b_{i}$ for all $1\leqslant i\leqslant r$. 
> 
> > [!Proof]-
> > 
> > WLOG, we may assume that the $a_{i}$s are distinct. Since $f(0)=0$ and $p(0)=0$ for all $p(T)\in F[T]T$, we may assume that $a_{i}\ne 0$ for all $1\leqslant i\leqslant r$. 
> > 
> > Lagrange interpolate to obtain a $q(T)\in F[T]$ such that $q(a_{i})=b_{i}/a_{i}$ for all $1\leqslant i\leqslant r$. Now, take $p(T)=q(T)T$. 
> > $$
> > p(a_{i})=a_{i}\frac{b_{i}}{a_{i}}=b_{i}\quad \forall 1\leqslant  i\leqslant  r.
> > $$
> > 

^9c4263
