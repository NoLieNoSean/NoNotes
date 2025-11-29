---
id: "352"
date: 2025-11-12
time: 15:42
tags:
  - ANA2
  - Lecture
  - Processed
---
# The Fourier Transform

The following algebras can be identified with each other: $C^{0}([0, 2\pi])$, $C(S_{1})$, and $C^{0}([-\pi, \pi])$, with the norm induced by the inner product. 

[[LEC ANA2 16#^915903|We have shown]] that $S=\{ \varphi_{n}:n\in \mathbb{Z} \}\subseteq L^{2}[0, 2\pi]$ is an [[LEC ANA2 16#^5f2a03|orthonormal basis]] for $L^{2}[0, 2\pi]$, where $\varphi_{n}=e^{ int }$. Therefore, by [[LEC ANA2 16#^754891]], $f\in L^{2}[0, 2\pi]$ can be expressed as
$$
f=\sum_{n\in \mathbb{Z}}\hat{f}_{n}\varphi_{n},
$$
where $\hat{f}_{n}:=\langle f, \varphi_{n} \rangle$. Precisely, if we define
$$
\begin{align}
S_{N}f
 & :=\sum_{n=-N}^{N}\hat{f}_{n}\varphi_{n},
\end{align}
$$
then $S_{N}f$ converges to $f$ in $L^{2}[0, 2\pi]$:
$$
\lim_{ N \to \infty }\int_{0}^{2\pi} |f-S_{N}f|^{2} =0.
$$
In a sense, the function $f$ and the sequence $\{ \hat{f}_{n} \}$ are duals of each other. 

> [!Proposition]
> The map $\zeta:L^{2}[0, 2\pi]\to \ell_{2}(\mathbb{Z})$ defined by $f\mapsto \{ \hat{f}_{n} \}$ is an isometrical linear isomorphism. 
> 
> > [!Proof]-
> > 
> > $\zeta$ is injective by [[LEC ANA2 16#^754891]].3 and surjective by [[LEC ANA2 16#^84dbb8]].1&2. It is clear that $\zeta$ is a linear transformation. $\zeta$ preserves the inner product:
> > $$
> > \begin{align}
> > \langle f, g \rangle =\sum_{n\in \mathbb{Z}}\langle f, \varphi_{n} \rangle \langle \varphi_{n}, g \rangle =\sum_{n\in \mathbb{Z}}\hat{f}_{n}\overline{\hat{g}}_{n}. 
> > \end{align}
> > $$
> > 
> 

By [[LEC ANA2 16#^754891]].5, we also have
$$
\lVert f \rVert ^{2}_{2}=\sum_{n\in \mathbb{Z}}|\hat{f}_{n}|^{2}.
$$

^589cb2

> [!Example]
> $$
> \sum_{n=1}^{\infty} \frac{1}{n^{2}}=\frac{\pi^{2}}{6}.
> $$
> > [!Proof]-
> > 
> > Let $f:[0, 2\pi]\to \mathbb{C}$ be defined by $f(t)=1$ for $t\in[0, \pi)$, and $f(t)=-1$ for $t\in[\pi, 2\pi)$[^1]. It is clear from [[LEC ANA2 16#^0109ea]] that $f\in L^{2}[0, 2\pi]$[^2]. Clearly, $\lVert f \rVert_{2}=1$. 
> > $$
> > \begin{align}
> > \hat{f}_{n} & =\frac{1}{2\pi}\left( \int_{0}^{\pi} e^{ - i nt } \, dt-\int_{\pi}^{2\pi} e^{  -i n t } \, dt   \right)  ;\\\\
> > \hat{f}(2k) & =0, \\
> > \hat{f}(2k+1) & =\frac{-i}{\pi}\frac{2}{2k+1}.
> > \end{align}
> > $$
> > Using [[#^589cb2]], 
> > $$
> > \begin{align}
> > 1  =\lVert f \rVert _{2}^{2} & =\sum_{n\in \mathbb{Z}}|\hat{f}_{n}|^{2} \\
> >  & =\frac{8}{\pi^{2}}\sum _{k=0}^{\infty}\frac{1}{(2k+1)^{2}} \\
> >  & =\frac{6}{\pi^{2}}\sum_{n=1}^{\infty} \frac{1}{n^{2}}.
> > \end{align}
> > $$
> > 
> > 
> 

## Convergence of Fourier series

Since functions that differ on a set of measure zero are identified with each other in $L^{2}$, convergence in $L^{2}$ does not imply $S_{N}f(t)\to f(t)$ for all $t\in[0, 2\pi]$. We will now demonstrate the existence of such $f$.

Periodic domains are assumed from here on.

> [!Lemma]
> $$
> \begin{align}
> (S_{N}f)(t) & =\frac{1}{2\pi}\int_{0}^{2\pi} D_{N}(t-s)f(s) \, ds, 
> 
> \end{align}
> $$
> where 
> $$
> \begin{align}
> D_{N}(t) & = \frac{\sin\,(N+1/2)t}{\sin t/2} &  & t\in(0, 2\pi) \\
>  & =2N+1 &  & t=0, 2\pi.
> \end{align}
> $$
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > (S_{N}f)(t) & =\sum_{n=-N}^{N} \hat{f}_{n}e^{  i nt } \\
> >  & =\sum_{n=-N}^{N} \left( \frac{1}{2\pi}\int_{0}^{2\pi} f(s)e^{  - ins } \, ds  \right)e^{ i nt }  \\
> >  & =\frac{1}{2\pi}\int_{0}^{2\pi} D_{N}(t-s)f(s) \, ds, 
> > \end{align}
> > $$
> > where 
> > $$
> > \begin{align}
> > D_{N}(u) & =\sum_{n=-N}^{N}e^{ i n u } \\
> >  & =e^{ -iNu }\left( \frac{e^{ i(2N+1)u }-1}{e^{ iu }-1}  \right) & u\ne 0, 2\pi\\
> >  & = \frac{e^{ i(N+1)u }-e^{ -iNu }}{e^{ iu }-1} \\
> >  & =\frac{e^{ i(N+1/2)u }-e^{ -i(N+1/2)u }}{e^{ iu/2 }-e^{ -iu/2 }}  \\
> >  & =\frac{\sin\,(N+1/2)u}{\sin u/2}.
> > \end{align}
> > $$
> > 
> 

Note that $D_{N}\in C^{0}[0, 2\pi]$ for all $N$. 

> [!Lemma]
> 
> $$
> \lim_{ N \to \infty } \int_{0}^{2\pi} |D_{N}(t)| \, dt=\infty.
> $$
> 
> > [!Proof]-
> > 
> > $$
> > \begin{align}
> > \int_{0}^{\delta} |D_{N}(t)| \, dt &  =\int_{0}^{\delta} \left| \frac{\sin\left( \frac{2N+1}{2} \right)t}{\sin t/2} \right|  \, dt \\
> >  &  \geqslant  2\int_{0}^{\delta} \left| \frac{\sin\left( \frac{2N+1}{2} \right)t}{t} \right|  \, dt \\
> >  & = \int_{0}^{\delta(2N+1)/2} \left| \frac{\sin s}{s} \right|  \, ds \\
> >  & \geqslant \int_{0}^{n\pi} \left| \frac{\sin s}{s} \right|   \, ds & n=\lfloor \delta(2N+1)/2\pi \rfloor \to \infty \text{ as }N\to \infty \\
> >  &   \geqslant \sum_{k=1}^{n}\frac{1}{k} \left( \frac{1}{\pi}\int_{(k-1)\pi}^{k\pi}\left| \sin s \right|   \, ds \right) \\
> >  & = \frac{2}{\pi}\sum_{k=1}^{n} \frac{1}{k}\to \infty\text{ as }n\to \infty.
> > \end{align}
> > $$
> > 
> 

^d14b4a


Define $T_{N}:(C^{0}[0, 2\pi], \lVert \cdot \rVert_{\infty})\to \mathbb{C}$ by $f\mapsto(S_{N}f)(0)$. $T_{N}$ is linear. 

> [!Lemma]
> $$
> \begin{align}
> \lVert T_{N} \rVert =\frac{1}{2\pi}\int_{0}^{2\pi} |D_{N}(t)| \, dt. 
> \end{align}
> $$
> 
> > [!Proof]-
> > 
> > Denote $1/2\pi\,\int_{0}^{2\pi} |D_{N}(s)| \, ds$ by $M$. 
> > $$
> > \begin{align}
> > |T_{N}f| & =\left| \frac{1}{2\pi}\int_{0}^{2\pi} D_{N}(-s)f(s) \, dt  \right|  \\
> >  & \leqslant \frac{1}{2\pi}\int_{0}^{2\pi} \left| D_{N}(s)f(s) \right|  \, ds \\
> >   & \leqslant \frac{\lVert f \rVert _{\infty}}{2\pi}\int_{0}^{2\pi} |D_{N}(s)| \, ds  \\
> > \end{align}
> > $$
> > $$
> >    \implies \lVert T_{N} \rVert \leqslant M.
> > $$
> > For $n=1, 2, \dots$, define
> > $$
> > g_{n}(t):= \frac{D_{N}(t)}{\sqrt{ D_{N}^{2}(t)+1/n^{2}}}.
> > $$
> > Note that 
> > 1. $g_{n}\in C^{0}[0, 2\pi]$,
> > 2. $|g_{n}(t)|< 1$ for all $t\in[0, 2\pi]$, and
> > 3. $\{ g_{n}(t) \}_{n=1}^{\infty}\to D_{N}(t)/|D_{N}(t)|$ for all $t\in[0, 2\pi]$.
> > 
> > By [[LEC PROB 10#^f84359]], 
> > $$
> > \begin{align}
> > \lim_{ n \to \infty } \int_{0}^{2\pi} D_{N}(s)g_{n}(s) \, ds =\int_{0}^{2\pi} |D_{N}(s)| \, ds.
> > \end{align}
> > $$
> > Thus, $\lim_{ n \to \infty }|T_{N}g_{n}|=M$. 
> > 
> > Now, given any $\epsilon> 0$, there exists $n$ such that $|T_{N}g_{n}|> M-\epsilon$. Since $\lVert g_{n} \rVert_{\infty}< 1$ for all $n$, we have $|T_{N}g_{n}|/\lVert g_{n} \rVert_{\infty}> M-\epsilon$. Therefore, $\lVert T_{N} \rVert=M$.
> 

[[#^d14b4a]] tells us that $\lVert T_{N} \rVert\to \infty$ as $N\to \infty$. The following proposition follows immediately from [[LEC ANA2 10#^90f996]].2. 

> [!Proposition]
> $$
> \left\{ f\in C^{0}[0, 2\pi]:\sup_{N\in \mathbb{N}}|(S_{N}f)(0)|=\infty \right\} 
> $$
> is a dense $G_{\delta}$ subset of $C^{0}[0, 2\pi]$.

So, there exists a dense subset of $C^{0}[0, 2\pi]$ for which the Fourier series diverges at $0$! Moreover, we can translate this set to obtain a dense subset for which the Fourier series diverges at any $a\in[0, 2\pi]$: for $g(x)=f(x-a)$, 
$$
\begin{align}
(S_{N}g)(t) & = \frac{1}{2\pi}\int_{0}^{2\pi} D_{N}(t-s)f(s-a) \, ds  \\
 & =\frac{1}{2\pi}\int_{a}^{2\pi+a} D_{N}((t-a)-u)f(u) \, du  \\
 & =\frac{1}{2\pi}\int_{0}^{2\pi} D_{N}((t-a)-u)f(u) \, du  \\
 & =(S_{N}f)(t-a),
\end{align}
$$
so if $|(S_{N}f)(0)|$ diverges, $|(S_{N}g)(a)|$ will too.


[^1]: Take $f(2\pi)=1$, if you'd like; it doesn't matter.

[^2]: Vasanth claimed in class that all Riemann integrable functions on $[0, 2\pi]$ are in $L^{2}[0, 2\pi]$ - this is incorrect, with $1/\sqrt{ x }$ being a counterexample. All square Riemann integrable functions on $[0, 2\pi]$ are in $L^{2}[0, 2\pi]$. 
