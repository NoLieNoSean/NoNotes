---
id: "474"
date: 2026-06-24
time: 12:01
tags:
---
Seminar at IISERB by Anurenj

---

[!Definition] Riemann surface
Smooth $2$-manifold with holomorphic transition maps. 

[!Definition]
$R_{\tau}=\mathbb{C}/\Gamma_{\tau}$, where $\Gamma_{\tau}=\langle z+\tau, z+1 \rangle\subseteq \text{Aut}(\mathbb{C})$. 
$\mathbb{H}:=\{ \tau\in \mathbb{C}:\mathrm{im}\,\tau> 0 \}$ is the set of all tori. 

[!Theorem]
$R_{\tau}\overset{\text{biholo}}{\cong} R_{\tau'}$ iff $\tau'=\frac{a\tau+b}{c\tau+d}$, where $\begin{pmatrix}a & b \\ c & d\end{pmatrix}\in\text{PSL}(2, \mathbb{Z})$. 


## Teichmuller space for genus 1

For any torus $R$, a **marking** on $R$ is a pair $\Sigma_{p}=\{ [A_{1}], [B_{1}] \}$ of generators of $\pi_{1}(R, p)$. 
We say two markings $\Sigma_{p}=\{ [A_{1}], [B_{1}] \}$ and $\Sigma_{p'}=\{ [A_{1}'], [B_{1}'] \}$ are **equivalent** if there exists a curve $c_{0}$ from $p'$ to $p$ such that
$$
T_{c_{0}}:\pi_{1}(R, p)\to \pi_{1}(R, p'):[\gamma]\mapsto[c_{0}^{-1}*\gamma*c_{0}]
$$
is an isomorphism with $T_{c_{0}}([A_{1}])=[A_{1}']$ and $T_{c_{0}}([B_{1}])=[B_{1}']$. 

We say that two markings on different tori $(R, \Sigma_{p})$ and $(S, \Sigma_{q})$ are **equivalent** if there exists a biholomorphism $h:R\to S$ such that $h_{*}(\Sigma_{p})$ is equivalent to $\Sigma_{q}$. 

$T_{1}$ is the space of equivalence classes $[(R, \Sigma_{p})]$. 

> [!Theorem]
> $[(R_{\tau}, \Sigma(\tau))]=[(R_{\tau'}, \Sigma(\tau'))]$ iff $\tau=\tau'$. 

Essentially, $T_{1}\cong \mathbb{H}$. 

---

Take a torus $R$ with marking $\Sigma$. Let $f:R\to S$ be a diffeomorphism. $f_{*}(\sigma)$ is a marking on $S$. 

> [!Theorem]
> Let $f:R\to S$, $g:R\to S'$. Then, $[(S, f_{*}(\Sigma))]=[(S, g_{*}(\Sigma))]$ iff $g\circ f^{-1}:S\to S'$ is homotopic to a biholomorphism $h:S\to S'$. 

$T_{1}$ can also be defined as the quotient of $\{ (S, f) \}$ under the above relation. 

%% shows equivalence between two definitions %%

## Teichmuller space of genus g surface

> [!Definition]
> Let $R$ be a closed Riemann surface. Let $\Sigma_{p}=\{ [A_{j}], [B_{j}] \}_{j=1}^{g}$ denote generators of $\pi_{1}(R, p)$, called a **marking** on $R$. We say that two markings $\Sigma_{p}$ and $\Sigma_{p'}$ are **equivalent** if there exists a path $c_{0}$ from $p'$ to $p$ such that $T_{c_{0}}:\pi_{1}(R, p)\to \pi_{1}(R, p')$ given by $[\gamma]\mapsto[c_{0}^{-1}*\gamma*c_{0}]$ is an isomorphism sending $[A_{j}]\mapsto[A_{j'}]$ and $[B_{j}]\mapsto{B_{j}'}$ for all $j$.

An analogous definition holds for equivalence of markings on different surfaces of genus $g$; the Teichmuller space $T_{g}$ is formed by the equivalence classes under this relation. 


---


$\text{PSL}(2, \mathbb{R})$ is the group of isometries of the upper half plane. 

Gauss bonet: different presentations do not change the area of the quotient, even if they change the hyperbolic structure. 

uniform curvature (sectional, gaussian)?

Uniformizaiton theorem : relation of Euler characteristic with possible uniform curvature geometries. 













