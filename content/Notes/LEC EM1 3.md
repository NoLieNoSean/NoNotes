We know that the electric field at $\mathbf{r}$ is given by

$$
\begin{align}
\mathbf{E}(\mathbf{r})=k \int \rho(\mathbf{r}') \frac{{\mathbf{r}-\mathbf{r}'}}{|\mathbf{r}-\mathbf{r}'|^{3}}\,d^{3}\mathbf{r}'
\end{align}
$$
The $p$th component of the electric field is given by
$$
\begin{align}
E_{p}(\mathbf{r})=k\int \rho(\mathbf{r}') \frac{{r_{p}-r_{p}'}}{|\mathbf{r}-\mathbf{r}'|^{3}} \,d^{3}\mathbf{r}'
\end{align}
$$
Note that
$$
\begin{align}
\frac{\partial}{\partial x'_{p}}\left[ \frac{1}{|\mathbf{x}-\mathbf{x}'|^{n}} \right] & = \frac{\partial}{\partial x'_{p}}\left[ \frac{1}{|(x_{j}-x'_{j})^{2}|^{n/2}} \right] \\
 & = -\frac{n}{2} \frac{\left( \frac{\partial}{\partial x'_{p}}((x_{j}-x'_{j})^{2})  \right)}{|(x_{j}-x'_{j})^{2}|^{n/2+1}} \\
 & = \frac{{n(x_{p}-x'_{p})}}{|\mathbf{x}-\mathbf{x}'|^{n+2}} & (1)
\end{align}
$$

We get a nice substitution for $n=1$:

$$
\begin{align}
E_{p}(\mathbf{r}) & =k\int \rho(\mathbf{r}') 
\frac{\partial}{\partial r'_{p}}\left[ \frac{1}{|\mathbf{r}-\mathbf{r}'|} \right]\,d^{3}\mathbf{r}' \\

\end{align}
$$

Observe from $(1)$ that
$$
\frac{ \partial  }{ \partial x'_{p} } \left[ \frac{1}{|\mathbf{x}-\mathbf{x}'|} \right]=-\frac{ \partial  }{ \partial x_{p} } \left[ \frac{1}{|\mathbf{x}-\mathbf{x}'|} \right]
$$
So, 
$$
\begin{align}
E_{p}(\mathbf{r}) & = -k\frac{\partial}{\partial r_{p}}\int \rho(\mathbf{r}') 
\left[ \frac{1}{|\mathbf{r}-\mathbf{r}'|} \right]\,d^{3}\mathbf{r}' 
\end{align}
$$
Define
$$
\phi(\mathbf{r})\equiv k\int \rho(\mathbf{r}')\left[ \frac{1}{|\mathbf{r}-\mathbf{r}'|} \right]\,d^{3}\mathbf{r}'
$$
Then, 
$$
E_{p}(\mathbf{r})=-\frac{ \partial \phi }{ \partial r_{p} } 
$$
$$
\mathbf{E}(\mathbf{r})=-\nabla \phi
$$
---

Example: point charge
$\rho(\mathbf{r}')=Q\delta(\mathbf{r}'-\mathbf{a})$

$$
\phi(\mathbf{r}')=\frac{kQ}{|\mathbf{r}'-\mathbf{a}|}+c
$$
---
Example: dipole
$\rho(\mathbf{r}')=-\mathbf{p}\cdot\nabla\delta^{3}(\mathbf{r}'-\mathbf{a})$

$$
\begin{align}
\phi(\mathbf{r}) & =k\int \frac{{-\mathbf{p}\cdot\nabla\delta^{3}(\mathbf{r}'-\mathbf{a})}}{|\mathbf{r}-\mathbf{r}'|}\,d^{3}\mathbf{r}' \\
 & = -kp_{i}\int {\left( \frac{ \partial  }{ \partial r'_{i} }\delta^{3}(\mathbf{r}'-\mathbf{a}) \right) } \frac{1}{|\mathbf{r}-\mathbf{r}'|} \,d^{3}\mathbf{r}' \\
 & =kp_{i}\int\left[ \frac{ \partial  }{ \partial r'_{i} } \frac{1}{|\mathbf{r}-\mathbf{r}'|} \right]\delta^{3}(\mathbf{r}'-\mathbf{a})\,d^{3}\mathbf{r}'
\end{align}
$$

