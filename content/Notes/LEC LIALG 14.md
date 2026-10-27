---
id: "578"
date: 2026-10-06
time: 14:00
tags:
  - LIALG
  - Lecture
desc: Casimir element
---
%% $L$ semisimple and $\phi$ faithful $\implies$ trace form is nondegenerate %%
Let $L$ be semisimple and let $\phi:L\to \mathfrak{gl}(V)$ be a *faithful* representation of $L$. Define a symmetric bilinear form $\beta(x, y)=\mathrm{Tr}(\phi(x)\phi(y))$ on $L$. The form $\beta$ is associative (easy check), so in particular its radical $S$ is an ideal of $L$. Moreover, $\beta$ is nondegenerate: indeed, [[LEC LIALG 10#^20da11|Cartan's criterion]] shows that $\phi(S)\cong S$ is solvable, so $S=0$. Note that nondegeneracy of $\beta$ depends on the faithfulness of $\phi$. 

%%Nondegenerate form $\implies$ $a_{ik}=-b_{ki}$. %%
Let $\beta$ any nondegenerate symmetric associative (i.e., $\beta([xy], z)=\beta(x, [yz])$) bilinear form on $L$. If $\{ x_{1}, \dots, x_{n} \}$ is a basis of $L$, there is a uniquely determined dual basis $\{ y_{1}, \dots, y_{n} \}$ relative of $\beta$, satisfying $\beta(x_{i}, y_{j})=\delta_{ij}$. If $x\in L$, we can write $[x x_{i}]=\sum_{j}a_{ij}x_{j}$ and $[xy_{i}]=\sum_{j}b_{ij}y_{j}$. Using the associativity of $\beta$, we compute: 
$$
\begin{align}
a_{ik}=\beta([x x_{i}], y_{k})=-\beta(x_{i}, [xy_{k}])=-b_{ki}.
\end{align}
$$
%% nondegenerate form + any representation $\implies$ $c_{\phi}(\beta)$ commutes with $\phi(L)$ %%
If $\phi:L\to \mathfrak{gl}(V)$ is any representation of $L$, write $c_{\phi}(\beta)=\sum_{i}\phi(x_{i})\phi(y_{i})\in \text{End}(V)$. Using the identity (in $\text{End}(V)$) $[x, yz]=[x, y]z+y[x, z]$ and the fact that $a_{ik}=-b_{ki}$, we obtain
$$
\begin{align}
[\phi(x), c_{\phi}(\beta)] & =\sum_{i}[\phi(x), \phi(x_{i})]\phi(y_{i})+\sum_{i}\phi(x_{i})[\phi(x), \phi(y_{i})] \\
 & =\sum_{i}\phi([x, x_{i}])\phi(y_{i})+\sum_{i}\phi(x_{i})\phi([x, y_{i}]) \\
 & =\sum_{i,j}a_{ij}\phi(x_{j})\phi(y_{i})+\sum_{i, j}b_{ij}\phi(x_{i})\phi(y_{j}) \\
 & =0.
\end{align}
$$
In other words, $c_{\phi}(\beta)$ is an endomorphism of $V$ commuting with $\phi(L)$. If we think of $V$ as an $L$-module, then this amounts to $x\cdot c_{\phi}(\beta)=0$, so $c_{\phi}(\beta)$ is a Lie algebra homomorphism. 

Putting all of this together, suppose $\phi:L\to \mathfrak{gl}(V)$ is a *faithful* representation of $L$, with the (nondegenerate!) trace form $\beta(x, y)=\mathrm{Tr}(\phi(x)\phi(y))$. In this case, having a fixed basis $\{ x_{1}, \dots, x_{n} \}$ of $L$, we write simply $c_{\phi}$ for $c_{\phi}(\beta)$ and call this the **Casimir element of $\phi$**. It trace is
$$
\sum_{i}\mathrm{Tr}(\phi(x_{i})\phi(y_{i})) =\sum_{i}\beta(x_{i}, y_{i})=\dim L.
$$
In case $\phi$ is also [[LEC LIALG 13#^72fd39|irreducible]], [[LEC LIALG 13#^e5ed2b|Schur's lemma]] implies that $c_{\phi}$ is a scalar (equal to $\dim L/\dim V$). 