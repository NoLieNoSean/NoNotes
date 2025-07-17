---
tags:
  - CAL1
---
Given two n-tuples $(x_{1}, x_{2}, \dots, x_{n})$ and $(y_{1}, y_{2}, \dots, y_{n})$, and $p, q\geq 1$ such that $\frac{1}{p}+\frac{1}{q}=1$, we have Holder's inequality:
$$
\sum_{j=1}^{n} |x_{j}y_{j}|\leq\left( \sum_{j=1}^{n} |x_{j}|^{p} \right)^{1/p}\left( \sum_{j=1}^{n} |y_{j}|^{q} \right)^{1/q}
$$
If we denote the two tuples as $\mathbf{x}$ and $\mathbf{y}$, the inequality can be expressed as
$$
\sum_{j=1}^{n} \lvert x_{j}y_{j} \rvert \leq \lVert \mathbf{x} \rVert _{p}\lVert \mathbf{y} \rVert _{q}
$$

> [!Theorem] Lemma
> If $A, B>0$, then $AB\leq \frac{1}{p}A^{p}+\frac{1}{q}B^{q}$.

> Proof
> We know that $f(x)=\ln(x)$ is concave. Thus, 
> $$
> \begin{align}
> \ln(\lambda x+(1-\lambda)y)\geq & \lambda \ln(x)+(1-\lambda)\ln(y) \\
> \end{align}
> $$
> Plug in $x=A^{p}$, $y=B^{q}$, $\lambda=\frac{1}{p}$. 
> $$
> \begin{align}
> \ln\left( \frac{1}{p}A^{p}+\frac{1}{q}B^{q} \right)\geq \ln A+\ln B=\ln AB
> \end{align}
> $$

Now, let
$$
\begin{align}
A_{i} & =\frac{{|x_{i}|}}{\lVert \mathbf{x} \rVert _{p}} \\
B_{i} & = \frac{{|y_{i}|}}{\lVert \mathbf{y} \rVert _{q}}
\end{align}
$$
So, we have the inequalities
$$
\begin{align}
\frac{{|x_{i}y_{i}|}}{\lVert \mathbf{x} \rVert _{p}\lVert \mathbf{y} \rVert _{q}}\leq \frac{1}{p} \frac{{|x_{i}|^{p}}}{\lVert \mathbf{x} \rVert _{p}^{p}}+\frac{1}{q} \frac{{|y_{i}|^{q}}}{\lVert \mathbf{y} \rVert _{q}^{q}}
\end{align}
$$
If we add these inequalities over $i$, we get
$$
\begin{align}
\frac{{\sum_{i=1}^{n}  |x_{i}y_{i}|}}{\lVert \mathbf{x} \rVert _{p}\lVert \mathbf{y} \rVert _{q}}\leq \frac{1}{p}+\frac{1}{q}=1.
\end{align}
$$
◻️


---

Note how Holder's generalizes the [[LEC ALG1 21#The Cauchy-Schwarz Inequality|Cauchy Schwarz inequality]]: for $p=q=\frac{1}{2}$, we have
$$
\begin{align}
\left| \sum_{j=1}^{n} x_{j}y_{j} \right| & \leq\sum_{j=1}^{n} |x_{j}y_{j}|\leq\left( \sum_{j=1}^{n} |x_{j}|^{2} \right)^{1/2}\left( \sum_{j=1}^{n} |y_{j}|^{2} \right)^{1/2} \\
|\langle \mathbf{x}, \mathbf{y} \rangle | &\leq \lVert \mathbf{x} \rVert_{2} \lVert \mathbf{y} \rVert _{2}
\end{align}
$$
