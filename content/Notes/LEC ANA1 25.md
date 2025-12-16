---
tags:
  - ANA1
  - Lecture
  - Processed
date: 2024-10-18
time: 14:00
id: "147"
---
![[TaylorThm.jpeg]]

# Taylor's theorem

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

> [!Theorem] @pughRealMathematicalAnalysis2015 3.12
> Assume that $f:(a, b)\to \mathbb{R}$ is $r$th order differentiable at $x$. Then
> 1. $E_{r}$ approximates $f$ to order $r$ at $x$ in the sense that the Taylor remainder $R(h)=f(x+h)-E_{r}(h)$ is $r$th order flat at $h=0$; that is, $R(h)/h^{r}\to 0$ as $h\to 0$. 
> 2. $E_{r}$ is the only polynomial of degree $\leqslant r$ with this approximation property. 
> 3. If, in addition, $f$ is $(r+1)$th order differentiable on $(a, b)$ then for some $\theta\in(x, x+h)$ we have
> 	$$
> 	R(h)=\frac{f^{(r+1)}(\theta)}{(r+1)!}h^{r+1}.
> 	$$
> 	
> 
> > [!Proof]-
> > 
> > $(1)$ The first $r$ derivatives of $R(h)$ exist and equal $0$ at $h=0$. If $h> 0$ then repeated applications of the Mean Value Theorem give
> > $$
> > \begin{align}
> > R(h) & =R(h)-R(0)=R'(\theta_{1})h=(R'(\theta_{1})-R'(0))h=R''(\theta_{2})\theta_{1}h \\
> >  & =\dots =R^{(r-1)}(\theta_{r-1})\theta_{r-2}\dots\theta_{1}h
> > \end{align}
> > $$
> > where $0<\theta_{r-1}<\dots<\theta_{1}< h$. Thus, 
> > $$
> > \left| \frac{R(h)}{h^{r}} \right|=\left| \frac{R^{(r-1)}(\theta_{r-1})\theta_{r-2}\dots\theta_{1}h}{h^{r}} \right|\leqslant \left| \frac{R^{(r-1)}(\theta_{r-1})}{\theta_{r-1}} \right|  \to 0
> > $$
> > If $h< 0$ the same is true with $h<\theta_{1}<\dots<\theta_{r-1}< 0$. 
> > 
> > $(2)$ If $Q(h)$ is a polynomial of degree $\leqslant r$, $Q\ne P$, then $Q-P$ is not $r$th order flat at $h=0$, so $f(x+h)-Q(h)$ cannot be $r$th order flat either. 
> > 
> > $(3)$ Fix $h> 0$ and define
> > $$
> > \begin{align}
> > g(t)=f(x+t)-E_{r}(t)-R(h)\frac{t^{r+1}}{h^{r+1}}=R(t)-R(h)\frac{t^{r+1}}{h^{r+1}}
> > \end{align}
> > $$
> > for $0\leqslant t\leqslant h$. Note that since $E_{r}(t)$ is a polynomial of degree $\leqslant r$, $E_{r}^{(r+1)}(t)=0$ for all $t$, and
> > $$
> > \begin{align}
> > g^{(r+1)}(t)= f^{(r+1)}(x+t)-(r+1)!\frac{R(h)}{h^{r+1}}.
> > \end{align}
> > $$
> > Note that $g(0)=g'(0)=\dots=g^{(r)}(0)=0$, and $g(h)=0$. By the Mean value theorem, there exists $\theta_{1}\in(0, h)$ such that $g'(\theta_{1})=0$. Since $g'(0)=0$ and $g'(\theta_{1})=0$, there exists $\theta_{2}\in(0, \theta_{1})$ such that $g''(\theta_{2})=0$. Continuing, we get a sequence $h>\theta_{1}>\dots>\theta_{r+1}> 0$ such that $g^{(k)}(\theta_{k})=0$. The $(r+1)$st equation, $g^{(r+1)}(t_{r+1})=0$, implies that 
> > $$
> > \begin{align}
> > 0=f^{(r+1)}(x+\theta_{r+1})-(r+1)!\frac{R(h)}{h^{r+1}}.
> > \end{align}
> > $$
> > Thus, $\theta=x+\theta_{r+1}$ works. If $h< 0$, the argument is symmetric. 
> 


