---
id: "428"
date: 2026-02-27
time: 17:51
tags:
  - CANA
---
Let $\omega_{1}, \omega_{2}\in \mathbb{C}$ be linearly independent over $\mathbb{R}$ and let $L=\{ m\omega_{1}+n\omega_{2}:m, n\in \mathbb{Z} \}$ be the lattice they generate. 

# Problem 1

> [!Exercise]
> Prove that if real and imaginary part of both $f$ and $zf(z)$ are harmonic, then $f$ is analytic. 

Let $f(z) = u(x,y) + i v(x,y)$, and assume $u$ and $v$ are harmonic, i.e., $\nabla^2 u = u_{xx} + u_{yy} = 0$ and $\nabla^2 v = v_{xx} + v_{yy} = 0$.

Consider $z f(z) = (x + i y)(u + i v) = (x u - y v) + i (x v + y u)$. Let $p(x,y) = x u - y v$ and $q(x,y) = x v + y u$. Assume $p$ and $q$ are also harmonic, i.e., $\nabla^2 p = 0$ and $\nabla^2 q = 0$.

Compute the second partial derivatives of $p$:
$$
p_x = u + x u_x - y v_x, \quad p_{xx} = 2 u_x + x u_{xx} - y v_{xx},
$$
$$
p_y = x u_y - v - y v_y, \quad p_{yy} = x u_{yy} - 2 v_y - y v_{yy}.
$$
Thus,
$$
\nabla^2 p = p_{xx} + p_{yy} = x(u_{xx} + u_{yy}) - y(v_{xx} + v_{yy}) + 2 u_x - 2 v_y = 2 u_x - 2 v_y = 0,
$$
This simplifies to $u_x = v_y$.

Now compute the second partial derivatives of $q$:
$$
q_x = v + x v_x + y u_x, \quad q_{xx} = 2 v_x + x v_{xx} + y u_{xx},
$$
$$
q_y = u + x v_y + y u_y, \quad q_{yy} = 2 u_y + x v_{yy} + y u_{yy}.
$$
Thus,
$$
\nabla^2 q = q_{xx} + q_{yy} = x(v_{xx} + v_{yy}) + y(u_{xx} + u_{yy}) + 2 v_x + 2 u_y = 2 v_x + 2 u_y = 0,
$$
This simplifies to $v_x = -u_y$.

The equations $u_x = v_y$ and $u_y = -v_x$ are the Cauchy-Riemann equations. Since $u$ and $v$ are harmonic, they are $C^2$. Therefore, $f$ is analytic.

# Problem 2

> [!Exercise]
> Prove that $G_{2k}(L)$ converges absolutely for all $k> 1$. Here $G_{2k}(L)$ is defined as
> $$
> G_{2k}(L)=\sum_{\omega\in L\setminus \{ 0 \}}\omega^{-2k}.
> $$
> 

^1c46fd

