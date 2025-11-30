---
id: "355"
date: 2025-11-14
time: 15:27
tags:
  - ANA2
  - Lecture
  - Processed
---
Recall that $f\in L^{2}[0, 2\pi]$ can be expressed as
$$
f=\sum_{n\in \mathbb{Z}}\hat{f}_{n}\varphi_{n}.
$$
It follows from [[LEC ANA2 16#^84dbb8]] that $\sum_{n\in \mathbb{Z}}|\hat{f}_{n}|^{2}< \infty$, and hence $\hat{f}_{n}\to 0$ as $|n|\to \infty$. This immediately yields

> [!Proposition] Riemann-Lebesgue
> Let $f\in L^{2}[0, 2\pi]$. Then,
> $$
> \begin{align}
>  & \int f(t)\cos(nt)\,dt\to 0 \quad \text{ and }\quad 
>  \int f(t)\sin(nt)\,dt\to 0
> \end{align}
> $$
> as $n\to \infty$.

^65c770

---

# Convergence of Fourier series

We have seen that 
- $S_{N}f$ [[LEC ANA2 17#The Fourier Transform|converges]] to $f$ in $L^{2}[0, 2\pi]$, and
- [[LEC ANA2 17#^349268|this convergence is not pointwise in general]].

We will now explore hypotheses under which $S_{N}f$ converges uniformly. 

Suppose $f\in C^{0}[0, 2\pi]$ such that
$$
\int_{0}^{2\pi} f(t) \, dt=0.
$$
Define
$$
F(t):=\int_{0}^{t} f(s) \, ds. 
$$
It follows from the fundamental theorem of calculus that $F\in C^{0}[0, 2\pi]$ [^1]. We see that
$$
\begin{align}
\hat{F}_{n} & =\frac{1}{2\pi}\int_{0}^{2\pi} \left( \int_{0}^{t} f(s) \, ds  \right)e^{ -in t } \, dt  \\
 & =\frac{1}{2\pi}\left( \left[ \left( \int_{0}^{t} f(s) \, ds  \right)\frac{e^{ -in t }}{-in} \right] _{0}^{2\pi} -\frac{1}{-in}\int_{0}^{2\pi} f(t)e^{ -in t } \, dt  \right)\\
 & = \frac{\hat{f}_{n}}{-in}.
\end{align}
$$
It follows that if $f\in C^{0}[0, 2\pi]$ is continuously differentiable, then 
$$
\begin{align}
\hat{f}_{n}=\frac{\hat{f_{n}'}}{-in}.
\end{align}
$$
If $f'$ is also continuously differentiable (i.e, $f$ is continuously twice differentiable), then we have
$$
\begin{align}
\hat{f}_{n}=-\frac{\hat{f''_{n}}}{n^{2}}.
\end{align}
$$
This leads to the following

> [!Proposition]
> If $f\in C^{0}[0, 2\pi]$ is twice continuously differentiable, then $S_{N}f$ converges uniformly. 
> 
> > [!Proof]-
> > 
> > Note that for general $h\in L^{2}[0, 2\pi]$, 
> > $$
> > \begin{align}
> > |\hat{h}_{n}|\leqslant \frac{1}{2\pi}\int_{0}^{2\pi} |h(s)| \, ds=\lVert h \rVert _{1}. 
> > \end{align}
> > $$
> > In particular, 
> > $$
> > |\hat{f}_{n}|=\frac{1}{n^{2}}|\hat{f''_{n}}|\leqslant \frac{1}{n^{2}}\lVert f'' \rVert _{1}.
> > $$
> > Thus, $\sum_{n\in \mathbb{Z}}|\hat{f}_{n}|$ converges. Now consider the sequence $\{ S_{N}f \}_{N=1}^{\infty}$. For $M\geqslant N$, we have
> > $$
> > \begin{align}
> > \lVert S_{M}f-S_{N}f  \rVert _{\infty} & = \left\lVert \sum_{n=-M}^{-N-1} \hat{f}_{n}e^{ in t }+ \sum_{n=N+1}^{M} \hat{f}_{n}e^{ in t }  \right\rVert _{\infty} \\
> >  &\leqslant \sum_{n=-M}^{-N-1} |\hat{f}_{n}|+\sum_{n=N+1}^{M} |\hat{f}_{n}|\to 0\text{ as }N, M\to \infty.
> > \end{align}
> > $$
> > Thus, $\{ S_{N}f \}_{N=1}^{\infty}$ converges uniformly. 
> 

^72aad8

Of course, since $C^{0}[0, 2\pi]$ is complete ($S_{1}$ is compact; see [[LEC ANA2 3#^e12a1f]]), it follows that $S_{N}f$ converges uniformly to some $\tilde{f}\in C^{0}[0, 2\pi]$. We will show later that $\tilde{f}$ is in fact equal to $f$. 

The hypotheses of [[#^72aad8]] can be relaxed:

> [!Proposition]
> If $f\in C^{0}[0, 2\pi]$ is continuously differentiable, then $S_{N}f$ converges uniformly. 
> 
> > [!Proof]-
> > 
> > As in the proof of [[LEC ANA2 18#^72aad8]], It suffices to show that $\sum_{n\in \mathbb{Z}}|\hat{f}_{n}|$ converges. 
> > $$
> > \begin{align}
> > \sum_{n\in \mathbb{Z}}|\hat{f}_{n}| & =\sum_{n\in \mathbb{Z}}\frac{1}{|n|}|\hat{f}_{n}'| \\
> >  & \leqslant \sqrt{ \sum_{n\in \mathbb{Z}}\frac{1}{n^{2}} }\sqrt{ \sum_{n\in \mathbb{Z}}|\hat{f}'_{n}|^{2} } \\
> >  & \leqslant \infty,
> > \end{align}
> > $$
> > where the first inequality follows from [[LEC ANA2 16#^754891]].5, [[LEC ANA2 1#^02d59c]], and [[LEC ALG1 21#^c0606c]].
> 

> [!Proposition]
> Let $f\in C^{0}[-\pi, \pi]$. If $t_{0}\in[-\pi, \pi]$ is such that 
> $$
> \int_{-\pi}^{\pi} \frac{|f(t)-f(t_{0})|}{|t-t_{0}|} \, dt< \infty,
> $$
> then $(S_{N}f)(t_{0})\to f(t_{0})$ as $N\to \infty$. 

^8d8cda

[!Proof]-

First, note that since $e^{ in(t+\pi) }=e^{ in t }(-1)^{n}$, $\{ e^{ in t }:n\in \mathbb{Z} \}$ remains an orthonormal basis for $L^{2}[-\pi, \pi]$. [[LEC ANA2 17#^612194|WLOG]], we can assume $t_{0}=0$. Using [[LEC ANA2 17#^65b628]], 
$$
\begin{align}
|(S_{N}f)(0)-f(0)| & =\left| \frac{1}{2\pi}\int_{-\pi}^{\pi} D_{N}(t)f(t) \, dt -f(0) \right| .
\end{align}
$$
Observe that $\int_{-\pi}^{\pi} D_{N}(t)\,dt=\int_{-\pi}^{\pi} \sum_{-N}^{N}e^{ in t } \, dt=2\pi$. Thus, we can write
$$
\begin{align}
|(S_{N}f)(0)-f(0)| & =\frac{1}{2\pi}\left| \int_{-\pi}^{\pi} D_{N}(t)f(t) \, dt-\int_{-\pi}^{\pi} D_{N}(t)f(0) \, dt    \right| \\
 & = \frac{1}{2\pi}  \left| \int_{-\pi}^{\pi} \left( \frac{\sin{(N+1/2)t}}{\sin t/2} \right)(f(t)-f(0)) \, dt \right|  \\
 & \leqslant \frac{1}{2\pi} \left[  \underbrace{ \int_{-\delta}^{\delta} \frac{|f(t)-f(0)|}{|\sin t/2|} \, dt }_{ =:\,A^{\delta} }+ \underbrace{ \left|\int_{[-\delta, \delta]^{c}} \left( \frac{\sin{(N+1/2)t}}{\sin t/2} \right)(f(t)-f(0))\,dt \right| }_{ =:\,B^{\delta}_{N}  } \right] 
\end{align}
$$
We will individually bound $A^{\delta}$ and $B^{\delta}_{N}$. 
$$
\begin{align}
B^{\delta}_{N} & =\left| \int_{[-\delta, \delta]^{c}} \underbrace{ \left( \frac{(f(t)-f(0))\cos t/2}{\sin t/2} \right) }_{ =:\,g_{1}(t) }\sin Nt\,dt+\int_{[-\delta, \delta]^{c} }\underbrace{ (f(t)-f(0)) }_{ =:\,g_{2}(t)  }\cos Nt \,dt \right|.
\end{align}
$$
Define both $g_{1}$ and $g_{2}$ to be zero on $[-\delta, \delta]$. Note that $g_{1}$ and $g_{2}$ are bounded and Riemann integrable on $[-\pi, \pi]$, and hence in $L^{2}[-\pi, \pi]$ by [[LEC ANA2 17#^5d1611]]. It follows from [[#^65c770]] that
$$
\begin{align}
\int_{[-\delta, \delta]^{c}}g_{1}(t)\sin Nt\,dt =\int_{-\pi}^{\pi} g_{1}(t)\sin Nt \, dt \to 0 \quad \text{as}\quad N\to \infty.
\end{align}
$$
Ditto for $g_{2}$. Thus, $B^{\delta}_{N}\to 0$ as $N\to \infty$. 

Now, $A^{\delta}$'s turn. Define $M=\sup \{ (t/2)/(\sin(t/2)) : t\in[-\pi, \pi] \}$. Then, $|\sin(t/2)|\geqslant |t|/2M$. 
$$
\begin{align}
A^{\delta}\leqslant 2M\int_{-\delta}^{\delta} \frac{|f(t)-f(0)|}{|t|} \, dt.
\end{align}
$$
By hypothesis, $\int_{-\pi}^{\pi} |f(t)-f(0)|/|t| \, dt$ exists. It follows that $\int_{-\delta}^{\delta}  |f(t)-f(0)|/|t| \, dt\to 0$ as $\delta\to 0$. 

Now, let $\epsilon> 0$ be given. Choose $\delta$ such that $A^{\delta}<\epsilon/2$, and $N$ such that $B_{N}^{\delta}<\epsilon$. 


> [!Example]
> If $f$ and $t_{0}$ satisfy
> $$
> |f(t)-f(t_{0})|\leqslant k|t-t_{0}|^{\alpha}
> $$
> for all $t\in[-\pi, \pi]$ for some $\alpha> 0$, then $(S_{N}f)(t_{0})\to f(t_{0})$. 

[^1]: In fact, $F$ is continuously differentiable - I just can't think of a way to extend the godawful notation of $C^{0}[0, 2\pi]$ to convey that. 