> [!Remark]
> $(3)$ is the Lagrange form of the remainder. If $|f^{(r+1)}(\theta)|\leqslant M$ for all $\theta\in(a, b)$, then
> $$
> R(h)\leqslant  \frac{Mh^{r+1}}{(r+1)!},
> $$
> an estimate that is valid uniformly with respect to $x$ and $x+h$ in $(a, b)$. 

> [!Theorem] Rudin 5.15
> Suppose $f:[a, b]\to \mathbb{R}$, and $f^{(0)}, f^{(1)}, \dots, f^{(m-1)}$ are continuous on $[a, b]$, and $f^{(m)}$ exists on $(a, b)$. Let $x, x+h\in[a, b]$.
> Then, there exists $\theta$ strictly between $x$ and $x+h$ such that
> $$
> f(x+h)=\underbrace{ f^{(0)}(x)+f^{(1)}(x)(h)+\frac{f^{(2)}(x)}{2}(h)^{2}+\dots+ \frac{f^{(m-1)}(x)}{(m-1)!}(h)^{m-1} }_{ E_{m-1}(h) }+ \frac{f^{(m)}(\theta)}{m!}(h)^{m}.
> $$
> 
> > [!Proof]-
> > We have shown that $f$ can be expressed as 
> > $$
> > f(x+h)=E_{m-1}(h)+r_{m-1}(h)h^{m-1}.
> > $$
> > Let $M$ be the number defined by
> > $$
> > f(x+h)=E_{m-1}(h)+Mh^{m}.
> > $$
> > Define 
> > $$
> > g(x+k)\equiv r_{m-1}(k)k^{m-1}-Mk^{m},
> > $$
> > where $x+k\in[a, b]$. Note that $g(x)=0$, and $g(x+h)=0$. Also note that $g^{(1)}(x), g^{(2)}(x),\dots, g^{(m-1)}(x)$ are zero.
> > 
> > On differentiating both sides $m$ times with respect to $k$ we get
> > $$
> > g^{(m)}(x+k)=f^{(m)}(x+k)-Mm!
> > $$
> > Now, since $g(x)=0$ and $g(x+h)=0$, there must exist $x+t_{1}$ between $x$ and $x+h$ such that $g'(x+t_{1})=0$, thanks to the [[LEC ANA1 24#Mean value theorem|mean value theorem]]. Again, since $g'(x)=0$ and $g'(x+t_{1})=0$, there must exist $x+t_{2}$ between $x$ and $x+t_{1}$ such that $g''(x+t_{2})=0$. After $m$ steps, we obtain $x+t_{m}\in(x, x+h)$ such that $g^{(m)}(x+t_{m})=0$. Therefore, $M=\frac{f^{(m)}(x+t_{m})}{m!}$. 
> 


If we know that bounds on $|f^{(m)}(x)|$, we can bound the error!

---
# MVT analogue for vector valued functions

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

> [!Theorem] Rudin 5.19
> Suppose $\mathbf{f}$ is a continuous mapping of $[a, b]$ into $\mathbb{R}^{k}$ and $\mathbf{f}$ is differentiable in $(a, b)$. Then there exists $x\in(a, b)$ such that 
> $$
> |\mathbf{f}(b)-\mathbf{f}(a)|\leq (b-a)|\mathbf{f}'(x)|.
> $$
> 
> > [!Proof]-
> > Let $\mathbf{z}=\mathbf{f}(a)-\mathbf{f}(b)$. Define
> > $$
> > \phi(t)=\mathbf{z}\cdot \mathbf{f}(t).
> > $$
> > Now, $\phi$ is a continuous real function. Thus, the mean value theorem tells us 
> > $$
> > \phi(a)-\phi(b)=(b-a)\phi'(x)=(b-a)\mathbf{z}\cdot \mathbf{f}'(x)
> > $$
> > for some $x\in(a, b)$. Also, 
> > $$
> > \phi(b)-\phi(a)=\mathbf{z}\cdot \mathbf{z}=|\mathbf{z}|^{2}.
> > $$
> > Thus, 
> > $$
> > |\mathbf{z}|^{2}=(b-a)\mathbf{z}\cdot\mathbf{f}'(x)\leq(b-a)|\mathbf{z}||\mathbf{f}'(x)|.
> > $$
> > 
> > 
> > 