For $r\in \mathbb{Z}_{\geq 0}$, define $L_{r}:=\{ m\omega_{1}+n\omega_{2}:|m|, |n|\leqslant r \}$. For $r\in \mathbb{Z}_{> 0}$, define $S_{r}:=L_{r}\setminus L_{r-1}$. Then, $L\setminus \{ 0 \}=\bigcup_{r> 0}S_{r}$ and $|S_{r}|=(2r+1)^{2}-(2r-1)^{2}=8r$ for $r> 0$. WLOG, suppose $|\omega_{1}|\leqslant |\omega_{2}|$. Then, for every $\omega\in S_{r}$, $|\omega|\geqslant r|\omega_{1}|$. Therefore, we can write
$$
\sum_{\omega\in L\setminus \{ 0 \}}\frac{1}{|\omega|^{2k}}=\sum_{r=1}^{\infty} \sum_{\omega\in S_{r}}\frac{1}{|\omega|^{2k}}\leqslant \sum_{r=1}^{\infty} \frac{8r}{|r\omega_{1}|^{2k}}=\frac{8}{|\omega_{1}|^{2k}}\sum_{r=1}^{\infty} \frac{1}{r^{2k-1}}.
$$
Since $2k-1> 1$, $\sum 1/r^{2k-1}$ [[LEC ANA1 30#^464056|converges]].  it follows from the comparison test that $G_{2k}(L)$ converges absolutely.

---

# Problem 3

> [!Exercise]
> Find all limit points of the set $\{ x_{n} \}$
> $$
> x_{n}=\frac{1}{n}\sum_{k=1}^{n} k^{ib}, \quad n=1, 2, \dots
> $$
> where $b$ is a nonzero real number. 

> [!Claim]
> All limit points of $\{ x_{n} \}$ lie on the circle of radius $1/\sqrt{ 1+b^{2} }$. 

It suffices to show that $|x_{n}|\to 1/\sqrt{ 1+b^{2} }$ as $n\to \infty$. 
$$
\begin{align}
|x_{n}|^{2} & =\left( \frac{1}{n}\sum_{k=1}^{n} \cos(b\ln k) \right)^{2}+\left( \frac{1}{n}\sum_{k=1}^{n} \sin(b\ln k) \right)^{2} \\
 & =\frac{1}{n^{2}}\sum_{k_{1}, k_{2}=1}^{n} \cos\left( b\ln k_{2}-b\ln k_{1} \right).
\end{align}
$$
When $n\to \infty$, this is equal to the integral
$$
\int_{0}^{1} \int_{0}^{1} \cos(b\ln x-b\ln y) \, dx  \, dy.
$$

^eb81d9

We evaluate the inner integral first. Let $t=b\ln x-b\ln y$. We have
$$
\begin{align}
\int_{0}^{1} \cos(b\ln x-b\ln y) \, dx =\frac{y}{b}\int_{-\infty}^{-b\ln y} \cos(t)e^{ t/b } \, dt .
\end{align}
$$
Integrating by parts, we obtain
$$
\begin{align}
\frac{y}{b}\left( \frac{be^{ t/b }\cos t+b^{2}e^{ t/b }\sin t}{1+b^{2}} \right)_{t=-\infty}^{t=-b\ln y} & =\frac{\cos(b\ln y)-b\sin(b\ln y)}{1+b^{2}} .
\end{align}
$$
Thus, [[#^eb81d9]] becomes
$$
\int_{0}^{1}  \frac{\cos(b\ln y)-b\sin(b\ln y)}{1+b^{2}}\, dy.
$$
One substituting $t=b\ln y$ and integrating by parts again, we see that the integral is equal to $1/\sqrt{ 1+b^{2} }$. 

> [!Claim]
> For any $\varphi\in[0, 2\pi)$, there exists a subsequence of $S_{n}:=\sum_{k=1}^{n}k^{ib}$ whose amplitudes converge to $\varphi$. 

Let $f(x)=x^{ib}$. Write
$$
\begin{align}
S_{n}-\int_{0}^{n} x^{ib} \, dx =\sum_{k=1}^{n} \left( k^{ib}-\int_{k-1}^{k} x^{ib} \, dx  \right).
\end{align}
$$

^35cfb0

For $x\in[k-1, k]$, the mean value theorem gives
$$
|x^{ib}-k^{ib}|\leqslant |f'(c)|(k-x)
$$
for some $c\in(k-1, k)$. Since $|f'(c)|=|b|/c$, it follows that
$$
|x^{ib}-k^{ib}|\leqslant \frac{|b|}{k-1}(k-x).
$$
We have for each term of [[#^35cfb0]]
$$
\begin{align}
\left| k^{ib}-\int_{k-1}^{k} x^{ib} \, dx   \right|  &=\left| \int_{k-1}^{k} k^{ib}-x^{ib} \, dx  \right|  \\
 & \leqslant \int_{k-1}^{k} \frac{|b|}{k-1}(k-x) \, dx  \\
 & \leqslant \frac{C}{k}.
\end{align}
$$
Therefore
$$
\left| S_{n}-\int_{1}^{n} x^{ib} \, dx  \right| \leqslant \sum_{k=1}^{n} C/k =O(\ln n).
$$
Since
$$
\int_{1}^{n} x^{ib} \, dx =\frac{n^{1+ib}}{1+ib}+O(1),
$$
we get
$$
S_{n}=\frac{n^{1+ib}}{1+ib}+\boldsymbol{\epsilon}_{n},
$$
where $|\boldsymbol{\epsilon}_{n}|=O(\ln n)$. Since $(\ln n)/n\to 0$ as $n\to \infty$, 
$$
\text{arg}(S_{n})=b\ln n-\text{arg}(1+ib)+ \varphi_{n},
$$
where $\varphi_{n}\to 0$ as $n\to \infty$. 

Next, since $\ln (n+1)-\ln(n)\to 0$ as $n\to \infty$ and $\ln n\to \infty$ as $n\to \infty$, we see that the set $\{ b\ln n \mod 2\pi :n\in \mathbb{N}\}$ is dense in $[0, 2\pi]$. The claim follows. 

---

# Problem 4

> [!Exercise]
> Prove that $\phi(z)$ converges absolutely and uniformly on every compact subset of $\mathbb{C}\setminus L$. Here $\phi(z)$ is defined as
> $$
> \phi(z)=\frac{1}{z^{2}}+\sum_{\omega\in L\setminus \{ 0 \}}\left( \frac{1}{(z-\omega)^{2}}-\frac{1}{\omega^{2}} \right).
> $$

Let $C$ be a compact subset of $\mathbb{C}\setminus L$. Being a compact subset of $\mathbb{C}$, $C$ is bounded. Suppose $|z|\leqslant M$ for all $z\in C$.
$$
\begin{align}
\left| \frac{1}{(z-\omega)^{2}}-\frac{1}{\omega^{2}} \right| =|z|\frac{|z-2\omega|}{|\omega|^{2}|z-\omega|^{2}}.
\end{align}
$$
For all $z\in C$, when $|\omega|> 2M\geqslant 2|z|$, we have $|z-2\omega|\leqslant 3|\omega|$ and $\frac{1}{2}|\omega|\leqslant |z-\omega|$. Thus, for all $z\in C$ and for $|\omega|> 2M$, 
$$
\begin{align}
\left| \frac{1}{(z-\omega)^{2}}-\frac{1}{\omega^{2}} \right| \leqslant  c\frac{1}{|\omega|^{3}},
\end{align}
$$
where $c> 0$ is a constant that only depends on $M$. Thus, for all $z\in C$, 
$$
\begin{align}
\sum_{\omega\in L\setminus \{ 0 \}}\left| \frac{1}{(z-\omega)^{2}}-\frac{1}{\omega^{2}} \right| & =\sum_{\substack{\omega\in L\setminus \{ 0 \} \\ |\omega|\leqslant 2M}}(*)+\sum_{\substack{\omega\in L\setminus \{ 0 \} \\ |\omega|> 2M}} (*) \\
 & \leqslant \sum_{\substack{\omega\in L\setminus \{ 0 \} \\ |\omega|\leqslant 2M}}(*)+c\sum_{\substack{\omega\in L\setminus \{ 0 \}}} \frac{1}{|\omega|^{3}},
\end{align}
$$
which converges by [[#^1c46fd]]. Clearly, the bound is uniform. 

---

> [!Exercise]
> Prove that $\phi(z+w)=\phi(z)$ for all $z\in \mathbb{C}$ and $w\in L$, and that it is meromorphic on $\mathbb{C}$ with a double pole at each point of $L$ and no other poles. 

By @steinComplexAnalysis2003 2.5.2, $\phi$ is holomorphic on $\mathbb{C}\setminus L$. For any $\tilde{\omega}\in L$, 
$$
\begin{align}
\phi'(z) & = \frac{-2}{z^{3}}+\sum_{\omega\in L\setminus \{ 0 \}}\frac{-2}{(z-\omega)^{3}}. \\
 & = \sum_{\omega\in L}\frac{-2}{(z-\omega)^{3}} \\
 & =\frac{-2}{(z+\tilde{\omega})^{3}} +\sum_{\omega\in L\setminus \{ -\tilde{\omega} \}}\frac{-2}{(z-\omega)^{3}} \\
 & =\frac{-2}{(z+\tilde{\omega})^{3}} +\sum_{\omega\in L\setminus \{0\}}\frac{-2}{(z+\tilde{\omega}-\omega)^{3}}  \\
 & =\phi'(z+\tilde{\omega}).
\end{align}
$$
Thus for fixed $\tilde{\omega}\in L$, $\phi(z+\tilde{\omega})-\phi(z)$ is constant. Next, observe that $\phi$ is an even function. Thus, for $\tilde{\omega}=w_{1}$ (and $\omega_{2}$), we have $\phi(-\omega_{1}/2+\omega_{1})-\phi(-\omega_{1}/2)=0$, i.e, $\phi(z+\omega_{1})-\phi(z)=0$. 

We also have that $\phi(z+\tilde{\omega}_{1})-\phi(z+\tilde{\omega}_{2})$ is constant for any $\tilde{\omega}_{1}, \tilde{\omega}_{2}\in L$. Therefore,
$$
\begin{align}
 & \phi(z+(k+1)\omega_{1})-\phi(z+k\omega_{1})=0, \\
 & \phi(z+(k+1)\omega_{2})-\phi(z+k\omega_{2})=0 \\
\end{align}
$$
by plugging $z=-(k+1/2)\omega_{1}$ or $z=-(k+1/2)\omega_{2}$. Finally, for arbitrary $\tilde{\omega}=m\omega_{1}+n\omega_{2}$, we can write
$$
\begin{align}
\phi(z+\tilde{\omega})-\phi(z) & =\sum_{i=m}^{1} \phi(z+i\omega_{1}+n\omega_{2})-\phi(z+(i-1)\omega_{1}+n\omega_{2})  \\
 & \quad +\sum_{i=n}^{1} \phi(z+i\omega_{2})-\phi(z+(i-1)\omega_{2})  \\
 & =0.
\end{align}
$$
It is clear from the definition of $\phi$ that it has a pole of order 2 at $0$. For $\tilde{\omega}\in L\setminus \{ 0 \}$, 
$$
\phi(z)=\frac{1}{(z-\tilde{\omega})^{2}}-\underbrace{ \frac{1}{\tilde{\omega}^{2}}+\left( \frac{1}{z^{2}}+\sum_{\omega\in L\setminus \{ 0, \tilde{\omega} \}}\left( \frac{1}{(z-\omega)^{2}}-\frac{1}{\omega^{2}} \right) \right) }_{ \text{homolorphic in a neighborhood of }\tilde{\omega} }.
$$
Thus, $\phi$ has a double pole at each point of $L$. Since $\phi$ is defined on all of $\mathbb{C}\setminus L$, it cannot have any other poles. 