
> [!Theorem]
> Let $X$ be a continuous random variable with finite expectation. Define $X^{+}\equiv \max(X, 0)$ and $X^{-}\equiv\max(-X, 0)$. Then, $E(X)=E(X^{+})-E(X^{-})$.

> **Proof**
> $$
> \begin{align}
> E(X) & =\int_{-\infty}^{\infty} xf(x) \, dx 
>  \\ & =\int_{-\infty}^{\infty} \max(x, 0)f(x)\,dx-\int_{-\infty}^{\infty}\max(-x, 0)f(x) \, dx \\
>  & =E(X^{+})-E(X^{-}).
> \end{align}
> $$
