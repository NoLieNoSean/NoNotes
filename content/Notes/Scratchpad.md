$f$ continuous on $[a, b]$.
$f\geq 0$.
$\int_{a}^{b} f(x) \, dx=0$

To prove: $f(x)=0$ for all $x\in[a, b]$.

**Proof**
FTSOC, assume $f(p)=q>0$ for some $p\in[a, b]$. Since $f$ is continuous, there exists $\delta>0$ such that $|x-p|<\delta \implies |f(x)-q|< q/2$. Consider a partition $P$ with $x_{k-1}=p-\delta/2$, $x_{k}=p+\delta/2$ for some $k$. 
$$
\begin{align}
\int_{a}^{b} f \, dx \geq L(P, f)\geq m_{k}\Delta x_{k}\geq \frac{q}{2}\delta
\end{align}
$$
This makes it impossible for $\int_{a}^{b} f \, dx$ to be $0$. Thus, $f(x)=0$. 


