---
id: "354"
date: 2025-11-13
time: 09:25
tags:
  - ALG3
  - Lecture
---

[!Proposition] @langAlgebra2002 5.2.6
Let $F$ be a field. There exists an extension $F^{a}$ which is algebraic over $F$ and algebraically closed. 

---

Aim: Any two algebraic closures are isomorphic.

[!Proposition]
Let $\varphi:F\to L$ and $L$ algebraically closed. Let $\alpha\in L$ be algebraic over $F$. Let $p(x)=\text{Irr}(\alpha; F)=\sum_{i=0}^{n}a_{i}x^{i}\in F[x]$. Define $p^{\varphi}(x)=\sum_{i=0}^{n}\varphi(a_{i})x^{i}\in L[x]$. 

Then, there exists a bijection 
$$
\{ \psi:F(\alpha)\to L:\psi\text{ is an embedding} \}\leftrightarrow \{ \beta\in L:p^{\varphi}(\beta)=0 \}.
$$

[!Proof]-

Let $\psi:F(\alpha)\to L$ be such that $\psi\ | \ _F=\varphi$. Let $\beta=\psi(\alpha)$.
$$
\begin{align}
\psi(p(\alpha)) & =\sum_{i=0}^{n} \psi(a_{i})\psi(\alpha^{i}) \\
 & =\sum_{i=0}^{n} \varphi(a_{i})\beta^{i}=p^{\varphi}(\beta).
\end{align}
$$
Thus, $\beta$ is a root of the polynomial $p^{\varphi}(x)$. (Remark: there exist only finitely many maps $\psi:F(\alpha)\to L$). 

Conversely suppose $\beta\in L$ and $p^{\varphi}(\beta)=0$. We have to show that there exists  $\psi:F(\alpha)\to L$ such that $\psi\ | \ _F=\varphi$. Define $\psi(f(\alpha))$ to be 
$$
\sum_{i=0}^{n} \varphi(a_{i})\beta^{i}.
$$
We need to show $\varphi$ is an embedding. $\varphi$ is clearly injective, since $\varphi$ is nontrivial. 

[!Proposition]
Let $\varphi:F\to L$ be an em