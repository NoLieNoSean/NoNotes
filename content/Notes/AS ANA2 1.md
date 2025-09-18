---
tags: 
date: "2025-09-15"
time: "11:13"
---

# Problem 1

Define addition and multiplication on $\mathcal{C}$ componentwise. Let $\{ x_{n} \}, \{ y_{n} \}\in\mathcal{C}$. 
$$
\begin{align}
|x_{n}+y_{n}-x_{m}-y_{m}| & \leq |x_{n}+y_{n}|+|x_{m}+y_{m}| \\
 & \leq\epsilon,
\end{align}
$$
so $\{ x_{n}+y_{n} \}$ is Cauchy. Similarly, 
$$
\begin{align}
|x_{n}y_{n}-x_{m}y_{m}| & =|x_{n}(y_{n}-y_{m})+y_{m}(x_{n}-x_{m})| \\
 & \leq |x_{n}||(y_{n}-y_{m})|+|y_{m}||x_{n}-x_{m}| \\
 & \leq M\epsilon,
\end{align}
$$
where $M$ is the bound for $\{ x_{n} \}$ and $\{ y_{n} \}$. Thus, $\{ x_{n}y_{n} \}$ is Cauchy.

The constant sequence $1, 1, \dots$ is the identity. Addition and multiplication are clearly commutative. Thus, $\mathcal{C}$ is commutative ring. Let $\{ x_{n} \}, \{ y_{n} \}$ be Cauchy sequences not in $\mathcal{N}$. We will show that $\{ y_{n} \}=\{ x_{n} \}+\{ z_{n} \}N$, where $N\in \mathcal{N}$. 