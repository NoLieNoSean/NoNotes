---
id: "455"
date: 2026-05-10
time: 11:38
tags:
  - CANA
---
# Part 1

## Problem 1

Let $\mathcal{M}$ be the set of all maps $f(z) = \frac{az+b}{cz+d}$ with $ad-bc \neq 0$.

Let $f_1(z) = \frac{a_1z+b_1}{c_1z+d_1}$ and $f_2(z) = \frac{a_2z+b_2}{c_2z+d_2}$. Their composition is
$$
(f_1 \circ f_2)(z) = \frac{(a_1a_2+b_1c_2)z + (a_1b_2+b_1d_2)}{(c_1a_2+d_1c_2)z + (c_1b_2+d_1d_2)}.
$$
the difference of the product of cross coefficients is nonzero, so $f_1 \circ f_2 \in \mathcal{M}$.

$f(z) = \frac{1\cdot z + 0}{0\cdot z + 1}$ is in $\mathcal{M}$ and acts as the identity.

For $f(z) = \frac{az+b}{cz+d}$, $g(z) = \frac{dz-b}{-cz+a}$ acts as $f^{-1}$. The determinant is $da - (-c)(-b) = ad-bc \neq 0$, so $f^{-1} \in \mathcal{M}$.

---

## Problem 2

Let $S$ be a circle with radius $r$ and center $x_{0}=a+ib$. The equation of $S$ is given by
$$
\begin{align}
|z-x_{0}|^{2} & =r^{2} \\
\end{align}
$$
which on expanding yields
$$
|z^{2}|-x_{0}\overline{z}-\overline{x_{0}}z+(|x_{0}|^{2}-r^{2})=0.
$$
Alternatively, let $S$ be the line $ax+by=c$. The equation of $S$ then reads
$$
x_{0}\overline{z}+\overline{x_{0}}z=2c.
$$
Thus, a generalized circle in $\mathbb{C}$ satisfies the equation
$$
A|z^{2}|+B\overline{z}+\overline{B}z+C=0
$$
for $A, C\in \mathbb{R}$. It is also clear by working backwards that any such equation must be that of a generalized circle.

