---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-18
time: 14:00
---
![[TaylorThm.jpg]]

## Taylor's theorem

Let $f:[a,b]\to \mathbb{R}$ be twice differentiable. Fix $x\in[a, b]$. Consider the simplest approximation of $f$ that can be made: a constant function.
$$
f(x+h)=\underbrace{ f(x) }_{ E_{0}(h) }+r_{0}(h)
$$
Here, $E_{0}(h)$ is a constant polynomial approximation, and $r_{0}(h)$ is the error. Note that $\lim_{ h \to 0 }r_{0}(h)=0$. Now, we can try to refine our approximation by siphoning information from the error function. Consider the limit
$$
\begin{align}
\lim_{ h \to 0 } \frac{r_{0}(h)}{h}=\lim_{ h \to 0 } \frac{{f(x+h)-f(x)}}{h}=f'(x).
\end{align}
$$
Let 
$$
r_{1}(h)\equiv \frac{{r_{0}(h)}}{h}-f'(x).
$$
Clearly, $\lim_{ h \to 0 }r_{1}(h)=0$. Plugging in the value of $r_{0}(h)$ in terms of $r_{1}(h)$ in the zero degree approximation gives the first degree approximation $E_{1}(h)$ at $x$.
$$
f(x+h)=\underbrace{ f(x)+f'(x)h }_{ E_{1}(h) }+r_{1}(h)h,
$$
 How would you obtain a second degree approximation? Once more, consider the limit
$$
\begin{align}
\lim_{ h \to 0 } \frac{r_{1}(h)}{h}  & = \lim_{ h \to 0 } \frac{{f(x+h)-f(x)-f'(x)h}}{h^{2}}\\
 &= \lim_{ h \to 0 } \frac{{f'(x+h)-f'(x)}}{2h}=\frac{f''(x)}{2}
\end{align}
$$
and let
$$
r_{2}(h)\equiv \frac{r_{1}(h)}{h}-\frac{f''(x)}{2}.
$$
Again, $\lim_{ h \to 0 }r_{2}(h)=0$. Plugging in the value of $r_{1}(h)$ in terms of $r_{2}(h)$ in the first degree approximation yields:
$$
f(x+h)=\underbrace{ f(x)+f'(x)h+\frac{f''(x)}{2}h^{2} }_{ E_{2}(h) }+r_{2}(h)h^{2}.
$$
where $\lim_{ h \to 0 }r_{2}(h)=0$.

$E_{n}$ is called the $n$th Taylor polynomial at $x$. 

Rudin, 5.15

> [!Theorem]
> Suppose $f:[a, b]\to \mathbb{R}$, and $f^{(0)}, f^{(1)}, \dots, f^{(m-1)}$ are continuous on $[a, b]$, and $f^{(m)}$ exists on $(a, b)$. Let $x, x+h\in[a, b]$.
> Then, there exists $\theta$ strictly between $x$ and $x+h$ such that
> $$
> f(x+h)=\underbrace{ f^{(0)}(x)+f^{(1)}(x)(h)+\frac{f^{(2)}(x)}{2}(h)^{2}+\dots+ \frac{f^{(m-1)}(x)}{(m-1)!}(h)^{m-1} }_{ E_{m-1}(h) }+ \frac{f^{(m)}(\theta)}{m!}(h)^{m}.
> $$

> **Proof**
> We have shown that $f$ can be expressed as 
> $$
> f(x+h)=E_{m-1}(h)+r_{m-1}(h)h^{m-1}.
> $$
> Let $M$ be the number defined by
> $$
> f(x+h)=E_{m-1}(h)+Mh^{m}.
> $$
> Define 
> $$
> g(x+k)\equiv r_{m-1}(k)k^{m-1}-Mk^{m},
> $$
> where $x+k\in[a, b]$. Note that $g(x)=0$, and $g(x+h)=0$. Also note that $g^{(1)}(x), g^{(2)}(x),\dots, g^{(m-1)}(x)$ are zero.
> 
> On differentiating both sides $m$ times with respect to $k$ we get
> $$
> g^{(m)}(x+k)=f^{(m)}(x+k)-Mm!
> $$
> Now, since $g(x)=0$ and $g(x+h)=0$, there must exist $x+t_{1}$ between $x$ and $x+h$ such that $g'(x+t_{1})=0$, thanks to the [[LEC ANA1 24#Mean value theorem|mean value theorem]]. Again, since $g'(x)=0$ and $g'(x+t_{1})=0$, there must exist $x+t_{2}$ between $x$ and $x+t_{1}$ such that $g''(x+t_{2})=0$. After $m$ steps, we obtain $x+t_{m}\in(x, x+h)$ such that $g^{(m)}(x+t_{m})=0$. Therefore, $M=\frac{f^{(m)}(x+t_{m})}{m!}$. ❏

If we know that bounds on $|f^{(m)}(x)|$, we can bound the error!

---
## MVT analogue for vector valued functions

The mean value theorem and L'Hospital's rule are not true for complex or vector valued functions. For an example of the former, consider the map
$$
\mathbf{f}:\mathbb{R}\to \mathbb{R}^{2}, \mathbf{f}(x)=(\cos x, \sin x).
$$
$\mathbf{f}'(x)=(-\sin x, \cos x)$. Note that $|\mathbf{f}'(x)|=1$ for all $x$. Now, 
$$
\begin{align}
\frac{{\mathbf{f}(2\pi)-\mathbf{f}(0)}}{2\pi}=\mathbf{0}\ne \mathbf{f}'(x)\forall x.
\end{align}
$$

However, an analogue of the MVT does exist:

Rudin, 5.19

> [!Theorem]
> Suppose $\mathbf{f}$ is a continuous mapping of $[a, b]$ into $\mathbb{R}^{k}$ and $\mathbf{f}$ is differentiable in $(a, b)$. Then there exists $x\in(a, b)$ such that 
> $$
> |\mathbf{f}(b)-\mathbf{f}(a)|\leq (b-a)|\mathbf{f}'(x)|.
> $$

> **Proof**
> Let $\mathbf{z}=\mathbf{f}(a)-\mathbf{f}(b)$. Define
> $$
> \phi(t)=\mathbf{z}\cdot \mathbf{f}(t).
> $$
> Now, $\phi$ is a continuous real function. Thus, the mean value theorem tells us 
> $$
> \phi(a)-\phi(b)=(b-a)\phi(x)=(b-a)\mathbf{z}\cdot \mathbf{f}(x)
> $$
> for some $x\in(a, b)$. Also, 
> $$
> \phi(b)-\phi(a)=\mathbf{z}\cdot \mathbf{z}=|\mathbf{z}|^{2}.
> $$
> Thus, 
> $$
> |\mathbf{z}|^{2}=(b-a)\mathbf{z}\cdot\mathbf{f}(x)\leq(b-a)|\mathbf{z}||\mathbf{f}(x)|.
> $$
> ❏

