# 1 Introduction to groups

## 1.4 Matrix groups

[[Abstract Algebra Third Edition (David S. Dummit, Richard M. Foote).pdf#page=49]]

### 8

First, prove for $n=2$. The matrices $A=\begin{pmatrix}1 & 1\\ 0 & 1\end{pmatrix}$ and $B=\begin{pmatrix}1 & 0\\ 1 & 1\end{pmatrix}$ do not commute for any $F$. For $n>2$, embed the above matrices in two $n\times n$ matrices, and the result follows form block matrix multiplication.

## 1.6 Homomorphisms and isomorphisms

### 24

https://math.stackexchange.com/questions/649167/if-%CF%832-is-the-identity-map-from-g-to-g-prove-that-g-is-abelian


# 3 Quotient groups and homomorphisms

## More on cosets and Lagrange's theorem

### 18

Let $\phi$ be the restriction of the projection map from $G$ to $G/N$ to $H$. 
$$
\phi:H\to G/N, h\mapsto hN.
$$
Since $\phi$ is a homomorphism, $|\mathrm{Im}~\phi|$ [[ALG2_L3#Lagrange's theorem|must divide]] $|G/N|$ and $|H|$. This forces $|\mathrm{Im}~\phi|$ to be $1$. Thus, $\phi$ maps every element in $H$ to $N$, which implies $h\in N$ for all $h\in H$, or $H< N$. 