So, let $S$ be a generalized circle satisfying $A|z^{2}|+B\overline{z}+\overline{B}z+C=0$, and let $w$ be a point on $S$. If we denote $1/w$ by $w'$, then
$$
\begin{align}
A\frac{1}{|w'|^{2}} + B\frac{1}{\overline{w'}}+\overline{B}\frac{1}{w'}+C=0 \\
C|w'|^{2}+B\omega'+\overline{B}\overline{\omega'}+A=0.
\end{align}
$$
$f(S)$ is also a generalized circle, where $f(z)=1/z$. Note that scaling and translation also preserve generalized circles. 

Finally, let $f(z)=\frac{az+b}{cz+d}$ be any bilinear transformation. If $c=0$, then $f$ is the composition of a scaling transformation and a translation, both of which preserve generalized circles. If $c\ne 0$, then $f$ can be expressed in the following form:
$$
f(z) = \frac{a}{c} - \frac{ad-bc}{c^2} \cdot \frac{1}{z + d/c}.
$$
Thus, $f$ can be viewed as a composition of a translation, inversion, scaling, and another translation, all of which have been shown to preserve generalized circles. 

---
## Problem 3

Fixed points that are not infinity must satisfy $z = \frac{az+b}{cz+d} \implies cz^2 + (d-a)z - b = 0$. This has at most two solutions unless all coefficients vanish: $c=0$, $d-a=0$, $b=0$, which implies $f(z) = \frac{az}{a} = z$, the identity. 

If $\infty$ is a fixed point, then $c=0$ and only one more fixed point can exist - the solution to $zd=az+b$. 

It follows that a bilinear map is determined uniquely by its values on any three distinct points. Let $T_{1}$ and $T_{2}$ take values $d, e, f$ at points $a, b, c$. Then, $T_{2}^{-1}\circ T_{1}$ has three fixed points, and thus must be the identity, whence $T_{1}=T_{2}$. 

$T(z)$ is clearly bilinear; it is seen to send $z_{1}, z_{2}, z_{3}$ to $\infty, 0, 1$ on inspection. It is unique by the preceding argument. 

---
## Problem 4

Since $f$ is conformal, $f^{-1}:D_{2}\to D_{1}$ exists and is holomorphic. Definite $g=h\circ f^{-1}$. Then $g:D_{2}\to D_{1}$, being a composition of conformal maps, is conformal. Rearranging gives $h=g\circ f$. 

Let $h\in \text{Aut}(D_{1})$. Define $g=f\circ h\circ f^{-1}$. Then $g:D_{2}\to D_{1}$ is conformal. Rearranging gives $h=f^{-1}\circ g\circ f$. 

---

## Problem 5

Let $F(z)=\frac{z-i}{z+i}$ be the conformal map of $\mathbb{H}$ into $\mathbb{D}$. We have seen that automorphisms of $\mathbb{D}$ are given by $\psi_{\alpha}(z)=e^{ i\theta }\frac{z-\alpha}{1-\overline{\alpha}z}$ for $|\alpha|< 1$. By problem 4, any automorphism of $\mathbb{H}$ is of the form $F ^{-1}\circ \psi_{\alpha}\circ F$.  Computing this composition yields a map of the form $\frac{az+b}{cz+d}$ with $a, b, c, d\in \mathbb{R}$ and $ad-bc>0$. Conversely, any bilinear transform maps $\mathbb{H}$ into itself. Thus, $\text{Aut}(\mathbb{H})$ consists of exactly the bilinear transformations. 


---
# Part 2

## Problem 1

Let $h(z)$ be as defined. Let $R> 0$, and $D_{R}$ denote the closed disc of radius $R$ centered at the origin. Let $L$ be such that $\alpha:=R^{2}/(l+1)< 1$. Then, 
$$
\begin{align}
\left\lVert  \sum_{n=L}^{\infty} \left( \frac{z^{2}}{n+1} \right)^{k_{n}}  \right\rVert _{z\in D_{R}} \leqslant  \sum_{n=L}^{\infty} \left| \frac{R^{2}}{L+1} \right| ^{n}=\sum_{n=L}^{\infty} \alpha^{n}.
\end{align}
$$
Thus, by choosing $N\geqslant L$ high enough, we can achieve $\left\lVert  \sum_{n=l}^{m}\left( \frac{z^{2}}{n+1} \right)^{k_{n}}  \right\rVert<\epsilon$ for any $\epsilon> 0$ and $l, m\geqslant N$. It follows that $h(z)$ converges uniformly on every compact subset of $\mathbb{C}$, and that $h(z)$ is entire. 

Given $x\in \mathbb{R}$, let $k$ be such that $k\leqslant |x|\leqslant k+1$. If $k=0$ or $k=1$, $h(x)> |f(x)|$ by definition of $a$. For $k \geqslant 2$, we have
$$
\begin{align}
h(x) & \geqslant \left(  \frac{x^{2}}{k+1} \right)^{k_{n}} \\
 & \geqslant  \left(  \frac{k^{2}}{k+1} \right)^{k_{n}} \\
 & > |f(x)|,
\end{align}
$$
by definition of $k_{n}$. 

Setting $g=e^{h}$, we observe that $g$ continues to satisfy $g(x)> |f(x)|$, and that $g$ does not have any zeroes. 

---

## Problem 2

Define
$$
g(x)=\begin{cases}
0 & |x|\geq 1 \\
x+ 1 & -1\leqslant  x\leqslant  0 \\
1-x  & 0\leqslant  x\leqslant  1
\end{cases}
$$
Observe that the collection $\{ g(x-n):n\in \mathbb{Z} \}$ is a continuous partition of unity on $\mathbb{R}$. Let $f_{n}=g(x)f(x+n)$. $f_{n}$ is continuous, and $\text{supp}\,f_{n}\subseteq[-1, 1]$. 
$$
\begin{align}
\sum_{n\in \mathbb{Z}}f_{n}(x-n) & =\sum_{n\in \mathbb{Z}}g(x-n)f(x)  \\
 & =f(x)\sum_{n\in \mathbb{Z}}g(x-n) \\
 & =f(x).
\end{align}
$$

---

## Problem 3

Note that
$$
\frac{n}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} e^{ -\frac{n^{2}(x-t)^{2}}{2} } \, dt=\frac{1}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} e^{ -u^{2}/2 } \, du=1.  
$$
Therefore, 
$$
\begin{align}
f_{n}(x)-f(x) & = \frac{n}{\sqrt{ 2\pi }}\int_{a}^{b} e^{-\frac{n^{2}(x-t)^{2}}{2} }f(t) \, dt -f(x) \frac{n}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty}  e^{-\frac{n^{2}(x-t)^{2}}{2} }\, dt   \\
 & = \underbrace{ \frac{n}{\sqrt{ 2\pi }}\int_{a}^{b} e^{ -\frac{n^{2}(x-t)^{2}}{2} }(f(t)-f(x))\, dt }_{ I_{1} } - f(x)\underbrace{\frac{n}{\sqrt{ 2\pi }} \int_{[a, b]^{c}}e^{ -\frac{n^{2}(x-t)^{2}}{2} }dt }_{ I_{2} } \\
