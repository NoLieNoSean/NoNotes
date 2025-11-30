---
id: "359"
date: 2025-11-19
time: 15:43
tags:
  - ANA2
  - Lecture
---
> [!Proposition]
> Let $K\subseteq L^{2}[-\pi, \pi]$ be compact. Then
> $$
> \lim_{ |n| \to \infty } \sup_{f\in K}|\hat{f}_{n}|=0.
> $$
> 
> > [!Proof]-
> > 
> > We will denote $\hat{f}_{n}$ by $\hat{f}(n)$ for national convenience. Let $\epsilon> 0$. Use totally boundedness of $K$ to write $K\subseteq \bigcup_{i=1}^{n}B(f_{i}, \epsilon)$. There exists $N_{i}$ such that $|\hat{f}_{i}(n)|<\epsilon$ for $n\geqslant N_{i}$; let $N=\max N_{i}$. For $f\in K$, and $n\geqslant N$, 
> > $$
> > \begin{align}
> > |\hat{f}(n) | & \leqslant |\hat{f}(n)-\hat{f}_{i}(n)|+|\hat{f}_{i}(n)| \\
> >  & = |(\widehat{f-f_{i}})(n)|+|\hat{f}_{i}(n)| \\
> >  & = \lVert \widehat{f-f_{i}} \rVert _{2}+|\hat{f}_{i}(n)| \\
> >  & =\lVert f-f_{i} \rVert _{2}+|\hat{f}_{i}(n)| \\
> >  & \leqslant 2\epsilon ,
> > \end{align}
> > $$
> > where the fourth equality follows from [[LEC ANA2 17#^d05d4c]]. 
> 



---

> [!Lemma]
> If $S\subseteq \ell_{2}(\mathbb{Z})$ is compact, then $\{ \sup_{s\in S}s_{i} \}\to 0$. 


[!Exercise]
Let $f\in C^{0}[-\pi, \pi]$. 
$$
\Delta_{f}(t):=\sup_{s, r\in[-\pi, \pi], |s-r|< t}|f(s)-f(r)|.
$$
Assume
$$
\int_{-\pi}^{\pi} \frac{\Delta_{f}(t)}{|t|} \, dt< \infty.
$$
Prove that $S_{N}f\to f$ uniformly. 

[Proof]-

We will mimic the proof of [[LEC ANA2 18#^8d8cda]]. 

$$
\begin{align}
|(S_{N}f)(t_{0})-f(t_{0})| & =\frac{1}{2\pi}\left| \int_{-\pi}^{\pi} D_{N}(t-t_{0})f(t) \, dt-\int_{-\pi}^{\pi} D_{N}(t)f(t_{0}) \, dt    \right|  \\
 & =\frac{1}{2\pi}\left| \int_{-\pi}^{\pi} D_{N}(t)f(t+t_{0}) \, dt-\int_{-\pi}^{\pi} D_{N}(t)f(t_{0}) \, dt    \right| \\
 & = \frac{1}{2\pi}  \left| \int_{-\pi}^{\pi} \left( \frac{\sin{(N+1/2)t}}{\sin t/2} \right)(f(t+t_{0})-f(t_{0})) \, dt \right|  \\
 & \leqslant \frac{1}{2\pi} \left[  \underbrace{ \int_{-\delta}^{\delta} \frac{|f(t+t_{0})-f(t_{0})|}{|\sin t/2|} \, dt }_{ =:\,A^{\delta}(t_{0}) }+ \underbrace{ \left|\int_{[-\delta, \delta]^{c}} \left( \frac{\sin{(N+1/2)t}}{\sin t/2} \right)(f(t+t_{0})-f(t_{0}))\,dt \right| }_{ =:\,B^{\delta}_{N}(t_{0})  } \right] 
\end{align}
$$
Define $M=\sup \{ (t/2)/(\sin(t/2)) : t\in[-\pi, \pi] \}$. Then, $|\sin(t/2)|\geqslant |t|/2M$. 
$$
\begin{align}
A^{\delta}(t_{0})\leqslant 2M\int_{-\delta}^{\delta} \frac{|f(t+t_{0})-f(t_{0})|}{|t|} \, dt\leqslant 2M\int_{-\delta}^{\delta} \frac{\Delta_{f}(t)}{|t|} \, dt \to 0\quad \text{as}\quad \delta\to 0. 
\end{align}
$$
Now, consider the family of functions $\mathcal{F}=\{ f(t+t_{0})-f(t_{0}): t_{0}\in[-\pi, \pi] \}$. Denote $f(t+t_{0})-f(t_{0})$ by $f_{t_{0}}(t)$. 
1. $\mathcal{F}$ is clearly bounded by $2\lVert f \rVert_{\infty}$. 
2. For $\epsilon> 0$, and $\delta> 0$ be chosen by the uniform continuity of $f$. Then, if $|t-t'|<\delta$, $|f(t+t_{0})-f(t'+t_{0})|<\epsilon$ for all $t_{0}$. Thus, $\mathcal{F}$ is [[LEC ANA2 7#^4d28b7|equicontinuous]]. 
3. If $\{f_{t_{k}} \}_{k=1}^{\infty}\subseteq \mathcal{F}$ is a Cauchy sequence, let $t_{0}$ be a limit point of $\{ t_{k} \}_{k=1}^{\infty}\subseteq S_{1}$. For $\epsilon> 0$, choose $N$ such that $|t_{0}-t_{k}|<\delta$ for all $k\geqslant N$, where $\delta$ is chosen by the uniform continuity of $f$. Then, for all $k\geqslant N$, $|(f(t+t_{0})-f(t+t_{k}))+(f(t_{k})-f(t_{0}))|\leqslant 2\epsilon$ for all $t\in[-\pi, \pi]$. Thus, $\{ f_{t_{k}} \}_{k=1}^{\infty}\rightrightarrows f_{t_{0}}$. 

By [[LEC ANA2 7#^d4059b]], $\mathcal{F}$ is compact. As before, write:
$$
\begin{align}
B^{\delta}_{N}(t_{0}) & =\left| \int_{[-\delta, \delta]^{c}} \underbrace{ \left( \frac{f_{t_{0}}(t)\cos t/2}{\sin t/2} \right) }_{ }\sin Nt\,dt+\int_{[-\delta, \delta]^{c} }\underbrace{ f_{t_{0}}(t)}_{  }\cos Nt \,dt \right|.
\end{align}
$$






---

# Convolution

For $f, g\in C(S_{1})$, define
$$
(f\star g)(t):=\frac{1}{2\pi}\int_{0}^{2\pi} f(t-s)g(s) \, ds=\frac{1}{2\pi}\int_{0}^{2\pi} f(s)g(t-s) \, ds.  
$$
