## Dirac delta function

is what is called a "generalized function". Used to model point charges in space. The Dirac delta function is defined like so:

$$
\begin{align}
\delta(x)= \begin{cases}
0 & x\ne 0 \\
\infty & x=0
\end{cases}
\end{align}
$$
such that
$$
\int_{-\infty}^{\infty} \delta(x) \, dx =1.
$$

In three dimensions, it is used like so:
$$
\delta^{3}(\mathbf{r})=\delta(x_{1})\delta(x_{2})\delta(x_{3})
$$
The integral of the 3d delta function over all of 3-space yields 1:

$$
\begin{align}
 & \int_{x_{1}=-\infty}^{x_{1}=\infty} \int_{x_{2}=-\infty}^{x_{2}=\infty} \int_{x_{3}=-\infty}^{x_{3}=\infty}  \delta(x_{1})\delta(x_{2})\delta(x_{3})\, dx_{3}  \, dx_{2}  \, dx_{1}  \\
 & = \int_{x_{1}} \int_{x_{2}}\delta(x_{1})\delta(x_{2}) \left( \int_{x_{3}}\delta(x_{3}) \,dx_{3} \right) \,dx_{2}\,dx_{1} \\
& = \left( \int_{x_{3}}\delta(x_{3}) \,dx_{3} \right) \int_{x_{1}} \int_{x_{2}}\delta(x_{1})\delta(x_{2}) \,dx_{2}\,dx_{1} \\
 & =\left( \int_{x_{1}}\delta(x_{1}) \,dx_{1} \right)\left( \int_{x_{2}}\delta(x_{2}) \,dx_{2} \right)\left( \int_{x_{3}}\delta(x_{3}) \,dx_{3} \right) \\
 & =1
\end{align}
$$

Thus, $Q\delta^{3}(\mathbf{r}-\mathbf{a})$ models the charge density due to a point charge located at $\mathbf{a}$.

The triple integral over all 3-space will be denoted by a vanilla integral. Also, $dx_{1}\,dx_{2}\,dx_{3}$ will be denoted by $d^{3}r$.

### Properties of the Dirac delta

$\int\delta(x)\,dx=1$
---

$\int\delta(x)f(x)\,dx=f(0)$ 
----

$\int\delta(\lambda x)f(x)dx=\frac{1}{|\lambda|}f(0)$ 
---

$\int\delta(x^{2}-a^{2})f(x)dx$

$\delta$ contributes only when $x=a$ or $x=-a$.
Thus, 

$$
\int\delta((x+a)(x-a))f(x)dx=\frac{1}{2|a|}(f(a)+f(-a))
$$

---

A more general version of the previous property.

$$
\int\delta(g(x))f(x)\,dx=\sum_{\lambda\in \{ \lambda\ |\ g(\lambda)=0 \}} \frac{1}{|g'(\lambda)|} f(\lambda)
$$
---

## Electric fields

The electric field can be modeled like so

$$
\begin{align}
\mathbf{E}(\mathbf{r})=k \int \frac{{\rho(\mathbf{r'})}(\mathbf{r}-\mathbf{r}')}{|\mathbf{r}-\mathbf{r}'|^{3}}\,d^{3}r'
\end{align}
$$
The electric field due to a point charge located at $\mathbf{a}$ is
$$
\begin{align}
 & \mathbf{E}(\mathbf{r})=k\int \frac{{Q\delta^{3}(\mathbf{r}'-\mathbf{a})(\mathbf{r}-\mathbf{r}')}}{|\mathbf{r}-\mathbf{r}'|^{3}}\,d^{3}r' \\
 = & kQ \frac{{\mathbf{r}-\mathbf{a}}}{|\mathbf{r}-\mathbf{a}|^{3}}
\end{align}
$$
## Dipole moment

Let charges $Q$ and $-Q$ be located at $\mathbf{r}=\mathbf{a}$ and $\mathbf{r}=\mathbf{a}+\mathbf{d}$ respectively. 

Then, 
$$
\begin{align}
\rho(\mathbf{r}')=Q[\delta^{3}(\mathbf{r}'-\mathbf{a})+\delta^{3}(\mathbf{r}'-\mathbf{a}-\mathbf{d})]
\end{align}
$$
expand the second term using Taylor's theorem:
![[Pasted image 20250120103831.png]]

$$
\begin{align}
\delta^{3}(\mathbf{r}'-\mathbf{a}-\mathbf{d})=\delta^{3}(\mathbf{r}'-\mathbf{a}) +(-d_{i})\frac{ \partial  }{ \partial x_{i}' } 
\end{align}
$$