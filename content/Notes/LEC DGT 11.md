---
id: "557"
date: 2026-09-09
time: 14:03
tags:
  - DGEO
  - Lecture
pics: true
---

Recall [[LEC DGT 10#^1a092d]]. By the [[LEC DGT 3#^0d2d87|inverse function theorem]], there exists $\epsilon> 0$ and an open neighborhood $U\subseteq M$ of $p$ such that $\exp_{p}:B_{\epsilon}(0)\to U$ is a diffeomorphism. 

> [!Definition] normal neighborhood and parameterization
> An open neighborhood $U$ of $p\in M$ is called a **normal neighborhood** of $p$ if there exists a star shaped neighborhood $V$ of $0$ in $T_{p}M$ such that $\exp_{p}:V\to U$ is a diffeomorphism. 
> 
> Suppose $\{ b_{i} \}$ is an orthonormal basis of $T_{p}M$ and $B:\mathbb{R}^{n}\to T_{p}M$ maps $e_{i}\mapsto b_{i}$. Let $\Omega=B^{-1}(V)$. Then, $\varphi:\Omega\to U$ defined by $\varphi=\exp_{p}\circ B$ is called a **normal parameterization** of $U$. We call $\varphi ^{-1}$ a **normal coordinate system** (NCS) on $U$. 

^1b1064

> [!Lemma]
> Let $\varphi:\Omega\to U$ be a normal parameterization around $p\in M$. Then, $\varphi_{i}|_{p}=b_{i}$. 
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > \varphi_{i}|_{p} & =D\varphi_{0}(e_{i}) \\
> > 	 & =D(\exp_{p})_{0}Be_{i} \\
> > 	 &  =b_{i}.
> > 
> > \end{align}
> > $$
> > 

> [!Lemma]
> Let $\varphi$, $\psi$ be two normal parameterizations around $p\in M$, $\varphi ^{-1}=(x^{1}, \dots, x^{n})$, $\psi ^{-1}=(y^{1}, \dots, y^{n})$. Then there exists $A=(A^{j}_{i})\in O(n)$ such that $y^{j}=A^{j}_{i}x^{i}$. 
> 
> > [!Proof]-
> > 
> > $\varphi ^{-1}\circ \psi: \tilde{\Omega}\to \Omega$. Suppose $\varphi$, $\psi$ are obtained using $B, \tilde{B}:\mathbb{R}^{n}\to T_{p}M$ respectively. 
> > 
> > Then, 
> > $$
> > \begin{align}
> > \varphi ^{-1}\circ \psi=B^{-1}\circ \exp_{p}^{-1}\circ \exp_{p}\circ \tilde{B}=B^{-1}\tilde{B}\in O(n).
> > \end{align}
> > $$
> > 
> 

[!Remark]

Suppose $F:M\to N$ is a local isometry. Let $p\in M$ have a neighborhood $U'$ such that $F|_{U}$ is an isometry. Let $U\subseteq U'$ and $\epsilon> 0$ be such that $\exp_{p}:B_{\epsilon}(0)\to U$ is a diffeomorphism. Then, the following diagram commutes:

```latex
% latex-id: 0620-cb4d-f6d3-492b-8217
\begin{document}
% https://q.uiver.app/#q=WzAsNCxbMCwwLCJcXG1hdGhjYWwgRV9wIl0sWzEsMCwiXFxtYXRoY2FsIEVfe0YocCl9Il0sWzAsMSwiTSJdLFsxLDEsIk4iXSxbMiwzLCJGIiwyXSxbMCwxLCJERl9wIl0sWzAsMiwiXFxleHBfcCIsMl0sWzEsMywiXFxleHBfe0YocCl9Il1d
\[\begin{tikzcd} {\mathcal E_p} & {\mathcal E_{F(p)}} \\ M & N \arrow["{DF_p}", from=1-1, to=1-2] \arrow["{\exp_p}"', from=1-1, to=2-1] \arrow["{\exp_{F(p)}}", from=1-2, to=2-2] \arrow["F"', from=2-1, to=2-2] \end{tikzcd}\] 

\end{document}
```

Indeed, let $v\in \mathcal{E}_{p}$. By definition of $\mathcal{E}_{p}$, $1\in I_{v}$, and $\exp_{p}(v)=\gamma_{v}(1)$. Since $F$ is a local isometry, $\tilde{\gamma}:=F\circ\gamma:I_{v}$ 


---

Suppose $F:M\to N$ is a local isometry. $\gamma:I\to M$ is a geodesic, with $\gamma(0)=p$, $\gamma'(0)=v$. $\tilde{\gamma}=F\circ\gamma$ is a geodesic with $\tilde{\gamma}(0)=F(p)$, $\tilde{\gamma}'(0)=F_{*}(v)$. 

Note that $F(\exp_{p}(tv))=F(\gamma(t))=\tilde{\gamma}(t)=\exp_{F(p)}(DF_{p}(tv))$. 

[!Theorem]
Suppose $F, G:M\to \tilde{M}$ be local isometries. Suppose $M, \tilde{M}$ are connected. Suppose $F(p)=G(p)$ and $DF_{p}=DG_{p}$. Then $F\equiv G$. 

[!Proof]-
$$
\begin{align}
F(\exp_{p}(v)) & =\exp_{F(p)}(DF_{p}(v)) \\
 & =\exp_{G(p)}(DG_{p}(v)) \\
\end{align}
$$
Thus, $F\equiv G$ on $\exp_{p}(\mathcal{E}_{p})\subseteq U_{p}$. 

There exists $\epsilon> 0$ and open neighborhood $U_{p}\subseteq M$ of $p$ such that $B_{\epsilon}(0)\subseteq \mathcal{E}_{p}$ and $\exp_{p}:B_{\epsilon}(0)\to U_{p}$ is a diffeomorphism. 

Let $N=\{ q\in M:F(q)=G(q) \text{ and }DF_{p}=DG_{p}\}$. Continuity implies $N$ is closed, and $q\in N$ implies $U_{q}\subseteq N$, so $N$ is open. Since $M$ is connected, $N=M$. 

---

[!Proposition]
Let $\varphi:\Omega\to U$ be a local parameterization for a NCS on $U$ entered at $p$ obtained from an ONB $\{ b_{i} \}$. Then, 
1. $\varphi ^{-1}(p)=0\in \mathbb{R}^{n}$. 
2. $g_{ij}(0)=\delta_{ij}$
3. for all $v=v^{i}b_{i}\in T_{p}M$, $\varphi ^{-1}(\gamma_{v}(t))=(tv^{1}, \dots, tv^{n})$.
4. $\Gamma_{ij}^{k}(0)=0$ for all $i, j, k$. 
5. $\partial_{k}g_{ij}(0)=0$ for all $i, j, k$. 

[!Proof]-
$(1)$ is clear. 

$(2)$ $g_{ij}(0)=\langle \varphi_{i}|_{p}, \varphi_{j}|_{p} \rangle=\langle b_{i}, b_{j} \rangle=\delta_{ij}$. 

$(3)$ 
$$
\begin{align}
\gamma_{v}(t) & = \exp_{p}(tv) \\
 \varphi ^{-1} & =B\circ \exp_{p}^{-1} \\
 \varphi ^{-1}(\gamma_{v}(t)) & =B^{-1}(tv^{i}b_{i}) \\
 & =(tv^{1}, \dots, tv^{k}).
\end{align}
$$

---

