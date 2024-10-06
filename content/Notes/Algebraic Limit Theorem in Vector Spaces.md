---
tags:
  - ANA1
---

Refer Rudin p46, 3.4.

The [[Sequences and convergence#Algebraic limit theorem|Algebraic Limit Theorem]], formulated in [[The real field|the real field]], can be extended to [[Vector spaces|vector spaces]] like $\mathbb{R}^{n}$.

A [[Sequences and convergence#Sequences|sequence]] of vectors is a function $f:\mathbb{N}\to \mathbb{R}^{n}$, with $f(n)$ being the $n$th term of the sequence. 

First, we need to establish what it means for a sequence of vectors to converge.
## Slot-wise convergence

>[!Theorem]
>Suppose $\mathbf{x}_{n}\in \mathbb{R}^{k}$ and $\mathbf{x}_{n} = (\alpha_{1,n}, \alpha_{2,n},\dots,\alpha_{k,n})$.
>Then $(\mathbf{x}_{n})\to \mathbf{x} = (\alpha_{1}, \alpha_{2},\dots,\alpha_{k})$ if and only if 
>$$
>\lim_{ n \to \infty } \alpha_{j,n}=\alpha_{j} \ \ \forall 1\le j \le k.
>$$

>**Proof**
>Forward direction:
>Since $(\mathbf{x}_{n})\to \mathbf{x}$, we have
>$$
>\begin{align}
>&|\mathbf{x}_{n}-\mathbf{x}|<\epsilon \\
>\implies&\sqrt{  \sum_{j=1}^{k} (\alpha_{j,n}-\alpha_{j})^{2}}<\epsilon \\
>\implies &|\alpha_{j,n}-\alpha_{j}|<\epsilon \ \ \forall 1\le j \le k
>\end{align}
>$$
>for all $n\ge N$ for some $N$. Thus, $\lim_{ n \to \infty }a_{j,n} = a_{j}$ for all $1\le j \le k$. 
>
>Backward direction:
>Let $\epsilon>0$ be arbitrary. Choose $N_{1}, N_{2}, \dots, N_{k}$ such that
>$$
>\begin{align}
>|\alpha_{j,n}-\alpha_{j}|< \frac{\epsilon}{\sqrt{ k }}
>\end{align}
>$$
>For all $n\ge N_{j}$ respectively. Let $N=\max \{ N_{1}, N_{2}, \dots, N_{k} \}$. Squaring and adding the $k$ inequalities, we get
>$$
>\begin{align}
>\sum_{j=1}^{k} (\alpha_{j,n}-\alpha_{j})^{2}<\epsilon^{2}
>\end{align}
>$$
>for all $n\ge N$. ❏

Note that while this proof is done for vectors in $\mathbb{R}^{k}$, it also works for $\mathbb{C}^{k}$. 

## Algebra of limits of vector sequences


Now, we are ready to perform algebra on limits of vector sequences.

>[!Theorem]
>Let $(\mathbf{x}_{n})$ and $(\mathbf{y}_{n})$ be sequences in $\mathbb{R}^{k}$, $(\beta_{n})$ be a sequence in $\mathbb{R}$, and $(\mathbf{x}_{n})\to \mathbf{x}$, $(\mathbf{y}_{n})\to \mathbf{y}$, $(\beta_{n})\to \beta$. Then, 
>1. $\lim_{ n \to \infty }(\mathbf{x}_{n}+\mathbf{y}_{n}) = \mathbf{x}+\mathbf{y}$
>2. $\lim_{ n \to \infty }\mathbf{x}_{n}\cdot \mathbf{y}_{n}=\mathbf{x}\cdot \mathbf{y}$
>3. $\lim_{ n \to \infty }\beta_{n}\mathbf{x}_{n}=\beta \mathbf{x}$

All of these follow from the previous theorem and the Algebraic Limit Theorem in $\mathbb{R}$. 