\end{align}
$$
Let $\epsilon> 0$ and $x\in[a+\delta, b-\delta]$. We will deal with the second integral first. We change variable to $u=n(t-x)$ to obtain
$$
\begin{align}
I_{2}= \frac{1}{\sqrt{ 2\pi }} \left[ \int_{-\infty}^{n(a-x)} e^{ -u^{2} /2} \, du+\int_{n(b-x)}^{\infty} e^{ -u^{2}/2 } \, du  \right]  .
\end{align}
$$
Since $x\in[a+\delta, b-\delta]$, $|(a-x)|, |(b-x)|> \delta$. Since $\int_{-\infty}^{\infty} e^{ -u^{2}/2 } \, du< \infty$, there exists $M> 0$ such that $\int_{[-M, M]^{c}}e^{ -u^{2}/2 }\,du<\epsilon$. Therefore, if we choose $n$ such that $n> M/\delta$, we obtain
$$
\begin{align}
I_{2}  \leqslant \int_{[-M, M]^{c}}e^{ -u^{2}/2 }\,du<\epsilon.
\end{align}
$$
Since $f$ is bounded on $[a, b]$, this implies $f(x)I_{2}\to 0$ as $n\to \infty$. 

For $I_{1}$, let $\delta> \eta> 0$ be such that $|f(t)-f(x)|<\epsilon$ whenever $|x-t|< \eta$. Note that $\eta$ is independent of $n$. 
$$
\begin{align}
|I_{1}| & \leqslant\frac{n}{\sqrt{ 2\pi }} \left[ \left| \int_{x-\eta}^{x+\eta} e^{ -\frac{n^{2}(x-t)^{2}}{2} }(f(t)-f(x)) \, dt  \right|  +\left| \int_{[x-\eta, x+\eta]^{c}}e^{ -\frac{n^{2}(x-t)^{2}}{2} }(f(t)-f(x)) \, dt \right|  \right]  \\
 & \leqslant \frac{1}{\sqrt{ 2\pi }}\left[ \epsilon \int_{-n\eta}^{n \eta}e^{ -u^{2}/2 }  \, du +\lVert f \rVert _{\infty}\int_{[-n \eta, n \eta]^{c}} e^{ -u^{2}/2 }\,du \right]  \\
 & \leqslant   \frac{1}{\sqrt{ 2\pi }}\left[ \epsilon +\lVert f \rVert _{\infty}\int_{[-n \eta, n \eta]^{c}} e^{ -u^{2}/2 }\,du \right] 
\end{align}
$$
As before, the integral goes to zero as $n\to \infty$. Thus, $I_{1}\to 0$ as $n\to \infty$. It follows that $f_{n}\to f$ uniformly on $[a+\delta, b-\delta]$. 

Next, suppose $x\in \mathbb{R}\setminus[a-\delta, b+\delta]$, so that $|a-x|, |b-x|>\delta$. If $x< a-\delta$, then $b-x> a-x> \delta> 0$. Given $\epsilon> 0$, choose $M$ and $n$ as before. Let $B$ be a bound for $f$. Then, for all $m> n$, 
$$
\begin{align}
\left| f_{m}(x)  \right| & = \frac{1}{\sqrt{ 2\pi }}B\int_{m(a-x)}^{m(b-x)} e^{ -u^{2}/2 } \, du\leqslant  \frac{1}{\sqrt{ 2\pi }}B\int_{M}^{\infty} e^{ -u^{2}/2 } \, du< B\epsilon.
\end{align}
$$
Thus, $f_{n}\to 0$ uniformly on $\mathbb{R}\setminus[a-\delta, b+\delta]$. 

---

## Problem 4

