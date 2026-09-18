---
id: "557"
date: 2026-09-09
time: 14:03
tags:
  - DGEO
  - Lecture
---
In the previous lecture, we showed that $\exp_{p}:\mathcal{E}_{p}\to M$, $\mathcal{E}_{p}\subseteq T_{p}M$ is a star shaped open neighborhood of $0$, $D(\exp_{p})|_{0}:T_{p}M\to T_{p}M$ is $\mathrm{id}$. By the inverse function theorem, there exist open neighborhoods $V\subseteq T_{p}M$ of $0$ and $U\subseteq M$ of $p$ such that $\exp_{p}:V\to U$ is a diffeomorphism. 

---

[!Definition]
let $p\in U\subseteq M$. We say that $U$ is a normal neighborhood of $p$ if there exists a star shaped open neighborhood $V\subseteq T_{p}M$ of $0$ such that $\exp_{p}:V\to U$ is a diffeomorphism. 

Fix ONB $\{ b_{i} \}$ of $T_{p}M$. Let $B:\mathbb{R}^{n}\to T_{p}M$ be the linear isomorphism sending $e_{i}\mapsto b_{i}$. Let $\Omega=B^{-1}V$, $\varphi:\Omega\to U$ by $\varphi:\exp_{p}\circ B$. We call $\varphi ^{-1}$ a normal coordinate system on $U$ centered at $p$, $\varphi ^{-1}(p)=0\in \mathbb{R}^{n}$. 

[!Lemma]
Let $\varphi$ be a local parameterization corresponding to a NCS centered at $p$ then $\varphi_{i}|_{p}=b_{i}$. 

[!Lemma]
Let $\varphi$, $\psi$ be two local parameterizations corresponding to two NCS centered at $p$, $\varphi ^{-1}=(x^{1}, \dots, x^{n})$, $\psi ^{-1}=(y^{1}, \dots, y^{n})$. Then there exists $A=(A^{j}_{i})\in O(n)$ such that $y^{j}=A^{j}_{i}x^{i}$. 

[!Proof]-
$\varphi ^{-1}\circ \psi: \tilde{\Omega}\to \Omega$. Suppose $\varphi$ is obtained using $B$, and $\psi$ is obtained using $\tilde{B}$. Then, 
$$
\begin{align}
\varphi ^{-1}\circ \psi=B^{-1}\circ \exp_{p}|_{v}^{-1}\circ \exp_{p}\circ \tilde{B}=B^{-1}\tilde{B}\in O(n).
\end{align}
$$

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

