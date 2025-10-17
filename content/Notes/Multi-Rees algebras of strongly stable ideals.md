---
draft: true
date: 2025-09-01
id: "255"
---
![[Pasted image 20250902225923.png]]

@karaMultiReesAlgebrasStrongly2022

[[Some Algebraic geometry]]
# Rees Algebras

Let $\mathbb{K}$ be a field and $S=\mathbb{K}[x_{1}, \dots, x_{n}]$ be a polynomial ring. Let $I\leq S$. The Rees Algebra over $I$, denoted $\mathcal{R}(I)$, as an abelian group is given by[^1]
$$
\mathcal{R}(I)=S[It]=S\oplus It\oplus I^{2}t^{2}\oplus \dots \subseteq S[t].
$$
Multiplication in $\mathcal{R}[t]$ comes from $S[t]$. It is easy to see that if $I=(a_{1}, \dots, a_{k})$, then $\mathcal{R}(I)=S[a_{1}t, \dots, a_{k}t]$. 

For example, If $I=(x_{1}^{2}, x_{2}^{2})$, then $\mathcal{R}(I)=S[x_{1}^{2}t, x_{2}^{2}t]$. Note that the 'variables' here are not independent; $x_{2}^{2}(x_{1}^{2}t)=x_{1}^{2}(x_{2}^{2}t)$. So, the kernel of the map $S[t_{1}, t_{2}]\to S[x_{1}^{2}t, x_{2}^{2}t]$ defined by $t_{1}\mapsto x_{1}^{2}t$ and $t_{2}\mapsto x_{2}^{2}t$ is non-trivial.

[^1]:Recall how a polynomial ring over some ring $R$, as an abelian group, can be seen as the infinite direct sum $R\oplus Rx\oplus Rx^{2}\oplus\dots$.

---
# Minimal generators = Gröbner basis?

![[Pasted image 20250910193251.png]]

$S=\mathbb{Q}[x_{ij}]$, $1\leq i\leq r$, $1\leq j\leq n$.
$R=\mathbb{Q}[y_{i}, t_{j}]$ $1\leq i\leq n$, $1\leq j\leq r$, use `lex`.
$\mathfrak{m}=\langle y_{1}, \dots, y_{n} \rangle$ 
Let $L'$ be the list of minimal generators of $\mathfrak{m}^{d}$, ordered in `lex`. Reverse $L'$. Let $L$ be the first $n$ entries of $L$. Define the map $\varphi:S\to R$ by
$$
x_{ij}\mapsto t_{i}L_{j}.
$$
Let $I$ be $\ker\varphi$. Check if the `mingens I = gens gb I`. 

Example:

```Macaulay 2
S=QQ[X_1,X_2,X_3,X_4,X_5,Y_1,Y_2,Y_3,Y_4,Y_5,Z_1,Z_2,Z_3,Z_4,Z_5]
R=QQ[a..e,t1,t2,t3,MonomialOrder=>Lex]
m=ideal(a,b,c,d,e);
m^4;
mingens oo
first entries oo
oL = reverse oo
L=oL_{0..4}
ker map(R,S,matrix{{t1*L_0,t1*L_1,t1*L_2,t1*L_3,t1*L_4,
           t2*L_0,t2*L_1,t2*L_2,t2*L_3,t2*L_4,
           t3*L_0,t3*L_1,t3*L_2,t3*L_3,t3*L_4}})
I=oo;
mingens I == gens gb I
```

I want to run this for $r=1, .., 4$, $d=1, .., 4$, and $n=2, .., 5$. Write a python script which writes the Macaulay script for this. Tack on a line at the end of the Macaulay script to print all the results together.