Use $f_{n}$ from Problem 3 by considering $f$ as a continuous function from $[-1, 1]\to \mathbb{C}$. We can exploit the nature of $f$ in this problem to arrive at a much stronger uniform convergence result: for $x\in \mathbb{R}$, $\epsilon> 0$, and $\delta> 0$ chosen by the uniform continuity of $f$, 
$$
\begin{align}
|f_{n}(x)-f(x)| & =\left| \frac{n}{\sqrt{ 2\pi }}\int_{-\infty}^{\infty} e^{ -\frac{n^{2}(x-t)^{2}}{2} }(f(t)-f(x)) \, dt  \right|  \\
 & \leqslant  \frac{n}{\sqrt{ 2\pi }}\int_{|t-x|<\delta} e^{ -\frac{n^{2}(x-t)^{2}}{2} }\left| f(t)-f(x) \right|  \, dt +  \frac{n}{\sqrt{ 2\pi }}\int_{|t-x|\geqslant \delta} e^{ -\frac{n^{2}(x-t)^{2}}{2} }\left| f(t)-f(x) \right|  \, dt \\
 & \leqslant \epsilon+ \frac{2B}{\sqrt{ 2\pi }}\int_{|u|\geqslant  n\delta}e^{ -u^{2}/2 }\,du,
\end{align}
$$
which goes to $0$ as $n\to \infty$. Thus, $f_{n}$ converges uniformly to $f$ on all of $\mathbb{R}$. 

Next, for $z=x+iy\in S$ and $|t|\leqslant 1$, we have
$$
\begin{align}
\mathrm{Re}((z-t)^{2}) & =(z-t)^{2}-y^{2} \\
 & \geqslant  (|x|-1)^{2}-x^{2}/4 \\
 & = \frac{3}{4}x^{2}-2|x|+1 \\
\end{align}
$$
For $|x|> 3$, this is greater than $2c=1.75$. Thus, $|e^{ -n^{2}(z-t)^{2}/2 }|=e^{ -n^{2}\mathrm{Re}((z-t)^{2})/2 }\leqslant e^{ -cn^{2} }$. Hence $|f_{n}(z)|\leqslant k n e^{ -cn^{2} }$ for some constant $k$. It follows that $f_{n}\to 0$ uniformly on $S$. 

Therefore, for $\epsilon> 0$, we can pick $f_{n}$ such that $\left| f_{n}-f \right|<\epsilon$ on $\mathbb{R}$ and $|f_{n}|<\epsilon$ on $S$. Let $g$ be this $f_{n}$. 

---

## Problem 5

By problem 2, write $f(x)=\sum_{n\in \mathbb{Z}}f_{n}(x-n)$ with $\text{supp}(f_{n})\subseteq[-1, 1]$. Apply Problem 4 to each $f_{n}$ with $\epsilon_{n}=2^{-|n|-2}$ to get $g_{n}$ such that $|f_{n}-g_{n}|<\epsilon_{n}$ on $\mathbb{R}$ and $|g_{n}|<\epsilon_{n}$ on $S$. 

Next, define $g(z)=\sum_{n\in \mathbb{N}}g_{n}(z-n)$. For any compact $K\subseteq \mathbb{C}$, for large enough $|n|$, $z-n\in S$ for all $z\in K$, so $|g_{n}(z-n)|<\epsilon_{n}$. Since $\sum\epsilon_{n}< \infty$, the series converges uniformly on $K$, and hence defines an entire function. 

On $\mathbb{R}$, $|f(x)-g(x)|\leqslant \sum_{n\in \mathbb{Z}}|f_{n}(x-n)-g_{n}(x-n)|< \sum_{n\in \mathbb{Z}}\epsilon_{n}=\sum_{n\in \mathbb{Z}}2^{-|n|-2}=1/2< 1$. 

---

## Problem 6

$f:\mathbb{R}\to \mathbb{C}$ is continuous; $\varphi:\mathbb{R}\to (0, \infty)$ is continuous. By problem 1, there exists an entire function $h$ with no zeroes such that $h(x)> 1/\varphi(x)$ for all $x\in \mathbb{R}$. 

Define $\tilde{f}=f\cdot h$. By problem 5, there exists an entire function $\tilde{g}$ such that $|\tilde{f}(x)-\tilde{g}(x)|< 1$ for all real $x$. Define $g=\tilde{g}/h$. Note that $g$ is entire. For $x\in \mathbb{R}$,  
$$
\begin{align}
|f(x)-g(x)| & =\left| \frac{\tilde{f}(x)-\tilde{g}(x)}{h(x)}\right| < \frac{1}{|h(x)|}<\varphi(x).
\end{align}
$$



